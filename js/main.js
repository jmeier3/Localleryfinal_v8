$(document).ready(function() {
    $('form').submit(function(event) {
        var formData = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'https://web2-product-page.herokuapp.com/subscribers',
            data: formData,
            dataType: 'json'
        }).done(function(data) {
            console.log(data);
            $("#confirmation").text("Thank You!");
            
            
        }).fail(function(data) {
            console.log(data);
            var errorMessage=JSON.parse(data.responseText).email[0]
             $("#error").text("Invalid Email!");
            
        });
    event.preventDefault();
    });
});