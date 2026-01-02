package com.wimukthi.cartservice.repository;

import com.wimukthi.cartservice.model.Cart;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends CrudRepository<Cart, String> {
}
