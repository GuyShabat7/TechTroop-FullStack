const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const shoppingList = document.getElementById('shoppingList');

function addItem() {
    const itemValue = itemInput.value.trim();

    if (itemValue !== "") {
        const newItem = document.createElement('li');
        newItem.textContent = itemValue;
        
        shoppingList.appendChild(newItem);
        
        itemInput.value = "";
        itemInput.focus();
    }
}

addButton.addEventListener('click', addItem);

itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});