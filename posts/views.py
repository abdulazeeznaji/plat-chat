from rest_framework.decorators import api_view
from rest_framework.response import Response
from posts.models import Posts


@api_view(['GET'])
def get_posts(request):
    Posts.objects.all()
    return Response({"posts": request.data})

