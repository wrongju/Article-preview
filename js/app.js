let shareBlock = document.querySelector(".block-share")
let share = document.querySelector(".share-bc")
let share2 = document.querySelector(".share-bc2")

document.addEventListener("mouseup", (event) => {
	// console.log(event.target)
	if (event.target === share) {
		// console.log(event.target)
		if (share.classList.contains("selected")) {
			shareBlock.style.display = "none"
			share.classList.remove("selected")
		} else {
			shareBlock.style.display = "block"
			share.classList.add("selected")
		}
	} else {
		shareBlock.style.display = "none"
		share.classList.remove("selected")
	}

	if (event.target === share2) {
		console.log(event.target)
		if (share2.classList.contains("selected")) {
			shareBlock.style.display = "none"
			share2.classList.remove("selected")
		} else {
			shareBlock.style.display = "block"
			share2.classList.add("selected")
		}
	} else {
		// shareBlock.style.display = "none"
		share2.classList.remove("selected")
	}
})
