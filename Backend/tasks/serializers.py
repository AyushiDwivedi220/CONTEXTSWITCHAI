from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    age = serializers.ReadOnlyField()

    class Meta:
        model = Task

        fields = [
            "id",
            "user",
            "title",
            "description",
            "priority",
            "status",
            "due_date",
            "created_at",
            "updated_at",
            "age",
        ]

        read_only_fields = [
            "id",
            "user",
            "created_at",
            "updated_at",
            "age",
        ]