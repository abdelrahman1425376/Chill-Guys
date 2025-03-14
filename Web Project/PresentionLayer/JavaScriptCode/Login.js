const UsersInfo = "../../DataBaseCode/LoginDataBase.json";
document.getElementById('LoginButton').addEventListener('click', checkLoginSuccess);
async function checkLoginSuccess(e) {
    e.preventDefault(); 
    let users = [] 
        const response = await fetch(UsersInfo);
        users = await response.json();
        const usernameInput = document.getElementById('username').value;
      const passwordInput = document.getElementById('password').value;
        const user = users.find(u => u.username === usernameInput 
            && u.password === passwordInput);
        if (user) {   
                if (user.role === 'admin') {
                    window.location.href = `Students/SearchDisplayCources.html?username=${encodeURIComponent(usernameInput)}`; 
            }
        }
 }
