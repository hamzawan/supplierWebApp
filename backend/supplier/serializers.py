from rest_framework import serializers
from supplier.models import RfqSupplierHeader, RfqSupplierDetail


class RfqSupplierDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = RfqSupplierDetail
        fields = '__all__'


class RfqSupplierHeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = RfqSupplierHeader
        fields = ('rfq_no','_from','attn','follow_up','follow_up_expiry','supplier_id')


# class RfqTimelineSerializer(serializers.Serializer):
#     header = RfqSupplierDetailSerializer(many=True)
#     detail = RfqSupplierDetailSerializer(many=True)
