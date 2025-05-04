window.onload = initalScreen;
document.getElementById('submit').addEventListener('click', SearchCource);

async function SearchCource(e) {
    e.preventDefault(); 

    // let courses = JSON.parse(localStorage.getItem("courses")) || [];
     const type = document.getElementById('TypeSearch').value;
     const searchValue = document.getElementById('search').value.trim();

    let filteredCourses = [];
    let response=1;
    if (type === "Name") {
     //   filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchValue));
      response = await fetch(`/api/cources/name/${searchValue}`);

    } else {
      //  filteredCourses = courses.filter(course => course.category.toLowerCase().includes(searchValue));
      response = await fetch(`/api/cources/category/${searchValue}`);

    }
    filteredCourses = await response.json();

    if (filteredCourses.length === 0) {
        loadCourses(); 
    } else {
        displayCourses(filteredCourses);
    }
}
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }  
async function loadCourses() {
    const response = await fetch(`/api/cources`);
    courses = await response.json();
  
    if(courses){
        displayCourses(courses);
    }   
}

function displayCourses(courses) {
    let container = document.getElementById('courceElement');
    container.innerHTML = ''; 

    courses.forEach(course => {
       
        container.innerHTML += `
         <tr>
                    <td>${course.id}</td>
                    <td>${course.name}</td>
                    <td>${course.category}</td> 
                </tr>
            
        `;
    });
}

async function assginUserName()
{
    const username = getQueryParam('username');
    const welcomeMessage = document.getElementById('UserName');
    welcomeMessage.textContent = ` ${username}`;  
}
async function initalScreen() {
    loadCourses();
    assginUserName();
}
function navigateTo(page) {
    window.location.href = `${page}?username=${encodeURIComponent(document.getElementById('UserName').textContent)}`;
}

