function onAddClick(e) {
  let selector = document.querySelector("#add .ashish");
  if (selector.value == "" || selector.value == null) return;
  let listCreate = document.createElement("input");
  let listCreateCheckbox = document.createElement("input");
  let wrapperForCheckbox = document.createElement("div");

  let trashBin = document.createElement("i");
  listCreateCheckbox.id = "checkboxId";
  let checkbox = document.getElementById("checkboxId");
  listCreate.type = "text";
  listCreateCheckbox.type = "checkbox";
  trashBin.classList.add("fa");
  trashBin.classList.add("fa-trash");

  listCreateCheckbox.style.height = listCreate.classList.add(["ashish"]);
  listCreate.value = selector.value;
  selector.value = "";

  let div2 = document.getElementById("div2");
  div2.appendChild(wrapperForCheckbox);
  wrapperForCheckbox.appendChild(listCreateCheckbox);
  wrapperForCheckbox.appendChild(listCreate);
  wrapperForCheckbox.appendChild(trashBin);

  e.target.disabled = true;
  wrapperForCheckbox.style.display = "flex";

  //assigning an unique id for wrapperForCheckbox
  // function assignUniqueId() {
  let storeBoxForId = Math.random() * 10;
  wrapperForCheckbox.id = storeBoxForId;
  console.log(wrapperForCheckbox.id);

  listCreateCheckbox.addEventListener("change", function () {
    if (listCreateCheckbox.checked) {
      let hatauneDiv = document.getElementById(storeBoxForId);
      if (hatauneDiv) {
        hatauneDiv.remove();
      }
    }
  });
  // assignUniqueId();
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
