from django.db import models
from authentication.models import User

# Create your models here.

class Payment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    month = models.CharField(max_length=255)
    year = models.IntegerField()
    payment_type = models.CharField(max_length=255)
    payment_amount = models.DecimalField(max_digits=8, decimal_places=2)
    payment_due_date = models.DateField()
    verify_payment = models.CharField(max_length=255)
   
