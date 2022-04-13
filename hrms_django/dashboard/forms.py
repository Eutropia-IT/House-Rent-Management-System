from dataclasses import fields
from pyexpat import model
from socket import fromshare
from django import forms

from .models import Proparty

class PropartyForm(forms.ModelForm):
    class Meta:
        model = Proparty
        fields = "__all__"