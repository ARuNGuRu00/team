
const c=document.createElement('div');
c.innerHTML="hello"
document.body.appendChild(c);
console.log('hello');


function testElement(){
    let item2=document.createElement("div");
    item2.className="item1";
    item2.innerHTML="<div class='content'><div>28-08-2004 <br>5.00AM - 7.00PM</div><span>Not Completed!</span></div>";
    document.querySelector('.hello').appendChild(item2);
}

testElement();