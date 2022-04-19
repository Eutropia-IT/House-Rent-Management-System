from django.shortcuts import render

from dashboard.models import Proparty, PropertyImage

# landing page view
def home(request):
     latest = Proparty.objects.filter(status='Active').order_by("-id")[:6]
     context = []
     for i in latest:
          img = list(PropertyImage.objects.filter(property=i).values_list('property_image', flat=True))
          context.append(zip(i, img[0]))
     return render(request,'landing/index.html', {'context':context})

def propertyView(request, id):
     return render(request, 'landing/single.html', {'context': Proparty.objects.get(id=id)})

def search(request):
     return render(request, 'landing/search.html')
