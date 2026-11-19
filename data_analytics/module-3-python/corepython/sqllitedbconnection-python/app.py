# sqlite is a database 
# sqlite is a open source database
# sqlite is inbuilt module in python
# sqlite3 is deafult module support in python

import sqlite3
# create a connection with a database
conn =sqlite3.connect("students_management_system")
# print("database connected successfully")

#create a schema of tables 
cur=conn.cursor()
#create a table
cur.execute(
    """
    create table if not exists users(
        uid integer primary key autoincrement,
        username text,
        password text,
        mobile integer,
        gender text,
        hobby text,
        pincode integer,
        created_date text
    )

"""
)


#create table country 
cur.execute(
    """
    create table if not exists country(
        cid integer primary key autoincrement,
        cname text,
        created_date text
    )

"""
)

# create table state 
cur.execute(
    """
    create table if not exists state(
        sid integer primary key autoincrement,
        sname text,
        created_date text
    )

"""
)


# create table city 
cur.execute(
    """
    create table if not exists city(
        cid integer primary key autoincrement,
        cname text,
        created_date text
    )

"""
)

# create table rating 
cur.execute(
    """
    create table if not exists rating(
        uid integer primary key autoincrement,
        cname text,
        rating text,
        created_date text
    )

"""
)

#create a normalization type of task based table of category|subcategory|customers | colors | size | product | cart | orders
# create table category . 


import sqlite3

conn =sqlite3.connect("students_management_system")
cur = conn.cursor()

# ================= CATEGORY =================
cur.execute("""
CREATE TABLE IF NOT EXISTS category(
    catid INTEGER PRIMARY KEY AUTOINCREMENT,
    catname TEXT,
    created_date TEXT
)
""")

# ================= SUBCATEGORY =================
cur.execute("""
CREATE TABLE IF NOT EXISTS subcategory(
    subcatid INTEGER PRIMARY KEY AUTOINCREMENT,
    catid INTEGER,
    subcatname TEXT,
    created_date TEXT,
    FOREIGN KEY(catid) REFERENCES category(catid)
)
""")

# ================= COLORS =================
cur.execute("""
CREATE TABLE IF NOT EXISTS colors(
    colorid INTEGER PRIMARY KEY AUTOINCREMENT,
    colorname TEXT,
    created_date TEXT
)
""")

# ================= SIZE =================
cur.execute("""
CREATE TABLE IF NOT EXISTS size(
    sizeid INTEGER PRIMARY KEY AUTOINCREMENT,
    sizename TEXT,
    created_date TEXT
)
""")

# ================= CUSTOMERS =================
cur.execute("""
CREATE TABLE IF NOT EXISTS customers(
    customerid INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    age INTEGER,
    mobile TEXT,
    address TEXT
)
""")

# ================= PRODUCTS =================
cur.execute("""
CREATE TABLE IF NOT EXISTS products(
    pid INTEGER PRIMARY KEY AUTOINCREMENT,
    catid INTEGER,
    subcatid INTEGER,
    colorid INTEGER,
    sizeid INTEGER,
    pname TEXT,
    qty INTEGER,
    oldprice REAL,
    offerprice REAL,
    descriptions TEXT,
    created_at TEXT,

    FOREIGN KEY(catid) REFERENCES category(catid),
    FOREIGN KEY(subcatid) REFERENCES subcategory(subcatid),
    FOREIGN KEY(colorid) REFERENCES colors(colorid),
    FOREIGN KEY(sizeid) REFERENCES size(sizeid)
)
""")

# ================= CART =================
cur.execute("""
CREATE TABLE IF NOT EXISTS cart(
    cartid INTEGER PRIMARY KEY AUTOINCREMENT,
    pid INTEGER,
    customerid INTEGER,
    qty INTEGER,
    subtotal REAL,
    created_at TEXT,

    FOREIGN KEY(pid) REFERENCES products(pid),
    FOREIGN KEY(customerid) REFERENCES customers(customerid)
)
""")

# ================= ORDERS =================
cur.execute("""
CREATE TABLE IF NOT EXISTS orders(
    orderid INTEGER PRIMARY KEY AUTOINCREMENT,
    cartid INTEGER,
    customerid INTEGER,
    qty INTEGER,
    subtotal REAL,
    ordercode TEXT UNIQUE,
    status TEXT,
    created_at TEXT,

    FOREIGN KEY(cartid) REFERENCES cart(cartid),
    FOREIGN KEY(customerid) REFERENCES customers(customerid)
)
""")



# Save Tables
conn.commit()
print("Tables created successfully")

# Close Connection
conn.close()