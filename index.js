//!Random()*(max - min) + min; 

// setInterval(()=>{
//     let randdomValue1 = Math.floor(Math.random()*(255 - 0) + 0);
// console.log(randdomValue1);
// let randdomValue2 = Math.floor(Math.random()*(255 - 0) + 0);
// console.log(randdomValue2);
// let randdomValue3 = Math.floor(Math.random()*(255 - 0) + 0);
// console.log(randdomValue3);
// },1500);

function randomColorGenerator(){
    const colorBox = document.querySelector('.colorsBox');
    const rgbCode = document.querySelector("#rgbColorNumber");

    function colorCodeGenerator(){
        let randdomValue1 = Math.floor(Math.random()*(255 - 0) + 0);

        let randdomValue2 = Math.floor(Math.random()*(255 - 0) + 0);

        let randdomValue3 = Math.floor(Math.random()*(255 - 0) + 0);

        rgbCode.innerText = `rgb(${randdomValue1},${randdomValue2},${randdomValue3})`;
        colorBox.style.background = rgbCode.innerText;

    }
    setInterval(colorCodeGenerator,1000);

}
randomColorGenerator();



