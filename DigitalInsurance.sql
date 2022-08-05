create database digitalinsurance;
use digitalinsurance;

create table policycategory( categoryid int primary key,
 categoryname varchar(100));
 
 insert into policycategory values (1, "health policy"), (2, "home policy");
 
create table policy (policyid int primary key,
 categoryid int, 
 foreign key (categoryid) references policycategory(categoryid));
 
 insert into policy values (1001, 1),(1002, 1),(1003, 1),(2001, 2),(2002, 2),(2003, 2);
 select * from policy;
create table hospital (hospitalid int primary key,
hospitalname varchar(255),
illness varchar(255));

insert into hospital values(101, "Sahayadri", "Diabites"),(102, "Perl", "Cancer"),(103, "Orange", "Cardiac");
 
 create table healthpolicy (policyid int primary key,
 policyname varchar(255),
 policydescription varchar(255),
 imageurl varchar(255),
 sumassurance int,
 policyterm int,
 premium int,
 hospitalid int,
foreign key(policyid) references policy(policyid),
foreign key(hospitalid) references hospital(hospitalid)
 );
 
 insert into healthpolicy values
 (1001, "Ayush", "Family health cover", "health.png", 400000, 1, 1800, 101),
 (1002, "Swastha", "Full Family health cover", "swastha.png", 500000, 1, 2000, 102),
 (1003, "Covid Special", "Cover Covid ", "covid.png", 200000, 1, 1200, 103);

create table homepolicy(policyid int primary key,
 policyname varchar(255),
 policydescription varchar(255),
 imageurl varchar(255),
 sumassurance int,
 policyterm int,
 location varchar(255),
 premium int,
 foreign key(policyid) references policy(policyid)
 );
 
 insert into homepolicy values
 (2001, "Sahaya", "securing home", "Sahaya.png", 1500000, 5, "Urban", "5000"),
 (2002, "HDFC ERGO", "Home Shield", "HDFCERGO.png", 1000000, 5, "Rural", "8451"),
 (2003, "SBI general", "Long Term Home Insurance", "SBI.png", 4000000, 5, "Urban", "8234");
 
 select * from homepolicy;
 
 create table admin(emailid varchar(255),
 password varchar(255));
 
 insert into admin values ("admin", "admin");
 
 create table user (userid int primary key auto_increment,
 emailid varchar(255),
 password varchar(255),
 mobilenumber bigint,
 address varchar(255),
 location varchar(255),
 birthdate date)
 ;
 
 select * from user;
 
 
 delete from user where userid = 8;
 
insert into user (emailid, password, mobilenumber, address, location, birthdate) 
values("sivan@gmail.com", "sivan",9876543210,"Chennai","Urban","1998-03-27"),
("nachi@gmail.com", "nachi", 9187871610,"Pune", "Urban","1996-03-23");

 
 create table userpolicy(userid int,
 policyid int,
 foreign key(userid) references user(userid),
 foreign key(policyid) references policy(policyid));
 
 select * from userpolicy;
 delete from userpolicy where userid = 2;
 
 insert into userpolicy values (1, 1001), (2, 1002);