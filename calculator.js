function insert(numberSelected){
	console.log("number is "+numberSelected);
	$(".calculatorDisplay").val($(".calculatorDisplay").val()+numberSelected);

}



function insertC()
{
$(".calculatorDisplay").val('');	
}

function sine()
{
   let lb=$(".calculatorDisplay").val()
if(lb.length>0)
{
    $(".calculatorDisplay").val(lb+'* Math.sin(');
}
else
{
   $(".calculatorDisplay").val('Math.sin(');
} 
     
}

function cosine()
{


let lb=$(".calculatorDisplay").val()
if(lb.length>0)
{
    $(".calculatorDisplay").val(lb+'* Math.cos(');
}
else
{
   $(".calculatorDisplay").val('Math.cos(');
} 

  }    

function tangent()
{


let lb=$(".calculatorDisplay").val()
if(lb.length>0)
{
    $(".calculatorDisplay").val(lb+'* Math.tan(');
}
else
{
   $(".calculatorDisplay").val('Math.tan(');
} 
     
}

function deleteChar()
{
   var strInDisplay=($(".calculatorDisplay").val());
   $(".calculatorDisplay").val(strInDisplay.substring(0,strInDisplay.length -1));	
}

function insertPi()
{


  let lb=$(".calculatorDisplay").val()
if(lb.length>0)
{
    $(".calculatorDisplay").val(lb+'* Math.PI');
}
else
{
   $(".calculatorDisplay").val('Math.PI');
} 


}


function logar()
{

    let lb=$(".calculatorDisplay").val()

if(lb.length>0)
{
    $(".calculatorDisplay").val(lb+'* Math.log(');
}
else
{
   $(".calculatorDisplay").val('Math.log(');
} 




     
}



function invert() 
{
   // var va=$(".calculatorDisplay").val();
   // var posNum = (eval(va) < 0) ? va * -1 : va;

  $(".calculatorDisplay").val($(".calculatorDisplay").val()*-1);
  
}



function clearAll()
{
    $(".calculatorDisplay").val('0');
}




function equalSymbol()
{



let es=$(".calculatorDisplay").val();

let res2 = (new Function('return '+es)())
console.log("length of res2 is  "+res2.toString().length)

if(!res2.toString().includes('.'))
{
   if(res2.toString().length>8)
      {

         $(".calculatorDisplay").val('ERR: length exceeded');

         printError();
      }

   else
      {

         $(".calculatorDisplay").val(parseFloat(res2).toFixed(3).toString());

      }


}

else
{



if(parseInt(res2).toPrecision(11).length>12)
      {

         $(".calculatorDisplay").val('ERR: length exceeded');
         printError();
      }

   else
      {
         $(".calculatorDisplay").val(parseFloat(res2).toFixed(3));
      }

}

}


function calculate(expression)
{

let res2 = (new Function('return '+expression)())





return res2;


}





function printError()
{
   
   console.error("length exceeded 8");

}


function square()
{

   squaredValue=$(".calculatorDisplay").val()**2;

  
   $(".calculatorDisplay").val($(".calculatorDisplay").val()**2);



}

function squareRoot()
{

    let lb=$(".calculatorDisplay").val()

if(lb.length>0)
{
    $(".calculatorDisplay").val(lb+'* Math.sqrt(');
}
else
{
   $(".calculatorDisplay").val('Math.sqrt(');
} 
}


function f()
{


let num=eval($(".calculatorDisplay").val());
console.log(num);

 let fact=num;

console.log(fact);

  if(num==0 || num==1)
  {

$(".calculatorDisplay").val('1');

  }
  else 
  {

   while(num>=2)
   {

      fact=fact* (num-1);
      
      num--;

      if(num==1)
      {
         console.log(fact)
          $(".calculatorDisplay").val(fact);
      }
   }

  
  }

}


$('.calculatorDisplay').keypress(function (event) {
 var keyPressed = event.which;
 if(keyPressed == 13)  // the enter key code
  {
  	equalSymbol();
  }
});