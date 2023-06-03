function onAddClick(e) {
  let selector = document.querySelector("#add .ashish");
  if (selector.value == "" || selector.value == null) return;
  let listCreate = document.createElement("input");
  listCreate.type = "text";
  listCreate.classList.add(["ashish"]);
  listCreate.value = selector.value;
  selector.value = "";

  let div2 = document.getElementById("div2");
  div2.appendChild(listCreate);

  e.target.disabled = true;
  //   console.log(e);
}

function onInputChange(e) {
  let addButton = document.querySelector("#add button");
  if (e.target.value == "" || e.target.value == null) {
    addButton.disabled = true;
    return;
  }

  if (addButton.disabled == true) {
    addButton.disabled = false;
  }
}
