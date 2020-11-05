let Button = document.getElementById("Button");
Button.addEventListener("click", function(){
    
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       alert(xhttp.responseText);
    }
};
xhttp.open("GET", "http://localhost:4000", true);
xhttp.send();

});




