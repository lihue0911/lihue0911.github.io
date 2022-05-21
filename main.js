//DOM
console.dir(document);
//
//variables
let cantidad1;
let subtotal1;
let cantidad2;
let subtotal2;
let cantidad3;
let subtotal3;
let total;
//
//fetch
const data=async ()=>{
  try {
    const respuesta = await fetch ("/Stock.json");
    const Data= await respuesta.json();
    console.log(Data);
  } catch (error) {
    console.log("Hubo un Error", error)
  }
}
data();
//
//objetos
const Producto1={nombre:"Funda Personalizada", precio:"500"};
const Producto2={nombre:"Vinilo De Mascotas", precio:"1000"};
const Producto3={nombre:"Porta Sahumerios Honguito", precio:"700"};
function Producto(nombre, precio, cantidad, subtotal){
  this.nombre=nombre;
  this.precio=precio;
  this.cantidad=cantidad;
  this.subtotal=subtotal;
};
// Array de Productos
const Arrayproductos= [];
//
//Nombre
let nombre=prompt("¿Cual es tu nombre?")
let Nombre= document.getElementById("Nombre");
Nombre.innerText= nombre;
//
//input cantidad
let Input1=document.getElementById("input1");
Input1.addEventListener("input", () =>{
    cantidad1=(Input1.value);
});
let Input2=document.getElementById("input2");
Input2.addEventListener("input", () =>{
    cantidad2=(Input2.value);
});
let Input3=document.getElementById("input3");
Input3.addEventListener("input", () =>{
    cantidad3=(Input3.value);
});
//
// Agregar Productos A El Carrito De Compras
 function respuestaClick1(){
    let primerCantidad=document.getElementById("Cantidad1");
    if ( cantidad1<=0 || cantidad1===""||cantidad1=== undefined||cantidad1===null) {
      Toastify({
        text:"No Ingresaste Una Cantidad Valida",
        duration:2000,
        gravity:"center",
        position:"center",
        style:{
          background:"red"
        },
        close:true
      }).showToast();
    }
    else {
      primerCantidad.innerText=cantidad1;
      let primerProducto=document.getElementById("Producto1");
      primerProducto.innerText=Producto1.nombre;
      let primerPrecio=document.getElementById("Precio1");
      primerPrecio.innerText=Producto1.precio;
      subtotal1=cantidad1*Producto1.precio;
      let primerSubtotal=document.getElementById("Subtotal1")
      primerSubtotal.innerText=subtotal1
      const primerproducto=new Producto("Funda Personalizada","$500",cantidad1,subtotal1);
      Arrayproductos.push(primerproducto);
      total=document.getElementById("total")
      Toastify({
        text:"¡Se Agrego El Producto Al Carrito De Compras!",
        duration:2000,
        gravity:"bottom",
        position:"right",
        style:{
            background:"#ada264"
        },
        close:true,
        avatar:"https://www.pinpng.com/pngs/m/378-3787549_visto-bueno-png-transparent-png.png"
    }).showToast();
      subtotal2===undefined && subtotal3===undefined?total.innerText=subtotal1:subtotal2===undefined&&subtotal3>0?total.innerText=(subtotal3+subtotal1):subtotal2>0 && subtotal3===undefined? total.innerText=(subtotal2+subtotal1):subtotal2>0 && subtotal3>0?total.innerText=(subtotal3+subtotal1+subtotal2):total.innerText=(subtotal3+subtotal1+subtotal2)
    };
    }
 function respuestaClick2(){
   let segundaCantidad=document.getElementById("Cantidad2");
   if ( cantidad2<=0||cantidad2===""||cantidad2=== undefined) {
    Toastify({
      text:"No Ingresaste Una Cantidad Valida",
      duration:2000,
      gravity:"center",
      position:"center",
      style:{
        background:"red"
      },
      close:true
    }).showToast();
   } else {
    segundaCantidad.innerText=cantidad2;
    let segundoProducto=document.getElementById("Producto2");
    segundoProducto.innerText=Producto2.nombre;
    let segundoPrecio=document.getElementById("Precio2");
    segundoPrecio.innerText=Producto2.precio;
    subtotal2=cantidad2*Producto2.precio;
    let segundoSubtotal=document.getElementById("Subtotal2")
    segundoSubtotal.innerText=subtotal2
    total=document.getElementById("total")
    total.innerText= (subtotal1+subtotal2+subtotal3);
    const segundoproducto=new Producto("Vinilo De Mascotas","$1000",cantidad2, subtotal2);
    Arrayproductos.push(segundoproducto);
    total=document.getElementById("total")
    Toastify({
     text:"¡Se Agrego El Producto Al Carrito De Compras!",
     duration:2000,
     gravity:"bottom",
     position:"right",
     style:{
         background:"#ada264"
     },
     close:true,
     avatar:"https://www.pinpng.com/pngs/m/378-3787549_visto-bueno-png-transparent-png.png"
 }).showToast();
    subtotal1===undefined && subtotal3===undefined? total.innerText=subtotal2:subtotal1===undefined&&subtotal3>0?total.innerText=(subtotal3+subtotal2):subtotal1>0 && subtotal3===undefined?total.innerText=(subtotal2+subtotal1):subtotal1>0 && subtotal3>0? total.innerText=(subtotal3+subtotal1+subtotal2): total.innerText=(subtotal3+subtotal1+subtotal2)
  };
   }

 function respuestaClick3(){
  let tercerCantidad=document.getElementById("Cantidad3");
  if (cantidad3<=0||cantidad3===""||cantidad3=== undefined) {
    Toastify({
      text:"No Ingresaste Una Cantidad Valida",
      duration:2000,
      gravity:"center",
      position:"center",
      style:{
        background:"red"
      },
      close:true
    }).showToast();
  } else {
    tercerCantidad.innerText=cantidad3;
    let tercerProducto=document.getElementById("Producto3");
    tercerProducto.innerText=Producto3.nombre;
    let tercerPrecio=document.getElementById("Precio3");
    tercerPrecio.innerText=Producto3.precio;
    subtotal3=cantidad3*Producto3.precio;
    let tercerSubtotal=document.getElementById("Subtotal3")
    tercerSubtotal.innerText=subtotal3
    total=document.getElementById("total")
    total.innerText= (subtotal1+subtotal2+subtotal3);
    const tercerproducto=new Producto("Porta Sahumerios Honguito","$700",cantidad3,subtotal3);
    Arrayproductos.push(tercerproducto);
    total=document.getElementById("total")
    Toastify({
      text:"¡Se Agrego El Producto Al Carrito De Compras!",
      duration:2000,
      gravity:"bottom",
      position:"right",
      style:{
          background:"#ada264"
      },
      close:true,
      avatar:"https://www.pinpng.com/pngs/m/378-3787549_visto-bueno-png-transparent-png.png"
  }).showToast();
    subtotal1===undefined && subtotal2===undefined? total.innerText=subtotal3 : subtotal1===undefined&&subtotal2>0? total.innerText=(subtotal3+subtotal2):subtotal1>0 && subtotal2===undefined? total.innerText=(subtotal3+subtotal1):subtotal1>0 && subtotal2>0? total.innerText=(subtotal3+subtotal1+subtotal2):total.innerText=(subtotal3+subtotal1+subtotal2
)}
 };
 let boton1 = document.getElementById("button1")
 boton1.addEventListener ("click" ,respuestaClick1);
 let boton2 = document.getElementById("button2")
 boton2.addEventListener ("click" ,respuestaClick2);
 let boton3 = document.getElementById("button3")
 boton3.addEventListener ("click" ,respuestaClick3);
