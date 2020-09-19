from django.urls import path

from .views import ProfileAPI, VideoAPI,CourseAPI, apiListView

urlpatterns = [
    path('', apiListView),

    path('profile/', ProfileAPI.as_view()),
    # path('profile/<int:pk>', ProfileView.as_view()),

    path('video/', VideoAPI.as_view()),
    # path('video/<int:pk>', VideoView.as_view()),

    path('course/', CourseAPI.as_view()),
    # path('course/<int:pk>', CourseView.as_view()),
]