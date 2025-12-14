
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
createRichWord('a2_bush', 'Bush', '/bʊʃ/', 'буш', 'Куст', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Растение с множеством небольших деревянистых стеблей, меньше дерева.',
    '- Сад: "Rose bush" (Розовый куст)\n- Природа: "Thick bush" (Густой кустарник)\n- Идиома: "Beat about the bush" (Ходить вокруг да около)',
    [
        { en: 'The bird was hiding in a thick bush.', ru: 'Птица пряталась в густом кустарнике.' },
        { en: 'We planted a rose bush in the garden.', ru: 'Мы посадили розовый куст в саду.' },
        { en: 'Don\'t beat about the bush, say it!', ru: 'Не ходи вокруг да около, говори!' },
        { en: 'There were berries growing on the bush.', ru: 'На кусте росли ягоды.' }
    ],
    [
        { meaning: "Wild land (Australia/Africa)", translation: "Буш (дикая местность)", example: { en: "They went camping in the bush.", ru: "Они поехали в поход в дикую местность." } }
    ]
),

createRichWord('a2_business', 'Business', '/ˈbɪznɪs/', 'бизнис', 'Бизнес / Дело', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Деятельность по покупке и продаже товаров или услуг; работа или занятие.',
    '- Работа: "Do business" (Вести бизнес)\n- Поездка: "Business trip" (Командировка)\n- Фраза: "None of your business" (Не твое дело)',
    [
        { en: 'He has his own small business in town.', ru: 'У него есть свой маленький бизнес в городе.' },
        { en: 'They are here on a business trip.', ru: 'Они здесь в командировке.' },
        { en: 'It is a pleasure to do business with you.', ru: 'Приятно иметь с вами дело.' },
        { en: 'Mind your own business, please.', ru: 'Занимайся своим делом, пожалуйста.' }
    ],
    [
        { meaning: "A specific company", translation: "Предприятие / Фирма", example: { en: "Many businesses closed down.", ru: "Многие предприятия закрылись." } },
        { meaning: "Affair / Matter", translation: "Дело / Вопрос", example: { en: "It\'s a messy business.", ru: "Это запутанное дело." } }
    ]
),

createRichWord('a2_camp', 'Camp', '/kæmp/', 'кэмп', 'Лагерь', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Место, где люди временно живут в палатках или хижинах, часто на отдыхе.',
    '- Отдых: "Summer camp" (Летний лагерь)\n- Действие: "Set up camp" (Разбить лагерь)\n- Туризм: "Camp site" (Кемпинг)',
    [
        { en: 'We stayed at a camp near the lake.', ru: 'Мы остановились в лагере у озера.' },
        { en: 'The children went to summer camp in July.', ru: 'Дети поехали в летний лагерь в июле.' },
        { en: 'They set up camp before it got dark.', ru: 'Они разбили лагерь, прежде чем стемнело.' },
        { en: 'Life in the camp was simple but fun.', ru: 'Жизнь в лагере была простой, но веселой.' }
    ],
    [
        { meaning: "To live in a tent (verb)", translation: "Жить в палатке / Кемпинговать", example: { en: "We camped in the forest.", ru: "Мы стояли лагерем в лесу." } },
        { meaning: "Effeminate / Exaggerated (Slang adj)", translation: "Манерный / Театральный", example: { en: "His style is very camp.", ru: "У него очень манерный стиль." } }
    ]
),

createRichWord('a2_card', 'Card', '/kɑːd/', 'кард', 'Карта / Открытка', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Кусок плотной бумаги или пластика, используемый для оплаты, игры или поздравлений.',
    '- Оплата: "Credit card" (Кредитная карта)\n- Праздник: "Birthday card" (Поздравительная открытка)\n- Игра: "Play cards" (Играть в карты)',
    [
        { en: 'Can I pay by credit card here?', ru: 'Могу я расплатиться здесь кредитной картой?' },
        { en: 'She sent me a nice card for my birthday.', ru: 'Она прислала мне милую открытку на день рождения.' },
        { en: 'Show me your ID card, please.', ru: 'Покажите ваше удостоверение личности, пожалуйста.' },
        { en: 'We played cards all evening yesterday.', ru: 'Вчера мы весь вечер играли в карты.' }
    ],
    [
        { meaning: "Playing card", translation: "Игральная карта", example: { en: "Pick a card from the deck.", ru: "Выберите карту из колоды." } }
    ]
),

createRichWord('a2_care', 'Care', '/keər/', 'кэа', 'Забота / Уход', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Процесс защиты кого-либо или чего-либо и обеспечения их нужд.',
    '- Фраза: "Take care" (Береги себя / Заботиться)\n- Медицина: "Medical care" (Медицинская помощь)\n- Внимание: "Handle with care" (Обращаться с осторожностью)',
    [
        { en: 'Take care of yourself while I am away.', ru: 'Береги себя, пока меня не будет.' },
        { en: 'She needs special medical care now.', ru: 'Сейчас ей нужен особый медицинский уход.' },
        { en: 'He handled the old book with great care.', ru: 'Он обращался со старой книгой с большой осторожностью.' },
        { en: 'I don\'t have a care in the world today.', ru: 'Сегодня у меня нет ни единой заботы в мире.' }
    ],
    [
        { meaning: "To feel concern / interest (verb)", translation: "Волновать / Заботиться", example: { en: "I don\'t care about money.", ru: "Меня не волнуют деньги." } },
        { meaning: "To like (verb, formal)", translation: "Хотеть / Любить", example: { en: "Would you care for some tea?", ru: "Не хотите ли чаю?" } }
    ]
),

createRichWord('a2_carry', 'Carry', '/ˈkæri/', 'кэри', 'Нести', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Держать что-то руками или на спине и перемещать это с одного места на другое.',
    '- Руки: "Carry a bag" (Нести сумку)\n- Вес: "Carry weight" (Нести вес)\n- Продолжение: "Carry on" (Продолжать)',
    [
        { en: 'Can you help me carry this heavy box?', ru: 'Можешь помочь мне донести эту тяжелую коробку?' },
        { en: 'She always carries a bottle of water.', ru: 'Она всегда носит с собой бутылку воды.' },
        { en: 'The waiter carried the plates to the table.', ru: 'Официант понес тарелки к столу.' },
        { en: 'Sound carries well over the water.', ru: 'Звук хорошо разносится над водой.' }
    ],
    [
        { meaning: "To support / sustain", translation: "Выдерживать / Нести на себе", example: { en: "The pillars carry the roof.", ru: "Колонны держат крышу." } },
        { meaning: "To have in stock (shop)", translation: "Иметь в продаже", example: { en: "Do you carry this brand?", ru: "У вас продается этот бренд?" } }
    ]
),

createRichWord('a2_case', 'Case', '/keɪs/', 'кейс', 'Случай / Дело', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Конкретная ситуация или пример происшествия; также контейнер.',
    '- Ситуация: "In that case" (В таком случае)\n- Пример: "Case of flu" (Случай гриппа)\n- Фраза: "Just in case" (На всякий случай)',
    [
        { en: 'In case of fire, use the stairs.', ru: 'В случае пожара пользуйтесь лестницей.' },
        { en: 'It is a classic case of bad management.', ru: 'Это классический случай плохого управления.' },
        { en: 'Bring an umbrella just in case it rains.', ru: 'Возьми зонт на всякий случай, если пойдет дождь.' },
        { en: 'This is not the case at all.', ru: 'Это вовсе не так (не тот случай).' }
    ],
    [
        { meaning: "Container / Suitcase", translation: "Футляр / Чемодан", example: { en: "Packing my case.", ru: "Упаковываю свой чемодан." } },
        { meaning: "Legal action", translation: "Судебное дело", example: { en: "They won the court case.", ru: "Они выиграли судебное дело." } }
    ]
),

createRichWord('a2_catch', 'Catch', '/kætʃ/', 'кэтч', 'Ловить', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Схватить что-то движущееся; успеть на транспорт.',
    '- Предмет: "Catch a ball" (Поймать мяч)\n- Транспорт: "Catch a bus" (Успеть на автобус)\n- Болезнь: "Catch a cold" (Подхватить простуду)',
    [
        { en: 'Throw the ball and I will catch it.', ru: 'Брось мяч, и я его поймаю.' },
        { en: 'We need to run to catch the train.', ru: 'Нам нужно бежать, чтобы успеть на поезд.' },
        { en: 'Did you catch any fish yesterday?', ru: 'Ты поймал рыбу вчера?' },
        { en: 'I hope I don\'t catch the flu from you.', ru: 'Надеюсь, я не заражусь от тебя гриппом.' }
    ],
    [
        { meaning: "Hidden problem (noun)", translation: "Подвох", example: { en: "What is the catch?", ru: "В чем подвох?" } },
        { meaning: "To hear / understand", translation: "Уловить / Расслышать", example: { en: "I didn\'t catch your name.", ru: "Я не расслышал ваше имя." } }
    ]
),

createRichWord('a2_centre', 'Centre', '/ˈsentər/', 'сентэр', 'Центр', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Середина чего-либо или главное место активности.',
    '- Город: "City centre" (Центр города)\n- Место: "Shopping centre" (Торговый центр)\n- Позиция: "In the centre" (В центре)',
    [
        { en: 'The hotel is in the city centre.', ru: 'Отель находится в центре города.' },
        { en: 'Draw a circle in the centre of the page.', ru: 'Нарисуй круг в центре страницы.' },
        { en: 'She likes being the centre of attention.', ru: 'Ей нравится быть в центре внимания.' },
        { en: 'We went to the sports centre to swim.', ru: 'Мы пошли в спортивный центр поплавать.' }
    ],
    [
        { meaning: "To focus (verb)", translation: "Сосредоточивать", example: { en: "The discussion centred on money.", ru: "Дискуссия сосредоточилась на деньгах." } }
    ]
),

createRichWord('a2_chance', 'Chance', '/tʃɑːns/', 'чанс', 'Шанс / Возможность', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Возможность что-то сделать или вероятность того, что что-то случится.',
    '- Вероятность: "Good chance" (Хороший шанс)\n- Риск: "Take a chance" (Рискнуть)\n- Случайность: "By chance" (Случайно)',
    [
        { en: 'Is there any chance of rain today?', ru: 'Есть ли какой-то шанс дождя сегодня?' },
        { en: 'Please give me a second chance.', ru: 'Пожалуйста, дайте мне второй шанс.' },
        { en: 'I met him by chance at the station.', ru: 'Я случайно встретил его на станции.' },
        { en: 'You have a chance to win the game.', ru: 'У тебя есть шанс выиграть игру.' }
    ],
    [
        { meaning: "Risk (verb)", translation: "Рискнуть", example: { en: "I\'ll chance it.", ru: "Я рискну." } }
    ]
),

createRichWord('a2_change', 'Change', '/tʃeɪndʒ/', 'чейндж', 'Менять / Изменять', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Сделать что-то другим или заменить одно на другое.',
    '- Одежда: "Change clothes" (Переодеться)\n- Мнение: "Change mind" (Передумать)\n- Транспорт: "Change trains" (Сделать пересадку)',
    [
        { en: 'She changed her dress for the party.', ru: 'Она сменила платье для вечеринки.' },
        { en: 'Don\'t forget to change the batteries.', ru: 'Не забудь поменять батарейки.' },
        { en: 'I need to change some money into euros.', ru: 'Мне нужно обменять немного денег на евро.' },
        { en: 'Nothing will change if you don\'t act.', ru: 'Ничего не изменится, если ты не будешь действовать.' }
    ],
    [
        { meaning: "Coins / Small money (noun)", translation: "Мелочь / Сдача", example: { en: "Keep the change.", ru: "Сдачи не надо." } },
        { meaning: "The act of becoming different (noun)", translation: "Перемена / Изменение", example: { en: "A welcome change.", ru: "Желанная перемена." } }
    ]
),

createRichWord('a2_check', 'Check', '/tʃek/', 'чек', 'Проверять', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Осматривать что-то, чтобы убедиться в правильности или безопасности.',
    '- Осмотр: "Check the oil" (Проверить масло)\n- Отель: "Check in" (Заселяться)\n- Список: "Check the list" (Свериться со списком)',
    [
        { en: 'Please check your answers before submitting.', ru: 'Пожалуйста, проверьте свои ответы перед сдачей.' },
        { en: 'I need to check if I locked the door.', ru: 'Мне нужно проверить, запер ли я дверь.' },
        { en: 'Check in at the hotel is at two pm.', ru: 'Заезд в отель в два часа дня.' },
        { en: 'Can you check the time for me?', ru: 'Можешь посмотреть время для меня?' }
    ],
    [
        { meaning: "Bill in a restaurant (noun, US)", translation: "Счет (в ресторане)", example: { en: "Can we have the check?", ru: "Можно нам счет?" } },
        { meaning: "Pattern of squares (noun)", translation: "Клетка (узор)", example: { en: "A shirt with a check pattern.", ru: "Рубашка в клетку." } },
        { meaning: "Tick mark (noun)", translation: "Галочка", example: { en: "Put a check next to the name.", ru: "Поставь галочку рядом с именем." } }
    ]
),

