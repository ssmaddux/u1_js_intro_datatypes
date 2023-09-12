// let name = "Jeremy"
// let age = 36
// console.log(`hello my name is ${name} and I am ${age} years old`)

// let friends = ["hay", "jay", "kay"]
// console.log(friends[0])

// let string1 = "Sage"
// console.log(string1[0])

// const yourMoney = 50
// const catPrice = 100

// dollarsLeft = yourMoney - catPrice
// dollarsLeftPositive = Math.abs(dollarsLeft)

// if(yourMoney == catPrice) {
//     console.log(`You have just enough to buy a cat!`)
// } else if (yourMoney > catPrice) {
//     console.log(`You can buy a cat and will have ${dollarsLeft}$ left over`)
// } else {
//     console.log(`You cannot buy a cat. You need ${dollarsLeftPositive} more dollars :(`)
// }

// const ageInYears = 19
// ageInYears > 18 ? console.log('can vote') : console.log('can not vote')

// const food = 'fish';

// switch(food) {
//   case 'chicken':
//     console.log('Ill have the Chicken Parmesean');
//     break;
//   case 'steak':
//     console.log('The steak please, medium rare');
//     break;
//   case 'fish':
//     console.log('I think Ill try the Salmon');
//     break;
//   default:
//     console.log('please enter a valid entree');
// }

             
            
const wizards = [
    {name: "Harry Potter", house: "Gryffindor"}, 
    {name: "Lord Voldomort", house: "Slytherin"}, 
    {name: "Cedric Diggory", house: "Hufflepuff"},
    {name: "Luna Lovegood", house: "Ravenclaw"},  
    {name: "Albus Dumbledor", house: "Gryffindor"}, 
    {name: "Merlin", house: "Slytherin"}, 
    {name: "Pomona Sprout", house: "Hufflepuff"}, 
    {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
    {name: "Ron Weasley", house: "Gryffindor"}, 
    {name: "Severus Snape", house: "Slytherin"}, 
    {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
    {name: "Padma Patil", house: "Ravenclaw"}, 
    {name: "Hermoine Granger", house: "Gryffindor"} 
   ]

   for(let i = 0; i < wizards.length; i++){
    if(wizards[i].house == "Slytherin") {
        console.log(wizards[i].name)
    }
   
}  

