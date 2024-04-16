// импортировали инфу из json в объект json
import book1 from '../JSONs/data1.json' assert { type: 'json'}
import book2 from '../JSONs/data2.json' assert { type: 'json'}
import book3 from '../JSONs/data3.json' assert { type: 'json'}
// вывели на консоль объект
console.log(book1);

  //объявляем массив  чтоб собрать книги в один 
var arr = []; // объявляем массив
arr.push(book1);
arr.push(book2);
arr.push(book3);
console.log(arr);


//ввод для поиска книги
const inputs = document.querySelector("#book-name");
// вывод информации
const info= document.querySelector("#info");
//кнопка для поиска книги по названию
const btn1 = document.querySelector("#send-message");
//кнопка сортировки по дате
const btn2 = document.querySelector("#send-message2");

var str; 
//создали объект либрари, в него поместили массив и создали методы, которые будут работать с этим массивом
const library = {
  book: arr,
  finds: function(){
    var books = arr.find(book => book.name.toLowerCase() == inputs.value.toLowerCase());
if (books) {
  var names = `Название:${books.name} Дата: ${books.date} Описание:${books.description}`;
  info.innerHTML += JSON.stringify(names);
} else {
  info.innerHTML ="Такой книги нет";
}

  },
  sorting:function(){ 
    library.book.sort((a, b) => Number(a.date) - Number(b.date));
    str = library.book.map(obj => `||Название: ${obj.name}||Дата: ${obj.date}`).join("<br>");
  return JSON.stringify(str);
 },

}


//слушатель 1 кнопки поиск
btn1.addEventListener('click',()=>{
  info.textContent =  "";
 library.finds();
 
});

//слушатель 2 кнопки
btn2.addEventListener('click',()=>{
  inputs.value = "";
  info.textContent =  "";
info.textContent += library.sorting();
});