createRichWord('a2_chip', 'Chip', '/tʃɪp/', 'чип', 'Чип / Жареный картофель', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Тонкий кусочек чего-либо (картофеля, дерева) или электронная деталь.',
    '- Еда: "Fish and chips" (Рыба с картошкой фри)\n- Электроника: "Silicon chip" (Кремниевый чип)\n- Повреждение: "Chip in the glass" (Скол на стекле)',
    [
        { en: 'He ordered a burger and a portion of chips.', ru: 'Он заказал бургер и порцию картошки фри.' },
        { en: 'This computer chip is very powerful.', ru: 'Этот компьютерный чип очень мощный.' },
        { en: 'There is a small chip on this plate.', ru: 'На этой тарелке есть маленький скол.' },
        { en: 'Be careful not to step on the wood chips.', ru: 'Осторожно, не наступи на древесные щепки.' }
    ],
    [
        { meaning: "Gambling token", translation: "Фишка (в казино)", example: { en: "He lost all his chips.", ru: "Он проиграл все свои фишки." } },
        { meaning: "To break a small piece off (verb)", translation: "Отколоть", example: { en: "I chipped my tooth.", ru: "Я отколол зуб." } }
    ]
),

createRichWord('a2_church', 'Church', '/tʃɜːtʃ/', 'чёрч', 'Церковь', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Здание для христианских богослужений.',
    '- Место: "Go to church" (Ходить в церковь)\n- Служба: "Church service" (Церковная служба)\n- Архитектура: "Old church" (Старая церковь)',
    [
        { en: 'They go to church every Sunday morning.', ru: 'Они ходят в церковь каждое воскресное утро.' },
        { en: 'The church was built in the last century.', ru: 'Церковь была построена в прошлом веке.' },
        { en: 'We visited a beautiful old church in Rome.', ru: 'Мы посетили красивую старую церковь в Риме.' },
        { en: 'He sings in the local church choir.', ru: 'Он поет в местном церковном хоре.' }
    ],
    [
        { meaning: "The institution of religion", translation: "Церковь (как институт)", example: { en: "The Church has great influence.", ru: "Церковь имеет большое влияние." } }
    ]
),

createRichWord('a2_clear', 'Clear', '/klɪər/', 'клиэ', 'Ясный / Понятный', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Легкий для понимания, видения или слышания; прозрачный.',
    '- Погода: "Clear sky" (Ясное небо)\n- Понимание: "Is it clear?" (Это понятно?)\n- Вид: "Clear water" (Прозрачная вода)',
    [
        { en: 'The water in the lake was crystal clear.', ru: 'Вода в озере была кристально чистой.' },
        { en: 'His instructions were very clear and simple.', ru: 'Его инструкции были очень ясными и простыми.' },
        { en: 'We had a clear view of the mountains.', ru: 'У нас был ясный вид на горы.' },
        { en: 'Are you clear about what to do next?', ru: 'Тебе понятно, что делать дальше?' }
    ],
    [
        { meaning: "To remove obstruction (verb)", translation: "Очищать / Убирать", example: { en: "Clear the table.", ru: "Убери со стола." } },
        { meaning: "Free from guilt", translation: "Чистый (о совести)", example: { en: "A clear conscience.", ru: "Чистая совесть." } }
    ]
),

createRichWord('a2_climb', 'Climb', '/klaɪm/', 'клайм', 'Взбираться / Лазить', ProficiencyLevel.A2, 'verb', 'Medium', 'Neutral',
    'Подниматься вверх, часто используя руки и ноги.',
    '- Горы: "Climb a mountain" (Взбираться на гору)\n- Дерево: "Climb a tree" (Лезть на дерево)\n- Лестница: "Climb stairs" (Подниматься по лестнице)',
    [
        { en: 'It took them hours to climb the mountain.', ru: 'У них ушли часы, чтобы взобраться на гору.' },
        { en: 'The cat climbed up the tree but couldn\'t get down.', ru: 'Кошка залезла на дерево, но не могла спуститься.' },
        { en: 'We had to climb lots of stairs to the top.', ru: 'Нам пришлось подняться по множеству ступенек наверх.' },
        { en: 'Prices continue to climb this year.', ru: 'Цены продолжают ползти вверх в этом году.' }
    ],
    [
        { meaning: "An ascent (noun)", translation: "Подъем", example: { en: "A steep climb.", ru: "Крутой подъем." } }
    ]
),

createRichWord('a2_club', 'Club', '/klʌb/', 'клаб', 'Клуб', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Организация людей с общими интересами или место для развлечений.',
    '- Спорт: "Football club" (Футбольный клуб)\n- Развлечение: "Night club" (Ночной клуб)\n- Хобби: "Join a club" (Вступить в клуб)',
    [
        { en: 'He is a member of the local golf club.', ru: 'Он член местного гольф-клуба.' },
        { en: 'We went to a night club to dance.', ru: 'Мы пошли в ночной клуб потанцевать.' },
        { en: 'Which football club do you support?', ru: 'За какой футбольный клуб ты болеешь?' },
        { en: 'I joined a book club to read more.', ru: 'Я вступил в книжный клуб, чтобы больше читать.' }
    ],
    [
        { meaning: "Heavy stick / Weapon", translation: "Дубинка", example: { en: "Cavemen used clubs.", ru: "Пещерные люди использовали дубинки." } },
        { meaning: "Suit in cards (Clubs)", translation: "Трефы (масть)", example: { en: "The Ace of Clubs.", ru: "Туз треф." } }
    ]
),

createRichWord('a2_collect', 'Collect', '/kəˈlekt/', 'коллект', 'Собирать', ProficiencyLevel.A2, 'verb', 'Medium', 'Neutral',
    'Сводить вещи вместе или забирать кого-то/что-то из определенного места.',
    '- Хобби: "Collect stamps" (Собирать марки)\n- Люди: "Collect kids" (Забирать детей)\n- Деньги: "Collect money" (Собриать деньги)',
    [
        { en: 'I used to collect coins when I was young.', ru: 'В молодости я собирал монеты.' },
        { en: 'Please collect your tickets at the counter.', ru: 'Пожалуйста, заберите свои билеты на стойке.' },
        { en: 'The bus collects passengers from the hotel.', ru: 'Автобус забирает пассажиров из отеля.' },
        { en: 'We are collecting money for charity.', ru: 'Мы собираем деньги на благотворительность.' }
    ],
    [
        { meaning: "To gather thoughts/self", translation: "Собраться (с мыслями)", example: { en: "She paused to collect herself.", ru: "Она остановилась, чтобы собраться с мыслями." } }
    ]
),

createRichWord('a2_college', 'College', '/ˈkɒlɪdʒ/', 'колидж', 'Колледж', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Учебное заведение для получения высшего или профессионального образования.',
    '- Учеба: "Go to college" (Поступать/ходить в колледж)\n- Люди: "College student" (Студент колледжа)\n- Место: "Art college" (Художественный колледж)',
    [
        { en: 'She is studying history at college.', ru: 'Она изучает историю в колледже.' },
        { en: 'After school, I want to go to college.', ru: 'После школы я хочу поступить в колледж.' },
        { en: 'College life is very different from school.', ru: 'Жизнь в колледже сильно отличается от школьной.' },
        { en: 'He met his wife when they were in college.', ru: 'Он встретил свою жену, когда они учились в колледже.' }
    ],
    []
),

createRichWord('a2_company', 'Company', '/ˈkʌmpəni/', 'кампэни', 'Компания / Фирма', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Коммерческая организация или наличие людей рядом (общество).',
    '- Бизнес: "Software company" (Программная компания)\n- Общение: "Good company" (Хорошая компания/собеседник)\n- Гости: "Have company" (Принимать гостей)',
    [
        { en: 'He works for a large insurance company.', ru: 'Он работает в крупной страховой компании.' },
        { en: 'I enjoy her company very much.', ru: 'Мне очень нравится ее общество.' },
        { en: 'We are expecting company for dinner tonight.', ru: 'Мы ждем гостей на ужин сегодня вечером.' },
        { en: 'Keep me company while I wait.', ru: 'Составь мне компанию, пока я жду.' }
    ],
    [
        { meaning: "Military unit", translation: "Рота", example: { en: "A tank company.", ru: "Танковая рота." } }
    ]
),

createRichWord('a2_complete', 'Complete', '/kəmˈpliːt/', 'комплит', 'Завершать / Полный', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Закончить что-либо делать; содержащий все необходимые части.',
    '- Действие: "Complete the form" (Заполнить форму)\n- Состояние: "Complete surprise" (Полный сюрприз)\n- Работа: "Mission complete" (Миссия завершена)',
    [
        { en: 'Please complete the sentence with a word.', ru: 'Пожалуйста, дополните предложение словом.' },
        { en: 'The building work is finally complete.', ru: 'Строительные работы наконец завершены.' },
        { en: 'It came as a complete surprise to me.', ru: 'Это стало для меня полной неожиданностью.' },
        { en: 'I have the complete set of his books.', ru: 'У меня есть полный набор его книг.' }
    ],
    [
        { meaning: "To finish (verb)", translation: "Завершать", example: { en: "She completed her studies.", ru: "Она завершила свое обучение." } }
    ]
),

createRichWord('a2_conversation', 'Conversation', '/ˌkɒnvəˈseɪʃn/', 'конвесэйшн', 'Разговор', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Обмен мыслями и словами между двумя или более людьми.',
    '- Действие: "Have a conversation" (Вести разговор)\n- Телефон: "Phone conversation" (Телефонный разговор)\n- Тема: "Topic of conversation" (Тема разговора)',
    [
        { en: 'We had a long conversation about our future.', ru: 'У нас был долгий разговор о нашем будущем.' },
        { en: 'I tried to start a conversation with him.', ru: 'Я пытался завязать с ним разговор.' },
        { en: 'Their conversation was very interesting to hear.', ru: 'Их разговор было очень интересно слушать.' },
        { en: 'English conversation classes are helpful.', ru: 'Уроки разговорного английского полезны.' }
    ],
    []
  ),
createRichWord('a2_cool', 'Cool', '/kuːl/', 'кул', 'Прохладный', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Немного холодный, но приятный. В разговорной речи часто означает "крутой" или "классный".',
    '- Погода: "Cool air" (Прохладный воздух)\n- Сленг: "Cool guy" (Крутой парень)\n- Эмоции: "Keep cool" (Сохранять спокойствие)',
    [
      { en: 'It is a nice cool evening.', ru: 'Это приятный прохладный вечер.' },
      { en: 'That new car looks very cool.', ru: 'Та новая машина выглядит очень круто.' },
      { en: 'Stay cool, don\'t get angry.', ru: 'Сохраняй спокойствие, не злись.' },
      { en: 'Can I have a glass of cool water?', ru: 'Можно мне стакан прохладной воды?' }
    ],
    [
        { meaning: "Good/Fashionable (Slang)", translation: "Крутой / Классный", example: { en: "That movie was so cool.", ru: "Тот фильм был таким крутым." } },
        { meaning: "Calm/Unemotional", translation: "Хладнокровный", example: { en: "He gave a cool response.", ru: "Он дал холодный (сдержанный) ответ." } }
    ]
),

createRichWord('a2_corner', 'Corner', '/ˈkɔː.nər/', 'конэ', 'Угол', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Место, где сходятся две линии или стены. Может быть внутри комнаты или на улице.',
    '- Улица: "Street corner" (Угол улицы)\n- Комната: "In the corner" (В углу)\n- Спорт: "Corner kick" (Угловой удар)',
    [
      { en: 'The shop is on the corner of the street.', ru: 'Магазин находится на углу улицы.' },
      { en: 'He sat in the corner of the room.', ru: 'Он сидел в углу комнаты.' },
      { en: 'Be careful when you turn the corner.', ru: 'Будь осторожен, когда поворачиваешь за угол.' },
      { en: 'Write your name in the top right corner.', ru: 'Напишите свое имя в правом верхнем углу.' }
    ],
    [
        { meaning: "Difficult situation", translation: "Тупик / Загнанный в угол", example: { en: "They backed him into a corner.", ru: "Они загнали его в угол." } }
    ]
),

createRichWord('a2_cost', 'Cost', '/kɒst/', 'кост', 'Стоить', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Иметь определенную цену. Как существительное — стоимость.',
    '- Цена: "Cost a lot" (Стоить дорого)\n- Бизнес: "Total cost" (Общая стоимость)\n- Жертва: "Cost a life" (Стоить жизни)',
    [
      { en: 'How much does this shirt cost?', ru: 'Сколько стоит эта рубашка?' },
      { en: 'The cost of living is rising.', ru: 'Стоимость жизни растет.' },
      { en: 'It will cost you ten dollars.', ru: 'Это будет стоить тебе десять долларов.' },
      { en: 'Mistakes can cost time and money.', ru: 'Ошибки могут стоить времени и денег.' }
    ],
    [
        { meaning: "Price/Expense (noun)", translation: "Стоимость / Расходы", example: { en: "We need to cut costs.", ru: "Нам нужно сократить расходы." } },
        { meaning: "Effort/Loss", translation: "Цена (усилий)", example: { en: "He saved her at the cost of his life.", ru: "Он спас её ценой собственной жизни." } }
    ]
),

createRichWord('a2_could', 'Could', '/kʊd/', 'куд', 'Мог', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Прошедшее время от "can". Используется для выражения возможности в прошлом или вежливой просьбы.',
    '- Прошлое: "I could run" (Я мог бегать)\n- Просьба: "Could you help?" (Не могли бы вы помочь?)\n- Вероятность: "It could rain" (Может пойти дождь)',
    [
      { en: 'I could swim when I was five.', ru: 'Я умел плавать, когда мне было пять лет.' },
      { en: 'Could you please open the window?', ru: 'Не могли бы вы открыть окно?' },
      { en: 'We could go to the cinema tonight.', ru: 'Мы могли бы пойти в кино сегодня вечером.' },
      { en: 'I couldn\'t find my keys anywhere.', ru: 'Я нигде не мог найти свои ключи.' }
    ],
    [
        { meaning: "Possibility", translation: "Может быть (вероятность)", example: { en: "It could be true.", ru: "Это может быть правдой." } }
    ]
),

