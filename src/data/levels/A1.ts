
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

export const WORDS_A1: Word[] = [
createRichWord('a1_about', 'About', '/əˈbaʊt/', 'эбаут', 'О / Около', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'Используется для указания темы разговора (о чем-то) или для обозначения приблизительного количества, времени или места (около, почти).',
    '- Тема: "Talk about films" (Говорить о фильмах)\n- Приблизительность: "About 5 o\'clock" (Около 5 часов)\n- Местоположение: "Walk about the town" (Гулять по городу)',
    [
        { en: 'We need to talk about your school grades soon.', ru: 'Нам нужно поговорить о твоих школьных оценках в ближайшее время.' },
        { en: 'It is about five o\'clock in the afternoon now.', ru: 'Сейчас около пяти часов дня.' },
        { en: 'Please tell me more about your family and friends.', ru: 'Пожалуйста, расскажи мне больше о своей семье и друзьях.' },
        { en: 'I am sorry about the mistake I made yesterday.', ru: 'Мне жаль из-за ошибки, которую я совершил вчера.' }
    ]
),

createRichWord('a1_bus', 'Bus', '/bʌs/', 'бас', 'Автобус', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Большое дорожное транспортное средство, предназначенное для перевозки множества пассажиров.',
    '- Транспорт: "Go by bus" (Ехать на автобусе)\n- Расписание: "Miss the bus" (Опоздать на автобус)\n- Остановка: "Bus stop" (Автобусная остановка)',
    [
        { en: 'I usually take the bus to get to work.', ru: 'Я обычно сажусь на автобус, чтобы добраться до работы.' },
        { en: 'The red bus stopped right in front of the school.', ru: 'Красный автобус остановился прямо перед школой.' },
        { en: 'We waited for the bus for twenty minutes.', ru: 'Мы ждали автобус двадцать минут.' },
        { en: 'This bus goes all the way to the city centre.', ru: 'Этот автобус идет прямо до центра города.' }
    ],
    [
        { meaning: "Digital connection lines in computers", translation: "Шина (компьютерная)", example: { en: "The data bus transfers information.", ru: "Шина данных передает информацию." } },
        { meaning: "To remove dirty dishes (verb)", translation: "Убирать посуду со столов", example: { en: "He busses tables at a restaurant.", ru: "Он убирает посуду со столов в ресторане." } }
    ]
),

createRichWord('a1_busy', 'Busy', '/ˈbɪzi/', 'бизи', 'Занятый', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Состояние, когда у человека много дел или работы, и он не может отвлечься.',
    '- Работа: "Busy with work" (Занят работой)\n- Время: "Busy day" (Напряженный день)\n- Телефон: "Line is busy" (Линия занята)',
    [
        { en: 'I am too busy to go to the cinema today.', ru: 'Я слишком занят, чтобы пойти сегодня в кино.' },
        { en: 'The streets are always busy in the morning.', ru: 'По утрам улицы всегда оживленные.' },
        { en: 'She has a very busy schedule this week.', ru: 'У нее очень плотный график на этой неделе.' },
        { en: 'Are you busy right now or can we talk?', ru: 'Ты сейчас занят или мы можем поговорить?' }
    ],
    [
        { meaning: "Telephone line engaged", translation: "Занято (о телефоне)", example: { en: "I called her but the line was busy.", ru: "Я звонил ей, но было занято." } },
        { meaning: "Full of activity or detail (place/pattern)", translation: "Оживленный / Пестрый", example: { en: "This wallpaper pattern is too busy.", ru: "У этих обоев слишком пестрый узор." } }
    ]
),

createRichWord('a1_but', 'But', '/bʌt/', 'бат', 'Но', ProficiencyLevel.A1, 'conj', 'High', 'Neutral',
    'Союз, используемый для введения фразы или предложения, противопоставляемого предыдущему.',
    '- Противопоставление: "Poor but happy" (Бедный, но счастливый)\n- Извинение: "I\'m sorry, but..." (Извините, но...)\n- Исключение: "Last but one" (Предпоследний)',
    [
        { en: 'I want to go, but I have no money.', ru: 'Я хочу пойти, но у меня нет денег.' },
        { en: 'The food was cheap but very tasty.', ru: 'Еда была дешевой, но очень вкусной.' },
        { en: 'He is small but very strong indeed.', ru: 'Он маленький, но на самом деле очень сильный.' },
        { en: 'I knocked on the door, but nobody answered.', ru: 'Я постучал в дверь, но никто не ответил.' }
    ],
    [
        { meaning: "Except (preposition)", translation: "Кроме", example: { en: "Everyone but him came.", ru: "Пришли все, кроме него." } },
        { meaning: "Only / merely (adverb)", translation: "Лишь / Только", example: { en: "It is but a dream.", ru: "Это всего лишь сон." } }
    ]
),

createRichWord('a1_buy', 'Buy', '/baɪ/', 'бай', 'Покупать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Приобретать что-либо в обмен на деньги.',
    '- Магазин: "Buy food" (Покупать еду)\n- Интернет: "Buy online" (Покупать онлайн)\n- Угощение: "Buy a drink" (Купить выпивку/Угостить)',
    [
        { en: 'Where did you buy those nice shoes?', ru: 'Где ты купил эти милые туфли?' },
        { en: 'I need to buy some bread and milk.', ru: 'Мне нужно купить хлеба и молока.' },
        { en: 'Money cannot buy happiness or true love.', ru: 'За деньги нельзя купить счастье или настоящую любовь.' },
        { en: 'He wants to buy a new car next year.', ru: 'Он хочет купить новую машину в следующем году.' }
    ],
    [
        { meaning: "Believe / Accept as true (informal)", translation: "Купиться / Поверить", example: { en: "I don\'t buy his story.", ru: "Я не верю его истории." } },
        { meaning: "Purchase (noun)", translation: "Покупка", example: { en: "That was a good buy.", ru: "Это была удачная покупка." } }
    ]
),

createRichWord('a1_by', 'By', '/baɪ/', 'бай', 'У / Около / К', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'Предлог, указывающий на близость, авторство или средство действия.',
    '- Место: "By the window" (У окна)\n- Авторство: "Written by..." (Написано кем-то)\n- Способ: "By car" (На машине)',
    [
        { en: 'She was standing by the window looking out.', ru: 'Она стояла у окна и смотрела на улицу.' },
        { en: 'We usually travel by train in summer.', ru: 'Летом мы обычно путешествуем на поезде.' },
        { en: 'This book was written by a famous author.', ru: 'Эта книга была написана известным автором.' },
        { en: 'Please finish this work by five o\'clock.', ru: 'Пожалуйста, закончите эту работу к пяти часам.' }
    ],
    [
        { meaning: "Past (adverb)", translation: "Мимо", example: { en: "He walked right by.", ru: "Он прошел прямо мимо." } },
        { meaning: "During (time)", translation: "В течение", example: { en: "We travel by night.", ru: "Мы путешествуем ночью." } }
    ]
),

createRichWord('a1_cake', 'Cake', '/keɪk/', 'кейк', 'Торт / Пирожное', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Сладкое печеное изделие из теста, часто с кремом или фруктами.',
    '- Праздник: "Birthday cake" (Торт на день рождения)\n- Еда: "Piece of cake" (Кусок торта)\n- Идиома: "Piece of cake" (Проще простого)',
    [
        { en: 'My mother baked a chocolate cake yesterday.', ru: 'Вчера моя мама испекла шоколадный торт.' },
        { en: 'Would you like another piece of cake?', ru: 'Хочешь еще один кусочек торта?' },
        { en: 'We bought a huge cake for the party.', ru: 'Мы купили огромный торт для вечеринки.' },
        { en: 'Cut the cake into eight equal slices.', ru: 'Разрежь торт на восемь равных кусков.' }
    ],
    [
        { meaning: "To cover with a thick layer (verb)", translation: "Покрывать коркой / Затвердевать", example: { en: "Mud caked his boots.", ru: "Грязь засохла коркой на его ботинках." } },
        { meaning: "A flat round item of food", translation: "Котлета / Лепешка", example: { en: "Fish cake.", ru: "Рыбная котлета." } }
    ]
),

createRichWord('a1_call', 'Call', '/kɔːl/', 'кол', 'Звонить / Называть', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Связываться с кем-то по телефону или давать кому-то имя/название.',
    '- Телефон: "Call me back" (Перезвони мне)\n- Имя: "Call him John" (Называть его Джоном)\n- Действие: "Call a doctor" (Вызвать врача)',
    [
        { en: 'Please call me when you get home.', ru: 'Пожалуйста, позвони мне, когда доберешься домой.' },
        { en: 'They decided to call their baby Alex.', ru: 'Они решили назвать своего ребенка Алекс.' },
        { en: 'I need to call a taxi right now.', ru: 'Мне нужно вызвать такси прямо сейчас.' },
        { en: 'Did anyone call while I was out?', ru: 'Кто-нибудь звонил, пока меня не было?' }
    ],
    [
        { meaning: "A shout or cry (noun)", translation: "Крик / Зов", example: { en: "I heard a call for help.", ru: "Я услышал крик о помощи." } },
        { meaning: "To visit briefly", translation: "Зайти в гости", example: { en: "We should call on Mary.", ru: "Нам следует навестить Мэри." } },
        { meaning: "Decision / Judgment", translation: "Решение", example: { en: "It\'s your call.", ru: "Решать тебе." } }
    ]
),

createRichWord('a1_can', 'Can', '/kæn/', 'кэн', 'Мочь / Уметь', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Модальный глагол, выражающий способность, возможность или разрешение сделать что-либо.',
    '- Способность: "I can swim" (Я умею плавать)\n- Просьба: "Can you help?" (Можешь помочь?)\n- Разрешение: "You can go" (Ты можешь идти)',
    [
        { en: 'I can speak English and a little Spanish.', ru: 'Я могу говорить по-английски и немного по-испански.' },
        { en: 'Can you open the window for me?', ru: 'Можешь открыть для меня окно?' },
        { en: 'You can park your car here today.', ru: 'Вы можете припарковать машину здесь сегодня.' },
        { en: 'She can run very fast for her age.', ru: 'Она может бегать очень быстро для своего возраста.' }
    ],
    [
        { meaning: "Metal container (noun)", translation: "Жестяная банка", example: { en: "A can of soda.", ru: "Банка газировки." } },
        { meaning: "To preserve in a can (verb)", translation: "Консервировать", example: { en: "They can fruit in summer.", ru: "Они консервируют фрукты летом." } }
    ]
),

createRichWord('a1_car', 'Car', '/kɑːr/', 'кар', 'Машина / Автомобиль', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Четырехколесное моторное транспортное средство для перевозки небольшого числа людей.',
    '- Вождение: "Drive a car" (Водить машину)\n- Парковка: "Park the car" (Парковать машину)\n- Путешествие: "Go by car" (Ехать на машине)',
    [
        { en: 'My father bought a new blue car.', ru: 'Мой отец купил новую синюю машину.' },
        { en: 'We parked the car near the big park.', ru: 'Мы припарковали машину возле большого парка.' },
        { en: 'Get into the car, we are leaving.', ru: 'Садись в машину, мы уезжаем.' },
        { en: 'Driving a fast car is very exciting.', ru: 'Водить быструю машину очень захватывающе.' }
    ],
    [
        { meaning: "Railway carriage", translation: "Вагон", example: { en: "The dining car is at the front.", ru: "Вагон-ресторан находится спереди." } }
    ]
),

createRichWord('a1_cat', 'Cat', '/kæt/', 'кэт', 'Кошка / Кот', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Небольшое домашнее пушистое животное, которое часто ловят мышей.',
    '- Животное: "Pet cat" (Домашняя кошка)\n- Звук: "Cat meows" (Кошка мяукает)\n- Идиома: "Let the cat out" (Проболтаться)',
    [
        { en: 'The black cat is sleeping on the sofa.', ru: 'Черная кошка спит на диване.' },
        { en: 'My cat likes to play with a ball.', ru: 'Мой кот любит играть с мячом.' },
        { en: 'Do you have a dog or a cat?', ru: 'У тебя есть собака или кошка?' },
        { en: 'Feed the cat before you leave home.', ru: 'Покорми кошку, перед тем как уйдешь из дома.' }
    ],
    [
        { meaning: "Big wild feline (lion/tiger)", translation: "Кошачьи (большие кошки)", example: { en: "Lions are big cats.", ru: "Львы — это большие кошки." } },
        { meaning: "Cool person (Slang, dated)", translation: "Чувак / Клевый парень", example: { en: "He is a cool cat.", ru: "Он клевый парень." } }
    ]
),

createRichWord('a1_chair', 'Chair', '/tʃeər/', 'чеэ', 'Стул', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Предмет мебели с сиденьем и спинкой, предназначенный для одного человека.',
    '- Мебель: "Sit on a chair" (Сидеть на стуле)\n- Офис: "Office chair" (Офисное кресло)\n- Дерево: "Wooden chair" (Деревянный стул)',
    [
        { en: 'Please sit down on this comfortable chair.', ru: 'Пожалуйста, присядьте на этот удобный стул.' },
        { en: 'There are four chairs around the table.', ru: 'Вокруг стола стоят четыре стула.' },
        { en: 'He broke the leg of the old chair.', ru: 'Он сломал ножку старого стула.' },
        { en: 'Pull up a chair and join us.', ru: 'Подвинь стул и присоединяйся к нам.' }
    ],
    [
        { meaning: "Chairperson / Leader of a meeting", translation: "Председатель", example: { en: "Address your remarks to the chair.", ru: "Адресуйте свои замечания председателю." } },
        { meaning: "To lead a meeting (verb)", translation: "Председательствовать", example: { en: "She chaired the meeting.", ru: "Она председательствовала на собрании." } }
    ]
),

createRichWord('a1_cheap', 'Cheap', '/tʃiːp/', 'чип', 'Дешевый', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Стоящий мало денег; недорогой.',
    '- Цена: "Cheap clothes" (Дешевая одежда)\n- Билеты: "Cheap tickets" (Дешевые билеты)\n- Качество: "Cheap and nasty" (Дешево и сердито/плохо)',
    [
        { en: 'Fruit is very cheap in the summer market.', ru: 'Фрукты очень дешевые на летнем рынке.' },
        { en: 'I bought a cheap watch for ten dollars.', ru: 'Я купил дешевые часы за десять долларов.' },
        { en: 'It is cheaper to cook at home.', ru: 'Готовить дома дешевле.' },
        { en: 'This hotel is clean and quite cheap.', ru: 'Этот отель чистый и довольно дешевый.' }
    ],
    [
        { meaning: "Low quality / Poorly made", translation: "Некачественный / Дешевка", example: { en: "Don\'t buy cheap toys.", ru: "Не покупай некачественные игрушки." } },
        { meaning: "Stingy / Mean (person)", translation: "Жадный / Скупой", example: { en: "He is too cheap to tip.", ru: "Он слишком скуп, чтобы давать чаевые." } }
    ]
),

createRichWord('a1_chicken', 'Chicken', '/ˈtʃɪkɪn/', 'чикин', 'Курица / Цыпленок', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Домашняя птица, которую разводят ради яиц или мяса.',
    '- Еда: "Fried chicken" (Жареная курица)\n- Ферма: "Feed the chickens" (Кормить кур)\n- Суп: "Chicken soup" (Куриный суп)',
    [
        { en: 'We had roast chicken for dinner yesterday.', ru: 'Вчера на ужин у нас была жареная курица.' },
        { en: 'The chicken laid an egg this morning.', ru: 'Курица снесла яйцо этим утром.' },
        { en: 'I like chicken more than beef or pork.', ru: 'Я люблю курицу больше, чем говядину или свинину.' },
        { en: 'Don\'t count your chickens before they hatch.', ru: 'Цыплят по осени считают.' }
    ],
    [
        { meaning: "Coward (Informal)", translation: "Трус", example: { en: "Don\'t be a chicken, jump!", ru: "Не будь трусом, прыгай!" } },
        { meaning: "To lose nerve (verb, phrasal)", translation: "Струсить (chicken out)", example: { en: "He chickened out at the last moment.", ru: "Он струсил в последний момент." } }
    ]
),

createRichWord('a1_child', 'Child', '/tʃaɪld/', 'чайлд', 'Ребенок', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Мальчик или девочка, еще не ставшие взрослыми.',
    '- Семья: "Only child" (Единственный ребенок)\n- Возраст: "Small child" (Маленький ребенок)\n- Группа: "Children playing" (Дети играют)',
    [
        { en: 'The child was playing happily in the garden.', ru: 'Ребенок счастливо играл в саду.' },
        { en: 'As a child, I lived in London.', ru: 'В детстве я жил в Лондоне.' },
        { en: 'She is not a child anymore, she is eighteen.', ru: 'Она больше не ребенок, ей восемнадцать.' },
        { en: 'Every child needs love and care from parents.', ru: 'Каждому ребенку нужна любовь и забота родителей.' }
    ],
    [
        { meaning: "Son or daughter of any age", translation: "Сын или дочь (Чадо)", example: { en: "She is a child of the 60s.", ru: "Она дитя 60-х." } },
        { meaning: "Immature person", translation: "Ребячливый человек", example: { en: "Stop acting like a child.", ru: "Перестань вести себя как ребенок." } }
    ]
),

createRichWord('a1_choose', 'Choose', '/tʃuːz/', 'чуз', 'Выбирать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Отдать предпочтение кому-то или чему-то из нескольких вариантов.',
    '- Покупка: "Choose a gift" (Выбрать подарок)\n- Решение: "Choose wisely" (Выбирать с умом)\n- Опция: "Choose between" (Выбирать между)',
    [
        { en: 'It took me a long time to choose.', ru: 'У меня ушло много времени, чтобы выбрать.' },
        { en: 'You can choose any color you like.', ru: 'Ты можешь выбрать любой цвет, который нравится.' },
        { en: 'Why did you choose this restaurant for dinner?', ru: 'Почему ты выбрал этот ресторан для ужина?' },
        { en: 'I chose the red dress for the party.', ru: 'Я выбрала красное платье для вечеринки.' }
    ],
    [
        { meaning: "Decide to do something", translation: "Решить (сделать что-то)", example: { en: "He chose to stay home.", ru: "Он решил остаться дома." } }
    ]
),

createRichWord('a1_christmas', 'Christmas', '/ˈkrɪsməs/', 'крисмэс', 'Рождество', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Ежегодный христианский праздник, отмечающий рождение Иисуса Христа.',
    '- Праздник: "Merry Christmas" (Счастливого Рождества)\n- Дата: "On Christmas Day" (В день Рождества)\n- Подарки: "Christmas present" (Рождественский подарок)',
    [
        { en: 'We give presents to each other at Christmas.', ru: 'Мы дарим друг другу подарки на Рождество.' },
        { en: 'Christmas is my favorite time of the year.', ru: 'Рождество — мое любимое время года.' },
        { en: 'Are you going home for Christmas this year?', ru: 'Ты едешь домой на Рождество в этом году?' },
        { en: 'They put up a big Christmas tree yesterday.', ru: 'Вчера они поставили большую рождественскую елку.' }
    ],
    [
        { meaning: "Christmas season / period", translation: "Рождественские праздники", example: { en: "We are closed over Christmas.", ru: "Мы закрыты на рождественские праздники." } }
    ]
),

createRichWord('a1_city', 'City', '/ˈsɪti/', 'сити', 'Город', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Крупный населенный пункт, больше и важнее, чем поселок или деревня.',
    '- Место: "Big city" (Большой город)\n- Центр: "City centre" (Центр города)\n- Житель: "City life" (Городская жизнь)',
    [
        { en: 'New York is a very famous American city.', ru: 'Нью-Йорк — очень известный американский город.' },
        { en: 'I prefer living in the city than countryside.', ru: 'Я предпочитаю жить в городе, чем в деревне.' },
        { en: 'The city lights look beautiful at night.', ru: 'Огни города выглядят красиво ночью.' },
        { en: 'Which city were you born in?', ru: 'В каком городе ты родился?' }
    ],
    [
        { meaning: "The financial district (London)", translation: "Сити (деловой центр)", example: { en: "He works in the City.", ru: "Он работает в Сити." } },
        { meaning: "All the people in a city", translation: "Жители города", example: { en: "The whole city celebrated.", ru: "Весь город праздновал." } }
    ]
),

createRichWord('a1_class', 'Class', '/klɑːs/', 'клас', 'Класс / Урок', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Группа учеников или период времени, когда происходит обучение.',
    '- Школа: "In class" (В классе/На уроке)\n- Люди: "Classmate" (Одноклассник)\n- Тип: "First class" (Первый класс)',
    [
        { en: 'Be quiet when you are in class.', ru: 'Ведите себя тихо, когда вы на уроке.' },
        { en: 'My history class starts at nine o\'clock.', ru: 'Мой урок истории начинается в девять часов.' },
        { en: 'There are twenty students in my class.', ru: 'В моем классе двадцать студентов.' },
        { en: 'She is the smartest girl in the class.', ru: 'Она самая умная девочка в классе.' }
    ],
    [
        { meaning: "Social category / Status", translation: "Социальный класс", example: { en: "Working class families.", ru: "Семьи рабочего класса." } },
        { meaning: "Category / Type", translation: "Категория / Разряд", example: { en: "A new class of drugs.", ru: "Новый класс лекарств." } },
        { meaning: "Elegance / Style (Informal)", translation: "Класс / Стиль", example: { en: "She has real class.", ru: "У нее есть настоящий стиль." } }
    ]
),

createRichWord('a1_clean', 'Clean', '/kliːn/', 'клин', 'Чистый', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Без грязи, пятен или пыли; не грязный.',
    '- Состояние: "Clean room" (Чистая комната)\n- Воздух: "Clean air" (Чистый воздух)\n- Вода: "Clean water" (Чистая вода)',
    [
        { en: 'Keep your room clean and tidy usually.', ru: 'Обычно держи свою комнату в чистоте и порядке.' },
        { en: 'I need a clean shirt for the meeting.', ru: 'Мне нужна чистая рубашка для встречи.' },
        { en: 'Is this water clean enough to drink?', ru: 'Эта вода достаточно чистая, чтобы пить?' },
        { en: 'The streets are very clean in this town.', ru: 'Улицы в этом городе очень чистые.' }
    ],
    [
        { meaning: "To remove dirt (verb)", translation: "Чистить / Мыть", example: { en: "Clean the floor.", ru: "Помой пол." } },
        { meaning: "Morally innocent / Fair", translation: "Честный / Чистый", example: { en: "A clean fight.", ru: "Честный бой." } }
    ]
),

createRichWord('a1_clock', 'Clock', '/klɒk/', 'клок', 'Часы (настенные)', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Устройство для измерения и показа времени (не наручные часы).',
    '- Время: "Look at the clock" (Смотреть на часы)\n- Стены: "Wall clock" (Настенные часы)\n- Будильник: "Alarm clock" (Будильник)',
    [
        { en: 'The clock on the wall says two.', ru: 'Часы на стене показывают два.' },
        { en: 'My alarm clock rings at seven everyday.', ru: 'Мой будильник звонит в семь каждый день.' },
        { en: 'We need to put a new battery in the clock.', ru: 'Нам нужно вставить новую батарейку в часы.' },
        { en: 'The old clock stopped working years ago.', ru: 'Старые часы перестали работать много лет назад.' }
    ],
    [
        { meaning: "To measure time (verb)", translation: "Засекать время", example: { en: "They clocked his speed.", ru: "Они засекли его скорость." } },
        { meaning: "To hit someone (Slang verb)", translation: "Ударить / Врезать", example: { en: "He clocked him in the face.", ru: "Он врезал ему по лицу." } }
    ]
),

createRichWord('a1_close', 'Close', '/kləʊz/', 'клоуз', 'Закрывать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Приводить что-либо в закрытое положение; делать так, чтобы оно не было открытым.',
    '- Дверь: "Close the door" (Закрой дверь)\n- Глаза: "Close your eyes" (Закрой глаза)\n- Бизнес: "Close a shop" (Закрыть магазин)',
    [
        { en: 'Please close the window, it is cold.', ru: 'Пожалуйста, закрой окно, холодно.' },
        { en: 'The shops close at six o\'clock today.', ru: 'Магазины закрываются в шесть часов сегодня.' },
        { en: 'Close your book and listen to me.', ru: 'Закрой книгу и послушай меня.' },
        { en: 'Don\'t forget to close the gate behind you.', ru: 'Не забудь закрыть за собой ворота.' }
    ],
    [
        { meaning: "Near (adjective /kləʊs/)", translation: "Близкий / Рядом", example: { en: "Their house is close to the park.", ru: "Их дом близко к парку." } },
        { meaning: "Intimate (friend)", translation: "Близкий (друг)", example: { en: "A close friend.", ru: "Близкий друг." } },
        { meaning: "End / Conclusion (noun)", translation: "Конец / Завершение", example: { en: "At the close of the day.", ru: "В конце дня." } }
    ]
),

createRichWord('a1_closed', 'Closed', '/kləʊzd/', 'клоузд', 'Закрытый', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Не открытый; недоступный для входа или использования.',
    '- Дверь: "Closed door" (Закрытая дверь)\n- Магазин: "Sorry, we are closed" (Извините, мы закрыты)\n- Глаза: "Eyes closed" (Закрытые глаза)',
    [
        { en: 'The library is closed on Sundays usually.', ru: 'Библиотека обычно закрыта по воскресеньям.' },
        { en: 'Keep the door closed to save heat.', ru: 'Держи дверь закрытой, чтобы сохранить тепло.' },
        { en: 'The case is closed now.', ru: 'Дело теперь закрыто.' },
        { en: 'I tried to enter, but the gate was closed.', ru: 'Я пытался войти, но ворота были закрыты.' }
    ],
    [
        { meaning: "Not willing to accept ideas", translation: "Замкнутый / Невосприимчивый", example: { en: "He has a closed mind.", ru: "Он невосприимчив к новому." } }
    ]
),

createRichWord('a1_clothes', 'Clothes', '/kləʊðz/', 'клоуз', 'Одежда', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Вещи, которые люди носят на теле (рубашки, брюки, платья и т.д.).',
    '- Ношение: "Wear clothes" (Носить одежду)\n- Покупка: "Buy clothes" (Покупать одежду)\n- Смена: "Change clothes" (Переодеваться)',
    [
        { en: 'She spends a lot of money on clothes.', ru: 'Она тратит много денег на одежду.' },
        { en: 'Put on your warm clothes, it is snowing.', ru: 'Надень теплую одежду, идет снег.' },
        { en: 'I need to wash my dirty clothes today.', ru: 'Мне нужно постирать грязную одежду сегодня.' },
        { en: 'These clothes are too small for me now.', ru: 'Эта одежда теперь слишком мала для меня.' }
    ],
    [
        { meaning: "Bedclothes / Bedding", translation: "Постельное белье", example: { en: "He kicked off the clothes.", ru: "Он скинул постельное белье." } }
    ]
),

createRichWord('a1_coat', 'Coat', '/kəʊt/', 'коут', 'Пальто / Куртка', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Верхняя одежда с рукавами, которую носят поверх другой одежды для тепла.',
    '- Одежда: "Winter coat" (Зимнее пальто)\n- Действие: "Put on a coat" (Надеть пальто)\n- Погода: "Warm coat" (Теплое пальто)',
    [
        { en: 'Put on your coat, it is cold outside.', ru: 'Надень пальто, на улице холодно.' },
        { en: 'Where can I hang my coat?', ru: 'Где я могу повесить свое пальто?' },
        { en: 'She wore a long black wool coat.', ru: 'Она была в длинном черном шерстяном пальто.' },
        { en: 'I forgot my coat in the car.', ru: 'Я забыл свое пальто в машине.' }
    ],
    [
        { meaning: "Layer of paint/substance", translation: "Слой", example: { en: "A fresh coat of paint.", ru: "Свежий слой краски." } },
        { meaning: "Animal fur", translation: "Шерсть (животного)", example: { en: "The dog has a shiny coat.", ru: "У собаки блестящая шерсть." } },
        { meaning: "To cover with a layer (verb)", translation: "Покрывать слоем", example: { en: "Coat the fish in flour.", ru: "Обваляйте рыбу в муке." } }
    ]
),

createRichWord('a1_coffee', 'Coffee', '/ˈkɒfi/', 'кофи', 'Кофе', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Популярный горячий напиток черного или коричневого цвета, содержащий кофеин.',
    '- Напиток: "Cup of coffee" (Чашка кофе)\n- Действие: "Drink coffee" (Пить кофе)\n- Тип: "Black coffee" (Черный кофе)',
    [
        { en: 'I drink coffee with milk and sugar.', ru: 'Я пью кофе с молоком и сахаром.' },
        { en: 'Would you like some tea or coffee?', ru: 'Хотите чаю или кофе?' },
        { en: 'Let\'s meet for a coffee later today.', ru: 'Давай встретимся на кофе попозже сегодня.' },
        { en: 'The smell of fresh coffee is amazing.', ru: 'Запах свежего кофе восхитителен.' }
    ],
    [
        { meaning: "Coffee beans / Powder", translation: "Кофейные зерна / Молотый кофе", example: { en: "Buy a bag of coffee.", ru: "Купи пакет кофе." } },
        { meaning: "Coffee colour (brown)", translation: "Кофейный цвет", example: { en: "A coffee dress.", ru: "Платье кофейного цвета." } }
    ]
),

createRichWord('a1_cold', 'Cold', '/kəʊld/', 'коулд', 'Холодный', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Имеющий низкую температуру; не горячий и не теплый.',
    '- Погода: "Cold weather" (Холодная погода)\n- Вода: "Cold water" (Холодная вода)\n- Ощущение: "Feel cold" (Чувствовать холод/Мерзнуть)',
    [
        { en: 'It is very cold outside in winter.', ru: 'Зимой на улице очень холодно.' },
        { en: 'I like drinking cold water on hot days.', ru: 'Я люблю пить холодную воду в жаркие дни.' },
        { en: 'My hands are cold without gloves.', ru: 'Мои руки мерзнут без перчаток.' },
        { en: 'The soup has gone cold, heat it up.', ru: 'Суп остыл, разогрей его.' }
    ],
    [
        { meaning: "Illness (noun)", translation: "Простуда", example: { en: "I have a bad cold.", ru: "У меня сильная простуда." } },
        { meaning: "Unfriendly / Distant", translation: "Холодный (о человеке)", example: { en: "She gave me a cold look.", ru: "Она одарила меня холодным взглядом." } }
    ]
),

createRichWord('a1_colour', 'Colour', '/ˈkʌlər/', 'калэр', 'Цвет', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Свойство предмета, такое как красный, синий, зеленый и т.д.',
    '- Вопрос: "What colour is it?" (Какого это цвета?)\n- Тип: "Bright colour" (Яркий цвет)\n- Искусство: "Water colour" (Акварель)',
    [
        { en: 'What is your favorite colour usually?', ru: 'Какой твой любимый цвет обычно?' },
        { en: 'The leaves change colour in the autumn.', ru: 'Листья меняют цвет осенью.' },
        { en: 'She likes wearing bright colours.', ru: 'Ей нравится носить яркие цвета.' },
        { en: 'This colour matches your eyes perfectly.', ru: 'Этот цвет идеально подходит к твоим глазам.' }
    ],
    [
        { meaning: "To paint / dye (verb)", translation: "Красить / Раскрашивать", example: { en: "Colour the picture.", ru: "Раскрась картинку." } },
        { meaning: "Interest / Vividness", translation: "Колорит / Яркость", example: { en: "It adds colour to the story.", ru: "Это добавляет колорита истории." } }
    ]
),

createRichWord('a1_come', 'Come', '/kʌm/', 'кам', 'Приходить / Приезжать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Двигаться по направлению к говорящему или к определенному месту.',
    '- Прибытие: "Come home" (Приходить домой)\n- Приглашение: "Come in" (Входите)\n- Происхождение: "Come from" (Быть родом из)',
    [
        { en: 'Please come here, I need to show you something.', ru: 'Пожалуйста, иди сюда, мне нужно тебе кое-что показать.' },
        { en: 'What time did you come home last night?', ru: 'Во сколько ты пришел домой прошлой ночью?' },
        { en: 'Can you come to my party on Saturday?', ru: 'Ты можешь прийти на мою вечеринку в субботу?' },
        { en: 'The bus didn\'t come on time today.', ru: 'Автобус сегодня не пришел вовремя.' }
    ],
    [
        { meaning: "To happen / Occur", translation: "Случаться / Наступать", example: { en: "Spring has come.", ru: "Наступила весна." } },
        { meaning: "To reach a state", translation: "Прийти (в состояние)", example: { en: "Dreams come true.", ru: "Мечты сбываются." } },
        { meaning: "To become available", translation: "Выпускаться / Быть доступным", example: { en: "It comes in three sizes.", ru: "Это выпускается в трех размерах." } }
    ]
),

createRichWord('a1_computer', 'Computer', '/kəmˈpjuːtər/', 'компьютэр', 'Компьютер', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Электронное устройство для хранения и обработки данных.',
    '- Работа: "Use a computer" (Пользоваться компьютером)\n- Игры: "Computer game" (Компьютерная игра)\n- Тип: "Personal computer" (Персональный компьютер)',
    [
        { en: 'I use my computer to work and study.', ru: 'Я использую компьютер для работы и учебы.' },
        { en: 'Turn off the computer before you leave.', ru: 'Выключи компьютер перед уходом.' },
        { en: 'My computer is very slow today.', ru: 'Мой компьютер сегодня очень медленный.' },
        { en: 'He spends all day playing computer games.', ru: 'Он проводит весь день, играя в компьютерные игры.' }
    ],
    []
  ),

];
