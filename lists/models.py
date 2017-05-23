from django.db import models


class Item(models.Model):
    text = models.TextField(default='')
    list = models.ForeignKey('lists.List', default=None)

class List(models.Model):
    pass
