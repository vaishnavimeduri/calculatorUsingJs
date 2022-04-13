let operand1='';
let operand2='';
let operator='';
function currentDisplay(){
    document.getElementById("display").innerText=operand1+operator+operand2;
}
function digitFunction(num){
    console.log("typed",num);
    if(operand1===''||operator===''){
        operand1=operand1+num;
        console.log("operand1",operand1);
        currentDisplay();
        return; 
    }
    operand2=operand2+num;
    console.log("operand2",operand2);
    currentDisplay();
}
function controlsFunction(operatorInput){
    operator=operatorInput;
    currentDisplay();
}
function evaluateFunction(){
if(operand1!==''&&operand2!==''&&operator!==''){
    let parsedOperand1=parseInt(operand1);
    let parsedOperand2=parseInt(operand2);
    let finalExpression =eval(parsedOperand1+operator+parsedOperand2);
    document.getElementById("display").innerText=parseInt(finalExpression);
    operand1='';
    operand2='';
    operator='';
    console.log("answer",finalExpression);
}
}
function inverseFunction(){
    let y=(1/parseInt(document.getElementById("display").innerText));
    document.getElementById("display").innerText=y;
    operand1='';
}
function squareFunction(){
    let y=(parseInt(document.getElementById("display").innerText));
    document.getElementById("display").innerText=y*y;
    operand1='';
}
function negFunction(){
    if(operand1==='0'){
        operand1='-';
    }
    else{
        operand1*=-1;
    }
    
 digitFunction('');
}
function sqrtFunction(){
    let y=(parseInt(document.getElementById("display").innerText));
    document.getElementById("display").innerText=Math.sqrt(y);
 operand1='';
}
function reset(){
     operand1='';
     operand2='';
     operator='';
     document.getElementById("display").innerText='0';
}
 
    
  