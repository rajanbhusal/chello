from django.contrib import admin
from .models import Post, Image, Comment, Like, Video, Audio,Profile

# Register your models here.

admin.site.register(Post)
admin.site.register(Image)
admin.site.register(Comment)
admin.site.register(Like)
admin.site.register(Video)
admin.site.register(Audio)
admin.site.register(Profile)
