from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from .models import Post, Image, Comment, Like, Video, Audio,Profile
from .serializers import PostSerializer, ImageSerializer, CommentSerializer, LikeSerializer, VideoSerializer, AudioSerializer,UserSerializer
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

class HomeView(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)

    
class LogOutView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['POST'])
def create_post(request):
    text = request.data.get('text')
    image = request.data.get('image')
    video = request.data.get('video')
    audio = request.data.get('audio')
    

    post_serializer = PostSerializer(data={'text': text})
    if post_serializer.is_valid():
        post = post_serializer.save()
        if image:
            image_serializer = ImageSerializer(data={'image': image, 'post': post.id})
            if image_serializer.is_valid():
                image_serializer.save()
        
        if video:
            video_serializer = VideoSerializer(data={'video': video, 'post': post.id})
            if video_serializer.is_valid():
                video_serializer.save()
        
        if audio:
            audio_serializer = AudioSerializer(data={'audio': audio, 'post': post.id})
            if audio_serializer.is_valid():
                audio_serializer.save()
        
        post_with_media = PostSerializer(post)
        
        return Response(post_with_media.data)
    else:
        return Response(post_serializer.errors)
    
@api_view(['GET'])
def get_posts(request):
    posts = Post.objects.all()
    post_serializer = PostSerializer(posts, many=True)
    return Response(post_serializer.data)

