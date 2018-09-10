CREATE DATABASE IF NOT EXISTS carrentals_register;
USE carrentals_register;

CREATE TABLE IF NOT EXISTS django_session (
session_key int(11),
session_data varchar(45),
expire_date varchar(45),
Primary Key(session_key)
);