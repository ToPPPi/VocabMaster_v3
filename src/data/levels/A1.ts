
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

createRichWord('a1_above', 'Above', '/əˈbʌv/', 'эбав', 'Над / Выше', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'Находящийся в более высоком месте по отношению к чему-либо. Также может означать "более чем" или "свыше" в переносном смысле.',
    '- Позиция: "Above the table" (Над столом)\n- Уровень: "Above average" (Выше среднего)\n- Текст: "See above" (Смотри выше)',
    [
        { en: 'The bird was flying high above the tall trees.', ru: 'Птица летела высоко над высокими деревьями.' },
        { en: 'Please write your full name above the black line.', ru: 'Пожалуйста, напишите свое полное имя над черной линией.' },
        { en: 'The temperature is finally above zero degrees today.', ru: 'Температура сегодня наконец-то выше нуля градусов.' },
        { en: 'We live in the apartment directly above yours.', ru: 'Мы живем в квартире прямо над вашей.' }
    ]
),

createRichWord('a1_across', 'Across', '/əˈkrɒs/', 'экрос', 'Через / На другой стороне', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'Движение с одной стороны чего-либо на другую (пересечение). Также может означать нахождение на противоположной стороне.',
    '- Движение: "Walk across the street" (Переходить через улицу)\n- Расположение: "Across the river" (За рекой / На той стороне реки)\n- Ширина: "20 meters across" (20 метров в ширину)',
    [
        { en: 'Be careful when you walk across the busy road.', ru: 'Будь осторожен, когда переходишь оживленную дорогу.' },
        { en: 'My best friend lives in the house across the street.', ru: 'Мой лучший друг живет в доме через дорогу.' },
        { en: 'We built a new bridge across the wide river.', ru: 'Мы построили новый мост через широкую реку.' },
        { en: 'He sat across from me at the dinner table.', ru: 'Он сидел напротив меня за обеденным столом.' }
    ]
),

createRichWord('a1_add', 'Add', '/æd/', 'эд', 'Добавлять / Складывать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Помещать что-то вместе с чем-то другим, чтобы увеличить количество, размер или важность. Также математическое действие сложения.',
    '- Кулинария: "Add some salt" (Добавить немного соли)\n- Математика: "Add two numbers" (Сложить два числа)\n- Дополнение: "Add to the list" (Добавить в список)',
    [
        { en: 'Please add some sugar and milk to my tea.', ru: 'Пожалуйста, добавь немного сахара и молока в мой чай.' },
        { en: 'If you add five and five, you get ten.', ru: 'Если сложить пять и пять, получится десять.' },
        { en: 'I would like to add a few words here.', ru: 'Я хотел бы добавить здесь несколько слов.' },
        { en: 'Do not forget to add me on social media.', ru: 'Не забудь добавить меня в социальных сетях.' }
    ]
),

createRichWord('a1_address', 'Address', '/əˈdres/', 'эдрэс', 'Адрес', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Точные данные о месте нахождения здания или жилья (улица, номер дома). Также может означать электронный адрес.',
    '- Жилье: "Home address" (Домашний адрес)\n- Интернет: "Email address" (Адрес электронной почты)\n- Детали: "Change of address" (Смена адреса)',
    [
        { en: 'Please write your home address on this form.', ru: 'Пожалуйста, напишите ваш домашний адрес в этой форме.' },
        { en: 'I do not have his email address with me.', ru: 'У меня нет с собой его адреса электронной почты.' },
        { en: 'Is this the right address for the new hotel?', ru: 'Это правильный адрес нового отеля?' },
        { en: 'She gave me her address so I could visit.', ru: 'Она дала мне свой адрес, чтобы я мог зайти в гости.' }
    ]
),

createRichWord('a1_afraid', 'Afraid', '/əˈfreɪd/', 'эфрейд', 'Испуганный / Бояться', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Чувствующий страх или беспокойство по поводу чего-либо. Часто используется в конструкции "I\'m afraid..." для вежливого отказа.',
    '- Страх: "Afraid of dogs" (Бояться собак)\n- Темнота: "Afraid of the dark" (Бояться темноты)\n- Вежливость: "I am afraid not" (Боюсь, что нет)',
    [
        { en: 'Don\'t be afraid, the dog is very friendly.', ru: 'Не бойся, собака очень дружелюбная.' },
        { en: 'Are you afraid of flying in an airplane?', ru: 'Ты боишься летать на самолете?' },
        { en: 'I am afraid I cannot come to your party.', ru: 'Боюсь, я не смогу прийти на твою вечеринку.' },
        { en: 'She is afraid to go out in the dark.', ru: 'Она боится выходить на улицу в темноте.' }
    ]
),

createRichWord('a1_after', 'After', '/ˈɑːftə/', 'афтэ', 'После', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'Позже по времени, чем что-то другое, или позади кого-то в пространстве. Следование за чем-то.',
    '- Время: "After lunch" (После обеда)\n- Последовательность: "Day after day" (День за днем)\n- Порядок: "After you" (После вас / Проходите)',
    [
        { en: 'We can play football in the park after school.', ru: 'Мы можем поиграть в футбол в парке после школы.' },
        { en: 'Brush your teeth after breakfast and before bed.', ru: 'Чисти зубы после завтрака и перед сном.' },
        { en: 'Please close the door after you leave the room.', ru: 'Пожалуйста, закрой дверь после того, как выйдешь из комнаты.' },
        { en: 'I will call you after I finish my work.', ru: 'Я позвоню тебе после того, как закончу работу.' }
    ]
),

createRichWord('a1_afternoon', 'Afternoon', '/ˌɑːftəˈnuːn/', 'афтэнун', 'Дневное время / После полудня', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Время дня между полуднем (12:00) и вечером (обычно до 17:00-18:00).',
    '- Приветствие: "Good afternoon" (Добрый день)\n- Время: "In the afternoon" (Днем)\n- Уточнение: "Friday afternoon" (В пятницу днем)',
    [
        { en: 'I usually do my homework in the afternoon.', ru: 'Я обычно делаю домашнее задание днем.' },
        { en: 'Good afternoon, can I help you with anything?', ru: 'Добрый день, могу я вам чем-нибудь помочь?' },
        { en: 'Let\'s meet at the cafe this afternoon at three.', ru: 'Давай встретимся в кафе сегодня днем в три часа.' },
        { en: 'He sleeps for an hour every Sunday afternoon.', ru: 'Он спит по часу каждое воскресенье днем.' }
    ]
),

createRichWord('a1_again', 'Again', '/əˈɡen/', 'эгэн', 'Снова / Опять', ProficiencyLevel.A1, 'adv', 'High', 'Neutral',
    'Еще один раз; повторение действия, которое уже происходило ранее. Возврат в прежнее состояние.',
    '- Повтор: "Try again" (Попробуй снова)\n- Встреча: "See you again" (Увидимся снова)\n- Частота: "Again and again" (Снова и снова)',
    [
        { en: 'Can you please say that again slowly?', ru: 'Можете, пожалуйста, сказать это снова, но медленно?' },
        { en: 'I never want to watch that sad movie again.', ru: 'Я больше никогда не хочу смотреть этот грустный фильм.' },
        { en: 'It is raining again so we must stay inside.', ru: 'Снова идет дождь, поэтому мы должны остаться дома.' },
        { en: 'He tried again to open the locked door.', ru: 'Он снова попытался открыть запертую дверь.' }
    ]
),

createRichWord('a1_age', 'Age', '/eɪdʒ/', 'эйдж', 'Возраст', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Количество лет, которое прожил человек или просуществовала вещь. Также может означать историческую эпоху.',
    '- Вопрос: "What is your age?" (Какой у тебя возраст?)\n- Период: "At the age of 10" (В возрасте 10 лет)\n- Старость: "Old age" (Старость)',
    [
        { en: 'What is the age of your oldest brother?', ru: 'Каков возраст твоего старшего брата?' },
        { en: 'Children of this age need a lot of sleep.', ru: 'Детям этого возраста нужно много спать.' },
        { en: 'She learned to read at the age of four.', ru: 'Она научилась читать в возрасте четырех лет.' },
        { en: 'He looks very young for his age.', ru: 'Он выглядит очень молодо для своего возраста.' }
    ]
),

createRichWord('a1_ago', 'Ago', '/əˈɡəʊ/', 'эгоу', 'Назад (по времени)', ProficiencyLevel.A1, 'adv', 'High', 'Neutral',
    'Используется для обозначения времени в прошлом, отсчитываемого от настоящего момента (тому назад).',
    '- Недавно: "A moment ago" (Минуту назад)\n- Давно: "Long time ago" (Давным-давно)\n- Точное время: "Two years ago" (Два года назад)',
    [
        { en: 'I started this new job three months ago.', ru: 'Я начал эту новую работу три месяца назад.' },
        { en: 'We visited London a long time ago.', ru: 'Мы посещали Лондон давным-давно.' },
        { en: 'She left the house ten minutes ago.', ru: 'Она вышла из дома десять минут назад.' },
        { en: 'That shop closed about a year ago.', ru: 'Тот магазин закрылся около года назад.' }
    ]
),

createRichWord('a1_agree', 'Agree', '/əˈɡriː/', 'эгри', 'Соглашаться', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Иметь то же мнение, что и другой человек. Принимать предложение или идею.',
    '- Мнение: "I agree with you" (Я согласен с тобой)\n- Действие: "Agree to help" (Согласиться помочь)\n- Полное согласие: "Totally agree" (Полностью согласен)',
    [
        { en: 'I agree that this is a very good idea.', ru: 'Я согласен, что это очень хорошая идея.' },
        { en: 'Do you agree with his opinion about the book?', ru: 'Ты согласен с его мнением об этой книге?' },
        { en: 'My parents did not agree to buy me a dog.', ru: 'Мои родители не согласились купить мне собаку.' },
        { en: 'We all agree that learning English is important.', ru: 'Мы все согласны, что изучение английского важно.' }
    ]
),

createRichWord('a1_air', 'Air', '/eə/', 'эа', 'Воздух', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Смесь газов, которой мы дышим и которая окружает Землю. Также пространство над землей (в воздухе).',
    '- Качество: "Fresh air" (Свежий воздух)\n- Путешествия: "Travel by air" (Путешествовать самолетом/по воздуху)\n- Улица: "Open air" (На открытом воздухе)',
    [
        { en: 'Please open the window to let in fresh air.', ru: 'Пожалуйста, открой окно, чтобы впустить свежий воздух.' },
        { en: 'Birds can fly high up in the air.', ru: 'Птицы могут летать высоко в воздухе.' },
        { en: 'The air in the mountains is very clean.', ru: 'Воздух в горах очень чистый.' },
        { en: 'I threw the ball into the air.', ru: 'Я подбросил мяч в воздух.' }
    ]
),

createRichWord('a1_all', 'All', '/ɔːl/', 'ол', 'Все / Весь', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Целое количество чего-либо, каждый элемент группы. Означает полноту охвата.',
    '- Время: "All day" (Весь день)\n- Люди: "All of us" (Все мы)\n- Итог: "That is all" (Это всё)',
    [
        { en: 'All the students in my class are friendly.', ru: 'Все ученики в моем классе дружелюбные.' },
        { en: 'I have been waiting for you all day.', ru: 'Я ждал тебя весь день.' },
        { en: 'We ate all the food on the table.', ru: 'Мы съели всю еду на столе.' },
        { en: 'That is all I know about the story.', ru: 'Это всё, что я знаю об этой истории.' }
    ]
),
createRichWord('a1_also', 'Also', '/ˈɔːlsəʊ/', 'олсоу', 'Также', ProficiencyLevel.A1, 'adv', 'High', 'Neutral',
    'Используется для добавления информации; означает "в дополнение", "тоже" или "кроме того".',
    '- Добавление: "I also like it" (Мне это тоже нравится)\n- Перечисление: "And also this" (А также это)\n- Уточнение: "Not only... but also" (Не только... но и)',
    [
      { en: 'She speaks French very well and she also speaks a little Spanish.', ru: 'Она очень хорошо говорит по-французски, а также немного по-испански.' },
      { en: 'I am cold, and I am also hungry and tired after the walk.', ru: 'Мне холодно, а также я голоден и устал после прогулки.' },
      { en: 'He is a talented actor and also a very good writer.', ru: 'Он талантливый актер, а также очень хороший писатель.' },
      { en: 'Please bring your passport, and also bring a copy of your ticket.', ru: 'Пожалуйста, возьмите с собой паспорт, а также копию вашего билета.' }
    ]
),


createRichWord('a1_and', 'And', '/ænd/', 'энд', 'И', ProficiencyLevel.A1, 'conj', 'High', 'Neutral',
    'Союз, используемый для соединения слов, фраз или частей предложений; выражает добавление.',
    '- Соединение: "Black and white" (Черное и белое)\n- Последовательность: "Come and see" (Приди и посмотри)\n- Условие: "Wait and see" (Поживем — увидим)',
    [
      { en: 'I like to eat apples and bananas for breakfast every morning.', ru: 'Я люблю есть яблоки и бананы на завтрак каждое утро.' },
      { en: 'My brother and my sister are playing in the garden right now.', ru: 'Мой брат и моя сестра играют в саду прямо сейчас.' },
      { en: 'She opened the door and walked into the warm, bright room.', ru: 'Она открыла дверь и вошла в теплую, светлую комнату.' },
      { en: 'We need to buy bread, milk, and eggs at the store.', ru: 'Нам нужно купить хлеб, молоко и яйца в магазине.' }
    ]
),


createRichWord('a1_another', 'Another', '/əˈnʌðə/', 'эназэ', 'Другой', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Еще один (дополнительный) того же типа или отличный от того, который уже упоминался.',
    '- Дополнение: "Another cup" (Еще одна чашка)\n- Альтернатива: "Another way" (Другой путь)\n- Время: "Another day" (В другой день)',
    [
      { en: 'I am still hungry, so can I have another piece of cake?', ru: 'Я все еще голоден, можно мне еще один кусок торта?' },
      { en: 'We need to find another way to solve this difficult problem.', ru: 'Нам нужно найти другой способ решить эту сложную проблему.' },
      { en: 'She did not like the dress, so she asked for another one.', ru: 'Ей не понравилось платье, поэтому она попросила другое.' },
      { en: 'Let\'s meet another time when you are not so busy.', ru: 'Давай встретимся в другой раз, когда ты будешь не так занят.' }
    ]
),

