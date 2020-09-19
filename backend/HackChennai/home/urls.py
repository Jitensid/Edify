from django.urls import path

from .views import ProfileListCreateView, ProfileView, VideoListCreateView, VideoView, CourseListCreateView, CourseView, apiListView

urlpatterns = [
    path('', apiListView),

    path('profile/', ProfileListCreateView.as_view()),
    path('profile/<int:pk>', ProfileView.as_view()),

    path('video/', VideoListCreateView.as_view()),
    path('video/<int:pk>', VideoView.as_view()),

    path('course/', CourseListCreateView.as_view()),
    path('course/<int:pk>', CourseView.as_view()),
]