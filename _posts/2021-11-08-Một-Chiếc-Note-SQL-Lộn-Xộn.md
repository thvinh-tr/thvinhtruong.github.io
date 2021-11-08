---
layout: post
title:  "Một chiếc note sql lộn xộn"
date:   2021-11-08 12:51:20
categories: Note
sticky: true
---

# SQL Basic 

- SQL is a database computer language designed for the retrieval and management of data in a relational database. SQL stands for Structured Query Language. This tutorial will give you a quick start to SQL. It covers most of the topics required for a basic understanding of SQL and to get a feel of how it works.

# Application:
- Allows users to access data in the relational database management systems.
- Allows users to describe the data.
- Allows users to define the data in a database and manipulate that data.
- Allows to embed within other languages using SQL modules, libraries & pre-compilers.
- Allows users to create and drop databases and tables.
- Allows users to create view, stored procedure, functions in a database.
- Allows users to set permissions on tables, procedures and views.

# RDBMS
RDBMS stands for Relational Database Management System. RDBMS is the basis for SQL, and for all modern database systems like MS SQL Server, IBM DB2, Oracle, MySQL, and Microsoft Access.

A Relational database management system (RDBMS) is a database management system (DBMS) that is based on the relational model as introduced by E. F. Codd.
--> Just simply a software program helps users interact and create database

interact: create, read (retrieve), update, delete (CRUD) --> all database management system will do these

# Relational and Non-relational

Relational is just like a table database (related to each other)
- create and maintain relational database --> using RDBMS
RDBMS will implement SQL

- using other DBMS to create and maintain non relational database --> JSON, XML, Graph, Key-Hash
- non RDBMS: mongoDB, dynamoDB,... these will perform their own language to CRUD,...

# Queries

request made to DBMS for a specific information. Ex: GG search.

# Primary key
uniquely identified
anytime create a relational DB
- primary key
- surrogate key: no mapping key (in the real world)
- natural key: key has purpose in real world. Ex: national ID, passport ID,...
- foreign key: key links another DB. Ex: company has many branches, each branch is labeled a different key --> 2 employees can have same branch (same foreign key).


# Notice
RDBMS speaks "SQL" :)))

# SQL
is totally a hybrid language
- Data Query Language(DQL):
    - Query information from db -> to get information already store there.
- Data Definition Language (DDL):
    - Use to define DB schemas
- Data Control Language (DCL):
    - control access operation of the DB
    - user and permission management
- Data Manipulation Language (DML):
    - insert, update, delete d ata from database.
 
# Queries again
- set of instruction send to RDBMS to retrieve information that we want.

# SQL Constraints

Constraints are the rules enforced on data columns on a table.
These are used to limit the type of data that can go into a table.
This ensures the accuracy and reliability of the data in the database.

Constraints can either be column level or table level. Column level constraints are applied only to one column whereas, table level constraints are applied to the entire table.

- NOT NULL: NULL value is not allowed in that column. NULL represents for unknown data.
    CREATE TABLE CUSTOMERS (
        ID   INT              NOT NULL,
        NAME VARCHAR (20)     NOT NULL,
        AGE  INT              NOT NULL,
        ADDRESS  CHAR (25) ,
        SALARY   DECIMAL (18, 2),       
        PRIMARY KEY (ID)
    );

DEFAULT: provide specific value for a specific column (when inserting nothing to a column)
    CREATE TABLE CUSTOMERS (
        ID   INT              NOT NULL,
        NAME VARCHAR (20)     NOT NULL,
        AGE  INT              NOT NULL,
        ADDRESS  CHAR (25) ,
        SALARY   DECIMAL (18, 2) DEFAULT 5000.00,     
        PRIMARY KEY (ID)
    );

UNIQUE: prevents two records from having identical values in a column. In the CUSTOMERS table, for example, you might want to prevent two or more people from having an identical age.
    CREATE TABLE CUSTOMERS (
        ID   INT              NOT NULL,
        NAME VARCHAR (20)     NOT NULL,
        AGE  INT              NOT NULL UNIQUE,
        ADDRESS  CHAR (25) ,
        SALARY   DECIMAL (18, 2) DEFAULT 5000.00,     
        PRIMARY KEY (ID)
    );
    - With existed table, we can write:
        ALTER TABLE CUSTOMERS
            MODIFY AGE INT NOT NULL UNIQUE;
    - Constraint UNIQUE for multiple columns:
        ALTER TABLE CUSTOMERS
            ADD CONSTRAINT myUniqueConstraint UNIQUE(AGE, SALARY);

