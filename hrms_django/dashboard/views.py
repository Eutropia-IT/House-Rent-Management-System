from django.shortcuts import render

# user dashboard
def dashboard(request):
    return render(request, 'dashboard/index.html')
