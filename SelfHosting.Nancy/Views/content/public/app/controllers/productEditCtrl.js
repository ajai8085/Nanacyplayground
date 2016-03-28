(function() {
    "user strict";

    angular.module("productManagement")
        .controller("ProductEditCtrl", ["product", productEditCtrl]);

    function productEditCtrl(product) {
        var vm = this;
        
        vm.product = product;

        if (vm.product && vm.product.id > 0) {
            vm.title = "Edit product " + vm.product.productName;
        } else {
            vm.title = "Add new product";
        }
    }


    //

}())