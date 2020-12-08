package com.leron.service;

import com.leron.dao.ProductRepository;
import com.leron.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {


    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    public void addProduct(Product product) {
        productRepository.save(product);
    }

   /* public void update (Product product) {
        productRepository.existsById(product.getId()) {
           Product newProd = new ()
        }
    }*/
}
