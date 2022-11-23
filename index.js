const colorScheme = document.querySelector(".color-scheme")
const clrInput = document.getElementById("color-input")
const schemes = document.getElementById("schemes")
const btn = document.getElementById("get-scheme")

btn.addEventListener("click", function(){
    let colorsArray = []
    const baseClr = clrInput.value
    const baseScheme = schemes.value
    const clrOne = document.getElementById("color-one")
    const clrTwo = document.getElementById("color-two")
    const clrThree = document.getElementById("color-three")
    const clrFour = document.getElementById("color-four")
    const clrFive = document.getElementById("color-five")

    const clrOneText = document.getElementById("color-one-text")
    const clrTwoText = document.getElementById("color-two-text")
    const clrThreeText = document.getElementById("color-three-text")
    const clrFourText = document.getElementById("color-four-text")
    const clrFiveText = document.getElementById("color-five-text")
    fetch(`https://www.thecolorapi.com/scheme?hex=${baseClr.substr(1)}&mode=${baseScheme}&count=5`)
    .then(res => res.json())
    .then(data => {
        for(let color of data.colors) {
            colorsArray.push(color["hex"]["value"])
    }
          
        clrOne.style.backgroundColor = colorsArray[0]
        clrTwo.style.backgroundColor = colorsArray[1]
        clrThree.style.backgroundColor = colorsArray[2]
        clrFour.style.backgroundColor = colorsArray[3]
        clrFive.style.backgroundColor = colorsArray[4]
      
        clrOneText.innerHTML = colorsArray[0]
        clrTwoText.innerHTML = colorsArray[1]
        clrThreeText.innerHTML = colorsArray[2]
        clrFourText.innerHTML = colorsArray[3]
        clrFiveText.innerHTML = colorsArray[4]
    })})
  
colorScheme.addEventListener('click', function(e) {
    const color = e.target.textContent
    const link = e.target
    if (!color) {
        navigator.clipboard.writeText(link.nextElementSibling.innerHTML)
    }
    else {
        navigator.clipboard.writeText(color)
    }
})
