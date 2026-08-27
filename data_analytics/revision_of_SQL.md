# <center><h1> REVISION OF SQL & IT'S QUIRES :- </h1></center>

# sql :-

- structured query language 
- case insensitive
- create database & table structured.


# database :- 

- collection of tables that used to store information.
- ex : 1.oracel 2.mongoDB 3.sqlite 4.mysql 5.sql server

# DBMS :-

- DATABASE MANAGEMENT SYSTEM.
- used to manage database.

# RDBMS :-

- RELATIONAL DATABASE MANAGEMENT SYSTEM.
- used to manage GUI(Graphical User Interface) of database.
- provide relation b/w database & its table.

# sql command & query :-

1. DDL (Data Definition Laguage)
2. DML (Data Manipulation Language)
3. DQL (Data Query Language)
4. TCL (Transaction Control Language)

<center><h1> 1. DDL (Data Definition Laguage) </h1></center>

- used to create database & table structure & table definition

# query of DDL :-

<h2>(i) create :- </h2>

**syntax**

```
create database database name
           or
create table tablename
```
**sql table structure**

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
| defaulttimezone  | timestamp   | default timezone set time and date|

**example to create Database & table**

```
create database DB_EMPLOYEE;

create table employee
(
    id int AUTO_INCREMENT primary key,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    phone varchar(255),
    gender enum('male','female','other'),
    salary decimal(10,2),
    department enum('it','cse','hr','develper')
    status bit(1) 
);
```
# <h2>(ii) alter :- </h2>

- alter tables add column | modify column | update column in tables

**syntax**
```
    alter table tablename add columnname datatype(size);
```

**example**
```
    alter table employee add country(255);
                    or
    alter table employee add photo blob after name;
                    or
    alter table employee change phone mobile bigint;
                    or
    alter table employee add unique(`mobile`);
```

# <h2>(iii) drop :- </h2>

- delete database or table structure
- never rollback structure & data

**syntax**
```
drop database databasename;
            or
drop table tablename;
```
# <h2>(iv) truncate :- </h2>

- delete or remove all data from table
- empty all data & we never rollback

**syntax**
```
truncate table tablename;
```
# <h2>(v) rename :- </h2>

- change any table name 

**syntax**
```
rename table tablename to newtablename;
        or
rename table employee to tbl_employee;
```


<center><h1> 1. DML (Data Manipulation Laguage) </h1></center>

- used to manipulate data in table like INSERT | UPDATE | DELETE 

# Query of DML :-

# <h2>(i) insert :- </h2>

- insert data/information in table

**syntax**
```
insert into tablename(columnname)values('value');
```

# <h2>(ii) update :- </h2>

- update records in table.
- important keywords : set & where

**syntax**

```
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```
# <h2>(iii) Delete :- </h2>

**syntax**

1. to delete all data from tables

```
    delete from tablename;
```

2. delete  one row from table 
```
    delete from tablename where id=1;
```

3. delete two or more row from table 
```
    delete from tablename where id in(5,6);
```

4. delete range from table 
```
    delete from tablename where id between 5 and 12;
```

5. delete from name column name from table 
```
    delete from tablename where name='kajal';
```

6. delete data or raw using limit
```
    delete from tablename where id > 0 limit 4;
```