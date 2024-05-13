from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import user_create, user_login, user_update, user_delete, CategoryViewSet, BrandViewSet, ProductViewSet
from .views import OrderViewSet, OrderItemViewSet, PaymentViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'brands', BrandViewSet)
router.register(r'products', ProductViewSet, basename='product')
router.register(r'order', OrderViewSet, basename='order')
router.register(r'orderitems', OrderItemViewSet, basename='orderitem')
router.register(r'payments', PaymentViewSet, basename='payments')

urlpatterns = [
    path('user-create/', user_create, name='user-create'),
    path('user-login/', user_login, name='user-login'),
    path('user/<int:pk>/', user_update, name='user-update'),
    path('user/<int:pk>/delete/', user_delete, name='user-delete'),
    path('', include(router.urls)),
]