const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select2")


function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".value-to-convert")
    const valueToConvertd = document.querySelector(".value-to-convertd")

    console.log (currencySelect.value)
  

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const bitcoinToday = 377494.90;


    if(currencySelect.value == "dolar"){
        // se o select estiver selecionado o valor de dolar, entre aqui
        valueToConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }) .format(inputCurrencyValue / dolarToday)


    }

   if(currencySelect.value == "euro"){
        // se o select estiver selecionado o valor de euro, entre aqui
            valueToConvertd.innerHTML = new Intl.NumberFormat("de-DE" ,{
            style:"currency",
            currency: "EUR"
        }).format(inputCurrencyValue/ euroToday )

    }

    if(currencySelect.value == "libra") {
            //se o select estiver selecionado o valor de libra, entre aqui
                valueToConvertd.innerHTML = new Intl.NumberFormat("en-GB" ,{
                style: "currency",
                currency:"GBP"
            }).format( inputCurrencyValue/ libraToday)

    

        }  
    
    if(currencySelect.value == "bitcoin") {

        valueToConvertd.innerHTML = new Intl.NumberFormat("BTC" ,{
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/ bitcoinToday)




    }   

    
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

  
}

function changeCurrency(){

    const coinName = document.getElementById("coin-name")
    const coinImage = document.querySelector(".coin-image")


    if(currencySelect.value == "dolar") {
        coinName.innerHTML = "Dolar americano"
        coinImage.src= "./assets/Dolar (1) 1.png"
    }

     if(currencySelect.value == "euro") {
        coinName.innerHTML = "Euro"
        coinImage.src="./assets/Euro 3.png"
     }    

     if(currencySelect.value == "libra") {
         coinName.innerHTML = "Libra"
         coinImage.src="./assets/libra 1.png"
     }
     

     if(currencySelect.value == "bitcoin") {
        coinName.innerHTML = "Bitcoin"
        coinImage.src="./assets/bitcoin 1.png"


     }


     convertValues()
  
}
    


currencySelect.addEventListener("change",changeCurrency)  
convertButton.addEventListener("click", convertValues)



