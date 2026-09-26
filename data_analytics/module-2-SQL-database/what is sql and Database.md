# what is SQL and database ?

## What is SQL ?

- A SQL is stand for Structured Query Language.
- A SQL is used to create a database and table structured.
- A SQL is used to create structured data.
- A SQL is case-insensitive language.
- insensitive language example : INSERT | insert | Insert


# what is Database ?
    
 - A Database is used to store an information i.e called Database.
 - list out 5 name of Database :
    1. oracle
    2. mysql
    3. sqllite
    4. sql server
    5. mongoDB


    ## how to open Xampp

    1. xampp => control panel => start

    2. localhost/phpmyadmin 

    ![alt text](<Screenshot 2026-07-26 154059.png>)

    ![alt text](<Screenshot 2026-07-26 154258.png>)


    ## how to open mySQLworkbench8.0

  1. https://dev.mysql.com/downloads/workbench/
  2. open mysqlworkbench
  3. create an database instance

  ![alt text](<Screenshot 2026-07-26 154410.png>)



  ## what is difference b/w SQL and MYSQL

  ## SQL

   1. sql is an structured query language. 
   2. sql is case insenstive language.
   3. sql is create database and tables structured.

  ## MYSQL 

   1. mysql is an database.
   2. mysql is case sensitive language.
   3. mysql is used to stored data.


  # what is DBMS ?
    1. DBMS stands for Data Base Management System.
    2. DBMS is used to manage databases. 
        1. oracle
        2. mysql
        3. sqllite
        4. sql server
        5. mongoDB

    # what is RDBMS ?
    1. RDBMS is stands for Relational Database Management System.
    2. RDBMS  provides relations b/w database and its tables.
    3. RDBMS manage GUI of database.


    # types of SQL commands 

    - DDL (Data Definition Lanaguage)
    - DML (Data Manipulation Language)
    - DQL (Data Query Language)
    - TCL (Transantional Control Language)


 ## DDL (data definition language) :-

  - A DDL is used to create database & table definition.
  - A DDL is used to create database name and table name and its structures
  - A DDL query is..

  1. create 
  2. alter
  3. rename
  4. change
  5. drop
  6. truncate

## how to create databaase ?

**syntax**

```
create database databasename;
or
create database db_app;
``` 

## how to create table ?

**table datatype and size structures**

## sql Table structure

 | Column Name | Data Type | Size | Description |
 |-------------|-----------|------|-------------|
 | ID | INT | 11 | Primary Key (auto_increment) |
 | FirstName | VARCHAR | 0-255 | Employee first name |
 | LastName | VARCHAR | 0-255 | Employee last name |
 | Email | VARCHAR | 255 | Email address |
 | Phone | VARCHAR | 20 | Contact number |
 | DateOfBirth | DATE | - | Birth date |
 | Salary | DECIMAL | 10,2 | Employee salary |
 | IsActive | BIT | 1 | Active status |
 | CreatedDate | DATETIME | - | Record creation date |
 | UpdatedDate | DATETIME | - | Last update date |
 | address     | text     |  for more text   |
 | multiple choice | enum |  for multiple choices |
 | mobile | bigInt | 20 | for bigInt   |
 | photo  | blob   | bigsize           |


**syntax**
```
  create table tablename(
  id int auto_increment primary key,
  name varchar(255),
  password varchar(255),
  mobile bigInt,
  address text,
  appointmentmentdata_time datetime
 );

 or

 create table users(
  id int auto_increment primary key,
  name varchar(255),
  password varchar(255),
  mobile bigInt,
  address text,
  appointmentmentdata_time datetime
 );

 or

 create table employee(
empid int AUTO_INCREMENT primary key,
name varchar(255),
password varchar(255),
gender varchar(255),
hobby varchar(255),
address text,
phone bigint    
);

```

## alter

1. alter is used to add new column in a table.
2. alter is used to modify or add or update new column in tables.
3. alter also create a unique key in column.
4. alter tables add column  | modify column | update column in tables.

**syntax**

```
alter table tablename add columnname datatype(size)
or
alter table employee add country varchar(255);
or
alter table employee add state varchar(255);
or
alter table employee add photo blob after name;
or
alter table employee change phone mobile bigint;
or
alter table employee add unique(`mobile`);

```



