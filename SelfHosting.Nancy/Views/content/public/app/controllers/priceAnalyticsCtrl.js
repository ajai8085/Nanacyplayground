(function() {

    "use strict";
    angular.module("productManagement").controller("PriceAnalyticsCtrl", ["$scope","products", priceAnalyticsCtrl]);

    function priceAnalyticsCtrl($scope,products) {


        $scope.title = "Price analytics ";

        var chartDataAmount = [];

        for (var i = 0; i < products.length; i++) {

            var margin =Math.abs (
                products[i].cost - products[i].price);

            chartDataAmount.push({
                x: products[i].productName,
                y: [products[i].cost, products[i].price,margin]
        });
        }



        $scope.dataAmount = {
            series: ["cost", "price", "margin amount"],
            data: chartDataAmount
        };
        
        $scope.configAmount = {
            title: "top margin product",
            tooltips: true,
            labels: false,
            mouseover:function() {
            },
            mouseout: function () { },
            click: function () { },
            legend:{display:true,position:"right"}
        };

    }
}())