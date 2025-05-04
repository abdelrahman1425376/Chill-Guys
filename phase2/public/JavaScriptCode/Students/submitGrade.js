window.onload = initalScreen;
function navigateTo(page) {
    window.location.href = `${page}?username=${encodeURIComponent(document.getElementById('UserName').textContent)}`;
}
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  } 

async function assginUserName()
{
    const username = getQueryParam('username');
    const welcomeMessage = document.getElementById('UserName');
    welcomeMessage.textContent = `${username}`;  
}
async function SubmitGrade(){    
    const sname = document.getElementById('Student_name').value;
    console.log(sname)
    const name = document.getElementById('UserName').textContent;
    const CRN = document.querySelector('#Class_CRN').value;
    let Grade = document.querySelector('#Grade').value;
   

    const response = await fetch(`/api/register/submitGrade/${name}/${CRN}/${sname}`);
    let instructorRegister = await response.json();
     
    if(instructorRegister){
        instructorRegister.grade=Grade;
        const response1 = await fetch('/api/register', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(instructorRegister)
          });         window.alert("Done")
    }
    else{
        window.alert("The Student Does Not Exist")
    }
    

}
async function initalScreen() {

    assginUserName();
}