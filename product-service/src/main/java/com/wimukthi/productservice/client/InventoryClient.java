package com.wimukthi.productservice.client;

import com.wimukthi.productservice.dto.InventoryRequest;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.service.annotation.PostExchange;

public interface InventoryClient {

    @PostExchange("/api/inventory")
    String addInventory(@RequestBody InventoryRequest inventoryRequest);
}
