const fetchSearch = (query) => {
    fetch("https://api.pexels.com/v1/search?query=" + query, {
        headers: { 'Authorization': 'RClWoemV9W7o093YKulQBNUJKzGzDNmq32SvNTENnhSSBrvItb8Nwmor' }
    })
        .then((raw) => {
            return raw.json();
        })
        .then((res) => {
            let cars = res.photos;
            let row = document.querySelector(".row");

            if(cars.length < 1) {
                row.innerHTML += `<div class='col'><p>Nessuna Immagine Trovata</p></div>`
            } else{
                for (let i = 0; i < cars.slice(0,3).length; i++) {
                    const element = cars[i];
                    console.log(element.src.large);
                    row.innerHTML += `<div class='col d-flex justify-content-center'><img class='rounded shadow-lg' src='${element.src.large}'/></div>`
    
                }
            }
        })
        .catch((err) => { alert(err); });
}

function button() {
    let valore = document.querySelector("#cerca").value;
    if(valore != ""){
        if (document.querySelector(".row") == "") {
            fetchSearch(valore);   
        } else{
            document.querySelector(".row").innerHTML = "";
            fetchSearch(valore);
        }
    } else{
        alert("TESTO INSERITO NON VALIDO")
    }
    
    
    
}
