document.getElementById('LoginButton').addEventListener('click', checkLoginSuccess);
async function checkLoginSuccess(e) {
    e.preventDefault();    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch(`/api/users/${username}/${password}`);
        user = await response.json();
      

        if (user) {   
                if (user.role === 'admin') {
                    window.location.href = `Students/screen5.html?username=${encodeURIComponent(user.username)}`;
                   
            }
            else if (user.role === 'student') {
                window.location.href = `Students/SearchDisplayCources.html?username=${encodeURIComponent(user.username)}`;
                
        }
            else{
                window.location.href = `Students/screen6.html?username=${encodeURIComponent(user.username)}`;
            }

        }
 }

