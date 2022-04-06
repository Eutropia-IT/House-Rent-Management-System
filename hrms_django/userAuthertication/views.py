from django.shortcuts import redirect, render
from .decorators import unauthenticated_user
from .forms import UserRegistraionForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
# registration page for user who want to create an user account
@unauthenticated_user
def signup(request):
    regForm = UserRegistraionForm()
    if request.method == 'POST':
        regForm = UserRegistraionForm(request.POST)
        
        if regForm.is_valid():
            # regForm.save()
            new_user = authenticate(username=regForm.cleaned_data.get('username'), password=regForm.cleaned_data.get('password1'))
            login(request,new_user)
            # Profile.objects.update_or_create(phone=request.POST['phone'], referral_email=request.POST['referral_email'], user=new_user)
            messages.success(request, 'Account Created Successfully.')
            return redirect('dashboard')

    context = {
        'regForm': regForm,
    }
    return render(request, 'userAuthertication/signup.html', context)
