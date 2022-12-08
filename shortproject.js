var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', additem);

// delete event
itemList.addEventListener('click', removeitem);

// filter event
filter.addEventListener('keyup', filteritems);

// addItem
function additem(e){
    e.preventDefault();

    // Get Input value
    var newitem = document.getElementById('item').value + ' ' + document.getElementById('description').value;

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

     // Create Edit Button
     var editbtn = document.createElement('button');

     // Add classes to edit button
     editbtn.className ='btn btn-sm float-right editBtn';
 
     // Append textnode 
     editbtn.appendChild(document.createTextNode('Edit'));
 
     // Append to li
     li.appendChild(editbtn);

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

// Filter Items
function filteritems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get List
    var items = itemList.getElementsByTagName('li');
    // Convert to an Array
    Array.from(items).forEach(function(item) {
        var itemname = item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}