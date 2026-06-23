var wisdom = JSON.parse(localStorage.getItem('wisdom')) || [];

function displayItem(item) {
    var list = document.getElementById('wisdom-list');
    var div = document.createElement('div');
    div.className = 'wisdom-item';
    div.id = 'item-' + item.id;
    div.innerHTML = item.text + '<span onclick="deleteItem(' + item.id + ')">x</span>';
    list.appendChild(div);
}

function deleteItem(id) {
    wisdom = wisdom.filter(function(item) { return item.id !== id; });
    localStorage.setItem('wisdom', JSON.stringify(wisdom));
    document.getElementById('item-' + id).remove();
}

document.getElementById('submit-btn').addEventListener('click', function() {
    var input = document.getElementById('wisdom-input');
    var text = input.value.trim();
    if (!text) return;

    var item = { id: Date.now(), text: text };
    wisdom.push(item);
    displayItem(item);

    if (wisdom.length % 2 === 0) {
        localStorage.setItem('wisdom', JSON.stringify(wisdom));
    }

    input.value = '';
});

document.getElementById('clear-btn').addEventListener('click', function() {
    wisdom = [];
    localStorage.removeItem('wisdom');
    document.getElementById('wisdom-list').innerHTML = '';
});

wisdom.forEach(function(item) { displayItem(item); });
