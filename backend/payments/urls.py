from django.urls import path,include
from payments import views



urlpatterns = [
    path('',views.payments_list),
   
]