//
let botonQuitar1 = document.getElementById("BotonQuitar1");
botonQuitar1.addEventListener("click",respuestaClickQuitar1);
let botonQuitar2 = document.getElementById("BotonQuitar2");
botonQuitar2.addEventListener("click",respuestaClickQuitar2);
let botonQuitar3 = document.getElementById("BotonQuitar3");
botonQuitar3.addEventListener("click",respuestaClickQuitar3);
 function respuestaClickQuitar1(){
   Arrayproductos.shift();
   let primerCantidad=document.getElementById("Cantidad1");
   primerCantidad.innerText="";
   let primerProducto=document.getElementById("Producto1");
   primerProducto.innerText="";
   let primerPrecio=document.getElementById("Precio1");
   primerPrecio.innerText="";
   let primerSubtotal=document.getElementById("Subtotal1")
   primerSubtotal.innerText="";
   subtotal1=0;
   total=document.getElementById("total")
   total.innerText=subtotal1+subtotal2+subtotal3
 };
 function respuestaClickQuitar2(){
    Arrayproductos.shift();
    let segundaCantidad=document.getElementById("Cantidad2");
    segundaCantidad.innerText="";
    let segundoProducto=document.getElementById("Producto2");
    segundoProducto.innerText="";
    let segundoPrecio=document.getElementById("Precio2");
    segundoPrecio.innerText="";
    let segundoSubtotal=document.getElementById("Subtotal2");
    segundoSubtotal.innerText="";
    subtotal2=0;
    total=document.getElementById("total")
    total.innerText=subtotal1+subtotal2+subtotal3
 };
 function respuestaClickQuitar3(){
    Arrayproductos.shift();
    let tercerCantidad=document.getElementById("Cantidad3");
    tercerCantidad.innerText="";
    let tercerProducto=document.getElementById("Producto3");
    tercerProducto.innerText="";
    let tercerPrecio=document.getElementById("Precio3");
    tercerPrecio.innerText="";
    let tercerSubtotal=document.getElementById("Subtotal3")
    tercerSubtotal.innerText="";
    subtotal3=0;
    total=document.getElementById("total")
    total.innerText=subtotal1+subtotal2+subtotal3
 };
