package com.wimukthi.orderservice.services;


import com.wimukthi.orderservice.client.InventoryClient;
import com.wimukthi.orderservice.dto.OrderRequest;
import com.wimukthi.orderservice.event.OrderPlacedEvent;
import com.wimukthi.orderservice.models.Order;
import com.wimukthi.orderservice.repositories.OrderRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderService {

    private final OrderRepository orderRepository;
    // InventoryClient is now used inside the Chain of Responsibility
    private final com.wimukthi.orderservice.chain.OrderRequestValidator orderRequestValidator;
    private final com.wimukthi.orderservice.strategy.PaymentStrategyFactory paymentStrategyFactory;
    private final KafkaTemplate<String, OrderPlacedEvent> kafkaTemplate;

    @Transactional
    public void placeOrder(OrderRequest orderRequest) {
        // Validate Order using Chain of Responsibility (Inventory Check, etc.)
        orderRequestValidator.validate(orderRequest);

        // If validation passed, proceed with order creation
        Order order = new Order();
        order.setOrderNumber(UUID.randomUUID().toString());
        order.setPrice(orderRequest.price().multiply(BigDecimal.valueOf(orderRequest.quantity())));
        order.setSkuCode(orderRequest.skuCode());
        order.setQuantity(orderRequest.quantity());
        orderRepository.save(order);

        // Call Payment Service via Strategy
        var paymentStrategy = paymentStrategyFactory.getStrategy(orderRequest.paymentMethod());
        paymentStrategy.processPayment(order.getOrderNumber(), order.getPrice());
        log.info("Payment processed successfully for order {} using {}", order.getOrderNumber(), paymentStrategy.getPaymentType());

        // send the message to the kafka topic
        var orderPlacedEvent = new OrderPlacedEvent(order.getOrderNumber(), "wimukthimadushan6@gmail.com");
        log.info("Order Placed Event is {}", orderPlacedEvent);
        kafkaTemplate.send("order-placed", orderPlacedEvent);
    }

}
