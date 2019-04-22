from rest_framework import serializers
from supplier.models import RfqSupplierHeader, RfqSupplierDetail


class RfqSupplierDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = RfqSupplierDetail
        fields = '__all__'


class RfqSupplierHeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = RfqSupplierHeader
        fields = '__all__'
