from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework import viewsets, permissions
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .models import UserWebsite, Category, Brand, Product, Order, OrderItem, Payment
from django.db.models import Q
from .serializers import UserSerializer, CategorySerializer, BrandSerializer, ProductSerializer, OrderSerializer, OrderItemsSerializer, PaymentSerializer

@api_view(['POST'])
def user_create(request):
    serializer = UserSerializer(data=request.data)
    print(serializer)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def user_login(request):
    print("Request Data:", request.data) 
    user_username = request.data.get('user_username')
    password = request.data.get('password')
    print("Username:", user_username) 
    print("Password:", password)  
    
    user = authenticate(username=user_username, password=password)  
    print("Authenticated User:", user) 
    
    if user:
        token, created = Token.objects.get_or_create(user=user)
        return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
    return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['PUT'])
def user_update(request, pk):
    try:
        user = UserWebsite.objects.get(pk=pk)
    except UserWebsite.DoesNotExist:
        return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    serializer = UserSerializer(UserWebsite, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def user_delete(request, pk):
    try:
        user = UserWebsite.objects.get(pk=pk)
    except UserWebsite.DoesNotExist:
        return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    user.delete()
    return Response({'message': 'User deleted'}, status=status.HTTP_204_NO_CONTENT)



class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            self.permission_classes = [permissions.IsAdminUser]
        return super(CategoryViewSet, self).get_permissions()

class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            self.permission_classes = [permissions.IsAdminUser]
        return super(BrandViewSet, self).get_permissions()

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        category_ids = self.request.query_params.getlist('category_ids')
        brand_ids = self.request.query_params.getlist('brand_ids')

        if category_ids:
            queryset = queryset.filter(product_category_id__in=category_ids)
        if brand_ids:
            queryset = queryset.filter(product_barnd_id__in=brand_ids)
        return queryset


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemsSerializer

class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer