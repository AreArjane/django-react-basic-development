from rest_framework import serializers
from .models import UserWebsite, Product, Category, Brand, Order, OrderItem, Payment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserWebsite
        fields = ['user_id', 'user_username','user_email', 'user_firstname', 'user_lastname', 'user_address', 'password']
        extra_kwargs = {
            'password' : {'write_only' : True}
        }
    def create(self, validated_data):
        user_username = validated_data.pop('user_username')
        user_email = validated_data.pop('user_email')
        user = UserWebsite.objects.create_user(user_username=user_username, user_email=user_email, **validated_data)
        return user

class CategorySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Category
        fields = ['category_id', 'category_name', 'category_description']


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ['brand_id', 'brand_name', 'brand_description']


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    brand = BrandSerializer(read_only=True)
    class Meta:
        model = Product
        fields = ['productID', 'brand','category','product_name', 'product_description', 'product_price', 'product_stockquantity']

class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Order
        fields = ['order_id', 'user', 'order_date', 'order_totalamount', 'order_status']

class OrderItemsSerializer(serializers.ModelSerializer):
    prodcut = ProductSerializer(read_only=True)
    order = OrderSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['orderitem_id', 'product', 'order', 'orderitem_quantity', 'orderitem_subtotal']

class PaymentSerializer(serializers.ModelSerializer):
    order = OrderSerializer(read_only=True)

    class Meta:
        model = Payment
        fields = ['payment_id', 'order', 'payment_method', 'payment_amount', 'payment_data', 'payment_status']