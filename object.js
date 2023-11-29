var person = () => {

    return {
        firstName: "GilDong" ,
        lastName: "Hong",
        age: 20,
    }
}

let { firstName, lastName } = person();

console.log(`${firstName}, ${lastName}`);

var displayFullName = ( { lastName, firstName} ) => {

    console.log(`${lastName} ${firstName}`);    // Hong GilDong
 
 }

 displayFullName(person());