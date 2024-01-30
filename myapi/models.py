from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.

class Profile(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    display_name = models.CharField(max_length=200, blank=True, null=True)
    email = models.CharField(max_length=200, blank=True, null=True)
    username = models.CharField(max_length=200, unique=True,default=uuid.uuid4)
    bio = models.CharField(max_length=200, blank=True, null=True)
    followers = models.ManyToManyField('self', related_name='following_profiles', symmetrical=False, blank=True)
    following = models.ManyToManyField('self', related_name='followers_profiles', symmetrical=False, blank=True)
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    cover_image = models.ImageField(upload_to='cover_images/', blank=True, null=True)
    website = models.URLField(max_length=200, blank=True, null=True)
    facebook = models.URLField(max_length=200, blank=True, null=True)
    twitter = models.URLField(max_length=200, blank=True, null=True)
    instagram = models.URLField(max_length=200, blank=True, null=True)
    youtube = models.URLField(max_length=200, blank=True, null=True)
    tiktok = models.URLField(max_length=200, blank=True, null=True)


    def __str__(self):
        return self.username
    
    def get_follower_count(self):
        return self.followers.count()
    
    def get_following_count(self):
        return self.following.count()
    
class Post(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    text = models.CharField(max_length=200, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    profile = models.ForeignKey(Profile, related_name='posts', on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.text
    
class Image(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    image = models.ImageField(upload_to='images/')
    post = models.ForeignKey(Post, related_name='images', on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, related_name='images', on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.image.url
    
class Comment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    text = models.CharField(max_length=200)
    post = models.ForeignKey(Post, related_name='comments', on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, related_name='comments', on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.text

class Like(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    post = models.ForeignKey(Post, related_name='likes', on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, related_name='likes', on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.post.text
    
class Video(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    video = models.FileField(upload_to='videos/')
    post = models.ForeignKey(Post, related_name='videos', on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, related_name='videos', on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.video.url

class Audio(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    audio = models.FileField(upload_to='audios/')
    post = models.ForeignKey(Post, related_name='audios', on_delete=models.CASCADE)
    profile = models.ForeignKey(Profile, related_name='audios', on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.audio.url