createRichWord('a1_answer', 'Answer', '/ˈɑːnsə/', 'ансэ', 'Ответ', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Реакция на вопрос, письмо или обращение; решение задачи или проблемы.\nТакже может выступать как глагол "отвечать".',
    '- Реакция: "Answer the question" (Ответить на вопрос)\n- Связь: "Answer the phone" (Ответить на звонок)\n- Знание: "Know the answer" (Знать ответ)',
    [
      { en: 'Please write your answer on a piece of paper clearly.', ru: 'Пожалуйста, четко напишите свой ответ на листе бумаги.' },
      { en: 'I called him three times, but there was no answer.', ru: 'Я звонил ему три раза, но ответа не было.' },
      { en: 'She knew the correct answer to the difficult math problem.', ru: 'Она знала правильный ответ на сложную математическую задачу.' },
      { en: 'You must answer the door when someone knocks on it.', ru: 'Ты должен открыть (ответить на) дверь, когда кто-то в нее стучит.' }
    ]
),

createRichWord('a1_any', 'Any', '/ˈeni/', 'эни', 'Любой', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Используется для обозначения неопределенного количества или типа; в вопросах и отрицаниях.',
    '- Выбор: "Any time" (В любое время)\n- Количество: "Any money" (Сколько-нибудь денег)\n- Наличие: "Any questions?" (Есть вопросы?)',
    [
      { en: 'Do you have any brothers or sisters in your family?', ru: 'У тебя есть какие-нибудь братья или сестры в семье?' },
      { en: 'I do not have any money in my pocket right now.', ru: 'У меня сейчас нет никаких денег в кармане.' },
      { en: 'You can choose any book from the library to read.', ru: 'Ты можешь выбрать любую книгу из библиотеки для чтения.' },
      { en: 'Is there any milk left in the fridge for my coffee?', ru: 'Осталось ли в холодильнике молоко для моего кофе?' }
    ]
),

createRichWord('a1_arm', 'Arm', '/ɑːm/', 'ам', 'Рука', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Часть человеческого тела от плеча до кисти; верхняя конечность.',
    '- Тело: "Break an arm" (Сломать руку)\n- Действие: "Arm in arm" (Под руку)\n- Мебель: "Arm of a chair" (Подлокотник кресла)',
    [
      { en: 'He broke his left arm while playing football last week.', ru: 'Он сломал левую руку, играя в футбол на прошлой неделе.' },
      { en: 'She carried a heavy bag of groceries under her arm.', ru: 'Она несла тяжелую сумку с продуктами под мышкой.' },
      { en: 'The mother held her baby gently in her arms.', ru: 'Мать нежно держала своего ребенка на руках.' },
      { en: 'Put your arm up if you know the right answer.', ru: 'Поднимите руку, если вы знаете правильный ответ.' }
    ]
),

createRichWord('a1_around', 'Around', '/əˈraʊnd/', 'эраунд', 'Вокруг', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'Расположенный со всех сторон чего-либо; также означает "примерно" при указании чисел или времени.',
    '- Место: "Look around" (Осмотреться)\n- Время: "Around 5 o\'clock" (Около 5 часов)\n- Движение: "Walk around" (Ходить вокруг)',
    [
      { en: 'The earth goes around the sun once every year.', ru: 'Земля оборачивается вокруг Солнца один раз в год.' },
      { en: 'There are many beautiful trees around our big house.', ru: 'Вокруг нашего большого дома много красивых деревьев.' },
      { en: 'I will meet you at the station around six o\'clock.', ru: 'Я встречу тебя на станции около шести часов.' },
      { en: 'We walked around the city center to see the sights.', ru: 'Мы гуляли по центру города, чтобы осмотреть достопримечательности.' }
    ]
),

createRichWord('a1_art', 'Art', '/ɑːt/', 'ат', 'Искусство', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Создание объектов, образов или музыки, которые красивы или выражают чувства; также картины и скульптуры.',
    '- Объект: "Work of art" (Произведение искусства)\n- Место: "Art gallery" (Художественная галерея)\n- Тип: "Modern art" (Современное искусство)',
    [
      { en: 'She is studying art and design at the university.', ru: 'Она изучает искусство и дизайн в университете.' },
      { en: 'We went to the art museum to see the famous paintings.', ru: 'Мы ходили в художественный музей, чтобы увидеть известные картины.' },
      { en: 'Art class is my favorite subject in school this year.', ru: 'Урок рисования — мой любимый предмет в школе в этом году.' },
      { en: 'He creates amazing art using only pencils and paper.', ru: 'Он создает удивительное искусство, используя только карандаши и бумагу.' }
    ]
),

createRichWord('a1_as', 'As', '/æz/', 'эз', 'Как', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'Используется для сравнения, указания функции или роли, а также в значении "в то время как".',
    '- Сравнение: "As good as" (Так же хорош, как)\n- Роль: "Work as a teacher" (Работать учителем)\n- Причина: "As you know" (Как ты знаешь)',
    [
      { en: 'She works as a nurse in the main city hospital.', ru: 'Она работает медсестрой в главной городской больнице.' },
      { en: 'He is as tall as his father now.', ru: 'Он теперь такого же роста, как и его отец.' },
      { en: 'Please do exactly as I tell you to do.', ru: 'Пожалуйста, делай в точности так, как я тебе говорю.' },
      { en: 'As it was raining, we decided to stay at home.', ru: 'Так как шел дождь, мы решили остаться дома.' }
    ]
),

createRichWord('a1_ask', 'Ask', '/ɑːsk/', 'аск', 'Спрашивать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Обращаться к кому-либо с целью получения ответа, информации или помощи; просить.',
    '- Информация: "Ask a question" (Задать вопрос)\n- Помощь: "Ask for help" (Попросить о помощи)\n- Разрешение: "Ask permission" (Спросить разрешения)',
    [
      { en: 'Can I ask you a question about the homework?', ru: 'Могу я задать тебе вопрос по поводу домашнего задания?' },
      { en: 'She asked her mother for a glass of water.', ru: 'Она попросила у мамы стакан воды.' },
      { en: 'Don\'t be afraid to ask if you don\'t understand.', ru: 'Не бойся спрашивать, если ты чего-то не понимаешь.' },
      { en: 'He asked his friend to come to the party.', ru: 'Он пригласил (попросил) своего друга прийти на вечеринку.' }
    ]
),

createRichWord('a1_at', 'At', '/æt/', 'эт', 'В / На', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'Предлог, указывающий на конкретное место, время или состояние.',
    '- Время: "At 5 o\'clock" (В 5 часов)\n- Место: "At home" (Дома)\n- Состояние: "At work" (На работе)',
    [
      { en: 'We will meet you at the bus stop tomorrow morning.', ru: 'Мы встретим тебя на автобусной остановке завтра утром.' },
      { en: 'The movie starts at eight o\'clock in the evening.', ru: 'Фильм начинается в восемь часов вечера.' },
      { en: 'She is at home right now cooking dinner for us.', ru: 'Она сейчас дома, готовит нам ужин.' },
      { en: 'Look at the picture and tell me what you see.', ru: 'Посмотри на картинку и скажи мне, что ты видишь.' }
    ]
),

createRichWord('a1_aunt', 'Aunt', '/ɑːnt/', 'ант', 'Тетя', ProficiencyLevel.A1, 'noun', 'Medium', 'Neutral',
    'Сестра отца или матери; также жена дяди.',
    '- Родственник: "My favorite aunt" (Моя любимая тетя)\n- Семья: "Aunt and uncle" (Тетя и дядя)\n- Обращение: "Aunt Mary" (Тетя Мэри)',
    [
      { en: 'My aunt lives in a small house near the sea.', ru: 'Моя тетя живет в маленьком доме у моря.' },
      { en: 'We are going to visit our aunt this weekend.', ru: 'Мы собираемся навестить нашу тетю в эти выходные.' },
      { en: 'Aunt Jane bakes the best chocolate cakes in the world.', ru: 'Тетя Джейн печет лучшие шоколадные торты в мире.' },
      { en: 'I have three aunts and two uncles in my family.', ru: 'В моей семье три тети и два дяди.' }
    ]
),

createRichWord('a1_autumn', 'Autumn', '/ˈɔːtəm/', 'отэм', 'Осень', ProficiencyLevel.A1, 'noun', 'Medium', 'Neutral',
    'Время года между летом и зимой, когда листья меняют цвет и опадают.',
    '- Сезон: "In the autumn" (Осенью)\n- Природа: "Autumn leaves" (Осенние листья)\n- Период: "Late autumn" (Поздняя осень)',
    [
      { en: 'The trees look very beautiful in the autumn.', ru: 'Деревья выглядят очень красиво осенью.' },
      { en: 'It starts to get colder in autumn before winter comes.', ru: 'Осенью становится холоднее перед приходом зимы.' },
      { en: 'My birthday is in autumn, usually in October.', ru: 'Мой день рождения осенью, обычно в октябре.' },
      { en: 'We like to walk in the park on autumn days.', ru: 'Мы любим гулять в парке в осенние дни.' }
    ]
),

createRichWord('a1_away', 'Away', '/əˈweɪ/', 'эвэй', 'Прочь', ProficiencyLevel.A1, 'adv', 'High', 'Neutral',
    'На расстоянии от какого-либо места или человека; в другом направлении.',
    '- Расстояние: "Far away" (Далеко)\n- Действие: "Go away" (Уходи/Уезжать)\n- Отсутствие: "Be away" (Быть в отъезде)',
    [
      { en: 'Please put your toys away when you finish playing.', ru: 'Пожалуйста, убери свои игрушки, когда закончишь играть.' },
      { en: 'The bird flew away when I came too close.', ru: 'Птица улетела прочь, когда я подошел слишком близко.' },
      { en: 'He is away on a business trip this week.', ru: 'На этой неделе он находится в командировке (в отъезде).' },
      { en: 'Stay away from the fire because it is hot.', ru: 'Держись подальше от огня, потому что он горячий.' }
    ]
  ),

createRichWord('a1_always', 'Always', '/ˈɔːlweɪz/', 'олвэйз', 'Всегда', ProficiencyLevel.A1, 'adv', 'High', 'Neutral',
    'Во всех случаях, в любое время или постоянно; без исключений или перерывов.',
    '- Частота: "Always late" (Всегда опаздывает)\n- Обещание: "Love you always" (Любить тебя всегда)\n- Привычка: "Always drink coffee" (Всегда пью кофе)',
    [
      { en: 'The sun always rises in the east and sets in the west.', ru: 'Солнце всегда встает на востоке и садится на западе.' },
      { en: 'She always helps her mother with the housework on weekends.', ru: 'Она всегда помогает маме по дому в выходные дни.' },
      { en: 'You should always brush your teeth before going to bed at night.', ru: 'Тебе следует всегда чистить зубы перед сном ночью.' },
      { en: 'He is always happy to see his friends at the local park.', ru: 'Он всегда рад видеть своих друзей в местном парке.' }
    ]
),

createRichWord('a1_angry', 'Angry', '/ˈæŋɡri/', 'энгри', 'Злой', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Чувствующий или выражающий сильное недовольство или раздражение по отношению к кому-то или чему-то.',
    '- Эмоция: "Get angry" (Разозлиться)\n- Направленность: "Angry with me" (Зол на меня)\n- Взгляд: "Angry look" (Злой взгляд)',
    [
      { en: 'The teacher was angry because the students did not do their homework.', ru: 'Учитель был зол, потому что ученики не сделали домашнее задание.' },
      { en: 'Please do not be angry with me for breaking your cup.', ru: 'Пожалуйста, не сердись на меня за то, что я разбил твою чашку.' },
      { en: 'He gets angry when people talk loudly during the movie.', ru: 'Он злится, когда люди громко разговаривают во время фильма.' },
      { en: 'She sent him an angry email about the huge delay.', ru: 'Она отправила ему гневное электронное письмо по поводу огромной задержки.' }
    ]
),

createRichWord('a1_animal', 'Animal', '/ˈænɪm(ə)l/', 'энимэл', 'Животное', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Живое существо, которое может двигаться и чувствовать, но не является человеком или растением.',
    '- Тип: "Wild animal" (Дикое животное)\n- Питомец: "Pet animal" (Домашнее животное)\n- Царство: "Animal kingdom" (Царство животных)',
    [
      { en: 'The lion is a very dangerous wild animal living in Africa.', ru: 'Лев — очень опасное дикое животное, обитающее в Африке.' },
      { en: 'My favorite animal is the dog because it is very loyal.', ru: 'Мое любимое животное — собака, потому что она очень преданная.' },
      { en: 'We saw many different animals at the city zoo yesterday.', ru: 'Вчера мы видели много разных животных в городском зоопарке.' },
      { en: 'Doctors say that humans are technically a type of animal too.', ru: 'Врачи говорят, что люди технически тоже являются видом животных.' }
    ]
),

createRichWord('a1_baby', 'Baby', '/ˈbeɪbi/', 'бэйби', 'Младенец', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Очень маленький ребенок, который еще не умеет ходить или говорить.',
    '- Семья: "Newborn baby" (Новорожденный младенец)\n- Уход: "Baby sleeping" (Спящий ребенок)\n- Ласково: "My baby" (Моя крошка)',
    [
      { en: 'The baby is sleeping quietly in her small bed.', ru: 'Младенец тихо спит в своей маленькой кроватке.' },
      { en: 'She held the little baby gently in her arms.', ru: 'Она нежно держала маленького ребенка на руках.' },
      { en: 'The baby started to cry because he was hungry.', ru: 'Ребенок начал плакать, потому что был голоден.' },
      { en: 'They are very happy about having a new baby boy.', ru: 'Они очень счастливы, что у них родился мальчик.' }
    ]
),

