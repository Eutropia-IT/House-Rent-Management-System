from django.shortcuts import render

# landing page view
def home(request):
     return render(request,'landing/index.html')
