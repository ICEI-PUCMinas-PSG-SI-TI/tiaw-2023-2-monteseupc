const fetchApi = () => {
    fetch(`https://my-json-server.typicode.com/brunodhr/jsonserver/hardwares`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const card = createCard(data[identifyCurrentHardware()])
            const body = document.getElementById(identifyCurrentHardware())
            body.appendChild(card)
        }).catch(error => {
            console.error(error)
        })
}

const createCard = (data) => {
    const card = document.createElement('div')
    card.classList.add('list')
    data.forEach(d => {
        const item = document.createElement('div')
        item.classList.add('card')

        const img = document.createElement('img')
        img.src = d.image
        img.classList.add('banner')
        item.appendChild(img)

        const info = document.createElement('div')
        info.classList.add('info')

        const description = document.createElement('span')
        description.textContent = d.description
        description.classList.add('description')
        info.appendChild(description)

        const price = document.createElement('span')
        price.textContent = `R$ ${d.price}`
        price.classList.add('price')
        info.appendChild(price)

        const button = document.createElement('button')
        button.classList.add('btn')
        button.textContent = 'Selecionar'
        button.addEventListener('click', () => {
            window.localStorage.setItem(identifyCurrentHardware(), d.id)
            let total = window.localStorage.getItem('total')
            window.localStorage.setItem(
                'total', total !== null ?
                parseFloat(total) + parseFloat(d.price)
                : (parseFloat(d.price))
            )
            goToNextStep()
        })
        info.appendChild(button)

        item.appendChild(info)
        card.appendChild(item)
    })
    return card
}

const goToNextStep = () => {
    if (window.location.pathname.includes(`processors`)) {
        window.location.href = 'motherboards.html'
    } else if (window.location.pathname.includes(`motherboards`)) {
        window.location.href = 'memories.html'
    }
}

const identifyCurrentHardware = () => {
    if (window.location.pathname.includes(`processors`)) {
        return 'processors'
    } else if (window.location.pathname.includes(`motherboards`)) {
        return 'motherboards'
    } else if (window.location.pathname.includes(`memories`)) {
        return 'memories'
    }
}