create database digitalinsurance;
use digitalinsurance;

create table policycategory( categoryid int primary key,
 categoryname varchar(100));
 
 insert into policycategory values (1, "health policy"), (2, "home policy");
 
create table policy (policyid int primary key,
 categoryid int, 
 foreign key (categoryid) references policycategory(categoryid));
 
 insert into policy values (1001, 1),(1002, 1),(1003, 1),(2001, 2),(2002, 2),(2003, 2);
  insert into policy values (1004, 1),(2004, 2);
 select * from policy;
create table hospital (hospitalid int primary key,
hospitalname varchar(255),
illness varchar(255));

insert into hospital values(101, "Sahayadri", "Diabites"),(102, "Perl", "Cancer"),(103, "Orange", "Cardiac");
 select * from hospital;
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
 (1001, "Arogya Sanjeevani Policy", "Arogya Sanjeevani means wellness forever, something we want for ourselves and everyone around us. This wholesome health insurance plan mandated by IRDAI allows higher penetration of health insurance including self, spouse", "https://images.squarespace-cdn.com/content/v1/5bac99efb2cf79a76d80781d/1564989477285-Z1RD3LPJALQMI2QZNEIH/Home+Healthcare+Policies.png?format=1000w", 600000, 1, 1800, 101),
 (1002, "Medi Classic Insurance Policy", "This Health Insurance Plan provides a plethora of benefits for individuals. With this feature-packed health insurance plan, anyone from 16 days to 65 years can be covered with no capping on age for renewals after 65 years.", "https://thumbs.dreamstime.com/b/medical-health-insurance-vector-illustration-cartoon-flat-tiny-doctor-character-standing-big-paper-form-document-policy-178489558.jpg", 1000000, 1, 3000, 102),
 (1003, "MKSS Comprehensive Insurance Policy", "As the name itself says, this Health Insurance Plan is an all-inclusive plan that can cover both individual or family with a lifetime renewability benefit.", "https://thumbs.dreamstime.com/b/health-insurance-concept-vector-illustration-doctors-standing-document-money-wallet-medical-case-under-big-umbrella-de-198515845.jpg", 500000, 1, 1500, 103);

 
 select * from healthpolicy;
 
 
 
 delete from  healthpolicy where policyid = 1003;

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
 select * from homepolicy;
 insert into homepolicy values
 (2001, "Bharat Griha Raksha", "• Covers your property & its contents for upto 10 years

• Waiver of under-insurance

• Auto escalation @10% every year

• Terrorism inbuilt in basic cover

• Insurance on Market value either for Building or content is not permitted",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-FSSX-bEyZVf7VUJJW_TTSQIxwRm5HZ7dKA&usqp=CAU", 500000, 5, "Rural", "2500"),
 (2002, "Home Shield Insurance", " HDFC ERGO Home Shield Insurance covers the real value of the property as mentioned in the 
registered agreement of the property and it also offers optional covers to personalize the plan 
to meet your unique needs.", "https://milbinsure.com/Content/images/Home%20insurance.png", 1000000, 5, "Urban", "8451"),
 (2003, "SBI general", "Long Term Home Insurance wuth coverage for all natural disasters", "https://www.paisabazaar.com/wp-content/uploads/2018/11/Home-Insurance.jpg", 4000000, 5, "Urban", "11000");
 
 delete from  homepolicy where policyid = 2002;
 select * from homepolicy;
 
 
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
 drop table user;
 select * from user;
 delete from user where userid = 7;
 
 
 delete from user where userid = 2;
 
insert into user (emailid, password, mobilenumber, address, location, birthdate) 
values("sivan@gmail.com", "sivan",9876543210,"Chennai","Urban","1998-03-27"),
("nachi@gmail.com", "nachi", 9187871610,"Pune", "Urban","1996-03-23");

 
 create table userpolicy(
 userid int,
 policyid int,
 payment int,
 status varchar(255),
 foreign key(userid) references user(userid),
 foreign key(policyid) references policy(policyid));
 
 drop table userpolicy;
 select * from userpolicy;
 delete from userpolicy where userid = 5;
 
 insert into userpolicy values (3, 1001,0,"Pending"), (4, 1002,0,"pending");