createRichWord('a1_back', 'Back', '/bæk/', 'бэк', 'Спина / Назад', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Задняя часть тела человека от шеи до таза; также направление (назад).',
    '- Тело: "Pain in the back" (Боль в спине)\n- Направление: "Go back" (Идти назад)\n- Возвращение: "Come back" (Возвращаться)',
    [
      { en: 'He hurt his back while lifting a heavy box yesterday.', ru: 'Вчера он повредил спину, поднимая тяжелую коробку.' },
      { en: 'Please go back to your seat and sit down.', ru: 'Пожалуйста, вернитесь на свое место и сядьте.' },
      { en: 'She carried her school bag on her back all day.', ru: 'Она весь день носила школьную сумку на спине.' },
      { en: 'I will be back in five minutes, please wait.', ru: 'Я вернусь через пять минут, пожалуйста, подожди.' }
    ]
),

createRichWord('a1_bad', 'Bad', '/bæd/', 'бэд', 'Плохой', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Неприятный, низкого качества или вызывающий проблемы; противоположность хорошему.',
    '- Качество: "Bad idea" (Плохая идея)\n- Погода: "Bad weather" (Плохая погода)\n- Поведение: "Bad habit" (Вредная привычка)',
    [
      { en: 'I had a very bad day at work yesterday.', ru: 'Вчера у меня был очень плохой день на работе.' },
      { en: 'Smoking is extremely bad for your health and lungs.', ru: 'Курение чрезвычайно вредно (плохо) для вашего здоровья и легких.' },
      { en: 'There is a bad smell coming from the fridge.', ru: 'Из холодильника доносится плохой запах.' },
      { en: 'He feels bad because he forgot your birthday.', ru: 'Он чувствует себя плохо, потому что забыл твой день рождения.' }
    ]
),

createRichWord('a1_bag', 'Bag', '/bæɡ/', 'бэг', 'Сумка', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Мягкий контейнер из бумаги, ткани или пластика для переноски вещей.',
    '- Тип: "Plastic bag" (Пластиковый пакет)\n- Путешествия: "Sleeping bag" (Спальный мешок)\n- Покупки: "Shopping bag" (Сумка для покупок)',
    [
      { en: 'She put her books into her school bag carefully.', ru: 'Она аккуратно сложила книги в свою школьную сумку.' },
      { en: 'Can you help me carry this heavy bag, please?', ru: 'Можешь помочь мне донести эту тяжелую сумку, пожалуйста?' },
      { en: 'He lost his bag with all his documents inside.', ru: 'Он потерял свою сумку со всеми документами внутри.' },
      { en: 'I need a bag to put these apples in.', ru: 'Мне нужен пакет, чтобы положить туда эти яблоки.' }
    ]
),

createRichWord('a1_ball', 'Ball', '/bɔːl/', 'бол', 'Мяч', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Круглый предмет, используемый в играх и спорте, или любой предмет сферической формы.',
    '- Спорт: "Play ball" (Играть в мяч)\n- Футбол: "Kick the ball" (Пнуть мяч)\n- Форма: "Ball of wool" (Клубок шерсти)',
    [
      { en: 'The children are playing with a red ball outside.', ru: 'Дети играют с красным мячом на улице.' },
      { en: 'He threw the ball to his dog in the park.', ru: 'Он бросил мяч своей собаке в парке.' },
      { en: 'Can you kick the ball into the goal net?', ru: 'Ты можешь забить (пнуть) мяч в сетку ворот?' },
      { en: 'The cat likes to play with a ball of string.', ru: 'Кошка любит играть с клубком веревки.' }
    ]
),

createRichWord('a1_bank', 'Bank', '/bæŋk/', 'бэнк', 'Банк', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Организация, где люди хранят деньги; или берег реки (реже на A1).',
    '- Финансы: "Bank account" (Банковский счет)\n- Действие: "Go to the bank" (Идти в банк)\n- Природа: "River bank" (Берег реки)',
    [
      { en: 'I need to go to the bank to get money.', ru: 'Мне нужно пойти в банк, чтобы снять деньги.' },
      { en: 'The bank is open from nine to five today.', ru: 'Банк открыт сегодня с девяти до пяти.' },
      { en: 'He keeps all his money in a safe bank.', ru: 'Он хранит все свои деньги в надежном банке.' },
      { en: 'We sat on the bank of the river yesterday.', ru: 'Вчера мы сидели на берегу реки.' }
    ]
),

createRichWord('a1_bar', 'Bar', '/bɑː/', 'ба', 'Бар', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Место, где продаются и употребляются напитки; также кусок чего-либо (шоколада, мыла).',
    '- Заведение: "Go to a bar" (Пойти в бар)\n- Еда: "Chocolate bar" (Плитка шоколада)\n- Предмет: "Bar of soap" (Кусок мыла)',
    [
      { en: 'They met at a bar to have a drink together.', ru: 'Они встретились в баре, чтобы выпить вместе.' },
      { en: 'I bought a bar of chocolate for my sister.', ru: 'Я купил плитку шоколада для своей сестры.' },
      { en: 'Please wash your hands with this bar of soap.', ru: 'Пожалуйста, вымой руки этим куском мыла.' },
      { en: 'The hotel has a small bar on the first floor.', ru: 'В отеле есть небольшой бар на первом этаже.' }
    ]
),

createRichWord('a1_bath', 'Bath', '/bɑːθ/', 'бас', 'Ванна', ProficiencyLevel.A1, 'noun', 'Medium', 'Neutral',
    'Процесс мытья тела в воде или сама емкость для мытья.',
    '- Действие: "Take a bath" (Принимать ванну)\n- Место: "Hot bath" (Горячая ванна)\n- Комната: "Bath towel" (Банное полотенце)',
    [
      { en: 'I like to take a hot bath after work.', ru: 'Я люблю принимать горячую ванну после работы.' },
      { en: 'The water in the bath is too cold now.', ru: 'Вода в ванне сейчас слишком холодная.' },
      { en: 'She is in the bath washing her hair.', ru: 'Она в ванне, моет голову.' },
      { en: 'The baby needs a bath before going to sleep.', ru: 'Ребенка нужно искупать (ванна) перед сном.' }
    ]
),

createRichWord('a1_be', 'Be', '/biː/', 'би', 'Быть', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Самый важный глагол; означает существовать, находиться или являться кем-то (am, is, are, was, were).',
    '- Состояние: "Be happy" (Быть счастливым)\n- Приказ: "Be quiet" (Тихо / Будь тихим)\n- Будущее: "Will be" (Будет)',
    [
      { en: 'I want to be a doctor when I grow up.', ru: 'Я хочу быть врачом, когда вырасту.' },
      { en: 'Please be careful when you cross the busy street.', ru: 'Пожалуйста, будь осторожен, переходя оживленную улицу.' },
      { en: 'She will be at home later in the evening.', ru: 'Она будет дома позже вечером.' },
      { en: 'Don\'t be afraid of the dog, it is friendly.', ru: 'Не бойся собаки, она дружелюбная.' }
    ]
),

createRichWord('a1_beach', 'Beach', '/biːtʃ/', 'бич', 'Пляж', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Песчаный или каменистый берег у моря или океана, где люди отдыхают.',
    '- Отдых: "Go to the beach" (Пойти на пляж)\n- Поверхность: "Sandy beach" (Песчаный пляж)\n- Активность: "Walk on the beach" (Гулять по пляжу)',
    [
      { en: 'We spent the whole day playing on the beach.', ru: 'Мы провели весь день, играя на пляже.' },
      { en: 'The hotel is very close to a beautiful beach.', ru: 'Отель находится очень близко к красивому пляжу.' },
      { en: 'I love walking on the beach in the morning.', ru: 'Я люблю гулять по пляжу по утрам.' },
      { en: 'In summer, the beach is full of happy people.', ru: 'Летом пляж полон счастливых людей.' }
    ]
),

createRichWord('a1_because', 'Because', '/bɪˈkɒz/', 'бикоз', 'Потому что', ProficiencyLevel.A1, 'conj', 'High', 'Neutral',
    'Используется для объяснения причины чего-либо; ответ на вопрос "почему?".',
    '- Причина: "Because of rain" (Из-за дождя)\n- Объяснение: "Just because" (Просто потому что)\n- Связка: "Why? Because..." (Почему? Потому что...)',
    [
      { en: 'I stayed at home because I was very tired.', ru: 'Я остался дома, потому что очень устал.' },
      { en: 'She is happy because she passed her exam today.', ru: 'Она счастлива, потому что сдала экзамен сегодня.' },
      { en: 'We cannot play outside because it is raining hard.', ru: 'Мы не можем играть на улице, потому что идет сильный дождь.' },
      { en: 'He likes her because she is kind and funny.', ru: 'Она нравится ему, потому что она добрая и смешная.' }
    ]
),

createRichWord('a1_become', 'Become', '/bɪˈkʌm/', 'бикам', 'Становиться', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Начинать быть кем-то или чем-то; превращаться или изменяться в состояние.',
    '- Профессия: "Become a teacher" (Стать учителем)\n- Состояние: "Become famous" (Стать известным)\n- Изменение: "Become clear" (Стать ясным)',
    [
      { en: 'He wants to become a famous singer one day.', ru: 'Он хочет однажды стать известным певцом.' },
      { en: 'The weather suddenly became very cold and windy.', ru: 'Погода внезапно стала очень холодной и ветреной.' },
      { en: 'It has become difficult to find a good job.', ru: 'Стало трудно найти хорошую работу.' },
      { en: 'Caterpillars become butterflies after a few weeks.', ru: 'Гусеницы становятся бабочками через несколько недель.' }
    ]
),

createRichWord('a1_bed', 'Bed', '/bed/', 'бед', 'Кровать', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Мебель для сна и отдыха.',
    '- Действие: "Go to bed" (Идти спать)\n- Время: "Time for bed" (Время ложиться спать)\n- Размер: "Double bed" (Двуспальная кровать)',
    [
      { en: 'I am tired and I want to go to bed.', ru: 'Я устал и хочу пойти спать (в кровать).' },
      { en: 'She lay on the bed and read a book.', ru: 'Она лежала на кровати и читала книгу.' },
      { en: 'Make your bed before you leave the room.', ru: 'Заправь свою кровать, прежде чем выйти из комнаты.' },
      { en: 'The cat is sleeping under the bed right now.', ru: 'Кошка сейчас спит под кроватью.' }
    ]
),

createRichWord('a1_before', 'Before', '/bɪˈfɔː/', 'бифо', 'До / Перед', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'Раньше по времени или впереди по месту.',
    '- Время: "Before lunch" (До обеда)\n- Порядок: "Before me" (Передо мной / Раньше меня)\n- Действие: "Day before" (За день до)',
    [
      { en: 'Please wash your hands before you eat dinner.', ru: 'Пожалуйста, вымой руки, перед тем как ужинать.' },
      { en: 'I have never seen this movie before today.', ru: 'Я никогда не видел этот фильм до сегодняшнего дня.' },
      { en: 'We arrived at the station before the train came.', ru: 'Мы прибыли на станцию до того, как пришел поезд.' },
      { en: 'You must finish your work before five o\'clock.', ru: 'Ты должен закончить работу до пяти часов.' }
    ]
),

createRichWord('a1_begin', 'Begin', '/bɪˈɡɪn/', 'бигин', 'Начинать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Приступать к действию; делать первый шаг чего-либо. Синоним слова "start".',
    '- Время: "Begin at 9" (Начинаться в 9)\n- Действие: "Begin to cry" (Начать плакать)\n- Процесс: "Begin working" (Начать работать)',
    [
      { en: 'The movie will begin in ten minutes, hurry up.', ru: 'Фильм начнется через десять минут, поторопись.' },
      { en: 'Let us begin the lesson with a new topic.', ru: 'Давайте начнем урок с новой темы.' },
      { en: 'It began to rain when we left the house.', ru: 'Начал идти дождь, когда мы вышли из дома.' },
      { en: 'She began to learn English two years ago.', ru: 'Она начала учить английский два года назад.' }
    ]
),

createRichWord('a1_behind', 'Behind', '/bɪˈhaɪnd/', 'бихайнд', 'Сзади / За', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'Находящийся на задней стороне чего-либо или скрытый чем-то.',
    '- Место: "Behind the door" (За дверью)\n- Отставание: "Leave behind" (Оставить позади)\n- Позиция: "Look behind" (Оглянуться назад)',
    [
      { en: 'The sun disappeared behind the dark grey clouds.', ru: 'Солнце скрылось за темными серыми тучами.' },
      { en: 'Someone is standing behind the tree in the garden.', ru: 'Кто-то стоит за деревом в саду.' },
      { en: 'Don\'t leave your bag behind when you get off.', ru: 'Не оставь (не забудь) свою сумку, когда будешь выходить.' },
      { en: 'The car park is located behind the big hotel.', ru: 'Парковка расположена позади большого отеля.' }
    ]
),

createRichWord('a1_believe', 'Believe', '/bɪˈliːv/', 'билив', 'Верить', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Думать, что что-то является правдой; иметь веру в кого-то.',
    '- Правда: "Believe me" (Поверь мне)\n- Мнение: "I believe so" (Я полагаю, что так)\n- Вера: "Believe in God" (Верить в Бога)',
    [
      { en: 'I believe that he is telling the truth now.', ru: 'Я верю, что он сейчас говорит правду.' },
      { en: 'Do you believe in ghosts or magic powers?', ru: 'Ты веришь в привидений или магические силы?' },
      { en: 'I cannot believe you ate the whole cake!', ru: 'Я не могу поверить, что ты съел весь торт!' },
      { en: 'Please believe me, I did not break the window.', ru: 'Пожалуйста, поверь мне, я не разбивал окно.' }
    ]
),

createRichWord('a1_below', 'Below', '/bɪˈləʊ/', 'билоу', 'Ниже', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'На более низком уровне, чем что-то другое; под чем-то.',
    '- Температура: "Below zero" (Ниже нуля)\n- Уровень: "Below average" (Ниже среднего)\n- Текст: "See below" (Смотри ниже)',
    [
      { en: 'The temperature outside is five degrees below zero.', ru: 'Температура на улице — пять градусов ниже нуля.' },
      { en: 'Please write your name on the line below.', ru: 'Пожалуйста, напишите свое имя на строке ниже.' },
      { en: 'The sun sank below the horizon and it got dark.', ru: 'Солнце опустилось за (ниже) горизонт, и стемнело.' },
      { en: 'Her apartment is on the floor below ours.', ru: 'Ее квартира находится на этаж ниже нашей.' }
    ]
),

