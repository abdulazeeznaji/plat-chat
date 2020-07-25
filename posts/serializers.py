from rest_framework import serializers
from posts.models import Posts


class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = '__all__' # all model fields will be included

