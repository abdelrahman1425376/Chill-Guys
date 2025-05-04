let coursesInfo = "../../../DataBaseCode/ClassessDataBase.json";
let courses = localStorage.classes ? JSON.parse(localStorage.classes) : [];
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
const storage = localStorage.getItem('Precourses');
let Precourses=[]
if (storage) {
    Precourses=JSON.parse(storage);
    if(!courses.length){
        courses=Precourses;
        localStorage.setItem('classes', JSON.stringify(courses));
    }
    
    
} else {
    const response = await fetch(coursesInfo);
    Precourses = await response.json();
    if(!courses.length){
        courses=Precourses;
        localStorage.setItem('classes', JSON.stringify(courses));
    }
    
    localStorage.setItem('Precourses', JSON.stringify(Precourses));

}
displayCourses(Precourses.filter(e=>e.validation==="None"),'.pending');
displayCourses(Precourses.filter(e=>e.validation==="valid"),'.open');
displayCourses(Precourses.filter(e=>e.validation==="Unvalid"),'.in-progress');
}
function validatation(id){
    const Precourses = JSON.parse(localStorage.getItem('Precourses'));
    const course=Precourses.find(e=>e.id==id);
    course.validation="valid";
    localStorage.setItem('Precourses',JSON.stringify(Precourses))
    courses=Precourses.filter(course=>course.validation!="Unvalid");
    localStorage.setItem('classes',JSON.stringify(courses))
    loadCourses()
}
function cancel(id){
    const Precourses = JSON.parse(localStorage.getItem('Precourses'));
    let registerration = JSON.parse(localStorage.getItem('registerration'));
    const course=Precourses.find(e=>e.id==id);
    course.validation="Unvalid";
    localStorage.setItem('Precourses',JSON.stringify(Precourses))
    courses=Precourses.filter(course=>course.validation!="Unvalid");
    localStorage.setItem('classes',JSON.stringify(courses))
    localStorage.setItem('registerration',JSON.stringify(registerration.filter(classes=>classes.id!=id || classes.status=="completed" ||classes.status=="InProgress")))
    loadCourses()
}
function cancelCourse(id){
    const course_name=courses.find(e=>e.id== id).course_name
    console.log(course_name);
    
    const Precourses = JSON.parse(localStorage.getItem('Precourses'));
    let courses1 = JSON.parse(localStorage.getItem('courses'));
    let registerration = JSON.parse(localStorage.getItem('registerration'));
    let course=Precourses.find(e=>e.course_name==course_name)
    Precourses.forEach(e=>{
        if(Precourses.find(e=>e.course_name==course_name && e.validation!="Unvalid")){
            course=Precourses.find(e=>e.course_name==course_name && e.validation!="Unvalid")
            course.validation="Unvalid"
            console.log(course.validation);
        }

    })
    courses=Precourses.filter(course=>course.validation!="Unvalid");
    courses=courses.sort(((a, b) => a.category.localeCompare(b.category)))
    localStorage.setItem('classes',JSON.stringify(courses))
    localStorage.setItem('courses',JSON.stringify(courses1.filter(e=>e.name!=course_name)))
    localStorage.setItem('registerration',JSON.stringify(registerration.filter(e=>e.course_name!=course_name && e.status !="Pending")))
    
    
    localStorage.setItem('Precourses',JSON.stringify(Precourses))
    loadCourses()
}
function displayCourses(courses,query) {
    let container = document.querySelector(query);
    container.innerHTML=""

    const coursesSet=new Set();
    const categorySet=new Set();
    courses.forEach(Class=>{
        coursesSet.add(Class.course_name)
        categorySet.add(Class.category)
    }    
    )
  
    console.log();
    
    let coursesArray=Array.from(coursesSet);
    let categoryArray=Array.from(categorySet);
    console.log(coursesArray);
    console.log(categoryArray);
    
    categoryArray.forEach(category=>{
        container = document.querySelector(query);
        let courseDiv = document.createElement("div");
        courseDiv.id = category+query; 

        let heading = document.createElement("h2");
        heading.textContent = "Category: "+category;

        courseDiv.appendChild(heading);
        container.appendChild(courseDiv);

        coursesArray.forEach(courseName=>{
            let course=courses.find(e=>e.course_name==courseName)
            if(course.category===category){
                container = document.getElementById(category+query);
            console.log(container);
            
            let courseDiv = document.createElement("div");
            courseDiv.id = courseName+query; 
    
            let heading = document.createElement("h3");
            heading.textContent = "Course Name: "+courseName+":";
    
            courseDiv.appendChild(heading);
            container.appendChild(courseDiv);
            }
            
            
        })
        
    })

    courses.forEach(course => { 
        
        
        
        if(query =='.open'){
            container = document.getElementById(course.course_name+query);
            container.innerHTML += `
            <h4>CRN: ${course.id}</h4>
            <p>Instructor: ${course.instructor}</p>
            <p>Number of students: ${course.seats-course.available_seats} / ${course.seats}</p>
            <p>status: open for regestration</p>
            
        `;
        }  
        else if(query =='.pending'){
            container = document.getElementById(course.course_name+query);
            container.innerHTML += `
            <h4>CRN: ${course.id}</h4>
            <p>Instructor: ${course.instructor}</p>
            <p>Number of students: ${course.seats-course.available_seats} / ${course.seats}</p>
            <p>status: pending validation</p>
            <button class="validate" onclick="validatation(${course.id})">validate</button>
            <button class="cancel" onclick="cancel(${course.id})">cancel</button>
            <button onclick="cancelCourse(${course.id})">Delete Course</button>
        `;

        
        }
        else if(query =='.in-progress'){
            container = document.getElementById(course.course_name+query);
            container.innerHTML += `
            <h4>CRN: ${course.id}</h4>
            <p>Instructor: ${course.instructor}</p>
            <p>Number of students: ${course.seats-course.available_seats} / ${course.seats}</p>
            <p>status: cancelled</p>
        `;
        }
        
    });
}
async function initalScreen() {
    assginUserName();
    loadCourses();
    
}