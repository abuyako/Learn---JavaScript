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

function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout((id) => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Abuyako'};
            console.log(`${id}: ${recipe.title}`);
        },1000, recipeID[2])

    } ,1500);
}

getRecipe();

