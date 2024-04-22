from django.db import models
from django.utils.text import slugify
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class BlogPostManager(models.Manager):
    def published(self):
        return self.filter(published=True)

class Tag(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self) -> str:
        return self.name

class Blog(models.Model):
    class Meta:
        ordering = ['-created_at']
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, max_length=200, blank=True)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    published = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(Tag, related_name='blog_posts')

    # To retrive only the published blogs
    objects = BlogPostManager()
    
    def __str__(self) -> str:
        return self.title
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)