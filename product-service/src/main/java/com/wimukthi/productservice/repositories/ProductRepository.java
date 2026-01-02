package com.wimukthi.productservice.repositories;

import com.wimukthi.productservice.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
