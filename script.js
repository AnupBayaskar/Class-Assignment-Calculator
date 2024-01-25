const addbtn = document.querySelector('#addition');
const fieldOne = document.querySelector('#field-one');
const fieldTwo = document.querySelector('#field-two');
const subbtn =document.querySelector('#subtraction');
const multbtn =document.querySelector('#multiplication');
const divbtn =document.querySelector('#division');
const resetbtn= document.querySelector('#rst')
const resultValue = document.querySelector('#resultValue');

addbtn.addEventListener('click', () => {
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne + valueTwo;
    if (result < 0) {
        resultValue.innerHTML = resultValue.style.color='red'
    } else {
       resultValue.innerHTML = resultValue.style.color='green' 
    }
    console.log(valueOne + valueTwo);
    // alert(` Addition is: ${valueOne + valueTwo}`);
    resultValue.innerHTML= result });

    subbtn.addEventListener('click', () => {
        const valueOne = +fieldOne.value;
        const valueTwo = +fieldTwo.value;
        const result = valueOne - valueTwo;
    
        if (result < 0) {
            resultValue.style.borderColor = 'red';
            resultValue.style.color = 'red';
        } else {
            resultValue.style.borderColor = 'green';
            resultValue.style.color = 'green';
        }
    
        resultValue.innerHTML = result;
    });
    
multbtn.addEventListener('click',()=>{
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne*valueTwo;
    if (result < 0) {
        resultValue.innerHTML = resultValue.style.color='red'
    } else {
       resultValue.innerHTML = resultValue.style.color='green' 
    }
    resultValue.innerHTML = result
})
divbtn.addEventListener('click',()=>{
    const valueOne = +fieldOne.value;
    const valueTwo = +fieldTwo.value;
    const result = valueOne/valueTwo;
    if (result < 0) {
        resultValue.innerHTML = resultValue.style.color='red'
    } else {
       resultValue.innerHTML = resultValue.style.color='green' 
    }
    if (result=='Infinity') {
        resultValue.innerHTML= 'Cannot Divisible By 0'
    }
    else{
        resultValue.innerHTML = result
    }
}) 