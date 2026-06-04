from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import Project
from .serializers import ProjectSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Project.objects.filter(
            workspace__owner=self.request.user
        )

        workspace_id = self.request.query_params.get(
            "workspace"
        )

        if workspace_id:
            queryset = queryset.filter(
                workspace_id=workspace_id
            )

        return queryset