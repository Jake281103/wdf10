let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body; 

val = document.URL;
val = document.links; // HTML collection, give array that contain all achar <a></a> tags from the html body tag
val = document.links[0]; //
val = document.links[3]; //<a href="#" id="delete-item4" class="delete-item">…</a>
val = document.links[3].id; //delete-item4
val = document.links[5].id; //clearall

// Note:: To call class, there are two ways, className and classList.
// Note:: classList is a object array that contain all class name from the html tag.
// Note:: className give string value.
val = document.links[3].className; //delete-item
val = document.links[3].classList; //DOMTokenList
val = document.links[3].classList[0]; //delete-item
val = document.links[3].classList[1]; //clearall

val = document.forms; //Note: html collection that contain all form tag from html tag
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className; 
val = document.forms[0].classList; //DOMTokenList
val = document.forms[0].classList[0];
val = document.forms[0].acion;
val = document.forms[0].method;

val = document.images; // HTML collection
val = document.images[0]; // <img src="https://i.gifer.com/ZKZg.gif" id="loading" class="loading" alt="loading">
val = document.images[0].id;
val = document.images[0].className;
val = document.images[0].classList[0];
val = document.images[0].src; // https://i.gifer.com/ZKZg.gif
val = document.images[0].alt;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type; //text/javascript


// console.log(val);

// => Change Styling

// Note:: to write css code in javascript, it is connect with (.style)
document.getElementById("tasktitle").style.backgroundColor = "green";
document.getElementById("tasktitle").style.color = "blue";
document.getElementById("tasktitle").style.padding = "5px";


// => Change Content
// document.getElementById("tasktitle").textContent = "My Job";
// document.getElementById("tasktitle").innerText = "My Tasks";
document.getElementById("tasktitle").innerHTML = "<span style ='color:yellow;'>My todo</span>";
//Note:: .innerText and innerHTML are not equal
//Note:: html code and inline css can be written in inner HTML

// => Call by Class Name
const lis = document.getElementsByClassName("list-group-item");
// console.log(lis); // HTML Collection
// console.log(lis[2]); //<li class="list-group-item" style="color: blue;">…</li>

// lis[2].style.color = "blue";
// // lis[2].textContent = "Have to visit";
// // lis[2].innerText = "Have to cook";
// lis[2].innerHTML = 'Have to read <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>';


// => Call by Tag Name (Element)
const litags = document.getElementsByTagName("li");
// console.log(litags); // HTML Collection
// console.log(litags[1]); //<li class="list-group-item">…</li>
// litags[1].style.color = "red";
// litags[1].innerHTML = 'Have to cook <a href="#" id="delete-item2" class="delete-item"><i class="fas fa-trash-alt"></i></a>';

// => Query Selector

