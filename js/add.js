const USER_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function addUserFunc(){
    const data= {
        info: {
            age: usarAge.value,
            name: {
                last: userLn.value, 
                first: userFn.value
            },
            email: userEmail.value,
            phone: userPhone.value,
            picture: userPic.value
        }

    }
    try {
         await fetch(USER_API ,
            {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    'Contact-Type' : 'application/json' 
                }
            })
    }
    catch (err) {}
    finally {
        alert ("good")
    }
}
