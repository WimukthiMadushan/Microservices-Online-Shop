package com.wimukthi.productservice.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class ProductRequest {
    private String id;
    private String name;
    private String description;
    private String skuCode;
    private BigDecimal price;
}
