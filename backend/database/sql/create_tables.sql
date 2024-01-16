CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY NOT NULL,
  username varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  created_at date NOT NULL,
  updated_at date NOT NULL
);
