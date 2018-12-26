(function () {
    'use strict';

    var getUrlParams = function () {
        var urlParams = {};
        var match,
            pl = /\+/g, // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query = window.location.search.substring(1);

        while (match = search.exec(query)) {
            urlParams[decode(match[1])] = decode(match[2]);
        }
        return urlParams;
    };

    //var updateGridCustomerFilter = function (customerId) {
    //    var ordersGrid = $("#ordersGrid").data("kendoGrid");
    //    ordersGrid.dataSource.filter({ field: "CustomerId", operator: "eq", value: customerId });
    //};

    $(document).ready(function() {
        var selectedCustomerLi;
        var queryStringParams;

        queryStringParams = getUrlParams();

        $("#createOrderButton").on("click", function() {
            window.location.href = window.SalesHub.createOrderUrl;
        });

        //window.SalesHub.setSelectedCustomer(selectedCustomerLi.data("customerId"), selectedCustomerLi.text());
        //window.SalesHub.setSelectedCustomer(hardCodeCustomerId, hardCodeCustomerName);
        //updateGridCustomerFilter(hardCodeCustomerId);
        //window.SalesHub.selectedCustomerId = hardCodeCustomerId;
    });
})();