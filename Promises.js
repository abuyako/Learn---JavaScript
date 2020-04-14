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
    // all asynchrounous code will be here, better calls, REST APIs
    // now we are gooing to simulate synchrosite
    setTimeout(()=>{
        console.log("Working Asynchronously")
        resolve();
    }
     ,1000);
});

return promise;
}

myAsyncFun().then(
    ()=> console.log("Work Done")
);

 