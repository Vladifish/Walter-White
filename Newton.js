let main = () => {
    const fx = "Math.log(x)";
    const dx = "1/x";
    const guess = 2
    const precision = 0.00000000000000005

    const root = repeatedNewton(fx, dx, guess, precision);

    console.log("-------------------------------------------------------")
    console.log(`Function: ${fx}`)
    console.log(`Derivative: ${dx}`)
    console.log(`Initial Guess: ${guess}`)
    console.log(`Computed root is: ${root}, with precision ${precision}`)
    console.log("-------------------------------------------------------")
}

let newtonEstimate = (fx, dx, x) => {
    let derivative = eval(dx)

    if (derivative == 0) {
        console.log("Error: Division by 0")
        return -999999; // convert to throw
    }

    let test = eval(fx)
    return x - eval(fx)/derivative;
}

// this code isn't really safe cause of the eval function
// but it works as a calculator
// Takes the function, its derivative, a good guess, and how much error the user is willing to tolerate
let repeatedNewton = (fx, dx, guess, error) => {
    let x = guess
    let x_next = Infinity
    
    const COMPUTE_LIMIT = 100
    let i = 0
    while (i < COMPUTE_LIMIT) {
        x_next = newtonEstimate(fx, dx, x)
        
        if (isNaN(x_next) || x_next == null) {
            console.log("Math error")
            return NaN
        } 
        else if (Math.abs(x_next - x) <= error) {
            return x_next
        } 
        else {
            x = x_next
            i++
        }
    }

    console.log("Computational Limit Reached")
    return x_next    
}

main()