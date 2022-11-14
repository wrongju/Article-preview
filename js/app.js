let shareBlock = document.querySelector('.block-share');
let share = document.querySelector('.share-bc');
let share2 = document.querySelector('.share-bc2');


share.addEventListener('click', event => {
	if (share.classList.contains('selected')) {
		shareBlock.style.display = 'none';
		share.classList.remove('selected');
	} else {
		shareBlock.style.display = 'block';
		share.classList.add('selected');
	}
})

share2.addEventListener('click', event => {
	if (share2.classList.contains('selected')) {
		shareBlock.style.display = 'none';
		share2.classList.remove('selected');
	} else {
		shareBlock.style.display = 'block';
		share2.classList.add('selected');
	}
})

document.addEventListener('mouseup', event => {
	if (!shareBlock.contains(event.target)) {
		shareBlock.style.display = 'none';
		share2.classList.remove('selected');
		share.classList.remove('selected');
	}
})