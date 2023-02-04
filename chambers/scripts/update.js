document.querySelector(
	"#update"
).textContent = `Last Modification: ${document.lastModified}`;

const datefield = document.getElementById("date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;

const date = new Date();
var day= date.getDay();
const banner = document.getElementById("banner");
if(day==1 || day==2){banner.innerHTML="🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";}