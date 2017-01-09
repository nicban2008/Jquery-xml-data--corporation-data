// Code goes here

$(document).ready(function(){

        $("select").change(function () {
            $.ajax({
            url: 'main.xml',
            type: 'GET',
            dataType: 'xml',
            async: false,
            success:function (data) {
                     retrieveXml(data);
                    },
            error:function(e){alert(JSON.stringify(e));}
    });
        });
        
    });
    var retrieveXml = function(data){

        $(data).find('business').each(function(){
            var corpName = $(this).find('business-name').text();

            // Setup Variables
            var corpData = {
                name: ($('name', data).text()),
                phone: ($('phone', data).text()),
                email: ($('email', data).text()),
                businessname:($('business-name', data).text())
            };
            var webOption = $('select#corps option:selected').val(); 
            var businessName = $('business-name', data).text();
            
                $(data).find('business').each(function(index,item){ 
                  
                    var corpName = $(this).find('business-name').text();
                    if (webOption == corpName){
                      $("#name").html($(this).find('manager > name').text());
                      $("#phone").html($(this).find('manager > phone').text());
                      $("#email").html($(this).find('manager > email').text());
                      //$("#email").html($(this).find('manager > email').text());
                      //$("#cced").html($(this).find('manager> cced').text());
                      
                      //NEW CODE
                      $("#btn").addClass("button-color");
                      var em = $(this).find('manager > email').html();
                      var cced= $(this).find('manager > cced').html();
                      var subject="&subject=";
                      var button= "Email Us";
                      var cc="?cc=";
                      var bcc = "&bcc=execontact@gmail.com";
                      var subMessage= "Contact a manager";
                        if (!cced ){
                          $( "#btn" ).html('<a href="mailto:' + em + bcc + subject + subMessage + '">' + button + '</a>');
                        }
                        else{
                        $( "#btn" ).html('<a href="mailto:' + em + cc + cced + bcc + subject + subMessage + '">' + button + '</a>');
                        }
                  return false;
                    }
                }); 
        });
    };
    
 



