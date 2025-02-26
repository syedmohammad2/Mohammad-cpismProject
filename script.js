

function run() {

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let msg = document.getElementById("msg").value

    //Condition Statement -----> (if/else)

    if (username === "" || email === "" || msg === "") {
        alert("Please Fill out all values")
    }
    else {
        let feedbackData = {
            username: username,
            email: email,
            msg: msg
        }

        console.log(feedbackData);

        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("msg").value = ""
        
        alert("Your form has been submitted! Thankyou")
    }

}
