(function() {

    "use strict";

    angular.module("productManagement").controller("ProductDetailCtrl", productDetailCtrl);

    function productDetailCtrl() {

        var vm = this;

        vm.product = {
            "productId": 1,
            "productName": "Sample product 1",
            "price": 19.89,
            "cost": 9.0,
            "imageUrl": "http://",
            tags: ["leaf", "tool"]
        };

        vm.title = "Product Details: " + vm.product.productName;
       
        if (vm.product.tags) {
            vm.tagList = vm.product.tags.toString();
        }

    }

}())