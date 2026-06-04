from rest_framework import serializers

from .models import Project
from workspaces.models import Workspace


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project

        fields = [
            "id",
            "workspace",
            "name",
            "description",
            "status",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
        ]

    def validate_name(self, value):
        value = value.strip()

        if len(value) < 3:
            raise serializers.ValidationError(
                "Project name must be at least 3 characters."
            )

        return value

    def validate_workspace(self, workspace):
        request = self.context["request"]

        if workspace.owner != request.user:
            raise serializers.ValidationError(
                "You do not own this workspace."
            )

        return workspace