createRichWord('a1_best', 'Best', '/best/', 'бест', 'Лучший', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Самый хороший; превосходная степень от "good".',
    '- Дружба: "Best friend" (Лучший друг)\n- Качество: "Best quality" (Лучшее качество)\n- Старание: "Do my best" (Сделать всё возможное)',
    [
      { en: 'She is my best friend in the whole world.', ru: 'Она моя лучшая подруга во всем мире.' },
      { en: 'This is the best pizza I have ever tasted.', ru: 'Это лучшая пицца, которую я когда-либо пробовал.' },
      { en: 'I will do my best to help you tomorrow.', ru: 'Я сделаю все возможное, чтобы помочь тебе завтра.' },
      { en: 'Summer is the best time to visit this country.', ru: 'Лето — лучшее время для посещения этой страны.' }
    ]
),

createRichWord('a1_better', 'Better', '/ˈbetə/', 'бетэ', 'Лучше', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Более хороший; сравнительная степень от "good".',
    '- Здоровье: "Feel better" (Чувствовать себя лучше)\n- Сравнение: "Better than" (Лучше чем)\n- Совет: "You had better" (Тебе бы лучше)',
    [
      { en: 'I feel much better today than I did yesterday.', ru: 'Я чувствую себя намного лучше сегодня, чем вчера.' },
      { en: 'This red car is better than the blue one.', ru: 'Эта красная машина лучше, чем синяя.' },
      { en: 'The weather is getting better every single day.', ru: 'Погода становится лучше с каждым днем.' },
      { en: 'It is better to be safe than sorry later.', ru: 'Лучше перестраховаться, чем потом жалеть.' }
    ]
),

createRichWord('a1_between', 'Between', '/bɪˈtwiːn/', 'битвин', 'Между', ProficiencyLevel.A1, 'prep', 'High', 'Neutral',
    'В пространстве или времени, разделяющем две вещи, точки или события.',
    '- Выбор: "Choose between" (Выбрать между)\n- Место: "Sit between" (Сидеть между)\n- Время: "Between 5 and 6" (Между 5 и 6)',
    [
      { en: 'The shop is located between the bank and the park.', ru: 'Магазин расположен между банком и парком.' },
      { en: 'I sat between my mother and my father at dinner.', ru: 'За ужином я сидел между мамой и папой.' },
      { en: 'There is a secret between you and me only.', ru: 'Между тобой и мной есть секрет.' },
      { en: 'Come to my office anytime between two and four.', ru: 'Приходи в мой офис в любое время между двумя и четырьмя.' }
    ]
  ),
createRichWord('a1_big', 'Big', '/bɪɡ/', 'биг', 'Большой', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Имеющий значительный размер, степень или количество; противоположность маленькому.',
    '- Размер: "Big house" (Большой дом)\n- Событие: "Big day" (Важный день)\n- Проблема: "Big deal" (Большое дело/проблема)',
    [
      { en: 'They live in a big house with a beautiful garden.', ru: 'Они живут в большом доме с красивым садом.' },
      { en: 'This is a very big problem for our small company.', ru: 'Это очень большая проблема для нашей маленькой компании.' },
      { en: 'He has big blue eyes and short dark hair.', ru: 'У него большие голубые глаза и короткие темные волосы.' },
      { en: 'London is a very big city with many people.', ru: 'Лондон — очень большой город с большим количеством людей.' }
    ]
),

createRichWord('a1_bill', 'Bill', '/bɪl/', 'бил', 'Счет', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Письменное требование об оплате товаров или услуг; в ресторане или за электричество.',
    '- Ресторан: "Ask for the bill" (Попросить счет)\n- Коммуналка: "Electricity bill" (Счет за электричество)\n- Деньги: "Dollar bill" (Долларовая купюра)',
    [
      { en: 'Can we have the bill regarding our dinner, please?', ru: 'Можно нам счет за наш ужин, пожалуйста?' },
      { en: 'He paid the electricity bill late this month.', ru: 'В этом месяце он оплатил счет за электричество с опозданием.' },
      { en: 'I found a ten-dollar bill on the street yesterday.', ru: 'Вчера я нашел на улице десятидолларовую купюру.' },
      { en: 'The bill for the car repair was very expensive.', ru: 'Счет за ремонт машины был очень дорогим.' }
    ]
),

createRichWord('a1_bird', 'Bird', '/bɜːd/', 'бёд', 'Птица', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Животное с перьями и крыльями, которое обычно может летать и откладывает яйца.',
    '- Природа: "Singing bird" (Поющая птица)\n- Время: "Early bird" (Ранняя пташка)\n- Действие: "Feed the birds" (Кормить птиц)',
    [
      { en: 'Look at that beautiful blue bird in the tree.', ru: 'Посмотри на ту красивую синюю птицу на дереве.' },
      { en: 'The bird flew away when the cat came closer.', ru: 'Птица улетела, когда кошка подошла ближе.' },
      { en: 'Birds usually build their nests high in the trees.', ru: 'Птицы обычно вьют свои гнезда высоко на деревьях.' },
      { en: 'I can hear a bird singing outside my window.', ru: 'Я слышу, как за моим окном поет птица.' }
    ]
),

createRichWord('a1_black', 'Black', '/blæk/', 'блэк', 'Черный', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Самый темный цвет, как ночь или уголь; отсутствие света.',
    '- Одежда: "Black dress" (Черное платье)\n- Напиток: "Black coffee" (Черный кофе)\n- Описание: "Black and white" (Черно-белый)',
    [
      { en: 'She wore a beautiful black dress to the party.', ru: 'Она надела красивое черное платье на вечеринку.' },
      { en: 'I like to drink my coffee black with no sugar.', ru: 'Я люблю пить черный кофе без сахара.' },
      { en: 'The sky turned black before the heavy storm started.', ru: 'Небо стало черным перед началом сильной бури.' },
      { en: 'He writes with a black pen on white paper.', ru: 'Он пишет черной ручкой на белой бумаге.' }
    ]
),

createRichWord('a1_blue', 'Blue', '/bluː/', 'блу', 'Синий / Голубой', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Цвет ясного неба или моря в солнечный день.',
    '- Природа: "Blue sky" (Голубое небо)\n- Внешность: "Blue eyes" (Голубые глаза)\n- Настроение: "Feel blue" (Грустить)',
    [
      { en: 'The sky is very blue and clear today.', ru: 'Небо сегодня очень синее и чистое.' },
      { en: 'She has beautiful blue eyes like her mother.', ru: 'У нее красивые голубые глаза, как у ее матери.' },
      { en: 'He painted the walls of his room dark blue.', ru: 'Он покрасил стены своей комнаты в темно-синий цвет.' },
      { en: 'I love swimming in the deep blue sea.', ru: 'Я люблю плавать в глубоком синем море.' }
    ]
),

createRichWord('a1_boat', 'Boat', '/bəʊt/', 'боут', 'Лодка', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Небольшое транспортное средство для передвижения по воде.',
    '- Рыбалка: "Fishing boat" (Рыбацкая лодка)\n- Путешествие: "Take a boat" (Взять лодку/поплыть на лодке)\n- Спорт: "Sail a boat" (Управлять лодкой)',
    [
      { en: 'We crossed the river in a small wooden boat.', ru: 'Мы переплыли реку на маленькой деревянной лодке.' },
      { en: 'They went fishing on a boat early this morning.', ru: 'Они отправились на рыбалку на лодке сегодня рано утром.' },
      { en: 'The boat moved slowly across the calm lake.', ru: 'Лодка медленно двигалась по спокойному озеру.' },
      { en: 'Does this boat go to the island every day?', ru: 'Эта лодка ходит на остров каждый день?' }
    ]
),

createRichWord('a1_body', 'Body', '/ˈbɒdi/', 'боди', 'Тело', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Физическая структура человека или животного; туловище.',
    '- Здоровье: "Whole body" (Все тело)\n- Части: "Body parts" (Части тела)\n- Язык: "Body language" (Язык тела)',
    [
      { en: 'Swimming is very good for your whole body.', ru: 'Плавание очень полезно для всего вашего тела.' },
      { en: 'She has a small scar on her body.', ru: 'У нее есть маленький шрам на теле.' },
      { en: 'You need to keep your body warm in winter.', ru: 'Вам нужно держать тело в тепле зимой.' },
      { en: 'A healthy mind lives in a healthy body.', ru: 'В здоровом теле здоровый дух.' }
    ]
),

createRichWord('a1_book', 'Book', '/bʊk/', 'бук', 'Книга', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Набор печатных страниц, скрепленных вместе, для чтения; также глагол "бронировать".',
    '- Чтение: "Read a book" (Читать книгу)\n- Учеба: "Text book" (Учебник)\n- Действие (глагол): "Book a hotel" (Забронировать отель)',
    [
      { en: 'I am reading a very interesting book right now.', ru: 'Я читаю очень интересную книгу прямо сейчас.' },
      { en: 'She borrowed a book from the school library.', ru: 'Она взяла книгу в школьной библиотеке.' },
      { en: 'Please open your book on page number ten.', ru: 'Пожалуйста, откройте свою книгу на странице номер десять.' },
      { en: 'He wrote a book about his life in Africa.', ru: 'Он написал книгу о своей жизни в Африке.' }
    ]
),

createRichWord('a1_boring', 'Boring', '/ˈbɔːrɪŋ/', 'борин', 'Скучный', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Неинтересный; вызывающий чувство усталости или нетерпения.',
    '- Впечатление: "Boring movie" (Скучный фильм)\n- Человек: "Boring person" (Скучный человек)\n- Работа: "Boring job" (Скучная работа)',
    [
      { en: 'The movie was so boring that I fell asleep.', ru: 'Фильм был таким скучным, что я заснул.' },
      { en: 'It is boring to stay at home all day.', ru: 'Скучно сидеть дома весь день.' },
      { en: 'He thinks that history lessons are very boring.', ru: 'Он думает, что уроки истории очень скучные.' },
      { en: 'She has a boring job in a small office.', ru: 'У нее скучная работа в маленьком офисе.' }
    ]
),

createRichWord('a1_born', 'Born', '/bɔːn/', 'бон', 'Рожденный', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Появившийся на свет; начало жизни. Обычно используется с глаголом "be" (was/were born).',
    '- Дата: "Was born in 1990" (Родился в 1990)\n- Место: "Born in London" (Родился в Лондоне)\n- Талант: "Born leader" (Прирожденный лидер)',
    [
      { en: 'I was born in a small town near the sea.', ru: 'Я родился в маленьком городке у моря.' },
      { en: 'She was born on the first day of May.', ru: 'Она родилась в первый день мая.' },
      { en: 'When were you born, in summer or winter?', ru: 'Когда ты родился, летом или зимой?' },
      { en: 'The baby was born early in the morning.', ru: 'Ребенок родился рано утром.' }
    ]
),

createRichWord('a1_both', 'Both', '/bəʊθ/', 'боус', 'Оба', ProficiencyLevel.A1, 'det', 'High', 'Neutral',
    'Используется для обозначения двух людей или вещей вместе; и тот и другой.',
    '- Люди: "Both of us" (Мы оба)\n- Вещи: "Both hands" (Обе руки)\n- Сочетание: "Both... and" (И... и)',
    [
      { en: 'Both of my sisters live in the same city.', ru: 'Обе мои сестры живут в одном и том же городе.' },
      { en: 'Hold the heavy box with both hands, please.', ru: 'Держи тяжелую коробку обеими руками, пожалуйста.' },
      { en: 'I like both apples and oranges very much.', ru: 'Я очень люблю и яблоки, и апельсины.' },
      { en: 'Both options look good to me right now.', ru: 'Оба варианта кажутся мне хорошими прямо сейчас.' }
    ]
),

createRichWord('a1_bottle', 'Bottle', '/ˈbɒt(ə)l/', 'ботл', 'Бутылка', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Стеклянный или пластиковый контейнер с узким горлышком для жидкостей.',
    '- Материал: "Glass bottle" (Стеклянная бутылка)\n- Содержимое: "Bottle of water" (Бутылка воды)\n- Ребенок: "Baby bottle" (Детская бутылочка)',
    [
      { en: 'Can I have a bottle of water, please?', ru: 'Можно мне бутылку воды, пожалуйста?' },
      { en: 'He opened the bottle of wine for dinner.', ru: 'Он открыл бутылку вина к ужину.' },
      { en: 'Put the empty bottle in the recycling bin.', ru: 'Положи пустую бутылку в корзину для переработки.' },
      { en: 'She bought a small bottle of milk at the shop.', ru: 'Она купила маленькую бутылку молока в магазине.' }
    ]
),

createRichWord('a1_box', 'Box', '/bɒks/', 'бокс', 'Коробка', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Контейнер с жесткими стенками, обычно квадратный или прямоугольный, для хранения вещей.',
    '- Материал: "Cardboard box" (Картонная коробка)\n- Предмет: "Lunch box" (Ланч-бокс)\n- Подарок: "Gift box" (Подарочная коробка)',
    [
      { en: 'There is a large box of toys in the corner.', ru: 'В углу стоит большая коробка с игрушками.' },
      { en: 'Please put the books back in the box.', ru: 'Пожалуйста, положи книги обратно в коробку.' },
      { en: 'He gave her a small red box with a ring.', ru: 'Он дал ей маленькую красную коробочку с кольцом.' },
      { en: 'Can you help me lift this heavy box?', ru: 'Можешь помочь мне поднять эту тяжелую коробку?' }
    ]
),

createRichWord('a1_boy', 'Boy', '/bɔɪ/', 'бой', 'Мальчик', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Ребенок мужского пола или молодой человек.',
    '- Возраст: "Little boy" (Маленький мальчик)\n- Отношения: "Boyfriend" (Парень/бойфренд)\n- Обращение: "Good boy" (Хороший мальчик)',
    [
      { en: 'The little boy is playing with his car.', ru: 'Маленький мальчик играет со своей машинкой.' },
      { en: 'He was a very quiet boy at school.', ru: 'Он был очень тихим мальчиком в школе.' },
      { en: 'That boy is my brother\'s best friend.', ru: 'Тот мальчик — лучший друг моего брата.' },
      { en: 'Boys and girls play together in the park.', ru: 'Мальчики и девочки играют вместе в парке.' }
    ]
),

