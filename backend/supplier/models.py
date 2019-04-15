from django.db import models

class RfqSupplierHeader(models.Model):
    rfq_no = models.CharField(max_length = 100)
    _from = models.CharField(max_length = 100)
    attn = models.CharField(max_length = 100)
    follow_up = models.DateField(("Date"),blank=True)
    follow_up_expiry = models.DateField(("Date"),blank=True)
    supplier_id = models.IntegerField()

    def __str__(self):
        return self._from

class RfqSupplierDetail(models.Model):
    item_name = models.CharField(max_length = 100)
    item_description = models.TextField()
    quantity = models.IntegerField()
    remarks = models.CharField(max_length = 100)
    rfq_supplier_id = models.ForeignKey(RfqSupplierHeader, on_delete = models.CASCADE)

    def __str__(self):
        return self.item_name
