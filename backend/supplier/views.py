from rest_framework import viewsets
from supplier.models import (RfqSupplierHeader, RfqSupplierDetail,
                            QuotationHeaderSupplier, QuotationDetailSupplier)
from .serializers import (RfqSupplierHeaderSerializer, RfqSupplierDetailSerializer,
                        QuotationSupplierHeaderSerializer, QuotationSupplierDetailSerializer)
from collections import namedtuple

class RfqSupplierHeaderViewSet(viewsets.ModelViewSet):
    queryset = RfqSupplierHeader.objects.all()
    serializer_class = RfqSupplierHeaderSerializer

class RfqSupplierDetailViewSet(viewsets.ModelViewSet):
    queryset = RfqSupplierDetail.objects.all()
    serializer_class = RfqSupplierDetailSerializer

class QuotationSupplierHeaderViewSet(viewsets.ModelViewSet):
    queryset = QuotationHeaderSupplier.objects.all()
    serializer_class = QuotationSupplierHeaderSerializer

class QuotationSupplierDetailViewSet(viewsets.ModelViewSet):
    queryset = QuotationDetailSupplier.objects.all()
    serializer_class = QuotationSupplierDetailSerializer
