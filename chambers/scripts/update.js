document.querySelector(
	"#update"
).textContent = `Last Modification: ${document.lastModified}`;

const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;