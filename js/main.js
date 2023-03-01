const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

function countLetters() {
    const text = textarea.value; // #1
    const textlength = textarea.value.length; // #2
    if (textlength <= 15){
        count.innerText = `${textlength}`; // #3
    }else count.innerText = "Вы превысили аксимальную длину строки 15 символов"

}
/*
Находим в документе нужные нам элементы, которые будут непосредственно задействованы в подсчитывании символов. Найденные
 теги textarea и span с классом count, занесем в переменные textarea и count. Далее пишем действия в теле функции,
 внутри фигурных скобок.

#1 - вводимые пользователем символы записываются в переменную text.
#2 - браузер разбивает вводимые символы на соответствующий код и определяет их длину.
#3 - осуществляется вывод на HTML странице подсчитанного количества символов на текущих момент.
 */