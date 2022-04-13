from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import PropartyForm

# user dashboard
@login_required
def dashboard(request):
    return render(request, 'dashboard/index.html')


@login_required
def addProparty(request):
    form = PropartyForm()
    form = PropartyForm(request.POST)
    if request.method == 'POST':
        if form.is_valid():
            print(555)
            form.save()
            return redirect('addProparty')
        print(form.errors)
    return render(request, 'dashboard/addProparty.html')
