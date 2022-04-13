from django.shortcuts import render

from dashboard.models import Proparty

# landing page view
def home(request):
     return render(request,'landing/index.html', {'context':Proparty.objects.filter(status='Active')})
