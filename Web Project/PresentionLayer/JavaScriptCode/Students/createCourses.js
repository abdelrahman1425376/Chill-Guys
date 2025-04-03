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
async function addcourse(e) {
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
        
        
        const courseName = document.getElementById('coursesName').value;
        const Category = document.getElementById('Category').value;
        const prerequisite = document.getElementById('prerequisite').value?document.getElementById('prerequisite').value:"None";
        const id= courses.length+1
        const newcourses ={
            "id": id,
            "name": courseName,
            "category": Category,
            "prerequisite": prerequisite,
      
          }
          
        if(courses.find(course=>course.name===newcourses.name && course.category === newcourses.category)){      
            window.alert("This cource exist in courses List")
            
            
        }
        
        else{
            courses.push(newcourses);
            localStorage.setItem('courses', JSON.stringify(courses));
            window.alert("Done")
        }
        
      
    } 
  

async function initalScreen() {

    assginUserName();
}