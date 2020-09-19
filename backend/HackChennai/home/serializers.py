from rest_framework import serializers

from .models import Profile, Video, Course
from django.contrib.auth.models import User
    
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user', 'profile_pic', 'contact_no']
        depth = 1

class VideoSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Video
        fields = '__all__'
        depth = 1

class CourseSerializer(serializers.ModelSerializer):
    # videos = VideoSerializer(many=True)
    class Meta:
        model = Course
        fields = '__all__'
        depth = 1