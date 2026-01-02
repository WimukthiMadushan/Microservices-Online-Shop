package com.wimukthi.cartservice.config;

import com.wimukthi.cartservice.client.OrderClient;
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

    @Value("${order.service.url}")
    private String orderServiceUrl;

    @Bean
    public OrderClient orderClient() {
        WebClient webClient = WebClient.builder()
                .baseUrl(orderServiceUrl)
                .build();
        var webClientAdapter = WebClientAdapter.forClient(webClient);
        var httpServiceProxyFactory = HttpServiceProxyFactory.builderFor(webClientAdapter).build();
        return httpServiceProxyFactory.createClient(OrderClient.class);
    }
}
