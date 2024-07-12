const imagesDiv = document.getElementById("images");
console.log(imagesDiv)
const resultdiv = document.getElementById('result')



let id = (Math.random() *6 +1)*10000
id = Math.floor(id)
const fakeimg = "https://thispersondoesnotexist.com/"
const realimg = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`
const rnd = Math.random()>0.5
const arr = [rnd,!rnd]

const again = document.createElement("button")
again.innerText ='play again'
again.onclick = function(){
    location.reload()
}



for ( const x of arr )
{
   const i1 = document.createElement("img")
   i1.src = (x ? realimg : fakeimg)
   imagesDiv.append(i1) 

   i1.onclick = function() {
   resultdiv.innerHTML = x ? 'Correct' : 'not corrct'
 imagesDiv.style.pointerEvents = 'none'
 resultdiv.append(again)
   }
}