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


    const instructorClasses = register.filter(Class => Class.instructor === instructorName && Class.status === "InProgress");
    const instructorSet=new Set();
    instructorClasses.forEach(Class=>
        instructorSet.add(Class.id)
    )
    
    const instructorArray=Array.from(instructorSet);




    instructorArray.forEach((id) => {
        container.innerHTML += `<h3>${instructorClasses.find(Class=> Class.id == id).course_name} - CRN(${id}):</h3><ul>`;


        const students = instructorClasses.filter((student) => student.id == id);
        students.forEach((student) => {
            console.log(student.name);
            container.innerHTML += `<h4>UserName:${student.name}<h4>
            <p>Grade: ${student.grade==""?"None":student.grade}<p>
            `;
        });


      
    });
}

async function initalScreen() {
    assginUserName();
    loadClasses();
    
}