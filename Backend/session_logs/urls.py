from rest_framework.routers import DefaultRouter

from .views import SessionLogViewSet

router = DefaultRouter()

router.register(
    "",
    SessionLogViewSet,
    basename="sessions"
)

urlpatterns = router.urls