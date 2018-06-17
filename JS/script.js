let main = document.getElementById('main');

//эйби сделай отдельные массивы для ветвей сюжета. Синк эбаут ит мээээн
// Тексты в field
let arrayOfTextsForField = [];
arrayOfTextsForField[0] = 'Игра сделана специально для летней практики СЕГРИС.';
arrayOfTextsForField[1] = 'Вы уже слышите звуки приближающихся войск.';
arrayOfTextsForField[2] = 'Отступать некуда.';
arrayOfTextsForField[3] = 'Вы кричите, что есть мочи...';
arrayOfTextsForField[4] = '"В АТАКУ!"';
arrayOfTextsForField[5] = 'Вы не просто главнокомандующий войсками.';
arrayOfTextsForField[6] = 'Вы - герой.';
arrayOfTextsForField[7] = 'Вы - ...';
//Просыпается
arrayOfTextsForField[8] = '*Звук будильника*';
//Выбор про будильник
arrayOfTextsForField[9] = '~Классный сон, не правда ли?~';
arrayOfTextsForField[10] = '~Жалко, что вы не командир войск.~';
arrayOfTextsForField[11] = '~Вы - всего лишь охранник склада, который должен быть на работе через час. Так что, было бы неплохо позавтракать.~';
//Выбор про кухню
arrayOfTextsForField[12] = '~Выбор еды конечно небольшой... Но всё же?~';
//Выбор что поесть
arrayOfTextsForField[13] = '~Пиво и сосиськи... Прекрасный выбор! Правда, вам бы не помешало похудеть, ибо ваша форма на вас еле налазит.~';
	arrayOfTextsForField[113] = '~Овощи... Полезный завтрак. Охраннику, как ни как, нужно быть в форме.~';
arrayOfTextsForField[14] = '~Через час вы уже были на посту.~';
arrayOfTextsForField[15] = '~Вам предстояло бесцельно пялиться на непонятные коробки несколько часов, изредка отлучаясь поесть.~';
arrayOfTextsForField[16] = '~И так изо дня в день, из года в год...~';
arrayOfTextsForField[17] = '~Но сегодняшний день немного отличался от всех других.~';
arrayOfTextsForField[18] = '~Сегодня, примерно в 2 часа дня, погрузчик увёз пару ящиков, которые никто не двигал многие годы. За это время на них образовался многолетний слой пыли.~';
arrayOfTextsForField[19] = '~Под этими ящиками вы замечаете подозрительный люк.~';
//Выбор про люк
	arrayOfTextsForField[119] = '~Вы решаете ничего не менять в вашей и так скучной жизни. Возможно вы просто уважаете свою работу, но в это вериться с трудом.~';
	arrayOfTextsForField[120] = '~Тем не менее, ваш рабочий день подошёл к концу, и вы вернулись домой. Вы засыпаете с чувством выполненного долга, но не перестаёте думать о том люке.~';
	//Конец дня если не выбрал люк
arrayOfTextsForField[20] = '~Любопытство берёт верх, и вы спускаетесь в люк.~';
arrayOfTextsForField[21] = '~Вы оказываетесь в канализации. Чувствуется неприятный запах.~';

// Тексты в field


let field = document.createElement('div');
main.appendChild(field);
field.classList.add('Field');

let textForField = document.createElement('p');
textForField.innerHTML = arrayOfTextsForField[0];
let i = 0;
textForField.style.marginTop = '15px';
field.appendChild(textForField);

let begin = document.createElement('div');
main.insertBefore(begin, field);
begin.classList.add('Begin');

let blockCheck = true;

let textForBegin = document.createElement('p');	
textForBegin.innerHTML = 'Пгнали!';
begin.appendChild(textForBegin);

//Звуки

let alarmClockSound = new Audio();
alarmClockSound.src = '../Audio/alarm clock.mp3';
alarmClockSound.volume = 0.15;

let turnOffAlarmClockSound = new Audio();
turnOffAlarmClockSound.src = '../Audio/turn off alarm clock.mp3';
turnOffAlarmClockSound.volume = 0.5;

let battleSound = new Audio();
battleSound.src = '../Audio/battle.mp3';
battleSound.volume = 0.25;

