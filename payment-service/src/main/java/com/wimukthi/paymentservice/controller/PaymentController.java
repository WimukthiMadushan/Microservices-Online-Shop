package com.wimukthi.paymentservice.controller;

import com.wimukthi.paymentservice.dto.PaymentRequest;
import com.wimukthi.paymentservice.dto.PaymentResponse;
import com.wimukthi.paymentservice.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public Mono<PaymentResponse> doPayment(@RequestBody PaymentRequest paymentRequest) {
        return paymentService.processPayment(paymentRequest);
    }
}
