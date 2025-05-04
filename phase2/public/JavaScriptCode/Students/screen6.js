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
async function loadClasses() {
    let register = localStorage.getItem("registerration");

    if (register) {
        register = JSON.parse(register);
    } else {
        const response = await fetch(RegisterationInfo);
        register = await response.json();
        localStorage.setItem("registerration", JSON.stringify(register));
    }

    let container = document.querySelector(".pending");
    let instructorName = document.getElementById("UserName").textContent;
    container.innerHTML = ""; 
    const response = await fetch(`/api/register/instructor/${instructorName}`);
   let  instructorClasses = await response.json();
   instructorClasses.forEach((c) => {
        container.innerHTML += `<h3>${c.course_name} - CRN(${c.id}):</h3><ul>`;
       
            container.innerHTML += `<h4>UserName:${c.instructor}<h4>
            <p>Grade: ${c.grade==""?"None":c.grade} student name:${c.name}<p>
            `;
        });

  
}
async function initalScreen() {
    assginUserName();
    loadClasses()
    
}