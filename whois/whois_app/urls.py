
from django.urls import path
from .cv import addCvView
from whois_app import authView, views, updateCvView


urlpatterns = [
    path('api/', views.home),  # hongoroo
    path('api/addCv/', addCvView.addCv, name='addCv'),  # boldoo
    path('api/auth/', authView.authCheckService),
    path('api/updateCv/', updateCvView.updateCv),
]
