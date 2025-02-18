package com.example.demo.Controller;

import com.example.demo.Model.Product;
import com.example.demo.Service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }
    @GetMapping("/product")
    public ResponseEntity<List<Product>> getAllProducts() {

        return new ResponseEntity<>(service.getAllProduct(), HttpStatus.OK);
    }
    @PostMapping("/product")
    public ResponseEntity<?> addProduct(@RequestPart Product product, @RequestPart MultipartFile imageFile) throws IOException {
        Product product1=service.addProduct(product,imageFile);
        return product1!=null
                ? new ResponseEntity<>("success", HttpStatus.OK)
                : new ResponseEntity<>("not Success",HttpStatus.INTERNAL_SERVER_ERROR);
    }

  @GetMapping("/product/{productId}/image")
  public ResponseEntity<byte[]> getImageByProductId(@PathVariable int productId) {
      Product product = service.getProduct(productId);
      byte[] imageFile = product.getImageData();

      return ResponseEntity.ok().contentType(MediaType.valueOf(product.getImageType())).body(imageFile);

  }

}
