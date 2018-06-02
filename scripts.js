// elemek összegyűjtése

let inputItemName = document.getElementById('itemName');
let inputItemCount = document.getElementById('itemCount');
let inputItemBasePrice = document.getElementById('itemBasePrice');
let buttonAdd = document.getElementById('buttonAdd');
let listItemList = document.getElementById('itemList');

// változók

let itemNames = ['tej', 'kenyér', 'gumicukor'];
let itemCounts = [2, 5, 10];
let itemBasePrices = [200, 200, 500];

// feliratkozás

buttonAdd.addEventListener('click', OnButtonAddClick);
inputItemName.addEventListener('keyup', OnInputKeyup);
inputItemCount.addEventListener('keyup', OnInputKeyup);
inputItemBasePrice.addEventListener('keyup', OnInputKeyup);

// init

RenderList(); 

// renderelés

function RenderList() {
  ResetList();

  let mappedList = itemNames.map(function(itemName, index) {
    let itemString = [
      // terméknév
      itemName,
      // darabszám x egységár
      itemBasePrices[index] + ' Ft x ' + itemCounts[index] + ' db',
      // teljes ár
      itemBasePrices[index] * itemCounts[index] + ' Ft'
    ].join(' - ');
    return itemString;
  });

  mappedList.forEach(function(itemText) {
    RenderListItem(itemText);
  });
}

function ResetList() {
  listItemList.innerText = '';
}

function RenderListItem(text) {
  let newItem = document.createElement('li');
  newItem.innerText = text;
  listItemList.appendChild(newItem);
}

// feliratkozó függvények

function OnButtonAddClick() {
  // hozzáadás
  AddNewItem();
}

function OnInputKeyup(event) {
  if (event.key == 'Enter') {
    // hozzáadás
    AddNewItem();
  }
}

// egyéb függvények

function AddNewItem() {
  // validálás
  if (
    !(inputItemName.value && inputItemCount.value && inputItemBasePrice.value)
  ) {
    return;
  }

  // hozzáadás
  itemNames.push(inputItemName.value);
  itemCounts.push(inputItemCount.value);
  itemBasePrices.push(inputItemBasePrice.value);

  // takarítás
  inputItemName.value = '';
  inputItemCount.value = '';
  inputItemBasePrice.value = '';

  RenderList();
}