createRichWord('a2_count', 'Count', '/kaʊnt/', 'каунт', 'Считать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Называть числа по порядку или определять общее количество чего-либо.',
    '- Числа: "Count to ten" (Считать до десяти)\n- Важность: "Every vote counts" (Каждый голос важен)\n- Доверие: "Count on me" (Рассчитывать на меня)',
    [
      { en: 'Can you count from one to twenty?', ru: 'Ты можешь посчитать от одного до двадцати?' },
      { en: 'I need to count the money.', ru: 'Мне нужно пересчитать деньги.' },
      { en: 'You can always count on my help.', ru: 'Ты всегда можешь рассчитывать на мою помощь.' },
      { en: 'Does this goal count?', ru: 'Этот гол засчитывается?' }
    ],
    [
        { meaning: "Matter/Be important", translation: "Иметь значение", example: { en: "First impressions count.", ru: "Первые впечатления имеют значение." } },
        { meaning: "Nobleman (noun)", translation: "Граф", example: { en: "Count Dracula.", ru: "Граф Дракула." } }
    ]
),

createRichWord('a2_couple', 'Couple', '/ˈkʌp.əl/', 'капл', 'Пара', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Два человека или предмета. Часто означает романтическую пару или "несколько" (около двух).',
    '- Отношения: "Married couple" (Женаты пара)\n- Количество: "Couple of days" (Пара дней)\n- Связь: "Happy couple" (Счастливая пара)',
    [
      { en: 'They make a lovely couple.', ru: 'Они составляют прекрасную пару.' },
      { en: 'I saw a couple of birds on the roof.', ru: 'Я увидел пару птиц на крыше.' },
      { en: 'Can I borrow a couple of dollars?', ru: 'Могу я одолжить пару долларов?' },
      { en: 'The couple walked hand in hand.', ru: 'Пара шла, держась за руки.' }
    ],
    [
        { meaning: "A few (informal)", translation: "Несколько", example: { en: "Wait a couple minutes.", ru: "Подожди пару минут." } }
    ]
),

createRichWord('a2_course', 'Course', '/kɔːs/', 'ко:с', 'Курс', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Серия уроков, блюдо в обеде или направление движения. Очень часто в фразе "of course".',
    '- Обучение: "English course" (Курс английского)\n- Фраза: "Of course" (Конечно)\n- Еда: "Main course" (Главное блюдо)',
    [
      { en: 'Of course, I will help you.', ru: 'Конечно, я тебе помогу.' },
      { en: 'She is taking a photography course.', ru: 'Она проходит курс фотографии.' },
      { en: 'The main course was chicken with rice.', ru: 'Главным блюдом была курица с рисом.' },
      { en: 'The ship changed its course.', ru: 'Корабль изменил свой курс.' }
    ],
    [
        { meaning: "Part of a meal", translation: "Блюдо", example: { en: "A three-course meal.", ru: "Обед из трех блюд." } },
        { meaning: "Route/Direction", translation: "Курс / Путь", example: { en: "The river runs its course.", ru: "Река течет своим руслом." } }
    ]
),

createRichWord('a2_cover', 'Cover', '/ˈkʌv.ər/', 'кавэ', 'Накрывать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Помещать что-то сверху другого предмета для защиты или сокрытия. Как сущ. — обложка, крышка.',
    '- Защита: "Cover with blanket" (Накрыть одеялом)\n- Книга: "Book cover" (Обложка книги)\n- Расстояние: "Cover miles" (Покрывать мили / Проходить)',
    [
      { en: 'Cover the pot with a lid.', ru: 'Накрой кастрюлю крышкой.' },
      { en: 'Snow covered the ground.', ru: 'Снег покрыл землю.' },
      { en: 'The book has a hard cover.', ru: 'У книги твердая обложка.' },
      { en: 'She covered her face with her hands.', ru: 'Она закрыла лицо руками.' }
    ],
    [
        { meaning: "Report news", translation: "Освещать (событие)", example: { en: "The BBC covered the election.", ru: "BBC освещало выборы." } },
        { meaning: "Include/Deal with", translation: "Охватывать", example: { en: "The rules cover all situations.", ru: "Правила охватывают все ситуации." } },
        { meaning: "Song version (noun)", translation: "Кавер (песни)", example: { en: "They played a Beatles cover.", ru: "Они сыграли кавер на Битлз." } }
    ]
),

createRichWord('a2_crazy', 'Crazy', '/ˈkreɪ.zi/', 'крейзи', 'Сумасшедший', ProficiencyLevel.A2, 'adj', 'High', 'Informal',
    'Психически нездоровый или (в разговорной речи) странный, глупый или очень увлеченный чем-то.',
    '- Психика: "Go crazy" (Сойти с ума)\n- Увлечение: "Crazy about football" (Без ума от футбола)\n- Идея: "Crazy idea" (Безумная идея)',
    [
      { en: 'Are you crazy to go out in this storm?', ru: 'Ты сумасшедший, чтобы выходить в такой шторм?' },
      { en: 'My friends are crazy about this band.', ru: 'Мои друзья без ума от этой группы.' },
      { en: 'It was a crazy day at the office.', ru: 'Это был сумасшедший день в офисе.' },
      { en: 'Stop acting crazy!', ru: 'Перестань вести себя как сумасшедший!' }
    ],
    [
        { meaning: "Angry (US Slang)", translation: "Злой / Взбешенный", example: { en: "Don't get crazy with me.", ru: "Не бесись на меня." } }
    ]
),

createRichWord('a2_cross', 'Cross', '/krɒs/', 'крос', 'Пересекать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Переходить с одной стороны на другую. Как сущ. — крест. Как прил. — сердитый (брит.).',
    '- Движение: "Cross the road" (Переходить дорогу)\n- Знак: "Red cross" (Красный крест)\n- Эмоция: "Don\'t be cross" (Не сердись)',
    [
      { en: 'Be careful when you cross the street.', ru: 'Будь осторожен, когда переходишь улицу.' },
      { en: 'She wears a gold cross around her neck.', ru: 'Она носит золотой крестик на шее.' },
      { en: 'Cross your legs and sit comfortably.', ru: 'Скрести ноги и сядь удобно.' },
      { en: 'Why are you so cross with me?', ru: 'Почему ты так сердишься на меня? (брит.)' }
    ],
    [
        { meaning: "Mark with X", translation: "Вычеркнуть / Пометить крестиком", example: { en: "Cross out the wrong answer.", ru: "Вычеркни неправильный ответ." } },
        { meaning: "Angry (British)", translation: "Сердитый", example: { en: "He was cross because I was late.", ru: "Он сердился, потому что я опоздал." } }
    ]
),

createRichWord('a2_cry', 'Cry', '/kraɪ/', 'край', 'Плакать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Проливать слезы из-за боли или грусти. Также может означать "кричать".',
    '- Эмоции: "Don\'t cry" (Не плачь)\n- Звук: "Cry for help" (Кричать о помощи)\n- Ребенок: "Baby cries" (Малыш плачет)',
    [
      { en: 'The baby started to cry loudly.', ru: 'Малыш начал громко плакать.' },
      { en: 'Why is she crying over a movie?', ru: 'Почему она плачет над фильмом?' },
      { en: 'I heard someone cry out my name.', ru: 'Я слышал, как кто-то выкрикнул мое имя.' },
      { en: 'It is okay to cry when you are sad.', ru: 'Это нормально плакать, когда тебе грустно.' }
    ],
    [
        { meaning: "Shout/Call out", translation: "Кричать", example: { en: "He cried warning.", ru: "Он выкрикнул предупреждение." } }
    ]
),

createRichWord('a2_cut', 'Cut', '/kʌt/', 'кат', 'Резать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Разделять что-то острым предметом (ножом, ножницами). Также "сокращать".',
    '- Инструмент: "Cut with a knife" (Резать ножом)\n- Травма: "Cut finger" (Порезать палец)\n- Волосы: "Cut hair" (Стричь волосы)',
    [
      { en: 'I cut the cake into eight pieces.', ru: 'Я разрезал торт на восемь кусков.' },
      { en: 'Be careful not to cut yourself.', ru: 'Будь осторожен, не порежься.' },
      { en: 'I need to have my hair cut.', ru: 'Мне нужно подстричься.' },
      { en: 'The company cut the prices.', ru: 'Компания снизила цены.' }
    ],
    [
        { meaning: "Reduce", translation: "Сокращать / Урезать", example: { en: "Cut costs.", ru: "Сократить расходы." } },
        { meaning: "Stop (Director's command)", translation: "Снято / Стоп", example: { en: "Cut! That was a good scene.", ru: "Снято! Это была хорошая сцена." } }
    ]
),

createRichWord('a2_danger', 'Danger', '/ˈdeɪn.dʒər/', 'дэйнджэ', 'Опасность', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Возможность того, что случится что-то плохое, вред или смерть.',
    '- Знак: "In danger" (В опасности)\n- Предупреждение: "Danger sign" (Знак опасности)\n- Риск: "Out of danger" (Вне опасности)',
    [
      { en: 'The sign says "Danger: High Voltage".', ru: 'Знак гласит: "Опасность: Высокое напряжение".' },
      { en: 'Wild animals can be a danger to people.', ru: 'Дикие животные могут представлять опасность для людей.' },
      { en: 'Is his life in danger?', ru: 'Его жизнь в опасности?' },
      { en: 'She loves the excitement and danger.', ru: 'Она любит волнение и опасность.' }
    ],
    [
        { meaning: "Person causing risk", translation: "Угроза", example: { en: "He is a danger to society.", ru: "Он представляет угрозу для общества." } }
    ]
),

createRichWord('a2_dark', 'Dark', '/dɑːk/', 'дак', 'Темный', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Лишенный света или имеющий цвет, близкий к черному.',
    '- Свет: "Getting dark" (Темнеет)\n- Цвет: "Dark blue" (Темно-синий)\n- Страх: "Afraid of the dark" (Бояться темноты)',
    [
      { en: 'It gets dark very early in winter.', ru: 'Зимой темнеет очень рано.' },
      { en: 'She has beautiful dark hair.', ru: 'У нее красивые темные волосы.' },
      { en: 'Are you afraid of the dark?', ru: 'Ты боишься темноты?' },
      { en: 'The room was completely dark.', ru: 'Комната была совершенно темной.' }
    ],
    [
        { meaning: "Mysterious/Evil", translation: "Мрачный / Зловещий", example: { en: "A dark secret.", ru: "Мрачная тайна." } },
        { meaning: "Night time (noun)", translation: "Темнота", example: { en: "Before dark.", ru: "До темноты." } }
    ]
),

createRichWord('a2_date', 'Date', '/deɪt/', 'дейт', 'Дата', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Определенный день месяца или года. Также означает романтическую встречу (свидание) или сладкий фрукт (финик).',
    '- Календарь: "Today\'s date" (Сегодняшняя дата)\n- Любовь: "Go on a date" (Идти на свидание)\n- Еда: "Eat dates" (Есть финики)',
    [
      { en: 'What is the date today?', ru: 'Какая сегодня дата?' },
      { en: 'I have a date with Sarah tonight.', ru: 'У меня сегодня свидание с Сарой.' },
      { en: 'Write your date of birth here.', ru: 'Напишите здесь вашу дату рождения.' },
      { en: 'Dates are very sweet fruits.', ru: 'Финики — очень сладкие фрукты.' }
    ],
    [
        { meaning: "Romantic meeting", translation: "Свидание", example: { en: "How was your date?", ru: "Как прошло свидание?" } },
        { meaning: "Fruit", translation: "Финик", example: { en: "Palm dates.", ru: "Финики пальмы." } }
    ]
),

createRichWord('a2_dead', 'Dead', '/ded/', 'дэд', 'Мертвый', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Не живой; переставший существовать. Также используется в переносном смысле (усталый, сломанный).',
    '- Жизнь: "Dead body" (Мертвое тело)\n- Техника: "Phone is dead" (Телефон разрядился)\n- Тишина: "Dead silence" (Гробовая тишина)',
    [
      { en: 'The flowers are dead because I forgot water.', ru: 'Цветы завяли (мертвы), потому что я забыл про воду.' },
      { en: 'Latin is a dead language.', ru: 'Латынь — мертвый язык.' },
      { en: 'My battery is dead.', ru: 'Моя батарейка села.' },
      { en: 'He was pronounced dead at the hospital.', ru: 'В больнице констатировали его смерть.' }
    ],
    [
        { meaning: "Complete/Absolute", translation: "Полный / Абсолютный", example: { en: "Dead silence.", ru: "Мертвая (полная) тишина." } },
        { meaning: "Not working", translation: "Неработающий / Разряженный", example: { en: "The line is dead.", ru: "Линия не работает (в телефоне)." } }
    ]
),

