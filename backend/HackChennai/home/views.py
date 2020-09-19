from django.shortcuts import render
from rest_framework.response import Response

from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .serializers import ProfileSerializer, VideoSerializer, CourseSerializer
from .models import Profile, Course, Video

from django.http import HttpResponse,JsonResponse
from rest_framework.views import APIView

def apiListView(request):
    pass

class ProfileAPI(APIView):

    def get(self, request, *args, **kwargs):
        user_id = request.query_params.get("userId")
        serializar = ProfileSerializer(Profile.objects.all(), many=True)
        return JsonResponse({'userId': user_id, "data": serializar.data}, safe=False)
    

class ProfileView(RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class VideoListCreateView(ListCreateAPIView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

class VideoAPI(APIView):

    def get(self, request, *args, **kwargs):
        data = request.query_params
        user_id = data.get("userId")
        queryset = Video.objects.all()
        if 'videoId' in data:
            queryset = Video.objects.get(id = data["videoId"])

        serializar = VideoSerializer(queryset, many=True)
        return JsonResponse({'userId': user_id, "data": serializar.data}, safe=False)


class CourseAPI(APIView):

    def get(self, request, *args, **kwargs):
        data = request.query_params
        user_id = data.get("userId")
        queryset = Course.objects.all()
        serializar = CourseSerializer(queryset, many=True)
        if 'courseId' in data:
            try:
                queryset = Course.objects.get(id = data["courseId"])
                serializar = CourseSerializer(queryset)
            except:
                return JsonResponse({'userId': user_id, "data": "No Entry Found"}, safe=False)

        
        return JsonResponse({'userId': user_id, "data": serializar.data}, safe=False)


