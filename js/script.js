$(document).on('click','#login-submit', function(e) {
  e.preventDefault();
    if ($('#name').val() == "" || $('phonenumber').val() == "" || $('location').val() == "" ){
        alert ('Please do not leave the field empty');
    }
    else{
    
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
    
  }
});

function sendmail(){
    $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
              'key': '1sRf8q5z9P969SAP-N_MpQ',
              'message': {
                'from_email': 'admin@treasureapp.com',
                'to': [
                    {
                      'email': 'dev.tekriwal@snapdeal.com',
                      'type': 'to'
                    }
                  ],
                'autotext': 'true',
                'subject': 'Treasure Signup',
                'html': 'Hey Team! We have a signup for Treasure App <br> <br> Name - ' + $('#name').val() + '<br>Phone Number - ' + $('#phonenumber').val() + '<br>Location - ' + $('#location').val() + '<br>Category - ' + $('#category').val()
              }
          }
          }).done(function(response) { 
             alert("Thankyou for Signing Up.");
           });
 }
 