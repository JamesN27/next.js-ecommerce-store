-- This file is only my notes, changing
-- this file doesn't change anything in
-- the database

-- Create jerseys table

CREATE TABLE jerseys (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  price integer,
);


-- Insert some jerseys (C in CRUD - Create)

INSERT INTO jerseys
  (name, price )
VALUES
  ('Denver Nuggets Jersey', 100 ),
  ( 'Los Angeles Lakers Jersey',  70 ),
  ( 'San Antonio Spurs Jersey',  40 ),
  ( 'Milwaukee Bucks Jersey',  100 ),
  ( 'Atlanta Hawks Jersey',  70  );
  ( 'Detroit Pistons Jersey',  40  );
