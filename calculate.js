function init(){
	var file = document.getElementById('fileInput');
	var fileChosen = document.getElementById('fileTitle');

	file.addEventListener('change', function(){
  		fileChosen.textContent = this.files[0].name
	})

  	document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

function handleFileSelect(event){
	const reader = new FileReader()
	reader.onload = handleFileLoad;
	reader.readAsText(event.target.files[0])
}

function handleFileLoad(event){
	//console.log(event);
	//document.getElementById('fileContent').textContent = event.target.result;
	
	var r = event.target.result.split(/\n/)
	var mean = meanVal(r)
	var minPerson = minVal(r)
	var maxPerson = maxVal(r)
	//console.log(mean)
	//console.log((65.95 + 56.98 + 96.1 + 78.62 + 90.3 + 72.24 + 92.34 + 60 + 81.43 + 86.22 + 88.33 + 9.03 + 49.93 + 52.34 + 53.11 + 50.1 + 88.88 + 55.32 + 55.69
		//+ 61.68 + 70.44 + 70.54 + 90 + 71.11 + 80.01)/25)
	var median = medianVal(r)
	//console.log(median)
	var tableVal = document.getElementById('valueTable');
	tableVal.rows[0].cells[1].innerHTML = maxPerson;
	tableVal.rows[1].cells[1].innerHTML = minPerson;
	tableVal.rows[2].cells[1].innerHTML = mean;
	tableVal.rows[3].cells[1].innerHTML = median;
	border();



}

function meanVal(list){
	var total = 0;
	for(var i = 1; i < list.length; i++){
		var t = list[i].split(',');
		var total = total + parseFloat(t[1]);
	}
	return (total/(list.length-1)).toFixed(2);;
}

function minVal(list){
	var firstElement = list[1].split(',');
	var min = firstElement[1];
	var nameMin = firstElement[0];

	for(var i = 2; i < list.length; i++){
		var t = list[i].split(',');
		if(parseFloat(min) > parseFloat(t[1])){
			min = t[1]
			nameMin = t[0]
		}
	}
	return nameMin
}

function maxVal(list){
	var firstElement = list[1].split(',');
	var max = firstElement[1];
	var nameMax = firstElement[0];

	for(var i = 2; i < list.length; i++){
		var t = list[i].split(',');
		if(parseFloat(max) < parseFloat(t[1])){
			max = t[1]
			nameMax = t[0]
		}
	}
	return nameMax
}

var arr = []

function medianVal(list){
	arr = []
	for(var i = 1; i < list.length; i++){
		var t = list[i].split(',');
		arr.push(parseFloat(t[1]));
	}
	arr.sort(function(a, b) {
		return a - b;
	});
	//console.log(arr)
	const mid = Math.ceil(arr.length / 2)
	//console.log(mid)
	if(arr % 2 == 0){
		var a = (arr[mid] + arr[mid -1]) /2
		return a
	}
	else{
		return arr[mid-1]
	}
	
}

function grade (){
	var tableDraw = document.getElementById('drawTable');
	var p = document.getElementById('box');
	//console.log(Aplus)
	//console.log(limitmax)
	var number = Mpicture(document.getElementById("max").value, document.getElementById("aplus").value)
	document.getElementById('box1').style.width = number;
	//myFunction()
	//console.log(limitmax)
	//console.log(arr)
	number = picture(document.getElementById("aplus").value, document.getElementById("a").value)
	document.getElementById('box2').style.width = number;

	number = picture(document.getElementById("a").value, document.getElementById("aminus").value)
	document.getElementById('box3').style.width = number;


	number = picture(document.getElementById("aminus").value, document.getElementById("bplus").value)
	document.getElementById('box4').style.width = number;
	//console.log(limitmax)
	//console.log(arr)
	number = picture(document.getElementById("bplus").value, document.getElementById("b").value)
	document.getElementById('box5').style.width = number;

	number = picture(document.getElementById("b").value, document.getElementById("bminus").value)
	document.getElementById('box6').style.width = number;

	number = picture(document.getElementById("bminus").value, document.getElementById("cplus").value)
	document.getElementById('box7').style.width = number;
	//console.log(limitmax)
	//console.log(arr)
	number = picture(document.getElementById("cplus").value, document.getElementById("c").value)
	document.getElementById('box8').style.width = number;

	number = picture(document.getElementById("c").value, document.getElementById("cminus").value)
	document.getElementById('box9').style.width = number;

	number = picture(document.getElementById("cminus").value, document.getElementById("d").value)
	document.getElementById('box10').style.width = number;
	//console.log(limitmax)
	//console.log(arr)
	number = picture(document.getElementById("d").value, document.getElementById("f").value)
	document.getElementById('box11').style.width = number;

	
}
function picture(a,b){
	var num = 0;
	for (var x of arr){
		//console.log(x)
		if(a > x & b <= x){
			num = num + 1
			//console.log("world")
		}
	}
	num = (num * 30).toString() + "px"
	//console.log(num)
	return num
}
function Mpicture(a,b){
	var num = 0;
	for (var x of arr){
		//console.log(x)
		if(a >= x & b <= x){
			num = num + 1
			//console.log("world")
		}
	}
	num = (num * 30).toString() + "px"
	//console.log(num)
	return num
}

function border(){
	if(isNaN(parseFloat(document.getElementById("max").value)) || isNaN(parseFloat(document.getElementById("aplus").value))||
		isNaN(parseFloat(document.getElementById("a").value)) || isNaN(parseFloat(document.getElementById("aminus").value)) ||
		isNaN(parseFloat(document.getElementById("bplus").value)) || isNaN(parseFloat(document.getElementById("b").value))||
		isNaN(parseFloat(document.getElementById("bminus").value)) || isNaN(parseFloat(document.getElementById("cplus").value))||
		isNaN(parseFloat(document.getElementById("c").value)) || isNaN(parseFloat(document.getElementById("cminus").value))||
		isNaN(parseFloat(document.getElementById("d").value)) || isNaN(parseFloat(document.getElementById("f").value))
		){
		document.getElementById('error').textContent = "Please enter ONLY Numeric values!";
	}

	else{
		document.getElementById('error').textContent = "";
		var max = document.getElementById("max")
		//console.log(max.min)
		max.min = (parseFloat(document.getElementById("aplus").value) + 0.01).toString()
		//console.log(max.min)
		//max.max = (document.getElementById("max").value)

		var aplus = document.getElementById("aplus")
		aplus.min = (parseFloat(document.getElementById("a").value) + 0.01).toString()
		aplus.max = (parseFloat(document.getElementById("max").value) - 0.01).toString()
		//console.log(aplus.max + "  " + aplus.min)

		var a = document.getElementById("a")
		a.min = (parseFloat(document.getElementById("aminus").value) + 0.01).toString()
		a.max = (parseFloat(document.getElementById("aplus").value) - 0.01).toString()

		var aminus = document.getElementById("aminus")
		aminus.min = (parseFloat(document.getElementById("bplus").value) + 0.01).toString()
		aminus.max = (parseFloat(document.getElementById("a").value) - 0.01).toString()

		var bplus = document.getElementById("bplus")
		bplus.min = (parseFloat(document.getElementById("b").value) + 0.01).toString()
		bplus.max = (parseFloat(document.getElementById("aminus").value) - 0.01).toString()

		var b = document.getElementById("b")
		b.min = (parseFloat(document.getElementById("bminus").value) + 0.01).toString()
		b.max = (parseFloat(document.getElementById("bplus").value) - 0.01).toString()

		var bminus = document.getElementById("bminus")
		bminus.min = (parseFloat(document.getElementById("cplus").value) + 0.01).toString()
		bminus.max = (parseFloat(document.getElementById("b").value) - 0.01).toString()

		var cplus = document.getElementById("cplus")
		cplus.min = (parseFloat(document.getElementById("c").value) + 0.01).toString()
		cplus.max = (parseFloat(document.getElementById("bminus").value) - 0.01).toString()

		var c = document.getElementById("c")
		c.min = (parseFloat(document.getElementById("cminus").value) + 0.01).toString()
		c.max = (parseFloat(document.getElementById("cplus").value) - 0.01).toString()

		var cminus = document.getElementById("cminus")
		cminus.min = (parseFloat(document.getElementById("d").value) + 0.01).toString()
		cminus.max = (parseFloat(document.getElementById("c").value) - 0.01).toString()

		var d = document.getElementById("d")
		d.min = (parseFloat(document.getElementById("f").value) + 0.01).toString()
		d.max = (parseFloat(document.getElementById("cminus").value) - 0.01).toString()

		var f = document.getElementById("f")
		f.max = (parseFloat(document.getElementById("d").value) - 0.01).toString()

		grade();
	}


}






