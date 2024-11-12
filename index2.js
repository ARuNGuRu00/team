function testElement(title,last_date,completion_time,test_status){
    let item2=document.createElement("div");
    item2.className="item1";
    item2.innerHTML=`<div class='title'><span>${title}</span>@</div><div class='content'><div>${last_date} <br>${completion_time}</div><span>${test_status}</span></div>`;
    document.querySelector('.test-window').appendChild(item2);

}

testElement('dynamics','28-08-2004','5.00am - 12.00pm','Completed:)');


