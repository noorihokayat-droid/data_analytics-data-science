## Home work

**students based database**

1. create a database named "school"
```
Create database school;
```
  
2. create a table named "students" with the following columns: id (primary key), name, age, grade, and country_id (foreign key referencing the country table).
```
create table country (
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) 
    );

CREATE table students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(50),
    age int,
    grade ENUM('a','b','c','d'),
    country_id int,
    FOREIGN KEY(country_id)REFERENCES country(id)
    );
```

3. insert at least 5 records into the students table.
```
insert into students(name,age,grade)VALUES('ananya',21,'b'),('riya',22,'a'),('siya',21,'b'),('priya',22,'c'),('krina',21,'c');
```

4. create a table named "country" with the following columns: country_id (primary key) and country_name.
```
create table country (
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) 
    );
```

5. insert at least 3 records into the country table.
```
insert into country(name)VALUES('rajkot'),('morbi'),('ahemdabad'),('surat'),('gondal');
```

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