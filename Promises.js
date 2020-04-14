// // PROMISES
// Promises is the placeholder for something in the future. 
// So Promises help us in a Asynchronous programming. 

// We have multiple activities happen in out application 
//  connect();
//  dbCall();
//  restCall();

//  Each one of them synchronous at  runtime, if one of them take a lot of time we can excute on of them and other parallel
//  before the promises we have a callback function myCallBack(); to call the other. 
 
//  better error Handling.

// code 
// typically we use Promises inside function
//TO tell that jvascript engine that were done we use two inner parameter that promise accept which are "resolve and reject"
// resolve(); - to tell that javascript engine we have done with the work and we can go to the next step
// reject(); - to pass back errors


function myAsyncFun(){
let promise = new Promise ((resolve, reject)=> {
    let error = false; // if something goes wrong and if you change the true to false its will be fine"
    // all asynchrounous code will be here, better calls, REST APIs
    // now we are gooing to simulate synchrosite
    setTimeout(()=>{
        console.log("Working Asynchronously")
        if (error) {
            // We can also pass the values while using the resolve and reject
            reject("Error");
        }else {
            resolve("Done");
        }
        
    }
     ,1000);
});

return promise;
}

// invorking the promise
myAsyncFun().then( // function that can handle the success response and accept two argument.
    (success)=> console.log(success),
    (error)=> console.log(error)
);

  