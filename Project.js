// SignUp JS
const signUp = e => {
    let formData ={
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        pwd: document.getElementById('pdw').value,
    }
    localStorage.setItem('formData',JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
    e.preventDefault();
}

// Login JS


// Menu JS


// Payment JS


// Receipt JS


// Management JS