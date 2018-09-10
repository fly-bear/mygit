# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Customer(models.Model):
    customer_id = models.IntegerField(db_column='Customer_ID', primary_key=True)  # Field name made lowercase.
    customer_name = models.CharField(db_column='Customer_Name', max_length=50, blank=True, null=True)  # Field name made lowercase.
    customer_address = models.CharField(db_column='Customer_Address', max_length=100, blank=True, null=True)  # Field name made lowercase.
    customer_birthday = models.DateField(db_column='Customer_Birthday', blank=True, null=True)  # Field name made lowercase.
    customer_occupation = models.CharField(db_column='Customer_Occupation', max_length=10, blank=True, null=True)  # Field name made lowercase.
    customer_gender = models.CharField(db_column='Customer_Gender', max_length=1, blank=True, null=True)  # Field name made lowercase.
    customer_password = models.CharField(db_column='Customer_Password', max_length=50, blank=True, null=True)  # Field name made lowercase.
    customer_phone = models.CharField(db_column='Customer_Phone', max_length=20)  # Field name made lowercase.
    customer_state = models.CharField(db_column='Customer_State', max_length=20)  # Field name made lowercase.
    customer_salt = models.CharField(db_column='Customer_Salt',max_length=50)

    class Meta:
        managed = False
        db_table = 'customer'
  
class Cars(models.Model):
    car_id = models.IntegerField(db_column='Car_ID', primary_key=True)  # Field name made lowercase.
    car_makename = models.CharField(db_column='Car_MakeName', max_length=50, blank=True, null=True, default=None)  # Field name made lowercase.
    car_model = models.CharField(db_column='Car_Model', max_length=100, blank=True, null=True, default=None)  # Field name made lowercase.
    car_series = models.TextField(db_column='Car_Series')
    car_seriesyear = models.CharField(db_column='Car_SeriesYear', max_length=30, blank=True, null=True, default=None)
    car_pricenew = models.CharField(db_column='Car_PriceNew', max_length=20, blank=True, null=True, default=None)
    car_enginesize = models.CharField(db_column='Car_EngineSize', max_length=5, blank=True, null=True, default=None)
    car_fuelsystem = models.CharField(db_column='Car_FuelSystem', max_length=20, blank=True, null=True, default=None)
    car_tankcapacity = models.CharField(db_column='Car_TankCapacity', max_length=5, blank=True, null=True, default=None)
    car_power = models.CharField(db_column='Car_Power', max_length=10, blank=True, null=True, default=None)
    car_seatingcapacity = models.IntegerField(db_column='Car_SeatingCapacity')
    car_standardtransmission = models.CharField(db_column='Car_StandardTransmission', max_length=10, blank=True, null=True, default=None)
    car_bodytype = models.TextField(db_column='Car_BodyType')
    car_drive = models.CharField(db_column='Car_Drive', max_length=5, blank=True, null=True, default=None)
    car_wheelbase = models.CharField(db_column='Car_Wheelbase', max_length=10, blank=True, null=True, default=None)

    class Meta:
        managed = False
        db_table = 'cars'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
