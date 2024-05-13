from django.contrib import admin
from .models import Category, Brand, Product, UserWebsite



class CategoryAdmin(admin.ModelAdmin):
    list_display = [ 'category_name', 'category_description']

class BrandAdmin(admin.ModelAdmin):
    list_display = [ 'brand_name', 'brand_description']

class ProductAdmin(admin.ModelAdmin):
    list_display = [ 'product_name', 'product_description', 'product_price', 'product_stockquantity']

class UserWebsiteAdmin(admin.ModelAdmin):
    list_display = ['user_username', 'password']

    
admin.site.register(UserWebsite, UserWebsiteAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Brand, BrandAdmin)
admin.site.register(Product, ProductAdmin)