## drop :

  - drop is used to drop any database & table structure.
  - drop is delete structures of database & tables.
  - after drop we never rollback structure & data.

  **syntax**

  ```
  drop database databasename
  or 
  drop database db_app;

  drop table tablename
  or 
  drop table employee
  or
  drop table users

  ```

## truncate :

  1. truncate is used to delete or remove all data from tables.
  2. truncate is used to empty all data from tables.
  3. after  truncate we never rollback data.

  **syntax**

  ```
  truncate
  or
  truncate table employee
  ```




## rename :

1. rename is used to change any table name.

**syntax**

```
rename 
```



## revised 
**create a table tbl_reviews with following column name**

```
tbl_reviews

rid 
name 
email
phone
raiting
comment

```














## DML : Data manipulation  Language

1. DML is used manipulate data in tables.
2. DML is used to insert | delete | update data in tables.
3. DML used for manipulation of data.

**query used in DML**

1. insert
2. delete
3. update


## HOW to insert data in tables 

**syntax**

```
insert into tablename(columnname)values('value')
or
insert into tbl_employee(name,image,password,gender,hobby,address,mobile,country,state)VALUES('kumar','kumar.jpg','k564588','male','read,playing','rajkot','1234567890','india','gujrat');
or
insert into tbl_employee(name,image,password,gender,hobby,address,mobile,country,state)VALUES('deep','kumar.jpg','k564588','male','read,playing','rajkot','1234567890','india','gujrat'),('lokesh','kumar.jpg','k564588','male','read,playing','rajkot','5234567890','india','gujrat'),('priyanka','kumar.jpg','k564588','male','read,playing','rajkot','1534567890','india','gujrat');
```
# How can we delete data

1. All data delete from tables

  ```
  delete from tablename
  or
  delete from tbl_employee;
  ```
2. delete one rows from table

  
  ```
  delete from tablename where 
  or
  delete from tbl_employee;
  ```



## DQL :

  1. data query language
  2. DQL is used to select data or fetch data

  ## DQL QUERY :

  1. select

    **fetch data or select data**

    - select all data from 


# alias of column name 

  1. alias is a nick name of columns.
   ```

   ```


## SQL function :

  1. SQL provides its inbulit function
  2. SQL function are 

    - aggrigate function 
      -sum()
      -avg()
      -count()
      -max()
      -min()
    -scalar function
      -first()
      -last()
      -lcase()
      -ucase()
      -now()
      -datetime()
      -timestamp()

  # sql function query....

    1. 


**scaler**

  1. select first(empid)from tbl_employee;
  2. select last(empid)from tbl_employee;
  3. select lcase(name)from tbl_employee;
  4. select ucase(name)from tbl_employee;
  5. select now(added_date_time) from tbl_employee;
  6. select datetime(added_date_time) from tbl_employee;
  7. select timestamp(added_date_time) from tbl_employee;


# subquery :

  1. subquery is used query within another query i.e called subquery.






# SQL Key constraints :

1. SQL key constraints are set a limit on tables.
2. SQL key constraints are 3 types in SQL 

  - primary key 
  - unique key
  - foreign key 

## PRIMARY KEY :-

1. A PRIMARY KEY provides unique data.
2. A PRIMARY KEY always should be auto_increment with primary key.
3. A PRIMARY KEY only provides one time in a tables.
4. A PRIMARY KEY never return null value.

```
  |  id(PK)  |   name   |  age  |  address  |
  |----------|----------|-------|-----------|
  |   1      |    abc   |  27   |   rjt     |
  |   2      |   xyz    |  22   |   surt    |


```

```

  create table tbl_department(

    depid int auto_increment primary key,
    depname varchar(255)
  );
```


## unique key :- 

1. A UNIQUE KEY provides unique data ON TABLES.
2. A UNIQUE KEY anever return a dublicate data.
3. A UNIQUE KEY provides more than one columns in a tables
4. A UNIQUE KEY return one time a null value

**tbl_users**

