from rest_framework.decorators import api_view
from rest_framework.response import Response
from posts.models import Posts
from .serializers import PostsSerializer
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status


@api_view(['GET', 'POST', 'DELETE'])
def get_posts(request):
    if request.method == 'GET':
        posts = Posts.objects.all()
        posts_serializer = PostsSerializer(posts, many=True)
        return JsonResponse(posts_serializer.data, safe=False)

    elif request.method == 'POST':
        posts_data = JSONParser().parse(request)
        post_serializer = PostsSerializer(data=posts_data)
        posts = Posts.objects.all()
        posts_serializer = PostsSerializer(posts, many=True)

        if post_serializer.is_valid():
            post_serializer.save()
            return JsonResponse(posts_serializer.data,  safe=False)
        return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def post_detail(request, pk):
    try:
        post = Posts.objects.get(pk=pk)
    except Posts.DoesNotExist:
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        post.delete()
        posts = Posts.objects.all()
        posts_serializer = PostsSerializer(posts, many=True)

        return JsonResponse(posts_serializer.data, safe=False)
