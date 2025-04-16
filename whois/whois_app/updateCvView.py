from django.views.decorators.csrf import csrf_exempt
import json
from whois.settings import sendResponse, connectDB
from django.http import JsonResponse


@ csrf_exempt
def updateCv(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
        except Exception as e:
            res = sendResponse(4001)
            return JsonResponse(res)

        if 'action' not in data:
            res = sendResponse(4002)
            return JsonResponse(res)
        elif 'personal_details' not in data:
            res = sendResponse(4009)
            return JsonResponse(res)
        elif not isinstance(data['personal_details'], dict):
            res = sendResponse(4010)
            return JsonResponse(res)
        elif 'pid' not in data['personal_details']:
            res = sendResponse(4011)
            return JsonResponse(res)

        if data['action'] == 'updateCv':

            try:
                personal_details = data['personal_details']
                pid = personal_details.get('pid')
                firstname = personal_details.get('firstname', None)
                lastname = personal_details.get('lastname', None)
                headline = personal_details.get('headline', None)
                address = personal_details.get('address', None)
                phone = personal_details.get('phone', None)
                linkedin = personal_details.get('linkedin', None)
                github = personal_details.get('github', None)
                facebook = personal_details.get('facebook', None)
                city = personal_details.get('city', None)
                summary = personal_details.get('summary', None)
                with connectDB() as con:
                    cur = con.cursor()
                    query = f'''UPDATE whois.t_person_details
                                SET
                                    firstname = %s,
                                    lastname = %s,
                                    headline = %s,
                                    address = %s,
                                    phone = %s,
                                    linkedin = %s,
                                    github = %s,
                                    facebook = %s,
                                    summary = %s,
                                    city = %s
                                WHERE pid = %s;  
                            '''
                    params = (firstname, lastname, headline, address,
                              phone, linkedin, github, facebook, summary, city, pid)
                    cur.execute(query, params)
                    con.commit()
                res = sendResponse(200, action='updateCv')
                return JsonResponse(res)
            except Exception as e:
                print(f'###################{e}')
                res = sendResponse(4005)
                return JsonResponse(res)
        else:
            res = sendResponse(4003)
            return JsonResponse(res)

    else:
        res = sendResponse(405)
        return JsonResponse(res)
