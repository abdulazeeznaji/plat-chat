from django.db import models
from users.models import User


class Posts(models.Model):
    class Meta:
        db_table = "posts"

    user = models.ForeignKey(User)
    body = models.CharField(max_length=140)


class Comments(models.Model):
    class Meta:
        db_table = "comments"

    post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    body = models.CharField(max_length=140)

