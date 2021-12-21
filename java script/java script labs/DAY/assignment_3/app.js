


async function fetchPersonsXML(){

    const response = await fetch('https://random-data-api.com/api/users/random_user?size=2&is_xml=true');

    const bodyInXML = await response.text();

    // console.log(bodyInXML);

    //using DOMParser 

    const parser = new DOMParser();

    const domPARSED = parser.parseFromString(bodyInXML,"text/html");

    console.log(domPARSED);

    //deal with it as normal DOM 

    const root = domPARSED.querySelector('objects').children;

    const rootInArray = Array.from(root);

    let table = document.createElement("table");
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerHTML = `
        <h4>id</h4>
    `;
    td2.innerHTML = `
        <h4>serial-number</h4>
    `;
    td3.innerHTML = `
        <h4>security-code</h4>
    `;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    table.appendChild(tr);
    rootInArray.forEach(object=>{
        var trInner = document.createElement('tr');
        for (let i = 0; i < 3; i++) {
            var tdInner = document.createElement('td');
            console.log(object.children[i].innerHTML);     
            tdInner.innerHTML = `
                <h4>${(object.children[i].innerHTML).toString()}</h4>
            `;
            trInner.appendChild(tdInner);
            table.appendChild(trInner);;      
        }
    })

    document.body.appendChild(table);


}

fetchPersonsXML();