from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import Task
from .serializers import TaskSerializer

class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "user": str(request.user),
            "user_id": request.user.id,
        })
    

class TaskListCreateView(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(
            user=self.request.user
        ).order_by("-created_at")

    def post(self, request, *args, **kwargs):
        print("=" * 50)
        print("USER:", request.user)
        print("AUTH:", request.auth)
        print("HEADERS:", request.headers.get("Authorization"))
        print("=" * 50)

        return super().post(
            request,
            *args,
            **kwargs
        )

    def perform_create(self, serializer):
        serializer.save(
            user=self.request.user
        )


class TaskDetailView(
    generics.RetrieveUpdateDestroyAPIView
):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Task.objects.filter(
            user=self.request.user
        )