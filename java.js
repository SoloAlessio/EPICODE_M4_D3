const Ricerca = document.querySelector("#searchField")

function titoli(){
  const titoli = document.querySelectorAll(".title")
  const body = document.querySelector(".modal-body")

  body.innerHTML = ""

  for (let i = 0; i < titoli.length; i++) {
    body.innerHTML += `<p>${titoli[i].innerHTML}</p>`
  }
}

function secondsToMinutes(seconds) {

  const minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  if(remainingSeconds < 10){
    remainingSeconds = "0" + remainingSeconds
  }

  return `${minutes}:${remainingSeconds}`;
}

const search = (query) => {
  const section = document.querySelector(`#searchResults`)
  const row = document.querySelector("#searchResults .row")
  row.innerHTML = ""

  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + query
  )
    .then((raw) => {
      return raw.json()
    })
    .then((res) => {
      let music = res.data
      section.style.display = "block"
      for (let i = 0; i < music.length; i++) {
        const element = music[i]
        row.innerHTML += `<div class='col col-3 mt-4'> 
                            <img class='w-100 rounded' src='${element.album.cover_xl}'/> 
                            <p class="mt-3 mb-0 d-flex justify-content-between title">
                              <span>${element.title}</span>
                              <span class="text-muted">${secondsToMinutes(element.duration)}</span>
                            </p>
                            <p class="text-white-50">${element.artist.name}</p>
                          </div>`
      }
    })

    titoli()
}

