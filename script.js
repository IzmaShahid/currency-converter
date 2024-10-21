function convertCurrency(){
    const currency = document.getElementById('currency').value;
    const amount = document.getElementById('amount').value;
    let para = document.getElementById('para');
    let value;
    if(currency === 'usd'){
       value = amount * 280;
       para.innerHTML = `Amount In PKR: ${value}.`
    }
    else if(currency === 'eur'){
        value = amount * 305;
        para.innerHTML = `Amount In PKR: ${value}.`
     }
     else if(currency === 'gbp'){
        value = amount * 350;
        para.innerHTML = `Amount In PKR: ${value}.`
     }
     else if(currency === 'aed'){
        value = amount * 77;
        para.innerHTML = `Amount In PKR: ${value}.`
     }
     else if(currency === 'sar'){
        value = amount * 75;
        para.innerHTML = `Amount In PKR: ${value}.`
     }
    }