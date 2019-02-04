from django.urls import path, re_path
from django.conf.urls import url
from .views import index, room


app_name = 'chat'

urlpatterns = [
	re_path(r'^$', index, name='index'),
    re_path(r'^(?P<room_name>[^/]+)/$', room, name='room'),]
