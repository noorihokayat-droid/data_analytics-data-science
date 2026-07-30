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
```
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
