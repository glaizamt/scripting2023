
console.log("working");



function write(){

var weat = document.querySelector('input[name="weather"]:checked').value;
	console.log(weat);

	if (weat=="sunny"){
		document.getElementById('BGimg').style.backgroundImage = "url(images/ss.jpg)"

	}

	else if (weat == "windy") {
		document.getElementById('BGimg').style.backgroundImage = "url(images/ws.jpg)"
	}

	else if (weat == "rainy") {
		document.getElementById('BGimg').style.backgroundImage = "url(images/rs.jpg)"
	}
	else if (weat == "magical") {
		document.getElementById('BGimg').style.backgroundImage = "url(images/ms.jpeg)"

	}

//Create another variable called 'ani' that hold the info from the animal field
//Console log that as well [You can just move the above log here and change the var]
var fel = document.getElementById('feeling').value;
console.log(fel);

var attire = document.getElementById('attire').value;
console.log(attire);

var street = document.getElementById('street').value;
console.log(street);

var verb = document.getElementById('object').value;
console.log(verb);

var adj =  document.getElementById('atmosphere').value;
console.log(adj);

var ani = document.getElementById('animal').value;
console.log(ani);

var pet = document.getElementById('pet').value;
console.log(pet);

var emote = document.getElementById('emotion').value;
console.log(emote);

var mysticI = document.getElementById('mystical').value;
console.log(mysticI);

var overE = document.getElementById('experience').value;
console.log(overE);



//OUTPUT
document.getElementById('output').innerHTML = '<div class="row"><div id="output" class="col-sm-12 mx-auto bg-secondary p-5 rounded text-white"> Once upon a time, on a ' + weat + ' day, I found myself feeling incredibly '
+ fel + '. I decided to embark on a spontaneous adventure wearing my most ' + attire + ' attire. With no particular destination in mind, I set off down the ' + street + ' street.' + '<br><br>' 
+ 'As I strolled, I stumbled upon a peculiar mysterious who was dancing. Intrigued by their eccentricity, I struck up a conversation. To my surprise, they handed me a mystical crystal and uttered, '
+ '“Traveler wield this with care, and magic shall follow you."' + '<br><br>' + 'Feeling a mix of excitement and curiosity, I decided to ' + verb + ' with the enchanted object. Suddenly, the world around me transformed into a whimsical  '
+ adj + ' kingdom, where talking ' + ani + ' and flying ' + pet + ' roamed freely.' + '<br><br>' + 'Over the course of the day, I found myself singing with these magical beings and exploring enchanting mystical landscapes. '
+ 'It was a surreal experience, like a dream that had come to life. ' + '<br><br>' + "As the sun began to set, I used the mystical bonding to return to reality. Reflecting on day's the event, I couldn't shake the feeling of "
+ emote + ' that lingered. It was, without a doubt, a day filled with enchantment, and I cherished every unforgettable moment.' + '<br><br>' + "In the end, I couldn't help but marvel at the " + mysticI 
+ ' of the unknown. That spontaneous adventure turned an ordinary day into an extraordinary tale, a memory etched in the book of my most ' + overE + ' experiences.' + '</h2>';


	

}
