const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please Give Valid Height';
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please Give Valid Weight';
    }
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please Give Valid Height';
    }
    else{
        const bmi = (weight / ((height*height) / 10000).toFixed(2));
        if(bmi < 18.6)
        result.innerHTML = `Your BMI is <span>${bmi}</span> This falls under the category: <b>Underweight.</b>`
        if(bmi >= 18.6 && bmi <= 24.9)
        result.innerHTML = `Your BMI is <span>${bmi}</span> This falls under the category: <b>Normal Range.</b>`
        if(bmi > 24.9)
        result.innerHTML = `Your BMI is <span>${bmi}</span> This falls under the category: <b>Overweight.</b>`
    }
})

