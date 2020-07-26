from django.conf.urls import url
from posts import views


urlpatterns = [
    url(r'^(?P<pk>[0-9]+)$', views.post_detail),
    url(r'', views.get_posts),

]