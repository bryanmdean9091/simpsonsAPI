//Code alerts random Simpsons Quotes
function getChar() {
    window.location.reload()
 };
 arr = ["homer","bart","lisa","marge", "moe", "comic book guy", "principal", "milhouse", "ralph","mr", "dr", "rainier", "abe", "nelson", "chief", "troy", "apu", "otto"]
 character = arr[Math.floor(Math.random()*18)];
 // console.log(character)
 let url = `https://thesimpsonsquoteapi.glitch.me/quotes?character=${character}`;
 fetch(url)
 .then(response => {
     return response.json();
 })
 .then(data => {
     console.log (data);
     const img = document.createElement('img');
     img.src = data[0].image;
     pic.append(img);
     simpQuote.innerHTML =  `Name: ${data[0].character} <br>
     Quote: ${data[0].quote}`
    });