createRichWord('a2_deal', 'Deal', '/diːl/', 'дил', 'Сделка', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Соглашение или договоренность, особенно в бизнесе. Как глагол — иметь дело, справляться.',
    '- Бизнес: "Good deal" (Выгодная сделка)\n- Проблема: "Deal with it" (Разобраться с этим)\n- Количество: "Great deal" (Много)',
    [
      { en: 'We made a deal with the supplier.', ru: 'Мы заключили сделку с поставщиком.' },
      { en: 'I have to deal with many customers.', ru: 'Мне приходится иметь дело со многими клиентами.' },
      { en: 'It\'s a deal!', ru: 'Договорились!' },
      { en: 'She has a great deal of patience.', ru: 'У нее огромное терпение (много терпения).' }
    ],
    [
        { meaning: "Handle/Manage (verb)", translation: "Справляться / Решать проблему", example: { en: "I can't deal with this stress.", ru: "Я не могу справиться с этим стрессом." } },
        { meaning: "Distribute cards", translation: "Раздавать (карты)", example: { en: "Whose turn to deal?", ru: "Чья очередь раздавать?" } }
    ]
),

createRichWord('a2_decide', 'Decide', '/dɪˈsaɪd/', 'дисайд', 'Решать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Сделать выбор после размышлений.',
    '- Выбор: "Decide to go" (Решить пойти)\n- Скорость: "Decide quickly" (Решать быстро)\n- Результат: "Can\'t decide" (Не могу решить)',
    [
      { en: 'I decided to buy the blue car.', ru: 'Я решил купить синюю машину.' },
      { en: 'Have you decided what to eat?', ru: 'Ты решил, что будешь есть?' },
      { en: 'It is hard to decide between the two.', ru: 'Трудно выбрать между двумя вариантами.' },
      { en: 'She decided against the trip.', ru: 'Она решила отказаться от поездки.' }
    ],
    [] // Clear verb mostly
),

createRichWord('a2_deep', 'Deep', '/diːp/', 'дип', 'Глубокий', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Имеющий большую глубину (расстояние сверху вниз или от края внутрь).',
    '- Вода: "Deep river" (Глубокая река)\n- Сон: "Deep sleep" (Глубокий сон)\n- Чувства: "Deep love" (Глубокая любовь)',
    [
      { en: 'The ocean is very deep here.', ru: 'Океан здесь очень глубокий.' },
      { en: 'Take a deep breath.', ru: 'Сделай глубокий вдох.' },
      { en: 'He has a deep voice.', ru: 'У него низкий (глубокий) голос.' },
      { en: 'She was in a deep sleep.', ru: 'Она спала глубоким сном.' }
    ],
    [
        { meaning: "Profound/Intellectual", translation: "Глубокомысленный", example: { en: "That's a deep question.", ru: "Это глубокий вопрос." } },
        { meaning: "Intense (Color)", translation: "Насыщенный / Темный", example: { en: "Deep red.", ru: "Темно-красный." } }
    ]
),

createRichWord('a2_depend', 'Depend', '/dɪˈpend/', 'дипэнд', 'Зависеть', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Определяться чем-то другим или нуждаться в поддержке кого-то.',
    '- Условие: "It depends" (По обстоятельствам / Зависит от...)\n- Доверие: "Depend on you" (Полагаться на тебя)\n- Связь: "Depend on weather" (Зависеть от погоды)',
    [
      { en: 'Our trip depends on the weather.', ru: 'Наша поездка зависит от погоды.' },
      { en: 'You can depend on me.', ru: 'Ты можешь на меня положиться.' },
      { en: '"Are you coming?" "It depends."', ru: '"Ты придешь?" "Смотря по обстоятельствам."' },
      { en: 'Children depend on their parents.', ru: 'Дети зависят от своих родителей.' }
    ],
    []
),

createRichWord('a2_dig', 'Dig', '/dɪɡ/', 'диг', 'Копать', ProficiencyLevel.A2, 'verb', 'Medium', 'Neutral',
    'Разрыхлять или перемещать землю инструментом или руками.',
    '- Земля: "Dig a hole" (Копать яму)\n- Сад: "Dig the garden" (Вскапывать сад)\n- Поиск: "Dig for gold" (Искать золото)',
    [
      { en: 'The dog likes to dig in the garden.', ru: 'Собака любит копать в саду.' },
      { en: 'We need to dig a deep hole.', ru: 'Нам нужно выкопать глубокую яму.' },
      { en: 'They are digging for old coins.', ru: 'Они раскапывают старинные монеты.' },
      { en: 'Digging is hard physical work.', ru: 'Копание — это тяжелый физический труд.' }
    ],
    [
        { meaning: "Like/Understand (Slang)", translation: "Тащиться / Понимать", example: { en: "I dig your style.", ru: "Я тащусь от твоего стиля." } },
        { meaning: "Poke", translation: "Тыкать", example: { en: "Dig him in the ribs.", ru: "Ткнуть его в ребро." } }
    ]
),

createRichWord('a2_discover', 'Discover', '/dɪˈskʌv.ər/', 'дискавэ', 'Обнаруживать', ProficiencyLevel.A2, 'verb', 'Medium', 'Neutral',
    'Найти информацию, место или предмет впервые или неожиданно.',
    '- Наука: "Discover a planet" (Открыть планету)\n- Факт: "Discover the truth" (Узнать правду)\n- Место: "Discover America" (Открыть Америку)',
    [
      { en: 'Columbus discovered America in 1492.', ru: 'Колумб открыл Америку в 1492 году.' },
      { en: 'She discovered a secret door in the wall.', ru: 'Она обнаружила потайную дверь в стене.' },
      { en: 'Scientists discovered a new cure.', ru: 'Ученые открыли новое лекарство.' },
      { en: 'I discovered that he was lying.', ru: 'Я выяснил, что он лгал.' }
    ],
    []
),

createRichWord('a2_double', 'Double', '/ˈdʌb.əl/', 'дабл', 'Двойной', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Состоящий из двух частей или в два раза больше обычного.',
    '- Отель: "Double room" (Двухместный номер)\n- Число: "Double glazing" (Двойной стеклопакет)\n- Действие: "Double check" (Перепроверить)',
    [
      { en: 'I would like to book a double room.', ru: 'Я хотел бы забронировать двухместный номер.' },
      { en: 'The cost is double what I expected.', ru: 'Стоимость в два раза выше, чем я ожидал.' },
      { en: 'Double click on the icon.', ru: 'Дважды кликните по иконке.' },
      { en: 'He ordered a double espresso.', ru: 'Он заказал двойной эспрессо.' }
    ],
    [
        { meaning: "Look alike person", translation: "Двойник", example: { en: "He is your double.", ru: "Он твой двойник." } }
    ]
),

createRichWord('a2_dream', 'Dream', '/driːm/', 'дрим', 'Мечта / Сон', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Образы в уме во время сна или сильное желание чего-то в будущем.',
    '- Сон: "Bad dream" (Кошмар)\n- Цель: "Dream job" (Работа мечты)\n- Действие: "Sweet dreams" (Сладких снов)',
    [
      { en: 'I had a strange dream last night.', ru: 'Прошлой ночью мне приснился странный сон.' },
      { en: 'Her dream is to become a doctor.', ru: 'Её мечта — стать врачом.' },
      { en: 'Stop dreaming and start working.', ru: 'Перестань мечтать и начни работать.' },
      { en: 'It worked like a dream.', ru: 'Это сработало идеально (как в мечте).' }
    ],
    [
        { meaning: "Imagine (verb)", translation: "Мечтать / Воображать", example: { en: "I never dreamed of this.", ru: "Я и не мечтал об этом." } }
    ]
),

createRichWord('a2_drop', 'Drop', '/drɒp/', 'дроп', 'Ронять', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Позволить чему-то упасть. Как существительное — капля.',
    '- Действие: "Drop a pen" (Уронить ручку)\n- Жидкость: "Rain drop" (Капля дождя)\n- Транспорт: "Drop off" (Высадить)',
    [
      { en: 'Be careful not to drop the glass.', ru: 'Осторожно, не урони стакан.' },
      { en: 'Temperature will drop tonight.', ru: 'Температура упадет сегодня ночью.' },
      { en: 'Just a drop of milk, please.', ru: 'Только капельку молока, пожалуйста.' },
      { en: 'Can you drop me at the station?', ru: 'Можешь подбросить (высадить) меня у станции?' }
    ],
    [
        { meaning: "Decrease (noun)", translation: "Спад / Понижение", example: { en: "A drop in prices.", ru: "Падение цен." } },
        { meaning: "Stop discussing", translation: "Оставить тему", example: { en: "Let's drop the subject.", ru: "Давай опустим эту тему." } }
    ]
),

createRichWord('a2_dry', 'Dry', '/draɪ/', 'драй', 'Сухой', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Не мокрый; без влаги или жидкости.',
    '- Погода: "Dry season" (Сухой сезон)\n- Одежда: "Dry clean" (Химчистка)\n- Тело: "Dry skin" (Сухая кожа)',
    [
      { en: 'My throat is very dry.', ru: 'У меня очень пересохло в горле.' },
      { en: 'Keep this medicine in a dry place.', ru: 'Храните это лекарство в сухом месте.' },
      { en: 'Wait until the paint is dry.', ru: 'Подождите, пока краска высохнет.' },
      { en: 'I prefer dry wine.', ru: 'Я предпочитаю сухое вино.' }
    ],
    [
        { meaning: "Boring/Unemotional", translation: "Сухой (о фактах/юморе)", example: { en: "Dry humor.", ru: "Сухой (сдержанный) юмор." } },
        { meaning: "Wipe (verb)", translation: "Вытирать", example: { en: "Dry your eyes.", ru: "Вытри глаза (слезы)." } }
    ]
),

createRichWord('a2_during', 'During', '/ˈdjʊə.rɪŋ/', 'дъюринг', 'В течение', ProficiencyLevel.A2, 'prep', 'High', 'Neutral',
    'Предлог, указывающий на то, когда происходит событие (в какой период времени).',
    '- Время: "During the day" (В течение дня)\n- Событие: "During the film" (Во время фильма)\n- Сезон: "During summer" (В течение лета)',
    [
      { en: 'Please turn off phones during the movie.', ru: 'Пожалуйста, выключите телефоны во время фильма.' },
      { en: 'It rained during the night.', ru: 'Ночью (в течение ночи) шел дождь.' },
      { en: 'We swim a lot during the summer.', ru: 'Мы много плаваем летом.' },
      { en: 'He fell asleep during the lesson.', ru: 'Он заснул во время урока.' }
    ],
    [] // Preposition only
),

createRichWord('a2_earth', 'Earth', '/ɜːθ/', 'ё:с', 'Земля', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Планета, на которой мы живем, или почва/грунт.',
    '- Планета: "Planet Earth" (Планета Земля)\n- Почва: "Soft earth" (Мягкая земля)\n- Космос: "Down to earth" (Приземленный / Реалистичный)',
    [
      { en: 'The Earth goes around the Sun.', ru: 'Земля вращается вокруг Солнца.' },
      { en: 'We need to protect the Earth.', ru: 'Нам нужно защищать Землю.' },
      { en: 'The farmer dug the earth.', ru: 'Фермер вскопал землю.' },
      { en: 'It was the happiest place on earth.', ru: 'Это было самое счастливое место на земле.' }
    ],
    [
        { meaning: "Soil/Dirt", translation: "Почва / Грунт", example: { en: "A lump of earth.", ru: "Комок земли." } },
        { meaning: "Electrical ground (British)", translation: "Заземление", example: { en: "Connect the earth wire.", ru: "Подключите провод заземления." } }
    ]
  ),
createRichWord('a2_clever', 'Clever', '/ˈklev.ər/', 'клевэ', 'Умный', ProficiencyLevel.A2, 'adj', 'Medium', 'Neutral',
    'Обладающий быстрым умом, способный легко учиться и понимать.',
    '- Человек: "Clever boy" (Умный мальчик)\n- Идея: "Clever plan" (Умный план)\n- Животное: "Clever dog" (Умная собака)',
    [
      { en: 'He is a very clever student.', ru: 'Он очень умный студент.' },
      { en: 'That was a clever idea!', ru: 'Это была умная идея!' },
      { en: 'She is clever at fixing things.', ru: 'Она ловко чинит вещи.' },
      { en: 'Don\'t try to be too clever.', ru: 'Не пытайся умничать (быть слишком умным).' }
    ],
    [
        { meaning: "Skilful/Dexterous", translation: "Ловкий / Искусный", example: { en: "He has clever hands.", ru: "У него ловкие руки." } }
    ]
),

createRichWord('a2_cloud', 'Cloud', '/klaʊd/', 'клауд', 'Облако', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Белая или серая масса в небе, состоящая из капель воды.',
    '- Погода: "Dark cloud" (Темная туча)\n- Небо: "Blue sky and clouds" (Голубое небо и облака)\n- IT: "Save to the cloud" (Сохранить в облако)',
    [
      { en: 'Look at that cloud; it looks like a sheep.', ru: 'Посмотри на то облако, оно похоже на овцу.' },
      { en: 'There is not a single cloud in the sky.', ru: 'На небе нет ни единого облачка.' },
      { en: 'Dark clouds mean rain is coming.', ru: 'Темные тучи означают, что будет дождь.' },
      { en: 'The sun went behind a cloud.', ru: 'Солнце зашло за облако.' }
    ],
    [
        { meaning: "Internet storage", translation: "Облачное хранилище", example: { en: "All my photos are in the cloud.", ru: "Все мои фото в облаке." } }
    ]
),

