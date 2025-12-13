
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

];
