'use strict'
let main = document.getElementById('main');

// Тексты в field
let arrayOfTextsForField = [];
arrayOfTextsForField[0] = 'Игра сделана специально для летней практики СЕГРИС.<br> (Для продолжения нажимай на серое поле с текстом).';
arrayOfTextsForField[1] = 'Вы уже слышите звуки войск.';
arrayOfTextsForField[2] = 'Отступать некуда.';
arrayOfTextsForField[3] = 'Вы кричите, что есть силы...';
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
	//13.2 arrayOfTextsForField[113] = '~Овощи... Полезный завтрак. Охраннику, как ни как, нужно быть в форме.~';
arrayOfTextsForField[14] = '~Через час вы уже были на посту.~';
arrayOfTextsForField[15] = '~Вам предстояло бесцельно пялиться на непонятные коробки несколько часов, изредка отлучаясь поесть.~';
arrayOfTextsForField[16] = '~И так изо дня в день, из года в год...~';
arrayOfTextsForField[17] = '~Но сегодняшний день немного отличался от всех других.~';
arrayOfTextsForField[18] = '~Сегодня, примерно в 2 часа дня, погрузчик увёз пару ящиков, которые никто не двигал многие годы. За это время на них образовался многолетний слой пыли.~';
arrayOfTextsForField[19] = '~Под этими ящиками вы замечаете подозрительный люк.~';
//Выбор про люк
	arrayOfTextsForField[97] = '~Вы решаете ничего не менять в вашей и так скучной жизни. Возможно вы просто уважаете свою работу, но в это вериться с трудом.~';
	arrayOfTextsForField[98] = '~Тем не менее, ваш рабочий день подошёл к концу, и вы вернулись домой. Вы засыпаете с чувством выполненного долга, но не перестаёте думать о том люке.~';
	//Конец игры
