from django import forms
from .models import Gender

class GenderForm(forms.ModelForm):
    class Meta:
        model = Gender
        fields = ['gender']
        labels = {
            'gender':'Gender'
        }