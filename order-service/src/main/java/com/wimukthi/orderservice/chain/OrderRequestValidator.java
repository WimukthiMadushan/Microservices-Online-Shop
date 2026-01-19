package com.wimukthi.orderservice.chain;

import com.wimukthi.orderservice.dto.OrderRequest;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class OrderRequestValidator {

    private final InventoryCheckHandler inventoryCheckHandler;
    
    // You can inject other handlers here:
    // private final FraudCheckHandler fraudCheckHandler;

    private OrderValidationHandler head;

    @PostConstruct
    public void init() {
        // Construct the chain: Inventory -> (Others)
        head = inventoryCheckHandler;
        
        // Example of chaining:
        // head.setNext(fraudCheckHandler).setNext(paymentLimitHandler);
    }

    public void validate(OrderRequest request) {
        if (head != null) {
            head.handle(request);
        }
    }
}
