var script_url = "https://script.google.com/macros/s/AKfycbwOtWg76OZtuIZyISiFtuIVbRbD11GqI1YjsAjhIi7jSS_kVbwP/exec";
  
  // Make an AJAX call to Google Script
  function insert_value() {
    
    var wa=	$("#wa").val();
    var nama= $("#nama").val();
    var email= $("#email").val();
    var institusi= $("#institusi").val();

    if (wa == '' || email == '' || nama == '' || institusi == '') {
    
        $("#next-activity-alert-blank").modal();

    } else {
        $("#re").css("visibility","hidden");
        document.getElementById("loader").style.visibility = "visible";
        $('#mySpinner').addClass('spinner');        
        
        var url = script_url+"?callback=ctrlq&nama="+nama+"&wa="+wa+"&email="+email+"&institusi="+institusi+"&action=insert";
    

        var request = jQuery.ajax({
        crossDomain: true,
        url: url ,
        method: "GET",
        dataType: "jsonp"
        });
    }

  }


    // print the returned data
    function ctrlq(e) {
  
	
        $("#re").html(e.result);
        $("#re").css("visibility","visible");
        document.getElementById("loader").style.visibility = "hidden";

        $("#wa").val("");
        $("#nama").val("");
        $("#email").val("");
        $("#institusi").val("");

      }