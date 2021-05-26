create database b9_group5;

create table member (
    MemberID int NOT NULL AUTO_INCREMENT,
    GivenName varchar(255) NOT NULL,
    LastName varchar(255),
    Gender char(10),
    Email varchar(255),
    Age int,
    MemberType int,
    property_type varchar(50),
    No_of_bedroom int,
    Budget int,
    Loc varchar(30),
    primary key (MemberID)
);
describe member;

insert into member (GivenName, LastName, Gender, Email, Age, 
    MemberType ,property_type, No_of_bedroom, Budget, Loc)
    values ('Larry', 'Morrison', 'M', 'larry@gmail.com', '40',
    '1', 'condo', '3', '500000', 'Bugis'),
    ('Meng', 'Lim', 'M', 'limmeng@yahoo.com.sg', '29', 
    '1', 'hdb', '2', '250000', 'Tanjong Pagar'),
    ('Samson', 'Buck', 'M', 'samsonbuck@hotmail.com', '35', 
    '2', 'condo', '3', '600000', 'Bugis'),
    ('Weiling', 'Quek', 'F', 'wlq@gmail.com', '31', 
    '1', 'condo', '2', '450000', 'Marina Bay');

insert into member (GivenName, LastName, Gender, Email, Age, 
    MemberType ,property_type, No_of_bedroom, Budget, Loc)
    values ('How Beng', 'Sim', 'M', 'hbs@gmail.com', '42',
    '1', 'condo', '2', '420000', 'Tanjong Pager'),
    ('Chen Chen', 'Tan', 'F', 'cctan@yahoo.com.sg', '37', 
    '1', 'condo', '3', '450000', 'Tanjong Pagar');

select * from member;


create table property (
    propertyID int NOT NULL AUTO_INCREMENT,
    property_type varchar(50),
    No_of_bedroom int,
    Loc varchar(30),
    Price int,
    primary key (propertyID)
);
describe property;

insert into property (property_type, No_of_bedroom, Loc, Price)
    values ('condo', '3', 'Bugis', '1800000'),
    ('terrace', '3', 'Tanjong Pagar' ,'2300000'),
    ('condo', '2', 'Marina Bay', '2100000'),
    ('condo', '1', 'Tanjong Pagar', '920000'),
    ('landed', '3', 'Marina Bay', '3800000');

select * from property;
show tables;

create table match_members (
    m_m_ID int NOT NULL AUTO_INCREMENT,
    memberID_1 int,
    membertype_1 int,
    memberID_2 int,
    membertype_2 int,
    date_match date,
    match_status varchar(50),
    fee_ID int,
    propertyID int,
    primary key (m_m_ID)
);
describe match_members;


create table match_member_property (
    m_p_ID int NOT NULL AUTO_INCREMENT,
    memberID int,
    propertyID int,
    primary key (m_p_ID)
);
describe match_member_property;



