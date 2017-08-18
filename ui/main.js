$( "#btn" ).click(function(event) {
  var comment = $("#comment").val() ;
  if(comment.trim() === ""){
      event.preventDefault();
  }
  //create a request object
  var xmlRequest= new XMLHttpRequest();
     xmlRequest.onreadystatechange= function(){
     if(xmlRequest.readystate === XMLHttpRequest.Done){
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
