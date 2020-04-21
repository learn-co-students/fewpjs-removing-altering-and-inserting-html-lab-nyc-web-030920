let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory"

let updateHeader = newHeader.innerHTML = "Daniel is the champion";
updateHeader.className = "victory";