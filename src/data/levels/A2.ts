
import { ProficiencyLevel, Word, SecondaryMeaning } from '../../types';

// Helper to create rich words (duplicated here to avoid circular dependency or complex shared utils for data files)
const createRichWord = (
  id: string,
  term: string,
  transcription: string,
  ruTranslit: string,
  translation: string,
  level: ProficiencyLevel,
  pos: string,
  freq: 'High' | 'Medium' | 'Low',
  reg: 'Formal' | 'Informal' | 'Neutral' | 'Slang' | 'Literary',
  def: string,
  usageCtx: string,
  examples: { en: string; ru: string }[],
  secondaryMeanings?: SecondaryMeaning[] // <--- ДОБАВЛЕН 13-й АРГУМЕНТ
): Word => ({
  id,
  term,
  transcription,
  russianTransliteration: ruTranslit,
  translation,
  level,
  partOfSpeech: pos,
  frequency: freq,
  register: reg,
  definition: def,
  usageContext: usageCtx,
  examples,
  secondaryMeanings // <--- ДОБАВЛЕНО В ОБЪЕКТ
});

export const WORDS_A2: Word[] = [
createRichWord('a2_able', 'Able', '/ˈeɪbl/', 'эйбл', 'Способный', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Имеющий возможность, навыки, средства или время сделать что-либо. Чаще всего используется в конструкции "be able to".',
    '- Возможность: "Be able to swim" (Уметь плавать)\n- Компетенция: "Able student" (Способный ученик)\n- Едва возможно: "Barely able" (Едва способный)',
    [
        { en: 'I will be able to come to the meeting tomorrow.', ru: 'Я смогу прийти на встречу завтра.' },
        { en: 'Is the baby able to walk on his own yet?', ru: 'Ребенок уже способен ходить самостоятельно?' },
        { en: 'Sorry, I am not able to help you right now.', ru: 'Извини, я не могу помочь тебе прямо сейчас.' },
        { en: 'She is a very clever and able student.', ru: 'Она очень умная и способная ученица.' }
    ]
),

createRichWord('a2_accept', 'Accept', '/əkˈsept/', 'эксепт', 'Принимать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Согласиться взять что-то предложенное или признать что-то истинным/подходящим. Смириться с ситуацией.',
    '- Предложение: "Accept an offer" (Принять предложение)\n- Подарок: "Accept a gift" (Принять подарок)\n- Извинения: "Accept apologies" (Принять извинения)',
    [
        { en: 'Please accept this small gift for your birthday.', ru: 'Пожалуйста, прими этот небольшой подарок на свой день рождения.' },
        { en: 'She decided to accept the new job offer immediately.', ru: 'Она решила немедленно принять предложение о новой работе.' },
        { en: 'I cannot accept your excuse for being late again.', ru: 'Я не могу принять твое оправдание за очередное опоздание.' },
        { en: 'They accept credit cards at this small shop.', ru: 'В этом маленьком магазине принимают кредитные карты.' }
    ]
),

createRichWord('a2_act', 'Act', '/ækt/', 'экт', 'Действовать / Вести себя', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Совершать поступки или вести себя определенным образом. Также может означать исполнять роль в фильме или пьесе.',
    '- Поведение: "Act like a child" (Вести себя как ребенок)\n- Действие: "Act quickly" (Действовать быстро)\n- Театр: "Act in a play" (Играть в пьесе)',
    [
        { en: 'You should act like an adult and be responsible.', ru: 'Тебе следует вести себя как взрослый и быть ответственным.' },
        { en: 'We need to act quickly to solve this problem.', ru: 'Нам нужно действовать быстро, чтобы решить эту проблему.' },
        { en: 'Stop acting silly and listen to the teacher.', ru: 'Перестань вести себя глупо и послушай учителя.' },
        { en: 'He wants to act in Hollywood movies one day.', ru: 'Он хочет однажды сниматься в голливудских фильмах.' }
    ]
),

createRichWord('a2_advertise', 'Advertise', '/ˈædvətaɪz/', 'эдвэтайз', 'Рекламировать', ProficiencyLevel.A2, 'verb', 'Medium', 'Neutral',
    'Рассказывать людям о продукте или услуге (в СМИ, интернете), чтобы убедить их купить это. Давать объявление.',
    '- ТВ: "Advertise on TV" (Рекламировать по ТВ)\n- Продукт: "Advertise a product" (Рекламировать товар)\n- Вакансия: "Advertise a job" (Разместить вакансию)',
    [
        { en: 'Companies advertise their products to sell more items.', ru: 'Компании рекламируют свои продукты, чтобы продать больше товаров.' },
        { en: 'They decided to advertise the new car on the radio.', ru: 'Они решили рекламировать новую машину по радио.' },
        { en: 'It costs a lot of money to advertise on television.', ru: 'Реклама на телевидении стоит очень больших денег.' },
        { en: 'We need to advertise for a new shop assistant.', ru: 'Нам нужно дать объявление о поиске нового продавца.' }
    ]
),

createRichWord('a2_against', 'Against', '/əˈɡenst/', 'эгэнст', 'Против', ProficiencyLevel.A2, 'prep', 'High', 'Neutral',
    'В оппозиции к кому-то или чему-то. В противоречии с правилами или желаниями. Также физический контакт (прислониться к).',
    '- Оппозиция: "Fight against" (Бороться против)\n- Правила: "Against the law" (Против закона)\n- Опора: "Lean against the wall" (Прислониться к стене)',
    [
        { en: 'Stealing money is against the law in every country.', ru: 'Кража денег противозаконна в каждой стране.' },
        { en: 'Our team is playing against the best team today.', ru: 'Наша команда сегодня играет против лучшей команды.' },
        { en: 'She leaned her heavy bicycle against the wall.', ru: 'Она прислонила свой тяжелый велосипед к стене.' },
        { en: 'Are you for or against the new school rules?', ru: 'Ты за или против новых школьных правил?' }
    ]
),

createRichWord('a2_almost', 'Almost', '/ˈɔːlməʊst/', 'олмоуст', 'Почти', ProficiencyLevel.A2, 'adv', 'High', 'Neutral',
    'Очень близко к чему-то, но не совсем. Практически завершено или достигнуто.',
    '- Завершение: "Almost finished" (Почти закончил)\n- Время: "Almost time" (Почти пора)\n- Количество: "Almost all" (Почти все)',
    [
        { en: 'I am almost ready to go to the party.', ru: 'Я почти готов идти на вечеринку.' },
        { en: 'It is almost midnight, we should go to sleep.', ru: 'Уже почти полночь, нам следует идти спать.' },
        { en: 'She almost dropped the plate on the floor.', ru: 'Она почти уронила тарелку на пол.' },
        { en: 'We have sold almost all the tickets for the concert.', ru: 'Мы продали почти все билеты на концерт.' }
    ]
),

createRichWord('a2_alone', 'Alone', '/əˈləʊn/', 'элоун', 'Один / Одинокий', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Без других людей вокруг. Может означать как физическое одиночество, так и чувство покинутости.',
    '- Состояние: "Live alone" (Жить одному)\n- Исключительность: "You alone" (Ты один / Только ты)\n- Просьба: "Leave me alone" (Оставь меня в покое)',
    [
        { en: 'I do not like walking alone in the dark.', ru: 'Мне не нравится гулять одному в темноте.' },
        { en: 'He lives all alone in a big house.', ru: 'Он живет совсем один в большом доме.' },
        { en: 'Please leave me alone, I need to study.', ru: 'Пожалуйста, оставь меня в покое, мне нужно учиться.' },
        { en: 'She traveled alone to three different countries.', ru: 'Она одна путешествовала по трем разным странам.' }
    ]
),

createRichWord('a2_along', 'Along', '/əˈlɒŋ/', 'элонг', 'Вдоль / Вместе с', ProficiencyLevel.A2, 'prep', 'High', 'Neutral',
    'Движение в одном направлении с чем-то длинным (дорогой, рекой). Также означает "вместе с кем-то".',
    '- Направление: "Walk along the beach" (Гулять вдоль пляжа)\n- Компания: "Come along" (Идти вместе)\n- Согласие: "Go along with" (Соглашаться с / Поддерживать)',
    [
        { en: 'We walked along the river for an hour.', ru: 'Мы гуляли вдоль реки в течение часа.' },
        { en: 'There are beautiful trees all along the street.', ru: 'Вдоль всей улицы растут красивые деревья.' },
        { en: 'Would you like to come along with us?', ru: 'Ты хотел бы пойти вместе с нами?' },
        { en: 'Move along the bus, please, to make room.', ru: 'Проходите по салону автобуса, пожалуйста, чтобы освободить место.' }
    ]
),

createRichWord('a2_already', 'Already', '/ɔːlˈredi/', 'олрэди', 'Уже', ProficiencyLevel.A2, 'adv', 'High', 'Neutral',
    'Случилось раньше, чем ожидалось, или к настоящему моменту времени. Часто используется в Perfect Tenses.',
    '- Факт: "I have already done it" (Я это уже сделал)\n- Время: "Is it 5 o\'clock already?" (Неужели уже 5 часов?)\n- Состояние: "Already known" (Уже известен)',
    [
        { en: 'I have already finished my homework for today.', ru: 'Я уже закончил свое домашнее задание на сегодня.' },
        { en: 'Is the train already here at the station?', ru: 'Поезд уже прибыл на станцию?' },
        { en: 'She has already seen this film three times.', ru: 'Она уже видела этот фильм три раза.' },
        { en: 'We are already late for the meeting.', ru: 'Мы уже опаздываем на встречу.' }
    ]
),

createRichWord('a2_alright', 'Alright', '/ɔːlˈraɪt/', 'олрайт', 'В порядке / Хорошо', ProficiencyLevel.A2, 'adj', 'High', 'Informal',
    'Удовлетворительно, допустимо или здорово. Используется для выражения согласия или проверки состояния (как дела?). Часто пишется как "All right".',
    '- Состояние: "Are you alright?" (Ты в порядке?)\n- Согласие: "Alright, let\'s go" (Ладно, пошли)\n- Качество: "It was alright" (Это было нормально)',
    [
        { en: 'Are you alright after falling off your bike?', ru: 'Ты в порядке после падения с велосипеда?' },
        { en: 'Is it alright if I open the window?', ru: 'Ничего, если я открою окно?' },
        { en: 'Everything will be alright in the end.', ru: 'В конце концов всё будет хорошо.' },
        { en: 'Alright, I will help you with the cleaning.', ru: 'Ладно, я помогу тебе с уборкой.' }
    ]
  ),
createRichWord('a2_among', 'Among', '/əˈmʌŋ/', 'эман', 'Среди', ProficiencyLevel.A2, 'prep', 'Medium', 'Neutral',
    'Находясь в середине группы людей или вещей; в окружении кого-либо или чего-либо.',
    '- Группа: "Among friends" (Среди друзей)\n- Выбор: "Choose among" (Выбирать среди)\n- Расположение: "Among the trees" (Среди деревьев)',
    [
      { en: 'There was a small red house hidden among the tall trees.', ru: 'Среди высоких деревьев был спрятан маленький красный домик.' },
      { en: 'She felt very happy to be among her best friends.', ru: 'Она чувствовала себя очень счастливой, находясь среди своих лучших друзей.' },
      { en: 'You have to choose one winner among all these people.', ru: 'Ты должен выбрать одного победителя среди всех этих людей.' },
      { en: 'He is very popular among the students in his class.', ru: 'Он очень популярен среди учеников своего класса.' }
    ]
),

createRichWord('a2_amount', 'Amount', '/əˈmaʊnt/', 'эмаунт', 'Количество', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Сумма чего-либо; сколько чего-то есть. Обычно используется с неисчисляемыми существительными.',
    '- Размер: "Large amount" (Большое количество)\n- Деньги: "Amount of money" (Сумма денег)\n- Время: "Amount of time" (Количество времени)',
    [
      { en: 'He spent a large amount of money on his new car.', ru: 'Он потратил большую сумму денег на свою новую машину.' },
      { en: 'A small amount of sugar will make the tea better.', ru: 'Небольшое количество сахара сделает чай лучше.' },
      { en: 'The amount of work we have to do is huge.', ru: 'Объем работы, которую нам предстоит сделать, огромен.' },
      { en: 'Please pay the full amount before the end of the month.', ru: 'Пожалуйста, выплатите полную сумму до конца месяца.' }
    ]
),

createRichWord('a2_appear', 'Appear', '/əˈpɪə/', 'эпиэ', 'Появляться', ProficiencyLevel.A2, 'verb', 'Medium', 'Neutral',
    'Становиться видимым или казаться каким-то (выглядеть).\nОзначает возникновение перед глазами или впечатление.',
    '- Видимость: "Suddenly appear" (Внезапно появиться)\n- Мнение: "Appear to be" (Казаться)\n- Публика: "Appear on TV" (Появиться на ТВ)',
    [
      { en: 'A bright rainbow appeared in the sky after the rain.', ru: 'После дождя в небе появилась яркая радуга.' },
      { en: 'He appears to be a very nice and kind man.', ru: 'Он кажется очень милым и добрым человеком.' },
      { en: 'The sun began to appear from behind the dark clouds.', ru: 'Солнце начало появляться из-за темных туч.' },
      { en: 'She will appear on stage in ten minutes.', ru: 'Она появится на сцене через десять минут.' }
    ]
),

createRichWord('a2_area', 'Area', '/ˈeəriə/', 'ээриэ', 'Область', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Часть места, города или страны; определенное пространство или сфера деятельности.',
    '- Место: "Play area" (Игровая зона)\n- Регион: "Rural area" (Сельская местность)\n- Тема: "Subject area" (Предметная область)',
    [
      { en: 'This area of the city is known for its good restaurants.', ru: 'Этот район города известен своими хорошими ресторанами.' },
      { en: 'Smoking is not allowed in this specific area of the building.', ru: 'Курение в этой конкретной зоне здания запрещено.' },
      { en: 'The kitchen area is always the busiest room in our house.', ru: 'Кухонная зона — всегда самая оживленная комната в нашем доме.' },
      { en: 'We are looking for a house in a quiet residential area.', ru: 'Мы ищем дом в тихом жилом районе.' }
    ]
),

createRichWord('a2_arrange', 'Arrange', '/əˈreɪndʒ/', 'эрэйндж', 'Организовать', ProficiencyLevel.A2, 'verb', 'Medium', 'Neutral',
    'Планировать или организовывать что-то; приводить вещи в порядок или располагать их определенным образом.',
    '- Планирование: "Arrange a meeting" (Организовать встречу)\n- Порядок: "Arrange flowers" (Расставлять цветы)\n- Договоренность: "Arrange to meet" (Договориться о встрече)',
    [
      { en: 'I will arrange a meeting with the manager for tomorrow.', ru: 'Я организую встречу с менеджером на завтра.' },
      { en: 'She likes to arrange the books on the shelf by color.', ru: 'Ей нравится расставлять книги на полке по цвету.' },
      { en: 'Can you arrange for a taxi to pick us up?', ru: 'Можешь организовать такси, чтобы нас забрали?' },
      { en: 'Everything is arranged for the party on Saturday night.', ru: 'Всё организовано для вечеринки в субботу вечером.' }
    ]
),

createRichWord('a2_arrive', 'Arrive', '/əˈraɪv/', 'эрайв', 'Прибывать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Достигать места назначения, такого как город, аэропорт или дом, после путешествия.',
    '- Место (город/страна): "Arrive in London" (Прибыть в Лондон)\n- Место (точка): "Arrive at the station" (Прибыть на станцию)\n- Время: "Arrive late" (Опоздать/Прибыть поздно)',
    [
      { en: 'We arrived at the airport two hours before the flight.', ru: 'Мы прибыли в аэропорт за два часа до вылета.' },
      { en: 'The train is expected to arrive at five o\'clock.', ru: 'Ожидается, что поезд прибудет в пять часов.' },
      { en: 'When did you arrive in this beautiful country?', ru: 'Когда вы прибыли в эту прекрасную страну?' },
      { en: 'She arrived home tired after a long day at work.', ru: 'Она пришла домой уставшей после долгого рабочего дня.' }
    ]
),

createRichWord('a2_awful', 'Awful', '/ˈɔːf(ə)l/', 'оф(э)л', 'Ужасный', ProficiencyLevel.A2, 'adj', 'Medium', 'Neutral',
    'Очень плохой, неприятный или низкого качества. Выражает сильную негативную оценку.',
    '- Погода: "Awful weather" (Ужасная погода)\n- Запах: "Awful smell" (Ужасный запах)\n- Качество: "Awful mistake" (Ужасная ошибка)',
    [
      { en: 'The weather was awful yesterday, so we stayed inside.', ru: 'Погода вчера была ужасная, поэтому мы остались дома.' },
      { en: 'I have an awful headache and need to lie down.', ru: 'У меня ужасная головная боль, и мне нужно прилечь.' },
      { en: 'That movie was simply awful; I did not like it.', ru: 'Тот фильм был просто ужасен; он мне не понравился.' },
      { en: 'There was an awful smell coming from the kitchen.', ru: 'Из кухни доносился ужасный запах.' }
    ]
  ),
createRichWord('a2_bear', 'Bear', '/beə/', 'бээ', 'Медведь', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Крупное, сильное дикое животное с густой шерстью и острыми когтями.',
    '- Вид: "Polar bear" (Белый медведь)\n- Игрушка: "Teddy bear" (Плюшевый мишка)\n- Дикая природа: "Wild bear" (Дикий медведь)',
    [
      { en: 'We saw a large brown bear walking in the forest.', ru: 'Мы видели большого бурого медведя, гуляющего в лесу.' },
      { en: 'The polar bear lives in the very cold Arctic regions.', ru: 'Белый медведь обитает в очень холодных арктических регионах.' },
      { en: 'Every child loves to sleep with a soft teddy bear.', ru: 'Каждый ребенок любит спать с мягким плюшевым мишкой.' },
      { en: 'Bears usually sleep through the winter in a deep cave.', ru: 'Медведи обычно спят всю зиму в глубокой пещере.' }
    ]
),

createRichWord('a2_beat', 'Beat', '/biːt/', 'бит', 'Бить / Побеждать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Наносить удары или побеждать кого-то в игре или соревновании.',
    '- Спорт: "Beat the team" (Победить команду)\n- Сердце: "Heart beat" (Биение сердца)\n- Музыка: "Beat the drum" (Бить в барабан)',
    [
      { en: 'My heart beats faster when I run very fast.', ru: 'Мое сердце бьется быстрее, когда я бегу очень быстро.' },
      { en: 'Our team managed to beat them in the final game.', ru: 'Нашей команде удалось победить их в финальной игре.' },
      { en: 'Someone is beating on the door, go and open it.', ru: 'Кто-то стучит (бьет) в дверь, иди и открой.' },
      { en: 'It is very difficult to beat him at chess.', ru: 'Его очень трудно победить в шахматы.' }
    ]
),

// ==============================================================================
// --- LEVEL B1 ---
// ==============================================================================

createRichWord('b1_base', 'Base', '/beɪs/', 'бэйс', 'Основа / База', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Нижняя часть объекта, на которой он стоит; или главное место расположения организации.',
    '- Поддержка: "Base of the tower" (Основание башни)\n- Военные: "Military base" (Военная база)\n- Знания: "Knowledge base" (База знаний)',
    [
      { en: 'The lamp has a heavy metal base to keep it stable on the table.', ru: 'У лампы тяжелое металлическое основание, чтобы она устойчиво стояла на столе.' },
      { en: 'They decided to set up a base camp at the foot of the mountain.', ru: 'Они решили разбить базовый лагерь у подножия горы.' },
      { en: 'This company has its main base in London but operates all over the world.', ru: 'У этой компании главная база в Лондоне, но она работает по всему миру.' },
      { en: 'We used the old school building as a base for our community project.', ru: 'Мы использовали старое школьное здание как базу для нашего общественного проекта.' }
    ]
),

createRichWord('b1_basic', 'Basic', '/ˈbeɪsɪk/', 'бэйсик', 'Базовый', ProficiencyLevel.B1, 'adj', 'High', 'Neutral',
    'Простой, несложный или являющийся основой для чего-то; необходимый минимум.',
    '- Потребности: "Basic needs" (Базовые потребности)\n- Знания: "Basic English" (Базовый английский)\n- Зарплата: "Basic salary" (Базовая зарплата/оклад)',
    [
      { en: 'Access to clean water is a basic human right for everyone on earth.', ru: 'Доступ к чистой воде — это базовое право человека для всех на земле.' },
      { en: 'I only have a basic understanding of how this complex machine works.', ru: 'У меня есть лишь базовое понимание того, как работает эта сложная машина.' },
      { en: 'The hotel room was very basic, with just a bed and a small chair.', ru: 'Номер в отеле был очень простым (базовым), только с кроватью и маленьким стулом.' },
      { en: 'Before you learn to drive a car, you must understand the basic rules.', ru: 'Прежде чем учиться водить машину, вы должны понять базовые правила.' }
    ]
),

createRichWord('b1_beauty', 'Beauty', '/ˈbjuːti/', 'бьюти', 'Красота', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Качество, которое доставляет удовольствие чувствам или разуму; привлекательность.',
    '- Природа: "Natural beauty" (Естественная красота)\n- Конкурс: "Beauty contest" (Конкурс красоты)\n- Индустрия: "Beauty salon" (Салон красоты)',
    [
      { en: 'The natural beauty of the landscape attracted tourists from all over the world.', ru: 'Естественная красота пейзажа привлекала туристов со всего мира.' },
      { en: 'She is not only known for her beauty but also for her intelligence.', ru: 'Она известна не только своей красотой, но и своим умом.' },
      { en: 'This painting captures the beauty of the sunset perfectly on the canvas.', ru: 'Эта картина идеально передает красоту заката на холсте.' },
      { en: 'Beauty is in the eye of the beholder, as the old saying goes.', ru: 'Красота в глазах смотрящего, как гласит старая поговорка.' }
    ]
),

createRichWord('b1_beside', 'Beside', '/bɪˈsaɪd/', 'бисайд', 'Рядом с', ProficiencyLevel.B1, 'prep', 'Medium', 'Neutral',
    'Предлог места, означающий "сбоку от" или "около"; синоним "next to".',
    '- Место: "Sit beside me" (Сядь рядом со мной)\n- Сравнение: "Beside the point" (Не относится к делу)\n- Море: "Beside the sea" (У моря)',
    [
      { en: 'He pulled up a chair and sat down beside his friend to talk.', ru: 'Он подставил стул и сел рядом со своим другом, чтобы поговорить.' },
      { en: 'I keep a glass of water on the small table beside my bed.', ru: 'Я держу стакан воды на маленьком столике рядом с кроватью.' },
      { en: 'She looked tiny beside the huge basketball player standing next to her.', ru: 'Она выглядела крошечной рядом с огромным баскетболистом, стоящим возле нее.' },
      { en: 'Their house is located right beside a beautiful and calm lake.', ru: 'Их дом расположен прямо рядом с красивым и спокойным озером.' }
    ]
),

createRichWord('b1_bet', 'Bet', '/bet/', 'бет', 'Спорить / Делать ставку', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Рисковать деньгами на исход события или выражать уверенность в чем-либо (фраза "I bet").',
    '- Азарт: "Bet money" (Ставить деньги)\n- Уверенность: "I bet that..." (Держу пари, что...)\n- Спорт: "Bet on a horse" (Сделать ставку на лошадь)',
    [
      { en: 'I bet you five pounds that he will be late for the meeting again.', ru: 'Спорим на пять фунтов, что он снова опоздает на встречу.' },
      { en: 'He lost a lot of money because he liked to bet on football games.', ru: 'Он потерял много денег, потому что любил делать ставки на футбольные матчи.' },
      { en: 'I bet she knows the answer, but she is too shy to say it.', ru: 'Держу пари, она знает ответ, но слишком стесняется его сказать.' },
      { en: 'Never bet more money than you can afford to lose at the casino.', ru: 'Никогда не ставьте в казино больше денег, чем можете позволить себе проиграть.' }
    ]
  ),
createRichWord('a2_billion', 'Billion', '/ˈbɪljən/', 'бильен', 'Миллиард', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Число 1,000,000,000; тысяча миллионов.',
    '- Люди: "Billion people" (Миллиард людей)\n- Деньги: "Billions of dollars" (Миллиарды долларов)\n- Число: "Half a billion" (Помиллиарда)',
    [
      { en: 'There are over seven billion people living on Earth.', ru: 'На Земле живет более семи миллиардов людей.' },
      { en: 'The company lost a billion dollars last year.', ru: 'Компания потеряла миллиард долларов в прошлом году.' },
      { en: 'It is hard to imagine a number as big as a billion.', ru: 'Трудно представить такое большое число, как миллиард.' },
      { en: 'The government spent billions on the new project.', ru: 'Правительство потратило миллиарды на новый проект.' }
    ]
),

createRichWord('a2_birth', 'Birth', '/bɜːθ/', 'бёс', 'Рождение', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Процесс появления ребенка или детеныша на свет; начало жизни.',
    '- Дата: "Date of birth" (Дата рождения)\n- Событие: "Give birth" (Родить)\n- Место: "Place of birth" (Место рождения)',
    [
      { en: 'Please write your date of birth on this form.', ru: 'Пожалуйста, напишите дату своего рождения в этой форме.' },
      { en: 'She gave birth to a healthy baby boy yesterday.', ru: 'Вчера она родила здорового мальчика.' },
      { en: 'His place of birth is listed as New York City.', ru: 'Его место рождения указано как Нью-Йорк.' },
      { en: 'They celebrated the birth of their first grandchild.', ru: 'Они отпраздновали рождение своего первого внука.' }
    ]
),

createRichWord('a2_bit', 'Bit', '/bɪt/', 'бит', 'Кусочек / Немного', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Небольшое количество чего-либо или маленькая часть.',
    '- Количество: "A little bit" (Немного)\n- Время: "Wait a bit" (Подождать немного)\n- Часть: "Bits of paper" (Кусочки бумаги)',
    [
      { en: 'Can you move a little bit to the left, please?', ru: 'Можешь подвинуться немного влево, пожалуйста?' },
      { en: 'I am a bit tired after the long walk.', ru: 'Я немного устал после долгой прогулки.' },
      { en: 'He speaks a little bit of French.', ru: 'Он немного говорит по-французски.' },
      { en: 'The glass broke into tiny bits on the floor.', ru: 'Стакан разбился на мелкие кусочки на полу.' }
    ]
),

createRichWord('a2_blood', 'Blood', '/blʌd/', 'блад', 'Кровь', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Красная жидкость, которая течет по телу человека и животных.',
    '- Тип: "Blood type" (Группа крови)\n- Тест: "Blood test" (Анализ крови)\n- Давление: "Blood pressure" (Кровяное давление)',
    [
      { en: 'He lost a lot of blood after the accident.', ru: 'Он потерял много крови после аварии.' },
      { en: 'The nurse took a sample of my blood for testing.', ru: 'Медсестра взяла образец моей крови для анализа.' },
      { en: 'Blood carries oxygen to all parts of the body.', ru: 'Кровь переносит кислород ко всем частям тела.' },
      { en: 'She is afraid when she sees blood on a cut.', ru: 'Она боится, когда видит кровь на порезе.' }
    ]
),

createRichWord('a2_board', 'Board', '/bɔːd/', 'бод', 'Доска / Борт', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Плоский кусок дерева или твердого материала; также используется во фразе "on board" (на борту).',
    '- Школа: "White board" (Маркерная доска)\n- Транспорт: "On board" (На борту)\n- Игры: "Board game" (Настольная игра)',
    [
      { en: 'The teacher wrote the answer on the white board.', ru: 'Учитель написал ответ на белой доске.' },
      { en: 'Welcome on board flight 405 to Paris.', ru: 'Добро пожаловать на борт рейса 405 в Париж.' },
      { en: 'We played a fun board game with the family.', ru: 'Мы сыграли в веселую настольную игру с семьей.' },
      { en: 'They nailed a wooden board over the broken window.', ru: 'Они прибили деревянную доску поверх разбитого окна.' }
    ]
),

createRichWord('a2_bone', 'Bone', '/bəʊn/', 'боун', 'Кость', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Твердая белая часть скелета внутри тела.',
    '- Травма: "Broken bone" (Сломанная кость)\n- Еда: "Fish bone" (Рыбная кость)\n- Структура: "Back bone" (Позвоночник)',
    [
      { en: 'The dog found a large bone and buried it.', ru: 'Собака нашла большую кость и закопала ее.' },
      { en: 'He broke a bone in his arm playing football.', ru: 'Он сломал кость в руке, играя в футбол.' },
      { en: 'The human body has more than two hundred bones.', ru: 'В человеческом теле более двухсот костей.' },
      { en: 'Be careful of the bones when you eat this fish.', ru: 'Остерегайтесь костей, когда едите эту рыбу.' }
    ]
),

createRichWord('a2_bottom', 'Bottom', '/ˈbɒtəm/', 'ботэм', 'Дно / Низ', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Самая нижняя часть чего-либо.',
    '- Положение: "At the bottom" (Внизу / На дне)\n- Страница: "Bottom of the page" (Низ страницы)\n- Море: "Ocean bottom" (Дно океана)',
    [
      { en: 'The answers are at the bottom of the page.', ru: 'Ответы находятся внизу страницы.' },
      { en: 'He found a coin at the bottom of his pocket.', ru: 'Он нашел монету на дне своего кармана.' },
      { en: 'The ship sank to the bottom of the sea.', ru: 'Корабль пошел на дно моря.' },
      { en: 'She lives in the apartment at the bottom of the building.', ru: 'Она живет в квартире в нижней части здания.' }
    ]
),

createRichWord('a2_bright', 'Bright', '/braɪt/', 'брайт', 'Яркий', ProficiencyLevel.A2, 'adj', 'Medium', 'Neutral',
    'Имеющий много света или сильный цвет; также означает "умный".',
    '- Свет: "Bright light" (Яркий свет)\n- Цвет: "Bright colours" (Яркие цвета)\n- Ум: "Bright idea" (Блестящая идея)',
    [
      { en: 'The sun is very bright in the sky today.', ru: 'Солнце сегодня очень яркое в небе.' },
      { en: 'She likes to wear bright colours like yellow and red.', ru: 'Она любит носить яркие цвета, такие как желтый и красный.' },
      { en: 'He is a bright student who learns very quickly.', ru: 'Он способный (яркий) ученик, который учится очень быстро.' },
      { en: 'Please turn off that bright light, it hurts my eyes.', ru: 'Пожалуйста, выключи этот яркий свет, он режет мне глаза.' }
    ]
),

createRichWord('a2_burn', 'Burn', '/bɜːn/', 'бён', 'Гореть / Жечь', ProficiencyLevel.A2, 'verb', 'Medium', 'Neutral',
    'Быть охваченным огнем или повредить что-то теплом/огнем.',
    '- Огонь: "Fire burns" (Огонь горит)\n- Травма: "Burn finger" (Обжечь палец)\n- Еда: "Burn the toast" (Сжечь тост)',
    [
      { en: 'Be careful not to burn your hand on the stove.', ru: 'Будь осторожен, не обожги руку о плиту.' },
      { en: 'The wood burned slowly in the fireplace all night.', ru: 'Дрова медленно горели в камине всю ночь.' },
      { en: 'She burned the cake because the oven was too hot.', ru: 'Она сожгла торт, потому что духовка была слишком горячей.' },
      { en: 'My skin burns easily when I stay in the sun.', ru: 'Моя кожа легко сгорает, когда я нахожусь на солнце.' }
    ]
  ),
createRichWord('a2_accident', 'Accident', '/ˈæksɪdənt/', 'эксидэнт', 'Несчастный случай / Авария', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Неприятное событие, которое происходит неожиданно и непреднамеренно, часто приводящее к травмам.',
    '- Транспорт: "Car accident" (Автомобильная авария)\n- Случайность: "By accident" (Случайно)\n- Происшествие: "Have an accident" (Попасть в аварию)',
    [
      { en: 'He had a car accident because of the ice on the road.', ru: 'Он попал в аварию из-за льда на дороге.' },
      { en: 'I broke your favorite cup by accident, sorry.', ru: 'Я разбил твою любимую чашку случайно, извини.' },
      { en: 'Call the police, there has been a bad accident.', ru: 'Вызови полицию, произошла серьезная авария.' },
      { en: 'Luckily, nobody was hurt in the accident yesterday.', ru: 'К счастью, вчера в аварии никто не пострадал.' }
    ]
),

createRichWord('a2_according', 'According', '/əˈkɔːdɪŋ/', 'экодин', 'Согласно', ProficiencyLevel.A2, 'prep', 'High', 'Neutral',
    'Обычно используется с "to". Означает "как сказано кем-то" или "в соответствии с".',
    '- Источник: "According to him" (По его словам)\n- Правила: "According to the rules" (Согласно правилам)\n- План: "Go according to plan" (Идти по плану)',
    [
      { en: 'According to the weather forecast, it will rain tomorrow.', ru: 'Согласно прогнозу погоды, завтра будет дождь.' },
      { en: 'Everything went exactly according to our plan.', ru: 'Всё прошло в точности согласно нашему плану.' },
      { en: 'According to the teacher, the test is next week.', ru: 'По словам учителя, тест будет на следующей неделе.' },
      { en: 'You must play the game according to the rules.', ru: 'Ты должен играть в игру по правилам.' }
    ]
),

createRichWord('a2_active', 'Active', '/ˈæktɪv/', 'эктив', 'Активный', ProficiencyLevel.A2, 'adj', 'Medium', 'Neutral',
    'Занятый действием; энергичный и много двигающийся. Противоположность пассивному.',
    '- Образ жизни: "Active life" (Активная жизнь)\n- Участие: "Take an active part" (Принимать активное участие)\n- Состояние: "Active volcano" (Действующий вулкан)',
    [
      { en: 'My grandmother is still very active for her age.', ru: 'Моя бабушка всё еще очень активна для своего возраста.' },
      { en: 'He leads an active lifestyle with lots of sports.', ru: 'Он ведет активный образ жизни с большим количеством спорта.' },
      { en: 'You should be more active and sit less.', ru: 'Тебе следует быть более активным и меньше сидеть.' },
      { en: 'Volleyball is a very active and fun game.', ru: 'Волейбол — очень активная и веселая игра.' }
    ]
),

createRichWord('a2_adventure', 'Adventure', '/ədˈventʃə/', 'эдвенчэ', 'Приключение', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Захватывающий и необычный опыт, часто связанный с риском или путешествиями.',
    '- Действие: "Go on an adventure" (Отправиться в приключение)\n- Жанр: "Adventure movie" (Приключенческий фильм)\n- Дух: "Sense of adventure" (Дух приключений)',
    [
      { en: 'Our trip to the mountains was a real adventure.', ru: 'Наша поездка в горы была настоящим приключением.' },
      { en: 'He loves reading stories about space adventures.', ru: 'Он любит читать истории о космических приключениях.' },
      { en: 'They look for adventure wherever they travel.', ru: 'Они ищут приключений везде, где путешествуют.' },
      { en: 'Life is an adventure, so enjoy every moment.', ru: 'Жизнь — это приключение, так что наслаждайся каждым моментом.' }
    ]
),

createRichWord('a2_advice', 'Advice', '/ədˈvaɪs/', 'эдвайс', 'Совет', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Рекомендация о том, что следует делать. Важно: в английском это неисчисляемое существительное.',
    '- Действие: "Give advice" (Дать совет)\n- Получение: "Ask for advice" (Попросить совета)\n- Качество: "Good advice" (Хороший совет)',
    [
      { en: 'Can you give me some advice about this problem?', ru: 'Можешь дать мне совет по поводу этой проблемы?' },
      { en: 'I always listen to my father\'s wise advice.', ru: 'Я всегда слушаю мудрые советы своего отца.' },
      { en: 'Let me give you a piece of advice: work hard.', ru: 'Позволь дать тебе совет: работай усердно.' },
      { en: 'She took my advice and bought the red dress.', ru: 'Она послушала моего совета и купила красное платье.' }
    ]
),

createRichWord('a2_alcohol', 'Alcohol', '/ˈælkəhɒl/', 'элкэхол', 'Алкоголь', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Напитки, содержащие этанол, такие как вино, пиво или виски.',
    '- Употребление: "Drink alcohol" (Пить алкоголь)\n- Закон: "Buy alcohol" (Покупать алкоголь)\n- Содержание: "Alcohol free" (Безалкогольный)',
    [
      { en: 'You generally cannot buy alcohol if you are under eighteen.', ru: 'Обычно вы не можете покупать алкоголь, если вам меньше восемнадцати.' },
      { en: 'He does not drink alcohol for health reasons.', ru: 'Он не пьет алкоголь по состоянию здоровья.' },
      { en: 'There is too much alcohol in this strong drink.', ru: 'В этом крепком напитке слишком много алкоголя.' },
      { en: 'Please do not drive a car after drinking alcohol.', ru: 'Пожалуйста, не ведите машину после употребления алкоголя.' }
    ]
),

createRichWord('a2_alive', 'Alive', '/əˈlaɪv/', 'элайв', 'Живой', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Живущий; не мертвый. Также может означать "полный энергии".',
    '- Состояние: "Stay alive" (Остаться в живых)\n- Растения/Люди: "Keep alive" (Поддерживать жизнь)\n- Ощущение: "Feel alive" (Чувствовать себя живым)',
    [
      { en: 'Is the flower in the pot still alive?', ru: 'Цветок в горшке все еще живой?' },
      { en: 'He was happy to be alive after the dangerous fall.', ru: 'Он был счастлив, что остался жив после опасного падения.' },
      { en: 'Music makes me feel alive and full of energy.', ru: 'Музыка заставляет меня чувствовать себя живым и полным энергии.' },
      { en: 'The old tradition is still alive in this village.', ru: 'Старая традиция все еще жива в этой деревне.' }
    ]
),

createRichWord('a2_argue', 'Argue', '/ˈɑːɡjuː/', 'агью', 'Спорить / Ссориться', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Сердито разговаривать с кем-то из-за несогласия; также приводить аргументы (на более высоких уровнях).',
    '- Конфликт: "Argue with someone" (Ссориться с кем-то)\n- Тема: "Argue about money" (Спорить о деньгах)\n- Процесс: "Stop arguing" (Перестать спорить)',
    [
      { en: 'I do not want to argue with you about this.', ru: 'Я не хочу спорить с тобой об этом.' },
      { en: 'My brothers argue all the time about toys.', ru: 'Мои братья все время ссорятся из-за игрушек.' },
      { en: 'They argued for an hour and then made peace.', ru: 'Они спорили час, а потом помирились.' },
      { en: 'Don\'t argue with your mother, please listen to her.', ru: 'Не спорь с мамой, пожалуйста, послушай ее.' }
    ]
),

createRichWord('a2_army', 'Army', '/ˈɑːmi/', 'ами', 'Армия', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Большая организованная группа солдат, обученных сражаться на суше.',
    '- Служба: "Join the army" (Вступить в армию)\n- Люди: "Army officer" (Армейский офицер)\n- Группа: "Army of ants" (Армия муравьев - перен.)',
    [
      { en: 'His brother joined the army when he was twenty.', ru: 'Его брат пошел в армию, когда ему было двадцать.' },
      { en: 'The army helped the people after the big flood.', ru: 'Армия помогла людям после сильного наводнения.' },
      { en: 'Soldiers in the army wear green uniforms.', ru: 'Солдаты в армии носят зеленую форму.' },
      { en: 'It takes discipline to be a good leader in the army.', ru: 'Нужна дисциплина, чтобы быть хорошим лидером в армии.' }
    ]
),

createRichWord('a2_article', 'Article', '/ˈɑːtɪk(ə)l/', 'атик(э)л', 'Статья / Артикль', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Текст в газете или журнале; также грамматическая категория (a, an, the).',
    '- Чтение: "Read an article" (Читать статью)\n- Тема: "Article about..." (Статья о...)\n- Грамматика: "Definite article" (Определенный артикль)',
    [
      { en: 'I read an interesting article about space today.', ru: 'Я прочитал интересную статью о космосе сегодня.' },
      { en: 'The newspaper published an article on healthy food.', ru: 'Газета опубликовала статью о здоровой еде.' },
      { en: 'In English, "the" is a definite article.', ru: 'В английском языке "the" — это определенный артикль.' },
      { en: 'She writes articles for a fashion magazine.', ru: 'Она пишет статьи для модного журнала.' }
    ]
),

createRichWord('a2_asleep', 'Asleep', '/əˈsliːp/', 'эслип', 'Спящий', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Находящийся в состоянии сна. Используется после глаголов be, fall.',
    '- Действие: "Fall asleep" (Заснуть)\n- Состояние: "Fast asleep" (Крепко спящий)\n- Половина: "Half asleep" (В полудреме)',
    [
      { en: 'The baby is finally asleep after crying.', ru: 'Ребенок наконец-то спит (спящий) после плача.' },
      { en: 'I fell asleep while watching the boring movie.', ru: 'Я заснул во время просмотра скучного фильма.' },
      { en: 'Please be quiet, my father is asleep on the sofa.', ru: 'Пожалуйста, тише, мой папа спит на диване.' },
      { en: 'She was fast asleep and didn\'t hear the phone.', ru: 'Она крепко спала и не слышала телефон.' }
    ]
  ),
createRichWord('a2_attack', 'Attack', '/əˈtæk/', 'этэк', 'Атаковать / Нападение', ProficiencyLevel.A2, 'verb', 'Medium', 'Neutral',
    'Применять насилие против кого-либо или чего-либо; начинать бой.',
    '- Действие: "Attack the enemy" (Атаковать врага)\n- Здоровье: "Heart attack" (Сердечный приступ)\n- Животные: "Dog attack" (Нападение собаки)',
    [
      { en: 'The wild dog tried to attack the sheep on the farm.', ru: 'Дикая собака попыталась напасть на овец на ферме.' },
      { en: 'The army decided to attack at dawn tomorrow morning.', ru: 'Армия решила атаковать на рассвете завтра утром.' },
      { en: 'He had a sudden panic attack in the crowded room.', ru: 'У него случилась внезапная паническая атака в переполненной комнате.' },
      { en: 'Luckily, nobody was hurt during the shark attack.', ru: 'К счастью, никто не пострадал во время нападения акулы.' }
    ]
),

createRichWord('a2_attention', 'Attention', '/əˈtenʃ(ə)n/', 'этеншн', 'Внимание', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Сосредоточение мыслей на чем-либо или слушание кого-либо.',
    '- Действие: "Pay attention" (Обращать внимание)\n- Привлечение: "Attract attention" (Привлекать внимание)\n- Центр: "Center of attention" (Центр внимания)',
    [
      { en: 'Please pay close attention to what I am saying.', ru: 'Пожалуйста, обратите пристальное внимание на то, что я говорю.' },
      { en: 'The teacher clapped her hands to get the students\' attention.', ru: 'Учительница хлопнула в ладоши, чтобы привлечь внимание учеников.' },
      { en: 'He likes being the center of attention at parties.', ru: 'Ему нравится быть в центре внимания на вечеринках.' },
      { en: 'She didn\'t pay any attention to the warning sign.', ru: 'Она не обратила никакого внимания на предупреждающий знак.' }
    ]
),

createRichWord('a2_available', 'Available', '/əˈveɪləb(ə)l/', 'эвейлэбл', 'Доступный', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'То, что можно использовать, купить или найти; свободный (о времени).',
    '- Наличие: "Room available" (Свободная комната)\n- Покупка: "Available in stores" (Доступно в магазинах)\n- Время: "Are you available?" (Вы свободны?)',
    [
      { en: 'Is there a table available for two people tonight?', ru: 'Есть ли свободный столик на двоих сегодня вечером?' },
      { en: 'This T-shirt is available in three different colors.', ru: 'Эта футболка доступна в трех разных цветах.' },
      { en: 'I am not available to talk right now, call later.', ru: 'Я не могу (не доступен) говорить прямо сейчас, позвони позже.' },
      { en: 'Information is available on the official website.', ru: 'Информация доступна на официальном веб-сайте.' }
    ]
),

createRichWord('a2_awake', 'Awake', '/əˈweɪk/', 'эвейк', 'Бодрствующий', ProficiencyLevel.A2, 'adj', 'Medium', 'Neutral',
    'Не спящий; состояние после пробуждения.',
    '- Состояние: "Wide awake" (Совершенно не спящий / Бодрый)\n- Действие: "Stay awake" (Бодрствовать / Не спать)\n- Половина: "Half awake" (Спросонья)',
    [
      { en: 'I was wide awake all night worrying about the exam.', ru: 'Я совершенно не спал всю ночь, волнуясь об экзамене.' },
      { en: 'Is the baby awake or is she still sleeping?', ru: 'Ребенок проснулся (бодрствует) или все еще спит?' },
      { en: 'He drank coffee to stay awake during the long drive.', ru: 'Он пил кофе, чтобы не уснуть во время долгой поездки.' },
      { en: 'She was still half awake when the phone rang loudly.', ru: 'Она была еще в полудреме, когда громко зазвонил телефон.' }
    ]
),

createRichWord('a2_bake', 'Bake', '/beɪk/', 'бейк', 'Печь', ProficiencyLevel.A2, 'verb', 'Medium', 'Neutral',
    'Готовить еду (обычно хлеб, торты или печенье) в духовке.',
    '- Еда: "Bake a cake" (Испечь торт)\n- Процесс: "Bake bread" (Печь хлеб)\n- Результат: "Freshly baked" (Свежеиспеченный)',
    [
      { en: 'My grandmother likes to bake cookies for us.', ru: 'Моя бабушка любит печь печенье для нас.' },
      { en: 'We are going to bake a chocolate cake for his birthday.', ru: 'Мы собираемся испечь шоколадный торт на его день рождения.' },
      { en: 'The bread bakes in the oven for about one hour.', ru: 'Хлеб печется в духовке около одного часа.' },
      { en: 'The smell of freshly baked bread filled the kitchen.', ru: 'Запах свежеиспеченного хлеба наполнил кухню.' }
    ]
),

createRichWord('a2_band', 'Band', '/bænd/', 'бэнд', 'Группа / Полоса', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Группа музыкантов, играющих вместе; или полоска материала.',
    '- Музыка: "Rock band" (Рок-группа)\n- Аксессуар: "Hair band" (Резинка/повязка для волос)\n- Материал: "Rubber band" (Резинка)',
    [
      { en: 'My favorite band is playing a concert in London tonight.', ru: 'Моя любимая группа дает концерт в Лондоне сегодня вечером.' },
      { en: 'He plays the drums in a school jazz band.', ru: 'Он играет на барабанах в школьном джазовом ансамбле.' },
      { en: 'She tied her hair back with a red rubber band.', ru: 'Она завязала волосы сзади красной резинкой.' },
      { en: 'The band played music while the people danced.', ru: 'Группа играла музыку, пока люди танцевали.' }
    ]
),

createRichWord('a2_basket', 'Basket', '/ˈbɑːskɪt/', 'баскит', 'Корзина', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Контейнер, сплетенный из прутьев или сделанный из пластика, с ручкой.',
    '- Покупки: "Shopping basket" (Корзина для покупок)\n- Спорт: "Basketball" (Баскетбол / корзина)\n- Предмет: "Picnic basket" (Корзина для пикника)',
    [
      { en: 'She put the fresh apples into a wicker basket.', ru: 'Она положила свежие яблоки в плетеную корзину.' },
      { en: 'The shopping basket was full of food for the week.', ru: 'Корзина для покупок была полна еды на неделю.' },
      { en: 'We took a large basket of food to the park.', ru: 'Мы взяли большую корзину с едой в парк.' },
      { en: 'The cat is sleeping comfortably in its basket.', ru: 'Кошка удобно спит в своей корзине.' }
    ]
),

createRichWord('a2_bat', 'Bat', '/bæt/', 'бэт', 'Летучая мышь / Бита', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Маленькое животное, похожее на мышь с крыльями; или деревянная палка для игры в бейсбол/крикет.',
    '- Животное: "Flying bat" (Летучая мышь)\n- Спорт: "Baseball bat" (Бейсбольная бита)\n- Действие: "Hit with a bat" (Ударить битой)',
    [
      { en: 'We saw a bat flying in the sky at night.', ru: 'Мы видели летучую мышь, летящую в небе ночью.' },
      { en: 'He hit the ball hard with his wooden bat.', ru: 'Он сильно ударил по мячу своей деревянной битой.' },
      { en: 'Bats usually sleep upside down during the day.', ru: 'Летучие мыши обычно спят вниз головой в течение дня.' },
      { en: 'You need a bat and a ball to play cricket.', ru: 'Тебе нужна бита и мяч, чтобы играть в крикет.' }
    ]
),

createRichWord('a2_bean', 'Bean', '/biːn/', 'бин', 'Боб / Фасоль', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Семя или стручок некоторых растений, используемый в пищу.',
    '- Еда: "Green beans" (Зеленая фасоль)\n- Напиток: "Coffee bean" (Кофейное зерно)\n- Блюдо: "Baked beans" (Тушеная фасоль)',
    [
      { en: 'I like to eat green beans with my dinner.', ru: 'Я люблю есть зеленую фасоль на ужин.' },
      { en: 'This soup is made with white beans and tomatoes.', ru: 'Этот суп сделан из белой фасоли и помидоров.' },
      { en: 'Coffee beans smell very good when you roast them.', ru: 'Кофейные зерна очень вкусно пахнут, когда их жаришь.' },
      { en: 'In England, people often eat beans on toast.', ru: 'В Англии люди часто едят фасоль на тосте.' }
    ]
),

createRichWord('a2_bee', 'Bee', '/biː/', 'би', 'Пчела', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Летающее насекомое, которое делает мед и может ужалить.',
    '- Насекомое: "Honey bee" (Медоносная пчела)\n- Укус: "Bee sting" (Укус пчелы)\n- Звук: "Busy bee" (Трудолюбивая пчелка)',
    [
      { en: 'A bee is collecting pollen from the yellow flower.', ru: 'Пчела собирает пыльцу с желтого цветка.' },
      { en: 'Be careful, because a bee can sting you.', ru: 'Будь осторожен, потому что пчела может тебя ужалить.' },
      { en: 'Bees work together to make honey in the hive.', ru: 'Пчелы работают вместе, чтобы делать мед в улье.' },
      { en: 'I saw a large bumble bee in the garden.', ru: 'Я видел большого шмеля в саду.' }
    ]
),

createRichWord('a2_beef', 'Beef', '/biːf/', 'биф', 'Говядина', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Мясо коровы, используемое в пищу.',
    '- Еда: "Roast beef" (Ростбиф / Жареная говядина)\n- Блюдо: "Beef steak" (Говяжий стейк)\n- Продукт: "Ground beef" (Говяжий фарш)',
    [
      { en: 'We are having roast beef for lunch on Sunday.', ru: 'У нас будет жареная говядина на обед в воскресенье.' },
      { en: 'Do you prefer chicken or beef in your burger?', ru: 'Ты предпочитаешь курицу или говядину в бургере?' },
      { en: 'This beef is very tender and tastes delicious.', ru: 'Эта говядина очень нежная и вкусная.' },
      { en: 'Farmers raise cattle to produce milk and beef.', ru: 'Фермеры выращивают скот для производства молока и говядины.' }
    ]
),

createRichWord('a2_bell', 'Bell', '/bel/', 'бел', 'Колокол / Звонок', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Металлический предмет, издающий звонкий звук; или дверной звонок.',
    '- Школа: "School bell" (Школьный звонок)\n- Дверь: "Door bell" (Дверной звонок)\n- Церковь: "Church bell" (Церковный колокол)',
    [
      { en: 'The school bell rang, and the children ran outside.', ru: 'Прозвенел школьный звонок, и дети выбежали на улицу.' },
      { en: 'Please ring the bell if you want to enter.', ru: 'Пожалуйста, позвоните в звонок, если хотите войти.' },
      { en: 'We could hear the church bells ringing in the distance.', ru: 'Мы слышали, как вдалеке звонят церковные колокола.' },
      { en: 'He attached a small bell to the cat\'s collar.', ru: 'Он прикрепил маленький колокольчик к ошейнику кошки.' }
    ]
),

createRichWord('a2_belong', 'Belong', '/bɪˈlɒŋ/', 'билон', 'Принадлежать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Быть собственностью кого-либо; быть частью группы.',
    '- Собственность: "Belong to me" (Принадлежать мне)\n- Место: "Belong here" (Быть на своем месте)\n- Группа: "Belong to a club" (Состоять в клубе)',
    [
      { en: 'Does this blue bag belong to you or your sister?', ru: 'Эта синяя сумка принадлежит тебе или твоей сестре?' },
      { en: 'I feel that I do not belong in this strange place.', ru: 'Я чувствую, что мне не место в этом странном месте.' },
      { en: 'These books belong on the top shelf, not here.', ru: 'Этим книгам место на верхней полке, а не здесь.' },
      { en: 'He belongs to a local football club in the city.', ru: 'Он состоит в (принадлежит) местном футбольном клубе в городе.' }
    ]
),

createRichWord('a2_belt', 'Belt', '/belt/', 'белт', 'Ремень', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Полоска кожи или ткани, которую носят вокруг талии.',
    '- Одежда: "Leather belt" (Кожаный ремень)\n- Безопасность: "Seat belt" (Ремнь безопасности)\n- Спорт: "Black belt" (Черный пояс)',
    [
      { en: 'He wears a brown leather belt with his jeans.', ru: 'Он носит коричневый кожаный ремень с джинсами.' },
      { en: 'You must wear a seat belt in the car.', ru: 'Ты должен быть пристегнут ремнем безопасности в машине.' },
      { en: 'This belt is too tight, I need a bigger one.', ru: 'Этот ремень слишком тугой, мне нужен побольше.' },
      { en: 'She earned her black belt in karate last year.', ru: 'В прошлом году она получила черный пояс по карате.' }
    ]
),

createRichWord('a2_bin', 'Bin', '/bɪn/', 'бин', 'Мусорное ведро', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Контейнер для мусора или хранения вещей.',
    '- Мусор: "Rubbish bin" (Мусорное ведро)\n- Переработка: "Recycling bin" (Контейнер для переработки)\n- Улица: "Litter bin" (Урна)',
    [
      { en: 'Please put your empty bottles in the recycling bin.', ru: 'Пожалуйста, положи пустые бутылки в контейнер для переработки.' },
      { en: 'The kitchen bin is full and needs to be emptied.', ru: 'Кухонное ведро полное, и его нужно вынести.' },
      { en: 'He threw the paper wrapper into the bin on the street.', ru: 'Он бросил бумажную обертку в урну на улице.' },
      { en: 'Where is the bin for bread waste located?', ru: 'Где находится контейнер для хлебных отходов?' }
    ]
),

createRichWord('a2_biscuit', 'Biscuit', '/ˈbɪskɪt/', 'бискит', 'Печенье', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Маленькое, плоское, сухое сладкое изделие (британский вариант слова Cookie).',
    '- Еда: "Chocolate biscuit" (Шоколадное печенье)\n- Традиция: "Tea and biscuits" (Чай с печеньем)\n- Упаковка: "Packet of biscuits" (Пачка печенья)',
    [
      { en: 'Would you like a chocolate biscuit with your tea?', ru: 'Хочешь шоколадное печенье к чаю?' },
      { en: 'She opened a packet of biscuits and shared them.', ru: 'Она открыла пачку печенья и поделилась ими.' },
      { en: 'I try not to eat too many sweet biscuits.', ru: 'Я стараюсь не есть слишком много сладкого печенья.' },
      { en: 'He dipped his biscuit into the hot coffee.', ru: 'Он макнул печенье в горячий кофе.' }
    ]
),

createRichWord('a2_blanket', 'Blanket', '/ˈblæŋkɪt/', 'блэнкит', 'Одеяло', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Толстое покрывало из шерсти или теплой ткани, используемое на кровати.',
    '- Постель: "Warm blanket" (Теплое одеяло)\n- Материал: "Wool blanket" (Шерстяное одеяло)\n- Действие: "Under the blanket" (Под одеялом)',
    [
      { en: 'It is cold tonight, so I need an extra blanket.', ru: 'Сегодня холодно, поэтому мне нужно дополнительное одеяло.' },
      { en: 'The baby was sleeping under a soft blue blanket.', ru: 'Ребенок спал под мягким голубым одеялом.' },
      { en: 'She wrapped a blanket around her shoulders to keep warm.', ru: 'Она обернула одеяло вокруг плеч, чтобы согреться.' },
      { en: 'We sat on a blanket on the grass for our picnic.', ru: 'Мы сидели на одеяле на траве во время пикника.' }
    ]
  ),
createRichWord('a2_boil', 'Boil', '/bɔɪl/', 'бойл', 'Кипятить / Варить', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Нагревать жидкость до появления пузырьков (100°C) или готовить еду в такой воде.',
    '- Процесс: "Water boils" (Вода кипит)\n- Еда: "Boil an egg" (Сварить яйцо)\n- Состояние: "Boiling hot" (Очень горячий / Кипящий)',
    [
      { en: 'Please boil some water for a cup of tea.', ru: 'Пожалуйста, вскипяти немного воды для чашки чая.' },
      { en: 'You should boil the potatoes for twenty minutes.', ru: 'Тебе следует варить картошку двадцать минут.' },
      { en: 'The soup began to boil on the hot stove.', ru: 'Суп начал кипеть на горячей плите.' },
      { en: 'I like to eat boiled eggs for breakfast.', ru: 'Я люблю есть вареные яйца на завтрак.' }
    ]
),

createRichWord('a2_borrow', 'Borrow', '/ˈbɒrəʊ/', 'бороу', 'Одалживать / Занимать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Брать что-то у кого-то с намерением вернуть это позже.',
    '- Деньги: "Borrow money" (Занять деньги)\n- Вещи: "Borrow a pen" (Одолжить ручку)\n- Библиотека: "Borrow a book" (Взять книгу)',
    [
      { en: 'Can I borrow your pen for a moment, please?', ru: 'Могу я одолжить твою ручку на минутку, пожалуйста?' },
      { en: 'I need to borrow some money from my brother.', ru: 'Мне нужно занять немного денег у брата.' },
      { en: 'She likes to borrow books from the city library.', ru: 'Она любит брать книги в городской библиотеке.' },
      { en: 'Never borrow clothes without asking the owner first.', ru: 'Никогда не бери (одалживай) одежду, не спросив сначала владельца.' }
    ]
),

createRichWord('a2_boss', 'Boss', '/bɒs/', 'бос', 'Начальник', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Человек, который управляет работниками или организацией.',
    '- Работа: "Ask the boss" (Спросить начальника)\n- Статус: "Big boss" (Большой босс)\n- Действие: "Boss around" (Командовать)',
    [
      { en: 'My boss gave me a new task to finish today.', ru: 'Мой начальник дал мне новое задание, которое нужно закончить сегодня.' },
      { en: 'She wants to be the boss of her own company.', ru: 'Она хочет быть начальницей своей собственной компании.' },
      { en: 'The boss is in a meeting right now.', ru: 'Начальник сейчас на встрече.' },
      { en: 'He is a good boss because he listens to us.', ru: 'Он хороший начальник, потому что слушает нас.' }
    ]
),

createRichWord('a2_bowl', 'Bowl', '/bəʊl/', 'боул', 'Миска / Чаша', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Глубокая круглая посуда, используемая для хранения еды или жидкостей.',
    '- Еда: "Bowl of soup" (Тарелка супа)\n- Кухня: "Mixing bowl" (Миска для смешивания)\n- Ингредиент: "Sugar bowl" (Сахарница)',
    [
      { en: 'I had a large bowl of cereal for breakfast.', ru: 'Я съел большую миску хлопьев на завтрак.' },
      { en: 'Please put the fruit in the glass bowl.', ru: 'Пожалуйста, положи фрукты в стеклянную чашу.' },
      { en: 'The cat drank all the milk from its bowl.', ru: 'Кошка выпила все молоко из своей миски.' },
      { en: 'She broke her favorite ceramic bowl yesterday.', ru: 'Вчера она разбила свою любимую керамическую миску.' }
    ]
),

createRichWord('a2_brain', 'Brain', '/breɪn/', 'брейн', 'Мозг', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Орган внутри головы, который контролирует мысли, чувства и движения.',
    '- Анатомия: "Human brain" (Человеческий мозг)\n- Ум: "Use your brain" (Шевелить мозгами / Думать)\n- Еда: "Brain food" (Пища для ума)',
    [
      { en: 'The brain controls everything your body does.', ru: 'Мозг контролирует все, что делает твое тело.' },
      { en: 'He has a very good brain for mathematics.', ru: 'У него очень хорошие способности (мозг) к математике.' },
      { en: 'Protect your brain by wearing a helmet when cycling.', ru: 'Защищай свой мозг, надевая шлем при езде на велосипеде.' },
      { en: 'Solving puzzles is good exercise for your brain.', ru: 'Решение головоломок — хорошая тренировка для мозга.' }
    ]
),

createRichWord('a2_bridge', 'Bridge', '/brɪdʒ/', 'бридж', 'Мост', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Сооружение, построенное над рекой, дорогой или железной дорогой, чтобы люди могли пересечь их.',
    '- Строительство: "Build a bridge" (Построить мост)\n- Место: "Cross the bridge" (Пересечь мост)\n- Материал: "Stone bridge" (Каменный мост)',
    [
      { en: 'We walked across the bridge to get to the park.', ru: 'Мы перешли через мост, чтобы попасть в парк.' },
      { en: 'The old bridge over the river is made of wood.', ru: 'Старый мост через реку сделан из дерева.' },
      { en: 'London Bridge is a very famous place to visit.', ru: 'Лондонский мост — очень известное место для посещения.' },
      { en: 'Trains go over the bridge every ten minutes.', ru: 'Поезда проходят по мосту каждые десять минут.' }
    ]
  ),
createRichWord('a2_abroad', 'Abroad', '/əˈbrɔːd/', 'эброд', 'За границей', ProficiencyLevel.A2, 'adv', 'High', 'Neutral',
    'В иностранной стране или в иностранную страну.',
    '- Путешествие: "Go abroad" (Поехать за границу)\n- Обучение: "Study abroad" (Учиться за границей)\n- Проживание: "Live abroad" (Жить за границей)',
    [
      { en: 'We want to go abroad for our holiday this summer.', ru: 'Мы хотим поехать за границу в отпуск этим летом.' },
      { en: 'He has never been abroad in his whole life.', ru: 'Он никогда в жизни не был за границей.' },
      { en: 'She works abroad and comes home only for Christmas.', ru: 'Она работает за границей и приезжает домой только на Рождество.' },
      { en: 'Students often go abroad to learn a new language.', ru: 'Студенты часто едут за границу, чтобы выучить новый язык.' }
    ]
),

createRichWord('a2_airline', 'Airline', '/ˈeəlaɪn/', 'эйэлайн', 'Авиакомпания', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Компания, которая предоставляет регулярные рейсы для перевозки пассажиров и грузов.',
    '- Бизнес: "Cheap airline" (Дешевая авиакомпания)\n- Путешествие: "Airline ticket" (Авиабилет)\n- Работа: "Work for an airline" (Работать в авиакомпании)',
    [
      { en: 'Which airline are you flying with to New York?', ru: 'Какой авиакомпанией вы летите в Нью-Йорк?' },
      { en: 'The airline lost my luggage during the trip.', ru: 'Авиакомпания потеряла мой багаж во время поездки.' },
      { en: 'This airline offers very cheap flights to Europe.', ru: 'Эта авиакомпания предлагает очень дешевые рейсы в Европу.' },
      { en: 'My sister is a pilot for a major airline.', ru: 'Моя сестра — пилот крупной авиакомпании.' }
    ]
),

createRichWord('a2_album', 'Album', '/ˈælbəm/', 'элбэм', 'Альбом', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Коллекция музыкальных записей или книга для хранения фотографий.',
    '- Музыка: "New album" (Новый альбом)\n- Фото: "Photo album" (Фотоальбом)\n- Действие: "Record an album" (Записать альбом)',
    [
      { en: 'My favorite band released a new album yesterday.', ru: 'Моя любимая группа выпустила новый альбом вчера.' },
      { en: 'She showed us her wedding photo album after dinner.', ru: 'Она показала нам свой свадебный фотоальбом после ужина.' },
      { en: 'I have this song on their first album.', ru: 'У меня есть эта песня на их первом альбоме.' },
      { en: 'We bought an empty album to put our pictures in.', ru: 'Мы купили пустой альбом, чтобы вставить туда наши фотографии.' }
    ]
),

createRichWord('a2_ancient', 'Ancient', '/ˈeɪnʃ(ə)nt/', 'эйншент', 'Древний', ProficiencyLevel.A2, 'adj', 'Medium', 'Neutral',
    'Принадлежащий к очень далекому прошлому; существующий очень долгое время.',
    '- История: "Ancient history" (Древняя история)\n- Место: "Ancient city" (Древний город)\n- Страна: "Ancient Egypt" (Древний Египет)',
    [
      { en: 'They visited the ancient ruins of a castle in Greece.', ru: 'Они посетили древние руины замка в Греции.' },
      { en: 'This ancient tree is more than five hundred years old.', ru: 'Этому древнему дереву более пятисот лет.' },
      { en: 'We learned about ancient Rome in history class today.', ru: 'Сегодня на уроке истории мы изучали Древний Рим.' },
      { en: 'The museum is full of ancient coins and pots.', ru: 'Музей полон древних монет и горшков.' }
    ]
  ),
createRichWord('a2_athlete', 'Athlete', '/ˈæθliːt/', 'эслит', 'Атлет / Спортсмен', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Человек, который очень хорошо занимается спортом и участвует в соревнованиях.',
    '- Спорт: "Professional athlete" (Профессиональный спортсмен)\n- Качество: "Good athlete" (Хороший атлет)\n- Олимпиада: "Olympic athlete" (Олимпийский спортсмен)',
    [
      { en: 'The athlete ran very fast and won the gold medal.', ru: 'Спортсмен пробежал очень быстро и выиграл золотую медаль.' },
      { en: 'She trains every day because she wants to be a famous athlete.', ru: 'Она тренируется каждый день, потому что хочет стать известной спортсменкой.' },
      { en: 'Athletes need to eat healthy food to stay strong.', ru: 'Спортсменам нужно есть здоровую пищу, чтобы оставаться сильными.' },
      { en: 'He is the best athlete in our school football team.', ru: 'Он лучший спортсмен в нашей школьной футбольной команде.' }
    ]
),

createRichWord('a2_author', 'Author', '/ˈɔːθə/', 'осэ', 'Автор', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Человек, который написал книгу, статью или документ.',
    '- Книга: "Famous author" (Известный автор)\n- Работа: "Children\'s author" (Детский писатель)\n- Право: "Copyright of the author" (Авторское право)',
    [
      { en: 'Who is the author of this interesting book about animals?', ru: 'Кто автор этой интересной книги о животных?' },
      { en: 'My favorite author writes stories about magic and dragons.', ru: 'Мой любимый автор пишет истории о магии и драконах.' },
      { en: 'She wants to be an author when she grows up.', ru: 'Она хочет стать писательницей (автором), когда вырастет.' },
      { en: 'The author signed my copy of his new novel.', ru: 'Автор подписал мой экземпляр своего нового романа.' }
    ]
),

createRichWord('a2_behave', 'Behave', '/bɪˈheɪv/', 'бихейв', 'Вести себя', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Действовать определенным образом; быть вежливым и послушным.',
    '- Поведение: "Behave badly" (Вести себя плохо)\n- Приказ: "Behave yourself" (Веди себя прилично)\n- Манеры: "Behave well" (Вести себя хорошо)',
    [
      { en: 'Please behave yourself when we visit your grandmother today.', ru: 'Пожалуйста, веди себя прилично, когда мы навестим твою бабушку сегодня.' },
      { en: 'The children did not behave well at the restaurant yesterday.', ru: 'Дети плохо вели себя в ресторане вчера.' },
      { en: 'He always behaves like a gentleman in front of ladies.', ru: 'Он всегда ведет себя как джентльмен перед дамами.' },
      { en: 'Our dog behaves strangely when it hears thunder.', ru: 'Наша собака ведет себя странно, когда слышит гром.' }
    ]
),

createRichWord('a2_behaviour', 'Behaviour', '/bɪˈheɪvjə/', 'бихейвья', 'Поведение', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'То, как человек или животное действует или реагирует на что-то.',
    '- Школа: "Bad behaviour" (Плохое поведение)\n- Изменение: "Change behaviour" (Изменить поведение)\n- Тип: "Good behaviour" (Хорошее поведение)',
    [
      { en: 'His bad behaviour in class made the teacher angry.', ru: 'Его плохое поведение в классе разозлило учителя.' },
      { en: 'Animals often change their behaviour when they are hungry.', ru: 'Животные часто меняют свое поведение, когда они голодны.' },
      { en: 'She received a prize for her good behaviour at school.', ru: 'Она получила приз за хорошее поведение в школе.' },
      { en: 'I do not understand the reason for his strange behaviour.', ru: 'Я не понимаю причину его странного поведения.' }
    ]
),

createRichWord('a2_celebrate', 'Celebrate', '/ˈselɪbreɪt/', 'сэлибрейт', 'Праздновать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Делать что-то веселое и особенное, потому что наступил важный день или событие.',
    '- Событие: "Celebrate a birthday" (Праздновать день рождения)\n- Праздник: "Celebrate Christmas" (Праздновать Рождество)\n- Успех: "Celebrate victory" (Праздновать победу)',
    [
      { en: 'We are going to celebrate my birthday with a big party.', ru: 'Мы собираемся отпраздновать мой день рождения большой вечеринкой.' },
      { en: 'People celebrate New Year with fireworks and music.', ru: 'Люди празднуют Новый год фейерверками и музыкой.' },
      { en: 'They went out for dinner to celebrate their anniversary.', ru: 'Они пошли ужинать, чтобы отпраздновать свою годовщину.' },
      { en: 'How do you usually celebrate this holiday in your country?', ru: 'Как вы обычно празднуете этот праздник в вашей стране?' }
    ]
  ),
createRichWord('a2_ambulance', 'Ambulance', '/ˈæmbjələns/', 'эмбьюлэнс', 'Скорая помощь', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Специальный автомобиль для перевозки больных или раненых людей в больницу.',
    '- Вызов: "Call an ambulance" (Вызвать скорую)\n- Звук: "Ambulance siren" (Сирена скорой помощи)\n- Водитель: "Ambulance driver" (Водитель скорой)',
    [
      { en: 'We had to call an ambulance when he fell down.', ru: 'Нам пришлось вызвать скорую помощь, когда он упал.' },
      { en: 'The ambulance arrived very quickly at the accident scene.', ru: 'Скорая помощь прибыла на место аварии очень быстро.' },
      { en: 'You can hear the loud siren of an ambulance.', ru: 'Слышно громкую сирену машины скорой помощи.' },
      { en: 'The ambulance driver drove fast to save the patient.', ru: 'Водитель скорой ехал быстро, чтобы спасти пациента.' }
    ]
),

createRichWord('a2_ankle', 'Ankle', '/ˈæŋk(ə)l/', 'энкл', 'Лодыжка', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Сустав, соединяющий стопу с ногой.',
    '- Травма: "Twist your ankle" (Подвернуть лодыжку)\n- Отек: "Swollen ankle" (Опухшая лодыжка)\n- Кость: "Ankle bone" (Кость лодыжки)',
    [
      { en: 'She fell and twisted her ankle while playing tennis.', ru: 'Она упала и подвернула лодыжку во время игры в теннис.' },
      { en: 'My ankle hurts because I walked too much today.', ru: 'У меня болит лодыжка, потому что я сегодня слишком много ходил.' },
      { en: 'He wore boots that covered his ankles completely.', ru: 'Он носил ботинки, которые полностью закрывали его лодыжки.' },
      { en: 'The doctor put a bandage around her swollen ankle.', ru: 'Врач наложил повязку на ее опухшую лодыжку.' }
    ]
  ),
createRichWord('a2_balloon', 'Balloon', '/bəˈluːn/', 'бэлун', 'Воздушный шар', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Мешок из резины или другого материала, который наполняют воздухом или газом.',
    '- Праздник: "Blow up a balloon" (Надуть шарик)\n- Путешествие: "Hot air balloon" (Воздушный шар/аэростат)\n- Цвет: "Red balloon" (Красный шарик)',
    [
      { en: 'We bought many colorful balloons for the birthday party.', ru: 'Мы купили много разноцветных шаров для дня рождения.' },
      { en: 'The little girl cried when her balloon flew away.', ru: 'Маленькая девочка заплакала, когда её шарик улетел.' },
      { en: 'He tried to blow up the balloon but it burst.', ru: 'Он попытался надуть шарик, но тот лопнул.' },
      { en: 'They flew over the city in a large hot air balloon.', ru: 'Они пролетели над городом на большом воздушном шаре.' }
    ]
),

createRichWord('a2_baseball', 'Baseball', '/ˈbeɪsbɔːl/', 'бэйсбол', 'Бейсбол', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Популярная командная игра с битой, мячом и перчатками.',
    '- Спорт: "Play baseball" (Играть в бейсбол)\n- Экипировка: "Baseball cap" (Бейсболка)\n- Место: "Baseball field" (Бейсбольное поле)',
    [
      { en: 'Baseball is a very popular sport in the United States.', ru: 'Бейсбол — очень популярный вид спорта в Соединенных Штатах.' },
      { en: 'He wears his favorite baseball cap every single day.', ru: 'Он носит свою любимую бейсболку каждый божий день.' },
      { en: 'We went to the stadium to watch a baseball game.', ru: 'Мы пошли на стадион, чтобы посмотреть бейсбольный матч.' },
      { en: 'You need a bat and a ball to play baseball.', ru: 'Тебе нужны бита и мяч, чтобы играть в бейсбол.' }
    ]
),

createRichWord('a2_beard', 'Beard', '/bɪəd/', 'биэд', 'Борода', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Волосы, растущие на подбородке и щеках мужчины.',
    '- Внешность: "Grow a beard" (Отрастить бороду)\n- Уход: "Trim a beard" (Подстригать бороду)\n- Описание: "Long white beard" (Длинная белая борода)',
    [
      { en: 'My father has a thick black beard on his face.', ru: 'У моего отца густая черная борода на лице.' },
      { en: 'He decided to shave off his beard for the summer.', ru: 'Он решил сбрить бороду на лето.' },
      { en: 'Santa Claus is famous for his long white beard.', ru: 'Санта-Клаус известен своей длинной белой бородой.' },
      { en: 'Does he look better with a beard or without one?', ru: 'Он выглядит лучше с бородой или без неё?' }
    ]
),

createRichWord('a2_biology', 'Biology', '/baɪˈɒlədʒi/', 'байолэджи', 'Биология', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Наука, изучающая живые организмы, их строение и развитие.',
    '- Учеба: "Biology class" (Урок биологии)\n- Наука: "Human biology" (Биология человека)\n- Природа: "Marine biology" (Морская биология)',
    [
      { en: 'We learned about plants in our biology lesson today.', ru: 'Сегодня на уроке биологии мы узнали о растениях.' },
      { en: 'She wants to study biology at the university next year.', ru: 'В следующем году она хочет изучать биологию в университете.' },
      { en: 'Biology helps us understand how our bodies work properly.', ru: 'Биология помогает нам понять, как правильно работает наше тело.' },
      { en: 'The biology teacher showed us a cell under the microscope.', ru: 'Учитель биологии показал нам клетку под микроскопом.' }
    ]
  ),
createRichWord('a2_ant', 'Ant', '/ænt/', 'энт', 'Муравей', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Очень маленькое насекомое, которое живет большими организованными группами.',
    '- Природа: "Ant hill" (Муравейник)\n- Работа: "Worker ant" (Рабочий муравей)\n- Размер: "Tiny ant" (Крошечный муравей)',
    [
      { en: 'We saw a line of ants carrying food to their home.', ru: 'Мы видели цепочку муравьев, несущих еду в свой дом.' },
      { en: 'An ant is very strong for its small size.', ru: 'Муравей очень силен для своего маленького размера.' },
      { en: 'Don\'t leave sugar on the table, or the ants will come.', ru: 'Не оставляй сахар на столе, иначе придут муравьи.' },
      { en: 'There was a red ant crawling on my shoe.', ru: 'По моему ботинку полз рыжий муравей.' }
    ]
  ),
createRichWord('a2_basketball', 'Basketball', '/ˈbɑːskɪtbɔːl/', 'баскет-бол', 'Баскетбол', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Командная игра, в которой игроки пытаются забросить мяч в корзину соперника.',
    '- Спорт: "Play basketball" (Играть в баскетбол)\n- Мяч: "Basketball player" (Баскетболист)\n- Место: "Basketball court" (Баскетбольная площадка)',
    [
      { en: 'He plays basketball with his friends every Friday.', ru: 'Он играет в баскетбол с друзьями каждую пятницу.' },
      { en: 'Michael Jordan is a very famous basketball star.', ru: 'Майкл Джордан — очень известная звезда баскетбола.' },
      { en: 'We watched a basketball game on TV last night.', ru: 'Вчера вечером мы смотрели баскетбольный матч по телевизору.' },
      { en: 'She bought a new pair of basketball shoes.', ru: 'Она купила новую пару баскетбольных кроссовок.' }
    ]
),

createRichWord('a2_candy', 'Candy', '/ˈkændi/', 'кэнди', 'Конфета / Сладости', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Сладкая еда, сделанная из сахара или шоколада (в британском английском чаще "sweets").',
    '- Еда: "Candy bar" (Шоколадный батончик)\n- Магазин: "Candy shop" (Магазин сладостей)\n- Вкус: "Sweet candy" (Сладкая конфета)',
    [
      { en: 'Children love to eat candy on Halloween.', ru: 'Дети любят есть конфеты на Хэллоуин.' },
      { en: 'Too much candy is bad for your teeth.', ru: 'Слишком много сладостей вредно для твоих зубов.' },
      { en: 'He bought a box of candy for his mother.', ru: 'Он купил коробку конфет для своей мамы.' },
      { en: 'Do you want a piece of candy?', ru: 'Хочешь конфетку?' }
    ]
),

createRichWord('a2_cardboard', 'Cardboard', '/ˈkɑːdbɔːd/', 'кадбод', 'Картон', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Плотная жесткая бумага, используемая для изготовления коробок.',
    '- Материал: "Cardboard box" (Картонная коробка)\n- Упаковка: "Thick cardboard" (Толстый картон)\n- Творчество: "Cut cardboard" (Резать картон)',
    [
      { en: 'We packed all our books in a cardboard box.', ru: 'Мы упаковали все наши книги в картонную коробку.' },
      { en: 'The children made a house out of cardboard.', ru: 'Дети сделали домик из картона.' },
      { en: 'Don\'t throw away that cardboard, we can use it.', ru: 'Не выбрасывай этот картон, мы можем его использовать.' },
      { en: 'This sign is made of stiff cardboard.', ru: 'Этот знак сделан из жесткого картона.' }
    ]
  ),
createRichWord('a2_adjective', 'Adjective', '/ˈædʒɪktɪv/', 'эджектив', 'Прилагательное', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Слово, которое описывает существительное или местоимение (например, "big", "red").',
    '- Грамматика: "Use an adjective" (Использовать прилагательное)\n- Описание: "Descriptive adjective" (Описательное прилагательное)\n- Урок: "Learn about adjectives" (Учить о прилагательных)',
    [
      { en: '"Beautiful" is an adjective that describes a noun.', ru: '"Красивый" — это прилагательное, которое описывает существительное.' },
      { en: 'You use adjectives to make your writing more interesting.', ru: 'Вы используете прилагательные, чтобы сделать ваше письмо интереснее.' },
      { en: 'Can you find three adjectives in this sentence?', ru: 'Ты можешь найти три прилагательных в этом предложении?' },
      { en: 'In English, the adjective usually comes before the noun.', ru: 'В английском языке прилагательное обычно стоит перед существительным.' }
    ]
),

createRichWord('a2_alps', 'Alps', '/ælps/', 'элпс', 'Альпы', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Высокая горная цепь в южной и центральной Европе.',
    '- Горы: "The Alps" (Альпы)\n- Спорт: "Ski in the Alps" (Кататься на лыжах в Альпах)\n- Туризм: "Visit the Alps" (Посетить Альпы)',
    [
      { en: 'We went skiing in the Alps last winter.', ru: 'Мы ездили кататься на лыжах в Альпы прошлой зимой.' },
      { en: 'The Alps are very beautiful when covered in snow.', ru: 'Альпы очень красивы, когда покрыты снегом.' },
      { en: 'Many people hike in the Alps during the summer.', ru: 'Многие люди ходят в походы в Альпах летом.' },
      { en: 'Mont Blanc is the highest mountain in the Alps.', ru: 'Монблан — самая высокая гора в Альпах.' }
    ]
),

createRichWord('a2_armchair', 'Armchair', '/ˈɑːmtʃeə/', 'амчеэ', 'Кресло', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Удобный стул с боковыми опорами для рук.',
    '- Мебель: "Sit in an armchair" (Сидеть в кресле)\n- Комфорт: "Comfortable armchair" (Удобное кресло)\n- Отдых: "Read in an armchair" (Читать в кресле)',
    [
      { en: 'My grandfather likes to sleep in his old armchair.', ru: 'Мой дедушка любит спать в своем старом кресле.' },
      { en: 'We bought a new red armchair for the living room.', ru: 'Мы купили новое красное кресло для гостиной.' },
      { en: 'Please sit in the armchair and relax.', ru: 'Пожалуйста, садитесь в кресло и расслабьтесь.' },
      { en: 'The cat curled up on the soft armchair.', ru: 'Кошка свернулась калачиком на мягком кресле.' }
    ]
  ),
createRichWord('a2_barbecue', 'Barbecue', '/ˈbɑːbɪkjuː/', 'барбекю', 'Барбекю / Шашлык', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Металлический каркас для приготовления пищи на открытом огне на улице; или вечеринка, где едят такую еду.',
    '- Еда: "Barbecue sauce" (Соус барбекю)\n- Событие: "Have a barbecue" (Устроить барбекю)\n- Приготовление: "On the barbecue" (На гриле)',
    [
      { en: 'We invited our neighbors to a barbecue on Saturday.', ru: 'Мы пригласили соседей на барбекю в субботу.' },
      { en: 'He cooked the sausages on the barbecue in the garden.', ru: 'Он приготовил сосиски на гриле в саду.' },
      { en: 'I love the smell of a barbecue in the summer.', ru: 'Я люблю запах барбекю летом.' },
      { en: 'Do you want chicken or beef for the barbecue?', ru: 'Ты хочешь курицу или говядину для барбекю?' }
    ]
  ),
createRichWord('a2_apricot', 'Apricot', '/ˈeɪprɪkɒt/', 'эйприкот', 'Абрикос', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Мягкий оранжевый фрукт с бархатистой кожицей и одной большой косточкой внутри.',
    '- Еда: "Dried apricot" (Курага / Сушеный абрикос)\n- Вкус: "Sweet apricot" (Сладкий абрикос)\n- Цвет: "Apricot jam" (Абрикосовый джем)',
    [
      { en: 'I like to eat fresh apricots in the summer.', ru: 'Я люблю есть свежие абрикосы летом.' },
      { en: 'She bought a jar of apricot jam for breakfast.', ru: 'Она купила банку абрикосового джема на завтрак.' },
      { en: 'The apricot tree in our garden has many fruits.', ru: 'На абрикосовом дереве в нашем саду много плодов.' },
      { en: 'Dried apricots are a very healthy snack.', ru: 'Сушеные абрикосы — очень полезная закуска.' }
    ]
),

createRichWord('a2_arithmetic', 'Arithmetic', '/əˈrɪθmətɪk/', 'эрифмэтик', 'Арифметика', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Раздел математики, изучающий числа и простые действия: сложение, вычитание и т.д.',
    '- Школа: "Do arithmetic" (Заниматься арифметикой)\n- Навык: "Simple arithmetic" (Простая арифметика)\n- Ошибка: "Arithmetic error" (Арифметическая ошибка)',
    [
      { en: 'He is very good at arithmetic and likes numbers.', ru: 'Он очень хорош в арифметике и любит цифры.' },
      { en: 'We learned simple arithmetic in primary school.', ru: 'Мы изучали простую арифметику в начальной школе.' },
      { en: 'Can you help me with this arithmetic problem?', ru: 'Можешь помочь мне с этой арифметической задачей?' },
      { en: 'Arithmetic is important for calculating prices.', ru: 'Арифметика важна для подсчета цен.' }
    ]
),

createRichWord('a2_astronaut', 'Astronaut', '/ˈæstrənɔːt/', 'эстрэнот', 'Астронавт', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Человек, обученный путешествовать в космическом корабле.',
    '- Космос: "Become an astronaut" (Стать астронавтом)\n- Одежда: "Astronaut suit" (Скафандр астронавта)\n- Работа: "Famous astronaut" (Известный астронавт)',
    [
      { en: 'Neil Armstrong was a famous American astronaut.', ru: 'Нил Армстронг был известным американским астронавтом.' },
      { en: 'The astronaut walked on the moon many years ago.', ru: 'Астронавт ходил по Луне много лет назад.' },
      { en: 'She dreams of being an astronaut and flying to Mars.', ru: 'Она мечтает стать астронавтом и полететь на Марс.' },
      { en: 'Astronauts have to wear special suits in space.', ru: 'Астронавты должны носить специальные костюмы в космосе.' }
    ]
),

createRichWord('a2_atlas', 'Atlas', '/ˈætləs/', 'этлэс', 'Атлас', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Книга, содержащая карты стран мира или определенного региона.',
    '- Книга: "World atlas" (Атлас мира)\n- Школа: "Open the atlas" (Открыть атлас)\n- Карты: "Road atlas" (Дорожный атлас)',
    [
      { en: 'We used an atlas to find the small country.', ru: 'Мы использовали атлас, чтобы найти эту маленькую страну.' },
      { en: 'He opened the atlas to look at the map of Europe.', ru: 'Он открыл атлас, чтобы посмотреть на карту Европы.' },
      { en: 'Do you have a road atlas in your car?', ru: 'У тебя есть дорожный атлас в машине?' },
      { en: 'The teacher showed us the rivers on the atlas.', ru: 'Учитель показал нам реки в атласе.' }
    ]
  ),
createRichWord('a2_bracelet', 'Bracelet', '/ˈbreɪslət/', 'брэйслэт', 'Браслет', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Украшение в виде кольца или цепочки, которое носят на запястье или руке.',
    '- Материал: "Gold bracelet" (Золотой браслет)\n- Действие: "Wear a bracelet" (Носить браслет)\n- Подарок: "Give a bracelet" (Подарить браслет)',
    [
      { en: 'She wears a silver bracelet on her left wrist.', ru: 'Она носит серебряный браслет на левом запястье.' },
      { en: 'He bought a beautiful bracelet for his wife.', ru: 'Он купил красивый браслет для своей жены.' },
      { en: 'I lost my favourite bracelet in the park.', ru: 'Я потерял свой любимый браслет в парке.' },
      { en: 'The bracelet has her name written on it.', ru: 'На браслете написано ее имя.' }
    ]
  ),
createRichWord('a2_badminton', 'Badminton', '/ˈbædmɪntən/', 'бадминтон', 'Бадминтон', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Спорт, в котором два или четыре игрока перебивают волан через высокую сетку ракетками.',
    '- Спорт: "Play badminton" (Играть в бадминтон)\n- Инвентарь: "Badminton racket" (Ракетка для бадминтона)\n- Место: "Badminton court" (Площадка для бадминтона)',
    [
      { en: 'We play badminton in the park every summer.', ru: 'Каждое лето мы играем в бадминтон в парке.' },
      { en: 'She is very good at badminton and tennis.', ru: 'Она очень хорошо играет в бадминтон и теннис.' },
      { en: 'Do you have a badminton racket I can use?', ru: 'У тебя есть ракетка для бадминтона, которой я могу воспользоваться?' },
      { en: 'Badminton is a fast and exciting game.', ru: 'Бадминтон — быстрая и увлекательная игра.' }
    ]
  ),

];
