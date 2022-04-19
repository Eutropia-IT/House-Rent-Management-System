from django.shortcuts import render

from dashboard.models import Proparty, PropertyImage

# landing page view
def home(request):
     latest = Proparty.objects.filter(status='Active').order_by("-id")[:6]
     temp = {}
     context = []
     for i in latest:
          temp={}
          img = list(PropertyImage.objects.filter(property=i).values_list('property_image', flat=True))
          temp['prop'] = i
          temp['img'] = img
          context.append(temp)
     return render(request,'landing/index.html', {'context':context})

def propertyView(request, id):
     return render(request, 'landing/single.html', {'context': Proparty.objects.get(id=id)})

def search(request):
     return render(request, 'landing/search.html')
