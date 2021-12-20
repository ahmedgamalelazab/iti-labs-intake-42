/*
    ?Define javascript function that takes only 2 arguments operator and any 
    ?numbers of integers (using Rest operator) then display the result of operation on 
    ?console on one line (using substitution $ with bactecks ` ) as follow
    ?“result of sum operation for 3,1,6,3 is 13”
 */

function simpleCalculator(op, ...args) {
  switch (op) {
    case "+":
        console.log(args.reduce((a,b)=>{
            return a+b;
        },0));
      break;
    case "-":
        console.log(args.reduce((a,b)=>{
            return a-b;
        },0));
      break;
    case "*":
        console.log(args.reduce((a,b)=>{
            return a*b;
        },1));
      break;
    default:
        console.log(args.reduce((a,b)=>{
            return a+b;
        },0));
      break;
  }
}

simpleCalculator('+',2,2,2);
simpleCalculator('-',2,2,2);
simpleCalculator('*',2,2,2);
