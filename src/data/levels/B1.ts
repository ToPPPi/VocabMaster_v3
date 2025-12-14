
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

export const WORDS_B1: Word[] = [
createRichWord('b1_admit', 'Admit', '/ədˈmɪt/', 'эдмит', 'Признавать / Допускать', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Согласиться с тем, что что-то является правдой (часто неохотно). Также означает позволить кому-то войти (впустить).',
    '- Ошибка: "Admit a mistake" (Признать ошибку)\n- Правда: "Admit the truth" (Признать правду)\n- Вход: "Admit to hospital" (Госпитализировать/Принять в больницу)',
    [
        { en: 'He was too proud to admit that he had made a mistake.', ru: 'Он был слишком горд, чтобы признать, что совершил ошибку.' },
        { en: 'You must admit that the view from here is absolutely spectacular.', ru: 'Ты должен признать, что вид отсюда просто захватывающий.' },
        { en: 'The thief decided to admit his crime to the police officers.', ru: 'Вор решил признаться в своем преступлении полицейским.' },
        { en: 'Tickets admit two people to the museum exhibition.', ru: 'Билеты дают право входа на выставку в музее двум людям.' }
    ]
),

createRichWord('b1_afford', 'Afford', '/əˈfɔːd/', 'эфод', 'Позволить себе', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Иметь достаточно денег (или времени) для чего-либо. Обычно используется с can/could/be able to.',
    '- Деньги: "Can afford a car" (Мочь позволить себе машину)\n- Риск: "Can\'t afford to lose" (Не мочь позволить себе проиграть)\n- Время: "Afford the time" (Найти время)',
    [
        { en: 'We cannot afford to go on holiday abroad this year.', ru: 'В этом году мы не можем позволить себе поехать в отпуск за границу.' },
        { en: 'She is working hard because she wants to afford a new apartment.', ru: 'Она усердно работает, потому что хочет позволить себе новую квартиру.' },
        { en: 'I can\'t afford to waste any more time on this project.', ru: 'Я не могу позволить себе тратить больше времени на этот проект.' },
        { en: 'Few people can afford such expensive luxury cars nowadays.', ru: 'Немногие люди могут позволить себе такие дорогие роскошные автомобили в наши дни.' }
    ]
),

createRichWord('b1_ahead', 'Ahead', '/əˈhed/', 'эхэд', 'Впереди', ProficiencyLevel.B1, 'adv', 'High', 'Neutral',
    'Дальше по направлению движения (в пространстве или времени). В будущем или лидируя в чем-то.',
    '- Направление: "Straight ahead" (Прямо по курсу/впереди)\n- Будущее: "Plan ahead" (Планировать наперед)\n- Лидерство: "Ahead of schedule" (С опережением графика)',
    [
        { en: 'Look ahead and you will see the mountains in the distance.', ru: 'Посмотри вперед, и ты увидишь горы вдалеке.' },
        { en: 'We need to plan ahead to make sure the event is successful.', ru: 'Нам нужно планировать заранее, чтобы убедиться, что мероприятие пройдет успешно.' },
        { en: 'She is always one step ahead of her competitors in business.', ru: 'В бизнесе она всегда на шаг впереди своих конкурентов.' },
        { en: 'Go ahead and eat, do not wait for me to arrive.', ru: 'Начинай есть, не жди, пока я приеду.' }
    ]
),

createRichWord('b1_allow', 'Allow', '/əˈlaʊ/', 'элау', 'Позволять / Разрешать', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Дать разрешение кому-то сделать что-то или позволить чему-то случиться. Не препятствовать.',
    '- Разрешение: "Allow to smoke" (Разрешить курить)\n- Время: "Allow time" (Выделить время)\n- Доступ: "Allowed access" (Разрешенный доступ)',
    [
        { en: 'My parents do not allow me to stay out late at night.', ru: 'Мои родители не разрешают мне гулять допоздна.' },
        { en: 'Please allow at least two weeks for delivery of your order.', ru: 'Пожалуйста, заложите не менее двух недель на доставку вашего заказа.' },
        { en: 'Smoking is not allowed in public buildings in this country.', ru: 'Курение в общественных зданиях в этой стране запрещено.' },
        { en: 'The new software will allow users to work much faster.', ru: 'Новое программное обеспечение позволит пользователям работать намного быстрее.' }
    ]
  ),
createRichWord('b1_although', 'Although', '/ɔːlˈðəʊ/', 'олзоу', 'Хотя', ProficiencyLevel.B1, 'conj', 'Medium', 'Neutral',
    'Используется для введения утверждения, которое делает основное утверждение неожиданным или удивительным.\nСиноним "несмотря на то, что".',
    '- Противопоставление: "Although tired" (Хотя и усталый)\n- Начало фразы: "Although it rained..." (Хотя шел дождь...)\n- Уступка: "Although strict" (Хотя и строгий)',
    [
      { en: 'Although it was raining heavily, they decided to go for a walk in the park.', ru: 'Хотя шел сильный дождь, они решили пойти на прогулку в парк.' },
      { en: 'She didn\'t get the job, although she had all the necessary qualifications.', ru: 'Она не получила работу, хотя у нее были все необходимые квалификации.' },
      { en: 'Although he is very young, he plays the piano like a professional musician.', ru: 'Хотя он очень молод, он играет на пианино как профессиональный музыкант.' },
      { en: 'I finished the book, although I found the ending rather disappointing and weak.', ru: 'Я закончил книгу, хотя нашел концовку довольно разочаровывающей и слабой.' }
    ]
),

createRichWord('b1_amaze', 'Amaze', '/əˈmeɪz/', 'эмэйз', 'Изумлять', ProficiencyLevel.B1, 'verb', 'Low', 'Neutral',
    'Вызывать у кого-либо сильное чувство удивления; поражать своими качествами или действиями.',
    '- Результат: "Amaze the audience" (Поразить аудиторию)\n- Способность: "Never cease to amaze" (Не переставать удивлять)\n- Действие: "It amazes me" (Это меня изумляет)',
    [
      { en: 'Her ability to remember names and faces never ceases to amaze me.', ru: 'Ее способность запоминать имена и лица не перестает меня изумлять.' },
      { en: 'The magician managed to amaze the crowd with his incredible card tricks.', ru: 'Фокуснику удалось поразить толпу своими невероятными карточными трюками.' },
      { en: 'It amazes me how quickly children can learn to use new technology today.', ru: 'Меня изумляет, как быстро дети могут учиться использовать новые технологии сегодня.' },
      { en: 'The view from the top of the mountain will absolutely amaze you.', ru: 'Вид с вершины горы вас абсолютно изумит.' }
    ]
),

createRichWord('b1_apart', 'Apart', '/əˈpɑːt/', 'эпат', 'Отдельно', ProficiencyLevel.B1, 'adv', 'Medium', 'Neutral',
    'Разделенные расстоянием или временем; не вместе. Также означает "на части".',
    '- Расстояние: "Miles apart" (На расстоянии миль)\n- Разрушение: "Fall apart" (Разваливаться на части)\n- Различие: "Tell apart" (Различать)',
    [
      { en: 'The two houses stood about five hundred meters apart from each other.', ru: 'Два дома стояли примерно в пятистах метрах друг от друга.' },
      { en: 'My old boots are starting to fall apart after years of heavy use.', ru: 'Мои старые ботинки начинают разваливаться на части после лет интенсивного использования.' },
      { en: 'The twins look so similar that I can hardly tell them apart.', ru: 'Близнецы выглядят так похоже, что я едва могу их различить.' },
      { en: 'We have been living apart for six months due to his job relocation.', ru: 'Мы живем раздельно уже шесть месяцев из-за его переезда по работе.' }
    ]
  ),
createRichWord('b1_blow', 'Blow', '/bləʊ/', 'блоу', 'Дуть', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Движение воздуха (о ветре) или выдыхание воздуха ртом с силой.',
    '- Ветер: "Wind blows" (Ветер дует)\n- Рот: "Blow out candles" (Задуть свечи)\n- Нос: "Blow your nose" (Высморкаться)',
    [
      { en: 'The wind was blowing hard, making the trees sway violently.', ru: 'Ветер дул сильно, заставляя деревья яростно качаться.' },
      { en: 'Make a wish before you blow out the candles on your cake.', ru: 'Загадай желание, прежде чем задуть свечи на своем торте.' },
      { en: 'She blew on her hot coffee to cool it down a little.', ru: 'Она подула на свой горячий кофе, чтобы немного остудить его.' },
      { en: 'The referee blew his whistle to end the football match.', ru: 'Судья дунул в свисток, чтобы закончить футбольный матч.' }
    ]
),

createRichWord('b1_bother', 'Bother', '/ˈbɒðə/', 'бозэ', 'Беспокоить', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Раздражать кого-то, мешать или причинять неудобство; также "утруждаться".',
    '- Раздражение: "Don\'t bother me" (Не беспокой меня)\n- Усилие: "Don\'t bother to ask" (Не трудись спрашивать)\n- Вежливость: "Sorry to bother you" (Извините за беспокойство)',
    [
      { en: 'I am sorry to bother you, but could you help me with this?', ru: 'Извините, что беспокою вас, но не могли бы вы помочь мне с этим?' },
      { en: 'Please do not bother your father while he is working.', ru: 'Пожалуйста, не беспокой отца, пока он работает.' },
      { en: 'He didn\'t even bother to say goodbye before he left.', ru: 'Он даже не потрудился попрощаться перед уходом.' },
      { en: 'Does the loud music from the neighbors bother you at night?', ru: 'Тебя беспокоит громкая музыка от соседей по ночам?' }
    ]
),

createRichWord('b1_breath', 'Breath', '/breθ/', 'брес', 'Дыхание', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Воздух, который вдыхается и выдыхается из легких.',
    '- Действие: "Take a deep breath" (Сделать глубокий вдох)\n- Состояние: "Out of breath" (Запыхавшийся)\n- Задержка: "Hold your breath" (Задержать дыхание)',
    [
      { en: 'Take a deep breath and try to relax before the exam.', ru: 'Сделай глубокий вдох и постарайся расслабиться перед экзаменом.' },
      { en: 'He was out of breath after running up the steep hill.', ru: 'Он запыхался после того, как взбежал на крутой холм.' },
      { en: 'You can see your breath in the air on a cold winter day.', ru: 'В холодный зимний день видно дыхание в воздухе.' },
      { en: 'She held her breath while swimming underwater in the pool.', ru: 'Она задержала дыхание, пока плыла под водой в бассейне.' }
    ]
  ),
createRichWord('b1_access', 'Access', '/ˈækses/', 'эксес', 'Доступ', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Право или возможность войти куда-то или использовать что-то.',
    '- Интернет: "Internet access" (Доступ в интернет)\n- Место: "Easy access" (Легкий доступ)\n- Право: "Gain access" (Получить доступ)',
    [
      { en: 'Do you have access to the internet on your phone?', ru: 'У тебя есть доступ к интернету на телефоне?' },
      { en: 'Students have free access to the library resources.', ru: 'Студенты имеют бесплатный доступ к ресурсам библиотеки.' },
      { en: 'The only access to the village is by boat.', ru: 'Единственный доступ к деревне — на лодке.' },
      { en: 'You need a password to get access to this file.', ru: 'Вам нужен пароль, чтобы получить доступ к этому файлу.' }
    ]
),

createRichWord('b1_account', 'Account', '/əˈkaʊnt/', 'экаунт', 'Счет (банковский) / Учетная запись', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Договоренность с банком для хранения денег; или профиль в интернете.',
    '- Банк: "Bank account" (Банковский счет)\n- Интернет: "Create an account" (Создать аккаунт)\n- Причина: "On account of" (По причине)',
    [
      { en: 'I need to open a new bank account for my savings.', ru: 'Мне нужно открыть новый банковский счет для сбережений.' },
      { en: 'Please log in to your email account to see the message.', ru: 'Пожалуйста, войдите в свою электронную почту, чтобы увидеть сообщение.' },
      { en: 'She took into account all the difficulties we might face.', ru: 'Она приняла во внимание все трудности, с которыми мы можем столкнуться.' },
      { en: 'The match was cancelled on account of the rain.', ru: 'Матч был отменен из-за (по причине) дождя.' }
    ]
),

createRichWord('b1_admire', 'Admire', '/ədˈmaɪə/', 'эдмайэ', 'Восхищаться', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Чувствовать уважение к кому-то или смотреть на что-то с удовольствием.',
    '- Человек: "Admire him for courage" (Восхищаться его смелостью)\n- Вид: "Admire the view" (Любоваться видом)\n- Чувство: "Deeply admire" (Глубоко восхищаться)',
    [
      { en: 'I really admire her for working so hard while studying.', ru: 'Я действительно восхищаюсь тем, что она так усердно работает во время учебы.' },
      { en: 'We stood for a moment to admire the beautiful sunset.', ru: 'Мы остановились на мгновение, чтобы полюбоваться красивым закатом.' },
      { en: 'He has always admired his grandfather\'s wisdom.', ru: 'Он всегда восхищался мудростью своего дедушки.' },
      { en: 'Tourists come to admire the ancient architecture of the city.', ru: 'Туристы приезжают, чтобы полюбоваться древней архитектурой города.' }
    ]
),

createRichWord('b1_advance', 'Advance', '/ədˈvɑːns/', 'эдванс', 'Продвижение / Прогресс', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Движение вперед или развитие; успех в чем-либо. Также "заранее" (in advance).',
    '- Время: "In advance" (Заранее)\n- Развитие: "Technological advance" (Технологический прогресс)\n- Карьера: "Career advance" (Продвижение по карьере)',
    [
      { en: 'You should book your tickets well in advance.', ru: 'Вам следует забронировать билеты сильно заранее.' },
      { en: 'Recent advances in medicine have saved many lives.', ru: 'Недавние достижения в медицине спасли много жизней.' },
      { en: 'The army made a rapid advance towards the capital.', ru: 'Армия совершила быстрое продвижение к столице.' },
      { en: 'Thank you in advance for your help with this project.', ru: 'Заранее спасибо за вашу помощь с этим проектом.' }
    ]
),

createRichWord('b1_advantage', 'Advantage', '/ədˈvɑːntɪdʒ/', 'эдвантидж', 'Преимущество', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Условие или обстоятельство, которое дает больше шансов на успех.',
    '- Польза: "Take advantage of" (Воспользоваться чем-то)\n- Сравнение: "Big advantage" (Большое преимущество)\n- Спорт: "Home advantage" (Преимущество своего поля)',
    [
      { en: 'Being able to speak English is a big advantage in business.', ru: 'Умение говорить по-английски — большое преимущество в бизнесе.' },
      { en: 'He took advantage of the good weather to paint the house.', ru: 'Он воспользовался хорошей погодой, чтобы покрасить дом.' },
      { en: 'One advantage of living in the city is the public transport.', ru: 'Одним из преимуществ жизни в городе является общественный транспорт.' },
      { en: 'Is there any advantage to buying the more expensive model?', ru: 'Есть ли какое-то преимущество в покупке более дорогой модели?' }
    ]
),

createRichWord('b1_advise', 'Advise', '/ədˈvaɪz/', 'эдвайз', 'Советовать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Давать кому-то совет или рекомендацию (обратите внимание на "s" в написании, в отличие от "advice").',
    '- Действие: "Advise against" (Отговорить / Советовать против)\n- Рекомендация: "Strongly advise" (Настоятельно советовать)\n- Процесс: "Advise someone to do" (Посоветовать кому-то сделать)',
    [
      { en: 'I would advise you to start studying for the exam early.', ru: 'Я бы посоветовал вам начать готовиться к экзамену пораньше.' },
      { en: 'The doctor advised him to stop smoking immediately.', ru: 'Врач посоветовал ему немедленно бросить курить.' },
      { en: 'She advised me against walking alone in that park at night.', ru: 'Она отсоветовала мне гулять одной в том парке ночью.' },
      { en: 'Can you advise me on which computer to buy?', ru: 'Можете посоветовать мне, какой компьютер купить?' }
    ]
),

createRichWord('b1_agent', 'Agent', '/ˈeɪdʒənt/', 'эйджент', 'Агент', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Человек, который действует от имени другого человека или организации.',
    '- Путешествия: "Travel agent" (Турагент)\n- Недвижимость: "Estate agent" (Агент по недвижимости)\n- Спецслужбы: "Secret agent" (Секретный агент)',
    [
      { en: 'We booked our holiday through a local travel agent.', ru: 'Мы забронировали наш отпуск через местного турагента.' },
      { en: 'The estate agent showed us three houses this afternoon.', ru: 'Агент по недвижимости показал нам три дома сегодня днем.' },
      { en: 'He works as an agent for several famous actors.', ru: 'Он работает агентом нескольких известных актеров.' },
      { en: 'Like a secret agent, he moved quietly through the crowd.', ru: 'Как секретный агент, он тихо двигался сквозь толпу.' }
    ]
),

createRichWord('b1_alarm', 'Alarm', '/əˈlɑːm/', 'элам', 'Тревога / Будильник', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Звуковой сигнал предупреждения об опасности или устройство, чтобы разбудить.',
    '- Утро: "Alarm clock" (Будильник)\n- Опасность: "Fire alarm" (Пожарная тревога)\n- Чувство: "Cause alarm" (Вызывать тревогу)',
    [
      { en: 'I forgot to set my alarm, so I woke up late.', ru: 'Я забыл завести будильник, поэтому проснулся поздно.' },
      { en: 'The fire alarm went off, and everyone left the building.', ru: 'Сработала пожарная сигнализация, и все покинули здание.' },
      { en: 'There is no cause for alarm, the situation is under control.', ru: 'Нет причин для тревоги, ситуация под контролем.' },
      { en: 'Car alarms can be very annoying at night.', ru: 'Автомобильные сигнализации могут быть очень раздражающими ночью.' }
    ]
),

createRichWord('b1_angel', 'Angel', '/ˈeɪndʒ(ə)l/', 'эйндж(э)л', 'Ангел', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Духовное существо, обычно изображаемое с крыльями; или очень добрый человек.',
    '- Религия: "Guardian angel" (Ангел-хранитель)\n- Характер: "You are an angel" (Ты ангел)\n- Внешность: "Look like an angel" (Выглядеть как ангел)',
    [
      { en: 'Thanks for helping me with the cleaning, you are an angel.', ru: 'Спасибо, что помог мне с уборкой, ты ангел.' },
      { en: 'The painting showed an angel with large white wings.', ru: 'На картине был изображен ангел с большими белыми крыльями.' },
      { en: 'She believes that a guardian angel watches over her.', ru: 'Она верит, что ангел-хранитель присматривает за ней.' },
      { en: 'The little girl looked like an angel in her white dress.', ru: 'Маленькая девочка выглядела как ангел в своем белом платье.' }
    ]
),

createRichWord('b1_anger', 'Anger', '/ˈæŋɡə/', 'энгэ', 'Гнев', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Сильное чувство недовольства и враждебности.',
    '- Контроль: "Control your anger" (Контролировать свой гнев)\n- Выражение: "Express anger" (Выражать гнев)\n- Причина: "Full of anger" (Полный гнева)',
    [
      { en: 'He could not hide his anger when he heard the bad news.', ru: 'Он не мог скрыть своего гнева, когда услышал плохие новости.' },
      { en: 'It is better to express your anger than to keep it inside.', ru: 'Лучше выразить свой гнев, чем держать его внутри.' },
      { en: 'She shouted in anger at the driver who almost hit her.', ru: 'Она в гневе закричала на водителя, который чуть не сбил ее.' },
      { en: 'His face turned red with anger and embarrassment.', ru: 'Его лицо покраснело от гнева и смущения.' }
    ]
),

createRichWord('b1_announce', 'Announce', '/əˈnaʊns/', 'энаунс', 'Объявлять', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Публично сообщать информацию о чем-либо.',
    '- Новости: "Announce the winner" (Объявить победителя)\n- Планы: "Announce engagement" (Объявить о помолвке)\n- Официально: "Officially announce" (Официально объявить)',
    [
      { en: 'They announced their engagement to the family at dinner.', ru: 'Они объявили о своей помолвке семье за ужином.' },
      { en: 'The company announced a new plan to save money.', ru: 'Компания объявила о новом плане по экономии денег.' },
      { en: 'The captain announced that the plane would land shortly.', ru: 'Капитан объявил, что самолет скоро приземлится.' },
      { en: 'We are happy to announce the birth of our son.', ru: 'Мы счастливы объявить о рождении нашего сына.' }
    ]
),

createRichWord('b1_annoy', 'Annoy', '/əˈnɔɪ/', 'эной', 'Раздражать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Заставлять кого-то чувствовать себя немного злым или нетерпеливым; надоедать.',
    '- Чувство: "Get annoyed" (Раздражаться)\n- Действие: "Stop annoying me" (Перестань меня раздражать)\n- Степень: "Really annoy" (Сильно раздражать)',
    [
      { en: 'It really annoys me when people talk loudly in the cinema.', ru: 'Меня очень раздражает, когда люди громко говорят в кинотеатре.' },
      { en: 'Please stop tapping your pen, it is annoying me.', ru: 'Пожалуйста, перестань стучать ручкой, это меня раздражает.' },
      { en: 'She was annoyed by his constant questions.', ru: 'Ее раздражали его постоянные вопросы.' },
      { en: 'Don\'t annoy the dog while it is eating.', ru: 'Не дразни (не раздражай) собаку, пока она ест.' }
    ]
),

createRichWord('b1_anxious', 'Anxious', '/ˈæŋkʃəs/', 'энкшэс', 'Тревожный / Стремящийся', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Чувствующий беспокойство или нервозность; также "сильно желающий" что-то сделать.',
    '- Чувство: "Anxious about" (Беспокоящийся о)\n- Ожидание: "Anxious to know" (Жаждущий узнать)\n- Взгляд: "Anxious look" (Тревожный взгляд)',
    [
      { en: 'She felt anxious about her job interview the next day.', ru: 'Она чувствовала тревогу по поводу своего собеседования на следующий день.' },
      { en: 'Parents are naturally anxious for their children\'s safety.', ru: 'Родители естественно беспокоятся за безопасность своих детей.' },
      { en: 'We were anxious to arrive before it got dark.', ru: 'Мы стремились (очень хотели) приехать до того, как стемнеет.' },
      { en: 'He gave me an anxious look when the phone rang.', ru: 'Он бросил на меня тревожный взгляд, когда зазвонил телефон.' }
    ]
),

createRichWord('b1_apply', 'Apply', '/əˈplaɪ/', 'эплай', 'Подавать заявление / Применять', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Делать официальный запрос (например, на работу) или использовать что-то на практике.',
    '- Работа: "Apply for a job" (Подавать заявление на работу)\n- Использование: "Apply the rule" (Применять правило)\n- Медицина: "Apply cream" (Наносить крем)',
    [
      { en: 'I decided to apply for the position of marketing manager.', ru: 'Я решил подать заявление на должность менеджера по маркетингу.' },
      { en: 'You need to apply the cream to the affected area twice a day.', ru: 'Вам нужно наносить крем на пораженный участок дважды в день.' },
      { en: 'The rules apply to everyone without exception.', ru: 'Правила применяются ко всем без исключения.' },
      { en: 'She applied for a visa to visit the United States.', ru: 'Она подала заявление на визу для посещения Соединенных Штатов.' }
    ]
),

createRichWord('b1_appreciate', 'Appreciate', '/əˈpriːʃieɪt/', 'эпришиэйт', 'Ценить', ProficiencyLevel.B1, 'verb', 'High', 'Formal',
    'Быть благодарным за что-то; понимать ценность или важность чего-либо.',
    '- Благодарность: "I appreciate it" (Я ценю это)\n- Понимание: "Appreciate the problem" (Понимать проблему)\n- Ценность: "Fully appreciate" (Полностью ценить)',
    [
      { en: 'I really appreciate your help with my project.', ru: 'Я очень ценю твою помощь с моим проектом.' },
      { en: 'We appreciate the opportunity to work with you.', ru: 'Мы ценим возможность работать с вами.' },
      { en: 'He didn\'t appreciate how difficult the task would be.', ru: 'Он не осознавал (не оценил), насколько сложной будет задача.' },
      { en: 'I would appreciate it if you could reply soon.', ru: 'Я был бы признателен, если бы вы могли ответить в ближайшее время.' }
    ]
),

createRichWord('b1_arrest', 'Arrest', '/əˈrest/', 'эрест', 'Арестовывать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Когда полиция берет кого-то под стражу, потому что он, возможно, совершил преступление.',
    '- Полиция: "Under arrest" (Под арестом)\n- Причина: "Arrest for theft" (Арестовать за кражу)\n- Процесс: "Get arrested" (Быть арестованным)',
    [
      { en: 'The police arrived to arrest the thief immediately.', ru: 'Полиция прибыла, чтобы немедленно арестовать вора.' },
      { en: 'He was arrested for driving under the influence of alcohol.', ru: 'Он был арестован за вождение под воздействием алкоголя.' },
      { en: 'You are under arrest for breaking into the bank.', ru: 'Вы арестованы за взлом банка.' },
      { en: 'Fortunately, they didn\'t arrest the wrong person.', ru: 'К счастью, они не арестовали невиновного (не того) человека.' }
    ]
),

createRichWord('b1_aside', 'Aside', '/əˈsaɪd/', 'эсайд', 'В сторону', ProficiencyLevel.B1, 'adv', 'Medium', 'Neutral',
    'В одну сторону; отдельно от других. Также "кроме" (aside from).',
    '- Движение: "Step aside" (Отойти в сторону)\n- Сбережения: "Set aside" (Откладывать)\n- Исключение: "Aside from that" (Помимо этого)',
    [
      { en: 'Please stand aside and let the doctor pass.', ru: 'Пожалуйста, отойдите в сторону и дайте врачу пройти.' },
      { en: 'He took me aside to tell me a secret.', ru: 'Он отвел меня в сторону, чтобы рассказать секрет.' },
      { en: 'I try to put some money aside every month.', ru: 'Я стараюсь откладывать немного денег каждый месяц.' },
      { en: 'Aside from the rain, the holiday was perfect.', ru: 'Помимо дождя, отпуск был идеальным.' }
    ]
),

createRichWord('b1_atmosphere', 'Atmosphere', '/ˈætməsfɪə/', 'этмэсфиэ', 'Атмосфера', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Смесь газов вокруг планеты или настроение/чувство в определенном месте.',
    '- Настроение: "Friendly atmosphere" (Дружелюбная атмосфера)\n- Планета: "Earth\'s atmosphere" (Атмосфера Земли)\n- Давление: "Create an atmosphere" (Создать атмосферу)',
    [
      { en: 'The restaurant has a very romantic and cozy atmosphere.', ru: 'В ресторане очень романтичная и уютная атмосфера.' },
      { en: 'Pollution is damaging the earth\'s atmosphere.', ru: 'Загрязнение наносит вред атмосфере Земли.' },
      { en: 'There was a tense atmosphere in the room before the meeting.', ru: 'Перед встречей в комнате царила напряженная атмосфера.' },
      { en: 'Music can help create a relaxed atmosphere at home.', ru: 'Музыка может помочь создать расслабленную атмосферу дома.' }
    ]
  ),
createRichWord('b1_attach', 'Attach', '/əˈtætʃ/', 'этэч', 'Прикреплять', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Соединять одну вещь с другой; или добавлять файл к электронному письму.',
    '- Email: "Attach a file" (Прикрепить файл)\n- Физически: "Attach a label" (Прикрепить этикетку)\n- Связь: "Attached to" (Привязан к кому-то)',
    [
      { en: 'Please attach a recent photograph to your application form.', ru: 'Пожалуйста, прикрепите недавнюю фотографию к вашей анкете.' },
      { en: 'I forgot to attach the document to the email I sent.', ru: 'Я забыл прикрепить документ к письму, которое отправил.' },
      { en: 'You can attach the shelf to the wall with these screws.', ru: 'Вы можете прикрепить полку к стене с помощью этих винтов.' },
      { en: 'He is very attached to his old dog and loves him.', ru: 'Он очень привязан к своей старой собаке и любит ее.' }
    ]
),

createRichWord('b1_attend', 'Attend', '/əˈtend/', 'этенд', 'Посещать / Присутствовать', ProficiencyLevel.B1, 'verb', 'Medium', 'Formal',
    'Быть на мероприятии, встрече или регулярно ходить в школу/университет.',
    '- Мероприятие: "Attend a meeting" (Присутствовать на встрече)\n- Образование: "Attend school" (Посещать школу)\n- Событие: "Attend a wedding" (Посетить свадьбу)',
    [
      { en: 'I am unable to attend the meeting tomorrow due to illness.', ru: 'Я не смогу присутствовать на встрече завтра из-за болезни.' },
      { en: 'All students must attend classes regularly to pass the course.', ru: 'Все студенты должны регулярно посещать занятия, чтобы сдать курс.' },
      { en: 'How many people are expected to attend the conference?', ru: 'Сколько людей, как ожидается, посетят конференцию?' },
      { en: 'He didn\'t attend the party because he was working late.', ru: 'Он не пошел на вечеринку, потому что работал допоздна.' }
    ]
),

createRichWord('b1_attitude', 'Attitude', '/ˈætɪtjuːd/', 'этитьюд', 'Отношение / Позиция', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'То, как вы думаете и чувствуете о ком-то или чем-то; образ мыслей.',
    '- Характер: "Positive attitude" (Позитивный настрой)\n- Мнение: "Attitude towards" (Отношение к)\n- Поведение: "Bad attitude" (Плохое поведение/отношение)',
    [
      { en: 'She has a very positive attitude towards life and its challenges.', ru: 'У нее очень позитивное отношение к жизни и ее трудностям.' },
      { en: 'You need to change your attitude if you want to succeed.', ru: 'Тебе нужно изменить свое отношение, если ты хочешь добиться успеха.' },
      { en: 'His attitude towards his work has improved significantly recently.', ru: 'Его отношение к работе значительно улучшилось в последнее время.' },
      { en: 'I don\'t like his rude attitude when he talks to customers.', ru: 'Мне не нравится его грубое отношение, когда он разговаривает с клиентами.' }
    ]
),

createRichWord('b1_average', 'Average', '/ˈæv(ə)rɪdʒ/', 'эвэридж', 'Средний', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Типичный или нормальный; число, полученное сложением величин и делением на их количество.',
    '- Статистика: "Average age" (Средний возраст)\n- Уровень: "Above average" (Выше среднего)\n- Обычность: "Average person" (Обычный человек)',
    [
      { en: 'The average temperature in July is twenty-five degrees.', ru: 'Средняя температура в июле составляет двадцать пять градусов.' },
      { en: 'He is an average student who gets neither bad nor good grades.', ru: 'Он средний ученик, который не получает ни плохих, ни хороших оценок.' },
      { en: 'On average, I spend about an hour traveling to work.', ru: 'В среднем я трачу около часа на дорогу до работы.' },
      { en: 'Her height is slightly above average for her age group.', ru: 'Ее рост немного выше среднего для ее возрастной группы.' }
    ]
),

createRichWord('b1_avoid', 'Avoid', '/əˈvɔɪd/', 'эвойд', 'Избегать', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Стараться не делать чего-то или держаться подальше от кого-то/чего-то.',
    '- Действие: "Avoid doing" (Избегать делания чего-то)\n- Опасность: "Avoid accidents" (Избегать аварий)\n- Человек: "Avoid someone" (Избегать кого-то)',
    [
      { en: 'You should avoid eating too much sugar for your health.', ru: 'Вам следует избегать употребления слишком большого количества сахара для здоровья.' },
      { en: 'We left early to avoid the heavy traffic on the highway.', ru: 'Мы выехали рано, чтобы избежать сильных пробок на шоссе.' },
      { en: 'He tried to avoid answering the difficult question directly.', ru: 'Он пытался избежать прямого ответа на сложный вопрос.' },
      { en: 'She has been avoiding me all week for some reason.', ru: 'Она почему-то избегает меня всю неделю.' }
    ]
),

createRichWord('b1_background', 'Background', '/ˈbækɡraʊnd/', 'бэкграунд', 'Фон / Происхождение', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Задний план картины; или история жизни, образования и семьи человека.',
    '- Фото: "In the background" (На заднем плане)\n- Человек: "Family background" (Семейное происхождение/фон)\n- Звук: "Background noise" (Фоновый шум)',
    [
      { en: 'In the background of the photo, you can see the mountains.', ru: 'На заднем плане фотографии видны горы.' },
      { en: 'The job requires a background in computer science or engineering.', ru: 'Работа требует опыта (бэкграунда) в информатике или инженерии.' },
      { en: 'There was a lot of background noise during the phone call.', ru: 'Во время телефонного разговора было много фонового шума.' },
      { en: 'People from different cultural backgrounds live in this city.', ru: 'В этом городе живут люди с разным культурным происхождением.' }
    ]
),

createRichWord('b1_balance', 'Balance', '/ˈbæləns/', 'бэлэнс', 'Баланс / Равновесие', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Состояние, когда вес распределен равномерно, или гармония между частями.',
    '- Физика: "Keep balance" (Держать равновесие)\n- Жизнь: "Work-life balance" (Баланс работы и жизни)\n- Деньги: "Bank balance" (Баланс счета)',
    [
      { en: 'It is important to have a good balance between work and fun.', ru: 'Важно иметь хороший баланс между работой и развлечениями.' },
      { en: 'He lost his balance and fell off the skateboard.', ru: 'Он потерял равновесие и упал со скейтборда.' },
      { en: 'You need to eat a healthy diet to keep your body in balance.', ru: 'Вам нужно питаться здоровой пищей, чтобы держать организм в балансе.' },
      { en: 'I checked my bank balance before buying the expensive coat.', ru: 'Я проверил баланс своего счета перед покупкой дорогого пальто.' }
    ]
),

createRichWord('b1_bang', 'Bang', '/bæŋ/', 'бэн', 'Грохот / Удар', ProficiencyLevel.B1, 'noun', 'Low', 'Informal',
    'Внезапный громкий шум; или удар (также глагол "ударить/грохнуть").',
    '- Звук: "Loud bang" (Громкий хлопок)\n- Дверь: "Shut with a bang" (Захлопнуть с грохотом)\n- Голова: "Bang on the head" (Удар по голове)',
    [
      { en: 'We heard a loud bang outside and ran to the window.', ru: 'Мы услышали громкий хлопок на улице и побежали к окну.' },
      { en: 'She shut the door with a bang because she was angry.', ru: 'Она захлопнула дверь с грохотом, потому что была зла.' },
      { en: 'He fell and hit his head with a bang against the wall.', ru: 'Он упал и с грохотом ударился головой об стену.' },
      { en: 'The fireworks went off with a big bang in the sky.', ru: 'Фейерверки взорвались в небе с громким грохотом.' }
    ]
),

createRichWord('b1_bark', 'Bark', '/bɑːk/', 'бак', 'Лаять / Кора', ProficiencyLevel.B1, 'verb', 'Low', 'Neutral',
    'Издавать звук, характерный для собак (глагол); или твердая оболочка дерева (сущ).',
    '- Собака: "Bark at strangers" (Лаять на незнакомцев)\n- Дерево: "Tree bark" (Древесная кора)\n- Звук: "Loud bark" (Громкий лай)',
    [
      { en: 'The neighbor\'s dog barks loudly every time someone walks by.', ru: 'Соседская собака громко лает каждый раз, когда кто-то проходит мимо.' },
      { en: 'Some trees have very rough and thick bark.', ru: 'У некоторых деревьев очень грубая и толстая кора.' },
      { en: 'Don\'t be afraid, the dog may bark but it won\'t bite.', ru: 'Не бойся, собака может лаять, но она не укусит.' },
      { en: 'The dog started to bark when the doorbell rang.', ru: 'Собака начала лаять, когда зазвонил дверной звонок.' }
    ]
),

createRichWord('b1_battery', 'Battery', '/ˈbæt(ə)ri/', 'бэтэри', 'Батарейка / Аккумулятор', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Устройство, которое хранит электричество для питания приборов.',
    '- Телефон: "Low battery" (Низкий заряд батареи)\n- Замена: "Change the battery" (Поменять батарейку)\n- Тип: "Rechargeable battery" (Аккумуляторная батарейка)',
    [
      { en: 'My phone battery is dead, so I cannot call you.', ru: 'У меня сел аккумулятор на телефоне, поэтому я не могу тебе позвонить.' },
      { en: 'You need to put fresh batteries in the remote control.', ru: 'Тебе нужно вставить свежие батарейки в пульт управления.' },
      { en: 'This car runs on a large electric battery.', ru: 'Эта машина работает на большом электрическом аккумуляторе.' },
      { en: 'How long does the battery last on this laptop?', ru: 'Как долго держит заряд батарея на этом ноутбуке?' }
    ]
),

createRichWord('b1_bend', 'Bend', '/bend/', 'бенд', 'Сгибать / Поворот', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Искривлять что-то прямое или наклоняться телом.',
    '- Тело: "Bend your knees" (Согнуть колени)\n- Дорога: "Sharp bend" (Крутой поворот)\n- Действие: "Bend down" (Наклониться)',
    [
      { en: 'It is hard to bend this metal bar because it is thick.', ru: 'Трудно согнуть этот металлический прут, потому что он толстый.' },
      { en: 'Make sure to bend your knees when you lift heavy boxes.', ru: 'Обязательно сгибайте колени, когда поднимаете тяжелые коробки.' },
      { en: 'The road bends sharply to the left after the bridge.', ru: 'Дорога резко поворачивает (изгибается) влево за мостом.' },
      { en: 'He had to bend down to pick up the coins from the floor.', ru: 'Ему пришлось наклониться, чтобы поднять монеты с пола.' }
    ]
),

createRichWord('b1_benefit', 'Benefit', '/ˈbenɪfɪt/', 'бэнэфит', 'Выгода / Польза', ProficiencyLevel.B1, 'noun', 'Medium', 'Formal',
    'Преимущество или помощь, которую вы получаете от чего-либо.',
    '- Здоровье: "Health benefit" (Польза для здоровья)\n- Государство: "Unemployment benefit" (Пособие по безработице)\n- Результат: "For the benefit of" (На благо кого-то)',
    [
      { en: 'One major benefit of exercise is feeling more energetic.', ru: 'Одной из главных выгод упражнений является ощущение большей энергичности.' },
      { en: 'The new library will be of great benefit to the community.', ru: 'Новая библиотека принесет большую пользу сообществу.' },
      { en: 'Does this job offer any extra benefits like health insurance?', ru: 'Предлагает ли эта работа какие-либо дополнительные льготы, например, медстраховку?' },
      { en: 'We should work together for the benefit of everyone.', ru: 'Мы должны работать вместе на благо всех.' }
    ]
),

createRichWord('b1_bite', 'Bite', '/baɪt/', 'байт', 'Кусать / Укус', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Использовать зубы, чтобы резать еду или атаковать.',
    '- Еда: "Bite an apple" (Откусить яблоко)\n- Насекомые: "Mosquito bite" (Укус комара)\n- Действие: "Bite nails" (Грызть ногти)',
    [
      { en: 'Be careful, the dog might bite if you scare it.', ru: 'Будь осторожен, собака может укусить, если ты ее напугаешь.' },
      { en: 'I took a big bite of the delicious sandwich.', ru: 'Я откусил большой кусок вкусного сэндвича.' },
      { en: 'He has a bad habit of biting his nails when nervous.', ru: 'У него есть плохая привычка грызть ногти, когда он нервничает.' },
      { en: 'The mosquitoes bite a lot near the lake in summer.', ru: 'Комары сильно кусаются у озера летом.' }
    ]
),

createRichWord('b1_bitter', 'Bitter', '/ˈbɪtə/', 'битэ', 'Горький', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Имеющий резкий вкус (как кофе без сахара); или чувствующий обиду.',
    '- Вкус: "Bitter taste" (Горький вкус)\n- Эмоция: "Bitter disappointment" (Горькое разочарование)\n- Погода: "Bitter cold" (Жуткий холод)',
    [
      { en: 'The medicine had a very bitter taste, so I drank water.', ru: 'У лекарства был очень горький вкус, поэтому я выпил воды.' },
      { en: 'Black coffee can be too bitter for some people.', ru: 'Черный кофе может быть слишком горьким для некоторых людей.' },
      { en: 'He felt bitter about not getting the promotion he deserved.', ru: 'Он чувствовал обиду (горечь) из-за того, что не получил повышение, которое заслужил.' },
      { en: 'It was a bitter winter day with freezing winds.', ru: 'Это был жутко холодный зимний день с ледяными ветрами.' }
    ]
),

createRichWord('b1_blame', 'Blame', '/bleɪm/', 'блейм', 'Винить', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Считать или говорить, что кто-то несет ответственность за что-то плохое.',
    '- Обвинение: "Blame someone" (Винить кого-то)\n- Ответственность: "Take the blame" (Взять вину на себя)\n- Причина: "Don\'t blame me" (Не вини меня)',
    [
      { en: 'You shouldn\'t blame yourself for the accident; it wasn\'t your fault.', ru: 'Тебе не следует винить себя за аварию; это была не твоя вина.' },
      { en: 'He tried to blame his brother for breaking the window.', ru: 'Он пытался свалить вину на брата за разбитое окно.' },
      { en: 'Who is to blame for the mistake in the report?', ru: 'Кто виноват в ошибке в отчете?' },
      { en: 'I don\'t blame you for being angry; I would be too.', ru: 'Я не виню тебя за то, что ты злишься; я бы тоже злился.' }
    ]
),

createRichWord('b1_bleed', 'Bleed', '/bliːd/', 'блид', 'Кровоточить', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Терять кровь из-за пореза или травмы.',
    '- Травма: "Nose bleed" (Кровотечение из носа)\n- Действие: "Bleed heavily" (Сильно кровоточить)\n- Рана: "Stop bleeding" (Остановить кровотечение)',
    [
      { en: 'If the cut continues to bleed, you should see a doctor.', ru: 'Если порез продолжает кровоточить, вам следует обратиться к врачу.' },
      { en: 'His nose started to bleed after he was hit by the ball.', ru: 'У него пошла кровь из носа после того, как в него попал мяч.' },
      { en: 'Apply pressure to the wound to stop it from bleeding.', ru: 'Надавите на рану, чтобы остановить кровотечение.' },
      { en: 'My finger is bleeding a little bit where I cut it.', ru: 'Мой палец немного кровоточит в том месте, где я его порезал.' }
    ]
  ),
createRichWord('b1_blind', 'Blind', '/blaɪnd/', 'блайнд', 'Слепой', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Неспособный видеть; также может означать "ослепленный" чем-то (светом или любовью).',
    '- Зрение: "Go blind" (Ослепнуть)\n- Животные: "Blind dog" (Слепая собака)\n- Метафора: "Blind love" (Слепая любовь)',
    [
      { en: 'He has been blind since he was born.', ru: 'Он был слепым с самого рождения.' },
      { en: 'The guide dog helps the blind man cross the street safely.', ru: 'Собака-поводырь помогает слепому мужчине безопасно переходить улицу.' },
      { en: 'She was almost blinded by the bright lights of the car.', ru: 'Она была почти ослеплена яркими огнями машины.' },
      { en: 'Love is blind, as the old saying goes.', ru: 'Любовь слепа, как гласит старая поговорка.' }
    ]
),

createRichWord('b1_block', 'Block', '/blɒk/', 'блок', 'Блокировать / Блок', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Преграждать путь или мешать движению; также существительное "квартал" или "кусок".',
    '- Дорога: "Block the road" (Блокировать дорогу)\n- Здание: "Block of flats" (Многоквартирный дом)\n- Город: "Walk around the block" (Прогуляться вокруг квартала)',
    [
      { en: 'A fallen tree blocked the road, so we couldn\'t pass.', ru: 'Упавшее дерево заблокировало дорогу, поэтому мы не могли проехать.' },
      { en: 'They live in a large block of flats near the station.', ru: 'Они живут в большом многоквартирном доме рядом со станцией.' },
      { en: 'Please do not block the exit with your heavy bags.', ru: 'Пожалуйста, не загораживайте выход своими тяжелыми сумками.' },
      { en: 'He walked three blocks to get to the nearest pharmacy.', ru: 'Он прошел три квартала, чтобы добраться до ближайшей аптеки.' }
    ]
),

createRichWord('b1_bomb', 'Bomb', '/bɒm/', 'бом', 'Бомба', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Оружие, которое взрывается и вызывает разрушения.',
    '- Опасность: "Bomb explode" (Взрыв бомбы)\n- Действие: "Drop a bomb" (Сбросить бомбу)\n- Угроза: "Bomb threat" (Угроза взрыва)',
    [
      { en: 'The police found an old bomb from the war in the garden.', ru: 'Полиция нашла в саду старую бомбу времен войны.' },
      { en: 'Luckily, the bomb did not explode and nobody was hurt.', ru: 'К счастью, бомба не взорвалась, и никто не пострадал.' },
      { en: 'The building was completely destroyed by a powerful bomb.', ru: 'Здание было полностью разрушено мощной бомбой.' },
      { en: 'They had to evacuate the airport due to a security alert.', ru: 'Им пришлось эвакуировать аэропорт из-за угрозы безопасности (бомбы).' }
    ]
),

createRichWord('b1_brake', 'Brake', '/breɪk/', 'брейк', 'Тормоз / Тормозить', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Устройство для остановки или замедления транспортного средства.',
    '- Машина: "Hit the brakes" (Ударить по тормозам)\n- Велосипед: "Hand brake" (Ручной тормоз)\n- Действие: "Brake hard" (Резко затормозить)',
    [
      { en: 'The driver had to brake suddenly to avoid hitting the dog.', ru: 'Водителю пришлось внезапно затормозить, чтобы не сбить собаку.' },
      { en: 'Check your brakes regularly to ensure they work properly.', ru: 'Регулярно проверяйте тормоза, чтобы убедиться, что они работают правильно.' },
      { en: 'She pulled the hand brake and turned off the engine.', ru: 'Она затянула ручной тормоз и выключила двигатель.' },
      { en: 'My bike needs new brakes because it doesn\'t stop quickly.', ru: 'Моему велосипеду нужны новые тормоза, потому что он не останавливается быстро.' }
    ]
),

createRichWord('b1_branch', 'Branch', '/brɑːntʃ/', 'бранч', 'Ветка / Филиал', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Часть дерева, растущая от ствола; или местный офис крупной компании.',
    '- Дерево: "Tree branch" (Ветка дерева)\n- Бизнес: "Bank branch" (Отделение банка)\n- Расположение: "Local branch" (Местный филиал)',
    [
      { en: 'The bird built its nest on a high branch of the oak tree.', ru: 'Птица построила свое гнездо на высокой ветке дуба.' },
      { en: 'Our company is opening a new branch in Paris next month.', ru: 'Наша компания открывает новый филиал в Париже в следующем месяце.' },
      { en: 'A heavy branch fell on the roof during the storm.', ru: 'Тяжелая ветка упала на крышу во время шторма.' },
      { en: 'I need to visit the local branch to speak with a manager.', ru: 'Мне нужно посетить местное отделение, чтобы поговорить с менеджером.' }
    ]
),

createRichWord('b1_brand', 'Brand', '/brænd/', 'брэнд', 'Бренд / Марка', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Тип продукта, производимый определенной компанией под определенным именем.',
    '- Маркетинг: "Top brand" (Ведущий бренд)\n- Одежда: "Brand name" (Название бренда)\n- Лояльность: "Brand loyalty" (Преданность бренду)',
    [
      { en: 'Which brand of coffee do you usually buy at the supermarket?', ru: 'Какую марку кофе вы обычно покупаете в супермаркете?' },
      { en: 'She likes to wear clothes from expensive luxury brands.', ru: 'Она любит носить одежду от дорогих люксовых брендов.' },
      { en: 'This company is a well-known brand all over the world.', ru: 'Эта компания является известным брендом во всем мире.' },
      { en: 'They launched a new brand of sports shoes last year.', ru: 'В прошлом году они запустили новый бренд спортивной обуви.' }
    ]
),

createRichWord('b1_brave', 'Brave', '/breɪv/', 'брейв', 'Храбрый', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Готовый делать опасные или трудные вещи без страха.',
    '- Характер: "Brave soldier" (Храбрый солдат)\n- Лицо: "Brave face" (Смелое выражение лица / вид)\n- Поступок: "Brave decision" (Смелое решение)',
    [
      { en: 'It was very brave of him to rescue the cat from the fire.', ru: 'С его стороны было очень смело спасти кошку из огня.' },
      { en: 'She put on a brave face, even though she was scared.', ru: 'Она сделала смелый вид, хотя ей было страшно.' },
      { en: 'Soldiers are often honored for being brave in battle.', ru: 'Солдат часто награждают за храбрость в бою.' },
      { en: 'You have to be brave to speak in front of so many people.', ru: 'Нужно быть смелым, чтобы выступать перед таким количеством людей.' }
    ]
),

createRichWord('b1_breathe', 'Breathe', '/briːð/', 'бриз', 'Дышать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Втягивать воздух в легкие и выпускать его обратно.',
    '- Действие: "Breathe deeply" (Дышать глубоко)\n- Трудность: "Hard to breathe" (Трудно дышать)\n- Воздух: "Breathe fresh air" (Дышать свежим воздухом)',
    [
      { en: 'The doctor asked him to breathe in and out slowly.', ru: 'Врач попросил его медленно вдохнуть и выдохнуть.' },
      { en: 'It is wonderful to breathe the fresh mountain air.', ru: 'Чудесно дышать свежим горным воздухом.' },
      { en: 'I cannot breathe through my nose because I have a cold.', ru: 'Я не могу дышать носом, потому что у меня простуда.' },
      { en: 'Relax and remember to breathe normally during the exercise.', ru: 'Расслабься и не забывай дышать нормально во время упражнения.' }
    ]
  ),
createRichWord('b1_academy', 'Academy', '/əˈkædəmi/', 'экэдэми', 'Академия', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Учебное заведение для специального обучения (например, военного или художественного) или организация ученых.',
    '- Спорт: "Football academy" (Футбольная академия)\n- Искусство: "Art academy" (Художественная академия)\n- Наука: "Science academy" (Академия наук)',
    [
      { en: 'He trains at the police academy to become an officer.', ru: 'Он тренируется в полицейской академии, чтобы стать офицером.' },
      { en: 'She was accepted into a prestigious music academy.', ru: 'Ее приняли в престижную музыкальную академию.' },
      { en: 'The academy awards prizes for the best films every year.', ru: 'Академия ежегодно присуждает призы за лучшие фильмы.' },
      { en: 'Young players join the academy to improve their skills.', ru: 'Молодые игроки вступают в академию, чтобы улучшить свои навыки.' }
    ]
),

createRichWord('b1_achieve', 'Achieve', '/əˈtʃiːv/', 'эчив', 'Достигать', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Успешно завершить что-то или получить результат благодаря усилиям, мастерству или смелости.',
    '- Цель: "Achieve a goal" (Достичь цели)\n- Успех: "Achieve success" (Добиться успеха)\n- Результат: "Achieve results" (Добиться результатов)',
    [
      { en: 'If you work hard, you can achieve anything you want.', ru: 'Если будешь усердно работать, ты сможешь достичь всего, чего захочешь.' },
      { en: 'She managed to achieve her dream of becoming a doctor.', ru: 'Ей удалось осуществить (достичь) свою мечту стать врачом.' },
      { en: 'They achieved excellent results in the final exam.', ru: 'Они достигли отличных результатов на итоговом экзамене.' },
      { en: 'It is difficult to achieve a balance between work and life.', ru: 'Трудно достичь баланса между работой и личной жизнью.' }
    ]
),

createRichWord('b1_agency', 'Agency', '/ˈeɪdʒənsi/', 'эйдженси', 'Агентство', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Бизнес или организация, предоставляющая определенные услуги от имени других компаний или людей.',
    '- Путешествия: "Travel agency" (Туристическое агентство)\n- Новости: "News agency" (Информационное агентство)\n- Реклама: "Advertising agency" (Рекламное агентство)',
    [
      { en: 'We booked our flights through a local travel agency.', ru: 'Мы забронировали билеты через местное туристическое агентство.' },
      { en: 'She works for an advertising agency in the city center.', ru: 'Она работает в рекламном агентстве в центре города.' },
      { en: 'The employment agency helped him find a new job quickly.', ru: 'Кадровое агентство помогло ему быстро найти новую работу.' },
      { en: 'Government agencies are responsible for public safety.', ru: 'Правительственные агентства отвечают за общественную безопасность.' }
    ]
),

createRichWord('b1_aim', 'Aim', '/eɪm/', 'эйм', 'Цель / Целиться', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Результат, которого вы хотите достичь; или действие направления оружия или предмета.',
    '- План: "Main aim" (Главная цель)\n- Оружие: "Take aim" (Прицелиться)\n- Жизнь: "Aim in life" (Цель в жизни)',
    [
      { en: 'My main aim this year is to learn how to drive a car.', ru: 'Моя главная цель в этом году — научиться водить машину.' },
      { en: 'The program aims to help young people find employment.', ru: 'Программа нацелена на то, чтобы помочь молодым людям найти работу.' },
      { en: 'He aimed the camera at the bird but missed the shot.', ru: 'Он навел камеру на птицу, но упустил кадр.' },
      { en: 'Our aim is to provide the best service to our customers.', ru: 'Наша цель — предоставить лучший сервис нашим клиентам.' }
    ]
),

createRichWord('b1_alternative', 'Alternative', '/ɔːlˈtɜːnətɪv/', 'олтёнэтив', 'Альтернатива', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Вещь, которую можно выбрать вместо другой; возможность выбора.',
    '- Выбор: "Good alternative" (Хорошая альтернатива)\n- Вариант: "Have no alternative" (Не иметь выбора/альтернативы)\n- Медицина: "Alternative medicine" (Альтернативная медицина)',
    [
      { en: 'Is there an alternative to taking the busy train today?', ru: 'Есть ли альтернатива поездке на переполненном поезде сегодня?' },
      { en: 'We have no alternative but to cancel the meeting.', ru: 'У нас нет другой альтернативы, кроме как отменить встречу.' },
      { en: 'Fruit juice is a healthy alternative to fizzy drinks.', ru: 'Фруктовый сок — это здоровая альтернатива газированным напиткам.' },
      { en: 'They are looking for alternative sources of energy.', ru: 'Они ищут альтернативные источники энергии.' }
    ]
),

createRichWord('b1_analyse', 'Analyse', '/ˈænəlaɪz/', 'энэлайз', 'Анализировать', ProficiencyLevel.B1, 'verb', 'Medium', 'Formal',
    'Детально изучать или исследовать что-то, чтобы понять это или объяснить (AmE: Analyze).',
    '- Данные: "Analyse data" (Анализировать данные)\n- Проблема: "Analyse the situation" (Анализировать ситуацию)\n- Результат: "Analyse results" (Анализировать результаты)',
    [
      { en: 'Scientists need to analyse the results of the experiment.', ru: 'Ученым нужно проанализировать результаты эксперимента.' },
      { en: 'We should analyse why the project failed last time.', ru: 'Нам следует проанализировать, почему проект провалился в прошлый раз.' },
      { en: 'The computer program analyses the text for errors.', ru: 'Компьютерная программа анализирует текст на наличие ошибок.' },
      { en: 'He tried to analyse his feelings but found it confusing.', ru: 'Он пытался проанализировать свои чувства, но это его запутало.' }
    ]
),

createRichWord('b1_annual', 'Annual', '/ˈænjuəl/', 'эньюэл', 'Ежегодный', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Происходящий один раз в год или охватывающий период в один год.',
    '- Событие: "Annual meeting" (Ежегодная встреча)\n- Доход: "Annual income" (Годовой доход)\n- Отчет: "Annual report" (Годовой отчет)',
    [
      { en: 'The company publishes its annual report in March.', ru: 'Компания публикует свой годовой отчет в марте.' },
      { en: 'We are going to the annual summer festival tomorrow.', ru: 'Мы идем на ежегодный летний фестиваль завтра.' },
      { en: 'His annual salary has increased significantly this year.', ru: 'Его годовая зарплата значительно выросла в этом году.' },
      { en: 'Plants that live for only one year are called annuals.', ru: 'Растения, которые живут всего один год, называются однолетними.' }
    ]
),

createRichWord('b1_approve', 'Approve', '/əˈpruːv/', 'эпрув', 'Одобрять', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Иметь положительное мнение о ком-то или чем-то; или давать официальное разрешение.',
    '- Мнение: "Approve of" (Одобрять что-то)\n- Разрешение: "Approve the plan" (Утвердить план)\n- Кредит: "Loan approved" (Кредит одобрен)',
    [
      { en: 'Her parents did not approve of her new boyfriend.', ru: 'Ее родители не одобряли ее нового парня.' },
      { en: 'The council approved the plans for the new park.', ru: 'Совет утвердил планы на строительство нового парка.' },
      { en: 'I hope the manager will approve my holiday request.', ru: 'Надеюсь, менеджер одобрит мой запрос на отпуск.' },
      { en: 'She doesn\'t approve of smoking in the house.', ru: 'Она не одобряет курение в доме.' }
    ]
  ),
createRichWord('b1_architect', 'Architect', '/ˈɑːkɪtekt/', 'акитэкт', 'Архитектор', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Человек, чья работа — проектировать здания и контролировать их строительство.',
    '- Профессия: "Famous architect" (Известный архитектор)\n- Работа: "Chief architect" (Главный архитектор)\n- Действие: "Design by architect" (Спроектировано архитектором)',
    [
      { en: 'The architect designed a very modern house for the family.', ru: 'Архитектор спроектировал очень современный дом для семьи.' },
      { en: 'He studied for seven years to become a qualified architect.', ru: 'Он учился семь лет, чтобы стать квалифицированным архитектором.' },
      { en: 'We hired an architect to draw plans for the new office.', ru: 'Мы наняли архитектора, чтобы начертить планы для нового офиса.' },
      { en: 'Sir Christopher Wren was a famous English architect.', ru: 'Сэр Кристофер Рен был известным английским архитектором.' }
    ]
),

createRichWord('b1_architecture', 'Architecture', '/ˈɑːkɪtektʃə/', 'акитэкчэ', 'Архитектура', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Искусство и наука проектирования и строительства зданий; стиль здания.',
    '- Стиль: "Modern architecture" (Современная архитектура)\n- История: "Gothic architecture" (Готическая архитектура)\n- Учеба: "Study architecture" (Изучать архитектуру)',
    [
      { en: 'I love the classical architecture of ancient Rome and Greece.', ru: 'Я люблю классическую архитектуру древнего Рима и Греции.' },
      { en: 'Modern architecture often uses a lot of glass and steel.', ru: 'Современная архитектура часто использует много стекла и стали.' },
      { en: 'She is studying architecture at the university in London.', ru: 'Она изучает архитектуру в университете в Лондоне.' },
      { en: 'The architecture of this church is absolutely beautiful.', ru: 'Архитектура этой церкви абсолютно прекрасна.' }
    ]
),

createRichWord('b1_audience', 'Audience', '/ˈɔːdiəns/', 'одиэнс', 'Аудитория / Зрители', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Группа людей, которые собрались вместе, чтобы посмотреть или послушать что-то (концерт, фильм).',
    '- Мероприятие: "Large audience" (Большая аудитория)\n- Реакция: "Audience clapped" (Зрители хлопали)\n- Тип: "Target audience" (Целевая аудитория)',
    [
      { en: 'The audience clapped loudly at the end of the play.', ru: 'Зрители громко хлопали в конце пьесы.' },
      { en: 'There was a large audience for the concert in the park.', ru: 'На концерте в парке была большая аудитория.' },
      { en: 'The speaker answered questions from the audience after his talk.', ru: 'Спикер ответил на вопросы из аудитории после своего выступления.' },
      { en: 'This TV show is designed for a young teenage audience.', ru: 'Это телешоу предназначено для молодой подростковой аудитории.' }
    ]
),

createRichWord('b1_authority', 'Authority', '/ɔːˈθɒrəti/', 'осорити', 'Власть / Авторитет', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Моральное или юридическое право управлять; люди, обладающие властью (власти).',
    '- Контроль: "Have authority" (Иметь власть)\n- Люди: "Local authority" (Местная власть)\n- Эксперт: "Authority on art" (Авторитет в искусстве)',
    [
      { en: 'Parents have authority over their children until they are adults.', ru: 'Родители имеют власть над своими детьми, пока те не станут взрослыми.' },
      { en: 'You should report the crime to the local authorities immediately.', ru: 'Вам следует немедленно сообщить о преступлении местным властям.' },
      { en: 'He speaks with authority because he knows the subject well.', ru: 'Он говорит авторитетно (с властью), потому что хорошо знает предмет.' },
      { en: 'I do not have the authority to sign these legal documents.', ru: 'У меня нет полномочий подписывать эти юридические документы.' }
    ]
),

createRichWord('b1_award', 'Award', '/əˈwɔːd/', 'эвод', 'Награда', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Приз или сумма денег, которую дают кому-то за достижение.',
    '- Приз: "Win an award" (Выиграть награду)\n- Кино: "Academy Award" (Премия Оскар)\n- Действие: "Receive an award" (Получить награду)',
    [
      { en: 'She won an award for being the best student of the year.', ru: 'Она выиграла награду, став лучшей студенткой года.' },
      { en: 'The actor received an award for his brilliant performance.', ru: 'Актер получил награду за свое блестящее выступление.' },
      { en: 'The ceremony to present the awards will be held tonight.', ru: 'Церемония вручения наград состоится сегодня вечером.' },
      { en: 'His book has been nominated for a prestigious literary award.', ru: 'Его книга была номинирована на престижную литературную премию.' }
    ]
),

createRichWord('b1_ban', 'Ban', '/bæn/', 'бэн', 'Запрет / Запрещать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Официально заявить, что что-то не разрешено.',
    '- Закон: "Ban smoking" (Запретить курение)\n- Интернет: "Ban a user" (Забанить пользователя)\n- Правило: "Total ban" (Полный запрет)',
    [
      { en: 'The government decided to ban smoking in all public places.', ru: 'Правительство решило запретить курение во всех общественных местах.' },
      { en: 'Cars are banned from the city center on Sundays.', ru: 'Въезд машин в центр города запрещен по воскресеньям.' },
      { en: 'There is a ban on selling alcohol to people under eighteen.', ru: 'Существует запрет на продажу алкоголя людям младше восемнадцати.' },
      { en: 'He was banned from driving for two years after the accident.', ru: 'Ему запретили водить машину на два года после аварии.' }
    ]
),

createRichWord('b1_belief', 'Belief', '/bɪˈliːf/', 'билиф', 'Вера / Убеждение', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Чувство уверенности в том, что что-то существует или является правдой.',
    '- Религия: "Religious belief" (Религиозное убеждение)\n- Мнение: "Strong belief" (Сильное убеждение)\n- Факт: "Beyond belief" (Невероятно / За гранью понимания)',
    [
      { en: 'His belief in God helped him through difficult times.', ru: 'Его вера в Бога помогла ему пережить трудные времена.' },
      { en: 'It is my firm belief that honesty is always the best policy.', ru: 'Я твердо убежден, что честность — всегда лучшая политика.' },
      { en: 'Respecting the beliefs of other people is very important.', ru: 'Уважение убеждений других людей очень важно.' },
      { en: 'The beauty of the mountain view was almost beyond belief.', ru: 'Красота горного вида была почти невероятной.' }
    ]
),

createRichWord('b1_bench', 'Bench', '/bentʃ/', 'бэнч', 'Скамья', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Длинное сиденье из дерева или металла для двух и более человек.',
    '- Парк: "Park bench" (Парковая скамейка)\n- Спорт: "Sit on the bench" (Сидеть на скамейке запасных)\n- Работа: "Work bench" (Верстак)',
    [
      { en: 'We sat on a wooden bench in the park and ate our lunch.', ru: 'Мы сидели на деревянной скамейке в парке и ели наш обед.' },
      { en: 'The old man was sleeping on a bench near the bus stop.', ru: 'Старик спал на скамейке возле автобусной остановки.' },
      { en: 'The coach left the player on the bench for the whole game.', ru: 'Тренер оставил игрока на скамейке запасных на всю игру.' },
      { en: 'They painted the bench green to match the garden fence.', ru: 'Они покрасили скамейку в зеленый цвет под стать садовому забору.' }
    ]
),

createRichWord('b1_bible', 'Bible', '/ˈbaɪb(ə)l/', 'байбл', 'Библия', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Священная книга христианской религии.',
    '- Религия: "Read the Bible" (Читать Библию)\n- Книга: "Holy Bible" (Святая Библия)\n- История: "Bible stories" (Библейские истории)',
    [
      { en: 'She reads a chapter from the Bible every night before bed.', ru: 'Она читает главу из Библии каждый вечер перед сном.' },
      { en: 'The Bible has been translated into hundreds of languages.', ru: 'Библия была переведена на сотни языков.' },
      { en: 'There are many interesting stories in the Bible.', ru: 'В Библии много интересных историй.' },
      { en: 'He swore on the Bible to tell the truth in court.', ru: 'Он поклялся на Библии говорить правду в суде.' }
    ]
),

createRichWord('b1_border', 'Border', '/ˈbɔːdə/', 'бодэ', 'Граница', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Линия, разделяющая две страны или области.',
    '- Страна: "Cross the border" (Пересечь границу)\n- Контроль: "Border control" (Пограничный контроль)\n- Край: "Border of a picture" (Край картины)',
    [
      { en: 'We need to show our passports at the border crossing.', ru: 'Нам нужно показать паспорта при пересечении границы.' },
      { en: 'The river forms a natural border between the two states.', ru: 'Река образует естественную границу между двумя штатами.' },
      { en: 'They live in a small village near the French border.', ru: 'Они живут в маленькой деревне недалеко от французской границы.' },
      { en: 'Soldiers patrol the border to keep the country safe.', ru: 'Солдаты патрулируют границу, чтобы обеспечить безопасность страны.' }
    ]
),

createRichWord('b1_campaign', 'Campaign', '/kæmˈpeɪn/', 'кэмпейн', 'Кампания', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Серия запланированных действий для достижения определенной цели (политической, рекламной).',
    '- Политика: "Election campaign" (Предвыборная кампания)\n- Реклама: "Advertising campaign" (Рекламная кампания)\n- Действие: "Launch a campaign" (Запустить кампанию)',
    [
      { en: 'The president launched his re-election campaign yesterday.', ru: 'Президент запустил свою кампанию по переизбранию вчера.' },
      { en: 'They started a campaign to stop plastic pollution in the ocean.', ru: 'Они начали кампанию по прекращению загрязнения океана пластиком.' },
      { en: 'The new advertising campaign was very successful for sales.', ru: 'Новая рекламная кампания была очень успешной для продаж.' },
      { en: 'We joined the campaign to save the local library.', ru: 'Мы присоединились к кампании по спасению местной библиотеки.' }
    ]
),

createRichWord('b1_cancel', 'Cancel', '/ˈkæns(ə)l/', 'кэнсл', 'Отменять', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Решить, что запланированное событие не произойдет.',
    '- Путешествие: "Cancel a flight" (Отменить рейс)\n- Встреча: "Cancel the meeting" (Отменить встречу)\n- Заказ: "Cancel order" (Отменить заказ)',
    [
      { en: 'I have to cancel our meeting because I am sick.', ru: 'Я должен отменить нашу встречу, потому что я болен.' },
      { en: 'The flight was cancelled due to the heavy snow.', ru: 'Рейс был отменен из-за сильного снегопада.' },
      { en: 'You can cancel your subscription at any time online.', ru: 'Вы можете отменить свою подписку в любое время онлайн.' },
      { en: 'They decided to cancel the party at the last minute.', ru: 'Они решили отменить вечеринку в последнюю минуту.' }
    ]
),

createRichWord('b1_candidate', 'Candidate', '/ˈkændɪdət/', 'кэндидэт', 'Кандидат', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Человек, претендующий на работу или участвующий в выборах.',
    '- Работа: "Job candidate" (Кандидат на работу)\n- Выборы: "Presidential candidate" (Кандидат в президенты)\n- Выбор: "Good candidate" (Хороший кандидат)',
    [
      { en: 'He is the best candidate for the job of manager.', ru: 'Он лучший кандидат на должность менеджера.' },
      { en: 'There are three candidates running for president this year.', ru: 'В этом году на пост президента баллотируются три кандидата.' },
      { en: 'The interviewers asked the candidate many difficult questions.', ru: 'Интервьюеры задали кандидату много сложных вопросов.' },
      { en: 'Please send your CV if you want to be a candidate.', ru: 'Пожалуйста, пришлите свое резюме, если хотите стать кандидатом.' }
    ]
),

createRichWord('b1_category', 'Category', '/ˈkætəɡəri/', 'кэтэгэри', 'Категория', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Группа людей или вещей, имеющих общие характеристики.',
    '- Тип: "Age category" (Возрастная категория)\n- Группа: "Fall into a category" (Попадать в категорию)\n- Спорт: "Weight category" (Весовая категория)',
    [
      { en: 'The films are divided into different categories like comedy and horror.', ru: 'Фильмы разделены на разные категории, такие как комедия и ужасы.' },
      { en: 'This hotel is in the luxury category and is very expensive.', ru: 'Этот отель относится к категории люкс и очень дорогой.' },
      { en: 'Please choose a category that best describes your business.', ru: 'Пожалуйста, выберите категорию, которая лучше всего описывает ваш бизнес.' },
      { en: 'The competition has a special category for young artists.', ru: 'В конкурсе есть специальная категория для молодых художников.' }
    ]
),

createRichWord('b1_ceremony', 'Ceremony', '/ˈserəməni/', 'сэрэмэни', 'Церемония', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Формальное публичное или религиозное событие.',
    '- Свадьба: "Wedding ceremony" (Свадебная церемония)\n- Открытие: "Opening ceremony" (Церемония открытия)\n- Награждение: "Award ceremony" (Церемония награждения)',
    [
      { en: 'The wedding ceremony was held in a beautiful old church.', ru: 'Свадебная церемония проходила в красивой старой церкви.' },
      { en: 'We watched the opening ceremony of the Olympic Games on TV.', ru: 'Мы смотрели церемонию открытия Олимпийских игр по телевизору.' },
      { en: 'The graduation ceremony will take place next Friday.', ru: 'Церемония вручения дипломов состоится в следующую пятницу.' },
      { en: 'Usually, a formal ceremony involves speeches and music.', ru: 'Обычно официальная церемония включает в себя речи и музыку.' }
    ]
  ),
createRichWord('b1_accountant', 'Accountant', '/əˈkaʊntənt/', 'экаунтэнт', 'Бухгалтер', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Человек, чья работа заключается в ведении или проверке финансовых счетов.',
    '- Работа: "Work as an accountant" (Работать бухгалтером)\n- Фирма: "Chief accountant" (Главный бухгалтер)\n- Налоги: "Tax accountant" (Налоговый бухгалтер)',
    [
      { en: 'My brother is an accountant for a large company.', ru: 'Мой брат работает бухгалтером в крупной компании.' },
      { en: 'We need an accountant to help us with our taxes.', ru: 'Нам нужен бухгалтер, чтобы помочь нам с налогами.' },
      { en: 'The accountant checked the numbers very carefully.', ru: 'Бухгалтер очень тщательно проверил цифры.' },
      { en: 'She studied mathematics before becoming an accountant.', ru: 'Она изучала математику, прежде чем стать бухгалтером.' }
    ]
),

createRichWord('b1_alike', 'Alike', '/əˈlaɪk/', 'элайк', 'Похожий / Одинаково', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Очень похожие друг на друга (прилагательное); или таким же образом (наречие).',
    '- Внешность: "Look alike" (Выглядеть похоже)\n- Мысли: "Think alike" (Думать одинаково)\n- Сравнение: "Very much alike" (Очень похожи)',
    [
      { en: 'The two sisters look so alike that I cannot tell them apart.', ru: 'Две сестры выглядят так похоже, что я не могу их различить.' },
      { en: 'My father and I think alike on many important issues.', ru: 'Мы с отцом одинаково мыслим по многим важным вопросам.' },
      { en: 'They tried to treat all the children alike.', ru: 'Они старались относиться ко всем детям одинаково.' },
      { en: 'Although they are twins, their personalities are not alike.', ru: 'Хотя они близнецы, их характеры не похожи.' }
    ]
),

createRichWord('b1_ambition', 'Ambition', '/æmˈbɪʃ(ə)n/', 'эмбишн', 'Амбиция / Цель', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Сильное желание достичь чего-либо, обычно успеха, власти или богатства.',
    '- Карьера: "Career ambition" (Карьерная амбиция)\n- Жизнь: "Lifelong ambition" (Цель всей жизни)\n- Недостаток: "Lack of ambition" (Отсутствие амбиций)',
    [
      { en: 'His main ambition in life is to become a pilot.', ru: 'Его главная цель в жизни — стать пилотом.' },
      { en: 'She has plenty of ambition and works very hard.', ru: 'У нее много амбиций, и она очень усердно работает.' },
      { en: 'He achieved his ambition of writing a book.', ru: 'Он достиг своей цели — написать книгу.' },
      { en: 'Without ambition, it is hard to succeed in business.', ru: 'Без амбиций трудно добиться успеха в бизнесе.' }
    ]
),

createRichWord('b1_ambitious', 'Ambitious', '/æmˈbɪʃəs/', 'эмбишэс', 'Амбициозный', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Имеющий сильное желание и решимость добиться успеха.',
    '- Человек: "Ambitious student" (Амбициозный студент)\n- План: "Ambitious plan" (Амбициозный план)\n- Проект: "Ambitious project" (Амбициозный проект)',
    [
      { en: 'She is an ambitious lawyer who wants to be a judge.', ru: 'Она амбициозный юрист, который хочет стать судьей.' },
      { en: 'The company has an ambitious plan to expand globally.', ru: 'У компании есть амбициозный план глобального расширения.' },
      { en: 'He is too ambitious and never relaxes.', ru: 'Он слишком амбициозен и никогда не расслабляется.' },
      { en: 'It was an ambitious project that cost a lot of money.', ru: 'Это был амбициозный проект, который стоил много денег.' }
    ]
  ),
createRichWord('b1_ballet', 'Ballet', '/ˈbæleɪ/', 'бэлей', 'Балет', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Художественный танец с музыкой, использующий точные и формализованные шаги.',
    '- Искусство: "Ballet dancer" (Артист балета)\n- Обучение: "Ballet shoes" (Балетные туфли/пуанты)\n- Место: "Go to the ballet" (Пойти на балет)',
    [
      { en: 'She has been practicing ballet since she was four years old.', ru: 'Она занимается балетом с четырех лет.' },
      { en: 'We bought tickets to see a performance of Swan Lake ballet.', ru: 'Мы купили билеты на представление балета "Лебединое озеро".' },
      { en: 'Ballet dancers must be very strong and graceful on stage.', ru: 'Артисты балета должны быть очень сильными и грациозными на сцене.' },
      { en: 'The little girl dreams of becoming a famous ballet star.', ru: 'Маленькая девочка мечтает стать известной звездой балета.' }
    ]
),

createRichWord('b1_biography', 'Biography', '/baɪˈɒɡrəfi/', 'байогрэфи', 'Биография', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'История жизни человека, написанная кем-то другим.',
    '- Литература: "Read a biography" (Читать биографию)\n- Автор: "Write a biography" (Написать биографию)\n- Тип: "Unauthorized biography" (Неавторизованная биография)',
    [
      { en: 'I am reading a fascinating biography of Albert Einstein right now.', ru: 'Я сейчас читаю увлекательную биографию Альберта Эйнштейна.' },
      { en: 'The author spent five years researching facts for the biography.', ru: 'Автор потратил пять лет на исследование фактов для биографии.' },
      { en: 'A biography gives us details about a person\'s private life.', ru: 'Биография дает нам подробности о личной жизни человека.' },
      { en: 'Her biography became a bestseller soon after it was published.', ru: 'Ее биография стала бестселлером вскоре после публикации.' }
    ]
),

createRichWord('b1_booking', 'Booking', '/ˈbʊkɪŋ/', 'букинг', 'Бронирование', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Договоренность о резервировании места, например, в отеле или ресторане.',
    '- Действие: "Make a booking" (Сделать бронирование)\n- Отмена: "Cancel a booking" (Отменить бронь)\n- Интернет: "Online booking" (Онлайн-бронирование)',
    [
      { en: 'I made a booking for a table for two at eight o\'clock.', ru: 'Я забронировал столик на двоих на восемь часов.' },
      { en: 'Please confirm your booking by email within twenty-four hours.', ru: 'Пожалуйста, подтвердите ваше бронирование по электронной почте в течение 24 часов.' },
      { en: 'The hotel lost our booking, so we had nowhere to stay.', ru: 'Отель потерял нашу бронь, поэтому нам негде было остановиться.' },
      { en: 'Early booking is recommended during the busy summer season.', ru: 'Раннее бронирование рекомендуется в разгар летнего сезона.' }
    ]
),

createRichWord('b1_bride', 'Bride', '/braɪd/', 'брайд', 'Невеста', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Женщина в день своей свадьбы или непосредственно перед ней.',
    '- Свадьба: "Bride and groom" (Жених и невеста)\n- Одежда: "Bride\'s dress" (Платье невесты)\n- Эмоции: "Beautiful bride" (Красивая невеста)',
    [
      { en: 'The bride looked absolutely stunning in her white wedding dress.', ru: 'Невеста выглядела совершенно потрясающе в своем белом свадебном платье.' },
      { en: 'The father walked the bride down the aisle to the altar.', ru: 'Отец вел невесту по проходу к алтарю.' },
      { en: 'Guests threw flowers at the bride and groom after the ceremony.', ru: 'Гости бросали цветы в жениха и невесту после церемонии.' },
      { en: 'Every bride wants her wedding day to be perfect and memorable.', ru: 'Каждая невеста хочет, чтобы день ее свадьбы был идеальным и запоминающимся.' }
    ]
  ),
createRichWord('b1_aloud', 'Aloud', '/əˈlaʊd/', 'элауд', 'Вслух', ProficiencyLevel.B1, 'adv', 'Medium', 'Neutral',
    'Голосом, который слышен, а не про себя или шепотом.',
    '- Чтение: "Read aloud" (Читать вслух)\n- Мысли: "Think aloud" (Размышлять вслух)\n- Речь: "Say it aloud" (Сказать это вслух)',
    [
      { en: 'Please read the text aloud so everyone can hear.', ru: 'Пожалуйста, прочитайте текст вслух, чтобы все могли слышать.' },
      { en: 'He laughed aloud at the funny joke.', ru: 'Он громко (вслух) рассмеялся над смешной шуткой.' },
      { en: 'I was just thinking aloud, not talking to you.', ru: 'Я просто размышлял вслух, а не разговаривал с тобой.' },
      { en: 'She practiced her speech aloud in front of the mirror.', ru: 'Она репетировала свою речь вслух перед зеркалом.' }
    ]
),

createRichWord('b1_aquarium', 'Aquarium', '/əˈkweəriəm/', 'эквээриэм', 'Аквариум / Океанариум', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Стеклянный резервуар для рыб или здание, где живут водные животные.',
    '- Дом: "Fish aquarium" (Аквариум для рыб)\n- Туризм: "Visit the aquarium" (Посетить океанариум)\n- Животные: "Aquarium plants" (Аквариумные растения)',
    [
      { en: 'I have a small aquarium with three gold fish.', ru: 'У меня есть маленький аквариум с тремя золотыми рыбками.' },
      { en: 'We went to the city aquarium to see the sharks.', ru: 'Мы пошли в городской океанариум, чтобы посмотреть на акул.' },
      { en: 'You need to clean the aquarium water regularly.', ru: 'Нужно регулярно чистить воду в аквариуме.' },
      { en: 'The aquarium has many beautiful tropical fish.', ru: 'В океанариуме много красивых тропических рыб.' }
    ]
  ),
createRichWord('b1_balcony', 'Balcony', '/ˈbælkəni/', 'бэлкэни', 'Балкон', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Платформа, выступающая из стены здания, обычно с перилами.',
    '- Дом: "On the balcony" (На балконе)\n- Вид: "View from the balcony" (Вид с балкона)\n- Отель: "Room with a balcony" (Номер с балконом)',
    [
      { en: 'We ate breakfast on the balcony overlooking the sea.', ru: 'Мы завтракали на балконе с видом на море.' },
      { en: 'She grows flowers in pots on her small balcony.', ru: 'Она выращивает цветы в горшках на своем маленьком балконе.' },
      { en: 'He stepped out onto the balcony to get some fresh air.', ru: 'Он вышел на балкон, чтобы подышать свежим воздухом.' },
      { en: 'The hotel room has a private balcony.', ru: 'В номере отеля есть собственный балкон.' }
    ]
),

createRichWord('b1_bald', 'Bald', '/bɔːld/', 'болд', 'Лысый', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Имеющий мало волос на голове или совсем их не имеющий.',
    '- Внешность: "Go bald" (Лысеть)\n- Человек: "Bald man" (Лысый мужчина)\n- Животные: "Bald eagle" (Белоголовый орлан)',
    [
      { en: 'My father started to go bald when he was thirty.', ru: 'Мой отец начал лысеть, когда ему было тридцать.' },
      { en: 'He wore a hat to cover his bald head.', ru: 'Он носил шляпу, чтобы прикрыть свою лысую голову.' },
      { en: 'The actor shaved his head and is now completely bald.', ru: 'Актер побрил голову и теперь полностью лысый.' },
      { en: 'Some men look very handsome when they are bald.', ru: 'Некоторые мужчины выглядят очень красиво, когда они лысые.' }
    ]
),

createRichWord('b1_blouse', 'Blouse', '/blaʊz/', 'блауз', 'Блузка', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Предмет женской одежды, похожий на рубашку.',
    '- Одежда: "Silk blouse" (Шелковая блузка)\n- Стиль: "White blouse" (Белая блузка)\n- Ношение: "Wear a blouse" (Носить блузку)',
    [
      { en: 'She wore a white blouse and a black skirt to work.', ru: 'Она надела белую блузку и черную юбку на работу.' },
      { en: 'This silk blouse is very expensive and delicate.', ru: 'Эта шелковая блузка очень дорогая и деликатная.' },
      { en: 'I need to iron my blouse before the meeting.', ru: 'Мне нужно погладить блузку перед встречей.' },
      { en: 'That red blouse suits you very well.', ru: 'Эта красная блузка тебе очень идет.' }
    ]
),

createRichWord('b1_brochure', 'Brochure', '/ˈbrəʊʃə/', 'броушэ', 'Брошюра / Буклет', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Тонкая книга или журнал с картинками, дающий информацию о чем-либо (часто о путешествиях).',
    '- Информация: "Travel brochure" (Туристический буклет)\n- Чтение: "Read a brochure" (Читать брошюру)\n- Реклама: "Holiday brochure" (Буклет об отдыхе)',
    [
      { en: 'I picked up a brochure about holidays in Spain.', ru: 'Я взял брошюру об отдыхе в Испании.' },
      { en: 'The brochure contains all the details about the hotel.', ru: 'В брошюре содержатся все подробности об отеле.' },
      { en: 'Please read the safety brochure carefully.', ru: 'Пожалуйста, внимательно прочитайте брошюру по безопасности.' },
      { en: 'They handed out brochures to people on the street.', ru: 'Они раздавали брошюры людям на улице.' }
    ]
),

createRichWord('b1_butcher', 'Butcher', '/ˈbʊtʃə/', 'бучэ', 'Мясник', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Человек, который продает мясо в магазине.',
    '- Магазин: "At the butcher\'s" (У мясника / В мясной лавке)\n- Работа: "Local butcher" (Местный мясник)\n- Продукт: "Butcher knife" (Нож мясника)',
    [
      { en: 'I bought some fresh steaks from the local butcher.', ru: 'Я купил свежие стейки у местного мясника.' },
      { en: 'The butcher cut the meat into small pieces for us.', ru: 'Мясник нарезал нам мясо на мелкие кусочки.' },
      { en: 'My uncle has worked as a butcher for twenty years.', ru: 'Мой дядя работает мясником уже двадцать лет.' },
      { en: 'Go to the butcher\'s and get some sausages.', ru: 'Сходи в мясную лавку и купи сосисок.' }
    ]
),

createRichWord('b1_calf', 'Calf', '/kɑːf/', 'каф', 'Теленок / Икра (ноги)', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Молодая корова (животное) или задняя часть ноги ниже колена (анатомия).',
    '- Животное: "Young calf" (Молодой теленок)\n- Тело: "Calf muscle" (Икроножная мышца)\n- Ферма: "Cow and calf" (Корова и теленок)',
    [
      { en: 'The cow was feeding her newborn calf in the field.', ru: 'Корова кормила своего новорожденного теленка в поле.' },
      { en: 'He felt a sharp pain in his left calf while running.', ru: 'Он почувствовал острую боль в левой икре во время бега.' },
      { en: 'Leather made from a calf is called calfskin.', ru: 'Кожа, сделанная из шкуры теленка, называется телячьей кожей.' },
      { en: 'She exercised to strengthen her calf muscles.', ru: 'Она тренировалась, чтобы укрепить икроножные мышцы.' }
    ]
),

createRichWord('b1_cellar', 'Cellar', '/ˈselə/', 'сэлэ', 'Погреб / Подвал', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Комната под зданием, используемая для хранения вещей (часто вина или угля).',
    '- Хранение: "Wine cellar" (Винный погреб)\n- Дом: "Dark cellar" (Темный подвал)\n- Действие: "Go down to the cellar" (Спуститься в погреб)',
    [
      { en: 'He keeps his collection of expensive wines in the cellar.', ru: 'Он хранит свою коллекцию дорогих вин в погребе.' },
      { en: 'It is dark and cool in the cellar during summer.', ru: 'Летом в подвале темно и прохладно.' },
      { en: 'We went down to the cellar to find some old boxes.', ru: 'Мы спустились в подвал, чтобы найти старые коробки.' },
      { en: 'The cellar flooded after the heavy rain.', ru: 'Погреб затопило после сильного дождя.' }
    ]
  ),
createRichWord('b1_aerobics', 'Aerobics', '/eəˈrəʊbɪks/', 'эроубикс', 'Аэробика', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Энергичные физические упражнения, часто выполняемые под музыку.',
    '- Спорт: "Do aerobics" (Заниматься аэробикой)\n- Занятие: "Aerobics class" (Урок аэробики)\n- Здоровье: "Aerobics instructor" (Инструктор по аэробике)',
    [
      { en: 'She goes to an aerobics class every Tuesday evening.', ru: 'Она ходит на занятия по аэробике каждый вторник вечером.' },
      { en: 'Aerobics is a great way to keep fit and healthy.', ru: 'Аэробика — отличный способ поддерживать форму и здоровье.' },
      { en: 'We did thirty minutes of aerobics to warm up.', ru: 'Мы занимались аэробикой тридцать минут для разминки.' },
      { en: 'The aerobics instructor chose very fast music.', ru: 'Инструктор по аэробике выбрал очень быструю музыку.' }
    ]
),

createRichWord('b1_almond', 'Almond', '/ˈɑːmənd/', 'амэнд', 'Миндаль', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Съедобный орех овальной формы с твердой скорлупой.',
    '- Еда: "Toasted almonds" (Жареный миндаль)\n- Вкус: "Almond cake" (Миндальный торт)\n- Напиток: "Almond milk" (Миндальное молоко)',
    [
      { en: 'I like to eat almonds as a healthy snack.', ru: 'Я люблю есть миндаль в качестве здоровой закуски.' },
      { en: 'She put some sliced almonds on top of the cake.', ru: 'Она положила нарезанный миндаль сверху на торт.' },
      { en: 'Almond milk is a popular alternative to cow milk.', ru: 'Миндальное молоко — популярная альтернатива коровьему молоку.' },
      { en: 'The chocolate bar contains nuts, specifically almonds.', ru: 'Шоколадный батончик содержит орехи, в частности миндаль.' }
    ]
),

createRichWord('b1_ape', 'Ape', '/eɪp/', 'эйп', 'Человекообразная обезьяна', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Большой примат без хвоста (например, горилла или шимпанзе).',
    '- Животное: "Great ape" (Человекообразная обезьяна)\n- Зоопарк: "See the apes" (Смотреть на обезьян)\n- Эволюция: "Evolved from apes" (Произошли от обезьян)',
    [
      { en: 'Gorillas and chimpanzees are types of apes.', ru: 'Гориллы и шимпанзе — это виды человекообразных обезьян.' },
      { en: 'We saw a large ape at the zoo yesterday.', ru: 'Вчера мы видели в зоопарке большую обезьяну.' },
      { en: 'Apes are very intelligent animals.', ru: 'Человекообразные обезьяны — очень умные животные.' },
      { en: 'Planet of the Apes is a famous movie.', ru: 'Планета обезьян — известный фильм.' }
    ]
),

createRichWord('b1_attic', 'Attic', '/ˈætɪk/', 'этик', 'Чердак', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Пространство или комната в верхней части дома, под крышей.',
    '- Дом: "In the attic" (На чердаке)\n- Хранение: "Store in the attic" (Хранить на чердаке)\n- Ремонт: "Convert the attic" (Переоборудовать чердак)',
    [
      { en: 'We keep all our old toys in the attic.', ru: 'Мы храним все наши старые игрушки на чердаке.' },
      { en: 'I heard a strange noise coming from the attic.', ru: 'Я услышал странный шум, доносящийся с чердака.' },
      { en: 'They converted the attic into a bedroom.', ru: 'Они переделали чердак в спальню.' },
      { en: 'The attic is usually very hot in the summer.', ru: 'Летом на чердаке обычно очень жарко.' }
    ]
  ),
createRichWord('b1_bandage', 'Bandage', '/ˈbændɪdʒ/', 'бэндидж', 'Бинт / Повязка', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Длинная полоска ткани, которую обматывают вокруг поврежденной части тела.',
    '- Медицина: "Apply a bandage" (Наложить повязку)\n- Травма: "Wrap in a bandage" (Замотать бинтом)\n- Удаление: "Remove the bandage" (Снять повязку)',
    [
      { en: 'The nurse put a clean bandage on his arm.', ru: 'Медсестра наложила чистую повязку ему на руку.' },
      { en: 'You should change the bandage every day.', ru: 'Вам следует менять повязку каждый день.' },
      { en: 'His leg was wrapped in a thick white bandage.', ru: 'Его нога была замотана толстым белым бинтом.' },
      { en: 'Take the bandage off to let the wound breathe.', ru: 'Снимите повязку, чтобы рана могла дышать.' }
    ]
),

createRichWord('b1_berry', 'Berry', '/ˈberi/', 'бери', 'Ягода', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Маленький круглый фрукт на кусте или дереве (например, клубника, малина).',
    '- Еда: "Wild berries" (Дикие ягоды)\n- Сад: "Pick berries" (Собирать ягоды)\n- Вкус: "Sweet berry" (Сладкая ягода)',
    [
      { en: 'We went to the forest to pick wild berries.', ru: 'Мы пошли в лес собирать дикие ягоды.' },
      { en: 'This cake is decorated with fresh red berries.', ru: 'Этот торт украшен свежими красными ягодами.' },
      { en: 'Be careful, some berries are poisonous.', ru: 'Будь осторожен, некоторые ягоды ядовиты.' },
      { en: 'She made jam from the berries in her garden.', ru: 'Она сварила варенье из ягод в своем саду.' }
    ]
),

createRichWord('b1_briefcase', 'Briefcase', '/ˈbriːfkeɪs/', 'брифкейс', 'Портфель', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Плоская прямоугольная сумка, используемая, особенно бизнесменами, для ношения документов.',
    '- Работа: "Leather briefcase" (Кожаный портфель)\n- Вещи: "Pack a briefcase" (Собрать портфель)\n- Ношение: "Carry a briefcase" (Нести портфель)',
    [
      { en: 'He carries his laptop and papers in a black briefcase.', ru: 'Он носит свой ноутбук и бумаги в черном портфеле.' },
      { en: 'She forgot her briefcase on the train this morning.', ru: 'Она забыла свой портфель в поезде сегодня утром.' },
      { en: 'The lawyer opened his briefcase and took out a file.', ru: 'Адвокат открыл свой портфель и достал папку.' },
      { en: 'I bought a new leather briefcase for my new job.', ru: 'Я купил новый кожаный портфель для своей новой работы.' }
    ]
  ),
createRichWord('b1_acrylic', 'Acrylic', '/əˈkrɪlɪk/', 'акрилик', 'Акриловый / Акрил', ProficiencyLevel.B1, 'adj', 'Low', 'Neutral',
    'Сделанный из химического вещества; тип краски или ткани (синтетика).',
    '- Искусство: "Acrylic paint" (Акриловая краска)\n- Одежда: "Acrylic sweater" (Акриловый свитер)\n- Материал: "Made of acrylic" (Сделано из акрила)',
    [
      { en: 'She prefers painting with acrylics because they dry fast.', ru: 'Она предпочитает писать акрилом, потому что он быстро сохнет.' },
      { en: 'This sweater is made of soft acrylic wool.', ru: 'Этот свитер сделан из мягкой акриловой шерсти.' },
      { en: 'Acrylic nails are very popular in this salon.', ru: 'Акриловые ногти очень популярны в этом салоне.' },
      { en: 'The artist bought a new set of acrylic paints.', ru: 'Художник купил новый набор акриловых красок.' }
    ]
),

createRichWord('b1_amen', 'Amen', '/ɑːˈmen/', 'амен', 'Аминь', ProficiencyLevel.B1, 'interj', 'Medium', 'Neutral',
    'Слово, которое говорят в конце молитвы, означающее "да будет так".',
    '- Религия: "Say amen" (Сказать аминь)\n- Молитва: "End with amen" (Закончить словом аминь)\n- Согласие: "Amen to that" (Полностью согласен)',
    [
      { en: 'Everyone said "Amen" at the end of the prayer.', ru: 'Все сказали "Аминь" в конце молитвы.' },
      { en: 'The priest finished the service with a loud "Amen".', ru: 'Священник закончил службу громким "Аминь".' },
      { en: '"Amen to that!" he said, agreeing completely.', ru: '"Аминь!" — сказал он, полностью соглашаясь.' },
      { en: 'We bowed our heads and whispered "Amen".', ru: 'Мы склонили головы и прошептали "Аминь".' }
    ]
),

createRichWord('b1_ammonia', 'Ammonia', '/əˈməʊniə/', 'эмоуниэ', 'Аммиак', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Газ с сильным неприятным запахом, используемый в чистящих средствах.',
    '- Запах: "Smell of ammonia" (Запах аммиака)\n- Уборка: "Household ammonia" (Бытовой аммиак)\n- Химия: "Liquid ammonia" (Жидкий аммиак)',
    [
      { en: 'The strong smell of ammonia made me cough.', ru: 'Сильный запах аммиака заставил меня кашлять.' },
      { en: 'Ammonia is often found in window cleaning products.', ru: 'Аммиак часто содержится в средствах для мытья окон.' },
      { en: 'Be careful not to mix bleach with ammonia.', ru: 'Будьте осторожны, не смешивайте отбеливатель с аммиаком.' },
      { en: 'He used a solution of ammonia to clean the floor.', ru: 'Он использовал раствор аммиака, чтобы помыть пол.' }
    ]
),

createRichWord('b1_antenna', 'Antenna', '/ænˈtenə/', 'энтенэ', 'Антенна / Усик', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Металлический стержень для приема сигналов (радио/ТВ) или орган чувств у насекомых.',
    '- Техника: "Radio antenna" (Радиоантенна)\n- Насекомые: "Insect antenna" (Усик насекомого)\n- Связь: "Satellite antenna" (Спутниковая антенна)',
    [
      { en: 'We need to adjust the antenna to get a better signal.', ru: 'Нам нужно настроить антенну, чтобы получить сигнал лучше.' },
      { en: 'The beetle moved its long antennae around.', ru: 'Жук шевелил своими длинными усиками.' },
      { en: 'There is a large antenna on the roof of the building.', ru: 'На крыше здания есть большая антенна.' },
      { en: 'Ants use their antennae to touch and smell.', ru: 'Муравьи используют свои усики, чтобы осязать и обонять.' }
    ]
),

createRichWord('b1_anthem', 'Anthem', '/ˈænθəm/', 'энсэм', 'Гимн', ProficiencyLevel.B1, 'noun', 'Medium', 'Formal',
    'Официальная песня страны или организации.',
    '- Страна: "National anthem" (Национальный гимн)\n- Спорт: "Sing the anthem" (Петь гимн)\n- Музыка: "Rock anthem" (Рок-гимн / Хит)',
    [
      { en: 'The players stood up to sing the national anthem.', ru: 'Игроки встали, чтобы спеть национальный гимн.' },
      { en: 'This song became an anthem for a generation.', ru: 'Эта песня стала гимном для целого поколения.' },
      { en: 'Do you know the words to the British national anthem?', ru: 'Ты знаешь слова британского национального гимна?' },
      { en: 'The stadium was silent during the playing of the anthem.', ru: 'Стадион молчал во время исполнения гимна.' }
    ]
),

createRichWord('b1_arcade', 'Arcade', '/ɑːˈkeɪd/', 'акейд', 'Аркада / Игровой зал', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Крытый проход с магазинами или место с игровыми автоматами.',
    '- Развлечения: "Video arcade" (Зал видеоигр)\n- Покупки: "Shopping arcade" (Торговая галерея)\n- Игры: "Arcade games" (Аркадные игры)',
    [
      { en: 'We spent all our coins playing games in the arcade.', ru: 'Мы потратили все наши монеты, играя в игры в игровом зале.' },
      { en: 'There is a beautiful shopping arcade in the city center.', ru: 'В центре города есть красивая торговая галерея.' },
      { en: 'My favorite arcade game is Pac-Man.', ru: 'Моя любимая аркадная игра — Pac-Man.' },
      { en: 'They walked through the arcade to get out of the rain.', ru: 'Они прошли через аркаду, чтобы укрыться от дождя.' }
    ]
),

createRichWord('b1_archer', 'Archer', '/ˈɑːtʃə/', 'ачэ', 'Лучник', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Человек, который стреляет из лука стрелами.',
    '- Спорт: "Skilled archer" (Искусный лучник)\n- История: "Medieval archer" (Средневековый лучник)\n- Действие: "The archer aimed" (Лучник прицелился)',
    [
      { en: 'Robin Hood was a famous and skilled archer.', ru: 'Робин Гуд был известным и искусным лучником.' },
      { en: 'The archer aimed his arrow at the target.', ru: 'Лучник нацелил свою стрелу в мишень.' },
      { en: 'She is training to be an Olympic archer.', ru: 'Она тренируется, чтобы стать олимпийским лучником.' },
      { en: 'Archers played a key role in ancient battles.', ru: 'Лучники играли ключевую роль в древних битвах.' }
    ]
),

createRichWord('b1_ark', 'Ark', '/ɑːk/', 'ак', 'Ковчег', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Большая лодка, построенная Ноем в Библии, чтобы спастись от потопа.',
    '- Библия: "Noah\'s Ark" (Ноев ковчег)\n- История: "Build an ark" (Построить ковчег)\n- Фильм: "Lost Ark" (Утерянный ковчег)',
    [
      { en: 'According to the story, Noah built an ark to save the animals.', ru: 'Согласно истории, Ной построил ковчег, чтобы спасти животных.' },
      { en: 'The children drew a picture of Noah\'s Ark with a rainbow.', ru: 'Дети нарисовали картину Ноева ковчега с радугой.' },
      { en: 'They searched for the lost Ark of the Covenant.', ru: 'Они искали утерянный Ковчег Завета.' },
      { en: 'The wooden toy ark was filled with pairs of animals.', ru: 'Деревянный игрушечный ковчег был наполнен парами животных.' }
    ]
),

createRichWord('b1_aspirin', 'Aspirin', '/ˈæsprɪn/', 'эсприн', 'Аспирин', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Распространенное лекарство, используемое для уменьшения боли и температуры.',
    '- Медицина: "Take an aspirin" (Принять аспирин)\n- Боль: "Aspirin for headache" (Аспирин от головной боли)\n- Доза: "Two aspirins" (Две таблетки аспирина)',
    [
      { en: 'I have a headache, so I will take an aspirin.', ru: 'У меня болит голова, поэтому я приму аспирин.' },
      { en: 'The doctor told him to take a low-dose aspirin daily.', ru: 'Врач сказал ему принимать аспирин в низкой дозировке ежедневно.' },
      { en: 'Do you have any aspirin in your bag?', ru: 'У тебя есть аспирин в сумке?' },
      { en: 'Aspirin can help reduce fever and inflammation.', ru: 'Аспирин может помочь уменьшить жар и воспаление.' }
    ]
  ),
createRichWord('b1_autograph', 'Autograph', '/ˈɔːtəɡrɑːf/', 'отограф', 'Автограф', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Подпись известного человека, которую фанаты хранят на память.',
    '- Действие: "Ask for an autograph" (Попросить автограф)\n- Предмет: "Signed autograph" (Подписанный автограф)\n- Книга: "Autograph book" (Книга для автографов)',
    [
      { en: 'I waited for hours to get the singer\'s autograph.', ru: 'Я ждал часами, чтобы получить автограф певца.' },
      { en: 'He signed his autograph on the back of my ticket.', ru: 'Он оставил свой автограф на обратной стороне моего билета.' },
      { en: 'Do you have an autograph of any famous player?', ru: 'У тебя есть автограф какого-нибудь известного игрока?' },
      { en: 'She collects autographs of movie stars.', ru: 'Она коллекционирует автографы кинозвезд.' }
    ]
),

createRichWord('b1_broom', 'Broom', '/bruːm/', 'брум', 'Метла / Веник', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Щетка с длинной ручкой, используемая для подметания полов.',
    '- Уборка: "Sweep with a broom" (Подметать метлой)\n- Часть: "Broom handle" (Ручка метлы)\n- Идиома: "New broom" (Новое начальство / новые порядки)',
    [
      { en: 'She used a broom to clean the kitchen floor.', ru: 'Она использовала веник, чтобы подмести пол на кухне.' },
      { en: 'Grab a broom and help me tidy up this mess.', ru: 'Возьми метлу и помоги мне убрать этот беспорядок.' },
      { en: 'The witch in the story flew on a broom.', ru: 'Ведьма в сказке летала на метле.' },
      { en: 'We keep the broom in the cupboard under the stairs.', ru: 'Мы храним веник в шкафу под лестницей.' }
    ]
  ),
createRichWord('b1_algebra', 'Algebra', '/ˈældʒɪbrə/', 'элджибра', 'Алгебра', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Раздел математики, в котором буквы и символы используются для представления чисел.',
    '- Школа: "Algebra class" (Урок алгебры)\n- Задача: "Algebra problem" (Задача по алгебре)\n- Наука: "Linear algebra" (Линейная алгебра)',
    [
      { en: 'I have an algebra test tomorrow morning.', ru: 'У меня завтра утром контрольная по алгебре.' },
      { en: 'Algebra helps us solve complex mathematical problems.', ru: 'Алгебра помогает нам решать сложные математические задачи.' },
      { en: 'He is very good at geometry but bad at algebra.', ru: 'Он очень хорош в геометрии, но плох в алгебре.' },
      { en: 'We use algebra to calculate the unknown value.', ru: 'Мы используем алгебру, чтобы вычислить неизвестное значение.' }
    ]
  ),
createRichWord('b1_barber', 'Barber', '/ˈbɑːbə/', 'бабэ', 'Парикмахер (мужской)', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Человек, чья работа — стричь мужские волосы и брить бороды.',
    '- Место: "At the barber\'s" (В парикмахерской)\n- Услуга: "Barber shop" (Барбершоп)\n- Действие: "Go to the barber" (Идти к парикмахеру)',
    [
      { en: 'I need to go to the barber for a haircut.', ru: 'Мне нужно пойти к парикмахеру, чтобы подстричься.' },
      { en: 'The barber cut his hair very short.', ru: 'Парикмахер подстриг его очень коротко.' },
      { en: 'My father visits the same barber every month.', ru: 'Мой отец посещает одного и того же парикмахера каждый месяц.' },
      { en: 'There is a traditional barber shop on the corner.', ru: 'На углу есть традиционный барбершоп.' }
    ]
),

createRichWord('b1_beep', 'Beep', '/biːp/', 'бип', 'Гудок / Писк', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Короткий высокий звук, издаваемый машиной или электроникой.',
    '- Звук: "Loud beep" (Громкий писк)\n- Машина: "Horn beep" (Гудок клаксона)\n- Действие: "Beep the horn" (Сигналить)',
    [
      { en: 'Please leave a message after the beep.', ru: 'Пожалуйста, оставьте сообщение после звукового сигнала.' },
      { en: 'The microwave gave a beep when the food was ready.', ru: 'Микроволновка издала писк, когда еда была готова.' },
      { en: 'He heard a beep coming from his computer.', ru: 'Он услышал писк, исходящий от его компьютера.' },
      { en: 'Drivers often beep their horns in traffic jams.', ru: 'Водители часто сигналят в пробках.' }
    ]
),

createRichWord('b1_bikini', 'Bikini', '/bɪˈkiːni/', 'бикини', 'Бикини', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Женский купальный костюм из двух частей.',
    '- Одежда: "Wear a bikini" (Носить бикини)\n- Пляж: "Bikini top" (Верх от бикини)\n- Стиль: "Red bikini" (Красное бикини)',
    [
      { en: 'She bought a new bikini for her holiday in Spain.', ru: 'Она купила новое бикини для отпуска в Испании.' },
      { en: 'It was too cold to wear a bikini on the beach.', ru: 'Было слишком холодно, чтобы носить бикини на пляже.' },
      { en: 'She packed her bikini and towel in the bag.', ru: 'Она упаковала свое бикини и полотенце в сумку.' },
      { en: 'Many women prefer wearing a bikini to a swimsuit.', ru: 'Многие женщины предпочитают носить бикини, а не слитный купальник.' }
    ]
),

createRichWord('b1_broccoli', 'Broccoli', '/ˈbrɒkəli/', 'брокэли', 'Брокколи', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Зеленый овощ с толстыми стеблями и плотной цветочной головкой.',
    '- Еда: "Steamed broccoli" (Брокколи на пару)\n- Здоровье: "Eat your broccoli" (Ешь брокколи)\n- Блюдо: "Broccoli soup" (Суп из брокколи)',
    [
      { en: 'Broccoli is very good for your health.', ru: 'Брокколи очень полезна для здоровья.' },
      { en: 'I like to eat steamed broccoli with fish.', ru: 'Я люблю есть брокколи на пару с рыбой.' },
      { en: 'Children sometimes do not like the taste of broccoli.', ru: 'Детям иногда не нравится вкус брокколи.' },
      { en: 'She made a delicious soup with cheese and broccoli.', ru: 'Она приготовила вкусный суп с сыром и брокколи.' }
    ]
  ),
createRichWord('b1_avocado', 'Avocado', '/ˌævəˈkɑːdəʊ/', 'эвэкáдоу', 'Авокадо', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Тропический фрукт с толстой темно-зеленой кожицей, большой косточкой и мягкой светло-зеленой мякотью, которую едят.',
    '- Еда: "Avocado salad" (Салат с авокадо)\n- Блюдо: "Avocado toast" (Тост с авокадо)\n- Описание: "Ripe avocado" (Спелое авокадо)',
    [
      { en: 'I like to eat avocado toast for breakfast.', ru: 'Я люблю есть тост с авокадо на завтрак.' },
      { en: 'This avocado is not ripe yet, it is too hard.', ru: 'Это авокадо еще не спелое, оно слишком твердое.' },
      { en: 'She made a delicious salad with tomatoes and avocado.', ru: 'Она приготовила вкусный салат с помидорами и авокадо.' },
      { en: 'Avocados are healthy because they have good fats.', ru: 'Авокадо полезны, потому что в них есть хорошие жиры.' }
    ]
  ),
createRichWord('b1_adverb', 'Adverb', '/ˈædvɜːb/', 'эдвёрб', 'Наречие', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Часть речи, которая описывает глагол, прилагательное или другое наречие, указывая, как, где или когда происходит действие.',
    '- Грамматика: "Adverb of frequency" (Наречие частоты)\n- Пример: "Ends in -ly" (Заканчивается на -ly)\n- Использование: "Modify a verb" (Видоизменять глагол)',
    [
      { en: '"Quickly" and "slowly" are common adverbs in English.', ru: '"Быстро" и "медленно" — распространенные наречия в английском языке.' },
      { en: 'An adverb adds more information to a sentence.', ru: 'Наречие добавляет больше информации в предложение.' },
      { en: 'You should place the adverb correctly in the sentence.', ru: 'Вам следует правильно расположить наречие в предложении.' },
      { en: 'He used an adverb to describe how she sang.', ru: 'Он использовал наречие, чтобы описать, как она пела.' }
    ]
  ),
createRichWord('b1_ballerina', 'Ballerina', '/ˌbæləˈriːnə/', 'бэлэрина', 'Балерина', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Женщина, профессионально исполняющая балет.',
    '- Танец: "Famous ballerina" (Известная балерина)\n- Одежда: "Ballerina shoes" (Балетки)\n- Мечта: "Become a ballerina" (Стать балериной)',
    [
      { en: 'The ballerina danced gracefully on the stage.', ru: 'Балерина грациозно танцевала на сцене.' },
      { en: 'She wants to be a ballerina when she grows up.', ru: 'Она хочет стать балериной, когда вырастет.' },
      { en: 'The little girl wore a pink ballerina dress.', ru: 'Маленькая девочка была в розовом платье балерины.' },
      { en: 'Training to be a ballerina takes many years.', ru: 'Обучение на балерину занимает много лет.' }
    ]
  ),
createRichWord('b1_cause', 'Cause', '/kɔːz/', 'коз', 'Причина / Вызывать', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'То, что заставляет что-то происходить; повод или основание.',
    '- Проблема: "Cause of death" (Причина смерти)\n- Действие: "Cause trouble" (Вызывать проблемы)\n- Наука: "Cause and effect" (Причина и следствие)',
    [
        { en: 'The police are investigating the cause of the accident.', ru: 'Полиция расследует причину аварии.' },
        { en: 'Smoking can cause serious health problems.', ru: 'Курение может вызвать серьезные проблемы со здоровьем.' },
        { en: 'There is no cause for alarm right now.', ru: 'Сейчас нет причин для тревоги.' },
        { en: 'The storm caused damage to many houses.', ru: 'Шторм нанес ущерб многим домам.' }
    ],
    [
        { meaning: "Social movement / Goal", translation: "Дело / Цель (благотворительная)", example: { en: "It is for a good cause.", ru: "Это ради благого дела." } }
    ]
),

createRichWord('b1_certain', 'Certain', '/ˈsɜːtn/', 'сётн', 'Определенный / Уверенный', ProficiencyLevel.B1, 'adj', 'High', 'Neutral',
    'Не имеющий сомнений; конкретный, но не названный.',
    '- Уверенность: "I am certain" (Я уверен)\n- Количество: "Certain amount" (Определенное количество)\n- Факт: "For certain" (Наверняка)',
    [
        { en: 'I am absolutely certain that I left it here.', ru: 'Я абсолютно уверен, что оставил это здесь.' },
        { en: 'Certain people disagree with this decision.', ru: 'Некоторые (определенные) люди не согласны с этим решением.' },
        { en: 'It is not certain if they will come.', ru: 'Не факт (не точно), что они придут.' },
        { en: 'Make certain that the door is locked.', ru: 'Убедись, что дверь заперта.' }
    ],
    []
),

createRichWord('b1_charge', 'Charge', '/tʃɑːdʒ/', 'чардж', 'Взимать плату / Заряжать', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Требовать деньги за услугу; наполнять электричеством; официально обвинять.',
    '- Деньги: "Charge a fee" (Взимать плату)\n- Телефон: "Charge the phone" (Заряжать телефон)\n- Полиция: "Charge with theft" (Обвинять в краже)',
    [
        { en: 'How much do they charge for delivery?', ru: 'Сколько они берут за доставку?' },
        { en: 'I need to charge my phone battery.', ru: 'Мне нужно зарядить батарею телефона.' },
        { en: 'The police arrested him and charged him with robbery.', ru: 'Полиция арестовала его и обвинила в ограблении.' },
        { en: 'Who is in charge of this department?', ru: 'Кто главный (ответственный) в этом отделе?' }
    ],
    [
        { meaning: "To rush forward (attack)", translation: "Атаковать / Бросаться", example: { en: "The bull charged at the red cloth.", ru: "Бык бросился на красную тряпку." } },
        { meaning: "Price / Cost (noun)", translation: "Плата / Цена", example: { en: "Admission charge is five dollars.", ru: "Плата за вход — пять долларов." } }
    ]
),

createRichWord('b1_choice', 'Choice', '/tʃɔɪs/', 'чойс', 'Выбор', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Возможность или право выбирать; то, что выбрано.',
    '- Действие: "Make a choice" (Сделать выбор)\n- Варианты: "Wide choice" (Широкий выбор)\n- Отсутствие: "No choice" (Нет выбора)',
    [
        { en: 'It was a difficult choice to make.', ru: 'Это был трудный выбор.' },
        { en: 'You have no choice but to accept.', ru: 'У тебя нет выбора, кроме как согласиться.' },
        { en: 'The menu offers a wide choice of dishes.', ru: 'Меню предлагает широкий выбор блюд.' },
        { en: 'By choice, she lives alone in the forest.', ru: 'По собственному выбору она живет одна в лесу.' }
    ],
    [
        { meaning: "High quality (adj, dated)", translation: "Отборный", example: { en: "Choice apples.", ru: "Отборные яблоки." } }
    ]
),

createRichWord('b1_comfort', 'Comfort', '/ˈkʌmfət/', 'камфэт', 'Комфорт / Утешение', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Состояние физического расслабления; отсутствие боли или тревоги.',
    '- Удобство: "Live in comfort" (Жить в комфорте)\n- Зона: "Comfort zone" (Зона комфорта)\n- Поддержка: "Words of comfort" (Слова утешения)',
    [
        { en: 'The hotel offers a high level of comfort.', ru: 'Отель предлагает высокий уровень комфорта.' },
        { en: 'He tried to give her some comfort after the loss.', ru: 'Он пытался утешить ее после утраты.' },
        { en: 'These shoes are designed for maximum comfort.', ru: 'Эта обувь создана для максимального комфорта.' },
        { en: 'She stepped out of her comfort zone.', ru: 'Она вышла из своей зоны комфорта.' }
    ],
    [
        { meaning: "To console (verb)", translation: "Утешать", example: { en: "The mother comforted the crying child.", ru: "Мать утешала плачущего ребенка." } }
    ]
),

createRichWord('b1_consider', 'Consider', '/kənˈsɪdər/', 'кэнсидэр', 'Рассматривать / Считать', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Думать о чем-то внимательно, особенно перед принятием решения; полагать.',
    '- Решение: "Consider options" (Рассматривать варианты)\n- Мнение: "Considered to be" (Считается)\n- Вежливость: "Consider feelings" (Учитывать чувства)',
    [
        { en: 'We are considering moving to another city.', ru: 'Мы подумываем о переезде в другой город.' },
        { en: 'He is considered an expert in this field.', ru: 'Он считается экспертом в этой области.' },
        { en: 'Please consider my application carefully.', ru: 'Пожалуйста, внимательно рассмотрите мое заявление.' },
        { en: 'You should consider the cost before buying.', ru: 'Тебе следует учесть стоимость перед покупкой.' }
    ],
    []
),

createRichWord('b1_continue', 'Continue', '/kənˈtɪnjuː/', 'кэнтинью', 'Продолжать', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Делать что-то без остановки или возобновить после паузы.',
    '- Действие: "Continue working" (Продолжать работать)\n- Путь: "Continue straight" (Продолжать прямо)\n- Время: "To be continued" (Продолжение следует)',
    [
        { en: 'The rain continued all through the night.', ru: 'Дождь продолжался всю ночь напролет.' },
        { en: 'Please continue with your story, I am listening.', ru: 'Пожалуйста, продолжай свой рассказ, я слушаю.' },
        { en: 'If symptoms continue, consult a doctor.', ru: 'Если симптомы продолжатся, проконсультируйтесь с врачом.' },
        { en: 'They decided to continue the meeting tomorrow.', ru: 'Они решили продолжить собрание завтра.' }
    ],
    []
),

createRichWord('b1_control', 'Control', '/kənˈtrəʊl/', 'кэнтроул', 'Контроль / Управлять', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Способность управлять чем-либо или проверять что-либо; власть над ситуацией.',
    '- Власть: "Under control" (Под контролем)\n- Устройство: "Remote control" (Пульт дистанционного управления)\n- Эмоции: "Lose control" (Потерять контроль/самообладание)',
    [
        { en: 'The pilot lost control of the plane.', ru: 'Пилот потерял управление самолетом.' },
        { en: 'Everything is under control, don\'t worry.', ru: 'Все под контролем, не волнуйся.' },
        { en: 'Parents cannot control everything their children do.', ru: 'Родители не могут контролировать все, что делают их дети.' },
        { en: 'Use the remote control to change the channel.', ru: 'Используй пульт, чтобы переключить канал.' }
    ],
    [
        { meaning: "To limit / Regulate (verb)", translation: "Ограничивать / Регулировать", example: { en: "Control your spending.", ru: "Контролируй свои расходы." } }
    ]
  ),
createRichWord('b1_court', 'Court', '/kɔːt/', 'ко:т', 'Суд', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Место, где решаются юридические споры, или площадка для игр (теннис, баскетбол).',
    '- Закон: "Go to court" (Идти в суд)\n- Спорт: "Tennis court" (Теннисный корт)\n- История: "Royal court" (Королевский двор)',
    [
      { en: 'The prisoner was brought to court for trial.', ru: 'Заключенного привели в суд для разбирательства.' },
      { en: 'We played basketball on the outdoor court.', ru: 'Мы играли в баскетбол на открытой площадке.' },
      { en: 'He will appear in court tomorrow morning.', ru: 'Он появится в суде завтра утром.' },
      { en: 'The evidence presented in court was convincing.', ru: 'Улики, представленные в суде, были убедительными.' }
    ],
    [
        { meaning: "Royal household", translation: "Королевский двор", example: { en: "The Queen held court.", ru: "Королева давала аудиенцию (принимала двор)." } },
        { meaning: "Date/Woo (verb)", translation: "Ухаживать (устар.)", example: { en: "He courted her for months.", ru: "Он ухаживал за ней месяцами." } }
    ]
),

createRichWord('b1_crime', 'Crime', '/kraɪm/', 'крайм', 'Преступление', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Незаконное действие, за которое государство наказывает.',
    '- Закон: "Commit a crime" (Совершить преступление)\n- Тип: "Violent crime" (Насильственное преступление)\n- Место: "Crime scene" (Место преступления)',
    [
      { en: 'Police are investigating a serious crime.', ru: 'Полиция расследует серьезное преступление.' },
      { en: 'Car theft is a common crime in this city.', ru: 'Угон машин — распространенное преступление в этом городе.' },
      { en: 'He was punished for his crimes.', ru: 'Он был наказан за свои преступления.' },
      { en: 'Crime does not pay.', ru: 'Преступление не окупается (идиома).' }
    ],
    []
),

createRichWord('b1_darling', 'Darling', '/ˈdɑː.lɪŋ/', 'далинг', 'Дорогой', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Очень ласковое обращение к любимому человеку (мужу, жене, ребенку).',
    '- Обращение: "Hello, darling" (Привет, дорогой)\n- Отношение: "Darling child" (Любимое дитя)\n- Обаяние: "She is a darling" (Она прелесть)',
    [
      { en: 'Goodnight, my darling, sleep well.', ru: 'Спокойной ночи, мой дорогой, спи крепко.' },
      { en: 'Would you like some tea, darling?', ru: 'Хочешь чаю, дорогая?' },
      { en: 'She was the darling of the media.', ru: 'Она была любимицей СМИ.' },
      { en: 'What a darling little puppy!', ru: 'Какой прелестный маленький щенок!' }
    ],
    [
        { meaning: "Charming person/thing", translation: "Прелесть / Очаровашка", example: { en: "The dress is just darling.", ru: "Платье просто прелесть." } }
    ]
),

createRichWord('b1_death', 'Death', '/deθ/', 'дэс', 'Смерть', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Конец жизни; состояние, когда организм перестает жить.',
    '- Жизнь: "Life and death" (Жизнь и смерть)\n- Причина: "Cause of death" (Причина смерти)\n- Наказание: "Death penalty" (Смертная казнь)',
    [
      { en: 'His sudden death shocked everyone in the town.', ru: 'Его внезапная смерть потрясла всех в городе.' },
      { en: 'Smoking is a leading cause of death.', ru: 'Курение — одна из ведущих причин смерти.' },
      { en: 'He frightened me to death.', ru: 'Он напугал меня до смерти.' },
      { en: 'The death of the king changed history.', ru: 'Смерть короля изменила историю.' }
    ],
    []
),

createRichWord('b1_definite', 'Definite', '/ˈdef.ɪ.nət/', 'дэфинит', 'Определенный', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Точный, ясный, не вызывающий сомнений.',
    '- Ответ: "Definite answer" (Точный ответ)\n- Планы: "Nothing definite" (Ничего определенного)\n- Грамматика: "Definite article" (Определенный артикль)',
    [
      { en: 'I need a definite answer by tomorrow.', ru: 'Мне нужен точный ответ к завтрашнему дню.' },
      { en: 'Is it definite that you are leaving?', ru: 'Это точно, что ты уезжаешь?' },
      { en: 'There has been a definite improvement in his health.', ru: 'В его здоровье наметилось определенное улучшение.' },
      { en: 'We have no definite plans for the holiday.', ru: 'У нас нет определенных планов на отпуск.' }
    ],
    []
),

createRichWord('b1_degree', 'Degree', '/dɪˈɡriː/', 'дигри', 'Степень / Градус', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Единица измерения (температуры, углов) или уровень образования (диплом).',
    '- Погода: "30 degrees" (30 градусов)\n- Учеба: "University degree" (Университетская степень/диплом)\n- Мера: "To some degree" (В некоторой степени)',
    [
      { en: 'Water boils at 100 degrees Celsius.', ru: 'Вода кипит при 100 градусах Цельсия.' },
      { en: 'She has a degree in physics from Oxford.', ru: 'У нее есть диплом по физике из Оксфорда.' },
      { en: 'I agree with you to a certain degree.', ru: 'Я согласен с тобой до определенной степени.' },
      { en: 'The angle is exactly ninety degrees.', ru: 'Угол составляет ровно девяносто градусов.' }
    ],
    [
        { meaning: "Extent/Amount", translation: "Уровень / Степень", example: { en: "A high degree of skill.", ru: "Высокий уровень мастерства." } }
    ]
),

createRichWord('b1_doubt', 'Doubt', '/daʊt/', 'даут', 'Сомнение', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Чувство неуверенности в чем-либо. Как глагол — сомневаться.',
    '- Уверенность: "No doubt" (Без сомнения)\n- Мысль: "In doubt" (В сомнении)\n- Фраза: "Without a doubt" (Несомненно)',
    [
      { en: 'I have some doubts about his plan.', ru: 'У меня есть некоторые сомнения насчет его плана.' },
      { en: 'There is no doubt that he is the best.', ru: 'Нет сомнений, что он лучший.' },
      { en: 'I doubt if it will stop raining soon.', ru: 'Я сомневаюсь, что дождь скоро прекратится.' },
      { en: 'If you are in doubt, ask for help.', ru: 'Если сомневаешься, попроси помощи.' }
    ],
    [
        { meaning: "Disbelieve (verb)", translation: "Сомневаться / Не верить", example: { en: "I doubt his word.", ru: "Я ставлю под сомнение его слова." } }
    ]
),

createRichWord('b1_drug', 'Drug', '/drʌɡ/', 'драг', 'Лекарство / Наркотик', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Вещество, используемое как медицина, или запрещенное вещество, влияющее на сознание.',
    '- Аптека: "Prescription drug" (Лекарство по рецепту)\n- Криминал: "Illegal drugs" (Наркотики)\n- Магазин: "Drugstore" (Аптека - амер.)',
    [
      { en: 'The doctor prescribed a new drug for her pain.', ru: 'Врач прописал ей новое лекарство от боли.' },
      { en: 'He was arrested for selling drugs.', ru: 'Его арестовали за продажу наркотиков.' },
      { en: 'Alcohol is a legal drug in many countries.', ru: 'Алкоголь — легальный наркотик (вещество) во многих странах.' },
      { en: 'They developed a drug to fight the virus.', ru: 'Они разработали лекарство для борьбы с вирусом.' }
    ],
    [
        { meaning: "Administer drugs (verb)", translation: "Давать лекарство / Одурманивать", example: { en: "He was drugged.", ru: "Его одурманили (подсыпали что-то)." } }
    ]
  ),
createRichWord('a2_brilliant', 'Brilliant', '/ˈbrɪl.jənt/', 'брилиэнт', 'Блестящий', ProficiencyLevel.A2, 'adj', 'Medium', 'Neutral',
    'Очень умный, талантливый или (в брит. англ.) отличный, великолепный. Также означает очень яркий свет.',
    '- Ум: "Brilliant idea" (Блестящая идея)\n- Мнение: "That\'s brilliant!" (Это великолепно!)\n- Свет: "Brilliant light" (Яркий свет)',
    [
      { en: 'She is a brilliant student.', ru: 'Она блестящая студентка.' },
      { en: 'The film was absolutely brilliant.', ru: 'Фильм был просто великолепным.' },
      { en: 'He had a brilliant career.', ru: 'У него была блестящая карьера.' },
      { en: 'The diamond shines with brilliant light.', ru: 'Бриллиант сверкает ярким светом.' }
    ],
    [
        { meaning: "Bright/Sparkling", translation: "Сверкающий / Яркий", example: { en: "Brilliant sunshine.", ru: "Яркий солнечный свет." } }
    ]
),

createRichWord('a2_brush', 'Brush', '/brʌʃ/', 'браш', 'Щетка / Кисть', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Инструмент с щетиной для чистки, причесывания волос или рисования. Как глагол — чистить щеткой.',
    '- Гигиена: "Toothbrush" (Зубная щетка)\n- Волосы: "Hair brush" (Расческа)\n- Искусство: "Paint brush" (Кисть для рисования)',
    [
      { en: 'I need to brush my hair.', ru: 'Мне нужно расчесать волосы.' },
      { en: 'Don\'t forget to brush your teeth.', ru: 'Не забудь почистить зубы.' },
      { en: 'She cleaned the coat with a brush.', ru: 'Она почистила пальто щеткой.' },
      { en: 'The artist used a fine brush.', ru: 'Художник использовал тонкую кисть.' }
    ],
    [
        { meaning: "Light touch (verb)", translation: "Коснуться / Задеть", example: { en: "Something brushed my arm.", ru: "Что-то коснулось моей руки." } },
        { meaning: "Encounter/Conflict", translation: "Стычка / Столкновение", example: { en: "A brush with the law.", ru: "Проблемы с законом." } }
    ]
),

createRichWord('a2_button', 'Button', '/ˈbʌt.ən/', 'батн', 'Кнопка / Пуговица', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Маленький круглый объект на одежде для застегивания или часть устройства, на которую нажимают.',
    '- Одежда: "Sew a button" (Пришить пуговицу)\n- Техника: "Press the button" (Нажать кнопку)\n- Интерфейс: "Start button" (Кнопка пуск)',
    [
      { en: 'I lost a button from my shirt.', ru: 'Я потерял пуговицу от рубашки.' },
      { en: 'Press the red button to stop.', ru: 'Нажми красную кнопку, чтобы остановиться.' },
      { en: 'Can you help me button my coat?', ru: 'Можешь помочь мне застегнуть пальто?' },
      { en: 'Click the "Save" button.', ru: 'Нажмите кнопку "Сохранить".' }
    ],
    [
        { meaning: "Badge/Pin", translation: "Значок", example: { en: "He wore a campaign button.", ru: "Он носил предвыборный значок." } }
    ]
),

createRichWord('a2_cans', 'Cans', '/kænz/', 'кэнз', 'Банки', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Множественное число от Can. Металлические контейнеры для еды или напитков.',
    '- Еда: "Cans of beans" (Банки бобов)\n- Напитки: "Soda cans" (Банки с газировкой)\n- Мусор: "Recycle cans" (Перерабатывать банки)',
    [
      { en: 'We bought three cans of soup.', ru: 'Мы купили три банки супа.' },
      { en: 'Please throw empty cans in the bin.', ru: 'Пожалуйста, выбрасывай пустые банки в мусорку.' },
      { en: 'The shelf was full of cans.', ru: 'Полка была полна жестяных банок.' },
      { en: 'Cans are usually made of aluminium.', ru: 'Банки обычно делают из алюминия.' }
    ],
    [
        { meaning: "Headphones (Slang)", translation: "Наушники (сленг)", example: { en: "Put on your cans.", ru: "Надень свои наушники." } }
    ]
),

createRichWord('a2_cap', 'Cap', '/kæp/', 'кэп', 'Кепка / Крышка', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Мягкая шляпа с козырьком или маленькая крышка для бутылки/тюбика.',
    '- Одежда: "Baseball cap" (Бейсболка)\n- Предмет: "Bottle cap" (Крышка бутылки)\n- Лимит: "Price cap" (Ограничение цены)',
    [
      { en: 'He was wearing a black cap.', ru: 'На нем была черная кепка.' },
      { en: 'Put the cap back on the toothpaste.', ru: 'Надень колпачок обратно на зубную пасту.' },
      { en: 'Take your cap off inside.', ru: 'Сними кепку в помещении.' },
      { en: 'I cannot open this bottle cap.', ru: 'Я не могу открыть эту крышку бутылки.' }
    ],
    [
        { meaning: "Upper limit", translation: "Лимит / Потолок", example: { en: "A cap on spending.", ru: "Лимит расходов." } }
    ]
),

createRichWord('a2_capital', 'Capital', '/ˈkæp.ɪ.təl/', 'кэпитал', 'Столица', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Главный город страны, где находится правительство. Также заглавная буква или деньги для бизнеса.',
    '- География: "Capital city" (Столица)\n- Письмо: "Capital letter" (Заглавная буква)\n- Бизнес: "Start-up capital" (Стартовый капитал)',
    [
      { en: 'Paris is the capital of France.', ru: 'Париж — столица Франции.' },
      { en: 'Please write in capital letters.', ru: 'Пожалуйста, пишите заглавными буквами.' },
      { en: 'London is a very busy capital.', ru: 'Лондон — очень оживленная столица.' },
      { en: 'They need capital to start the business.', ru: 'Им нужен капитал, чтобы начать бизнес.' }
    ],
    [
        { meaning: "Money/Assets", translation: "Капитал (деньги)", example: { en: "Foreign capital.", ru: "Иностранный капитал." } },
        { meaning: "Punishable by death (adj)", translation: "Караемый смертью", example: { en: "Capital punishment.", ru: "Смертная казнь." } }
    ]
),

createRichWord('a2_career', 'Career', '/kəˈrɪər/', 'кэриэ', 'Карьера', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Профессиональный путь человека, работа, которой занимаются долгий период жизни.',
    '- Работа: "Make a career" (Сделать карьеру)\n- Выбор: "Career choice" (Выбор профессии)\n- Успех: "Successful career" (Успешная карьера)',
    [
      { en: 'He wants to start a career in medicine.', ru: 'Он хочет начать карьеру в медицине.' },
      { en: 'She is focused on her career.', ru: 'Она сосредоточена на своей карьере.' },
      { en: 'Changing career is difficult.', ru: 'Менять карьеру трудно.' },
      { en: 'It was the peak of his career.', ru: 'Это был пик его карьеры.' }
    ],
    [
        { meaning: "Move fast/uncontrollably (verb)", translation: "Нестись / Мчаться", example: { en: " The car careered off the road.", ru: "Машина вылетела с дороги." } }
    ]
),

createRichWord('a2_carpet', 'Carpet', '/ˈkɑː.pɪt/', 'капит', 'Ковер', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Плотный тканый материал для покрытия пола.',
    '- Дом: "Red carpet" (Красная дорожка)\n- Уборка: "Clean the carpet" (Чистить ковер)\n- Метафора: "Carpet of flowers" (Ковер из цветов)',
    [
      { en: 'We bought a new wool carpet.', ru: 'Мы купили новый шерстяной ковер.' },
      { en: 'Don\'t spill coffee on the carpet.', ru: 'Не пролей кофе на ковер.' },
      { en: 'The cat is sleeping on the carpet.', ru: 'Кошка спит на ковре.' },
      { en: 'There is a carpet in the bedroom.', ru: 'В спальне есть ковровое покрытие.' }
    ],
    [
        { meaning: "Cover layer", translation: "Покров / Слой", example: { en: "A carpet of snow.", ru: "Снежный покров." } }
    ]
),

createRichWord('a2_cash', 'Cash', '/kæʃ/', 'кэш', 'Наличные', ProficiencyLevel.A2, 'noun', 'High', 'Neutral',
    'Деньги в виде монет и банкнот (не карты).',
    '- Оплата: "Pay in cash" (Платить наличными)\n- Устройство: "Cash machine" (Банкомат)\n- Количество: "Ready cash" (Наличные на руках)',
    [
      { en: 'Do you want to pay by card or cash?', ru: 'Вы хотите заплатить картой или наличными?' },
      { en: 'I need to get some cash from the bank.', ru: 'Мне нужно снять наличные в банке.' },
      { en: 'He keeps his cash in a safe.', ru: 'Он хранит свои наличные в сейфе.' },
      { en: 'Sorry, I have no cash on me.', ru: 'Извини, у меня нет с собой наличных.' }
    ],
    [
        { meaning: "Cashing a check (verb)", translation: "Обналичить", example: { en: "Cash a cheque.", ru: "Обналичить чек." } }
    ]
),

createRichWord('a2_castle', 'Castle', '/ˈkɑː.sl̩/', 'касл', 'Замок', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Большое укрепленное здание, построенное в прошлом правителями или знатью.',
    '- История: "Old castle" (Старый замок)\n- Строение: "Sand castle" (Песчаный замок)\n- Туризм: "Visit a castle" (Посетить замок)',
    [
      { en: 'The king lived in a big stone castle.', ru: 'Король жил в большом каменном замке.' },
      { en: 'We visited a castle in Scotland.', ru: 'Мы посетили замок в Шотландии.' },
      { en: 'The castle sits on top of a hill.', ru: 'Замок стоит на вершине холма.' },
      { en: 'Children built a sand castle on the beach.', ru: 'Дети построили песочный замок на пляже.' }
    ],
    [
         { meaning: "Chess move", translation: "Рокировка", example: { en: "He castled early in the game.", ru: "Он сделал рокировку в начале игры." } }
    ]
),

createRichWord('a2_centimetre', 'Centimetre', '/ˈsen.tɪˌmiː.tər/', 'сентимитэ', 'Сантиметр', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Единица измерения длины, равная одной сотой метра.',
    '- Измерение: "Ten centimetres long" (Длиной 10 см)\n- Рост: "Centimetre tall" (Ростом в ... см)\n- Квадратный: "Square centimetre" (Квадратный сантиметр)',
    [
      { en: 'There are 100 centimetres in a metre.', ru: 'В одном метре 100 сантиметров.' },
      { en: 'The insect is only one centimetre long.', ru: 'Насекомое всего один сантиметр в длину.' },
      { en: 'Move it a few centimetres to the left.', ru: 'Сдвинь это на несколько сантиметров влево.' },
      { en: 'Measure the length in centimetres.', ru: 'Измерь длину в сантиметрах.' }
    ],
    []
),

createRichWord('a2_century', 'Century', '/ˈsen.tʃər.i/', 'сэнчури', 'Век', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Период времени в 100 лет.',
    '- История: "21st century" (21-й век)\n- Время: "Century ago" (Век назад)\n- Долголетие: "Half a century" (Полвека)',
    [
      { en: 'We live in the twenty-first century.', ru: 'Мы живем в двадцать первом веке.' },
      { en: 'The house was built a century ago.', ru: 'Дом был построен век назад.' },
      { en: 'Many things changed in the last century.', ru: 'Многое изменилось в прошлом веке.' },
      { en: 'This tree is over two centuries old.', ru: 'Этому дереву более двух веков.' }
    ],
    [
        { meaning: "100 points (Sports)", translation: "Сотня (в крикете/спорте)", example: { en: "He scored a century.", ru: "Он набрал сотню очков." } }
    ]
),

createRichWord('a2_chat', 'Chat', '/tʃæt/', 'чэт', 'Болтать', ProficiencyLevel.A2, 'verb', 'High', 'Neutral',
    'Разговаривать в дружеской, непринужденной манере. Также переписка в интернете.',
    '- Общение: "Chat with friends" (Болтать с друзьями)\n- Интернет: "Group chat" (Групповой чат)\n- Время: "Have a chat" (Поболтать)',
    [
      { en: 'I like to chat with my friends online.', ru: 'Мне нравится болтать с друзьями онлайн.' },
      { en: 'We chatted about the weather.', ru: 'Мы поболтали о погоде.' },
      { en: 'Let\'s have a chat over coffee.', ru: 'Давай поболтаем за чашкой кофе.' },
      { en: 'Stop chatting and do your work.', ru: 'Перестань болтать и займись работой.' }
    ],
    [
        { meaning: "Talk (noun)", translation: "Беседа / Разговор", example: { en: "A friendly chat.", ru: "Дружеская беседа." } }
    ]
),

createRichWord('a2_cigarette', 'Cigarette', '/ˌsɪɡ.ərˈet/', 'сигэрет', 'Сигарета', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Тонкая бумажная трубочка с табаком для курения.',
    '- Курение: "Smoke a cigarette" (Курить сигарету)\n- Упаковка: "Pack of cigarettes" (Пачка сигарет)\n- Зажигалка: "Light a cigarette" (Зажечь сигарету)',
    [
      { en: 'He went outside to smoke a cigarette.', ru: 'Он вышел на улицу покурить сигарету.' },
      { en: 'Cigarette smoking is bad for health.', ru: 'Курение сигарет вредно для здоровья.' },
      { en: 'Can you give me a cigarette?', ru: 'Можешь дать мне сигарету?' },
      { en: 'She put out her cigarette.', ru: 'Она затушила сигарету.' }
    ],
    []
),

createRichWord('a2_circle', 'Circle', '/ˈsɜː.kəl/', 'сёкл', 'Круг', ProficiencyLevel.A2, 'noun', 'Medium', 'Neutral',
    'Геометрическая фигура в форме кольца. Также группа людей.',
    '- Форма: "Draw a circle" (Нарисовать круг)\n- Люди: "Circle of friends" (Круг друзей)\n- Движение: "Run in circles" (Бегать кругами)',
    [
      { en: 'We sat in a circle on the floor.', ru: 'Мы сидели кругом на полу.' },
      { en: 'Draw a circle around the correct answer.', ru: 'Обведи правильный ответ в кружок.' },
      { en: 'She has a large circle of friends.', ru: 'У нее большой круг друзей.' },
      { en: 'The plane flew in a circle.', ru: 'Самолет летал по кругу.' }
    ],
    [
        { meaning: "Move around (verb)", translation: "Кружить", example: { en: "The shark circled the boat.", ru: "Акула кружила вокруг лодки." } }
    ]
  ),
createRichWord('b1_brief', 'Brief', '/briːf/', 'бриф', 'Краткий', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Длившийся короткое время или содержащий мало слов.',
    '- Время: "Brief visit" (Краткий визит)\n- Описание: "In brief" (Вкратце)\n- Разговор: "Brief chat" (Короткий разговор)',
    [
      { en: 'We had a brief meeting regarding the project.', ru: 'У нас была короткая встреча по поводу проекта.' },
      { en: 'Please keep your answers brief and clear.', ru: 'Пожалуйста, отвечайте кратко и ясно.' },
      { en: 'He made a brief appearance at the party.', ru: 'Он ненадолго появился на вечеринке.' },
      { en: 'To be brief, I don\'t like it.', ru: 'Короче говоря, мне это не нравится.' }
    ],
    [
        { meaning: "Instructions (noun)", translation: "Сводка / Инструктаж", example: { en: "Stick to the brief.", ru: "Придерживайся инструкции." } },
        { meaning: "Lawyers (noun)", translation: "Адвокаты (брит.)", example: { en: "Call the briefs.", ru: "Зовите адвокатов." } }
    ]
),

createRichWord('b1_broad', 'Broad', '/brɔːd/', 'брод', 'Широкий', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Имеющий большое расстояние от одной стороны до другой (шире, чем wide, часто о частях тела или абстрактных понятиях).',
    '- Тело: "Broad shoulders" (Широкие плечи)\n- Лицо: "Broad smile" (Широкая улыбка)\n- Свет: "Broad daylight" (Средь бела дня)',
    [
      { en: 'He has broad shoulders and strong arms.', ru: 'У него широкие плечи и сильные руки.' },
      { en: 'She gave me a broad smile.', ru: 'Она широко мне улыбнулась.' },
      { en: 'They have a broad range of products.', ru: 'У них широкий ассортимент продукции.' },
      { en: 'The robbery happened in broad daylight.', ru: 'Ограбление произошло средь бела дня.' }
    ],
    [
        { meaning: "General/Not detailed", translation: "Общий / Приблизительный", example: { en: "Broad outline.", ru: "Общий набросок." } }
    ]
),

createRichWord('b1_bucket', 'Bucket', '/ˈbʌk.ɪt/', 'бакит', 'Ведро', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Открытый контейнер с ручкой для переноски жидкостей или сыпучих материалов.',
    '- Быт: "Plastic bucket" (Пластиковое ведро)\n- Количество: "Bucket of water" (Ведро воды)\n- Идиома: "Kick the bucket" (Сыграть в ящик / Умереть)',
    [
      { en: 'Fill the bucket with warm water.', ru: 'Наполни ведро теплой водой.' },
      { en: 'We need a bucket and a mop to clean the floor.', ru: 'Нам нужно ведро и швабра, чтобы помыть пол.' },
      { en: 'The rain came down in buckets.', ru: 'Дождь лил как из ведра.' },
      { en: 'He carried a heavy bucket of sand.', ru: 'Он нес тяжелое ведро с песком.' }
    ],
    []
),

createRichWord('b1_bug', 'Bug', '/bʌɡ/', 'баг', 'Жук / Ошибка', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Маленькое насекомое, ошибка в компьютерной программе или (разг.) вирусная болезнь.',
    '- Насекомое: "Big bug" (Большой жук)\n- IT: "Fix a bug" (Исправить ошибку)\n- Болезнь: "Stomach bug" (Желудочная инфекция)',
    [
      { en: 'There is a huge bug on the window.', ru: 'На окне сидит огромный жук.' },
      { en: 'The software has a lot of bugs.', ru: 'В этом программном обеспечении много ошибок.' },
      { en: 'I caught a stomach bug last week.', ru: 'Я подхватил желудочную инфекцию на прошлой неделе.' },
      { en: 'Stop bugging me!', ru: 'Перестань доставать меня! (глагол)' }
    ],
    [
        { meaning: "Annoy (verb)", translation: "Раздражать / Доставать", example: { en: "It really bugs me.", ru: "Это меня реально бесит." } },
        { meaning: "Listening device", translation: "Жучок (прослушка)", example: { en: "They planted a bug.", ru: "Они установили жучок." } }
    ]
),

createRichWord('b1_bunch', 'Bunch', '/bʌntʃ/', 'банч', 'Связка / Куча', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Группа вещей одного типа, скрепленных вместе, или (разг.) группа людей.',
    '- Предметы: "Bunch of keys" (Связка ключей)\n- Растения: "Bunch of flowers" (Букет цветов / Охапка)\n- Люди: "Bunch of guys" (Группа парней)',
    [
      { en: 'He bought a bunch of bananas.', ru: 'Он купил связку бананов.' },
      { en: 'I have a whole bunch of things to do.', ru: 'У меня куча дел.' },
      { en: 'A bunch of people were waiting outside.', ru: 'Группа людей ждала снаружи.' },
      { en: 'She picked a bunch of grapes.', ru: 'Она сорвала гроздь винограда.' }
    ],
    [
        { meaning: "Group together (verb)", translation: "Сбиваться в кучу", example: { en: "They bunched together.", ru: "Они сбились в кучу." } }
    ]
),

createRichWord('b1_bury', 'Bury', '/ˈber.i/', 'бери', 'Хоронить / Закапывать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Помещать мертвых в могилу или прятать что-то под землей.',
    '- Смерть: "Bury the dead" (Хоронить мертвых)\n- Клад: "Bury treasure" (Закапывать сокровища)\n- Чувства: "Bury your head" (Прятать голову)',
    [
      { en: 'The dog buried his bone in the garden.', ru: 'Собака закопала свою кость в саду.' },
      { en: 'He was buried in the local cemetery.', ru: 'Он был похоронен на местном кладбище.' },
      { en: 'She buried her face in her hands and cried.', ru: 'Она уткнулась лицом в ладони и заплакала.' },
      { en: 'The house was buried under snow.', ru: 'Дом был погребен под снегом.' }
    ],
    []
),

createRichWord('b1_cable', 'Cable', '/ˈkeɪ.bəl/', 'кейбл', 'Кабель / Трос', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Толстый прочный канат из проволоки или провод для передачи электричества/сигналов.',
    '- Электрика: "Electric cable" (Электрический кабель)\n- ТВ: "Cable TV" (Кабельное телевидение)\n- Конструкция: "Steel cable" (Стальной трос)',
    [
      { en: 'They are laying underground cables.', ru: 'Они прокладывают подземные кабели.' },
      { en: 'The bridge is supported by steel cables.', ru: 'Мост поддерживается стальными тросами.' },
      { en: 'We need a longer cable for the TV.', ru: 'Нам нужен кабель подлиннее для телевизора.' },
      { en: 'Do you have cable or satellite?', ru: 'У вас кабельное или спутниковое телевидение?' }
    ],
    [
        { meaning: "Telegram (Old)", translation: "Телеграмма", example: { en: "Send a cable.", ru: "Отправить телеграмму." } }
    ]
),

createRichWord('b1_cage', 'Cage', '/keɪdʒ/', 'кейдж', 'Клетка', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Сооружение из прутьев или проволоки для содержания птиц или животных.',
    '- Животные: "Bird cage" (Птичья клетка)\n- Зоопарк: "Lion\'s cage" (Клетка льва)\n- Чувства: "Feel like in a cage" (Чувствовать себя как в клетке)',
    [
      { en: 'The parrot escaped from its cage.', ru: 'Попугай сбежал из своей клетки.' },
      { en: 'Lions are kept in strong cages.', ru: 'Львов держат в прочных клетках.' },
      { en: 'I felt like a tiger in a cage.', ru: 'Я чувствовал себя как тигр в клетке.' },
      { en: 'Don\'t put your hand in the cage.', ru: 'Не суй руку в клетку.' }
    ],
    [
        { meaning: "Chest (Rib cage)", translation: "Грудная клетка", example: { en: "Rib cage protects the heart.", ru: "Грудная клетка защищает сердце." } }
    ]
),

createRichWord('b1_calm', 'Calm', '/kɑːm/', 'кам', 'Спокойный', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Мирный, тихий, без волнения или ветра.',
    '- Человек: "Stay calm" (Сохранять спокойствие)\n- Погода: "Calm sea" (Спокойное море)\n- Призыв: "Calm down" (Успокойся)',
    [
      { en: 'Please try to keep calm.', ru: 'Пожалуйста, постарайтесь сохранять спокойствие.' },
      { en: 'The sea was very calm yesterday.', ru: 'Море вчера было очень спокойным.' },
      { en: 'He has a very calm voice.', ru: 'У него очень спокойный голос.' },
      { en: 'After the storm, the air was calm.', ru: 'После шторма воздух был спокойным.' }
    ],
    [
        { meaning: "Make quiet (verb)", translation: "Успокаивать", example: { en: "Calm the baby.", ru: "Успокой ребенка." } }
    ]
),

createRichWord('b1_captain', 'Captain', '/ˈkæp.tɪn/', 'кэптин', 'Капитан', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Лидер команды или человек, управляющий кораблем/самолетом.',
    '- Транспорт: "Ship captain" (Капитан корабля)\n- Спорт: "Team captain" (Капитан команды)\n- Армия: "Army captain" (Армейский капитан)',
    [
      { en: 'The captain welcomed us aboard.', ru: 'Капитан поприветствовал нас на борту.' },
      { en: 'She was elected captain of the team.', ru: 'Ее выбрали капитаном команды.' },
      { en: 'The captain ordered the soldiers to march.', ru: 'Капитан приказал солдатам маршировать.' },
      { en: 'Who is the captain of this flight?', ru: 'Кто капитан этого рейса?' }
    ],
    []
),

createRichWord('b1_cart', 'Cart', '/kɑːt/', 'кат', 'Тележка / Повозка', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Транспортное средство на колесах, которое тянут или толкают.',
    '- Магазин: "Shopping cart" (Тележка для покупок)\n- Животные: "Horse and cart" (Лошадь с повозкой)\n- Игра: "Go-cart" (Карт/Машинка)',
    [
      { en: 'Put the groceries in the shopping cart.', ru: 'Положи продукты в тележку.' },
      { en: 'The horse pulled a heavy cart.', ru: 'Лошадь тянула тяжелую повозку.' },
      { en: 'Don\'t put the cart before the horse.', ru: 'Не ставь телегу впереди лошади (не торопи события).' },
      { en: 'The farmer loaded the cart with hay.', ru: 'Фермер загрузил повозку сеном.' }
    ],
    []
),

createRichWord('b1_ceiling', 'Ceiling', '/ˈsiː.lɪŋ/', 'силинг', 'Потолок', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Верхняя внутренняя поверхность комнаты.',
    '- Дом: "High ceiling" (Высокий потолок)\n- Ремонт: "Paint the ceiling" (Красить потолок)\n- Ограничение: "Glass ceiling" (Стеклянный потолок - невидимый барьер)',
    [
      { en: 'The room has a very high ceiling.', ru: 'В комнате очень высокий потолок.' },
      { en: 'There is a spider on the ceiling.', ru: 'На потолке паук.' },
      { en: 'Water was dripping from the ceiling.', ru: 'С потолка капала вода.' },
      { en: 'They hit the price ceiling.', ru: 'Они достигли ценового потолка.' }
    ],
    []
),

createRichWord('b1_chain', 'Chain', '/tʃeɪn/', 'чейн', 'Цепь', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Ряд металлических колец, соединенных вместе. Также сеть магазинов.',
    '- Металл: "Gold chain" (Золотая цепочка)\n- Велосипед: "Bicycle chain" (Велосипедная цепь)\n- Бизнес: "Chain of hotels" (Сеть отелей)',
    [
      { en: 'He wore a heavy gold chain.', ru: 'Он носил тяжелую золотую цепь.' },
      { en: 'The dog was tied with a chain.', ru: 'Собака была привязана цепью.' },
      { en: 'McDonald\'s is a famous fast-food chain.', ru: 'Макдоналдс — известная сеть фастфуда.' },
      { en: 'A chain reaction occurred.', ru: 'Произошла цепная реакция.' }
    ],
    [
        { meaning: "Bind (verb)", translation: "Приковывать", example: { en: "Chained to the wall.", ru: "Прикованный к стене." } }
    ]
),

createRichWord('b1_challenge', 'Challenge', '/ˈtʃæl.ɪndʒ/', 'челиндж', 'Вызов / Сложная задача', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Что-то новое и трудное, требующее больших усилий. Также приглашение к состязанию.',
    '- Трудность: "Face a challenge" (Столкнуться с трудностью)\n- Спорт: "Accept a challenge" (Принять вызов)\n- Учеба: "Big challenge" (Большая задача)',
    [
      { en: 'Climbing the mountain was a real challenge.', ru: 'Восхождение на гору было настоящим испытанием.' },
      { en: 'She likes a challenge in her work.', ru: 'Она любит сложные задачи в своей работе.' },
      { en: 'I challenge you to a game of chess.', ru: 'Я вызываю тебя на партию в шахматы.' },
      { en: 'The new job presents many challenges.', ru: 'Новая работа представляет много трудностей.' }
    ],
    [
        { meaning: "Question validity (verb)", translation: "Оспаривать", example: { en: "Challenge the decision.", ru: "Оспорить решение." } }
    ]
),

createRichWord('b1_champion', 'Champion', '/ˈtʃæm.pi.ən/', 'чемпиэн', 'Чемпион', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Победитель соревнования или человек, который борется за правое дело.',
    '- Спорт: "World champion" (Чемпион мира)\n- Статус: "Defending champion" (Действующий чемпион)\n- Идея: "Champion of rights" (Защитник прав)',
    [
      { en: 'He is the world heavyweight champion.', ru: 'Он чемпион мира в тяжелом весе.' },
      { en: 'Who will be the next champion?', ru: 'Кто станет следующим чемпионом?' },
      { en: 'She is a champion of animal rights.', ru: 'Она защитница прав животных.' },
      { en: 'The team played like champions.', ru: 'Команда играла как чемпионы.' }
    ],
    [
        { meaning: "Support/Defend (verb)", translation: "Отстаивать / Защищать", example: { en: "He championed the cause.", ru: "Он отстаивал это дело." } }
    ]
),

createRichWord('b1_channel', 'Channel', '/ˈtʃæn.əl/', 'ченэл', 'Канал', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Телевизионная станция, водный путь или способ коммуникации.',
    '- ТВ: "Change the channel" (Переключить канал)\n- Вода: "English Channel" (Ла-Манш)\n- Связь: "Channels of communication" (Каналы связи)',
    [
      { en: 'What is on Channel 4 tonight?', ru: 'Что сегодня по четвертому каналу?' },
      { en: 'Boats travel up and down the channel.', ru: 'Лодки плавают вверх и вниз по каналу.' },
      { en: 'We need to open new channels of trade.', ru: 'Нам нужно открыть новые торговые каналы.' },
      { en: 'Subscribe to my YouTube channel.', ru: 'Подпишись на мой YouTube канал.' }
    ],
    [
        { meaning: "Direct (verb)", translation: "Направлять", example: { en: "Channel energy into sport.", ru: "Направлять энергию в спорт." } }
    ]
),

createRichWord('b1_chapter', 'Chapter', '/ˈtʃæp.tər/', 'чептэ', 'Глава', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Раздел книги или определенный период в жизни.',
    '- Книга: "Read a chapter" (Прочитать главу)\n- Жизнь: "New chapter" (Новая глава жизни)\n- Номер: "Chapter one" (Глава первая)',
    [
      { en: 'I read the first chapter of the book.', ru: 'Я прочитал первую главу книги.' },
      { en: 'This chapter is very long and boring.', ru: 'Эта глава очень длинная и скучная.' },
      { en: 'It was a sad chapter in our history.', ru: 'Это была печальная глава в нашей истории.' },
      { en: 'A new chapter in my life begins today.', ru: 'Сегодня начинается новая глава моей жизни.' }
    ],
    []
),

createRichWord('b1_character', 'Character', '/ˈkær.ək.tər/', 'кэректэ', 'Персонаж / Характер', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Человек в книге/фильме или совокупность качеств, делающих человека уникальным (характер).',
    '- Фильм: "Main character" (Главный герой)\n- Личность: "Strong character" (Сильный характер)\n- Письмо: "Chinese character" (Китайский иероглиф)',
    [
      { en: 'Who is your favorite character in the movie?', ru: 'Кто твой любимый персонаж в фильме?' },
      { en: 'She is a woman of strong character.', ru: 'Она женщина с сильным характером.' },
      { en: 'The building has a lot of character.', ru: 'У здания есть своя изюминка (индивидуальность).' },
      { en: 'He plays a bad character in the play.', ru: 'Он играет плохого персонажа в пьесе.' }
    ],
    [
         { meaning: "Symbol/Letter", translation: "Знак / Символ", example: { en: "50 characters max.", ru: "Максимум 50 символов." } }
    ]
),

createRichWord('b1_chase', 'Chase', '/tʃeɪs/', 'чейс', 'Преследовать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Бежать за кем-то, чтобы поймать. Как сущ. — погоня.',
    '- Полиция: "Chase the thief" (Гнаться за вором)\n- Игра: "Chase each other" (Гоняться друг за другом)\n- Авто: "Car chase" (Автомобильная погоня)',
    [
      { en: 'The dog chased the cat up a tree.', ru: 'Собака загнала кошку на дерево.' },
      { en: 'Police chased the stolen car for miles.', ru: 'Полиция преследовала украденную машину много миль.' },
      { en: 'Stop chasing impossible dreams.', ru: 'Перестань гнаться за несбыточными мечтами.' },
      { en: 'The chase ended in a crash.', ru: 'Погоня закончилась аварией.' }
    ],
    []
),

createRichWord('b1_cheat', 'Cheat', '/tʃiːt/', 'чит', 'Жульничать / Изменять', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Вести себя нечестно для получения выгоды или быть неверным партнеру.',
    '- Экзамен: "Cheat on test" (Списывать на тесте)\n- Игра: "Cheat at cards" (Мухлевать в картах)\n- Брак: "Cheat on wife" (Изменять жене)',
    [
      { en: 'He cheated in the exam and got caught.', ru: 'Он списал на экзамене и попался.' },
      { en: 'Don\'t play with him, he always cheats.', ru: 'Не играй с ним, он всегда жульничает.' },
      { en: 'She found out he was cheating on her.', ru: 'Она узнала, что он ей изменяет.' },
      { en: 'Cheaters never win.', ru: 'Жулики никогда не побеждают.' }
    ],
    []
),

createRichWord('b1_cheek', 'Cheek', '/tʃiːk/', 'чик', 'Щека', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Мягкая часть лица под глазом.',
    '- Лицо: "Rosy cheeks" (Розовые щеки)\n- Жест: "Kiss on the cheek" (Поцелуй в щеку)\n- Наглость: "Have the cheek" (Иметь наглость)',
    [
      { en: 'Tears ran down her cheeks.', ru: 'Слезы текли по ее щекам.' },
      { en: 'She gave him a kiss on the cheek.', ru: 'Она поцеловала его в щеку.' },
      { en: 'His cheeks were red from the cold.', ru: 'Его щеки были красными от холода.' },
      { en: 'He had the cheek to ask for more money.', ru: 'У него хватило наглости попросить еще денег.' }
    ],
    [
        { meaning: "Impudence (informal)", translation: "Наглость", example: { en: "What a cheek!", ru: "Какая наглость!" } }
    ]
),

createRichWord('b1_cheer', 'Cheer', '/tʃɪər/', 'чиэ', 'Подбадривать / Радоваться', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Кричать от радости или поддержки. Часто во фразе "Cheer up" (Не унывай).',
    '- Поддержка: "Cheer for team" (Болеть за команду)\n- Эмоция: "Cheer up" (Взбодриться)\n- Тост: "Cheers!" (Ваше здоровье!)',
    [
      { en: 'The crowd cheered when he scored.', ru: 'Толпа закричала (ликовала), когда он забил.' },
      { en: 'Cheer up, things will get better.', ru: 'Не унывай, все наладится.' },
      { en: 'We went to the stadium to cheer our team.', ru: 'Мы пошли на стадион, чтобы поддержать нашу команду.' },
      { en: '"Cheers!" they said, raising their glasses.', ru: '"Ваше здоровье!" — сказали они, поднимая бокалы.' }
    ],
    []
),

createRichWord('b1_chest', 'Chest', '/tʃest/', 'чест', 'Грудь / Сундук', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Верхняя передняя часть туловища или большой крепкий ящик для хранения.',
    '- Тело: "Pain in chest" (Боль в груди)\n- Мебель: "Wooden chest" (Деревянный сундук)\n- Мебель: "Chest of drawers" (Комод)',
    [
      { en: 'He has a broad muscular chest.', ru: 'У него широкая мускулистая грудь.' },
      { en: 'She felt a sharp pain in her chest.', ru: 'Она почувствовала острую боль в груди.' },
      { en: 'The pirate hid a chest of gold.', ru: 'Пират спрятал сундук с золотом.' },
      { en: 'Put your clothes in the chest of drawers.', ru: 'Положи одежду в комод.' }
    ],
    []
),

createRichWord('b1_chew', 'Chew', '/tʃuː/', 'чу:', 'Жевать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Измельчать пищу зубами перед глотанием.',
    '- Еда: "Chew food" (Жевать еду)\n- Сладость: "Chewing gum" (Жевательная резинка)\n- Животные: "Dog chewing bone" (Собака грызет кость)',
    [
      { en: 'You should chew your food well.', ru: 'Тебе следует хорошо пережевывать пищу.' },
      { en: 'Chewing gum is not allowed in class.', ru: 'Жевательная резинка запрещена в классе.' },
      { en: 'The puppy chewed my shoes.', ru: 'Щенок погрыз мои туфли.' },
      { en: 'This meat is tough to chew.', ru: 'Это мясо жестко жевать.' }
    ],
    []
),

createRichWord('b1_chop', 'Chop', '/tʃɒp/', 'чоп', 'Рубить / Резать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Резать на куски ударами ножа или топора.',
    '- Готовка: "Chop onions" (Резать лук)\n- Дерево: "Chop wood" (Рубить дрова)\n- Действие: "Chop down a tree" (Срубить дерево)',
    [
      { en: 'Please chop the carrots into small pieces.', ru: 'Пожалуйста, нарежь морковь на мелкие кусочки.' },
      { en: 'He spent the afternoon chopping wood.', ru: 'Он провел день, рубя дрова.' },
      { en: 'Chop off the ends of the beans.', ru: 'Отрежь кончики у бобов.' },
      { en: 'The meat was chopped finely.', ru: 'Мясо было мелко нарублено.' }
    ],
    [
        { meaning: "Piece of meat (noun)", translation: "Отбивная", example: { en: "Pork chop.", ru: "Свиная отбивная." } }
    ]
),

createRichWord('b1_claim', 'Claim', '/kleɪm/', 'клейм', 'Утверждать / Требовать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Заявлять, что что-то является правдой (без доказательств), или требовать что-то по праву.',
    '- Заявление: "Claim to know" (Утверждать, что знаешь)\n- Права: "Claim damages" (Требовать возмещения убытков)\n- Багаж: "Baggage claim" (Выдача багажа)',
    [
      { en: 'He claims to be an expert in art.', ru: 'Он утверждает, что он эксперт в искусстве.' },
      { en: 'Nobody claimed the lost wallet.', ru: 'Никто не востребовал потерянный кошелек.' },
      { en: 'She claimed that she was innocent.', ru: 'Она заявила, что невиновна.' },
      { en: 'You can claim money back from insurance.', ru: 'Вы можете потребовать деньги назад по страховке.' }
    ],
    [
        { meaning: "Assertion (noun)", translation: "Утверждение / Иск", example: { en: "False claim.", ru: "Ложное утверждение." } }
    ]
  ),
createRichWord('b1_classic', 'Classic', '/ˈklæs.ɪk/', 'клэсик', 'Классический', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Имеющий высокое качество, типичный или традиционный стиль. Как сущ. — произведение искусства.',
    '- Стиль: "Classic car" (Ретро автомобиль / Классика)\n- Литература: "Classic novel" (Классический роман)\n- Пример: "Classic example" (Типичный пример)',
    [
      { en: 'She wore a classic black dress.', ru: 'Она была в классическом черном платье.' },
      { en: 'It is a classic example of his work.', ru: 'Это классический (типичный) пример его работы.' },
      { en: 'I love classic rock music.', ru: 'Я люблю классический рок.' },
      { en: 'This movie is an absolute classic.', ru: 'Этот фильм — абсолютная классика.' }
    ],
    [
        { meaning: "Masterpiece (noun)", translation: "Классика (произведение)", example: { en: "Reading the classics.", ru: "Чтение классики." } }
    ]
),

createRichWord('b1_cliff', 'Cliff', '/klɪf/', 'клиф', 'Утес / Скала', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Высокая крутая скала, обычно на берегу моря.',
    '- Природа: "Steep cliff" (Крутой утес)\n- Край: "Edge of the cliff" (Край пропасти)\n- Вид: "White cliffs" (Белые скалы)',
    [
      { en: 'Don\'t stand too close to the edge of the cliff.', ru: 'Не стой слишком близко к краю утеса.' },
      { en: 'The castle was built on a high cliff.', ru: 'Замок был построен на высокой скале.' },
      { en: 'We watched the birds flying off the cliff.', ru: 'Мы наблюдали за птицами, слетающими со скалы.' },
      { en: 'The car fell off the cliff.', ru: 'Машина упала с обрыва.' }
    ],
    []
),

createRichWord('b1_cloth', 'Cloth', '/klɒθ/', 'клос', 'Ткань / Тряпка', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Материал, сделанный из нитей (шерсть, хлопок), или кусок этого материала для уборки.',
    '- Материал: "Cotton cloth" (Хлопковая ткань)\n- Уборка: "Wet cloth" (Влажная тряпка)\n- Стол: "Table cloth" (Скатерть)',
    [
      { en: 'Wipe the table with a damp cloth.', ru: 'Протри стол влажной тряпкой.' },
      { en: 'She bought some cloth to make a dress.', ru: 'Она купила ткани, чтобы сшить платье.' },
      { en: 'Lay a clean cloth on the table.', ru: 'Постели чистую скатерть на стол.' },
      { en: 'The book was bound in red cloth.', ru: 'Книга была в красном тканевом переплете.' }
    ],
    []
),

createRichWord('b1_clue', 'Clue', '/kluː/', 'клу', 'Улика / Подсказка', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Факт или объект, помогающий раскрыть преступление или решить загадку.',
    '- Расследование: "Look for clues" (Искать улики)\n- Загадка: "Give a clue" (Дать подсказку)\n- Знание: "Have no clue" (Не иметь понятия)',
    [
      { en: 'The police found a vital clue.', ru: 'Полиция нашла важную улику.' },
      { en: 'I have no clue where he went.', ru: 'Я понятия не имею, куда он пошел.' },
      { en: 'Give me a clue, please.', ru: 'Дай мне подсказку, пожалуйста.' },
      { en: 'Crossword clues are difficult.', ru: 'Подсказки в кроссворде сложные.' }
    ],
    []
),

createRichWord('b1_coal', 'Coal', '/kəʊl/', 'коул', 'Уголь', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Черный минерал, который сжигают для получения тепла.',
    '- Топливо: "Burn coal" (Жечь уголь)\n- Добыча: "Coal mine" (Угольная шахта)\n- Раскаленный: "Hot coals" (Горячие угли)',
    [
      { en: 'They used to heat the house with coal.', ru: 'Раньше они отапливали дом углем.' },
      { en: 'The miners dug for coal underground.', ru: 'Шахтеры добывали уголь под землей.' },
      { en: 'His hands were black from the coal.', ru: 'Его руки были черными от угля.' },
      { en: 'Coal is a fossil fuel.', ru: 'Уголь — это ископаемое топливо.' }
    ],
    []
),

createRichWord('b1_combine', 'Combine', '/kəmˈbaɪn/', 'кэмбайн', 'Объединять', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Соединять две или более вещи вместе.',
    '- Действие: "Combine efforts" (Объединить усилия)\n- Смесь: "Combine ingredients" (Смешать ингредиенты)\n- Работа: "Combine business with pleasure" (Совмещать приятное с полезным)',
    [
      { en: 'We should combine our resources.', ru: 'Нам следует объединить наши ресурсы.' },
      { en: 'Hydrogen combines with oxygen to form water.', ru: 'Водород соединяется с кислородом, образуя воду.' },
      { en: 'He manages to combine a career and family life.', ru: 'Ему удается совмещать карьеру и семейную жизнь.' },
      { en: 'Combine the flour and sugar in a bowl.', ru: 'Смешайте муку и сахар в миске.' }
    ],
    [
        { meaning: "Harvester (noun)", translation: "Комбайн", example: { en: "Combine harvester.", ru: "Зерноуборочный комбайн." } }
    ]
),

createRichWord('b1_comment', 'Comment', '/ˈkɒm.ent/', 'комент', 'Комментарий', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Высказанное или написанное мнение. Как глагол — комментировать.',
    '- Интернет: "Leave a comment" (Оставить комментарий)\n- Отказ: "No comment" (Без комментариев)\n- Критика: "Negative comment" (Негативный комментарий)',
    [
      { en: 'He made a rude comment about her dress.', ru: 'Он отпустил грубый комментарий о её платье.' },
      { en: 'Please leave your comments below.', ru: 'Пожалуйста, оставляйте свои комментарии ниже.' },
      { en: 'I declined to comment on the situation.', ru: 'Я отказался комментировать ситуацию.' },
      { en: 'It was just a fair comment.', ru: 'Это было просто справедливое замечание.' }
    ],
    []
),

createRichWord('b1_community', 'Community', '/kəˈmjuː.nə.ti/', 'кэмьюнити', 'Сообщество', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Люди, живущие в одном месте или имеющие общие интересы.',
    '- Место: "Local community" (Местная община)\n- Интернет: "Online community" (Онлайн сообщество)\n- Чувство: "Sense of community" (Чувство общности)',
    [
      { en: 'He is a respected member of the community.', ru: 'Он уважаемый член сообщества.' },
      { en: 'We need to help the poor in our community.', ru: 'Нам нужно помогать бедным в нашей общине.' },
      { en: 'The festival brings the community together.', ru: 'Фестиваль сплачивает общество.' },
      { en: 'The scientific community agrees on this.', ru: 'Научное сообщество согласно с этим.' }
    ],
    []
),

createRichWord('b1_complain', 'Complain', '/kəmˈpleɪn/', 'кэмплейн', 'Жаловаться', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Выражать недовольство или раздражение чем-либо.',
    '- Сервис: "Complain about food" (Жаловаться на еду)\n- Здоровье: "Complain of pain" (Жаловаться на боль)\n- Официально: "Complain to manager" (Жаловаться менеджеру)',
    [
      { en: 'He is always complaining about the weather.', ru: 'Он вечно жалуется на погоду.' },
      { en: 'I need to complain to the manager.', ru: 'Мне нужно пожаловаться менеджеру.' },
      { en: 'She complained of a headache.', ru: 'Она пожаловалась на головную боль.' },
      { en: 'If you don\'t like it, don\'t complain.', ru: 'Если тебе не нравится, не жалуйся.' }
    ],
    []
),

createRichWord('b1_concentrate', 'Concentrate', '/ˈkɒn.sən.treɪt/', 'консентрейт', 'Концентрироваться', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Направлять все внимание на что-то одно.',
    '- Внимание: "Concentrate on work" (Сосредоточиться на работе)\n- Усилие: "Hard to concentrate" (Трудно сосредоточиться)\n- Наука: "Concentrated juice" (Концентрированный сок)',
    [
      { en: 'I can\'t concentrate with that noise.', ru: 'Я не могу сосредоточиться из-за этого шума.' },
      { en: 'You need to concentrate on the road.', ru: 'Тебе нужно сосредоточиться на дороге.' },
      { en: 'All power is concentrated in his hands.', ru: 'Вся власть сосредоточена в его руках.' },
      { en: 'Stop talking and concentrate!', ru: 'Перестань болтать и сосредоточься!' }
    ],
    [
        { meaning: "Substance (noun)", translation: "Концентрат", example: { en: "Tomato concentrate.", ru: "Томатный концентрат." } }
    ]
),

createRichWord('b1_condition', 'Condition', '/kənˈdɪʃ.ən/', 'кэндишн', 'Условие / Состояние', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Состояние чего-либо или правило, которое должно быть выполнено.',
    '- Качество: "Good condition" (Хорошее состояние)\n- Договор: "Terms and conditions" (Сроки и условия)\n- Здоровье: "Serious condition" (Тяжелое состояние)',
    [
      { en: 'The car is in excellent condition.', ru: 'Машина в отличном состоянии.' },
      { en: 'I will come on one condition.', ru: 'Я приду при одном условии.' },
      { en: 'Living conditions were very poor.', ru: 'Жилищные условия были очень плохими.' },
      { en: 'His condition improved overnight.', ru: 'Его состояние улучшилось за ночь.' }
    ],
    []
),

createRichWord('b1_confuse', 'Confuse', '/kənˈfjuːz/', 'кэнфьюз', 'Сбивать с толку', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Делать что-то непонятным или путать одного человека с другим.',
    '- Понимание: "Confuse the issue" (Запутывать дело)\n- Люди: "Confuse with someone" (Спутать с кем-то)\n- Результат: "Totally confused" (Полностью сбитый с толку)',
    [
      { en: 'Don\'t confuse me with your questions.', ru: 'Не сбивай меня с толку своими вопросами.' },
      { en: 'I always confuse him with his twin brother.', ru: 'Я всегда путаю его с братом-близнецом.' },
      { en: 'The instructions only confused us more.', ru: 'Инструкции только еще больше запутали нас.' },
      { en: 'Sorry, I got confused.', ru: 'Извини, я запутался.' }
    ],
    []
),

createRichWord('b1_contact', 'Contact', '/ˈkɒn.tækt/', 'контэкт', 'Контакт / Связь', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Связь с кем-то или физическое прикосновение. Как глагол — связываться.',
    '- Связь: "Keep in contact" (Поддерживать связь)\n- Глаза: "Eye contact" (Зрительный контакт)\n- Физика: "Direct contact" (Прямой контакт)',
    [
      { en: 'Please contact me if you need help.', ru: 'Пожалуйста, свяжись со мной, если нужна помощь.' },
      { en: 'I lost contact with my school friends.', ru: 'Я потерял связь со школьными друзьями.' },
      { en: 'Avoid contact with eyes.', ru: 'Избегайте попадания (контакта) в глаза.' },
      { en: 'Here are my contact details.', ru: 'Вот мои контактные данные.' }
    ],
    []
),

createRichWord('b1_contain', 'Contain', '/kənˈteɪn/', 'кэнтейн', 'Содержать', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Иметь что-то внутри себя или включать в себя.',
    '- Состав: "Contain sugar" (Содержать сахар)\n- Эмоции: "Contain anger" (Сдерживать гнев)\n- Объем: "Box contains" (Коробка вмещает)',
    [
      { en: 'This bottle contains olive oil.', ru: 'В этой бутылке содержится оливковое масло.' },
      { en: 'Does this food contain nuts?', ru: 'Эта еда содержит орехи?' },
      { en: 'I could hardly contain my excitement.', ru: 'Я с трудом мог сдержать волнение.' },
      { en: 'The document contains important information.', ru: 'Документ содержит важную информацию.' }
    ],
    []
),

createRichWord('b1_contract', 'Contract', '/ˈkɒn.trækt/', 'контрэкт', 'Контракт', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Официальное письменное соглашение. Как глагол (ударение на второй слог) — сжиматься или подхватить болезнь.',
    '- Документ: "Sign a contract" (Подписать контракт)\n- Работа: "Employment contract" (Трудовой договор)\n- Срок: "Break a contract" (Нарушить контракт)',
    [
      { en: 'He signed a three-year contract.', ru: 'Он подписал трехлетний контракт.' },
      { en: 'Read the contract carefully before signing.', ru: 'Внимательно прочитай контракт перед подписанием.' },
      { en: 'The contract expires next month.', ru: 'Срок действия контракта истекает в следующем месяце.' },
      { en: 'We have a contract with the supplier.', ru: 'У нас есть договор с поставщиком.' }
    ],
    [
        { meaning: "Shrink (verb /kənˈtrækt/)", translation: "Сжиматься / Сокращаться", example: { en: "Metal contracts as it cools.", ru: "Металл сжимается при охлаждении." } },
        { meaning: "Catch disease (verb)", translation: "Подхватить (болезнь)", example: { en: "Contract a virus.", ru: "Подхватить вирус." } }
    ]
),

createRichWord('b1_convince', 'Convince', '/kənˈvɪns/', 'кэнвинс', 'Убеждать', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Заставить кого-то поверить в правдивость чего-либо или сделать что-то.',
    '- Мнение: "Convince someone" (Убедить кого-то)\n- Результат: "Hard to convince" (Трудно убедить)\n- Вера: "Totally convinced" (Полностью убежден)',
    [
      { en: 'I managed to convince him to stay.', ru: 'Мне удалось убедить его остаться.' },
      { en: 'She is convinced that she is right.', ru: 'Она убеждена, что она права.' },
      { en: 'Your argument didn\'t convince me.', ru: 'Твой аргумент меня не убедил.' },
      { en: 'I need to convince my parents.', ru: 'Мне нужно убедить родителей.' }
    ],
    []
),

createRichWord('b1_cop', 'Cop', '/kɒp/', 'коп', 'Полицейский', ProficiencyLevel.B1, 'noun', 'Medium', 'Informal',
    'Разговорное название офицера полиции.',
    '- Профессия: "Undercover cop" (Полицейский под прикрытием)\n- Действие: "Call the cops" (Вызвать копов)\n- Кино: "Cop car" (Полицейская машина)',
    [
      { en: 'The cop asked for my driving license.', ru: 'Полицейский попросил мои права.' },
      { en: 'Run, the cops are coming!', ru: 'Беги, копы едут!' },
      { en: 'He wants to be a cop when he grows up.', ru: 'Он хочет стать полицейским, когда вырастет.' },
      { en: 'Don\'t lie to a cop.', ru: 'Не ври полицейскому.' }
    ],
    []
),

createRichWord('b1_cottage', 'Cottage', '/ˈkɒt.ɪdʒ/', 'котидж', 'Коттедж / Домик', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Небольшой дом, обычно в сельской местности.',
    '- Жилье: "Country cottage" (Загородный домик)\n- Отдых: "Holiday cottage" (Домик для отдыха)\n- Еда: "Cottage cheese" (Зернёный творог)',
    [
      { en: 'They live in a charming stone cottage.', ru: 'Они живут в очаровательном каменном коттедже.' },
      { en: 'We rented a cottage by the sea.', ru: 'Мы сняли домик у моря.' },
      { en: 'The cottage has a thatched roof.', ru: 'У коттеджа соломенная крыша.' },
      { en: 'I like eating cottage cheese for breakfast.', ru: 'Я люблю есть зернёный творог на завтрак.' }
    ],
    []
),

createRichWord('b1_cotton', 'Cotton', '/ˈkɒt.ən/', 'котн', 'Хлопок', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Натуральная ткань или нить, произведенная из растения хлопок.',
    '- Одежда: "Cotton shirt" (Хлопковая рубашка)\n- Материал: "100% cotton" (100% хлопок)\n- Растение: "Pick cotton" (Собирать хлопок)',
    [
      { en: 'This shirt is made of pure cotton.', ru: 'Эта рубашка сделана из чистого хлопка.' },
      { en: 'Cotton is cooler than wool in summer.', ru: 'Хлопок прохладнее шерсти летом.' },
      { en: 'She grows cotton on her farm.', ru: 'Она выращивает хлопок на своей ферме.' },
      { en: 'I prefer cotton sheets.', ru: 'Я предпочитаю хлопковые простыни.' }
    ],
    []
),

createRichWord('b1_cough', 'Cough', '/kɒf/', 'коф', 'Кашель / Кашлять', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Резко выталкивать воздух из легких с громким звуком, обычно при болезни.',
    '- Болезнь: "Bad cough" (Сильный кашель)\n- Действие: "Cough loudly" (Громко кашлять)\n- Лекарство: "Cough syrup" (Сироп от кашля)',
    [
      { en: 'He has a terrible cough.', ru: 'У него ужасный кашель.' },
      { en: 'Please cover your mouth when you cough.', ru: 'Пожалуйста, закрывай рот, когда кашляешь.' },
      { en: 'I couldn\'t stop coughing all night.', ru: 'Я не мог перестать кашлять всю ночь.' },
      { en: 'She gave a polite cough to attract attention.', ru: 'Она вежливо кашлянула, чтобы привлечь внимание.' }
    ],
    []
),

createRichWord('b1_crash', 'Crash', '/kræʃ/', 'крэш', 'Авария / Грохот', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Сильное столкновение транспорта или громкий звук падения. Также сбой компьютера.',
    '- Дорога: "Car crash" (Автокатастрофа)\n- Звук: "Loud crash" (Громкий грохот)\n- IT: "Computer crash" (Сбой компьютера)',
    [
      { en: 'He was injured in a car crash.', ru: 'Он пострадал в автокатастрофе.' },
      { en: 'I heard a loud crash in the kitchen.', ru: 'Я услышал громкий грохот на кухне.' },
      { en: 'My computer crashed and I lost my work.', ru: 'Мой компьютер сломался (завис), и я потерял работу.' },
      { en: 'The plane crashed into the mountain.', ru: 'Самолет врезался в гору.' }
    ],
    [
        { meaning: "Sleep (Slang)", translation: "Вырубиться (спать)", example: { en: "Can I crash here tonight?", ru: "Могу я переночевать (упасть) здесь сегодня?" } },
        { meaning: "Financial collapse", translation: "Крах", example: { en: "Stock market crash.", ru: "Биржевой крах." } }
    ]
),

createRichWord('b1_creature', 'Creature', '/ˈkriː.tʃər/', 'кричэ', 'Существо', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Любое живое существо (животное или фантастический монстр), кроме растений.',
    '- Природа: "Living creature" (Живое существо)\n- Фантастика: "Strange creature" (Странное существо)\n- Океан: "Sea creatures" (Морские обитатели)',
    [
      { en: 'Blue whales are the largest creatures on Earth.', ru: 'Синие киты — самые большие существа на Земле.' },
      { en: 'Respect every living creature.', ru: 'Уважай каждое живое существо.' },
      { en: 'We saw strange creatures in the deep sea.', ru: 'Мы видели странных существ в глубинах моря.' },
      { en: 'The alien was a green creature with three eyes.', ru: 'Пришелец был зеленым существом с тремя глазами.' }
    ],
    []
),

createRichWord('b1_credit', 'Credit', '/ˈkred.ɪt/', 'кредит', 'Кредит / Заслуга', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Возможность купить сейчас и заплатить позже, или похвала за что-то.',
    '- Банк: "Credit card" (Кредитная карта)\n- Похвала: "Take credit" (Присваивать заслугу)\n- Кино: "End credits" (Финальные титры)',
    [
      { en: 'I paid for the TV by credit card.', ru: 'Я заплатил за телевизор кредитной картой.' },
      { en: 'She deserves credit for her hard work.', ru: 'Она заслуживает похвалы за свой тяжелый труд.' },
      { en: 'Do not take credit for someone else\'s ideas.', ru: 'Не присваивай себе чужие идеи.' },
      { en: 'Your account is in credit.', ru: 'На вашем счету положительный баланс.' }
    ],
    []
),

createRichWord('b1_criminal', 'Criminal', '/ˈkrɪm.ɪ.nəl/', 'криминэл', 'Преступник / Уголовный', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Человек, совершивший преступление. Как прилагательное — относящийся к преступлению.',
    '- Человек: "Dangerous criminal" (Опасный преступник)\n- Закон: "Criminal law" (Уголовное право)\n- Действие: "Criminal record" (Судимость)',
    [
      { en: 'The criminal escaped from prison.', ru: 'Преступник сбежал из тюрьмы.' },
      { en: 'Robbery is a criminal offence.', ru: 'Ограбление — это уголовное преступление.' },
      { en: 'He has a long criminal record.', ru: 'У него длинный список судимостей.' },
      { en: 'It would be criminal to waste this food.', ru: 'Было бы преступлением выбросить эту еду (перен.).' }
    ],
    []
),

createRichWord('b1_crown', 'Crown', '/kraʊn/', 'краун', 'Корона', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Золотой головной убор монарха или верхушка чего-либо.',
    '- Монарх: "Gold crown" (Золотая корона)\n- Зубы: "Dental crown" (Зубная коронка)\n- Успех: "Jewel in the crown" (Жемчужина коллекции)',
    [
      { en: 'The Queen wore a heavy gold crown.', ru: 'Королева носила тяжелую золотую корону.' },
      { en: 'The winner was crowned with laurel.', ru: 'Победителя увенчали лавром.' },
      { en: 'I need a crown on my broken tooth.', ru: 'Мне нужна коронка на сломанный зуб.' },
      { en: 'The hill was crowned with a castle.', ru: 'Холм был увенчан замком.' }
    ],
    []
),

createRichWord('b1_cruel', 'Cruel', '/krʊəl/', 'круэл', 'Жестокий', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Причиняющий боль или страдания без жалости.',
    '- Человек: "Cruel man" (Жестокий человек)\n- Судьба: "Cruel fate" (Жестокая судьба)\n- Обращение: "Cruel to animals" (Жестокий к животным)',
    [
      { en: 'It is cruel to keep a dog in a small cage.', ru: 'Жестоко держать собаку в маленькой клетке.' },
      { en: 'Life can be cruel sometimes.', ru: 'Жизнь иногда бывает жестокой.' },
      { en: 'He made a cruel joke about her appearance.', ru: 'Он жестоко пошутил над её внешностью.' },
      { en: 'The king was a cruel tyrant.', ru: 'Король был жестоким тираном.' }
    ],
    []
),

createRichWord('b1_cure', 'Cure', '/kjʊər/', 'кьюэ', 'Лекарство / Лечить', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Средство, которое устраняет болезнь, или сам процесс выздоровления.',
    '- Медицина: "Find a cure" (Найти лекарство/исцеление)\n- Болезнь: "Cure for cancer" (Лекарство от рака)\n- Действие: "Cure a patient" (Вылечить пациента)',
    [
      { en: 'Doctors are trying to find a cure for the disease.', ru: 'Врачи пытаются найти лекарство от этой болезни.' },
      { en: 'Time cures all wounds.', ru: 'Время лечит все раны.' },
      { en: 'He was completely cured of the infection.', ru: 'Он полностью излечился от инфекции.' },
      { en: 'Prevention is better than cure.', ru: 'Профилактика лучше лечения.' }
    ],
    [
        { meaning: "Preserve food (verb)", translation: "Вялить / Консервировать", example: { en: "Cured meat.", ru: "Вяленое мясо." } }
    ]
),

createRichWord('b1_curious', 'Curious', '/ˈkjʊə.ri.əs/', 'кьюриэс', 'Любопытный', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Желающий много знать или странный/необычный.',
    '- Интерес: "Curious about everything" (Любопытный ко всему)\n- Странность: "Curious noise" (Странный шум)\n- Выражение: "Just curious" (Просто любопытно)',
    [
      { en: 'Children are naturally curious.', ru: 'Дети от природы любопытны.' },
      { en: 'I am curious to know what happened.', ru: 'Мне любопытно узнать, что случилось.' },
      { en: 'It was a curious coincidence.', ru: 'Это было странное совпадение.' },
      { en: '"Why do you ask?" "Just curious."', ru: '"Почему ты спрашиваешь?" "Просто любопытно."' }
    ],
    []
),

createRichWord('b1_curl', 'Curl', '/kɜːl/', 'кёл', 'Локон / Завиваться', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Спиральная форма (обычно волос). Как глагол — скручивать.',
    '- Волосы: "Blonde curls" (Светлые локоны)\n- Действие: "Curl up" (Свернуться калачиком)\n- Спорт: "Bicep curl" (Сгибание на бицепс)',
    [
      { en: 'She has beautiful natural curls.', ru: 'У нее красивые натуральные кудри.' },
      { en: 'Smoke curled up from the chimney.', ru: 'Дым клубился из трубы.' },
      { en: 'The cat curled up on the sofa.', ru: 'Кошка свернулась калачиком на диване.' },
      { en: 'She is curling her hair.', ru: 'Она завивает волосы.' }
    ],
    []
  ),
createRichWord('b1_chart', 'Chart', '/tʃɑːt/', 'чат', 'Диаграмма / График', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Рисунок, показывающий информацию (числа, прогресс) в виде линий или столбцов.',
    '- Бизнес: "Sales chart" (График продаж)\n- Музыка: "Top of the charts" (Вершина хит-парада)\n- Море: "Naval chart" (Морская карта)',
    [
      { en: 'Look at the chart on page five.', ru: 'Посмотрите на диаграмму на пятой странице.' },
      { en: 'This song is number one in the charts.', ru: 'Эта песня номер один в чартах.' },
      { en: 'The doctor checked my medical chart.', ru: 'Врач проверил мою медицинскую карту.' },
      { en: 'We need a chart to see the progress.', ru: 'Нам нужен график, чтобы видеть прогресс.' }
    ],
    [
        { meaning: "Map (Sea/Sky)", translation: "Карта (морская/авиа)", example: { en: "Chart the course.", ru: "Прокладывать курс по карте." } }
    ]
),

createRichWord('b1_chemical', 'Chemical', '/ˈkem.ɪ.kəl/', 'кемикл', 'Химический / Химикат', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Относящийся к химии или являющийся веществом, полученным химическим путем.',
    '- Наука: "Chemical reaction" (Химическая реакция)\n- Продукт: "Household chemicals" (Бытовая химия)\n- Состав: "Chemical composition" (Химический состав)',
    [
      { en: 'Farmers use chemicals to kill insects.', ru: 'Фермеры используют химикаты для уничтожения насекомых.' },
      { en: 'A chemical reaction caused the explosion.', ru: 'Взрыв вызвала химическая реакция.' },
      { en: 'The water contains dangerous chemicals.', ru: 'Вода содержит опасные химикаты.' },
      { en: 'He works in the chemical industry.', ru: 'Он работает в химической промышленности.' }
    ],
    []
),

createRichWord('b1_chill', 'Chill', '/tʃɪl/', 'чил', 'Холод / Озноб', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Чувство холода или (разг.) расслабление. Как глагол — охлаждать или отдыхать.',
    '- Погода: "Feel a chill" (Чувствовать холод)\n- Болезнь: "Catch a chill" (Простудиться)\n- Сленг: "Chill out" (Расслабиться)',
    [
      { en: 'There is a chill in the air tonight.', ru: 'Сегодня вечером в воздухе чувствуется холод.' },
      { en: 'Let the wine chill in the fridge.', ru: 'Дай вину охладиться в холодильнике.' },
      { en: 'I\'m just chilling at home.', ru: 'Я просто отдыхаю (чилю) дома.' },
      { en: 'A sudden chill went down my spine.', ru: 'Внезапный холод пробежал по моей спине.' }
    ],
    []
),

createRichWord('b1_client', 'Client', '/ˈklaɪ.ənt/', 'клайэнт', 'Клиент', ProficiencyLevel.B1, 'noun', 'High', 'Formal',
    'Человек, пользующийся услугами профессионалов (юристов, дизайнеров и т.д.).',
    '- Бизнес: "Meeting a client" (Встреча с клиентом)\n- Отношения: "Client base" (Клиентская база)\n- Право: "Lawyer and client" (Адвокат и клиент)',
    [
      { en: 'The lawyer advised his client not to speak.', ru: 'Адвокат посоветовал своему клиенту не говорить.' },
      { en: 'We treat every client with respect.', ru: 'Мы относимся к каждому клиенту с уважением.' },
      { en: 'She has a meeting with a new client.', ru: 'У нее встреча с новым клиентом.' },
      { en: 'The company is losing important clients.', ru: 'Компания теряет важных клиентов.' }
    ],
    []
),

createRichWord('b1_coin', 'Coin', '/kɔɪn/', 'коин', 'Монета', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Кусок металла, используемый как деньги. Как глагол — придумывать новое слово.',
    '- Деньги: "Gold coin" (Золотая монета)\n- Игра: "Flip a coin" (Подбросить монетку)\n- Фраза: "Two sides of the coin" (Две стороны медали)',
    [
      { en: 'I found a rare coin on the beach.', ru: 'Я нашел редкую монету на пляже.' },
      { en: 'Put a coin in the slot.', ru: 'Опустите монету в прорезь.' },
      { en: 'Let\'s flip a coin to decide.', ru: 'Давай подбросим монетку, чтобы решить.' },
      { en: 'He has a collection of old coins.', ru: 'У него есть коллекция старинных монет.' }
    ],
    [
        { meaning: "Invent a word (verb)", translation: "Придумать (термин)", example: { en: "Who coined the phrase?", ru: "Кто придумал эту фразу?" } }
    ]
),

createRichWord('b1_column', 'Column', '/ˈkɒl.əm/', 'колэм', 'Колонна / Столбец', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Вертикальная опора здания или вертикальный ряд текста/чисел.',
    '- Архитектура: "Stone column" (Каменная колонна)\n- Текст: "Newspaper column" (Газетная колонка)\n- Таблица: "Add up the column" (Сложить столбец)',
    [
      { en: 'The temple is supported by large columns.', ru: 'Храм поддерживается большими колоннами.' },
      { en: 'He writes a weekly column for the Times.', ru: 'Он пишет еженедельную колонку для Таймс.' },
      { en: 'Add the numbers in the left column.', ru: 'Сложите числа в левом столбце.' },
      { en: 'A column of smoke rose into the air.', ru: 'Столб дыма поднялся в воздух.' }
    ],
    []
),

createRichWord('b1_comedy', 'Comedy', '/ˈkɒm.ə.di/', 'комэди', 'Комедия', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Фильм, пьеса или шоу, предназначенные для того, чтобы смешить людей.',
    '- Жанр: "Romantic comedy" (Романтическая комедия)\n- ТВ: "Comedy show" (Комедийное шоу)\n- Ситуация: "Black comedy" (Черный юмор)',
    [
      { en: 'We watched a very funny comedy last night.', ru: 'Вчера вечером мы смотрели очень смешную комедию.' },
      { en: 'He prefers comedy to drama.', ru: 'Он предпочитает комедию драме.' },
      { en: 'Stand-up comedy is becoming popular.', ru: 'Стендап-комедия становится популярной.' },
      { en: 'The situation turned into a comedy of errors.', ru: 'Ситуация превратилась в комедию ошибок.' }
    ],
    []
),

createRichWord('b1_communicate', 'Communicate', '/kəˈmjuː.nɪ.keɪt/', 'кэмьюникейт', 'Общаться', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Обмениваться информацией или идеями с кем-то.',
    '- Способ: "Communicate by email" (Общаться по email)\n- Навык: "Communicate clearly" (Ясно излагать мысли)\n- Люди: "Communicate with each other" (Общаться друг с другом)',
    [
      { en: 'Dolphins use sound to communicate.', ru: 'Дельфины используют звук для общения.' },
      { en: 'We communicate mostly by email.', ru: 'Мы общаемся в основном по электронной почте.' },
      { en: 'It is important to communicate your feelings.', ru: 'Важно выражать (сообщать) свои чувства.' },
      { en: 'He finds it hard to communicate with teenagers.', ru: 'Ему трудно общаться с подростками.' }
    ],
    []
),

createRichWord('b1_compete', 'Compete', '/kəmˈpiːt/', 'кэмпит', 'Соревноваться', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Пытаться быть лучше или быстрее других.',
    '- Спорт: "Compete in the race" (Соревноваться в гонке)\n- Бизнес: "Compete with large companies" (Конкурировать с крупными компаниями)\n- Приз: "Compete for the prize" (Бороться за приз)',
    [
      { en: 'Several athletes will compete for the gold medal.', ru: 'Несколько атлетов будут бороться за золотую медаль.' },
      { en: 'Small shops cannot compete with supermarkets.', ru: 'Маленькие магазины не могут конкурировать с супермаркетами.' },
      { en: 'I don\'t like to compete against my friends.', ru: 'Я не люблю соревноваться со своими друзьями.' },
      { en: 'They compete to get the best jobs.', ru: 'Они конкурируют, чтобы получить лучшую работу.' }
    ],
    []
),

createRichWord('b1_complaint', 'Complaint', '/kəmˈpleɪnt/', 'кэмплейнт', 'Жалоба', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Заявление о том, что что-то не так или не устраивает.',
    '- Сервис: "Make a complaint" (Подать жалобу)\n- Здоровье: "Heart complaint" (Проблема с сердцем / Жалоба на сердце)\n- Письмо: "Letter of complaint" (Письмо с жалобой)',
    [
      { en: 'We have received a complaint from a neighbor.', ru: 'Мы получили жалобу от соседа.' },
      { en: 'I wish to make a formal complaint.', ru: 'Я хочу подать официальную жалобу.' },
      { en: 'Her main complaint was the noise.', ru: 'Её главной претензией был шум.' },
      { en: 'The company handles customer complaints well.', ru: 'Компания хорошо справляется с жалобами клиентов.' }
    ],
    []
),

createRichWord('b1_conclusion', 'Conclusion', '/kənˈkluː.ʒən/', 'кэнклужн', 'Заключение / Вывод', ProficiencyLevel.B1, 'noun', 'Medium', 'Formal',
    'Конец чего-либо или мнение, сформированное после размышлений.',
    '- Логика: "Come to a conclusion" (Прийти к выводу)\n- Текст: "In conclusion" (В заключение)\n- Результат: "Foregone conclusion" (Предрешенный результат)',
    [
      { en: 'In conclusion, I would like to thank everyone.', ru: 'В заключение я хотел бы всех поблагодарить.' },
      { en: 'What conclusion did you reach?', ru: 'К какому выводу вы пришли?' },
      { en: 'The conclusion of the movie was surprising.', ru: 'Концовка фильма была неожиданной.' },
      { en: 'We jumped to the wrong conclusion.', ru: 'Мы сделали поспешный (неверный) вывод.' }
    ],
    []
),

createRichWord('b1_confident', 'Confident', '/ˈkɒn.fɪ.dənt/', 'конфидэнт', 'Уверенный', ProficiencyLevel.B1, 'adj', 'High', 'Neutral',
    'Чувствующий или показывающий уверенность в себе или в успехе.',
    '- Личность: "Confident person" (Уверенный в себе человек)\n- Будущее: "Confident of victory" (Уверенный в победе)\n- Речь: "Confident voice" (Уверенный голос)',
    [
      { en: 'She is confident that she will pass the exam.', ru: 'Она уверена, что сдаст экзамен.' },
      { en: 'You need to look confident during the interview.', ru: 'Тебе нужно выглядеть уверенным во время собеседования.' },
      { en: 'I am not very confident about driving at night.', ru: 'Я не очень уверенно чувствую себя за рулем ночью.' },
      { en: 'He gave a confident smile.', ru: 'Он уверенно улыбнулся.' }
    ],
    []
),

createRichWord('b1_confirm', 'Confirm', '/kənˈfɜːm/', 'кэнфём', 'Подтверждать', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Доказать, что что-то верно, или сделать договоренность официальной.',
    '- Бронирование: "Confirm booking" (Подтвердить бронь)\n- Правда: "Confirm the news" (Подтвердить новости)\n- Слухи: "Rumor confirmed" (Слух подтвердился)',
    [
      { en: 'Please confirm your attendance by email.', ru: 'Пожалуйста, подтвердите свое присутствие по электронной почте.' },
      { en: 'The hotel confirmed our reservation.', ru: 'Отель подтвердил нашу бронь.' },
      { en: 'Tests confirmed that he has the virus.', ru: 'Тесты подтвердили, что у него вирус.' },
      { en: 'Can you confirm the time of the meeting?', ru: 'Вы можете подтвердить время встречи?' }
    ],
    []
  ),
createRichWord('b1_consequence', 'Consequence', '/ˈkɒn.sɪ.kwəns/', 'консиквенс', 'Последствие', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Результат действия, часто неприятный.',
    '- Результат: "Serious consequences" (Серьезные последствия)\n- Логика: "As a consequence" (Как следствие)\n- Ответственность: "Face the consequences" (Отвечать за последствия)',
    [
      { en: 'He had to face the consequences of his actions.', ru: 'Ему пришлось столкнуться с последствиями своих действий.' },
      { en: 'Global warming is a consequence of pollution.', ru: 'Глобальное потепление — это следствие загрязнения.' },
      { en: 'Whatever you do, consider the consequences.', ru: 'Что бы ты ни делал, обдумай последствия.' },
      { en: 'The storm had terrible consequences for the town.', ru: 'Шторм имел ужасные последствия для города.' }
    ],
    [
        { meaning: "Importance (Formal)", translation: "Значение / Важность", example: { en: "A matter of no consequence.", ru: "Дело, не имеющее значения." } }
    ]
),

createRichWord('b1_consist', 'Consist', '/kənˈsɪst/', 'кэнсист', 'Состоять', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Быть составленным из определенных частей или элементов (обычно используется с "of").',
    '- Состав: "Consist of" (Состоять из)\n- Суть: "Consist in" (Заключаться в)\n- Ингредиенты: "Breakfast consists of..." (Завтрак состоит из...)',
    [
      { en: 'The team consists of five players.', ru: 'Команда состоит из пяти игроков.' },
      { en: 'Happiness does not consist in having money.', ru: 'Счастье не заключается в наличии денег.' },
      { en: 'The exam consists of a written and oral part.', ru: 'Экзамен состоит из письменной и устной части.' },
      { en: 'My diet consists mainly of fruit and vegetables.', ru: 'Моя диета состоит в основном из фруктов и овощей.' }
    ],
    []
),

createRichWord('b1_crew', 'Crew', '/kruː/', 'кру', 'Экипаж / Команда', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Группа людей, работающих на корабле, самолете или над технической задачей (съемочная группа).',
    '- Самолет: "Cabin crew" (Бортпроводники)\n- Корабль: "Ship\'s crew" (Команда корабля)\n- Фильм: "Film crew" (Съемочная группа)',
    [
      { en: 'The captain and his crew welcomed us.', ru: 'Капитан и его команда поприветствовали нас.' },
      { en: 'Ambulance crews arrived quickly.', ru: 'Бригады скорой помощи прибыли быстро.' },
      { en: 'A camera crew filmed the event.', ru: 'Съемочная группа снимала событие.' },
      { en: 'He works as a member of the crew.', ru: 'Он работает членом экипажа.' }
    ],
    []
),

createRichWord('b1_cruise', 'Cruise', '/kruːz/', 'круз', 'Круиз', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Путешествие на корабле ради удовольствия, посещая разные места. Как глагол — плавать/ездить с постоянной скоростью.',
    '- Отдых: "Go on a cruise" (Отправиться в круиз)\n- Корабль: "Cruise ship" (Круизный лайнер)\n- Авто: "Cruise control" (Круиз-контроль)',
    [
      { en: 'They went on a luxury cruise around the world.', ru: 'Они отправились в роскошный кругосветный круиз.' },
      { en: 'The ship cruised along the coast.', ru: 'Корабль шел вдоль побережья.' },
      { en: 'We cruised at a steady speed.', ru: 'Мы ехали с постоянной скоростью.' },
      { en: 'A police car cruised slowly down the street.', ru: 'Полицейская машина медленно ехала по улице.' }
    ],
    []
),

createRichWord('b1_currency', 'Currency', '/ˈkʌr.ən.si/', 'карэнси', 'Валюта', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Система денег, используемая в конкретной стране.',
    '- Деньги: "Foreign currency" (Иностранная валюта)\n- Обмен: "Currency exchange" (Обмен валют)\n- Тип: "Digital currency" (Цифровая валюта)',
    [
      { en: 'The Euro is the currency of many European countries.', ru: 'Евро — валюта многих европейских стран.' },
      { en: 'You need to change your currency at the bank.', ru: 'Вам нужно обменять валюту в банке.' },
      { en: 'The local currency is very weak.', ru: 'Местная валюта очень слабая.' },
      { en: 'Hard currency represents stability.', ru: 'Твердая валюта олицетворяет стабильность.' }
    ],
    [
        { meaning: "Acceptance/Popularity", translation: "Распространение / Популярность", example: { en: "The idea gained currency.", ru: "Идея получила распространение." } }
    ]
),

createRichWord('b1_curriculum', 'Curriculum', '/kəˈrɪk.jə.ləm/', 'кэрикьюлэм', 'Учебная программа', ProficiencyLevel.B1, 'noun', 'Medium', 'Formal',
    'Список предметов, изучаемых в школе или университете.',
    '- Школа: "School curriculum" (Школьная программа)\n- Состав: "National curriculum" (Национальная учебная программа)\n- Резюме: "Curriculum Vitae" (Резюме / CV)',
    [
      { en: 'Maths is a core part of the curriculum.', ru: 'Математика — основная часть учебной программы.' },
      { en: 'They want to change the history curriculum.', ru: 'Они хотят изменить учебную программу по истории.' },
      { en: 'Sports should be in the curriculum.', ru: 'Спорт должен быть в учебной программе.' },
      { en: 'Please send your Curriculum Vitae.', ru: 'Пожалуйста, пришлите ваше резюме.' }
    ],
    []
),

createRichWord('b1_custom', 'Custom', '/ˈkʌs.təm/', 'кастэм', 'Обычай / Таможня', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Традиционный способ поведения в обществе. Во мн. числе (Customs) — таможня.',
    '- Традиция: "Local custom" (Местный обычай)\n- Граница: "Go through customs" (Проходить таможню)\n- Бизнес: "Custom-made" (Сделанный на заказ)',
    [
      { en: 'It is a custom to shake hands when meeting.', ru: 'При встрече принято (это обычай) пожимать руки.' },
      { en: 'We respect the customs of other countries.', ru: 'Мы уважаем обычаи других стран.' },
      { en: 'It took an hour to get through customs.', ru: 'Прохождение таможни заняло час.' },
      { en: 'The officer checked my bag at customs.', ru: 'Офицер проверил мою сумку на таможне.' }
    ],
    []
),

createRichWord('b1_data', 'Data', '/ˈdeɪ.tə/', 'дейтэ', 'Данные', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Факты, статистика или информация, собранная для анализа.',
    '- IT: "Data processing" (Обработка данных)\n- Наука: "Collect data" (Собирать данные)\n- Защита: "Data protection" (Защита данных)',
    [
      { en: 'We need more data to make a decision.', ru: 'Нам нужно больше данных, чтобы принять решение.' },
      { en: 'The computer stores a lot of data.', ru: 'Компьютер хранит много данных.' },
      { en: 'Analyze the data carefully.', ru: 'Внимательно проанализируй данные.' },
      { en: 'Personal data should be kept private.', ru: 'Личные данные должны оставаться конфиденциальными.' }
    ],
    []
  ),
createRichWord('b1_cab', 'Cab', '/kæb/', 'кэб', 'Такси / Кабина', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Автомобиль с водителем, который вы нанимаете (такси), или кабина водителя в грузовике/поезде.',
    '- Транспорт: "Call a cab" (Вызвать такси)\n- Цвет: "Black cab" (Черный кэб - в Лондоне)\n- Водитель: "Cab driver" (Таксист)',
    [
      { en: 'We took a cab to the airport.', ru: 'Мы взяли такси до аэропорта.' },
      { en: 'It is hard to find a cab in the rain.', ru: 'Трудно найти такси в дождь.' },
      { en: 'The truck driver slept in his cab.', ru: 'Дальнобойщик спал в своей кабине.' },
      { en: 'Can you call me a cab, please?', ru: 'Можете вызвать мне такси, пожалуйста?' }
    ],
    []
),

createRichWord('b1_cabin', 'Cabin', '/ˈkæb.ɪn/', 'кэбин', 'Каюта / Хижина', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Комната на корабле, салон самолета или маленький деревянный домик.',
    '- Самолет: "Cabin crew" (Бортпроводники)\n- Лес: "Log cabin" (Бревенчатая хижина)\n- Корабль: "First-class cabin" (Каюта первого класса)',
    [
      { en: 'We stayed in a small log cabin in the woods.', ru: 'Мы остановились в маленькой бревенчатой хижине в лесу.' },
      { en: 'Please keep your luggage in the overhead bin in the cabin.', ru: 'Пожалуйста, храните багаж на верхней полке в салоне самолета.' },
      { en: 'Our cabin on the ship was very comfortable.', ru: 'Наша каюта на корабле была очень удобной.' },
      { en: 'The pilot sat in the cabin.', ru: 'Пилот сидел в кабине.' }
    ],
    []
),

createRichWord('b1_calorie', 'Calorie', '/ˈkæl.ər.i/', 'кэлэри', 'Калория', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Единица измерения энергии в еде.',
    '- Диета: "Count calories" (Считать калории)\n- Еда: "High in calories" (Высококалорийный)\n- Спорт: "Burn calories" (Сжигать калории)',
    [
      { en: 'Running helps you burn a lot of calories.', ru: 'Бег помогает сжигать много калорий.' },
      { en: 'There are many calories in this cake.', ru: 'В этом торте много калорий.' },
      { en: 'She is counting calories to lose weight.', ru: 'Она считает калории, чтобы похудеть.' },
      { en: 'A balanced diet should have the right amount of calories.', ru: 'Сбалансированная диета должна содержать правильное количество калорий.' }
    ],
    []
),

createRichWord('b1_campus', 'Campus', '/ˈkæm.pəs/', 'кэмпэс', 'Кампус / Территория университета', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Земля и здания университета или колледжа.',
    '- Учеба: "Live on campus" (Жить в кампусе)\n- Место: "University campus" (Университетский городок)\n- Прогулка: "Walk across campus" (Идти по территории университета)',
    [
      { en: 'The university campus is very large and green.', ru: 'Университетский кампус очень большой и зеленый.' },
      { en: 'Freshmen usually live on campus.', ru: 'Первокурсники обычно живут в кампусе (в общежитиях).' },
      { en: 'There is a library in the center of the campus.', ru: 'В центре кампуса есть библиотека.' },
      { en: 'We met at the coffee shop off campus.', ru: 'Мы встретились в кофейне за пределами кампуса.' }
    ],
    []
),

createRichWord('b1_canal', 'Canal', '/kəˈnæl/', 'кэнэл', 'Канал', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Искусственный водный путь для лодок или ирригации.',
    '- География: "Suez Canal" (Суэцкий канал)\n- Город: "Venice canals" (Каналы Венеции)\n- Транспорт: "Canal boat" (Лодка для каналов)',
    [
      { en: 'Boats travel along the canal slowly.', ru: 'Лодки медленно плывут по каналу.' },
      { en: 'The canal connects the two rivers.', ru: 'Канал соединяет две реки.' },
      { en: 'Venice is famous for its canals.', ru: 'Венеция знаменита своими каналами.' },
      { en: 'They walked along the canal bank.', ru: 'Они гуляли по берегу канала.' }
    ],
    [
        { meaning: "Body duct", translation: "Канал (анатомич.)", example: { en: "Root canal.", ru: "Корневой канал (зуба)." } }
    ]
),

createRichWord('b1_candle', 'Candle', '/ˈkæn.dəl/', 'кэндл', 'Свеча', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Палочка из воска с фитилем, которую зажигают для света.',
    '- Свет: "Light a candle" (Зажечь свечу)\n- Праздник: "Birthday candles" (Свечи на торте)\n- Действие: "Blow out a candle" (Задуть свечу)',
    [
      { en: 'She lit a candle because the power went out.', ru: 'Она зажгла свечу, потому что отключили электричество.' },
      { en: 'He blew out the candles on his birthday cake.', ru: 'Он задул свечи на своем праздничном торте.' },
      { en: 'The room was lit by candle light.', ru: 'Комната была освещена светом свечей.' },
      { en: 'A scented candle makes the room smell nice.', ru: 'Ароматическая свеча придает комнате приятный запах.' }
    ],
    []
),

createRichWord('b1_cathedral', 'Cathedral', '/kəˈθiː.drəl/', 'кэсидрэл', 'Собор', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Очень большая и важная церковь.',
    '- Религия: "Visit a cathedral" (Посетить собор)\n- Архитектура: "Gothic cathedral" (Готический собор)\n- Город: "City cathedral" (Городской собор)',
    [
      { en: 'St Paul\'s Cathedral is a famous landmark in London.', ru: 'Собор Святого Павла — известная достопримечательность Лондона.' },
      { en: 'We climbed to the top of the cathedral tower.', ru: 'Мы поднялись на вершину башни собора.' },
      { en: 'The cathedral has beautiful stained glass windows.', ru: 'В соборе красивые витражные окна.' },
      { en: 'It is the oldest cathedral in the country.', ru: 'Это старейший собор в стране.' }
    ],
    []
),

createRichWord('b1_cave', 'Cave', '/keɪv/', 'кейв', 'Пещера', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Большое естественное отверстие в скале или земле.',
    '- Природа: "Dark cave" (Темная пещера)\n- Исследование: "Explore a cave" (Исследовать пещеру)\n- Животные: "Bear\'s cave" (Медвежья берлога)',
    [
      { en: 'Bats often live in dark caves.', ru: 'Летучие мыши часто живут в темных пещерах.' },
      { en: 'Ancient people painted on cave walls.', ru: 'Древние люди рисовали на стенах пещер.' },
      { en: 'They found a hidden cave behind the waterfall.', ru: 'Они нашли скрытую пещеру за водопадом.' },
      { en: 'The cave is very deep and cold.', ru: 'Пещера очень глубокая и холодная.' }
    ],
    [
        { meaning: "Give up (verb - Phrasal 'Cave in')", translation: "Сдаться / Уступить", example: { en: "He finally caved in to their demands.", ru: "Он наконец уступил их требованиям." } }
    ]
),

createRichWord('b1_celebrity', 'Celebrity', '/səˈleb.rə.ti/', 'сэлебрити', 'Знаменитость', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Известный человек, обычно из сферы развлечений.',
    '- Статус: "Become a celebrity" (Стать знаменитостью)\n- ТВ: "Celebrity guest" (Звездный гость)\n- Мир: "Local celebrity" (Местная знаменитость)',
    [
      { en: 'She is a celebrity in the fashion world.', ru: 'Она знаменитость в мире моды.' },
      { en: 'Many celebrities live in Hollywood.', ru: 'Многие знаменитости живут в Голливуде.' },
      { en: 'He enjoys his celebrity status.', ru: 'Он наслаждается своим статусом звезды.' },
      { en: 'I saw a celebrity at the restaurant yesterday.', ru: 'Я видел знаменитость в ресторане вчера.' }
    ],
    []
),

createRichWord('b1_cemetery', 'Cemetery', '/ˈsem.ə.tri/', 'сэмэтри', 'Кладбище', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Место, где хоронят мертвых людей.',
    '- Место: "Old cemetery" (Старое кладбище)\n- Действие: "Visit a cemetery" (Посещать кладбище)\n- Война: "Military cemetery" (Военное кладбище)',
    [
      { en: 'He visits his wife\'s grave in the cemetery every week.', ru: 'Он посещает могилу жены на кладбище каждую неделю.' },
      { en: 'The cemetery is quiet and peaceful.', ru: 'Кладбище тихое и спокойное.' },
      { en: 'They walked through the old cemetery.', ru: 'Они прогулялись по старому кладбищу.' },
      { en: 'Many famous people are buried in this cemetery.', ru: 'Многие известные люди похоронены на этом кладбище.' }
    ],
    []
),

createRichWord('b1_certificate', 'Certificate', '/səˈtɪf.ɪ.kət/', 'сётификэт', 'Сертификат / Свидетельство', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Официальный документ, подтверждающий факт (рождение, брак, окончание учебы).',
    '- Документ: "Birth certificate" (Свидетельство о рождении)\n- Учеба: "Receive a certificate" (Получить сертификат)\n- Брак: "Marriage certificate" (Свидетельство о браке)',
    [
      { en: 'You need a birth certificate to get a passport.', ru: 'Вам нужно свидетельство о рождении, чтобы получить паспорт.' },
      { en: 'She received a certificate for completing the course.', ru: 'Она получила сертификат за окончание курса.' },
      { en: 'The doctor signed the death certificate.', ru: 'Врач подписал свидетельство о смерти.' },
      { en: 'Is this certificate valid?', ru: 'Этот сертификат действителен?' }
    ],
    []
),

createRichWord('b1_champagne', 'Champagne', '/ʃæmˈpeɪn/', 'шэмпейн', 'Шампанское', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Дорогое французское игристое белое вино.',
    '- Праздник: "Glass of champagne" (Бокал шампанского)\n- Действие: "Pop the champagne" (Открыть шампанское)\n- Событие: "Drink champagne" (Пить шампанское)',
    [
      { en: 'We drank champagne to celebrate the wedding.', ru: 'Мы пили шампанское, чтобы отпраздновать свадьбу.' },
      { en: 'Open a bottle of champagne!', ru: 'Открой бутылку шампанского!' },
      { en: 'She prefers champagne to regular wine.', ru: 'Она предпочитает шампанское обычному вину.' },
      { en: 'They toasted the winner with champagne.', ru: 'Они подняли тост за победителя с шампанским.' }
    ],
    []
),

createRichWord('b1_chemistry', 'Chemistry', '/ˈkem.ɪ.stri/', 'кемистри', 'Химия', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Наука о веществах и реакциях. В переносном смысле — влечение между людьми.',
    '- Наука: "Study chemistry" (Изучать химию)\n- Школа: "Chemistry lesson" (Урок химии)\n- Отношения: "Good chemistry" (Хорошая "химия" / взаимопонимание)',
    [
      { en: 'I failed my chemistry exam.', ru: 'Я провалил экзамен по химии.' },
      { en: 'Chemistry was my favorite subject at school.', ru: 'Химия была моим любимым предметом в школе.' },
      { en: 'Mixing these chemicals can be dangerous.', ru: 'Смешивание этих химикатов может быть опасным.' },
      { en: 'There was no chemistry between the actors.', ru: 'Между актерами не было "химии" (искры).' }
    ],
    [
        { meaning: "Attraction/Connection", translation: "Взаимное притяжение / Искра", example: { en: "They have great chemistry.", ru: "Между ними отличная искра." } }
    ]
),

createRichWord('b1_chin', 'Chin', '/tʃɪn/', 'чин', 'Подбородок', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Часть лица под ртом.',
    '- Лицо: "Double chin" (Двойной подбородок)\n- Жест: "Rub one\'s chin" (Потереть подбородок)\n- Идиома: "Keep your chin up" (Не вешай нос)',
    [
      { en: 'He has a small scar on his chin.', ru: 'У него маленький шрам на подбородке.' },
      { en: 'She rested her chin on her hand.', ru: 'Она подперла подбородок рукой.' },
      { en: 'Keep your chin up, everything will be fine.', ru: 'Не вешай нос (держи подбородок выше), все будет хорошо.' },
      { en: 'He stroked his chin thoughtfully.', ru: 'Он задумчиво погладил подбородок.' }
    ],
    []
),

createRichWord('b1_clerk', 'Clerk', '/klɑːk/', 'кла:к', 'Клерк / Служащий', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Человек, работающий в офисе, банке или (в США) продавец в магазине.',
    '- Офис: "Office clerk" (Офисный служащий)\n- Отель: "Desk clerk" (Администратор на ресепшн)\n- Банк: "Bank clerk" (Банковский служащий)',
    [
      { en: 'The clerk at the desk checked us in.', ru: 'Служащий на стойке зарегистрировал нас.' },
      { en: 'She works as a filing clerk in a law firm.', ru: 'Она работает делопроизводителем в юридической фирме.' },
      { en: 'Ask the clerk for assistance.', ru: 'Попросите помощи у служащего.' },
      { en: 'The bank clerk counted the money.', ru: 'Банковский клерк пересчитал деньги.' }
    ],
    []
  ),
createRichWord('b1_congratulate', 'Congratulate', '/kənˈɡrætʃ.ə.leɪt/', 'кэнгрэчулейт', 'Поздравлять', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Выражать радость и похвалу кому-то по случаю успеха или особого события.',
    '- Праздник: "Congratulate on birthday" (Поздравить с днем рождения)\n- Успех: "Congratulate the winner" (Поздравить победителя)\n- Фраза: "I congratulate you" (Поздравляю вас)',
    [
      { en: 'I want to congratulate you on your exam results.', ru: 'Я хочу поздравить тебя с результатами экзамена.' },
      { en: 'We congratulated them on their marriage.', ru: 'Мы поздравили их с бракосочетанием.' },
      { en: 'He congratulated himself on a job well done.', ru: 'Он поздравил себя с хорошо выполненной работой.' },
      { en: 'Please congratulate your sister for me.', ru: 'Пожалуйста, поздравь свою сестру от меня.' }
    ],
    []
),

createRichWord('b1_convenience', 'Convenience', '/kənˈviː.ni.əns/', 'кэнвиниэнс', 'Удобство', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Качество быть полезным, легким в использовании или подходящим; отсутствие трудностей.',
    '- Магазин: "Convenience store" (Круглосуточный магазин)\n- Время: "at your convenience" (Когда вам будет удобно)\n- Жизнь: "Modern conveniences" (Современные удобства)',
    [
      { en: 'We bought this house for its convenience.', ru: 'Мы купили этот дом из-за его удобства.' },
      { en: 'Please call me at your earliest convenience.', ru: 'Пожалуйста, позвоните мне как только вам будет удобно.' },
      { en: 'The hotel offers every modern convenience.', ru: 'Отель предлагает все современные удобства.' },
      { en: 'I like the convenience of online banking.', ru: 'Мне нравится удобство онлайн-банкинга.' }
    ],
    []
),

createRichWord('b1_convenient', 'Convenient', '/kənˈviː.ni.ənt/', 'кэнвиниэнт', 'Удобный', ProficiencyLevel.B1, 'adj', 'High', 'Neutral',
    'Подходящий для ваших нужд и не вызывающий проблем.',
    '- Время: "Convenient time" (Удобное время)\n- Место: "Convenient location" (Удобное расположение)\n- Использование: "Very convenient" (Очень удобно)',
    [
      { en: 'Is 3 o\'clock a convenient time for you?', ru: 'Вам удобно в 3 часа?' },
      { en: 'It is convenient to have a shop nearby.', ru: 'Удобно иметь магазин поблизости.' },
      { en: 'The bus stop is very convenient for us.', ru: 'Автобусная остановка очень удобна для нас.' },
      { en: 'Living in the city center is convenient.', ru: 'Жить в центре города удобно.' }
    ],
    []
),

createRichWord('b1_costume', 'Costume', '/ˈkɒs.tjuːm/', 'костьюм', 'Костюм (карнавальный)', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Одежда, которую носят, чтобы выглядеть как кто-то другой (на праздник, в театре). Не путать с "Suit" (деловой костюм).',
    '- Праздник: "Halloween costume" (Костюм на Хэллоуин)\n- Театр: "Period costume" (Исторический костюм)\n- Мероприятие: "Costume party" (Костюмированная вечеринка)',
    [
      { en: 'She wore a pirate costume to the party.', ru: 'Она надела костюм пирата на вечеринку.' },
      { en: 'The actors were in traditional costumes.', ru: 'Актеры были в традиционных костюмах.' },
      { en: 'I need to make a costume for the school play.', ru: 'Мне нужно сделать костюм для школьной пьесы.' },
      { en: 'What is your costume going to be?', ru: 'Какой у тебя будет костюм?' }
    ],
    []
),

createRichWord('b1_couch', 'Couch', '/kaʊtʃ/', 'кауч', 'Диван', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Удобный предмет мебели для сидения нескольких человек; то же, что и "sofa".',
    '- Мебель: "Sit on the couch" (Сидеть на диване)\n- Лень: "Couch potato" (Лежебока / Любитель смотреть ТВ)\n- Дом: "Sleep on the couch" (Спать на диване)',
    [
      { en: 'He fell asleep on the couch watching TV.', ru: 'Он уснул на диване за просмотром телевизора.' },
      { en: 'We need a new couch for the living room.', ru: 'Нам нужен новый диван в гостиную.' },
      { en: 'Don\'t be such a couch potato!', ru: 'Не будь таким лежебокой!' },
      { en: 'The dog is not allowed on the couch.', ru: 'Собаке нельзя на диван.' }
    ],
    [
        { meaning: "Express in words (verb)", translation: "Формулировать / Выражать", example: { en: "The warning was couched in vague terms.", ru: "Предупреждение было сформулировано туманно." } }
    ]
),

createRichWord('b1_deaf', 'Deaf', '/def/', 'деф', 'Глухой', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Неспособный слышать полностью или частично.',
    '- Здоровье: "Go deaf" (Оглохнуть)\n- Люди: "The deaf community" (Сообщество глухих)\n- Идиома: "Turn a deaf ear" (Пропустить мимо ушей)',
    [
      { en: 'He has been deaf since birth.', ru: 'Он глухой с рождения.' },
      { en: 'She is partially deaf in one ear.', ru: 'Она частично не слышит одним ухом.' },
      { en: 'They communicate using sign language because they are deaf.', ru: 'Они общаются на языке жестов, потому что они глухие.' },
      { en: 'The music was deafeningly loud.', ru: 'Музыка была оглушительно громкой.' }
    ],
    [
         { meaning: "Unwilling to listen", translation: "Глух (к просьбам)", example: { en: "He was deaf to our pleas.", ru: "Он был глух к нашим мольбам." } }
    ]
  ),
createRichWord('b1_cement', 'Cement', '/sɪˈment/', 'симэнт', 'Цемент / Цементировать', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Серый порошок, который становится твердым как камень при смешивании с водой и песком; клей.',
    '- Строительство: "Wet cement" (Мокрый цемент)\n- Отношения: "Cement a friendship" (Укрепить дружбу)\n- Материал: "Cement floor" (Цементный пол)',
    [
        { en: 'The workers mixed cement to build the new wall.', ru: 'Рабочие смешали цемент, чтобы построить новую стену.' },
        { en: 'Be careful not to step in the wet cement.', ru: 'Осторожно, не наступите в мокрый цемент.' },
        { en: 'This agreement will help cement our business relationship.', ru: 'Это соглашение поможет укрепить наши деловые отношения.' },
        { en: 'They covered the driveway with a layer of cement.', ru: 'Они покрыли подъездную дорожку слоем цемента.' }
    ],
    [
        { meaning: "Glue", translation: "Клей (специальный)", example: { en: "Use model cement to fix the plane.", ru: "Используй клей для моделей, чтобы починить самолет." } },
        { meaning: "To strengthen", translation: "Скреплять / Упрочивать", example: { en: "The victory cemented his reputation.", ru: "Победа упрочила его репутацию." } }
    ]
),

createRichWord('b1_chalk', 'Chalk', '/tʃɔːk/', 'чок', 'Мел', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Мягкий белый камень, используемый для письма на досках или рисования на асфальте.',
    '- Школа: "Piece of chalk" (Кусок мела)\n- Искусство: "Draw with chalk" (Рисовать мелом)\n- Геология: "Chalk cliffs" (Меловые скалы)',
    [
        { en: 'The teacher wrote the answer on the board with chalk.', ru: 'Учитель написал ответ на доске мелом.' },
        { en: 'Children love drawing with coloured chalk on the pavement.', ru: 'Дети обожают рисовать цветным мелом на тротуаре.' },
        { en: 'My hands were covered in chalk dust after the lesson.', ru: 'После урока мои руки были покрыты меловой пылью.' },
        { en: 'The white cliffs of Dover are made of chalk.', ru: 'Белые скалы Дувра состоят из мела.' }
    ],
    [
        { meaning: "To credit/attribute", translation: "Приписывать (фраг. гл. chalk up)", example: { en: "Let's chalk it up to experience.", ru: "Спишем это на опыт." } }
    ]
),

createRichWord('b1_chimney', 'Chimney', '/ˈtʃɪmni/', 'чимни', 'Дымоход / Труба', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Вертикальная труба, которая отводит дым и газы от огня из здания наружу.',
    '- Дом: "Smoke from the chimney" (Дым из трубы)\n- Очистка: "Chimney sweep" (Трубочист)\n- Конструкция: "Brick chimney" (Кирпичный дымоход)',
    [
        { en: 'Thick black smoke rose from the factory chimney.', ru: 'Густой черный дым поднимался из заводской трубы.' },
        { en: 'We need to get the chimney cleaned before winter.', ru: 'Нам нужно прочистить дымоход до наступления зимы.' },
        { en: 'Santa Claus comes down the chimney on Christmas Eve.', ru: 'Санта-Клаус спускается по дымоходу в канун Рождества.' },
        { en: 'The old cottage had a crooked brick chimney.', ru: 'У старого коттеджа была покосившаяся кирпичная труба.' }
    ],
    [
        { meaning: "Narrow crack in rock", translation: "Расщелина (в скале)", example: { en: "Climbers went up the chimney.", ru: "Альпинисты поднялись по расщелине." } }
    ]
),

createRichWord('b1_cigar', 'Cigar', '/sɪˈɡɑːr/', 'сига', 'Сигара', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Толстая трубка из табачных листьев для курения, обычно дороже и больше сигареты.',
    '- Курение: "Smoke a cigar" (Курить сигару)\n- Бренд: "Cuban cigar" (Кубинская сигара)\n- Привычка: "Light a cigar" (Зажечь сигару)',
    [
        { en: 'He sat in his armchair smoking a large cigar.', ru: 'Он сидел в кресле, куря большую сигару.' },
        { en: 'Cuban cigars are famous all over the world.', ru: 'Кубинские сигары знамениты во всем мире.' },
        { en: 'The smell of cigar smoke lingered in the room.', ru: 'Запах сигарного дыма задержался в комнате.' },
        { en: 'He offered his guest a cigar after dinner.', ru: 'После ужина он предложил гостю сигару.' }
    ],
    []
),

createRichWord('b1_clap', 'Clap', '/klæp/', 'клэп', 'Хлопать / Аплодировать', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Ударять ладонями друг о друга, чтобы издать звук, обычно чтобы показать одобрение.',
    '- Одобрение: "Clap your hands" (Хлопать в ладоши)\n- Звук: "Clap of thunder" (Раскат грома)\n- Действие: "Everybody clapped" (Все зааплодировали)',
    [
        { en: 'The audience started to clap when the music finished.', ru: 'Зрители начали аплодировать, когда музыка закончилась.' },
        { en: 'If you are happy and you know it, clap your hands.', ru: 'Если ты счастлив и знаешь это, хлопай в ладоши.' },
        { en: 'Suddenly, there was a loud clap of thunder.', ru: 'Внезапно раздался громкий раскат грома.' },
        { en: 'He clapped his friend on the back affectionately.', ru: 'Он дружески похлопал своего друга по спине.' }
    ],
    [
        { meaning: "Put quickly", translation: "Быстро положить/надеть", example: { en: "She clapped a hat on her head.", ru: "Она нахлобучила шляпу на голову." } }
    ]
),

createRichWord('b1_cock', 'Cock', '/kɒk/', 'кок', 'Петух / Курок', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Взрослый самец курицы (петух); механизм в оружии, который взводят перед выстрелом.',
    '- Животные: "Cock crowing" (Кукареканье петуха)\n- Оружие: "Cock the gun" (Взвести курок)\n- Идиома: "Cock and bull story" (Небылица)',
    [
        { en: 'The cock crows every morning at dawn.', ru: 'Петух кукарекает каждое утро на рассвете.' },
        { en: 'He pulled back the cock of the pistol.', ru: 'Он оттянул назад курок пистолета.' },
        { en: 'Don\'t tell me that cock and bull story again.', ru: 'Не рассказывай мне снова эти небылицы.' },
        { en: 'The dog cocked its head to the side, listening.', ru: 'Собака наклонила голову набок, прислушиваясь.' }
    ],
    [
        { meaning: "Tilt", translation: "Наклонять (голову/ухо)", example: { en: "He cocked an ear to the door.", ru: "Он приложил ухо к двери." } },
        { meaning: "Valve", translation: "Кран / Вентиль", example: { en: "Turn the stop-cock to shut off water.", ru: "Поверните запорный кран, чтобы перекрыть воду." } },
        { meaning: "Vulgar slang", translation: "Член (груб.)", example: { en: "Avoid using this word in formal contexts.", ru: "Избегайте использования этого слова в формальном контексте." } }
    ]
),

createRichWord('b1_cocktail', 'Cocktail', '/ˈkɒkteɪl/', 'коктейл', 'Коктейль', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Напиток, приготовленный путем смешивания разных жидкостей (обычно алкогольных); смесь чего-либо.',
    '- Вечеринка: "Cocktail party" (Коктейльная вечеринка)\n- Меню: "Fruit cocktail" (Фруктовый салат/коктейль)\n- Метафора: "Cocktail of emotions" (Смесь эмоций)',
    [
        { en: 'We ordered a delicious tropical cocktail at the bar.', ru: 'Мы заказали в баре вкусный тропический коктейль.' },
        { en: 'She wore a black dress to the cocktail party.', ru: 'Она надела черное платье на коктейльную вечеринку.' },
        { en: 'The drug is a cocktail of different chemicals.', ru: 'Это лекарство представляет собой смесь различных химикатов.' },
        { en: 'Molotov cocktail was used during the riots.', ru: 'Во время беспорядков использовался коктейль Молотова.' }
    ],
    [
        { meaning: "Mixture", translation: "Смесь / Винегрет", example: { en: "A cocktail of drugs.", ru: "Смесь наркотиков." } }
    ]
),

createRichWord('b1_coke', 'Coke', '/kəʊk/', 'коук', 'Кола / Кокс (топливо)', ProficiencyLevel.B1, 'noun', 'High', 'Informal',
    'Популярный газированный напиток (сокр. от Coca-Cola); твердое топливо из угля.',
    '- Напиток: "Can of Coke" (Банка колы)\n- Заказ: "Diet Coke" (Диетическая кола)\n- Топливо: "Burn coke" (Сжигать кокс)',
    [
        { en: 'I\'ll have a burger and a Coke, please.', ru: 'Мне бургер и колу, пожалуйста.' },
        { en: 'Do you prefer Pepsi or Coke?', ru: 'Ты предпочитаешь Пепси или Колу?' },
        { en: 'The factory uses coke to heat the furnaces.', ru: 'Завод использует кокс для нагрева печей.' },
        { en: 'Too much Coke is bad for your teeth.', ru: 'Слишком много колы вредно для твоих зубов.' }
    ],
    [
        { meaning: "Cocaine", translation: "Кокаин (сленг)", example: { en: "He was arrested for selling coke.", ru: "Его арестовали за продажу кокса." } }
    ]
),

createRichWord('b1_compliment', 'Compliment', '/ˈkɒmplɪmənt/', 'комплимэнт', 'Комплимент / Хвалить', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Вежливое замечание, выражающее похвалу или восхищение.',
    '- Общение: "Pay a compliment" (Сделать комплимент)\n- Реакция: "Take it as a compliment" (Принять как комплимент)\n- Приветствие: "Compliments of the chef" (Комплимент от шеф-повара)',
    [
        { en: 'He paid her a lovely compliment on her new dress.', ru: 'Он сделал ей милый комплимент по поводу её нового платья.' },
        { en: 'I take it as a compliment that you copied my work.', ru: 'Я воспринимаю как комплимент то, что ты скопировал мою работу.' },
        { en: 'Please give my compliments to your parents.', ru: 'Пожалуйста, передай мои приветствия своим родителям.' },
        { en: 'She fished for compliments about her cooking.', ru: 'Она напрашивалась на комплименты о своей стряпне.' }
    ],
    [
        { meaning: "To praise", translation: "Хвалить (verb)", example: { en: "I must compliment you on your success.", ru: "Я должен поздравить вас с успехом." } }
    ]
),

createRichWord('b1_condom', 'Condom', '/ˈkɒndɒm/', 'кондом', 'Презерватив', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Средство контрацепции в виде тонкой резиновой оболочки.',
    '- Здоровье: "Use a condom" (Использовать презерватив)\n- Покупка: "Box of condoms" (Коробка презервативов)\n- Безопасность: "Condom effectiveness" (Эффективность презерватива)',
    [
        { en: 'Using a condom prevents unwanted pregnancy.', ru: 'Использование презерватива предотвращает нежелательную беременность.' },
        { en: 'You can buy condoms at the pharmacy or supermarket.', ru: 'Вы можете купить презервативы в аптеке или супермаркете.' },
        { en: 'They launched a campaign promoting condom use.', ru: 'Они запустили кампанию по пропаганде использования презервативов.' },
        { en: 'It is important to check the expiry date on the condom.', ru: 'Важно проверять срок годности на презервативе.' }
    ],
    []
),

createRichWord('b1_cone', 'Cone', '/kəʊn/', 'коун', 'Конус / Рожок', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Геометрическая форма с круглым основанием и острой вершиной; вафельный стаканчик для мороженого.',
    '- Еда: "Ice cream cone" (Рожок мороженого)\n- Дорога: "Traffic cone" (Дорожный конус)\n- Природа: "Pine cone" (Сосновая шишка)',
    [
        { en: 'I dropped my ice cream cone on the ground.', ru: 'Я уронил свой рожок с мороженым на землю.' },
        { en: 'Workmen put orange traffic cones around the hole.', ru: 'Рабочие расставили оранжевые конусы вокруг ямы.' },
        { en: 'We collected pine cones in the forest for decoration.', ru: 'Мы собирали сосновые шишки в лесу для украшения.' },
        { en: 'The volcano has a perfect cone shape.', ru: 'У вулкана идеальная конусообразная форма.' }
    ],
    [
        { meaning: "Part of eye", translation: "Колбочка (в глазу)", example: { en: "Rods and cones help us see.", ru: "Палочки и колбочки помогают нам видеть." } }
    ]
  ),
createRichWord('b1_coral', 'Coral', '/ˈkɒrəl/', 'корэл', 'Коралл', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Твердое вещество (обычно розовое или красное), образованное скелетами крошечных морских животных.',
    '- Море: "Coral reef" (Коралловый риф)\n- Цвет: "Coral pink" (Кораллово-розовый)\n- Украшение: "Coral necklace" (Коралловое ожерелье)',
    [
        { en: 'We went snorkelling to see the beautiful coral reef.', ru: 'Мы плавали с трубкой, чтобы увидеть красивый коралловый риф.' },
        { en: 'Coral reefs are in danger due to climate change.', ru: 'Коралловые рифы находятся в опасности из-за изменения климата.' },
        { en: 'She wore a necklace made of red coral.', ru: 'На ней было ожерелье из красного коралла.' },
        { en: 'The sharp coral cut his foot while swimming.', ru: 'Острый коралл порезал ему ногу во время купания.' }
    ],
    []
),

createRichWord('b1_cosmetic', 'Cosmetic', '/kɒzˈmetɪk/', 'козмэтик', 'Косметический', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Связанный с улучшением внешнего вида кожи, волос и т.д.; поверхностный.',
    '- Красота: "Cosmetic surgery" (Пластическая хирургия)\n- Продукт: "Cosmetic products" (Косметические продукты)\n- Изменение: "Cosmetic changes" (Косметические изменения)',
    [
        { en: 'The company sells a wide range of cosmetic products.', ru: 'Компания продает широкий ассортимент косметических продуктов.' },
        { en: 'She underwent cosmetic surgery to change her nose.', ru: 'Она перенесла пластическую операцию, чтобы изменить нос.' },
        { en: 'The changes to the report were purely cosmetic.', ru: 'Изменения в отчете были чисто косметическими (незначительными).' },
        { en: 'Animal testing for cosmetic purposes is banned here.', ru: 'Тестирование на животных в косметических целях здесь запрещено.' }
    ],
    [
        { meaning: "Cosmetics (noun)", translation: "Косметика", example: { en: "She spends a lot on cosmetics.", ru: "Она тратит много на косметику." } }
    ]
),

createRichWord('b1_cosy', 'Cosy', '/ˈkəʊzi/', 'кэузи', 'Уютный', ProficiencyLevel.B1, 'adj', 'High', 'Neutral',
    'Теплый, комфортный и безопасный (о месте или чувстве).',
    '- Дом: "Cosy room" (Уютная комната)\n- Атмосфера: "Feel cosy" (Чувствовать уют)\n- Отношения: "Cosy chat" (Уютная беседа)',
    [
        { en: 'We sat by the fire in the cosy living room.', ru: 'Мы сидели у огня в уютной гостиной.' },
        { en: 'The cat looked very cosy sleeping on the rug.', ru: 'Кот выглядел очень уютно, спя на коврике.' },
        { en: 'It\'s nice and cosy in here out of the rain.', ru: 'Здесь приятно и уютно, вдали от дождя.' },
        { en: 'I prefer small, cosy cafes to big restaurants.', ru: 'Я предпочитаю маленькие уютные кафе большим ресторанам.' }
    ],
    []
),

createRichWord('b1_courtyard', 'Courtyard', '/ˈkɔːtjɑːd/', 'котяд', 'Внутренний дворик', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Открытое пространство, окруженное стенами или зданиями, обычно внутри замка или большого дома.',
    '- Отель: "Hotel courtyard" (Двор отеля)\n- Замок: "Castle courtyard" (Внутренний двор замка)\n- Вид: "View of the courtyard" (Вид на дворик)',
    [
        { en: 'The hotel rooms overlook a beautiful central courtyard.', ru: 'Окна отеля выходят на красивый центральный дворик.' },
        { en: 'Guests can enjoy their breakfast in the sunny courtyard.', ru: 'Гости могут насладиться завтраком в солнечном дворике.' },
        { en: 'We entered the castle through the main courtyard.', ru: 'Мы вошли в замок через главный двор.' },
        { en: 'A fountain stood in the middle of the courtyard.', ru: 'Посреди двора стоял фонтан.' }
    ],
    []
),

createRichWord('b1_creek', 'Creek', '/kriːk/', 'крик', 'Ручей / Бухта', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Узкий поток воды (меньше реки); узкий залив.',
    '- Природа: "Small creek" (Маленький ручей)\n- Место: "Up the creek" (В затруднительном положении)\n- География: "Sandy creek" (Песчаная бухта)',
    [
        { en: 'We went fishing in the creek behind our house.', ru: 'Мы ходили на рыбалку на ручей за нашим домом.' },
        { en: 'The children played by the shallow creek all afternoon.', ru: 'Дети играли у мелкого ручья весь день.' },
        { en: 'The bridge over the creek was washed away.', ru: 'Мост через ручей смыло.' },
        { en: 'If we miss the bus, we\'ll be up the creek.', ru: 'Если мы опоздаем на автобус, у нас будут неприятности.' }
    ],
    []
),

createRichWord('b1_cricket', 'Cricket', '/ˈkrɪkɪt/', 'крикит', 'Крикет / Сверчок', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Командная игра с битой и мячом, популярная в Англии; насекомое, издающее звуки трением крыльев.',
    '- Спорт: "Play cricket" (Играть в крикет)\n- Насекомое: "Chirping cricket" (Стрекочущий сверчок)\n- Идиома: "Not cricket" (Нечестно)',
    [
        { en: 'Cricket is the most popular summer sport in England.', ru: 'Крикет — самый популярный летний вид спорта в Англии.' },
        { en: 'We could hear a cricket chirping in the grass.', ru: 'Мы слышали, как в траве стрекочет сверчок.' },
        { en: 'The match was stopped because of the rain.', ru: 'Матч по крикету остановили из-за дождя.' },
        { en: 'Cheating in the exam is just not cricket.', ru: 'Списывать на экзамене — это просто нечестно.' }
    ],
    []
),

createRichWord('b1_cub', 'Cub', '/kʌb/', 'каб', 'Детеныш (зверя)', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Детеныш хищного животного (льва, медведя, лисы и т.д.); новичок.',
    '- Животные: "Lion cub" (Львенок)\n- Медведи: "Bear cub" (Медвежонок)\n- Скауты: "Cub Scout" (Юный скаут/бойскаут)',
    [
        { en: 'The mother bear protected her cubs fiercely.', ru: 'Медведица яростно защищала своих медвежат.' },
        { en: 'We saw a tiger cub at the zoo yesterday.', ru: 'Вчера в зоопарке мы видели тигренка.' },
        { en: 'The lioness was feeding her three cubs.', ru: 'Львица кормила трех своих львят.' },
        { en: 'He joined the Cub Scouts when he was eight.', ru: 'Он вступил в отряд бойскаутов, когда ему было восемь.' }
    ],
    []
),

createRichWord('b1_cue', 'Cue', '/kjuː/', 'кью', 'Сигнал / Кий', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Сигнал актеру или кому-то еще начать говорить или делать что-то; палка для бильярда.',
    '- Театр: "Give a cue" (Дать сигнал)\n- Действие: "Take a cue from" (Взять пример с)\n- Игра: "Pool cue" (Бильярдный кий)',
    [
        { en: 'Wait for my cue before you walk onto the stage.', ru: 'Жди моего сигнала, прежде чем выходить на сцену.' },
        { en: 'I missed my cue and the audience laughed.', ru: 'Я пропустил свой сигнал, и зрители засмеялись.' },
        { en: 'She chalked her cue before taking the shot.', ru: 'Она натерла кий мелом перед ударом.' },
        { en: 'Take a cue from him and work harder.', ru: 'Бери с него пример и работай усерднее.' }
    ],
    []
),

createRichWord('b1_cushion', 'Cushion', '/ˈkʊʃn/', 'кушн', 'Подушка (диванная) / Смягчать', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Мягкая подушка, используемая для сидения или опоры (не для сна); что-то, что смягчает удар.',
    '- Мебель: "Sofa cushion" (Диванная подушка)\n- Защита: "Air cushion" (Воздушная подушка)\n- Действие: "Cushion the blow" (Смягчить удар)',
    [
        { en: 'She put a cushion behind her back for comfort.', ru: 'Она положила подушку за спину для удобства.' },
        { en: 'The sofa came with colourful matching cushions.', ru: 'Диван поставлялся с разноцветными подушками в тон.' },
        { en: 'His savings acted as a cushion against unemployment.', ru: 'Его сбережения послужили подушкой безопасности на случай безработицы.' },
        { en: 'Thick snow cushioned his fall from the tree.', ru: 'Глубокий снег смягчил его падение с дерева.' }
    ],
    [
        { meaning: "To soften effect", translation: "Смягчать (последствия)", example: { en: "Subsidies cushioned the price rise.", ru: "Субсидии смягчили рост цен." } }
    ]
),

createRichWord('b1_dairy', 'Dairy', '/ˈdeəri/', 'дэри', 'Молочный', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Связанный с молоком и продуктами из него (масло, сыр); магазин или ферма, производящая молоко.',
    '- Еда: "Dairy products" (Молочные продукты)\n- Здоровье: "Dairy allergy" (Аллергия на молочное)\n- Ферма: "Dairy farm" (Молочная ферма)',
    [
        { en: 'I am trying to cut down on dairy products.', ru: 'Я стараюсь сократить потребление молочных продуктов.' },
        { en: 'Check the label if you are allergic to dairy.', ru: 'Проверьте этикетку, если у вас аллергия на молочное.' },
        { en: 'My uncle owns a large dairy farm in the country.', ru: 'Мой дядя владеет большой молочной фермой в деревне.' },
        { en: 'Cheese and yogurt are popular dairy foods.', ru: 'Сыр и йогурт — популярные молочные продукты.' }
    ],
    []
),

createRichWord('b1_deed', 'Deed', '/diːd/', 'дид', 'Поступок / Деяние', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Намеренное действие, особенно очень хорошее или очень плохое; официальный документ.',
    '- Мораль: "Good deed" (Добрый поступок)\n- Выражение: "Words and deeds" (Слова и дела)\n- Право: "Title deed" (Документ о праве собственности)',
    [
        { en: 'He is famous for his brave deeds during the war.', ru: 'Он известен своими смелыми поступками во время войны.' },
        { en: 'A boy scout should do a good deed every day.', ru: 'Бойскаут должен совершать добрый поступок каждый день.' },
        { en: 'You will be judged by your deeds, not your words.', ru: 'Тебя будут судить по твоим делам, а не по словам.' },
        { en: 'I keep the title deeds to my house in a safe.', ru: 'Я храню документы на дом в сейфе.' }
    ],
    []
),

createRichWord('b1_delete', 'Delete', '/dɪˈliːt/', 'дилит', 'Удалять', ProficiencyLevel.B1, 'verb', 'High', 'Neutral',
    'Убирать или стирать что-то (особенно написанное или хранящееся в компьютере).',
    '- Компьютер: "Delete a file" (Удалить файл)\n- Текст: "Delete a word" (Удалить слово)\n- Действие: "Accidentally deleted" (Случайно удалил)',
    [
        { en: 'I accidentally deleted the email before reading it.', ru: 'Я случайно удалил письмо, не прочитав его.' },
        { en: 'You can delete unwanted photos to save space.', ru: 'Ты можешь удалить ненужные фото, чтобы сэкономить место.' },
        { en: 'His name was deleted from the list of members.', ru: 'Его имя было удалено из списка участников.' },
        { en: 'Press this button to delete the selected text.', ru: 'Нажми эту кнопку, чтобы удалить выделенный текст.' }
    ],
    []
),

createRichWord('b1_demon', 'Demon', '/ˈdiːmən/', 'димэн', 'Демон', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Злой дух; человек, который делает что-то с огромной энергией или мастерством.',
    '- Мифология: "Evil demon" (Злой демон)\n- Личность: "Inner demons" (Внутренние демоны)\n- Сленг: "Speed demon" (Лихач/Гонщик)',
    [
        { en: 'In the story, the hero fights a powerful demon.', ru: 'В рассказе герой сражается с могущественным демоном.' },
        { en: 'He had to battle his own inner demons to succeed.', ru: 'Ему пришлось сразиться со своими внутренними демонами, чтобы преуспеть.' },
        { en: 'She worked like a demon to finish the project on time.', ru: 'Она работала как проклятая (очень усердно), чтобы закончить проект вовремя.' },
        { en: 'Stories about demons are scary for children.', ru: 'Истории о демонах пугают детей.' }
    ],
    []
),

createRichWord('b1_dice', 'Dice', '/daɪs/', 'дайс', 'Игральные кости / Нарезать кубиками', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Маленький куб с точками (1-6) на каждой стороне, используемый в играх; нарезка еды кубиками.',
    '- Игра: "Roll the dice" (Бросить кости)\n- Кулинария: "Dice carrots" (Нарезать морковь кубиками)\n- Риск: "No dice" (Без шансов/Не выйдет)',
    [
        { en: 'It is your turn to roll the dice.', ru: 'Твоя очередь бросать кости.' },
        { en: 'We need two dice to play this board game.', ru: 'Нам нужны два кубика, чтобы играть в эту настольную игру.' },
        { en: 'First, peel and dice the potatoes.', ru: 'Сначала почистите и нарежьте картофель кубиками.' },
        { en: 'I asked for a refund, but no dice.', ru: 'Я попросил возврат денег, но безуспешно.' }
    ],
    []
),

createRichWord('b1_diesel', 'Diesel', '/ˈdiːzl/', 'дизл', 'Дизель', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Тип тяжелого топлива, используемого в грузовиках, поездах и некоторых автомобилях.',
    '- Топливо: "Diesel engine" (Дизельный двигатель)\n- Заправка: "Price of diesel" (Цена на дизель)\n- Транспорт: "Diesel train" (Дизельный поезд)',
    [
        { en: 'Diesel engines are usually more efficient than petrol ones.', ru: 'Дизельные двигатели обычно эффективнее бензиновых.' },
        { en: 'My car runs on diesel, not petrol.', ru: 'Моя машина ездит на дизеле, а не на бензине.' },
        { en: 'The price of diesel has gone up recently.', ru: 'Цена на дизель недавно выросла.' },
        { en: 'Don\'t put diesel in a petrol car by mistake.', ru: 'Не залей по ошибке дизель в бензиновую машину.' }
    ],
    []
  ),
createRichWord('b1_calcium', 'Calcium', '/ˈkælsiəm/', 'кэлсиэм', 'Кальций', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Химический элемент, необходимый для крепких костей и зубов (содержится в молоке, меле).',
    '- Здоровье: "Rich in calcium" (Богат кальцием)\n- Добавка: "Calcium supplement" (Добавка кальция)\n- Дефицит: "Lack of calcium" (Недостаток кальция)',
    [
        { en: 'Milk and cheese are good sources of calcium.', ru: 'Молоко и сыр — хорошие источники кальция.' },
        { en: 'Children need calcium for their growing bones.', ru: 'Детям нужен кальций для растущих костей.' },
        { en: 'The doctor said I have a calcium deficiency.', ru: 'Врач сказал, что у меня дефицит кальция.' },
        { en: 'Calcium builds strong teeth and nails.', ru: 'Кальций укрепляет зубы и ногти.' }
    ],
    []
),

createRichWord('b1_capsule', 'Capsule', '/ˈkæpsjuːl/', 'кэпсьюл', 'Капсула', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Маленький контейнер с лекарством; отсек космического корабля.',
    '- Медицина: "Take a capsule" (Принять капсулу)\n- Космос: "Space capsule" (Космическая капсула)\n- Мода: "Capsule wardrobe" (Базовый гардероб)',
    [
        { en: 'The doctor prescribed two capsules a day.', ru: 'Врач прописал по две капсулы в день.' },
        { en: 'The astronauts returned to Earth in a space capsule.', ru: 'Астронавты вернулись на Землю в космической капсуле.' },
        { en: 'This time capsule will be opened in fifty years.', ru: 'Эту капсулу времени откроют через пятьдесят лет.' },
        { en: 'It is easier to swallow a capsule than a large pill.', ru: 'Легче проглотить капсулу, чем большую таблетку.' }
    ],
    []
),

createRichWord('b1_caption', 'Caption', '/ˈkæpʃn/', 'кэпшн', 'Подпись (под фото) / Титр', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Слова, написанные под картинкой или фотографией, объясняющие её.',
    '- Медиа: "Read the caption" (Прочитать подпись)\n- Действие: "Write a caption" (Написать подпись)\n- Конкурс: "Caption competition" (Конкурс на лучшую подпись)',
    [
        { en: 'The caption under the photo gave the wrong name.', ru: 'В подписи под фото было указано неверное имя.' },
        { en: 'He posted a picture with a funny caption on Instagram.', ru: 'Он выложил фото со смешной подписью в Инстаграм.' },
        { en: 'Please add a caption to explain this diagram.', ru: 'Пожалуйста, добавьте подпись, чтобы объяснить эту диаграмму.' },
        { en: 'Turn on the closed captions if you can\'t hear.', ru: 'Включите скрытые титры, если вы не слышите.' }
    ],
    []
),

createRichWord('b1_carnival', 'Carnival', '/ˈkɑːnɪvl/', 'канивл', 'Карнавал', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Публичный праздник с уличными шествиями, музыкой и танцами.',
    '- Праздник: "Rio Carnival" (Карнавал в Рио)\n- Атмосфера: "Carnival atmosphere" (Атмосфера праздника)\n- Костюм: "Carnival mask" (Карнавальная маска)',
    [
        { en: 'The streets were full of people during the carnival.', ru: 'Во время карнавала улицы были полны людей.' },
        { en: 'We wore colourful costumes to the carnival parade.', ru: 'Мы надели красочные костюмы на карнавальный парад.' },
        { en: 'There is a carnival in the town square every summer.', ru: 'Каждое лето на городской площади проходит карнавал.' },
        { en: 'The carnival procession moved slowly through the city.', ru: 'Карнавальное шествие медленно двигалось по городу.' }
    ],
    []
),

createRichWord('b1_carol', 'Carol', '/ˈkærəl/', 'кэрэл', 'Колядка / Рождественская песня', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Традиционная христианская песня, которую поют на Рождество.',
    '- Праздник: "Christmas carol" (Рождественская колядка)\n- Действие: "Sing carols" (Петь колядки)\n- Традиция: "Carol singers" (Колядующие)',
    [
        { en: 'We sang carols around the Christmas tree.', ru: 'Мы пели колядки вокруг рождественской елки.' },
        { en: 'My favourite carol is "Silent Night".', ru: 'Моя любимая рождественская песня — "Тихая ночь".' },
        { en: 'Carol singers knocked on our door last night.', ru: 'Вчера вечером в нашу дверь постучали колядующие.' },
        { en: 'The choir performed traditional carols at the church.', ru: 'Хор исполнил традиционные песнопения в церкви.' }
    ],
    []
),

createRichWord('b1_casino', 'Casino', '/kəˈsiːnəʊ/', 'кэсинэу', 'Казино', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Общественное место, где люди играют в азартные игры на деньги.',
    '- Развлечение: "Go to a casino" (Пойти в казино)\n- Игра: "Online casino" (Онлайн-казино)\n- Деньги: "Win at the casino" (Выиграть в казино)',
    [
        { en: 'Las Vegas is famous for its huge casinos.', ru: 'Лас-Вегас знаменит своими огромными казино.' },
        { en: 'He lost a lot of money at the casino last weekend.', ru: 'В прошлые выходные он проиграл в казино кучу денег.' },
        { en: 'You must be over 18 to enter the casino.', ru: 'Вам должно быть больше 18 лет, чтобы войти в казино.' },
        { en: 'The casino is open twenty-four hours a day.', ru: 'Казино открыто двадцать четыре часа в сутки.' }
    ],
    []
),

createRichWord('b1_charcoal', 'Charcoal', '/ˈtʃɑːkəʊl/', 'чакоул', 'Древесный уголь', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Черное вещество, полученное путем сжигания дерева; используется для рисования или барбекю.',
    '- Искусство: "Charcoal drawing" (Рисунок углем)\n- Еда: "Charcoal grill" (Угольный гриль)\n- Цвет: "Charcoal grey" (Темно-серый / Угольный)',
    [
        { en: 'The artist used charcoal to sketch the portrait.', ru: 'Художник использовал уголь, чтобы набросать портрет.' },
        { en: 'We need to buy more charcoal for the barbecue.', ru: 'Нам нужно купить еще угля для барбекю.' },
        { en: 'His hands were black from touching the charcoal.', ru: 'Его руки были черными от прикосновения к углю.' },
        { en: 'Activated charcoal is sometimes used in medicine.', ru: 'Активированный уголь иногда используется в медицине.' }
    ],
    []
),

createRichWord('b1_chestnut', 'Chestnut', '/ˈtʃesnʌt/', 'чеснат', 'Каштан / Каштановый', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Гладкий красно-коричневый орех; дерево, на котором он растет; красно-коричневый цвет.',
    '- Еда: "Roast chestnuts" (Жарить каштаны)\n- Дерево: "Horse chestnut" (Конский каштан)\n- Цвет: "Chestnut hair" (Каштановые волосы)',
    [
        { en: 'We bought roasted chestnuts from a street vendor.', ru: 'Мы купили жареные каштаны у уличного торговца.' },
        { en: 'She has beautiful long chestnut hair.', ru: 'У нее красивые длинные каштановые волосы.' },
        { en: 'The path was covered in leaves and chestnuts.', ru: 'Тропинка была усыпана листьями и каштанами.' },
        { en: 'In autumn, we collect chestnuts in the park.', ru: 'Осенью мы собираем каштаны в парке.' }
    ],
    [
        { meaning: "Old joke/story", translation: "Бородатый анекдот", example: { en: "That joke is an old chestnut.", ru: "Этот анекдот — старый баян." } }
    ]
),

createRichWord('b1_chore', 'Chore', '/tʃɔː(r)/', 'чо', 'Рутинная работа / Обязанность', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Скучная, но необходимая работа, которую нужно делать регулярно (обычно по дому).',
    '- Дом: "Household chores" (Домашние дела)\n- Отношение: "Such a chore" (Такая тягомотина)\n- Действие: "Do chores" (Делать работу по дому)',
    [
        { en: 'I have to finish my chores before I can go out.', ru: 'Я должен закончить домашние дела, прежде чем смогу пойти гулять.' },
        { en: 'Washing the dishes is a daily chore.', ru: 'Мытье посуды — это ежедневная обязанность.' },
        { en: 'Shopping for clothes is a real chore for him.', ru: 'Покупка одежды для него — настоящая каторга.' },
        { en: 'The children get pocket money for doing chores.', ru: 'Дети получают карманные деньги за выполнение работы по дому.' }
    ],
    []
),

createRichWord('b1_clumsy', 'Clumsy', '/ˈklʌmzi/', 'кламзи', 'Неуклюжий', ProficiencyLevel.B1, 'adj', 'Medium', 'Neutral',
    'Двигающийся неловко; часто роняющий вещи или ударяющийся обо что-то.',
    '- Движение: "Clumsy attempt" (Неуклюжая попытка)\n- Человек: "Feel clumsy" (Чувствовать себя неловким)\n- Речь: "Clumsy expression" (Неудачное выражение)',
    [
        { en: 'I am so clumsy, I always drop my phone.', ru: 'Я такой неуклюжий, вечно роняю телефон.' },
        { en: 'He made a clumsy attempt to apologize.', ru: 'Он сделал неуклюжую попытку извиниться.' },
        { en: 'The waiter was clumsy and spilled the wine.', ru: 'Официант был неловок и разлил вино.' },
        { en: 'Those big boots make me feel clumsy.', ru: 'Эти большие ботинки заставляют меня чувствовать себя неуклюжим.' }
    ],
    []
),

createRichWord('b1_cockpit', 'Cockpit', '/ˈkɒkpɪt/', 'кокпит', 'Кабина пилота', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Место в самолете или гоночной машине, где сидит пилот/водитель.',
    '- Самолет: "Enter the cockpit" (Войти в кабину)\n- Оборудование: "Cockpit voice recorder" (Речевой самописец)\n- Пилот: "Sit in the cockpit" (Сидеть в кабине)',
    [
        { en: 'The pilot invited the child to see the cockpit.', ru: 'Пилот пригласил ребенка посмотреть кабину.' },
        { en: 'Modern cockpits are full of digital screens.', ru: 'Современные кабины полны цифровых экранов.' },
        { en: 'Only authorized personnel can enter the cockpit.', ru: 'Только авторизованный персонал может входить в кабину.' },
        { en: 'Smoke was reported in the cockpit.', ru: 'Сообщалось о дыме в кабине пилота.' }
    ],
    []
),

createRichWord('b1_collide', 'Collide', '/kəˈlaɪd/', 'кэлайд', 'Сталкиваться', ProficiencyLevel.B1, 'verb', 'Medium', 'Neutral',
    'Сильно ударяться друг о друга (о движущихся объектах); иметь конфликт мнений.',
    '- Авария: "Cars collide" (Машины сталкиваются)\n- Мнения: "Worlds collide" (Миры сталкиваются)\n- Космос: "Planets collide" (Планеты сталкиваются)',
    [
        { en: 'Two trains collided on the same track.', ru: 'Два поезда столкнулись на одном пути.' },
        { en: 'The car collided with a bus at the junction.', ru: 'Машина столкнулась с автобусом на перекрестке.' },
        { en: 'Our schedules collide, so we can\'t meet.', ru: 'Наши расписания накладываются (конфликтуют), поэтому мы не можем встретиться.' },
        { en: 'He collided with a waiter carrying a tray.', ru: 'Он налетел на официанта, несущего поднос.' }
    ],
    []
),

createRichWord('b1_colon', 'Colon', '/ˈkəʊlən/', 'кэулэн', 'Двоеточие / Толстая кишка', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Знак препинания (:); нижняя часть кишечника.',
    '- Грамматика: "Use a colon" (Использовать двоеточие)\n- Анатомия: "Colon cancer" (Рак толстой кишки)\n- Текст: "Semi-colon" (Точка с запятой)',
    [
        { en: 'Use a colon to introduce a list of items.', ru: 'Используйте двоеточие, чтобы ввести список элементов.' },
        { en: 'The time is displayed with a colon, like 12:30.', ru: 'Время отображается с двоеточием, например 12:30.' },
        { en: 'He had surgery to remove part of his colon.', ru: 'Ему сделали операцию по удалению части толстой кишки.' },
        { en: 'A colon signals that an explanation follows.', ru: 'Двоеточие сигнализирует о том, что далее следует объяснение.' }
    ],
    []
  ),
createRichWord('b1_comet', 'Comet', '/ˈkɒmɪt/', 'комит', 'Комета', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Объект в космосе, похожий на яркую звезду с хвостом, движущийся вокруг Солнца.',
    '- Космос: "Halley\'s Comet" (Комета Галлея)\n- Наблюдение: "See a comet" (Увидеть комету)\n- Астрономия: "Comet tail" (Хвост кометы)',
    [
        { en: 'Astronomers are watching a new comet approach Earth.', ru: 'Астрономы наблюдают за новой кометой, приближающейся к Земле.' },
        { en: 'A comet consists mostly of ice and dust.', ru: 'Комета состоит в основном из льда и пыли.' },
        { en: 'Halley\'s Comet appears every 76 years.', ru: 'Комета Галлея появляется каждые 76 лет.' },
        { en: 'The comet left a bright trail across the night sky.', ru: 'Комета оставила яркий след в ночном небе.' }
    ],
    []
),

createRichWord('b1_compass', 'Compass', '/ˈkʌmpəs/', 'кампэс', 'Компас', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Инструмент для определения направления с магнитной стрелкой, указывающей на север.',
    '- Навигация: "Magnetic compass" (Магнитный компас)\n- Ориентация: "Points of the compass" (Стороны света)\n- Школа: "Pair of compasses" (Циркуль - брит.)',
    [
        { en: 'We used a compass to find our way through the forest.', ru: 'Мы использовали компас, чтобы найти дорогу через лес.' },
        { en: 'The needle of the compass always points north.', ru: 'Стрелка компаса всегда указывает на север.' },
        { en: 'Without a map and compass, we were lost.', ru: 'Без карты и компаса мы заблудились.' },
        { en: 'Use a compass to draw a perfect circle.', ru: 'Используйте циркуль, чтобы нарисовать идеальный круг.' }
    ],
    [
        { meaning: "Range/Scope", translation: "Диапазон / Охват", example: { en: "The compass of his voice.", ru: "Диапазон его голоса." } }
    ]
),

createRichWord('b1_coupon', 'Coupon', '/ˈkuːpɒn/', 'купон', 'Купон', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Листок бумаги или цифровой код, дающий право на скидку при покупке товара.',
    '- Покупки: "Discount coupon" (Скидочный купон)\n- Действие: "Use a coupon" (Использовать купон)\n- Газета: "Cut out coupons" (Вырезать купоны)',
    [
        { en: 'I have a coupon for 20% off at that store.', ru: 'У меня есть купон на скидку 20% в этом магазине.' },
        { en: 'She collects coupons from the newspaper every week.', ru: 'Она собирает купоны из газеты каждую неделю.' },
        { en: 'Enter the coupon code at checkout to save money.', ru: 'Введите код купона при оформлении заказа, чтобы сэкономить.' },
        { en: 'This coupon is only valid until Friday.', ru: 'Этот купон действителен только до пятницы.' }
    ],
    []
),

createRichWord('b1_crow', 'Crow', '/krəʊ/', 'крэу', 'Ворона', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Крупная черная птица с громким криком.',
    '- Птица: "Black crow" (Черная ворона)\n- Идиома: "As the crow flies" (По прямой)\n- Звук: "Crow cawing" (Карканье вороны)',
    [
        { en: 'A large black crow sat on the fence.', ru: 'Большая черная ворона сидела на заборе.' },
        { en: 'Farmers often put up scarecrows to frighten crows away.', ru: 'Фермеры часто ставят пугала, чтобы отпугивать ворон.' },
        { en: 'It is five miles to the town as the crow flies.', ru: 'До города пять миль по прямой.' },
        { en: 'Crows are known to be very intelligent birds.', ru: 'Известно, что вороны — очень умные птицы.' }
    ],
    [
        { meaning: "To boast", translation: "Хвастаться (злорадно)", example: { en: "Don't crow about your victory.", ru: "Не кичись своей победой." } }
    ]
),

createRichWord('b1_curry', 'Curry', '/ˈkʌri/', 'кари', 'Карри', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Блюдо из мяса или овощей, приготовленное в остром соусе со специями (обычно индийское).',
    '- Еда: "Chicken curry" (Куриное карри)\n- Вкус: "Hot curry" (Острое карри)\n- Приправа: "Curry powder" (Порошок карри)',
    [
        { en: 'We went to an Indian restaurant to eat curry.', ru: 'Мы пошли в индийский ресторан, чтобы поесть карри.' },
        { en: 'Do you prefer mild or spicy curry?', ru: 'Ты предпочитаешь мягкое или острое карри?' },
        { en: 'She made a delicious vegetable curry for dinner.', ru: 'Она приготовила вкусное овощное карри на ужин.' },
        { en: 'The smell of curry filled the kitchen.', ru: 'Запах карри наполнил кухню.' }
    ],
    [
        { meaning: "To groom (horse)", translation: "Чистить (лошадь)", example: { en: "He curried the horse.", ru: "Он чистил лошадь скребницей." } }
    ]
  ),
createRichWord('b1_canyon', 'Canyon', '/ˈkænjən/', 'кэньэн', 'Каньон / Ущелье', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Глубокая долина с очень крутыми склонами, обычно с рекой, протекающей по дну.',
    '- География: "Grand Canyon" (Гранд-Каньон)\n- Природа: "Deep canyon" (Глубокий каньон)\n- Туризм: "Hike in a canyon" (Поход по каньону)',
    [
        { en: 'The Grand Canyon is one of the most famous landmarks in the USA.', ru: 'Гранд-Каньон — одна из самых известных достопримечательностей США.' },
        { en: 'A river flows at the bottom of the canyon.', ru: 'По дну каньона протекает река.' },
        { en: 'We took a helicopter tour over the canyon.', ru: 'Мы совершили вертолетную экскурсию над каньоном.' },
        { en: 'The canyon walls are made of red rock.', ru: 'Стены каньона состоят из красной породы.' }
    ],
    [
        { meaning: "Deep gap (metaphor)", translation: "Пропасть (между людьми)", example: { en: "A canyon of misunderstanding.", ru: "Пропасть непонимания." } }
    ]
),

createRichWord('b1_carton', 'Carton', '/ˈkɑːtn/', 'катн', 'Картонная коробка / Пакет', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Легкая коробка или контейнер (обычно для жидкостей или еды), сделанная из картона или пластика.',
    '- Еда: "Carton of milk" (Пакет молока)\n- Напитки: "Juice carton" (Пакет сока)\n- Яйца: "Egg carton" (Упаковка для яиц)',
    [
        { en: 'Please buy a carton of milk on your way home.', ru: 'Пожалуйста, купи пакет молока по дороге домой.' },
        { en: 'She drank the juice straight from the carton.', ru: 'Она пила сок прямо из пакета.' },
        { en: 'Don\'t throw the empty carton in the bin, recycle it.', ru: 'Не выбрасывай пустую коробку в мусор, сдай её на переработку.' },
        { en: 'He ate a whole carton of ice cream while watching TV.', ru: 'Он съел целую коробку мороженого, пока смотрел телевизор.' }
    ],
    []
),

createRichWord('b1_casserole', 'Casserole', '/ˈkæsərəʊl/', 'кэсэрэул', 'Запеканка / Кастрюля', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Блюдо из мяса и овощей, приготовленное медленно в духовке; тяжелая посуда с крышкой для такого блюда.',
    '- Еда: "Chicken casserole" (Куриная запеканка/рагу)\n- Посуда: "Casserole dish" (Форма для запекания)\n- Кулинария: "Cook a casserole" (Готовить запеканку)',
    [
        { en: 'We had a delicious beef casserole for dinner.', ru: 'На ужин у нас была вкусная говяжья запеканка.' },
        { en: 'Put the casserole in the oven for two hours.', ru: 'Поставьте форму для запекания в духовку на два часа.' },
        { en: 'Usually, a casserole contains meat, vegetables, and sauce.', ru: 'Обычно запеканка содержит мясо, овощи и соус.' },
        { en: 'This heavy pot is perfect for making casseroles.', ru: 'Эта тяжелая кастрюля идеально подходит для приготовления рагу.' }
    ],
    []
),

createRichWord('b1_caterpillar', 'Caterpillar', '/ˈkætəpɪlə(r)/', 'кэтэпилэ', 'Гусеница', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Маленькое животное, похожее на червя с множеством ног, которое превращается в бабочку.',
    '- Насекомое: "Fuzzy caterpillar" (Пушистая гусеница)\n- Процесс: "Hungry caterpillar" (Голодная гусеница)\n- Превращение: "Become a butterfly" (Стать бабочкой)',
    [
        { en: 'The caterpillar eats leaves all day long.', ru: 'Гусеница ест листья целый день.' },
        { en: 'Look at that green caterpillar crawling on the branch.', ru: 'Посмотри на ту зеленую гусеницу, ползущую по ветке.' },
        { en: 'Eventually, the caterpillar will turn into a beautiful butterfly.', ru: 'В конце концов гусеница превратится в красивую бабочку.' },
        { en: 'Birds like to eat caterpillars.', ru: 'Птицы любят есть гусениц.' }
    ],
    [
        { meaning: "Vehicle track", translation: "Гусеница (танка/трактора)", example: { en: "Caterpillar tracks.", ru: "Гусеничные траки." } }
    ]
),

createRichWord('b1_celery', 'Celery', '/ˈseləri/', 'сэлэри', 'Сельдерей', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Овощ с длинными бледно-зелеными стеблями, который часто едят сырым в салатах.',
    '- Еда: "Stick of celery" (Стебель сельдерея)\n- Салат: "Chopped celery" (Нарезанный сельдерей)\n- Вкус: "Crunchy celery" (Хрустящий сельдерей)',
    [
        { en: 'Celery is a very healthy snack with few calories.', ru: 'Сельдерей — очень полезная закуска с малым количеством калорий.' },
        { en: 'She dipped a stick of celery into the sauce.', ru: 'Она макнула стебель сельдерея в соус.' },
        { en: 'I use celery and carrots as a base for my soup.', ru: 'Я использую сельдерей и морковь как основу для супа.' },
        { en: 'The salad contained apples, walnuts, and celery.', ru: 'Салат содержал яблоки, грецкие орехи и сельдерей.' }
    ],
    []
),

createRichWord('b1_cider', 'Cider', '/ˈsaɪdə(r)/', 'сайдэ', 'Сидр', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Алкогольный напиток, приготовленный из ферментированного яблочного сока.',
    '- Напиток: "Apple cider" (Яблочный сидр)\n- Бар: "Pint of cider" (Пинта сидра)\n- Вкус: "Dry cider" (Сухой сидр)',
    [
        { en: 'In the summer, I prefer drinking cold cider to beer.', ru: 'Летом я предпочитаю пить холодный сидр, а не пиво.' },
        { en: 'This region is famous for its traditional cider.', ru: 'Этот регион славится своим традиционным сидром.' },
        { en: 'Would you like a glass of sparkling cider?', ru: 'Хотите бокал игристого сидра?' },
        { en: 'They make cider from the apples in their orchard.', ru: 'Они делают сидр из яблок в своем саду.' }
    ],
    []
),

createRichWord('b1_cinnamon', 'Cinnamon', '/ˈsɪnəmən/', 'синэмэн', 'Корица', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Коричневая специя с сильным приятным запахом, используемая в кулинарии.',
    '- Специя: "Cinnamon stick" (Палочка корицы)\n- Выпечка: "Cinnamon rolls" (Булочки с корицей)\n- Вкус: "Taste of cinnamon" (Вкус корицы)',
    [
        { en: 'I love the smell of cinnamon and apples baking.', ru: 'Я обожаю запах корицы и запекающихся яблок.' },
        { en: 'Sprinkle some cinnamon on top of your coffee.', ru: 'Посыпьте немного корицы сверху на ваш кофе.' },
        { en: 'Cinnamon rolls are popular for breakfast.', ru: 'Булочки с корицей популярны на завтрак.' },
        { en: 'Too much cinnamon can make the dish bitter.', ru: 'Слишком много корицы может сделать блюдо горьким.' }
    ],
    [
        { meaning: "Colour", translation: "Цвет корицы (коричневый)", example: { en: "A bird with cinnamon wings.", ru: "Птица с крыльями цвета корицы." } }
    ]
),

createRichWord('b1_cod', 'Cod', '/kɒd/', 'код', 'Треска', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Крупная морская рыба, которую часто едят (популярна в блюде Fish and Chips).',
    '- Еда: "Cod fillet" (Филе трески)\n- Рыбалка: "Catch cod" (Ловить треску)\n- Блюдо: "Battered cod" (Треска в кляре)',
    [
        { en: 'Cod and chips is a traditional British meal.', ru: 'Треска с картошкой фри — традиционное британское блюдо.' },
        { en: 'The fishermen caught a lot of cod today.', ru: 'Рыбаки поймали сегодня много трески.' },
        { en: 'I prefer baked cod to fried fish.', ru: 'Я предпочитаю запеченную треску жареной рыбе.' },
        { en: 'Cod liver oil is full of vitamins.', ru: 'Рыбий жир из печени трески полон витаминов.' }
    ],
    [
        { meaning: "Fake/Mock (BrE Slang)", translation: "Поддельный / Притворный", example: { en: "Cod philosophy.", ru: "Псевдофилософия." } }
    ]
  ),
createRichWord('b1_coward', 'Coward', '/ˈkaʊəd/', 'кауэд', 'Трус', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Человек, у которого нет смелости; тот, кто боится опасности или боли.',
    '- Оскорбление: "Don\'t be a coward" (Не будь трусом)\n- Характер: "Cowardly act" (Трусливый поступок)\n- Война: "Branded a coward" (Заклейменный трусом)',
    [
        { en: 'He was too much of a coward to tell the truth.', ru: 'Он был слишком труслив, чтобы сказать правду.' },
        { en: 'Only a coward would attack a child.', ru: 'Только трус напал бы на ребенка.' },
        { en: 'She called him a coward for running away.', ru: 'Она назвала его трусом за то, что он убежал.' },
        { en: 'I admit I am a coward when it comes to dentists.', ru: 'Признаю, я трус, когда дело доходит до стоматологов.' }
    ],
    []
  ),
createRichWord('b1_buggy', 'Buggy', '/ˈbʌɡi/', 'баги', 'Коляска / Багги', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Легкая коляска для маленьких детей (брит.); легкий автомобиль для езды по песку.',
    '- Дети: "Baby buggy" (Детская коляска)\n- Спорт: "Dune buggy" (Пляжный багги)\n- Гольф: "Golf buggy" (Гольф-кар)',
    [
        { en: 'She pushed the buggy through the park.', ru: 'Она толкала коляску по парку.' },
        { en: 'We rented a dune buggy to drive on the beach.', ru: 'Мы арендовали багги, чтобы покататься по пляжу.' },
        { en: 'The baby fell asleep in the buggy.', ru: 'Малыш заснул в коляске.' },
        { en: 'Put the shopping bags under the buggy.', ru: 'Положи сумки с покупками под коляску.' }
    ],
    [
        { meaning: "Full of bugs (software)", translation: "Глючный / С ошибками", example: { en: "This software is very buggy.", ru: "Это программное обеспечение очень глючное." } }
    ]
),

createRichWord('b1_butler', 'Butler', '/ˈbʌtlə(r)/', 'батлэ', 'Дворецкий', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Главный слуга-мужчина в большом доме.',
    '- Дом: "The butler opened the door" (Дворецкий открыл дверь)\n- Профессия: "English butler" (Английский дворецкий)\n- Фраза: "The butler did it" (Это сделал дворецкий - клише детективов)',
    [
        { en: 'The butler served tea in the drawing room.', ru: 'Дворецкий подал чай в гостиной.' },
        { en: 'He works as a butler for a rich family.', ru: 'Он работает дворецким в богатой семье.' },
        { en: 'Batman\'s butler is named Alfred.', ru: 'Дворецкого Бэтмена зовут Альфред.' },
        { en: 'A good butler is always discreet.', ru: 'Хороший дворецкий всегда сдержан.' }
    ],
    []
),

createRichWord('b1_byte', 'Byte', '/baɪt/', 'байт', 'Байт', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Единица цифровой информации в компьютерах (обычно 8 бит).',
    '- Компьютер: "Megabyte and Gigabyte" (Мегабайт и Гигабайт)\n- Данные: "Size in bytes" (Размер в байтах)\n- Память: "Bytes of data" (Байты данных)',
    [
        { en: 'There are one thousand bytes in a kilobyte.', ru: 'В килобайте тысяча байт.' },
        { en: 'The file size is only a few bytes.', ru: 'Размер файла составляет всего несколько байт.' },
        { en: 'Modern computers process billions of bytes per second.', ru: 'Современные компьютеры обрабатывают миллиарды байт в секунду.' },
        { en: 'Every letter you type takes up one byte of memory.', ru: 'Каждая буква, которую вы печатаете, занимает один байт памяти.' }
    ],
    []
),

createRichWord('b1_cabaret', 'Cabaret', '/ˈkæbəreɪ/', 'кэбэрей', 'Кабаре', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Развлечение с песнями, танцами и комедией, которое показывают в ресторане или клубе.',
    '- Шоу: "Cabaret show" (Шоу кабаре)\n- Место: "Nightclub cabaret" (Кабаре в ночном клубе)\n- Артист: "Cabaret singer" (Певец кабаре)',
    [
        { en: 'We went to see a cabaret in Paris.', ru: 'Мы ходили смотреть кабаре в Париже.' },
        { en: 'The cabaret featured dancers and a magician.', ru: 'В кабаре выступали танцоры и фокусник.' },
        { en: 'Liza Minnelli starred in the movie "Cabaret".', ru: 'Лайза Миннелли играла главную роль в фильме "Кабаре".' },
        { en: 'They sat at tables drinking wine while watching the cabaret.', ru: 'Они сидели за столиками, пили вино и смотрели кабаре.' }
    ],
    []
),

createRichWord('b1_cache', 'Cache', '/kæʃ/', 'кэш', 'Тайник / Кэш (память)', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Скрытый запас вещей; (комп.) быстрая память для хранения часто используемых данных.',
    '- Компьютер: "Clear the cache" (Очистить кэш)\n- Скрытие: "Cache of weapons" (Тайник с оружием)\n- Действие: "Cache memory" (Кэш-память)',
    [
        { en: 'Clear your browser cache if the page won\'t load.', ru: 'Очистите кэш браузера, если страница не загружается.' },
        { en: 'Explorers left a cache of food for their return journey.', ru: 'Исследователи оставили тайник с едой для обратного пути.' },
        { en: 'Squirrels hide a cache of nuts for the winter.', ru: 'Белки прячут запас орехов на зиму.' },
        { en: 'The CPU has a built-in cache for speed.', ru: 'Процессор имеет встроенный кэш для скорости.' }
    ],
    [
        { meaning: "To hide (verb)", translation: "Прятать", example: { en: "They cached the money under the floor.", ru: "Они спрятали деньги под полом." } }
    ]
),

createRichWord('b1_cactus', 'Cactus', '/ˈkæktəs/', 'кэктэс', 'Кактус', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Растение, которое растет в жарких сухих местах, имеет толстый стебель и колючки вместо листьев.',
    '- Растение: "Prickly cactus" (Колючий кактус)\n- Пустыня: "Desert cactus" (Пустынный кактус)\n- Цветок: "Cactus flower" (Цветок кактуса)',
    [
        { en: 'Be careful not to touch the cactus.', ru: 'Будь осторожен, не трогай кактус.' },
        { en: 'A cactus can survive for months without water.', ru: 'Кактус может выживать месяцами без воды.' },
        { en: 'She has a collection of small cacti on her shelf.', ru: 'У нее на полке коллекция маленьких кактусов.' },
        { en: 'The desert was full of tall cactus plants.', ru: 'Пустыня была полна высоких кактусов.' }
    ],
    []
),

createRichWord('b1_caffeine', 'Caffeine', '/ˈkæfiːn/', 'кэфин', 'Кофеин', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Химическое вещество в кофе и чае, которое заставляет вас чувствовать себя бодрее.',
    '- Кофе: "Contains caffeine" (Содержит кофеин)\n- Здоровье: "Caffeine addiction" (Зависимость от кофеина)\n- Эффект: "Caffeine kick" (Заряд бодрости от кофеина)',
    [
        { en: 'I need some caffeine to wake me up.', ru: 'Мне нужно немного кофеина, чтобы проснуться.' },
        { en: 'This herbal tea is free from caffeine.', ru: 'Этот травяной чай не содержит кофеина.' },
        { en: 'Too much caffeine can give you a headache.', ru: 'Слишком много кофеина может вызвать головную боль.' },
        { en: 'Energy drinks usually have high levels of caffeine.', ru: 'Энергетические напитки обычно содержат высокий уровень кофеина.' }
    ],
    []
),

createRichWord('b1_camcorder', 'Camcorder', '/ˈkæmkɔːdə(r)/', 'кэмкодэ', 'Видеокамера', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Портативная камера для записи видео и звука (термин чаще используется для старых моделей).',
    '- Техника: "Digital camcorder" (Цифровая видеокамера)\n- Запись: "Use a camcorder" (Использовать видеокамеру)\n- Семья: "Home camcorder" (Домашняя видеокамера)',
    [
        { en: 'My dad recorded my first steps with a camcorder.', ru: 'Папа записал мои первые шаги на видеокамеру.' },
        { en: 'Nowadays, people use phones instead of camcorders.', ru: 'В наши дни люди используют телефоны вместо видеокамер.' },
        { en: 'We found an old camcorder in the attic.', ru: 'Мы нашли старую видеокамеру на чердаке.' },
        { en: 'He bought a camcorder to film his holiday.', ru: 'Он купил видеокамеру, чтобы снимать свой отпуск.' }
    ],
    []
),

createRichWord('b1_cannibal', 'Cannibal', '/ˈkænɪbl/', 'кэнибл', 'Каннибал / Людоед', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Человек, который ест других людей; животное, которое ест свой собственный вид.',
    '- Племя: "Cannibal tribe" (Племя каннибалов)\n- Животные: "Cannibal spiders" (Пауки-каннибалы)\n- История: "Practice of being a cannibal" (Каннибализм)',
    [
        { en: 'The explorers were afraid of meeting cannibals.', ru: 'Исследователи боялись встретить каннибалов.' },
        { en: 'Some insects are cannibals and eat their partners.', ru: 'Некоторые насекомые — каннибалы и съедают своих партнеров.' },
        { en: 'Hannibal Lecter is a famous fictional cannibal.', ru: 'Ганнибал Лектер — известный вымышленный каннибал.' },
        { en: 'They were forced to become cannibals to survive.', ru: 'Они были вынуждены стать каннибалами, чтобы выжить.' }
    ],
    []
),

createRichWord('b1_casket', 'Casket', '/ˈkɑːskɪt/', 'каскит', 'Гроб (амер.) / Шкатулка (устар.)', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Ящик, в котором хоронят мертвого человека (в США); маленькая коробочка для драгоценностей (устар.).',
    '- Похороны: "Open casket" (Открытый гроб)\n- Драгоценности: "Jewel casket" (Шкатулка с драгоценностями)\n- Смерть: "Wooden casket" (Деревянный гроб)',
    [
        { en: 'The family chose a mahogany casket for the funeral.', ru: 'Семья выбрала гроб из красного дерева для похорон.' },
        { en: 'It was an open casket service so friends could say goodbye.', ru: 'Это была церемония с открытым гробом, чтобы друзья могли попрощаться.' },
        { en: 'The flag was draped over the casket.', ru: 'Флаг был накинут на гроб.' },
        { en: 'She opened the small casket to reveal a diamond ring.', ru: 'Она открыла маленькую шкатулку и показала бриллиантовое кольцо.' }
    ],
    []
),

createRichWord('b1_catapult', 'Catapult', '/ˈkætəpʌlt/', 'кэтэпалт', 'Катапульта / Рогатка', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Оружие для метания камней; (брит.) рогатка (игрушка); устройство для запуска самолетов.',
    '- Оружие: "Launch a catapult" (Запустить катапульту)\n- Игрушка: "Toy catapult" (Игрушечная рогатка)\n- Глагол: "Catapult to fame" (Взлететь к славе)',
    [
        { en: 'The boy used a catapult to shoot stones at cans.', ru: 'Мальчик использовал рогатку, чтобы стрелять камнями по банкам.' },
        { en: 'Ancient armies used catapults to attack castles.', ru: 'Древние армии использовали катапульты для атак на замки.' },
        { en: 'The song catapulted her to international fame.', ru: 'Эта песня мгновенно принесла ей мировую славу.' },
        { en: 'The jet was launched by a steam catapult.', ru: 'Реактивный самолет был запущен с помощью паровой катапульты.' }
    ],
    [
        { meaning: "To launch forcibly", translation: "Катапультировать / Выбрасывать", example: { en: "He was catapulted through the window.", ru: "Его выбросило через окно." } }
    ]
),

createRichWord('b1_cello', 'Cello', '/ˈtʃeləʊ/', 'челэу', 'Виолончель', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Большой струнный музыкальный инструмент, на котором играют сидя, держа его между колен.',
    '- Музыка: "Play the cello" (Играть на виолончели)\n- Инструмент: "String instrument" (Струнный инструмент)\n- Человек: "Cellist" (Виолончелист)',
    [
        { en: 'The cello has a deep and rich sound.', ru: 'У виолончели глубокий и насыщенный звук.' },
        { en: 'She practices the cello for two hours every day.', ru: 'Она упражняется на виолончели по два часа каждый день.' },
        { en: 'He carried the large cello case on his back.', ru: 'Он нес большой футляр от виолончели на спине.' },
        { en: 'The orchestra needs a new cello player.', ru: 'Оркестру нужен новый виолончелист.' }
    ],
    []
),

createRichWord('b1_chandelier', 'Chandelier', '/ˌʃændəˈlɪə(r)/', 'шэндэлиэ', 'Люстра', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Большой декоративный светильник, свисающий с потолка, часто с хрусталем.',
    '- Свет: "Crystal chandelier" (Хрустальная люстра)\n- Потолок: "Hang a chandelier" (Повесить люстру)\n- Роскошь: "Expensive chandelier" (Дорогая люстра)',
    [
        { en: 'A huge crystal chandelier hung in the ballroom.', ru: 'Огромная хрустальная люстра висела в бальном зале.' },
        { en: 'The chandelier sparkled in the candlelight.', ru: 'Люстра сверкала при свете свечей.' },
        { en: 'Be careful not to hit your head on the chandelier.', ru: 'Осторожно, не ударься головой о люстру.' },
        { en: 'It took three people to clean the dusty chandelier.', ru: 'Понадобилось три человека, чтобы почистить пыльную люстру.' }
    ],
    []
),

createRichWord('b1_chariot', 'Chariot', '/ˈtʃæriət/', 'чэриэт', 'Колесница', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Двухколесное транспортное средство, запряженное лошадьми, использовавшееся в древних войнах и гонках.',
    '- История: "Roman chariot" (Римская колесница)\n- Спорт: "Chariot race" (Гонка на колесницах)\n- Лошади: "Horse-drawn chariot" (Запряженная лошадьми колесница)',
    [
        { en: 'The Roman general rode into the city on a chariot.', ru: 'Римский полководец въехал в город на колеснице.' },
        { en: 'Chariot races were popular in ancient Greece.', ru: 'Гонки на колесницах были популярны в Древней Греции.' },
        { en: 'The museum displays a replica of a golden chariot.', ru: 'В музее выставлена копия золотой колесницы.' },
        { en: 'Ben-Hur is famous for its chariot scene.', ru: 'Бен-Гур знаменит своей сценой с колесницами.' }
    ],
    []
),

createRichWord('b1_chauffeur', 'Chauffeur', '/ˈʃəʊfə(r)/', 'шеуфэ', 'Шофер', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Человек, чья работа — водить машину для богатого или важного лица.',
    '- Работа: "Private chauffeur" (Личный шофер)\n- Машина: "Chauffeur-driven car" (Машина с водителем)\n- Одежда: "Chauffeur\'s uniform" (Форма шофера)',
    [
        { en: 'The chauffeur opened the car door for the Queen.', ru: 'Шофер открыл дверь машины для Королевы.' },
        { en: 'He works as a chauffeur for a movie star.', ru: 'Он работает шофером у кинозвезды.' },
        { en: 'We hired a chauffeur-driven limousine for the wedding.', ru: 'Мы наняли лимузин с водителем на свадьбу.' },
        { en: 'The chauffeur waited patiently outside the hotel.', ru: 'Шофер терпеливо ждал у отеля.' }
    ],
    []
),

createRichWord('b1_cholera', 'Cholera', '/ˈkɒlərə/', 'колерэ', 'Холера', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Серьезное инфекционное заболевание, вызываемое грязной водой.',
    '- Болезнь: "Cholera outbreak" (Вспышка холеры)\n- Вода: "Waterborne cholera" (Холера, передающаяся через воду)\n- Эпидемия: "Epidemic of cholera" (Эпидемия холеры)',
    [
        { en: 'Cholera is caused by drinking contaminated water.', ru: 'Холера вызывается употреблением загрязненной воды.' },
        { en: 'Thousands died during the cholera epidemic.', ru: 'Тысячи людей погибли во время эпидемии холеры.' },
        { en: 'Clean water is essential to prevent cholera.', ru: 'Чистая вода необходима для предотвращения холеры.' },
        { en: 'Doctors treated the cholera patients with fluids.', ru: 'Врачи лечили больных холерой жидкостями.' }
    ],
    []
),

createRichWord('b1_christen', 'Christen', '/ˈkrɪsn/', 'крисн', 'Крестить / Нарекать', ProficiencyLevel.B1, 'verb', 'Low', 'Neutral',
    'Дать имя ребенку во время христианской церемонии (крещения); использовать что-то впервые.',
    '- Церковь: "Christen a baby" (Крестить ребенка)\n- Использование: "Christen the new boat" (Окрестить новую лодку)\n- Имя: "Christened as..." (Нареченный как...)',
    [
        { en: 'They decided to christen their son "David".', ru: 'Они решили окрестить сына именем "Дэвид".' },
        { en: 'We christened the new barbecue with a party.', ru: 'Мы обновили (окрестили) новый барбекю вечеринкой.' },
        { en: 'The ship was christened with a bottle of champagne.', ru: 'Корабль окрестили бутылкой шампанского.' },
        { en: 'Are you going to the christening on Sunday?', ru: 'Ты идешь на крестины в воскресенье?' }
    ],
    []
),

createRichWord('b1_chrome', 'Chrome', '/krəʊm/', 'крэум', 'Хром', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Твердый блестящий металл, используемый для покрытия других металлов; браузер Google Chrome.',
    '- Металл: "Chrome bumper" (Хромированный бампер)\n- Блеск: "Shiny chrome" (Блестящий хром)\n- Покрытие: "Chrome-plated" (Хромированный)',
    [
        { en: 'The classic car has lots of shiny chrome parts.', ru: 'У классического автомобиля много блестящих хромированных деталей.' },
        { en: 'He polished the chrome until it looked like a mirror.', ru: 'Он полировал хром, пока тот не стал похож на зеркало.' },
        { en: 'The bathroom taps are made of chrome.', ru: 'Смесители в ванной сделаны из хрома.' },
        { en: 'Chrome protects the steel from rusting.', ru: 'Хром защищает сталь от ржавчины.' }
    ],
    []
),

createRichWord('b1_citrus', 'Citrus', '/ˈsɪtrəs/', 'ситрэс', 'Цитрус / Цитрусовый', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Фрукт, такой как апельсин, лимон или грейпфрут.',
    '- Фрукт: "Citrus fruit" (Цитрусовый фрукт)\n- Вкус: "Citrus flavour" (Цитрусовый вкус)\n- Сад: "Citrus grove" (Цитрусовая роща)',
    [
        { en: 'Oranges and lemons are citrus fruits.', ru: 'Апельсины и лимоны — это цитрусовые фрукты.' },
        { en: 'Citrus fruits are rich in Vitamin C.', ru: 'Цитрусовые богаты витамином С.' },
        { en: 'The cleaning spray has a fresh citrus smell.', ru: 'У чистящего спрея свежий цитрусовый запах.' },
        { en: 'Citrus trees grow well in warm climates.', ru: 'Цитрусовые деревья хорошо растут в теплом климате.' }
    ],
    []
),

createRichWord('b1_clam', 'Clam', '/klæm/', 'клэм', 'Моллюск (съедобный)', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Морское животное с раковиной из двух частей, которое можно есть.',
    '- Еда: "Clam chowder" (Суп из моллюсков)\n- Природа: "Dig for clams" (Копать моллюсков)\n- Идиома: "Happy as a clam" (Очень доволен)',
    [
        { en: 'We ordered a bowl of creamy clam chowder.', ru: 'Мы заказали миску сливочного супа из моллюсков.' },
        { en: 'The children were digging for clams on the beach.', ru: 'Дети копали моллюсков на пляже.' },
        { en: 'Clams live in the sand under the water.', ru: 'Моллюски живут в песке под водой.' },
        { en: 'The shell of the clam was tightly closed.', ru: 'Раковина моллюска была плотно закрыта.' }
    ],
    [
        { meaning: "To refuse to speak", translation: "Замолчать (clam up)", example: { en: "He clammed up when the police arrived.", ru: "Он замолчал, когда приехала полиция." } }
    ]
),

createRichWord('b1_clarinet', 'Clarinet', '/ˌklærəˈnet/', 'клэрэнет', 'Кларнет', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Деревянный духовой музыкальный инструмент в форме черной трубки.',
    '- Музыка: "Play the clarinet" (Играть на кларнете)\n- Звук: "Clarinet solo" (Соло на кларнете)\n- Группа: "Clarinet player" (Кларнетист)',
    [
        { en: 'She plays the clarinet in the school band.', ru: 'Она играет на кларнете в школьном оркестре.' },
        { en: 'The clarinet has a distinctive mellow sound.', ru: 'У кларнета характерный мягкий звук.' },
        { en: 'He took clarinet lessons for five years.', ru: 'Он брал уроки игры на кларнете пять лет.' },
        { en: 'Jazz musicians often use the clarinet.', ru: 'Джазовые музыканты часто используют кларнет.' }
    ],
    []
),

createRichWord('b1_cliche', 'Cliche', '/ˈkliːʃeɪ/', 'клишей', 'Клише / Шаблон', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Фраза или идея, которую использовали так часто, что она потеряла силу или оригинальность.',
    '- Речь: "Use a cliche" (Использовать клише)\n- Кино: "Movie cliche" (Киноштамп)\n- Описание: "That is such a cliche" (Это такое клише)',
    [
        { en: 'The movie was full of tired old cliches.', ru: 'Фильм был полон избитых старых клише.' },
        { en: '"Time heals all wounds" is a famous cliche.', ru: '"Время лечит" — известное клише.' },
        { en: 'Try to avoid cliches in your creative writing.', ru: 'Старайтесь избегать штампов в своем творчестве.' },
        { en: 'It sounds like a cliche, but I really love you.', ru: 'Это звучит как клише, но я правда люблю тебя.' }
    ],
    []
),

createRichWord('b1_clover', 'Clover', '/ˈkləʊvə(r)/', 'клэувэ', 'Клевер', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Маленькое растение с тремя (редко четырьмя) круглыми листьями.',
    '- Удача: "Four-leaf clover" (Четырехлистный клевер)\n- Поле: "Field of clover" (Клеверное поле)\n- Идиома: "In clover" (В шоколаде / В роскоши)',
    [
        { en: 'Finding a four-leaf clover brings good luck.', ru: 'Найти четырехлистный клевер — к удаче.' },
        { en: 'Cows love to eat fresh clover.', ru: 'Коровы любят есть свежий клевер.' },
        { en: 'The grass was full of white clover flowers.', ru: 'Трава была полна белых цветов клевера.' },
        { en: 'After winning the lottery, they lived in clover.', ru: 'Выиграв в лотерею, они жили припеваючи.' }
    ],
    []
),

createRichWord('b1_cobra', 'Cobra', '/ˈkəʊbrə/', 'кэубрэ', 'Кобра', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Ядовитая змея, которая может раздувать шею в капюшон.',
    '- Змея: "King cobra" (Королевская кобра)\n- Опасность: "Cobra bite" (Укус кобры)\n- Движение: "Striking cobra" (Атакующая кобра)',
    [
        { en: 'The cobra raised its hood as a warning.', ru: 'Кобра раздула капюшон в качестве предупреждения.' },
        { en: 'Cobras are found in Africa and Asia.', ru: 'Кобры обитают в Африке и Азии.' },
        { en: 'The snake charmer played music for the cobra.', ru: 'Заклинатель змей играл музыку для кобры.' },
        { en: 'A bite from a cobra can be fatal.', ru: 'Укус кобры может быть смертельным.' }
    ],
    []
),

createRichWord('b1_collage', 'Collage', '/ˈkɒlɑːʒ/', 'колаж', 'Коллаж', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Картина, сделанная путем наклеивания кусочков бумаги, ткани или фото на поверхность.',
    '- Искусство: "Make a collage" (Делать коллаж)\n- Фото: "Photo collage" (Фотоколлаж)\n- Школа: "Art collage" (Художественный коллаж)',
    [
        { en: 'We made a collage using old magazines.', ru: 'Мы сделали коллаж, используя старые журналы.' },
        { en: 'Her artwork is a collage of different textures.', ru: 'Ее произведение искусства — это коллаж из разных текстур.' },
        { en: 'I created a photo collage for his birthday.', ru: 'Я создал фотоколлаж на его день рождения.' },
        { en: 'Collage is a fun technique for children.', ru: 'Коллаж — это веселая техника для детей.' }
    ],
    []
  ),
createRichWord('b1_com', 'Com', '/kɒm/', 'ком', 'Ком (домен) / Коммерческий', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Сокращение от "commercial", используемое в адресах интернет-сайтов (.com).',
    '- Интернет: "Dot com" (Точка ком)\n- Бизнес: "Dot-com boom" (Бум доткомов)\n- Адрес: "Website address" (Адрес сайта)',
    [
        { en: 'You can find more information at google dot com.', ru: 'Вы можете найти больше информации на гугл точка ком.' },
        { en: 'Many dot-com companies started in the late nineties.', ru: 'Многие интернет-компании (доткомы) открылись в конце девяностых.' },
        { en: 'Is your email address ending in com or org?', ru: 'Твой электронный адрес заканчивается на com или org?' },
        { en: 'The domain name was already taken.', ru: 'Это доменное имя уже было занято.' }
    ],
    []
),

createRichWord('b1_daisy', 'Daisy', '/ˈdeɪzi/', 'дейзи', 'Маргаритка / Ромашка', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Маленький цветок с белыми лепестками и желтой серединкой.',
    '- Сад: "Pick a daisy" (Сорвать маргаритку)\n- Узор: "Daisy chain" (Венок из маргариток)\n- Идиома: "Fresh as a daisy" (Свеж как огурчик)',
    [
        { en: 'She wore a dress with a daisy pattern.', ru: 'На ней было платье с узором из маргариток.' },
        { en: 'Children were making daisy chains on the grass.', ru: 'Дети плели венки из маргариток на траве.' },
        { en: 'After a good sleep, I felt fresh as a daisy.', ru: 'После хорошего сна я чувствовал себя свежим как огурчик.' },
        { en: 'A single daisy grew in the middle of the lawn.', ru: 'Одинокая маргаритка росла посреди газона.' }
    ],
    []
),

createRichWord('b1_debit', 'Debit', '/ˈdebɪt/', 'дэбит', 'Дебет / Списывать', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Деньги, снятые с банковского счета; запись о расходе.',
    '- Банк: "Debit card" (Дебетовая карта)\n- Оплата: "Pay by direct debit" (Платить прямым списанием)\n- Счет: "Debit side" (Дебетовая сторона)',
    [
        { en: 'I paid for the groceries using my debit card.', ru: 'Я заплатил за продукты своей дебетовой картой.' },
        { en: 'The bank will debit your account on the first of the month.', ru: 'Банк спишет средства с вашего счета первого числа месяца.' },
        { en: 'Do you want to pay by cash or debit?', ru: 'Вы хотите заплатить наличными или картой?' },
        { en: 'Check your statement for any unauthorized debits.', ru: 'Проверьте выписку на наличие несанкционированных списаний.' }
    ],
    []
  ),
createRichWord('b1_buggy', 'Buggy', '/ˈbʌɡi/', 'баги', 'Коляска / Багги', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Легкая складная коляска для маленьких детей; легкий автомобиль для езды по бездорожью.',
    '- Дети: "Push the buggy" (Толкать коляску)\n- Транспорт: "Dune buggy" (Пляжный багги)\n- Гольф: "Golf buggy" (Гольф-кар)',
    [
        { en: 'The baby fell asleep in her buggy.', ru: 'Малышка заснула в своей коляске.' },
        { en: 'We rented a dune buggy to drive on the beach.', ru: 'Мы арендовали багги, чтобы покататься по пляжу.' },
        { en: 'He loaded the golf clubs onto the buggy.', ru: 'Он погрузил клюшки для гольфа на гольф-кар.' },
        { en: 'Folding the buggy can be tricky sometimes.', ru: 'Сложить коляску иногда бывает непросто.' }
    ],
    [
        { meaning: "Full of bugs (software)", translation: "Глючный (о софте)", example: { en: "This new update is very buggy.", ru: "Это новое обновление очень глючное." } }
    ]
),

createRichWord('b1_cardigan', 'Cardigan', '/ˈkɑːdɪɡən/', 'кадигэн', 'Кардиган', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Вязаная кофта на пуговицах или молнии спереди.',
    '- Одежда: "Woollen cardigan" (Шерстяной кардиган)\n- Стиль: "Button up a cardigan" (Застегнуть кардиган)\n- Погода: "Wear a cardigan" (Носить кардиган)',
    [
        { en: 'It is getting chilly, so put on your cardigan.', ru: 'Становится прохладно, так что надень кардиган.' },
        { en: 'My grandmother knitted a blue cardigan for me.', ru: 'Моя бабушка связала мне голубой кардиган.' },
        { en: 'He wore a cardigan over his shirt instead of a jacket.', ru: 'Он надел кардиган поверх рубашки вместо пиджака.' },
        { en: 'The buttons on this cardigan are made of wood.', ru: 'Пуговицы на этом кардигане сделаны из дерева.' }
    ],
    []
),

createRichWord('b1_cockroach', 'Cockroach', '/ˈkɒkrəʊtʃ/', 'кокрэуч', 'Таракан', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Крупное коричневое или черное насекомое, которое часто живет в домах и считается вредителем.',
    '- Вредители: "Kill a cockroach" (Убить таракана)\n- Кухня: "Cockroach infestation" (Нашествие тараканов)\n- Природа: "Giant cockroach" (Гигантский таракан)',
    [
        { en: 'I saw a huge cockroach in the kitchen last night.', ru: 'Вчера вечером я видел на кухне огромного таракана.' },
        { en: 'Cockroaches can survive almost anything.', ru: 'Тараканы могут пережить практически все что угодно.' },
        { en: 'We need to call pest control to get rid of the cockroaches.', ru: 'Нам нужно вызвать службу дезинсекции, чтобы избавиться от тараканов.' },
        { en: 'She screamed when the cockroach ran across the floor.', ru: 'Она закричала, когда таракан пробежал по полу.' }
    ],
    []
),

createRichWord('b1_comma', 'Comma', '/ˈkɒmə/', 'комэ', 'Запятая', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Знак препинания (,), используемый для разделения частей предложения или элементов в списке.',
    '- Грамматика: "Use a comma" (Использовать запятую)\n- Список: "Separated by commas" (Разделенные запятыми)\n- Ошибка: "Missing comma" (Пропущенная запятая)',
    [
        { en: 'You need to put a comma before "but" in this sentence.', ru: 'Тебе нужно поставить запятую перед "но" в этом предложении.' },
        { en: 'Use commas to separate items in a list.', ru: 'Используйте запятые для разделения элементов в списке.' },
        { en: 'The decimal point is often a comma in Europe.', ru: 'Десятичная точка в Европе часто обозначается запятой.' },
        { en: 'Incorrect comma placement can change the meaning.', ru: 'Неправильная расстановка запятых может изменить смысл.' }
    ],
    []
  ),
createRichWord('b1_cranberry', 'Cranberry', '/ˈkrænbəri/', 'крэнбэри', 'Клюква', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Маленькая кислая красная ягода, часто используемая в соусах и соках.',
    '- Еда: "Cranberry sauce" (Клюквенный соус)\n- Напиток: "Cranberry juice" (Клюквенный сок)\n- Вкус: "Sour cranberry" (Кислая клюква)',
    [
        { en: 'We always have turkey with cranberry sauce at Christmas.', ru: 'Мы всегда едим индейку с клюквенным соусом на Рождество.' },
        { en: 'Cranberry juice is good for your health.', ru: 'Клюквенный сок полезен для здоровья.' },
        { en: 'These muffins are made with dried cranberries.', ru: 'Эти маффины сделаны с сушеной клюквой.' },
        { en: 'The taste of raw cranberry is very sour.', ru: 'Вкус сырой клюквы очень кислый.' }
    ],
    []
),

createRichWord('b1_cursor', 'Cursor', '/ˈkɜːsə(r)/', 'кёсэ', 'Курсор', ProficiencyLevel.B1, 'noun', 'High', 'Neutral',
    'Маленькая отметка на экране компьютера, показывающая, где вы находитесь или печатаете.',
    '- Компьютер: "Mouse cursor" (Курсор мыши)\n- Текст: "Blinking cursor" (Мигающий курсор)\n- Действие: "Move the cursor" (Двигать курсор)',
    [
        { en: 'Use the mouse to move the cursor across the screen.', ru: 'Используйте мышь, чтобы перемещать курсор по экрану.' },
        { en: 'The cursor turned into an hourglass symbol.', ru: 'Курсор превратился в символ песочных часов.' },
        { en: 'I can\'t see the cursor because the screen is too bright.', ru: 'Я не вижу курсор, потому что экран слишком яркий.' },
        { en: 'Place the cursor at the beginning of the line.', ru: 'Поместите курсор в начало строки.' }
    ],
    []
  ),
createRichWord('b1_cauliflower', 'Cauliflower', '/ˈkɒlɪflaʊə(r)/', 'колифлауэ', 'Цветная капуста', ProficiencyLevel.B1, 'noun', 'Medium', 'Neutral',
    'Крупный круглый овощ с твердой белой серединой, окруженной зелеными листьями.',
    '- Еда: "Cauliflower cheese" (Цветная капуста с сыром)\n- Вкус: "Raw cauliflower" (Сырая цветная капуста)\n- Огород: "Grow cauliflower" (Выращивать цветную капусту)',
    [
        { en: 'I like to eat cauliflower with cheese sauce.', ru: 'Я люблю есть цветную капусту с сырным соусом.' },
        { en: 'Cut the cauliflower into small pieces before cooking.', ru: 'Перед готовкой нарежьте цветную капусту на мелкие кусочки.' },
        { en: 'Cauliflower is a very healthy vegetable.', ru: 'Цветная капуста — очень полезный овощ.' },
        { en: 'She bought a fresh head of cauliflower at the market.', ru: 'Она купила свежий кочан цветной капусты на рынке.' }
    ],
    [
        { meaning: "Cauliflower ear", translation: "Ухо борца (деформация)", example: { en: "The boxer had a cauliflower ear.", ru: "У боксера было деформированное ухо." } }
    ]
),

createRichWord('b1_cheetah', 'Cheetah', '/ˈtʃiːtə/', 'чита', 'Гепард', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Дикая кошка из Африки, которая может бегать быстрее любого другого животного.',
    '- Животное: "Fast cheetah" (Быстрый гепард)\n- Природа: "Wild cheetah" (Дикий гепард)\n- Скорость: "Run like a cheetah" (Бежать как гепард)',
    [
        { en: 'The cheetah is the fastest land animal in the world.', ru: 'Гепард — самое быстрое наземное животное в мире.' },
        { en: 'We saw a cheetah hunting a gazelle on TV.', ru: 'Мы видели по телевизору, как гепард охотится на газель.' },
        { en: 'Cheetahs have black spots on their yellow fur.', ru: 'У гепардов черные пятна на желтой шерсти.' },
        { en: 'Unlike other cats, the cheetah cannot hide its claws.', ru: 'В отличие от других кошек, гепард не может втягивать когти.' }
    ],
    []
  ),

];
