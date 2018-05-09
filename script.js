document.addEventListener('DOMContentLoaded', function() {
	//const result = document.querySelector("#result").value;
	//const result = +document.getElementById("result").value;		// Podobno jest szybsze // + zamienia string na liczbę - tak jak parseInt
	const digits = document.getElementsByClassName("digits");
	//console.log(digits[2].value);
	
	// Wyswietlanie cyfry w okienku wyniku
	for (i=0; i < digits.length; i++) { 
	let one_digit = digits[i]									// Pojedyncza cyfra
	one_digit.addEventListener("click", function(e){			// Klikajac na pojedyncza cyfre wywolaj funkcje
		let digit_value = e.target.closest(".digits").value;	// ktora sprawdzi wartosc tej cyfry (najblizszej kliknietej)
		document.getElementById("result").value += digit_value;	// i wyswietli ja w okienku "result", dodajac nastepne cyfry
		console.log(digit_value);
		return "";
	})}
	
	// Dzialania
	
	const adding = document.getElementById("add");
	const subtraction = document.getElementById("substract");
	const equal = document.getElementById("equal");
	const multiplication = document.getElementById("multiply");
	const division = document.getElementById("division");
	const ac = document.getElementById("ac");
	const dot = document.getElementById("dot");
	//let memory_adding = "";
	//let memory_substraction = "";
	let memory = "";
	let memory2 = "";
	let memory_operator = "";
	
	// Dodawanie
	
	adding.addEventListener("click", function(){
		memory_operator = document.getElementById("add").value		// pobieram znak dzialania i dodaje go do zmiennej memory_opertor
		memory = document.getElementById("result").value				// zmienna memory czyta wartosc z wynik2
		if (document.getElementById("result2").value == ""){ 		// jesli wartosc z wynik2 jest pusta, 
		document.getElementById("result2").value = memory; }			// to przypisz jej wartosc z memory, czyli pierwszego inputu - wartosc "przeskakuje" z pierwszego inputu do drugiego. Ale jesli w drugim inpucie wartosc nie jest pusta, czyli jest tam jakas liczba (wynik dzialania), to nie przeskakuje. Dzieki temu przy kliknieciu rowna sie pierwsza operacja ma dwie liczby do dodania, na kazda kolejna operacja jako druga wartosc ma wynik z poprzedniego dzialania (bo nie jest on zamieniany na wartosc z pierwszego inputu i nie przeskakuje, tylko zostaje).
		document.getElementById("result").value = 0;					// Ustaw pierwszy input na 0
		
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
		//equal = document.getElementById("equal").value;
		//console.log(equal);
		 memory = document.getElementById("result").value;
		 memory2 = document.getElementById("result2").value;
		 //console.log(memory_operator);
		 
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
		 //document.getElementById("result").value = 0;
		 
		 
		 //console.log("=");
		
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
	
	
	/* Drugie rozwiazanie - nie do konca poprawne
	console.log(equal);
	
	adding.addEventListener("click", function(result) {
		result = parseInt(document.getElementById("result").value);				// Pobieram liczbe wpisana w okienko wyniku
		result2 = parseInt(document.getElementById("result2").value);
		//let memory_adding = "0";
		memory_adding = result;
		//result2 = memory_adding;
		//document.getElementById("result").value = memory_adding;		// Wyswietlam wynik w drugim okienku wyniku
		document.getElementById("result").value = 0;					// Ustawiam liczbe w okienku wyniku na 0
		let test = result2 + memory_adding;
		document.getElementById("result2").value = test;
		//result2 = result2 + result;
		//memory_adding = parseInt(memory_adding) + result;		// Ustawiam liczbe w pamieci: 0 + liczba zczytana z okienka wyniku
		console.log("memory: " + memory_adding);
		console.log("result: " + test);
	})
	
	subtraction.addEventListener("click", function(result) {
		result = parseInt(document.getElementById("result").value);				// Pobieram liczbe wpisana w okienko wyniku
		result2 = parseInt(document.getElementById("result2").value);
		memory_adding = result;
		//document.getElementById("result").value = memory_adding;		// Wyswietlam wynik w drugim okienku wyniku
		document.getElementById("result").value = 0;					// Ustawiam liczbe w okienku wyniku na 0
		let test = result2 - memory_adding;
		document.getElementById("result2").value = test;
		console.log("memory: " + memory_adding);
		console.log("result: " + test);
	})
	
	equal.addEventListener("click", function(result) {
		result = parseInt(document.getElementById("result").value);
		result2 = parseInt(document.getElementById("result2").value);
		memory_adding = result;
		document.getElementById("result").value = 0;
		document.getElementById("result2").value = result2 + memory_adding;
	}) */
	
	
	
	
	
	
	
	
	
	
	/*  Pierwsze rozwiazanie, ktore nie dzialalo poprawnie
	adding.addEventListener("click", function(result) {
		result = document.getElementById("result").value;				// Pobieram liczbe wpisana w okienko wyniku
		memory_adding = parseInt(memory_adding) - parseInt(result);		// Ustawiam liczbe w pamieci: 0 + liczba zczytana z okienka wyniku
		document.getElementById("result").value = 0;					// Ustawiam liczbe w okienku wyniku na 0
		document.getElementById("result2").value = memory_adding;		// Wyswietlam wynik w drugim okienku wyniku

		console.log(memory_adding);
	}) 
	
	
	subtraction.addEventListener("click", function(result) {
		result = document.getElementById("result").value;				// Pobieram liczbe wpisana w okienko wyniku
		memory_substraction = parseInt(memory_substraction) - parseInt(result);		// Ustawiam liczbe w pamieci: 0 + liczba zczytana z okienka wyniku
		document.getElementById("result").value = 0;					// Ustawiam liczbe w okienku wyniku na 0
		document.getElementById("result2").value = memory_substraction;		// Wyswietlam wynik w drugim okienku wyniku

		console.log("odejmowanie: " + memory_substraction);
	})*/
	
	
	
	/*
	digits.addEventListener("click", function show_result(e){
		//const digits = document.getElementsByClassName("digits");
		for (i=0; i < digits.length; i++) { 
			let digit = e.target.closest("digits").value;
			result = digit[i];
			
	}})*/
	
	
	
})