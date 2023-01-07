function getupdatedate(){
    var x = document.lastModified;
            document.getElementById("date").textContent = `Last Updated: ${x}`;
}