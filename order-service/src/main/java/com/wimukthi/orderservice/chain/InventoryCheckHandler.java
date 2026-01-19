package com.wimukthi.orderservice.chain;

import com.wimukthi.orderservice.client.InventoryClient;
import com.wimukthi.orderservice.dto.OrderRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class InventoryCheckHandler extends OrderValidationHandler {

    private final InventoryClient inventoryClient;

    @Override
    public void handle(OrderRequest request) {
        log.info("Chain of Responsibility: Checking inventory for skuCode: {}", request.skuCode());
        boolean isInStock = inventoryClient.isInStock(request.skuCode(), request.quantity());
        if (!isInStock) {
            log.error("Product with SkuCode {} is not in stock", request.skuCode());
            throw new RuntimeException("Product with SkuCode " + request.skuCode() + " is not in stock");
        }
        log.info("Inventory check passed for skuCode: {}", request.skuCode());
        handleNext(request);
    }
}
