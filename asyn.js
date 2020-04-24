// //  ASYNCHRONOUS JAVASCRIPT
// is the code that keeps running at the backgrouds while our main code is still excuted. 
// example request some data from a remote server like an API's

// code samples
// const second = () => {
//     setTimeout(() => {
//         console.log('Async Hey there');
//     },2000);
// }

// const first = () => {
//     console.log('Hey there!!');
//     second();
//     console.log('The end');
// }


// first();

// function getRecipe() {
//     setTimeout(() => {
//         const recipeID = [523, 883, 432, 974];
//         console.log(recipeID);

//         setTimeout((id) => {
//             const recipe = {title: 'Fresh tomato pasta', publisher: 'Abuyako'};
//             console.log(`${id}: ${recipe.title} and publisher is ${recipe.publisher}`);
//         },1000, recipeID[2])

//     } ,1500);
// }

// getRecipe();

// promise - object that keeps tracks about whether a certain event has happened already or not. 

//         - Determines what happens after the events has happened. 
//         - Implements the concepts of a future value that were expecting. 



// coding for Promise

//  const getIDs = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//                 resolve([523, 883, 432, 974]);
//         } ,1500);
//  });

//         const getRecipe = recID => {

//         }

//  getIDs
//  .then(IDs => {
//         console.log(IDs);
//  })
//  .catch(error => {
//          console.log(error);
//  });

Asyn/Await was develop to consume promise and not to produce them and if you want to produce. 



