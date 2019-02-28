/* Практикум
Реализуем игру в консоли. Алгоритм будет таким:
Браузер приглашает пользователя к игре.
Выводится текущее состояние.
Выводится предложение о ходе.
Пользователь вводит действие. 
В зависимости от действия генерируется следующий шаг. */

var works = {
    0: {
        text: 'Вы живёте в тихой и уютной деревеньке на окрайне страны.\n' +
        'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
        'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
        answer: {
            1: '1 - Поспать до обеда\n',
            2: '2 - Пойти прогуляться\n'
        },
        jump: {
            1: 1,
            2: 2
        }
    },
    1: {
        text: 'Вы решили поспать до обеда.\n' +
        'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
        'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
        answer: {
            1: '1 - Пойти прогуляться\n',
            2: '2 - Пойти пообедать\n'
        },
        jump: {
            1: 3,
            2: 4
        }
    },
    2: {
        text: 'Вы решили пойти прогуляться.\n' +
        'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
        'Вы решаете дойти до озера, полюбоваться его красотой.\n' +
        'С одной стороны тропинки Вы видите пшеничное поле, за которым виднеется лес.\n' +
        'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
        'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
        'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
        answer: {
            1: '1 - Подождать обед в столовой\n',
            2: '2 - Поколоть дров перед обедом\n'
        },
        jump: {
            1: 5,
            2: 6
        }
    },
    3: {
        text: 'Вы решили пойти прогуляться.\n' +
        'Вы выходите из своего дома и видите вдалеке голубое озеро.\n' +
        'Сегодня выдался прекрасный солнечний денёк, слегка прохлатный ветерок помогает Вам проснуться.\n' +
        'Вы осматриваетесь по сторонам и видите перед поленницей много берёзовых пеньков.\n' +
        'До обеда ещё есть время и Вы решаете ...\n',
        answer: {
            1: '1 - Подождать обед в столовой\n',
            2: '2 - Поколоть дров перед обедом\n'
        },
        jump: {
            1: 5,
            2: 6
        }
    },
    4: {
        text: 'Вы решили пойти пообедать.\n' +
        'Вы заходите в столовую и ощущаете прекрасные ароматы, от которых Вы сразу просыпаетесь.\n' +
        'Вам предлагают помочь накрыть стол к обеду.\n' +
        'Также Вы вспоминаете, что на дворе полно берёзовых пеньков, да и погодка сегодня отличная.\n' +
        'Немного подумав, Вы решаете ...\n',
        answer: {
            1: '1 - Помочь накрыть на стол\n',
            2: '2 - Поколоть дров перед обедом\n'
        },
        jump: {
            1: 7,
            2: 6
        }
    },
    5: {
        text: 'Вы решили подождать обед в столовой.\n' +
        'Вы заходите в столовую и ощущаете прекрасные ароматы, обед уже почти готов.\n' +
        'Вы предлагаете помочь накрыть стол к обеду, чтобы обед поскорее уже настал.\n' +
        'С Вашей помощью получилось очень быстро накрыть на стол.\n' +
        'Обед получился просто шикарный, было большое количество очень вкусных блюд.\n' +
        'Было всё так аппетитно, что Вы попробовали всё.\n' +
        'После вкусного и сытного обеда Вы думаете ...\n',
        answer: {
            1: '1 - Пойти прогуляться\n',
            2: '2 - Отдохнуть дома\n'
        },
        jump: {
            1: 8,
            2: 9
        }
    },
    6: {
        text: 'Вы решили поколоть дров перед обедом.\n' +
        'Вы берёте из кладовой колун и идёте к поленнице.\n' +
        'Когда Вы подходите к поленнице и видите эти горы берёзовых пеньков, то понимаете, что здесь всё за один день не переколоть.\n' +
        'Вы берёте сначала пенёчек поменьше, чтобы разогреться.\n' +
        'Пенёк раскалывается напополам с первого же удара, Вы берёте следующий и продолжаете.\n' +
        'Через некоторое время Вы слышите из дома голос: "Обед готов, идите кушать!".\n' +
        'Вы быстренько докалываете пенёк и понимаете, что раскололи с десяток пеньков и очень проголодались.\n' +
        'Вы идёте умыться и вымыть руки, после направляетесь в столовую, откуда доносятся манящие ароматы.\n' +
        'Вы заходите в столовую и видите шикарный обед, большое количество блюд ещё больше возбуждает Ваш аппетит.\n' +
        'Было всё так аппетитно, что Вы попробовали всё.\n' +
        'После вкусного и сытного обеда Вы думаете ...\n',
        answer: {
            1: '1 - Пойти прогуляться\n',
            2: '2 - Отдохнуть дома\n'
        },
        jump: {
            1: 8,
            2: 9
        }
    },
    7: {
        text: 'Вы решили помочь накрыть на стол.\n' +
        'Вы помогаете быстрее приготовить все блюда и, по мере готовности, относите их на стол.\n' +
        'Пока Вы готовили и носили блюда, у Вас разыгрался очень сильный аппетит.\n' +
        'С Вашей помощью получилось очень быстро накрыть на стол.\n' +
        'Обед получился просто шикарный, было большое количество очень вкусных блюд.\n' +
        'Было всё так аппетитно, что Вы попробовали всё.\n' +
        'После вкусного и сытного обеда Вы думаете ...\n',
        answer: {
            1: '1 - Пойти прогуляться\n',
            2: '2 - Отдохнуть дома\n'
        },
        jump: {
            1: 8,
            2: 9
        }
    },
    8: {
        text: 'Вы решили пойти прогуляться.\n' +
        'Вы выходите из дома и сразу на глаза попадается озеро и Вы решаете прогуляться к нему.\n' +
        'По дороге к озеру Вы встечаете знакомого рыбака, который тоже идёт к озеру.\n' +
        'Рыбак рассказывает Вам, что сейчас лучшее время, чтобы отдохнуть под деревом у озера.\n' +
        'Послушав совет рыбака Вы идёте к этому самому дереву.\n' +
        'Это огромная ветла, тень от которой падает на зелёный склон перед озером.\n' +
        'С озера веет прохладный ветерок и Вы не замечаете как засыпаете.\n' +
        'Просыпаетесь Вы уже только под вечер.\n' +
        'Вы очень хорошо отдохнули и решаете ...\n',
        answer: {
            1: '1 - Пойти домой\n',
            2: '2 - Посидеть ещё немножко\n'
        },
        jump: {
            1: 10,
            2: 11
        }
    },
    9: {
        text: 'Вы решили отдохнуть дома.\n' +
        'Вы идёте в комнату в восточной части дома.\n' +
        'В этой комнате Вы ощущаете прохладный ветерок и знаете, что вечером в ней будет ещё лучше.\n' +
        'Вы решаете прилечь и засыпаете.\n' +
        'Просыпаетесь Вы уже только вечером.\n' +
        'Вы хорошо отдохнули и решаете ...\n',
        answer: {
            1: '1 - Выйти во двор\n',
            2: '2 - Отдохнуть ещё немножко\n'
        },
        jump: {
            1: 12,
            2: 13
        }
    },
    10: {
        text: 'Вы решили пойти домой.\n' +
        'Вы приходите домой и начинаете помогать по хозяйству.\n' +
        'Работа заканчивается только ночью.\n' +
        'Появляются звёзды и Вы решаете ...\n',
        answer: {
            1: '1 - Полюбоваться звёздами\n',
            2: '2 - Пойти спать\n'
        },
        jump: {
            1: 14,
            2: 15
        }
    },
    11: {
        text: 'Вы решили посидеть ещё немножко.\n' +
        'Вечернее озеро выглядело очень красиво, чуть позже Вы возвращаетесь домой.\n' +
        'Вы приходите домой и начинаете помогать по хозяйству.\n' +
        'Работа заканчивается только ночью.\n' +
        'Появляются звёзды и Вы решаете ...\n',
        answer: {
            1: '1 - Полюбоваться звёздами\n',
            2: '2 - Пойти спать\n'
        },
        jump: {
            1: 14,
            2: 15
        }
    },
    12: {
        text: 'Вы решили выйти во двор.\n' +
        'Вечером стало попрохладнее, в самый раз для вечерней работы.\n' +
        'Вы начинаете помогать по хозяйству.\n' +
        'Работа заканчивается только ночью.\n' +
        'Появляются звёзды и Вы решаете ...\n',
        answer: {
            1: '1 - Полюбоваться звёздами\n',
            2: '2 - Пойти спать\n'
        },
        jump: {
            1: 14,
            2: 15
        }
    },
    13: {
        text: 'Вы решили отдохнуть ещё немножко.\n' +
        'Прохладный вечерний ветерок веет в окошко и, недолго размышляя, Вы выходите во двор.\n' +
        'Вечером стало попрохладнее, в самый раз для вечерней работы.\n' +
        'Вы начинаете помогать по хозяйству.\n' +
        'Работа заканчивается только ночью.\n' +
        'Появляются звёзды и Вы решаете ...\n',
        answer: {
            1: '1 - Полюбоваться звёздами\n',
            2: '2 - Пойти спать\n'
        },
        jump: {
            1: 14,
            2: 15
        }
    },
    14: {
        text: 'Вы решили полюбоваться звёздами.\n' +
        'Ночное небо прекрасно, видны множества созвездий, кажется, что ночное небо сияет.\n' +
        'Вы понимаете, что сегодня Вы хорошо поработали.\n' +
        'Время уже позднее, пора ложиться спать, завтра предстоит много работы.\n',
        answer: {
            1: '',
            2: ''
        },
        jump: {
        }
    },
    15: {
        text: 'Вы решили пойти спать.\n' +
        'Сегодня Вы хорошо поработали.\n' +
        'Завтра предстоит ещё много работы, лучше сегодня лечь пораньше.\n',
        answer: {
            1: '',
            2: ''
        },
        jump: {
        }
    },
};
var playerAnswer = 0;
var questGame = function (mas) {
    let play = true;
    let obj = 0;
    while (play == true && obj < 14) {
        playerAnswer  = + prompt (obj + '. ' + mas[obj].text + mas[obj].answer[1] + mas[obj].answer[2] + 'Введите ответ:');
        play = checkGame(playerAnswer);
        obj = getNumberOfObject(mas, obj);
    }
    while (play == true && obj < 16) {
        alert(obj + '. ' + mas[obj].text)
        play = false;
    }
    alert('Спасибо за игру!')
}

