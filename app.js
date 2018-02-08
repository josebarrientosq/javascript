
var numero1=""
var numero2=""
var posicionoperador=""
var operadores=["mas","menos","por","dividido"]
var simbolo=["+","-","x","/"]

function calcular(event){
	var botonid = event.target.id
	
	console.log(i)
	if(botonid<=9 && numero1.length<=8 ){
		numero1=numero1+botonid
		
		imprimir(numero1)
	}
	
	else if ("igual"==botonid){
				switch(posicionoperador){
					case 0 :  numero1=Number(numero2)+Number(numero1)
								break;
					case 1 :  numero1=Number(numero2)-Number(numero1)
								break;
					case 2 :  numero1=Number(numero2)*Number(numero1)
								break;
					case 3 :  numero1=Number(numero2)/Number(numero1)
								break;
					default:
				}

				
				console.log(numero1)
				imprimir(numero1);
			}
		//console.log(botonid)
		else {
				for(var i=0;i<4;i++){
					if(operadores[i]==botonid){
						//document.getElementById('display').innerHTML=simbolo[i]
						imprimir("")
						
							numero2=numero1
							numero1=""
							posicionoperador=i
					}	
				}			

			}
		
	

}

function imprimir(e){
		document.getElementById('display').innerHTML=e;

}

function asociarevento(){

	var botonesPagina = document.getElementsByClassName('tecla');
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onclick=calcular;
      
    }

	//document.getElementById('2').onclick=imprimir;	
}


asociarevento()
//for(var i=1;i<=9;i++)
/*
var evento ={
	
	eventobotones : function(){
		var i=1
		document.getElementById('1').onclick=imprimir;
	}
}
 evento.eventobotones()
 */