createRichWord('a1_bread', 'Bread', '/bred/', 'бред', 'Хлеб', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Продукт питания, испеченный из муки, воды и дрожжей.',
    '- Тип: "White bread" (Белый хлеб)\n- Форма: "Slice of bread" (Кусок хлеба)\n- Свежесть: "Fresh bread" (Свежий хлеб)',
    [
      { en: 'I eat toast with bread and butter for breakfast.', ru: 'Я ем тост с хлебом и маслом на завтрак.' },
      { en: 'We need to buy some fresh bread for lunch.', ru: 'Нам нужно купить свежего хлеба на обед.' },
      { en: 'She cut the bread into thin slices.', ru: 'Она нарезала хлеб тонкими ломтиками.' },
      { en: 'Do you prefer white bread or brown bread?', ru: 'Ты предпочитаешь белый хлеб или черный?' }
    ]
),

createRichWord('a1_break', 'Break', '/breɪk/', 'брейк', 'Ломать / Перерыв', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Разделять на куски ударом (ломать); также существительное "перерыв" в работе.',
    '- Повреждение: "Break a leg" (Сломать ногу)\n- Правила: "Break the rules" (Нарушать правила)\n- Отдых: "Take a break" (Сделать перерыв)',
    [
      { en: 'Please be careful not to break the glass.', ru: 'Пожалуйста, будь осторожен, не разбей стакан.' },
      { en: 'I need to take a break from my work.', ru: 'Мне нужно сделать перерыв в работе.' },
      { en: 'Did you break your toy car yesterday?', ru: 'Ты сломал свою игрушечную машинку вчера?' },
      { en: 'It is easy to break a pencil if you push hard.', ru: 'Легко сломать карандаш, если сильно давить.' }
    ]
),

createRichWord('a1_breakfast', 'Breakfast', '/ˈbrekfəst/', 'брекфэст', 'Завтрак', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Первый прием пищи за день, обычно утром.',
    '- Время: "Have breakfast" (Завтракать)\n- Меню: "English breakfast" (Английский завтрак)\n- Место: "Breakfast in bed" (Завтрак в постель)',
    [
      { en: 'I usually eat eggs and toast for breakfast.', ru: 'Я обычно ем яйца и тосты на завтрак.' },
      { en: 'What time do you have breakfast on Sundays?', ru: 'Во сколько ты завтракаешь по воскресеньям?' },
      { en: 'Breakfast is the most important meal of the day.', ru: 'Завтрак — самый важный прием пищи за день.' },
      { en: 'She made a delicious breakfast for the family.', ru: 'Она приготовила вкусный завтрак для семьи.' }
    ]
),

createRichWord('a1_bring', 'Bring', '/brɪŋ/', 'брин', 'Приносить', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Брать что-то или кого-то с собой в место, куда вы идете.',
    '- Объект: "Bring food" (Принести еду)\n- Место: "Bring here" (Принести сюда)\n- Возврат: "Bring back" (Вернуть/Принести назад)',
    [
      { en: 'Please bring me a glass of water.', ru: 'Пожалуйста, принеси мне стакан воды.' },
      { en: 'Did you bring your homework to school today?', ru: 'Ты принес домашнюю работу в школу сегодня?' },
      { en: 'Can I bring my friend to your party?', ru: 'Могу я привести друга на твою вечеринку?' },
      { en: 'Don\'t forget to bring an umbrella with you.', ru: 'Не забудь взять (принести) с собой зонт.' }
    ]
),

createRichWord('a1_brother', 'Brother', '/ˈbrʌðə/', 'бразэ', 'Брат', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Мужчина или мальчик, имеющий тех же родителей, что и другой человек.',
    '- Возраст: "Older brother" (Старший брат)\n- Младший: "Younger brother" (Младший брат)\n- Семья: "Brothers and sisters" (Братья и сестры)',
    [
      { en: 'My older brother helps me with my homework.', ru: 'Мой старший брат помогает мне с домашним заданием.' },
      { en: 'I have one brother and two sisters.', ru: 'У меня есть один брат и две сестры.' },
      { en: 'Her brother plays football for the school team.', ru: 'Ее брат играет в футбол за школьную команду.' },
      { en: 'He fights with his little brother sometimes.', ru: 'Иногда он ссорится со своим младшим братом.' }
    ]
),

createRichWord('a1_brown', 'Brown', '/braʊn/', 'браун', 'Коричневый', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Цвет земли, дерева или шоколада.',
    '- Внешность: "Brown eyes" (Карие глаза)\n- Волосы: "Brown hair" (Коричневые/шатеновые волосы)\n- Предмет: "Brown shoes" (Коричневые туфли)',
    [
      { en: 'She has long brown hair and green eyes.', ru: 'У нее длинные коричневые волосы и зеленые глаза.' },
      { en: 'The bear has thick brown fur to keep warm.', ru: 'У медведя густой коричневый мех, чтобы согреваться.' },
      { en: 'I bought a pair of brown boots for winter.', ru: 'Я купил пару коричневых ботинок на зиму.' },
      { en: 'The leaves turn brown and fall in autumn.', ru: 'Листья становятся коричневыми и опадают осенью.' }
    ]
),

createRichWord('a1_build', 'Build', '/bɪld/', 'билд', 'Строить', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Создавать что-то (дом, стену), соединяя части вместе.',
    '- Объект: "Build a house" (Построить дом)\n- Карьера: "Build a career" (Построить карьеру)\n- Тело: "Body building" (Бодибилдинг/строение тела)',
    [
      { en: 'They want to build a new house next year.', ru: 'Они хотят построить новый дом в следующем году.' },
      { en: 'Birds build nests to protect their eggs.', ru: 'Птицы строят гнезда, чтобы защитить свои яйца.' },
      { en: 'He built a small wooden table for the kitchen.', ru: 'Он построил (сделал) маленький деревянный стол для кухни.' },
      { en: 'It takes a long time to build a bridge.', ru: 'Постройка моста занимает много времени.' }
    ]
  ),

createRichWord('a1_adult', 'Adult', '/ˈædʌlt/', 'эдалт', 'Взрослый', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Человек или животное, которое полностью выросло и развилось; совершеннолетний.',
    '- Возраст: "Become an adult" (Стать взрослым)\n- Билет: "Adult ticket" (Взрослый билет)\n- Ответственность: "Act like an adult" (Вести себя как взрослый)',
    [
      { en: 'One adult ticket to the museum, please.', ru: 'Один взрослый билет в музей, пожалуйста.' },
      { en: 'Children must be with an adult in the pool.', ru: 'Дети должны быть со взрослым в бассейне.' },
      { en: 'An adult lion is a very strong animal.', ru: 'Взрослый лев — очень сильное животное.' },
      { en: 'Now that you are eighteen, you are legally an adult.', ru: 'Теперь, когда тебе восемнадцать, ты официально взрослый.' }
    ]
),

createRichWord('a1_apartment', 'Apartment', '/əˈpɑːtmənt/', 'эпатмэнт', 'Квартира', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Набор комнат для проживания, обычно на одном этаже большого здания (американский вариант слова Flat).',
    '- Жилье: "Rent an apartment" (Снять квартиру)\n- Размер: "One-room apartment" (Однокомнатная квартира)\n- Место: "Live in an apartment" (Жить в квартире)',
    [
      { en: 'We live in a small apartment in the city center.', ru: 'Мы живем в маленькой квартире в центре города.' },
      { en: 'His apartment is on the fifth floor of the building.', ru: 'Его квартира находится на пятом этаже здания.' },
      { en: 'They bought a new apartment with a big kitchen.', ru: 'Они купили новую квартиру с большой кухней.' },
      { en: 'I am looking for a cheap apartment to rent.', ru: 'Я ищу дешевую квартиру для аренды.' }
    ]
),

createRichWord('a1_apple', 'Apple', '/ˈæp(ə)l/', 'эпл', 'Яблоко', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Круглый фрукт с красной, зеленой или желтой кожицей и твердой белой мякотью.',
    '- Еда: "Eat an apple" (Съесть яблоко)\n- Напиток: "Apple juice" (Яблочный сок)\n- Дерево: "Apple tree" (Яблоня)',
    [
      { en: 'I eat an apple every day for lunch.', ru: 'Я съедаю яблоко каждый день на обед.' },
      { en: 'She bought a bag of red apples at the market.', ru: 'Она купила пакет красных яблок на рынке.' },
      { en: 'Do you like apple pie with ice cream?', ru: 'Тебе нравится яблочный пирог с мороженым?' },
      { en: 'He gave the teacher a fresh green apple.', ru: 'Он дал учителю свежее зеленое яблоко.' }
    ]
),

createRichWord('a1_april', 'April', '/ˈeɪprəl/', 'эйприл', 'Апрель', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Четвертый месяц года, между мартом и маем.',
    '- Время: "In April" (В апреле)\n- Дата: "April 1st" (Первое апреля)\n- Погода: "April showers" (Апрельские ливни)',
    [
      { en: 'My birthday is in April, in the spring.', ru: 'Мой день рождения в апреле, весной.' },
      { en: 'It often rains a lot in April here.', ru: 'Здесь в апреле часто идут дожди.' },
      { en: 'The flowers start to grow in April.', ru: 'Цветы начинают расти в апреле.' },
      { en: 'School ends in June, not in April.', ru: 'Школа заканчивается в июне, а не в апреле.' }
    ]
  ),
createRichWord('a1_august', 'August', '/ˈɔːɡəst/', 'огэст', 'Август', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Восьмой месяц года, следующий за июлем и предшествующий сентябрю.',
    '- Время: "In August" (В августе)\n- Сезон: "Hot August" (Жаркий август)\n- Дата: "August 1st" (Первое августа)',
    [
      { en: 'We usually go on holiday in August every year.', ru: 'Мы обычно ездим в отпуск в августе каждый год.' },
      { en: 'August is the last month of summer in this country.', ru: 'Август — последний месяц лета в этой стране.' },
      { en: 'My sister was born on the fifth of August.', ru: 'Моя сестра родилась пятого августа.' },
      { en: 'School starts in September, right after August ends.', ru: 'Школа начинается в сентябре, сразу после окончания августа.' }
    ]
),

createRichWord('a1_bacon', 'Bacon', '/ˈbeɪkən/', 'бейкэн', 'Бекон', ProficiencyLevel.A1, 'noun', 'Medium', 'Neutral',
    'Соленое или копченое свиное мясо, обычно нарезанное тонкими ломтиками.',
    '- Еда: "Eggs and bacon" (Яичница с беконом)\n- Приготовление: "Fry bacon" (Жарить бекон)\n- Вкус: "Crispy bacon" (Хрустящий бекон)',
    [
      { en: 'I like to eat eggs and bacon for breakfast.', ru: 'Я люблю есть яйца и бекон на завтрак.' },
      { en: 'She fried some bacon in the pan for the sandwich.', ru: 'Она пожарила немного бекона на сковороде для сэндвича.' },
      { en: 'The smell of cooking bacon makes me very hungry.', ru: 'Запах жареного бекона вызывает у меня сильный голод.' },
      { en: 'Do you want crispy bacon or soft bacon today?', ru: 'Ты хочешь хрустящий бекон или мягкий сегодня?' }
    ]
),

createRichWord('a1_banana', 'Banana', '/bəˈnɑːnə/', 'бэнанэ', 'Банан', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Длинный изогнутый фрукт с желтой кожурой и мягкой сладкой мякотью.',
    '- Еда: "Peel a banana" (Почистить банан)\n- Количество: "Bunch of bananas" (Связка бананов)\n- Цвет: "Yellow banana" (Желтый банан)',
    [
      { en: 'Monkeys like to eat bananas in the zoo.', ru: 'Обезьяны любят есть бананы в зоопарке.' },
      { en: 'I put a banana in my lunch box today.', ru: 'Я положил банан в свой ланч-бокс сегодня.' },
      { en: 'This banana is green and not ready to eat.', ru: 'Этот банан зеленый и еще не готов к употреблению.' },
      { en: 'She made a delicious cake with bananas and chocolate.', ru: 'Она приготовила вкусный торт с бананами и шоколадом.' }
    ]
),

createRichWord('a1_beer', 'Beer', '/bɪə/', 'биэ', 'Пиво', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Алкогольный напиток, приготовленный из зерна (ячменя) и хмеля.',
    '- Напиток: "Drink beer" (Пить пиво)\n- Количество: "Bottle of beer" (Бутылка пива)\n- Место: "Pub beer" (Пабное пиво)',
    [
      { en: 'He drank a glass of cold beer after work.', ru: 'Он выпил стакан холодного пива после работы.' },
      { en: 'They sell many different types of beer here.', ru: 'Здесь продают много разных видов пива.' },
      { en: 'I do not like the bitter taste of beer.', ru: 'Мне не нравится горький вкус пива.' },
      { en: 'Can I have a beer with my pizza, please?', ru: 'Можно мне пива к пицце, пожалуйста?' }
    ]
),

createRichWord('a1_bike', 'Bike', '/baɪk/', 'байк', 'Велосипед', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Транспортное средство с двумя колесами, которое приводится в движение педалями (сокращение от bicycle).',
    '- Движение: "Ride a bike" (Кататься на велосипеде)\n- Владение: "My bike" (Мой велосипед)\n- Спорт: "Mountain bike" (Горный велосипед)',
    [
      { en: 'I ride my bike to school every single morning.', ru: 'Я езжу на велосипеде в школу каждое утро.' },
      { en: 'He fell off his bike and hurt his knee.', ru: 'Он упал с велосипеда и ушиб колено.' },
      { en: 'Can you teach me how to ride a bike?', ru: 'Ты можешь научить меня кататься на велосипеде?' },
      { en: 'We went for a long bike ride in the park.', ru: 'Мы отправились на долгую велопрогулку в парке.' }
    ]
  ),
