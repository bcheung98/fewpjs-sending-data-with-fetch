// Add your code here
function submitData(username, email) {
    let formData = {
        name: username,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(res => res.json())
        .then(obj => addIdToPage(obj.id))
        .catch(error => throwError(error));
}

function addIdToPage(id) {
    let newId = document.createElement("p");
    newId.textContent = id;
    document.querySelector("body").appendChild(newId);
}

function throwError(error) {
    let errorMsg = document.createElement("p");
    errorMsg.textContent = error;
    document.querySelector("body").appendChild(errorMsg);
}