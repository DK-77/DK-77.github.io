$(document).ready
(
    function()
    {
        
        $("#in1").change
        (
            function()
            {
                var total=0;
                
                $("tr.item").each
                (
                    function()
                    {
                        
                        var quantity = $("#in1").val();
                        var price = parseInt($("#price").text(),10);
                        $("#Subtotal").html(quantity*price);
                        total += quantity*price; 
                    }

                );
                $("#Total").html("<strong>Total ₹"+total+"</strong>");
            }

        );
        
        

    }
);