createRichWord('a1_blonde', 'Blonde', '/blɒnd/', 'блонд', 'Светлый / Блондин(ка)', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Имеющий светлые или желтые волосы; используется для описания цвета волос или человека.',
    '- Внешность: "Blonde hair" (Светлые волосы)\n- Человек: "Tall blonde" (Высокая блондинка)\n- Оттенок: "Dark blonde" (Темно-русый)',
    [
      { en: 'She has long blonde hair and blue eyes.', ru: 'У нее длинные светлые волосы и голубые глаза.' },
      { en: 'My sister is blonde, but I have dark hair.', ru: 'Моя сестра блондинка, но у меня темные волосы.' },
      { en: 'He painted the walls a light blonde colour.', ru: 'Он покрасил стены в светло-желтый цвет.' },
      { en: 'The little girl with blonde curls is playing.', ru: 'Маленькая девочка со светлыми кудрями играет.' }
    ]
),

createRichWord('a1_boot', 'Boot', '/buːt/', 'бут', 'Ботинок / Сапог', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Тип обуви, который закрывает стопу и лодыжку (иногда и ногу выше).',
    '- Обувь: "Winter boots" (Зимние сапоги)\n- Спорт: "Football boot" (Футбольная бутса)\n- Автомобиль: "Car boot" (Багажник машины - брит.)',
    [
      { en: 'I need to buy warm boots for the winter.', ru: 'Мне нужно купить теплые ботинки на зиму.' },
      { en: 'Put your boots on before you go outside.', ru: 'Надень ботинки, прежде чем выходить на улицу.' },
      { en: 'These black boots are very comfortable to walk in.', ru: 'В этих черных ботинках очень удобно ходить.' },
      { en: 'He put his heavy bag in the car boot.', ru: 'Он положил свою тяжелую сумку в багажник машины.' }
    ]
  ),
createRichWord('a1_bicycle', 'Bicycle', '/ˈbaɪsɪk(ə)l/', 'байсикл', 'Велосипед', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Транспортное средство с двумя колесами, которое движется, когда вы крутите педали.',
    '- Действие: "Ride a bicycle" (Кататься на велосипеде)\n- Транспорт: "Go by bicycle" (Ехать на велосипеде)\n- Часть: "Bicycle wheel" (Велосипедное колесо)',
    [
      { en: 'I ride my bicycle to the park every Sunday.', ru: 'Я езжу на велосипеде в парк каждое воскресенье.' },
      { en: 'My bicycle is blue and has a small basket.', ru: 'Мой велосипед синий, и у него есть маленькая корзинка.' },
      { en: 'Can you repair my bicycle for me, please?', ru: 'Можешь починить мой велосипед, пожалуйста?' },
      { en: 'She learned to ride a bicycle when she was five.', ru: 'Она научилась кататься на велосипеде, когда ей было пять.' }
    ]
  ),
createRichWord('a1_alphabet', 'Alphabet', '/ˈælfəbet/', 'элфэбет', 'Алфавит', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Набор букв, расположенных в определенном порядке, используемый для написания слов языка.',
    '- Обучение: "Learn the alphabet" (Учить алфавит)\n- Порядок: "Alphabetical order" (Алфавитный порядок)\n- Язык: "English alphabet" (Английский алфавит)',
    [
      { en: 'There are twenty-six letters in the English alphabet.', ru: 'В английском алфавите двадцать шесть букв.' },
      { en: 'Children learn the alphabet at school.', ru: 'Дети учат алфавит в школе.' },
      { en: 'Can you say the alphabet backwards?', ru: 'Ты можешь произнести алфавит задом наперед?' },
      { en: 'A comes before B in the alphabet.', ru: 'А идет перед B в алфавите.' }
    ]
  ),
