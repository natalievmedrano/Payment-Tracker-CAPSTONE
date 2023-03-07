from rest_framework import serializers
from .models import Payment


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Payment
        fields = ['user', 'month','year','payment_type','payment_amount','payment_due_date', 'verify_payment']
        depth = 1

    username= serializers.SerializerMethodField()
    def get_username(self,payment):
        return payment.user.username