function welcome(first_name, last_name, age){
    const year = new Date().getFullYear();
    let year_of_birth = year - parseInt(age);
    return `Welcome! ${first_name} ${last_name}, born in ${year_of_birth}.`
}
console.log(welcome("Tim", "Bulka", "24"))