const nameSection = document.getElementById("name");
const formulary = document.getElementsByTagName("form")
const sendButton = document.getElementById("send-button");

sendButton?.addEventListener("click", (e: MouseEvent ) =>{ 
e.preventDefault(); // Evita o comportamento padrão do botão de submit

})
