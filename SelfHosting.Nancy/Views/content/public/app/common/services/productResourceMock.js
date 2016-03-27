
(function() {
    "use strict";

    var app = angular.module("productResourceMock", ["ngMockE2E"]);

    app.run(function($httpBackend) {

        var products = [
            {
                "productId": 1,
                "productName": "Sample product 1",
                "price": 19.89,
                "cost": 9.0,
                "imageUrl":"http://",
                tags: ["leaf", "tool"]
            },
            {
                "productId": 1,
                "productName": "Sample product 1",
                "price": 19.89,
                "cost": 9.0,
                "imageUrl": "http://",
                tags: ["leaf", "tool"]
            },
            {
                "productId": 1,
                "productName": "Sample product 1",
                "price": 19.89,
                "cost": 9.0,
                "imageUrl": "http://",
                tags: ["leaf", "tool"]
            },
            {
                "productId": 1,
                "productName": "Sample product 1",
                "price": 19.89,
                "cost": 9.0,
                "imageUrl": "http://",
                tags: ["leaf", "tool"]
            },
            {
                "productId": 1,
                "productName": "Sample product 1",
                "price": 19.89,
                "cost": 9.0,
                "imageUrl": "http://",
                tags: ["leaf", "tool"]
            },
            {
                "productId": 1,
                "productName": "Sample product 1",
                "price": 19.89,
                "cost": 9.0,
                tags: ["leaf", "tool"]
            }
        ];

        $httpBackend.whenGET("/api/products").respond(products);
    });
}())