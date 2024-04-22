from django.contrib.auth import get_user_model
from django.test import TestCase

class UsersManagersTests(TestCase):
    """
    Tests by creating users using these functions in a redundant database.
    """
    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(email='normaluser@email.com', password='user')
        self.assertEqual(user.email, "normaluser@email.com")
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

        try:
            # Username is none for AbstractUser
            self.assertIsNone(user.username)
        except AttributeError:
            pass
        
        with self.assertRaises(TypeError):
            User.objects.create_user()
        with self.assertRaises(TypeError):
            User.objects.create_user(email="")
        with self.assertRaises(ValueError):
            User.create_user(email="", password="user")
        
    def test_create_superuser(self):
        User = get_user_model()
        admin_user = User.objects.create_superuser(email="superuser@email.com", password='user')
        self.assertEqual(admin_user.email, "superuser@email.com", password='user')
        self.assertTrue(admin_user.is_active)
        self.assertTrue(admin_user.is_staff)
        self.assertTrue(admin_user.is_superuser)

        try:
            self.assertIsNone(admin_user.username)
        except AttributeError:
            pass
        
        with self.assertRaises(ValueError):
            User.objects.create_superuser(
                email='superuser@email.com',
                password='foo',
                is_superuser=False
            )