//Note:: querySelector give directly the element
//Note:: if class and id is called with querySelector, . and # are needed
console.log(document.querySelector("#tasktitle"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h3"));

console.log(document.querySelector("li")); //onlye first li
console.log(document.querySelector(".list-group-item")); //onlye first li

// document.querySelector("li").style.color = "blue";
// document.querySelector("ul li").style.color = "violet";
// document.querySelector("ul li:nth-child(odd)").style.backgroundColor = "gray";
// document.querySelector("ul li:nth-child(even)").style.backgroundColor = "silver";
// document.querySelector("ul li:last-child").style.backgroundColor = "green";
// document.querySelector("ul li:last-of-type").style.backgroundColor = "orange";
// document.querySelector("ul li:nth-of-type(4)").style.backgroundColor = "steelblue";


// => Query Selector All

console.log(document.querySelectorAll("#tasktitle")); // Node List
console.log(document.querySelectorAll("#tasktitle")[0]); //<h4 id="tasktitle" style="background-color: green; color: blue; padding: 5px;">…</h4> 

console.log(document.querySelectorAll(".card-title")); // Node List
console.log(document.querySelectorAll(".card-title")[0]); //<h3 class="card-title">Todo List</h3>

console.log(document.querySelectorAll("li")); // Node List
console.log(document.querySelectorAll("li")[2]); //<li class="list-group-item">…</li>

console.log(document.querySelectorAll(".list-group-item")); // Node List
console.log(document.querySelectorAll(".list-group-item")[3]); //<li class="list-group-item">…</li>


const listitems = document.querySelector("ul").getElementsByTagName("li");
console.log(listitems); //HTMLCollection(5)
console.log(typeof listitems);
console.log(listitems[1]); //<li class="list-group-item">…</li>flex

const arritems = Array.from(listitems);
console.log(arritems);

//forEach looping is only in array
//HTML Collection array can not be used forEach looping
// Note list can be used forEach loop
arritems.forEach(function(arritem,idx){
    console.log(arritem); //Element
});


// const listitms = document.querySelectorAll("ul.list-group li.list-group-item");
// console.log(listitms); // Node List
// console.log(typeof listitms); //object
// console.log(listitms[1]); //<li class="list-group-item">…</li>flex

// listitms.forEach(function(listitm,idx){
//     // console.log(listitm); //Element

//     // listitm.innerText = "Hellow world";
//     listitm.innerText = `${++idx} = Hello World`;
// });

// const lisodds = document.querySelectorAll("li:nth-child(odd)");
// // console.log(lisodds); //notelist
// const lievens = document.querySelectorAll("li:nth-child(even)");
// // console.log(lievens); //notelist

// lisodds.forEach(function(lisodd,idx){
//     lisodd.style.backgroundColor = "gray";
// });

// // lievens.forEach(function(lieven,idx){
// //     lieven.style.backgroundColor = "orange";
// // });

// for(let i = 0; i < lievens.length; i++){
//     lievens[i].style.backgroundColor = "orange";
// }


// => Parent to Children

var getli = document.querySelector("ul li");
    getli = document.querySelector("li.list-group-item");
    getli = document.querySelector("li.list-group-item:first-child");
console.log(getli);

let chl;
const getul = document.querySelector("ul.list-group");
console.log(getul);

chl = getul.children;
console.log(chl); //HTML Collection(5)
console.log(chl[2]); //<li class="list-group-item">…</li>flex
 
// chl[1].textContent = "Have to go";
// getul.children[3].innerText = "Have to cook";
// getul.children[4].innerHTML = `Have to read <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;

// => Parent to Children to Children

chl = getul; //ul element
chl = getul.children; //HTMLCollection(5)
chl = getul.children[0];
chl = getul.children[0].children; //HTMLCollection

//     ul       li          a  
chl = getul.children[0].children[0];   
chl = getul.children[0].children[0].id;
chl = getul.children[0].children[0].className;
chl = getul.children[0].children[0].classList; //DOMTokenList
chl = getul.children[0].children[0].classList[0];
chl = getul.children[0].children[0].href;

//     ul       li          a  
chl = getul.children[0].children[0].children; //HTML Collection
//     ul       li          a           i
chl = getul.children[0].children[0].children[0];   

console.log(chl); //<i class="fas fa-trash-alt">…</i>


// => Child Element Count

chl = getul.children.length; //5
chl = getul.childElementCount; //5

chl = getul.children[0].childElementCount; //1
chl = getul.children[0].children[0].childElementCount; //1

console.log(chl);

// => Children to Parent Element

const getfirstli = document.querySelector("li.list-group-item:first-child");
console.log(getfirstli);

//               li            ul
let getparent = getfirstli.parentElement;
//               li            ul           div.card-footer
    getparent = getfirstli.parentElement.parentElement;

//               li          ul         div.card-footer    div.card
    getparent = getfirstli.parentElement.parentElement.parentElement;
console.log(getparent); // Element directly


// => Next Element Sibling
let getsibling = getfirstli;
//                 li1          li2
    getsibling = getfirstli.nextElementSibling;
    getsibling = getfirstli.nextElementSibling.nextElementSibling;
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    //                 li1          li2          li3                li4                     li5                 li6
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(getsibling);

// => Previous Element Sibling

//                 li1              li2                li3              li2
    getsibling = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(getsibling);


// => Create Element

const newli = document.createElement("li");

// => Add ID
newli.id = "new-item";
console.log(newli);

// => Add Class
newli.className = "list-group-item";
newli.className = "delete-me";
newli.className = "list-group-item delete-me";

newli.classList.add("delete-i");
newli.classList.add("delete-you");
newli.classList.add("delete-we", "delete-your", "delete-us");

// => Add Attribute
// setAttribute(attrname, value);
newli.setAttribute("title", "newitem");


// newli.textContent = "hay";
// newli.innerText = "hi";
// newli.innerHTML = `List Item 6 <a href="#" id="delete-item1" class="delete-item"> <i class="fas fa-trash-alt"></i></a>`;

// const newtext = document.createTextNode("Hello World");
// newli.appendChild(newtext);

newli.appendChild(document.createTextNode("Hello Thailand"));

const newlink = document.createElement("a");
newlink.href = "#";
newlink.id = "delete-item6";
// newlink.className = "delete-item";
newlink.classList.add("delete-item");

const newitalic = document.createElement("i");
newitalic.classList.add("fas", "fa-trash-alt");

newlink.appendChild(newitalic);
// console.log(newlink);

newli.appendChild(newlink);
console.log(newli);

document.querySelector("ul.list-group").appendChild(newli);


//  => Replace Element
// replaceChild(new,old);

const newtitleh2 = document.createElement("h2");
newtitleh2.id = "tasktitle";

const newcaption = document.createTextNode("All My list");
newtitleh2.appendChild(newcaption);

// console.log(newtitleh2);

const oldtitleh4 = document.getElementById("tasktitle");
// console.log(oldtitleh4);

const getcardfooter = document.querySelector(".card-footer");
getcardfooter.replaceChild(newtitleh2, oldtitleh4);



// => Remove Element (itself)
const getlis = document.querySelectorAll("li"); //Node List
// console.log(getlis);
// console.log(getlis[0]);

// getlis[0].remove();
// getlis[1].remove();
// only remove in display document, doesn't delete in code

console.log(getlis); // 6


// => Remove Child Element

const getfirstul = document.querySelector("ul");
// console.log(getfirstul);
// getfirstul.remove();

// console.log(getfirstul.children[0]);

// getfirstul.removeChild(getfirstul.children[0]);
// getfirstul.removeChild(getfirstul.children[4]);

// getfirstul.removeChild(getfirstul.children[1]);


// => Attribute

const firstli = document.querySelector("li");
console.log(firstli);
const firstlichild = firstli.children[0];
// console.log(firstlichild);
// console.log(firstlichild.id);
// console.log(firstlichild.href);
console.log(firstlichild.getAttribute("href")); //#
console.log(firstlichild.getAttribute("id"));  //delete-item1
console.log(firstlichild.title); //iamtitle
console.log(firstlichild.alt); //undefined
console.log(firstlichild.getAttribute("alt"));  //iamalt

console.log(firstlichild.href); //https://www.google.com/
console.log(firstlichild.getAttribute("href")); //https://www.google.com/

let hasatt = firstlichild.hasAttribute("href");
console.log(hasatt); //true
hasatt = firstlichild.hasAttribute("hay");
console.log(hasatt); //false


//  => className vs classList
// console.log(firstlichild.className); //delete-item
// firstlichild.className = "delete-myself";
// firstlichild.className = "delete-item delete-myself";
// firstlichild.className = "delete-item delete-myself delete-ourserve";
// firstlichild.className = "delete-item delete-ourserver";
// console.log(firstlichild.className); //delete-item delete-ourserver

// console.log(firstlichild.classList); //DOMTokenList(3)
// console.log(firstlichild.classList[0]); //delete-item
// console.log(firstlichild.classList[1]); //undefined

firstlichild.classList.add("delete-myself");
firstlichild.classList.add("delete-ourserve");
// firstlichild.classList.add("delete-us","delete-yourself");

// firstlichild.classList.remove("delete-us");
// firstlichild.classList.remove("delete-us", "delete-ourserve");

// console.log(firstlichild.className); //delete-item delete-myself delete-ourserve

if(firstlichild.className === "delete-item delete-myself delete-ourserve"){
    console.log("Yes");
}else{
    console.log("No");
}

// To check the classname is contain or not
// .contain can be used in classList
if(firstlichild.classList.contains("delete-myself")){
    console.log("Yes");
}else{
    console.log("No");
}

// => addEventListener (eventype, callbackfunction)

const clearbtn = document.querySelector(".clear-tasks");

// Method 1
// clearbtn.addEventListener("click", function(e){
    // console.log("I am working");

    // console.log(e); //PointerEvent
    // console.log(e.target); // target is the element which is used addEventListener
    // console.log(e.target.id); // e must be defined in function() to use target
    // console.log(e.target.className);
    // console.log(e.target.classList);

    // console.log(this); 
    //this is is the element which is used addEventListener
    // this is work only regular function, is not work in arrow function

    // e.preventDefault();
    // if don't want to go refreence link, e.preventDefault() method is used.
    // paramet e is needed in function()
// });


// method2
// clearbtn.addEventListener("click",myclick); 
//myclick doesn't need () to call again and again
// if function contain (), it is invoked one time

function myclick(e){
    e.preventDefault();

    // console.log("hay");
    // console.log(e.target);

    // console.log(this);
    // console.log(this.id);

    // e.target.innerText = "Finished";
    // this.innerText = "Done";

    // Coordinate Event - relative to the window

    // client X and client Y take from window
    //console.log(e);
    // const clientx = e.clientX; 
    // const clienty = e.clientY;
    // console.log(clientx, clienty);

    // Coordinate Event - relative to the element
    //offsetX and offsetY take from element
    // const offsetx = e.offsetX;
    // const offsety = e.offsetY;
    console.log(offsetx, offsety);
}



// => Mouse Event ( Pointer Event)

const clbtn = document.querySelector(".clear-tasks");

// Single Click
// clbtn.addEventListener("click", mouseeventtype);

// Double Click
// clbtn.addEventListener("dblclick", mouseeventtype);

// Mousedown
// clbtn.addEventListener("mousedown", mouseeventtype);

// Mouseup (equal with click)
// clbtn.addEventListener("mouseup", mouseeventtype);

const card = document.querySelector(".card");

// Mouseenter
// card.addEventListener("mouseenter", mouseeventtype);

// Mouseover
// card.addEventListener("mouseover", mouseeventtype);
// mouseover act if pointer enter one element and move to another element

// Mouseleave (opsite of mouseenter)
// card.addEventListener("mouseleave", mouseeventtype);

// Mouseout (opsite of mouseover)
// card.addEventListener("mouseout", mouseeventtype);
// mouseover act if pointer exit one element and move to another element

// Mousemove
// card.addEventListener("mousemove", mouseeventtype);
// mousemove act for every pixel move

const headingh2 = document.querySelector("h2");

function mouseeventtype(e){
    
    // console.log("I am working");

    // console.log(`Event type = ${e.type}`);

    // headingh2.innerText = `MouseX : ${e.clientX} MouseY : ${e.clientY}`;
    headingh2.innerText = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
    
    // document.body.style.backgroundColor = `rgba(${e.clientX},${e.clientY},${e.clientX},0.5)`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX})`;


    e.preventDefault();
}


// submit

// const getform = document.querySelector("form");

// getform.addEventListener("submit", function(e){
//     console.log(`Event Type = ${e.type}`);

//     e.preventDefault();
// });


// => Input Event (Keyboard Event)

const getinput = document.querySelector('#task');

// keydown
// getinput.addEventListener("keydown", inputeventtype);
// keypress (equal with kewy down)
// getinput.addEventListener("keypress", inputeventtype);

// keyup
// getinput.addEventListener("keyup", inputeventtype);
// input (equal with keyup)
// getinput.addEventListener("input", inputeventtype);

//focus
// getinput.addEventListener("focus", inputeventtype);
// take the text box when cusrsor enter to text box


// blur
// getinput.addEventListener("blur", inputeventtype);
// take the text box when cusrsor exit from text box

// cut (ctl+x)
// getinput.addEventListener("cut", inputeventtype);

// paste(ctl+v)
// getinput.addEventListener("paste", inputeventtype);

function inputeventtype(e){
    // console.log(e.target);
    // console.log(this);

    // console.log(`Event Type = ${e.type}`);

    // console.log(e.target.value);
    // console.log(this.value);
    // console.log(getinput.value);
}


// => Event Bubbling ( for clicking)
// document.querySelector(".card-title").addEventListener("click", function(e){
//     console.log("I amd card-title");
// });

// document.querySelector(".card-header").addEventListener("click", function(e){
//     console.log("I amd card-header");
// });

// document.querySelector(".card").addEventListener("click", function(e){
//     console.log("I amd card");
// });


// => Event Delegation

// const getdeleteitem = document.querySelector('.delete-item');
// // console.log(getdeleteitem);

// getdeleteitem.addEventListener("click", function(e){
//     // console.log("I am delete item");

//     // ** e.target and this are not equal
//     // console.log(e.target);  // i tag 
//     // console.log(this);      // a tag

//     e.preventDefault();
// });


// document.body.addEventListener("click", eventdeleg);

// function eventdeleg(e){
//     // console.log(e.target);

//     // console.log(e.target.className);

//     // i
//     // if(e.target.className === "fas fa-trash-alt"){
//     //     console.log("I amd working, i am trash");
//     // }

//     // console.log(e.target.parentElement);
//     // console.log(e.target.parentElement.className);

//         // i      a
//     // if(e.targe.parentElement.className === "delete-item"){
//     //     console.log("I amd working, i am a tag");
//     // }

//     //     i       a
//     if(e.target.parentElement.classList.contains("delete-item")){
//         // console.log("I amd working, i am a tag");

//         // // i
//         // e.target.remove();

//         // i        a
//         // e.target.parentElement.remove();

//         // i        a                 li
//         e.target.parentElement.parentElement.remove();
//     }

//     e.preventDefault();
// }


document.querySelector("#form").addEventListener("submit", function(e){
    e.preventDefault();
    
    // console.log('hay I amn working');

    const getnewtask = document.getElementById("task").value;
    // console.log(getnewtask);

    let alltasks;
    if(localStorage.getItem("mytasks") === null){
        alltasks = [];
        
        console.log("Not value yet");
    }else{

        console.log("Value already exists");
        alltasks = JSON.parse(localStorage.getItem("mytasks"));
        // change data from locak storage to array with JSon.parse

        console.log(alltasks);
        console.log(typeof alltasks);
    }

    alltasks.push(getnewtask);
    localStorage.setItem("mytasks", JSON.stringify(alltasks));
    // array is used to store multiple value for one key name
    // array is changed to Json object, Json format (object) is changed to string because local stronge store string only

    console.log(alltasks);
});


// console.log(localStorage.getItem("mytasks"));
// console.log(typeof localStorage.getItem("mytasks"));


// console.log(JSON.parse(localStorage.getItem("mytasks")));
// console.log(typeof JSON.parse(localStorage.getItem("mytasks")));

const getmytaks = JSON.parse(localStorage.getItem("mytasks"));


getmytaks.forEach(function(gettask){
    console.log(gettask);
});


// JS object
// JSON object

// [{
//     "name": "Md. Shahadat",
//     "age": 20,
//     "email": "shahadat@gmail.com"
// }]












