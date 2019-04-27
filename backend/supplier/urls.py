from rest_framework.routers import  DefaultRouter
from .views import (RfqSupplierHeaderViewSet, RfqSupplierDetailViewSet,
                    QuotationSupplierHeaderViewSet, QuotationSupplierDetailViewSet)

router = DefaultRouter()
router.register(r'rfq_header',RfqSupplierHeaderViewSet, basename='rfq_header')
router.register(r'rfq_detail',RfqSupplierDetailViewSet, basename='rfq_detail')
router.register(r'quotation_header_supplier',QuotationSupplierHeaderViewSet, basename='quotation_header')
router.register(r'quotation_detail_supplier',QuotationSupplierDetailViewSet, basename='quotation_detail')


urlpatterns = router.urls
