
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

];
