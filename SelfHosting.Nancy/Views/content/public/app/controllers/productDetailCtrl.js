(function() {

    "use strict";

    angular.module("productManagement").controller("ProductDetailCtrl",["product", productDetailCtrl]);

    function productDetailCtrl(product) {

        var vm = this;

        vm.product = product;

        vm.title = "Product Details: " + vm.product.productName;
       
        if (vm.product.tags) {
            vm.tagList = vm.product.tags.toString();
        }

    }

}())