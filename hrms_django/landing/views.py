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
     latest = Proparty.objects.filter(status="Active",type=request.GET.get('type'),city=request.GET.get('location')).order_by('-id')
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