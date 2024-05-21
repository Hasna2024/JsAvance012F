function  init(){
    const cities = ["Quimper","Rennes"," Nantes" ," Niort"]

    let city = document.getElementById("city")
    cities.forEach(function (val){
        let option = document.createElement('option')
        option.innerText=val
        option.value=val.toLowerCase()
        // city.appendChild(option)
        city.append(option)
    })

    city.addEventListener("change" ,function(){
        let val =this.value
         let p = document.createElement('p')
        p.innerText=val
        document.body.append(p)
    })
}
window.onload= init