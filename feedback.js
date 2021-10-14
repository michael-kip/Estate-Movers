const  yname = document.getElementById('fname');
const  phone = document.getElementById('fphone');
const  email = document.getElementById('femail');
const  subject = document.getElementById('fsubject');
const  message = document.getElementById('fmessage');
let feed = document.getElementById('form');

feed.addEventListener('submit',feedback);

function feedback(e){
    e.preventDefault();
    // this will be displayed after submit is clicked.
    document.getElementById('thankYou').innerHTML=" Thank You for Reaching out To us. ";// use a table to display these data
    document.getElementById('info').innerHTML="This is what we have received from you:"
    document.getElementById('name').innerHTML=" Name: "+yname.value;
    document.getElementById('phone').innerHTML="Phone: "+phone.value;
    document.getElementById('email').innerHTML="Email: "+email.value;
    document.getElementById('subject').innerHTML="Subject: "+subject.value;
    document.getElementById('message').innerHTML="Message: "+message.value;
    document.getElementById('note').innerHTML="Thank "+yname.value+" for contacting us";


    console.log(yname, phone, email, subject);
    // console.log(phone);
    
}
