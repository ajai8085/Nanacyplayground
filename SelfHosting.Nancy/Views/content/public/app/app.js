(function() {

    "use strict";

    var app = angular.module("productManagement", ["common.services", "ui.router", "productResourceMock"]);


    app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");


        $stateProvider.state("home", {
                url: "/",
                templateUrl: "content/public/app/welcome.html"
            })
            .state("productList", {
                url: "/products",
                templateUrl: "content/public/app/controllers/productListView.html",
                controller: "ProductListCtrl as vm"
            })
            .state("productEdit", {
                url: "/products/edit/:productId",
                templateUrl: "content/public/app/controllers/productEditView.html",
                controller: "ProductEditCtrl as vm"
            })
            .state("productDetail", {
                url: "/products/:productId",
                templateUrl: "content/public/app/controllers/productDetailView.html",
                controller: "ProductDetailCtrl as vm"
            });

    }]);

}());