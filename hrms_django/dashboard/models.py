
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Proparty(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=1000)
    description = models.CharField(max_length=1000)
    status =  models.CharField(max_length=1000, default="Active")
    type = models.CharField(max_length=1000)
    rooms = models.IntegerField()
    price = models.IntegerField()
    area = models.CharField(max_length=1000)
    # image = models.ImageField(upload_to='prparty/')
    address = models.CharField(max_length=1000)
    city = models.CharField(max_length=1000)
    latitude = models.CharField(max_length=1000)
    longitude = models.CharField(max_length=1000)
    con_name = models.CharField(max_length=1000)
    con_email = models.CharField(max_length=1000)
    con_phn = models.CharField(max_length=1000)
    
    
class PropertyImage(models.Model):
    property = models.ForeignKey(Proparty, on_delete=models.CASCADE)
    property_image = models.ImageField(upload_to='property/', max_length=1500)
    
    def delete(self, *args, **kwargs):
        try:
            storage, path = self.property_image.storage, self.property_image.path
            super(PropertyImage, self).delete(*args, **kwargs)
            storage.delete(path)
        except:
            pass
    
    
    
    
    
