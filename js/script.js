const notRegistered = document.querySelector(".not-registered"); //selects element where we will make the list
//step 1: 
//async function to fetch information from list
const getRegistrationData = async function(){
    const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json");
    const data = await request.json();
    // console.log({data});

//step 3: calls the function in step 2
    displayContactList(data); 
}
//step 1 cont.
getRegistrationData(); //tells the function to run (calls the function)

//step 2: 
//function expression to loop though list and find the students that haven't registered yet
const displayContactList = function (data){//passes the data array to the function
    //for every student that hasn't registered, create a new "li" w/ their name
    for (const student of data){ //for each entry (named student) in the array
        
        if (student.registered === "no"){ //if their registration status is no
            let name = student.name; //capture their name
            
            let listItem = document.createElement("li");//create li 
            listItem.innerHTML = `${name}` //add the students name to the li
            //append to not registered
            notRegistered.append(listItem); //add the name to the "".not-registered" element
    };
}
};