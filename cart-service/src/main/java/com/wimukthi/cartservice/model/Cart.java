package com.wimukthi.cartservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@RedisHash("Cart")
public class Cart {
    @Id
    private String id;
    private List<CartItem> items = new ArrayList<>();
    private BigDecimal totalPrice = BigDecimal.ZERO;
}