arrayOfTextsForField[20] = '~Любопытство берёт верх, и вы спускаетесь в люк.~';
arrayOfTextsForField[21] = '~Вы спускаетесь буквально на несколько метров вниз.~';
arrayOfTextsForField[22] = '~Вдруг слышится звук закрытия люка, и наступает темнота.~';
// Темнота
arrayOfTextsForField[23] = '~Вы поднимаетесь и пытаетесь открыть люк.~';
arrayOfTextsForField[24] = '~Чёрт. Кажется кто-то поставил на него ящики.~';
arrayOfTextsForField[25] = '~Вам уже становится плохо, сердце начинает биться быстрее.~';
arrayOfTextsForField[26] = '~Вы ещё 5 минут стучали по люку, но всё зря. Помощи не последовало...~';
arrayOfTextsForField[27] = '~Вам ничего не остается, кроме того, как продолжить спускаться по лестнице.~';
arrayOfTextsForField[28] = '~Вы спускаетесь очень долго. Кажется, что эта бесконечная лестница ведёт прямо к ядру Земли.~';
arrayOfTextsForField[29] = '~Наконец, вы добираетесь до земли.~';
arrayOfTextsForField[30] = '~Повернувшись вы чуть не ослепли от увиденного.~';
arrayOfTextsForField[31] = '~Вы оказываетесь в переливающейся разными цветами пещере.~';
arrayOfTextsForField[32] = '~Подобные вы могли увидеть только в играх.~';
arrayOfTextsForField[33] = '~Вас переполняют эмоции. С одной стороны, вы оказались в сказочной пещере. С другой стороны, вы попали непонятно куда.~';
arrayOfTextsForField[34] = '~Придётся искать другой выход.~';
arrayOfTextsForField[35] = '~Вам придётся проявить все навыки выживания, полученные из просмотренных вами фильмов.~';
arrayOfTextsForField[36] = '~Вы готовы начинать ваши похождения по таинственным пещерам.~';
arrayOfTextsForField[37] = '~Вот и первое испытание: в какую сторону вам пойти?~';
// Выбор про направление
//Лево
	arrayOfTextsForField[38] = '~Голые булыжники сменяются зарослями, а блестящий синий цвет плавно переходит в зелёный.~';
	arrayOfTextsForField[39] = '~Вы продолжаете идти на свет.~';
	arrayOfTextsForField[40] = '~Вы приходите к сундуку, который наполнен кучей золотых монет.~';
	arrayOfTextsForField[41] = '~Рядом с ним лежит золотой шлем, ещё парочка закрытых сундуков, щит и книга с непонятными закорючками.~';
	arrayOfTextsForField[42] = '~Но больше всего ваше внимание привлек огромный меч, торчащий из кучи золотых монет.~';
	//Взять меч
	arrayOfTextsForField[43] = '~Хоть вы и не умеете обращаться с оружием, вы уверены, что меч вам поможет в ваших похождениях.~';
	arrayOfTextsForField[44] = '~Здесь больше ничего, что бы вам помогло, ибо шлем на вас не налазит, у щита нет ручки, а книга просто не привлекла вашего внимания.~';
	arrayOfTextsForField[45] = '~Однако вы набиваете карманы монетами и уверены, что на свободе вы разбогатеете.~';
	arrayOfTextsForField[46] = '~(Если конечно выберитесь...)~';
	arrayOfTextsForField[47] = '~Вы разворачиваетесь и возвращаетесь к развилке.~';
	arrayOfTextsForField[48] = '~Теперь вы решаете пойти направо.~';
	arrayOfTextsForField[49] = '~Вау! Это же дракон!~';
	arrayOfTextsForField[50] = '~Настоящий дракон!~';
	arrayOfTextsForField[51] = '~И похоже, что он вас заметил...~';
	//Что же делать?
	arrayOfTextsForField[52] = '~Что же делать?~';
	//Меч
		arrayOfTextsForField[53] = '~Точно! у вас же есть меч.~';
		arrayOfTextsForField[54] = '~Вы вспоминаете утренний сон. ~';
		arrayOfTextsForField[55] = '~Вы с разбега наносите точный удар в грудь дракона.~';
		arrayOfTextsForField[56] = '~И он... Пропадает.~';
		//Мэйби фон поменять надо
		arrayOfTextsForField[57] = '~Непонятно, что страннее, то что вы победили, или тот факт, что дракон испарился после первого удара.~';
		arrayOfTextsForField[58] = '~Тем не менее, вы - победитель.~';
		arrayOfTextsForField[59] = '~Вы продолжаете искать выход и идёте дальше.~';
		// смена фона на after-dragon
		arrayOfTextsForField[60] = '~Вы приходите к лестнице, ведущей ещё глубже.~';
		arrayOfTextsForField[61] = '~Вам кажется, что вы уже близко к финалу.~';
		arrayOfTextsForField[62] = '~Вы спускаетесь по лестнице и...~';
		arrayOfTextsForField[63] = '~Что?~';
		arrayOfTextsForField[64] = '~Компьютер посреди пещеры?~';
		arrayOfTextsForField[65] = '~Это как минимум странно.~';
		arrayOfTextsForField[66] = '~Вас даже не поразил тот факт, что над этим компьютером за вами наблюдает ещё один дракон.~';
		arrayOfTextsForField[67] = '~Похоже он чего-то ждёт... Но чего?~';
		//Подойти к компьютеру
		arrayOfTextsForField[68] = '~Вы медленно подходите к компьютеру и садитесь за него.~';
		arrayOfTextsForField[69] = '~И на его мониторе...~';
		arrayOfTextsForField[70] = '~Схема камер наблюдения?~';
		//Крутые еффекты усиливающиеся с каждым клацанием
		arrayOfTextsForField[71] = '~А как же~';
		arrayOfTextsForField[72] = '~дра~';
		arrayOfTextsForField[73] = '~ко~';
		arrayOfTextsForField[74] = '~ны~';
		arrayOfTextsForField[75] = '~...~';
		//Возращение на склад
		arrayOfTextsForField[76] = '~Эй, хватит спать на рабочем месте.~';
		arrayOfTextsForField[77] = '~Можешь идти на обед.~';
		arrayOfTextsForField[78] = '~Так это был сон...~';
		arrayOfTextsForField[79] = '~А как же люк?~';
		arrayOfTextsForField[80] = '~Вы посмотрели на то место, где был люк.~';
		arrayOfTextsForField[81] = '~Там по-прежнему стояли пыльные коробки.~';
		arrayOfTextsForField[82] = '~Вы в недоумении просидели ещё несколько минут.~';
		//Затменение экрана
		arrayOfTextsForField[83] = '~Всего лишь сон...~';
		arrayOfTextsForField[84] = '~...~';
		arrayOfTextsForField[85] = '~Вдруг вы нащупываете монету в кармане.~';
		arrayOfTextsForField[86] = '~Ту самую золотую монету из сундука.~';
		arrayOfTextsForField[87] = '~Так значит...~';
		//DONE BY DENSI
		arrayOfTextsForField[88] = 'ЗЕ ЕНД';
		arrayOfTextsForField[89] = 'Спасибо, что потратили ваше драгоценное время на эту "игру".';
		arrayOfTextsForField[90] = 'Надеюсь вам она понравилась.';
		arrayOfTextsForField[91] = 'Игра была сделана специально для летней практики СЕГРИС пользователем интернета Densi.';
		arrayOfTextsForField[92] = 'Дальше можешь не клацать.';
		arrayOfTextsForField[93] = 'Я серьёзно.';
		arrayOfTextsForField[94] = 'Перестань!';
		arrayOfTextsForField[95] = 'А ты хорош...';
		arrayOfTextsForField[96] = 'Лови сердечки <br> ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ <br> ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ ';
	//Закидать монетами
		arrayOfTextsForField[113] = '~...~';
		arrayOfTextsForField[114] = '~Зачем? Хмм... В смысле, мудрое решение!~';
		arrayOfTextsForField[115] = '~Возможно, вы хотите подкупить его.~';
		arrayOfTextsForField[116] = '~Вы достаете несколько золотых монет из карманов и кидаете их в дракона.~';
		arrayOfTextsForField[117] = '~Они с громким звухом падают на землю, и эхо распространяется на всю пещеру.~';
		arrayOfTextsForField[118] = '~*Рык дракона*~';
		arrayOfTextsForField[119] = '~Похоже, вы только разозлили его.~';
		arrayOfTextsForField[120] = '~Теперь он идёт на вас, и с каждым его шагом вся пещера трясется.~';

