let carBtn = document.querySelector('button')

let myDiv = document.querySelector('div')


carBtn.addEventListener('click', () => {
    axios.get('/car')
    .then((response) => {
        let carName = response.data

        myDiv.innerHTML = ''


        let newP = document.createElement('p')
        newP.innerHTML = carName
        myDiv.appendChild(newP)
    })
    .catch ((error) => {
        console.log(error)
    })
})