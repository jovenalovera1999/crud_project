from django.shortcuts import render, redirect
from .forms import GenderForm
from .models import Gender, User
from django.contrib import messages

# Create your views here.

########################################
#              Gender Views              #
########################################
def indexGender(request):
    return render(request, 'gender/index.html')

def createGender(request):
    form = GenderForm()
    return render(request, 'gender/create.html', {'form':form})

def storeGender(request):
    form = GenderForm(request.POST)
    
    if form.is_valid():
        genderInstance = form.save(commit=False)
        genderInstance.gender = genderInstance.gender.upper()
        messages.success(request, 'Gender successfully saved!')
        form.save()
        
        return redirect('/genders')

########################################
#              User Views              #
########################################
def indexUser(request):
    return

def createUser(request):
    return render(request, 'user/create.html')

def storeUser(request):
    return

def editUser(request):
    return

def updateUser(request):
    return

def deleteUser(request):
    return

def desroyUser(request):
    return