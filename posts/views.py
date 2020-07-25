from rest_framework.decorators import api_view
from rest_framework.response import Response
from posts.models import Posts
from .serializers import PostsSerializer
from django.http.response import JsonResponse


@api_view(['GET', 'POST', 'DELETE'])
def get_posts(request):
    posts = Posts.objects.all()
    posts_serializer = PostsSerializer(posts, many=True)
    return JsonResponse(posts_serializer.data, safe=False)