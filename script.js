/* Task 1 */
var heading = document.getElementById('heading');
console.log(heading.innerText);
heading.innerText = '<h3>Asa Cat</h3>'

/* Task 2 using plain JavaScript */

// task 2a

var textBtn = document.getElementById('addText2');
textBtn.addEventListener('click', function(event){
    var task2 = document.getElementById('task2a');
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello World!";
    task2.appendChild(paragraph);
});

// task2b

function changeBGcolor(event){
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = event.target.innerText.toLowerCase();
    
    /*if(event.target.innerText == "Red"){
        body.style.backgroundColor = 'red';
    }
     if(event.target.innerText == "Green"){
        body.style.backgroundColor = 'green';
    }*/
}
/* Task 4 using jQuery */