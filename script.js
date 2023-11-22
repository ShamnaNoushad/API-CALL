const request = new XMLHttpRequest();
request.open('get', 'https://jsonplaceholder.typicode.com/users')
request.send()

request.onreadystatechange = () => {
    if (request.readyState == 4) {
        if (request.status > 199 && request.status < 300) {
            console.log(request.responseText);//array of objects
            let arrayTodo = JSON.parse(request.responseText)
            console.log(arrayTodo);//array
            displayArray(arrayTodo) //function call


        }
        else {
            alert('Failed to connect JSONplaceholder')
        }
    }
}

function displayArray(arrayTodo) {
    for (let todo of arrayTodo) {

        htmlData = `   <div class="col-4">
        <div class="card mt-4 mx-auto shadow"  style="width: 20rem; border-radius: 10px;">
        <h5 class="card-title text-light text-center p-2 bg-dark" style="border-radius:10px 10px 0px 0px;">User Details - ${todo.id}</h5>
        <div class="card-body p-3" >
        <p class="card-text"> <b>ID: </b>${todo.id} </p>
        <p class="card-text"> <b>Name: </b>${todo.name} </p>
        <p class="card-text"> <b>User Name: </b>${todo.username} </p>
        <p class="card-text"> <b>E-mail: </b>${todo.email}</p>
        <p class="card-text"> <b>Address: </b>  <br>
        <span>street: </span>${todo.address.street} <br>
        <span>suite: </span>${todo.address.suite} <br>
        <span>city: </span>${todo.address.city} <br>
        <span>zipcode: </span>${todo.address.zipcode} <br>
        <span>Geo: </span>${todo.address.geo.lat} <br> ${todo.address.geo.lng}
        </p>
        <p class="card-text"> <b>Phone: </b>${todo.phone}</p>
        <p class="card-text"> <b>Website: </b>${todo.website}</p>
        <p class="card-text"> <b>Company: </b><br>
        <span>name: </span>${todo.company.name}<br>
        <span>catchPhrase: </span>${todo.company.catchPhrase}<br>
        <span>bs: </span>${todo.company.bs}<br>
        </p>
        </div>
        </div>
        </div>
        `
        result.innerHTML += htmlData
    }
}











// <ul class="list-group list-group-flush mt-5">
//         <li class="list-group-item">${todo.id}</li>
//         <li class="list-group-item">${todo.name}</li>
//         <li class="list-group-item">${todo.username}</li>
//         <li class="list-group-item">${todo.email}</li>
//         <li class="list-group-item">${todo.adrs}</li>
//         <li class="list-group-item">${todo.phone}</li>
//         <li class="list-group-item">${todo.website}</li>
//         <li class="list-group-item">${todo.company}</li>
//       </ul>