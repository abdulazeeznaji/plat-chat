from django.conf.urls import url, include

from . import views
from .views import current_user, UserList


urlpatterns = [
    url('current_user/', current_user),
    url('users/', UserList.as_view())
]