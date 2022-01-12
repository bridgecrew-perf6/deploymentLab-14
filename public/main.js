const nameSection = document.querySelector('#names-section')
const getBtn = document.querySelector('#get-btn')

function displayHIkers(hikersArr) {
    nameSection.innerHTML = ``

    hikersArr.forEach((hikerObj) => {
        const hikerCard = document.createElement('div')
        const hikerName = document.createElement('h2')

        hikerCard.appendChild(hikerName)
    })
}

function getHikersFront() {
    axios.get(`https://sd-deployment-lab.herokuapp.com/api/hikers`)
    .then(res => displayHIkers(res.data))
}

getBtn.addEventListener('click', getHikersFront)