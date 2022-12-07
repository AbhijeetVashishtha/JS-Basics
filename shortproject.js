var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', additem);

// delete event
itemList.addEventListener('click', removeitem);

// addItem
function additem(e){
    e.preventDefault();

    // Get Input value
    var newitem = document.getElementById('item').value;

    // Create new li Element
    var li = document.createElement('li');

    // add class    
    li.className = 'list-group-item';

    // Add Text Node with input value
    li.appendChild(document.createTextNode(newitem));

    // Create Del Element
    var deletebtn = document.createElement('button');

    // Add classes to del button
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deletebtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deletebtn);

    // append li to list
    itemList.appendChild(li);

}

// remove item
function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}