
let = getData = (event) => {
    event.preventDefault()
    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let phone = document.getElementById("numberInput").value;
    let position = document.getElementById("positionInput").value;
    let message = document.getElementById("messageInput").value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(position);
    console.log(message);
}
