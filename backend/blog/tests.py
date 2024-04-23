from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Blog
from .serializers import BlogSerializer

User = get_user_model()

class BlogTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(email='user@user.com', password='12345')
        self.client.force_authenticate(user=self.user)
        self.blog = Blog.objects.create(title='Test Blog', content='This is a test blog', author=self.user)
    
    def test_list_blogs(self):
        url = reverse('blog-read')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)  # Assuming only one blog in the database
    
    def test_create_blog(self):
        url = reverse('blog-list-create')
        data = {'title': 'New Blog', 'content': 'This is a new blog'}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Blog.objects.count(), 2)  # Assuming only one blog initially
    
    def test_retrieve_blog(self):
        url = reverse('blog-detail', kwargs={'slug': self.blog.slug})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], self.blog.title)
    
    def test_update_blog(self):
        url = reverse('blog-detail', kwargs={'slug': self.blog.slug})
        data = {'title': 'Updated Title'}
        response = self.client.patch(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], 'Updated Title')
    
    def test_delete_blog(self):
        url = reverse('blog-detail', kwargs={'slug': self.blog.slug})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Blog.objects.count(), 0)