var getNumberOfObject = function (mas, obj) {
    if (playerAnswer == 1) {
        return mas[obj].jump[1];
    } else {
        return mas[obj].jump[2];
    }
}
var checkGame = function (playerAnswer) {
    if (playerAnswer < 1 || playerAnswer > 2) {
        alert('Видимо Вам надоело играть...');
        return false;
    } else {
        return true;
    }
}
questGame (works);

/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

console.log('1. Числа от 0 до 999 разбитые на разряды');

var object = {};
var userNumber = prompt ('Введите число от 0 до 999');
var push = function () {
    if (userNumber < 1000) {
        object.units = Math.floor(userNumber % 10);
        object.tens = Math.floor(userNumber / 10 % 10);
        object.hundreds = Math.floor(userNumber / 100 % 10);
    } else {
        console.log('Вы ввели число больше 999');
    }
    console.log('Вы ввели ' + userNumber);
    console.log(object);
};
push();

//3.  Добавлены вопросы и счетчик правильных ответов (задание 2)

var QUESTIONS = [
    {   number : 1,
        text : 'Какая столица в США',
        answers : ['Москва', 'Лондон', 'Вашингтон', 'Изумрудный город'],
        correct : 3
    },
    {   number : 2,
        text : '2 + 2 = ',
        answers : ['4', '3', '5', '6'],
        correct : 1
    },
    {
        number : 3,
        text : '3 + 3 = ',
        answers : ['4', '3', '5', '6'],
        correct : 4
    },
    {
        number : 4,
        text : '4 + 0 = ',
        answers : ['4', '3', '5', '6'],
        correct : 1
    },
    {
        number : 5,
        text : 'Какого цвета нет в флаге России?',
        answers : ['Белый', 'Желтый', 'Синий', 'Красный'],
        correct : 2
    },
    {
        number : 6,
        text : 'Кто ведет курс JavaScript?',
        answers : ['Твардовский', 'Лермонтов', 'Салтыков-Щедрин', 'Пушкин'],
        correct : 1
    },
    {
        number : 7,
        text : '8 + 8 = ',
        answers : ['17', '18', '16', '15'],
        correct : 3
    },
    {
        number : 8,
        text : '7 + 7 = ',
        answers : ['12', '13', '14', '15'],
        correct : 3
    },
    {
        number : 9,
        text : '9 + 1 = ',
        answers : ['00', '11', '01', '10'],
        correct : 4
    },
    {
        number : 10,
        text : '10 + 10 = ',
        answers : ['10', '12', '20', '100'],
        correct : 3
    }
];
var count = 0;
var game = function (mas) {
    let play = true;
    let round = 0;
    while (play == true && round < mas.length) { 
        let question = generateQuestion (mas, round);
        let answer = prompt (question.correctAnswer);
        play = check(answer, round);
        round++;
    };
    alert('Вы ответили правильно на ' + count + ' вопросов.')
};
var generateQuestion = function (mas, round) {
    let answers = '';
    for (let i = 0; i < 4; i++) {
        answers = answers + (i + 1) + ' - ' + mas[round].answers[i] + '\n'; 
    }
    let text = mas[round].text + '\n';
    let correctAnswer = mas[round].correct;
    return {
        correctAnswer: text + answers + 'Введите правильный ответ',
        rightAnswer: correctAnswer
    }
};
var check = function (answer, round) {
    if (answer == QUESTIONS[round].correct) {
        alert('Ok');
        count++;
        return true;
    } else {
        alert('You lose');
        return false;
    }
};
game (QUESTIONS);