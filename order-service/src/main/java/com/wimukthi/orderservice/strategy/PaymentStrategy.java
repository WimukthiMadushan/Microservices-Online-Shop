package com.wimukthi.orderservice.strategy;

import com.wimukthi.orderservice.dto.PaymentResponse;
import java.math.BigDecimal;

public interface PaymentStrategy {
    PaymentResponse processPayment(String orderNumber, BigDecimal amount);
    String getPaymentType();
}
