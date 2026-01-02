package com.wimukthi.cartservice.client;

import com.wimukthi.cartservice.dto.OrderRequest;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.service.annotation.PostExchange;

public interface OrderClient {

    @PostExchange("/api/order")
    String placeOrder(@RequestBody OrderRequest orderRequest);
}