createRichWord('a2_coach', 'Coach', '/kəʊtʃ/', 'коуч', 'Тренер / Автобус', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Человек, тренирующий спортсменов, или комфортабельный междугородний автобус.',
    '- Спорт: "Football coach" (Футбольный тренер)\n- Транспорт: "Travel by coach" (Путешествовать на автобусе)\n- Обучение: "Life coach" (Лайф-коуч / Наставник)',
    [
      { en: 'Our coach was very happy with the game.', ru: 'Наш тренер был очень доволен игрой.' },
      { en: 'We took a coach to London.', ru: 'Мы поехали в Лондон на автобусе.' },
      { en: 'She hired a coach to help her learn tennis.', ru: 'Она наняла тренера, чтобы научиться играть в теннис.' },
      { en: 'The coach leaves at 9 AM.', ru: 'Автобус отправляется в 9 утра.' }
    ],
    []
),

createRichWord('a2_coast', 'Coast', '/kəʊst/', 'коуст', 'Побережье', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Земля вдоль моря или океана.',
    '- География: "West coast" (Западное побережье)\n- Отдых: "Trip to the coast" (Поездка на побережье)\n- Расположение: "On the coast" (На побережье)',
    [
      { en: 'We live near the coast.', ru: 'Мы живем у побережья.' },
      { en: 'They drove along the coast for hours.', ru: 'Они ехали вдоль побережья часами.' },
      { en: 'The coast is beautiful in summer.', ru: 'Побережье прекрасно летом.' },
      { en: 'Is it safe to swim on this coast?', ru: 'Безопасно ли плавать на этом побережье?' }
    ],
    [
        { meaning: "Move without power (verb)", translation: "Катиться по инерции", example: { en: "The car coasted down the hill.", ru: "Машина скатилась с холма по инерции." } }
    ]
),

createRichWord('a2_common', 'Common', '/ˈkɒm.ən/', 'комэн', 'Обычный / Общий', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Встречающийся часто или принадлежащий всем.',
    '- Частота: "Common name" (Распространенное имя)\n- Владение: "Common ground" (Общая почва / Точки соприкосновения)\n- Фраза: "Have in common" (Иметь общее)',
    [
      { en: 'Smith is a very common surname.', ru: 'Смит — очень распространенная фамилия.' },
      { en: 'We have a lot in common.', ru: 'У нас много общего.' },
      { en: 'Colds are common in winter.', ru: 'Простуды обычны зимой.' },
      { en: 'It is common knowledge.', ru: 'Это общеизвестный факт.' }
    ],
    [
        { meaning: "Vulgar/Low class", translation: "Вульгарный / Простолюдинский", example: { en: "She thought he was very common.", ru: "Она считала его очень неотесанным (вульгарным)." } }
    ]
),

createRichWord('a2_compare', 'Compare', '/kəmˈpeər/', 'кэмпеэ', 'Сравнивать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Искать сходства или различия между вещами.',
    '- Цены: "Compare prices" (Сравнивать цены)\n- Качество: "Compare with" (Сравнивать с)\n- Результат: "Cannot compare" (Не идет ни в какое сравнение)',
    [
      { en: 'Don\'t compare yourself to others.', ru: 'Не сравнивай себя с другими.' },
      { en: 'I want to compare the two cars.', ru: 'Я хочу сравнить эти две машины.' },
      { en: 'Compared to last year, prices are high.', ru: 'По сравнению с прошлым годом цены высокие.' },
      { en: 'You cannot compare apples and oranges.', ru: 'Нельзя сравнивать яблоки и апельсины (совершенно разные вещи).' }
    ],
    []
),

createRichWord('a2_competition', 'Competition', '/ˌkɒm.pəˈtɪʃ.ən/', 'компетишн', 'Соревнование', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Событие, в котором люди состязаются за победу, или соперничество в бизнесе.',
    '- Спорт: "Win a competition" (Выиграть соревнование)\n- Бизнес: "Stiff competition" (Жесткая конкуренция)\n- Участие: "Enter a competition" (Принять участие в конкурсе)',
    [
      { en: 'He won the first prize in the competition.', ru: 'Он выиграл первый приз в соревновании.' },
      { en: 'There is a lot of competition between the shops.', ru: 'Между магазинами большая конкуренция.' },
      { en: 'Are you joining the swimming competition?', ru: 'Ты участвуешь в соревновании по плаванию?' },
      { en: 'The competition was very strong.', ru: 'Конкуренция была очень сильной.' }
    ],
    []
),

createRichWord('a2_connect', 'Connect', '/kəˈnekt/', 'кэнект', 'Соединять', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Связывать две вещи или устанавливать связь (в т.ч. телефонную/интернет).',
    '- Техника: "Connect to Wi-Fi" (Подключиться к Wi-Fi)\n- Логика: "Connect ideas" (Связывать идеи)\n- Транспорт: "Connecting flight" (Стыковочный рейс)',
    [
      { en: 'Can you connect the printer to the computer?', ru: 'Ты можешь подключить принтер к компьютеру?' },
      { en: 'The two cities are connected by a railway.', ru: 'Два города соединены железной дорогой.' },
      { en: 'I cannot connect to the internet.', ru: 'Я не могу подключиться к интернету.' },
      { en: 'He connects everything to politics.', ru: 'Он всё связывает с политикой.' }
    ],
    []
),

createRichWord('a2_copy', 'Copy', '/ˈkɒp.i/', 'копи', 'Копия / Копировать', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Вещь, сделанная точно так же, как другая. Как глагол — создавать дубликат.',
    '- Документ: "Make a copy" (Сделать копию)\n- Компьютер: "Copy and paste" (Копировать и вставить)\n- Поведение: "Copy someone" (Подражать кому-то)',
    [
      { en: 'Please make a copy of this letter.', ru: 'Пожалуйста, сделайте копию этого письма.' },
      { en: 'Don\'t copy my homework!', ru: 'Не списывай (копируй) мою домашнюю работу!' },
      { en: 'I sent a copy to your email.', ru: 'Я отправил копию на твой email.' },
      { en: 'He tries to copy his brother.', ru: 'Он пытается подражать своему брату.' }
    ],
    []
),

createRichWord('a2_cream', 'Cream', '/kriːm/', 'крим', 'Сливки / Крем', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Жирная часть молока или косметическое средство для кожи.',
    '- Еда: "Ice cream" (Мороженое)\n- Кофе: "Coffee with cream" (Кофе со сливками)\n- Косметика: "Hand cream" (Крем для рук)',
    [
      { en: 'Would you like milk or cream in your coffee?', ru: 'Вы хотите молоко или сливки в кофе?' },
      { en: 'Put some sun cream on your back.', ru: 'Нанеси солнцезащитный крем на спину.' },
      { en: 'The soup is made with heavy cream.', ru: 'Суп сделан с жирными сливками.' },
      { en: 'I love strawberries and cream.', ru: 'Я обожаю клубнику со сливками.' }
    ],
    [
        { meaning: "Best part", translation: "Сливки (лучшая часть)", example: { en: "Cream of society.", ru: "Сливки общества." } }
    ]
),

createRichWord('a2_create', 'Create', '/kriˈeɪt/', 'криейт', 'Создавать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Делать что-то новое, чего раньше не существовало.',
    '- Искусство: "Create a masterpiece" (Создать шедевр)\n- Аккаунт: "Create a password" (Создать пароль)\n- Проблема: "Create trouble" (Создавать проблемы)',
    [
      { en: 'God created the world.', ru: 'Бог создал мир.' },
      { en: 'The new factory will create jobs.', ru: 'Новый завод создаст рабочие места.' },
      { en: 'You need to create a new file.', ru: 'Тебе нужно создать новый файл.' },
      { en: 'He created a beautiful garden.', ru: 'Он создал прекрасный сад.' }
    ],
    []
),

createRichWord('a2_crowd', 'Crowd', '/kraʊd/', 'крауд', 'Толпа', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Большая группа людей в одном месте.',
    '- Люди: "Big crowd" (Большая толпа)\n- Место: "Lost in the crowd" (Потерялся в толпе)\n- Характеристика: "Noisy crowd" (Шумная толпа)',
    [
      { en: 'A large crowd gathered outside.', ru: 'Снаружи собралась большая толпа.' },
      { en: 'I don\'t like crowds.', ru: 'Я не люблю толпы (скопления людей).' },
      { en: 'The crowd cheered for the band.', ru: 'Толпа приветствовала группу.' },
      { en: 'He pushed his way through the crowd.', ru: 'Он протолкался сквозь толпу.' }
    ],
    [
        { meaning: "Fit too many (verb)", translation: "Толпиться / Набиваться", example: { en: "Don't crowd me.", ru: "Не наседай на меня (не тесни)." } }
    ]
),

createRichWord('a2_culture', 'Culture', '/ˈkʌl.tʃər/', 'калчэ', 'Культура', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Обычаи, искусство и социальные институты определенной группы людей.',
    '- Общество: "Western culture" (Западная культура)\n- Искусство: "Pop culture" (Поп-культура)\n- Различия: "Different cultures" (Разные культуры)',
    [
      { en: 'I love learning about different cultures.', ru: 'Я люблю узнавать о разных культурах.' },
      { en: 'Music is a big part of our culture.', ru: 'Музыка — большая часть нашей культуры.' },
      { en: 'They have a very ancient culture.', ru: 'У них очень древняя культура.' },
      { en: 'Food is important in Italian culture.', ru: 'Еда важна в итальянской культуре.' }
    ],
    []
),

createRichWord('a2_customer', 'Customer', '/ˈkʌs.tə.mər/', 'кастэмэ', 'Клиент / Покупатель', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Человек, который покупает товары или услуги.',
    '- Бизнес: "Regular customer" (Постоянный клиент)\n- Сервис: "Customer service" (Служба поддержки)\n- Мнение: "Customer is always right" (Клиент всегда прав)',
    [
      { en: 'The shop was full of customers.', ru: 'Магазин был полон покупателей.' },
      { en: 'He is a very difficult customer.', ru: 'Он очень сложный клиент.' },
      { en: 'We need to attract new customers.', ru: 'Нам нужно привлечь новых клиентов.' },
      { en: 'Good customer service is important.', ru: 'Хорошее обслуживание клиентов важно.' }
    ],
    []
  ),
createRichWord('a2_climate', 'Climate', '/ˈklaɪ.mət/', 'клаймэт', 'Климат', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Обычные погодные условия в определенной местности. Также атмосфера в обществе.',
    '- Погода: "Warm climate" (Теплый климат)\n- Экология: "Climate change" (Изменение климата)\n- Обстановка: "Political climate" (Политический климат)',
    [
      { en: 'The climate in Spain is very warm.', ru: 'Климат в Испании очень теплый.' },
      { en: 'We need to stop climate change.', ru: 'Нам нужно остановить изменение климата.' },
      { en: 'These plants like a dry climate.', ru: 'Эти растения любят сухой климат.' },
      { en: 'The economic climate is getting better.', ru: 'Экономический климат улучшается.' }
    ],
    []
),

createRichWord('a2_clinic', 'Clinic', '/ˈklɪn.ɪk/', 'клиник', 'Клиника', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Медицинское учреждение, где врачи принимают пациентов (обычно без госпитализации).',
    '- Здоровье: "Private clinic" (Частная клиника)\n- Визит: "Go to the clinic" (Идти в клинику)\n- Специализация: "Dental clinic" (Стоматологическая клиника)',
    [
      { en: 'He went to the clinic for a check-up.', ru: 'Он пошел в клинику на осмотр.' },
      { en: 'The clinic opens at 8 AM.', ru: 'Клиника открывается в 8 утра.' },
      { en: 'There is a specialized eye clinic nearby.', ru: 'По близости есть специализированная глазная клиника.' },
      { en: 'Doctors in this clinic are very good.', ru: 'Врачи в этой клинике очень хорошие.' }
    ],
    []
),

createRichWord('a2_code', 'Code', '/kəʊd/', 'коуд', 'Код', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Система знаков для секретных сообщений или программирования. Также свод правил.',
    '- IT: "Write code" (Писать код)\n- Секрет: "Break the code" (Взломать шифр)\n- Правила: "Dress code" (Дресс-код)',
    [
      { en: 'Enter the access code to open the door.', ru: 'Введите код доступа, чтобы открыть дверь.' },
      { en: 'He is learning to write computer code.', ru: 'Он учится писать компьютерный код.' },
      { en: 'Please respect the dress code.', ru: 'Пожалуйста, соблюдайте дресс-код.' },
      { en: 'The message was written in code.', ru: 'Сообщение было написано шифром.' }
    ],
    [
        { meaning: "Area code (phone)", translation: "Код региона", example: { en: "What is the area code?", ru: "Какой код региона?" } }
    ]
),

createRichWord('a2_colleague', 'Colleague', '/ˈkɒl.iːɡ/', 'колиг', 'Коллега', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Человек, с которым вы работаете вместе.',
    '- Работа: "Work colleagues" (Коллеги по работе)\n- Отношения: "Like my colleagues" (Любить своих коллег)\n- Помощь: "Ask a colleague" (Спросить коллегу)',
    [
      { en: 'I am going to lunch with my colleagues.', ru: 'Я иду на обед со своими коллегами.' },
      { en: 'She is a very helpful colleague.', ru: 'Она очень отзывчивая коллега.' },
      { en: 'My colleagues gave me a birthday present.', ru: 'Мои коллеги подарили мне подарок на день рождения.' },
      { en: 'He discussed the plan with a colleague.', ru: 'Он обсудил план с коллегой.' }
    ],
    []
),

