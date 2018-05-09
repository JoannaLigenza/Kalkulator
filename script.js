document.addEventListener('DOMContentLoaded', function() {
	const digits = document.getElementsByClassName("digits");
	//console.log(digits[2].value);
	
	// Wyswietlanie cyfry w okienku wyniku
	for (i=0; i < digits.length; i++) { 
	let one_digit = digits[i]									// Pojedyncza cyfra
	one_digit.addEventListener("click", function(e){			// Klikajac na pojedynczy button z cyfra wywolaj funkcje
		let digit_value = e.target.closest(".digits").value;	// ktora sprawdzi wartosc kliknietego buttona z cyfra 
		document.getElementById("result").value += digit_value;	// i wyswietli ja w okienku "result", dodajac nastepne cyfry
		console.log(digit_value);
	})}
	
	// Dzialania
	
	const adding = document.getElementById("add");
	const subtraction = document.getElementById("substract");
	const equal = document.getElementById("equal");
	const multiplication = document.getElementById("multiply");
	const division = document.getElementById("division");
	const ac = document.getElementById("ac");
	const dot = document.getElementById("dot");
	let memory = "";
	let memory2 = "";
	let memory_operator = "";
	
	// Dodawanie
	
	adding.addEventListener("click", function(){
		memory_operator = document.getElementById("add").value		// pobieram znak dzialania i dodaje go do zmiennej memory_opertor
		memory = document.getElementById("result").value			// zmienna memory czyta wartosc z wynik2
		if (document.getElementById("result2").value == ""){ 		// jesli wartosc z wynik2 jest pusta, 
		document.getElementById("result2").value = memory; }		// to przypisz jej wartosc z memory, czyli pierwszego inputu - wartosc "przeskakuje" z pierwszego inputu do drugiego. Ale jesli w drugim inpucie wartosc nie jest pusta, czyli jest tam jakas liczba (wynik dzialania), to nie przeskakuje. Dzieki temu przy kliknieciu rowna sie pierwsza operacja ma dwie liczby do dodania, na kazda kolejna operacja jako druga wartosc ma wynik z poprzedniego dzialania (bo nie jest on zamieniany na wartosc z pierwszego inputu i nie przeskakuje, tylko zostaje).
		document.getElementById("result").value = 0;				// Ustaw pierwszy input na 0
		
		//console.log(result);
		console.log(memory_operator);
	})
	
	// Odejmowanie
	
	subtraction.addEventListener("click", function(){
		memory_operator = document.getElementById("substract").value
		memory = document.getElementById("result").value
		if (document.getElementById("result2").value == ""){ 
		document.getElementById("result2").value = memory; }
		document.getElementById("result").value = 0;

		console.log(memory_operator);
	})
	
	// Mnozenie
	
	multiplication.addEventListener("click", function(){
		memory_operator = document.getElementById("multiply").value
		memory = document.getElementById("result").value
		if (document.getElementById("result2").value == ""){ 
		document.getElementById("result2").value = memory; }
		document.getElementById("result").value = 0;

		console.log(memory_operator);
	})
	
	// Dzielenie
	
	division.addEventListener("click", function(){
		memory_operator = document.getElementById("division").value
		memory = document.getElementById("result").value
		if (document.getElementById("result2").value == ""){ 
		document.getElementById("result2").value = memory; }
		document.getElementById("result").value = 0;

		console.log(memory_operator);
	})
	
	// Wynik
	
	equal.addEventListener("click", function(result){
		console.log("=");
		 memory = document.getElementById("result").value;
		 memory2 = document.getElementById("result2").value;
		 
		 if (memory_operator == "+") {
		 result = parseFloat(memory2) + parseFloat(memory);
		 document.getElementById("result2").value = result;
		 console.log(result);
		 }
		 if (memory_operator == "-") { 
		 result = parseFloat(memory2) - parseFloat(memory);
		 document.getElementById("result2").value = result;
		 console.log(result);
		 }
		  if (memory_operator == "*") { 
		 result = parseFloat(memory2) * parseFloat(memory);
		 document.getElementById("result2").value = result;
		 console.log(result);
		 }
		 if (memory_operator == "/") { 
		 result = parseFloat(memory2) / parseFloat(memory);
		 document.getElementById("result2").value = result;
		 console.log(result);
		 }		
	})
	
	// AC button
	
	ac.addEventListener("click", function(){
		document.getElementById("result").value = 0;
		document.getElementById("result2").value = "";
	})
	
	// dot button
	
	dot.addEventListener("click", function(){
		document.getElementById("result").value += ".";
	})	
})