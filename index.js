// examine the document object

// console.dir(document);

//console.log(document.getElementById('header-title'));
var headertitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headertitle);

// headertitle.textContent = 'Hello';
// headertitle.innerText = 'GoodBye';
// console.log(headertitle.innerText);
// headertitle.innerHTML = '<h3>hello</h3>';

headertitle.style.borderBottom = 'Solid 3px #000';

var title = document.getElementsByClassName('title');

console.log(title);
title[0].style.fontWeight = 'bold';
title[0].style.color = 'green';

var list = document.getElementsByClassName('list-group-item');
console.log(list);
list[2].style.backgroundColor = 'green';

// Gives Error
// list.style.fontWeight = 'bold';

for(var i =0;i<list.length;i++)
{
    list[i].style.fontWeight = 'bold';
}