createRichWord('a2_concert', 'Concert', '/ˈkɒn.sət/', 'консэт', 'Концерт', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Публичное выступление музыкантов или певцов.',
    '- Музыка: "Rock concert" (Рок-концерт)\n- Билеты: "Concert tickets" (Билеты на концерт)\n- Место: "Concert hall" (Концертный зал)',
    [
      { en: 'We are going to a pop concert tonight.', ru: 'Мы идем на поп-концерт сегодня вечером.' },
      { en: 'The concert starts at 7 o\'clock.', ru: 'Концерт начинается в 7 часов.' },
      { en: 'Tickets for the concert are sold out.', ru: 'Билеты на концерт распроданы.' },
      { en: 'She played the piano at the school concert.', ru: 'Она играла на пианино на школьном концерте.' }
    ],
    []
  ),
createRichWord('a2_continent', 'Continent', '/ˈkɒn.tɪ.nənt/', 'континент', 'Континент', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Один из семи основных массивов суши на Земле (например, Африка, Азия).',
    '- География: "African continent" (Африканский континент)\n- Путешествие: "Cross a continent" (Пересечь континент)\n- Европа: "On the Continent" (В континентальной Европе - брит.)',
    [
      { en: 'Asia is the largest continent in the world.', ru: 'Азия — самый большой континент в мире.' },
      { en: 'Antarctica is a very cold continent.', ru: 'Антарктида — очень холодный континент.' },
      { en: 'There are seven continents on Earth.', ru: 'На Земле семь континентов.' },
      { en: 'They traveled across the continent by train.', ru: 'Они пересекли континент на поезде.' }
    ],
    []
),

createRichWord('a2_curtain', 'Curtain', '/ˈkɜː.tən/', 'кё:тэн', 'Занавеска / Штора', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Кусок ткани, висящий на окне или в театре, чтобы закрывать свет или сцену.',
    '- Дом: "Draw the curtains" (Задернуть шторы)\n- Театр: "Stage curtain" (Сценический занавес)\n- Материал: "Shower curtain" (Шторка для душа)',
    [
      { en: 'Please open the curtains to let light in.', ru: 'Пожалуйста, открой шторы, чтобы впустить свет.' },
      { en: 'She bought new red curtains for the bedroom.', ru: 'Она купила новые красные шторы для спальни.' },
      { en: 'The play ended and the curtain fell.', ru: 'Пьеса закончилась, и занавес опустился.' },
      { en: 'He hid behind the curtain.', ru: 'Он спрятался за шторой.' }
    ],
    []
),

createRichWord('a2_cycle', 'Cycle', '/ˈsaɪ.kəl/', 'сайкл', 'Цикл / Велосипед', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Серия событий, которые повторяются, или (как глагол) езда на велосипеде.',
    '- Природа: "Life cycle" (Жизненный цикл)\n- Спорт: "Go cycling" (Кататься на велосипеде)\n- Процесс: "Cycle of seasons" (Цикл времен года)',
    [
      { en: 'The water cycle is important for nature.', ru: 'Круговорот воды важен для природы.' },
      { en: 'He cycles to work every day.', ru: 'Он ездит на работу на велосипеде каждый день.' },
      { en: 'We need to break the cycle of violence.', ru: 'Нам нужно разорвать круг насилия.' },
      { en: 'Washing machines have different cycles.', ru: 'У стиральных машин есть разные циклы.' }
    ],
    []
  ),
createRichWord('a2_butterfly', 'Butterfly', '/ˈbʌt.ə.flaɪ/', 'батэфлай', 'Бабочка', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Летающее насекомое с большими красивыми крыльями.',
    '- Природа: "Colorful butterfly" (Разноцветная бабочка)\n- Спорт: "Butterfly stroke" (Стиль баттерфляй)\n- Идиома: "Butterflies in stomach" (Бабочки в животе / Волнение)',
    [
      { en: 'A blue butterfly sat on the flower.', ru: 'Голубая бабочка села на цветок.' },
      { en: 'Look at the beautiful wings of that butterfly.', ru: 'Посмотри на красивые крылья той бабочки.' },
      { en: 'He can swim the butterfly.', ru: 'Он умеет плавать баттерфляем.' },
      { en: 'I have butterflies in my stomach before the test.', ru: 'У меня бабочки в животе (я волнуюсь) перед тестом.' }
    ],
    []
),

createRichWord('a2_calendar', 'Calendar', '/ˈkæl.ɪn.də/', 'кэлиндэ', 'Календарь', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Система отсчета дней или бумажная таблица с датами года.',
    '- Время: "Wall calendar" (Настенный календарь)\n- Планирование: "Mark the calendar" (Отметить в календаре)\n- Год: "Calendar year" (Календарный год)',
    [
      { en: 'I bought a new calendar for the kitchen.', ru: 'Я купил новый календарь для кухни.' },
      { en: 'Check your calendar for next week.', ru: 'Проверь свой календарь на следующую неделю.' },
      { en: 'Christmas is marked on my calendar.', ru: 'Рождество отмечено в моем календаре.' },
      { en: 'The school calendar is full of events.', ru: 'Школьный календарь полон событий.' }
    ],
    []
),

createRichWord('a2_cartoon', 'Cartoon', '/kɑːˈtuːn/', 'катун', 'Мультфильм', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Фильм, созданный с помощью рисунков или компьютерной графики. Также смешной рисунок в газете.',
    '- ТВ: "Watch cartoons" (Смотреть мультики)\n- Газета: "Political cartoon" (Политическая карикатура)\n- Герой: "Cartoon character" (Мультяшный персонаж)',
    [
      { en: 'Children love watching cartoons on Saturday mornings.', ru: 'Дети любят смотреть мультики по утрам в субботу.' },
      { en: 'Mickey Mouse is a famous cartoon character.', ru: 'Микки Маус — известный мультяшный персонаж.' },
      { en: 'He drew a funny cartoon of his teacher.', ru: 'Он нарисовал смешную карикатуру на своего учителя.' },
      { en: 'This cartoon is very popular right now.', ru: 'Этот мультфильм сейчас очень популярен.' }
    ],
    []
),

createRichWord('a2_chef', 'Chef', '/ʃef/', 'шеф', 'Шеф-повар', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Профессиональный главный повар в ресторане или отеле.',
    '- Работа: "Head chef" (Шеф-повар)\n- Навык: "Talented chef" (Талантливый повар)\n- Униформа: "Chef\'s hat" (Поварской колпак)',
    [
      { en: 'The chef prepared a special meal for us.', ru: 'Шеф-повар приготовил для нас особенное блюдо.' },
      { en: 'He wants to become a famous chef.', ru: 'Он хочет стать известным шеф-поваром.' },
      { en: 'My uncle is a chef in an Italian restaurant.', ru: 'Мой дядя — шеф-повар в итальянском ресторане.' },
      { en: 'Compliments to the chef!', ru: 'Мои комплименты шеф-повару!' }
    ],
    []
),

createRichWord('a2_click', 'Click', '/klɪk/', 'клик', 'Кликать / Щелчок', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Нажимать кнопку мыши или издавать короткий резкий звук.',
    '- Компьютер: "Click the link" (Кликнуть по ссылке)\n- Звук: "Click your fingers" (Щелкать пальцами)\n- Фото: "Camera click" (Щелчок камеры)',
    [
      { en: 'Click on the icon to open the program.', ru: 'Кликни по иконке, чтобы открыть программу.' },
      { en: 'I heard the door click shut.', ru: 'Я услышал, как дверь захлопнулась со щелчком.' },
      { en: 'Double click to open the file.', ru: 'Дважды кликните, чтобы открыть файл.' },
      { en: 'He clicked his pen nervously.', ru: 'Он нервно щелкал ручкой.' }
    ],
    [
        { meaning: "Become clear/Understood (Informal)", translation: "Доходить / Становиться понятным", example: { en: "Suddenly it all clicked.", ru: "Вдруг всё стало понятно (пазл сложился)." } },
        { meaning: "Get along well (Informal)", translation: "Ладить / Найти общий язык", example: { en: "We clicked immediately.", ru: "Мы сразу нашли общий язык." } }
    ]
  ),
createRichWord('a2_corn', 'Corn', '/kɔːn/', 'корн', 'Кукуруза', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Злаковое растение с желтыми зернами, растущими на початках.',
    '- Еда: "Corn on the cob" (Кукуруза в початках)\n- Продукт: "Popcorn" (Попкорн)\n- Хлопья: "Corn flakes" (Кукурузные хлопья)',
    [
      { en: 'We grow sweet corn in our garden.', ru: 'Мы выращиваем сладкую кукурузу в нашем саду.' },
      { en: 'Chickens love to eat corn.', ru: 'Куры любят клевать кукурузу.' },
      { en: 'He ate corn on the cob for dinner.', ru: 'Он ел кукурузу в початке на ужин.' },
      { en: 'Is this bread made of corn flour?', ru: 'Этот хлеб сделан из кукурузной муки?' }
    ],
    [
        { meaning: "Painful area on foot", translation: "Мозоль (на ноге)", example: { en: "A painful corn on his toe.", ru: "Болезненная мозоль на его пальце." } }
    ]
  ),
createRichWord('a2_cereal', 'Cereal', '/ˈsɪəriəl/', 'сириэл', 'Хлопья / Злаки', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Еда, приготовленная из зерна, которую обычно едят на завтрак с молоком; растения, дающие зерно.',
    '- Завтрак: "Bowl of cereal" (Миска хлопьев)\n- Питание: "Breakfast cereal" (Сухие завтраки)\n- Сельское хозяйство: "Cereal crops" (Зерновые культуры)',
    [
        { en: 'I usually eat cereal with cold milk for breakfast.', ru: 'Я обычно ем хлопья с холодным молоком на завтрак.' },
        { en: 'This box of cereal contains a lot of sugar.', ru: 'В этой коробке хлопьев содержится много сахара.' },
        { en: 'Wheat and rice are common types of cereal.', ru: 'Пшеница и рис — распространенные виды злаков.' },
        { en: 'Do you want some fruit in your cereal?', ru: 'Ты хочешь добавить фрукты в свои хлопья?' }
    ],
    [
        { meaning: "Grain plant", translation: "Злаковое растение", example: { en: "Farmers grow cereal in this field.", ru: "Фермеры выращивают зерновые на этом поле." } }
    ]
),

createRichWord('a2_chemist', 'Chemist', '/ˈkemɪst/', 'кемист', 'Аптекарь / Химик', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Квалифицированный специалист, который готовит и продает лекарства (брит.); ученый, изучающий химию.',
    '- Покупки: "Go to the chemist\'s" (Идти в аптеку)\n- Профессия: "Research chemist" (Химик-исследователь)\n- Наука: "Work as a chemist" (Работать химиком)',
    [
        { en: 'I need to go to the chemist to buy some medicine.', ru: 'Мне нужно пойти в аптеку, чтобы купить лекарство.' },
        { en: 'The chemist gave me advice about my cough.', ru: 'Аптекарь дал мне совет по поводу моего кашля.' },
        { en: 'My sister is studying to become a chemist.', ru: 'Моя сестра учится, чтобы стать химиком.' },
        { en: 'Is there a chemist near the hotel?', ru: 'Есть ли поблизости от отеля аптека?' }
    ],
    [
        { meaning: "Pharmacy (Shop)", translation: "Аптека (брит.)", example: { en: "The chemist's is closed on Sundays.", ru: "Аптека закрыта по воскресеньям." } }
    ]
),

createRichWord('a2_cherry', 'Cherry', '/ˈtʃeri/', 'чери', 'Вишня / Черешня', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Маленький мягкий круглый фрукт красного или черного цвета с косточкой внутри.',
    '- Еда: "Cherry pie" (Вишневый пирог)\n- Цвет: "Dark cherry" (Темно-вишневый)\n- Сад: "Cherry tree" (Вишневое дерево)',
    [
        { en: 'There is a large cherry tree in our garden.', ru: 'В нашем саду есть большое вишневое дерево.' },
        { en: 'I love the taste of cherry ice cream.', ru: 'Я обожаю вкус вишневого мороженого.' },
        { en: 'She put a cherry on top of the cake.', ru: 'Она положила вишенку на верхушку торта.' },
        { en: 'Be careful not to swallow the cherry stone.', ru: 'Будь осторожен, не проглоти вишневую косточку.' }
    ],
    [
        { meaning: "Wood", translation: "Вишневое дерево (древесина)", example: { en: "The table is made of solid cherry.", ru: "Стол сделан из цельной вишни." } }
    ]
),

createRichWord('a2_circus', 'Circus', '/ˈsɜːkəs/', 'сёкэс', 'Цирк', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Шоу, которое путешествует с места на место, с клоунами, акробатами и иногда животными.',
    '- Развлечение: "Go to the circus" (Пойти в цирк)\n- Выступление: "Circus performer" (Цирковой артист)\n- Идиома: "It was a circus" (Это был балаган/цирк)',
    [
        { en: 'The children were excited to visit the circus.', ru: 'Дети были в восторге от посещения цирка.' },
        { en: 'We saw acrobats and clowns at the circus yesterday.', ru: 'Вчера мы видели в цирке акробатов и клоунов.' },
        { en: 'The circus tent was set up in the park.', ru: 'Цирковой шатер был установлен в парке.' },
        { en: 'Life in a traveling circus is very interesting.', ru: 'Жизнь в бродячем цирке очень интересна.' }
    ],
    [
        { meaning: "Chaotic situation", translation: "Балаган (перен.)", example: { en: "The meeting turned into a circus.", ru: "Собрание превратилось в балаган." } }
    ]
),

