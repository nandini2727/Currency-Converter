const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector('form button');
const fromcurr=document.querySelector('.from select');
const tocurr=document.querySelector('.to select');
const msg=document.querySelector('.msg')

for (let select of dropdowns){
    for (code in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=code;
        newOption.value=code;
        if(select.name==='from'&&code==='USD')
            newOption.selected='selected'
            if(select.name==='to'&&code==='INR')
            newOption.selected='selected'
        select.append(newOption)
        
    }
    select.addEventListener('change',(evt)=>{updateflag(evt.target)})
}
const updateflag=(element)=>{

    let currCode=element.value;
    let country=countryList[currCode];
    let newlink=`https://flagsapi.com/${country}/flat/64.png`
    let image=element.parentElement.querySelector("img");
    image.src=newlink
}

const updateExchangeRate=async ()=>{
    let amt=document.querySelector('.amount input');
    let amtval=amt.value;
    console.log(amtval)
    if (amtval<0||amtval==="")
        amt.value=1
    const URL= `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`
    let response= await fetch(URL);
    let result= await response.json()
    let rate= result[tocurr.value.toLowerCase()];
    let finalamt=rate*amtval;
    msg.innerText=`${amtval}${fromcurr.value}=${finalamt.toFixed(2)}${tocurr.value}`
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
   updateExchangeRate();
})
 window.addEventListener("load",()=>{
    updateExchangeRate();
 })