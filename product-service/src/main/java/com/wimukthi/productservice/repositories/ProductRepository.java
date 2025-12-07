package com.wimukthi.productservice.repositories;

import com.wimukthi.productservice.models.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product,String> {
}
