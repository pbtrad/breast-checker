from datetime import datetime
from breast_check_api.celery import app
from .models import User
import datetime


@app.task(name="send_reminder")
def send_reminder():
    try:
        time_threshold = datetime.now() - datetime.timedelta(days=30)

        profile_objs = User.objects.filter(check_reminder__gte=time_threshold)

        for profile_obj in profile_objs:
            pass

    except Exception as e:
        print(e)