from django.urls import path,include
from payments import views



urlpatterns = [
    path('',views.payments_list),
    path('', views.user_payments),
    path('<int:pk>/',views.payment_detail)
   
]