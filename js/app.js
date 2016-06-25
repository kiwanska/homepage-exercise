
document.addEventListener("DOMContentLoaded", function(event){

	console.log("działa");

	//INTERAKCJA TRZECH BOXÓW
	var imgBox = document.querySelectorAll(".gallery-box");

	for (var i = 0; i < imgBox.length-1; i++) {
		imgBox[i].addEventListener("mouseover", function(event){
			var toHide = this.querySelector(".transparent");
			toHide.classList.toggle("hidden");
		})
	}
	for (var i = 0; i < imgBox.length-1; i++) {
		imgBox[i].addEventListener("mouseout", function(event){
			var toHide = this.querySelector(".transparent");
			toHide.classList.toggle("hidden");
		})
	}

	//INTERAKCJA SLIDERA
	var prev = document.querySelector(".prev");
	var next = document.querySelector(".next");
	var allLi = document.querySelectorAll(".slider-img li");
	var visible = 0;
	
	allLi[visible].classList.add("visible");

	prev.addEventListener("click", function(event){
		console.log("kliknięto prev");
		if(visible>0) {
			allLi[visible].classList.remove("visible");
			visible--;
			allLi[visible].classList.add("visible");
		}
		//TU DODAJ COŚ ŻEBY SLIDER CHODZIŁ DOOKOŁA

	})

	next.addEventListener("click", function(event){
		console.log("kliknięto next");
		if(visible<allLi.length-1) {
			allLi[visible].classList.remove("visible");
			visible++;
			allLi[visible].classList.add("visible");
		} 
		//TU DODAJ COŚ ŻEBY SLIDER CHODZIŁ DOOKOŁA
		// else if (visible === allLi.length-1) {
		// 	visible = 0;
		// }
	})

	//INTERAKCJA ZAMÓWIENIA WŁASNEGO KRZESŁA
	var chairType = document.querySelector("input[name=chair-type]");
	var chairColor = document.querySelector("input[name=chair-color]");
	var chairFabric = document.querySelector("input[name=chair-fabric]");
	var chairTransport = document.querySelector("input[name=order-checkbox]");

	var summaryChairType = document.querySelector("#your-chair p:first-child");
	var summaryRest = document.querySelector("#your-chair");
	var divPrices = document.querySelector("#prices");

	var sumPlace = document.querySelector("#sum");

	var allClicks = document.querySelectorAll("#form-order input,span.order");

	//nowe elementy do umieszczenia w podsumowaniu zamówienia
	var newP = document.createElement("p");
	var newP2 = document.createElement("p");
	var newP3 = document.createElement("p");
	var newP4 = document.createElement("p");
	var newP5 = document.createElement("p");
	var newP6 = document.createElement("p");
	var newP7 = document.createElement("p");
	summaryRest.appendChild(newP2);
	summaryRest.appendChild(newP4);
	summaryRest.appendChild(newP6);
	divPrices.appendChild(newP);
	divPrices.appendChild(newP3);
	divPrices.appendChild(newP5);
	divPrices.appendChild(newP7);

	var newSpanSum = document.createElement("span");
	sumPlace.appendChild(newSpanSum);

	//funkcja wyświetlająca podsumowanie zamówienia
	var sumDisplay = function() {
		summaryChairType.innerText = chairType.value;
		if (chairType.value == "Chair Clair") {
			newP.innerText = "200";
		} else if (chairType.value == "Chair Margarita") {
			newP.innerText = "210";
		} else if (chairType.value == "Chair Selena") {
			newP.innerText = "220";
		} else {
			summaryChairType.innerText = "Twój fotel";
			newP.innerText = "";
		}
		newP2.innerText = chairColor.value;
		if (chairColor.value == "czerwony") {
			newP3.innerText = "30";
		} else if (chairColor.value == "czarny") {
			newP3.innerText = "50";
		} else if (chairColor.value == "pomarańczowy") {
			newP3.innerText = "80";
		} else {
			newP2.innerText = "";
			newP3.innerText = "";
		}
		newP4.innerText = chairFabric.value;
		if (chairFabric.value == "tkanina") {
			newP5.innerText = "50";
		} else if (chairFabric.value == "skóra") {
			newP5.innerText = "150";
		} else {
			newP4.innerText = "";
			newP5.innerText = "";
		}
	}

	//funkcja licząca sumę zamówienia
	var sumCounter = function() {
		newSpanSum.innerText = 0 
		if (newP.innerText.length>0) {
			newSpanSum.innerText = parseInt(newSpanSum.innerText) + parseInt(newP.innerText)
		}
		if (newP3.innerText.length>0) {
			newSpanSum.innerText = parseInt(newSpanSum.innerText) + parseInt(newP3.innerText)
		}
		if (newP5.innerText.length>0) {
			newSpanSum.innerText = parseInt(newSpanSum.innerText) + parseInt(newP5.innerText)
		}
		if (newP7.innerText.length>0) {
			newSpanSum.innerText = parseInt(newSpanSum.innerText) + parseInt(newP7.innerText)
		}
	}

	//dodanie funkcji do wszystkich inputów
	for (var i = 0; i < allClicks.length; i++) {
		allClicks[i].addEventListener("input", function(event){
			sumDisplay();
			sumCounter();
		})
		allClicks[i].addEventListener("click", function(event){
			this.value = "";
			sumDisplay();
			sumCounter();
		})
		allClicks[i].addEventListener("change", function(event){
			sumCounter();
		})
	}
	chairTransport.addEventListener("change", function(event){
		if (chairTransport.checked) {
			newP6.innerText = "transport";
			newP7.innerText = "80";
		} else {
			newP6.innerText = "";
			newP7.innerText = "";
		}
		sumCounter();
	})
})






