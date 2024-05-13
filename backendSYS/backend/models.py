from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self, user_username, user_email, password=None, **extra_fields):
        if not user_email:
            raise ValueError('The Email must be set')
        user = self.model(user_username=user_username, user_email=user_email, **extra_fields)
        user_email = self.normalize_email(user_email)
        user = self.model(user_username=user_username, user_email=user_email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    USERNAME_FIELD = 'user_username'


class Category(models.Model):
    category_id = models.AutoField(primary_key=True)
    category_name = models.CharField(max_length=255)
    category_description = models.TextField()

class Brand(models.Model):
    brand_id = models.AutoField(primary_key=True)
    brand_name = models.CharField(max_length=255)
    brand_description = models.TextField()


class UserWebsite(AbstractBaseUser, PermissionsMixin):
    user_id = models.AutoField(primary_key=True)
    user_username = models.CharField(max_length=255)
    user_email = models.EmailField()
    user_firstname = models.CharField(max_length=255)
    user_lastname = models.CharField(max_length=255)
    user_address = models.CharField(max_length=255)
    password = models.CharField(max_length=128)

    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
        related_name="userwebsite_groups",  
        related_query_name="userwebsite"  
    )

    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name="userwebsite_permissions",  
        related_query_name="userwebsite"  
    )

    objects = UserManager()

    

class Product(models.Model):
    productID = models.AutoField(primary_key=True)
    product_barnd_id = models.ForeignKey(Brand, on_delete=models.CASCADE)
    product_category_id = models.ForeignKey(Category, on_delete=models.CASCADE)

    product_name = models.CharField(max_length=255)
    product_description = models.TextField()
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    product_stockquantity = models.IntegerField()

class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    order_user_id = models.ForeignKey(UserWebsite, on_delete=models.CASCADE)
    order_date = models.DateTimeField()
    order_totalamount = models.DecimalField(max_digits=10, decimal_places=2)
    order_status = models.CharField(max_length=255)

class OrderItem(models.Model):
    orderitem_id = models.AutoField(primary_key=True)
    orderitem_order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    orderitem_product_id = models.ForeignKey(Product, on_delete=models.CASCADE)
    orderitem_quantity = models.IntegerField()
    orderitem_subtotal = models.DecimalField(max_digits=10, decimal_places=2)

class Payment(models.Model):
    payment_id = models.AutoField(primary_key=True)
    payment_order_id = models.ForeignKey(Order, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length=255)
    payment_amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_data = models.DateField()
    payment_status = models.CharField(max_length=250)