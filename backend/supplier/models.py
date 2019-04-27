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

class QuotationHeaderSupplier(models.Model):
    our_ref = models.CharField(max_length=100)
    supplier_name = models.CharField(max_length=100)
    date = models.DateField(("Date"),auto_now_add=True)
    attn = models.CharField(max_length=100)
    _from = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    prc_basis = models.CharField(max_length=100)
    yrref = models.CharField(max_length=100)
    leadtime = models.CharField(max_length=100)
    validity = models.CharField(max_length=100)
    payment = models.CharField(max_length=100)
    remarks = models.CharField(max_length=100)
    follow_up = models.DateField("Follow Up",blank=True)
    show_notification = models.CharField(max_length=100)
    supplier_id = models.IntegerField()
    company_id = models.IntegerField()


class QuotationDetailSupplier(models.Model):
    item_name = models.CharField(max_length=100)
    item_description = models.CharField(max_length=100)
    quantity = models.IntegerField()
    unit = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    # quotation_header_id = models.ForeignKey(QuotationHeaderSupplier,on_delete=models.CASCADE)
