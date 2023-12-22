const myValue = document.querySelector('.myValue')
const register = document.querySelector('.register')
const btn1 = document.querySelector('.downloadhex')
const answer = document.querySelector('.answer')
const popup = document.querySelector('.popup')
const show = document.querySelector('.show')
const send = document.querySelector('.send')
const download = document.querySelector('.download')
const btnsend = document.querySelector('.btnsend')
const closeModal = document.querySelector('.close-modal')
const showa = document.querySelector('.showa')
const showb = document.querySelector('.showb')
const showc = document.querySelector('.showc')
const showd = document.querySelector('.showd')
const btnswap = document.querySelector('.btnswap')
const sentfirst = document.querySelector('.sentfirst')
const sentsecond = document.querySelector('.sentsecond')

const regexp = /^[0-9a-fA-F]+$/
const text = document.createElement('p')


let rejAX = 0
let rejBX = 0
let rejCX = 0
let rejDX = 0
let rejwys = 0
let rejpob = 0
let rejwys1 = 0
let rejpob1 = 0
let mostek = 0

const checkOut = () => {
	if (myValue.value.match(regexp)) {
		save()
		text.textContent = ''
		answer.appendChild(text)
	} else {
		text.textContent = 'podałeś niepoprawną wartość'
		answer.appendChild(text)
	}
}

const save = () => {
	if (register.value == 'AX') {
		rejAX = myValue.value
		text.textContent = ''
		answer.appendChild(text)
		myValue.value = ''
	} else if (register.value == 'BX') {
		rejBX = myValue.value
		text.textContent = ''
		answer.appendChild(text)
		myValue.value = ''
	} else if (register.value == 'CX') {
		rejCX = myValue.value
		text.textContent = ''
		answer.appendChild(text)
		myValue.value = ''
	} else if (register.value == 'DX') {
		rejDX = myValue.value
		text.textContent = ''
		answer.appendChild(text)
		myValue.value = ''
	} else {
		answer.appendChild(text)
	}
	showvalue()
}

const check = () => {
	if (sentfirst.value == 'AX') {
		rejwys = rejAX
	} else if (sentfirst.value == 'BX') {
		rejwys = rejBX
	} else if (sentfirst.value == 'CX') {
		rejwys = rejCX
	} else if (sentfirst.value == 'DX') {
		rejwys = rejDX
	}
	mov()
}

const mov = () => {
	rejpob = rejwys
	check2()
}

const check2 = () => {
	if (sentsecond.value == 'AX') {
		rejAX = rejpob
	} else if (sentsecond.value == 'BX') {
		rejBX = rejpob
	} else if (sentsecond.value == 'CX') {
		rejCX = rejpob
	} else if (sentsecond.value == 'DX') {
		rejDX = rejpob
	}

	showvalue()
}

const poka = () => {
	console.log(rejAX)
	console.log(rejBX)
	console.log(rejCX)
	console.log(rejDX)
}

const showpopup = () => {
	popup.classList.toggle('active')
	showvalue()
}

const showvalue = () => {
	showa.textContent = rejAX
	showb.textContent = rejBX
	showc.textContent = rejCX
	showd.textContent = rejDX
}

//ZADANIE DRUGIE

const sent1 = () => {
	if (send.value == 'AX') {
		rejpob1 = rejAX
	} else if (send.value == 'BX') {
		rejpob1 = rejBX
	} else if (send.value == 'CX') {
		rejpob1 = rejCX
	} else if (send.value == 'DX') {
		rejpob1 = rejDX
	}

	sent2()
}

const xchg = () => {
	rejwys1 = rejpob1
	rejpob1 = mostek

	sent3()
}

const sent2 = () => {
	if (download.value == 'AX') {
		rejwys1 = rejAX
		mostek = rejwys1
	} else if (download.value == 'BX') {
		rejwys1 = rejBX
		mostek = rejwys1
	} else if (download.value == 'CX') {
		rejwys1 = rejCX
		mostek = rejwys1
	} else if (download.value == 'DX') {
		rejwys1 = rejDX
		mostek = rejwys1
	}
	xchg()
}

const sent3 = () => {
	if (send.value == 'AX') {
		rejAX = rejpob1
	} else if (send.value == 'BX') {
		rejBX = rejpob1
	} else if (send.value == 'CX') {
		rejCX = rejpob1
	} else if (send.value == 'DX') {
		rejDX = rejpob1
	}

	sent4()
}

const sent4 = () => {
	if (download.value == 'AX') {
		rejAX = rejwys1
	} else if (download.value == 'BX') {
		rejBX = rejwys1
	} else if (download.value == 'CX') {
		rejCX = rejwys1
	} else if (download.value == 'DX') {
		rejDX = rejwys1
	}
	showvalue()
}

btn1.addEventListener('click', checkOut)
btnsend.addEventListener('click', check)
btnswap.addEventListener('click', sent1)
show.addEventListener('click', showpopup)
closeModal.addEventListener('click', showpopup)
