from rest_framework import serializers

from .models import Profile, Video, Course
from django.contrib.auth.models import User
class UserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    
class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = ['user', 'profile_pic', 'contact_no']


class VideoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Video
        fields = '__all__'

class VideoSerializer1(serializers.ModelSerializer):
    title = serializers.CharField()
    description = serializers.CharField()
    time_created = serializers.DateTimeField()
    url = serializers.CharField()
    class Meta:
        model = Video
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    videos = VideoSerializer(many=True)
    class Meta:
        model = Course
        fields = '__all__'