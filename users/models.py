# -*- coding: utf-8 -*-
# Create your models here.
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
    PermissionsMixin

class MyUserManager(BaseUserManager):
    def _create_user(self, email, password, user_name, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    """
     Model that represents an user.
     """
    user_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'



class UserProfile(models.Model):
    user = models.ForeignKey(User, unique=True)
    address = models.CharField(max_length=140)
    image = models.ImageField(upload_to='thumbpath', blank=True)