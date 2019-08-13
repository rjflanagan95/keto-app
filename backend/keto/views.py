from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MealSerializer
from .models import Meal

class MealView(viewsets.ModelViewSet):
    serializer_class = MealSerializer
    # should refer to all meals "owned" by a particular user if logged in
    # queryset = Meal.objects.filter(appUser=self.request.user).order_by("meal_date")
    queryset = Meal.objects.all()
