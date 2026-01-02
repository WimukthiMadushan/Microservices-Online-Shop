package com.wimukthi.orderservice.client;

import com.wimukthi.orderservice.dto.PaymentRequest;
import com.wimukthi.orderservice.dto.PaymentResponse;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.service.annotation.PostExchange;

public interface PaymentClient {

    @PostExchange("/api/payment")
    PaymentResponse doPayment(@RequestBody PaymentRequest paymentRequest);
}
