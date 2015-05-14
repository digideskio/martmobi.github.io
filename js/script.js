$( document ).ready(function() {
  $('.seller-count').html(localStorage.getItem('sellerCount') || 2612);
});

$(document).on('click','#login-submit', function(e) {
  e.preventDefault();
    if ($('#name').val() == "" || $('#phonenumber').val() == "" || $('#location').val() == "" || $('#category').val() == "None" ){
        alert ('Please do not leave the field empty');
    }
    else{
    $('.treasure-bg').css('opacity', '0.2');
    $('.ajax-loader').css('display', 'block');
    var name = $('#name').val();
    var phonenumber = $('#phonenumber').val();
    var location = $('#location').val();
    var category = $('#category').val();
    $.ajax({


                url: "https://docs.google.com/forms/d/1C7os2CNe6NGoYBXaFMhQO0CX-LZW85Rv3FBlk63v0iI/formResponse",
                data: {'entry_795649798' : name, 'entry_1737019635' : phonenumber,	'entry_1877792057' : location, 'entry_1344230027' : category},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){
 
                        $('#name').val();
                        $('#phonenumber').val();
                        $('#location').val();
                        $('#category').val();
                        //Success message
                    },
                    200: function (){
                        $('#name').val();
                        $('#phonenumber').val();
                        $('#location').val();
                        $('#category').val();
                        
                    }
                }

         
           });
    sendmail();

    var sellercount = $('.seller-count').html();
    sellercount = parseInt(sellercount) + 3;
    localStorage.setItem('sellerCount', sellercount);
    $('.seller-count').html(localStorage.getItem('sellerCount'));

    
  }
});

function sendmail(){
    $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
              'key': '1sRf8q5z9P969SAP-N_MpQ',
              'message': {
                'from_email': 'admin@getshopo.com',
                'to': [
                    {
                      'email': 'hasith.goli@snapdeal.com',
                      'type': 'to'
                    }
                  ],
                'autotext': 'true',
                'subject': 'Treasure Signup',
                'html': 'Hey Team! We have a signup for Treasure App <br> <br> Name - ' + $('#name').val() + '<br>Phone Number - ' + $('#phonenumber').val() + '<br>Location - ' + $('#location').val() + '<br>Category - ' + $('#category').val()
              }
          }
          }).done(function(response) { 
            $('.treasure-bg').css('opacity', '1');
            $('.ajax-loader').css('display', 'none');
             alert("Thankyou for Signing Up.");
           });
 }
 