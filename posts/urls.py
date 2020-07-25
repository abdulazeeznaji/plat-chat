from django.conf.urls import url
from posts import views


urlpatterns = [
    url(r'', views.get_posts),

]