from django.conf.urls import url
from .views import get_posts


urlpatterns = [
    url('', get_posts)
]