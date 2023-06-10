let newURL = document.getElementById("short_url");
let coptButton = document.getElementById("copy");

coptButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}