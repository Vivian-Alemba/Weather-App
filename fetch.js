// Accessing an api using the XMLHttpRequest
// getting the XMR

if(XMLHttpRequest){
    request=new XMLHttpRequest()
}else if(ActiveXObject){
    try{
        request=new ActiveXObject('Msxml2.XMLHTTP')
    }catch(e){
        try{
            request=new ActiveXObject('Microsoft.XMLHTTP')
        }
        catch(e){}
    }
}
//open, send
request.open('GET','https://url.com/some/url',true)
request.send(null)







//A newer native function for making HTTP requests
//URL(required), options(optional)
fetch('https://url.com/some/url')
.then(function(response){
    //successful response

})
.catch(function(err){
    //error message

})