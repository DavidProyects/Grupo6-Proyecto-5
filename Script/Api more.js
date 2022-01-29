const Simpsons = "https://www.simpsonsoptimizer.com/episodes/random?count=6"
fetch (Simpsons)
.then( response => response.json())
.then(data => {

//Name episode

    console.log(data)
    let episode = document.getElementById("epi")
    episode.innerHTML = `<p>${data[0].title}</p>`

    let episode1 = document.getElementById("epi1")
    episode1.innerHTML = `<p>${data[1].title}</p>`

    let episode2 = document.getElementById("epi2")
    episode2.innerHTML = `<p>${data[2].title}</p>`

    let episode3 = document.getElementById("epi3")
    episode3.innerHTML = `<p>${data[3].title}</p>`

    let episode4 = document.getElementById("epi4")
    episode4.innerHTML = `<p>${data[4].title}</p>`

    let episode5 = document.getElementById("epi5")
    episode5.innerHTML = `<p>${data[5].title}</p>`

//Start for descriptions  

    let description = document.getElementById("descrip")
    description.innerHTML = `<p>${data[0].description}</p>`

    let description1 = document.getElementById("descrip1")
    description1.innerHTML = `<p>${data[1].description}</p>`

    let description2 = document.getElementById("descrip2")
    description2.innerHTML = `<p>${data[2].description}</p>`

    let description3 = document.getElementById("descrip3")
    description3.innerHTML = `<p>${data[3].description}</p>`

    let description4 = document.getElementById("descrip4")
    description4.innerHTML = `<p>${data[4].description}</p>`

    let description5 = document.getElementById("descrip5")
    description5.innerHTML = `<p>${data[5].description}</p>`

//Start for img

    let element_1_2 = document.getElementById("img_1")
    element_1_2.innerHTML = `<img src="${data[0].image}" alt="img_1">`

    let element_2_2 = document.getElementById("img_2")
    element_2_2.innerHTML = `<img src="${data[1].image}" alt="img_2">`

    let element_3_2 = document.getElementById("img_3")
    element_3_2.innerHTML = `<img src="${data[2].image}" alt="img_3">`

    let element_4_2 = document.getElementById("img_4")
    element_4_2.innerHTML = `<img src="${data[3].image}" alt="img_4">`

    let element_5_2 = document.getElementById("img_5")
    element_5_2.innerHTML = `<img src="${data[4].image}" alt="img_5">`

    let element_6_2 = document.getElementById("img_6")
    element_6_2.innerHTML = `<img src="${data[5].image}" alt="img_6">`

})
.catch(err=>console.log(err))
