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
function SubmitGrade(){

    let register=JSON.parse(localStorage.getItem("registerration"));
    
    let sname = document.getElementById('Student_name').value;
    console.log(sname);
    
    let name = document.getElementById('UserName').textContent;
    let CRN = document.querySelector('#Class_CRN').value;
    let Grade = document.querySelector('#Grade').value;
    const instructorRegister=register.find(register =>register.instructor == name && register.status=="InProgress" && register.id == CRN && register.name== sname);    
    if(instructorRegister){
        
        instructorRegister.grade=Grade;
        localStorage.setItem("registerration",JSON.stringify(register));
        window.alert("Done")
    }
    else{
        window.alert("The Student Does Not Exist")
    }
    

}
async function initalScreen() {

    assginUserName();
}