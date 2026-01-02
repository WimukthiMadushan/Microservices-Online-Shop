package com.wimukthi.cartservice.controller;

import com.wimukthi.cartservice.model.Cart;
import com.wimukthi.cartservice.model.CartItem;
import com.wimukthi.cartservice.service.CartService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cart createCart() {
        return cartService.createCart();
    }

    @GetMapping("/{cartId}")
    @ResponseStatus(HttpStatus.OK)
    public Cart getCart(@PathVariable String cartId) {
        return cartService.getCart(cartId);
    }

    @PostMapping("/{cartId}/items")
    @ResponseStatus(HttpStatus.OK)
    public Cart addItemToCart(@PathVariable String cartId, @RequestBody CartItem cartItem) {
        return cartService.addItemToCart(cartId, cartItem);
    }

    @DeleteMapping("/{cartId}/items/{skuCode}")
    @ResponseStatus(HttpStatus.OK)
    public Cart removeItemFromCart(@PathVariable String cartId, @PathVariable String skuCode) {
        return cartService.removeItemFromCart(cartId, skuCode);
    }

    @PostMapping("/{cartId}/order")
    @ResponseStatus(HttpStatus.OK)
    public String orderCartItems(@PathVariable String cartId) {
        cartService.orderCartItems(cartId);
        return "Order placed for cart items";
    }
}
