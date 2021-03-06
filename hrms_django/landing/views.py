from django.http import JsonResponse
from django.shortcuts import render

from dashboard.models import Proparty, PropertyImage

# landing page view
def home(request):
     latest = Proparty.objects.filter(status='Active').order_by("-id")[:6]
     context = []
     locs = list(Proparty.objects.filter(status='Active').values_list("city", flat=True).distinct())
     for i in latest:
          temp={}
          img = list(PropertyImage.objects.filter(property=i).values_list('property_image', flat=True))
          temp['prop'] = i
          temp['img'] = img[0]
          context.append(temp)
     return render(request,'landing/index.html', {'context':context, 'location':locs})

def propertyView(request, id):
     prop = Proparty.objects.get(id=id)
     img = list(PropertyImage.objects.filter(property=prop).values_list('property_image', flat=True))
     return render(request, 'landing/single.html', {'context': prop,'img':img})

def search(request):
     type=request.GET.get('type')
     city=request.GET.get('location')
     if type and city:
          latest = Proparty.objects.filter(status="Active",type=type,city=city).order_by('-id')
     elif type and not city:
          latest = Proparty.objects.filter(status="Active",type=type).order_by('-id')
     elif not type and city:
          latest = Proparty.objects.filter(status="Active",city=city).order_by('-id')
     else:
          latest = Proparty.objects.filter(status="Active").order_by('-id')
          
     result = []
     for i in latest:
          temp={}
          img = list(PropertyImage.objects.filter(property=i).values_list('property_image', flat=True))
          temp['prop'] = i
          temp['img'] = img[0]
          result.append(temp)
     return render(request, 'landing/search.html', {'result':result})

def all(request):
     latest = Proparty.objects.filter(status="Active").order_by('-id')
     result = []
     for i in latest:
          temp={}
          img = list(PropertyImage.objects.filter(property=i).values_list('property_image', flat=True))
          temp['prop'] = i
          temp['img'] = img[0]
          result.append(temp)
     return render(request, 'landing/search.html', {'result':result})


def mapData(request):
     temp = Proparty.objects.filter(status="Active")
     data = []
     for i in temp:
          if i.type == "Family":
               icon = "<i class='fa fa-home'></i>"
          else:
               icon = "<i class='fa fa-building'></i>"
          dict ={
               "id": i.id,
               "center": [i.latitude, i.longitude],
               "icon": icon,
               "title": i.title,
               "desc": i.address,
               "price": "??? "+ str(i.price),
               "image": list(PropertyImage.objects.filter(property=i).values_list('property_image', flat=True))[0],
               "link": "http://127.0.0.1:8000/property/"+str(i.id)+"/"
          }
          data.append(dict)
     return JsonResponse(data, safe=False)