//Звуки

//Переменные блоков


let actionTurnOffAlarmClock = document.createElement('div');
actionTurnOffAlarmClock.classList.add('Begin');

let textForActionTurnOffAlarmClock = document.createElement('p');	
textForActionTurnOffAlarmClock.innerHTML = 'Выключить будильник';

let food_1 = document.createElement('div');
food_1.classList.add('Begin');

let textForFood_1 = document.createElement('p');
textForFood_1.innerHTML = 'Пиво и сосиськи';

let food_2 = document.createElement('div');
food_2.classList.add('Begin');

let textForFood_2 = document.createElement('p');
textForFood_2.innerHTML = 'Овощи';

let luke_1 = document.createElement('div');
luke_1.classList.add('Begin');

let textForLuke_1 = document.createElement('p');
textForLuke_1.innerHTML = 'Спуститься в люк';

let luke_2 = document.createElement('div');
luke_2.classList.add('Begin');

let textForLuke_2 = document.createElement('p');
textForLuke_2.innerHTML = 'Остаться на посту';

//Переменные блоков

HTMLAudioElement.prototype.stop = function()
{
this.pause();
this.currentTime = 0.0;
}

function WakeUp() {
	battleSound.stop();
	alarmClockSound.play();
	main.insertBefore(actionTurnOffAlarmClock, field);
	actionTurnOffAlarmClock.appendChild(textForActionTurnOffAlarmClock);
	blockCheck = true;
}

function ChoiseOfFood() {
	main.insertBefore(food_1, field);
	food_1.appendChild(textForFood_1);
	main.insertBefore(food_2, field);
	food_2.appendChild(textForFood_2);
	blockCheck = true;
}

function ChoiseOfLuke() {
	main.insertBefore(luke_1, field);
	luke_1.appendChild(textForLuke_1);
	main.insertBefore(luke_2, field);
	luke_2.appendChild(textForLuke_2);
	blockCheck = true;
}

begin.addEventListener('click', function() {
	battleSound.play();
	main.removeChild(begin);
	blockCheck = false;
	main.style.backgroundImage = "url('../Design/castle-background.jpg')";
	textForField.innerHTML = arrayOfTextsForField[1];
	i++;
});

actionTurnOffAlarmClock.addEventListener('click', function () {
	alarmClockSound.stop();
	turnOffAlarmClockSound.play();
	main.removeChild(actionTurnOffAlarmClock);
	blockCheck = false;
	textForField.innerHTML = arrayOfTextsForField[i+1];
	i++;
});

food_1.addEventListener('click', function () {
	main.removeChild(food_1);
	main.removeChild(food_2);
	blockCheck = false;
	textForField.innerHTML = arrayOfTextsForField[i+1];
	i++;
});

food_2.addEventListener('click', function () {
	main.removeChild(food_1);
	main.removeChild(food_2);
	blockCheck = false;
	textForField.innerHTML = arrayOfTextsForField[113];
	i = 13.2;
});

luke_1.addEventListener('click', function() {
	main.removeChild(luke_1);
	main.removeChild(luke_2);
	blockCheck = false;
	textForField.innerHTML = arrayOfTextsForField[i+1];
	i++;
});

luke_2.addEventListener('click', function() {
	main.removeChild(luke_1);
	main.removeChild(luke_2);
	blockCheck = false;
	textForField.innerHTML = arrayOfTextsForField[119];
	i = 119;
});


field.addEventListener('click', function() {
	if (blockCheck == false) {
		console.log(i);
		switch(i) {
		case 7 : 
			main.style.backgroundImage = "url('../Design/room-background.png')";
			WakeUp();
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 11 :
			main.style.backgroundImage = "url('../Design/kitchen-background.png')";
			ChoiseOfFood();
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 13 :
			main.style.backgroundImage = "url('../Design/storage-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 13.2 :
			main.style.backgroundImage = "url('../Design/storage-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[14];
			i = 14
			break;
		case 18 :
			ChoiseOfLuke();
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 20 :
			main.style.backgroundImage = "url('../Design/underground-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 119 :
			main.style.backgroundImage = "url('../Design/room-background.png')";
		default :
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		}
	}
});