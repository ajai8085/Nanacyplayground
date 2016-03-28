(function() {

    "use strict";

    var app = angular.module("productManagement", ["common.services", "ui.router"]);


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
                abstract:true,
                url: "/products/edit/:productId",
                templateUrl: "content/public/app/controllers/productEditView.html",
                controller: "ProductEditCtrl as vm",
                resolve: {
                    productResource: "productResource",
                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
                        

            })
            .state("productEdit.info", {
                url: "/info",
                templateUrl: "content/public/app/controllers/productEditInfoView.html"
            })
             .state("productEdit.price", {
                 url: "/price",
                 templateUrl: "content/public/app/controllers/productEditPriceView.html"
             })
              .state("productEdit.tags", {
                  url: "/tags",
                  templateUrl: "content/public/app/controllers/productEditTagsView.html"
              })
            .state("productDetail", {
                url: "/products/:productId",
                templateUrl: "content/public/app/controllers/productDetailView.html",
                controller: "ProductDetailCtrl as vm",
                resolve: {
                    productResource: "productResource",
                    product: function (productResource, $stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({ productId: productId }).$promise;
                    }
                }
            })
        .state("priceAnalytics", {
            url: "/priceAnalytics",
            templateUrl: "content/public/app/controllers/priceAnalyticsView.html",
            controller: "PriceAnalyticsCtrl",
            resolve: {
                productResource: "productResource",
                products: function (productResource, $stateParams) {
                    return productResource.query().$promise;
                }
            }
            });

    }]);

}());