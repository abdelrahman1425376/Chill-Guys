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






// // step 4 is to define the callback function
// async function handleRegionChange(e) {
//     let countries = []
//     if (localStorage[e.target.value]) {
//         countries = JSON.parse(localStorage.countries);
//         console.log('from local storage');

//     } else {
//         const url = `${regionBaseURL}${e.target.value}`;
//         const response = await fetch(url);
//         countries = await response.json();
//         localStorage[e.target.value] = JSON.stringify(countries);
//          console.log('from API');

//     }
//     const countriesOptions = countries
//         .map(country => `<option value="${country.name.common}">${country.name.common}</option>`)
//         .join(' ')

//     countryDD.innerHTML = countriesOptions;

// }
// async function handleCountryChange(e) {
//     const url = `${countryBaseURL}${e.target.value}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     const country = data[0];

//     factsArea.innerHTML = convertCountryToHTML(country);

// }
// // helper method
// function convertCountryToHTML(country) {
//     const currencies = Object.values(country.currencies)
//         .map(currency => currency.name).join(', ');

//     const languages = Object.values(country.languages).join(', ');

//     return `
//         <h1>${country.name.common}</h1>
//         <img src="${country.flags.png}" alt="${country.flags.alt}" class="flag-img">
//         <table>
//             <tr>
//                 <th>Official Country Name</th>
//                 <td>${country.name.official}</td>
//             </tr>
//             <tr>
//                 <th>Population</th>
//                 <td>${country.population}</td>
//             </tr>
//             <tr>
//                 <th>Currencies</th>
//                 <td>${currencies}</td>
//             </tr>
//             <tr>
//                 <th>Languages</th>
//                 <td>${languages}</td>
//             </tr>
//         </table>
//     `
// }