from rest_framework import serializers
from .models import SessionLog


class SessionLogSerializer(
    serializers.ModelSerializer
):
    class Meta:
        model = SessionLog

        fields = [
            "id",
            "user",
            "title",
            "notes",
            "status",
            "started_at",
            "ended_at",
            "duration_seconds",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "user",
            "duration_seconds",
            "created_at",
            "updated_at",
        ]