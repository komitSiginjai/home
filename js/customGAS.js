var script_url = "https://script.google.com/macros/s/AKfycbwOtWg76OZtuIZyISiFtuIVbRbD11GqI1YjsAjhIi7jSS_kVbwP/exec";

  //jQuery Halaman Pertama di Load

  $(document).ready(function(){  

    // Make an Auto AJAX call to Google Script - Read What We Do ? 
      $("#loaderWwd").css({
        'visibility' : 'visible',
        'display' : 'block'
      });

      var url_wwd = script_url+"?action=read_wwD";
      
      $.getJSON(url_wwd, function (json) {
      
          // Set the variables from the results array
            
          // window.alert(json.records[0].nama_event); 
          // var judul_wwd = json.records[0].judul;
          // var deskripsi_wwd = json.records[0].deskripsi;
          // var foto_wwd = json.records[0].foto;

          // Row
          for (var i = 0, j = json.records.length; i < j; i++){

            if(i==0 || i%3 == 0)
            {
                var appendEl = $("<div class='row'></div>").appendTo("#contentRow");
            }
            $("<div class='col-lg-4 col-md-12 mb-4'>" +
                //data-aos='zoom-in-down' data-aos-duration='800' yg ga jalan
                "<div>" +
                  "<a><img class='img-fluid z-depth-1 img-activity' src='"+json.records[i].foto+"' alt='video'" +
                      "data-toggle='modal' data-target='#modal"+[i]+"'></a>" +
                    "<h4 class='my-4 font-weight-bold'>"+json.records[i].judul+"</h4>" +
                      "<p class='grey-text'>"+json.records[i].deskripsi+"</p>" +
                "</div>" +            
            "</div>").appendTo(appendEl);

            $(
            // Central Modal Fluid
                "<div class='modal fade' id='modal" +[i]+"'"+ " tabindex='-1' role='dialog' aria-labelledby='myModalLabel'" +
                "aria-hidden='true'>" +

                // Change class .modal-sm to change the size of the modal
                "<div class='modal-dialog modal-fluid' role='document'>" +
                  "<div class='modal-content'>" +
                      "<img src='"+json.records[i].foto+"' class='img-fluid'>" +
                    "<div class='modal-footer'>" +
                      "<button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'>Close</button>" +
                    "</div>" +
                  "</div>" +
                "</div>" +
              "</div>" +
          // Central Modal Fluid -->
          "").appendTo("#modalRow");
        }

          
      
            
          $("#loaderWwd").css({
            'visibility' : 'hidden',
            'display' : 'none'
          });

        // refresh aos on scroll
        let scrollRef = 0;
        window.addEventListener('scroll', function() {
          // increase value up to 10, then refresh AOS
          scrollRef <= 5 ? scrollRef++ : AOS.refresh();
        });

      });
    // End Make an AJAX call to Google Script - Read What We Do ?


    // Make an Auto AJAX call to Google Script - Read Latest Activity
    $("#loaderLa").css({
      'visibility' : 'visible',
      'display' : 'block'
    });

    var url_la = script_url+"?action=read_lA";
    
    $.getJSON(url_la, function (json) {
    
        // Set the variables from the results array
          
        //window.alert(json.records[0].nama_activity); 

        var nama_la     = json.records[0].nama_activity;
        var kategori_la = json.records[0].kategori;
        var deskripsi_la  = json.records[0].deskripsi_activity;
        var writer_la     = json.records[0].writer;
        var date_la       = json.records[0].date;
        var foto1_la      = json.records[0].foto1;
        var foto2_la      = json.records[0].foto2;
        var foto3_la      = json.records[0].foto3;
        var linkIg_la     = json.records[0].link_ig;

        $("#titleLa").append('<strong>'+nama_la+'</strong>');
        $("#kategoriLa").append('<i class="fa fa-heart"></i> <strong>'+kategori_la+'</strong>');
        $("#deskripsiLa").append(deskripsi_la);
        $("#writerLa").append('by <a><strong>'+writer_la+'</strong></a>, '+date_la);
        
        $("#slideModal7").append('<img class="d-block w-100 img-latest-activity" src="'+foto1_la+'"' +
          'alt="First slide" data-toggle="modal" data-target="#modal7">');
        $("#contentModal7").append('<img src="'+foto1_la+'" class="img-fluid">');

        $("#slideModal8").append('<img class="d-block w-100 img-latest-activity" src="'+foto2_la+'"' +
          'alt="Second Slide" data-toggle="modal" data-target="#modal8">');
        $("#contentModal8").append('<img src="'+foto2_la+'" class="img-fluid">');
        
        $("#slideModal9").append('<img class="d-block w-100 img-latest-activity" src="'+foto3_la+'"' +
          'alt="Third Slide" data-toggle="modal" data-target="#modal9">');
        $("#contentModal9").append('<img src="'+foto3_la+'" class="img-fluid">');

        
        $("#readMoreNaE").attr({
          'href'    : linkIg_la,
          'target'  : '_blank'
        });

        $("#loaderLa").css({
          'visibility' : 'hidden',
          'display' : 'none'
        });

    });
  // End Make an AJAX call to Google Script - Read Next Activity Event
    
  
    // Make an Auto AJAX call to Google Script - Read Next Activity Event 
      $("#loaderNaE").css({
        'visibility' : 'visible',
        'display' : 'block'
      });

      var url_nae = script_url+"?action=read_naE";
      
      $.getJSON(url_nae, function (json) {
      
          // Set the variables from the results array
            
          // window.alert(json.records[0].nama_event); 
          var dateNaE = json.records[0].date;
          var timeNaE = json.records[0].time;
          var posterNaE = json.records[0].poster;
          var namaNaE = json.records[0].nama_event;

          $("#dateTime").append(dateNaE+', ');
          $("#dateTime").append(timeNaE);
          $("#poster").append('<center>' +
                  '<img src="'+posterNaE+'" alt="poster" class="img-fluid img-next-activity">' + 
              '</center>');

          if(namaNaE == 'Coming Soon') 
          {
            $("#b1").attr("disabled", true);
          } 
          else 
          {
            $("#b1").attr("disabled", false);
          }
          
            
          $("#loaderNaE").css({
            'visibility' : 'hidden',
            'display' : 'none'
          });

      });
    // End Make an AJAX call to Google Script - Read Next Activity Event
    

  });

  // End jQuery Halaman Pertama di Load
  
  // Make an AJAX call to Google Script - Insert Next Acitivy Sign Up Form
  function insert_value_naSuf() {

    var tableName = 'naSuf';
    
    var wa=	$("#wa").val();
    var nama= $("#nama").val();
    var email= $("#email").val();
    var institusi= $("#institusi").val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (wa == '' || !$.isNumeric(wa) || email == '' || !emailReg.test(email) || nama == '' || institusi == '' || tableName == '') {
        $.confirm({
          title: 'Encountered an error!',
          content: '<div class="alert alert-danger" role="alert">Isi Data dengan Lengkap dan Benar !',
          type: 'red',
          typeAnimated: true,
          buttons: {
              tryAgain: {
                  text: 'Try again',
                  btnClass: 'btn-red',
                  action: function(){
                  }
              }
          }
      });

    } else { 
          $.confirm({
              title: 'Confirm !',
              content: 'Apakah data anda sudah benar ?',
              type: 'red',
              buttons: {
                  confirm: function () {
                      
                    var url = script_url+"?callback=ctrlq&nama="+nama+"&wa="+"'"+wa+"&email="+email+"&institusi="+institusi+"&tableName="+tableName+"&action=insert_naSuf";
                  
              
                    var request = jQuery.ajax({
                    crossDomain: true,
                    url: url ,
                    method: "GET",
                    dataType: "jsonp",
                    headers: {
                      'Access-Control-Allow-Credentials' : true,
                      'Access-Control-Allow-Origin':'*',
                      'Access-Control-Allow-Methods':'GET',
                      'Access-Control-Allow-Headers':'application/json',
                      }
                    });   

                    $("#loaderNaSuf").css({
                      'display' : 'block'
                    });
                    $("#reNaSuf").css({
                      'display' : 'none'
                    });

                  },
                  cancel: function () {
                      $.alert('Canceled!');
                  }
              }
          });
        

    }

  }

  // End Make an AJAX call to Google Script - Insert Next Acitivy Sign Up Form


    // print the returned data
    function ctrlq(e) {
  
        $("#loaderNaSuf").css({
          'display' : 'none'
        });

        $.confirm({
          title: 'Congratulations!',
          content: '<div class="alert alert-success" role="alert">' + e.result + '</div>',
          type: 'green',
          buttons: {
              close: function(){
                $("#wa").val("");
                $("#nama").val("");
                $("#email").val("");
                $("#institusi").val("");
              }
          }
        });


      }
    
    // End print the returned data

  
  // Make an AJAX call to Google Script - Read Next Activity Event

  function read_value_naE() {
       
    document.getElementById("loader").style.visibility = "visible";
    var url = script_url+"?action=read_naE";
    
    $.getJSON(url, function (json) {
    
        // Set the variables from the results array
          
        // window.alert(json.records[0].nama_event); 
        var dateNaE = json.records[0].date;
        var timeNaE = json.records[0].time;
        var posterNaE = json.records[0].poster;

        $("#dateTime").append(dateNaE+', ');
        $("#dateTime").append(timeNaE);
        $("#poster").append('<center>' +
                '<img src="'+posterNaE+'" alt="poster" class="img-fluid img-next-activity">' + 
            '</center>')
    
           
        document.getElementById("loader").style.visibility = "hidden";

        });
      }

  // End Make an AJAX call to Google Script - Read Next Activity Event




  

