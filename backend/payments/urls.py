from django.urls import path,include
from payments import views



urlpatterns = [
    path('',views.payments_list),
    path('', views.add_payment),
    path('<int:pk>/',views.payment_detail)
   
]