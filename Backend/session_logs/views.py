from django.utils import timezone

from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import SessionLog
from .serializers import SessionLogSerializer


class SessionLogViewSet(ModelViewSet):

    serializer_class = SessionLogSerializer

    permission_classes = [
        IsAuthenticated
    ]

    def get_queryset(self):
        print("=" * 50)
        print("USER:", self.request.user)
        print("AUTH:", self.request.auth)
        print(
            "AUTH HEADER:",
            self.request.headers.get(
                "Authorization"
            )
        )
        print("=" * 50)

        return SessionLog.objects.filter(
            user=self.request.user
        )

    def perform_create(
        self,
        serializer
    ):
        serializer.save(
            user=self.request.user
        )

    @action(
        detail=True,
        methods=["post"]
    )
    def start(self, request, pk=None):

        session = self.get_object()

        if session.status == "COMPLETED":
            return Response(
                {
                    "error":
                    "Completed sessions cannot be restarted."
                },
                status=400
            )

        if session.status == "RUNNING":
            return Response(
                {
                    "error":
                    "Session is already running."
                },
                status=400
            )

        session.started_at = timezone.now()
        session.status = "RUNNING"

        session.save()

        serializer = self.get_serializer(
            session
        )

        return Response(
            serializer.data
        )

    @action(
        detail=True,
        methods=["post"]
    )
    def stop(self, request, pk=None):

        session = self.get_object()

        if not session.started_at:
            return Response(
                {
                    "error":
                    "Session has not been started."
                },
                status=400
            )

        if session.status != "RUNNING":
            return Response(
                {
                    "error":
                    "Session is not running."
                },
                status=400
            )

        session.ended_at = timezone.now()

        duration = (
            session.ended_at
            - session.started_at
        )

        session.duration_seconds = int(
            duration.total_seconds()
        )

        session.status = "COMPLETED"

        session.save()

        serializer = self.get_serializer(
            session
        )

        return Response(
            serializer.data
        )