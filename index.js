// examine the document object

// console.dir(document);

// GET ELEMENT BY ID

//console.log(document.getElementById('header-title'));
// var headertitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

// console.log(headertitle);

// headertitle.textContent = 'Hello';
// headertitle.innerText = 'GoodBye';
// console.log(headertitle.innerText);
// headertitle.innerHTML = '<h3>hello</h3>';

// headertitle.style.borderBottom = 'Solid 3px #000';

// var title = document.getElementsByClassName('title');

// console.log(title);
// title[0].style.fontWeight = 'bold';
// title[0].style.color = 'green';

// GET ELEMENT BY CLASSNAME

// var list = document.getElementsByClassName('list-group-item');
// console.log(list);
// list[2].style.backgroundColor = 'green';

// // Gives Error
// // list.style.fontWeight = 'bold';

// for(var i =0;i<list.length;i++)
// {
//     list[i].style.fontWeight = 'bold';
// }

// GET ELEMENT BY TAGNAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// li[2].textContent = 'hello 3';
// li[2].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';

// // Gives Error
// // list.style.fontWeight = 'bold';

// for(var i =0;i<li.length;i++)
// {
//     li[i].style.fontWeight = 'bold';
// }

// QuerySelector

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #000';

var input = document.querySelector('input');
input.value = "Hello World";

var submit = document.querySelector('input[type ="submit"]');
submit.value = "Send";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.backgroundColor = 'yellow';

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = 'green';

var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.display = 'none';