PRIMARY Key: is a field in a table which uniquely identifies each row/record in a database table. Primary keys must contain unique values and no NULL value (must not identical and not NULL). 
- A table must have only one PRIMARY KEY, which may consist of many fields (many fields can use it or it maps to bunch of fields) --> in this case: Composite Key.
Note: If a table has a primary key defined on any field(s), then you cannot have two records having the same value of that field(s)
Firstly, create a ID column.
    CREATE TABLE CUSTOMERS (
        ID   INT              NOT NULL,
        NAME VARCHAR (20)     NOT NULL,
        AGE  INT              NOT NULL,
        ADDRESS  CHAR (25) ,s
        SALARY   DECIMAL (18, 2),       
        PRIMARY KEY (ID)
    );
Then, set it to be primary key.
    ALTER TABLE CUSTOMER ADD PRIMARY KEY (ID);


FOREIGN Key − Uniquely identifies a row/record in any another database table.

CHECK Constraint − The CHECK constraint ensures that all values in a column satisfy certain conditions.

INDEX − Used to create and retrieve data from the database very quickly.

# Syntaxes
All the SQL statements start with any of the keywords like SELECT, INSERT, UPDATE, DELETE, ALTER, DROP, CREATE, USE, SHOW and all the statements end with a semicolon (;)

- Notice: SELECT and select have same meaning in SQL statements. 
    - MySQL makes difference in table names --> need to give table names as they exist in the database

- SQL SELECT Statement

    SELECT column1, column2....columnN
    FROM   table_name;

- SQL DISTINCT 

    SELECT DISTINCT column1, column2....columnN
    FROM   table_name;

- SQL WHERE 

    SELECT column1, column2....columnN
    FROM   table_name
    WHERE  CONDITION;

- SQL AND/OR 

    SELECT column1, column2....columnN
    FROM   table_name
    WHERE  CONDITION-1 {AND|OR} CONDITION-2;

- SQL IN 

    SELECT column1, column2....columnN
    FROM   table_name
    WHERE  column_name IN (val-1, val-2,...val-N);

SQL BETWEEN

    SELECT column1, column2....columnN
    FROM   table_name
    WHERE  column_name BETWEEN val-1 AND val-2;

- SQL LIKE

    SELECT column1, column2....columnN
    FROM   table_name
    WHERE  column_name LIKE { PATTERN };

- SQL ORDER BY

    SELECT column1, column2....columnN
    FROM   table_name
    WHERE  CONDITION
    ORDER BY column_name {ASC|DESC};

- SQL GROUP BY

    SELECT SUM(column_name)
    FROM   table_name
    WHERE  CONDITION
    GROUP BY column_name;

- SQL COUNT

    SELECT COUNT(column_name)
    FROM   table_name
    WHERE  CONDITION;

- SQL HAVING

    SELECT SUM(column_name)
    FROM   table_name
    WHERE  CONDITION
    GROUP BY column_name
    HAVING (arithematic function condition);

- SQL CREATE TABLE Statement

    CREATE TABLE table_name(
    column1 datatype,
    column2 datatype,
    column3 datatype,
    .....
    columnN datatype,
    PRIMARY KEY( one or more columns )
    );

- SQL DROP TABLE Statement

    DROP TABLE table_name;

- SQL CREATE INDEX Statement

    CREATE UNIQUE INDEX index_name
    ON table_name ( column1, column2,...columnN);

- SQL DROP INDEX Statement

    ALTER TABLE table_name
    DROP INDEX index_name;

- SQL DESC Statement

    DESC table_name;

- SQL TRUNCATE TABLE Statement

    TRUNCATE TABLE table_name;

- SQL ALTER TABLE Statement

    ALTER TABLE table_name {ADD|DROP|MODIFY} column_name {data_ype};

- SQL ALTER TABLE Statement (Rename)

    ALTER TABLE table_name RENAME TO new_table_name;

