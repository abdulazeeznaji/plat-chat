"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework_jwt.views import obtain_jwt_token
from django.views.decorators.cache import cache_page
from django.conf import settings
from django.views.decorators.cache import cache_page
from .views import IndexView

urlpatterns = [
    url('users/', include('users.urls')),
    url(r'^admin/', admin.site.urls),
    url('token-auth/', obtain_jwt_token),
    url('posts/', include('posts.urls')),
    url(r'^', cache_page(settings.PAGE_CACHE_SECONDS)(IndexView.as_view()), name='index'),

]
