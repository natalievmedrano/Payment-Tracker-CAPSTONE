from django.urls import path,include
from payments import views



urlpatterns = [
    path('payments/',views.payments_list),
   
]