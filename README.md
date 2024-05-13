# Backend for E-Commerial website Python DJANGO Framework

## Models of the application
[![Watch the video]](https://youtu.be/WFWsgbD6JpA)



## API ENDpoints

### USER API
### localhost:8080
- **create new user**
  - **POST** `/backend/user-create/`
  - create new user with the post request, return either successful or BAD request.
- **user login**
  - **POST** `/backend/login/`
  - retrive username and password and managed with database return either success or unauthorized message.
- **user update**
  - **PUT** `/backend/user-update/<int:pk>/`
  - update the user based on primary key which is the user identical key created in database.
- **user delete**
  - **DELETE** `/backend/user-delete/<int:pk>/`
  - delete specific user based on the primary key return success or not found or no content.

### website API
- **list all category**
  - **GET** `/backend/categories/`
  - retrive all caltegories
- **list all brands**
  - **GET** `/backend/brands/`
  - retrive all brands
- **list all product with categories and brand**
  - **GET** `/backend/products/`
  - retrive all poducts
- **list all order**
  - **GET** `/backend/order/`
  - retrive all order
- **list all orderlinje**
  - **GET** `/backend/orderitems/`
  - retrive all orderitems
- **list all payments**
  - **GET** `/backend/payments/`
  - retrive all payments 




## Dependencies install with pip install

```bash
django-rest-framework
django-cors-headers
```
## MIDDLEWARE add to the backendSYS/setting.py

```groovy
corsheaders.moddleware.CorsMiddleware
django.middleware.common.CommonMiddleware
```
