// window.onload = initalScreen;
// function navigateTo(page) {
//     window.location.href = `${page}?username=${encodeURIComponent(document.getElementById('UserName').textContent)}`;
// }
// function getQueryParam(param) {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get(param);
//   } 

// async function assginUserName()
// {
//     const username = getQueryParam('username');
//     const welcomeMessage = document.getElementById('UserName');
//     welcomeMessage.textContent = ` ${username}`;  
// }
// function addclass(e) {
//     const className = document.getElementById('className').value;
//     const course = document.getElementById('course').value;
//     const instructor = document.getElementById('instructor').value;
//     const seats = document.getElementById('seats').value;
//     const available_seats = document.getElementById('available_seats').value;
//     const prerequisite = document.getElementById('prerequisite').value;
//     const id=Date.now()
//     const newclass = { id,className, course, instructor, seats,available_seats,prerequisite };
//     const Precourses = JSON.parse(localStorage.getItem('Precourses'));
//     Precourses.push(newclass);
//     localStorage.setItem('Precourses', JSON.stringify(Precourses));
    
  
// } 
// async function initalScreen() {
//     loadCourses();
//     assginUserName();
// }