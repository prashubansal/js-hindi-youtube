// Immediately Invoked function Expressions (IIFE)
// Global scope ke pollution se problem hoti hai kai baar, so to save our function from it we use "IIFE".
// have to use ; for ending the context of IIFE.

(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')


