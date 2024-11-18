<!-- Try it on your browser's console. -->


/*         Part 1          */
// console.log(window); => It returns the whole window object.

// console.log(window.document); => It returns the whole document.

// console.log(document); => It also returns the whole document.(But there is no need to write window.document because it is a very common syntax so there browser allows us to access it directly.)

// console.dir(document); => It returns prototype of the document.

// console.log(document.baseURI) => It returns the base URL of the page.

// console.log(document.links); => It returns a node list of the links.

// If you are going to write document on the browser's console then it selects to the whole document.

// Ways to select an element....

// document.getElementById('title');
// Output => <h1 id="title" class="heading">DOM Learning</h1>

// document.getElementById('title').id;
// Output => It returns id.

// document.getElementById('title').class;
// It returns undefined because here className exists. 

// document.getElementById('title').className;
// It returns class name.

// document.getElementById('title').getAttribute;
// It returns a function.
// If you want to get values then the method is:

// document.getElementById('title').getAttribute('id');
// It returns id.

// document.getElementById('title').getAttribute('class');
// It returns class name.

// document.getElementById('title').setAttribute('class','test');
// It returns undefined but you can see some changes in your html document in the elements section and the change is:
// <h1 id="title" class="heading">DOM Learning</h1>
// <h1 id="title" class="test">DOM Learning</h1>

// It is going to overwrite your class values so there is need to use like this.

// document.getElementById('title').setAttribute('class','test heading');
// <h1 id="title" class="test heading">DOM Learning</h1>

// Ways to include styling....
// const title = document.getElementById('title');
// title.style.backgroundColor = "green";
// title.style.padding = "15px";
// title.style.borderRadius = "10px";

// Ways to access the text content.

// title.textContent;
// Output => DOM Learning

// title.innerHTML;
// Output => DOM Learning

// title.innerText;
// Output => DOM Learning

// textContent, innerText and innerHTML return the same value so what is the difference between them. So, there are the differences:


/*      Part 2        */
// We are going to make some changes in our HTML File:

// title.textContent
// Output => 'DOM Learning test text'
// If, I make changes in the properties of the span element like this:

// <h1 id="title" class="heading">DOM Learning <span style="display: none;">test text</span></h1>
// Here, display property of the span element is none:
// So, in the case of innerText output is:
// 'DOM Learning'

// In the case of textContent output is:
// 'DOM Learning test text'

// In the case of innerHTML output is:
// 'DOM Learning <span style="display: none;">test text</span>'

// Way to access an element using by class Name....
// document.getElementsByClassName('heading');
// It returns HTML collection.


/*         Part 3       */

/* Way to select element by element name. */
// document.querySelector('h1');
// It returns the first h1 element.

// document.querySelector('h2');
// It returns the first h2 element.

/* Way to select element by id. */
// document.querySelector('#title');

/* Way to select element by class name. */
// document.querySelector('.heading');

/* Way to select an element by tag name with specific key and values. */
// document.querySelector('input[type="password"]');

/* Operations on the list element */

const myUl = document.querySelector('ul');
const turnGreen = myUl.querySelector('li');
turnGreen.style.backgroundColor = "green";
turnGreen.innerText = "Five";

/* querySelectorAll() */
// It returns a node list(node list is similar to array or we can say array like object.)

const myList = document.querySelector('ul');
const myListItems = myList.querySelectorAll('li');
myListItems[1].style.backgroundColor = "green";
// It doesn't work like array because it is known as node list means array like object. So, you can not use map, filter and reduce here because ther are not the part of its prototype. You can use forEach here because it is the part of its prototype.

myListItems.forEach((li)=>{
    li.style.backgroundColor = "green";
    li.style.margin = "2px";
});

/*       Part 4       */

// document.getElementsByClassName('list-item');
// It returns HTML HTMLCollection.

// const tempClassList = document.getElementsByClassName('list-item');
tempClassList.forEach((item)=>{
    console.log(item);
});
/* 
VM7209:1 Uncaught TypeError: tempClassList.forEach is not a function at <anonymous>:1:15
*/

//  if you want to use it like an array then there is need to convert it into array like the following example:

// Array.from(tempClassList);


/* New Concept */
const tempClassList = document.getElementsByClassName('list-item');
const myConvertedArray = Array.from(tempClassList);
myConvertedArray.forEach((item)=>{
    item.style.backgroundColor = "orange";
    item.style.margin = "5px";
})