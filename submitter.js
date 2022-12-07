function submitForm() {
    var data = {};
    data["amount"] = document.myForm.amount.value;
    data["price"] = document.myForm.price.value;
    data["event_name"] = document.myForm.event_name.value;
    data["image"] = document.myForm.image.value;
    data["explanation"] = document.myForm.description.value;
    data["date"] = document.myForm.date.value;

    json_data = JSON.stringify(data);
    document.myForm.submit();
}
