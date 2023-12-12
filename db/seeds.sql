
 INSERT INTO department (department)
VALUES ('Engineering'),
       ('Operations'),
       ('Finance');

-- done      
INSERT INTO role ( title, department, salary )
VALUES ('Engineer', 'Engineering',  125009.04),
       ('CSR', 'Operations', 40093.98),
       ('Analyst', 'Finance', 79900.78);

-- done       
INSERT INTO employee (f_name, l_name, title, department, salary, manager)
VALUES ('Mak', 'Russell', 'Developer', 'Engineering', 140000.45, 'Mak' ),
       ('Jerry', 'Lundsford', 'Developer', 'Engineering', 140000.54, 'Mike' ),
       ('Al', 'Pastor', 'CSR', 'Operations', 60450.34, 'Jerry' ),
       ('Eileen', 'Dover', 'CSR', 'Operations', 66450.23,  'Mak' ),
       ('Mike', 'Nike', 'Analyst', 'Finance', 114600.54, 'Mak' ),
       ('Lily', 'Plunder', 'Analyst', 'Finance', 123600.45, 'Mak' );