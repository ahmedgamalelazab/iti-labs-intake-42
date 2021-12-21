// get dogs images from the internet 
//initialize the container with list of dogs 
//design it to appear in a table view

//[✅] launch point for the application
const main = document.querySelector('main');

//fetching the data from the internet 

let id = 0;
async function fetchDogs(){
    const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
    const body = await response.json();
    if(body.status === 'success'){
        const table = document.createElement('table');
        const trMain = document.createElement('tr');
        const tdMain1 = document.createElement('td');
        const tdMain2 = document.createElement('td');
        tdMain1.innerHTML = `
            <h4>id</h4>
        `;
        tdMain2.innerHTML = `
            <h4>Dog Image</h4>
        `;
        trMain.appendChild(tdMain1);
        trMain.appendChild(tdMain2);
        table.appendChild(trMain);
        console.log('ok');
        console.log(body.message);
        const arrOfDogs = body.message;
        document.body.appendChild(table);
        arrOfDogs.forEach((dog)=>{
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td1.innerHTML = `
                <h4>${++id}</h4>
            `;
            td2.innerHTML = `
                <img src=${dog}></img>
            `;
            // var image = new Image();
            // image.src = dog;  
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
        })
    }
    console.log(body);
};

fetchDogs();