```
  |  id(PK)  |   name   |  age  |  address  |  phone(uk) |
  |----------|----------|-------|-----------|------------|
  |   1      |    abc   |  27   |   rjt     | 9125469871 | 
  |   2      |    xyz   |  22   |   surt    | 9214569875 |


```
  create table tbl_userd(
    uid int AUTO_INCREMENT PRIMARY key ,
    name varchar(255),
    age int,
    phone bigint );

    alter TABLE tbl_userd add unique(`phone`);


## foregin key :- 

**tbl_faculty**

  create TABLE tbl_faculty (
    fid int AUTO_INCREMENT primary key,
    facultyname varchar(255) );


## index

**single index**


**view**
```
  create view tbl_emp_view as select empid,name,mobile from tbl_employee where empid in(1,3,4);
```

## csv(comma seperated value) file import :-


## excel(.)

## case when :

- check a multiple case using case when
- check a multiple case using case when and also check logic based things there used case when.

```
select name,salary , case when salary>=100000 then "higher earner" when  salary>=25500 then "medium earner" else "lower earner" end as salary_earner_list from tbl_salesman;
```
## round | now function in sql :-

1. round :

- round is used to round a soeci



# windows function :-

  - windows func. are used to apply calculation & add unique rows in a tables there we use windows func.
  - windows func. are used to add or set a rows related to the current row without grouping the result into a single row.

**types of windows function**

1. row_number()
2. rank()
3. dense_rank()
4. ntile()
5. lag()
6. lead()
7. first_value()
8. last_value()
9. sum() over()
10. avg() over()
11. count() over()
12. max() over()
13. min over()

**examples of window function** :-

1. row_number() :- assign a unique number to each row 





## Home work

**students based database**

1. create a database named "school"
```
Create database school;
```
  
2. create a table named "students" with the following columns: id (primary key), name, age, grade, and country_id (foreign key referencing the country table).
3. insert at least 5 records into the students table.
4. create a table named "country" with the following columns: country_id (primary key) and country_name.
5. insert at least 3 records into the country table.
6. write a query to select all students along with their country names.
7. write a query to find the average age of students in each grade.
8. write a query to find the total number of students in each country.
9. write a query to find the student with the highest grade.
10. write a query to update the grade of a student with a specific id.
11. write a query to delete a student with a specific id.


**add to cart based database**

1. create a database named "ecommerce_app"

2. create a table named "products" with the following columns: 

product_id (primary key), product_name, price, and stock.

3. insert at least 5 records into the products table.

4. create a table named "customers" with the following columns: 

customer_id (primary key), customer_name, email, and country_id (foreign key referencing the country table).

5. insert at least 3 records into the customers table.   

6. create a table named "orders" with the following columns:

 order_id (primary key), customer_id (foreign key referencing the customers table), product_id (foreign key referencing the products table), quantity, and order_date.

7. insert at least 5 records into the orders table.   

8. write a query to select all orders along with customer names and product names.

9. write a query to find the total revenue generated from all orders.

10. write a query to find the most popular product based on the quantity ordered.

11. write a query to update the stock of a product after an order is placed.

12. write a query to delete an order with a specific order_id.

**all solutions of ecommerce_app database**



**task based questions**

**faculty based database**

1. create a database named "university"

2. create a table named "faculty" with the following columns: faculty_id (primary key), faculty_name, department, and country_id (foreign key referencing the country table) and 
provides email as unique key in faculty tables.

3. insert at least 5 records into the faculty table.

4. create a table named "courses" with the following columns: course_id (primary key), course_name, and faculty_id (foreign key referencing the faculty table).

5. insert at least 3 records into the courses table.  

6. create a table named "students" with the following columns: student_id (primary key), student_name, age, and country_id (foreign key referencing the country table).

7. insert at least 5 records into the students table.

8. create a table named "enrollments" with the following columns: enrollment_id (primary key), student_id (foreign key referencing the students table), course_id (foreign key referencing the courses table), and enrollment_date.
9. insert at least 5 records into the enrollments table.

10. write a query to select all enrollments along with student names and course names.

11. write a query to find the total number of students enrolled in each course.

12. write a query to find the faculty member teaching the most courses.

13. write a query to update the department of a faculty member with a specific faculty_id.

14. write a query to delete a student with a specific student_id.

**Note: after creating database and tables you will insert some data in that tables then you will apply all the queries on that data to understand better**

**solutions of students tables** 