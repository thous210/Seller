function submitForm() {
    var form = document.getElementById("myForm");

    var data = {};
    data["amount"] = form.elements.amount.value;
    data["price"] = form.elements.price.value;
    data["event_name"] = form.elements.event_name.value;
    data["image"] = form.elements.image.value;
    data["explanation"] = form.elements.description.value;
    data["date"] = form.elements.date.value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/new', true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(data));
}

/*
fetch('http://localhost:8080/new', {
  method: 'POST',
  body: jsonData
})
.then(function(response) {
  // サーバからのレスポンスを処理する
});
*/
