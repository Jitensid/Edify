from django.shortcuts import render
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .serializers import ProfileSerializer, VideoSerializer, CourseSerializer
from .models import Profile, Course, Video

from django.http import HttpResponse,JsonResponse
from rest_framework.views import APIView
from django.db.models import F
from django.views.decorators.csrf import csrf_exempt

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
    
    def post(self, request, *args, **kwargs):
        data = request.data
        print(data)
        user_id = request.query_params.get("userId")
        try:
            course_id = data.get("courseId")
            title = data.get("title")
            description = data.get("description")
            vfile = data.get("video")
            video = Video.objects.create(title=title, description=description, video=vfile)
            course = Course.objects.get(id=course_id)
            course.videos.add(video)
            return JsonResponse({'userId': user_id, "data": VideoSerializer(video).data }, safe=False)
        except:
            return JsonResponse({'userId': user_id, "data": "Error !!!"}, safe=False)


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


@csrf_exempt
def like(request, **kwargs):			
    if request.method == "POST":
        user_id = request.GET['userId']
        user = User.objects.get(id=user_id)
        try:
            course = Course.objects.get(id=request.POST['courseId'])
            course.liked_by.add(user)
            course.no_of_likes = F('no_of_likes') + 1
            course.save()
            course.refresh_from_db()
            return JsonResponse({'userId': user_id, "likes_count": course.no_of_likes}, safe=False)
        except:
            return JsonResponse({'userId': user_id, "data": "Error !!!"}, safe=False)

@csrf_exempt
def nominate(request, **kwargs):
    if request.method == "POST":
        try:
            user_id = request.GET['userId']
            user = User.objects.get(id=user_id)
            course = Course.objects.get(id=request.POST['courseId'])
            all_courses = Course.objects.filter(skill = course.skill)
            flag = 0
            for c in all_courses:
                if user in c.nominated_by.all():
                    return JsonResponse({'userId': user_id, "data": "Already Nominated!"}, safe=False)
                
            
            course.nominated_by.add(user)
            course.no_of_nominations = F('no_of_nominations') + 1
            course.save()
            course.refresh_from_db()
            return JsonResponse({'userId': user_id, "nomination_count": course.no_of_nominations}, safe=False)
        except Exception as e:
            return JsonResponse({'userId': user_id, "data": str(e)}, safe=False)