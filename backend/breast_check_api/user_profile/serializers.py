from rest_framework import serializers
from django.contrib.auth.models import User
from user_profile.models import Comment

class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Comment
        fields = ['id', 'title', 'body', 'owner']

class UserSerializer(serializers.ModelSerializer):
    comments = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'comments']