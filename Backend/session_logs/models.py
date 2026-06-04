from django.db import models
from django.contrib.auth.models import User


class SessionLog(models.Model):

    STATUS_CHOICES = [
        ("IDLE", "Idle"),
        ("RUNNING", "Running"),
        ("COMPLETED", "Completed"),
    ]

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="session_logs"
    )

    title = models.CharField(
        max_length=255
    )

    notes = models.TextField(
        blank=True,
        null=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="IDLE"
    )

    started_at = models.DateTimeField(
        blank=True,
        null=True
    )

    ended_at = models.DateTimeField(
        blank=True,
        null=True
    )

    duration_seconds = models.IntegerField(
        default=0
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return self.title