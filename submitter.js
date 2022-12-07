function submitForm() {
    var form = document.getElementById("myForm");

    var data = {};
    data["amount"] = parseInt(form.elements.amount.value);
    data["price"] = parseFloat(form.elements.price.value);
    data["event_name"] = form.elements.event_name.value;
    data["image"] = form.elements.image.value;
    data["explanation"] = form.elements.description.value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/new', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
}
