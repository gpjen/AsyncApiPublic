
const buttonClick = document.getElementById('formSend'),
show = document.getElementById('valueX');

let country, lasUpdate, conf, deat, arr = [], contain;



// https://api.kawalcorona.com/
async function getData(a) {

    try {
        const data = await fetch('https://api.kawalcorona.com');
        const dataParse = await data.json();
        
        for (const x in dataParse) {
            arr[x] = dataParse[x].attributes
        }

        arr.forEach(element => {
            country = element.Country_Region,
            lasUpdate = new Date(element.Last_Update),
            conf = element.Confirmed,
            deat = element.Deaths;
            

            contain += template(lasUpdate, country, conf, deat );
            
            console.log(lasUpdate, country, conf, deat );
        });
        
    } catch(err) {
        console.log(err);
    }
    
    
    
}


getData(template);





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


