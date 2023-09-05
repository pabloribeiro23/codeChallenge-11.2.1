const API_URL = 'https://jsonplaceholder.typicode.com/users';
const submitBtn = document.getElementById('submit');
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let birthday = document.getElementById('birthday');

submitBtn.addEventListener('click', () => {
    let formInfo = {
        userName: name.value,
        userSurname: surname.value,
        userBirthday: birthday.value
    }
    console.log(formInfo)

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(formInfo),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => res.json())
    .catch((error) => console.error("Error: ", error))
    .then((response) => console.log("Success: ", response))
})