package com.wimukthi.paymentservice.service;

import com.wimukthi.paymentservice.dto.PaymentRequest;
import com.wimukthi.paymentservice.dto.PaymentResponse;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.UUID;

@Service
public class PaymentService {

    public Mono<PaymentResponse> processPayment(PaymentRequest paymentRequest) {
        // Dummy Starpie Payment Logic
        return Mono.just(PaymentResponse.builder()
                .paymentId(UUID.randomUUID().toString())
                .status("SUCCESS")
                .transactionId(UUID.randomUUID().toString())
                .build());
    }
}
