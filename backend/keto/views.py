from django.shortcuts import render
from .models import Meal
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import MealSerializer, UserSerializer, UserSerializerWithToken

class MealView(viewsets.ModelViewSet):
    serializer_class = MealSerializer
    # should refer to all meals "owned" by a particular user if logged in
    # queryset = Meal.objects.filter(appUser=self.request.user).order_by("meal_date")
    queryset = Meal.objects.all()

@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
