let coursesInfo = "../../../DataBaseCode/CourceDataBase.json";
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
    welcomeMessage.textContent = ` ${username}`;  
}

async function loadCourses() {
    
}

async function addclass(e) {
    const className = document.getElementById('className').value;
    const Category = document.getElementById('Category').value;
    const instructor = document.getElementById('instructor').value;
    const seats = document.getElementById('seats').value;
    let prerequisite ="None";
    const id=Date.now()
    const newclass ={
        "id": id,
        "course_name": className,
        "category": Category,
        "instructor": instructor,
        "seats": seats,
        "available_seats": seats,
        "prerequisite": prerequisite,
        "validation":"None"
  
      }
    let courses = [];
    const storage=localStorage.getItem("courses");
    if(storage){
        courses=JSON.parse(localStorage.getItem("courses"))
    }
    
    else{
        
        const response = await fetch(coursesInfo);
        courses = await response.json();
        localStorage.setItem("courses",JSON.stringify(courses))
    }
    const Precourses = JSON.parse(localStorage.getItem('Precourses'));
    if(course=courses.find(course=>course.name==newclass.course_name && course.category == newclass.category)){
        newclass.prerequisite=course.prerequisite;
        Precourses.push(newclass);
        localStorage.setItem('Precourses', JSON.stringify(Precourses));
        window.alert("Done")
        
    }
    
    else{
        window.alert("The class name or category does not exist in courses List")
    }
    
  
} 
async function initalScreen() {
    
    assginUserName();
}
