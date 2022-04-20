from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.models import User
from django.contrib import messages
from dashboard.models import Proparty, PropertyImage
from userAuthertication.forms import ChangePassword, EditUserForm
from .forms import PropartyForm

# user dashboard
@login_required
def dashboard(request):
    context = {
        'total' : Proparty.objects.filter(user=request.user).count(), 
        'active' : Proparty.objects.filter(user=request.user, status='Active').count(), 
        'inactive' : Proparty.objects.filter(user=request.user, status='Inactive').count(), 
        'rented' : Proparty.objects.filter(user=request.user, status='Rented').count(), 
    }
    if request.method == 'POST':
        userEditForm = EditUserForm(request.POST, instance=request.user)
        if userEditForm.is_valid():
            userEditForm.save()
            messages.success(request, 'Update Profile Successfullu!')
            return redirect('dashboard')
    return render(request, 'dashboard/index.html', context)


@login_required
def addProparty(request):
    form = PropartyForm(request.POST)
    images =  request.FILES.getlist('images')
    if request.method == 'POST':
        if form.is_valid():
            x = form.save()
            for image in images:
                PropertyImage.objects.create(property=x, property_image=image)
                
            return redirect('myList')
        print(form.errors)
    return render(request, 'dashboard/addProparty.html')

@login_required
def editProparty(request, id):
    context = {
        "proparty" : Proparty.objects.get(id=id)
    }
    images =  request.FILES.getlist('images')
    if request.method == 'POST':
        form = PropartyForm(request.POST, instance=context['proparty'])
        if form.is_valid():
            form.save()
            return redirect(f'/dashboard/edit-proparty/{id}')
        print(form.errors)
    
    return render(request, 'dashboard/editProparty.html', context)

@login_required
def deleteProparty(request, id):
    Proparty.objects.get(id=id).delete()
    return redirect('myList')


@login_required
def myList(request):
    return render(request, 'dashboard/mylist.html', {'context' : Proparty.objects.filter(user=request.user)})

@login_required
def changePass(request): 
    if request.method == 'POST':
        cpForm = ChangePassword(request.user, request.POST)
        if cpForm.is_valid():
            user = cpForm.save()
            update_session_auth_hash(request, user)
            messages.success(request, 'Password Changed Successfully')
            return redirect('dashboard')
    return render(request, 'dashboard/changePass.html')