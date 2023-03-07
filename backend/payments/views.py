from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PaymentSerializer
from .models import Payment
# Create your views here.


@api_view(['GET'])
def payments_list(request):
    payments= Payment.objects.all()

    serializer= PaymentSerializer(payments, many= True)

    
    return Response(serializer.data)
