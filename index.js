//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/
// const alertButtonEl = document.querySelector("#alertButton");
// const alertInputEl = document.querySelector("#alertInput");

// alertButtonEl.addEventListener("click", handlerClick);

// function handlerClick() {
//     console.log(alertInputEl.value)
// }

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const btnEl = document.querySelector("#swapButton");
// const leftSwapInputEl = document.querySelector("#leftSwapInput");
// const rightSwapInputEl = document.querySelector("#rightSwapInput");

// btnEl.addEventListener("click", onBntClick);

// function onBntClick() {
//     const leftInpValue = leftSwapInputEl.value;
//     const rightInpValue = rightSwapInputEl.value;

//     leftSwapInputEl.value = rightInpValue;
//     rightSwapInputEl.value = leftInpValue;
// }

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const passwordInputEl = document.querySelector('#passwordInput');
const passwordButtonEl = document.querySelector('#passwordButton');

passwordButtonEl.addEventListener('click', clickBtn);

function clickBtn() {
  if (passwordInputEl.getAttribute('type') === 'text') {
    passwordInputEl.setAttribute('type', 'password');
    passwordButtonEl.textContent = 'Розкрити';
  } else {
    passwordInputEl.setAttribute('type', 'text');
    passwordButtonEl.textContent = 'Приховати';
  }
}

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/
