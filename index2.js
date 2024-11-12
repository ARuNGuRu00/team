function testElement(title,last_date,completion_time,test_status){
    let item2=document.createElement("div");
    item2.className="item1";
    if (test_status === "Completed:)"){
        item2.style='opacity:0.5;background-color:rgb(210, 230, 250);';
    }
    item2.innerHTML=`<div class='title'><span>${title}</span>@</div><div class='content'><div>${last_date} <br>${completion_time}</div><span>${test_status}</span></div>`;
    document.querySelector('.test-window').appendChild(item2);
    

}

testElement('Dynamics','28-08-2004','5.00am - 12.00pm','Completed:)');
testElement('Thermodynamics','28-08-2004 - 12-09-2005','4.00pm-10pm','Completed');
testElement('Dynamics','28-08-2004','5.00am - 12.00pm','Not Completed');
testElement('Thermodynamics','28-08-2004 - 12-09-2005','','Not Completed');
testElement('Dynamics','28-08-2004','5.00am - 12.00pm','Completed:)');
testElement('Thermodynamics','28-08-2004 - 12-09-2005','','Completed');
testElement('Dynamics','28-08-2004','5.00am - 12.00pm','Not Completed');
testElement('Thermodynamics','28-08-2004 - 12-09-2005','','Not Completed');
testElement('Dynamics','28-08-2004','5.00am - 12.00pm','Completed:)');
testElement('Thermodynamics','28-08-2004 - 12-09-2005','','Completed');
testElement('Dynamics','28-08-2004','5.00am - 12.00pm','Completed:)');
testElement('Thermodynamics','28-08-2004 - 12-09-2005','','Completed');
testElement('Thermodynamics','28-08-2004 - 12-09-2005','4.00pm-10pm','Completed');

