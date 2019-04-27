from rest_framework import serializers
from supplier.models import (RfqSupplierHeader, RfqSupplierDetail,
                            QuotationHeaderSupplier, QuotationDetailSupplier)


class RfqSupplierDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = RfqSupplierDetail
        fields = '__all__'


class RfqSupplierHeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = RfqSupplierHeader
        fields = '__all__'


class QuotationSupplierHeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuotationHeaderSupplier
        fields = '__all__'


class QuotationSupplierDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuotationDetailSupplier
        fields = '__all__'
