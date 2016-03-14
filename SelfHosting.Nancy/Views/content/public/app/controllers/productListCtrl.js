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


        //vm.products = [
        //    {
        //        "productId": 1,
        //        "productName": "Sample product 1",
        //        "price": 19.89,
        //        "cost": 9.0,
        //        "imageUrl":"http://",
        //        tags: ["leaf", "tool"]
        //    },
        //    {
        //        "productId": 1,
        //        "productName": "Sample product 1",
        //        "price": 19.89,
        //        "cost": 9.0,
        //        "imageUrl": "http://",
        //        tags: ["leaf", "tool"]
        //    },
        //    {
        //        "productId": 1,
        //        "productName": "Sample product 1",
        //        "price": 19.89,
        //        "cost": 9.0,
        //        "imageUrl": "http://",
        //        tags: ["leaf", "tool"]
        //    },
        //    {
        //        "productId": 1,
        //        "productName": "Sample product 1",
        //        "price": 19.89,
        //        "cost": 9.0,
        //        "imageUrl": "http://",
        //        tags: ["leaf", "tool"]
        //    },
        //    {
        //        "productId": 1,
        //        "productName": "Sample product 1",
        //        "price": 19.89,
        //        "cost": 9.0,
        //        "imageUrl": "http://",
        //        tags: ["leaf", "tool"]
        //    },
        //    {
        //        "productId": 1,
        //        "productName": "Sample product 1",
        //        "price": 19.89,
        //        "cost": 9.0,
        //        tags: ["leaf", "tool"]
        //    }
        //];
    }


}());