createRichWord('a2_clown', 'Clown', '/klaʊn/', 'клаун', 'Клоун', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Артист в цирке, который носит смешную одежду, имеет раскрашенное лицо и смешит людей.',
    '- Цирк: "Funny clown" (Смешной клоун)\n- Поведение: "Stop acting like a clown" (Перестань паясничать)\n- Эмоции: "Scary clown" (Страшный клоун)',
    [
        { en: 'The clown made all the children laugh loud.', ru: 'Клоун заставил всех детей громко смеяться.' },
        { en: 'He painted his face to look like a clown.', ru: 'Он разрисовал лицо, чтобы быть похожим на клоуна.' },
        { en: 'Don\'t be such a clown in the classroom.', ru: 'Не будь таким клоуном в классе.' },
        { en: 'Some people are afraid of clowns.', ru: 'Некоторые люди боятся клоунов.' }
    ],
    [
        { meaning: "Foolish person", translation: "Дурак / Паяц", example: { en: "That clown ruined our project.", ru: "Этот придурок испортил наш проект." } }
    ]
),

createRichWord('a2_comb', 'Comb', '/kəʊm/', 'коум', 'Расческа / Расчесывать', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Предмет с рядом зубцов, используемый для приведения в порядок волос; действие по расчесыванию.',
    '- Гигиена: "Comb your hair" (Расчеши волосы)\n- Предмет: "Plastic comb" (Пластиковая расческа)\n- Поиск: "Comb the area" (Прочесывать местность)',
    [
        { en: 'I need to comb my hair before we go out.', ru: 'Мне нужно расчесать волосы перед выходом.' },
        { en: 'She bought a new comb at the supermarket.', ru: 'Она купила новую расческу в супермаркете.' },
        { en: 'He keeps a small comb in his pocket.', ru: 'Он держит маленькую расческу в кармане.' },
        { en: 'Did you comb the dog\'s fur today?', ru: 'Ты расчесал сегодня шерсть собаки?' }
    ],
    [
        { meaning: "Search thoroughly", translation: "Прочесывать (искать)", example: { en: "Police combed the woods for clues.", ru: "Полиция прочесала лес в поисках улик." } },
        { meaning: "Crest (bird)", translation: "Гребешок (у птиц)", example: { en: "The rooster has a red comb.", ru: "У петуха красный гребешок." } }
    ]
  ),
createRichWord('a2_cowboy', 'Cowboy', '/ˈkaʊbɔɪ/', 'каубой', 'Ковбой', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Человек (обычно в западной части США), чья работа заключается в уходе за коровами и который ездит на лошади.',
    '- Фильмы: "Cowboy hat" (Ковбойская шляпа)\n- Одежда: "Cowboy boots" (Ковбойские сапоги)\n- Кино: "Cowboy movie" (Вестерн)',
    [
        { en: 'The cowboy rode his horse across the field.', ru: 'Ковбой ехал на своей лошади через поле.' },
        { en: 'He wears a big hat like a real cowboy.', ru: 'Он носит большую шляпу, как настоящий ковбой.' },
        { en: 'Boys often play cowboys and Indians.', ru: 'Мальчики часто играют в ковбоев и индейцев.' },
        { en: 'Being a cowboy is hard work in the summer.', ru: 'Быть ковбоем — тяжелая работа летом.' }
    ],
    [
        { meaning: "Dishonest worker", translation: "Недобросовестный работник (халтурщик)", example: { en: "Don't hire those cowboys to fix your roof.", ru: "Не нанимай этих халтурщиков чинить крышу." } }
    ]
),

createRichWord('a2_crab', 'Crab', '/kræb/', 'крэб', 'Краб', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Морское животное с пятью парами ног и твердым панцирем; мясо этого животного.',
    '- Еда: "Crab salad" (Крабовый салат)\n- Природа: "Catch a crab" (Поймать краба)\n- Тело: "Crab claws" (Клешни краба)',
    [
        { en: 'We saw a small crab walking on the sand.', ru: 'Мы видели маленького краба, гуляющего по песку.' },
        { en: 'I like to eat crab cakes for dinner.', ru: 'Я люблю есть крабовые котлеты на ужин.' },
        { en: 'The crab hid under a rock in the water.', ru: 'Краб спрятался под камнем в воде.' },
        { en: 'Be careful, the crab might pinch your finger.', ru: 'Осторожно, краб может ущипнуть тебя за палец.' }
    ],
    [
        { meaning: "Grumpy person", translation: "Ворчун", example: { en: "Don't be such a crab!", ru: "Не будь таким ворчуном!" } }
    ]
),

createRichWord('a2_cupboard', 'Cupboard', '/ˈkʌbəd/', 'кабэд', 'Шкаф (для посуды/еды)', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Предмет мебели с дверцами и полками, используемый для хранения еды, посуды или одежды.',
    '- Кухня: "Kitchen cupboard" (Кухонный шкаф)\n- Хранение: "Put in the cupboard" (Положить в шкаф)\n- Состояние: "Bare cupboard" (Пустой шкаф)',
    [
        { en: 'The plates are in the top cupboard.', ru: 'Тарелки находятся в верхнем шкафу.' },
        { en: 'Please put the cups back in the cupboard.', ru: 'Пожалуйста, поставь чашки обратно в шкаф.' },
        { en: 'There is no food left in the cupboard.', ru: 'В шкафу не осталось еды.' },
        { en: 'She opened the cupboard to get some sugar.', ru: 'Она открыла шкафчик, чтобы достать немного сахара.' }
    ],
    []
),

createRichWord('a2_dentist', 'Dentist', '/ˈdentɪst/', 'дэнтист', 'Стоматолог', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Врач, который лечит зубы людей.',
    '- Визит: "Go to the dentist" (Идти к стоматологу)\n- Запись: "Dentist appointment" (Запись к стоматологу)\n- Страх: "Afraid of the dentist" (Бояться стоматолога)',
    [
        { en: 'I have an appointment with the dentist today.', ru: 'У меня сегодня прием у стоматолога.' },
        { en: 'The dentist told me to brush my teeth more often.', ru: 'Стоматолог сказал мне чистить зубы чаще.' },
        { en: 'Are you afraid of visiting the dentist?', ru: 'Ты боишься ходить к стоматологу?' },
        { en: 'The dentist fixed my broken tooth quickly.', ru: 'Стоматолог быстро починил мой сломанный зуб.' }
    ],
    []
),

createRichWord('a2_dessert', 'Dessert', '/dɪˈzɜːt/', 'дизёт', 'Десерт', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Сладкая еда, которую едят в конце приема пищи (торт, мороженое, фрукты).',
    '- Меню: "Dessert menu" (Десертное меню)\n- Выбор: "For dessert" (На десерт)\n- Вкус: "Sweet dessert" (Сладкий десерт)',
    [
        { en: 'We had chocolate cake for dessert.', ru: 'На десерт у нас был шоколадный торт.' },
        { en: 'Would you like to see the dessert menu?', ru: 'Хотите посмотреть десертное меню?' },
        { en: 'Ice cream is my favourite dessert.', ru: 'Мороженое — мой любимый десерт.' },
        { en: 'She made a delicious dessert with apples.', ru: 'Она приготовила вкусный десерт с яблоками.' }
    ],
    []
),

createRichWord('a2_dinosaur', 'Dinosaur', '/ˈdaɪnəsɔː(r)/', 'дайнэсо', 'Динозавр', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Тип рептилий, живших миллионы лет назад, которые сейчас вымерли.',
    '- Музей: "Dinosaur bones" (Кости динозавра)\n- История: "Age of dinosaurs" (Эпоха динозавров)\n- Игрушка: "Toy dinosaur" (Игрушечный динозавр)',
    [
        { en: 'The museum has a huge skeleton of a dinosaur.', ru: 'В музее есть огромный скелет динозавра.' },
        { en: 'Children love reading books about dinosaurs.', ru: 'Дети обожают читать книги про динозавров.' },
        { en: 'T-Rex was a very dangerous dinosaur.', ru: 'Ти-Рекс был очень опасным динозавром.' },
        { en: 'Dinosaurs lived on Earth a long time ago.', ru: 'Динозавры жили на Земле очень давно.' }
    ],
    [
        { meaning: "Old-fashioned person/thing", translation: "Ископаемое (устар. вещь/человек)", example: { en: "This computer is a dinosaur.", ru: "Этот компьютер — динозавр (очень старый)." } }
    ]
  ),
createRichWord('a2_cabbage', 'Cabbage', '/ˈkæbɪdʒ/', 'кэбидж', 'Капуста', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Крупный круглый овощ с толстыми зелеными, белыми или фиолетовыми листьями.',
    '- Еда: "Cabbage soup" (Щи / Капустный суп)\n- Огород: "Grow cabbage" (Выращивать капусту)\n- Вид: "Red cabbage" (Краснокочанная капуста)',
    [
        { en: 'We added some chopped cabbage to the salad.', ru: 'Мы добавили нарезанную капусту в салат.' },
        { en: 'Rabbits love to eat fresh cabbage leaves.', ru: 'Кролики обожают есть свежие капустные листья.' },
        { en: 'My grandmother makes delicious cabbage soup.', ru: 'Моя бабушка готовит вкусный капустный суп.' },
        { en: 'You can buy a head of cabbage at the market.', ru: 'Вы можете купить кочан капусты на рынке.' }
    ],
    [
        { meaning: "Slang (Offensive)", translation: "Овощ (о человеке)", example: { en: "He became a cabbage after the accident.", ru: "Он стал овощем после аварии." } }
    ]
),

createRichWord('a2_camel', 'Camel', '/ˈkæml/', 'кэмл', 'Верблюд', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Крупное животное с длинной шеей и одним или двумя горбами, живущее в пустыне.',
    '- Животное: "Ride a camel" (Ехать на верблюде)\n- Тело: "Camel\'s hump" (Горб верблюда)\n- Цвет: "Camel coat" (Пальто верблюжьего цвета)',
    [
        { en: 'The camel can travel for days without water.', ru: 'Верблюд может путешествовать днями без воды.' },
        { en: 'Tourists like to ride camels in Egypt.', ru: 'Туристы любят кататься на верблюдах в Египте.' },
        { en: 'A camel has wide feet to walk on sand.', ru: 'У верблюда широкие ступни, чтобы ходить по песку.' },
        { en: 'She bought a warm coat made of camel hair.', ru: 'Она купила теплое пальто из верблюжьей шерсти.' }
    ],
    []
),

createRichWord('a2_caravan', 'Caravan', '/ˈkærəvæn/', 'кэрэвэн', 'Дом на колесах / Караван', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Транспортное средство, в котором можно жить и которое тянет машина (брит.); группа людей, путешествующих вместе.',
    '- Отдых: "Stay in a caravan" (Жить в доме на колесах)\n- Путешествие: "Camel caravan" (Караван верблюдов)\n- Транспорт: "Towing a caravan" (Буксировка трейлера)',
    [
        { en: 'We spent our summer holiday in a caravan by the sea.', ru: 'Мы провели летний отпуск в доме на колесах у моря.' },
        { en: 'The car was pulling a heavy white caravan.', ru: 'Машина тянула тяжелый белый трейлер.' },
        { en: 'A caravan of traders crossed the desert.', ru: 'Караван торговцев пересек пустыню.' },
        { en: 'The caravan park has a swimming pool.', ru: 'В парке для автофургонов есть бассейн.' }
    ],
    []
),

createRichWord('a2_carpenter', 'Carpenter', '/ˈkɑːpəntə(r)/', 'капэнтэ', 'Плотник', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Человек, чья работа заключается в изготовлении и ремонте деревянных вещей.',
    '- Профессия: "Skilled carpenter" (Опытный плотник)\n- Действие: "Work as a carpenter" (Работать плотником)\n- Инструмент: "Carpenter\'s tools" (Инструменты плотника)',
    [
        { en: 'The carpenter built a beautiful wooden table.', ru: 'Плотник сделал красивый деревянный стол.' },
        { en: 'My grandfather was a carpenter all his life.', ru: 'Мой дедушка был плотником всю свою жизнь.' },
        { en: 'We need a carpenter to fix the broken door.', ru: 'Нам нужен плотник, чтобы починить сломанную дверь.' },
        { en: 'Jesus is often described as a carpenter.', ru: 'Иисуса часто описывают как плотника.' }
    ],
    []
),

createRichWord('a2_chess', 'Chess', '/tʃes/', 'чес', 'Шахматы', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Настольная игра для двух человек, использующая фигуры (король, королева, конь и т.д.) на клетчатой доске.',
    '- Игра: "Play chess" (Играть в шахматы)\n- Предмет: "Chess piece" (Шахматная фигура)\n- Соревнование: "Chess tournament" (Шахматный турнир)',
    [
        { en: 'My father taught me how to play chess.', ru: 'Мой отец научил меня играть в шахматы.' },
        { en: 'Chess requires a lot of strategic thinking.', ru: 'Шахматы требуют большого стратегического мышления.' },
        { en: 'He wants to become a chess grandmaster.', ru: 'Он хочет стать гроссмейстером по шахматам.' },
        { en: 'We played a game of chess in the park.', ru: 'Мы сыграли партию в шахматы в парке.' }
    ],
    []
),

