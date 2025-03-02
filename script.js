//your JS code here. If required.
const colorInput = document.getElementById("colour_id");
const blockInput = document.getElementById("block_id");
const form = document.getElementById("colorForm");
const resetButton=document.getElementById("Reset")

form.addEventListener("submit",(e)=>{
	e.preventDefault();
	const selectedColor=colorInput.value;
	const blockNumber=blockInput.value.trim();
	document.querySelectorAll(".grid-item").forEach(block =>{
        block.style.backgroundColor = "transparent";
    });

	if(blockNumber >=1 && blockNumber <=9){
		const block=document.getElementById(`${blockNumber}`);
		block.style.backgroundColor=selectedColor;
	}
})
resetButton.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach(block => {
        block.style.backgroundColor = "transparent";
    });
});


