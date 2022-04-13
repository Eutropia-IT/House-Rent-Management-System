from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm
from django.contrib.auth.models import User, models 
from django import forms

# User Creation
class UserRegistraionForm(UserCreationForm):
    username = forms.CharField(required=True)
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=False)
    email = forms.EmailField(required=True)
    password1 = forms.CharField(required=True)
    password2 = forms.CharField(required=True)

    class Meta:
        model = User
        email = models.EmailField(unique=True)
        fields = ['username','email','first_name','last_name','password1','password2']
        

    def clean_email(self):
        email = self.cleaned_data.get('email')
        userCount = User.objects.filter(email=email).count()
        if userCount > 0:
            raise forms.ValidationError('This email has already been taken.')
        return email
    
# password change form
class ChangePassword(PasswordChangeForm):
    class Meta:
        model = User
        fields = ['old_password', 'new_password1', 'new_password2']
        
# Edit User Info
class EditUserForm(forms.ModelForm):
    username = forms.CharField(required=True)
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=False)
    email = forms.EmailField(required=True)
    class Meta:
        model = User
        fields = ['username', 'first_name','last_name','email']

    def clean_email(self):
        email = self.cleaned_data.get('email')
        username = self.cleaned_data.get('username')
        prevEmail = User.objects.get(username=username).email
        if email!=prevEmail:
            userCount = User.objects.filter(email=email).count()
            if userCount > 0:
                raise forms.ValidationError('This email has already been taken.')
        return email