let btn = document.querySelector('button');
btn.addEventListener("click",() =>{
    let x = Math.floor(Math.random( ) * 255);
	let y = Math.floor(Math.random( ) * 255);
let z = Math.floor(Math.random( ) * 255);
let bgColor = "rgb(" + x + "," + y + "," + z + ")";
document.body.style.background = bgColor;
});
let removeText = document.querySelector('#RemoveText');
removeTextemoveText.onclick = function (){
    removeText.remove()
}