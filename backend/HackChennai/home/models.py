from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.
# 3rd party package for phonenumber (django-phonenumber-field)
from phonenumber_field.modelfields import PhoneNumberField

class Profile(models.Model):
    """
    Profile for Student user
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField()
    contact_no = PhoneNumberField()
    
    def __str__(self):
        return str(self.user.username) + "Profile"

class Video(models.Model):
    title = models.CharField(max_length = 70, blank = False)
    description = models.TextField()
    time_created = models.DateTimeField(default=timezone.localtime().now)
    url = models.TextField()

    def __str__(self):
        return "Video" + str(self.id)

class Course(models.Model):
    """
    founder - founder of the course
    language - language of the course
    """

    skill_choices = [
        ('Dance', 'Dance'),
        ('Singing', 'Singing')
    ]

    langauge_choices = [
        ('English','English'),
        ('Hindi','Hindi'),
        ('Marathi','Marathi'),
        ('Gujarati','Gujarati')
    ]

    founder = models.ForeignKey(User, on_delete=models.CASCADE)
    videos = models.ManyToManyField(Video)
    description = models.TextField()
    upvotes = models.IntegerField(default=0) # For Certification Purpose
    nominations = models.IntegerField(default=0) # used for Govt Schemes
    skill = models.CharField(choices = skill_choices, max_length = 50)
    language = models.CharField(choices = langauge_choices,max_length = 100)

    def __str__(self):
        return "Course " + str(self.id)