createRichWord('a1_abc', 'ABC', '/ˌeɪ biː ˈsiː/', 'эй-би-си', 'Алфавит / Азбука', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Алфавит или самые базовые знания по какому-либо предмету.',
    '- Основы: "The ABC of cooking" (Азы кулинарии)\n- Обучение: "Learn your ABCs" (Учить алфавит)\n- Простота: "Easy as ABC" (Просто как дважды два)',
    [
      { en: 'The children are learning their ABCs in school.', ru: 'Дети учат алфавит в школе.' },
      { en: 'It is as easy as ABC to use this phone.', ru: 'Пользоваться этим телефоном проще простого.' },
      { en: 'He knows the ABC of car repair.', ru: 'Он знает азы ремонта автомобилей.' },
      { en: 'The teacher wrote the ABC on the blackboard.', ru: 'Учитель написал алфавит на классной доске.' }
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
createRichWord('a1_cook', 'Cook', '/kʊk/', 'кук', 'Готовить', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Приготавливать пищу, используя тепло (жарить, варить, печь). Также может означать самого повара.',
    '- Быт: "Cook dinner" (Готовить ужин)\n- Профессия: "A good cook" (Хороший повар)\n- Процесс: "Cook well" (Хорошо готовиться/вариться)',
    [
      { en: 'I cook dinner for my family every evening.', ru: 'Я готовлю ужин для своей семьи каждый вечер.' },
      { en: 'My father likes to cook pasta on Sundays.', ru: 'Мой папа любит готовить пасту по воскресеньям.' },
      { en: 'Can you cook fish or meat?', ru: 'Ты умеешь готовить рыбу или мясо?' },
      { en: 'She is a great cook in this restaurant.', ru: 'Она отличный повар в этом ресторане.' }
    ],
    [
        { meaning: "A person who prepares food", translation: "Повар", example: { en: "The cook made a delicious soup.", ru: "Повар приготовил вкусный суп." } },
        { meaning: "To undergo cooking", translation: "Вариться/Жариться", example: { en: "Let the rice cook for 20 minutes.", ru: "Дайте рису повариться 20 минут." } }
    ]
),

createRichWord('a1_country', 'Country', '/ˈkʌn.tri/', 'кантри', 'Страна', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Территория с собственным правительством (государство) или сельская местность за пределами городов.',
    '- География: "Big country" (Большая страна)\n- Происхождение: "Native country" (Родная страна)\n- Местность: "Live in the country" (Жить за городом)',
    [
      { en: 'Russia is a very big country.', ru: 'Россия — очень большая страна.' },
      { en: 'Which country are you from?', ru: 'Из какой ты страны?' },
      { en: 'I want to visit a hot country in summer.', ru: 'Я хочу посетить жаркую страну летом.' },
      { en: 'My grandparents live in the quiet country.', ru: 'Мои бабушка и дедушка живут в тихой сельской местности.' }
    ],
    [
        { meaning: "Rural area (not city)", translation: "Сельская местность / Деревня", example: { en: "We went for a walk in the country.", ru: "Мы пошли гулять за город (в деревню)." } },
        { meaning: "Music genre", translation: "Кантри (музыка)", example: { en: "He loves listening to country music.", ru: "Он обожает слушать кантри." } }
    ]
),

createRichWord('a1_cup', 'Cup', '/kʌp/', 'кап', 'Чашка', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Небольшой открытый сосуд с ручкой, используемый для питья чая, кофе и других напитков.',
    '- Напитки: "Cup of tea" (Чашка чая)\n- Спорт: "World Cup" (Кубок мира)\n- Количество: "Half a cup" (Полчашки)',
    [
      { en: 'I drink a cup of coffee every morning.', ru: 'Я выпиваю чашку кофе каждое утро.' },
      { en: 'Would you like a cup of tea?', ru: 'Хотели бы вы чашку чая?' },
      { en: 'Please wash your cup after lunch.', ru: 'Пожалуйста, помой свою чашку после обеда.' },
      { en: 'He broke my favorite blue cup.', ru: 'Он разбил мою любимую синюю чашку.' }
    ],
    [
        { meaning: "Prize/Trophy", translation: "Кубок (приз)", example: { en: "Brazil won the World Cup.", ru: "Бразилия выиграла Чемпионат мира (Кубок мира)." } },
        { meaning: "Shape with hands", translation: "Складывать пригоршней", example: { en: "She cupped her hands to catch water.", ru: "Она сложила ладони лодочкой, чтобы набрать воды." } }
    ]
),

createRichWord('a1_dad', 'Dad', '/dæd/', 'дэд', 'Папа', ProficiencyLevel.A1, 'noun', 'High', 'Informal',
    'Неформальное, ласковое обращение к отцу. Используется в разговорной речи чаще, чем "father".',
    '- Семья: "My dad" (Мой папа)\n- Обращение: "Thanks, dad" (Спасибо, пап)\n- Действие: "Dad is working" (Папа работает)',
    [
      { en: 'My dad works in a big office.', ru: 'Мой папа работает в большом офисе.' },
      { en: 'I love playing football with my dad.', ru: 'Я люблю играть в футбол с папой.' },
      { en: 'Dad, can you help me with homework?', ru: 'Пап, ты можешь помочь мне с домашним заданием?' },
      { en: 'Her dad drives a red car.', ru: 'Её папа водит красную машину.' }
    ],
    [
        { meaning: "Father (Formal equivalent)", translation: "Отец", example: { en: "He is a father of two.", ru: "Он отец двоих детей." } }
    ]
),

createRichWord('a1_dance', 'Dance', '/dɑːns/', 'данс', 'Танцевать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Двигаться под музыку в определенном ритме. Также может означать само мероприятие (танец).',
    '- Хобби: "Like to dance" (Любить танцевать)\n- Событие: "School dance" (Школьная дискотека)\n- Стиль: "Dance class" (Урок танцев)',
    [
      { en: 'Do you like to dance at parties?', ru: 'Тебе нравится танцевать на вечеринках?' },
      { en: 'She can dance ballet very well.', ru: 'Она умеет очень хорошо танцевать балет.' },
      { en: 'Let\'s dance to this nice song.', ru: 'Давай потанцуем под эту хорошую песню.' },
      { en: 'They danced all night long.', ru: 'Они танцевали всю ночь напролёт.' }
    ],
    [
        { meaning: "A series of movements (noun)", translation: "Танец", example: { en: "The first dance was beautiful.", ru: "Первый танец был прекрасен." } },
        { meaning: "Social gathering", translation: "Танцевальный вечер / Дискотека", example: { en: "Are you going to the dance?", ru: "Ты идешь на танцы?" } }
    ]
),

createRichWord('a1_daughter', 'Daughter', '/ˈdɔː.tər/', 'дотэ', 'Дочь', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Ребенок женского пола по отношению к родителям.',
    '- Семья: "Their daughter" (Их дочь)\n- Отношения: "Loving daughter" (Любящая дочь)\n- Возраст: "Young daughter" (Маленькая дочь)',
    [
      { en: 'They have one son and two daughters.', ru: 'У них один сын и две дочери.' },
      { en: 'My daughter goes to school every day.', ru: 'Моя дочь ходит в школу каждый день.' },
      { en: 'Is she your sister or your daughter?', ru: 'Она твоя сестра или твоя дочь?' },
      { en: 'His daughter plays the piano nicely.', ru: 'Его дочь красиво играет на пианино.' }
    ],
    [
       { meaning: "Female descendant", translation: "Потомок (женского пола)", example: { en: "Daughter of Eve.", ru: "Дочь Евы." } }
    ]
),

createRichWord('a1_day', 'Day', '/deɪ/', 'дей', 'День', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Период в 24 часа или светлое время суток, когда солнце находится над горизонтом.',
    '- Время: "Every day" (Каждый день)\n- Приветствие: "Good day" (Добрый день)\n- Календарь: "Birthday" (День рождения)',
    [
      { en: 'There are seven days in a week.', ru: 'В неделе семь дней.' },
      { en: 'Have a nice day at work!', ru: 'Хорошего дня на работе!' },
      { en: 'I sleep at night and work by day.', ru: 'Я сплю ночью и работаю днём.' },
      { en: 'What day is it today?', ru: 'Какой сегодня день?' }
    ],
    [
        { meaning: "Daylight hours", translation: "Светлое время суток", example: { en: "It is clear as day.", ru: "Это ясно как день." } },
        { meaning: "Era/Period", translation: "Эпоха / Время", example: { en: "In my younger days...", ru: "В дни моей молодости..." } }
    ]
),

createRichWord('a1_dear', 'Dear', '/dɪər/', 'диэ', 'Дорогой', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Используется как ласковое обращение к любимым людям или как вежливое начало письма.',
    '- Письмо: "Dear Mary" (Дорогая Мэри)\n- Чувства: "My dear friend" (Мой дорогой друг)\n- Цена: "Too dear" (Слишком дорогой - брит.)',
    [
      { en: 'Dear Mum, I miss you very much.', ru: 'Дорогая мама, я очень по тебе скучаю.' },
      { en: 'She is a very dear friend of mine.', ru: 'Она моя очень дорогая подруга.' },
      { en: 'Oh dear, I lost my keys!', ru: 'О боже, я потерял ключи!' },
      { en: 'This car is too dear for me.', ru: 'Эта машина слишком дорогая для меня (брит.).' }
    ],
    [
        { meaning: "Expensive (British English)", translation: "Дорогостоящий", example: { en: "Everything is so dear in London.", ru: "В Лондоне всё такое дорогое." } },
        { meaning: "Exclamation", translation: "Боже мой (восклицание)", example: { en: "Oh dear! What happened?", ru: "О боже! Что случилось?" } }
    ]
),

createRichWord('a1_delicious', 'Delicious', '/dɪˈlɪʃ.əs/', 'дэлишэс', 'Вкусный', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Имеющий очень приятный вкус или запах. Более сильное слово, чем просто "tasty".',
    '- Еда: "Delicious meal" (Вкусная еда)\n- Запах: "Smells delicious" (Пахнет вкусно)\n- Вид: "Look delicious" (Выглядеть аппетитно)',
    [
      { en: 'This cake is absolutely delicious.', ru: 'Этот торт просто восхитительный.' },
      { en: 'Thank you for a delicious dinner.', ru: 'Спасибо за вкусный ужин.' },
      { en: 'Fresh bread smells delicious.', ru: 'Свежий хлеб пахнет очень вкусно.' },
      { en: 'The fruit salad looks delicious.', ru: 'Фруктовый салат выглядит очень аппетитно.' }
    ],
    [
        { meaning: "Enjoyable (Irony/Metaphor)", translation: "Восхитительный (перен.)", example: { en: "A delicious joke.", ru: "Восхитительная шутка." } }
    ]
),

createRichWord('a1_die', 'Die', '/daɪ/', 'дай', 'Умирать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Перестать жить, прекратить существование.',
    '- Жизнь: "Die young" (Умереть молодым)\n- Причина: "Die of hunger" (Умереть от голода)\n- Техника: "Battery died" (Батарейка села)',
    [
      { en: 'Flowers die without water.', ru: 'Цветы умирают без воды.' },
      { en: 'Many people died in the war.', ru: 'Много людей погибло на войне.' },
      { en: 'My phone battery is going to die.', ru: 'Батарейка на моем телефоне сейчас сядет.' },
      { en: 'He does not want to die alone.', ru: 'Он не хочет умирать в одиночестве.' }
    ],
    [
        { meaning: "Stop working (machine)", translation: "Сломаться / Сесть (о батарейке)", example: { en: "The engine died suddenly.", ru: "Двигатель внезапно заглох." } },
        { meaning: "Fade away (sound/light)", translation: "Угасать", example: { en: "The music died away.", ru: "Музыка затихла." } }
    ]
),

createRichWord('a1_difference', 'Difference', '/ˈdɪf.ər.əns/', 'дифренс', 'Разница', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'То, чем два или более предмета (или человека) отличаются друг от друга.',
    '- Сравнение: "Big difference" (Большая разница)\n- Выбор: "What is the difference?" (В чем разница?)\n- Влияние: "Make a difference" (Иметь значение)',
    [
      { en: 'I can not see the difference between them.', ru: 'Я не вижу разницы между ними.' },
      { en: 'There is a big difference in price.', ru: 'Существует большая разница в цене.' },
      { en: 'What is the difference between red and blue?', ru: 'В чем разница между красным и синим?' },
      { en: 'Your help made a big difference.', ru: 'Твоя помощь сыграла большую роль.' }
    ],
    [
        { meaning: "Disagreement", translation: "Разногласие", example: { en: "We had a slight difference of opinion.", ru: "У нас возникло небольшое расхождение во мнениях." } },
        { meaning: "Math result", translation: "Разность (мат.)", example: { en: "The difference between 10 and 4 is 6.", ru: "Разность между 10 и 4 равна 6." } }
    ]
),

createRichWord('a1_different', 'Different', '/ˈdɪf.ər.ənt/', 'дифрент', 'Разный', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Не такой, как другие; отличающийся.',
    '- Сравнение: "Different from" (Отличный от)\n- Разнообразие: "Different colors" (Разные цвета)\n- Мнение: "Different idea" (Другая идея)',
    [
      { en: 'We have very different ideas.', ru: 'У нас очень разные идеи.' },
      { en: 'My new house is different from the old one.', ru: 'Мой новый дом отличается от старого.' },
      { en: 'She likes to wear different clothes.', ru: 'Ей нравится носить разную одежду.' },
      { en: 'I want to try something different today.', ru: 'Я хочу попробовать что-то другое сегодня.' }
    ],
    [
         { meaning: "Various/Separate", translation: "Различные", example: { en: "I visited three different cities.", ru: "Я посетил три различных города." } }
    ]
),

createRichWord('a1_difficult', 'Difficult', '/ˈdɪf.ɪ.kəlt/', 'дификалт', 'Трудный', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Требующий усилий, знаний или навыков для выполнения; не легкий. Сложный для понимания.',
    '- Задание: "Difficult test" (Сложный тест)\n- Ситуация: "Difficult time" (Трудное время)\n- Характер: "Difficult person" (Тяжелый человек)',
    [
      { en: 'English is not a difficult language.', ru: 'Английский — не сложный язык.' },
      { en: 'The exam was very difficult for me.', ru: 'Экзамен был очень трудным для меня.' },
      { en: 'It is difficult to understand him.', ru: 'Его трудно понять.' },
      { en: 'She had a difficult day at work.', ru: 'У неё был тяжелый день на работе.' }
    ],
    [
        { meaning: "Hard to please/deal with", translation: "Тяжелый (о человеке)", example: { en: "Stop being so difficult!", ru: "Перестань быть таким сложным (капризным)!" } }
    ]
),

createRichWord('a1_dinner', 'Dinner', '/ˈdɪn.ər/', 'динэ', 'Ужин', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Главный прием пищи за день, обычно вечером. В некоторых культурах может быть днем.',
    '- Время: "Have dinner" (Ужинать)\n- Еда: "Make dinner" (Готовить ужин)\n- Событие: "Dinner party" (Званый ужин)',
    [
      { en: 'We usually have dinner at seven o\'clock.', ru: 'Мы обычно ужинаем в семь часов.' },
      { en: 'What do you want for dinner?', ru: 'Что ты хочешь на ужин?' },
      { en: 'Let\'s go out for dinner tonight.', ru: 'Давай поужинаем где-нибудь сегодня вечером.' },
      { en: 'Dinner is ready, please come to the table.', ru: 'Ужин готов, пожалуйста, идите к столу.' }
    ],
    [
        { meaning: "Formal banquet", translation: "Званый обед/ужин", example: { en: "The annual club dinner.", ru: "Ежегодный ужин клуба." } }
    ]
),

createRichWord('a1_dirty', 'Dirty', '/ˈdɜː.ti/', 'дёти', 'Грязный', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Не чистый; покрытый грязью, пылью или пятнами.',
    '- Вид: "Dirty hands" (Грязные руки)\n- Одежда: "Dirty shirt" (Грязная рубашка)\n- Действие: "Get dirty" (Испачкаться)',
    [
      { en: 'Wash your dirty hands before eating.', ru: 'Помой свои грязные руки перед едой.' },
      { en: 'The floor is very dirty.', ru: 'Пол очень грязный.' },
      { en: 'Don\'t leave dirty dishes in the kitchen.', ru: 'Не оставляй грязную посуду на кухне.' },
      { en: 'My car is dirty after the rain.', ru: 'Моя машина грязная после дождя.' }
    ],
    [
        { meaning: "Dishonest/Unfair", translation: "Нечестный / Подлый", example: { en: "That was a dirty trick.", ru: "Это был подлый трюк." } },
        { meaning: "Obscene", translation: "Непристойный", example: { en: "Dirty jokes.", ru: "Пошлые шутки." } }
    ]
),

createRichWord('a1_do', 'Do', '/duː/', 'ду', 'Делать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Выполнять действие, заниматься чем-либо. Также используется как вспомогательный глагол для вопросов и отрицаний.',
    '- Работа: "Do homework" (Делать домашку)\n- Быт: "Do the dishes" (Мыть посуду)\n- Вопрос: "Do you like?" (Тебе нравится?)',
    [
      { en: 'I do my homework every evening.', ru: 'Я делаю домашнюю работу каждый вечер.' },
      { en: 'What do you do on Sundays?', ru: 'Чем ты занимаешься по воскресеньям?' },
      { en: 'Please do me a favor.', ru: 'Пожалуйста, сделай мне одолжение.' },
      { en: 'Do you speak English?', ru: 'Вы говорите по-английски?' }
    ],
    [
        { meaning: "Auxiliary verb", translation: "Вспомогательный глагол (не переводится)", example: { en: "I do not know.", ru: "Я не знаю." } },
        { meaning: "Suffice/Be enough", translation: "Быть достаточным / Годиться", example: { en: "That will do.", ru: "Этого будет достаточно." } }
    ]
),

createRichWord('a1_doctor', 'Doctor', '/ˈdɒk.tər/', 'доктэ', 'Врач', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Человек, обученный лечить больных людей.',
    '- Визит: "See a doctor" (Идти к врачу)\n- Тип: "Family doctor" (Семейный врач)\n- Здоровье: "Call a doctor" (Вызвать врача)',
    [
      { en: 'I need to go to the doctor.', ru: 'Мне нужно пойти к врачу.' },
      { en: 'The doctor gave me some medicine.', ru: 'Врач дал мне лекарство.' },
      { en: 'Is there a doctor on the plane?', ru: 'Есть ли врач в самолете?' },
      { en: 'My sister wants to be a doctor.', ru: 'Моя сестра хочет стать врачом.' }
    ],
    [
        { meaning: "PhD holder", translation: "Доктор наук", example: { en: "He is a Doctor of Philosophy.", ru: "Он доктор философских наук." } }
    ]
),

createRichWord('a1_dog', 'Dog', '/dɒɡ/', 'дог', 'Собака', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Популярное домашнее животное, часто называемое другом человека.',
    '- Питомец: "Walk the dog" (Выгуливать собаку)\n- Порода: "Big dog" (Большая собака)\n- Звук: "Barking dog" (Лающая собака)',
    [
      { en: 'My dog likes to run in the park.', ru: 'Моя собака любит бегать в парке.' },
      { en: 'Do you have a cat or a dog?', ru: 'У тебя есть кошка или собака?' },
      { en: 'The dog is sleeping under the table.', ru: 'Собака спит под столом.' },
      { en: 'Beware of the dog.', ru: 'Остерегайтесь собаки.' }
    ],
    [
        { meaning: "Unpleasant person (Slang)", translation: "Неприятный человек / Уродец", example: { en: "Dirty dog.", ru: "Грязный тип." } },
        { meaning: "Follow closely (verb)", translation: "Преследовать", example: { en: "Bad luck dogged him.", ru: "Неудачи преследовали его." } }
    ]
),

createRichWord('a1_door', 'Door', '/dɔːr/', 'до:', 'Дверь', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Открывающаяся и закрывающаяся преграда, через которую входят в комнату, здание или автомобиль.',
    '- Вход: "Open the door" (Открыть дверь)\n- Дом: "Front door" (Входная дверь)\n- Вежливость: "Hold the door" (Придержать дверь)',
    [
      { en: 'Please close the door behind you.', ru: 'Пожалуйста, закрой за собой дверь.' },
      { en: 'Someone is knocking at the door.', ru: 'Кто-то стучит в дверь.' },
      { en: 'The front door is locked.', ru: 'Входная дверь заперта.' },
      { en: 'I forgot my keys in the door.', ru: 'Я забыл ключи в двери.' }
    ],
    [
        { meaning: "Opportunity (Metaphor)", translation: "Путь / Возможность", example: { en: "Education opens doors.", ru: "Образование открывает двери (возможности)." } }
    ]
),

createRichWord('a1_down', 'Down', '/daʊn/', 'даун', 'Вниз', ProficiencyLevel.A1, 'adv', 'High', 'Neutral',
    'В направлении более низкого места или положения.',
    '- Движение: "Go down" (Идти вниз / Спускаться)\n- Положение: "Sit down" (Садиться)\n- Настроение: "Feel down" (Быть расстроенным)',
    [
      { en: 'Please sit down on the chair.', ru: 'Пожалуйста, присядьте на стул.' },
      { en: 'The sun goes down in the evening.', ru: 'Солнце садится вечером.' },
      { en: 'He walked down the street.', ru: 'Он пошел вниз по улице.' },
      { en: 'Put the heavy box down.', ru: 'Поставь тяжелую коробку вниз.' }
    ],
    [
        { meaning: "Sad/Depressed", translation: "Подавленный / Грустный", example: { en: "I'm feeling a bit down today.", ru: "Я сегодня немного подавлен." } },
        { meaning: "Not working (System)", translation: "Не работает / Сломан", example: { en: "The server is down.", ru: "Сервер упал (не работает)." } }
    ]
),

createRichWord('a1_draw', 'Draw', '/drɔː/', 'дро:', 'Рисовать', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Создавать изображение с помощью карандаша, ручки или мела. Также означает тянуть или тащить.',
    '- Искусство: "Draw a picture" (Рисовать картину)\n- Внимание: "Draw attention" (Привлекать внимание)\n- Спорт: "End in a draw" (Закончить вничью)',
    [
      { en: 'I like to draw animals and trees.', ru: 'Я люблю рисовать животных и деревья.' },
      { en: 'Can you draw a map for me?', ru: 'Можешь нарисовать мне карту?' },
      { en: 'The child drew a house on the paper.', ru: 'Ребенок нарисовал дом на бумаге.' },
      { en: 'He draws very well with a pencil.', ru: 'Он очень хорошо рисует карандашом.' }
    ],
    [
        { meaning: "Pull/Drag", translation: "Тянуть / Тащить", example: { en: "Draw the curtains.", ru: "Задерни (потяни) шторы." } },
        { meaning: "Tie (Game)", translation: "Ничья", example: { en: "The game ended in a draw.", ru: "Игра закончилась вничью." } },
        { meaning: "Take out (Weapon/Money)", translation: "Вытаскивать / Снимать деньги", example: { en: "Draw a gun.", ru: "Вытащить пистолет." } }
    ]
),

createRichWord('a1_dress', 'Dress', '/dres/', 'дрес', 'Платье', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Женская одежда, покрывающая тело и ноги. Как глагол — одеваться.',
    '- Одежда: "Wear a dress" (Носить платье)\n- Действие: "Get dressed" (Одеваться)\n- Стиль: "Dress well" (Хорошо одеваться)',
    [
      { en: 'She bought a new red dress.', ru: 'Она купила новое красное платье.' },
      { en: 'I need to get dressed for work.', ru: 'Мне нужно одеться на работу.' },
      { en: 'This dress is too short for school.', ru: 'Это платье слишком короткое для школы.' },
      { en: 'He dresses very quickly in the morning.', ru: 'Он очень быстро одевается по утрам.' }
    ],
    [
        { meaning: "Put on clothes (verb)", translation: "Одеваться", example: { en: "Hurry up and dress!", ru: "Поторапливайся и одевайся!" } },
        { meaning: "Style of clothing", translation: "Одежда / Наряд", example: { en: "Evening dress.", ru: "Вечерний наряд." } }
    ]
),

createRichWord('a1_drink', 'Drink', '/drɪŋk/', 'дринк', 'Пить', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Глотать жидкость. Как существительное — напиток.',
    '- Действие: "Drink water" (Пить воду)\n- Выбор: "Soft drink" (Безалкогольный напиток)\n- Алкоголь: "Have a drink" (Выпить алкоголь)',
    [
      { en: 'I want to drink some cold water.', ru: 'Я хочу выпить холодной воды.' },
      { en: 'Do not drink coffee before sleep.', ru: 'Не пей кофе перед сном.' },
      { en: 'Can I buy you a drink?', ru: 'Могу я купить тебе напиток?' },
      { en: 'He drinks tea with lemon.', ru: 'Он пьет чай с лимоном.' }
    ],
    [
        { meaning: "Alcohol", translation: "Алкоголь / Выпивка", example: { en: "He has a problem with drink.", ru: "У него проблемы с алкоголем." } },
        { meaning: "Beverage (noun)", translation: "Напиток", example: { en: "Food and drink.", ru: "Еда и напитки." } }
    ]
),

createRichWord('a1_drive', 'Drive', '/draɪv/', 'драйв', 'Водить', ProficiencyLevel.A1, 'verb', 'High', 'Neutral',
    'Управлять автомобилем или другим транспортным средством. Также может означать "подвезти кого-то".',
    '- Авто: "Drive a car" (Водить машину)\n- Путешествие: "Drive to work" (Ехать на работу)\n- Помощь: "Drive me home" (Подвези меня домой)',
    [
      { en: 'Can you drive a car?', ru: 'Ты умеешь водить машину?' },
      { en: 'I drive to work every morning.', ru: 'Я езжу на работу на машине каждое утро.' },
      { en: 'Please drive carefully, it is raining.', ru: 'Пожалуйста, веди осторожно, идет дождь.' },
      { en: 'My father taught me how to drive.', ru: 'Мой отец научил меня водить.' }
    ],
    [
        { meaning: "Trip in a car (noun)", translation: "Поездка", example: { en: "Let's go for a drive.", ru: "Давай покатаемся." } },
        { meaning: "Force/Urge", translation: "Заставлять / Побуждать", example: { en: "Hunger drove him to steal.", ru: "Голод заставил его красть." } },
        { meaning: "Road for cars", translation: "Подъездная дорожка", example: { en: "Park in the drive.", ru: "Паркуйся на подъездной дорожке." } }
    ]
),

createRichWord('a1_each', 'Each', '/iːtʃ/', 'ич', 'Каждый', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Всякий отдельно взятый из группы.',
    '- Люди: "Each person" (Каждый человек)\n- Стоимость: "5 dollars each" (По 5 долларов каждый)\n- Время: "Each time" (Каждый раз)',
    [
      { en: 'Each student has a book.', ru: 'У каждого студента есть книга.' },
      { en: 'The apples cost one dollar each.', ru: 'Яблоки стоят по одному доллару каждое.' },
      { en: 'We love each other very much.', ru: 'Мы очень любим друг друга.' },
      { en: 'Each day brings something new.', ru: 'Каждый день приносит что-то новое.' }
    ],
    [] // Basic determiner, secondary meanings are rare/grammatical
),

createRichWord('a1_ear', 'Ear', '/ɪər/', 'иэ', 'Ухо', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Орган слуха у людей и животных.',
    '- Тело: "Left ear" (Левое ухо)\n- Боль: "Earache" (Боль в ухе)\n- Слух: "Play by ear" (Играть на слух / Импровизировать)',
    [
      { en: 'My ears are cold in winter.', ru: 'Зимой у меня мерзнут уши.' },
      { en: 'He whispered something in her ear.', ru: 'Он прошептал что-то ей на ухо.' },
      { en: 'The dog has long black ears.', ru: 'У собаки длинные черные уши.' },
      { en: 'I have an ear infection.', ru: 'У меня ушная инфекция.' }
    ],
    [
        { meaning: "Grain part", translation: "Колос (кукурузы/пшеницы)", example: { en: "An ear of corn.", ru: "Початок кукурузы." } },
        { meaning: "Ability to recognize music", translation: "Музыкальный слух", example: { en: "He has a good ear for music.", ru: "У него хороший музыкальный слух." } }
    ]
),

createRichWord('a1_early', 'Early', '/ˈɜː.li/', 'ёли', 'Рано', ProficiencyLevel.A1, 'adv', 'High', 'Neutral',
    'В начале периода времени; до обычного или ожидаемого времени.',
    '- Утро: "Wake up early" (Просыпаться рано)\n- Время: "Early morning" (Раннее утро)\n- Срок: "Arrive early" (Приехать заранее)',
    [
      { en: 'I get up early every day.', ru: 'Я встаю рано каждый день.' },
      { en: 'It is too early to go to bed.', ru: 'Слишком рано идти спать.' },
      { en: 'She arrived early for the meeting.', ru: 'Она пришла на встречу заранее.' },
      { en: 'We had an early dinner.', ru: 'У нас был ранний ужин.' }
    ],
    [
        { meaning: "Near the beginning", translation: "Ранний / Начальный", example: { en: "In the early years.", ru: "В первые годы." } }
    ]
),

createRichWord('a1_east', 'East', '/iːst/', 'ист', 'Восток', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Направление стороны света, где восходит солнце.',
    '- Направление: "Go east" (Идти на восток)\n- Место: "In the east" (На востоке)\n- Ветер: "East wind" (Восточный ветер)',
    [
      { en: 'The sun rises in the east.', ru: 'Солнце встает на востоке.' },
      { en: 'My house is on the east side of town.', ru: 'Мой дом находится на восточной стороне города.' },
      { en: 'They traveled east to reach the sea.', ru: 'Они путешествовали на восток, чтобы добраться до моря.' },
      { en: 'East of the river is a forest.', ru: 'К востоку от реки находится лес.' }
    ],
    [] // Cardinal direction, rarely ambiguous
    ),
createRichWord('a1_butter', 'Butter', '/ˈbʌt.ər/', 'батэ', 'Сливочное масло', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Желтый жирный продукт, получаемый из молока/сливок. Используется для намазывания на хлеб или жарки.',
    '- Еда: "Bread and butter" (Хлеб с маслом)\n- Фраза: "Peanut butter" (Арахисовая паста)\n- Действие: "Melt butter" (Растопить масло)',
    [
      { en: 'I like bread and butter for breakfast.', ru: 'Я люблю хлеб с маслом на завтрак.' },
      { en: 'Please pass me the butter.', ru: 'Пожалуйста, передай мне масло.' },
      { en: 'Fry the eggs in butter.', ru: 'Пожарьте яйца на сливочном масле.' },
      { en: 'Is this butter fresh?', ru: 'Это масло свежее?' }
    ],
    [
        { meaning: "Flatter (verb phrasal)", translation: "Умасливать / Льстить", example: { en: "He tried to butter up the boss.", ru: "Он пытался подмазаться к боссу." } }
    ]
),

createRichWord('a1_camera', 'Camera', '/ˈkæm.rə/', 'кэмра', 'Камера', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Устройство для съемки фотографий или записи видео.',
    '- Туризм: "Take a camera" (Взять камеру)\n- Техника: "Digital camera" (Цифровая камера)\n- Действие: "Look at the camera" (Смотреть в камеру)',
    [
      { en: 'I bought a new camera yesterday.', ru: 'Я купил новую камеру вчера.' },
      { en: 'Can you smile for the camera?', ru: 'Можешь улыбнуться на камеру?' },
      { en: 'My phone has a good camera.', ru: 'У моего телефона хорошая камера.' },
      { en: 'He forgot his camera in the hotel.', ru: 'Он забыл свою камеру в отеле.' }
    ],
    [
        { meaning: "On TV (phrase)", translation: "В эфире / В кадре", example: { en: "We are on camera.", ru: "Мы в кадре (нас снимают)." } }
    ]
),

createRichWord('a1_carrot', 'Carrot', '/ˈkær.ət/', 'кэрэт', 'Морковь', ProficiencyLevel.A1, 'noun', 'Medium', 'Neutral',
    'Длинный оранжевый овощ, который растет в земле.',
    '- Еда: "Fresh carrot" (Свежая морковь)\n- Напиток: "Carrot juice" (Морковный сок)\n- Готовка: "Carrot cake" (Морковный торт)',
    [
      { en: 'Rabbits love to eat carrots.', ru: 'Кролики любят есть морковь.' },
      { en: 'Add some carrots to the soup.', ru: 'Добавь немного моркови в суп.' },
      { en: 'She is peeling a carrot.', ru: 'Она чистит морковь.' },
      { en: 'Raw carrots are good for your teeth.', ru: 'Сырая морковь полезна для зубов.' }
    ],
    [
        { meaning: "Incentive (Metaphor)", translation: "Пряник (в 'кнут и пряник')", example: { en: "Carrot and stick approach.", ru: "Метод кнута и пряника." } }
    ]
),

createRichWord('a1_cent', 'Cent', '/sent/', 'сент', 'Цент', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Монета, равная одной сотой части доллара или евро.',
    '- Деньги: "50 cents" (50 центов)\n- Цена: "Per cent" (Процент)\n- Фраза: "Not a cent" (Ни копейки)',
    [
      { en: 'This candy costs fifty cents.', ru: 'Этак конфета стоит пятьдесят центов.' },
      { en: 'I don\'t have a single cent.', ru: 'У меня нет ни цента (ни копейки).' },
      { en: 'There are 100 cents in a dollar.', ru: 'В долларе 100 центов.' },
      { en: 'Keep the five cents change.', ru: 'Оставь пять центов сдачи себе.' }
    ],
    [
         { meaning: "Percent (Per cent)", translation: "Процент", example: { en: "100 per cent sure.", ru: "На 100 процентов уверен." } }
    ]
),

createRichWord('a1_cheese', 'Cheese', '/tʃiːz/', 'чи:з', 'Сыр', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Молочный продукт, бывает твердым или мягким, часто желтого или белого цвета.',
    '- Еда: "Slice of cheese" (Ломоть сыра)\n- Сорт: "Swiss cheese" (Швейцарский сыр)\n- Фото: "Say cheese!" (Скажите сыр! / Улыбнитесь)',
    [
      { en: 'I like cheese on my sandwich.', ru: 'Я люблю сыр на бутерброде.' },
      { en: 'Do you want some cheese?', ru: 'Хочешь немного сыра?' },
      { en: 'The mouse ate the cheese.', ru: 'Мышь съела сыр.' },
      { en: 'Pizza needs a lot of cheese.', ru: 'Для пиццы нужно много сыра.' }
    ],
    [
        { meaning: "Smile for photo", translation: "Улыбочку! (фраза)", example: { en: "Say cheese!", ru: "Скажите сы-ы-ыр!" } }
    ]
),

createRichWord('a1_chocolate', 'Chocolate', '/ˈtʃɒk.lət/', 'чоклэт', 'Шоколад', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Сладкая еда коричневого цвета, сделанная из какао-бобов.',
    '- Сладость: "Milk chocolate" (Молочный шоколад)\n- Напиток: "Hot chocolate" (Горячий шоколад)\n- Форма: "Bar of chocolate" (Плитка шоколада)',
    [
      { en: 'I bought a box of chocolates.', ru: 'Я купил коробку шоколадных конфет.' },
      { en: 'Hot chocolate is good in winter.', ru: 'Горячий шоколад хорош зимой.' },
      { en: 'Don\'t eat too much chocolate.', ru: 'Не ешь слишком много шоколада.' },
      { en: 'She loves dark chocolate.', ru: 'Она любит темный шоколад.' }
    ],
    [
        { meaning: "Dark brown color", translation: "Шоколадный цвет", example: { en: "Chocolate eyes.", ru: "Шоколадные глаза." } }
    ]
 ),
createRichWord('a1_correct', 'Correct', '/kəˈrekt/', 'кэрэкт', 'Правильный', ProficiencyLevel.A1, 'adj', 'High', 'Neutral',
    'Не имеющий ошибок; верный. Как глагол — исправлять.',
    '- Ответ: "Correct answer" (Правильный ответ)\n- Вежливость: "That is correct" (Это верно)\n- Действие: "Correct mistakes" (Исправлять ошибки)',
    [
      { en: 'Your answer is correct.', ru: 'Твой ответ правильный.' },
      { en: 'Please correct my mistakes.', ru: 'Пожалуйста, исправь мои ошибки.' },
      { en: 'Is this the correct time?', ru: 'Это правильное время?' },
      { en: 'She gave the correct address.', ru: 'Она дала правильный адрес.' }
    ],
    [
        { meaning: "Fix (verb)", translation: "Исправлять", example: { en: "The teacher corrected the tests.", ru: "Учитель проверил (исправил) тесты." } }
    ]
),

createRichWord('a1_cousin', 'Cousin', '/ˈkʌz.ən/', 'казн', 'Двоюродный брат/сестра', ProficiencyLevel.A1, 'noun', 'High', 'Neutral',
    'Ребенок дяди или тети.',
    '- Семья: "First cousin" (Двоюродный брат/сестра)\n- Отношения: "Visit cousins" (Навещать кузенов)\n- Возраст: "Older cousin" (Старший кузен)',
    [
      { en: 'My cousin lives in another city.', ru: 'Мой двоюродный брат живет в другом городе.' },
      { en: 'We played with our cousins all day.', ru: 'Мы весь день играли с двоюродными братьями и сестрами.' },
      { en: 'She is my favorite cousin.', ru: 'Она моя любимая кузина.' },
      { en: 'How many cousins do you have?', ru: 'Сколько у тебя двоюродных братьев и сестер?' }
    ],
    []
),

createRichWord('a1_cow', 'Cow', '/kaʊ/', 'кау', 'Корова', ProficiencyLevel.A1, 'noun', 'Medium', 'Neutral',
    'Крупное фермерское животное, которое дает молоко.',
    '- Ферма: "Milk the cow" (Доить корову)\n- Еда: "Cow\'s milk" (Коровье молоко)\n- Животные: "Herd of cows" (Стадо коров)',
    [
      { en: 'The cow is eating grass in the field.', ru: 'Корова ест траву на поле.' },
      { en: 'We get milk from cows.', ru: 'Мы получаем молоко от коров.' },
      { en: 'There is a black and white cow.', ru: 'Там черно-белая корова.' },
      { en: 'Baby cows are called calves.', ru: 'Детеныши коров называются телятами.' }
    ],
    []
 ),

];