//Modal Carrito
const open=document.getElementById("open");
const modal_conteiner=document.getElementById("modal_conteiner");
const close=document.getElementById("close");

open.addEventListener ("click",()=>{
    modal_conteiner.classList.add("show");
});
close.addEventListener ("click",()=>{
    modal_conteiner.classList.remove("show");
});
//
//confirmar compra
let confirmar = document.getElementById("confirm")
confirmar.addEventListener("click",respuestaClickConfirmar);
function respuestaClickConfirmar(){
  if(subtotal1>=1||subtotal2>=1||subtotal3>=1){
  swal({
    title:"Coloca tu Email" ,
    button : {
      text: "Enviar",
      closemodal:true
    },
    text:"Pronto nos comunicaremos contigo via Email para concretar la compra",
    content : {
    element:"input",
    attributes: {
      placeholder: "Escribe tu Email",
      type: "mail",
    }},
    classname:"#e6db9e",
    closeOnClickOutside: false,
    closeOnEsc: false,
    });
    let primerCantidad=document.getElementById("Cantidad1");
    primerCantidad.innerText="";
    let primerProducto=document.getElementById("Producto1");
    primerProducto.innerText="";
    let primerPrecio=document.getElementById("Precio1");
    primerPrecio.innerText="";
    let primerSubtotal=document.getElementById("Subtotal1")
    primerSubtotal.innerText="";
    subtotal1=0;
    let segundaCantidad=document.getElementById("Cantidad2");
    segundaCantidad.innerText="";
    let segundoProducto=document.getElementById("Producto2");
    segundoProducto.innerText="";
    let segundoPrecio=document.getElementById("Precio2");
    segundoPrecio.innerText="";
    let segundoSubtotal=document.getElementById("Subtotal2");
    segundoSubtotal.innerText="";
    subtotal2=0;
    let tercerCantidad=document.getElementById("Cantidad3");
    tercerCantidad.innerText="";
    let tercerProducto=document.getElementById("Producto3");
    tercerProducto.innerText="";
    let tercerPrecio=document.getElementById("Precio3");
    tercerPrecio.innerText="";
    let tercerSubtotal=document.getElementById("Subtotal3")
    tercerSubtotal.innerText="";
    subtotal3=0;
    total=document.getElementById("total")
    total.innerText=subtotal1+subtotal2+subtotal3
};};
//
console.log(Arrayproductos);