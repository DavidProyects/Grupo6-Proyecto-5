const Simpsons = "https://thesimpsonsquoteapi.glitch.me/quotes?count=6"
fetch (Simpsons)
.then( response => response.json())
.then(data => {
    console.log(data)
    let element = document.getElementById("elem")
    element.innerHTML = `<p>${data[0].quote}</p>`

    let element1 = document.getElementById("elem1")
    element1.innerHTML = `<p>${data[1].quote}</p>`

    let element2 = document.getElementById("elem2")
    element2.innerHTML = `<p>${data[2].quote}</p>`

    let element3 = document.getElementById("elem3")
    element3.innerHTML = `<p>${data[3].quote}</p>`

    let element4 = document.getElementById("elem4")
    element4.innerHTML = `<p>${data[4].quote}</p>`

    let element5 = document.getElementById("elem5")
    element5.innerHTML = `<p>${data[5].quote}</p>`

//Start for characters   

    let element_1_1 = document.getElementById("name")
    element_1_1.innerHTML = `<p>${data[0].character}</p>`

    let element_2_1 = document.getElementById("name1")
    element_2_1.innerHTML = `<p>${data[1].character}</p>`

    let element_3_1 = document.getElementById("name2")
    element_3_1.innerHTML = `<p>${data[2].character}</p>`

    let element_4_1 = document.getElementById("name3")
    element_4_1.innerHTML = `<p>${data[3].character}</p>`

    let element_5_1 = document.getElementById("name4")
    element_5_1.innerHTML = `<p>${data[4].character}</p>`

    let element_6_1 = document.getElementById("name5")
    element_6_1.innerHTML = `<p>${data[5].character}</p>`

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
