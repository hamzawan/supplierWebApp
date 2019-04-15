from rest_framework.routers import  DefaultRouter
from .views import RfqSupplierHeaderViewSet, RfqSupplierDetailViewSet

router = DefaultRouter()
router.register(r'rfq_header',RfqSupplierHeaderViewSet, basename='rfq_header')
router.register(r'rfq_detail',RfqSupplierDetailViewSet, basename='rfq_detail')


urlpatterns = router.urls
