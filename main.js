addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("variables.css");
    let datos = await peticion.text();
    datos = JSON.parse(datos.replaceAll(/--/ig, '"').replaceAll(/:/ig, '":').replaceAll(/#/ig, '"#').replaceAll(/";/ig, '",').replaceAll(/;/ig, '",').replaceAll(/":root/ig, "").substr(0, datos.length - -2)+"}");
    document.querySelectorAll(".thumb li img").forEach((val, ind) => {
        val.dataset.img = datos[`img${ind+1}`];
        val.dataset.color = datos[`colorFondo${ind+1}`];
    });
    let imgSlider = (anything)=>{
        document.querySelector(".starbucks").src = anything;
    }
    let changeCircleColor = (color)=>{
        let circle = document.querySelector(".circle");
        let titulo = document.querySelector(".content .textBox h2 span");
        let boton = document.querySelector(".content .textBox a");
        titulo.style.color = color;
        boton.style.background = color;
        circle.style.background = color;
    }
    document.querySelector(".thumb").addEventListener("mouseover", (e)=>{
        if(e.target.nodeName != "UL"){
            imgSlider(e.target.dataset.img);
            changeCircleColor(e.target.dataset.color);
        }
    })
})