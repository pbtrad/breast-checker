from rest_framework import serializers
from django.contrib.auth.models import User
from user_profile.models import Comment
from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model
from rest_framework.validators import UniqueValidator

UserModel = get_user_model()

class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Comment
        fields = ['id', 'title', 'body', 'owner']
comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
            required=True,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    username = serializers.CharField(
            max_length=32,
            validators=[UniqueValidator(queryset=User.objects.all())]
            )
    password = serializers.CharField(min_length=8, write_only=True)
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'],
             validated_data['password'])
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'comments')
        

class RegisterSerializer(serializers.ModelSerializer):
   class Meta:
      model = User
      fields = ('id', 'username', 'email', 'password')
      extra_kwargs = {'password' : {'write_only': True}}
   def create(self, validated_data):
      user = User.objects.create_user(validated_data['username'],
         validated_data['email'], validated_data['password']
      )
      return user