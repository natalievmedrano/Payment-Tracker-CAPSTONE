from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .serializers import PaymentSerializer
from .models import Payment
from rest_framework import status
# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def payments_list(request):
    payments = Payment.objects.all()
    serializer = PaymentSerializer(payments, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)



@api_view([ 'POST'])
@permission_classes([IsAuthenticated])
def user_payments(request):
    if request.method == 'POST':
        serializer = PaymentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    








@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def payment_list(request,payment_id):
    payment = get_object_or_404(Payment, id=payment_id)
    if request.method == 'GET':
        serializer = PaymentSerializer(payment, data=request.data)
        serializer= PaymentSerializer(payment)
        return Response(serializer.data)
    elif request.method == 'PUT':
         serializer = PaymentSerializer(payment, data=request.data)
         serializer.is_valid(raise_exception=True)
         serializer.save()
         return Response(serializer.data)
    elif request.method == 'DELETE':
         payment.delete()
         return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET','PUT', 'DELETE'])
def payment_detail(request,pk):
     payment= get_object_or_404(Payment, pk=pk)
     if request.method == 'GET':
          serializer= PaymentSerializer(payment)
          return Response(serializer.data)
     elif request.method == 'PUT':
          serializer= PaymentSerializer(payment, data=request.data)
          serializer.is_valid(raise_exception=True)
          serializer.save()
          return Response(serializer.data)
     elif request.method == 'DELETE':
          payment.delete()
          return Response(status=status.HTTP_204_NO_CONTENT)