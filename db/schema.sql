DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;
USE business_db;

CREATE TABLE department ( -- done
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  department VARCHAR(30) NOT NULL
);

CREATE TABLE role ( -- done
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
  title VARCHAR(30) NOT NULL, -- same as role_id
  department VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL
  -- FOREIGN KEY (department) REFERENCES department(department) // not required per README
);

CREATE TABLE employee ( -- done
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  f_name VARCHAR(30) NOT NULL,
  l_name VARCHAR(30) NOT NULL,
  title VARCHAR(30) NOT NULL, -- same as role_id
  department VARCHAR(30) NOT NULL,
  salary DECIMAL(10, 2) NOT NULL,
  manager VARCHAR(30) NOT NULL
  -- FOREIGN KEY (dept_id) REFERENCES department(dept_id), // not required per README
  -- FOREIGN KEY (role_id) REFERENCES role(role_id)
);