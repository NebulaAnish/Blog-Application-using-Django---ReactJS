from django.contrib import admin
from .models import Tag, Blog

class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'published', 'created_at']
    