package com.wimukthi.orderservice.dto;

public record PaymentRequest(String orderId, Double amount, String paymentMode) {}
