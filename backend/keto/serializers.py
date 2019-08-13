from rest_framework import serializers
from .models import Meal

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = ('id', 'title', 'meal_type', 'meal_date', 'calories', 'protein', 'fat', 'carbs')
