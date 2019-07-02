
 $(document).ready(function(){
    $('.modal').modal();
     $('.tabs').tabs();


//      $.getJSON( "http://android.setiabudhi-supermarket.co.id/tampilSemuaPgw.php", function( data ) {
// 	  var items = [];
// 	  $.each( data, function( key, val ) {
// 	    items.push( "<li id='" + key + "'>" + val + "</li>" );
// 	  });
 
// 	  $( "<ul/>", {
// 	    "class": "my-new-list",
// 	    html: items.join( "" )
// 	  }).appendTo( "body" );
// 	});


//      $.get( "http://android.setiabudhi-supermarket.co.id/tampilSemuaPgw.php", function( data ) {
//   $( "body" )
//     .append( "Name: " + data.id ) // John
//     .append( "Time: " + data.name ); //  2pm
// }, "json" );

  });


function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "http://android.setiabudhi-supermarket.co.id/tampilSemuaPgw.php?q=" + str, true);
        xmlhttp.send();
    }
}