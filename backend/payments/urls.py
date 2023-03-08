from django.urls import path,include
from payments import views



urlpatterns = [
    path('',views.user_payments),
    path('all/',views.get_all_payments),
    path('<int:payment_id>/',views.payment_list),
    path('<int:pk>/',views.payment_detail)
   
]