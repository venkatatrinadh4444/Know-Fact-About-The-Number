let userInputEl=document.getElementById('userInput')
let factEl=document.getElementById('fact')
let spinnerEl=document.getElementById('spinner')

userInputEl.addEventListener('keydown',(e)=>{
   if(e.key==="Enter"){
    let inputValue=userInputEl.value;
    if(inputValue==='')
        alert("Please Enter Any Enter")
    else {
        userInputEl.value=''
        let url='https://apis.ccbp.in/numbers-fact?number='+inputValue;
        const options={
            method:"GET"
        }
        spinnerEl.classList.toggle('d-none')
        fetch(url,options)
        .then(response=>response.json())
        .then(apiData=>{
            spinnerEl.classList.toggle('d-none')
            factEl.textContent=apiData.fact;
        })

    }
   }
})