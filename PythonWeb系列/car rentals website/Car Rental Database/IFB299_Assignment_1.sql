
use carrentals;
-- customer;
drop table if exists customer;
create table customer(
Customer_ID INT(5) not null,
Customer_Name varchar(50),
Customer_Address varchar(100),
Customer_Birthday Date,
Customer_Occupation varchar(10),
Customer_Gender char(1),
primary key(Customer_ID)
);

Insert into customer select Customer_ID, Customer_Name, Customer_Addresss, Customer_Brithday, Customer_Occupation, Customer_Gender from dataincentraldatabase group by Customer_ID;

-- Store 
drop table if exists store;
create table store(
Store_ID INT(11) auto_increment,
Store_Name varchar(50),
Store_Address varchar(100),
Store_Phone varchar(20),
Store_City text,
Store_State_Name varchar(20),
primary key(Store_ID)
);


 Insert into store(Store_Name, Store_Address, Store_Phone, Store_City, Store_State_Name) select Store_Name,
 Store_Address, Store_Phone, Store_City, Store_State_Name from datainstore group by Store_Name;
 
 -- Filling in Nulls in datastore with extra values found in dataincentraldatabase
 update store inner join dataincentraldatabase on store.Store_ID = dataincentraldatabase.Order_PickupStore 
 set store.Store_Name = dataincentraldatabase.Pickup_Store_Name, store.Store_Address = dataincentraldatabase.Pickup_Store_Address,
 store.Store_Phone = dataincentraldatabase.Pickup_Store_Phone, store.Store_City = dataincentraldatabase.Pickup_Store_City,
 store.Store_State_Name = dataincentraldatabase.Pickup_Store_State_Name
 where dataincentraldatabase.Order_PickupStore = 27;

-- Cars
drop table if exists cars;
create table cars(
Car_ID INT(5) ,
Car_MakeName varchar(50),
Car_Model varchar(100),
Car_Series longtext,
Car_SeriesYear varchar(30),
Car_PriceNew varchar(20),
Car_EngineSize varchar(5),
Car_FuelSystem varchar(20),
Car_TankCapacity varchar(5),
Car_Power varchar(10),
Car_SeatingCapacity INT(5),
Car_StandardTransmission varchar(10),
Car_BodyType longtext,
Car_Drive varchar(5),
Car_Wheelbase varchar(10),
primary key(Car_ID)
);
 Insert into cars select Car_ID, Car_MakeName, Car_Model, Car_Series, Car_SeriesYear,
 Car_PriceNew, Car_EngineSize, Car_FuelSystem, Car_TankCapacity, Car_Power, Car_SeatingCapacity,
 Car_StandardTransmission, Car_BodyType, Car_Drive, Car_Wheelbase from dataincentraldatabase group by Car_ID;

-- Orders
drop table if exists Orders;
create table Orders(
Orders_ID INT(11) auto_increment,
Order_CreateDate date,
Order_PickupDate date,
Order_PickupStore INT(11),
Order_ReturnDate date,
Order_ReturnStore INT(11),
Customer_ID INT(11),
Car_ID INT(11),
primary key(Orders_ID)

);

  Insert into Orders(Order_CreateDate,Order_PickupDate, Order_PickupStore,Order_ReturnDate,Order_ReturnStore, Customer_ID, Car_ID)
  select  Order_CreateDate,Order_PickupDate, Order_PickupStore,Order_ReturnDate, Order_ReturnStore, Customer_ID, Car_ID
  from dataincentraldatabase;
  update Orders set Order_PickupStore = 41 where Order_PickupStore = 50;
   update Orders set Order_ReturnStore = 41 where Order_ReturnStore = 50;
   alter table orders add constraint Order_PickupStore foreign key (Order_PickupStore) references store(store_ID) on update cascade;
  alter table orders add constraint Order_ReturnStore foreign key (Order_ReturnStore) references store(store_ID) on update cascade;
  alter table orders add constraint Customer_ID foreign key (Customer_ID) references customer(Customer_ID) on update cascade;
   alter table orders add constraint Car_ID foreign key (Car_ID) references cars(Car_ID) on update cascade;
   
	update customer set Customer_Address = "   " where substr(Customer_Address, 1, 3) not rlike '[0-9]';
   update customer set Customer_Address = "   " where Customer_Address like '%?%';
   update customer set Customer_Address = "   " where Customer_Address like '_,%';
   select * from customer ;
-- Example Statement showing the number of cars ordered based on car model
-- select Car_MakeName, count(*)as Number_Ordered from cars inner join orders on orders.Car_ID = cars.Car_ID group by Car_MakeName;

-- For Testing
 -- drop table orders;
--  drop table cars;
 -- drop table customer;
--  drop table store;