const getColor = () =>{
    const randomNum = Math.floor( Math.random()*16777215);
    const hexCode = "#" + randomNum.toString(16);
    // console.log(randomNum,hexCode);
    document.body.style.backgroundColor = hexCode;
    document.getElementById("color-code").innerHTML = hexCode;
}


document.getElementById("btn").addEventListener(
    "click",
    getColor
);