package com.wimukthi.orderservice.config;

import com.wimukthi.orderservice.client.InventoryClient;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.support.WebClientAdapter;
import org.springframework.web.service.invoker.HttpServiceProxyFactory;

@Configuration
@RequiredArgsConstructor
public class RestClientConfig {

    @Value("${inventory.url}")
    private String inventoryServiceUrl;

    @Value("${payment.url}")
    private String paymentServiceUrl;

    @Bean
    public InventoryClient inventoryClient() {
        WebClient webClient = WebClient.builder()
                .baseUrl(inventoryServiceUrl)
                .build();
        var webClientAdapter = WebClientAdapter.forClient(webClient);
        var httpServiceProxyFactory = HttpServiceProxyFactory.builderFor(webClientAdapter).build();
        return httpServiceProxyFactory.createClient(InventoryClient.class);
    }

    @Bean
    public com.wimukthi.orderservice.client.PaymentClient paymentClient() {
        WebClient webClient = WebClient.builder()
                .baseUrl(paymentServiceUrl)
                .build();
        var webClientAdapter = WebClientAdapter.forClient(webClient);
        var httpServiceProxyFactory = HttpServiceProxyFactory.builderFor(webClientAdapter).build();
        return httpServiceProxyFactory.createClient(com.wimukthi.orderservice.client.PaymentClient.class);
    }
}
