CREATE TABLE t_products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    sku_code VARCHAR(255),
    price DECIMAL(19, 2)
);