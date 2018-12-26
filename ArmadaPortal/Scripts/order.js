(function () {
    'use strict';

    window.SalesHub.OrderDetailsGrid_Save = function (e) {
        //Save Models Go Here
    };


    window.SalesHub.OrderDetails_Error = function(args) {
        if (args.errors) {
            var grid = $("#orderDetailsGrid").data("kendoGrid");
            var validationTemplate = kendo.template($("#orderDetailsValidationMessageTemplate").html());
            grid.one("dataBinding", function(e) {
                e.preventDefault();

                $.each(args.errors, function(propertyName) {
                    var renderedTemplate = validationTemplate({ field: propertyName, messages: this.errors });
                    grid.editable.element.find(".errors").append(renderedTemplate);
                });
            });
        }
    };

    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    $(document).ready(function () {
        var customerData = window.SalesHub.customerData;
        $(".actionButton").on("click", function (e) {
            window.location.href = $(e.target).data("action");
        });
    });
}) ();
