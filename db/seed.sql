create database demo_db;
drop table orders_A;
drop table orders_B;
drop table orders_C;

create table orders_A(
   id serial PRIMARY KEY,
   user_id int,
   name varchar(255),
   amount int default 0,
   status varchar(255)
);

create table orders_B(
   id serial PRIMARY KEY,
   user_id int,
   name varchar(255),
   amount int default 0,
   status varchar(255)
);

create table orders_C(
   id serial PRIMARY KEY,
   user_id int,
   name varchar(255),
   amount int default 0,
   status varchar(255)
);

truncate orders_a;
truncate orders_b;
truncate orders_c;

insert into orders_a values(0, 1, 'A', 100, 'available');
insert into orders_b values(0, 1, 'B', 100, 'available');
insert into orders_c values(0, 1, 'C', 100, 'available');