$( "#btn" ).click(function() {
  var comment = $("#cmt_txt").val() ;
  //create a request object
  var xmlRequest= new XmlHttpRequest();
     xmlRequest.onreadystatechange= function(){
     if(xmlRequest.readystate === XmlHttpRequest.Done){
         if(xmlRequest.status === 200){
             var comments = xmlRequest.responseText;
             comments=JSON.parse(comments);
             var stringBuilder='';
            for(var i=0; i < comments.length; i++)
            {
                 stringBuilder += "<li>" + comments[i] + "</li>";
            }
            
            $("#lst").innerHTML(stringBuilder);
         }
     }
 };
  xmlRequest.open('GET', 'http://optimistwin.imad.hasura-app.io/submit-comment?comment=' + comment, true);
  xmlRequest.send(null);
});
