function getupdatedate(){
    var x = document.lastModified;
        part = document.getElementById("date");
        part.textContent = `Last Updated: ${x}`;

}