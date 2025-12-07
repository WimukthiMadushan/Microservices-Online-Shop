package com.wimukthi.orderservice.repositories;

import com.wimukthi.orderservice.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository  extends JpaRepository<Order, Long> {
}
