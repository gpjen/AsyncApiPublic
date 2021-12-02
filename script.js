
const buttonClick = document.getElementById('formSend'),
show = document.getElementById('valueX');


// https://api.kawalcorona.com/

async function getData() {
    try {
        const data = await fetch('https://api.kawalcorona.com');
        const dataParse = await data.json();
        let result = '';

        dataParse.map(val => {
            const lastUpdate = new Date(val.attributes.Last_Update).toLocaleString();
            const countryRegion = val.attributes.Country_Region;
            const confirmed = val.attributes.Confirmed;
            const deaths = val.attributes.Deaths;

            result += template(lastUpdate, countryRegion, confirmed, deaths);

            show.innerHTML = result;
        })
        
        
        
    } catch(err) {
        console.log(err);
    }
}

getData();



function template(lastUp, country,conf, deat) {
    return `
    <div class="cardContent">
        <div class="ccBottom">
            <p>Last Update : ${lastUp}</p>
        </div>
        <div class="ccLeft">
            <div>
                <h3>${country}</h3>
            </div>
            <div>
                <i class="fas fa-ambulance" title="Confirm"> ${conf} </i>
            </div>
            <div>
                <i class="fas fa-procedures" title="Deat">${deat}</i>
            </div>
        </div>
    </div>
    `
}


