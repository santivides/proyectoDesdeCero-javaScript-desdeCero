const h1= document.querySelector('h1');
const input1= document.querySelector('#calculo1');
const input2= document.getElementById('calculo2');
const btn= document.querySelector('#btncalcular');
const pResult= document.getElementById('result');

function btnOnClick(){
    console.log(input1.value+input2.value);
    //let valor1=Number(input1.value);
    //let valor2=Number(input2.value);
    const resultado= input1.value+input2.value;
    pResult.innerText="resultado: "+resultado;
}