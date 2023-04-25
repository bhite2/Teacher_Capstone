# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'g4@Ma23npmAs17qprEs07nflmk!6Ba04'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'teacher_database',
        "USER": 'root',
        "PASSWORD": '#Ma23As17',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}