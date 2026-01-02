package com.wimukthi.productservice.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class ProductRequest {
    private Long id;
    private String name;
    private String description;
    private String skuCode;
    private BigDecimal price;
    private Integer quantity;
}
