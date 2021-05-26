show tables; --will come out nothing to show at the beginning becos have no data and no tables
create database b9_group5_jeremy; --run this MySQL query to create a database... with the name "bp_group5_jeremy" (substitute watever u like)
--right click and refresh the mysql and it will pop out
create table Member --this code to create a table... named Member (can put any name u like besides Member)
(
    MemberID int NOT NULL AUTO_INCREMENT PRIMARY KEY, -- this code say to put these data in the Member table... each line is a data foloowed by data type (either int for integer number or varchar for variable characters, text that do not make sense to use maths upon). after these two, optional things to put like auto increment (somemore increases automatically i suppose) and Not null (meaning this field MUST have an input... other fields like name also can put Not Null)....a few other codes can put after the data type but not gonna use them all
    MemberType varchar(2),
    GivenName varchar (38),
    LastName varchar(38),
    Email varchar(88),
    Age int,
    Gender varchar(10),
    Nationality varchar (58),
    MaritalStatus varchar (18),
    MobileNumber varchar(28),
    ABSDtype int
    Occupants int,
    Smoker varchar,
)
;

create table Preferences 
(
    MinimumBudget int,
    MaximumBudget int,
    DistrictCode varchar(28),
    Bedrooms int,
    PropertyType varchar(38),
    MemberType varchar(2),
    Age int,
    Gender varchar(10),
    Nationality varchar (58),
    MaritalStatus varchar (18),
    ABSDtype int,
    Occupants int,
    Smoker varchar(5)
    )
;

create table Property
(
    Price int,
    PropertyType varchar(38),
    Bedrooms int,
    DistrictCode varchar(28),
    ProximitytoMRT varchar (10)

);


create table TransactionFee
(
    MemberID1 int,
    MemberID2 int,
    MatchingFee int,
    PropertyPrice int, 
    SuccessFee int
    )
;


