package com.wimukthi.productservice.services;

import com.wimukthi.productservice.client.InventoryClient;
import com.wimukthi.productservice.dto.InventoryRequest;
import com.wimukthi.productservice.dto.ProductRequest;
import com.wimukthi.productservice.dto.ProductResponse;
import com.wimukthi.productservice.models.Product;
import com.wimukthi.productservice.repositories.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProductService {

    private final ProductRepository productRepository;
    private final InventoryClient inventoryClient;

    public ProductResponse createProduct(ProductRequest productRequest) {
        Product product = Product.builder()
                .name(productRequest.getName())
                .description(productRequest.getDescription())
                .skuCode(productRequest.getSkuCode())
                .price(productRequest.getPrice())
                .build();
        productRepository.save(product);

        InventoryRequest inventoryRequest = InventoryRequest.builder()
                .skuCode(product.getSkuCode())
                .quantity(productRequest.getQuantity())
                .build();
        
        inventoryClient.addInventory(inventoryRequest);

        log.info("Product created successfully");
        return new ProductResponse(product.getId(), product.getName(), product.getDescription(),
                product.getSkuCode(),
                product.getPrice());
    }

    public List<ProductResponse> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(product -> new ProductResponse(product.getId(), product.getName(), product.getDescription(),
                        product.getSkuCode(),
                        product.getPrice()))
                .toList();
    }

}
