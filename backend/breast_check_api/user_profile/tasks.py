from datetime import datetime
from sys import settrace
from breast_check_api.celery import app
from .models import User
import datetime
from django.conf import settings
from django.core.mail import send_mail


@app.task(name="send_reminder")
def send_reminder():
    try:
        time_threshold = datetime.now() - datetime.timedelta(days=30)

        profile_objs = User.objects.filter(check_reminder__gte=time_threshold)

        for profile_obj in profile_objs:
            subject = 'Notification subject example'
            message = "Notification message example"
            email_from = settings.EMAIL_HOST_USER
            recipient_list = [profile_obj.email]
            send_mail(subject, message, email_from, recipient_list)

    except Exception as e:
        print(e)