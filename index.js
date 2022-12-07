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