createRichWord('a2_chilli', 'Chilli', '/ˈtʃɪli/', 'чили', 'Перец чили', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Маленький красный или зеленый овощ с очень острым вкусом.',
    '- Еда: "Hot chilli" (Острый перец)\n- Блюдо: "Chilli con carne" (Чили кон карне)\n- Вкус: "Chilli sauce" (Соус чили)',
    [
        { en: 'I added too much chilli to the soup.', ru: 'Я добавил слишком много чили в суп.' },
        { en: 'Do you like spicy food with chilli?', ru: 'Тебе нравится острая еда с перцем?' },
        { en: 'Red chillies are usually hotter than green ones.', ru: 'Красные перцы чили обычно острее зеленых.' },
        { en: 'My mouth is burning from the chilli.', ru: 'У меня во рту горит от перца.' }
    ],
    [
        { meaning: "Chilly (Adjective)", translation: "Прохладный (омофон)", example: { en: "It's a bit chilly today.", ru: "Сегодня немного прохладно." } }
    ]
),

createRichWord('a2_chimpanzee', 'Chimpanzee', '/ˌtʃɪmpænˈziː/', 'чимпэнзи', 'Шимпанзе', ProficiencyLevel.A2, 'noun', 'Low', 'Neutral',
    'Умная обезьяна, которая очень похожа на человека.',
    '- Зоопарк: "Wild chimpanzee" (Дикий шимпанзе)\n- Поведение: "Clever chimpanzee" (Умный шимпанзе)\n- Наука: "Chimpanzee DNA" (ДНК шимпанзе)',
    [
        { en: 'The chimpanzee used a stick to get insects.', ru: 'Шимпанзе использовал палку, чтобы достать насекомых.' },
        { en: 'Chimpanzees are closely related to humans.', ru: 'Шимпанзе являются близкими родственниками людей.' },
        { en: 'We watched the chimpanzees playing in the zoo.', ru: 'Мы наблюдали, как шимпанзе играют в зоопарке.' },
        { en: 'A baby chimpanzee stays with its mother for years.', ru: 'Детеныш шимпанзе остается с матерью годами.' }
    ],
    []
),

createRichWord('a2_closet', 'Closet', '/ˈklɒzɪt/', 'клозит', 'Шкаф (стенной) / Чулан', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Небольшая комната или пространство в стене для хранения одежды и вещей (чаще исп. в США, в UK - wardrobe/cupboard).',
    '- Одежда: "Walk-in closet" (Гардеробная комната)\n- Идиома: "Come out of the closet" (Признаться в ориентации)\n- Хранение: "Broom closet" (Чулан для метелок)',
    [
        { en: 'Hang your coat in the closet near the door.', ru: 'Повесь пальто в шкаф у двери.' },
        { en: 'My closet is full of old clothes.', ru: 'Мой шкаф забит старой одеждой.' },
        { en: 'She hid the birthday presents in the closet.', ru: 'Она спрятала подарки на день рождения в шкафу.' },
        { en: 'The skeleton in the closet implies a hidden secret.', ru: 'Скелет в шкафу подразумевает скрытую тайну.' }
    ],
    [
        { meaning: "Secret (adj)", translation: "Тайный / Скрытый", example: { en: "He is a closet smoker.", ru: "Он тайный курильщик." } }
    ]
),

createRichWord('a2_cocoa', 'Cocoa', '/ˈkəʊkəʊ/', 'кэукэу', 'Какао', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Коричневый порошок из бобов какао, используемый для приготовления шоколада; горячий напиток.',
    '- Напиток: "Hot cocoa" (Горячее какао)\n- Выпечка: "Cocoa powder" (Какао-порошок)\n- Ингредиент: "Cocoa butter" (Какао-масло)',
    [
        { en: 'I like to drink hot cocoa before bed.', ru: 'Я люблю пить горячее какао перед сном.' },
        { en: 'You need cocoa powder to make this cake.', ru: 'Тебе нужен какао-порошок, чтобы испечь этот торт.' },
        { en: 'The smell of cocoa filled the kitchen.', ru: 'Запах какао наполнил кухню.' },
        { en: 'Add some sugar to the cocoa to make it sweet.', ru: 'Добавь немного сахара в какао, чтобы оно стало сладким.' }
    ],
    []
),

createRichWord('a2_coconut', 'Coconut', '/ˈkəʊkənʌt/', 'кэукэнат', 'Кокос', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Крупный твердый фрукт с белой мякотью и жидкостью внутри, растущий на пальмах.',
    '- Еда: "Coconut milk" (Кокосовое молоко)\n- Косметика: "Coconut oil" (Кокосовое масло)\n- Дерево: "Coconut palm" (Кокосовая пальма)',
    [
        { en: 'She drank the juice straight from the coconut.', ru: 'Она пила сок прямо из кокоса.' },
        { en: 'Coconut oil is good for your skin and hair.', ru: 'Кокосовое масло полезно для кожи и волос.' },
        { en: 'The cake was covered in grated coconut.', ru: 'Торт был покрыт тертым кокосом.' },
        { en: 'Be careful of falling coconuts on the beach.', ru: 'Остерегайтесь падающих кокосов на пляже.' }
    ],
    []
  ),
createRichWord('a2_cute', 'Cute', '/kjuːt/', 'кьют', 'Милый / Симпатичный', ProficiencyLevel.A2, 'adj', 'High', 'Neutral',
    'Привлекательный приятным и милым образом (часто о детях или маленьких животных).',
    '- Внешность: "Cute baby" (Милый ребенок)\n- Животные: "Cute kitten" (Симпатичный котенок)\n- Мнение: "Look cute" (Выглядеть мило)',
    [
        { en: 'That puppy is so cute!', ru: 'Этот щенок такой милый!' },
        { en: 'She wore a cute pink dress to the party.', ru: 'Она надела милое розовое платье на вечеринку.' },
        { en: 'The baby has a very cute smile.', ru: 'У ребенка очень милая улыбка.' },
        { en: 'He tried to be cute to get what he wanted.', ru: 'Он пытался быть милым, чтобы получить желаемое.' }
    ],
    [
        { meaning: "Clever (AmE, slightly negative)", translation: "Умник (ирон.)", example: { en: "Don't get cute with me.", ru: "Не умничай со мной." } }
    ]
  ),
createRichWord('a2_cookie', 'Cookie', '/ˈkʊki/', 'куки', 'Печенье', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Сладкое плоское печенье (в США - любое печенье, в Британии - обычно с шоколадной крошкой).',
    '- Еда: "Chocolate chip cookie" (Печенье с шоколадной крошкой)\n- Интернет: "Accept cookies" (Принять куки-файлы)\n- Идиома: "Tough cookie" (Крепкий орешек)',
    [
        { en: 'I baked some cookies for the party.', ru: 'Я испекла печенье для вечеринки.' },
        { en: 'Can I have a glass of milk with my cookie?', ru: 'Можно мне стакан молока к печенью?' },
        { en: 'This website uses cookies to track your visit.', ru: 'Этот сайт использует куки для отслеживания вашего посещения.' },
        { en: 'Grandma keeps cookies in a special jar.', ru: 'Бабушка хранит печенье в специальной банке.' }
    ],
    []
),

createRichWord('a2_crocodile', 'Crocodile', '/ˈkrɒkədaɪl/', 'крокэдайл', 'Крокодил', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Крупная опасная рептилия с длинным телом, хвостом и большими челюстями, живущая в реках.',
    '- Животное: "Crocodile teeth" (Зубы крокодила)\n- Материал: "Crocodile skin" (Крокодиловая кожа)\n- Идиома: "Crocodile tears" (Крокодиловы слезы / Притворство)',
    [
        { en: 'The crocodile lay quietly in the river.', ru: 'Крокодил тихо лежал в реке.' },
        { en: 'Don\'t swim here, there are crocodiles.', ru: 'Не плавай здесь, тут есть крокодилы.' },
        { en: 'We saw a huge crocodile at the zoo.', ru: 'Мы видели огромного крокодила в зоопарке.' },
        { en: 'She cried crocodile tears to get sympathy.', ru: 'Она лила крокодиловы слезы, чтобы вызвать сочувствие.' }
    ],
    []
),

createRichWord('a2_cucumber', 'Cucumber', '/ˈkjuːkʌmbə(r)/', 'кьюкамбэ', 'Огурец', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Длинный зеленый овощ, который обычно едят сырым в салатах.',
    '- Еда: "Fresh cucumber" (Свежий огурец)\n- Салат: "Cucumber slices" (Ломитики огурца)\n- Идиома: "Cool as a cucumber" (Невозмутимый)',
    [
        { en: 'I like tomato and cucumber salad.', ru: 'Я люблю салат из помидоров и огурцов.' },
        { en: 'Slice the cucumber thinly for the sandwiches.', ru: 'Тонко нарежь огурец для сэндвичей.' },
        { en: 'Cucumber is mostly made of water.', ru: 'Огурец состоит в основном из воды.' },
        { en: 'He remained as cool as a cucumber during the test.', ru: 'Во время теста он оставался совершенно невозмутимым.' }
    ],
    []
  ),
createRichWord('a2_cafeteria', 'Cafeteria', '/ˌkæfəˈtɪəriə/', 'кэфитириэ', 'Кафетерий / Столовая', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Ресторан (часто в школе или на работе), где люди сами берут еду и несут её к столику.',
    '- Школа: "School cafeteria" (Школьная столовая)\n- Еда: "Eat in the cafeteria" (Есть в столовой)\n- Выбор: "Cafeteria tray" (Поднос в столовой)',
    [
        { en: 'We usually eat lunch in the school cafeteria.', ru: 'Мы обычно обедаем в школьной столовой.' },
        { en: 'The cafeteria serves hot food every day.', ru: 'В кафетерии каждый день подают горячую еду.' },
        { en: 'Please take your tray back to the cafeteria counter.', ru: 'Пожалуйста, отнеси свой поднос обратно на стойку кафетерия.' },
        { en: 'Is the cafeteria open for breakfast?', ru: 'Открыта ли столовая на завтрак?' }
    ],
    []
),

createRichWord('a2_cashier', 'Cashier', '/kæˈʃɪə(r)/', 'кэшиэ', 'Кассир', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Человек в магазине или банке, которому вы платите деньги или который выдает их вам.',
    '- Магазин: "Supermarket cashier" (Кассир в супермаркете)\n- Действие: "Pay the cashier" (Заплатить кассиру)\n- Работа: "Work as a cashier" (Работать кассиром)',
    [
        { en: 'The cashier scanned my items quickly.', ru: 'Кассир быстро просканировал мои товары.' },
        { en: 'Please pay the cashier at the front desk.', ru: 'Пожалуйста, заплатите кассиру на стойке регистрации.' },
        { en: 'She works as a cashier in a clothing store.', ru: 'Она работает кассиром в магазине одежды.' },
        { en: 'The cashier gave me the wrong change.', ru: 'Кассир дал мне неправильную сдачу.' }
    ],
    []
),

createRichWord('a2_cola', 'Cola', '/ˈkəʊlə/', 'кэулэ', 'Кола', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Коричневый сладкий газированный напиток.',
    '- Напиток: "Can of cola" (Банка колы)\n- Заказ: "Two colas, please" (Две колы, пожалуйста)\n- Вкус: "Ice cold cola" (Ледяная кола)',
    [
        { en: 'I would like a burger and a cola.', ru: 'Я бы хотел бургер и колу.' },
        { en: 'Too much cola is bad for your teeth.', ru: 'Слишком много колы вредно для зубов.' },
        { en: 'Do you want ice in your cola?', ru: 'Ты хочешь лед в свою колу?' },
        { en: 'He drank a bottle of cola with his lunch.', ru: 'Он выпил бутылку колы за обедом.' }
    ],
    []
  ),
createRichWord('a2_crayon', 'Crayon', '/ˈkreɪɒn/', 'крейон', 'Цветной мелок', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Палочка из цветного воска, используемая для рисования (обычно детьми).',
    '- Школа: "Box of crayons" (Коробка мелков)\n- Рисование: "Draw with a crayon" (Рисовать мелком)\n- Цвет: "Red crayon" (Красный мелок)',
    [
        { en: 'The child drew a picture with a blue crayon.', ru: 'Ребенок нарисовал картинку синим мелком.' },
        { en: 'Please put your crayons back in the box.', ru: 'Пожалуйста, положи свои мелки обратно в коробку.' },
        { en: 'We need paper and crayons for the art lesson.', ru: 'Нам нужна бумага и мелки для урока рисования.' },
        { en: 'He broke the crayon into two pieces.', ru: 'Он сломал мелок на две части.' }
    ],
    []
),

createRichWord('a2_crossword', 'Crossword', '/ˈkrɒswɜːd/', 'кросвёд', 'Кроссворд', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Головоломка, в которой нужно вписывать слова в клетки, отгадывая их по описанию.',
    '- Хобби: "Do a crossword" (Решать кроссворд)\n- Газета: "Crossword puzzle" (Кроссворд)\n- Подсказка: "Crossword clue" (Подсказка к кроссворду)',
    [
        { en: 'My grandmother likes to do the crossword every morning.', ru: 'Моя бабушка любит решать кроссворд каждое утро.' },
        { en: 'I cannot find the answer to this crossword clue.', ru: 'Я не могу найти ответ на эту подсказку в кроссворде.' },
        { en: 'This crossword is too difficult for me.', ru: 'Этот кроссворд слишком сложный для меня.' },
        { en: 'He bought a book of crossword puzzles.', ru: 'Он купил книгу кроссвордов.' }
    ],
    []
  ),

];
