from django.shortcuts import render

from dashboard.models import Proparty

# landing page view
def home(request):
     return render(request,'landing/index.html', {'context':Proparty.objects.filter(status='Active').order_by("-id")[:6]})

def propertyView(request, id):
     return render(request, 'landing/single.html', {'context': Proparty.objects.get(id=id)})

def search(request):
     return render(request, 'landing/search.html')