//Право
	// arrayOfTextsForField[99] = '~Правильно, плохие парни всегда ходят направо.~';
	//Руки
	arrayOfTextsForField[99] = '~Действительно, вы же в силах одолеть дракона голыми руками.~';
	arrayOfTextsForField[100] = '~Вы закатали рукава и смело пошли, глядя на своего соперника.~';
	arrayOfTextsForField[101] = '~С каждым шагом ваша уверенность в себе всё ослабевала.~';
	arrayOfTextsForField[102] = '~Дракон начинает рычать.~';
	arrayOfTextsForField[103] = '~Вас это нехило испугало, но вы не подали виду.~';
	arrayOfTextsForField[104] = '~Вы подошли к дракону в упор.~';
	arrayOfTextsForField[105] = '~Вы обхватили хвост дракона и при этом получили шрам об его шипы.~';
	arrayOfTextsForField[106] = '~И ловким движеением отправили его в полёт.~';
	arrayOfTextsForField[107] = '~Дракон ударяется об стену и исчезает.~';
	// i = 57
	//Бежать
	arrayOfTextsForField[108] = '~Вы понимаете, что дракон вам не по зубам.~';
	arrayOfTextsForField[109] = '~Вы только хотите с криками убежать отсюда подальше, как чуть не врезаетесь в стену пещеры.~';
	arrayOfTextsForField[110] = '~Выход из пещеры таинственным образом куда-то пропал.~';
	arrayOfTextsForField[111] = '~Значит схватка с драконом не избежна.~';
	arrayOfTextsForField[112] = '~Что дальше?~';
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
let swordAndCoinsCheck = false;
let runCheck = false;
let leftCheck = false;
let useCoinsCheck = false;

let textForBegin = document.createElement('p');	
textForBegin.innerHTML = 'Начать!';
begin.appendChild(textForBegin);

//Звуки

let battleSound = new Audio();
battleSound.src = '../Audio/battle.mp3';
battleSound.volume = 0.25;
battleSound.loop = true;

let alarmClockSound = new Audio();
alarmClockSound.src = '../Audio/alarm clock.mp3';
alarmClockSound.volume = 0.15;
alarmClockSound.loop = true;

let turnOffAlarmClockSound = new Audio();
turnOffAlarmClockSound.src = '../Audio/turn off alarm clock.mp3';
turnOffAlarmClockSound.volume = 0.5;

