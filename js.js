
function slicel()
{
	calculator.screen.value=calculator.screen.value.slice(0,-1);
}
function result() {
	
	calculator.screen.value=eval(calculator.screen.value);

	
}
function scnt()
{
	 document.getElementById(sc).value="MyNewValue";
}
function cos()
{
	var degrees = calculator.screen.value;
var radians = degrees * Math.PI / 180;
calculator.screen.value=Math.cos(radians);
}
function sin()
{
	var degrees = calculator.screen.value;
var radians = degrees * Math.PI / 180;
calculator.screen.value=Math.sin(radians);
}
function tan()
{
	var degrees = calculator.screen.value;
var radians = degrees * Math.PI / 180;
calculator.screen.value=Math.tan(radians);
}
function fact()
{
	var i,f=1;
	for(i=1;i<=calculator.screen.value;i++)
	{
		f=f*i;
	}
	calculator.screen.value=f;
}
window.addEventListener('load', function(e) {
        setTimeout(function() { window.scrollTo(0, 1); }, 1);
      }, false);
