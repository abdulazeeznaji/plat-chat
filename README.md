# Plat-chat Application 

A social platform that allow authenticate users to share information with each other through posts. 

## Prerequisites
```
python 3.2.0
Pip
Mac OS 
```
#### Tech Stack 
```
Server Side Scripting: Python 3.2.0
Server Framework: Django, Database: Mysql
Authentication JWT


```

## Run the App(local)
#### install  Python environments
```
pip install virtualenv
```
#### Create env 
```
virtualenv env 
```
#### Activate env 
```
source env/bin/activate
```
#### Use pip to install dependencies from requirements.txt:
```
pip install -r requirements.txt
```


#### Edit Django settings.py file to include the username, password, and db name in the format:
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': '[Database name]',
        'USER': '[USERNAME]',
        'HOST': 'localhost',
        'PORT': '',
    }
}
```
#### Run django migrations 

```
python manage.py makemigrations
```

#### Run application

```
python manage.py runserver 
```