let backgroundSound = new Audio();
backgroundSound.src = '../Audio/background music.mp3';
backgroundSound.volume = 0.3;
backgroundSound.loop = true;

let swordSound = new Audio();
swordSound.src = '../Audio/sword sound.mp3';
swordSound.volume = 0.35;

let dragonSound = new Audio();
dragonSound.src = '../Audio/dragon roar.mp3';
dragonSound.volume = 0.45;

let lukeSound = new Audio();
lukeSound.src = '../Audio/luke sound.mp3';
lukeSound.volume = 0.1;
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

let left = document.createElement('div');
left.classList.add('Begin');

let textForLeft = document.createElement('p');
textForLeft.innerHTML = 'Налево';

let right = document.createElement('div');
right.classList.add('Begin');

let textForRight = document.createElement('p');
textForRight.innerHTML = 'Направо';

let actionTakeSword = document.createElement('div');
actionTakeSword.classList.add('Begin');

let textForActionTakeSword = document.createElement('p');	
textForActionTakeSword.innerHTML = 'Взять меч';

let useSword = document.createElement('div');
useSword.classList.add('Begin');

let textForUseSword= document.createElement('p');
textForUseSword.innerHTML = 'Напасть с мечом';

let useCoins = document.createElement('div');
useCoins.classList.add('Begin');

let textForUseCoins = document.createElement('p');
textForUseCoins.innerHTML = 'Закидать монетами';

let run = document.createElement('div');
run.classList.add('Begin');

let textForRun = document.createElement('p');
textForRun.innerHTML = 'Попытаться убежать';

let useHands = document.createElement('div');
useHands.classList.add('Begin');

let textForUseHands = document.createElement('p');
textForUseHands.innerHTML = 'Пойти в рукопашку';
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

function ChoiseOfDirection() {
	main.insertBefore(left, field);
	left.appendChild(textForLeft);
	main.insertBefore(right, field);
	right.appendChild(textForRight);
	blockCheck = true;
}

function TakeSword() {
	main.insertBefore(actionTakeSword, field);
	actionTakeSword.appendChild(textForActionTakeSword);
	blockCheck = true;
	swordAndCoinsCheck = true;
}

function MainChoise() {
	main.insertBefore(run, field);
	run.appendChild(textForRun);
	blockCheck = true;
	if (swordAndCoinsCheck == true) {
		main.insertBefore(useSword, field);
		useSword.appendChild(textForUseSword);
		main.insertBefore(useCoins, field);
		useCoins.appendChild(textForUseCoins);
	} else {
		main.insertBefore(useHands, field);
		useHands.appendChild(textForUseHands);
	}
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
	turnOffAlarmClockSound.addEventListener('ended', function() {
	    if (turnOffAlarmClockSound.duration === turnOffAlarmClockSound.currentTime) {
	    	backgroundSound.play();
	    }
 	});
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
	textForField.innerHTML = '~Овощи... Полезный завтрак. Охраннику, как ни как, нужно быть в форме.~';
	i++;
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
	textForField.innerHTML = arrayOfTextsForField[97];
	i = 97;
});

left.addEventListener('click', function() {
	leftCheck = true;
	main.removeChild(left);
	main.removeChild(right);
	blockCheck = false;
	main.style.backgroundImage = "url('../Design/before-treasure-background.jpg')";
	textForField.innerHTML = arrayOfTextsForField[i+1];
	i++;
});

right.addEventListener('click', function() {
	main.removeChild(left);
	main.removeChild(right);
	blockCheck = false;
	textForField.innerHTML = 'Правильно, плохие парни всегда ходят направо.';
	i = 48;
});

actionTakeSword.addEventListener('click', function () {
	swordSound.play();
	main.removeChild(actionTakeSword);
	blockCheck = false;
	textForField.innerHTML = arrayOfTextsForField[i+1];
	i++;
});

useSword.addEventListener('click', function() {
	if (runCheck == true) {
		main.removeChild(useSword);
		if (useCoinsCheck == false) {
			main.removeChild(useCoins);
		}
	} else {
		if (useCoinsCheck == false) {
			main.removeChild(useCoins);
		}
		main.removeChild(useSword);
		main.removeChild(run);
	}
	blockCheck = false;
	textForField.innerHTML = arrayOfTextsForField[53];
	i = 53;
});

