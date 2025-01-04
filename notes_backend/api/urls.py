from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('notes/', views.get_notes, name='notes'),
    path('notes/<str:pk>/update', views.update_note, name='update'),
    path('notes/<str:pk>/delete', views.delete_note, name='delete'),
    path('notes/<str:pk>', views.get_note, name='note'),
    path('newnote', views.create_note, name='new_note')
]