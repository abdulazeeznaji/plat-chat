from rest_framework import serializers
from django.contrib.auth.models import User


class PostsSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('user', 'body')
