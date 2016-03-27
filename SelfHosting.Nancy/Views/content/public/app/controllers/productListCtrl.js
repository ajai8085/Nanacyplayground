(function() {
    angular.module("productManagement")
        .controller("ProductListCtrl", ["productResource", productListCtrl]);

    function productListCtrl(productResource) {
        var vm = this;

        vm.showImage = false;
        vm.toggleImage=function() {
            vm.showImage = !vm.showImage;
        }


        productResource.query(function(data) {
            vm.products = data;
        });


       
    }


}());