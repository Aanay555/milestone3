// get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayelement = document.getElementById('resume-display');
//  HANDLE fORM SUBMISSION
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // resume generate dynamically
    var resumeHtml = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Infromation</h3>\n        <p><b>Name :</b> ".concat(name, "</p>\n        <p><b>Email : </b> ").concat(email, "</p>\n        <p><b>Phone : </b> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n         <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n         <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        ");
    //display generated Resume
    if (resumeDisplayelement) {
        resumeDisplayelement.innerHTML = resumeHtml;
    }
    else {
        console.error('The Resume Display Element is Missing.');
    }
});
