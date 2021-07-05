CREATE TABLE IF NOT EXISTS products (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  amount INT UNSIGNED NOT NULL,
  price INT UNSIGNED NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE products
MODIFY COLUMN price DECIMAL(10,2) NOT NULL;

INSERT INTO products 
  (name, amount, price)
VALUES 
  ('miojo', 20, 2.25);

desc products