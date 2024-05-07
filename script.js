let formValue = document.getElementById("form-start");
let list = document.getElementById("expenseList");

formValue.addEventListener("submit", function (event) {
  event.preventDefault();

  let description = document.getElementById("exp-des").value;
  let select = document.getElementById("select-category").value;
  let amount = document.getElementById("amount").value;

  if (description && select && !isNaN(amount)) {
    let newElement = document.createElement("tr");

    newElement.innerHTML = `<td>${description}</td>
                                   <td>${select}</td>
                                    <td>${amount}</td`;

    list.appendChild(newElement);

    document.getElementById("exp-des").value = "";
    document.getElementById("select-category").value = "";
    document.getElementById("amount").value = "";
  } else {
    alert("please enter the below values");
  }
});