useCoins.addEventListener('click', function() {
	useCoinsCheck = true;
	if (runCheck == true) {
		main.removeChild(useCoins);
		main.removeChild(useSword);
	} else {
		main.removeChild(useCoins);
		main.removeChild(useSword);
		main.removeChild(run);
	}
	blockCheck = false;
	textForField.innerHTML = arrayOfTextsForField[113];
	i = 113;
});
useHands.addEventListener('click', function () {
	main.removeChild(useHands);
	if (runCheck == false) {
		main.removeChild(run);
	}
	blockCheck = false;
	textForField.innerHTML = arrayOfTextsForField[99];
	i = 99;
});

run.addEventListener('click', function() {
	runCheck = true;
	if (leftCheck == true) {
		main.removeChild(run);
		main.removeChild(useSword);
		if (useCoinsCheck == false) {
			main.removeChild(useCoins);
		}
	} else {
		main.removeChild(run);
		main.removeChild(useHands);
	}
	blockCheck = false;
	textForField.innerHTML = arrayOfTextsForField[108];
	i = 108;
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
		case 18 :
			ChoiseOfLuke();
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 20 :
			main.style.backgroundImage = "url('../Design/stairs-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 22 :
			lukeSound.play();
			main.style.backgroundImage = "url('../Design/black-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 29 :
			main.style.backgroundImage = "url('../Design/cave-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 36 :
			ChoiseOfDirection();
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 39 :
			main.style.backgroundImage = "url('../Design/treasure-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 41 :
			TakeSword();
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 47 :
			main.style.backgroundImage = "url('../Design/cave-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 48 :
			main.style.backgroundImage = "url('../Design/dragon-cave-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 51 :
			dragonSound.play();
			MainChoise();
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 55 :
			main.style.backgroundImage = "url('../Design/after-dragon-background.jpeg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 62 :
			main.style.backgroundImage = "url('../Design/final-battle-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 70 :
			main.style.backgroundImage = "url('../Design/final-battle-lvl1-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 71 :
			main.style.backgroundImage = "url('../Design/final-battle-lvl2-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 72 :
			main.style.backgroundImage = "url('../Design/final-battle-lvl3-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 73 :
			main.style.backgroundImage = "url('../Design/final-battle-lvl4-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 74 :
			main.style.backgroundImage = "url('../Design/final-battle-lvl5-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 75 :
			main.style.backgroundImage = "url('../Design/storage-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 84 :
			if (leftCheck == false) {
				arrayOfTextsForField[85] = '~Вдруг вы чувствуете дикую боль на руке.~';
				arrayOfTextsForField[86] = '~На ней шрам.~';
			}
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 87 :
			main.style.backgroundImage = "url('../Design/secret-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 96 :
			break;
		//Конец
		case 97 :
			main.style.backgroundImage = "url('../Design/room-background.png')";
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 98 :
			main.style.backgroundImage = "url('../Design/secret-background.jpg')";
			textForField.innerHTML = arrayOfTextsForField[88];
			i = 88;
			break;
		case 107 :
			main.style.backgroundImage = "url('../Design/after-dragon-background.jpeg')";
			textForField.innerHTML = arrayOfTextsForField[57];
			i = 57;
			break;
		case 111 :	
			if (leftCheck == true) {
				main.insertBefore(useSword, field);
				useSword.appendChild(textForUseSword);
				if (useCoinsCheck == false) {
					main.insertBefore(useCoins, field);
					useCoins.appendChild(textForUseCoins);
				}
			} else {
				main.insertBefore(useHands, field);
				useHands.appendChild(textForUseHands);
			}
			blockCheck = true;
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i = 99;
			break;
		case 117 :
			dragonSound.play();
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		case 120 :
			if (runCheck == true) {
				main.insertBefore(useSword, field);
				useSword.appendChild(textForUseSword);
			} else {
				main.insertBefore(useSword, field);
				useSword.appendChild(textForUseSword);
				main.insertBefore(run, field);
				run.appendChild(textForRun);
			}
			blockCheck = true;
			textForField.innerHTML = '~Что дальше?~';
			break;
		default :
			textForField.innerHTML = arrayOfTextsForField[i+1];
			i++;
			break;
		}
	}
});
