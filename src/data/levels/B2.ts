
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

export const WORDS_B2: Word[] = [
  createRichWord('b2_absolute', 'Absolute', '/ˈæbsəluːt/', 'эбсолют', 'Абсолютный / Полный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Полный, совершенный; не имеющий ограничений или исключений. Употребляется для усиления утверждения.',
    '- Уверенность: "Absolute certainty" (Абсолютная уверенность)\n- Власть: "Absolute power" (Абсолютная власть)\n- Необходимость: "Absolute necessity" (Крайняя необходимость)',
    [
        { en: 'I have absolute confidence in her ability to lead the team.', ru: 'Я абсолютно уверен в ее способности руководить командой.' },
        { en: 'It was an absolute disaster from the very beginning to the end.', ru: 'Это была полная катастрофа с самого начала и до конца.' },
        { en: 'He demanded absolute silence while he was concentrating on his work.', ru: 'Он потребовал полной тишины, пока был сосредоточен на работе.' },
        { en: 'To succeed in this market, high quality is an absolute necessity.', ru: 'Чтобы преуспеть на этом рынке, высокое качество является абсолютной необходимостью.' }
    ]
),

createRichWord('b2_actual', 'Actual', '/ˈæktʃuəl/', 'экчуэл', 'Фактический / Реальный', ProficiencyLevel.B2, 'adj', 'High', 'Neutral',
    'Существующий на самом деле; действительный, а не воображаемый или теоретический. (Внимание: это не "актуальный" в значении "модный/текущий").',
    '- Факт: "The actual cost" (Реальная стоимость)\n- Реальность: "In actual fact" (На самом деле)\n- Точность: "The actual words" (Дословные слова)',
    [
        { en: 'The actual cost of the repair was much higher than the estimate.', ru: 'Фактическая стоимость ремонта оказалась намного выше предварительной оценки.' },
        { en: 'We need to look at the actual figures before making a decision.', ru: 'Нам нужно посмотреть на реальные цифры, прежде чем принимать решение.' },
        { en: 'Although he looks older, his actual age is only twenty-five.', ru: 'Хотя он выглядит старше, его реальный возраст всего двадцать пять лет.' },
        { en: 'This is not a theory, but an actual problem we face daily.', ru: 'Это не теория, а реальная проблема, с которой мы сталкиваемся ежедневно.' }
    ]
  ),
createRichWord('b2_apparent', 'Apparent', '/əˈpær(ə)nt/', 'эпэрэнт', 'Очевидный', ProficiencyLevel.B2, 'adj', 'Medium', 'Formal',
    'Ясный и легкий для понимания; видимый. Также может означать "кажущийся", но не обязательно реальный.',
    '- Ясность: "Become apparent" (Стать очевидным)\n- Причина: "Apparent reason" (Очевидная причина)\n- Наблюдение: "It is apparent that..." (Очевидно, что...)',
    [
      { en: 'It became apparent that she was not going to change her mind anytime soon.', ru: 'Стало очевидно, что она не собирается менять свое мнение в ближайшее время.' },
      { en: 'For no apparent reason, the lights in the entire building suddenly went out.', ru: 'Без всякой видимой причины свет во всем здании внезапно погас.' },
      { en: 'His apparent lack of interest in the project annoyed the rest of the team.', ru: 'Его очевидное отсутствие интереса к проекту раздражало остальную часть команды.' },
      { en: 'From her smile, it was apparent that she had received good news.', ru: 'По ее улыбке было очевидно, что она получила хорошие новости.' }
    ]
),

createRichWord('b2_ashamed', 'Ashamed', '/əˈʃeɪmd/', 'эшеймд', 'Стыдящийся', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Испытывающий стыд или вину из-за своих действий, качеств или ассоциаций с кем-либо.',
    '- Отношение: "Ashamed of myself" (Стыдно за себя)\n- Действие: "Ashamed to admit" (Стыдно признать)\n- Глубина: "Deeply ashamed" (Глубоко пристыжен)',
    [
      { en: 'He was ashamed to admit that he had made such a foolish mistake.', ru: 'Ему было стыдно признать, что он совершил такую глупую ошибку.' },
      { en: 'You should be ashamed of yourself for speaking to your mother like that.', ru: 'Тебе должно быть стыдно за то, что ты так разговариваешь с матерью.' },
      { en: 'She felt deeply ashamed when she realized she had forgotten his birthday.', ru: 'Она чувствовала глубокий стыд, когда поняла, что забыла про его день рождения.' },
      { en: 'There is nothing to be ashamed of if you tried your absolute best.', ru: 'Нечего стыдиться, если вы старались изо всех сил.' }
    ]
),

createRichWord('b2_aware', 'Aware', '/əˈweə/', 'эвээ', 'Осведомленный', ProficiencyLevel.B2, 'adj', 'High', 'Neutral',
    'Знающий о чем-то или понимающий, что что-то существует; информированный.',
    '- Знание: "Be aware of" (Быть в курсе чего-либо)\n- Степень: "Fully aware" (Полностью осведомлен)\n- Социальное: "Socially aware" (Социально сознательный)',
    [
      { en: 'I was not aware that the meeting had been cancelled until I arrived.', ru: 'Я не был в курсе, что встречу отменили, пока не приехал.' },
      { en: 'Are you aware of the potential risks involved in this investment?', ru: 'Осознаете ли вы потенциальные риски, связанные с этой инвестицией?' },
      { en: 'He is fully aware of his responsibilities and is ready to take action.', ru: 'Он полностью осознает свои обязанности и готов действовать.' },
      { en: 'Drivers must be aware of pedestrians when crossing busy intersections.', ru: 'Водители должны помнить о пешеходах при пересечении оживленных перекрестков.' }
    ]
  ),
createRichWord('b2_beyond', 'Beyond', '/biˈjɒnd/', 'бийонд', 'За пределами', ProficiencyLevel.B2, 'prep', 'Medium', 'Neutral',
    'Находиться дальше чего-либо; вне понимания или возможностей. Указывает на дистанцию или превышение лимита.',
    '- Расстояние: "Beyond the horizon" (За горизонтом)\n- Понимание: "Beyond understanding" (За гранью понимания)\n- Контроль: "Beyond control" (Вне контроля)',
    [
      { en: 'The parking area is just beyond those large oak trees on the left.', ru: 'Парковка находится сразу за теми большими дубами слева.' },
      { en: 'The situation has become complicated and is now beyond our control.', ru: 'Ситуация усложнилась и теперь находится вне нашего контроля.' },
      { en: 'It is beyond my understanding why anyone would want to do such a thing.', ru: 'Это выше моего понимания, почему кто-то захотел бы сделать такую вещь.' },
      { en: 'The beauty of the landscape was beyond description, truly breathtaking.', ru: 'Красота пейзажа была неописуема (за пределами описания), поистине захватывающая.' }
    ]
  ),
createRichWord('b2_accent', 'Accent', '/ˈæksent/', 'эксент', 'Акцент', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Манера произношения, характерная для определенного региона или группы людей.',
    '- Речь: "Strong accent" (Сильный акцент)\n- Происхождение: "Foreign accent" (Иностранный акцент)\n- Ударение: "Put the accent on" (Делать ударение/акцент на)',
    [
      { en: 'She speaks French with a charming British accent.', ru: 'Она говорит по-французски с очаровательным британским акцентом.' },
      { en: 'I could tell from his accent that he was from Australia.', ru: 'Я мог понять по его акценту, что он из Австралии.' },
      { en: 'It is sometimes difficult to understand a strong regional accent.', ru: 'Иногда трудно понять сильный региональный акцент.' },
      { en: 'The accent in this word falls on the second syllable.', ru: 'Ударение в этом слове падает на второй слог.' }
    ]
),

createRichWord('b2_accuse', 'Accuse', '/əˈkjuːz/', 'экьюз', 'Обвинять', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Утверждать, что кто-то сделал что-то неправильное или незаконное.',
    '- Преступление: "Accuse of murder" (Обвинять в убийстве)\n- Ложь: "Falsely accuse" (Ложно обвинять)\n- Прямое: "Accuse him" (Обвинить его)',
    [
      { en: 'She accused him of stealing her expensive necklace.', ru: 'Она обвинила его в краже ее дорогого ожерелья.' },
      { en: 'Are you trying to accuse me of lying to you?', ru: 'Ты пытаешься обвинить меня в том, что я тебе лгу?' },
      { en: 'He was accused of a crime he did not commit.', ru: 'Его обвинили в преступлении, которого он не совершал.' },
      { en: 'The report accuses the company of ignoring safety rules.', ru: 'Отчет обвиняет компанию в игнорировании правил безопасности.' }
    ]
),

createRichWord('b2_adapt', 'Adapt', '/əˈdæpt/', 'эдэпт', 'Адаптироваться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Изменять что-то, чтобы оно подходило для новой цели или ситуации; приспосабливаться.',
    '- Среда: "Adapt to change" (Адаптироваться к переменам)\n- Книга: "Adapt for screen" (Адаптировать для экрана/экранизировать)\n- Условия: "Ability to adapt" (Способность адаптироваться)',
    [
      { en: 'It took him a while to adapt to the cold climate.', ru: 'Ему потребовалось время, чтобы адаптироваться к холодному климату.' },
      { en: 'Animals have to adapt to their environment to survive.', ru: 'Животные должны приспосабливаться к окружающей среде, чтобы выжить.' },
      { en: 'The novel was successfully adapted for a television series.', ru: 'Роман был успешно адаптирован для телесериала.' },
      { en: 'We need to adapt our strategy to the new market conditions.', ru: 'Нам нужно адаптировать нашу стратегию к новым рыночным условиям.' }
    ]
),

createRichWord('b2_affair', 'Affair', '/əˈfeə/', 'эфээ', 'Дело / Роман', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Событие или ситуация (дело); также романтическая связь между людьми (часто тайная).',
    '- Политика: "Foreign affairs" (Иностранные дела)\n- Отношения: "Love affair" (Любовный роман)\n- Личное: "Private affair" (Личное дело)',
    [
      { en: 'The government is handling the affair with great care.', ru: 'Правительство занимается этим делом с большой осторожностью.' },
      { en: 'What I do with my money is my own affair.', ru: 'Что я делаю со своими деньгами — это мое личное дело.' },
      { en: 'She had a brief affair with a colleague last summer.', ru: 'У нее был короткий роман с коллегой прошлым летом.' },
      { en: 'The minister of foreign affairs is visiting China next week.', ru: 'Министр иностранных дел посетит Китай на следующей неделе.' }
    ]
),

createRichWord('b2_affect', 'Affect', '/əˈfekt/', 'эфект', 'Влиять / Затрагивать', ProficiencyLevel.B2, 'verb', 'High', 'Formal',
    'Оказывать влияние на кого-то или что-то; вызывать изменения. (Не путать с Effect).',
    '- Здоровье: "Affect health" (Влиять на здоровье)\n- Решение: "Affect decision" (Повлиять на решение)\n- Эмоции: "Deeply affect" (Глубоко тронуть/затронуть)',
    [
      { en: 'Global warming will affect everyone on the planet.', ru: 'Глобальное потепление затронет всех на планете.' },
      { en: 'The bad weather did not affect our plans for the trip.', ru: 'Плохая погода не повлияла на наши планы насчет поездки.' },
      { en: 'Smoking can seriously affect your lungs and heart.', ru: 'Курение может серьезно повлиять на ваши легкие и сердце.' },
      { en: 'She was deeply affected by the sad news she received.', ru: 'Она была глубоко тронута печальными новостями, которые получила.' }
    ]
),

createRichWord('b2_aid', 'Aid', '/eɪd/', 'эйд', 'Помощь', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Помощь (часто финансовая или гуманитарная); поддержка.',
    '- Гуманитарная: "Humanitarian aid" (Гуманитарная помощь)\n- Первая помощь: "First aid" (Первая помощь)\n- Визуальная: "Visual aid" (Наглядное пособие)',
    [
      { en: 'The organization sends medical aid to developing countries.', ru: 'Организация отправляет медицинскую помощь в развивающиеся страны.' },
      { en: 'He learned how to give first aid in school.', ru: 'Он научился оказывать первую помощь в школе.' },
      { en: 'Visual aids can help students understand complex topics.', ru: 'Наглядные пособия могут помочь студентам понять сложные темы.' },
      { en: 'They appealed for legal aid to fight the case.', ru: 'Они обратились за юридической помощью, чтобы вести дело.' }
    ]
),

createRichWord('b2_alter', 'Alter', '/ˈɔːltə/', 'олтэ', 'Изменять', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Вносить изменения в характер или состав чего-либо; менять (обычно слегка).',
    '- Одежда: "Alter a dress" (Перешить платье)\n- Планы: "Alter plans" (Изменить планы)\n- Жизнь: "Life-altering" (Меняющий жизнь)',
    [
      { en: 'We had to alter our travel plans due to the storm.', ru: 'Нам пришлось изменить наши планы на поездку из-за шторма.' },
      { en: 'The dress was too long, so I had it altered.', ru: 'Платье было слишком длинным, поэтому я его перешила (отдала укоротить).' },
      { en: 'Nothing can alter the fact that he was wrong.', ru: 'Ничто не может изменить тот факт, что он был неправ.' },
      { en: 'Technology has drastically altered the way we communicate.', ru: 'Технологии радикально изменили то, как мы общаемся.' }
    ]
),

createRichWord('b2_altogether', 'Altogether', '/ˌɔːltəˈɡeðə/', 'олтугезэ', 'В целом / Совсем', ProficiencyLevel.B2, 'adv', 'Medium', 'Neutral',
    'Полностью, всецело; или "в общей сложности".',
    '- Сумма: "Altogether 50 dollars" (Всего 50 долларов)\n- Мнение: "Altogether different" (Совершенно другой)\n- Итог: "Altogether bad" (Совсем плохо)',
    [
      { en: 'The train went slower and slower until it stopped altogether.', ru: 'Поезд ехал все медленнее и медленнее, пока не остановился совсем.' },
      { en: 'That costs fifty pounds altogether, including tax.', ru: 'Это стоит пятьдесят фунтов всего, включая налог.' },
      { en: 'I am not altogether sure that this is a good idea.', ru: 'Я не совсем уверен, что это хорошая идея.' },
      { en: 'Altogether, it was a very successful meeting.', ru: 'В целом, это была очень успешная встреча.' }
    ]
),

createRichWord('b2_amuse', 'Amuse', '/əˈmjuːz/', 'эмьюз', 'Развлекать / Смешить', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Вызывать смех или улыбку; занимать внимание приятным образом.',
    '- Реакция: "Amuse the kids" (Развлекать детей)\n- Ирония: "Not amused" (Не смешно / Не впечатлен)\n- Средство: "Amuse yourself" (Развлечься самому)',
    [
      { en: 'The clown managed to amuse the children for hours.', ru: 'Клоуну удавалось развлекать детей часами.' },
      { en: 'I tried to look serious, but his joke amused me.', ru: 'Я пытался выглядеть серьезным, но его шутка рассмешила меня.' },
      { en: 'She brought a book to amuse herself on the train.', ru: 'Она взяла книгу, чтобы развлечь себя в поезде.' },
      { en: 'The teacher was not amused by the student\'s behavior.', ru: 'Учителя не позабавило (не впечатлило) поведение ученика.' }
    ]
),

createRichWord('b2_appeal', 'Appeal', '/əˈpiːl/', 'эпил', 'Привлекательность / Призыв', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Качество быть привлекательным; или серьезный запрос/просьба (часто юридическая).',
    '- Интерес: "Have appeal" (Иметь привлекательность)\n- Просьба: "Appeal for help" (Призыв о помощи)\n- Суд: "Lodged an appeal" (Подал апелляцию)',
    [
      { en: 'The idea of camping in the rain holds no appeal for me.', ru: 'Идея кемпинга под дождем не имеет для меня никакой привлекательности.' },
      { en: 'Police made a public appeal for witnesses to the accident.', ru: 'Полиция выступила с публичным призывом к свидетелям аварии.' },
      { en: 'He decided to appeal against the court\'s decision.', ru: 'Он решил подать апелляцию на решение суда.' },
      { en: 'Bright colors appeal to small children.', ru: 'Яркие цвета привлекают маленьких детей.' }
    ]
),

createRichWord('b2_approach', 'Approach', '/əˈprəʊtʃ/', 'эпроуч', 'Подход / Приближение', ProficiencyLevel.B2, 'noun', 'High', 'Formal',
    'Способ делать что-то или решать проблему; также акт приближения к чему-то.',
    '- Метод: "New approach" (Новый подход)\n- Движение: "The approach of winter" (Приближение зимы)\n- Действие: "Approach cautiously" (Приближаться осторожно)',
    [
      { en: 'We need to try a different approach to solve this puzzle.', ru: 'Нам нужно попробовать другой подход, чтобы решить эту головоломку.' },
      { en: 'The approach of the storm made everyone nervous.', ru: 'Приближение шторма заставило всех нервничать.' },
      { en: 'She has a very practical approach to management.', ru: 'У нее очень практичный подход к управлению.' },
      { en: 'As you approach the town, you will see the castle.', ru: 'Когда вы будете приближаться к городу, вы увидите замок.' }
    ]
),

createRichWord('b2_assist', 'Assist', '/əˈsɪst/', 'эсист', 'Помогать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Формальный синоним слова "help". Оказывать поддержку или помощь.',
    '- Работа: "Assist in developing" (Помогать в разработке)\n- Услуга: "Assist a customer" (Помочь клиенту)\n- Спорт: "Assist a goal" (Сделать голевую передачу)',
    [
      { en: 'The nurse will assist the doctor during the operation.', ru: 'Медсестра будет ассистировать (помогать) врачу во время операции.' },
      { en: 'Please assist me in moving this heavy table.', ru: 'Пожалуйста, помогите мне передвинуть этот тяжелый стол.' },
      { en: 'The company uses software to assist with project management.', ru: 'Компания использует программное обеспечение для помощи в управлении проектами.' },
      { en: 'He was hired to assist the manager with daily tasks.', ru: 'Его наняли помогать менеджеру с ежедневными задачами.' }
    ]
),

createRichWord('b2_associate', 'Associate', '/əˈsəʊsieɪt/', 'эсоушиэйт', 'Ассоциировать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Связывать людей или вещи в своем сознании.',
    '- Связь: "Associate with" (Ассоциировать с / Общаться с)\n- Мысль: "Commonly associated" (Обычно ассоциируемый)\n- Бизнес: "Business associate" (Деловой партнер)',
    [
      { en: 'Most people associate this brand with high quality.', ru: 'Большинство людей ассоциируют этот бренд с высоким качеством.' },
      { en: 'I do not want to be associated with such dishonesty.', ru: 'Я не хочу, чтобы меня связывали с такой нечестностью.' },
      { en: 'Dark clouds are usually associated with rain.', ru: 'Темные облака обычно ассоциируются с дождем.' },
      { en: 'He prefers not to associate with people who lie.', ru: 'Он предпочитает не общаться с людьми, которые лгут.' }
    ]
),

createRichWord('b2_assume', 'Assume', '/əˈsjuːm/', 'эссьюм', 'Предполагать', ProficiencyLevel.B2, 'verb', 'High', 'Neutral',
    'Считать что-то истинным без доказательств; допускать.',
    '- Мысль: "I assume that..." (Я полагаю, что...)\n- Ошибка: "Wrongly assume" (Ошибочно предполагать)\n- Роль: "Assume responsibility" (Брать на себя ответственность)',
    [
      { en: 'I assume you have already finished your homework.', ru: 'Я полагаю, ты уже закончил домашнее задание.' },
      { en: 'Don\'t assume that everyone agrees with your opinion.', ru: 'Не думай (не предполагай), что все согласны с твоим мнением.' },
      { en: 'He will assume the role of team leader next week.', ru: 'На следующей неделе он возьмет на себя роль лидера команды.' },
      { en: 'It is a mistake to assume that the project will be easy.', ru: 'Ошибочно предполагать, что проект будет легким.' }
    ]
),

createRichWord('b2_assure', 'Assure', '/əˈʃʊə/', 'эшуэ', 'Уверять', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Говорить кому-то что-то позитивное, чтобы устранить сомнения; гарантировать.',
    '- Обещание: "I can assure you" (Я могу вас заверить)\n- Качество: "Rest assured" (Будьте уверены)\n- Безопасность: "Assure safety" (Обеспечить безопасность)',
    [
      { en: 'I can assure you that everything will be fine.', ru: 'Я могу заверить вас, что все будет хорошо.' },
      { en: 'She assured us that the car was in good condition.', ru: 'Она уверила нас, что машина в хорошем состоянии.' },
      { en: 'The manager assured the customer that the mistake would be fixed.', ru: 'Менеджер заверил клиента, что ошибка будет исправлена.' },
      { en: 'You can rest assured that we are doing our best.', ru: 'Можете быть уверены, что мы делаем все возможное.' }
    ]
  ),
createRichWord('b2_attempt', 'Attempt', '/əˈtempt/', 'этемпт', 'Попытка / Пытаться', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Акт старания сделать что-то, особенно что-то сложное (формальный синоним try).',
    '- Действие: "Make an attempt" (Сделать попытку)\n- Неудача: "Failed attempt" (Неудачная попытка)\n- Первый раз: "First attempt" (Первая попытка)',
    [
      { en: 'She made an attempt to climb the highest mountain but failed.', ru: 'Она предприняла попытку взобраться на самую высокую гору, но потерпела неудачу.' },
      { en: 'This is my second attempt at passing the driving test.', ru: 'Это моя вторая попытка сдать экзамен по вождению.' },
      { en: 'He attempted to apologize, but she wouldn\'t listen.', ru: 'Он попытался извиниться, но она не стала слушать.' },
      { en: 'The police stopped an attempt to rob the bank yesterday.', ru: 'Полиция предотвратила попытку ограбления банка вчера.' }
    ]
),

createRichWord('b2_attract', 'Attract', '/əˈtrækt/', 'этрэкт', 'Привлекать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Вызывать интерес или заставлять что-то приближаться (например, магнитом).',
    '- Туризм: "Attract tourists" (Привлекать туристов)\n- Внимание: "Attract attention" (Привлекать внимание)\n- Физика: "Magnets attract" (Магниты притягивают)',
    [
      { en: 'The beautiful flowers attract bees and butterflies to the garden.', ru: 'Красивые цветы привлекают пчел и бабочек в сад.' },
      { en: 'The museum attracts thousands of visitors every year.', ru: 'Музей привлекает тысячи посетителей каждый год.' },
      { en: 'She tried not to attract attention to herself in the meeting.', ru: 'Она старалась не привлекать к себе внимания на собрании.' },
      { en: 'Opposite poles of a magnet attract each other.', ru: 'Противоположные полюса магнита притягивают друг друга.' }
    ]
),

createRichWord('b2_automatic', 'Automatic', '/ˌɔːtəˈmætɪk/', 'отэмэтик', 'Автоматический', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Работающий самостоятельно без участия человека; или происходящий бессознательно.',
    '- Механизм: "Automatic doors" (Автоматические двери)\n- Рефлекс: "Automatic reaction" (Автоматическая реакция)\n- Оружие: "Automatic weapon" (Автоматическое оружие)',
    [
      { en: 'The automatic doors opened as we approached the hotel entrance.', ru: 'Автоматические двери открылись, когда мы подошли ко входу в отель.' },
      { en: 'Breathing is an automatic function of the human body.', ru: 'Дыхание — это автоматическая функция человеческого организма.' },
      { en: 'This washing machine has a fully automatic cycle.', ru: 'У этой стиральной машины есть полностью автоматический цикл.' },
      { en: 'My reaction to catch the falling glass was purely automatic.', ru: 'Моя реакция поймать падающий стакан была чисто автоматической.' }
    ]
),

createRichWord('b2_awkward', 'Awkward', '/ˈɔːkwəd/', 'окуэд', 'Неловкий / Неуклюжий', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Вызывающий смущение; трудный в обращении; или неграциозный в движениях.',
    '- Ситуация: "Awkward silence" (Неловкое молчание)\n- Чувство: "Feel awkward" (Чувствовать себя неловко)\n- Движение: "Awkward movement" (Неуклюжее движение)',
    [
      { en: 'There was an awkward silence after he made that rude joke.', ru: 'После того как он отпустил ту грубую шутку, повисло неловкое молчание.' },
      { en: 'I felt very awkward asking him for money again.', ru: 'Я чувствовал себя очень неловко, снова прося у него денег.' },
      { en: 'The heavy box was an awkward shape to carry alone.', ru: 'Тяжелая коробка была неудобной формы, чтобы нести ее в одиночку.' },
      { en: 'He is socially awkward and finds it hard to make friends.', ru: 'Он социально неловок, и ему трудно заводить друзей.' }
    ]
),

createRichWord('b2_basis', 'Basis', '/ˈbeɪsɪs/', 'бейсис', 'Основа / Базис', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Причина или фундамент, на котором что-то строится; принцип регулярности.',
    '- Регулярность: "On a daily basis" (На ежедневной основе)\n- Основание: "The basis of" (Основа чего-либо)\n- Факт: "No basis in fact" (Без фактической основы)',
    [
      { en: 'We meet on a weekly basis to discuss the project progress.', ru: 'Мы встречаемся на еженедельной основе, чтобы обсудить прогресс проекта.' },
      { en: 'Trust is the basis of any good relationship.', ru: 'Доверие — это основа любых хороших отношений.' },
      { en: 'There is no legal basis for this complaint against him.', ru: 'Для этой жалобы на него нет никаких юридических оснований.' },
      { en: 'She was hired on a temporary basis for three months.', ru: 'Ее наняли на временной основе на три месяца.' }
    ]
),

createRichWord('b2_battle', 'Battle', '/ˈbæt(ə)l/', 'бэтл', 'Битва / Сражение', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Бой между армиями или борьба с чем-то сложным.',
    '- Война: "Win the battle" (Выиграть битву)\n- Борьба: "Battle against cancer" (Борьба с раком)\n- Конфликт: "Legal battle" (Судебная тяжба)',
    [
      { en: 'The soldiers fought a fierce battle to defend the city.', ru: 'Солдаты вели ожесточенную битву, чтобы защитить город.' },
      { en: 'She is fighting a long battle against a serious illness.', ru: 'Она ведет долгую борьбу с серьезной болезнью.' },
      { en: 'It was a battle of wills between the two stubborn leaders.', ru: 'Это была битва воли между двумя упрямыми лидерами.' },
      { en: 'Thousands of men died in the final battle of the war.', ru: 'Тысячи людей погибли в последней битве войны.' }
    ]
),

createRichWord('b2_bay', 'Bay', '/beɪ/', 'бей', 'Залив / Бухта', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Часть моря, вдающаяся в сушу по широкой дуге.',
    '- География: "San Francisco Bay" (Залив Сан-Франциско)\n- Вид: "View of the bay" (Вид на залив)\n- Парковка: "Parking bay" (Парковочное место/карман)',
    [
      { en: 'The ship anchored in the calm waters of the bay.', ru: 'Корабль бросил якорь в спокойных водах залива.' },
      { en: 'We have a beautiful view of the bay from our hotel window.', ru: 'Из окна нашего отеля открывается прекрасный вид на залив.' },
      { en: 'They went swimming in the shallow water of the bay.', ru: 'Они пошли купаться на мелководье в бухте.' },
      { en: 'Please park your car in the marked parking bay.', ru: 'Пожалуйста, припаркуйте машину в обозначенном парковочном кармане.' }
    ]
),

createRichWord('b2_beg', 'Beg', '/beɡ/', 'бег', 'Умолять / Просить милостыню', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Просить о чем-то очень настойчиво или просить деньги/еду у незнакомцев.',
    '- Просьба: "Beg for mercy" (Умолять о пощаде)\n- Деньги: "Beg on the streets" (Попрошайничать на улицах)\n- Извинение: "I beg your pardon" (Прошу прощения)',
    [
      { en: 'The homeless man had to beg for money to buy food.', ru: 'Бездомному человеку приходилось просить деньги, чтобы купить еду.' },
      { en: 'I beg you, please do not tell anyone my secret.', ru: 'Я умоляю тебя, пожалуйста, не рассказывай никому мой секрет.' },
      { en: 'She begged her father to let her go to the party.', ru: 'Она умоляла отца отпустить ее на вечеринку.' },
      { en: 'The dog sat up to beg for a treat from the table.', ru: 'Собака села, чтобы выпросить угощение со стола.' }
    ]
),

createRichWord('b2_blank', 'Blank', '/blæŋk/', 'блэнк', 'Пустой / Чистый', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Не имеющий ничего на поверхности (о бумаге) или не выражающий эмоций (о лице).',
    '- Бумага: "Blank sheet" (Чистый лист)\n- Лицо: "Blank expression" (Пустое выражение лица)\n- Память: "Go blank" (Отключиться/Стать пустым)',
    [
      { en: 'Please write your name on the blank piece of paper.', ru: 'Пожалуйста, напишите свое имя на чистом листе бумаги.' },
      { en: 'His mind went blank during the exam, and he forgot everything.', ru: 'Его разум отключился во время экзамена, и он все забыл.' },
      { en: 'She stared at me with a blank expression on her face.', ru: 'Она смотрела на меня с пустым выражением лица.' },
      { en: 'Leave the last column of the form blank for office use.', ru: 'Оставьте последнюю колонку формы пустой для служебного пользования.' }
    ]
),

createRichWord('b2_bless', 'Bless', '/bles/', 'блес', 'Благословлять', ProficiencyLevel.B2, 'verb', 'Medium', 'Literary',
    'Просить божественной защиты; или делать что-то святым. Часто используется в "Bless you" (Будь здоров).',
    '- Религия: "God bless you" (Да благословит вас Бог)\n- Чихание: "Bless you" (Будь здоров)\n- Удача: "Blessed with" (Одаренный чем-то)',
    [
      { en: 'The priest raised his hand to bless the people.', ru: 'Священник поднял руку, чтобы благословить людей.' },
      { en: 'We feel blessed to have such wonderful children.', ru: 'Мы чувствуем себя благословленными (счастливыми), имея таких замечательных детей.' },
      { en: 'Everyone said "bless you" when she sneezed loudly.', ru: 'Все сказали "будь здоров", когда она громко чихнула.' },
      { en: 'May fortune bless you in all your future endeavors.', ru: 'Пусть удача благословит вас во всех ваших будущих начинаниях.' }
    ]
  ),
createRichWord('b2_bloom', 'Bloom', '/bluːm/', 'блум', 'Цвести / Цветение', ProficiencyLevel.B2, 'verb', 'Medium', 'Literary',
    'Процесс раскрытия цветов; или период, когда цветы раскрыты.',
    '- Природа: "In full bloom" (В полном цвету)\n- Весна: "Flowers bloom" (Цветы цветут)\n- Метафора: "Bloom with health" (Цвести здоровьем)',
    [
      { en: 'The cherry trees in the park bloom beautifully every spring.', ru: 'Вишневые деревья в парке красиво цветут каждую весну.' },
      { en: 'The garden looked amazing with all the roses in full bloom.', ru: 'Сад выглядел потрясающе со всеми розами в полном цвету.' },
      { en: 'Their relationship began to bloom after working together for months.', ru: 'Их отношения начали расцветать после месяцев совместной работы.' },
      { en: 'Rare exotic plants bloom only once every few years.', ru: 'Редкие экзотические растения цветут только раз в несколько лет.' }
    ]
),

createRichWord('b2_bond', 'Bond', '/bɒnd/', 'бонд', 'Связь / Облигация', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Сильная связь между людьми; или финансовый документ.',
    '- Отношения: "Strong bond" (Сильная связь)\n- Семья: "Bond between mother and child" (Связь между матерью и ребенком)\n- Химия: "Chemical bond" (Химическая связь)',
    [
      { en: 'There is a very strong bond between the two brothers.', ru: 'Между двумя братьями существует очень сильная связь.' },
      { en: 'Shared experiences help to create a bond within the team.', ru: 'Общий опыт помогает создать связь внутри команды.' },
      { en: 'The glue creates a permanent bond between the wood and metal.', ru: 'Клей создает постоянное сцепление между деревом и металлом.' },
      { en: 'Grandparents often form a special bond with their grandchildren.', ru: 'Бабушки и дедушки часто образуют особую связь со своими внуками.' }
    ]
),

createRichWord('b2_boom', 'Boom', '/buːm/', 'бум', 'Бум / Грохот', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Период быстрого экономического роста; или глубокий громкий звук.',
    '- Экономика: "Economic boom" (Экономический бум)\n- Звук: "Sonic boom" (Звуковой удар)\n- Рост: "Population boom" (Демографический взрыв)',
    [
      { en: 'The country experienced an economic boom in the late nineties.', ru: 'Страна пережила экономический бум в конце девяностых.' },
      { en: 'We heard a loud boom like thunder coming from the distance.', ru: 'Мы услышали громкий грохот, похожий на гром, доносящийся издалека.' },
      { en: 'There has been a boom in mobile phone sales recently.', ru: 'В последнее время наблюдается бум продаж мобильных телефонов.' },
      { en: 'The sudden boom shook the windows of the entire house.', ru: 'Внезапный грохот потряс окна всего дома.' }
    ]
),

createRichWord('b2_bounce', 'Bounce', '/baʊns/', 'баунс', 'Отскакивать / Подпрыгивать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Двигаться вверх или в сторону после удара о поверхность; или прыгать энергично.',
    '- Спорт: "Ball bounces" (Мяч отскакивает)\n- Интернет: "Email bounced" (Письмо вернулось)\n- Движение: "Bounce up and down" (Прыгать вверх-вниз)',
    [
      { en: 'The tennis ball bounced high over the net and out of court.', ru: 'Теннисный мяч высоко отскочил над сеткой и вылетел за пределы корта.' },
      { en: 'She bounced into the room full of energy and happiness.', ru: 'Она ворвалась (впрыгнула) в комнату, полная энергии и счастья.' },
      { en: 'If the email address is wrong, the message will bounce back.', ru: 'Если адрес электронной почты неверен, сообщение вернется обратно.' },
      { en: 'Children love to bounce on the bed when parents are not looking.', ru: 'Дети любят прыгать на кровати, когда родители не смотрят.' }
    ]
),

createRichWord('b2_bow', 'Bow', '/baʊ/', 'бау', 'Кланяться', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Наклонять голову или тело вперед в знак уважения или приветствия (обратите внимание: произносится как "cow").',
    '- Уважение: "Bow deeply" (Глубоко поклониться)\n- Театр: "Take a bow" (Выйти на поклон)\n- Голова: "Bow your head" (Склонить голову)',
    [
      { en: 'The actors came back on stage to bow to the audience.', ru: 'Актеры вернулись на сцену, чтобы поклониться зрителям.' },
      { en: 'In Japanese culture, it is polite to bow when you meet someone.', ru: 'В японской культуре принято кланяться при встрече с кем-то.' },
      { en: 'He bowed his head in shame after admitting his mistake.', ru: 'Он склонил голову от стыда, признав свою ошибку.' },
      { en: 'The waiter bowed slightly as he showed us to our table.', ru: 'Официант слегка поклонился, провожая нас к нашему столику.' }
    ]
),

createRichWord('b2_breast', 'Breast', '/brest/', 'брест', 'Грудь', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Передняя часть тела между шеей и животом; или молочная железа.',
    '- Еда: "Chicken breast" (Куриная грудка)\n- Здоровье: "Breast cancer" (Рак груди)\n- Вскармливание: "Breast milk" (Грудное молоко)',
    [
      { en: 'She grilled a chicken breast with vegetables for dinner.', ru: 'Она приготовила на гриле куриную грудку с овощами на ужин.' },
      { en: 'The mother held her sleeping baby against her breast.', ru: 'Мать прижала спящего ребенка к груди.' },
      { en: 'Doctors recommend checking your breasts regularly for lumps.', ru: 'Врачи рекомендуют регулярно проверять грудь на наличие уплотнений.' },
      { en: 'He felt a sharp pain in his left breast while running.', ru: 'Он почувствовал острую боль в левой части груди во время бега.' }
    ]
),

createRichWord('b2_brick', 'Brick', '/brɪk/', 'брик', 'Кирпич', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Прямоугольный блок из обожженной глины, используемый для строительства стен и домов.',
    '- Материал: "Red brick" (Красный кирпич)\n- Здание: "Brick wall" (Кирпичная стена)\n- Метафора: "Hit a brick wall" (Зайти в тупик)',
    [
      { en: 'They live in a beautiful house made of red brick.', ru: 'Они живут в красивом доме, построенном из красного кирпича.' },
      { en: 'The thief threw a brick through the shop window.', ru: 'Вор бросил кирпич в витрину магазина.' },
      { en: 'We need to buy more bricks to finish building the garden wall.', ru: 'Нам нужно купить больше кирпичей, чтобы закончить садовую стену.' },
      { en: 'The path was paved with yellow bricks leading to the gate.', ru: 'Дорожка, ведущая к воротам, была вымощена желтым кирпичом.' }
    ]
  ),
createRichWord('b2_abandon', 'Abandon', '/əˈbændən/', 'эбэндэн', 'Покидать / Бросать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Оставить место, вещь или человека, обычно навсегда.',
    '- Место: "Abandon the house" (Покинуть дом)\n- Идея: "Abandon hope" (Оставить надежду)\n- Транспорт: "Abandon ship" (Покинуть корабль)',
    [
      { en: 'They had to abandon their car in the heavy snow.', ru: 'Им пришлось бросить свою машину в сильном снегу.' },
      { en: 'The captain gave the order to abandon ship immediately.', ru: 'Капитан отдал приказ немедленно покинуть корабль.' },
      { en: 'He decided to abandon his plan to move to London.', ru: 'Он решил отказаться от (бросить) своего плана переехать в Лондон.' },
      { en: 'The baby was found abandoned on the church steps.', ru: 'Ребенка нашли брошенным на ступеньках церкви.' }
    ]
),

createRichWord('b2_absence', 'Absence', '/ˈæbsəns/', 'эбсэнс', 'Отсутствие', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Состояние, когда кого-то нет в месте, где его ожидают; или нехватка чего-либо.',
    '- Работа: "Leave of absence" (Отпуск/отгул)\n- Факт: "In my absence" (В моем отсутствии)\n- Нехватка: "Absence of evidence" (Отсутствие доказательств)',
    [
      { en: 'Ms. Smith will be in charge during my absence next week.', ru: 'Г-жа Смит будет главной во время моего отсутствия на следующей неделе.' },
      { en: 'His prolonged absence from school caused concern for his teachers.', ru: 'Его длительное отсутствие в школе вызвало беспокойство учителей.' },
      { en: 'The absence of rain has led to a serious drought in the area.', ru: 'Отсутствие дождя привело к серьезной засухе в этом районе.' },
      { en: 'She noticed the absence of her ring immediately.', ru: 'Она сразу заметила отсутствие своего кольца.' }
    ]
),

createRichWord('b2_absorb', 'Absorb', '/əbˈzɔːb/', 'эбзоб', 'Поглощать / Впитывать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Вбирать в себя жидкость, информацию или энергию.',
    '- Жидкость: "Absorb water" (Впитывать воду)\n- Информация: "Absorb information" (Усваивать информацию)\n- Удар: "Absorb the shock" (Поглощать удар)',
    [
      { en: 'Plants absorb water and nutrients from the soil through roots.', ru: 'Растения впитывают воду и питательные вещества из почвы через корни.' },
      { en: 'The sponge absorbs liquid very quickly and efficiently.', ru: 'Губка впитывает жидкость очень быстро и эффективно.' },
      { en: 'It was hard to absorb so much new information in one day.', ru: 'Было трудно усвоить (впитать) так много новой информации за один день.' },
      { en: 'Black surfaces absorb heat from the sun more than white ones.', ru: 'Черные поверхности поглощают тепло от солнца сильнее, чем белые.' }
    ]
),

createRichWord('b2_abstract', 'Abstract', '/ˈæbstrækt/', 'эбстрэкт', 'Абстрактный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Существующий как идея, чувство или качество, а не как материальный объект.',
    '- Искусство: "Abstract art" (Абстрактное искусство)\n- Идея: "Abstract concept" (Абстрактное понятие)\n- Мышление: "Abstract thinking" (Абстрактное мышление)',
    [
      { en: 'Truth and beauty are abstract concepts that are hard to define.', ru: 'Истина и красота — это абстрактные понятия, которые трудно определить.' },
      { en: 'She prefers painting abstract art rather than realistic portraits.', ru: 'Она предпочитает писать абстрактные картины, а не реалистичные портреты.' },
      { en: 'The discussion became too abstract, so we asked for examples.', ru: 'Обсуждение стало слишком абстрактным, поэтому мы попросили привести примеры.' },
      { en: 'Young children often find it difficult to understand abstract ideas.', ru: 'Маленьким детям часто трудно понять абстрактные идеи.' }
    ]
),

createRichWord('b2_accompany', 'Accompany', '/əˈkʌmpəni/', 'экáмпэни', 'Сопровождать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Идти куда-то с кем-то в качестве компаньона или помощника; происходить одновременно.',
    '- Люди: "Accompany a friend" (Сопровождать друга)\n- Музыка: "Accompany on piano" (Аккомпанировать на пианино)\n- Документы: "Attached to accompany" (Приложенный для сопровождения)',
    [
      { en: 'Children under twelve must be accompanied by an adult.', ru: 'Дети до двенадцати лет должны сопровождаться взрослым.' },
      { en: 'I would be delighted if you could accompany me to the gala.', ru: 'Я был бы рад, если бы вы могли сопровождать меня на гала-вечере.' },
      { en: 'Thunder often accompanies heavy rain during summer storms.', ru: 'Гром часто сопровождает сильный дождь во время летних штормов.' },
      { en: 'He accompanied her singing by playing the guitar beautifully.', ru: 'Он аккомпанировал ее пению, красиво играя на гитаре.' }
    ]
),

createRichWord('b2_accomplish', 'Accomplish', '/əˈkʌmplɪʃ/', 'экáмплиш', 'Выполнять / Достигать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Успешно завершить задачу или достичь цели, часто требующей усилий.',
    '- Миссия: "Accomplish a mission" (Выполнить миссию)\n- Задача: "Accomplish a task" (Выполнить задачу)\n- Чувство: "Feel accomplished" (Чувствовать удовлетворение от сделанного)',
    [
      { en: 'We have accomplished a lot in a very short period of time.', ru: 'Мы достигли многого за очень короткий период времени.' },
      { en: 'She felt she had accomplished something important by helping them.', ru: 'Она чувствовала, что совершила что-то важное, помогая им.' },
      { en: 'It will take months to accomplish this ambitious project.', ru: 'Потребуются месяцы, чтобы выполнить этот амбициозный проект.' },
      { en: 'Mission accomplished: the team has safely returned home.', ru: 'Миссия выполнена: команда благополучно вернулась домой.' }
    ]
),

createRichWord('b2_accurate', 'Accurate', '/ˈækjərət/', 'экьюрэт', 'Точный', ProficiencyLevel.B2, 'adj', 'High', 'Neutral',
    'Правильный во всех деталях; безошибочный.',
    '- Информация: "Accurate information" (Точная информация)\n- Время: "Accurate watch" (Точные часы)\n- Описание: "Accurate description" (Точное описание)',
    [
      { en: 'It is important to keep accurate records of all expenses.', ru: 'Важно вести точные записи всех расходов.' },
      { en: 'The witness gave an accurate description of the thief.', ru: 'Свидетель дал точное описание вора.' },
      { en: 'These figures are not completely accurate and need checking.', ru: 'Эти цифры не совсем точны и нуждаются в проверке.' },
      { en: 'Is this thermometer accurate enough for medical use?', ru: 'Достаточно ли точен этот термометр для медицинского использования?' }
    ]
),

createRichWord('b2_ache', 'Ache', '/eɪk/', 'эйк', 'Болеть / Боль', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Испытывать непрерывную тупую боль (глагол) или сама эта боль (сущ).',
    '- Голова: "Head ache" (Головная боль)\n- Тело: "Whole body aches" (Все тело болит)\n- Желание: "Ache for home" (Тосковать по дому)',
    [
      { en: 'My legs ache after running the marathon yesterday.', ru: 'Мои ноги болят после вчерашнего марафона.' },
      { en: 'She felt a dull ache in her stomach all morning.', ru: 'Она чувствовала тупую боль в животе все утро.' },
      { en: 'His heart ached when he saw the sad news on TV.', ru: 'Его сердце сжалось от боли, когда он увидел печальные новости по ТВ.' },
      { en: 'I have a terrible toothache and need to see a dentist.', ru: 'У меня ужасная зубная боль, и мне нужно к стоматологу.' }
    ]
),

createRichWord('b2_acknowledge', 'Acknowledge', '/əkˈnɒlɪdʒ/', 'экнóлидж', 'Признавать / Подтверждать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Принять или допустить существование или истинность чего-либо; подтвердить получение.',
    '- Факт: "Acknowledge the truth" (Признать правду)\n- Письмо: "Acknowledge receipt" (Подтвердить получение)\n- Присутствие: "Acknowledge someone" (Заметить/поприветствовать кого-то)',
    [
      { en: 'He refuses to acknowledge that he made a serious mistake.', ru: 'Он отказывается признавать, что совершил серьезную ошибку.' },
      { en: 'Please acknowledge receipt of this email by replying.', ru: 'Пожалуйста, подтвердите получение этого письма ответом.' },
      { en: 'She walked past me without even acknowledging my presence.', ru: 'Она прошла мимо меня, даже не заметив (не признав) моего присутствия.' },
      { en: 'The government acknowledged the need for environmental reform.', ru: 'Правительство признало необходимость экологической реформы.' }
    ]
),

createRichWord('b2_acquire', 'Acquire', '/əˈkwaɪə/', 'эквáйэ', 'Приобретать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Купить или получить что-то (формальный синоним get/buy); или овладеть навыком.',
    '- Знания: "Acquire knowledge" (Приобретать знания)\n- Навык: "Acquire a skill" (Овладеть навыком)\n- Имущество: "Acquire property" (Приобрести собственность)',
    [
      { en: 'He has acquired a reputation for being difficult to work with.', ru: 'Он приобрел репутацию человека, с которым трудно работать.' },
      { en: 'The company managed to acquire its largest competitor.', ru: 'Компании удалось приобрести своего крупнейшего конкурента.' },
      { en: 'It takes a long time to acquire fluency in a foreign language.', ru: 'Требуется много времени, чтобы овладеть беглостью в иностранном языке.' },
      { en: 'She acquired a valuable painting at the auction yesterday.', ru: 'Вчера она приобрела ценную картину на аукционе.' }
    ]
),

createRichWord('b2_addict', 'Addict', '/ˈædɪkt/', 'эдикт', 'Зависимый / Наркоман', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Человек, который не может перестать делать что-то или употреблять что-то (обычно вредное).',
    '- Наркотики: "Drug addict" (Наркоман)\n- Игры: "Gaming addict" (Игроман)\n- Шоколад: "Chocoholic/Addict" (Зависимый от шоколада)',
    [
      { en: 'He became a gambling addict and lost all his savings.', ru: 'Он стал зависимым от азартных игр и потерял все свои сбережения.' },
      { en: 'She is a self-confessed television addict.', ru: 'Она по собственному признанию зависима от телевидения.' },
      { en: 'Treatment centers help drug addicts recover from addiction.', ru: 'Лечебные центры помогают наркоманам излечиться от зависимости.' },
      { en: 'My brother is a computer game addict; he plays all night.', ru: 'Мой брат — игроман; он играет в компьютерные игры всю ночь.' }
    ]
),

createRichWord('b2_adequate', 'Adequate', '/ˈædɪkwət/', 'эдиквэт', 'Адекватный / Достаточный', ProficiencyLevel.B2, 'adj', 'Medium', 'Formal',
    'Достаточный по качеству или количеству для определенной цели; приемлемый.',
    '- Количество: "Adequate supply" (Достаточный запас)\n- Качество: "Adequate performance" (Приемлемое исполнение)\n- Условия: "Adequate housing" (Надлежащее жилье)',
    [
      { en: 'The room was small but adequate for a single person.', ru: 'Комната была маленькой, но достаточной (подходящей) для одного человека.' },
      { en: 'We need to ensure there is adequate food for everyone.', ru: 'Нам нужно убедиться, что еды достаточно для всех.' },
      { en: 'His salary is adequate to support his family comfortably.', ru: 'Его зарплаты достаточно, чтобы с комфортом содержать семью.' },
      { en: 'The security measures were not adequate to prevent the theft.', ru: 'Меры безопасности были неадекватны (недостаточны) для предотвращения кражи.' }
    ]
),

createRichWord('b2_adjust', 'Adjust', '/əˈdʒʌst/', 'эджатст', 'Регулировать / Приспосабливаться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Слегка изменить что-то, чтобы сделать это правильным; или привыкнуть к новым условиям.',
    '- Изменение: "Adjust the settings" (Отрегулировать настройки)\n- Привыкание: "Adjust to life" (Приспособиться к жизни)\n- Одежда: "Adjust tie" (Поправить галстук)',
    [
      { en: 'You can adjust the height of the chair to suit your desk.', ru: 'Вы можете отрегулировать высоту стула, чтобы она подходила к вашему столу.' },
      { en: 'It took him a while to adjust to living in a new country.', ru: 'Ему потребовалось время, чтобы приспособиться к жизни в новой стране.' },
      { en: 'She adjusted her glasses and looked at the document again.', ru: 'Она поправила очки и снова посмотрела на документ.' },
      { en: 'Eyes slowly adjust to the darkness after turning off the lights.', ru: 'Глаза медленно привыкают к темноте после выключения света.' }
    ]
),

createRichWord('b2_administration', 'Administration', '/ədˌmɪnɪˈstreɪʃn/', 'эдминистрейшн', 'Администрация / Управление', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Процесс управления бизнесом или организацией; или правительство (в США).',
    '- Бизнес: "Business administration" (Управление бизнесом)\n- Правительство: "Trump administration" (Администрация Трампа)\n- Процесс: "Daily administration" (Повседневное управление)',
    [
      { en: 'She works in the administration department of the hospital.', ru: 'Она работает в административном отделе больницы.' },
      { en: 'The administration of the company involves a lot of paperwork.', ru: 'Управление компанией включает в себя много бумажной работы.' },
      { en: 'The new administration promised to cut taxes next year.', ru: 'Новая администрация (правительство) пообещала снизить налоги в следующем году.' },
      { en: 'He is studying for a degree in Public Administration.', ru: 'Он учится на степень в области государственного управления.' }
    ]
),

createRichWord('b2_admission', 'Admission', '/ədˈmɪʃn/', 'эдмишн', 'Вход / Признание', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Разрешение войти (или плата за вход); или признание правды.',
    '- Вход: "Free admission" (Бесплатный вход)\n- Признание: "Admission of guilt" (Признание вины)\n- Университет: "University admission" (Поступление в университет)',
    [
      { en: 'Admission to the museum is free on Sundays.', ru: 'Вход в музей бесплатный по воскресеньям.' },
      { en: 'His admission of guilt surprised everyone in the court.', ru: 'Его признание вины удивило всех в суде.' },
      { en: 'She applied for admission to several prestigious universities.', ru: 'Она подала заявление на поступление в несколько престижных университетов.' },
      { en: 'The cost of admission includes a free guide book.', ru: 'Стоимость входного билета включает бесплатный путеводитель.' }
    ]
),

createRichWord('b2_adopt', 'Adopt', '/əˈdɒpt/', 'эдопт', 'Усыновлять / Принимать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Законно взять чужого ребенка (или животное) в свою семью; или начать использовать новый метод/идею.',
    '- Семья: "Adopt a child" (Усыновить ребенка)\n- Животные: "Adopt a dog" (Взять собаку из приюта)\n- Метод: "Adopt a strategy" (Принять стратегию)',
    [
      { en: 'They decided to adopt a child after years of waiting.', ru: 'Они решили усыновить ребенка после долгих лет ожидания.' },
      { en: 'Our company has adopted a new policy regarding remote work.', ru: 'Наша компания приняла новую политику в отношении удаленной работы.' },
      { en: 'We went to the shelter to adopt a puppy.', ru: 'Мы пошли в приют, чтобы взять щенка.' },
      { en: 'The school adopted a more modern approach to teaching.', ru: 'Школа приняла более современный подход к обучению.' }
    ]
),

createRichWord('b2_agenda', 'Agenda', '/əˈdʒendə/', 'эджендэ', 'Повестка дня', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Список вопросов, подлежащих обсуждению на собрании.',
    '- Собрание: "On the agenda" (На повестке дня)\n- Скрытое: "Hidden agenda" (Скрытые мотивы)\n- План: "Set the agenda" (Определить повестку)',
    [
      { en: 'The first item on the agenda is the budget for next year.', ru: 'Первый пункт повестки дня — бюджет на следующий год.' },
      { en: 'We have a very full agenda for today\'s meeting.', ru: 'У нас очень насыщенная повестка дня на сегодняшнее собрание.' },
      { en: 'I suspect he has a hidden agenda behind his proposal.', ru: 'Я подозреваю, что за его предложением стоят скрытые мотивы.' },
      { en: 'Let\'s stick to the agenda to finish on time.', ru: 'Давайте придерживаться повестки дня, чтобы закончить вовремя.' }
    ]
),

createRichWord('b2_aggressive', 'Aggressive', '/əˈɡresɪv/', 'эгресив', 'Агрессивный', ProficiencyLevel.B2, 'adj', 'High', 'Neutral',
    'Ведущий себя сердито или жестоко; или очень решительный (в бизнесе).',
    '- Поведение: "Aggressive behavior" (Агрессивное поведение)\n- Бизнес: "Aggressive marketing" (Агрессивный маркетинг)\n- Животное: "Aggressive dog" (Агрессивная собака)',
    [
      { en: 'He gets aggressive when he drinks too much alcohol.', ru: 'Он становится агрессивным, когда выпивает слишком много алкоголя.' },
      { en: 'The company launched an aggressive marketing campaign.', ru: 'Компания запустила агрессивную маркетинговую кампанию.' },
      { en: 'Some types of cancer require aggressive treatment.', ru: 'Некоторые виды рака требуют агрессивного лечения.' },
      { en: 'Please keep your aggressive dog on a leash.', ru: 'Пожалуйста, держите вашу агрессивную собаку на поводке.' }
    ]
),

createRichWord('b2_agriculture', 'Agriculture', '/ˈæɡrɪkʌltʃə/', 'эгрикалчэ', 'Сельское хозяйство', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Практика земледелия, выращивания сельскохозяйственных культур и разведения животных.',
    '- Сектор: "Agriculture industry" (Сельскохозяйственная отрасль)\n- Тип: "Modern agriculture" (Современное сельское хозяйство)\n- Метод: "Sustainable agriculture" (Устойчивое сельское хозяйство)',
    [
      { en: 'Agriculture is the main source of income for this region.', ru: 'Сельское хозяйство является основным источником дохода для этого региона.' },
      { en: 'New technology has completely changed modern agriculture.', ru: 'Новые технологии полностью изменили современное сельское хозяйство.' },
      { en: 'Many people work in agriculture in rural areas.', ru: 'Многие люди работают в сельском хозяйстве в сельской местности.' },
      { en: 'The minister of agriculture announced new subsidies for farmers.', ru: 'Министр сельского хозяйства объявил о новых субсидиях для фермеров.' }
    ]
),

createRichWord('b2_aircraft', 'Aircraft', '/ˈeəkrɑːft/', 'эйэкрафт', 'Воздушное судно', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Любая машина, способная летать (самолет, вертолет).',
    '- Тип: "Military aircraft" (Военный самолет)\n- Мн. число: "Two aircraft" (Два самолета - форма не меняется)\n- Действие: "Board the aircraft" (Сесть на борт судна)',
    [
      { en: 'The aircraft landed safely despite the strong winds.', ru: 'Воздушное судно благополучно приземлилось, несмотря на сильный ветер.' },
      { en: 'Several military aircraft were seen flying over the border.', ru: 'Несколько военных самолетов были замечены пролетающими над границей.' },
      { en: 'All passengers must remain seated while the aircraft is moving.', ru: 'Все пассажиры должны оставаться на своих местах, пока самолет движется.' },
      { en: 'This is a small aircraft designed for only two people.', ru: 'Это маленький самолет, рассчитанный всего на двух человек.' }
    ]
),

createRichWord('b2_alongside', 'Alongside', '/əˌlɒŋˈsaɪd/', 'элонсайд', 'Рядом / Бок о бок', ProficiencyLevel.B2, 'prep', 'Medium', 'Neutral',
    'Рядом с чем-то или вместе с кем-то.',
    '- Место: "Park alongside" (Парковаться рядом)\n- Работа: "Work alongside" (Работать бок о бок)\n- Лодка: "Come alongside" (Пришвартоваться бортом)',
    [
      { en: 'A police car pulled up alongside us at the traffic lights.', ru: 'Полицейская машина остановилась рядом с нами на светофоре.' },
      { en: 'He worked alongside his father in the family business.', ru: 'Он работал бок о бок со своим отцом в семейном бизнесе.' },
      { en: 'The boat was tied up alongside the quay.', ru: 'Лодка была привязана вдоль набережной.' },
      { en: 'Traditional medicine is often used alongside modern treatments.', ru: 'Традиционная медицина часто используется наряду с современными методами лечения.' }
    ]
),

createRichWord('b2_analyst', 'Analyst', '/ˈænəlɪst/', 'энэлист', 'Аналитик', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Человек, чья работа заключается в изучении или анализе чего-либо (например, рынков или систем).',
    '- Финансы: "Financial analyst" (Финансовый аналитик)\n- IT: "Systems analyst" (Системный аналитик)\n- Политика: "Political analyst" (Политолог/аналитик)',
    [
      { en: 'She works as a financial analyst for a big bank in London.', ru: 'Она работает финансовым аналитиком в крупном банке в Лондоне.' },
      { en: 'Market analysts predict that prices will rise next year.', ru: 'Рыночные аналитики предсказывают, что цены вырастут в следующем году.' },
      { en: 'The political analyst discussed the election results on TV.', ru: 'Политический аналитик обсуждал результаты выборов по ТВ.' },
      { en: 'A systems analyst designs computer solutions for businesses.', ru: 'Системный аналитик разрабатывает компьютерные решения для бизнеса.' }
    ]
),

createRichWord('b2_angle', 'Angle', '/ˈæŋɡ(ə)l/', 'энгл', 'Угол / Точка зрения', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Пространство между двумя пересекающимися линиями; или способ рассмотрения проблемы.',
    '- Геометрия: "Right angle" (Прямой угол)\n- Точка зрения: "From a different angle" (Под другим углом)\n- Фото: "Camera angle" (Ракурс камеры)',
    [
      { en: 'The camera angle made the actor look much taller.', ru: 'Ракурс камеры заставил актера выглядеть намного выше.' },
      { en: 'Try to look at the problem from a different angle.', ru: 'Попробуй посмотреть на проблему под другим углом.' },
      { en: 'The lines meet at a ninety-degree angle.', ru: 'Линии пересекаются под углом девяносто градусов.' },
      { en: 'The article discusses the story from a political angle.', ru: 'Статья обсуждает историю с политической точки зрения.' }
    ]
),

createRichWord('b2_anxiety', 'Anxiety', '/æŋˈzaɪəti/', 'энгзайэти', 'Тревога / Беспокойство', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Чувство беспокойства, нервозности или страха, обычно по поводу предстоящего события.',
    '- Здоровье: "Anxiety attack" (Приступ тревоги)\n- Причина: "Cause anxiety" (Вызывать тревогу)\n- Уровень: "High anxiety" (Сильная тревога)',
    [
      { en: 'She suffers from anxiety before public speaking.', ru: 'Она страдает от тревоги перед публичными выступлениями.' },
      { en: 'Waiting for the exam results caused him a lot of anxiety.', ru: 'Ожидание результатов экзамена вызвало у него сильное беспокойство.' },
      { en: 'Meditation can help reduce stress and anxiety levels.', ru: 'Медитация может помочь снизить уровень стресса и тревоги.' },
      { en: 'There is growing anxiety about the economic situation.', ru: 'Растет беспокойство по поводу экономической ситуации.' }
    ]
),

createRichWord('b2_apology', 'Apology', '/əˈpɒlədʒi/', 'эпóлэджи', 'Извинение', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Заявление о том, что вы сожалеете о сделанном неправильно.',
    '- Действие: "Make an apology" (Принести извинения)\n- Принятие: "Accept apology" (Принять извинения)\n- Тип: "Public apology" (Публичное извинение)',
    [
      { en: 'He wrote a letter of apology for his rude behavior.', ru: 'Он написал письмо с извинениями за свое грубое поведение.' },
      { en: 'Please accept my sincere apology for the delay.', ru: 'Пожалуйста, примите мои искренние извинения за задержку.' },
      { en: 'She owes you an apology for breaking your phone.', ru: 'Она должна тебе извинения за то, что разбила твой телефон.' },
      { en: 'The company issued a public apology to its customers.', ru: 'Компания принесла публичные извинения своим клиентам.' }
    ]
),

createRichWord('b2_appropriate', 'Appropriate', '/əˈprəʊpriət/', 'эпрóуприэт', 'Подходящий / Соответствующий', ProficiencyLevel.B2, 'adj', 'High', 'Formal',
    'Подходящий или правильный для определенной ситуации или случая.',
    '- Одежда: "Appropriate dress" (Соответствующая одежда)\n- Поведение: "Appropriate behavior" (Уместное поведение)\n- Ситуация: "Not appropriate" (Неуместно)',
    [
      { en: 'Jeans are not appropriate for a formal wedding.', ru: 'Джинсы не подходят (не уместны) для официальной свадьбы.' },
      { en: 'Please take appropriate action to solve this issue.', ru: 'Пожалуйста, примите соответствующие меры для решения этой проблемы.' },
      { en: 'Is this movie appropriate for small children?', ru: 'Подходит ли этот фильм для маленьких детей?' },
      { en: 'It is not appropriate to laugh at a funeral.', ru: 'Неуместно смеяться на похоронах.' }
    ]
  ),
createRichWord('b2_approximate', 'Approximate', '/əˈprɒksɪmət/', 'эпроксимэт', 'Приблизительный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Близкий к точному, но не полностью точный (примерный).',
    '- Число: "Approximate number" (Приблизительное число)\n- Время: "Approximate time" (Примерное время)\n- Стоимость: "Approximate cost" (Ориентировочная стоимость)',
    [
      { en: 'The approximate cost of the repair will be two hundred dollars.', ru: 'Приблизительная стоимость ремонта составит двести долларов.' },
      { en: 'Can you give me an approximate time of arrival?', ru: 'Можете ли вы назвать мне примерное время прибытия?' },
      { en: 'The approximate distance to the moon is 384,000 kilometers.', ru: 'Приблизительное расстояние до Луны составляет 384 000 километров.' },
      { en: 'These figures are only approximate and may change later.', ru: 'Эти цифры лишь приблизительные и могут измениться позже.' }
    ]
),

createRichWord('b2_archaeology', 'Archaeology', '/ˌɑːkiˈɒlədʒi/', 'акиолэджи', 'Археология', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Изучение культур прошлого путем анализа останков зданий и предметов.',
    '- Наука: "Study archaeology" (Изучать археологию)\n- Место: "Archaeology site" (Место раскопок)\n- Интерес: "Interest in archaeology" (Интерес к археологии)',
    [
      { en: 'He decided to study archaeology because he loves ancient history.', ru: 'Он решил изучать археологию, потому что любит древнюю историю.' },
      { en: 'New technology helps archaeology reveal secrets buried underground.', ru: 'Новые технологии помогают археологии раскрывать секреты, погребенные под землей.' },
      { en: 'The museum has a large section dedicated to Egyptian archaeology.', ru: 'В музее есть большой раздел, посвященный египетской археологии.' },
      { en: 'Archaeology involves a lot of digging and careful cleaning.', ru: 'Археология включает в себя много копания и тщательной очистки.' }
    ]
),

createRichWord('b2_armed', 'Armed', '/ɑːmd/', 'амд', 'Вооруженный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Имеющий при себе оружие.',
    '- Полиция: "Armed police" (Вооруженная полиция)\n- Силы: "Armed forces" (Вооруженные силы)\n- Преступление: "Armed robbery" (Вооруженное ограбление)',
    [
      { en: 'The police warned that the escaped prisoner is armed and dangerous.', ru: 'Полиция предупредила, что сбежавший заключенный вооружен и опасен.' },
      { en: 'Armed guards stood at the entrance to the bank.', ru: 'Вооруженные охранники стояли у входа в банк.' },
      { en: 'He was arrested for armed robbery at a convenience store.', ru: 'Он был арестован за вооруженное ограбление в магазине.' },
      { en: 'The country has heavily armed forces to protect its borders.', ru: 'У страны есть тяжело вооруженные силы для защиты своих границ.' }
    ]
),

createRichWord('b2_aspect', 'Aspect', '/ˈæspekt/', 'эспэкт', 'Аспект / Сторона', ProficiencyLevel.B2, 'noun', 'High', 'Formal',
    'Определенная часть или особенность ситуации, идеи или проблемы.',
    '- Деталь: "Important aspect" (Важный аспект)\n- Вид: "From every aspect" (С любой стороны)\n- Проблема: "Negative aspect" (Отрицательная сторона)',
    [
      { en: 'We need to consider every aspect of the problem before deciding.', ru: 'Нам нужно рассмотреть каждый аспект проблемы перед принятием решения.' },
      { en: 'The most difficult aspect of the job is dealing with angry clients.', ru: 'Самый сложный аспект работы — общение с разгневанными клиентами.' },
      { en: 'Climate change affects almost every aspect of our lives.', ru: 'Изменение климата влияет почти на каждый аспект нашей жизни.' },
      { en: 'Lighting is a crucial aspect of photography and film.', ru: 'Освещение — это ключевой аспект фотографии и кино.' }
    ]
),

createRichWord('b2_assess', 'Assess', '/əˈses/', 'эсес', 'Оценивать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Выносить суждение о качестве, ценности или важности чего-либо.',
    '- Ущерб: "Assess the damage" (Оценить ущерб)\n- Стоимость: "Assess the value" (Оценить стоимость)\n- Ситуация: "Assess the situation" (Оценить ситуацию)',
    [
      { en: 'The insurance company will send someone to assess the damage.', ru: 'Страховая компания пришлет кого-нибудь, чтобы оценить ущерб.' },
      { en: 'Examinations are used to assess students\' knowledge.', ru: 'Экзамены используются для оценки знаний студентов.' },
      { en: 'It is difficult to assess the impact of the new law yet.', ru: 'Пока трудно оценить влияние нового закона.' },
      { en: 'We need to assess whether the project is worth continuing.', ru: 'Нам нужно оценить, стоит ли продолжать проект.' }
    ]
),

createRichWord('b2_assign', 'Assign', '/əˈsaɪn/', 'эсайн', 'Назначать / Поручать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Дать кому-то конкретную работу или задачу; выделить ресурсы.',
    '- Задача: "Assign a task" (Поручить задачу)\n- Работа: "Assign homework" (Задать домашнее задание)\n- Человек: "Assign responsibility" (Возложить ответственность)',
    [
      { en: 'The teacher assigned us a lot of homework for the weekend.', ru: 'Учитель задал (поручил) нам много домашней работы на выходные.' },
      { en: 'I was assigned to the new project team last week.', ru: 'На прошлой неделе меня назначили в новую проектную команду.' },
      { en: 'They assigned the best room in the hotel to the president.', ru: 'Они выделили (назначили) лучшую комнату в отеле президенту.' },
      { en: 'Can you assign someone to help me with this report?', ru: 'Можете ли вы назначить кого-нибудь помочь мне с этим отчетом?' }
    ]
),

createRichWord('b2_atom', 'Atom', '/ˈætəm/', 'этэм', 'Атом', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Мельчайшая частица химического элемента, которая может существовать.',
    '- Физика: "Split the atom" (Расщепить атом)\n- Энергия: "Atom bomb" (Атомная бомба)\n- Размер: "Single atom" (Один атом)',
    [
      { en: 'Everything in the universe is made up of tiny atoms.', ru: 'Всё во вселенной состоит из крошечных атомов.' },
      { en: 'Scientists learned how to split the atom to create energy.', ru: 'Ученые научились расщеплять атом для получения энергии.' },
      { en: 'An atom consists of a nucleus surrounded by electrons.', ru: 'Атом состоит из ядра, окруженного электронами.' },
      { en: 'Hydrogen has the simplest atom of all elements.', ru: 'У водорода самый простой атом из всех элементов.' }
    ]
),

createRichWord('b2_bargain', 'Bargain', '/ˈbɑːɡɪn/', 'багин', 'Сделка / Выгодная покупка', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Вещь, купленная дешевле обычной цены; или соглашение между людьми.',
    '- Покупка: "Real bargain" (Настоящая выгодная покупка)\n- Цена: "Bargain price" (Выгодная цена)\n- Соглашение: "Make a bargain" (Заключить сделку)',
    [
      { en: 'This dress was a real bargain at half the original price.', ru: 'Это платье было настоящей находкой (выгодной покупкой) за полцены.' },
      { en: 'I love hunting for bargains during the sales season.', ru: 'Я люблю охотиться за выгодными покупками в сезон распродаж.' },
      { en: 'We made a bargain: I cook, and he washes the dishes.', ru: 'Мы заключили сделку: я готовлю, а он моет посуду.' },
      { en: 'Don\'t miss this bargain, it is very cheap today.', ru: 'Не упустите эту выгодную покупку, сегодня это очень дешево.' }
    ]
),

createRichWord('b2_barrier', 'Barrier', '/ˈbæriə/', 'бэриэ', 'Барьер / Преграда', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Объект, препятствующий движению; или проблема, мешающая общению.',
    '- Язык: "Language barrier" (Языковой барьер)\n- Физический: "Security barrier" (Защитный барьер)\n- Торговля: "Trade barrier" (Торговый барьер)',
    [
      { en: 'The police put up a barrier to stop cars entering the street.', ru: 'Полиция установила барьер, чтобы остановить въезд машин на улицу.' },
      { en: 'Lack of confidence can be a barrier to success.', ru: 'Недостаток уверенности может стать преградой к успеху.' },
      { en: 'The language barrier made it hard for them to communicate.', ru: 'Языковой барьер мешал им общаться.' },
      { en: 'The mountains form a natural barrier between the regions.', ru: 'Горы образуют естественную преграду между регионами.' }
    ]
),

createRichWord('b2_beam', 'Beam', '/biːm/', 'бим', 'Луч / Балка', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Линия света или энергии; или длинный кусок дерева/металла для строительства.',
    '- Свет: "Beam of light" (Луч света)\n- Лазер: "Laser beam" (Лазерный луч)\n- Строительство: "Wooden beam" (Деревянная балка)',
    [
      { en: 'A bright beam of sunlight came through the window.', ru: 'Яркий луч солнечного света проник через окно.' },
      { en: 'The roof is supported by heavy wooden beams.', ru: 'Крыша поддерживается тяжелыми деревянными балками.' },
      { en: 'He smiled with a beam of delight on his face.', ru: 'Он улыбнулся, сияя от восторга (с лучом восторга на лице).' },
      { en: 'The lighthouse sends a beam of light across the sea.', ru: 'Маяк посылает луч света через море.' }
    ]
),

createRichWord('b2_biological', 'Biological', '/ˌbaɪəˈlɒdʒɪk(ə)l/', 'байэлодчикл', 'Биологический', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Относящийся к биологии или живым организмам.',
    '- Наука: "Biological research" (Биологическое исследование)\n- Семья: "Biological parents" (Биологические родители)\n- Оружие: "Biological weapon" (Биологическое оружие)',
    [
      { en: 'He was adopted as a baby and never met his biological parents.', ru: 'Его усыновили младенцем, и он никогда не встречал своих биологических родителей.' },
      { en: 'Sleep is a fundamental biological need for humans.', ru: 'Сон — это фундаментальная биологическая потребность людей.' },
      { en: 'The washing powder contains biological ingredients to clean clothes.', ru: 'Стиральный порошок содержит биологические ингредиенты для чистки одежды.' },
      { en: 'They are studying the biological diversity of the rainforest.', ru: 'Они изучают биологическое разнообразие тропического леса.' }
    ]
),

createRichWord('b2_boost', 'Boost', '/buːst/', 'буст', 'Повышать / Усиливать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Улучшать или увеличивать что-то (уверенность, продажи, энергию).',
    '- Экономика: "Boost the economy" (Стимулировать экономику)\n- Настроение: "Boost confidence" (Повысить уверенность)\n- Продажи: "Boost sales" (Увеличить продажи)',
    [
      { en: 'The new advertising campaign helped to boost sales significantly.', ru: 'Новая рекламная кампания помогла значительно увеличить продажи.' },
      { en: 'Winning the game boosted the team\'s confidence.', ru: 'Победа в игре повысила уверенность команды.' },
      { en: 'We need to boost our immune system by eating vitamins.', ru: 'Нам нужно укрепить (усилить) нашу иммунную систему, употребляя витамины.' },
      { en: 'The government wants to boost tourism in the region.', ru: 'Правительство хочет стимулировать туризм в регионе.' }
    ]
),

createRichWord('b2_broadcast', 'Broadcast', '/ˈbrɔːdkɑːst/', 'бродкаст', 'Транслировать / Вещать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Передавать программу по телевидению или радио.',
    '- ТВ: "Broadcast live" (Транслировать в прямом эфире)\n- Новости: "Broadcast the news" (Передавать новости)\n- Спорт: "Broadcast a match" (Транслировать матч)',
    [
      { en: 'The ceremony was broadcast live to over fifty countries.', ru: 'Церемония транслировалась в прямом эфире более чем в пятьдесят стран.' },
      { en: 'They broadcast the news every hour on this radio station.', ru: 'Они передают новости каждый час на этой радиостанции.' },
      { en: 'The BBC broadcasts educational programs for schools.', ru: 'BBC транслирует образовательные программы для школ.' },
      { en: 'He didn\'t want to broadcast his personal problems to everyone.', ru: 'Он не хотел разглашать (транслировать) свои личные проблемы всем.' }
    ]
),

createRichWord('b2_budget', 'Budget', '/ˈbʌdʒɪt/', 'баджит', 'Бюджет', ProficiencyLevel.B2, 'noun', 'High', 'Neutral',
    'План того, как потратить определенную сумму денег.',
    '- Финансы: "Low budget" (Низкий бюджет)\n- План: "Family budget" (Семейный бюджет)\n- Ограничение: "Within budget" (В рамках бюджета)',
    [
      { en: 'We have a very tight budget for our holiday this year.', ru: 'У нас очень ограниченный бюджет на отпуск в этом году.' },
      { en: 'The film was made on a low budget but was a success.', ru: 'Фильм был снят с небольшим бюджетом, но имел успех.' },
      { en: 'You need to plan a budget so you don\'t run out of money.', ru: 'Вам нужно спланировать бюджет, чтобы не остаться без денег.' },
      { en: 'The project was completed on time and within budget.', ru: 'Проект был завершен вовремя и в рамках бюджета.' }
    ]
),

createRichWord('b2_cancer', 'Cancer', '/ˈkænsə/', 'кэнсэ', 'Рак', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Серьезное заболевание, вызванное аномальным ростом клеток.',
    '- Болезнь: "Lung cancer" (Рак легких)\n- Лечение: "Cure for cancer" (Лекарство от рака)\n- Битва: "Fight cancer" (Бороться с раком)',
    [
      { en: 'Smoking is a major cause of lung cancer in adults.', ru: 'Курение является основной причиной рака легких у взрослых.' },
      { en: 'Doctors are working hard to find a cure for cancer.', ru: 'Врачи усердно работают, чтобы найти лекарство от рака.' },
      { en: 'Early detection of cancer increases the chance of survival.', ru: 'Раннее выявление рака увеличивает шансы на выживание.' },
      { en: 'He raised money for a cancer research charity.', ru: 'Он собрал деньги для благотворительной организации по исследованию рака.' }
    ]
),

createRichWord('b2_capacity', 'Capacity', '/kəˈpæsəti/', 'кэпэсити', 'Вместимость / Способность', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Максимальное количество, которое что-то может содержать; или способность делать что-то.',
    '- Место: "Seating capacity" (Вместимость сидячих мест)\n- Ум: "Mental capacity" (Умственная способность)\n- Объем: "Full capacity" (Полная мощность)',
    [
      { en: 'The stadium has a seating capacity of fifty thousand people.', ru: 'Стадион имеет вместимость пятьдесят тысяч человек.' },
      { en: 'The factory is operating at full capacity to meet demand.', ru: 'Завод работает на полную мощность, чтобы удовлетворить спрос.' },
      { en: 'She has an amazing capacity for hard work.', ru: 'У нее удивительная способность к тяжелой работе.' },
      { en: 'The fuel tank has a capacity of sixty liters.', ru: 'Топливный бак имеет вместимость шестьдесят литров.' }
    ]
),

createRichWord('b2_capture', 'Capture', '/ˈkæptʃə/', 'кэпчэ', 'Захватывать / Пленить', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Взять кого-то в плен силой; или запечатлеть момент (на фото).',
    '- Война: "Capture soldiers" (Захватить солдат)\n- Фото: "Capture the moment" (Запечатлеть момент)\n- Внимание: "Capture imagination" (Захватить воображение)',
    [
      { en: 'The police managed to capture the thief after a long chase.', ru: 'Полиции удалось схватить вора после долгой погони.' },
      { en: 'The photographer captured the beauty of the sunset perfectly.', ru: 'Фотограф идеально запечатлел красоту заката.' },
      { en: 'The movie really captured the atmosphere of the 1920s.', ru: 'Фильм действительно передал (захватил) атмосферу 1920-х годов.' },
      { en: 'Soldiers were captured by the enemy during the battle.', ru: 'Солдаты были взяты в плен врагом во время битвы.' }
    ]
),

createRichWord('b2_carbon', 'Carbon', '/ˈkɑːbən/', 'кабэн', 'Углерод', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Химический элемент, присутствующий во всех живых существах (символ C).',
    '- Экология: "Carbon footprint" (Углеродный след)\n- Газ: "Carbon dioxide" (Углекислый газ)\n- Материал: "Carbon fiber" (Углеродное волокно)',
    [
      { en: 'Trees absorb carbon dioxide and release oxygen into the air.', ru: 'Деревья поглощают углекислый газ и выделяют кислород в воздух.' },
      { en: 'We need to reduce our carbon footprint to help the planet.', ru: 'Нам нужно уменьшить наш углеродный след, чтобы помочь планете.' },
      { en: 'Diamonds are made of pure carbon compressed over time.', ru: 'Алмазы состоят из чистого углерода, сжатого с течением времени.' },
      { en: 'This bike is made of carbon fiber, so it is very light.', ru: 'Этот велосипед сделан из углеродного волокна, поэтому он очень легкий.' }
    ]
),

createRichWord('b2_catholic', 'Catholic', '/ˈkæθ(ə)lɪk/', 'кэсолик', 'Католический / Католик', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Относящийся к римско-католической церкви.',
    '- Религия: "Catholic church" (Католическая церковь)\n- Образование: "Catholic school" (Католическая школа)\n- Человек: "He is Catholic" (Он католик)',
    [
      { en: 'They got married in a large Catholic church in Rome.', ru: 'Они поженились в большой католической церкви в Риме.' },
      { en: 'Ireland is a predominantly Catholic country.', ru: 'Ирландия — преимущественно католическая страна.' },
      { en: 'She attended a Catholic school when she was young.', ru: 'Она посещала католическую школу, когда была маленькой.' },
      { en: 'The Pope is the leader of the Catholic religion.', ru: 'Папа Римский — лидер католической религии.' }
    ]
),

createRichWord('b2_cell', 'Cell', '/sel/', 'сэл', 'Клетка', ProficiencyLevel.B2, 'noun', 'High', 'Neutral',
    'Мельчайшая единица жизни; или комната в тюрьме.',
    '- Биология: "Blood cell" (Клетка крови)\n- Тюрьма: "Prison cell" (Тюремная камера)\n- Телефон: "Cell phone" (Мобильный телефон - амер.)',
    [
      { en: 'The human body is made up of billions of tiny cells.', ru: 'Человеческое тело состоит из миллиардов крошечных клеток.' },
      { en: 'The prisoner spent twenty years in a small cell.', ru: 'Заключенный провел двадцать лет в маленькой камере.' },
      { en: 'Red blood cells carry oxygen around the body.', ru: 'Красные кровяные тельца переносят кислород по всему телу.' },
      { en: 'Solar cells convert sunlight directly into electricity.', ru: 'Солнечные элементы (ячейки) преобразуют солнечный свет напрямую в электричество.' }
    ]
  ),
createRichWord('b2_abnormal', 'Abnormal', '/æbˈnɔːm(ə)l/', 'эбномал', 'Аномальный / Ненормальный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Отличающийся от того, что является обычным или ожидаемым, часто в плохом смысле.',
    '- Погода: "Abnormal weather" (Аномальная погода)\n- Поведение: "Abnormal behavior" (Ненормальное поведение)\n- Здоровье: "Abnormal rhythm" (Аномальный ритм)',
    [
      { en: 'The doctors found some abnormal cells in his blood test.', ru: 'Врачи обнаружили аномальные клетки в его анализе крови.' },
      { en: 'It is abnormal to have such hot weather in December.', ru: 'Аномально иметь такую жаркую погоду в декабре.' },
      { en: 'The machine is making an abnormal noise.', ru: 'Машина издает ненормальный шум.' },
      { en: 'Any abnormal behavior should be reported immediately.', ru: 'О любом ненормальном поведении следует немедленно сообщать.' }
    ]
),

createRichWord('b2_absent', 'Absent', '/ˈæbsənt/', 'эбсэнт', 'Отсутствующий', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Не находящийся в месте, где ожидается (например, в школе или на работе).',
    '- Школа: "Absent from school" (Отсутствующий в школе)\n- Причина: "Absent due to illness" (Отсутствующий по болезни)\n- Взгляд: "Absent look" (Рассеянный взгляд)',
    [
      { en: 'He was absent from work for three days last week.', ru: 'Он отсутствовал на работе три дня на прошлой неделе.' },
      { en: 'Students who are absent must bring a note from home.', ru: 'Студенты, которые отсутствуют, должны принести записку из дома.' },
      { en: 'She stared out of the window with an absent expression.', ru: 'Она смотрела в окно с рассеянным выражением лица.' },
      { en: 'Love is never absent from a happy home.', ru: 'Любовь никогда не отсутствует в счастливом доме.' }
    ]
),

createRichWord('b2_absurd', 'Absurd', '/əbˈsɜːd/', 'эбсёд', 'Абсурдный / Нелепый', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Совершенно нелогичный, глупый или неразумный.',
    '- Идея: "Absurd idea" (Абсурдная идея)\n- Ситуация: "Completely absurd" (Совершенно нелепо)\n- Фраза: "Don\'t be absurd" (Не говори глупостей)',
    [
      { en: 'It is absurd to suggest that we can fly without a plane.', ru: 'Абсурдно предполагать, что мы можем летать без самолета.' },
      { en: 'The price of that dress is absolutely absurd.', ru: 'Цена этого платья абсолютно нелепа.' },
      { en: 'Don\'t be absurd, I would never do such a thing!', ru: 'Не говори глупостей (не будь нелепым), я бы никогда такого не сделал!' },
      { en: 'The situation became so absurd that we started laughing.', ru: 'Ситуация стала настолько абсурдной, что мы начали смеяться.' }
    ]
),

createRichWord('b2_acid', 'Acid', '/ˈæsɪd/', 'эсид', 'Кислота / Кислый', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Химическое вещество с pH меньше 7 (сущ.); или имеющий кислый вкус/резкий характер (прил.).',
    '- Химия: "Sulphuric acid" (Серная кислота)\n- Вкус: "Acid taste" (Кислый вкус)\n- Дождь: "Acid rain" (Кислотный дождь)',
    [
      { en: 'Lemons contain citric acid, which makes them sour.', ru: 'Лимоны содержат лимонную кислоту, которая делает их кислыми.' },
      { en: 'Be careful not to spill the acid on your skin.', ru: 'Будьте осторожны, не пролейте кислоту на кожу.' },
      { en: 'Acid rain has damaged the forests in this region.', ru: 'Кислотный дождь повредил леса в этом регионе.' },
      { en: 'She made an acid remark about his cooking.', ru: 'Она сделала едкое (кислое) замечание о его стряпне.' }
    ]
),

createRichWord('b2_activate', 'Activate', '/ˈæktɪveɪt/', 'эктивейт', 'Активировать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Заставить что-то начать работать или действовать.',
    '- Устройство: "Activate the alarm" (Включить сигнализацию)\n- Банк: "Activate a card" (Активировать карту)\n- Система: "Voice activated" (Активируемый голосом)',
    [
      { en: 'You need to call the bank to activate your new credit card.', ru: 'Вам нужно позвонить в банк, чтобы активировать вашу новую кредитную карту.' },
      { en: 'Smoke will automatically activate the fire alarm.', ru: 'Дым автоматически активирует пожарную сигнализацию.' },
      { en: 'Press the red button to activate the machine.', ru: 'Нажмите красную кнопку, чтобы включить машину.' },
      { en: 'The virus stays in the body but may activate later.', ru: 'Вирус остается в организме, но может активизироваться позже.' }
    ]
),

createRichWord('b2_aggression', 'Aggression', '/əˈɡreʃ(ə)n/', 'эгрэшн', 'Агрессия', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Враждебное или насильственное поведение по отношению к кому-либо.',
    '- Поведение: "Show aggression" (Проявлять агрессию)\n- Контроль: "Control aggression" (Контролировать агрессию)\n- Физика: "Physical aggression" (Физическая агрессия)',
    [
      { en: 'The dog showed signs of aggression towards the stranger.', ru: 'Собака проявила признаки агрессии по отношению к незнакомцу.' },
      { en: 'Video games do not necessarily cause aggression in children.', ru: 'Видеоигры не обязательно вызывают агрессию у детей.' },
      { en: 'He apologized for his sudden act of aggression.', ru: 'Он извинился за свой внезапный акт агрессии.' },
      { en: 'Aggression is often a result of fear or insecurity.', ru: 'Агрессия часто является результатом страха или неуверенности.' }
    ]
),

createRichWord('b2_aluminium', 'Aluminium', '/ˌæljəˈmɪniəm/', 'элюминиэм', 'Алюминий', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Легкий серебристый металл, используемый для изготовления банок, фольги и деталей.',
    '- Материал: "Aluminium foil" (Алюминиевая фольга)\n- Упаковка: "Aluminium cans" (Алюминиевые банки)\n- Свойство: "Lightweight aluminium" (Легкий алюминий)',
    [
      { en: 'We wrap the food in aluminium foil to keep it warm.', ru: 'Мы заворачиваем еду в алюминиевую фольгу, чтобы сохранить ее теплой.' },
      { en: 'The frame of the bicycle is made of lightweight aluminium.', ru: 'Рама велосипеда сделана из легкого алюминия.' },
      { en: 'Please recycle your aluminium cans after use.', ru: 'Пожалуйста, сдавайте алюминиевые банки на переработку после использования.' },
      { en: 'Aluminium does not rust like iron does.', ru: 'Алюминий не ржавеет так, как железо.' }
    ]
),

createRichWord('b2_amateur', 'Amateur', '/ˈæmətə/', 'эмэтэ', 'Любитель', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Человек, занимающийся чем-то ради удовольствия, а не за деньги; или непрофессионал.',
    '- Спорт: "Amateur player" (Игрок-любитель)\n- Фото: "Amateur photographer" (Фотограф-любитель)\n- Статус: "Rank amateur" (Полный дилетант)',
    [
      { en: 'The tournament is open to both professional and amateur players.', ru: 'Турнир открыт как для профессиональных игроков, так и для любителей.' },
      { en: 'He is an amateur astronomer who loves watching the stars.', ru: 'Он астроном-любитель, который любит наблюдать за звездами.' },
      { en: 'The performance looked a bit amateur due to lack of practice.', ru: 'Выступление выглядело немного любительским из-за нехватки практики.' },
      { en: 'Just because he is an amateur doesn\'t mean he isn\'t skilled.', ru: 'То, что он любитель, не значит, что он не умелый.' }
    ]
),

createRichWord('b2_ambassador', 'Ambassador', '/æmˈbæsədə/', 'эмбэсэдэ', 'Посол', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Официальный представитель страны в иностранном государстве.',
    '- Политика: "US Ambassador" (Посол США)\n- Роль: "Goodwill ambassador" (Посол доброй воли)\n- Место: "Ambassador to France" (Посол во Франции)',
    [
      { en: 'The ambassador attended the official dinner at the palace.', ru: 'Посол присутствовал на официальном ужине во дворце.' },
      { en: 'She was appointed as the new ambassador to the United Nations.', ru: 'Она была назначена новым послом в ООН.' },
      { en: 'As an ambassador, he represents his country\'s interests.', ru: 'Как посол, он представляет интересы своей страны.' },
      { en: 'They recalled the ambassador after the diplomatic incident.', ru: 'Они отозвали посла после дипломатического инцидента.' }
    ]
),

createRichWord('b2_ancestor', 'Ancestor', '/ˈænsestə/', 'энсэстэ', 'Предок', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Человек в вашей семье, который жил очень давно (прадеды и далее).',
    '- Семья: "Distant ancestor" (Далекий предок)\n- Происхождение: "Common ancestor" (Общий предок)\n- Поклонение: "Worship ancestors" (Поклоняться предкам)',
    [
      { en: 'His ancestors came to this country two hundred years ago.', ru: 'Его предки приехали в эту страну двести лет назад.' },
      { en: 'We share a common ancestor with chimpanzees.', ru: 'У нас есть общий предок с шимпанзе.' },
      { en: 'She is researching her family tree to find her ancestors.', ru: 'Она исследует свое генеалогическое древо, чтобы найти своих предков.' },
      { en: 'Many cultures have traditions to honor their ancestors.', ru: 'Во многих культурах есть традиции почитания предков.' }
    ]
),

createRichWord('b2_anniversary', 'Anniversary', '/ˌænɪˈvɜːsəri/', 'энивёсэри', 'Годовщина', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Дата, в которую произошло важное событие в предыдущие годы.',
    '- Свадьба: "Wedding anniversary" (Годовщина свадьбы)\n- Событие: "50th anniversary" (50-я годовщина)\n- Память: "Death anniversary" (Годовщина смерти)',
    [
      { en: 'They celebrated their tenth wedding anniversary in Paris.', ru: 'Они отпраздновали свою десятую годовщину свадьбы в Париже.' },
      { en: 'Tomorrow is the anniversary of the day we first met.', ru: 'Завтра годовщина того дня, когда мы впервые встретились.' },
      { en: 'The company is holding a party for its fiftieth anniversary.', ru: 'Компания устраивает вечеринку в честь своего пятидесятилетия.' },
      { en: 'He bought her flowers for their anniversary.', ru: 'Он купил ей цветы на их годовщину.' }
    ]
),

createRichWord('b2_applicant', 'Applicant', '/ˈæplɪkənt/', 'эпликэнт', 'Кандидат / Заявитель', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Человек, который официально подает заявление на работу, место в университете и т.д.',
    '- Работа: "Job applicant" (Соискатель работы)\n- Отбор: "Successful applicant" (Успешный кандидат)\n- Список: "List of applicants" (Список кандидатов)',
    [
      { en: 'There were over fifty applicants for the manager position.', ru: 'На должность менеджера было более пятидесяти претендентов.' },
      { en: 'The successful applicant will start work next month.', ru: 'Успешный кандидат приступит к работе в следующем месяце.' },
      { en: 'Applicants are required to speak fluent English.', ru: 'От кандидатов требуется свободное владение английским языком.' },
      { en: 'We interviewed the best applicant this morning.', ru: 'Мы провели собеседование с лучшим кандидатом сегодня утром.' }
    ]
),

createRichWord('b2_arena', 'Arena', '/əˈriːnə/', 'эринэ', 'Арена', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Большая площадка с сиденьями вокруг для спортивных состязаний или концертов.',
    '- Спорт: "Sports arena" (Спортивная арена)\n- Политика: "Political arena" (Политическая арена)\n- Вход: "Enter the arena" (Выйти на арену)',
    [
      { en: 'The gladiator stepped into the arena to fight the lion.', ru: 'Гладиатор вышел на арену, чтобы сразиться со львом.' },
      { en: 'The concert will be held at the national arena.', ru: 'Концерт пройдет на национальной арене.' },
      { en: 'He decided to enter the political arena after retiring.', ru: 'Он решил выйти на политическую арену после выхода на пенсию.' },
      { en: 'Thousands of fans filled the arena to watch the match.', ru: 'Тысячи фанатов заполнили арену, чтобы посмотреть матч.' }
    ]
),

createRichWord('b2_arrogant', 'Arrogant', '/ˈærəɡənt/', 'эрэгэнт', 'Высокомерный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Считающий себя лучше или важнее других людей; надменный.',
    '- Характер: "Arrogant man" (Высокомерный человек)\n- Поведение: "Arrogant attitude" (Высокомерное отношение)\n- Тон: "Sound arrogant" (Звучать высокомерно)',
    [
      { en: 'He is so arrogant that he never listens to anyone else.', ru: 'Он настолько высокомерен, что никогда никого не слушает.' },
      { en: 'I found his arrogant attitude very annoying.', ru: 'Я нашел его высокомерное отношение очень раздражающим.' },
      { en: 'Don\'t be arrogant just because you won the game.', ru: 'Не будь высокомерным только потому, что ты выиграл игру.' },
      { en: 'She gave me an arrogant look and walked away.', ru: 'Она бросила на меня высокомерный взгляд и ушла.' }
    ]
),

createRichWord('b2_arrow', 'Arrow', '/ˈærəʊ/', 'эроу', 'Стрела / Стрелка', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Оружие, пускаемое из лука; или знак, указывающий направление.',
    '- Оружие: "Bow and arrow" (Лук и стрела)\n- Знак: "Follow the arrow" (Следовать за стрелкой)\n- Компьютер: "Mouse arrow" (Курсор/стрелка мыши)',
    [
      { en: 'He shot an arrow at the target and hit the center.', ru: 'Он выпустил стрелу в мишень и попал в центр.' },
      { en: 'Follow the green arrows to find the emergency exit.', ru: 'Следуйте за зелеными стрелками, чтобы найти аварийный выход.' },
      { en: 'Cupid is often depicted with a bow and arrow.', ru: 'Купидона часто изображают с луком и стрелами.' },
      { en: 'Click the arrow on the screen to go to the next page.', ru: 'Нажмите стрелку на экране, чтобы перейти на следующую страницу.' }
    ]
),

createRichWord('b2_artificial', 'Artificial', '/ˌɑːtɪˈfɪʃ(ə)l/', 'атифишл', 'Искусственный', ProficiencyLevel.B2, 'adj', 'High', 'Neutral',
    'Сделанный людьми, а не природой; ненастоящий.',
    '- Технологии: "Artificial intelligence" (Искусственный интеллект)\n- Материал: "Artificial flowers" (Искусственные цветы)\n- Свет: "Artificial light" (Искусственный свет)',
    [
      { en: 'This juice contains no artificial colors or flavors.', ru: 'Этот сок не содержит искусственных красителей или ароматизаторов.' },
      { en: 'She wears an artificial leg after the accident.', ru: 'Она носит искусственную ногу (протез) после аварии.' },
      { en: 'Plants grow better in sunlight than in artificial light.', ru: 'Растения растут лучше при солнечном свете, чем при искусственном.' },
      { en: 'Artificial intelligence is changing the way we work.', ru: 'Искусственный интеллект меняет то, как мы работаем.' }
    ]
),

createRichWord('b2_ash', 'Ash', '/æʃ/', 'эш', 'Пепел / Зола', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Мягкий серый порошок, остающийся после сгорания чего-либо.',
    '- Огонь: "Cigarette ash" (Сигаретный пепел)\n- Вулкан: "Volcanic ash" (Вулканический пепел)\n- Дерево: "Ash tree" (Ясень - другое значение, но код один)',
    [
      { en: 'She flicked the cigarette ash into the ashtray.', ru: 'Она стряхнула сигаретный пепел в пепельницу.' },
      { en: 'The city was covered in grey ash after the volcano erupted.', ru: 'Город был покрыт серым пеплом после извержения вулкана.' },
      { en: 'Only a pile of ash remained of the old wooden house.', ru: 'От старого деревянного дома осталась только куча золы.' },
      { en: 'Phoenix rises from the ashes in the old legend.', ru: 'Феникс восстает из пепла в старой легенде.' }
    ]
  ),
createRichWord('b2_audio', 'Audio', '/ˈɔːdiəʊ/', 'одиоу', 'Аудио / Звуковой', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Связанный со звуком или записью звука.',
    '- Файл: "Audio file" (Аудиофайл)\n- Книга: "Audio book" (Аудиокнига)\n- Оборудование: "Audio equipment" (Аудиооборудование)',
    [
      { en: 'The audio quality of this recording is not very clear.', ru: 'Качество звука этой записи не очень четкое.' },
      { en: 'I prefer listening to audio books while driving to work.', ru: 'Я предпочитаю слушать аудиокниги по дороге на работу.' },
      { en: 'They installed a new audio system in the conference room.', ru: 'Они установили новую аудиосистему в конференц-зале.' },
      { en: 'Please check if the audio is working before the presentation starts.', ru: 'Пожалуйста, проверьте, работает ли звук перед началом презентации.' }
    ]
),

createRichWord('b2_avenue', 'Avenue', '/ˈævənjuː/', 'эвэнью', 'Проспект / Авеню', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Широкая улица или дорога, часто с деревьями по бокам; также способ решения проблемы.',
    '- Город: "Fifth Avenue" (Пятая авеню)\n- Деревья: "Tree-lined avenue" (Аллея, обсаженная деревьями)\n- Метафора: "Explore every avenue" (Использовать все возможности)',
    [
      { en: 'They live in a large apartment on a prestigious avenue.', ru: 'Они живут в большой квартире на престижном проспекте.' },
      { en: 'We walked down the broad avenue admiring the expensive shops.', ru: 'Мы шли по широкому проспекту, любуясь дорогими магазинами.' },
      { en: 'The company decided to explore new avenues for increasing sales.', ru: 'Компания решила исследовать новые пути для увеличения продаж.' },
      { en: 'Avenue des Champs-Élysées is one of the most famous streets.', ru: 'Елисейские поля — одна из самых известных улиц.' }
    ]
),

createRichWord('b2_basement', 'Basement', '/ˈbeɪsmənt/', 'бэйсмэнт', 'Подвал', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Этаж здания, который находится полностью или частично под землей.',
    '- Дом: "Damp basement" (Сырой подвал)\n- Квартира: "Basement flat" (Квартира в цокольном этаже)\n- Хранение: "Stored in the basement" (Хранится в подвале)',
    [
      { en: 'We store our old furniture and boxes in the basement.', ru: 'Мы храним нашу старую мебель и коробки в подвале.' },
      { en: 'The basement flooded during the heavy rain last week.', ru: 'Подвал затопило во время сильного дождя на прошлой неделе.' },
      { en: 'He converted the basement into a home cinema room.', ru: 'Он переоборудовал подвал в домашний кинотеатр.' },
      { en: 'It is usually cooler in the basement during the summer.', ru: 'Летом в подвале обычно прохладнее.' }
    ]
),

createRichWord('b2_bathe', 'Bathe', '/beɪð/', 'бэйз', 'Купаться / Мыть', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Мыть тело в воде (обычно в ванне) или плавать для удовольствия (в море/озере).',
    '- Гигиена: "Bathe the baby" (Искупать ребенка)\n- Море: "Sunbathe" (Загорать)\n- Рана: "Bathe a wound" (Промыть рану)',
    [
      { en: 'The mother gently bathed her baby in warm water.', ru: 'Мать нежно искупала своего ребенка в теплой воде.' },
      { en: 'We used to bathe in the river when we were children.', ru: 'Мы купались в реке, когда были детьми.' },
      { en: 'The nurse bathed the wound with an antiseptic solution.', ru: 'Медсестра промыла рану антисептическим раствором.' },
      { en: 'I like to bathe in the sea early in the morning.', ru: 'Я люблю купаться в море рано утром.' }
    ]
),

createRichWord('b2_beneficial', 'Beneficial', '/ˌbenɪˈfɪʃ(ə)l/', 'бэнифишл', 'Полезный / Выгодный', ProficiencyLevel.B2, 'adj', 'Medium', 'Formal',
    'Оказывающий хороший эффект; приносящий пользу.',
    '- Здоровье: "Beneficial for health" (Полезно для здоровья)\n- Эффект: "Mutually beneficial" (Взаимовыгодный)\n- Результат: "Highly beneficial" (Весьма полезный)',
    [
      { en: 'Regular exercise is extremely beneficial for your heart.', ru: 'Регулярные упражнения чрезвычайно полезны для вашего сердца.' },
      { en: 'We hope this agreement will be mutually beneficial for both sides.', ru: 'Мы надеемся, что это соглашение будет взаимовыгодным для обеих сторон.' },
      { en: 'Fresh air and good food have a beneficial effect on recovery.', ru: 'Свежий воздух и хорошая еда оказывают благотворное влияние на выздоровление.' },
      { en: 'Some insects are beneficial to the garden as they eat pests.', ru: 'Некоторые насекомые полезны для сада, так как они едят вредителей.' }
    ]
),

createRichWord('b2_betray', 'Betray', '/bɪˈtreɪ/', 'битрей', 'Предавать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Совершить что-то вредное по отношению к другу или стране; выдать секрет.',
    '- Доверие: "Betray trust" (Предать доверие)\n- Друг: "Betray a friend" (Предать друга)\n- Секрет: "Betray a secret" (Выдать секрет)',
    [
      { en: 'He promised never to betray his country to the enemy.', ru: 'Он пообещал никогда не предавать свою страну врагу.' },
      { en: 'She felt that her best friend had betrayed her trust.', ru: 'Она чувствовала, что ее лучшая подруга предалa ее доверие.' },
      { en: 'His shaking hands betrayed his nervousness during the interview.', ru: 'Его дрожащие руки выдавали его нервозность во время интервью.' },
      { en: 'Do not betray my secret to anyone, please.', ru: 'Не выдавай мой секрет никому, пожалуйста.' }
    ]
),

createRichWord('b2_bold', 'Bold', '/bəʊld/', 'боулд', 'Смелый / Жирный (шрифт)', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Не боящийся рисковать; или яркий и заметный (о цвете/шрифте).',
    '- Характер: "Bold decision" (Смелое решение)\n- Текст: "Bold letters" (Жирный шрифт)\n- Цвет: "Bold colours" (Яркие цвета)',
    [
      { en: 'It was a bold decision to quit his job and start a business.', ru: 'Это было смелое решение — бросить работу и начать бизнес.' },
      { en: 'Please write the title in bold letters at the top.', ru: 'Пожалуйста, напишите заголовок жирными буквами наверху.' },
      { en: 'She likes wearing clothes with bold patterns and colors.', ru: 'Она любит носить одежду с яркими узорами и цветами.' },
      { en: 'The plan was bold, but unfortunately, it did not succeed.', ru: 'План был смелым, но, к сожалению, он не увенчался успехом.' }
    ]
),

createRichWord('b2_bonus', 'Bonus', '/ˈbəʊnəs/', 'боунэс', 'Бонус / Премия', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Дополнительная сумма денег за хорошую работу; или приятное дополнение.',
    '- Деньги: "Christmas bonus" (Рождественская премия)\n- Преимущество: "Added bonus" (Дополнительный бонус)\n- Работа: "Performance bonus" (Премия за показатели)',
    [
      { en: 'All employees received a Christmas bonus this year.', ru: 'Все сотрудники получили рождественскую премию в этом году.' },
      { en: 'The sunny weather was an added bonus to our trip.', ru: 'Солнечная погода стала приятным бонусом к нашей поездке.' },
      { en: 'Productivity increased because of the promise of a bonus.', ru: 'Производительность выросла из-за обещания премии.' },
      { en: 'Free coffee is a nice bonus of working in this office.', ru: 'Бесплатный кофе — приятный бонус работы в этом офисе.' }
    ]
),

createRichWord('b2_bronze', 'Bronze', '/brɒnz/', 'бронз', 'Бронза / Бронзовый', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Коричневый металл (сплав меди); или медаль за третье место.',
    '- Спорт: "Bronze medal" (Бронзовая медаль)\n- Материал: "Bronze statue" (Бронзовая статуя)\n- Эпоха: "Bronze Age" (Бронзовый век)',
    [
      { en: 'He won a bronze medal in the swimming competition.', ru: 'Он выиграл бронзовую медаль в соревнованиях по плаванию.' },
      { en: 'The museum has a collection of ancient bronze tools.', ru: 'В музее есть коллекция древних бронзовых инструментов.' },
      { en: 'The statue in the square is cast in bronze.', ru: 'Статуя на площади отлита из бронзы.' },
      { en: 'She came third and took home the bronze.', ru: 'Она пришла третьей и забрала домой бронзу.' }
    ]
),

createRichWord('b2_bubble', 'Bubble', '/ˈbʌb(ə)l/', 'бабл', 'Пузырь', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Шарик воздуха или газа в жидкости; или тонкая сфера из жидкости.',
    '- Мыло: "Soap bubble" (Мыльный пузырь)\n- Газ: "Air bubble" (Пузырек воздуха)\n- Экономика: "Housing bubble" (Пузырь на рынке жилья)',
    [
      { en: 'Children love blowing bubbles in the park on sunny days.', ru: 'Дети любят пускать мыльные пузыри в парке в солнечные дни.' },
      { en: 'There were bubbles rising to the surface of the water.', ru: 'К поверхности воды поднимались пузырьки.' },
      { en: 'The economic bubble burst, causing a financial crisis.', ru: 'Экономический пузырь лопнул, вызвав финансовый кризис.' },
      { en: 'Shake the bottle and watch the bubbles form.', ru: 'Встряхни бутылку и посмотри, как образуются пузырьки.' }
    ]
),

createRichWord('b2_bulb', 'Bulb', '/bʌlb/', 'балб', 'Лампочка / Луковица', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Стеклянная часть лампы, дающая свет; или корень растения круглой формы.',
    '- Свет: "Light bulb" (Электрическая лампочка)\n- Замена: "Change a bulb" (Поменять лампочку)\n- Сад: "Tulip bulb" (Луковица тюльпана)',
    [
      { en: 'The light bulb in the kitchen has burned out.', ru: 'Лампочка на кухне перегорела.' },
      { en: 'We planted tulip bulbs in the garden last autumn.', ru: 'Мы посадили луковицы тюльпанов в саду прошлой осенью.' },
      { en: 'Please buy a new bulb, it is too dark in here.', ru: 'Пожалуйста, купи новую лампочку, здесь слишком темно.' },
      { en: 'Thomas Edison is famous for inventing the light bulb.', ru: 'Томас Эдисон известен изобретением электрической лампочки.' }
    ]
),

createRichWord('b2_bull', 'Bull', '/bʊl/', 'бул', 'Бык', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Взрослый самец коровы; или агрессивный человек/рынок.',
    '- Животное: "Raging bull" (Разъяренный бык)\n- Рынок: "Bull market" (Рынок с повышательными тенденциями)\n- Спорт: "Bull fighting" (Коррида)',
    [
      { en: 'The farmer keeps a large bull in a separate field.', ru: 'Фермер держит большого быка на отдельном поле.' },
      { en: 'Be careful, the bull can be very dangerous.', ru: 'Будь осторожен, бык может быть очень опасным.' },
      { en: 'Investors are happy because it is a bull market.', ru: 'Инвесторы счастливы, потому что это рынок с повышательными тенденциями (бычий рынок).' },
      { en: 'A red flag is traditionally used to provoke a bull.', ru: 'Красный флаг традиционно используется, чтобы спровоцировать быка.' }
    ]
),

createRichWord('b2_bullet', 'Bullet', '/ˈbʊlɪt/', 'булит', 'Пуля', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Маленький металлический предмет, выстреливаемый из пистолета.',
    '- Оружие: "Fire a bullet" (Выпустить пулю)\n- Защита: "Bullet-proof vest" (Бронежилет)\n- Скорость: "Speed of a bullet" (Скорость пули)',
    [
      { en: 'The police found a bullet shell at the crime scene.', ru: 'Полиция нашла гильзу от пули на месте преступления.' },
      { en: 'Thankfully, the bullet missed his heart by an inch.', ru: 'К счастью, пуля прошла в дюйме от его сердца.' },
      { en: 'This glass is strong enough to stop a bullet.', ru: 'Это стекло достаточно прочное, чтобы остановить пулю.' },
      { en: 'He bit the bullet and decided to have the surgery.', ru: 'Он стиснул зубы (идиома: укусил пулю) и решил сделать операцию.' }
    ]
),

createRichWord('b2_bully', 'Bully', '/ˈbʊli/', 'були', 'Задира / Издеваться', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Человек, который обижает более слабых (сущ.); или запугивать (глаг.).',
    '- Школа: "School bully" (Школьный хулиган)\n- Действие: "Stop bullying" (Перестать издеваться)\n- Интернет: "Cyber bully" (Кибер-хулиган)',
    [
      { en: 'He used to be a bully at school, taking kids\' lunch money.', ru: 'Он был хулиганом в школе, отбирал у детей деньги на обед.' },
      { en: 'Don\'t let anyone bully you into doing something wrong.', ru: 'Не позволяй никому заставлять (запугивать) тебя делать что-то плохое.' },
      { en: 'We have a strict policy against bullying in this workplace.', ru: 'У нас строгая политика против травли на этом рабочем месте.' },
      { en: 'She stood up to the bully and defended her friend.', ru: 'Она дала отпор хулигану и защитила свою подругу.' }
    ]
  ),
createRichWord('b2_abolish', 'Abolish', '/əˈbɒlɪʃ/', 'эболиш', 'Отменять / Упразднять', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Официально положить конец закону, системе или обычаю.',
    '- Закон: "Abolish a law" (Отменить закон)\n- Система: "Abolish slavery" (Отменить рабство)\n- Налог: "Abolish tax" (Отменить налог)',
    [
      { en: 'The president promised to abolish the unfair tax.', ru: 'Президент пообещал отменить несправедливый налог.' },
      { en: 'Slavery was abolished in the US in the 19th century.', ru: 'Рабство было отменено в США в 19 веке.' },
      { en: 'Many people want to abolish the death penalty.', ru: 'Многие люди хотят отменить смертную казнь.' },
      { en: 'The old rules were finally abolished last year.', ru: 'Старые правила были окончательно отменены в прошлом году.' }
    ]
),

createRichWord('b2_adore', 'Adore', '/əˈdɔː/', 'эдо', 'Обожать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Любить кого-то очень сильно и с уважением; или очень любить что-то делать.',
    '- Чувство: "Adore someone" (Обожать кого-то)\n- Хобби: "Adore reading" (Обожать читать)\n- Отношения: "Absolutely adore" (Безумно обожать)',
    [
      { en: 'She absolutely adores her grandchildren.', ru: 'Она безумно обожает своих внуков.' },
      { en: 'I adore chocolate ice cream on a hot day.', ru: 'Я обожаю шоколадное мороженое в жаркий день.' },
      { en: 'He adores playing football with his friends.', ru: 'Он обожает играть в футбол со своими друзьями.' },
      { en: 'They adore each other and are very happy together.', ru: 'Они обожают друг друга и очень счастливы вместе.' }
    ]
),

createRichWord('b2_aisle', 'Aisle', '/aɪl/', 'айл', 'Проход', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Длинный узкий проход между рядами сидений (в церкви, самолете) или полок (в магазине).',
    '- Самолет: "Aisle seat" (Место у прохода)\n- Свадьба: "Walk down the aisle" (Идти к алтарю)\n- Магазин: "Food aisle" (Продуктовый ряд)',
    [
      { en: 'Would you prefer a window seat or an aisle seat?', ru: 'Вы предпочитаете место у окна или у прохода?' },
      { en: 'You can find milk in the dairy aisle.', ru: 'Вы можете найти молоко в молочном отделе (ряду).' },
      { en: 'The bride walked down the aisle towards the groom.', ru: 'Невеста шла по проходу к жениху.' },
      { en: 'Please do not leave your bags in the aisle.', ru: 'Пожалуйста, не оставляйте свои сумки в проходе.' }
    ]
),

createRichWord('b2_algorithm', 'Algorithm', '/ˈælɡərɪðəm/', 'элгэризэм', 'Алгоритм', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Набор правил или процессов, которым нужно следовать при расчетах, особенно компьютером.',
    '- Компьютер: "Search algorithm" (Алгоритм поиска)\n- Сложность: "Complex algorithm" (Сложный алгоритм)\n- Данные: "Data algorithm" (Алгоритм обработки данных)',
    [
      { en: 'Google uses a complex algorithm to rank websites.', ru: 'Google использует сложный алгоритм для ранжирования веб-сайтов.' },
      { en: 'The students learned how to write a simple sorting algorithm.', ru: 'Студенты научились писать простой алгоритм сортировки.' },
      { en: 'Algorithms help social media show you relevant content.', ru: 'Алгоритмы помогают социальным сетям показывать вам релевантный контент.' },
      { en: 'Changes to the algorithm affected many businesses.', ru: 'Изменения в алгоритме повлияли на многие бизнесы.' }
    ]
),

createRichWord('b2_allergy', 'Allergy', '/ˈælədʒi/', 'эледжи', 'Аллергия', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Медицинское состояние, при котором вы плохо реагируете на определенную еду, животных или пыль.',
    '- Еда: "Food allergy" (Пищевая аллергия)\n- Реакция: "Have an allergy" (Иметь аллергию)\n- Животные: "Nut allergy" (Аллергия на орехи)',
    [
      { en: 'I have a serious allergy to peanuts.', ru: 'У меня серьезная аллергия на арахис.' },
      { en: 'She takes medicine for her pollen allergy in spring.', ru: 'Она принимает лекарство от аллергии на пыльцу весной.' },
      { en: 'Does anyone here have a food allergy?', ru: 'Есть ли здесь у кого-нибудь пищевая аллергия?' },
      { en: 'My allergy causes me to sneeze constantly.', ru: 'Моя аллергия заставляет меня постоянно чихать.' }
    ]
),

createRichWord('b2_appetite', 'Appetite', '/ˈæpɪtaɪt/', 'эпетайт', 'Аппетит', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Физическое желание есть пищу.',
    '- Еда: "Good appetite" (Хороший аппетит)\n- Утрата: "Lose appetite" (Потерять аппетит)\n- Желание: "Appetite for learning" (Тяга к знаниям - перен.)',
    [
      { en: 'The long walk gave me a very good appetite.', ru: 'Длительная прогулка вызвала у меня очень хороший аппетит.' },
      { en: 'He lost his appetite because he was feeling sick.', ru: 'Он потерял аппетит, потому что чувствовал себя плохо.' },
      { en: 'Children usually have a healthy appetite after playing.', ru: 'У детей обычно здоровый аппетит после игр.' },
      { en: 'Don\'t spoil your appetite by eating sweets before dinner.', ru: 'Не перебивай аппетит, поедая сладости перед ужином.' }
    ]
),

createRichWord('b2_applause', 'Applause', '/əˈplɔːz/', 'эплоз', 'Аплодисменты', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Звук хлопков множества людей, выражающих одобрение или удовольствие.',
    '- Театр: "Loud applause" (Громкие аплодисменты)\n- Реакция: "Round of applause" (Взрыв аплодисментов)\n- Конец: "Thunderous applause" (Бурные аплодисменты)',
    [
      { en: 'The actors bowed to the loud applause of the audience.', ru: 'Актеры поклонились под громкие аплодисменты публики.' },
      { en: 'Let\'s give a big round of applause for our winner.', ru: 'Давайте устроим бурные аплодисменты нашему победителю.' },
      { en: 'The speech was met with enthusiastic applause.', ru: 'Речь была встречена восторженными аплодисментами.' },
      { en: 'Applause filled the room as she accepted the award.', ru: 'Аплодисменты заполнили комнату, когда она принимала награду.' }
    ]
),

createRichWord('b2_appliance', 'Appliance', '/əˈplaɪəns/', 'эплайэнс', 'Прибор (бытовой)', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Устройство или машина, обычно электрическая, используемая в доме для выполнения работы (стирка, готовка).',
    '- Кухня: "Kitchen appliance" (Кухонный прибор)\n- Дом: "Household appliance" (Бытовой прибор)\n- Электрика: "Electrical appliance" (Электроприбор)',
    [
      { en: 'The store sells household appliances like fridges and washing machines.', ru: 'Магазин продает бытовую технику, такую как холодильники и стиральные машины.' },
      { en: 'Always unplug the appliance before cleaning it.', ru: 'Всегда отключайте прибор от сети перед чисткой.' },
      { en: 'Modern appliances use less energy than old ones.', ru: 'Современные приборы потребляют меньше энергии, чем старые.' },
      { en: 'The toaster is a very common kitchen appliance.', ru: 'Тостер — очень распространенный кухонный прибор.' }
    ]
),

createRichWord('b2_arctic', 'Arctic', '/ˈɑːktɪk/', 'актик', 'Арктический / Арктика', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Относящийся к Северному полюсу или регионам вокруг него; очень холодный.',
    '- Регион: "Arctic Ocean" (Северный Ледовитый океан)\n- Животные: "Arctic fox" (Песец/Полярная лисица)\n- Климат: "Arctic conditions" (Арктические условия)',
    [
      { en: 'Polar bears are found in the Arctic regions.', ru: 'Белые медведи обитают в арктических регионах.' },
      { en: 'Explorers faced extreme cold in the Arctic winter.', ru: 'Исследователи столкнулись с экстремальным холодом арктической зимой.' },
      { en: 'The Arctic Ocean is covered by ice for most of the year.', ru: 'Северный Ледовитый океан покрыт льдом большую часть года.' },
      { en: 'It feels positively arctic in this room today.', ru: 'В этой комнате сегодня прямо-таки арктический холод.' }
    ]
),

createRichWord('b2_asthma', 'Asthma', '/ˈæsmə/', 'эсмэ', 'Астма', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Медицинское заболевание грудной клетки, которое затрудняет дыхание.',
    '- Здоровье: "Suffer from asthma" (Страдать астмой)\n- Приступ: "Asthma attack" (Приступ астмы)\n- Лечение: "Asthma inhaler" (Ингалятор от астмы)',
    [
      { en: 'He carries an inhaler because he suffers from asthma.', ru: 'Он носит с собой ингалятор, потому что страдает астмой.' },
      { en: 'Dust and pollen can trigger an asthma attack.', ru: 'Пыль и пыльца могут спровоцировать приступ астмы.' },
      { en: 'Her asthma gets worse in the cold weather.', ru: 'Ее астма обостряется в холодную погоду.' },
      { en: 'Many children with asthma can still play sports.', ru: 'Многие дети с астмой все еще могут заниматься спортом.' }
    ]
  ),
createRichWord('b2_automate', 'Automate', '/ˈɔːtəmeɪt/', 'отомэйт', 'Автоматизировать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Использовать машины и компьютеры для выполнения работы вместо людей.',
    '- Процесс: "Automate the process" (Автоматизировать процесс)\n- Производство: "Fully automated" (Полностью автоматизированный)\n- Работа: "Automate tasks" (Автоматизировать задачи)',
    [
      { en: 'The factory decided to automate the production line.', ru: 'Завод решил автоматизировать производственную линию.' },
      { en: 'We can automate repetitive tasks to save time.', ru: 'Мы можем автоматизировать повторяющиеся задачи, чтобы сэкономить время.' },
      { en: 'Most banking services are now fully automated.', ru: 'Большинство банковских услуг теперь полностью автоматизированы.' },
      { en: 'Technology helps to automate many office jobs.', ru: 'Технологии помогают автоматизировать многие офисные работы.' }
    ]
),

createRichWord('b2_aviation', 'Aviation', '/ˌeɪviˈeɪʃn/', 'эйвиэйшн', 'Авиация', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Проектирование, производство или эксплуатация самолетов.',
    '- Индустрия: "Aviation industry" (Авиационная промышленность)\n- Полет: "Civil aviation" (Гражданская авиация)\n- Эксперт: "Aviation expert" (Авиационный эксперт)',
    [
      { en: 'He has worked in the aviation industry for thirty years.', ru: 'Он проработал в авиационной промышленности тридцать лет.' },
      { en: 'Strict safety rules apply to all civil aviation.', ru: 'Строгие правила безопасности применяются ко всей гражданской авиации.' },
      { en: 'The history of aviation is full of brave pioneers.', ru: 'История авиации полна смелых пионеров.' },
      { en: 'She is studying aviation engineering at university.', ru: 'Она изучает авиационную технику в университете.' }
    ]
),

createRichWord('b2_badge', 'Badge', '/bædʒ/', 'бэдж', 'Значок / Бейдж', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Маленький кусок металла или пластика с дизайном или словами, который носят на одежде.',
    '- Идентификация: "ID badge" (Идентификационный бейдж)\n- Символ: "Police badge" (Полицейский значок)\n- Награда: "Wear a badge" (Носить значок)',
    [
      { en: 'You must wear your ID badge at all times in the office.', ru: 'Вы должны всегда носить свой ID-бейдж в офисе.' },
      { en: 'The police officer showed his badge to the suspect.', ru: 'Полицейский показал свой значок подозреваемому.' },
      { en: 'She received a badge for her swimming achievements.', ru: 'Она получила значок за свои достижения в плавании.' },
      { en: 'Visitors need a visitor badge to enter the building.', ru: 'Посетителям нужен гостевой бейдж, чтобы войти в здание.' }
    ]
),

createRichWord('b2_bait', 'Bait', '/beɪt/', 'бэйт', 'Приманка / Наживка', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Еда, используемая для привлечения рыбы или животных; или что-то, используемое для обмана.',
    '- Рыбалка: "Fish bait" (Наживка для рыбы)\n- Ловушка: "Take the bait" (Попасться на удочку)\n- Использование: "Use as bait" (Использовать как приманку)',
    [
      { en: 'He put a worm on the hook as bait for the fish.', ru: 'Он насадил червяка на крючок в качестве наживки для рыбы.' },
      { en: 'The cheese was used as bait to catch the mouse.', ru: 'Сыр использовался как приманка, чтобы поймать мышь.' },
      { en: 'Don\'t take the bait; he is just trying to make you angry.', ru: 'Не попадись на удочку; он просто пытается тебя разозлить.' },
      { en: 'The store used low prices as bait to attract customers.', ru: 'Магазин использовал низкие цены как приманку для привлечения клиентов.' }
    ]
),

createRichWord('b2_banner', 'Banner', '/ˈbænə/', 'бэнэ', 'Баннер / Транспарант', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Длинный кусок ткани с надписью, который несут на демонстрации или вешают в общественном месте.',
    '- Реклама: "Ad banner" (Рекламный баннер)\n- Протест: "Carry a banner" (Нести транспарант)\n- Интернет: "Web banner" (Веб-баннер)',
    [
      { en: 'The protesters marched through the street carrying banners.', ru: 'Протестующие прошли по улице, неся транспаранты.' },
      { en: 'A huge banner welcomed the team back home.', ru: 'Огромный баннер приветствовал команду по возвращении домой.' },
      { en: 'I clicked on the banner ad by mistake.', ru: 'Я нажал на рекламный баннер по ошибке.' },
      { en: 'They hung a banner across the road for the festival.', ru: 'Они повесили баннер поперек дороги к фестивалю.' }
    ]
),

createRichWord('b2_batch', 'Batch', '/bætʃ/', 'бэтч', 'Партия / Группа', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Группа вещей или людей, с которыми имеют дело одновременно.',
    '- Производство: "Batch of products" (Партия продуктов)\n- Кулинария: "Batch of cookies" (Партия печенья)\n- Работа: "Next batch" (Следующая партия)',
    [
      { en: 'She baked a fresh batch of cookies for the party.', ru: 'Она испекла свежую партию печенья для вечеринки.' },
      { en: 'The first batch of letters has already been sent.', ru: 'Первая партия писем уже отправлена.' },
      { en: 'We process applications in batches of fifty.', ru: 'Мы обрабатываем заявления партиями по пятьдесят штук.' },
      { en: 'This batch of cement was not mixed correctly.', ru: 'Эта партия цемента была смешана неправильно.' }
    ]
),

createRichWord('b2_beloved', 'Beloved', '/bɪˈlʌvɪd/', 'билАвид', 'Возлюбленный / Любимый', ProficiencyLevel.B2, 'adj', 'Medium', 'Literary',
    'Кем-то очень любимый (часто используется в формальном или романтическом контексте).',
    '- Человек: "Beloved wife" (Любимая жена)\n- Вещь: "Beloved country" (Любимая страна)\n- Обращение: "My beloved" (Мой возлюбленный)',
    [
      { en: 'He was buried next to his beloved wife.', ru: 'Он был похоронен рядом со своей любимой женой.' },
      { en: 'The author is beloved by children all over the world.', ru: 'Этого автора любят дети во всем мире.' },
      { en: 'She said goodbye to her beloved home town.', ru: 'Она попрощалась со своим любимым родным городом.' },
      { en: 'My beloved grandfather told me many stories.', ru: 'Мой любимый дедушка рассказывал мне много историй.' }
    ]
),

createRichWord('b2_binoculars', 'Binoculars', '/bɪˈnɒkjələz/', 'бинокьюлэз', 'Бинокль', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Оптический прибор с двумя линзами для рассматривания удаленных объектов.',
    '- Наблюдение: "Pair of binoculars" (Бинокль)\n- Использование: "Look through binoculars" (Смотреть в бинокль)\n- Природа: "Birdwatching binoculars" (Бинокль для наблюдения за птицами)',
    [
      { en: 'He used his binoculars to watch the birds in the tree.', ru: 'Он использовал свой бинокль, чтобы наблюдать за птицами на дереве.' },
      { en: 'I need a pair of binoculars to see the stage from here.', ru: 'Мне нужен бинокль, чтобы увидеть сцену отсюда.' },
      { en: 'She adjusted the focus on her binoculars.', ru: 'Она настроила фокус на своем бинокле.' },
      { en: 'Don\'t forget to bring your binoculars to the stadium.', ru: 'Не забудь взять свой бинокль на стадион.' }
    ]
),

createRichWord('b2_blossom', 'Blossom', '/ˈblɒsəm/', 'блосэм', 'Цветение / Цвести', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Цветок на дереве (сущ.); или процесс цветения/развития (глаг.).',
    '- Дерево: "Cherry blossom" (Цветение вишни)\n- Развитие: "In full blossom" (В полном цвету)\n- Глагол: "Blossom into" (Расцвести / Превратиться)',
    [
      { en: 'The cherry blossom in Japan is beautiful in spring.', ru: 'Цветение вишни в Японии прекрасно весной.' },
      { en: 'The trees are in full blossom right now.', ru: 'Деревья сейчас в полном цвету.' },
      { en: 'She blossomed into a confident young woman.', ru: 'Она расцвела (превратилась) в уверенную молодую женщину.' },
      { en: 'Their friendship blossomed over the summer.', ru: 'Их дружба расцвела за лето.' }
    ]
),

createRichWord('b2_blush', 'Blush', '/blʌʃ/', 'блаш', 'Краснеть', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Становиться красным лицом от смущения или стыда.',
    '- Эмоция: "Blush with shame" (Покраснеть от стыда)\n- Лицо: "Make someone blush" (Заставить кого-то покраснеть)\n- Существительное: "At first blush" (На первый взгляд)',
    [
      { en: 'She blushed when he complimented her dress.', ru: 'Она покраснела, когда он сделал комплимент ее платью.' },
      { en: 'I feel my face blush whenever I make a mistake.', ru: 'Я чувствую, как мое лицо краснеет, когда я делаю ошибку.' },
      { en: 'Do not be afraid to blush; it shows you are honest.', ru: 'Не бойся краснеть; это показывает, что ты честен.' },
      { en: 'He blushed deep red at the mention of her name.', ru: 'Он густо покраснел при упоминании ее имени.' }
    ]
),

createRichWord('b2_brace', 'Brace', '/breɪs/', 'брейс', 'Скоба / Подготовиться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Приготовиться к чему-то неприятному (глагол); или поддерживающее устройство (сущ.).',
    '- Подготовка: "Brace yourself" (Приготовиться / Собраться с духом)\n- Медицина: "Neck brace" (Шейный корсет)\n- Зубы: "Dental braces" (Брекеты)',
    [
      { en: 'Brace yourself for some bad news.', ru: 'Приготовься к плохим новостям.' },
      { en: 'He had to wear a neck brace after the accident.', ru: 'Ему пришлось носить шейный корсет после аварии.' },
      { en: 'Passengers were told to brace for impact.', ru: 'Пассажирам сказали приготовиться к удару.' },
      { en: 'She wore braces on her teeth for two years.', ru: 'Она носила брекеты на зубах два года.' }
    ]
),

createRichWord('b2_bracket', 'Bracket', '/ˈbrækɪt/', 'брэкит', 'Скобка / Категория', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Знак пунктуации (); или группа людей/вещей одной категории (например, по доходу).',
    '- Текст: "In brackets" (В скобках)\n- Доход: "Income bracket" (Группа по доходу)\n- Возраст: "Age bracket" (Возрастная группа)',
    [
      { en: 'Please put the extra information in brackets.', ru: 'Пожалуйста, поместите дополнительную информацию в скобки.' },
      { en: 'They fall into a higher tax bracket now.', ru: 'Теперь они попадают в категорию с более высоким налогом.' },
      { en: 'This competition is for the under-18 age bracket.', ru: 'Это соревнование для возрастной группы до 18 лет.' },
      { en: 'Use square brackets for editorial comments.', ru: 'Используйте квадратные скобки для редакторских комментариев.' }
    ]
),

createRichWord('b2_bribe', 'Bribe', '/braɪb/', 'брайб', 'Взятка / Подкупать', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Деньги, предлагаемые кому-то, чтобы заставить его сделать что-то нечестное.',
    '- Коррупция: "Accept a bribe" (Принять взятку)\n- Действие: "Offer a bribe" (Предложить взятку)\n- Глагол: "Bribe the official" (Подкупить чиновника)',
    [
      { en: 'He tried to offer the police officer a bribe.', ru: 'Он попытался предложить полицейскому взятку.' },
      { en: 'The politician was accused of taking bribes.', ru: 'Политика обвинили в получении взяток.' },
      { en: 'They bribed the guard to let them enter.', ru: 'Они подкупили охранника, чтобы он впустил их.' },
      { en: 'Bribery is a serious crime in most countries.', ru: 'Взяточничество является серьезным преступлением в большинстве стран.' }
    ]
),

createRichWord('b2_brow', 'Brow', '/braʊ/', 'брау', 'Лоб / Бровь', ProficiencyLevel.B2, 'noun', 'Low', 'Literary',
    'Лоб (верхняя часть лица) или бровь (eyebrow). Часто используется в литературном стиле.',
    '- Лицо: "Wipe your brow" (Вытереть лоб)\n- Эмоция: "Furrowed brow" (Нахмуренный лоб)\n- Расположение: "High brow" (Высокий лоб)',
    [
      { en: 'He wiped the sweat from his brow after running.', ru: 'Он вытер пот со лба после бега.' },
      { en: 'She looked at him with a furrowed brow.', ru: 'Она посмотрела на него, нахмурив лоб.' },
      { en: 'His dark brows met in the middle when he frowned.', ru: 'Его темные брови сходились посередине, когда он хмурился.' },
      { en: 'The castle stood on the brow of the hill.', ru: 'Замок стоял на вершине (бровке) холма.' }
    ]
),

createRichWord('b2_buckle', 'Buckle', '/ˈbʌk(ə)l/', 'бакл', 'Пряжка / Застегивать', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Металлическая застежка на ремне; или действие застегивания (глагол).',
    '- Одежда: "Belt buckle" (Пряжка ремня)\n- Безопасность: "Buckle up" (Пристегнуться)\n- Глагол: "Buckle your seatbelt" (Застегнуть ремень безопасности)',
    [
      { en: 'Please buckle your seatbelt before we start driving.', ru: 'Пожалуйста, пристегните ремень безопасности, прежде чем мы поедем.' },
      { en: 'The buckle on my shoe is broken.', ru: 'Пряжка на моем ботинке сломана.' },
      { en: 'His knees began to buckle under the heavy weight.', ru: 'Его колени начали подгибаться под тяжелым весом.' },
      { en: 'Don\'t forget to buckle up in the car.', ru: 'Не забудь пристегнуться в машине.' }
    ]
),

createRichWord('b2_bud', 'Bud', '/bʌd/', 'бад', 'Бутон / Почка', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Маленькая часть растения, которая превращается в цветок или лист.',
    '- Растение: "Flower bud" (Цветочный бутон)\n- Весна: "In bud" (В бутонах / Почкующийся)\n- Вкус: "Taste buds" (Вкусовые рецепторы)',
    [
      { en: 'The roses are full of buds ready to open.', ru: 'Розы полны бутонов, готовых распуститься.' },
      { en: 'In spring, the trees start to produce green buds.', ru: 'Весной на деревьях начинают появляться зеленые почки.' },
      { en: 'Spicy food can stimulate your taste buds.', ru: 'Острая еда может стимулировать ваши вкусовые рецепторы.' },
      { en: 'We should nip this problem in the bud.', ru: 'Мы должны пресечь эту проблему в зародыше (в бутоне).' }
    ]
),

createRichWord('b2_buffer', 'Buffer', '/ˈbʌfə/', 'бафэ', 'Буфер', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Вещь или человек, которые уменьшают шок или защищают от вредного воздействия.',
    '- Защита: "Buffer zone" (Буферная зона)\n- Компьютер: "Buffer memory" (Буферная память)\n- Действие: "Act as a buffer" (Действовать как буфер)',
    [
      { en: 'The trees act as a buffer against the wind.', ru: 'Деревья действуют как буфер против ветра.' },
      { en: 'We need a financial buffer for unexpected expenses.', ru: 'Нам нужен финансовый буфер для непредвиденных расходов.' },
      { en: 'A buffer zone was established between the two countries.', ru: 'Между двумя странами была создана буферная зона.' },
      { en: 'He acted as a buffer between the angry arguments.', ru: 'Он выступал в роли буфера в жарких спорах.' }
    ]
),

createRichWord('b2_burgle', 'Burgle', '/ˈbɜːɡ(ə)l/', 'бёгл', 'Обокрасть (со взломом)', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Незаконно проникнуть в здание и украсть вещи.',
    '- Преступление: "Burgle a house" (Обокрасть дом)\n- Жертва: "We were burgled" (Нас обокрали)\n- Существительное: "Burglar" (Взломщик)',
    [
      { en: 'Their house was burgled while they were on holiday.', ru: 'Их дом обокрали, пока они были в отпуске.' },
      { en: 'He was caught trying to burgle the shop.', ru: 'Его поймали при попытке ограбить магазин.' },
      { en: 'It is a terrible feeling to be burgled.', ru: 'Это ужасное чувство — быть обворованным.' },
      { en: 'Police are warning people to lock doors so they don\'t get burgled.', ru: 'Полиция предупреждает людей запирать двери, чтобы их не обокрали.' }
    ]
),

createRichWord('b2_bust', 'Bust', '/bʌst/', 'баст', 'Сломать / Арестовать / Бюст', ProficiencyLevel.B2, 'verb', 'Medium', 'Informal',
    'Сломать что-то (разг.); арестовать (полиция); или скульптура головы и плеч.',
    '- Разрушение: "Bust the door" (Выломать дверь)\n- Арест: "Get busted" (Быть пойманным/арестованным)\n- Искусство: "Marble bust" (Мраморный бюст)',
    [
      { en: 'The police busted the gang yesterday.', ru: 'Полиция накрыла (арестовала) банду вчера.' },
      { en: 'I accidentally busted my phone screen.', ru: 'Я случайно разбил экран своего телефона.' },
      { en: 'There is a bronze bust of the president in the hall.', ru: 'В холле стоит бронзовый бюст президента.' },
      { en: 'He went bust after losing all his money in the casino.', ru: 'Он разорился после того, как проиграл все деньги в казино.' }
    ]
),

createRichWord('b2_butt', 'Butt', '/bʌt/', 'бат', 'Окурок / Зад / Приклад', ProficiencyLevel.B2, 'noun', 'Medium', 'Informal',
    'Толстый конец чего-либо (окурок, приклад); или (разг.) ягодицы.',
    '- Курение: "Cigarette butt" (Окурок сигареты)\n- Оружие: "Rifle butt" (Приклад винтовки)\n- Тело: "Kick your butt" (Надрать тебе зад)',
    [
      { en: 'Please do not throw cigarette butts on the ground.', ru: 'Пожалуйста, не бросайте окурки на землю.' },
      { en: 'He slipped and landed on his butt.', ru: 'Он поскользнулся и приземлился на зад.' },
      { en: 'The soldier hit the enemy with the butt of his rifle.', ru: 'Солдат ударил врага прикладом своей винтовки.' },
      { en: 'He is always the butt of their jokes.', ru: 'Он всегда является объектом (мишенью) их шуток.' }
    ]
),

createRichWord('b2_bypass', 'Bypass', '/ˈbaɪpɑːs/', 'байпас', 'Объезд / Обходить', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Идти вокруг чего-то; избегать препятствия; или дорога вокруг города.',
    '- Дорога: "Take the bypass" (Поехать по объездной дороге)\n- Действие: "Bypass the system" (Обойти систему)\n- Медицина: "Heart bypass" (Шунтирование сердца)',
    [
      { en: 'We took the bypass to avoid the city traffic.', ru: 'Мы поехали по объездной дороге, чтобы избежать городского трафика.' },
      { en: 'He tried to bypass the security check but failed.', ru: 'Он пытался обойти проверку безопасности, но не смог.' },
      { en: 'The surgeon performed a triple heart bypass.', ru: 'Хирург выполнил тройное шунтирование сердца.' },
      { en: 'You cannot bypass the rules just because you are rich.', ru: 'Вы не можете обходить правила только потому, что вы богаты.' }
    ]
),

createRichWord('b2_cane', 'Cane', '/keɪn/', 'кейн', 'Трость / Розаг', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Палка, используемая для помощи при ходьбе; или стебель бамбука/сахара.',
    '- Помощь: "Walking cane" (Трость для ходьбы)\n- Растение: "Sugar cane" (Сахарный тростник)\n- Наказание: "Beat with a cane" (Бить тростью/розгами)',
    [
      { en: 'The old man walked slowly with the help of a cane.', ru: 'Старик медленно шел с помощью трости.' },
      { en: 'Sugar is made from sugar cane plants.', ru: 'Сахар делают из растений сахарного тростника.' },
      { en: 'He leaned on his cane and watched the sunset.', ru: 'Он оперся на свою трость и смотрел на закат.' },
      { en: 'Furniture made of woven cane is very light.', ru: 'Мебель, сделанная из плетеного тростника, очень легкая.' }
    ]
),

createRichWord('b2_cannon', 'Cannon', '/ˈkænən/', 'кэнэн', 'Пушка', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Большое тяжелое орудие, стрелявшее ядрами в прошлом.',
    '- Оружие: "Fire a cannon" (Выстрелить из пушки)\n- Снаряд: "Cannon ball" (Пушечное ядро)\n- Звук: "Boom of a cannon" (Грохот пушки)',
    [
      { en: 'The pirates fired a cannon at the merchant ship.', ru: 'Пираты выстрелили из пушки по торговому судну.' },
      { en: 'An old cannon stands in the town square.', ru: 'Старая пушка стоит на городской площади.' },
      { en: 'We heard the loud boom of a cannon salute.', ru: 'Мы услышали громкий залп пушечного салюта.' },
      { en: 'They loaded the cannon with a heavy iron ball.', ru: 'Они зарядили пушку тяжелым железным ядром.' }
    ]
),

createRichWord('b2_captive', 'Captive', '/ˈkæptɪv/', 'кэптив', 'Пленник / Пленный', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Человек или животное, которого держат в заключении и не дают уйти.',
    '- Статус: "Held captive" (Удерживаемый в плену)\n- Люди: "Take captives" (Брать пленных)\n- Аудитория: "Captive audience" (Невольная аудитория - идиома)',
    [
      { en: 'The soldiers were held captive for three months.', ru: 'Солдаты удерживались в плену три месяца.' },
      { en: 'They released the captive bird back into the wild.', ru: 'Они выпустили пойманную птицу обратно на волю.' },
      { en: 'He spoke to a captive audience on the airplane.', ru: 'Он говорил с невольной аудиторией (людьми, которые не могли уйти) в самолете.' },
      { en: 'The captives planned their escape carefully.', ru: 'Пленники тщательно планировали свой побег.' }
    ]
),

createRichWord('b2_cassette', 'Cassette', '/kəˈset/', 'кэсет', 'Кассета', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Плоский пластиковый кейс с магнитной лентой для записи звука или видео (устаревшее, но используется).',
    '- Музыка: "Cassette tape" (Аудиокассета)\n- Устройство: "Cassette player" (Кассетный плеер)\n- Запись: "Video cassette" (Видеокассета)',
    [
      { en: 'I found an old box of music cassettes in the attic.', ru: 'Я нашел старую коробку с музыкальными кассетами на чердаке.' },
      { en: 'Do you still have a cassette player to listen to this?', ru: 'У тебя все еще есть кассетный плеер, чтобы послушать это?' },
      { en: 'We used to record songs from the radio onto blank cassettes.', ru: 'Раньше мы записывали песни с радио на пустые кассеты.' },
      { en: 'This technology is older than cassettes.', ru: 'Эта технология старее, чем кассеты.' }
    ]
),

createRichWord('b2_catastrophe', 'Catastrophe', '/kəˈtæstrəfi/', 'кэтэстрэфи', 'Катастрофа', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Внезапное событие, вызывающее огромный ущерб или страдания.',
    '- Событие: "Natural catastrophe" (Природная катастрофа)\n- Последствия: "Prevent a catastrophe" (Предотвратить катастрофу)\n- Жизнь: "Total catastrophe" (Полная катастрофа/провал)',
    [
      { en: 'The earthquake was a major catastrophe for the region.', ru: 'Землетрясение стало крупной катастрофой для региона.' },
      { en: 'We must act now to avoid an environmental catastrophe.', ru: 'Мы должны действовать сейчас, чтобы избежать экологической катастрофы.' },
      { en: 'The party was a complete catastrophe; everything went wrong.', ru: 'Вечеринка была полной катастрофой; все пошло не так.' },
      { en: 'They are sending aid to the victims of the catastrophe.', ru: 'Они отправляют помощь жертвам катастрофы.' }
    ]
  ),
createRichWord('b2_apron', 'Apron', '/ˈeɪprən/', 'эйпрэн', 'Фартук', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Предмет одежды, который носят поверх другой одежды, чтобы сохранить ее чистой при готовке.',
    '- Кухня: "Wear an apron" (Носить фартук)\n- Готовка: "Kitchen apron" (Кухонный фартук)\n- Завязывать: "Tie the apron" (Завязать фартук)',
    [
      { en: 'Put on your apron so you don\'t get dirty.', ru: 'Надень фартук, чтобы не испачкаться.' },
      { en: 'The chef wore a white apron while cooking.', ru: 'Шеф-повар носил белый фартук во время готовки.' },
      { en: 'She has a pocket in her apron for her phone.', ru: 'У нее есть карман в фартуке для телефона.' },
      { en: 'He untied his apron after finishing the dishes.', ru: 'Он развязал фартук после того, как закончил мыть посуду.' }
    ]
),

createRichWord('b2_audition', 'Audition', '/ɔːˈdɪʃn/', 'одишн', 'Прослушивание', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Короткое выступление, чтобы показать свои таланты и получить роль в пьесе или фильме.',
    '- Театр: "Go to an audition" (Пойти на прослушивание)\n- Роль: "Film audition" (Кинопробы)\n- Успех: "Pass the audition" (Пройти прослушивание)',
    [
      { en: 'She has an audition for a part in the school play.', ru: 'У нее прослушивание на роль в школьном спектакле.' },
      { en: 'He was very nervous before his singing audition.', ru: 'Он очень нервничал перед своим вокальным прослушиванием.' },
      { en: 'Hundreds of actors went to the audition.', ru: 'Сотни актеров пришли на прослушивание.' },
      { en: 'If the audition goes well, I might get the job.', ru: 'Если прослушивание пройдет хорошо, я могу получить работу.' }
    ]
  ),
createRichWord('b2_awesome', 'Awesome', '/ˈɔːsəm/', 'осэм', 'Потрясающий / Здорово', ProficiencyLevel.B2, 'adj', 'High', 'Informal',
    'Очень впечатляющий или (в разговорной речи) очень хороший, отличный.',
    '- Впечатление: "Awesome view" (Потрясающий вид)\n- Разговор: "That is awesome!" (Это здорово!)\n- Качество: "Awesome job" (Отличная работа)',
    [
      { en: 'The view from the top of the mountain was awesome.', ru: 'Вид с вершины горы был потрясающим.' },
      { en: 'You got tickets to the concert? That\'s awesome!', ru: 'Ты достал билеты на концерт? Это здорово!' },
      { en: 'He did an awesome job fixing my car.', ru: 'Он проделал отличную работу, починив мою машину.' },
      { en: 'We had an awesome time at the party last night.', ru: 'Мы потрясающе провели время на вечеринке вчера вечером.' }
    ]
),

createRichWord('b2_beetle', 'Beetle', '/ˈbiːt(ə)l/', 'битл', 'Жук', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Насекомое с твердым панцирем на спине.',
    '- Природа: "Black beetle" (Черный жук)\n- Движение: "Crawling beetle" (Ползущий жук)\n- Вид: "Large beetle" (Большой жук)',
    [
      { en: 'A large black beetle crawled across the path.', ru: 'Большой черный жук переполз через дорожку.' },
      { en: 'Some beetles can fly using wings under their shell.', ru: 'Некоторые жуки могут летать, используя крылья под панцирем.' },
      { en: 'She is afraid of spiders and beetles.', ru: 'Она боится пауков и жуков.' },
      { en: 'We studied the life cycle of a beetle in biology class.', ru: 'Мы изучали жизненный цикл жука на уроке биологии.' }
    ]
),

createRichWord('b2_beforehand', 'Beforehand', '/bɪˈfɔːhænd/', 'бифохэнд', 'Заранее', ProficiencyLevel.B2, 'adv', 'Medium', 'Neutral',
    'Раньше, чем что-то произойдет; заблаговременно.',
    '- Планирование: "Plan beforehand" (Планировать заранее)\n- Знание: "Know beforehand" (Знать заранее)\n- Предупреждение: "Warn beforehand" (Предупредить заранее)',
    [
      { en: 'If you want to come, please let me know beforehand.', ru: 'Если ты хочешь прийти, пожалуйста, дай мне знать заранее.' },
      { en: 'We cooked all the food beforehand so we could relax.', ru: 'Мы приготовили всю еду заранее, чтобы можно было расслабиться.' },
      { en: 'I wish I had known about the traffic jam beforehand.', ru: 'Жаль, что я не знал о пробке заранее.' },
      { en: 'Read the instructions beforehand to avoid mistakes.', ru: 'Прочитайте инструкции заранее, чтобы избежать ошибок.' }
    ]
),

createRichWord('b2_booth', 'Booth', '/buːð/', 'буз', 'Будка / Кабинка / Стенд', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Небольшое закрытое место для одного человека (телефонная будка) или стол на выставке.',
    '- Связь: "Phone booth" (Телефонная будка)\n- Выборы: "Voting booth" (Кабинка для голосования)\n- Выставка: "Ticket booth" (Билетная касса)',
    [
      { en: 'He made a call from a public phone booth.', ru: 'Он позвонил из общественной телефонной будки.' },
      { en: 'We sat in a private booth at the restaurant.', ru: 'Мы сидели в отдельной кабинке в ресторане.' },
      { en: 'They set up a booth to sell homemade cakes.', ru: 'Они установили стенд для продажи домашней выпечки.' },
      { en: 'You enter the voting booth alone to cast your vote.', ru: 'Вы входите в кабинку для голосования один, чтобы отдать свой голос.' }
    ]
),

createRichWord('b2_brownie', 'Brownie', '/ˈbraʊni/', 'брауни', 'Брауни', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Маленькое квадратное шоколадное пирожное.',
    '- Еда: "Chocolate brownie" (Шоколадный брауни)\n- Десерт: "Warm brownie" (Теплый брауни)\n- Выпечка: "Bake brownies" (Печь брауни)',
    [
      { en: 'Would you like a chocolate brownie with your coffee?', ru: 'Хотите шоколадный брауни к кофе?' },
      { en: 'She baked a batch of delicious brownies for us.', ru: 'Она испекла партию вкусных брауни для нас.' },
      { en: 'The brownie was served warm with vanilla ice cream.', ru: 'Брауни подавали теплым с ванильным мороженым.' },
      { en: 'My favorite dessert is a gooey chocolate brownie.', ru: 'Мой любимый десерт — тягучий шоколадный брауни.' }
    ]
),

createRichWord('b2_browse', 'Browse', '/braʊz/', 'брауз', 'Просматривать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Смотреть товары в магазине без намерения купить; или просматривать информацию в интернете.',
    '- Магазин: "Just browsing" (Просто смотрю)\n- Интернет: "Browse the internet" (Сидеть в интернете)\n- Книги: "Browse through books" (Листать книги)',
    [
      { en: 'I am just browsing, thank you.', ru: 'Я просто смотрю, спасибо.' },
      { en: 'He spent hours browsing the internet for news.', ru: 'Он провел часы, просматривая новости в интернете.' },
      { en: 'She likes to browse through old books in the library.', ru: 'Она любит просматривать старые книги в библиотеке.' },
      { en: 'You can browse the catalog to see what we offer.', ru: 'Вы можете просмотреть каталог, чтобы увидеть, что мы предлагаем.' }
    ]
),

createRichWord('b2_buddy', 'Buddy', '/ˈbʌdi/', 'бади', 'Приятель / Друг', ProficiencyLevel.B2, 'noun', 'High', 'Informal',
    'Друг (обычно используется мужчинами); разговорное обращение.',
    '- Дружба: "Best buddy" (Лучший приятель)\n- Обращение: "Hey buddy" (Эй, приятель)\n- Помощь: "Study buddy" (Напарник по учебе)',
    [
      { en: 'He went out for a drink with his old army buddies.', ru: 'Он пошел выпить со своими старыми армейскими приятелями.' },
      { en: 'Hey buddy, can you help me move this table?', ru: 'Эй, приятель, можешь помочь мне передвинуть этот стол?' },
      { en: 'We became buddies after working together on a project.', ru: 'Мы стали приятелями после совместной работы над проектом.' },
      { en: 'I need a gym buddy to keep me motivated.', ru: 'Мне нужен напарник по спортзалу, чтобы мотивировать меня.' }
    ]
),

createRichWord('b2_buffet', 'Buffet', '/ˈbʊfeɪ/', 'буфей', 'Шведский стол / Буфет', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Прием пищи, где люди обслуживают себя сами, выбирая еду с общего стола.',
    '- Еда: "Breakfast buffet" (Шведский стол на завтрак)\n- Ресторан: "All-you-can-eat buffet" (Безлимитный шведский стол)\n- Место: "Station buffet" (Вокзальный буфет)',
    [
      { en: 'The hotel offers a delicious breakfast buffet every morning.', ru: 'Каждое утро отель предлагает вкусный шведский стол на завтрак.' },
      { en: 'We ate at an all-you-can-eat buffet for lunch.', ru: 'Мы пообедали в ресторане с безлимитным шведским столом.' },
      { en: 'Guests can serve themselves from the cold buffet.', ru: 'Гости могут сами накладывать себе еду с холодного шведского стола.' },
      { en: 'There was a wide variety of dishes at the wedding buffet.', ru: 'На свадебном фуршете было большое разнообразие блюд.' }
    ]
  ),
  createRichWord('b2_abbreviate', 'Abbreviate', '/əˈbriːvieɪt/', 'эбривиэйт', 'Сокращать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Сделать слово или фразу короче (например, using "USA" instead of "United States").',
    '- Текст: "Abbreviate a word" (Сократить слово)\n- Имя: "Abbreviated name" (Сокращенное имя)\n- Письмо: "Abbreviate to" (Сократить до)',
    [
      { en: 'You can abbreviate "United States" to "US".', ru: 'Вы можете сократить "Соединенные Штаты" до "США".' },
      { en: 'The word "information" is often abbreviated as "info".', ru: 'Слово "информация" часто сокращается как "инфо".' },
      { en: 'Please do not abbreviate words in formal writing.', ru: 'Пожалуйста, не сокращайте слова в официальном письме.' },
      { en: 'His name is William, but he abbreviates it to Will.', ru: 'Его зовут Уильям, но он сокращает это до Уилл.' }
    ]
),

createRichWord('b2_acorn', 'Acorn', '/ˈeɪkɔːn/', 'эйкон', 'Желудь', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Орех дуба, обычно с чашечкой у основания.',
    '- Дерево: "Oak acorn" (Дубовый желудь)\n- Природа: "Acorn cup" (Чашечка желудя)\n- Рост: "Grow from an acorn" (Вырасти из желудя)',
    [
      { en: 'A mighty oak tree grows from a tiny acorn.', ru: 'Могучий дуб вырастает из крошечного желудя.' },
      { en: 'Squirrels collect acorns to eat in the winter.', ru: 'Белки собирают желуди, чтобы есть их зимой.' },
      { en: 'The ground under the tree was covered in acorns.', ru: 'Земля под деревом была покрыта желудями.' },
      { en: 'He found a smooth brown acorn in the park.', ru: 'Он нашел гладкий коричневый желудь в парке.' }
    ]
),

createRichWord('b2_adjourn', 'Adjourn', '/əˈdʒɜːn/', 'эджён', 'Откладывать / Объявлять перерыв', ProficiencyLevel.B2, 'verb', 'Low', 'Formal',
    'Остановить встречу или судебное заседание на короткое время или до другого дня.',
    '- Встреча: "Meeting adjourned" (Собрание закрыто/отложено)\n- Суд: "Adjourn court" (Объявить перерыв в суде)\n- Решение: "Adjourn until tomorrow" (Отложить до завтра)',
    [
      { en: 'The judge decided to adjourn the trial until Monday.', ru: 'Судья решил отложить судебное разбирательство до понедельника.' },
      { en: 'The meeting was adjourned for lunch.', ru: 'В собрании был объявлен перерыв на обед.' },
      { en: 'We shall adjourn now and continue tomorrow morning.', ru: 'Мы прервемся сейчас и продолжим завтра утром.' },
      { en: 'Without any objections, the meeting is adjourned.', ru: 'Без возражений, собрание объявляется закрытым.' }
    ]
),

createRichWord('b2_adultery', 'Adultery', '/əˈdʌltəri/', 'эдалтэри', 'Прелюбодеяние / Измена', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Секс между женатым человеком и кем-то, кто не является его мужем или женой.',
    '- Брак: "Commit adultery" (Совершить прелюбодеяние)\n- Закон: "Guilty of adultery" (Виновен в измене)\n- Отношения: "Adultery scandal" (Скандал с изменой)',
    [
      { en: 'She divorced him because he committed adultery.', ru: 'Она развелась с ним, потому что он совершил прелюбодеяние.' },
      { en: 'Adultery is considered a sin in many religions.', ru: 'Прелюбодеяние считается грехом во многих религиях.' },
      { en: 'He admitted to adultery and asked for forgiveness.', ru: 'Он признался в измене и попросил прощения.' },
      { en: 'The politician resigned after an adultery scandal.', ru: 'Политик ушел в отставку после скандала с изменой.' }
    ]
),

createRichWord('b2_agile', 'Agile', '/ˈædʒaɪl/', 'эджайл', 'Ловкий / Гибкий', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Способный двигаться быстро и легко; или способный думать быстро и умно.',
    '- Движение: "Agile body" (Гибкое тело)\n- Ум: "Agile mind" (Живой ум)\n- Бизнес: "Agile management" (Гибкое управление)',
    [
      { en: 'Monkeys are very agile climbers.', ru: 'Обезьяны — очень ловкие верхолазы.' },
      { en: 'He is ninety years old, but his mind is still agile.', ru: 'Ему девяносто лет, но его ум все еще живой.' },
      { en: 'You need to be agile to play basketball well.', ru: 'Нужно быть ловким, чтобы хорошо играть в баскетбол.' },
      { en: 'The company needs an agile strategy to survive.', ru: 'Компании нужна гибкая стратегия, чтобы выжить.' }
    ]
),

createRichWord('b2_alloy', 'Alloy', '/ˈælɔɪ/', 'элой', 'Сплав', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Металл, полученный путем смешивания двух или более металлов.',
    '- Металл: "Metal alloy" (Металлический сплав)\n- Смесь: "Brass is an alloy" (Латунь — это сплав)\n- Материал: "Alloy wheels" (Литые диски)',
    [
      { en: 'Bronze is an alloy of copper and tin.', ru: 'Бронза — это сплав меди и олова.' },
      { en: 'These wheels are made of a lightweight aluminium alloy.', ru: 'Эти колеса сделаны из легкого алюминиевого сплава.' },
      { en: 'Scientists are developing a new super-strong alloy.', ru: 'Ученые разрабатывают новый сверхпрочный сплав.' },
      { en: 'Alloys are often stronger than pure metals.', ru: 'Сплавы часто прочнее чистых металлов.' }
    ]
),

createRichWord('b2_almighty', 'Almighty', '/ɔːlˈmaɪti/', 'олмайти', 'Всемогущий', ProficiencyLevel.B2, 'adj', 'Low', 'Formal',
    'Имеющий полную силу (часто о Боге); или (разг.) очень большой/громкий.',
    '- Бог: "God Almighty" (Бог Всемогущий)\n- Сила: "Almighty power" (Всемогущая сила)\n- Шум: "Almighty crash" (Страшный грохот)',
    [
      { en: 'They prayed to the Almighty for help.', ru: 'Они молились Всемогущему о помощи.' },
      { en: 'There was an almighty crash in the kitchen.', ru: 'На кухне раздался страшный грохот.' },
      { en: 'He believes in an almighty creator.', ru: 'Он верит во всемогущего создателя.' },
      { en: 'We got into an almighty row about money.', ru: 'Мы ввязались в ужасную ссору из-за денег.' }
    ]
),

createRichWord('b2_ambience', 'Ambience', '/ˈæmbiəns/', 'эмбиэнс', 'Атмосфера / Обстановка', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Характер и настроение места.',
    '- Место: "Relaxing ambience" (Расслабляющая атмосфера)\n- Ресторан: "Nice ambience" (Приятная обстановка)\n- Создание: "Create an ambience" (Создать атмосферу)',
    [
      { en: 'The restaurant has a very romantic ambience.', ru: 'В ресторане очень романтичная атмосфера.' },
      { en: 'Soft lighting creates a relaxing ambience in the room.', ru: 'Мягкое освещение создает расслабляющую атмосферу в комнате.' },
      { en: 'I enjoyed the friendly ambience of the local cafe.', ru: 'Мне понравилась дружелюбная обстановка местного кафе.' },
      { en: 'The music added to the festive ambience.', ru: 'Музыка дополнила праздничную атмосферу.' }
    ]
),

createRichWord('b2_amidst', 'Amidst', '/əˈmɪdst/', 'эмидст', 'Среди / Посреди', ProficiencyLevel.B2, 'prep', 'Low', 'Literary',
    'В середине или в окружении чего-то (литературная форма слова "amid").',
    '- Место: "Amidst the trees" (Среди деревьев)\n- Ситуация: "Amidst chaos" (Посреди хаоса)\n- Люди: "Amidst the crowd" (В толпе)',
    [
      { en: 'The house stood hidden amidst the tall trees.', ru: 'Дом стоял, скрытый среди высоких деревьев.' },
      { en: 'He remained calm amidst the chaos around him.', ru: 'Он оставался спокойным посреди хаоса вокруг него.' },
      { en: 'They found hope amidst the tragedy.', ru: 'Они нашли надежду посреди трагедии.' },
      { en: 'She sat quietly amidst her noisy friends.', ru: 'Она тихо сидела среди своих шумных друзей.' }
    ]
),

createRichWord('b2_amphibian', 'Amphibian', '/æmˈfɪbiən/', 'эмфибиэн', 'Амфибия / Земноводное', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Животное, которое может жить как на суше, так и в воде (лягушки, жабы).',
    '- Животное: "Frog is an amphibian" (Лягушка — земноводное)\n- Среда: "Amphibian life" (Жизнь амфибий)\n- Транспорт: "Amphibian vehicle" (Машина-амфибия)',
    [
      { en: 'Frogs and salamanders are typical amphibians.', ru: 'Лягушки и саламандры — типичные земноводные.' },
      { en: 'An amphibian lays its eggs in water.', ru: 'Земноводное откладывает яйца в воде.' },
      { en: 'Amphibians can breathe through their skin.', ru: 'Амфибии могут дышать через кожу.' },
      { en: 'They used an amphibian plane to land on the lake.', ru: 'Они использовали самолет-амфибию, чтобы приземлиться на озеро.' }
    ]
),

createRichWord('b2_anal', 'Anal', '/ˈeɪnl/', 'эйнл', 'Анальный', ProficiencyLevel.B2, 'adj', 'Low', 'Neutral',
    'Относящийся к анусу (медицинский термин).',
    '- Медицина: "Anal canal" (Анальный канал)\n- Анатомия: "Anal sphincter" (Анальный сфинктер)\n- Психология: "Retentive" (Зацикленный / Педантичный)',
    [
      { en: 'The doctor examined the anal region for any issues.', ru: 'Врач осмотрел анальную область на предмет проблем.' },
      { en: 'Certain medicines are administered via the anal route.', ru: 'Некоторые лекарства вводятся анальным путем.' },
      { en: 'Anal glands in dogs can sometimes cause problems.', ru: 'Анальные железы у собак иногда могут вызывать проблемы.' },
      { en: 'The term is strictly anatomical in this context.', ru: 'В данном контексте термин является строго анатомическим.' }
    ]
),

createRichWord('b2_angular', 'Angular', '/ˈæŋɡjələ/', 'энгьюлэ', 'Угловатый', ProficiencyLevel.B2, 'adj', 'Low', 'Neutral',
    'Имеющий острые углы или костлявый (о человеке).',
    '- Форма: "Angular shape" (Угловатая форма)\n- Лицо: "Angular face" (Угловатое лицо)\n- Дизайн: "Angular design" (Угловатый дизайн)',
    [
      { en: 'The building has a very modern, angular design.', ru: 'У здания очень современный, угловатый дизайн.' },
      { en: 'He was a tall, angular man with sharp features.', ru: 'Он был высоким, угловатым (костлявым) мужчиной с острыми чертами лица.' },
      { en: 'Her handwriting is sharp and angular.', ru: 'Ее почерк острый и угловатый.' },
      { en: 'The chair feels hard and angular.', ru: 'Стул кажется жестким и угловатым.' }
    ]
),

createRichWord('b2_anonymity', 'Anonymity', '/ˌænəˈnɪməti/', 'энэнимэти', 'Анонимность', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Состояние, когда имя человека неизвестно или не разглашается.',
    '- Интернет: "Internet anonymity" (Анонимность в интернете)\n- Желание: "Preserve anonymity" (Сохранить анонимность)\n- Условие: "Condition of anonymity" (Условие анонимности)',
    [
      { en: 'She agreed to give the interview only on condition of anonymity.', ru: 'Она согласилась дать интервью только на условии анонимности.' },
      { en: 'The internet provides a certain level of anonymity.', ru: 'Интернет обеспечивает определенный уровень анонимности.' },
      { en: 'He enjoys the anonymity of living in a big city.', ru: 'Ему нравится анонимность жизни в большом городе.' },
      { en: 'The donor requested total anonymity.', ru: 'Донор попросил о полной анонимности.' }
    ]
),

createRichWord('b2_anorexia', 'Anorexia', '/ˌænəˈreksiə/', 'энэрексиэ', 'Анорексия', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Серьезное психическое заболевание, при котором человек перестает есть из-за страха потолстеть.',
    '- Здоровье: "Suffer from anorexia" (Страдать анорексией)\n- Тип: "Anorexia nervosa" (Нервная анорексия)\n- Лечение: "Treat anorexia" (Лечить анорексию)',
    [
      { en: 'Anorexia is a dangerous eating disorder.', ru: 'Анорексия — опасное расстройство пищевого поведения.' },
      { en: 'She was hospitalized due to severe anorexia.', ru: 'Она была госпитализирована из-за тяжелой анорексии.' },
      { en: 'Models are often at risk of developing anorexia.', ru: 'Модели часто подвержены риску развития анорексии.' },
      { en: 'Recovery from anorexia takes a long time.', ru: 'Выздоровление от анорексии занимает много времени.' }
    ]
),

createRichWord('b2_apologetic', 'Apologetic', '/əˌpɒləˈdʒetɪk/', 'эполэджетэк', 'Виноватый / Извиняющийся', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Выражающий сожаление о чем-то сделанном.',
    '- Тон: "Apologetic voice" (Виноватый голос)\n- Поведение: "Be apologetic" (Извиняться / Быть виноватым)\n- Улыбка: "Apologetic smile" (Виноватая улыбка)',
    [
      { en: 'He was very apologetic about breaking the vase.', ru: 'Он очень извинялся за то, что разбил вазу.' },
      { en: 'She gave an apologetic smile when she arrived late.', ru: 'Она виновато улыбнулась, когда пришла с опозданием.' },
      { en: 'The manager was apologetic for the poor service.', ru: 'Менеджер принес извинения за плохое обслуживание.' },
      { en: 'There is no need to be so apologetic; it was an accident.', ru: 'Нет нужды так извиняться, это была случайность.' }
    ]
),

createRichWord('b2_aristocracy', 'Aristocracy', '/ˌærɪˈstɒkrəsi/', 'эристóкрэси', 'Аристократия', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Люди высокого социального класса, часто имеющие титулы (лорды, дюки).',
    '- Общество: "Member of the aristocracy" (Член аристократии)\n- История: "French aristocracy" (Французская аристократия)\n- Власть: "Ruled by aristocracy" (Управляемый аристократией)',
    [
      { en: 'The aristocracy once owned most of the land.', ru: 'Аристократия когда-то владела большей частью земли.' },
      { en: 'He married into the British aristocracy.', ru: 'Он женился на представительнице британской аристократии.' },
      { en: 'The revolution destroyed the power of the aristocracy.', ru: 'Революция уничтожила власть аристократии.' },
      { en: 'Members of the aristocracy usually have inherited titles.', ru: 'Члены аристократии обычно имеют наследственные титулы.' }
    ]
),

createRichWord('b2_artifact', 'Artifact', '/ˈɑːtɪfækt/', 'атифэкт', 'Артефакт', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Предмет, сделанный человеком, имеющий культурный или исторический интерес (также Artefact).',
    '- Музей: "Ancient artifact" (Древний артефакт)\n- История: "Historical artifact" (Исторический артефакт)\n- Находка: "Rare artifact" (Редкий артефакт)',
    [
      { en: 'The museum displays artifacts from ancient Egypt.', ru: 'Музей выставляет артефакты из древнего Египта.' },
      { en: 'Archaeologists found a valuable artifact in the cave.', ru: 'Археологи нашли ценный артефакт в пещере.' },
      { en: 'This pottery is an artifact of the Roman era.', ru: 'Эта керамика — артефакт римской эпохи.' },
      { en: 'Selling stolen artifacts is illegal.', ru: 'Продажа украденных артефактов незаконна.' }
    ]
),

createRichWord('b2_asbestos', 'Asbestos', '/æsˈbestɒs/', 'эсбестос', 'Асбест', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Огнестойкий серый минерал, который может вызвать серьезные заболевания легких.',
    '- Строительство: "Remove asbestos" (Удалять асбест)\n- Здоровье: "Asbestos poisoning" (Отравление асбестом)\n- Материал: "Asbestos roof" (Асбестовая крыша)',
    [
      { en: 'The old building contains dangerous asbestos.', ru: 'Старое здание содержит опасный асбест.' },
      { en: 'Workers wore masks to protect against asbestos dust.', ru: 'Рабочие носили маски для защиты от асбестовой пыли.' },
      { en: 'Asbestos was once commonly used for insulation.', ru: 'Асбест когда-то широко использовался для изоляции.' },
      { en: 'Breathing asbestos fibers can cause lung cancer.', ru: 'Вдыхание волокон асбеста может вызвать рак легких.' }
    ]
),

createRichWord('b2_astound', 'Astound', '/əˈstaʊnd/', 'эстаунд', 'Изумлять / Поражать', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Сильно удивить или шокировать кого-то.',
    '- Эмоция: "Astound the audience" (Изумить аудиторию)\n- Результат: "Be astounded" (Быть пораженным)\n- Новость: "Astounding news" (Поразительные новости)',
    [
      { en: 'The magician\'s tricks astounded the children.', ru: 'Трюки фокусника изумили детей.' },
      { en: 'I was astounded by his lack of knowledge.', ru: 'Я был поражен его отсутствием знаний.' },
      { en: 'Her beautiful voice astounded the judges.', ru: 'Ее красивый голос поразил судей.' },
      { en: 'It astounds me that you never told me the truth.', ru: 'Меня поражает, что ты никогда не говорил мне правду.' }
    ]
),

createRichWord('b2_astronomical', 'Astronomical', '/ˌæstrəˈnɒmɪk(ə)l/', 'эстрэнóмикл', 'Астрономический', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Связанный с астрономией; или чрезвычайно большой (о цене, сумме).',
    '- Наука: "Astronomical telescope" (Астрономический телескоп)\n- Размер: "Astronomical cost" (Астрономическая стоимость)\n- Число: "Astronomical figures" (Астрономические цифры)',
    [
      { en: 'The cost of the new stadium was astronomical.', ru: 'Стоимость нового стадиона была астрономической.' },
      { en: 'Astronomical distances are measured in light years.', ru: 'Астрономические расстояния измеряются в световых годах.' },
      { en: 'He has an astronomical amount of debt.', ru: 'У него астрономическая сумма долга.' },
      { en: 'We used an astronomical map to find the stars.', ru: 'Мы использовали астрономическую карту, чтобы найти звезды.' }
    ]
),

createRichWord('b2_atop', 'Atop', '/əˈtɒp/', 'этоп', 'Наверху / Поверх', ProficiencyLevel.B2, 'prep', 'Low', 'Formal',
    'На вершине чего-то.',
    '- Место: "Atop the hill" (На вершине холма)\n- Здание: "Atop the roof" (На крыше)\n- Позиция: "Sit atop" (Сидеть поверх)',
    [
      { en: 'The castle sits atop a steep hill.', ru: 'Замок стоит на вершине крутого холма.' },
      { en: 'There was a cherry atop the cake.', ru: 'На верхушке торта была вишенка.' },
      { en: 'He stood atop the ladder to change the bulb.', ru: 'Он стоял на верху лестницы, чтобы поменять лампочку.' },
      { en: 'Snow lay atop the mountain peaks.', ru: 'Снег лежал на горных вершинах.' }
    ]
  ),
createRichWord('b2_auditorium', 'Auditorium', '/ˌɔːdɪˈtɔːriəm/', 'одиториэм', 'Аудитория / Зрительный зал', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Большой зал в школе или театре, где сидит публика во время представлений.',
    '- Место: "School auditorium" (Школьный актовый зал)\n- Состояние: "Packed auditorium" (Переполненный зал)\n- Действие: "Fill the auditorium" (Заполнить аудиторию)',
    [
      { en: 'The students gathered in the auditorium for the assembly.', ru: 'Студенты собрались в актовом зале на собрание.' },
      { en: 'The auditorium was packed with excited fans.', ru: 'Зрительный зал был битком набит взволнованными фанатами.' },
      { en: 'Our graduation ceremony will be held in the main auditorium.', ru: 'Наш выпускной пройдет в главной аудитории.' },
      { en: 'The acoustics in this auditorium are excellent.', ru: 'Акустика в этом зале превосходная.' }
    ]
),

createRichWord('b2_beak', 'Beak', '/biːk/', 'бик', 'Клюв', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Твердый рот птицы; иногда используется для обозначения носа (разг.).',
    '- Птица: "Sharp beak" (Острый клюв)\n- Действие: "Open beak" (Открыть клюв)\n- Форма: "Curved beak" (Изогнутый клюв)',
    [
      { en: 'The eagle has a very sharp and curved beak.', ru: 'У орла очень острый и изогнутый клюв.' },
      { en: 'The bird carried a worm in its beak to the nest.', ru: 'Птица несла червяка в клюве к гнезду.' },
      { en: 'It used its strong beak to crack the nut open.', ru: 'Она использовала свой сильный клюв, чтобы расколоть орех.' },
      { en: 'Different birds have different shapes of beaks.', ru: 'У разных птиц разные формы клювов.' }
    ]
),

createRichWord('b2_bilingual', 'Bilingual', '/ˌbaɪˈlɪŋɡwəl/', 'байлингвэл', 'Двуязычный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Способный говорить на двух языках одинаково хорошо.',
    '- Навык: "Bilingual education" (Двуязычное образование)\n- Человек: "Bilingual child" (Двуязычный ребенок)\n- Словарь: "Bilingual dictionary" (Двуязычный словарь)',
    [
      { en: 'She is bilingual in English and Spanish.', ru: 'Она двуязычна и говорит на английском и испанском.' },
      { en: 'Growing up in Canada, he became completely bilingual.', ru: 'Выросший в Канаде, он стал полностью двуязычным.' },
      { en: 'The company needs a bilingual secretary.', ru: 'Компании нужен двуязычный секретарь.' },
      { en: 'This is a bilingual edition of the book.', ru: 'Это двуязычное издание книги.' }
    ]
),

createRichWord('b2_biotechnology', 'Biotechnology', '/ˌbaɪəʊtekˈnɒlədʒi/', 'байотекнолэджи', 'Биотехнология', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Использование живых организмов для создания продуктов, особенно в медицине и сельском хозяйстве.',
    '- Индустрия: "Biotechnology industry" (Биотехнологическая индустрия)\n- Прогресс: "Advances in biotechnology" (Достижения в биотехнологии)\n- Продукт: "Biotechnology products" (Биотехнологические продукты)',
    [
      { en: 'Biotechnology allows us to create better medicines.', ru: 'Биотехнология позволяет нам создавать лучшие лекарства.' },
      { en: 'He works for a leading biotechnology firm.', ru: 'Он работает в ведущей биотехнологической фирме.' },
      { en: 'Advances in biotechnology have improved crop yields.', ru: 'Достижения в биотехнологии повысили урожайность сельскохозяйственных культур.' },
      { en: 'Many people debate the ethics of biotechnology.', ru: 'Многие люди спорят об этике биотехнологии.' }
    ]
),

createRichWord('b2_blazer', 'Blazer', '/ˈbleɪzə/', 'блэйзэ', 'Блейзер / Пиджак', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Тип пиджака, который носят с другой одеждой, часто как часть школьной формы или для работы.',
    '- Одежда: "School blazer" (Школьный пиджак)\n- Стиль: "Wear a blazer" (Носить блейзер)\n- Цвет: "Navy blue blazer" (Темно-синий блейзер)',
    [
      { en: 'You must wear your school blazer at all times.', ru: 'Ты должен всегда носить школьный пиджак.' },
      { en: 'He looked smart in his navy blue blazer.', ru: 'Он выглядел элегантно в своем темно-синем блейзере.' },
      { en: 'I bought a new blazer for the job interview.', ru: 'Я купил новый пиджак для собеседования.' },
      { en: 'It is too hot to wear a blazer today.', ru: 'Сегодня слишком жарко, чтобы носить блейзер.' }
    ]
),

createRichWord('b2_bloke', 'Bloke', '/bləʊk/', 'блоук', 'Парень / Мужик', ProficiencyLevel.B2, 'noun', 'High', 'Informal',
    'Неформальное слово для обозначения мужчины (британский английский).',
    '- Характер: "Nice bloke" (Хороший парень)\n- Отношения: "Regular bloke" (Обычный мужик)\n- Обращение: "Some bloke" (Какой-то тип)',
    [
      { en: 'He seems like a really nice bloke.', ru: 'Он кажется действительно хорошим парнем.' },
      { en: 'I met a bloke at the pub who knows you.', ru: 'Я встретил в пабе парня, который тебя знает.' },
      { en: 'Some bloke asked me for directions.', ru: 'Какой-то мужик спросил у меня дорогу.' },
      { en: 'He is just an ordinary bloke from London.', ru: 'Он просто обычный парень из Лондона.' }
    ]
),

createRichWord('b2_boutique', 'Boutique', '/buːˈtiːk/', 'бутик', 'Бутик', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Небольшой магазин, продающий модную одежду или дорогие подарки.',
    '- Магазин: "Fashion boutique" (Модный бутик)\n- Стиль: "Boutique hotel" (Бутик-отель)\n- Покупки: "Shop at a boutique" (Делать покупки в бутике)',
    [
      { en: 'She bought her dress at a small boutique in Paris.', ru: 'Она купила свое платье в маленьком бутике в Париже.' },
      { en: 'This boutique sells unique handmade jewelry.', ru: 'Этот бутик продает уникальные украшения ручной работы.' },
      { en: 'We stayed at a charming boutique hotel.', ru: 'Мы остановились в очаровательном бутик-отеле.' },
      { en: 'Prices in this boutique are quite high.', ru: 'Цены в этом бутике довольно высокие.' }
    ]
),

createRichWord('b2_brilliance', 'Brilliance', '/ˈbrɪliəns/', 'брилиэнс', 'Блеск / Гениальность', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Большая яркость света или исключительный ум и талант.',
    '- Ум: "Technical brilliance" (Техническая гениальность)\n- Свет: "Sheer brilliance" (Чистый блеск)\n- Талант: "Musical brilliance" (Музыкальная гениальность)',
    [
      { en: 'We were amazed by the brilliance of the diamond.', ru: 'Мы были поражены блеском бриллианта.' },
      { en: 'His brilliance as a mathematician is well known.', ru: 'Его гениальность как математика хорошо известна.' },
      { en: 'The sun shone with dazzling brilliance.', ru: 'Солнце светило с ослепительным блеском.' },
      { en: 'The sheer brilliance of her idea saved the project.', ru: 'Чистая гениальность ее идеи спасла проект.' }
    ]
),

createRichWord('b2_buffalo', 'Buffalo', '/ˈbʌfələʊ/', 'бафэлоу', 'Буйвол / Бизон', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Крупное дикое животное, похожее на корову, с большими рогами.',
    '- Животное: "Water buffalo" (Водяной буйвол)\n- Группа: "Herd of buffalo" (Стадо буйволов)\n- Еда: "Buffalo wings" (Крылышки "Баффало")',
    [
      { en: 'We saw a herd of buffalo grazing on the plains.', ru: 'Мы видели стадо бизонов, пасущихся на равнинах.' },
      { en: 'The water buffalo is used for farming in Asia.', ru: 'Водяной буйвол используется в сельском хозяйстве в Азии.' },
      { en: 'Buffalo were once hunted almost to extinction.', ru: 'Бизоны когда-то были истреблены почти до полного исчезновения.' },
      { en: 'The massive buffalo charged at the truck.', ru: 'Массивный буйвол бросился на грузовик.' }
    ]
),

createRichWord('b2_canteen', 'Canteen', '/kænˈtiːn/', 'кэнтин', 'Столовая / Фляга', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Место в школе или офисе, где подают еду; или контейнер для воды.',
    '- Еда: "School canteen" (Школьная столовая)\n- Работа: "Staff canteen" (Столовая для персонала)\n- Вода: "Water canteen" (Фляга для воды)',
    [
      { en: 'We usually eat lunch in the staff canteen.', ru: 'Мы обычно обедаем в столовой для персонала.' },
      { en: 'The food in the school canteen is quite cheap.', ru: 'Еда в школьной столовой довольно дешевая.' },
      { en: 'The soldier drank water from his canteen.', ru: 'Солдат пил воду из своей фляги.' },
      { en: 'Let\'s meet in the canteen at one o\'clock.', ru: 'Давай встретимся в столовой в час.' }
    ]
  ),
createRichWord('b2_bandit', 'Bandit', '/ˈbændɪt/', 'бэндит', 'Бандит / Разбойник', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Грабитель, который нападает на путешественников; член вооруженной банды.',
    '- Преступление: "Masked bandit" (Бандит в маске)\n- История: "Famous bandit" (Известный разбойник)\n- Действие: "Attack by bandits" (Нападение бандитов)',
    [
      { en: 'The stagecoach was attacked by a group of bandits.', ru: 'Дилижанс был атакован группой бандитов.' },
      { en: 'He was known as a famous bandit in the Wild West.', ru: 'Он был известен как знаменитый разбойник на Диком Западе.' },
      { en: 'Bandits stole all the money from the travelers.', ru: 'Бандиты украли все деньги у путешественников.' },
      { en: 'They hid in the mountains like bandits.', ru: 'Они прятались в горах, как разбойники.' }
    ]
),

createRichWord('b2_beet', 'Beet', '/biːt/', 'бит', 'Свекла', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Овощ с темно-красным корнем (часто называется beetroot в UK).',
    '- Еда: "Red beet" (Красная свекла)\n- Сахар: "Sugar beet" (Сахарная свекла)\n- Блюдо: "Roasted beets" (Запеченная свекла)',
    [
      { en: 'Sugar beet is grown to produce sugar.', ru: 'Сахарную свеклу выращивают для производства сахара.' },
      { en: 'Beet juice is becoming popular for its health benefits.', ru: 'Свекольный сок становится популярным благодаря своей пользе для здоровья.' },
      { en: 'She made a salad with roasted beets and goat cheese.', ru: 'Она сделала салат из запеченной свеклы и козьего сыра.' },
      { en: 'Your hands might turn red when you cut a beet.', ru: 'Ваши руки могут покраснеть, когда вы режете свеклу.' }
    ]
),

createRichWord('b2_beige', 'Beige', '/beɪʒ/', 'бэйж', 'Бежевый', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Бледно-коричневый цвет; иногда используется для описания чего-то скучного.',
    '- Цвет: "Beige coat" (Бежевое пальто)\n- Интерьер: "Beige walls" (Бежевые стены)\n- Оттенок: "Light beige" (Светло-бежевый)',
    [
      { en: 'They painted the walls a neutral beige color.', ru: 'Они покрасили стены в нейтральный бежевый цвет.' },
      { en: 'She wore a simple beige dress to the office.', ru: 'Она надела простое бежевое платье в офис.' },
      { en: 'The sofa comes in grey, black, or beige.', ru: 'Диван доступен в сером, черном или бежевом цвете.' },
      { en: 'I find beige a bit boring for a living room.', ru: 'Я нахожу бежевый цвет немного скучным для гостиной.' }
    ]
),

createRichWord('b2_blizzard', 'Blizzard', '/ˈblɪzəd/', 'близэд', 'Метель / Буран', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Очень сильная снежная буря с мощными ветрами.',
    '- Погода: "Heavy blizzard" (Сильная метель)\n- Условия: "Blizzard conditions" (Условия бурана)\n- Переносно: "Blizzard of emails" (Шквал писем)',
    [
      { en: 'We were trapped in the house by a severe blizzard.', ru: 'Мы оказались заперты в доме из-за суровой метели.' },
      { en: 'The blizzard made driving completely impossible.', ru: 'Буран сделал вождение совершенно невозможным.' },
      { en: 'School was cancelled due to the blizzard warning.', ru: 'Школу отменили из-за предупреждения о метели.' },
      { en: 'A blizzard of paperwork arrived on my desk.', ru: 'Шквал бумажной работы свалился мне на стол.' }
    ]
),

createRichWord('b2_blockbuster', 'Blockbuster', '/ˈblɒkbʌstə/', 'блокбастэ', 'Блокбастер / Хит', ProficiencyLevel.B2, 'noun', 'Medium', 'Informal',
    'Фильм или книга, которые имеют огромный коммерческий успех.',
    '- Кино: "Summer blockbuster" (Летний блокбастер)\n- Успех: "Hollywood blockbuster" (Голливудский блокбастер)\n- Тип: "Action blockbuster" (Боевик-блокбастер)',
    [
      { en: 'The new superhero movie is expected to be a blockbuster.', ru: 'Ожидается, что новый фильм о супергероях станет блокбастером.' },
      { en: 'They released a blockbuster game that sold millions.', ru: 'Они выпустили игру-хит, которая разошлась миллионными тиражами.' },
      { en: 'Every summer, cinemas show huge blockbusters.', ru: 'Каждое лето кинотеатры показывают огромные блокбастеры.' },
      { en: 'The novel became a global blockbuster overnight.', ru: 'Роман стал мировым бестселлером за одну ночь.' }
    ]
  ),
createRichWord('b2_bumpy', 'Bumpy', '/ˈbʌmpi/', 'бáмпи', 'Ухабистый / Неровный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Негладкий; имеющий много неровностей или ухабов на поверхности; или (о путешествии) с тряской.',
    '- Дорога: "Bumpy road" (Ухабистая дорога)\n- Полет: "Bumpy flight" (Полет с турбулентностью)\n- Поверхность: "Bumpy ride" (Тряская поездка)',
    [
      { en: 'The car drove slowly over the bumpy road.', ru: 'Машина медленно ехала по ухабистой дороге.' },
      { en: 'It was a bumpy flight due to the bad weather.', ru: 'Это был полет с тряской из-за плохой погоды.' },
      { en: 'She fell and hit her head on the bumpy ground.', ru: 'Она упала и ударилась головой о неровную землю.' },
      { en: 'We had a bumpy ride across the field in the truck.', ru: 'У нас была тряская поездка через поле на грузовике.' }
    ]
  ),
createRichWord('b2_billionaire', 'Billionaire', '/ˌbɪljəˈneə/', 'бильенээ', 'Миллиардер', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Человек, обладающий состоянием более одного миллиарда долларов или фунтов.',
    '- Деньги: "Tech billionaire" (Технологический миллиардер)\n- Статус: "Become a billionaire" (Стать миллиардером)\n- Список: "List of billionaires" (Список миллиардеров)',
    [
      { en: 'The billionaire donated a lot of money to charity.', ru: 'Миллиардер пожертвовал много денег на благотворительность.' },
      { en: 'He became a billionaire before he was thirty.', ru: 'Он стал миллиардером еще до тридцати лет.' },
      { en: 'Most billionaires own several large companies.', ru: 'Большинство миллиардеров владеют несколькими крупными компаниями.' },
      { en: 'It is hard to imagine the life of a billionaire.', ru: 'Трудно представить себе жизнь миллиардера.' }
    ]
),

createRichWord('b2_brainstorm', 'Brainstorm', '/ˈbreɪnstɔːm/', 'брэйнстом', 'Мозговой штурм', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Групповой процесс генерации новых идей и решений.',
    '- Работа: "Brainstorm ideas" (Генерировать идеи)\n- Встреча: "Brainstorming session" (Сессия мозгового штурма)\n- Решение: "Brainstorm a solution" (Придумать решение)',
    [
      { en: 'Let\'s brainstorm some ideas for the new project.', ru: 'Давайте накидаем (поштурмим) идей для нового проекта.' },
      { en: 'We spent the afternoon brainstorming titles for the book.', ru: 'Мы провели день, придумывая названия для книги.' },
      { en: 'Brainstorming helps us find creative solutions.', ru: 'Мозговой штурм помогает нам находить креативные решения.' },
      { en: 'The team gathered to brainstorm marketing strategies.', ru: 'Команда собралась для обсуждения маркетинговых стратегий.' }
    ]
  ),
createRichWord('b2_concern', 'Concern', '/kənˈsɜːn/', 'кэнсён', 'Беспокойство / Касаться', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Чувство тревоги; дело, имеющее отношение к кому-либо.',
    '- Тревога: "Cause concern" (Вызывать беспокойство)\n- Отношение: "To whom it may concern" (Тому, кого это касается)\n- Интерес: "Main concern" (Главная забота)',
    [
        { en: 'There is growing concern about climate change.', ru: 'Растет беспокойство по поводу изменения климата.' },
        { en: 'This matter does not concern you at all.', ru: 'Это дело вас совершенно не касается.' },
        { en: 'My main concern is the safety of the children.', ru: 'Моя главная забота — безопасность детей.' },
        { en: 'I appreciate your concern, but I am fine.', ru: 'Я ценю ваше беспокойство, но со мной все в порядке.' }
    ],
    [
        { meaning: "A business company", translation: "Концерн / Фирма", example: { en: "A major manufacturing concern.", ru: "Крупный производственный концерн." } },
        { meaning: "To involve (verb)", translation: "Затрагивать / Вовлекать", example: { en: "The story concerns two friends.", ru: "История повествует о двух друзьях." } }
    ]
  ),
createRichWord('b2_buck', 'Buck', '/bʌk/', 'бак', 'Бакс (доллар)', ProficiencyLevel.B2, 'noun', 'High', 'Informal',
    'Разговорное название доллара (США, Австралия и др.). Также самец оленя или зайца.',
    '- Деньги: "Ten bucks" (Десять баксов)\n- Животное: "Big buck" (Большой самец оленя)\n- Фраза: "Make a fast buck" (Быстро срубить денег)',
    [
      { en: 'Can you lend me twenty bucks?', ru: 'Можешь одолжить мне двадцать баксов?' },
      { en: 'It costs a hundred bucks a night.', ru: 'Это стоит сотню баксов за ночь.' },
      { en: 'We saw a large buck in the forest.', ru: 'Мы видели большого оленя (самца) в лесу.' },
      { en: 'I need to make a few extra bucks.', ru: 'Мне нужно заработать немного лишних денег.' }
    ],
    [
        { meaning: "Male animal (Deer/Rabbit)", translation: "Самец (оленя/зайца)", example: { en: "The buck has large antlers.", ru: "У самца большие рога." } },
        { meaning: "Resist/Oppose (verb)", translation: "Противиться", example: { en: "Buck the trend.", ru: "Идти против тренда." } }
    ]
),

createRichWord('b2_bump', 'Bump', '/bʌmp/', 'бамп', 'Удар / Шишка', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Легкий удар, звук удара или выпуклость на поверхности/теле после удара.',
    '- Дорога: "Speed bump" (Лежачий полицейский)\n- Тело: "Goose bumps" (Мурашки)\n- Действие: "Bump into someone" (Столкнуться с кем-то)',
    [
      { en: 'He has a nasty bump on his head.', ru: 'У него на голове неприятная шишка.' },
      { en: 'I heard a loud bump upstairs.', ru: 'Я услышал громкий удар наверху.' },
      { en: 'The car hit a bump in the road.', ru: 'Машина наехала на кочку на дороге.' },
      { en: 'I bumped into an old friend yesterday.', ru: 'Я случайно встретил (наткнулся на) старого друга вчера.' }
    ],
    [
        { meaning: "Hit (verb)", translation: "Удариться", example: { en: "I bumped my knee.", ru: "Я ударился коленом." } }
    ]
),

createRichWord('b2_burst', 'Burst', '/bɜːst/', 'бё:ст', 'Лопаться / Взрываться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Внезапно разрываться или ломаться под давлением. Также внезапно начинать что-то делать.',
    '- Предмет: "Balloon burst" (Шарик лопнул)\n- Эмоции: "Burst into tears" (Разрыдаться)\n- Трубы: "Pipe burst" (Трубу прорвало)',
    [
      { en: 'The balloon burst with a loud bang.', ru: 'Шарик лопнул с громким хлопком.' },
      { en: 'She burst into laughter.', ru: 'Она разразилась смехом.' },
      { en: 'If you eat more, you will burst.', ru: 'Если ты съешь еще, ты лопнешь.' },
      { en: 'The dam burst under the pressure of water.', ru: 'Плотина прорвалась под давлением воды.' }
    ],
    [
        { meaning: "Explosion/Sudden outbreak (noun)", translation: "Взрыв / Всплеск", example: { en: "A burst of energy.", ru: "Прилив (всплеск) энергии." } }
    ]
),

createRichWord('b2_calculate', 'Calculate', '/ˈkæl.kjə.leɪt/', 'кэлькулейт', 'Вычислять', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Использовать математику для поиска числа или ответа. Оценивать последствия.',
    '- Математика: "Calculate the cost" (Рассчитать стоимость)\n- Риск: "Calculated risk" (Осознанный риск)\n- Наука: "Calculate distance" (Вычислить расстояние)',
    [
      { en: 'We need to calculate the total price.', ru: 'Нам нужно рассчитать общую цену.' },
      { en: 'Scientists calculated the distance to the moon.', ru: 'Ученые вычислили расстояние до Луны.' },
      { en: 'I calculated that we have enough time.', ru: 'Я подсчитал, что у нас достаточно времени.' },
      { en: 'It is difficult to calculate the damage.', ru: 'Трудно оценить ущерб.' }
    ],
    []
),

createRichWord('b1_canoe', 'Canoe', '/kəˈnuː/', 'кану', 'Каноэ', ProficiencyLevel.B1, 'noun', 'Low', 'Neutral',
    'Легкая узкая лодка, приводимая в движение веслом.',
    '- Спорт: "Go canoeing" (Кататься на каноэ)\n- Путешествие: "Paddle a canoe" (Грести на каноэ)\n- Материал: "Wooden canoe" (Деревянное каноэ)',
    [
      { en: 'We crossed the lake in a canoe.', ru: 'Мы пересекли озеро на каноэ.' },
      { en: 'He learned how to paddle a canoe.', ru: 'Он научился грести на каноэ.' },
      { en: 'Canoeing is a popular summer activity.', ru: 'Катание на каноэ — популярное летнее занятие.' },
      { en: 'The canoe tipped over in the river.', ru: 'Каноэ перевернулось в реке.' }
    ],
    []
),

createRichWord('b2_capable', 'Capable', '/ˈkeɪ.pə.bəl/', 'кейпэбл', 'Способный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Имеющий возможность или навык сделать что-то.',
    '- Навык: "Capable of doing" (Способный сделать)\n- Работа: "Capable hands" (Надежные руки)\n- Характеристика: "Very capable" (Очень способный/одаренный)',
    [
      { en: 'She is capable of running the whole company.', ru: 'Она способна управлять всей компанией.' },
      { en: 'Are you capable of keeping a secret?', ru: 'Ты способен хранить секрет?' },
      { en: 'He is a very capable mechanic.', ru: 'Он очень толковый механик.' },
      { en: 'The car is capable of high speeds.', ru: 'Машина способна развивать высокие скорости.' }
    ],
    []
),

createRichWord('b2_cape', 'Cape', '/keɪp/', 'кейп', 'Мыс / Накидка', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Часть суши, выдающаяся в море (мыс), или одежда без рукавов (плащ/накидка).',
    '- География: "Cape Town" (Кейптаун / Город Мыса)\n- Одежда: "Superman\'s cape" (Плащ Супермена)\n- Мода: "Wear a cape" (Носить накидку)',
    [
      { en: 'The ship sailed around the Cape of Good Hope.', ru: 'Корабль обогнул Мыс Доброй Надежды.' },
      { en: 'Superman wears a red cape.', ru: 'Супермен носит красный плащ.' },
      { en: 'The house stands on a rocky cape.', ru: 'Дом стоит на скалистом мысе.' },
      { en: 'She wore a fur cape over her dress.', ru: 'Она носила меховую накидку поверх платья.' }
    ],
    []
),

createRichWord('b2_cast', 'Cast', '/kɑːst/', 'каст', 'Актерский состав / Гипс', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Все актеры в фильме/спектакле или твердая повязка на сломанной кости. Как глагол — бросать (тень, взгляд).',
    '- Кино: "All-star cast" (Звездный состав)\n- Медицина: "Plaster cast" (Гипс)\n- Действие: "Cast a spell" (Накладывать заклятие)',
    [
      { en: 'The movie has a cast of famous actors.', ru: 'В фильме снимается состав известных актеров.' },
      { en: 'He has his leg in a cast.', ru: 'Его нога в гипсе.' },
      { en: 'The tree cast a long shadow.', ru: 'Дерево отбрасывало длинную тень.' },
      { en: 'They are casting for a new play.', ru: 'Они проводят кастинг для новой пьесы.' }
    ],
    [
        { meaning: "Throw (verb - literary)", translation: "Бросать", example: { en: "Cast a net.", ru: "Забросить сеть." } },
        { meaning: "Mold/Shape (verb)", translation: "Отливать (из металла)", example: { en: "Cast in bronze.", ru: "Отлитый в бронзе." } }
    ]
),

createRichWord('b2_casual', 'Casual', '/ˈkæʒ.ju.əl/', 'кэжуал', 'Повседневный / Случайный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Неформальный (об одежде), расслабленный или нерегулярный.',
    '- Одежда: "Casual clothes" (Повседневная одежда)\n- Работа: "Casual labor" (Временная работа)\n- Отношение: "Casual glance" (Случайный взгляд)',
    [
      { en: 'I wear casual clothes at the weekend.', ru: 'Я ношу повседневную одежду в выходные.' },
      { en: 'It was just a casual remark.', ru: 'Это было просто случайное замечание.' },
      { en: 'They had a casual meeting in the park.', ru: 'У них была случайная встреча в парке.' },
      { en: 'The atmosphere in the office is very casual.', ru: 'Атмосфера в офисе очень непринужденная.' }
    ],
    []
),

createRichWord('b2_charm', 'Charm', '/tʃɑːm/', 'чарм', 'Очарование / Талисман', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Привлекательность личности или магия. Также маленький предмет на браслете.',
    '- Личность: "Full of charm" (Полный очарования)\n- Магия: "Good luck charm" (Талисман на удачу)\n- Действие: "Work like a charm" (Сработать идеально)',
    [
      { en: 'She has a lot of charm.', ru: 'В ней много очарования.' },
      { en: 'He charmed the audience with his stories.', ru: 'Он очаровал аудиторию своими историями.' },
      { en: 'This necklace brings good luck; it\'s a charm.', ru: 'Это ожерелье приносит удачу, это талисман.' },
      { en: 'The plan worked like a charm.', ru: 'План сработал как по маслу.' }
    ],
    [
        { meaning: "Attract/Please (verb)", translation: "Очаровывать", example: { en: "He can charm anyone.", ru: "Он может очаровать кого угодно." } }
    ]
),

createRichWord('b2_chief', 'Chief', '/tʃiːf/', 'чиф', 'Главный / Начальник', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Лидер группы или самый важный. Часто используется в названиях должностей.',
    '- Работа: "Chief Executive" (Генеральный директор)\n- Племя: "Indian chief" (Вождь индейцев)\n- Причина: "Chief reason" (Главная причина)',
    [
      { en: 'The chief of police arrived at the scene.', ru: 'Начальник полиции прибыл на место.' },
      { en: 'What is the chief reason for your visit?', ru: 'Какова главная причина вашего визита?' },
      { en: 'He is the editor-in-chief of the newspaper.', ru: 'Он главный редактор газеты.' },
      { en: 'Safety is our chief concern.', ru: 'Безопасность — наша главная забота.' }
    ],
    []
),

createRichWord('b2_circumstance', 'Circumstance', '/ˈsɜː.kəm.stɑːns/', 'сёкамстанс', 'Обстоятельство', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Факты или условия, связанные с событием. Обычно используется во множественном числе.',
    '- Условие: "Under no circumstances" (Ни при каких обстоятельствах)\n- Жизнь: "Difficult circumstances" (Трудные обстоятельства)\n- Случай: "By circumstance" (Волею случая)',
    [
      { en: 'I can not leave under these circumstances.', ru: 'Я не могу уехать при таких обстоятельствах.' },
      { en: 'Under no circumstances should you open this door.', ru: 'Ни при каких обстоятельствах не открывай эту дверь.' },
      { en: 'Economic circumstances forced them to close.', ru: 'Экономические обстоятельства вынудили их закрыться.' },
      { en: 'He was a victim of circumstance.', ru: 'Он был жертвой обстоятельств.' }
    ],
    []
),

createRichWord('b2_citizen', 'Citizen', '/ˈsɪt.ɪ.zən/', 'ситизен', 'Гражданин', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Законный член страны, имеющий права и обязанности.',
    '- Статус: "American citizen" (Американский гражданин)\n- Общество: "Senior citizen" (Пожилой гражданин / Пенсионер)\n- Долг: "Good citizen" (Добропорядочный гражданин)',
    [
      { en: 'He became a US citizen last year.', ru: 'Он стал гражданином США в прошлом году.' },
      { en: 'Citizens have the right to vote.', ru: 'Граждане имеют право голосовать.' },
      { en: 'Discounts are available for senior citizens.', ru: 'Скидки доступны для пожилых граждан.' },
      { en: 'It is the duty of every citizen to pay taxes.', ru: 'Это долг каждого гражданина платить налоги.' }
    ],
    []
  ),
createRichWord('b2_clip', 'Clip', '/klɪp/', 'клип', 'Скрепка / Клип', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Маленький зажим для удержания вещей или короткий отрывок видео. Как глагол — стричь или скреплять.',
    '- Офис: "Paper clip" (Скрепка)\n- Видео: "Video clip" (Видеоклип)\n- Действие: "Clip nails" (Стричь ногти)',
    [
      { en: 'Attach the photo with a paper clip.', ru: 'Прикрепи фото скрепкой.' },
      { en: 'I saw a funny clip on YouTube.', ru: 'Я видел смешной клип на YouTube.' },
      { en: 'He clipped the microphone to his tie.', ru: 'Он прицепил микрофон к галстуку.' },
      { en: 'She clipped the hedge in the garden.', ru: 'Она подстригла живую изгородь в саду.' }
    ],
    [
        { meaning: "Cut short (verb)", translation: "Подрезать / Стричь", example: { en: "Clip the wings.", ru: "Подрезать крылья." } }
    ]
),

createRichWord('b2_command', 'Command', '/kəˈmɑːnd/', 'кэманд', 'Команда / Приказ', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Приказ, контроль или знание предмета. Как глагол — приказывать.',
    '- Армия: "Under command" (Под командованием)\n- Знание: "Good command of English" (Хорошее владение английским)\n- IT: "Voice command" (Голосовая команда)',
    [
      { en: 'The general gave the command to fire.', ru: 'Генерал дал команду "огонь".' },
      { en: 'He has a good command of French.', ru: 'Он хорошо владеет французским.' },
      { en: 'The computer responds to voice commands.', ru: 'Компьютер реагирует на голосовые команды.' },
      { en: 'She commands respect from everyone.', ru: 'Она внушает (требует) уважение у всех.' }
    ],
    []
),

createRichWord('b2_commerce', 'Commerce', '/ˈkɒm.ɜːs/', 'комерс', 'Торговля', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Обмен товарами и услугами, особенно в крупных масштабах.',
    '- Интернет: "E-commerce" (Электронная торговля)\n- Организация: "Chamber of Commerce" (Торговая палата)\n- Сфера: "World of commerce" (Мир торговли)',
    [
      { en: 'The internet has changed the world of commerce.', ru: 'Интернет изменил мир торговли.' },
      { en: 'Commerce between the two countries has increased.', ru: 'Торговля между двумя странами выросла.' },
      { en: 'He works in international commerce.', ru: 'Он работает в сфере международной торговли.' },
      { en: 'Tourism is vital for local commerce.', ru: 'Туризм жизненно важен для местной торговли.' }
    ],
    []
),

createRichWord('b2_commit', 'Commit', '/kəˈmɪt/', 'кэмит', 'Совершать / Обязываться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Сделать что-то плохое (преступление) или дать твердое обещание/посвятить себя чему-то.',
    '- Преступление: "Commit a crime" (Совершить преступление)\n- Обязательство: "Commit to memory" (Запомнить)\n- Отношения: "Commit suicide" (Совершить самоубийство)',
    [
      { en: 'He committed a serious error.', ru: 'Он совершил серьезную ошибку.' },
      { en: 'The government committed money to the project.', ru: 'Правительство выделило (обязалось дать) деньги на проект.' },
      { en: 'I cannot commit to that date yet.', ru: 'Я пока не могу точно подтвердить эту дату.' },
      { en: 'She is fully committed to her job.', ru: 'Она полностью предана своей работе.' }
    ],
    []
),

createRichWord('b2_committee', 'Committee', '/kəˈmɪt.i/', 'кэмити', 'Комитет', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Группа людей, выбранная для выполнения определенной задачи или принятия решений.',
    '- Работа: "Steering committee" (Руководящий комитет)\n- Встреча: "Committee meeting" (Заседание комитета)\n- Членство: "Be on a committee" (Быть в комитете)',
    [
      { en: 'The committee decided to approve the plan.', ru: 'Комитет решил одобрить план.' },
      { en: 'We formed a committee to organize the party.', ru: 'Мы сформировали комитет для организации вечеринки.' },
      { en: 'He is the chairman of the committee.', ru: 'Он председатель комитета.' },
      { en: 'The committee meets every Tuesday.', ru: 'Комитет собирается каждый вторник.' }
    ],
    []
),

createRichWord('b2_complicate', 'Complicate', '/ˈkɒm.plɪ.keɪt/', 'компликейт', 'Усложнять', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Делать что-то трудным для понимания или выполнения.',
    '- Ситуация: "Complicate matters" (Усложнять дело)\n- Жизнь: "Don\'t complicate it" (Не усложняй)\n- Проблема: "Complicated issue" (Сложный вопрос)',
    [
      { en: 'Don\'t complicate things more than necessary.', ru: 'Не усложняй вещи больше, чем нужно.' },
      { en: 'New rules complicated the process.', ru: 'Новые правила усложнили процесс.' },
      { en: 'Her illness complicates the situation.', ru: 'Её болезнь осложняет ситуацию.' },
      { en: 'Why do you always have to complicate everything?', ru: 'Почему тебе всегда нужно всё усложнять?' }
    ],
    []
),

createRichWord('b2_conscious', 'Conscious', '/ˈkɒn.ʃəs/', 'коншэс', 'Сознательный / В сознании', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Понимающий, что происходит, или находящийся в сознании (не в обмороке).',
    '- Здоровье: "Lose conscious" (Потерять сознание - *обычно consciousness, но conscious - прил*)\n- Выбор: "Conscious decision" (Осознанное решение)\n- Ощущение: "Self-conscious" (Застенчивый)',
    [
      { en: 'Is the patient conscious?', ru: 'Пациент в сознании?' },
      { en: 'I made a conscious effort to be polite.', ru: 'Я сделал осознанное усилие, чтобы быть вежливым.' },
      { en: 'He was fully conscious of the danger.', ru: 'Он полностью осознавал опасность.' },
      { en: 'She is very self-conscious about her height.', ru: 'Она очень стесняется своего роста.' }
    ],
    []
),

createRichWord('b2_constant', 'Constant', '/ˈkɒn.stənt/', 'констэнт', 'Постоянный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Происходящий все время или не меняющийся.',
    '- Время: "Constant noise" (Постоянный шум)\n- Поддержка: "Constant support" (Постоянная поддержка)\n- Физика: "Constant speed" (Постоянная скорость)',
    [
      { en: 'The constant noise gave me a headache.', ru: 'Постоянный шум вызвал у меня головную боль.' },
      { en: 'He needs constant medical care.', ru: 'Ему нужен постоянный медицинский уход.' },
      { en: 'The temperature remained constant.', ru: 'Температура оставалась постоянной.' },
      { en: 'She is my constant companion.', ru: 'Она моя постоянная спутница.' }
    ],
    [
         { meaning: "Fixed number (Math/Physics)", translation: "Константа", example: { en: "Planck constant.", ru: "Постоянная Планка." } }
    ]
),

createRichWord('b2_contribute', 'Contribute', '/kənˈtrɪb.juːt/', 'кэнтрибьют', 'Вносить вклад', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Давать что-то (деньги, время) для общей цели или быть причиной чего-то.',
    '- Деньги: "Contribute money" (Жертвовать деньги)\n- Дискуссия: "Contribute to discussion" (Участвовать в дискуссии)\n- Причина: "Contribute to success" (Способствовать успеху)',
    [
      { en: 'Everyone contributed to the discussion.', ru: 'Каждый внес вклад в дискуссию.' },
      { en: 'Smoking contributed to his death.', ru: 'Курение способствовало его смерти.' },
      { en: 'We contributed $50 to the fund.', ru: 'Мы пожертвовали 50 долларов в фонд.' },
      { en: 'She wants to contribute to society.', ru: 'Она хочет приносить пользу обществу.' }
    ],
    []
),

createRichWord('b2_cope', 'Cope', '/kəʊp/', 'коуп', 'Справляться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Успешно действовать в трудной ситуации.',
    '- Стресс: "Cope with stress" (Справляться со стрессом)\n- Работа: "Cannot cope" (Не справляться)\n- Жизнь: "Coping mechanism" (Механизм адаптации)',
    [
      { en: 'I cannot cope with all this work.', ru: 'Я не могу справиться со всей этой работой.' },
      { en: 'She copes well under pressure.', ru: 'Она хорошо справляется под давлением.' },
      { en: 'How do you cope with difficult customers?', ru: 'Как ты справляешься со сложными клиентами?' },
      { en: 'He struggled to cope after his wife died.', ru: 'Ему было трудно справиться (жить дальше) после смерти жены.' }
    ],
    []
),

createRichWord('b2_council', 'Council', '/ˈkaʊn.səl/', 'каунсл', 'Совет (орган власти)', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Группа людей, избранная для управления городом или организацией.',
    '- Город: "City council" (Городской совет)\n- ООН: "Security Council" (Совет Безопасности)\n- Жилье: "Council flat" (Муниципальная квартира - брит.)',
    [
      { en: 'The local council looks after the parks.', ru: 'Местный совет следит за парками.' },
      { en: 'He was elected to the town council.', ru: 'Его избрали в городской совет.' },
      { en: 'Council tax has gone up again.', ru: 'Муниципальный налог снова вырос.' },
      { en: 'The council held an emergency meeting.', ru: 'Совет провел экстренное заседание.' }
    ],
    []
),

createRichWord('b2_counter', 'Counter', '/ˈkaʊn.tər/', 'каунтэ', 'Прилавок / Противостоять', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Длинный стол в магазине/кафе или фишка в игре. Как глагол — противодействовать.',
    '- Магазин: "Check-out counter" (Касса)\n- Кухня: "Kitchen counter" (Кухонная столешница)\n- Аргумент: "Counter-argument" (Контраргумент)',
    [
      { en: 'Pay for your items at the counter.', ru: 'Оплатите ваши товары на кассе (у прилавка).' },
      { en: 'She wiped the kitchen counter.', ru: 'Она протерла кухонную столешницу.' },
      { en: 'We need to counter their propaganda.', ru: 'Нам нужно противостоять их пропаганде (глагол).' },
      { en: 'He works behind the counter.', ru: 'Он работает за прилавком.' }
    ],
    [
        { meaning: "Oppose (verb)", translation: "Противостоять / Парировать", example: { en: "He countered with a punch.", ru: "Он ответил ударом (контратаковал)." } }
    ]
),

createRichWord('b2_county', 'County', '/ˈkaʊn.ti/', 'каунти', 'Графство / Округ', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Административная единица (регион) в Великобритании или США.',
    '- США: "Orange County" (Округ Ориндж)\n- Англия: "Home counties" (Графства вокруг Лондона)\n- Власть: "County court" (Окружной суд)',
    [
      { en: 'He lives in a small town in the county.', ru: 'Он живет в маленьком городке в округе.' },
      { en: 'The county sheriff arrested him.', ru: 'Шериф округа арестовал его.' },
      { en: 'Yorkshire is a large county.', ru: 'Йоркшир — большое графство.' },
      { en: 'County elections are next week.', ru: 'Выборы в округе на следующей неделе.' }
    ],
    []
),

createRichWord('b2_crack', 'Crack', '/kræk/', 'крэк', 'Трещина / Трескаться', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Линия разлома на поверхности или резкий звук. Как глагол — ломать/трескаться.',
    '- Поверхность: "Crack in the wall" (Трещина в стене)\n- Звук: "Crack of whip" (Щелчок кнута)\n- Идиома: "Crack a joke" (Отпустить шутку)',
    [
      { en: 'There is a crack in the glass.', ru: 'В стекле есть трещина.' },
      { en: 'He cracked the egg into the pan.', ru: 'Он разбил яйцо в сковородку.' },
      { en: 'I can crack my knuckles.', ru: 'Я умею хрустеть костяшками пальцев.' },
      { en: 'Police are trying to crack the code.', ru: 'Полиция пытается взломать код.' }
    ],
    [
        { meaning: "Drug", translation: "Крэк (наркотик)", example: { en: "Crack cocaine.", ru: "Крэк-кокаин." } },
        { meaning: "Expert/Elite (adj)", translation: "Элитный / Первоклассный", example: { en: "A crack team.", ru: "Элитная команда." } }
    ]
),

createRichWord('b2_crawl', 'Crawl', '/krɔːl/', 'кро:л', 'Ползти', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Двигаться на руках и коленях (как ребенок) или очень медленно (о транспорте).',
    '- Движение: "Baby crawls" (Малыш ползает)\n- Скорость: "Traffic crawl" (Пробка / Медленное движение)\n- Кожа: "Skin crawl" (Мурашки по коже от страха)',
    [
      { en: 'The baby started to crawl yesterday.', ru: 'Малыш начал ползать вчера.' },
      { en: 'The soldier crawled under the fence.', ru: 'Солдат прополз под забором.' },
      { en: 'Traffic was crawling at 5 mph.', ru: 'Движение ползло со скоростью 5 миль в час.' },
      { en: 'There was a spider crawling on my leg.', ru: 'По моей ноге полз паук.' }
    ],
    []
),

createRichWord('b2_creep', 'Creep', '/kriːp/', 'крип', 'Крассться / Ползти', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Двигаться тихо и медленно, чтобы не быть замеченным.',
    '- Движение: "Creep into the room" (Прокрасться в комнату)\n- Чувство: "Give the creeps" (Пугать / Вызывать мурашки)\n- Растение: "Creeping plant" (Вьющееся растение)',
    [
      { en: 'He crept out of the bedroom quietly.', ru: 'Он тихо выкрался из спальни.' },
      { en: 'Don\'t creep up on me like that!', ru: 'Не подкрадывайся ко мне так!' },
      { en: 'A feeling of fear crept over him.', ru: 'Чувство страха овладело им (подкралось к нему).' },
      { en: 'That guy gives me the creeps.', ru: 'От этого парня у меня мурашки по коже (сущ.).' }
    ],
    [
         { meaning: "Unpleasant person (noun)", translation: "Тип / Слизень (о человеке)", example: { en: "He is such a creep.", ru: "Он такой мерзкий тип." } }
    ]
),

createRichWord('b2_crisp', 'Crisp', '/krɪsp/', 'крисп', 'Хрустящий', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Твердый и легко ломающийся (о еде) или свежий и прохладный (о воздухе/бумаге).',
    '- Еда: "Crisp apple" (Хрустящее яблоко)\n- Погода: "Crisp air" (Свежий, морозный воздух)\n- Снег: "Crisp snow" (Хрустящий снег)',
    [
      { en: 'I like crisp bacon for breakfast.', ru: 'Я люблю хрустящий бекон на завтрак.' },
      { en: 'The morning air was crisp and clear.', ru: 'Утренний воздух был свежим и чистым.' },
      { en: 'She put on a crisp white shirt.', ru: 'Она надела свежую (накрахмаленную) белую рубашку.' },
      { en: 'Cook until the skin is crisp.', ru: 'Готовьте, пока кожица не станет хрустящей.' }
    ],
    [
        { meaning: "Potato chips (British noun)", translation: "Чипсы", example: { en: "Packet of crisps.", ru: "Пачка чипсов." } }
    ]
),

createRichWord('b2_current', 'Current', '/ˈkʌr.ənt/', 'карэнт', 'Текущий / Ток', ProficiencyLevel.B2, 'adj', 'High', 'Neutral',
    'Происходящий в настоящее время. Как сущ. — поток воды/воздуха или электричество.',
    '- Время: "Current situation" (Текущая ситуация)\n- Электричество: "Electric current" (Электрический ток)\n- Море: "Strong current" (Сильное течение)',
    [
      { en: 'What is your current address?', ru: 'Какой ваш текущий адрес?' },
      { en: 'Strong currents make swimming dangerous.', ru: 'Сильные течения делают купание опасным.' },
      { en: 'Switch off the electric current.', ru: 'Выключите электрический ток.' },
      { en: 'The current mood of the country is optimistic.', ru: 'Текущее настроение в стране оптимистичное.' }
    ],
    []
  ),
createRichWord('b2_chairman', 'Chairman', '/ˈtʃeə.mən/', 'чеэмэн', 'Председатель', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Человек, возглавляющий собрание, комитет или организацию.',
    '- Бизнес: "Chairman of the board" (Председатель совета директоров)\n- Роль: "Mr Chairman" (Господин председатель - обращение)\n- Действие: "Elect a chairman" (Избрать председателя)',
    [
      { en: 'The chairman opened the meeting at 9 AM.', ru: 'Председатель открыл собрание в 9 утра.' },
      { en: 'She was elected chairman of the committee.', ru: 'Она была избрана председателем комитета.' },
      { en: 'The chairman resigned after the scandal.', ru: 'Председатель ушел в отставку после скандала.' },
      { en: 'Address your questions to the chairman.', ru: 'Адресуйте свои вопросы председателю.' }
    ],
    []
),

createRichWord('b2_characteristic', 'Characteristic', '/ˌkær.ək.təˈrɪs.tɪk/', 'кэрэктэристик', 'Характерная черта / Характерный', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Типичное качество или особенность кого-то/чего-то. Как прил. — типичный.',
    '- Черта: "Main characteristic" (Главная характеристика)\n- Природа: "Physical characteristics" (Физические характеристики)\n- Поведение: "It is characteristic of him" (Это для него характерно)',
    [
      { en: 'One characteristic of tigers is their stripes.', ru: 'Одна из характерных черт тигров — их полоски.' },
      { en: 'Laziness is not a characteristic of hers.', ru: 'Лень — не её черта.' },
      { en: 'The creamy taste is characteristic of this cheese.', ru: 'Сливочный вкус характерен для этого сыра.' },
      { en: 'Violent storms are characteristic of this region.', ru: 'Сильные штормы характерны для этого региона.' }
    ],
    []
),

createRichWord('b2_charity', 'Charity', '/ˈtʃær.ə.ti/', 'чэрити', 'Благотворительность', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Организация помощи нуждающимся или сама помощь (деньги, еда).',
    '- Помощь: "Give to charity" (Жертвовать на благотворительность)\n- Событие: "Charity event" (Благотворительное мероприятие)\n- Организация: "Local charity" (Местная благотворительная организация)',
    [
      { en: 'She gives a lot of money to charity.', ru: 'Она жертвует много денег на благотворительность.' },
      { en: 'The concert was held to raise funds for charity.', ru: 'Концерт проводился для сбора средств на благотворительность.' },
      { en: 'They run a charity for homeless dogs.', ru: 'Они управляют благотворительным фондом для бездомных собак.' },
      { en: 'Charity begins at home.', ru: 'Благотворительность начинается с дома (своя рубашка ближе к телу).' }
    ],
    []
),

createRichWord('b2_circuit', 'Circuit', '/ˈsɜː.kɪt/', 'сёкит', 'Цепь / Контур / Круг', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Замкнутый путь для электричества или маршрут движения по кругу.',
    '- Электрика: "Electrical circuit" (Электрическая цепь)\n- Спорт: "Racing circuit" (Гоночная трасса)\n- Фитнес: "Circuit training" (Круговая тренировка)',
    [
      { en: 'A short circuit caused the fire.', ru: 'Короткое замыкание вызвало пожар.' },
      { en: 'The earth takes a year to complete a circuit of the sun.', ru: 'Земле требуется год, чтобы совершить полный оборот вокруг Солнца.' },
      { en: 'We ran three times around the circuit.', ru: 'Мы пробежали три раза по кругу (по трассе).' },
      { en: 'He designs electronic circuits.', ru: 'Он проектирует электронные схемы.' }
    ],
    []
),

createRichWord('b2_civil', 'Civil', '/ˈsɪv.əl/', 'сивл', 'Гражданский', ProficiencyLevel.B2, 'adj', 'Medium', 'Formal',
    'Относящийся к гражданам (не военный) или вежливый.',
    '- Общество: "Civil war" (Гражданская война)\n- Право: "Civil rights" (Гражданские права)\n- Поведение: "Be civil" (Быть вежливым)',
    [
      { en: 'Helicopters are used for both military and civil purposes.', ru: 'Вертолеты используются как для военных, так и для гражданских целей.' },
      { en: 'They got married in a civil ceremony.', ru: 'Они поженились на гражданской церемонии (в ЗАГСе).' },
      { en: 'Try to be civil to him, even if you dislike him.', ru: 'Постарайся быть вежливым с ним, даже если он тебе не нравится.' },
      { en: 'Civil servants work for the government.', ru: 'Госслужащие работают на правительство.' }
    ],
    []
),

createRichWord('b2_clause', 'Clause', '/klɔːz/', 'кло:з', 'Пункт / Придаточное предложение', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Часть юридического документа или грамматическая часть предложения.',
    '- Контракт: "Penalty clause" (Пункт о штрафах)\n- Грамматика: "Relative clause" (Относительное придаточное)\n- Условие: "Escape clause" (Пункт о расторжении)',
    [
      { en: 'There is a clause in the contract about overtime.', ru: 'В контракте есть пункт о сверхурочной работе.' },
      { en: 'Read the small print clauses carefully.', ru: 'Внимательно читайте пункты мелким шрифтом.' },
      { en: 'In the sentence "I eat when I am hungry", "when I am hungry" is a clause.', ru: 'В предложении "Я ем, когда голоден", "когда голоден" — это придаточное предложение.' },
      { en: 'They added a new clause to the agreement.', ru: 'Они добавили новый пункт в соглашение.' }
    ],
    []
),

createRichWord('b2_collapse', 'Collapse', '/kəˈlæps/', 'кэлэпс', 'Рухнуть', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Внезапно упасть или разрушиться. О человеке — упасть без сознания.',
    '- Здание: "Roof collapsed" (Крыша рухнула)\n- Экономика: "Economy collapsed" (Экономика рухнула)\n- Человек: "Collapse from exhaustion" (Свалиться от истощения)',
    [
      { en: 'The old building collapsed during the earthquake.', ru: 'Старое здание рухнуло во время землетрясения.' },
      { en: 'He collapsed on the floor with a heart attack.', ru: 'Он рухнул на пол с сердечным приступом.' },
      { en: 'The talks collapsed yesterday.', ru: 'Переговоры провалились вчера.' },
      { en: 'Share prices collapsed.', ru: 'Цены на акции обвалились.' }
    ],
    [
        { meaning: "Failure (noun)", translation: "Крах / Обвал", example: { en: "The collapse of the empire.", ru: "Крах империи." } }
    ]
),

createRichWord('b2_colony', 'Colony', '/ˈkɒl.ə.ni/', 'колэни', 'Колония', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Страна, управляемая другой страной, или группа животных/птиц.',
    '- История: "British colony" (Британская колония)\n- Биология: "Ant colony" (Муравьиная колония)\n- Люди: "Artist colony" (Колония художников)',
    [
      { en: 'Australia used to be a British colony.', ru: 'Австралия раньше была британской колонией.' },
      { en: 'We found a colony of bats in the cave.', ru: 'Мы нашли колонию летучих мышей в пещере.' },
      { en: 'The settlers established a new colony.', ru: 'Поселенцы основали новую колонию.' },
      { en: 'Algeria was a French colony.', ru: 'Алжир был французской колонией.' }
    ],
    []
),

createRichWord('b2_commission', 'Commission', '/kəˈmɪʃ.ən/', 'кэмишн', 'Комиссия / Заказ', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Группа людей для расследования, плата за продажу или заказ на работу (искусство).',
    '- Деньги: "10% commission" (10% комиссионных)\n- Власть: "European Commission" (Европейская комиссия)\n- Искусство: "Get a commission" (Получить заказ)',
    [
      { en: 'The agent gets a commission on every sale.', ru: 'Агент получает комиссию с каждой продажи.' },
      { en: 'A commission was set up to investigate the crime.', ru: 'Была создана комиссия для расследования преступления.' },
      { en: 'The artist received a commission to paint the king.', ru: 'Художник получил заказ написать портрет короля.' },
      { en: 'The machine is out of commission.', ru: 'Машина не работает (выведена из строя).' }
    ],
    [
        { meaning: "Order/Authorize (verb)", translation: "Заказывать / Уполномочивать", example: { en: "Commission a statue.", ru: "Заказать статую." } }
    ]
),

createRichWord('b2_communist', 'Communist', '/ˈkɒm.jə.nɪst/', 'комьюнист', 'Коммунист', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Сторонник коммунизма или член коммунистической партии.',
    '- Политика: "Communist party" (Коммунистическая партия)\n- Страна: "Communist state" (Коммунистическое государство)\n- Идея: "Communist manifesto" (Коммунистический манифест)',
    [
      { en: 'He was a member of the Communist Party.', ru: 'Он был членом Коммунистической партии.' },
      { en: 'The country was under communist rule.', ru: 'Страна находилась под коммунистическим правлением.' },
      { en: 'My grandfather was a committed communist.', ru: 'Мой дед был убежденным коммунистом.' },
      { en: 'Communist ideology spread across the region.', ru: 'Коммунистическая идеология распространилась по региону.' }
    ],
    []
),

createRichWord('b2_complex', 'Complex', '/ˈkɒm.pleks/', 'комплекс', 'Сложный / Комплекс', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Состоящий из множества частей; трудный для понимания. Как сущ. — группа зданий или психологический комплекс.',
    '- Задача: "Complex problem" (Сложная проблема)\n- Здание: "Sports complex" (Спортивный комплекс)\n- Психология: "Inferiority complex" (Комплекс неполноценности)',
    [
      { en: 'The human brain is very complex.', ru: 'Человеческий мозг очень сложен.' },
      { en: 'It was a complex situation to explain.', ru: 'Было сложно объяснить эту ситуацию.' },
      { en: 'They live in a large apartment complex.', ru: 'Они живут в большом жилом комплексе.' },
      { en: 'Instructions were too complex for me.', ru: 'Инструкции были слишком сложными для меня.' }
    ],
    []
),

createRichWord('b2_component', 'Component', '/kəmˈpəʊ.nənt/', 'кэмпоунэнт', 'Компонент', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Часть целого (механизма, системы).',
    '- Авто: "Car components" (Автомобильные компоненты)\n- Система: "Key component" (Ключевой компонент)\n- Электроника: "Electronic components" (Электронные компоненты)',
    [
      { en: 'Fresh fruit is an essential component of a healthy diet.', ru: 'Свежие фрукты — важный компонент здоровой диеты.' },
      { en: 'They manufacture aircraft components.', ru: 'Они производят компоненты для самолетов.' },
      { en: 'Trust is a vital component of friendship.', ru: 'Доверие — жизненно важный компонент дружбы.' },
      { en: 'We need to replace a faulty component.', ru: 'Нам нужно заменить неисправный компонент.' }
    ],
    []
),

createRichWord('b2_compose', 'Compose', '/kəmˈpəʊz/', 'кэмпоуз', 'Составлять / Сочинять', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Писать музыку/стихи или составлять целое из частей. Также успокаивать себя.',
    '- Музыка: "Compose a song" (Сочинить песню)\n- Части: "Composed of" (Состоящий из)\n- Чувства: "Compose yourself" (Успокоиться / Взять себя в руки)',
    [
      { en: 'Mozart composed his first music at age five.', ru: 'Моцарт сочинил свою первую музыку в пять лет.' },
      { en: 'Water is composed of hydrogen and oxygen.', ru: 'Вода состоит из водорода и кислорода.' },
      { en: 'She took a minute to compose herself before speaking.', ru: 'Она взяла минуту, чтобы успокоиться перед тем, как говорить.' },
      { en: 'I need to compose an email to the boss.', ru: 'Мне нужно составить (написать) письмо боссу.' }
    ],
    []
),

createRichWord('b2_compound', 'Compound', '/ˈkɒm.paʊnd/', 'компаунд', 'Соединение / Смесь', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Вещество из двух и более элементов. Как глагол — усугублять.',
    '- Химия: "Chemical compound" (Химическое соединение)\n- Грамматика: "Compound noun" (Сложное существительное)\n- Территория: "Prison compound" (Тюремная территория)',
    [
      { en: 'Salt is a compound of sodium and chlorine.', ru: 'Соль — это соединение натрия и хлора.' },
      { en: 'They live in a secure compound.', ru: 'Они живут на охраняемой территории.' },
      { en: 'His financial problems were compounded by illness.', ru: 'Его финансовые проблемы усугубились болезнью (глагол).' },
      { en: '"Toothbrush" is a compound word.', ru: '"Toothbrush" — это сложное слово.' }
    ],
    []
),

createRichWord('b2_compromise', 'Compromise', '/ˈkɒm.prə.maɪz/', 'компромайз', 'Компромисс', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Соглашение, достигнутое взаимными уступками. Как глагол — идти на компромисс или ставить под угрозу.',
    '- Соглашение: "Reach a compromise" (Достичь компромисса)\n- Качество: "No compromise" (Без компромиссов)\n- Безопасность: "Compromise safety" (Ставить безопасность под угрозу)',
    [
      { en: 'We need to find a compromise.', ru: 'Нам нужно найти компромисс.' },
      { en: 'He refused to compromise on his principles.', ru: 'Он отказался поступиться своими принципами.' },
      { en: 'The scandal compromised his reputation.', ru: 'Скандал скомпрометировал его репутацию.' },
      { en: 'After long talks, they reached a compromise.', ru: 'После долгих переговоров они достигли компромисса.' }
    ],
    []
),

createRichWord('b2_concept', 'Concept', '/ˈkɒn.sept/', 'консепт', 'Концепция / Понятие', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Абстрактная идея или общий принцип.',
    '- Идея: "Basic concept" (Базовое понятие)\n- Маркетинг: "New concept" (Новая концепция)\n- Понимание: "Grasp the concept" (Уловить суть)',
    [
      { en: 'The concept of freedom is hard to define.', ru: 'Понятие свободы трудно определить.' },
      { en: 'She introduced a new concept in design.', ru: 'Она представила новую концепцию в дизайне.' },
      { en: 'I struggle with abstract concepts.', ru: 'Мне трудно даются абстрактные понятия.' },
      { en: 'It is a simple concept, really.', ru: 'На самом деле, это простая идея.' }
    ],
    []
),

createRichWord('b2_conclude', 'Conclude', '/kənˈkluːd/', 'кэнклуд', 'Завершать / Делать вывод', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Заканчивать что-то (речь, встречу) или приходить к решению.',
    '- Конец: "Conclude a meeting" (Завершить встречу)\n- Договор: "Conclude a deal" (Заключить сделку)\n- Мысль: "I conclude that..." (Я делаю вывод, что...)',
    [
      { en: 'The meeting concluded at noon.', ru: 'Встреча завершилась в полдень.' },
      { en: 'What do you conclude from this evidence?', ru: 'Какой вывод вы делаете из этих улик?' },
      { en: 'They concluded a peace treaty.', ru: 'Они заключили мирный договор.' },
      { en: 'He concluded his speech with a joke.', ru: 'Он закончил свою речь шуткой.' }
    ],
    []
),

createRichWord('b2_concrete', 'Concrete', '/ˈkɒŋ.kriːt/', 'конкрит', 'Бетон / Конкретный', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Строительный материал. Как прилагательное — реальный, точный (не абстрактный).',
    '- Стройка: "Concrete wall" (Бетонная стена)\n- Доказательство: "Concrete evidence" (Конкретные улики)\n- Планы: "Concrete plans" (Четкие планы)',
    [
      { en: 'The floor is made of concrete.', ru: 'Пол сделан из бетона.' },
      { en: 'We need concrete examples, not just theories.', ru: 'Нам нужны конкретные примеры, а не просто теории.' },
      { en: 'Have you made any concrete plans?', ru: 'Ты построил какие-нибудь конкретные планы?' },
      { en: 'A concrete jungle.', ru: 'Бетонные джунгли (о городе).' }
    ],
    []
),

createRichWord('b2_conduct', 'Conduct', '/kənˈdʌkt/', 'кэндакт', 'Проводить / Вести', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Организовывать и выполнять (исследование, встречу), дирижировать или вести себя. (Сущ. /ˈkɒn.dʌkt/ - поведение).',
    '- Наука: "Conduct a survey" (Проводить опрос)\n- Музыка: "Conduct an orchestra" (Дирижировать оркестром)\n- Физика: "Conduct electricity" (Проводить электричество)',
    [
      { en: 'They conducted an experiment in the lab.', ru: 'Они провели эксперимент в лаборатории.' },
      { en: 'Copper conducts electricity well.', ru: 'Медь хорошо проводит электричество.' },
      { en: 'He conducted himself with dignity.', ru: 'Он вел себя с достоинством.' },
      { en: 'Who will conduct the meeting?', ru: 'Кто будет вести собрание?' }
    ],
    [
        { meaning: "Behavior (noun /ˈkɒn.dʌkt/)", translation: "Поведение", example: { en: "Code of conduct.", ru: "Кодекс поведения." } }
    ]
),

createRichWord('b2_confess', 'Confess', '/kənˈfes/', 'кэнфес', 'Признаваться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Признать вину или рассказать секрет (обычно стыдный).',
    '- Преступление: "Confess to murder" (Признаться в убийстве)\n- Религия: "Confess sins" (Исповедоваться в грехах)\n- Правда: "I must confess" (Должен признаться)',
    [
      { en: 'He confessed to stealing the money.', ru: 'Он признался в краже денег.' },
      { en: 'I must confess that I was scared.', ru: 'Должен признаться, я был напуган.' },
      { en: 'She confessed her love to him.', ru: 'Она призналась ему в любви.' },
      { en: 'The thief confessed to the police.', ru: 'Вор во всем признался полиции.' }
    ],
    []
),

createRichWord('b2_confidence', 'Confidence', '/ˈkɒn.fɪ.dəns/', 'конфидэнс', 'Уверенность / Доверие', ProficiencyLevel.B2, 'noun', 'High', 'Neutral',
    'Вера в свои силы или доверие к кому-то.',
    '- Себя: "Self-confidence" (Уверенность в себе)\n- Другие: "Have confidence in" (Доверять кому-то)\n- Секрет: "In strict confidence" (Строго конфиденциально)',
    [
      { en: 'She lacks confidence in herself.', ru: 'Ей не хватает уверенности в себе.' },
      { en: 'I have every confidence in your ability.', ru: 'Я полностью уверен в твоих способностях.' },
      { en: 'He told me the news in confidence.', ru: 'Он рассказал мне эту новость по секрету.' },
      { en: 'The victory boosted the team\'s confidence.', ru: 'Победа подняла уверенность команды.' }
    ],
    []
  ),
createRichWord('b2_conflict', 'Conflict', '/ˈkɒn.flɪkt/', 'конфликт', 'Конфликт', ProficiencyLevel.B2, 'noun', 'High', 'Neutral',
    'Серьезное разногласие, спор или военное столкновение. Как глагол (/kənˈflɪkt/) — противоречить.',
    '- Война: "Armed conflict" (Вооруженный конфликт)\n- Работа: "Conflict of interest" (Конфликт интересов)\n- Отношения: "Avoid conflict" (Избегать конфликта)',
    [
      { en: 'The two countries are in conflict over the border.', ru: 'Две страны находятся в конфликте из-за границы.' },
      { en: 'Try to resolve the conflict peacefully.', ru: 'Постарайтесь разрешить конфликт мирным путем.' },
      { en: 'There is a conflict between my job and my family.', ru: 'Между моей работой и семьей существует конфликт.' },
      { en: 'Her diary conflicts with his story.', ru: 'Её дневник противоречит его рассказу (глагол).' }
    ],
    []
),

createRichWord('b2_confront', 'Confront', '/kənˈfrʌnt/', 'кэнфрант', 'Противостоят / Сталкиваться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Встретиться лицом к лицу с проблемой, врагом или трудной ситуацией.',
    '- Проблема: "Confront a problem" (Столкнуться с проблемой)\n- Люди: "Confront someone" (Предъявить претензии кому-то)\n- Страх: "Confront fear" (Побороть страх)',
    [
      { en: 'You must confront your problems, not hide.', ru: 'Ты должен противостоять проблемам, а не прятаться.' },
      { en: 'She confronted him about the stolen money.', ru: 'Она предъявила ему претензии по поводу украденных денег.' },
      { en: 'We are confronted by many difficulties.', ru: 'Мы сталкиваемся со многими трудностями.' },
      { en: 'He stood up to confront the bully.', ru: 'Он встал, чтобы дать отпор хулигану.' }
    ],
    []
),

createRichWord('b2_considerable', 'Considerable', '/kənˈsɪd.ər.ə.bəl/', 'кэнсидэрэбл', 'Значительный', ProficiencyLevel.B2, 'adj', 'High', 'Formal',
    'Большой по размеру, количеству или важности.',
    '- Количество: "Considerable amount" (Значительное количество)\n- Время: "Considerable time" (Немалое время)\n- Влияние: "Considerable influence" (Значительное влияние)',
    [
      { en: 'It took a considerable amount of time.', ru: 'Это заняло значительное количество времени.' },
      { en: 'She has considerable influence in the company.', ru: 'Она имеет значительное влияние в компании.' },
      { en: 'The damage to the car was considerable.', ru: 'Ущерб машине был значительным.' },
      { en: 'He earns a considerable salary.', ru: 'Он получает солидную зарплату.' }
    ],
    []
),

createRichWord('b2_consistent', 'Consistent', '/kənˈsɪs.tənt/', 'кэнсистэнт', 'Последовательный / Стабильный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Всегда действующий одинаково, не меняющийся и не противоречивый.',
    '- Поведение: "Consistent improvement" (Стабильное улучшение)\n- Логика: "Consistent with facts" (Согласующийся с фактами)\n- Спорт: "Consistent player" (Стабильный игрок)',
    [
      { en: 'You need to be consistent with children.', ru: 'С детьми нужно быть последовательным.' },
      { en: 'Her work has been consistent all year.', ru: 'Её работа была стабильной весь год.' },
      { en: 'His story is consistent with the evidence.', ru: 'Его история согласуется с уликами.' },
      { en: 'We need a consistent policy.', ru: 'Нам нужна последовательная политика.' }
    ],
    []
),

createRichWord('b2_construct', 'Construct', '/kənˈstrʌkt/', 'кэнстракт', 'Строить / Создавать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Строить здание или создавать сложную идею/теорию.',
    '- Здание: "Construct a bridge" (Построить мост)\n- Идея: "Construct a theory" (Создать теорию)\n- Грамматика: "Construct a sentence" (Построить предложение)',
    [
      { en: 'The building was constructed in 1990.', ru: 'Здание было построено в 1990 году.' },
      { en: 'They constructed a shelter from branches.', ru: 'Они соорудили укрытие из веток.' },
      { en: 'It is hard to construct a logical argument.', ru: 'Трудно построить логический аргумент.' },
      { en: 'The company constructs roads and bridges.', ru: 'Компания строит дороги и мосты.' }
    ],
    [
        { meaning: "Idea/Concept (noun)", translation: "Конструкт / Концепция", example: { en: "Time is a social construct.", ru: "Время — это социальный конструкт." } }
    ]
),

createRichWord('b2_consult', 'Consult', '/kənˈsʌlt/', 'кэнсалт', 'Консультироваться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Искать информацию или совета у эксперта или в книге.',
    '- Врач: "Consult a doctor" (Проконсультироваться с врачом)\n- Книга: "Consult a dictionary" (Свериться со словарем)\n- Бизнес: "Consult with colleagues" (Посоветоваться с коллегами)',
    [
      { en: 'You should consult a lawyer before signing.', ru: 'Вам следует проконсультироваться с юристом перед подписанием.' },
      { en: 'I need to consult my diary.', ru: 'Мне нужно свериться с ежедневником.' },
      { en: 'They consulted with experts in the field.', ru: 'Они проконсультировались с экспертами в этой области.' },
      { en: 'He acts without consulting anyone.', ru: 'Он действует, ни с кем не советуясь.' }
    ],
    []
),

createRichWord('b2_consume', 'Consume', '/kənˈsjuːm/', 'кэнсьюм', 'Потреблять / Поглощать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Использовать (ресурсы), есть/пить или уничтожать (огнем).',
    '- Ресурсы: "Consume energy" (Потреблять энергию)\n- Еда: "Consume alcohol" (Употреблять алкоголь)\n- Огонь: "Consumed by fire" (Уничтожен огнем)',
    [
      { en: 'This car consumes a lot of petrol.', ru: 'Эта машина потребляет много бензина.' },
      { en: 'He was consumed by jealousy.', ru: 'Его съедала (поглотила) ревность.' },
      { en: 'Americans consume a lot of sugar.', ru: 'Американцы потребляют много сахара.' },
      { en: 'The fire quickly consumed the wooden house.', ru: 'Огонь быстро уничтожил деревянный дом.' }
    ],
    []
),

createRichWord('b2_contemporary', 'Contemporary', '/kənˈtem.pər.ər.i/', 'кэнтемпэрэри', 'Современный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Существующий в одно время или относящийся к настоящему времени.',
    '- Искусство: "Contemporary art" (Современное искусство)\n- Время: "Contemporary music" (Современная музыка)\n- Люди: "Our contemporaries" (Наши современники)',
    [
      { en: 'I enjoy visiting contemporary art galleries.', ru: 'Мне нравится посещать галереи современного искусства.' },
      { en: 'He was a contemporary of Shakespeare.', ru: 'Он был современником Шекспира.' },
      { en: 'Contemporary furniture usually has simple lines.', ru: 'Современная мебель обычно имеет простые линии.' },
      { en: 'It is a contemporary account of the war.', ru: 'Это отчет о войне того времени (написанный современником).' }
    ],
    []
),

createRichWord('b2_content', 'Content', '/ˈkɒn.tent/', 'контент', 'Содержание', ProficiencyLevel.B2, 'noun', 'High', 'Neutral',
    'То, что находится внутри чего-то, или информация в книге/на сайте. (Прил. /kənˈtent/ - довольный).',
    '- Книга: "Table of contents" (Оглавление)\n- Интернет: "Digital content" (Цифровой контент)\n- Еда: "Fat content" (Содержание жира)',
    [
      { en: 'Look at the table of contents.', ru: 'Посмотри в оглавление.' },
      { en: 'The content of the letter was secret.', ru: 'Содержание письма было секретным.' },
      { en: 'Orange juice has a high vitamin C content.', ru: 'Апельсиновый сок имеет высокое содержание витамина С.' },
      { en: 'He is quite content with his life.', ru: 'Он вполне доволен своей жизнью (прилагательное).' }
    ],
    [
         { meaning: "Satisfied (Adj /kənˈtent/)", translation: "Довольный", example: { en: "Content with very little.", ru: "Довольствующийся малым." } }
    ]
),

createRichWord('b2_contest', 'Contest', '/ˈkɒn.test/', 'контест', 'Конкурс / Состязание', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Соревнование, где выбирают победителя (красоты, пения). Как глагол — оспаривать.',
    '- Шоу: "Beauty contest" (Конкурс красоты)\n- Политика: "Leadership contest" (Борьба за лидерство)\n- Спорт: "Close contest" (Упорная борьба)',
    [
      { en: 'She won a singing contest.', ru: 'Она выиграла певческий конкурс.' },
      { en: 'He intends to contest the election results.', ru: 'Он намерен оспорить результаты выборов (глагол).' },
      { en: 'It was a contest of strength.', ru: 'Это было состязание в силе.' },
      { en: 'Enter the contest to win a prize.', ru: 'Участвуй в конкурсе, чтобы выиграть приз.' }
    ],
    []
),

createRichWord('b2_context', 'Context', '/ˈkɒn.tekst/', 'контекст', 'Контекст', ProficiencyLevel.B2, 'noun', 'High', 'Formal',
    'Ситуация, в которой что-то происходит, помогающая понять смысл.',
    '- Смысл: "Out of context" (Вырвано из контекста)\n- История: "Historical context" (Исторический контекст)\n- Условия: "Social context" (Социальный контекст)',
    [
      { en: 'You have taken my words out of context.', ru: 'Вы вырвали мои слова из контекста.' },
      { en: 'In this context, "mad" means "angry".', ru: 'В этом контексте "mad" означает "злой".' },
      { en: 'To understand the book, you need the historical context.', ru: 'Чтобы понять книгу, нужен исторический контекст.' },
      { en: 'The speech must be seen in the context of the election.', ru: 'Речь нужно рассматривать в контексте выборов.' }
    ],
    []
),

createRichWord('b2_contrast', 'Contrast', '/ˈkɒn.trɑːst/', 'контраст', 'Контраст', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Очевидная разница между двумя вещами. Как глагол — сопоставлять.',
    '- Различие: "In contrast to" (В отличие от)\n- Цвет: "High contrast" (Высокий контраст)\n- Сравнение: "Marked contrast" (Заметный контраст)',
    [
      { en: 'There is a sharp contrast between rich and poor.', ru: 'Существует резкий контраст между богатыми и бедными.' },
      { en: 'In contrast to his brother, he is short.', ru: 'В отличие от брата, он низкий.' },
      { en: 'The white walls contrast with the black floor.', ru: 'Белые стены контрастируют с черным полом.' },
      { en: 'Contrast and compare the two poems.', ru: 'Сравните и противопоставьте эти два стихотворения.' }
    ],
    []
),

createRichWord('b2_convert', 'Convert', '/kənˈvɜːt/', 'кэнвёт', 'Преобразовывать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Изменять форму, характер или функцию чего-либо; менять веру.',
    '- Изменение: "Convert into dollars" (Конвертировать в доллары)\n- Жилье: "Converted loft" (Переделанный лофт)\n- Религия: "Convert to Islam" (Принять ислам)',
    [
      { en: 'The sofa converts into a bed.', ru: 'Диван превращается в кровать.' },
      { en: 'Could you convert miles to kilometers?', ru: 'Не могли бы вы перевести мили в километры?' },
      { en: 'He converted to Christianity last year.', ru: 'Он обратился в христианство в прошлом году.' },
      { en: 'They converted the garage into an office.', ru: 'Они переделали гараж в офис.' }
    ],
    []
),

createRichWord('b2_cooperate', 'Cooperate', '/kəʊˈɒp.ər.eɪt/', 'коуопэрейт', 'Сотрудничать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Работать вместе для достижения общей цели.',
    '- Работа: "Cooperate with police" (Сотрудничать с полицией)\n- Группа: "Refuse to cooperate" (Отказаться сотрудничать)\n- Усилие: "Cooperate closely" (Тесно сотрудничать)',
    [
      { en: 'The two companies agreed to cooperate.', ru: 'Две компании договорились сотрудничать.' },
      { en: 'Witnesses are cooperating with the investigation.', ru: 'Свидетели сотрудничают со следствием.' },
      { en: 'If we cooperate, we can finish faster.', ru: 'Если мы объединим усилия, мы закончим быстрее.' },
      { en: 'Please cooperate with the staff.', ru: 'Пожалуйста, сотрудничайте с персоналом.' }
    ],
    []
),

createRichWord('b2_coordinate', 'Coordinate', '/kəʊˈɔː.dɪ.neɪt/', 'коуординейт', 'Координировать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Организовывать разные части или людей, чтобы они работали эффективно вместе.',
    '- Работа: "Coordinate efforts" (Координировать усилия)\n- Цвет: "Color coordinated" (Подобранный по цвету)\n- Математика: "Coordinates" (Координаты - сущ.)',
    [
      { en: 'We need to coordinate our schedules.', ru: 'Нам нужно скоординировать наши расписания.' },
      { en: 'She coordinates the whole project.', ru: 'Она координирует весь проект.' },
      { en: 'The curtains coordinate with the rug.', ru: 'Шторы гармонируют (сочетаются) с ковром.' },
      { en: 'Enter the GPS coordinates.', ru: 'Введите GPS координаты.' }
    ],
    []
),

createRichWord('b2_core', 'Core', '/kɔːr/', 'ко:', 'Ядро / Суть', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Центральная или самая важная часть чего-либо. Фрукт: сердцевина.',
    '- Фрукт: "Apple core" (Огрызок/сердцевина яблока)\n- Земля: "Earth\'s core" (Ядро Земли)\n- Важность: "Core value" (Ключевая ценность)',
    [
      { en: 'The earth has a hot liquid core.', ru: 'У Земли горячее жидкое ядро.' },
      { en: 'We need to get to the core of the problem.', ru: 'Нам нужно добраться до сути проблемы.' },
      { en: 'Maths and English are core subjects.', ru: 'Математика и английский — основные предметы.' },
      { en: 'He threw the apple core away.', ru: 'Он выбросил огрызок яблока.' }
    ],
    []
),

createRichWord('b2_corporate', 'Corporate', '/ˈkɔː.pər.ət/', 'копэрэт', 'Корпоративный', ProficiencyLevel.B2, 'adj', 'Medium', 'Formal',
    'Относящийся к крупной компании или группе.',
    '- Бизнес: "Corporate image" (Корпоративный имидж)\n- Работа: "Corporate ladder" (Корпоративная лестница / Карьера)\n- Закон: "Corporate tax" (Налог на прибыль корпораций)',
    [
      { en: 'He wears a corporate uniform.', ru: 'Он носит корпоративную форму.' },
      { en: 'We plan to host a corporate event.', ru: 'Мы планируем провести корпоративное мероприятие.' },
      { en: 'The corporate headquarters are in New York.', ru: 'Штаб-квартира корпорации находится в Нью-Йорке.' },
      { en: 'She dislikes the corporate culture.', ru: 'Ей не нравится корпоративная культура.' }
    ],
    []
),

createRichWord('b2_correspond', 'Correspond', '/ˌkɒr.ɪˈspɒnd/', 'кориспонд', 'Соответствовать / Переписываться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Быть похожим или совпадать с чем-то. Второе значение — обмениваться письмами.',
    '- Сходство: "Correspond closely" (Тесно соответствовать / Совпадать)\n- Письма: "Correspond with pen-pal" (Переписываться с другом по переписке)\n- Связь: "Correspond to" (Соответствовать чему-то)',
    [
      { en: 'His story corresponds with the facts.', ru: 'Его история соответствует фактам.' },
      { en: 'The numbers correspond to points on the map.', ru: 'Цифры соответствуют точкам на карте.' },
      { en: 'We corresponded by email for years.', ru: 'Мы переписывались по электронной почте годами.' },
      { en: 'The British MP corresponds roughly to the US Congressman.', ru: 'Британский член парламента примерно соответствует американскому конгрессмену.' }
    ],
    []
),

createRichWord('b2_corridor', 'Corridor', '/ˈkɒr.ɪ.dɔːr/', 'коридо:', 'Коридор', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Длинный проход в здании или поезде, в который выходят двери комнат.',
    '- Здание: "Long corridor" (Длинный коридор)\n- Школа: "Wait in the corridor" (Ждать в коридоре)\n- Политика: "Humanitarian corridor" (Гуманитарный коридор)',
    [
      { en: 'His office is at the end of the corridor.', ru: 'Его офис находится в конце коридора.' },
      { en: 'Don\'t run in the corridors!', ru: 'Не бегайте по коридорам!' },
      { en: 'The bathroom is down the corridor on the left.', ru: 'Ванная по коридору налево.' },
      { en: 'They opened a humanitarian corridor for refugees.', ru: 'Они открыли гуманитарный коридор для беженцев.' }
    ],
    []
),

createRichWord('b2_courage', 'Courage', '/ˈkʌr.ɪdʒ/', 'каридж', 'Мужество / Смелость', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Способность контролировать страх в опасной или трудной ситуации.',
    '- Качество: "Great courage" (Великое мужество)\n- Действие: "Pluck up courage" (Набраться смелости)\n- Фраза: "Dutch courage" (Смелость во хмелю)',
    [
      { en: 'It took a lot of courage to admit his mistake.', ru: 'Потребовалось много мужества, чтобы признать ошибку.' },
      { en: 'She showed great courage during her illness.', ru: 'Она проявила огромное мужество во время болезни.' },
      { en: 'He lacks the courage to do it.', ru: 'Ему не хватает смелости сделать это.' },
      { en: 'I finally built up the courage to ask her out.', ru: 'Я наконец набрался смелости пригласить её на свидание.' }
    ],
    []
),

createRichWord('b2_craft', 'Craft', '/krɑːft/', 'крафт', 'Ремесло / Судно', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Деятельность, требующая навыков ручной работы. Также лодка или самолет.',
    '- Хобби: "Arts and crafts" (Декоративно-прикладное искусство)\n- Транспорт: "Landing craft" (Десантное судно)\n- Навык: "Learn a craft" (Освоить ремесло)',
    [
      { en: 'She is skilled at the craft of weaving.', ru: 'Она искусна в ремесле ткачества.' },
      { en: 'We saw a small craft on the river.', ru: 'Мы видели небольшое судно на реке.' },
      { en: 'Writing is a craft that takes practice.', ru: 'Писательство — это ремесло, требующее практики.' },
      { en: 'The shop sells local crafts.', ru: 'Магазин продает местные поделки.' }
    ],
    [
        { meaning: "Cunning/Trickery", translation: "Хитрость", example: { en: "Use craft and guile.", ru: "Использовать хитрость и коварство." } }
    ]
),

createRichWord('b2_crisis', 'Crisis', '/ˈkraɪ.sɪs/', 'крайсис', 'Кризис', ProficiencyLevel.B2, 'noun', 'High', 'Neutral',
    'Время сильных трудностей или опасности.',
    '- Экономика: "Financial crisis" (Финансовый кризис)\n- Личное: "Mid-life crisis" (Кризис среднего возраста)\n- Управление: "Crisis management" (Антикризисное управление)',
    [
      { en: 'The country is facing an economic crisis.', ru: 'Страна сталкивается с экономическим кризисом.' },
      { en: 'We need to act fast in a crisis.', ru: 'В кризис нужно действовать быстро.' },
      { en: 'The crisis was resolved peacefully.', ru: 'Кризис был разрешен мирным путем.' },
      { en: 'He is good in a crisis.', ru: 'Он хорош в критических ситуациях.' }
    ],
    []
),

createRichWord('b2_critic', 'Critic', '/ˈkrɪt.ɪk/', 'критик', 'Критик', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Человек, который судит искусство (фильмы, книги) или выражает неодобрение.',
    '- Профессия: "Film critic" (Кинокритик)\n- Отношение: "Harsh critic" (Суровый критик)\n- Мнение: "Biggest critic" (Самый большой критик)',
    [
      { en: 'The food critic praised the restaurant.', ru: 'Ресторанный критик похвалил ресторан.' },
      { en: 'She is her own harshest critic.', ru: 'Она свой самый строгий критик.' },
      { en: 'Critics loved the new movie.', ru: 'Критикам понравился новый фильм.' },
      { en: 'Ignore the critics and do what you love.', ru: 'Игнорируй критиков и делай то, что любишь.' }
    ],
    []
),

createRichWord('b2_criticise', 'Criticise', '/ˈkrɪt.ɪ.saɪz/', 'критисайз', 'Критиковать', ProficiencyLevel.B2, 'verb', 'High', 'Neutral',
    'Выражать неодобрение или судить о недостатках.',
    '- Действие: "Criticise government" (Критиковать правительство)\n- Личное: "Stop criticising me" (Перестань меня критиковать)\n- Оценка: "Criticise sharply" (Резко критиковать)',
    [
      { en: 'It is easy to criticise others.', ru: 'Легко критиковать других.' },
      { en: 'He was criticised for being late.', ru: 'Его критиковали за опоздание.' },
      { en: 'Don\'t criticise what you don\'t understand.', ru: 'Не критикуй то, чего не понимаешь.' },
      { en: 'The report criticises the police safety procedures.', ru: 'Отчет критикует полицейские процедуры безопасности.' }
    ],
    []
),

createRichWord('b2_criticism', 'Criticism', '/ˈkrɪt.ɪ.sɪ.zəm/', 'критисизм', 'Критика', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Выражение неодобрения или профессиональная оценка искусства.',
    '- Тип: "Constructive criticism" (Конструктивная критика)\n- Реакция: "Accept criticism" (Принимать критику)\n- Искусство: "Literary criticism" (Литературная критика)',
    [
      { en: 'I appreciate your constructive criticism.', ru: 'Я ценю вашу конструктивную критику.' },
      { en: 'He can\'t take criticism.', ru: 'Он не воспринимает (не выносит) критику.' },
      { en: 'There was widespread criticism of the plan.', ru: 'План подвергся широкой критике.' },
      { en: 'She wrote a criticism of the novel.', ru: 'Она написала критическую статью о романе.' }
    ],
    []
),

createRichWord('b2_crop', 'Crop', '/krɒp/', 'кроп', 'Урожай / Культура', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Растение, выращиваемое для еды (зерно, фрукты), или собранный урожай. Как глагол — коротко стричь/обрезать.',
    '- Ферма: "Wheat crop" (Урожай пшеницы)\n- Тип: "Cash crop" (Товарная культура)\n- Стрижка: "Crop hair" (Коротко стричь волосы)',
    [
      { en: 'The main crop grown here is rice.', ru: 'Основная культура, выращиваемая здесь — рис.' },
      { en: 'We had a bumper crop of apples this year.', ru: 'У нас был небывалый урожай яблок в этом году.' },
      { en: 'Farmers lost their crops due to drought.', ru: 'Фермеры потеряли урожай из-за засухи.' },
      { en: 'She cropped the photo to fit the frame.', ru: 'Она обрезала фото, чтобы оно влезло в рамку (глагол).' }
    ],
    []
),

createRichWord('b2_crucial', 'Crucial', '/ˈkruː.ʃəl/', 'крушл', 'Ключевой / Решающий', ProficiencyLevel.B2, 'adj', 'High', 'Neutral',
    'Чрезвычайно важный, от которого зависит результат.',
    '- Важность: "Crucial decision" (Решающее решение)\n- Роль: "Crucial role" (Ключевая роль)\n- Время: "Crucial moment" (Решающий момент)',
    [
      { en: 'Salt is crucial for cooking.', ru: 'Соль крайне важна для готовки.' },
      { en: 'It is crucial that we arrive on time.', ru: 'Крайне важно, чтобы мы прибыли вовремя.' },
      { en: 'She played a crucial role in the negotiations.', ru: 'Она сыграла ключевую роль в переговорах.' },
      { en: 'The next few weeks are crucial.', ru: 'Следующие несколько недель являются решающими.' }
    ],
    []
),

createRichWord('b2_crush', 'Crush', '/krʌʃ/', 'краш', 'Раздавить / Влюбленность', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Сильно сжать, чтобы сломать или деформировать. Как сущ. — сильное увлечение кем-то (влюбленность).',
    '- Действие: "Crush a can" (Сплющить банку)\n- Еда: "Crush garlic" (Раздавить чеснок)\n- Чувства: "Have a crush on" (Быть влюбленным в)',
    [
      { en: 'Don\'t crush the box, there are eggs inside.', ru: 'Не раздави коробку, внутри яйца.' },
      { en: 'He crushed the paper into a ball.', ru: 'Он смял бумагу в шарик.' },
      { en: 'I think she has a crush on you.', ru: 'Я думаю, она в тебя втюрилась (у неё краш на тебя).' },
      { en: 'The rebellion was ruthlessly crushed.', ru: 'Восстание было безжалостно подавлено.' }
    ],
    []
),

createRichWord('b2_curve', 'Curve', '/kɜːv/', 'кёв', 'Кривая / Изгиб', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Линия, которая плавно изгибается.',
    '- Дорога: "Dangerous curve" (Опасный поворот)\n- График: "Learning curve" (Кривая обучения)\n- Форма: "Curve of the spine" (Изгиб позвоночника)',
    [
      { en: 'The road has a sharp curve ahead.', ru: 'Впереди на дороге резкий поворот.' },
      { en: 'He threw a ball with a curve.', ru: 'Он бросил мяч по дуге (крученый).' },
      { en: 'The graph shows a downward curve.', ru: 'График показывает кривую вниз.' },
      { en: 'The river curves around the hill.', ru: 'Река огибает холм (глагол).' }
    ],
    []
),

createRichWord('b2_damp', 'Damp', '/dæmp/', 'дэмп', 'Влажный / Сырой', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Слегка мокрый, часто неприятным образом.',
    '- Погода: "Damp day" (Сырой день)\n- Дом: "Damp walls" (Сырые стены)\n- Ощущение: "Damp clothes" (Влажная одежда)',
    [
      { en: 'The grass is still damp from the rain.', ru: 'Трава все еще влажная от дождя.' },
      { en: 'It feels a bit damp in here.', ru: 'Здесь немного сыро.' },
      { en: 'Wipe it with a damp cloth.', ru: 'Протри это влажной тряпкой.' },
      { en: 'Don\'t put on damp socks.', ru: 'Не надевай влажные носки.' }
    ],
    []
),

createRichWord('b2_database', 'Database', '/ˈdeɪ.tə.beɪs/', 'дейтэбейс', 'База данных', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Организованный набор данных в компьютере.',
    '- IT: "Access the database" (Получить доступ к базе данных)\n- Работа: "Update the database" (Обновить базу данных)\n- Тип: "Customer database" (База данных клиентов)',
    [
      { en: 'The police have a database of fingerprints.', ru: 'У полиции есть база данных отпечатков пальцев.' },
      { en: 'Enter the information into the database.', ru: 'Введите информацию в базу данных.' },
      { en: 'The database is currently offline.', ru: 'База данных сейчас недоступна.' },
      { en: 'We maintain a large database of contacts.', ru: 'Мы поддерживаем большую базу контактов.' }
    ],
    []
  ),
createRichWord('b2_buzz', 'Buzz', '/bʌz/', 'баз', 'Жужжание / Гул', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Непрерывный низкий звук (пчелы, машины). В переносном смысле — возбуждение или слухи.',
    '- Звук: "Buzz of bees" (Жужжание пчел)\n- Эмоции: "Get a buzz" (Получить кайф/удовольствие)\n- Новости: "Create a buzz" (Создать шумиху)',
    [
      { en: 'I can hear the buzz of a fly.', ru: 'Я слышу жужжание мухи.' },
      { en: 'There is a real buzz about this new movie.', ru: 'Вокруг этого нового фильма настоящая шумиха.' },
      { en: 'I get a buzz from riding my motorbike.', ru: 'Я получаю кайф от езды на мотоцикле.' },
      { en: 'The doorbell buzzed loudly.', ru: 'Дверной звонок громко прожужжал.' }
    ],
    [
        { meaning: "Move quickly (verb)", translation: "Сновать / Носиться", example: { en: "Waiters buzzed around.", ru: "Официанты сновали туда-сюда." } }
    ]
),

createRichWord('b2_cautious', 'Cautious', '/ˈkɔː.ʃəs/', 'кошэс', 'Осторожный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Избегающий рисков, внимательный к опасностям.',
    '- Поведение: "Be cautious" (Быть осторожным)\n- Отношение: "Cautious optimism" (Сдержанный оптимизм)\n- Вождение: "Cautious driver" (Осторожный водитель)',
    [
      { en: 'He is very cautious about spending money.', ru: 'Он очень осторожен в трате денег.' },
      { en: 'The government gave a cautious response.', ru: 'Правительство дало осторожный ответ.' },
      { en: 'You should be cautious when driving in snow.', ru: 'Тебе следует быть осторожным при вождении на снегу.' },
      { en: 'She is a cautious person who avoids danger.', ru: 'Она осторожный человек, который избегает опасности.' }
    ],
    []
),

createRichWord('b2_chaos', 'Chaos', '/ˈkeɪ.ɒs/', 'кэйос', 'Хаос', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Состояние полного беспорядка и неразберихи.',
    '- Состояние: "Total chaos" (Полный хаос)\n- Причина: "Cause chaos" (Вызывать хаос)\n- Место: "In chaos" (В хаосе)',
    [
      { en: 'The storm caused chaos at the airport.', ru: 'Шторм вызвал хаос в аэропорту.' },
      { en: 'The room was in absolute chaos.', ru: 'В комнате был абсолютный хаос.' },
      { en: 'Without rules, there would be chaos.', ru: 'Без правил был бы хаос.' },
      { en: 'Police tried to control the chaos on the streets.', ru: 'Полиция пыталась контролировать хаос на улицах.' }
    ],
    []
),

createRichWord('b2_choir', 'Choir', '/kwaɪər/', 'квайэ', 'Хор', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Группа людей, поющих вместе, обычно в церкви или школе.',
    '- Музыка: "Join a choir" (Вступить в хор)\n- Церковь: "Church choir" (Церковный хор)\n- Участник: "Choir boy" (Мальчик-хорист)',
    [
      { en: 'She sings in the school choir.', ru: 'Она поет в школьном хоре.' },
      { en: 'The choir practice is on Tuesdays.', ru: 'Репетиция хора по вторникам.' },
      { en: 'We heard the choir singing hymns.', ru: 'Мы слышали, как хор пел гимны.' },
      { en: 'He has a voice suitable for a choir.', ru: 'У него голос, подходящий для хора.' }
    ],
    []
),

createRichWord('b2_choke', 'Choke', '/tʃəʊk/', 'чоук', 'Задыхаться / Душить', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Перестать дышать из-за перекрытия горла или душить кого-то.',
    '- Еда: "Choke on food" (Подавиться едой)\n- Насилие: "Choke someone" (Душить кого-то)\n- Эмоции: "Choke back tears" (Сдерживать слезы)',
    [
      { en: 'He started to choke on a piece of meat.', ru: 'Он начал давиться куском мяса.' },
      { en: 'The smoke made me choke.', ru: 'Дым заставил меня задыхаться.' },
      { en: 'She choked back her anger.', ru: 'Она подавила (сдержала) свой гнев.' },
      { en: 'Weeds are choking the garden plants.', ru: 'Сорняки душат садовые растения.' }
    ],
    []
),

createRichWord('b2_chunk', 'Chunk', '/tʃʌŋk/', 'чанк', 'Кусок / Ломоть', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Толстый, сплошной кусок чего-либо. Также значительная часть.',
    '- Еда: "Chunk of cheese" (Кусок сыра)\n- Текст: "Chunk of text" (Отрывок текста)\n- Количество: "Good chunk" (Изрядная доля)',
    [
      { en: 'Cut the potatoes into large chunks.', ru: 'Нарежьте картофель крупными кусками.' },
      { en: 'He spent a chunk of his time fixing the car.', ru: 'Он потратил значительную часть времени на починку машины.' },
      { en: 'A huge chunk of ice fell from the roof.', ru: 'Огромная глыба льда упала с крыши.' },
      { en: 'I read a chunk of the book yesterday.', ru: 'Вчера я прочитал значительный кусок книги.' }
    ],
    []
),

createRichWord('b2_classify', 'Classify', '/ˈklæs.ɪ.faɪ/', 'кләсифай', 'Классифицировать', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Распределять по группам в соответствии с признаками. Также засекречивать информацию.',
    '- Наука: "Classify animals" (Классифицировать животных)\n- Документы: "Classified information" (Засекреченная информация - adj)\n- Группа: "Classify as" (Классифицировать как)',
    [
      { en: 'Biologists classify animals into different groups.', ru: 'Биологи классифицируют животных по разным группам.' },
      { en: 'How would you classify this type of music?', ru: 'Как бы вы классифицировали этот тип музыки?' },
      { en: 'These documents are classified top secret.', ru: 'Эти документы засекречены как совершенно секретные.' },
      { en: 'Tomatoes are classified as fruit.', ru: 'Помидоры классифицируются как фрукты.' }
    ],
    []
),

createRichWord('b2_clay', 'Clay', '/kleɪ/', 'клей', 'Глина', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Плотная земля, которая становится твердой при обжиге. Используется для керамики.',
    '- Материал: "Pottery clay" (Гончарная глина)\n- Спорт: "Clay court" (Грунтовый корт - теннис)\n- Искусство: "Model in clay" (Лепить из глины)',
    [
      { en: 'The pot is made of clay.', ru: 'Горшок сделан из глины.' },
      { en: 'The soil here is heavy clay.', ru: 'Почва здесь — тяжелая глина.' },
      { en: 'Children love playing with modelling clay.', ru: 'Дети любят играть с пластилином (модельной глиной).' },
      { en: 'Nadal plays well on clay courts.', ru: 'Надаль хорошо играет на грунтовых кортах.' }
    ],
    []
),

createRichWord('b2_collar', 'Collar', '/ˈkɒl.ər/', 'колэр', 'Воротник / Ошейник', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Часть одежды вокруг шеи или ремешок на шее животного.',
    '- Одежда: "Shirt collar" (Воротник рубашки)\n- Животные: "Dog collar" (Собачий ошейник)\n- Работа: "Blue-collar" (Рабочий класс / Синие воротнички)',
    [
      { en: 'He turned up his collar against the wind.', ru: 'Он поднял воротник, защищаясь от ветра.' },
      { en: 'The dog has a name tag on its collar.', ru: 'У собаки есть бирка с именем на ошейнике.' },
      { en: 'This shirt is too tight around the collar.', ru: 'Эта рубашка слишком тесная в воротнике.' },
      { en: 'White-collar workers usually work in offices.', ru: 'Белые воротнички обычно работают в офисах.' }
    ],
    [
        { meaning: "Arrest (Slang verb)", translation: "Арестовать / Схватить", example: { en: "Police collared the thief.", ru: "Полиция схватила вора." } }
    ]
  ),
createRichWord('b2_comic', 'Comic', '/ˈkɒm.ɪk/', 'комик', 'Комический / Комик', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Смешной или относящийся к комедии. Как существительное — человек, который смешит, или журнал с картинками.',
    '- Жанр: "Comic book" (Комикс)\n- Человек: "Stand-up comic" (Стендап-комик)\n- Ситуация: "Comic effect" (Комический эффект)',
    [
      { en: 'He is a very popular stand-up comic.', ru: 'Он очень популярный стендап-комик.' },
      { en: 'I used to read comic books as a child.', ru: 'В детстве я читал комиксы.' },
      { en: 'The play has many comic moments.', ru: 'В пьесе много комичных моментов.' },
      { en: 'It was a comic situation, though he didn\'t laugh.', ru: 'Это была комичная ситуация, хотя он не смеялся.' }
    ],
    []
),

createRichWord('b2_commentator', 'Commentator', '/ˈkɒm.ən.teɪ.tər/', 'комэнтейтэ', 'Комментатор', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Человек, который описывает события (обычно спортивные) в прямом эфире или анализирует новости.',
    '- Спорт: "Sports commentator" (Спортивный комментатор)\n- Новости: "Political commentator" (Политический обозреватель)\n- Радио: "Radio commentator" (Радиокомментатор)',
    [
      { en: 'The football commentator shouted when the goal was scored.', ru: 'Футбольный комментатор закричал, когда был забит гол.' },
      { en: 'She works as a political commentator for the BBC.', ru: 'Она работает политическим обозревателем на BBC.' },
      { en: 'The commentator analyzed the game strategy.', ru: 'Комментатор проанализировал стратегию игры.' },
      { en: 'He is a well-known TV commentator.', ru: 'Он известный телекомментатор.' }
    ],
    []
),

createRichWord('b2_compact', 'Compact', '/kəmˈpækt/', 'кэмпэкт', 'Компактный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Занимающий мало места; плотно упакованный.',
    '- Размер: "Compact car" (Малолитражка / Компактное авто)\n- Техника: "Compact disc" (Компакт-диск)\n- Форма: "Compact design" (Компактный дизайн)',
    [
      { en: 'This camera is compact enough to fit in your pocket.', ru: 'Эта камера достаточно компактна, чтобы поместиться в карман.' },
      { en: 'We bought a compact car for city driving.', ru: 'Мы купили компактную машину для езды по городу.' },
      { en: 'The soil was compacted by the rain.', ru: 'Почва была уплотнена дождем (глагол).' },
      { en: 'It has a very compact layout.', ru: 'У него очень компактная планировка.' }
    ],
    [
        { meaning: "Agreement (noun)", translation: "Договор / Соглашение", example: { en: "They signed a compact.", ru: "Они подписали соглашение." } },
        { meaning: "Powder case (noun)", translation: "Пудреница", example: { en: "She checked her face in her compact.", ru: "Она проверила лицо в пудренице." } }
    ]
),

createRichWord('b2_comparative', 'Comparative', '/kəmˈpær.ə.tɪv/', 'кэмпэрэтив', 'Сравнительный', ProficiencyLevel.B2, 'adj', 'Medium', 'Formal',
    'Основанный на сравнении или относительный.',
    '- Наука: "Comparative study" (Сравнительное исследование)\n- Грамматика: "Comparative adjective" (Сравнительная степень прилагательного)\n- Уровень: "Comparative safety" (Относительная безопасность)',
    [
      { en: 'He lives in comparative luxury.', ru: 'Он живет в относительной роскоши.' },
      { en: 'We did a comparative study of the two languages.', ru: 'Мы провели сравнительное исследование двух языков.' },
      { en: '"Better" is the comparative form of "good".', ru: '"Better" — это сравнительная степень слова "good".' },
      { en: 'The comparative cost of living is lower here.', ru: 'Относительная стоимость жизни здесь ниже.' }
    ],
    []
),

createRichWord('b2_con', 'Con', '/kɒn/', 'кон', 'Минус (в "плюсы и минусы")', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Аргумент против чего-либо (обычно во мн. числе) или обман/мошенничество.',
    '- Анализ: "Pros and cons" (За и против / Плюсы и минусы)\n- Обман: "It is a con" (Это развод/обман)\n- Человек: "Con artist" (Мошенник)',
    [
      { en: 'We need to weigh the pros and cons before deciding.', ru: 'Нам нужно взвесить все за и против перед принятием решения.' },
      { en: 'Buying that car was a con; the engine is broken.', ru: 'Покупка этой машины была разводом, двигатель сломан.' },
      { en: 'He conned me out of my money.', ru: 'Он выманил у меня деньги (глагол).' },
      { en: 'What are the cons of living in the city?', ru: 'Каковы минусы жизни в городе?' }
    ],
    [
        { meaning: "Convict (Slang)", translation: "Зек / Заключенный", example: { en: "An escaped con.", ru: "Сбежавший зек." } }
    ]
),

createRichWord('b2_console', 'Console', '/ˈkɒn.səʊl/', 'консоул', 'Консоль / Пульт', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Устройство для управления (игровое или компьютерное). Глагол (/kənˈsəʊl/) означает "утешать".',
    '- Игры: "Games console" (Игровая приставка)\n- Управление: "Control console" (Пульт управления)\n- Мебель: "Console table" (Консольный столик)',
    [
      { en: 'He bought a new games console for his son.', ru: 'Он купил новую игровую приставку для сына.' },
      { en: 'The engineer monitored the readings on the console.', ru: 'Инженер следил за показаниями на пульте управления.' },
      { en: 'I tried to console her after the bad news.', ru: 'Я пытался утешить её после плохих новостей (глагол).' },
      { en: 'The pilot checked the flight console.', ru: 'Пилот проверил панель управления полетом.' }
    ],
    [
        { meaning: "Comfort (Verb /kənˈsəʊl/)", translation: "Утешать", example: { en: "Nothing could console him.", ru: "Ничто не могло его утешить." } }
    ]
),

createRichWord('b2_copper', 'Copper', '/ˈkɒp.ər/', 'копэ', 'Медь', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Красно-коричневый металл, используемый для проводов и монет.',
    '- Металл: "Copper wire" (Медный провод)\n- Цвет: "Copper hair" (Медно-рыжие волосы)\n- Трубы: "Copper pipes" (Медные трубы)',
    [
      { en: 'Copper is a good conductor of electricity.', ru: 'Медь — хороший проводник электричества.' },
      { en: 'The statue is made of bronze and copper.', ru: 'Статуя сделана из бронзы и меди.' },
      { en: 'She has beautiful copper-colored hair.', ru: 'У нее красивые волосы медного цвета.' },
      { en: 'Old pennies were made of copper.', ru: 'Старые пенни делались из меди.' }
    ],
    [
        { meaning: "Police officer (Slang)", translation: "Коп / Мент", example: { en: "Run, the coppers are coming!", ru: "Беги, легавые идут!" } }
    ]
),

createRichWord('b2_cube', 'Cube', '/kjuːb/', 'кьюб', 'Куб', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Трехмерная фигура с шестью квадратными сторонами.',
    '- Лед: "Ice cube" (Кубик льда)\n- Еда: "Sugar cube" (Кубик сахара)\n- Игрушка: "Rubik\'s cube" (Кубик Рубика)',
    [
      { en: 'Please put a few ice cubes in my drink.', ru: 'Пожалуйста, положи несколько кубиков льда в мой напиток.' },
      { en: 'Cut the meat into small cubes.', ru: 'Нарежьте мясо маленькими кубиками.' },
      { en: 'Can you solve a Rubik\'s cube?', ru: 'Ты умеешь собирать кубик Рубика?' },
      { en: 'The building looks like a giant glass cube.', ru: 'Здание выглядит как гигантский стеклянный куб.' }
    ],
    []
),

createRichWord('b2_deadline', 'Deadline', '/ˈded.laɪn/', 'дэдлайн', 'Крайний срок', ProficiencyLevel.B2, 'noun', 'High', 'Neutral',
    'Время или дата, к которой что-то должно быть закончено.',
    '- Работа: "Meet the deadline" (Уложиться в срок)\n- Стресс: "Miss the deadline" (Не успеть в срок)\n- Учеба: "Tight deadline" (Сжатые сроки)',
    [
      { en: 'The deadline for the project is next Monday.', ru: 'Крайний срок сдачи проекта — следующий понедельник.' },
      { en: 'We have to work hard to meet the deadline.', ru: 'Нам нужно усердно работать, чтобы уложиться в срок.' },
      { en: 'He missed the application deadline.', ru: 'Он пропустил срок подачи заявления.' },
      { en: 'I am working under a very tight deadline.', ru: 'Я работаю в очень сжатые сроки.' }
    ],
    []
  ),
createRichWord('b2_cellular', 'Cellular', '/ˈseljələ(r)/', 'сэльюлэ', 'Клеточный / Сотовый', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Относящийся к клеткам (биологическим) или к системе мобильной связи.',
    '- Связь: "Cellular network" (Сотовая сеть)\n- Биология: "Cellular structure" (Клеточная структура)\n- Технологии: "Cellular data" (Сотовые данные)',
    [
        { en: 'The cellular network coverage is weak in the mountains.', ru: 'Покрытие сотовой сети в горах слабое.' },
        { en: 'Scientists studied the cellular damage caused by the virus.', ru: 'Ученые изучили клеточные повреждения, вызванные вирусом.' },
        { en: 'You need to turn off cellular data to save battery.', ru: 'Тебе нужно выключить сотовые данные, чтобы сэкономить заряд.' },
        { en: 'Life relies on complex cellular processes.', ru: 'Жизнь зависит от сложных клеточных процессов.' }
    ],
    [
        { meaning: "Porous", translation: "Ячеистый / Пористый", example: { en: "Cellular concrete.", ru: "Ячеистый бетон." } }
    ]
),

createRichWord('b2_ceramic', 'Ceramic', '/səˈræmɪk/', 'сирэмик', 'Керамический', ProficiencyLevel.B2, 'adj', 'Low', 'Neutral',
    'Сделанный из глины и обожженный при высокой температуре.',
    '- Посуда: "Ceramic tiles" (Керамическая плитка)\n- Искусство: "Ceramic art" (Керамическое искусство)\n- Материал: "Ceramic knife" (Керамический нож)',
    [
        { en: 'The floor in the bathroom is covered with blue ceramic tiles.', ru: 'Пол в ванной покрыт голубой керамической плиткой.' },
        { en: 'She collects antique ceramic bowls from Japan.', ru: 'Она коллекционирует старинные керамические чаши из Японии.' },
        { en: 'Ceramic knives remain sharp for a very long time.', ru: 'Керамические ножи остаются острыми очень долгое время.' },
        { en: 'He takes evening classes in ceramic pottery.', ru: 'Он посещает вечерние курсы по гончарному делу.' }
    ],
    [
        { meaning: "Ceramics (noun)", translation: "Керамика (изделия)", example: { en: "An exhibition of ceramics.", ru: "Выставка керамики." } }
    ]
),

createRichWord('b2_charitable', 'Charitable', '/ˈtʃærɪtəbl/', 'чэритэбл', 'Благотворительный / Милосердный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Связанный с помощью нуждающимся; добрый и неосуждающий в суждениях о других.',
    '- Организация: "Charitable foundation" (Благотворительный фонд)\n- Действие: "Charitable donation" (Благотворительное пожертвование)\n- Отношение: "Be charitable" (Быть снисходительным)',
    [
        { en: 'She leaves a lot of money to charitable organizations.', ru: 'Она оставляет много денег благотворительным организациям.' },
        { en: 'The company has a strong charitable program for the community.', ru: 'У компании есть сильная благотворительная программа для общества.' },
        { en: 'Try to take a more charitable view of his mistakes.', ru: 'Постарайся взглянуть на его ошибки более снисходительно.' },
        { en: 'Their charitable work helped hundreds of homeless people.', ru: 'Их благотворительная работа помогла сотням бездомных.' }
    ],
    []
),

createRichWord('b2_chord', 'Chord', '/kɔːd/', 'код', 'Аккорд', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Группа (обычно три или более) музыкальных нот, звучащих одновременно.',
    '- Музыка: "Play a chord" (Сыграть аккорд)\n- Гитара: "Guitar chords" (Гитарные аккорды)\n- Идиома: "Strike a chord" (Задеть за живое)',
    [
        { en: 'He strummed a few chords on his acoustic guitar.', ru: 'Он побренькал несколько аккордов на своей акустической гитаре.' },
        { en: 'The song begins with a dramatic major chord.', ru: 'Песня начинается с драматичного мажорного аккорда.' },
        { en: 'Her speech struck a chord with many voters.', ru: 'Ее речь нашла отклик у многих избирателей.' },
        { en: 'Learning the basic chords is the first step in piano.', ru: 'Изучение базовых аккордов — первый шаг в игре на пианино.' }
    ],
    [
        { meaning: "Line segment (Math)", translation: "Хорда", example: { en: "A chord connects two points on a circle.", ru: "Хорда соединяет две точки на окружности." } }
    ]
),

createRichWord('b2_chorus', 'Chorus', '/ˈkɔːrəs/', 'корэс', 'Припев / Хор', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Часть песни, которая повторяется; большая группа людей, поющих вместе.',
    '- Песня: "Sing the chorus" (Петь припев)\n- Группа: "Join the chorus" (Вступить в хор)\n- Согласие: "Chorus of approval" (Хор одобрения)',
    [
        { en: 'Everyone knows the chorus of this famous song.', ru: 'Все знают припев этой известной песни.' },
        { en: 'A chorus of angry voices rose from the crowd.', ru: 'Из толпы поднялся хор сердитых голосов.' },
        { en: 'The children sang in chorus at the school concert.', ru: 'Дети пели хором на школьном концерте.' },
        { en: 'Please join in when we get to the chorus.', ru: 'Пожалуйста, присоединяйтесь, когда мы дойдем до припева.' }
    ],
    [
        { meaning: "Simultaneous utterance", translation: "Хором (одновременно)", example: { en: "\"Yes!\" they answered in chorus.", ru: "\"Да!\" — ответили они хором." } }
    ]
),

createRichWord('b2_chuckle', 'Chuckle', '/ˈtʃʌkl/', 'чакл', 'Хихикать / Усмехаться', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Смеяться тихо, часто с закрытым ртом, выражая удовлетворение или веселье.',
    '- Реакция: "Chuckle to oneself" (Хихикать про себя)\n- Звук: "Soft chuckle" (Тихий смешок)\n- Эмоция: "Have a chuckle" (Посмеяться)',
    [
        { en: 'He chuckled to himself as he read the funny message.', ru: 'Он усмехнулся про себя, читая смешное сообщение.' },
        { en: 'She gave a little chuckle when she saw the puppy playing.', ru: 'Она тихо хихикнула, увидев, как играет щенок.' },
        { en: 'The definition of the word made the students chuckle.', ru: 'Определение этого слова заставило студентов хихикать.' },
        { en: 'There was a low chuckle from the back of the room.', ru: 'Из глубины комнаты раздался тихий смешок.' }
    ],
    [
        { meaning: "A quiet laugh (noun)", translation: "Смешок", example: { en: "He suppressed a chuckle.", ru: "Он подавил смешок." } }
    ]
),

createRichWord('b2_clan', 'Clan', '/klæn/', 'клэн', 'Клан / Род', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Большая группа семей, имеющих общего предка (особенно в Шотландии); тесная группа людей.',
    '- История: "Scottish clan" (Шотландский клан)\n- Семья: "The whole clan" (Все семейство)\n- Общество: "Clan chief" (Вождь клана)',
    [
        { en: 'The Scottish clans fought each other for centuries.', ru: 'Шотландские кланы воевали друг с другом столетиями.' },
        { en: 'Our whole clan gathers together for Christmas dinner.', ru: 'Все наше семейство собирается вместе на рождественский ужин.' },
        { en: 'They act like a clan, excluding anyone from outside.', ru: 'Они ведут себя как клан, исключая любого постороннего.' },
        { en: 'Members of the clan wear a specific tartan pattern.', ru: 'Члены клана носят определенный узор тартана (клетчатой ткани).' }
    ],
    []
),

createRichWord('b2_claw', 'Claw', '/klɔː/', 'кло', 'Коготь / Клешня', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Острый загнутый ноготь на лапе животного или птицы; часть тела краба.',
    '- Животное: "Cat\'s claws" (Кошачьи когти)\n- Морепродукты: "Crab claw" (Клешня краба)\n- Действие: "Claw marks" (Следы от когтей)',
    [
        { en: 'The cat sharpened its claws on the wooden fence.', ru: 'Кошка точила когти о деревянный забор.' },
        { en: 'The eagle seized its prey with its powerful claws.', ru: 'Орел схватил добычу своими мощными когтями.' },
        { en: 'He managed to claw his way back to the top.', ru: 'Ему удалось с трудом (карабкаясь) вернуться на вершину.' },
        { en: 'Be careful, that lobster has huge claws.', ru: 'Будь осторожен, у этого омара огромные клешни.' }
    ],
    [
        { meaning: "To scratch/tear", translation: "Царапать / Рвать когтями", example: { en: "She clawed at his face.", ru: "Она вцепилась ему в лицо." } }
    ]
),

createRichWord('b2_cocaine', 'Cocaine', '/kəʊˈkeɪn/', 'кэукейн', 'Кокаин', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Сильный нелегальный наркотик, обычно в виде белого порошка.',
    '- Преступность: "Cocaine addiction" (Кокаиновая зависимость)\n- Закон: "Possession of cocaine" (Хранение кокаина)\n- Сленг: "Cocaine high" (Кайф от кокаина)',
    [
        { en: 'He was arrested for smuggling cocaine across the border.', ru: 'Его арестовали за контрабанду кокаина через границу.' },
        { en: 'Cocaine is a highly addictive and dangerous substance.', ru: 'Кокаин — это вещество, вызывающее сильное привыкание и очень опасное.' },
        { en: 'The movie depicts the rise of the cocaine trade in the 80s.', ru: 'Фильм описывает расцвет торговли кокаином в 80-е.' },
        { en: 'Tests revealed traces of cocaine in his blood.', ru: 'Тесты выявили следы кокаина в его крови.' }
    ],
    []
),

createRichWord('b2_collision', 'Collision', '/kəˈlɪʒn/', 'кэлижн', 'Столкновение', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Авария, при которой два или более транспортных средства или предмета врезаются друг в друга.',
    '- Дорога: "Head-on collision" (Лобовое столкновение)\n- Космос: "Collision course" (Курс на столкновение)\n- Мнения: "Collision of interests" (Столкновение интересов)',
    [
        { en: 'The driver was injured in a collision with a bus.', ru: 'Водитель пострадал при столкновении с автобусом.' },
        { en: 'Luckily, we managed to avoid a collision at the last second.', ru: 'К счастью, нам удалось избежать столкновения в последнюю секунду.' },
        { en: 'The two galaxies are on a collision course.', ru: 'Две галактики находятся на курсе столкновения.' },
        { en: 'There was a collision of cultures when they moved abroad.', ru: 'Произошло столкновение культур, когда они переехали за границу.' }
    ],
    []
),

createRichWord('b2_communism', 'Communism', '/ˈkɒmjənɪzəm/', 'комьюнизм', 'Коммунизм', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Политическая система, в которой государство владеет собственностью и производством, а блага делятся поровну.',
    '- Политика: "Fall of communism" (Падение коммунизма)\n- История: "Soviet communism" (Советский коммунизм)\n- Идеология: "Believe in communism" (Верить в коммунизм)',
    [
        { en: 'The collapse of communism changed the map of Europe.', ru: 'Крах коммунизма изменил карту Европы.' },
        { en: 'Many books were written about the theory of communism.', ru: 'О теории коммунизма было написано много книг.' },
        { en: 'He was a strong supporter of communism in his youth.', ru: 'В молодости он был убежденным сторонником коммунизма.' },
        { en: 'Countries transitioned from communism to capitalism.', ru: 'Страны перешли от коммунизма к капитализму.' }
    ],
    []
),

createRichWord('b2_compartment', 'Compartment', '/kəmˈpɑːtmənt/', 'кэмпатмэнт', 'Отделение / Купе', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Отдельная секция внутри большей структуры, например, в поезде или сумке.',
    '- Поезд: "Train compartment" (Купе поезда)\n- Хранение: "Glove compartment" (Бардачок в машине)\n- Багаж: "Secret compartment" (Потайное отделение)',
    [
        { en: 'We booked a sleeping compartment on the night train.', ru: 'Мы забронировали спальное купе в ночном поезде.' },
        { en: 'Keep your registration documents in the glove compartment.', ru: 'Держите документы на машину в бардачке.' },
        { en: 'The bag has a separate compartment for a laptop.', ru: 'В сумке есть отдельный отсек для ноутбука.' },
        { en: 'The ice fell into the freezer compartment.', ru: 'Лед упал в морозильную камеру.' }
    ],
    [
        { meaning: "Separate section (abstract)", translation: "Отсек / Изолированная часть", example: { en: "He keeps his work and life in separate compartments.", ru: "Он держит работу и жизнь в разных плоскостях (не смешивает)." } }
    ]
),

createRichWord('b2_compassion', 'Compassion', '/kəmˈpæʃn/', 'кэмпэшн', 'Сострадание', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Сильное чувство сочувствия и печали по поводу чужих страданий и желание помочь.',
    '- Чувства: "Show compassion" (Проявлять сострадание)\n- Характер: "Man of compassion" (Сострадательный человек)\n- Действие: "Look with compassion" (Смотреть с состраданием)',
    [
        { en: 'The nurse treated the patients with great compassion.', ru: 'Медсестра относилась к пациентам с большим состраданием.' },
        { en: 'We should show compassion for those less fortunate than us.', ru: 'Мы должны проявлять сострадание к тем, кому повезло меньше нас.' },
        { en: 'Her heart was filled with compassion for the orphan.', ru: 'Ее сердце наполнилось состраданием к сироте.' },
        { en: 'He felt no compassion for the criminal\'s fate.', ru: 'Он не испытывал сострадания к судьбе преступника.' }
    ],
    []
),

createRichWord('b2_compost', 'Compost', '/ˈkɒmpɒst/', 'компост', 'Компост / Удобрение', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Смесь гниющих растений и пищевых отходов, используемая для улучшения качества почвы.',
    '- Сад: "Compost heap" (Компостная куча)\n- Действие: "Make compost" (Делать компост)\n- Экология: "Compost bin" (Контейнер для компоста)',
    [
        { en: 'Put the vegetable peelings in the compost bin.', ru: 'Положите овощные очистки в контейнер для компоста.' },
        { en: 'Compost is an excellent natural fertilizer for your garden.', ru: 'Компост — отличное натуральное удобрение для вашего сада.' },
        { en: 'It takes several months for the leaves to turn into compost.', ru: 'Требуется несколько месяцев, чтобы листья превратились в компост.' },
        { en: 'We use compost to help our roses grow better.', ru: 'Мы используем компост, чтобы наши розы росли лучше.' }
    ],
    [
        { meaning: "To turn into compost", translation: "Компостировать", example: { en: "You can compost paper and cardboard.", ru: "Бумагу и картон можно компостировать." } }
    ]
),

createRichWord('b2_conquer', 'Conquer', '/ˈkɒŋkə(r)/', 'конкэ', 'Завоевывать / Покорять', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Взять контроль над страной или городом с помощью военной силы; успешно преодолеть проблему.',
    '- Война: "Conquer a country" (Завоевать страну)\n- Личное: "Conquer fear" (Победить страх)\n- Спорт: "Conquer the mountain" (Покорить гору)',
    [
        { en: 'The army set out to conquer the neighbouring lands.', ru: 'Армия отправилась завоевывать соседние земли.' },
        { en: 'She finally managed to conquer her fear of spiders.', ru: 'Ей наконец удалось побороть свой страх перед пауками.' },
        { en: 'Napolean tried to conquer the whole of Europe.', ru: 'Наполеон пытался завоевать всю Европу.' },
        { en: 'Scientists are working to conquer this disease.', ru: 'Ученые работают над тем, чтобы победить эту болезнь.' }
    ],
    []
),

createRichWord('b2_condense', 'Condense', '/kənˈdens/', 'кэндэнс', 'Сгущать / Конденсировать', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Превращать газ в жидкость; делать текст короче, сохраняя смысл.',
    '- Физика: "Steam condenses" (Пар конденсируется)\n- Текст: "Condense the report" (Сократить отчет)\n- Еда: "Condensed milk" (Сгущенное молоко)',
    [
        { en: 'Water vapour condenses on cold windows to form drops.', ru: 'Водяной пар конденсируется на холодных окнах, образуя капли.' },
        { en: 'Please condense your essay into one paragraph.', ru: 'Пожалуйста, сожмите свое эссе до одного абзаца.' },
        { en: 'I love pancakes with sweet condensed milk.', ru: 'Я обожаю блины со сладким сгущенным молоком.' },
        { en: 'The long speech was condensed for the news summary.', ru: 'Длинную речь сократили для сводки новостей.' }
    ],
    []
  ),
createRichWord('b2_convene', 'Convene', '/kənˈviːn/', 'кэнвин', 'Созывать / Собраться', ProficiencyLevel.B2, 'verb', 'Low', 'Formal',
    'Организовать встречу или собраться вместе для встречи (официально).',
    '- Бизнес: "Convene a meeting" (Созвать совещание)\n- Суд: "Court convenes" (Суд собирается)\n- Политика: "Convene a conference" (Созвать конференцию)',
    [
        { en: 'The committee will convene next week to discuss the budget.', ru: 'Комитет соберется на следующей неделе, чтобы обсудить бюджет.' },
        { en: 'The Prime Minister convened an emergency cabinet meeting.', ru: 'Премьер-министр созвал экстренное заседание кабинета.' },
        { en: 'A special panel was convened to investigate the incident.', ru: 'Была созвана специальная комиссия для расследования инцидента.' },
        { en: 'We agreed to convene again in a month\'s time.', ru: 'Мы договорились собраться снова через месяц.' }
    ],
    []
),

createRichWord('b2_conversely', 'Conversely', '/ˈkɒnvɜːsli/', 'конвёсли', 'Наоборот / С другой стороны', ProficiencyLevel.B2, 'adv', 'Low', 'Formal',
    'Вводное слово, используемое для описания ситуации, противоположной только что упомянутой.',
    '- Аргумент: "And conversely" (И наоборот)\n- Логика: "Act conversely" (Действовать наоборот)\n- Связка: "Conversely, some people..." (С другой стороны, некоторые люди...)',
    [
        { en: 'Poor health is accepted as an attribute of old age. Conversely, youth is associated with health.', ru: 'Плохое здоровье считается признаком старости. И наоборот, молодость ассоциируется со здоровьем.' },
        { en: 'You can add the fluid to the powder, or, conversely, the powder to the fluid.', ru: 'Вы можете добавить жидкость в порошок, или, наоборот, порошок в жидкость.' },
        { en: 'Some people enjoy the heat; conversely, others prefer winter.', ru: 'Некоторые люди наслаждаются жарой; с другой стороны, другие предпочитают зиму.' },
        { en: 'If sales go up, we hire. Conversely, if they drop, we fire.', ru: 'Если продажи растут, мы нанимаем. И наоборот, если они падают, мы увольняем.' }
    ],
    []
),

createRichWord('b2_corpse', 'Corpse', '/kɔːps/', 'копс', 'Труп', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Мертвое тело, обычно человека (используется в криминальном или медицинском контексте).',
    '- Криминал: "Identify the corpse" (Опознать труп)\n- Медицина: "Examine the corpse" (Осмотреть труп)\n- Идиома: "Walking corpse" (Живой труп)',
    [
        { en: 'The police found a corpse in the abandoned house.', ru: 'Полиция нашла труп в заброшенном доме.' },
        { en: 'Doctors examined the corpse to determine the cause of death.', ru: 'Врачи осмотрели труп, чтобы определить причину смерти.' },
        { en: 'He looked like a walking corpse after the illness.', ru: 'После болезни он выглядел как живой труп.' },
        { en: 'The corpse was buried in an unmarked grave.', ru: 'Труп был похоронен в безымянной могиле.' }
    ],
    []
),

createRichWord('b2_cradle', 'Cradle', '/ˈkreɪdl/', 'крейдл', 'Колыбель / Баюкать', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Маленькая кроватка для младенца (обычно качающаяся); место зарождения чего-либо.',
    '- Мебель: "Rock the cradle" (Качать колыбель)\n- Метафора: "Cradle of civilization" (Колыбель цивилизации)\n- Глагол: "Cradle a baby" (Баюкать/держать бережно)',
    [
        { en: 'She gently rocked the cradle until the baby fell asleep.', ru: 'Она нежно качала колыбель, пока ребенок не заснул.' },
        { en: 'Greece is often called the cradle of Western civilization.', ru: 'Грецию часто называют колыбелью западной цивилизации.' },
        { en: 'He cradled the injured bird in his hands.', ru: 'Он бережно держал раненую птицу в руках.' },
        { en: 'She cradled her cup of coffee to warm her hands.', ru: 'Она обхватила чашку кофе, чтобы согреть руки.' }
    ],
    [
        { meaning: "From birth to death", translation: "От рождения до смерти", example: { en: "From the cradle to the grave.", ru: "От колыбели до могилы." } }
    ]
),

createRichWord('b2_cramp', 'Cramp', '/kræmp/', 'крэмп', 'Судорога / Стеснять', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Внезапная болезненная скованность в мышце; ограничение свободы или развития.',
    '- Здоровье: "Muscle cramp" (Мышечная судорога)\n- Спорт: "Leg cramp" (Судорога ноги)\n- Идиома: "Cramp my style" (Мешать мне/Стеснять меня)',
    [
        { en: 'I got a terrible cramp in my leg while swimming.', ru: 'У меня ужасно свело ногу, когда я плавал.' },
        { en: 'Writers often suffer from writer\'s cramp in their hands.', ru: 'Писатели часто страдают от писчего спазма в руках.' },
        { en: 'Tight rules will cramp the company\'s growth.', ru: 'Жесткие правила будут сдерживать рост компании.' },
        { en: 'Having my parents around really cramps my style.', ru: 'Присутствие родителей реально меня стесняет (мешает развернуться).' }
    ],
    []
),

createRichWord('b2_crane', 'Crane', '/kreɪn/', 'крейн', 'Журавль / Подъемный кран', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Высокая машина для подъема тяжестей; большая птица с длинной шеей и ногами.',
    '- Строительство: "Tower crane" (Башенный кран)\n- Птица: "White crane" (Белый журавль)\n- Глагол: "Crane your neck" (Вытягивать шею)',
    [
        { en: 'A huge crane lifted the steel beams to the top floor.', ru: 'Огромный кран поднял стальные балки на верхний этаж.' },
        { en: 'We saw a crane standing on one leg in the marsh.', ru: 'Мы видели журавля, стоящего на одной ноге на болоте.' },
        { en: 'She craned her neck to see over the crowd.', ru: 'Она вытянула шею, чтобы видеть поверх толпы.' },
        { en: 'Construction cranes dominate the city skyline.', ru: 'Строительные краны доминируют в панораме города.' }
    ],
    []
),

createRichWord('b2_crest', 'Crest', '/krest/', 'крест', 'Гребень / Вершина', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Верхняя часть волны или холма; пучок перьев на голове птицы; герб.',
    '- Природа: "Crest of a wave" (Гребень волны)\n- География: "Crest of a hill" (Вершина холма)\n- Символ: "Family crest" (Семейный герб)',
    [
        { en: 'Surfers rode on the crest of the wave.', ru: 'Серферы ехали на гребне волны.' },
        { en: 'We finally reached the crest of the mountain.', ru: 'Мы наконец достигли вершины горы.' },
        { en: 'The bird has a distinctive yellow crest on its head.', ru: 'У этой птицы есть характерный желтый хохолок на голове.' },
        { en: 'The school crest is embroidered on the uniform.', ru: 'Школьный герб вышит на форме.' }
    ],
    []
),

createRichWord('b2_cripple', 'Cripple', '/ˈkrɪpl/', 'крипл', 'Калечить / Парализовать', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Повредить чье-то тело так, что человек не может ходить; нанести серьезный ущерб системе или экономике.',
    '- Здоровье: "Crippled by arthritis" (Искалеченный артритом)\n- Экономика: "Cripple the economy" (Подорвать экономику)\n- Сущ: "A cripple" (Калека - грубо/устар.)',
    [
        { en: 'The accident crippled him for life.', ru: 'Авария сделала его калекой на всю жизнь.' },
        { en: 'High taxes threaten to cripple small businesses.', ru: 'Высокие налоги угрожают парализовать малый бизнес.' },
        { en: 'The attack crippled the ship\'s communication system.', ru: 'Атака вывела из строя систему связи корабля.' },
        { en: 'He was crippled by a fear of failure.', ru: 'Его парализовал страх неудачи.' }
    ],
    []
),

createRichWord('b2_crook', 'Crook', '/krʊk/', 'крук', 'Мошенник / Изгиб', ProficiencyLevel.B2, 'noun', 'Low', 'Informal',
    'Нечестный человек или преступник (разг.); изогнутая часть чего-либо (например, локтя).',
    '- Преступник: "Petty crook" (Мелкий жулик)\n- Тело: "Crook of the arm" (Локтевой сгиб)\n- Предмет: "Shepherd\'s crook" (Пастуший посох)',
    [
        { en: 'That salesman is a crook, don\'t buy anything from him.', ru: 'Этот продавец — жулик, ничего у него не покупай.' },
        { en: 'She held the flowers in the crook of her arm.', ru: 'Она держала цветы на сгибе локтя.' },
        { en: 'The police finally caught the crook responsible for the theft.', ru: 'Полиция наконец поймала преступника, ответственного за кражу.' },
        { en: 'By hook or by crook, I will finish this job.', ru: 'Всеми правдами и неправдами я закончу эту работу.' }
    ],
    []
),

createRichWord('b2_crouch', 'Crouch', '/kraʊtʃ/', 'крауч', 'Присесть / Сжаться', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Согнуть колени и опустить тело близко к земле (часто чтобы спрятаться).',
    '- Действие: "Crouch down" (Присесть на корточки)\n- Поза: "Crouching tiger" (Крадущийся тигр)\n- Страх: "Crouch in fear" (Сжаться от страха)',
    [
        { en: 'The soldiers crouched behind the wall to avoid fire.', ru: 'Солдаты пригнулись за стеной, чтобы избежать огня.' },
        { en: 'He crouched down to talk to the child.', ru: 'Он присел на корточки, чтобы поговорить с ребенком.' },
        { en: 'The cat was crouching in the grass, ready to jump.', ru: 'Кошка припала к земле в траве, готовая к прыжку.' },
        { en: 'We crouched in the corner until the storm passed.', ru: 'Мы сидели, сжавшись в углу, пока шторм не прошел.' }
    ],
    []
),

createRichWord('b2_crunch', 'Crunch', '/krʌntʃ/', 'кранч', 'Хруст / Хрустеть', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Издавать громкий звук при раздавливании чего-то твердого; громко жевать.',
    '- Звук: "Crunch of snow" (Хруст снега)\n- Еда: "Crunch on an apple" (Хрустеть яблоком)\n- Экономика: "Credit crunch" (Кредитный кризис)',
    [
        { en: 'The snow crunched under our feet as we walked.', ru: 'Снег хрустел у нас под ногами, пока мы шли.' },
        { en: 'She sat there crunching on a carrot.', ru: 'Она сидела там, хрустя морковкой.' },
        { en: 'The car crunched into the tree.', ru: 'Машина с хрустом врезалась в дерево.' },
        { en: 'Companies are suffering due to the credit crunch.', ru: 'Компании страдают из-за кредитного кризиса.' }
    ],
    [
        { meaning: "Critical moment", translation: "Решающий момент", example: { en: "When the crunch comes, I'll be ready.", ru: "Когда настанет решающий момент, я буду готов." } }
    ]
),

createRichWord('b2_crusade', 'Crusade', '/kruːˈseɪd/', 'крусейд', 'Крестовый поход / Кампания', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Длительная и решительная борьба за правое дело; исторические религиозные войны.',
    '- История: "The Crusades" (Крестовые походы)\n- Общество: "Crusade against drugs" (Кампания против наркотиков)\n- Действие: "Lead a crusade" (Возглавить кампанию)',
    [
        { en: 'She led a crusade against corruption in the city.', ru: 'Она возглавила кампанию борьбы с коррупцией в городе.' },
        { en: 'Historically, the Crusades were wars between Christians and Muslims.', ru: 'Исторически Крестовые походы были войнами между христианами и мусульманами.' },
        { en: 'He is on a crusade to save the local library.', ru: 'Он ведет борьбу за спасение местной библиотеки.' },
        { en: 'Newspapers joined the crusade for better schools.', ru: 'Газеты присоединились к кампании за улучшение школ.' }
    ],
    []
),

createRichWord('b2_curator', 'Curator', '/kjʊˈreɪtə(r)/', 'кьюрейтэ', 'Куратор / Хранитель музея', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Человек, отвечающий за музей, выставку или коллекцию.',
    '- Профессия: "Museum curator" (Куратор музея)\n- Искусство: "Assistant curator" (Помощник куратора)\n- Задача: "Curator of the exhibition" (Куратор выставки)',
    [
        { en: 'The curator explained the history of the painting.', ru: 'Куратор объяснил историю этой картины.' },
        { en: 'She works as a curator at the National Gallery.', ru: 'Она работает хранителем в Национальной галерее.' },
        { en: 'The museum curator is responsible for acquiring new art.', ru: 'Куратор музея отвечает за приобретение новых предметов искусства.' },
        { en: 'He was appointed curator of the rare books collection.', ru: 'Его назначили хранителем коллекции редких книг.' }
    ],
    []
),

createRichWord('b2_curb', 'Curb', '/kɜːb/', 'кёб', 'Сдерживать / Бордюр', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Контролировать или ограничивать что-то нежелательное; край тротуара (сущ.).',
    '- Действие: "Curb spending" (Ограничить расходы)\n- Эмоции: "Curb your anger" (Сдерживать гнев)\n- Улица: "Park by the curb" (Парковаться у бордюра)',
    [
        { en: 'You need to curb your enthusiasm a little bit.', ru: 'Тебе нужно немного умерить свой энтузиазм.' },
        { en: 'The government took measures to curb inflation.', ru: 'Правительство приняло меры для сдерживания инфляции.' },
        { en: 'He tripped over the curb and fell into the street.', ru: 'Он споткнулся о бордюр и упал на дорогу.' },
        { en: 'Please try to curb your dog from barking.', ru: 'Пожалуйста, постарайтесь удержать собаку от лая.' }
    ],
    []
),

createRichWord('b2_cylinder', 'Cylinder', '/ˈsɪlɪndə(r)/', 'силиндэ', 'Цилиндр', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Геометрическая форма с прямыми сторонами и круглыми концами; деталь двигателя.',
    '- Форма: "Gas cylinder" (Газовый баллон)\n- Двигатель: "Four-cylinder engine" (Четырехцилиндровый двигатель)\n- Предмет: "Measuring cylinder" (Мерный цилиндр)',
    [
        { en: 'The divers carry oxygen in a metal cylinder.', ru: 'Дайверы носят кислород в металлическом баллоне.' },
        { en: 'The engine is firing on only three cylinders.', ru: 'Двигатель работает только на трех цилиндрах.' },
        { en: 'Calculate the volume of the cylinder.', ru: 'Рассчитайте объем цилиндра.' },
        { en: 'Cookies were packed in a tall cardboard cylinder.', ru: 'Печенье было упаковано в высокий картонный цилиндр.' }
    ],
    []
),

createRichWord('b2_dangle', 'Dangle', '/ˈdæŋɡl/', 'дэнгл', 'Свисать / Болтать (ногами)', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Висеть или качаться свободно; держать что-то так, чтобы оно висело.',
    '- Поза: "Dangle legs" (Болтать ногами)\n- Предмет: "Dangle from a wire" (Свисать с провода)\n- Искушение: "Dangle a carrot" (Манить морковкой/обещанием)',
    [
        { en: 'A loose wire was dangling from the ceiling.', ru: 'С потолка свисал незакрепленный провод.' },
        { en: 'They sat on the wall, dangling their legs.', ru: 'Они сидели на стене, болтая ногами.' },
        { en: 'He dangled the keys in front of the baby.', ru: 'Он покачивал ключами перед ребенком.' },
        { en: 'The company dangled a big bonus to keep him.', ru: 'Компания поманила его большим бонусом, чтобы удержать.' }
    ],
    []
),

createRichWord('b2_dart', 'Dart', '/dɑːt/', 'дат', 'Дротик / Метнуться', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Маленькая острая стрела для игры; быстрое внезапное движение.',
    '- Игра: "Play darts" (Играть в дартс)\n- Оружие: "Tranquilizer dart" (Дротик с транквилизатором)\n- Глагол: "Dart across" (Переметнуться/Пронестись)',
    [
        { en: 'We played darts at the pub last night.', ru: 'Вчера вечером мы играли в дартс в пабе.' },
        { en: 'A rabbit darted across the road in front of us.', ru: 'Кролик перебежал дорогу прямо перед нами.' },
        { en: 'She darted a quick look at the clock.', ru: 'Она бросила быстрый взгляд на часы.' },
        { en: 'The vet used a dart to put the lion to sleep.', ru: 'Ветеринар использовал дротик, чтобы усыпить льва.' }
    ],
    []
),

createRichWord('b2_dazzle', 'Dazzle', '/ˈdæzl/', 'дэзл', 'Ослеплять / Поражать', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Ослепить ярким светом; произвести сильное впечатление чьим-то мастерством или красотой.',
    '- Свет: "Dazzled by the sun" (Ослепленный солнцем)\n- Впечатление: "Dazzle the audience" (Поразить публику)\n- Качество: "Dazzling smile" (Ослепительная улыбка)',
    [
        { en: 'I was dazzled by the bright headlights of the car.', ru: 'Меня ослепили яркие фары автомобиля.' },
        { en: 'Her performance dazzled the judges and the audience.', ru: 'Ее выступление поразило судей и зрителей.' },
        { en: 'He has a dazzling career ahead of him.', ru: 'Его ждет блестящая карьера.' },
        { en: 'The diamond ring dazzled in the light.', ru: 'Бриллиантовое кольцо сверкало на свету.' }
    ],
    []
),

createRichWord('b2_debris', 'Debris', '/ˈdeɪbriː/', 'дэйбри', 'Обломки / Мусор', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Разбитые или разбросанные куски чего-либо (после взрыва, аварии, шторма).',
    '- Катастрофа: "Space debris" (Космический мусор)\n- Уборка: "Clear the debris" (Расчистить завалы)\n- Здание: "Falling debris" (Падающие обломки)',
    [
        { en: 'Emergency teams searched through the debris for survivors.', ru: 'Спасательные команды обыскивали завалы в поисках выживших.' },
        { en: 'The beach was covered in debris after the storm.', ru: 'После шторма пляж был покрыт мусором.' },
        { en: 'Falling debris from the building injured two people.', ru: 'Падающие обломки здания ранили двух человек.' },
        { en: 'Space debris is becoming a problem for satellites.', ru: 'Космический мусор становится проблемой для спутников.' }
    ],
    []
),

createRichWord('b2_deceased', 'Deceased', '/dɪˈsiːst/', 'дисист', 'Умерший / Покойный', ProficiencyLevel.B2, 'adj', 'Low', 'Formal',
    'Официальное или вежливое слово для обозначения умершего человека.',
    '- Документы: "The deceased" (Покойный - сущ.)\n- Семья: "Deceased parents" (Умершие родители)\n- Право: "Estate of the deceased" (Имущество покойного)',
    [
        { en: 'The family of the deceased requested privacy.', ru: 'Семья покойного попросила о конфиденциальности.' },
        { en: 'Her deceased husband was a famous writer.', ru: 'Ее покойный муж был известным писателем.' },
        { en: 'We are gathered here to remember the deceased.', ru: 'Мы собрались здесь, чтобы почтить память усопшего.' },
        { en: 'The lawyer read the will of the deceased.', ru: 'Адвокат зачитал завещание покойного.' }
    ],
    []
),

createRichWord('b2_default', 'Default', '/dɪˈfɔːlt/', 'дифолт', 'По умолчанию / Дефолт', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Стандартная настройка (компьютер); невыполнение обязательств по выплате долга.',
    '- Компьютер: "Default settings" (Настройки по умолчанию)\n- Финансы: "Default on a loan" (Невыплата кредита)\n- Выбор: "By default" (По умолчанию/автоматически)',
    [
        { en: 'The computer is set to English by default.', ru: 'Компьютер настроен на английский язык по умолчанию.' },
        { en: 'If you default on your mortgage, you may lose your home.', ru: 'Если вы допустите просрочку по ипотеке, вы можете потерять дом.' },
        { en: 'I became the leader by default because no one else wanted to.', ru: 'Я стал лидером автоматически, потому что никто больше не хотел.' },
        { en: 'The country is at risk of sovereign default.', ru: 'Страна находится под угрозой суверенного дефолта.' }
    ],
    []
),

createRichWord('b2_definitive', 'Definitive', '/dɪˈfɪnətɪv/', 'дифинитив', 'Окончательный / Авторитетный', ProficiencyLevel.B2, 'adj', 'Medium', 'Formal',
    'Не подлежащий изменению; считающийся лучшим и полным в своем роде.',
    '- Решение: "Definitive answer" (Окончательный ответ)\n- Книга: "Definitive guide" (Полное руководство)\n- Доказательство: "Definitive proof" (Окончательное доказательство)',
    [
        { en: 'We need a definitive answer by tomorrow.', ru: 'Нам нужен окончательный ответ к завтрашнему дню.' },
        { en: 'This book is the definitive biography of Einstein.', ru: 'Эта книга — самая полная биография Эйнштейна.' },
        { en: 'There is no definitive proof of his involvement.', ru: 'Нет окончательных доказательств его причастности.' },
        { en: 'The definitive version of the movie includes extra scenes.', ru: 'Окончательная версия фильма включает дополнительные сцены.' }
    ],
    []
),

createRichWord('b2_degrade', 'Degrade', '/dɪˈɡreɪd/', 'дигрейд', 'Деградировать / Унижать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Ухудшать качество чего-либо; относиться к кому-то без уважения; разлагаться (химия).',
    '- Отношение: "Degrade women" (Унижать женщин)\n- Качество: "Degrade the environment" (Ухудшать окружающую среду)\n- Химия: "Biodegradable" (Биоразлагаемый)',
    [
        { en: 'Pornography often degrades women.', ru: 'Порнография часто унижает женщин.' },
        { en: 'The plastic will not degrade for hundreds of years.', ru: 'Пластик не будет разлагаться сотни лет.' },
        { en: 'Pollution has degraded the air quality in the city.', ru: 'Загрязнение ухудшило качество воздуха в городе.' },
        { en: 'Don\'t degrade yourself by begging for money.', ru: 'Не унижайся, выпрашивая деньги.' }
    ],
    []
),

createRichWord('b2_delta', 'Delta', '/ˈdeltə/', 'дэлтэ', 'Дельта', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Участок земли в форме треугольника, где река разделяется перед впадением в море.',
    '- География: "Nile Delta" (Дельта Нила)\n- Форма: "Delta wing" (Дельтавидное крыло)\n- Буква: "Alpha, Beta, Delta" (Альфа, Бета, Дельта)',
    [
        { en: 'The Nile Delta is a very fertile region.', ru: 'Дельта Нила — очень плодородный регион.' },
        { en: 'Rice is grown in the river delta.', ru: 'В дельте реки выращивают рис.' },
        { en: 'The plane has a distinctive delta wing shape.', ru: 'У самолета характерная форма треугольного крыла.' },
        { en: 'Sediment builds up to form a delta.', ru: 'Осадочные породы накапливаются, образуя дельту.' }
    ],
    []
),

createRichWord('b2_denounce', 'Denounce', '/dɪˈnaʊns/', 'динаунс', 'Осуждать / Обличать', ProficiencyLevel.B2, 'verb', 'Low', 'Formal',
    'Публично заявлять, что что-то является неправильным или злым; доносить на кого-то.',
    '- Политика: "Denounce the violence" (Осудить насилие)\n- Предательство: "Denounce as a spy" (Обличить как шпиона)\n- Речь: "Publicly denounce" (Публично осудить)',
    [
        { en: 'The president denounced the terrorist attack.', ru: 'Президент осудил террористическую атаку.' },
        { en: 'She was denounced to the secret police by her neighbour.', ru: 'Сосед донес на нее в тайную полицию.' },
        { en: 'Leaders gathered to denounce racism and hatred.', ru: 'Лидеры собрались, чтобы осудить расизм и ненависть.' },
        { en: 'He denounced the treaty as a betrayal of the country.', ru: 'Он осудил этот договор как предательство страны.' }
    ],
    []
),

createRichWord('b2_dependency', 'Dependency', '/dɪˈpendənsi/', 'дипэндэнси', 'Зависимость / Иждивение', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Состояние зависимости от чего-то (наркотики, помощь); территория, контролируемая другой страной.',
    '- Наркотики: "Drug dependency" (Наркозависимость)\n- Финансы: "Economic dependency" (Экономическая зависимость)\n- Политика: "Crown dependency" (Коронное владение)',
    [
        { en: 'He is being treated for alcohol dependency.', ru: 'Он проходит лечение от алкогольной зависимости.' },
        { en: 'The country needs to reduce its dependency on foreign oil.', ru: 'Стране необходимо снизить зависимость от иностранной нефти.' },
        { en: 'Gibraltar is a British overseas territory, not a dependency.', ru: 'Гибралтар — это британская заморская территория, а не зависимая территория.' },
        { en: 'Long-term welfare creates a culture of dependency.', ru: 'Длительное социальное пособие создает культуру иждивенчества.' }
    ],
    []
),

createRichWord('b2_depot', 'Depot', '/ˈdepəʊ/', 'дэпэу', 'Депо / Склад', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Место для хранения товаров или транспортных средств (автобусов, поездов).',
    '- Транспорт: "Bus depot" (Автобусный парк)\n- Военные: "Arms depot" (Склад оружия)\n- Торговля: "Fuel depot" (Топливное хранилище)',
    [
        { en: 'The buses return to the depot at night.', ru: 'Автобусы возвращаются в депо ночью.' },
        { en: 'Supplies were stored in a large supply depot.', ru: 'Припасы хранились на большом складе снабжения.' },
        { en: 'The train stopped at the maintenance depot for repairs.', ru: 'Поезд остановился в ремонтном депо для починки.' },
        { en: 'My grandfather worked at the railway depot.', ru: 'Мой дедушка работал в железнодорожном депо.' }
    ],
    []
),

createRichWord('b2_descent', 'Descent', '/dɪˈsent/', 'дисэнт', 'Спуск / Происхождение', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Действие по движению вниз; происхождение человека (национальность/предки).',
    '- Движение: "Steep descent" (Крутой спуск)\n- Самолет: "Begin descent" (Начать снижение)\n- Семья: "African descent" (Африканское происхождение)',
    [
        { en: 'The plane began its descent into London.', ru: 'Самолет начал снижение к Лондону.' },
        { en: 'She is of French and German descent.', ru: 'Она французского и немецкого происхождения.' },
        { en: 'The descent down the mountain was dangerous.', ru: 'Спуск с горы был опасным.' },
        { en: 'His rapid descent into madness was frightening.', ru: 'Его стремительное погружение в безумие пугало.' }
    ],
    []
),

createRichWord('b2_detention', 'Detention', '/dɪˈtenʃn/', 'дитэншн', 'Задержание / Оставление после уроков', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Арест или содержание под стражей; наказание в школе, когда ученик остается после уроков.',
    '- Полиция: "Police detention" (Полицейское задержание)\n- Школа: "In detention" (Оставленный после уроков)\n- Центр: "Detention centre" (СИЗО/Центр временного содержания)',
    [
        { en: 'He was held in detention for questioning.', ru: 'Его держали под стражей для допроса.' },
        { en: 'The teacher gave him a detention for being late.', ru: 'Учитель оставил его после уроков за опоздание.' },
        { en: 'Immigrants were kept in a detention centre.', ru: 'Иммигранты содержались в центре временного пребывания.' },
        { en: 'Detention without trial is a violation of human rights.', ru: 'Задержание без суда является нарушением прав человека.' }
    ],
    []
),

createRichWord('b2_deviate', 'Deviate', '/ˈdiːvieɪt/', 'дивиейт', 'Отклоняться', ProficiencyLevel.B2, 'verb', 'Low', 'Formal',
    'Делать что-то отличное от того, что является обычным или ожидаемым; менять курс.',
    '- Норма: "Deviate from the norm" (Отклоняться от нормы)\n- План: "Deviate from the plan" (Отклоняться от плана)\n- Курс: "Deviate course" (Сбиться с курса)',
    [
        { en: 'Do not deviate from the instructions given.', ru: 'Не отклоняйтесь от данных инструкций.' },
        { en: 'The bus had to deviate from its usual route.', ru: 'Автобусу пришлось отклониться от своего обычного маршрута.' },
        { en: 'He never deviates from his daily routine.', ru: 'Он никогда не отступает от своего распорядка дня.' },
        { en: 'The investigation deviated into unrelated matters.', ru: 'Расследование ушло в сторону, к несвязанным вопросам.' }
    ],
    []
),

createRichWord('b2_diagnostic', 'Diagnostic', '/ˌdaɪəɡˈnɒstɪk/', 'дайэгностик', 'Диагностический', ProficiencyLevel.B2, 'adj', 'Low', 'Formal',
    'Связанный с определением болезни или проблемы.',
    '- Медицина: "Diagnostic test" (Диагностический тест)\n- Техника: "Diagnostic tool" (Инструмент диагностики)\n- Результат: "Diagnostic value" (Диагностическая ценность)',
    [
        { en: 'Doctors performed several diagnostic tests on the patient.', ru: 'Врачи провели несколько диагностических тестов пациенту.' },
        { en: 'The mechanic used a diagnostic computer to check the car.', ru: 'Механик использовал диагностический компьютер для проверки машины.' },
        { en: 'Early diagnostic screening can save lives.', ru: 'Раннее диагностическое обследование может спасти жизни.' },
        { en: 'Symptom overlap makes diagnostic accuracy difficult.', ru: 'Совпадение симптомов затрудняет точность диагностики.' }
    ],
    []
),

createRichWord('b2_dilute', 'Dilute', '/daɪˈluːt/', 'дайлют', 'Разбавлять', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Делать жидкость слабее, добавляя воду; делать качество или убеждение слабее.',
    '- Жидкость: "Dilute with water" (Разбавить водой)\n- Химия: "Dilute acid" (Разбавленная кислота)\n- Переносное: "Dilute the effect" (Ослабить эффект)',
    [
        { en: 'Dilute the juice with some water before drinking.', ru: 'Разбавь сок водой перед питьем.' },
        { en: 'The heavy rain diluted the saltiness of the lake.', ru: 'Сильный дождь разбавил соленость озера.' },
        { en: 'Too many cooks usually dilute the quality of the broth.', ru: 'Слишком много поваров обычно портят бульон (разбавляют качество).' },
        { en: 'They issued new shares, which diluted the stock value.', ru: 'Они выпустили новые акции, что размыло их стоимость.' }
    ],
    []
  ),
createRichWord('b2_buoy', 'Buoy', '/bɔɪ/', 'бой', 'Буй / Поддерживать', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Плавающий объект, привязанный ко дну, чтобы отмечать безопасные или опасные места; (гл.) поддерживать на плаву или морально.',
    '- Море: "Life buoy" (Спасательный круг)\n- Действие: "Buoyed by hope" (Поддерживаемый надеждой)\n- Навигация: "Marker buoy" (Маркировочный буй)',
    [
        { en: 'The red buoy marks the entrance to the harbour.', ru: 'Красный буй отмечает вход в гавань.' },
        { en: 'She was buoyed up by the support of her friends.', ru: 'Её поддерживала (вдохновляла) поддержка друзей.' },
        { en: 'Keep the boat to the left of the buoy.', ru: 'Держите лодку левее буя.' },
        { en: 'High profits buoyed the company\'s stock price.', ru: 'Высокая прибыль поддержала цену акций компании.' }
    ],
    []
),

createRichWord('b2_burrow', 'Burrow', '/ˈbʌrəʊ/', 'барэу', 'Нора / Рыть нору', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Отверстие в земле, вырытое животным для проживания; рыть или прятаться.',
    '- Животное: "Rabbit burrow" (Кроличья нора)\n- Действие: "Burrow into bed" (Зарыться в постель)\n- Глагол: "Burrow underground" (Рыть под землей)',
    [
        { en: 'The rabbit ran into its burrow to hide.', ru: 'Кролик побежал в свою нору, чтобы спрятаться.' },
        { en: 'She burrowed her face into the pillow.', ru: 'Она зарылась лицом в подушку.' },
        { en: 'Moles burrow tunnels under the lawn.', ru: 'Кроты роют туннели под газоном.' },
        { en: 'He burrowed through the pile of papers on his desk.', ru: 'Он рылся в кипе бумаг на своем столе.' }
    ],
    []
),

createRichWord('b2_bustle', 'Bustle', '/ˈbʌsl/', 'басл', 'Суета / Суетиться', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Шумная, энергичная активность; двигаться быстро и энергично.',
    '- Город: "Hustle and bustle" (Шум и суета)\n- Действие: "Bustle about" (Суетиться вокруг)\n- Место: "Bustling market" (Шумный рынок)',
    [
        { en: 'I love the hustle and bustle of the big city.', ru: 'Я обожаю шум и суету большого города.' },
        { en: 'She bustled around the kitchen preparing dinner.', ru: 'Она суетилась на кухне, готовя ужин.' },
        { en: 'The station was bustling with commuters.', ru: 'Станция была переполнена (шумела) пассажирами.' },
        { en: 'He enjoyed the bustle of the morning market.', ru: 'Ему нравилась суета утреннего рынка.' }
    ],
    []
),

createRichWord('b2_cadet', 'Cadet', '/kəˈdet/', 'кэдет', 'Кадет / Курсант', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Молодой человек, проходящий обучение в вооруженных силах или полиции.',
    '- Армия: "Army cadet" (Армейский кадет)\n- Полиция: "Police cadet" (Курсант полиции)\n- Обучение: "Cadet school" (Кадетское училище)',
    [
        { en: 'He joined the air force as a cadet.', ru: 'Он поступил в военно-воздушные силы курсантом.' },
        { en: 'The cadets were marching on the parade ground.', ru: 'Кадеты маршировали на плацу.' },
        { en: 'Officer cadets undergo rigorous training.', ru: 'Офицеры-курсанты проходят суровую подготовку.' },
        { en: 'My younger brother is a space cadet (dreamer).', ru: 'Мой младший брат — мечтатель (витает в облаках).' }
    ],
    []
),

createRichWord('b2_canopy', 'Canopy', '/ˈkænəpi/', 'кэнэпи', 'Навес / Полог (леса)', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Покрытие (из ткани), подвешенное над кроватью или троном; верхний слой ветвей деревьев в лесу.',
    '- Лес: "Forest canopy" (Лесной полог)\n- Кровать: "Bed canopy" (Балдахин над кроватью)\n- Самолет: "Glass canopy" (Фонарь кабины пилота)',
    [
        { en: 'The trees formed a thick canopy over the road.', ru: 'Деревья образовали густой навес над дорогой.' },
        { en: 'We sat under the canopy to escape the sun.', ru: 'Мы сидели под навесом, чтобы укрыться от солнца.' },
        { en: 'The rainforest canopy is home to many birds.', ru: 'Полог тропического леса является домом для многих птиц.' },
        { en: 'The pilot ejected the canopy before bailing out.', ru: 'Пилот сбросил фонарь кабины перед катапультированием.' }
    ],
    []
),

createRichWord('b2_capitalise', 'Capitalise', '/kəˈpɪtəlaɪz/', 'кэпитзлайз', 'Извлекать выгоду / Писать с большой буквы', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Использовать ситуацию для получения преимущества (часто с "on"); писать с заглавной буквы.',
    '- Выгода: "Capitalise on mistakes" (Воспользоваться ошибками)\n- Текст: "Capitalise the title" (Написать заголовок заглавными)\n- Финансы: "Market capitalisation" (Рыночная капитализация)',
    [
        { en: 'We need to capitalise on our opponent\'s weakness.', ru: 'Нам нужно воспользоваться слабостью нашего противника.' },
        { en: 'Please capitalise the first letter of each sentence.', ru: 'Пожалуйста, пишите первую букву каждого предложения заглавной.' },
        { en: 'The company failed to capitalise on the new trend.', ru: 'Компания не смогла извлечь выгоду из нового тренда.' },
        { en: 'Names of countries should always be capitalised.', ru: 'Названия стран всегда должны писаться с большой буквы.' }
    ],
    []
),

createRichWord('b2_cardiac', 'Cardiac', '/ˈkɑːdiæk/', 'кадиэк', 'Сердечный', ProficiencyLevel.B2, 'adj', 'Low', 'Formal',
    'Связанный с сердцем или сердечными заболеваниями.',
    '- Медицина: "Cardiac arrest" (Остановка сердца)\n- Больница: "Cardiac unit" (Кардиологическое отделение)\n- Операция: "Cardiac surgery" (Операция на сердце)',
    [
        { en: 'He suffered a cardiac arrest and was rushed to hospital.', ru: 'У него случилась остановка сердца, и его срочно доставили в больницу.' },
        { en: 'Regular exercise improves cardiac health.', ru: 'Регулярные упражнения улучшают здоровье сердца.' },
        { en: 'The nurse works in the cardiac intensive care unit.', ru: 'Медсестра работает в кардиологической реанимации.' },
        { en: 'Cardiac muscles work tirelessly throughout your life.', ru: 'Сердечные мышцы работают без устали на протяжении всей вашей жизни.' }
    ],
    []
),

createRichWord('b2_caress', 'Caress', '/kəˈres/', 'кэрес', 'Ласкать / Гладить', ProficiencyLevel.B2, 'verb', 'Low', 'Literary',
    'Трогать или гладить кого-то нежно и с любовью.',
    '- Жест: "Gentle caress" (Нежная ласка - сущ.)\n- Ветер: "Breeze caressed" (Ветерок ласкал)\n- Действие: "Caress the face" (Гладить по лицу)',
    [
        { en: 'He gently caressed her cheek with his hand.', ru: 'Он нежно погладил её щеку рукой.' },
        { en: 'The warm sun caressed our skin on the beach.', ru: 'Теплое солнце ласкало нашу кожу на пляже.' },
        { en: 'She gave the dog a loving caress.', ru: 'Она ласково погладила собаку.' },
        { en: 'Soft music caressed their ears.', ru: 'Мягкая музыка ласкала их слух.' }
    ],
    []
),

createRichWord('b2_cartel', 'Cartel', '/kɑːˈtel/', 'кател', 'Картель', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Группа компаний или стран, которые соглашаются контролировать цены; преступная группировка (наркокартель).',
    '- Преступность: "Drug cartel" (Наркокартель)\n- Бизнес: "Oil cartel" (Нефтяной картель)\n- Действие: "Form a cartel" (Создать картель)',
    [
        { en: 'The oil cartel decided to cut production to raise prices.', ru: 'Нефтяной картель решил сократить добычу, чтобы поднять цены.' },
        { en: 'Police are fighting a war against the drug cartels.', ru: 'Полиция ведет войну против наркокартелей.' },
        { en: 'Illegal cartels control the market in this region.', ru: 'Нелегальные картели контролируют рынок в этом регионе.' },
        { en: 'Price-fixing by a cartel is illegal.', ru: 'Фиксация цен картелем незаконна.' }
    ],
    []
),

createRichWord('b2_cartridge', 'Cartridge', '/ˈkɑːtrɪdʒ/', 'катридж', 'Картридж / Патрон', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Сменный контейнер с чернилами, пленкой и т.д.; металлическая трубка с пулей и порохом.',
    '- Принтер: "Ink cartridge" (Чернильный картридж)\n- Оружие: "Shotgun cartridge" (Патрон для дробовика)\n- Игра: "Game cartridge" (Игровой картридж)',
    [
        { en: 'I need to replace the black ink cartridge in the printer.', ru: 'Мне нужно заменить черный картридж в принтере.' },
        { en: 'The hunter loaded a cartridge into his rifle.', ru: 'Охотник зарядил патрон в винтовку.' },
        { en: 'Old video game consoles used plastic cartridges.', ru: 'Старые игровые приставки использовали пластиковые картриджи.' },
        { en: 'We found empty cartridges on the floor after the shooting.', ru: 'Мы нашли пустые гильзы на полу после стрельбы.' }
    ],
    []
),

createRichWord('b2_cascade', 'Cascade', '/kæˈskeɪd/', 'кэскейд', 'Каскад / Водопад', ProficiencyLevel.B2, 'noun', 'Low', 'Literary',
    'Небольшой водопад; что-то падающее или свисающее волнами (волосы, ткань); последовательность событий.',
    '- Вода: "Cascade of water" (Каскад воды)\n- Волосы: "Cascade of hair" (Водопад волос)\n- Эффект: "Cascade effect" (Каскадный эффект)',
    [
        { en: 'Water cascaded down the rocks into the pool below.', ru: 'Вода каскадом падала со скал в бассейн внизу.' },
        { en: 'She had a cascade of golden curls.', ru: 'У нее был водопад золотистых локонов.' },
        { en: 'The error caused a cascade of system failures.', ru: 'Ошибка вызвала каскад системных сбоев.' },
        { en: 'Information cascaded down from management to staff.', ru: 'Информация спускалась каскадом от руководства к персоналу.' }
    ],
    []
),

createRichWord('b2_cavalry', 'Cavalry', '/ˈkævlri/', 'кэвлри', 'Кавалерия', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Солдаты, сражающиеся верхом на лошадях (в прошлом) или на бронетехнике (сейчас).',
    '- История: "Charge of the cavalry" (Атака кавалерии)\n- Армия: "Armoured cavalry" (Бронетанковая кавалерия)\n- Идиома: "Send in the cavalry" (Послать подмогу)',
    [
        { en: 'The cavalry charged across the field with swords drawn.', ru: 'Кавалерия помчалась через поле с обнаженными мечами.' },
        { en: 'We need to wait for the cavalry to arrive.', ru: 'Нам нужно подождать прибытия подкрепления (кавалерии).' },
        { en: 'Modern cavalry units use tanks and helicopters.', ru: 'Современные кавалерийские части используют танки и вертолеты.' },
        { en: 'The sound of the cavalry trumpets scared the enemy.', ru: 'Звук кавалерийских труб напугал врага.' }
    ],
    []
),

createRichWord('b2_cavern', 'Cavern', '/ˈkævən/', 'кэвэн', 'Пещера (большая)', ProficiencyLevel.B2, 'noun', 'Low', 'Literary',
    'Большая, глубокая и темная пещера.',
    '- Место: "Underground cavern" (Подземная пещера)\n- Размер: "Vast cavern" (Огромная пещера)\n- Прилагательное: "Cavernous room" (Похожая на пещеру комната)',
    [
        { en: 'The explorers descended into the dark cavern.', ru: 'Исследователи спустились в темную пещеру.' },
        { en: 'Stalactites hung from the roof of the cavern.', ru: 'Сталактиты свисали с потолка пещеры.' },
        { en: 'The concert hall felt like a vast, cold cavern.', ru: 'Концертный зал казался огромной холодной пещерой.' },
        { en: 'Echoes bounced around the empty cavern.', ru: 'Эхо отражалось в пустой пещере.' }
    ],
    []
),

createRichWord('b2_cavity', 'Cavity', '/ˈkævəti/', 'кэвэти', 'Полость / Дырка (в зубе)', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Пустое пространство внутри чего-то твердого; разрушение в зубе (кариес).',
    '- Зубы: "Have a cavity" (Иметь дырку в зубе)\n- Тело: "Chest cavity" (Грудная полость)\n- Строительство: "Cavity wall" (Полая стена)',
    [
        { en: 'The dentist found a cavity in my back tooth.', ru: 'Стоматолог нашел дырку в моем заднем зубе.' },
        { en: 'Birds often nest in the cavity of an old tree.', ru: 'Птицы часто вьют гнезда в дуплах старых деревьев.' },
        { en: 'The organs are located within the abdominal cavity.', ru: 'Органы расположены в брюшной полости.' },
        { en: 'Insulation was pumped into the wall cavity.', ru: 'Изоляция была закачана в полость стены.' }
    ],
    []
),

createRichWord('b2_chaired', 'Chaired', '/tʃeəd/', 'чеэд', 'Возглавлял / Вёл (собрание)', ProficiencyLevel.B2, 'verb', 'Medium', 'Formal',
    'Прошедшее время от "Chair": вести встречу или комитет (быть председателем).',
    '- Встреча: "Chaired the meeting" (Вел собрание)\n- Роль: "Chaired by" (Под председательством)\n- Организация: "Chaired the panel" (Возглавлял комиссию)',
    [
        { en: 'She chaired the meeting efficiently and kept it on time.', ru: 'Она эффективно вела собрание и уложилась в график.' },
        { en: 'The committee was chaired by a senior professor.', ru: 'Комитет возглавлял старший профессор.' },
        { en: 'He has chaired the board of directors for five years.', ru: 'Он возглавляет совет директоров уже пять лет.' },
        { en: 'Who chaired the discussion yesterday?', ru: 'Кто вел дискуссию вчера?' }
    ],
    []
),

createRichWord('b2_chaotic', 'Chaotic', '/keɪˈɒtɪk/', 'кэйатик', 'Хаотичный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Находящийся в состоянии полного беспорядка и путаницы.',
    '- Ситуация: "Chaotic situation" (Хаотичная ситуация)\n- Движение: "Chaotic traffic" (Хаотичное движение)\n- Жизнь: "Chaotic lifestyle" (Беспорядочный образ жизни)',
    [
        { en: 'The traffic in the city centre was absolutely chaotic.', ru: 'Движение в центре города было абсолютно хаотичным.' },
        { en: 'After the explosion, the scene was chaotic.', ru: 'После взрыва на месте царил хаос.' },
        { en: 'He leads a chaotic life with no fixed schedule.', ru: 'Он ведет беспорядочную жизнь без фиксированного расписания.' },
        { en: 'The meeting was chaotic because everyone shouted at once.', ru: 'Собрание было хаотичным, потому что все кричали одновременно.' }
    ],
    []
),

createRichWord('b2_chaplain', 'Chaplain', '/ˈtʃæplɪn/', 'чэплин', 'Капеллан / Священник', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Священник, работающий в нерелигиозной организации (армия, больница, тюрьма, школа).',
    '- Армия: "Army chaplain" (Армейский капеллан)\n- Больница: "Hospital chaplain" (Больничный священник)\n- Тюрьма: "Prison chaplain" (Тюремный священник)',
    [
        { en: 'The hospital chaplain visited the sick patients.', ru: 'Больничный священник посетил больных пациентов.' },
        { en: 'Soldiers often talk to the chaplain for comfort.', ru: 'Солдаты часто говорят с капелланом ради утешения.' },
        { en: 'She works as a chaplain at the university.', ru: 'Она работает капелланом в университете.' },
        { en: 'The chaplain led a prayer before the battle.', ru: 'Капеллан прочел молитву перед битвой.' }
    ],
    []
),

createRichWord('b2_charisma', 'Charisma', '/kəˈrɪzmə/', 'кэлизмэ', 'Харизма', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Сильная личная привлекательность или обаяние, которое притягивает других людей (часто о лидерах).',
    '- Личность: "Personal charisma" (Личная харизма)\n- Политика: "Leader with charisma" (Лидер с харизмой)\n- Прилагательное: "Lack charisma" (Не иметь харизмы)',
    [
        { en: 'The politician lacks the charisma to win the election.', ru: 'Политику не хватает харизмы, чтобы выиграть выборы.' },
        { en: 'He has a natural charisma that makes people listen.', ru: 'У него природная харизма, которая заставляет людей слушать.' },
        { en: 'Charisma is often more important than policy.', ru: 'Харизма часто важнее политики.' },
        { en: 'Her charisma on stage captivated the audience.', ru: 'Её харизма на сцене пленила публику.' }
    ],
    []
),

createRichWord('b2_cherish', 'Cherish', '/ˈtʃerɪʃ/', 'чериш', 'Лелеять / Бережно хранить', ProficiencyLevel.B2, 'verb', 'Low', 'Literary',
    'Любить и защищать кого-то; хранить воспоминание или надежду в мыслях.',
    '- Любовь: "Cherish a child" (Лелеять ребенка)\n- Память: "Cherish the memory" (Бережно хранить память)\n- Клятва: "To love and to cherish" (Любить и лелеять)',
    [
        { en: 'I will always cherish the memories of our trip.', ru: 'Я всегда буду бережно хранить воспоминания о нашей поездке.' },
        { en: 'She cherishes her old family photographs.', ru: 'Она дорожит своими старыми семейными фотографиями.' },
        { en: 'He cherished the hope that she would return.', ru: 'Он лелеял надежду, что она вернется.' },
        { en: 'A mother cherishes her children above all else.', ru: 'Мать лелеет своих детей превыше всего.' }
    ],
    []
),

createRichWord('b2_choreograph', 'Choreograph', '/ˈkɒriəɡrɑːf/', 'кориэграф', 'Ставить танец', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Придумывать и планировать движения для танца или выступления.',
    '- Танец: "Choreograph a ballet" (Поставить балет)\n- Событие: "Carefully choreographed" (Тщательно спланированный)\n- Профессия: "Choreographer" (Хореограф)',
    [
        { en: 'She was hired to choreograph the new music video.', ru: 'Её наняли поставить танец для нового музыкального клипа.' },
        { en: 'The fight scenes in the movie were carefully choreographed.', ru: 'Сцены драк в фильме были тщательно поставлены.' },
        { en: 'He choreographed the opening ceremony of the games.', ru: 'Он ставил хореографию церемонии открытия игр.' },
        { en: 'The dancers learned the steps choreographed by the master.', ru: 'Танцоры выучили шаги, поставленные мастером.' }
    ],
    []
),

createRichWord('b2_chromosome', 'Chromosome', '/ˈkrəʊməsəʊm/', 'крэумэсэум', 'Хромосома', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Часть клетки живого существа, содержащая гены (ДНК).',
    '- Биология: "X chromosome" (X-хромосома)\n- Количество: "46 chromosomes" (46 хромосом)\n- Нарушение: "Chromosome abnormality" (Хромосомная аномалия)',
    [
        { en: 'Humans normally have 23 pairs of chromosomes.', ru: 'У людей обычно 23 пары хромосом.' },
        { en: 'The Y chromosome determines male sex.', ru: 'Y-хромосома определяет мужской пол.' },
        { en: 'Scientists studied the chromosomes under a microscope.', ru: 'Ученые изучали хромосомы под микроскопом.' },
        { en: 'Down syndrome is caused by an extra chromosome.', ru: 'Синдром Дауна вызван лишней хромосомой.' }
    ],
    []
),

createRichWord('b2_chronology', 'Chronology', '/krəˈnɒlədʒi/', 'крэнолэджи', 'Хронология', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Порядок, в котором происходили события; наука о времени.',
    '- Порядок: "In chronology" (В хронологическом порядке)\n- История: "Chronology of events" (Хронология событий)\n- Ошибка: "Confused chronology" (Спутанная хронология)',
    [
        { en: 'The police tried to establish the chronology of the crime.', ru: 'Полиция пыталась установить хронологию преступления.' },
        { en: 'Please list the dates in reverse chronology.', ru: 'Пожалуйста, перечислите даты в обратной хронологии.' },
        { en: 'We need to check the exact chronology of the war.', ru: 'Нам нужно проверить точную хронологию войны.' },
        { en: 'The book explains the chronology of ancient civilizations.', ru: 'Книга объясняет хронологию древних цивилизаций.' }
    ],
    []
),

createRichWord('b2_clatter', 'Clatter', '/ˈklætə(r)/', 'клэтэ', 'Грохот / Звон', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Издавать серию громких коротких звуков (как при падении твердых предметов).',
    '- Посуда: "Dishes clatter" (Посуда гремит)\n- Обувь: "Clatter down stairs" (Грохотать вниз по лестнице)\n- Звук: "Loud clatter" (Громкий звон/грохот)',
    [
        { en: 'The tray slipped and clattered onto the floor.', ru: 'Поднос выскользнул и с грохотом упал на пол.' },
        { en: 'We heard the clatter of horses\' hooves on the street.', ru: 'Мы слышали цокот копыт лошадей на улице.' },
        { en: 'Don\'t clatter the pots and pans so much.', ru: 'Не греми так кастрюлями и сковородками.' },
        { en: 'The old engine started with a loud clatter.', ru: 'Старый двигатель завелся с громким стуком.' }
    ],
    []
),

createRichWord('b2_climax', 'Climax', '/ˈklaɪmæks/', 'клаймэкс', 'Кульминация', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Самая важная или захватывающая часть истории, события или ситуации.',
    '- Фильм: "Dramatic climax" (Драматическая развязка)\n- Событие: "Reach a climax" (Достичь кульминации)\n- Секс: "Sexual climax" (Оргазм - эвфемизм)',
    [
        { en: 'The movie reached its climax in the final battle scene.', ru: 'Фильм достиг кульминации в финальной сцене битвы.' },
        { en: 'The climax of the festival was the firework display.', ru: 'Кульминацией фестиваля стал фейерверк.' },
        { en: 'Years of tension came to a climax yesterday.', ru: 'Годы напряжения достигли пика вчера.' },
        { en: 'The story builds up slowly to a thrilling climax.', ru: 'История медленно нарастает к захватывающей развязке.' }
    ],
    []
),

createRichWord('b2_clinch', 'Clinch', '/klɪntʃ/', 'клинч', 'Заключить / Решить (спор)', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Окончательно решить дело или выиграть сделку; (спорт) сцепиться в объятиях (бокс).',
    '- Сделка: "Clinch a deal" (Заключить сделку)\n- Победа: "Clinch the title" (Завоевать титул)\n- Спорт: "In a clinch" (В клинче)',
    [
        { en: 'The goal in the last minute clinched the victory for us.', ru: 'Гол на последней минуте обеспечил нам победу.' },
        { en: 'They finally clinched the business deal after weeks of talks.', ru: 'Они наконец заключили деловую сделку после недель переговоров.' },
        { en: 'This evidence clinches the argument.', ru: 'Это доказательство решает спор.' },
        { en: 'The boxers clinched in the centre of the ring.', ru: 'Боксеры вошли в клинч в центре ринга.' }
    ],
    []
),

createRichWord('b2_clog', 'Clog', '/klɒɡ/', 'клог', 'Засорять / Сабо (обувь)', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Блокировать или забивать (трубу, движение); деревянный башмак (сущ).',
    '- Труба: "Clogged sink" (Засоренная раковина)\n- Трафик: "Clogged with traffic" (Забитый машинами)\n- Обувь: "Wear clogs" (Носить сабо)',
    [
        { en: 'Hair clogged the shower drain.', ru: 'Волосы засорили слив в душе.' },
        { en: 'The roads are clogged with holiday traffic.', ru: 'Дороги забиты праздничным трафиком.' },
        { en: 'Eating too much fat can clog your arteries.', ru: 'Употребление слишком большого количества жира может закупорить артерии.' },
        { en: 'Traditional Dutch dancers wear wooden clogs.', ru: 'Традиционные голландские танцоры носят деревянные башмаки.' }
    ],
    []
),

createRichWord('b2_clove', 'Clove', '/kləʊv/', 'клэув', 'Гвоздика / Зубчик (чеснока)', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Сушеный бутон цветка, используемый как специя; отдельный сегмент головки чеснока.',
    '- Чеснок: "Clove of garlic" (Зубчик чеснока)\n- Специя: "Ground cloves" (Молотая гвоздика)\n- Запах: "Scent of cloves" (Запах гвоздики)',
    [
        { en: 'Add one crushed clove of garlic to the sauce.', ru: 'Добавьте один раздавленный зубчик чеснока в соус.' },
        { en: 'Cloves are often used in apple pies and mulled wine.', ru: 'Гвоздика часто используется в яблочных пирогах и глинтвейне.' },
        { en: 'She put cloves in an orange to make it smell nice.', ru: 'Она воткнула гвоздику в апельсин, чтобы он приятно пах.' },
        { en: 'Oil of cloves can help with toothache.', ru: 'Гвоздичное масло может помочь при зубной боли.' }
    ],
    []
),

createRichWord('b2_clump', 'Clump', '/klʌmp/', 'кламп', 'Группа / Ком (земли)', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Сгруппированная масса вещей (деревьев, волос, земли).',
    '- Растения: "Clump of trees" (Группа деревьев)\n- Грязь: "Clump of earth" (Ком земли)\n- Глагол: "Clump together" (Сбиваться в кучу)',
    [
        { en: 'A clump of trees stood in the middle of the field.', ru: 'Посреди поля стояла группа деревьев.' },
        { en: 'The gardener planted the flowers in clumps.', ru: 'Садовник посадил цветы группами.' },
        { en: 'He wiped a clump of mud off his boot.', ru: 'Он стер ком грязи со своего ботинка.' },
        { en: 'The bacteria cells clumped together under the microscope.', ru: 'Бактериальные клетки сбились в кучу под микроскопом.' }
    ],
    []
),

createRichWord('b2_clutter', 'Clutter', '/ˈklʌtə(r)/', 'клатэ', 'Беспорядок / Загромождать', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Множество вещей в беспорядке; заставлять пространство вещами.',
    '- Комната: "Clear the clutter" (Убрать беспорядок)\n- Ум: "Clutter your mind" (Засорять разум)\n- Место: "Cluttered desk" (Заваленный стол)',
    [
        { en: 'Her desk is covered in clutter.', ru: 'Её стол завален хламом.' },
        { en: 'Try not to clutter the room with too much furniture.', ru: 'Старайся не загромождать комнату слишком большим количеством мебели.' },
        { en: 'I need to sort through the clutter in the garage.', ru: 'Мне нужно разобрать хлам в гараже.' },
        { en: 'Don\'t clutter your head with useless facts.', ru: 'Не забивай голову бесполезными фактами.' }
    ],
    []
),

createRichWord('b2_cobble', 'Cobble', '/ˈkɒbl/', 'кобл', 'Булыжник / Мостить', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Круглый камень, используемый для мощения улиц (обычно во мн. числе - cobbles/cobblestones).',
    '- Улица: "Cobbled street" (Мощеная улица)\n- Камень: "Walk on cobbles" (Идти по брусчатке)\n- Глагол: "Cobble together" (Слепить на скорую руку)',
    [
        { en: 'The old town is famous for its narrow cobbled streets.', ru: 'Старый город знаменит своими узкими мощеными улочками.' },
        { en: 'It is difficult to walk on cobbles in high heels.', ru: 'Трудно ходить по брусчатке на высоких каблуках.' },
        { en: 'They managed to cobble together a solution.', ru: 'Им удалось наспех состряпать решение.' },
        { en: 'The carriage rattled over the cobbles.', ru: 'Карета громыхала по булыжникам.' }
    ],
    []
),

createRichWord('b2_columnist', 'Columnist', '/ˈkɒləmnɪst/', 'колэмнист', 'Обозреватель / Колумнист', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Журналист, который пишет регулярную серию статей (колонку) для газеты или журнала.',
    '- СМИ: "Newspaper columnist" (Газетный обозреватель)\n- Тема: "Gossip columnist" (Светский обозреватель)\n- Мнение: "Opinion columnist" (Автор колонки мнений)',
    [
        { en: 'She works as a fashion columnist for a magazine.', ru: 'Она работает модным обозревателем в журнале.' },
        { en: 'The columnist criticized the government\'s new policy.', ru: 'Колумнист раскритиковал новую политику правительства.' },
        { en: 'He is a syndicated columnist read by millions.', ru: 'Он — синдицированный (печатающийся во многих изданиях) обозреватель, которого читают миллионы.' },
        { en: 'I read his weekly column every Sunday.', ru: 'Я читаю его еженедельную колонку каждое воскресенье.' }
    ],
    []
  ),
createRichWord('b2_compulsory', 'Compulsory', '/kəmˈpʌlsəri/', 'кэмпалсэри', 'Обязательный', ProficiencyLevel.B2, 'adj', 'Medium', 'Formal',
    'То, что должно быть сделано по закону или правилам.',
    '- Образование: "Compulsory education" (Обязательное образование)\n- Закон: "Compulsory insurance" (Обязательное страхование)\n- Спорт: "Compulsory figures" (Обязательная программа)',
    [
        { en: 'Maths and English are compulsory subjects in this school.', ru: 'Математика и английский являются обязательными предметами в этой школе.' },
        { en: 'It is compulsory to wear a seatbelt in the car.', ru: 'В машине обязательно нужно пристегиваться ремнем безопасности.' },
        { en: 'Military service is no longer compulsory in many countries.', ru: 'Военная служба больше не является обязательной во многих странах.' },
        { en: 'There was a compulsory meeting for all staff members.', ru: 'Для всех сотрудников было обязательное собрание.' }
    ],
    []
),

createRichWord('b2_conquest', 'Conquest', '/ˈkɒŋkwest/', 'конквест', 'Завоевание', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Действие по захвату контроля над страной или людьми силой.',
    '- История: "Norman Conquest" (Нормандское завоевание)\n- Война: "Military conquest" (Военное завоевание)\n- Любовь: "Sexual conquest" (Любовная победа)',
    [
        { en: 'The Norman Conquest of 1066 changed English history.', ru: 'Нормандское завоевание 1066 года изменило английскую историю.' },
        { en: 'They dreamed of world conquest and power.', ru: 'Они мечтали о мировом господстве и власти.' },
        { en: 'He boasted about his many conquests.', ru: 'Он хвастался своими многочисленными победами.' },
        { en: 'The conquest of Mount Everest was a great achievement.', ru: 'Покорение Эвереста стало великим достижением.' }
    ],
    []
),

createRichWord('b2_cracker', 'Cracker', '/ˈkrækə(r)/', 'крэкэ', 'Крекер / Хлопушка', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Тонкое сухое печенье (часто соленое); рождественская игрушка, которая хлопает при разрыве.',
    '- Еда: "Cheese and crackers" (Сыр и крекеры)\n- Праздник: "Christmas cracker" (Рождественская хлопушка)\n- Сленг: "A cracker of a goal" (Потрясающий гол)',
    [
        { en: 'We ate some crackers with cheese as a snack.', ru: 'Мы съели немного крекеров с сыром в качестве перекуса.' },
        { en: 'The baby was chewing on a dry cracker.', ru: 'Ребенок жевал сухой крекер.' },
        { en: 'We pulled Christmas crackers at the dinner table.', ru: 'Мы взрывали рождественские хлопушки за обеденным столом.' },
        { en: 'Pass me the box of crackers, please.', ru: 'Передай мне коробку крекеров, пожалуйста.' }
    ],
    [
        { meaning: "Hacker (slang)", translation: "Взломщик", example: { en: "A cracker broke into the system.", ru: "Взломщик проник в систему." } }
    ]
),

createRichWord('b2_crate', 'Crate', '/kreɪt/', 'крейт', 'Ящик', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Большой деревянный или пластиковый ящик для перевозки или хранения товаров.',
    '- Груз: "Wooden crate" (Деревянный ящик)\n- Напитки: "Crate of beer" (Ящик пива)\n- Перевозка: "Packing crate" (Упаковочный ящик)',
    [
        { en: 'The workers loaded a heavy crate onto the truck.', ru: 'Рабочие погрузили тяжелый ящик на грузовик.' },
        { en: 'We bought a whole crate of apples from the farm.', ru: 'Мы купили целый ящик яблок на ферме.' },
        { en: 'He sat on an upturned crate to rest.', ru: 'Он сел на перевернутый ящик, чтобы отдохнуть.' },
        { en: 'The machinery arrived in large shipping crates.', ru: 'Оборудование прибыло в больших транспортировочных ящиках.' }
    ],
    []
),

createRichWord('b2_crater', 'Crater', '/ˈkreɪtə(r)/', 'крейтэ', 'Кратер', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Большая дыра в земле, вызванная взрывом или ударом; жерло вулкана.',
    '- Космос: "Moon crater" (Лунный кратер)\n- Вулкан: "Volcanic crater" (Вулканический кратер)\n- Взрыв: "Bomb crater" (Воронка от бомбы)',
    [
        { en: 'The bomb left a huge crater in the middle of the road.', ru: 'Бомба оставила огромную воронку посреди дороги.' },
        { en: 'You can see craters on the moon with a telescope.', ru: 'Через телескоп можно увидеть кратеры на Луне.' },
        { en: 'Smoke rose from the crater of the active volcano.', ru: 'Дым поднимался из кратера действующего вулкана.' },
        { en: 'The meteorite impact created a deep crater.', ru: 'Удар метеорита создал глубокий кратер.' }
    ],
    []
),

createRichWord('b2_crumb', 'Crumb', '/krʌm/', 'крам', 'Крошка', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Очень маленький кусочек хлеба, пирога или печенья.',
    '- Еда: "Bread crumbs" (Хлебные крошки)\n- Уборка: "Sweep up crumbs" (Сметать крошки)\n- Количество: "Crumb of comfort" (Капля утешения)',
    [
        { en: 'She brushed the crumbs off the table.', ru: 'Она смахнула крошки со стола.' },
        { en: 'The birds ate every single crumb of bread.', ru: 'Птицы съели каждую крошку хлеба.' },
        { en: 'I will coat the chicken in bread crumbs.', ru: 'Я обваляю курицу в панировочных сухарях.' },
        { en: 'There wasn\'t a crumb of food left in the house.', ru: 'В доме не осталось ни крошки еды.' }
    ],
    []
),

createRichWord('b2_cuisine', 'Cuisine', '/kwɪˈziːn/', 'квизин', 'Кухня (национальная)', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Стиль приготовления пищи, характерный для определенной страны или региона.',
    '- Стиль: "French cuisine" (Французская кухня)\n- Ресторан: "Local cuisine" (Местная кухня)\n- Качество: "Haute cuisine" (Высокая кухня)',
    [
        { en: 'Italian cuisine is famous for its pasta and pizza.', ru: 'Итальянская кухня славится своей пастой и пиццей.' },
        { en: 'We enjoy trying different types of cuisine when we travel.', ru: 'Мы любим пробовать разные виды кухни, когда путешествуем.' },
        { en: 'The hotel offers excellent international cuisine.', ru: 'Отель предлагает превосходную интернациональную кухню.' },
        { en: 'Indian cuisine uses a lot of spicy ingredients.', ru: 'Индийская кухня использует много острых ингредиентов.' }
    ],
    []
),

createRichWord('b2_deceive', 'Deceive', '/dɪˈsiːv/', 'дисив', 'Обманывать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Заставлять кого-то поверить в неправду, обычно ради выгоды.',
    '- Отношения: "Deceive a partner" (Обмануть партнера)\n- Внешность: "Appearances deceive" (Внешность обманчива)\n- Намеренно: "Intend to deceive" (Намереваться обмануть)',
    [
        { en: 'He tried to deceive the public about his past.', ru: 'Он пытался обмануть общественность по поводу своего прошлого.' },
        { en: 'Don\'t be deceived by his friendly smile.', ru: 'Не обманывайтесь его дружелюбной улыбкой.' },
        { en: 'She deceived him into signing the papers.', ru: 'Она обманом заставила его подписать бумаги.' },
        { en: 'You are deceiving yourself if you think this will work.', ru: 'Ты обманываешь себя, если думаешь, что это сработает.' }
    ],
    []
),

createRichWord('b2_deception', 'Deception', '/dɪˈsepʃn/', 'дисэпшн', 'Обман', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Действие по обману кого-либо; ложь или трюк.',
    '- Действие: "Act of deception" (Акт обмана)\n- Способ: "By deception" (Путем обмана)\n- Самообман: "Self-deception" (Самообман)',
    [
        { en: 'He was accused of obtaining money by deception.', ru: 'Его обвинили в получении денег путем обмана.' },
        { en: 'The war involved a lot of deception and spying.', ru: 'Война включала много обмана и шпионажа.' },
        { en: 'Her claim to be a doctor was a complete deception.', ru: 'Ее заявление о том, что она врач, было полным обманом.' },
        { en: 'Deception is common in the world of politics.', ru: 'Обман распространен в мире политики.' }
    ],
    []
),

createRichWord('b2_demolish', 'Demolish', '/dɪˈmɒlɪʃ/', 'димолиш', 'Сносить / Разрушать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Полностью разрушить здание или сооружение; (перен.) разгромить аргумент или съесть еду.',
    '- Здание: "Demolish a house" (Снести дом)\n- Спорт: "Demolish the opponent" (Разгромить противника)\n- Идея: "Demolish a theory" (Разбить теорию)',
    [
        { en: 'The old factory was demolished to make way for flats.', ru: 'Старую фабрику снесли, чтобы освободить место для квартир.' },
        { en: 'They plan to demolish the bridge next year.', ru: 'Они планируют снести мост в следующем году.' },
        { en: 'He completely demolished my argument in five minutes.', ru: 'Он полностью разбил мой аргумент за пять минут.' },
        { en: 'The hungry boys demolished the pizza instantly.', ru: 'Голодные мальчики мгновенно уничтожили пиццу.' }
    ],
    []
),

createRichWord('b2_den', 'Den', '/den/', 'дэн', 'Логово / Берлога', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Дом дикого животного; комната в доме для отдыха; место незаконной деятельности.',
    '- Животные: "Lion\'s den" (Логово льва)\n- Дом: "Go to the den" (Пойти в комнату отдыха)\n- Криминал: "Den of thieves" (Притон воров)',
    [
        { en: 'The bear spent the winter sleeping in its den.', ru: 'Медведь провел зиму, спя в своей берлоге.' },
        { en: 'My father uses the small room as his den.', ru: 'Мой отец использует маленькую комнату как свой кабинет/комнату отдыха.' },
        { en: 'The police raided a gambling den last night.', ru: 'Полиция совершила налет на игорный притон прошлой ночью.' },
        { en: 'Daniel was thrown into the lion\'s den.', ru: 'Даниила бросили в ров со львами.' }
    ],
    []
  ),
createRichWord('b2_catfish', 'Catfish', '/ˈkætfɪʃ/', 'кэтфиш', 'Сом / Кэтфишинг', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Рыба с "усами", похожими на кошачьи; (сленг) человек, создающий фальшивый профиль в интернете.',
    '- Рыба: "Fried catfish" (Жареный сом)\n- Интернет: "Catfish profile" (Фейковый профиль)\n- Сленг: "Being catfished" (Стать жертвой обмана в сети)',
    [
        { en: 'Catfish are bottom-feeders found in freshwater rivers.', ru: 'Сомы — это донные рыбы, обитающие в пресноводных реках.' },
        { en: 'We went fishing and caught a huge catfish.', ru: 'Мы пошли на рыбалку и поймали огромного сома.' },
        { en: 'He realized he was being catfished when she refused to video call.', ru: 'Он понял, что его разводят (кэтфишинг), когда она отказалась от видеозвонка.' },
        { en: 'The documentary explores the phenomenon of internet catfish.', ru: 'Документальный фильм исследует феномен интернет-мошенников (кэтфишинга).' }
    ],
    []
),

createRichWord('b2_chemotherapy', 'Chemotherapy', '/ˌkiːməʊˈθerəpi/', 'кимэутэрэпи', 'Химиотерапия', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Лечение заболеваний (особенно рака) с использованием химических веществ.',
    '- Медицина: "Undergo chemotherapy" (Проходить химиотерапию)\n- Эффект: "Side effects of chemotherapy" (Побочные эффекты химиотерапии)\n- Курс: "Chemotherapy treatment" (Курс химиотерапии)',
    [
        { en: 'She lost her hair during the course of chemotherapy.', ru: 'Она потеряла волосы во время курса химиотерапии.' },
        { en: 'Chemotherapy is often used to shrink tumours before surgery.', ru: 'Химиотерапия часто используется для уменьшения опухолей перед операцией.' },
        { en: 'The doctors decided that chemotherapy was the best option.', ru: 'Врачи решили, что химиотерапия была лучшим вариантом.' },
        { en: 'He felt very weak after his chemotherapy session.', ru: 'Он чувствовал себя очень слабым после сеанса химиотерапии.' }
    ],
    []
),

createRichWord('b2_chlorine', 'Chlorine', '/ˈklɔːriːn/', 'клорин', 'Хлор', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Химический элемент (газ), часто используемый для дезинфекции воды в бассейнах.',
    '- Бассейн: "Smell of chlorine" (Запах хлорки)\n- Химия: "Chlorine gas" (Газ хлор)\n- Очистка: "Chlorine tablets" (Таблетки хлора)',
    [
        { en: 'The smell of chlorine in the swimming pool was very strong.', ru: 'Запах хлорки в бассейне был очень сильным.' },
        { en: 'Chlorine is added to drinking water to kill bacteria.', ru: 'Хлор добавляют в питьевую воду, чтобы убить бактерии.' },
        { en: 'My eyes turned red because of the chlorine.', ru: 'Мои глаза покраснели из-за хлора.' },
        { en: 'Be careful when handling chlorine tablets for the pool.', ru: 'Будьте осторожны при обращении с таблетками хлора для бассейна.' }
    ],
    []
),

createRichWord('b2_clockwise', 'Clockwise', '/ˈklɒkwaɪz/', 'клоквайз', 'По часовой стрелке', ProficiencyLevel.B2, 'adv', 'Medium', 'Neutral',
    'В направлении движения стрелок часов.',
    '- Движение: "Turn clockwise" (Повернуть по часовой стрелке)\n- Направление: "Clockwise direction" (Направление по часовой стрелке)\n- Противоположность: "Anti-clockwise" (Против часовой стрелки)',
    [
        { en: 'Turn the handle clockwise to open the door.', ru: 'Поверните ручку по часовой стрелке, чтобы открыть дверь.' },
        { en: 'The players moved clockwise around the circle.', ru: 'Игроки двигались по часовой стрелке по кругу.' },
        { en: 'Stir the mixture in a clockwise motion.', ru: 'Перемешивайте смесь движением по часовой стрелке.' },
        { en: 'To lock it, turn the key clockwise.', ru: 'Чтобы запереть, поверните ключ по часовой стрелке.' }
    ],
    []
),

createRichWord('b2_coexist', 'Coexist', '/ˌkəʊɪɡˈzɪst/', 'кэуигзист', 'Сосуществовать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Жить или существовать вместе в одно и то же время или в одном месте (часто о разных группах).',
    '- Мир: "Coexist peacefully" (Мирно сосуществовать)\n- Природа: "Humans and animals coexist" (Люди и животные сосуществуют)\n- Отношения: "Learn to coexist" (Научиться сосуществовать)',
    [
        { en: 'Different religions have coexisted in this city for centuries.', ru: 'Различные религии сосуществовали в этом городе столетиями.' },
        { en: 'It is difficult for these two species to coexist in the same territory.', ru: 'Этим двум видам трудно сосуществовать на одной территории.' },
        { en: 'We must learn to coexist with our neighbours.', ru: 'Мы должны научиться сосуществовать с нашими соседями.' },
        { en: 'Can tradition and modernity coexist?', ru: 'Могут ли традиции и современность сосуществовать?' }
    ],
    []
),

createRichWord('b2_coma', 'Coma', '/ˈkəʊmə/', 'кэумэ', 'Кома', ProficiencyLevel.B2, 'noun', 'Low', 'Formal',
    'Состояние глубокого бессознательного состояния, вызванное травмой или болезнью.',
    '- Медицина: "Fall into a coma" (Впасть в кому)\n- Состояние: "Come out of a coma" (Выйти из комы)\n- Длительность: "In a coma for weeks" (В коме неделями)',
    [
        { en: 'He was in a coma for three weeks after the accident.', ru: 'После аварии он был в коме три недели.' },
        { en: 'Doctors induced a coma to help his brain heal.', ru: 'Врачи ввели его в искусственную кому, чтобы помочь мозгу восстановиться.' },
        { en: 'Miraculously, she woke up from the coma.', ru: 'Чудесным образом она очнулась из комы.' },
        { en: 'The patient remains in a deep coma.', ru: 'Пациент остается в глубокой коме.' }
    ],
    []
),

createRichWord('b2_contraception', 'Contraception', '/ˌkɒntrəˈsepʃn/', 'контрэсэпшн', 'Контрацепция', ProficiencyLevel.B2, 'noun', 'Medium', 'Formal',
    'Методы или устройства, используемые для предотвращения беременности.',
    '- Здоровье: "Methods of contraception" (Методы контрацепции)\n- Доступ: "Access to contraception" (Доступ к контрацепции)\n- Совет: "Advice on contraception" (Совет по контрацепции)',
    [
        { en: 'They offer free advice on contraception at the clinic.', ru: 'В клинике предлагают бесплатные консультации по контрацепции.' },
        { en: 'The pill is a very common form of contraception.', ru: 'Таблетки — очень распространенная форма контрацепции.' },
        { en: 'Religious views on contraception vary widely.', ru: 'Религиозные взгляды на контрацепцию сильно различаются.' },
        { en: 'Couples should discuss contraception before starting a relationship.', ru: 'Парам следует обсудить контрацепцию перед началом отношений.' }
    ],
    []
),

createRichWord('b2_contraceptive', 'Contraceptive', '/ˌkɒntrəˈseptɪv/', 'контрэсэптив', 'Противозачаточный / Контрацептив', ProficiencyLevel.B2, 'adj', 'Medium', 'Formal',
    'Связанный с предотвращением беременности; средство контрацепции (сущ).',
    '- Таблетка: "Contraceptive pill" (Противозачаточная таблетка)\n- Метод: "Contraceptive method" (Метод контрацепции)\n- Устройство: "Barrier contraceptive" (Барьерный контрацептив)',
    [
        { en: 'She forgot to take her contraceptive pill yesterday.', ru: 'Вчера она забыла принять противозачаточную таблетку.' },
        { en: 'Condoms are an effective contraceptive method.', ru: 'Презервативы — эффективный метод контрацепции.' },
        { en: 'The doctor explained various contraceptive options.', ru: 'Врач объяснил различные варианты контрацепции.' },
        { en: 'Contraceptive use has increased in recent years.', ru: 'Использование контрацептивов возросло в последние годы.' }
    ],
    []
  ),
createRichWord('b2_cork', 'Cork', '/kɔːk/', 'кок', 'Пробка / Кора пробкового дерева', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Легкий материал из коры дерева; пробка для бутылки (обычно винной).',
    '- Вино: "Pull the cork" (Вытащить пробку)\n- Материал: "Cork floor" (Пробковый пол)\n- Инструмент: "Corkscrew" (Штопор)',
    [
        { en: 'The waiter removed the cork from the wine bottle.', ru: 'Официант вытащил пробку из бутылки вина.' },
        { en: 'Cork is a very light and buoyant material.', ru: 'Пробка — очень легкий и плавучий материал.' },
        { en: 'The champagne cork flew across the room.', ru: 'Пробка от шампанского перелетела через комнату.' },
        { en: 'Don\'t let the cork crumble into the wine.', ru: 'Не дай пробке раскрошиться в вино.' }
    ],
    [
        { meaning: "City in Ireland", translation: "Корк (город)", example: { en: "He is from Cork.", ru: "Он из Корка." } }
    ]
),

createRichWord('b2_cot', 'Cot', '/kɒt/', 'кот', 'Детская кроватка', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Маленькая кровать с высокими бортиками для младенца (брит.); раскладушка (амер.).',
    '- Мебель: "Baby in a cot" (Младенец в кроватке)\n- Сон: "Put in the cot" (Положить в кроватку)\n- Сленг: "Cot death" (Смерть в колыбели / СВДС)',
    [
        { en: 'The baby was sleeping peacefully in her cot.', ru: 'Малышка мирно спала в своей кроватке.' },
        { en: 'We need to lower the base of the cot now he can stand.', ru: 'Нам нужно опустить дно кроватки, раз он теперь может стоять.' },
        { en: 'He climbed out of his cot in the middle of the night.', ru: 'Он вылез из своей кроватки посреди ночи.' },
        { en: 'She bought a second-hand cot for the nursery.', ru: 'Она купила подержанную кроватку для детской.' }
    ],
    []
),

createRichWord('b2_cuddle', 'Cuddle', '/ˈkʌdl/', 'кадл', 'Обнимать / Прижимать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Держать кого-то близко к себе, чтобы проявить любовь или согреть (более нежно и долго, чем hug).',
    '- Отношения: "Cuddle together" (Прижаться друг к другу)\n- Дети: "Cuddle a toy" (Обнимать игрушку)\n- Сущ: "Give a cuddle" (Обнять)',
    [
        { en: 'They sat on the sofa, cuddling and watching TV.', ru: 'Они сидели на диване, обнявшись и смотря телевизор.' },
        { en: 'The child cuddled her teddy bear tightly.', ru: 'Ребенок крепко прижал к себе плюшевого мишку.' },
        { en: 'Come here and give me a big cuddle.', ru: 'Иди сюда и крепко обними меня.' },
        { en: 'I like to cuddle up with a good book when it rains.', ru: 'Я люблю уютно устроиться с хорошей книгой, когда идет дождь.' }
    ],
    []
),

createRichWord('b2_customise', 'Customise', '/ˈkʌstəmaɪz/', 'кастэмайз', 'Настраивать / Индивидуализировать', ProficiencyLevel.B2, 'verb', 'Medium', 'Neutral',
    'Изменять что-то, чтобы оно подходило под конкретные нужды или вкус владельца.',
    '- Техника: "Customise settings" (Настроить параметры)\n- Авто: "Customise a car" (Тюнинговать машину)\n- Продукт: "Customised plan" (Индивидуальный план)',
    [
        { en: 'You can customise the layout of your homepage.', ru: 'Вы можете настроить макет своей домашней страницы.' },
        { en: 'They offer a service to customise sneakers.', ru: 'Они предлагают услугу по кастомизации кроссовок.' },
        { en: 'The software allows users to customise the interface.', ru: 'Программное обеспечение позволяет пользователям настраивать интерфейс.' },
        { en: 'We need a customised solution for this client.', ru: 'Нам нужно индивидуальное решение для этого клиента.' }
    ],
    []
),

createRichWord('b2_decode', 'Decode', '/diːˈkəʊd/', 'дикеуд', 'Декодировать / Расшифровывать', ProficiencyLevel.B2, 'verb', 'Low', 'Neutral',
    'Преобразовывать код или зашифрованное сообщение в понятный язык.',
    '- Технологии: "Decode a signal" (Декодировать сигнал)\n- Текст: "Decode a message" (Расшифровать сообщение)\n- Смысл: "Decode meaning" (Разгадать смысл)',
    [
        { en: 'The spies worked hard to decode the enemy message.', ru: 'Шпионы усердно работали, чтобы расшифровать вражеское сообщение.' },
        { en: 'Your brain decodes the electrical signals from your eyes.', ru: 'Ваш мозг декодирует электрические сигналы от глаз.' },
        { en: 'Can you decode this strange handwriting?', ru: 'Ты можешь разобрать этот странный почерк?' },
        { en: 'The receiver decodes the satellite transmission.', ru: 'Приемник декодирует спутниковую передачу.' }
    ],
    []
),

createRichWord('b2_denim', 'Denim', '/ˈdenɪm/', 'дэним', 'Джинсовая ткань / Деним', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Прочная хлопчатобумажная ткань, обычно синего цвета, используемая для джинсов.',
    '- Одежда: "Denim jacket" (Джинсовая куртка)\n- Стиль: "Wear denim" (Носить джинсовое)\n- Цвет: "Faded denim" (Выцветший деним)',
    [
        { en: 'He was wearing a blue denim shirt and jeans.', ru: 'Он был одет в синюю джинсовую рубашку и джинсы.' },
        { en: 'Denim is a very durable material for work clothes.', ru: 'Деним — очень прочный материал для рабочей одежды.' },
        { en: 'She bought a skirt made of black denim.', ru: 'Она купила юбку из черной джинсовой ткани.' },
        { en: 'Double denim is considered a fashion mistake by some.', ru: 'Некоторые считают сочетание джинсового верха и низа модной ошибкой.' }
    ],
    []
),

createRichWord('b2_detergent', 'Detergent', '/dɪˈtɜːdʒənt/', 'дитёджэнт', 'Моющее средство', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Химическое вещество (жидкость или порошок) для стирки одежды или мытья посуды.',
    '- Дом: "Laundry detergent" (Стиральный порошок/гель)\n- Посуда: "Dish detergent" (Средство для посуды)\n- Вид: "Liquid detergent" (Жидкое средство)',
    [
        { en: 'I need to buy some laundry detergent from the supermarket.', ru: 'Мне нужно купить средство для стирки в супермаркете.' },
        { en: 'This detergent is effective even at low temperatures.', ru: 'Это моющее средство эффективно даже при низких температурах.' },
        { en: 'Use a mild detergent for delicate fabrics.', ru: 'Используйте мягкое средство для деликатных тканей.' },
        { en: 'He poured too much detergent into the washing machine.', ru: 'Он налил слишком много средства в стиральную машину.' }
    ],
    []
),

createRichWord('b2_discomfort', 'Discomfort', '/dɪsˈkʌmfət/', 'дискамфэт', 'Дискомфорт / Неудобство', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Чувство легкой боли или беспокойства; отсутствие комфорта.',
    '- Ощущение: "Feel discomfort" (Чувствовать дискомфорт)\n- Причина: "Cause discomfort" (Причинять неудобство)\n- Здоровье: "Stomach discomfort" (Дискомфорт в желудке)',
    [
        { en: 'He felt some discomfort in his chest after running.', ru: 'Он почувствовал некоторый дискомфорт в груди после бега.' },
        { en: 'The heat caused considerable discomfort to the passengers.', ru: 'Жара доставила пассажирам значительный дискомфорт.' },
        { en: 'She tried to hide her discomfort at the rude question.', ru: 'Она попыталась скрыть свою неловкость от грубого вопроса.' },
        { en: 'The new shoes gave me a lot of discomfort.', ru: 'Новые туфли доставили мне много неудобств.' }
    ],
    []
  ),
createRichWord('b2_colossal', 'Colossal', '/kəˈlɒsl/', 'кэлосл', 'Колоссальный / Громадный', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Чрезвычайно большой по размеру, эффекту или количеству.',
    '- Размер: "Colossal statue" (Колоссальная статуя)\n- Ошибка: "Colossal mistake" (Чудовищная ошибка)\n- Успех: "Colossal success" (Грандиозный успех)',
    [
        { en: 'The project was a colossal waste of money.', ru: 'Этот проект был колоссальной тратой денег.' },
        { en: 'A colossal statue stood at the entrance to the harbour.', ru: 'Громадная статуя стояла у входа в гавань.' },
        { en: 'They need a colossal amount of funding to finish the bridge.', ru: 'Им требуется колоссальный объем финансирования, чтобы закончить мост.' },
        { en: 'It was a colossal failure for the company.', ru: 'Это был грандиозный провал для компании.' }
    ],
    []
),

createRichWord('b2_combo', 'Combo', '/ˈkɒmbəʊ/', 'комбэу', 'Комбинация / Комбо', ProficiencyLevel.B2, 'noun', 'Medium', 'Informal',
    'Небольшая джазовая группа; сочетание разных вещей (в еде или играх).',
    '- Еда: "Burger combo" (Комбо с бургером)\n- Игра: "Winning combo" (Выигрышная комбинация)\n- Музыка: "Jazz combo" (Джазовый ансамбль)',
    [
        { en: 'I ordered the lunch combo which includes a drink.', ru: 'Я заказал обеденное комбо, которое включает напиток.' },
        { en: 'That shirt and tie is a bad combo.', ru: 'Эта рубашка и галстук — плохая комбинация.' },
        { en: 'He plays drums in a small jazz combo.', ru: 'Он играет на барабанах в небольшом джазовом ансамбле.' },
        { en: 'Press these buttons to perform a special combo attack.', ru: 'Нажми эти кнопки, чтобы выполнить специальную комбо-атаку.' }
    ],
    []
),

createRichWord('b2_courier', 'Courier', '/ˈkʊriə(r)/', 'куриэ', 'Курьер', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Человек или компания, чья работа заключается в доставке посылок и документов.',
    '- Доставка: "Bike courier" (Велокурьер)\n- Услуга: "Send by courier" (Отправить курьером)\n- Компания: "Courier service" (Курьерская служба)',
    [
        { en: 'The package was delivered by a motorcycle courier.', ru: 'Посылка была доставлена мотокурьером.' },
        { en: 'Please send these documents by courier immediately.', ru: 'Пожалуйста, немедленно отправьте эти документы курьером.' },
        { en: 'I worked as a courier during the summer holidays.', ru: 'Я работал курьером во время летних каникул.' },
        { en: 'The courier asked for a signature upon receipt.', ru: 'Курьер попросил расписаться при получении.' }
    ],
    []
),

createRichWord('b2_courteous', 'Courteous', '/ˈkɜːtiəs/', 'кётиэс', 'Учтивый / Вежливый', ProficiencyLevel.B2, 'adj', 'Low', 'Formal',
    'Вежливый и уважительный по отношению к другим людям.',
    '- Поведение: "Courteous manner" (Учтивая манера)\n- Персонал: "Courteous staff" (Вежливый персонал)\n- Ответ: "Courteous reply" (Любезный ответ)',
    [
        { en: 'The hotel staff were extremely courteous and helpful.', ru: 'Персонал отеля был чрезвычайно учтив и полезен.' },
        { en: 'It is courteous to knock before entering a room.', ru: 'Стучать перед входом в комнату — это вежливо.' },
        { en: 'He wrote a courteous letter of apology.', ru: 'Он написал вежливое письмо с извинениями.' },
        { en: 'Despite his anger, he remained courteous.', ru: 'Несмотря на свой гнев, он оставался учтивым.' }
    ],
    []
),

createRichWord('b2_crutch', 'Crutch', '/krʌtʃ/', 'крач', 'Костыль / Опора', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Палка с перекладиной сверху, используемая для опоры при ходьбе, если нога травмирована.',
    '- Медицина: "Walk on crutches" (Ходить на костылях)\n- Психология: "Emotional crutch" (Эмоциональная опора/отдушина)\n- Травма: "Pair of crutches" (Пара костылей)',
    [
        { en: 'He has been on crutches since he broke his leg.', ru: 'Он ходит на костылях с тех пор, как сломал ногу.' },
        { en: 'She uses food as a psychological crutch when she is stressed.', ru: 'Она использует еду как психологическую отдушину, когда испытывает стресс.' },
        { en: 'I can\'t walk without my crutches yet.', ru: 'Я пока не могу ходить без костылей.' },
        { en: 'Alcohol became a crutch for him to deal with his problems.', ru: 'Алкоголь стал для него костылем, чтобы справляться с проблемами.' }
    ],
    []
),

createRichWord('b2_cubicle', 'Cubicle', '/ˈkjuːbɪkl/', 'кьюбикл', 'Кабинка / Отсек', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Небольшое отгороженное пространство в комнате, например, для работы в офисе или переодевания.',
    '- Офис: "Office cubicle" (Офисная кабинка)\n- Душ: "Shower cubicle" (Душевая кабинка)\n- Бассейн: "Changing cubicle" (Кабинка для переодевания)',
    [
        { en: 'He sits in a small grey cubicle all day.', ru: 'Он сидит в маленькой серой кабинке весь день.' },
        { en: 'The changing cubicles at the pool were dirty.', ru: 'Кабинки для переодевания в бассейне были грязными.' },
        { en: 'She decorated her work cubicle with photos of her dog.', ru: 'Она украсила свое рабочее место фотографиями своей собаки.' },
        { en: 'Privacy is hard to find in an open cubicle layout.', ru: 'Уединение трудно найти при планировке с открытыми кабинками.' }
    ],
    []
),

createRichWord('b2_cuckoo', 'Cuckoo', '/ˈkʊkuː/', 'куку', 'Кукушка / Сумасшедший', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Птица, известная своим криком и тем, что подкладывает яйца в чужие гнезда; (adj) сумасшедший (разг.).',
    '- Птица: "Cuckoo clock" (Часы с кукушкой)\n- Гнездо: "Cuckoo in the nest" (Непрошенный гость)\n- Сленг: "Go cuckoo" (Свихнуться)',
    [
        { en: 'We heard the call of a cuckoo in the forest.', ru: 'Мы слышали крик кукушки в лесу.' },
        { en: 'My grandmother has an old wooden cuckoo clock.', ru: 'У моей бабушки есть старые деревянные часы с кукушкой.' },
        { en: 'He went a bit cuckoo after living alone for so long.', ru: 'Он немного тронулся умом после того, как так долго жил один.' },
        { en: 'The cuckoo lays its eggs in the nests of other birds.', ru: 'Кукушка откладывает яйца в гнезда других птиц.' }
    ],
    []
),

createRichWord('b2_curfew', 'Curfew', '/ˈkɜːfjuː/', 'кёфью', 'Комендантский час', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Закон, требующий, чтобы люди оставались в помещении после определенного времени; время возвращения домой для детей.',
    '- Порядок: "Impose a curfew" (Ввести комендантский час)\n- Семья: "Strict curfew" (Строгий комендантский час/время возврата)\n- Нарушение: "Break curfew" (Нарушить комендантский час)',
    [
        { en: 'The government imposed a dusk-to-dawn curfew.', ru: 'Правительство ввело комендантский час от заката до рассвета.' },
        { en: 'My parents gave me a midnight curfew.', ru: 'Родители установили мне время возвращения домой в полночь.' },
        { en: 'Anyone found on the streets after curfew will be arrested.', ru: 'Любой, кто будет найден на улице после комендантского часа, будет арестован.' },
        { en: 'He was grounded for breaking his curfew.', ru: 'Его посадили под домашний арест за нарушение времени возвращения домой.' }
    ],
    []
),

createRichWord('b2_custard', 'Custard', '/ˈkʌstəd/', 'кастэд', 'Заварной крем', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Сладкий желтый соус из молока, яиц и сахара, который едят с десертами.',
    '- Еда: "Apple pie and custard" (Яблочный пирог с заварным кремом)\n- Десерт: "Custard tart" (Тарталетка с заварным кремом)\n- Текстура: "Thick custard" (Густой заварной крем)',
    [
        { en: 'The children love bananas and custard for dessert.', ru: 'Дети обожают бананы с заварным кремом на десерт.' },
        { en: 'She poured hot custard over the sponge pudding.', ru: 'Она полила бисквитный пудинг горячим заварным кремом.' },
        { en: 'Portuguese custard tarts are delicious.', ru: 'Португальские тарталетки с заварным кремом восхитительны.' },
        { en: 'The custard was too lumpy because he didn\'t stir it.', ru: 'Крем был слишком комковатым, потому что он его не мешал.' }
    ],
    []
  ),
createRichWord('b2_coyote', 'Coyote', '/kaɪˈəʊti/', 'кайэути', 'Койот', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Дикая собака, обитающая в Северной Америке, похожая на волка, но меньше.',
    '- Животное: "Wild coyote" (Дикий койот)\n- Звук: "Coyote howling" (Вой койота)\n- Природа: "Pack of coyotes" (Стая койотов)',
    [
        { en: 'We heard a coyote howling in the distance last night.', ru: 'Прошлой ночью мы слышали вой койота вдалеке.' },
        { en: 'Farmers protect their chickens from coyotes.', ru: 'Фермеры защищают своих кур от койотов.' },
        { en: 'The coyote is a clever and adaptable animal.', ru: 'Койот — умное и легко приспосабливающееся животное.' },
        { en: 'They saw a coyote crossing the road in the desert.', ru: 'Они видели, как койот перебегал дорогу в пустыне.' }
    ],
    [
        { meaning: "Smuggler (Slang)", translation: "Перевозчик нелегалов", example: { en: "They paid a coyote to cross the border.", ru: "Они заплатили койоту, чтобы пересечь границу." } }
    ]
),

createRichWord('b2_crib', 'Crib', '/krɪb/', 'криб', 'Детская кроватка / Шпаргалка', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Кровать с высокими бортиками для маленького ребенка (амер.); также сленг для шпаргалки или дома.',
    '- Мебель: "Baby crib" (Детская кроватка)\n- Школа: "Exam crib" (Шпаргалка)\n- Рождество: "Nativity crib" (Рождественский вертеп/ясли)',
    [
        { en: 'The baby finally fell asleep in his crib.', ru: 'Малыш наконец заснул в своей кроватке.' },
        { en: 'She bought a new mattress for the crib.', ru: 'Она купила новый матрас для кроватки.' },
        { en: 'He was caught using a crib sheet during the test.', ru: 'Его поймали за использованием шпаргалки во время теста.' },
        { en: 'At Christmas, we set up a crib in the church.', ru: 'На Рождество мы устанавливаем в церкви вертеп (ясли).' }
    ],
    [
        { meaning: "House (Slang)", translation: "Хата / Дом", example: { en: "Welcome to my crib.", ru: "Добро пожаловать в мою хату." } }
    ]
),

createRichWord('b2_daffodil', 'Daffodil', '/ˈdæfədɪl/', 'дэфэдил', 'Нарцисс (желтый)', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Желтый весенний цветок с формой трубы в центре.',
    '- Сад: "Yellow daffodil" (Желтый нарцисс)\n- Время: "Spring daffodils" (Весенние нарциссы)\n- Букет: "Bunch of daffodils" (Букет нарциссов)',
    [
        { en: 'Daffodils are usually the first sign of spring.', ru: 'Нарциссы обычно являются первым признаком весны.' },
        { en: 'She put a vase of yellow daffodils on the table.', ru: 'Она поставила на стол вазу с желтыми нарциссами.' },
        { en: 'The park was full of blooming daffodils.', ru: 'Парк был полон цветущих нарциссов.' },
        { en: 'Wordsworth wrote a famous poem about daffodils.', ru: 'Вордсворт написал знаменитое стихотворение о нарциссах.' }
    ],
    []
),

createRichWord('b2_dashboard', 'Dashboard', '/ˈdæʃbɔːd/', 'дэшбод', 'Приборная панель', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Панель управления в автомобиле; экран с графиками и данными в программном обеспечении.',
    '- Авто: "Car dashboard" (Приборная панель автомобиля)\n- Бизнес: "Sales dashboard" (Панель мониторинга продаж)\n- Индикатор: "Dashboard light" (Лампочка на панели)',
    [
        { en: 'A warning light flashed on the car\'s dashboard.', ru: 'На приборной панели автомобиля замигал предупреждающий индикатор.' },
        { en: 'He wiped the dust off the dashboard.', ru: 'Он вытер пыль с приборной панели.' },
        { en: 'The app features a dashboard to track your progress.', ru: 'В приложении есть панель управления для отслеживания вашего прогресса.' },
        { en: 'Managers use a digital dashboard to view key metrics.', ru: 'Менеджеры используют цифровую панель для просмотра ключевых показателей.' }
    ],
    []
),

createRichWord('b2_decimal', 'Decimal', '/ˈdesɪml/', 'дэсимл', 'Десятичный / Десятичная дробь', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Относящийся к системе счисления, основанной на числе 10; дробь с точкой (напр., 0.5).',
    '- Математика: "Decimal point" (Десятичная точка)\n- Система: "Decimal system" (Десятичная система)\n- Число: "Decimal number" (Десятичное число)',
    [
        { en: 'The answer should be correct to two decimal places.', ru: 'Ответ должен быть точным до двух знаков после запятой.' },
        { en: 'Most countries use a decimal currency system.', ru: 'Большинство стран используют десятичную валютную систему.' },
        { en: 'You forgot to put the decimal point.', ru: 'Ты забыл поставить десятичную точку.' },
        { en: 'Converting fractions to decimals is easy.', ru: 'Преобразовывать дроби в десятичные числа легко.' }
    ],
    []
  ),
createRichWord('b2_canary', 'Canary', '/kəˈneəri/', 'кэнеэри', 'Канарейка', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Маленькая желтая птичка, известная своим красивым пением.',
    '- Питомец: "Pet canary" (Домашняя канарейка)\n- Шахта: "Canary in the coal mine" (Тревожный сигнал / Предупреждение)\n- Цвет: "Canary yellow" (Ярко-желтый цвет)',
    [
        { en: 'My grandmother keeps a canary in a cage.', ru: 'Моя бабушка держит канарейку в клетке.' },
        { en: 'Miners used a canary to detect dangerous gas.', ru: 'Шахтеры использовали канарейку для обнаружения опасного газа.' },
        { en: 'She wore a bright canary yellow dress.', ru: 'На ней было ярко-желтое платье.' },
        { en: 'The canary sang beautifully all morning.', ru: 'Канарейка прекрасно пела все утро.' }
    ],
    [
        { meaning: "Informer (Slang)", translation: "Стукач", example: { en: "He sang like a canary to the police.", ru: "Он всё выложил полиции (пел как канарейка)." } }
    ]
),

createRichWord('b2_chubby', 'Chubby', '/ˈtʃʌbi/', 'чаби', 'Пухлый / Круглолицый', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Слегка толстый в приятном смысле (обычно о детях или щеках).',
    '- Внешность: "Chubby cheeks" (Пухлые щеки)\n- Ребенок: "Chubby baby" (Пухлый младенец)\n- Пальцы: "Chubby fingers" (Пухлые пальчики)',
    [
        { en: 'The baby has cute chubby cheeks.', ru: 'У ребенка милые пухлые щечки.' },
        { en: 'He was a chubby child but grew up slim.', ru: 'Он был пухлым ребенком, но вырос стройным.' },
        { en: 'I pinched his chubby little legs.', ru: 'Я ущипнул его пухленькие ножки.' },
        { en: 'Don\'t worry about being a bit chubby.', ru: 'Не беспокойся о том, что ты немного полноват.' }
    ],
    []
),

createRichWord('b2_coaster', 'Coaster', '/ˈkəʊstə(r)/', 'кэустэ', 'Подставка (под кружку) / Американские горки', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Небольшой коврик под стакан для защиты стола; (сокр.) аттракцион "американские горки".',
    '- Дом: "Drink coaster" (Подставка под напиток)\n- Парк: "Roller coaster" (Американские горки)\n- Мебель: "Put on a coaster" (Поставить на подставку)',
    [
        { en: 'Please use a coaster, don\'t put the cup on the wood.', ru: 'Пожалуйста, используй подставку, не ставь чашку на дерево.' },
        { en: 'We screamed on the roller coaster ride.', ru: 'Мы кричали, катаясь на американских горках.' },
        { en: 'These cork coasters protect the table from heat.', ru: 'Эти пробковые подставки защищают стол от жара.' },
        { en: 'Life is like a roller coaster with ups and downs.', ru: 'Жизнь похожа на американские горки со взлетами и падениями.' }
    ],
    []
),

createRichWord('b2_colosseum', 'Colosseum', '/ˌkɒləˈsiːəm/', 'колэсиэм', 'Колизей / Стадион', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Большой стадион или театр (особенно знаменитый в Риме); место для зрелищ.',
    '- Рим: "The Colosseum" (Колизей)\n- Здание: "Ancient colosseum" (Древний амфитеатр)\n- Туризм: "Visit the Colosseum" (Посетить Колизей)',
    [
        { en: 'Gladiators used to fight in the Roman Colosseum.', ru: 'Гладиаторы сражались в римском Колизее.' },
        { en: 'The Colosseum is one of the wonders of the world.', ru: 'Колизей — одно из чудес света.' },
        { en: 'Thousands of tourists visit the Colosseum daily.', ru: 'Тысячи туристов посещают Колизей ежедневно.' },
        { en: 'The band played in the city\'s new colosseum.', ru: 'Группа играла на новом городском стадионе.' }
    ],
    []
),

createRichWord('b2_comfy', 'Comfy', '/ˈkʌmfi/', 'камфи', 'Удобный / Уютный', ProficiencyLevel.B2, 'adj', 'High', 'Informal',
    'Разговорное сокращение от "comfortable".',
    '- Мебель: "Comfy chair" (Удобное кресло)\n- Одежда: "Comfy shoes" (Удобная обувь)\n- Ощущение: "Warm and comfy" (Тепло и уютно)',
    [
        { en: 'This sofa is really comfy to sit on.', ru: 'На этом диване очень удобно сидеть.' },
        { en: 'Make yourself comfy while I make tea.', ru: 'Устраивайся поудобнее, пока я готовлю чай.' },
        { en: 'I bought some comfy pyjamas for winter.', ru: 'Я купила уютную пижаму на зиму.' },
        { en: 'Are you comfy in that bed?', ru: 'Тебе удобно в этой кровати?' }
    ],
    []
  ),
createRichWord('b2_crickets', 'Crickets', '/ˈkrɪkɪts/', 'крикитс', 'Сверчки / Тишина', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Насекомые, самцы которых издают стрекочущий звук; (перен.) абсолютная тишина в ответ на шутку или вопрос.',
    '- Насекомые: "Chirping crickets" (Поющие сверчки)\n- Тишина: "Hear crickets" (Слышать тишину/игнор)\n- Природа: "Field of crickets" (Поле сверчков)',
    [
        { en: 'The sound of crickets filled the night air.', ru: 'Звук сверчков наполнил ночной воздух.' },
        { en: 'I told a joke, but all I heard was crickets.', ru: 'Я рассказал шутку, но в ответ была лишь гробовая тишина.' },
        { en: 'Crickets are related to grasshoppers.', ru: 'Сверчки родственны кузнечикам.' },
        { en: 'They feed live crickets to the lizard.', ru: 'Они кормят ящерицу живыми сверчками.' }
    ],
    []
),

createRichWord('b2_cutlery', 'Cutlery', '/ˈkʌtləri/', 'катлэри', 'Столовые приборы', ProficiencyLevel.B2, 'noun', 'High', 'Neutral',
    'Ножи, вилки и ложки, используемые для еды и сервировки пищи.',
    '- Кухня: "Drawer for cutlery" (Ящик для приборов)\n- Сервировка: "Stainless steel cutlery" (Приборы из нержавейки)\n- Материал: "Silver cutlery" (Серебряные приборы)',
    [
        { en: 'Please put the dirty cutlery in the dishwasher.', ru: 'Пожалуйста, положи грязные приборы в посудомойку.' },
        { en: 'The restaurant sets the tables with expensive cutlery.', ru: 'Ресторан сервирует столы дорогими приборами.' },
        { en: 'Plastic cutlery is bad for the environment.', ru: 'Пластиковые приборы вредны для окружающей среды.' },
        { en: 'She polished the silver cutlery for the dinner party.', ru: 'Она начистила серебряные приборы для званого ужина.' }
    ],
    []
),

createRichWord('b2_cyclone', 'Cyclone', '/ˈsaɪkləʊn/', 'сайклэун', 'Циклон', ProficiencyLevel.B2, 'noun', 'Low', 'Neutral',
    'Сильный шторм с ветрами, вращающимися по кругу; область низкого давления.',
    '- Погода: "Tropical cyclone" (Тропический циклон)\n- Разрушение: "Hit by a cyclone" (Пострадать от циклона)\n- Метеорология: "Cyclone warning" (Предупреждение о циклоне)',
    [
        { en: 'The cyclone caused massive damage to the coast.', ru: 'Циклон нанес огромный ущерб побережью.' },
        { en: 'Residents were evacuated before the cyclone arrived.', ru: 'Жители были эвакуированы до прихода циклона.' },
        { en: 'A powerful cyclone is forming over the ocean.', ru: 'Над океаном формируется мощный циклон.' },
        { en: 'Meteorologists are tracking the path of the cyclone.', ru: 'Метеорологи отслеживают путь циклона.' }
    ],
    []
),

createRichWord('b2_deluxe', 'Deluxe', '/dɪˈlʌks/', 'дилакс', 'Роскошный / Люкс', ProficiencyLevel.B2, 'adj', 'Medium', 'Neutral',
    'Очень высокого качества, дорогой и комфортабельный.',
    '- Отель: "Deluxe room" (Номер люкс)\n- Издание: "Deluxe edition" (Подарочное издание)\n- Качество: "Deluxe features" (Роскошные функции)',
    [
        { en: 'We booked a deluxe suite for our honeymoon.', ru: 'Мы забронировали номер люкс для медового месяца.' },
        { en: 'The deluxe version of the game includes extra content.', ru: 'Deluxe-версия игры включает дополнительный контент.' },
        { en: 'He drives a deluxe model of the car.', ru: 'Он водит машину модели люкс.' },
        { en: 'They offer a deluxe spa treatment package.', ru: 'Они предлагают роскошный пакет спа-процедур.' }
    ],
    []
),

createRichWord('b2_diaper', 'Diaper', '/ˈdaɪəpə(r)/', 'дайэпэ', 'Подгузник (амер.)', ProficiencyLevel.B2, 'noun', 'Medium', 'Neutral',
    'Кусок мягкой ткани или бумаги, который надевают на ребенка, еще не умеющего пользоваться туалетом (брит. nappy).',
    '- Дети: "Change a diaper" (Поменять подгузник)\n- Покупка: "Pack of diapers" (Упаковка подгузников)\n- Вид: "Cloth diaper" (Тканевый подгузник)',
    [
        { en: 'The baby needs a diaper change right now.', ru: 'Ребенку нужно поменять подгузник прямо сейчас.' },
        { en: 'Disposable diapers are very convenient but expensive.', ru: 'Одноразовые подгузники очень удобны, но дороги.' },
        { en: 'He learned how to change a diaper quickly.', ru: 'Он научился быстро менять подгузник.' },
        { en: 'Don\'t forget to pack extra diapers in the bag.', ru: 'Не забудь положить в сумку запасные подгузники.' }
    ],
    []
  ),

];
