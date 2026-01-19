package com.wimukthi.orderservice.strategy;

import com.wimukthi.orderservice.client.PaymentClient;
import com.wimukthi.orderservice.dto.PaymentRequest;
import com.wimukthi.orderservice.dto.PaymentResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
@RequiredArgsConstructor
@Slf4j
public class PayPalPaymentStrategy implements PaymentStrategy {

    private final PaymentClient paymentClient;

    @Override
    public PaymentResponse processPayment(String orderNumber, BigDecimal amount) {
        log.info("Processing PayPal payment for order {}", orderNumber);
        PaymentRequest request = new PaymentRequest(orderNumber, amount.doubleValue(), "PAYPAL");
        return paymentClient.doPayment(request);
    }

    @Override
    public String getPaymentType() {
        return "PAYPAL";
    }
}
