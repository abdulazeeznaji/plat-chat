# -*- coding: utf-8 -*-
# Create your models here.
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
    PermissionsMixin
from django.utils.translation import ugettext_lazy as _


class MyUserManager(BaseUserManager):
    def _create_user(self, email, password, user_name, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(email=email, user_name=user_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, user_name='',  **extra_fields):
        return self._create_user(email, password, user_name,
                                 **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    """
     Model that represents an user.
     """
    is_staff = models.BooleanField(_('staff status'), default=False)
    user_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    objects = MyUserManager()

    def __str__(self):
        """
        Unicode representation for an user model.

        :return: string
        """
        return self.email

    def get_full_name(self):
        """
        Return the first_name plus the last_name, with a space in between.

        :return: string
        """
        return "{0} {1}".format(self.user_name, self.user_name)

    def get_short_name(self):
        """
        Return the first_name.

        :return: string
        """
        return self.user_name


class UserProfile(models.Model):
    user = models.ForeignKey(User, unique=True)
    address = models.CharField(max_length=140)
    image = models.ImageField(upload_to='thumbpath', blank=True)