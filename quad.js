const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solveQuadratic(a, b, c) {
    if (a === 0) {
        console.log("This is not a quadratic equation.");
        return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`Two distinct real roots: ${root1}, ${root2}`);
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        console.log(`One real root (double root): ${root}`);
    } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        console.log(`Complex roots: ${realPart} + ${imagPart}i, ${realPart} - ${imagPart}i`);
    }
}


rl.question("Enter coefficient a: ", (a) => {
    rl.question("Enter coefficient b: ", (b) => {
        rl.question("Enter coefficient c: ", (c) => {
            solveQuadratic(Number(a), Number(b), Number(c));
            rl.close();
        });
    });
});

