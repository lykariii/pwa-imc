window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

var equipeA = 0; var equipeB = 0;
var equi1 = 1; var equi2 = 1;

function trocar1(){
    document.getElementById("equipe1").innerHTML = document.getElementById("nomeA").value 
}
function trocar2(){
    document.getElementById("equipe2").innerHTML = document.getElementById("nomeB").value 
}
function zerar1() {
    equipeA = 0;
    document.getElementById("equipeA").innerHTML = equipeA ;
}
function zerar2() {
    equipeB = 0;
    document.getElementById("equipeB").innerHTML = equipeB ;
}


function um1() {
    if(equipeA>11){
        zerar1(), document.getElementById("equi1").innerHTML = (equi1 ++), alert("ponto para " +  document.getElementById("equipe1").innerHTML)
     }else{
         document.getElementById("equipeA").innerHTML = (equipeA ++)
     }
} 

function tres1() {
    if(equipeA>11){
        zerar1(), document.getElementById("equi1").innerHTML = (equi1 ++), alert("ponto para " +  document.getElementById("equipe1").innerHTML)  
     }else{
         document.getElementById("equipeA").innerHTML = (equipeA +=3);
     }
} 

function seis1() {
    if(equipeA>11){
        zerar1(), document.getElementById("equi1").innerHTML = (equi1 ++), alert("ponto para " +  document.getElementById("equipe1").innerHTML)
     }else{
      document.getElementById("equipeA").innerHTML = (equipeA +=6)
     }
} 

function doze1() {
  if(equipeA>11){
    zerar1(), document.getElementById("equi1").innerHTML = (equi1 ++), alert("ponto para " +  document.getElementById("equipe1").innerHTML)
    }else{
        document.getElementById("equipeA").innerHTML = (equipeA +=12);
    }
    
} 




function um2() {
    if(equipeB>11){
        zerar2(), document.getElementById("equi2").innerHTML = (equi2 ++), alert("ponto para " +  document.getElementById("equipe2").innerHTML)
        }else{
            document.getElementById("equipeB").innerHTML = (equipeB ++);
        }
} 

function tres2() {
    if(equipeB>11){
        zerar2(), document.getElementById("equi2").innerHTML = (equi2 ++), alert("ponto para " +  document.getElementById("equipe2").innerHTML)
        }else{
            document.getElementById("equipeB").innerHTML = (equipeB +=3);
        }
} 

function seis2() {
    if(equipeB>11){
        zerar2(), document.getElementById("equi2").innerHTML = (equi2 ++), alert("ponto para " +  document.getElementById("equipe2").innerHTML)  
        }else{
            document.getElementById("equipeB").innerHTML = (equipeB +=6);
        }
} 

function doze2() {
    if(equipeB>11){
        zerar2(), document.getElementById("equi2").innerHTML = (equi2 ++), alert("ponto para " +  document.getElementById("equipe2").innerHTML)
        }else{
            document.getElementById("equipeB").innerHTML = (equipeB +=12);
        }
} 


