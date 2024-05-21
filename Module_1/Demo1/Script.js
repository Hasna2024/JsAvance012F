let Pingouin= "Pingouin"
 let polarBear  ='Ours polaire'

let toDay = new Date()
let locations= ["banquise","batman","madagascar","l'age de glace"]

console.log(Pingouin)
console.log(typeof  Pingouin)
console.log((locations))

// boucles
for (const  location of locations){
console.log(location)
}

let morse = {

    name: "MorseAttack",
    age: 12,
    gender: "M"
}

for (const morseKey in morse) {
    console.log(morseKey)
     console.log(morse[morseKey])

 }
locations.forEach(function (value,idx ){
    console.log(value)
 })
  locations.forEach((val => {
     console.log(val+"lambda")
 })

(function  hello() {
    console.log("Hello Word")
})()

const hel =function (){
    console.log("Hello Word")
}

