function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const number = event.target.number.value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phonenumber', number);
}