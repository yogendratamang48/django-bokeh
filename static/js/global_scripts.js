$(function(){
$('#btnClearAll').on('click', function(){
    console.log("Clearing....")
    $.ajax({
        url: "/clear_session/",
        method: 'POST', // or another (GET), whatever you need
        data: {
            "clear_all": 1 // data you need to pass to your function
        },
        success: function (data) {

        }
    });
});

$('#sumColumnEWTGroup').hide();
$('#aggregationTypeEWT').on('change',(function() {
            if($('#aggregationTypeEWT option:selected').val()==='SUM')
            {
            $('.sumColumnEWTGroup').show();
            }
            else
            {
            $('#sumColumnEWTGroup').hide();
            }
        }
        ));


});