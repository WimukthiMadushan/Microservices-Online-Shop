package com.wimukthi.orderservice.chain;

import com.wimukthi.orderservice.dto.OrderRequest;

public abstract class OrderValidationHandler {
    
    private OrderValidationHandler next;

    public OrderValidationHandler setNext(OrderValidationHandler next) {
        this.next = next;
        return next;
    }

    public abstract void handle(OrderRequest request);

    protected void handleNext(OrderRequest request) {
        if (next != null) {
            next.handle(request);
        }
    }
}
