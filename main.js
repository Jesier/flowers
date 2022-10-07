
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify

    /*i need filteredFLowers to push out any flowers that are priced below 2.00
    so i need to loop through every single flower inside the object
    so i should make a constant variable of flowers
    if variable.price is less than  2.00
    filteredFlowers should push out a new array of flowers less than 2.00*/
    for (const singleFlower of flowers) {
        if (singleFlower.price < 2.00)
            filteredFlowers.push(singleFlower)

    }
    // Write your algorithm first, and then your code. Feel free to remove this comment



    return filteredFlowers  // Do not modify

}
inexpensiveFlowers()
/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify


    //i need to get the values 3 and 8 in usda zones
    //ill need to loop through flowers to get into usdazones:
    //make if statement makeing sure i have both values
    //once i do ill push out the new array

    for (const singleFLower of flowers)
        if (singleFLower.usdaZones.includes(3) && singleFLower.usdaZones.includes(8))
            filteredFlowers.push(singleFLower)
    // Write your algorithm first, and then your code. Feel free to remove this comment




    return filteredFlowers  // Do not modify
}
zoneFlowers()


/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify

    //need to pull orange flowers from object
    //creat loop that cycles through flower
    //if string "Orange"
    //oush out new array with value of orange flowers


    for (const singleFlower of flowers)
        if (singleFlower.colors.includes("Orange"))
            filteredFlowers.push(singleFlower)
    // Write your algorithm first, and then your code. Feel free to remove this comment




    return filteredFlowers  // Do not modify
}


/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify



    for (const singleFlower of flowers) {
        flowersHTMLString += `<article>
        <h1>${singleFlower.type}</h1>
            <h2>Color</h2>
            `
      
        for (const singleColor of singleFlower.colors) {
            flowersHTMLString += `<section>${singleColor}</section>
            `
        }

        flowersHTMLString += `<h2>USDA Zones</h2>
    `

        for (let j = 0; j < singleFlower.usdaZones.length; j++) {
            flowersHTMLString += `<div>${singleFlower.usdaZones[j]}</div>
        `
        }
        flowersHTMLString += '</article>'
        flowersHTMLString += '\n'
    }
    console.log(flowersHTMLString)






    /* I need to make every flower in the object into html format
        start with a blank function (its already provided) 
        make a variable that is an empty string  (its already provided) 
        make a for loop that loops through flowers
        article element indented before each property
        h1 open and closer around type of flower
        h2 open and closer around color property
        <section> each color name in the color array
        h2 open/closer around each zone
        div around zones items in the usdaZones array
        colsing article at the end of property looped to finish
 */


    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */


    return flowersHTMLString  // Do not modify

}
flowersAsHTML()












































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