- SQL INSERT INTO Statement

    INSERT INTO table_name( column1, column2....columnN)
    VALUES ( value1, value2....valueN);

- SQL UPDATE Statement

    UPDATE table_name
    SET column1 = value1, column2 = value2....columnN=valueN
    [ WHERE  CONDITION ];

- SQL DELETE Statement

    DELETE FROM table_name
    WHERE  {CONDITION};
- SQL CREATE DATABASE Statement

    CREATE DATABASE database_name;

- SQL DROP DATABASE Statement

    DROP DATABASE database_name;

- SQL USE Statement

    USE database_name;
    
- SQL COMMIT Statement

    COMMIT;

- SQL ROLLBACK Statement

    ROLLBACK;

# Datatypes
link: https://www.tutorialspoint.com/sql/sql-data-types.htm

# Operators
link: https://www.tutorialspoint.com/sql/sql-operators.htm

# SQL function
Notice: ví dụ để đếm số lượng nam nữ trong một bảng bảng: SELECT COUNT(gender), gender --> Cái này có nghĩa tương ứng: vế trái trả về giá trị count, trong khi đó vế phải trả về giá trị ở ô gender (nam / nữ). Tương tự với SUM(sales), id --> một bên trả về giá trị sales, một bên trả về id tương ứng.

Đối với GROUP BY: có nghĩa là lọc ra với giá trị nào, thường sẽ là giá trị bên phải (sau dấu phẩy của hàm).

# WILDCARD
giống regular expression

# ON DELETE

Problem: khi thao tác với những DB phức tạp, việc dùng nhiều foreign key là điều hiển nhiên. Vậy khi delete cái foreign key đó thì sao?

1. Giả sử một employee ở một ngân hàng ABC có ID là 10, đang là giám đốc branch số 2, nếu một ngày nhân viên đó nghỉ việc thì hiển nhiên vị trí giám đốc ở chi nhánh số 2 của ngân hàng ABC sẽ là ghế trống, tương ứng với giá trị NULL, vì vậy khi định nghĩa foreign key, ta thường đi kèm với "ON DELETE SET NULL" --> có nghĩa là khi xoá cái primary key đó, đồng nghĩa với việc những foreign key tương ứng sẽ chuyển về NULL (có hiểu sai chỗ này hok ta)

2. Giả sử chi nhánh 2 của ngân hàng ABC tự nhiên phá sản, như vậy chỉ còn chi nhánh 1 và chi nhánh 3 (vị trí giám đốc có ID 10 vẫn giữ nguyên), giả sử chi nhánh 2 có ID là 2 và làm việc với những khách hàng lần lượt là X, Y và Z. Nếu một ngày nó phá sản, chuyện gì xảy ra? Thứ nhất, khi phá sản thì những khách hàng thân thiết như X, Y, Z sẽ cay cú mất tiền ra đi, có nghĩa là sẽ không còn 3 khách hàng trên nữa, vì họ thuộc về chi nhánh 2 mà chi nhánh 2 phá sản, vậy dữ liệu gốc của ngân hàng sẽ mất toàn bộ thông tin liên quan đến 3 người kia. Như vậy, khi ta xoá đi ID 2 của chi nhánh ngân hàng ABC, đồng nghĩa với việc ta xoá luôn cả ba khách hàng X, Y, Z với thông tin cá nhân, số tiền của họ (những data này biểu diễn như một table). Trong case này, thay vì set null cho 3 khách hàng, ta sẽ dùng "ON DELETE CASCADE" --> nghĩa là xoá toàn bộ những thứ liên quan đến object.

In general, bởi vì ID của chi nhánh (branch), không liên quan đến ID của giám đốc hay nhân viên ở đó, giả sử giám đốc / nhân viên ở đó có nghỉ việc thì cũng không thể bay nguyên cái chi nhánh được (không thể dùng cascade). Nghĩa là branch id chỉ là một foreign key và tách biệt với primary key (tức là id của nhân viên) --> dùng delete set null (lý do giải thích ở trên). Và ngược lại với cascade, branch id và id của khách hàng (primary) có liên quan đến nhau, hai cái này hợp lại gọi là composite key. Nói dễ hiểu, thì primary key hoặc những thứ liên quan đến primary key không bao giờ accept giá trị NULL, nên không set NULL được --> dùng delete cascade.