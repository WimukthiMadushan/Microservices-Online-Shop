package com.wimukthi.cartservice.service;

import com.wimukthi.cartservice.client.OrderClient;
import com.wimukthi.cartservice.dto.OrderRequest;
import com.wimukthi.cartservice.model.Cart;
import com.wimukthi.cartservice.model.CartItem;
import com.wimukthi.cartservice.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class CartService {

    private final CartRepository cartRepository;
    private final OrderClient orderClient;

    public Cart createCart() {
        Cart cart = new Cart();
        cart.setId(UUID.randomUUID().toString());
        return cartRepository.save(cart);
    }

    public Cart getCart(String cartId) {
        return cartRepository.findById(cartId)
                .orElseThrow(() -> new RuntimeException("Cart not found"));
    }

    public Cart addItemToCart(String cartId, CartItem cartItem) {
        Cart cart = getCart(cartId);
        cart.getItems().add(cartItem);
        calculateTotalPrice(cart);
        return cartRepository.save(cart);
    }

    public Cart removeItemFromCart(String cartId, String skuCode) {
        Cart cart = getCart(cartId);
        cart.getItems().removeIf(item -> item.getSkuCode().equals(skuCode));
        calculateTotalPrice(cart);
        return cartRepository.save(cart);
    }

    private void calculateTotalPrice(Cart cart) {
        BigDecimal total = cart.getItems().stream()
                .map(item -> item.getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        cart.setTotalPrice(total);
    }

    public void orderCartItems(String cartId) {
        Cart cart = getCart(cartId);
        cart.getItems().forEach(item -> {
            OrderRequest orderRequest = new OrderRequest(
                    null,
                    null,
                    item.getSkuCode(),
                    item.getPrice(),
                    item.getQuantity(),
                    new OrderRequest.UserDetails("user@example.com", "User", "Name") // Placeholder user details
            );
            orderClient.placeOrder(orderRequest);
        });
        // Clear cart after ordering
        cart.getItems().clear();
        cart.setTotalPrice(BigDecimal.ZERO);
        cartRepository.save(cart);
        log.info("Ordered all items in cart {}", cartId);
    }
}
