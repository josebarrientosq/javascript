var numero1=""
var numero2=""
var flag=true
var posicionoperador=""
var operadores=["mas","menos","por","dividido","igual","on","punto","sign"]
var simbolo=["+","-","x","/","on"]
var haypunto1=false
var haypunto2=false
var botonesPagina

function calcular(event){

	var botonid = event.target.id
	
	if(botonid<=9){
		if(flag && numero1.length<8 ){
		numero1=numero1+botonid
		
		imprimir(numero1)
		//console.log("numero1")
		}
		else if(!flag && numero2.length<8 ){
			numero2=numero2+botonid
			imprimir(numero2)
		//	console.log("numero2")
		}
	}
	
	else{
		for(var i=0;i<8;i++)
					if(operadores[i]==botonid){
							switch(i){
								case 0:
								case 1:
								case 2:
								case 3: imprimir("")
										flag=false
										//numero2=numero1
										//numero1=""
										posicionoperador=i 
										haypunto2=false
										numero2=""
										//console.log("operacion")
										break;
								case 4: botonigual()
										flag=true
										break;
								case 5: borrartodo()
										haypunto1=false
										haypunto2=false
										break;
								case 6: if(flag){
											if(!haypunto1){
												numero1=numero1+"."
												haypunto1=true
												imprimir(numero1)
											}
										}else if(!haypunto2){
												numero2=numero2+"."
												haypunto2=true
												imprimir(numero2)
												}

										
										break;
								case 7: if(flag){
										numero1=-numero1
										imprimir(numero1)


										} else{
											numero2=-numero2
											imprimir(numero2)}
										
										break;

								default:



							}

					}

		}

}

function botonigual(){
	switch(posicionoperador){
					case 0 :  numero1=Number(Number(numero1)+Number(numero2))
								break;
					case 1 :  numero1=Number(Number(numero1)-Number(numero2))
								break;
					case 2 :  numero1=Number(Number(numero1)*Number(numero2))
								break;
					case 3 :  if(numero2=="0"){
									numero1=""
									numero2=""
									imprimir("infinito")}
								else
									numero1=Number(numero1)/Number(numero2)
								
								break;
					default:    
				}
	imprimir(numero1);


}

function borrartodo() {
	numero1=""
	numero2=""
	imprimir("0")
	flag=true
}

function imprimir(e){
					
			e = Math.round(e * 10000000) / 10000000
			e=e.toString()
			if(e.length>8){
				e=e.substring(0,8)

			}

			document.getElementById('display').innerHTML=e
	
}

function reducir(event){
	event.target.style="transform : perspective(600px) translateZ(-75px) rotateZ(-0.5deg) rotateX(-10deg);"
}
function restaurar(event){
	event.target.style=""
}



//----objeto calculadora----

var calculadora = {

asociarevento : function (){

	botonesPagina = document.getElementsByClassName('tecla');
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onclick=calcular;
      botonesPagina[i].onmousedown=reducir;
      botonesPagina[i].onmouseup=restaurar; 
 	 }
	
}



}

calculadora.asociarevento()


