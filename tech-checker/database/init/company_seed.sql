-- The table needs to be dropped each time you restart nodemon. This is necessary for the Postman tests.
-- === DROP TABLE ====================

DROP TABLE IF EXISTS companies;

-- === CREATE TABLE ==================


CREATE TABLE IF NOT EXISTS companies (
  id serial primary key,
  company_name text,
  mtech_used text,
  year integer,
  owner_id integer references users(id)
);

-- === INSERT STATEMENT ===============

-- Complete the insert statement below. The values below need to be inserted into the 'vehicles' table.

insert into companies(make, model, year, owner_id) values
('Apple', 'Swift, HTML5, SCSS'),
('Tesla','React, Joomla, C#'),
('Overstock', 'React, React Native, Internet Stuff');
