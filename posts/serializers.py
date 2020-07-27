from rest_framework import serializers
from posts.models import Posts, Comments
from rest_framework.serializers import SerializerMethodField


class CommentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Posts
        fields = ('id', 'body')


class PostsSerializer(serializers.ModelSerializer):
    comments = SerializerMethodField('get_items')

    class Meta:
        model = Posts
        fields = ('id', 'user', 'body', 'comments')

    def get_items(self, post):
        items = Comments.objects.filter(post=post.id)
        serializer = CommentsSerializer(instance=items, many=True)
        return serializer.data




