from django.contrib import admin
from .models import RfqSupplierHeader, RfqSupplierDetail, QuotationHeaderSupplier, QuotationDetailSupplier

admin.site.register(RfqSupplierHeader)
admin.site.register(RfqSupplierDetail)
admin.site.register(QuotationHeaderSupplier)
admin.site.register(QuotationDetailSupplier)
