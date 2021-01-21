// union type number | string
function myFunction(argument: number | string | boolean) {
    if ( typeof argument === "string") {
        let x: string = argument.toUpperCase();
    } else if (typeof argument === "number"){
        argument.toFixed();
    } else {
        
    }
}