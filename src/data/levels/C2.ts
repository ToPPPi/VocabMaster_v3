
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

export const WORDS_C2: Word[] = [
  createRichWord('c2_1', 'Ubiquitous', '/juːˈbɪk.wɪ.təs/', 'юбикуитос', 'Вездесущий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Present, appearing, or found everywhere.',
    '- Technology: "Ubiquitous computing."\n- Culture: "Ubiquitous ads."',
    [
      { en: 'Smartphones are ubiquitous nowadays.', ru: 'Смартфоны сейчас вездесущи.' },
      { en: 'Plastic is ubiquitous in modern life.', ru: 'Пластик вездесущ в современной жизни.' },
      { en: 'The ubiquitous presence of cameras.', ru: 'Повсеместное присутствие камер.' },
      { en: 'Coffee shops are ubiquitous here.', ru: 'Кофейни здесь на каждом шагу.' }
    ]
  ),
  createRichWord('c2_adhere', 'Adhere', '/ədˈhɪə/', 'эдхиэ', 'Придерживаться / Прилипать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Строго следовать правилу или убеждению; или физически прилипать.',
    '- Правила: "Adhere to rules" (Придерживаться правил)\n- Физика: "Adhere to surface" (Прилипать к поверхности)\n- Принцип: "Adhere to principles" (Следовать принципам)',
    [
      { en: 'Staff must strictly adhere to the safety regulations.', ru: 'Персонал должен строго придерживаться правил безопасности.' },
      { en: 'The glue will make the poster adhere to the wall.', ru: 'Клей заставит плакат прилипнуть к стене.' },
      { en: 'He adheres to a strict vegetarian diet.', ru: 'Он придерживается строгой вегетарианской диеты.' },
      { en: 'Failure to adhere to the terms may result in a fine.', ru: 'Несоблюдение условий может привести к штрафу.' }
    ]
  ),

createRichWord('c2_adjacent', 'Adjacent', '/əˈdʒeɪs(ə)nt/', 'эджэйсэнт', 'Смежный / Соседний', ProficiencyLevel.C2, 'adj', 'Medium', 'Formal',
    'Находящийся очень близко или рядом с чем-то (часто о зданиях или комнатах).',
    '- Место: "Adjacent room" (Смежная комната)\n- Здание: "Adjacent building" (Соседнее здание)\n- Земля: "Adjacent land" (Прилегающая земля)',
    [
      { en: 'We stayed in adjacent rooms at the hotel.', ru: 'Мы остановились в смежных номерах в отеле.' },
      { en: 'The fire spread quickly to the adjacent building.', ru: 'Огонь быстро перекинулся на соседнее здание.' },
      { en: 'The car park is adjacent to the train station.', ru: 'Парковка прилегает к железнодорожной станции.' },
      { en: 'They bought the adjacent plot of land to expand their garden.', ru: 'Они купили соседний участок земли, чтобы расширить свой сад.' }
    ]
),

createRichWord('c2_administer', 'Administer', '/ədˈmɪnɪstə/', 'эдминистэ', 'Управлять / Назначать (лекарство)', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Управлять организацией; или давать кому-то лекарство/тест.',
    '- Медицина: "Administer a drug" (Ввести лекарство)\n- Управление: "Administer justice" (Вершить правосудие)\n- Тест: "Administer a test" (Проводить тест)',
    [
      { en: 'The nurse administered the medication to the patient.', ru: 'Медсестра ввела лекарство пациенту.' },
      { en: 'It is the government\'s job to administer the law.', ru: 'Задача правительства — исполнять (администрировать) закон.' },
      { en: 'The charity administers funds for disaster relief.', ru: 'Благотворительная организация управляет средствами для помощи при бедствиях.' },
      { en: 'Teachers administer the exam at the end of the term.', ru: 'Учителя проводят экзамен в конце семестра.' }
    ]
),

createRichWord('c2_adverse', 'Adverse', '/ˈædvɜːs/', 'эдвёс', 'Неблагоприятный / Вредный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Имеющий негативный или вредный эффект.',
    '- Эффект: "Adverse effect" (Побочный/вредный эффект)\n- Погода: "Adverse weather" (Неблагоприятная погода)\n- Реакция: "Adverse reaction" (Негативная реакция)',
    [
      { en: 'The drug has no known adverse side effects.', ru: 'У препарата нет известных побочных эффектов.' },
      { en: 'The match was cancelled due to adverse weather conditions.', ru: 'Матч был отменен из-за неблагоприятных погодных условий.' },
      { en: 'His policies had an adverse impact on the economy.', ru: 'Его политика оказала негативное влияние на экономику.' },
      { en: 'They received adverse publicity after the scandal.', ru: 'Они получили негативную огласку после скандала.' }
    ]
),

createRichWord('c2_affiliate', 'Affiliate', '/əˈfɪlieɪt/', 'эфилиейт', 'Присоединять / Партнер', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Официально присоединиться к или стать частью более крупной группы (глагол); филиал (сущ).',
    '- Бизнес: "Affiliate with" (Вступить в партнерство с)\n- Группа: "Affiliated company" (Аффилированная компания)\n- Связь: "Political affiliation" (Политическая принадлежность)',
    [
      { en: 'The hospital is affiliated with the local university.', ru: 'Больница аффилирована (связана) с местным университетом.' },
      { en: 'Our group is not affiliated with any political party.', ru: 'Наша группа не связана ни с какой политической партией.' },
      { en: 'Small businesses often affiliate to gain market strength.', ru: 'Малые предприятия часто объединяются, чтобы получить рыночную силу.' },
      { en: 'She is an affiliate of the marketing program.', ru: 'Она является партнером маркетинговой программы.' }
    ]
),

createRichWord('c2_align', 'Align', '/əˈlaɪn/', 'элайн', 'Выравнивать / Согласовывать', ProficiencyLevel.C2, 'verb', 'Medium', 'Formal',
    'Расположить вещи в линию; или публично поддержать/согласовать мнение.',
    '- Позиция: "Align objects" (Выровнять объекты)\n- Мнение: "Align with views" (Согласовывать с взглядами)\n- Механика: "Align wheels" (Отрегулировать колеса)',
    [
      { en: 'Make sure you align the text to the left side.', ru: 'Убедитесь, что вы выровняли текст по левому краю.' },
      { en: 'The company needs to align its strategy with customer needs.', ru: 'Компании необходимо согласовать свою стратегию с потребностями клиентов.' },
      { en: 'He aligned himself with the rebel faction.', ru: 'Он присоединился (согласовал позицию) к фракции повстанцев.' },
      { en: 'The stars aligned perfectly for the event.', ru: 'Звезды идеально сошлись для этого события.' }
    ]
),

createRichWord('c2_alpha', 'Alpha', '/ˈælfə/', 'элфа', 'Альфа / Главный', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Первая буква греческого алфавита; или лидер группы (альфа-самец).',
    '- Лидер: "Alpha male" (Альфа-самец)\n- Наука: "Alpha particle" (Альфа-частица)\n- Версия: "Alpha version" (Альфа-версия ПО)',
    [
      { en: 'The wolf pack is led by the alpha male.', ru: 'Волчья стая возглавляется альфа-самцом.' },
      { en: 'We are testing the alpha version of the software.', ru: 'Мы тестируем альфа-версию программного обеспечения.' },
      { en: 'Alpha Centauri is the closest star system to us.', ru: 'Альфа Центавра — ближайшая к нам звездная система.' },
      { en: 'He has a dominant, alpha personality.', ru: 'У него доминирующая, альфа-личность.' }
    ]
),

createRichWord('c2_ambiguous', 'Ambiguous', '/æmˈbɪɡjuəs/', 'эмбигьюэс', 'Двусмысленный', ProficiencyLevel.C2, 'adj', 'Medium', 'Formal',
    'Имеющий более одного возможного значения; неясный.',
    '- Значение: "Ambiguous wording" (Двусмысленная формулировка)\n- Ответ: "Ambiguous answer" (Неоднозначный ответ)\n- Ситуация: "Remain ambiguous" (Оставаться неясным)',
    [
      { en: 'His reply was ambiguous, so I wasn\'t sure what he meant.', ru: 'Его ответ был двусмысленным, поэтому я не был уверен, что он имел в виду.' },
      { en: 'The ending of the movie is ambiguous and open to interpretation.', ru: 'Концовка фильма неоднозначна и открыта для интерпретации.' },
      { en: 'Legal documents should avoid ambiguous language.', ru: 'Юридические документы должны избегать двусмысленного языка.' },
      { en: 'She gave an ambiguous nod that could mean yes or no.', ru: 'Она неопределенно кивнула, что могло означать да или нет.' }
    ]
),

createRichWord('c2_animate', 'Animate', '/ˈænɪmeɪt/', 'энимейт', 'Оживлять / Воодушевлять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сделать что-то живым или полным энергии (глагол); живой (прил. - ударение на последнем слоге).',
    '- Дискуссия: "Animate the discussion" (Оживить дискуссию)\n- Фильм: "Animated movie" (Анимационный фильм)\n- Лицо: "Animated face" (Оживленное лицо)',
    [
      { en: 'Her presence seemed to animate the whole room.', ru: 'Ее присутствие, казалось, оживило всю комнату.' },
      { en: 'He became very animated when talking about his hobby.', ru: 'Он стал очень оживленным, когда говорил о своем хобби.' },
      { en: 'Computer software is used to animate the characters.', ru: 'Компьютерное ПО используется для анимации персонажей.' },
      { en: 'Laughter animated his tired face.', ru: 'Смех оживил его усталое лицо.' }
    ]
),

createRichWord('c2_appal', 'Appal', '/əˈpɔːl/', 'эпол', 'Ужасать / Потрясать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Вызвать сильный шок или отвращение (US spelling: Appall).',
    '- Чувство: "Be appalled" (Быть в ужасе)\n- Ситуация: "Appalling conditions" (Ужасающие условия)\n- Новость: "Appal the public" (Потрясти общественность)',
    [
      { en: 'I was appalled by the lack of hygiene in the restaurant.', ru: 'Я был в ужасе от отсутствия гигиены в ресторане.' },
      { en: 'The brutality of the crime appalled the entire nation.', ru: 'Жестокость преступления потрясла всю нацию.' },
      { en: 'It appals me that such poverty still exists.', ru: 'Меня ужасает, что такая бедность все еще существует.' },
      { en: 'She was appalled to hear the rude comments.', ru: 'Она была потрясена, услышав грубые комментарии.' }
    ]
),

createRichWord('c2_appraise', 'Appraise', '/əˈpreɪz/', 'эпрейз', 'Оценивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Официально оценить стоимость или качество чего-либо (в отличие от praise - хвалить).',
    '- Стоимость: "Appraise value" (Оценить стоимость)\n- Работа: "Appraise performance" (Оценить эффективность работы)\n- Ситуация: "Appraise the situation" (Оценить ситуацию)',
    [
      { en: 'An expert was hired to appraise the jewellery.', ru: 'Был нанят эксперт для оценки драгоценностей.' },
      { en: 'Managers regularly appraise the performance of their staff.', ru: 'Менеджеры регулярно оценивают работу своего персонала.' },
      { en: 'He coolly appraised his opponent before the match.', ru: 'Он хладнокровно оценил своего противника перед матчем.' },
      { en: 'It is important to appraise the results objectively.', ru: 'Важно объективно оценивать результаты.' }
    ]
),

createRichWord('c2_arouse', 'Arouse', '/əˈraʊz/', 'эрауз', 'Вызывать / Пробуждать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Вызвать определенное чувство или реакцию (интерес, подозрение, гнев).',
    '- Интерес: "Arouse interest" (Вызвать интерес)\n- Подозрение: "Arouse suspicion" (Вызвать подозрение)\n- Чувства: "Arouse feelings" (Пробудить чувства)',
    [
      { en: 'His strange behavior aroused the suspicion of the police.', ru: 'Его странное поведение вызвало подозрение у полиции.' },
      { en: 'The speech aroused strong feelings among the crowd.', ru: 'Речь вызвала сильные чувства в толпе.' },
      { en: 'Nothing could arouse him from his deep sleep.', ru: 'Ничто не могло пробудить его от глубокого сна.' },
      { en: 'The book aims to arouse curiosity about science.', ru: 'Книга нацелена на то, чтобы пробудить любопытство к науке.' }
    ]
),

createRichWord('c2_articulate', 'Articulate', '/ɑːˈtɪkjəleɪt/', 'атикьюлейт', 'Формулировать / Членораздельный', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Ясно выражать мысли (глагол); умеющий ясно говорить (прилагательное).',
    '- Речь: "Articulate thoughts" (Формулировать мысли)\n- Человек: "Highly articulate" (Очень красноречивый)\n- Звук: "Articulate words" (Четко произносить слова)',
    [
      { en: 'She struggled to articulate her feelings into words.', ru: 'Ей было трудно облечь (сформулировать) свои чувства в слова.' },
      { en: 'He is an articulate speaker who engages the audience.', ru: 'Он красноречивый оратор, который вовлекает аудиторию.' },
      { en: 'You need to articulate your arguments clearly in the essay.', ru: 'Вам нужно четко сформулировать свои аргументы в эссе.' },
      { en: 'The child is unusually articulate for her age.', ru: 'Ребенок необычайно красноречив (четко говорит) для своего возраста.' }
    ]
),

createRichWord('c2_aspire', 'Aspire', '/əˈspaɪə/', 'эспайэ', 'Стремиться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Иметь сильное желание достичь чего-то великого или важного.',
    '- Цель: "Aspire to be" (Стремиться стать)\n- Успех: "Aspire to greatness" (Стремиться к величию)\n- Карьера: "Aspire to a career" (Стремиться к карьере)',
    [
      { en: 'She aspires to become a world-famous pianist.', ru: 'Она стремится стать всемирно известной пианисткой.' },
      { en: 'Few people aspire to a life of poverty.', ru: 'Мало кто стремится к жизни в бедности.' },
      { en: 'He aspires to run his own business one day.', ru: 'Он стремится однажды управлять своим собственным бизнесом.' },
      { en: 'We should all aspire to improve ourselves.', ru: 'Мы все должны стремиться улучшать себя.' }
    ]
),

createRichWord('c2_assassin', 'Assassin', '/əˈsæsɪn/', 'эсэсин', 'Убийца (наемный)', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Человек, который убивает важную персону по политическим или религиозным причинам (или за деньги).',
    '- Действие: "Hired assassin" (Наемный убийца)\n- Цель: "Political assassin" (Политический убийца)\n- Жертва: "Target of an assassin" (Цель убийцы)',
    [
      { en: 'The assassin was caught before he could reach the president.', ru: 'Убийцу поймали до того, как он смог добраться до президента.' },
      { en: 'He was hired as an assassin by a rival gang.', ru: 'Его наняли в качестве убийцы из соперничающей банды.' },
      { en: 'History is full of stories about famous assassins.', ru: 'История полна историй об известных убийцах.' },
      { en: 'The movie is about a retired assassin forced back to work.', ru: 'Фильм рассказывает об отставном наемном убийце, вынужденном вернуться к работе.' }
    ]
  ),
createRichWord('c2_autonomy', 'Autonomy', '/ɔːˈtɒnəmi/', 'отонэми', 'Автономия / Независимость', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Право страны или человека управлять собой; независимость.',
    '- Политика: "Regional autonomy" (Региональная автономия)\n- Личность: "Personal autonomy" (Личная независимость)\n- Работа: "Professional autonomy" (Профессиональная самостоятельность)',
    [
      { en: 'The region was granted autonomy from the central government.', ru: 'Региону была предоставлена автономия от центрального правительства.' },
      { en: 'Teachers should have some autonomy in the classroom.', ru: 'Учителя должны иметь некоторую самостоятельность в классе.' },
      { en: 'He values his autonomy and dislikes being told what to do.', ru: 'Он ценит свою независимость и не любит, когда ему указывают, что делать.' },
      { en: 'The university enjoys a high degree of autonomy.', ru: 'Университет пользуется высокой степенью автономии.' }
    ]
),

createRichWord('c2_aye', 'Aye', '/aɪ/', 'ай', 'Да / Есть', ProficiencyLevel.C2, 'adv', 'Low', 'Formal',
    'Старомодное или диалектное слово для "да"; используется в голосованиях или на флоте.',
    '- Голосование: "The ayes have it" (Решение принято / "За" большинство)\n- Флот: "Aye, aye, captain" (Есть, капитан!)\n- Ответ: "Vote aye" (Голосовать "за")',
    [
      { en: 'All those in favour say "Aye".', ru: 'Все, кто "за", скажите "Да".' },
      { en: '"Aye, aye, Captain!" shouted the sailor.', ru: '"Есть, капитан!" — крикнул моряк.' },
      { en: 'The ayes have it, the motion is passed.', ru: 'Большинство "за", предложение принято.' },
      { en: 'He answered with a quiet "aye".', ru: 'Он ответил тихим "да".' }
    ]
),

createRichWord('c2_bastard', 'Bastard', '/ˈbɑːstəd/', 'бастэд', 'Ублюдок / Внебрачный ребенок', ProficiencyLevel.C2, 'noun', 'Low', 'Slang',
    'Грубое оскорбление (сволочь); или (устар.) внебрачный ребенок. Иногда используется в шутку.',
    '- Оскорбление: "You bastard!" (Ах ты ублюдок!)\n- Вещь: "Lucky bastard" (Везучий сукин сын)\n- Происхождение: "Illegitimate bastard" (Внебрачный ребенок)',
    [
      { en: 'He is a cruel bastard who treats everyone badly.', ru: 'Он жестокий ублюдок, который плохо со всеми обращается.' },
      { en: 'Look at that lucky bastard winning the lottery!', ru: 'Посмотри на этого везучего сукиного сына, выигравшего в лотерею!' },
      { en: 'In the past, being a bastard was a social stigma.', ru: 'В прошлом быть внебрачным ребенком было социальным клеймом.' },
      { en: 'Get out of here, you bastard!', ru: 'Убирайся отсюда, ублюдок!' }
    ]
),

createRichWord('c2_battered', 'Battered', '/ˈbætəd/', 'бэтэд', 'Потрепанный / Избитый / В кляре', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Поврежденный ударами или использованием; или покрытый тестом (о еде).',
    '- Вещь: "Battered old car" (Потрепанная старая машина)\n- Насилие: "Battered wife" (Избитая жена)\n- Еда: "Battered fish" (Рыба в кляре)',
    [
      { en: 'He drove a battered old truck that made a lot of noise.', ru: 'Он водил потрепанный старый грузовик, который сильно шумел.' },
      { en: 'The battered suitcase had clearly traveled the world.', ru: 'Потрепанный чемодан явно объездил весь мир.' },
      { en: 'We ate battered cod and chips by the seaside.', ru: 'Мы ели треску в кляре с картошкой у моря.' },
      { en: 'The shelter provides help for battered women.', ru: 'Приют оказывает помощь женщинам, подвергшимся насилию.' }
    ]
),

createRichWord('c2_bead', 'Bead', '/biːd/', 'бид', 'Бусина / Капля', ProficiencyLevel.C2, 'noun', 'Medium', 'Neutral',
    'Маленький шарик с отверстием для нанизывания; или капля жидкости.',
    '- Украшение: "Glass bead" (Стеклянная бусина)\n- Жидкость: "Beads of sweat" (Капли пота)\n- Действие: "String beads" (Нанизывать бусины)',
    [
      { en: 'She wore a necklace made of colorful glass beads.', ru: 'Она носила ожерелье из разноцветных стеклянных бусин.' },
      { en: 'Beads of sweat appeared on his forehead during the exam.', ru: 'Капли пота выступили у него на лбу во время экзамена.' },
      { en: 'The dress was decorated with tiny silver beads.', ru: 'Платье было украшено крошечными серебряными бусинами.' },
      { en: 'Water forms beads on the waxed surface of the car.', ru: 'Вода собирается в капли на навощенной поверхности машины.' }
    ]
),

createRichWord('c2_blaze', 'Blaze', '/bleɪz/', 'блэйз', 'Пламя / Пожар', ProficiencyLevel.C2, 'noun', 'Medium', 'Neutral',
    'Очень большой или яркий огонь; яркий свет.',
    '- Огонь: "Fight a blaze" (Бороться с пожаром)\n- Свет: "Blaze of glory" (В лучах славы)\n- Глагол: "Eyes blazed" (Глаза сверкали)',
    [
      { en: 'It took the firefighters hours to control the blaze.', ru: 'Пожарным потребовались часы, чтобы справиться с пламенем.' },
      { en: 'He went out in a blaze of glory.', ru: 'Он ушел (погиб/уволился) в лучах славы.' },
      { en: 'The sun shone down in a blaze of heat.', ru: 'Солнце светило нестерпимым жаром.' },
      { en: 'His eyes blazed with anger when he heard the news.', ru: 'Его глаза сверкнули гневом, когда он услышал новости.' }
    ]
),

createRichWord('c2_blink', 'Blink', '/blɪŋk/', 'блинк', 'Моргание / Мгновение', ProficiencyLevel.C2, 'verb', 'Medium', 'Neutral',
    'Быстро закрыть и открыть глаза; или мерцать (о свете).',
    '- Глаза: "Blink eyes" (Моргать глазами)\n- Время: "In the blink of an eye" (В мгновение ока)\n- Свет: "Light blinking" (Свет мигает)',
    [
      { en: 'It all happened in the blink of an eye.', ru: 'Всё произошло в мгновение ока.' },
      { en: 'He blinked in the bright sunlight as he stepped outside.', ru: 'Он заморгал от яркого солнца, выходя на улицу.' },
      { en: 'The warning light on the dashboard started to blink.', ru: 'Предупреждающая лампочка на приборной панели начала мигать.' },
      { en: 'She didn\'t even blink when the gun went off.', ru: 'Она даже не моргнула, когда раздался выстрел.' }
    ]
),

createRichWord('c2_blur', 'Blur', '/blɜː/', 'блё', 'Пятно / Неясность', ProficiencyLevel.C2, 'noun', 'Medium', 'Neutral',
    'Что-то, что видно нечетко; или смутное воспоминание.',
    '- Зрение: "Vision blur" (Размытое зрение)\n- Движение: "A blur of motion" (Размытое движение)\n- Память: "It is all a blur" (Всё как в тумане)',
    [
      { en: 'Without my glasses, everything is just a blur.', ru: 'Без моих очков всё просто размыто.' },
      { en: 'The car went past in a blur of speed.', ru: 'Машина пронеслась мимо размытым пятном.' },
      { en: 'The events of that night are a blur to me now.', ru: 'События той ночи для меня сейчас как в тумане.' },
      { en: 'Tears blurred her vision as she read the letter.', ru: 'Слезы затуманили её зрение, пока она читала письмо.' }
    ]
),

createRichWord('c2_boarder', 'Boarder', '/ˈbɔːdə/', 'бодэ', 'Пансионер / Жилец', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Ученик, который живет в школе; или человек, снимающий комнату с питанием.',
    '- Школа: "School boarder" (Ученик интерната)\n- Жилье: "Take in boarders" (Брать жильцов)\n- Граница: "Cross-border" (Трансграничный - другое слово, но схоже)',
    [
      { en: 'She was a boarder at a private school in Switzerland.', ru: 'Она была пансионеркой (жила и училась) в частной школе в Швейцарии.' },
      { en: 'The widow took in a boarder to help pay the rent.', ru: 'Вдова взяла жильца, чтобы помочь оплачивать аренду.' },
      { en: 'Life as a boarder can be lonely without family.', ru: 'Жизнь в интернате может быть одинокой без семьи.' },
      { en: 'Boarders are allowed to go home on weekends.', ru: 'Ученикам интерната разрешено ездить домой по выходным.' }
    ]
),

createRichWord('c2_boxed', 'Boxed', '/bɒkst/', 'бокст', 'В коробке / Зажатый', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Упакованный в коробку; или ограниченный в пространстве (обычно "boxed in").',
    '- Товар: "Boxed set" (Подарочный набор в коробке)\n- Ситуация: "Feel boxed in" (Чувствовать себя в ловушке)\n- Еда: "Boxed lunch" (Ланч в коробке)',
    [
      { en: 'I bought a boxed set of all the Harry Potter movies.', ru: 'Я купил коробочный набор всех фильмов о Гарри Поттере.' },
      { en: 'He felt boxed in by the strict rules of the company.', ru: 'Он чувствовал себя зажатым в рамки строгими правилами компании.' },
      { en: 'The car was boxed in by two trucks on the highway.', ru: 'Машина была зажата двумя грузовиками на шоссе.' },
      { en: 'She prefers fresh food to boxed meals.', ru: 'Она предпочитает свежую еду обедам из коробок (полуфабрикатам).' }
    ]
),

createRichWord('c2_breach', 'Breach', '/briːtʃ/', 'брич', 'Нарушение / Прорыв', ProficiencyLevel.C2, 'noun', 'Medium', 'Formal',
    'Нарушение закона или обещания; или дыра в защите/стене.',
    '- Закон: "Breach of contract" (Нарушение контракта)\n- Доверие: "Breach of trust" (Злоупотребление доверием)\n- Безопасность: "Security breach" (Нарушение безопасности)',
    [
      { en: 'They are suing the company for breach of contract.', ru: 'Они судятся с компанией за нарушение контракта.' },
      { en: 'This is a serious breach of security protocols.', ru: 'Это серьезное нарушение протоколов безопасности.' },
      { en: 'Water poured through the breach in the dam.', ru: 'Вода хлынула через пробоину в плотине.' },
      { en: 'He was accused of a breach of the peace.', ru: 'Его обвинили в нарушении общественного порядка.' }
    ]
),

createRichWord('c2_brew', 'Brew', '/bruː/', 'бру', 'Варить (пиво/кофе) / Назревать', ProficiencyLevel.C2, 'verb', 'Medium', 'Neutral',
    'Готовить пиво или горячий напиток; или о надвигающейся неприятности.',
    '- Напиток: "Brew coffee" (Варить кофе)\n- Погода: "Storm is brewing" (Шторм назревает)\n- Проблемы: "Trouble is brewing" (Назревают неприятности)',
    [
      { en: 'He brews his own beer in the garage.', ru: 'Он варит свое собственное пиво в гараже.' },
      { en: 'Let the tea brew for five minutes before drinking.', ru: 'Дайте чаю завариться пять минут перед употреблением.' },
      { en: 'A storm is brewing on the horizon.', ru: 'На горизонте назревает шторм.' },
      { en: 'I could feel that trouble was brewing between them.', ru: 'Я чувствовал, что между ними назревают неприятности.' }
    ]
),

createRichWord('c2_brute', 'Brute', '/bruːt/', 'брут', 'Зверь / Грубый', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Жестокий человек или животное; грубая физическая сила.',
    '- Сила: "Brute force" (Грубая сила)\n- Человек: "You brute!" (Ты животное!)\n- Животное: "Senseless brute" (Бессмысленное животное)',
    [
      { en: 'He used brute force to open the locked door.', ru: 'Он использовал грубую силу, чтобы открыть запертую дверь.' },
      { en: 'Get away from me, you brute!', ru: 'Отойди от меня, ты животное!' },
      { en: 'The brute reality of the war shocked everyone.', ru: 'Жестокая реальность войны шокировала всех.' },
      { en: 'Inside, he is a gentle man, not a brute.', ru: 'Внутри он мягкий человек, а не грубиян.' }
    ]
),

createRichWord('c2_bundle', 'Bundle', '/ˈbʌnd(ə)l/', 'бандл', 'Связка / Пучок', ProficiencyLevel.C2, 'noun', 'Medium', 'Neutral',
    'Вещи, связанные вместе; или программный пакет.',
    '- Вещи: "Bundle of clothes" (Связка одежды)\n- Деньги: "Bundle of cash" (Пачка наличных)\n- Нервы: "Bundle of nerves" (Комок нервов)',
    [
      { en: 'She carried a bundle of sticks for the fire.', ru: 'Она несла охапку хвороста для костра.' },
      { en: 'He made a bundle of money on the stock market.', ru: 'Он заработал кучу денег на фондовом рынке.' },
      { en: 'The software comes as a bundle with the computer.', ru: 'Программное обеспечение идет в комплекте с компьютером.' },
      { en: 'The kitten was just a small bundle of fur.', ru: 'Котенок был просто маленьким комочком меха.' }
    ]
  ),
createRichWord('c2_advocacy', 'Advocacy', '/ˈædvəkəsi/', 'эдвэкэси', 'Защита / Пропаганда', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Публичная поддержка или рекомендация определенной идеи, политики или курса действий.',
    '- Деятельность: "Political advocacy" (Политическая пропаганда)\n- Группа: "Advocacy group" (Группа защиты интересов)\n- Поддержка: "Advocacy for rights" (Защита прав)',
    [
      { en: 'Her advocacy for human rights is well known.', ru: 'Ее деятельность по защите прав человека хорошо известна.' },
      { en: 'The organization focuses on the advocacy of children\'s health.', ru: 'Организация фокусируется на пропаганде здоровья детей.' },
      { en: 'He is famous for his advocacy of free speech.', ru: 'Он известен своей защитой свободы слова.' },
      { en: 'Effective advocacy can change government policy.', ru: 'Эффективная общественная защита может изменить политику правительства.' }
    ]
),

createRichWord('c2_aftermath', 'Aftermath', '/ˈɑːftəmæθ/', 'афтемэс', 'Последствия', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Период времени или последствия после значительного, часто разрушительного события (войны, катастрофы).',
    '- Событие: "In the aftermath" (Впоследствии / После)\n- Война: "Aftermath of war" (Последствия войны)\n- Кризис: "Economic aftermath" (Экономические последствия)',
    [
      { en: 'Many people were homeless in the aftermath of the earthquake.', ru: 'Многие люди остались без крова в результате землетрясения.' },
      { en: 'The country faced chaos in the aftermath of the revolution.', ru: 'Страна столкнулась с хаосом после революции.' },
      { en: 'We are still dealing with the aftermath of the financial crisis.', ru: 'Мы все еще разбираемся с последствиями финансового кризиса.' },
      { en: 'In the aftermath, new laws were passed to prevent accidents.', ru: 'Впоследствии были приняты новые законы для предотвращения аварий.' }
    ]
),

createRichWord('c2_agitate', 'Agitate', '/ˈædʒɪteɪt/', 'эджитейт', 'Агитировать / Волновать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Настойчиво призывать к чему-то (политически); или заставлять кого-то нервничать.',
    '- Политика: "Agitate for change" (Агитировать за перемены)\n- Чувства: "Don\'t agitate him" (Не волнуй его)\n- Действие: "Agitate the mixture" (Взбалтывать смесь)',
    [
      { en: 'Workers began to agitate for higher wages.', ru: 'Рабочие начали агитировать за повышение зарплаты.' },
      { en: 'The news seemed to agitate him greatly.', ru: 'Новости, казалось, сильно его взволновали.' },
      { en: 'Unions continued to agitate against the new laws.', ru: 'Профсоюзы продолжали агитировать против новых законов.' },
      { en: 'Do not agitate the patient, he needs rest.', ru: 'Не волнуйте пациента, ему нужен отдых.' }
    ]
),

createRichWord('c2_ail', 'Ail', '/eɪl/', 'эйл', 'Беспокоить / Болеть', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Причинять боль или проблемы (часто в вопросах); быть больным (устаревшее).',
    '- Вопрос: "What ails you?" (Что тебя беспокоит?)\n- Экономика: "Ailing economy" (Больная/слабая экономика)\n- Здоровье: "Ail from flu" (Болеть гриппом)',
    [
      { en: 'The doctor tried to find out what was ailing the child.', ru: 'Врач пытался выяснить, что беспокоит ребенка.' },
      { en: 'The government promised to fix the ailing economy.', ru: 'Правительство пообещало исправить слабеющую экономику.' },
      { en: 'He has been ailing for some time now.', ru: 'Он болеет уже некоторое время.' },
      { en: 'Something ails him, but he won\'t say what it is.', ru: 'Его что-то беспокоит, но он не говорит что.' }
    ]
),

createRichWord('c2_albeit', 'Albeit', '/ɔːlˈbiːɪt/', 'олбиит', 'Хотя / Даже если', ProficiencyLevel.C2, 'conj', 'Low', 'Formal',
    'Формальное слово для "although"; используется для введения уступки.',
    '- Фраза: "Albeit briefly" (Хотя и кратко)\n- Уточнение: "Albeit slowly" (Хотя и медленно)\n- Контекст: "Effective, albeit expensive" (Эффективный, хотя и дорогой)',
    [
      { en: 'He finally agreed, albeit reluctantly, to help us.', ru: 'Он наконец согласился, хотя и неохотно, помочь нам.' },
      { en: 'The technology is useful, albeit somewhat outdated.', ru: 'Технология полезна, хотя и несколько устарела.' },
      { en: 'It was a peaceful, albeit short, vacation.', ru: 'Это был спокойный, хотя и короткий, отпуск.' },
      { en: 'She smiled, albeit a little sadly.', ru: 'Она улыбнулась, хотя и немного грустно.' }
    ]
),

createRichWord('c2_allegiance', 'Allegiance', '/əˈliːdʒəns/', 'элиджэнс', 'Верность / Лояльность', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Преданность подданного своему государю или правительству; верность группе.',
    '- Клятва: "Oath of allegiance" (Клятва верности)\n- Страна: "Pledge allegiance" (Обещать верность)\n- Смена: "Switch allegiance" (Сменить лояльность)',
    [
      { en: 'Soldiers must swear an oath of allegiance to the king.', ru: 'Солдаты должны принести клятву верности королю.' },
      { en: 'He switched his allegiance to a rival football team.', ru: 'Он сменил свою лояльность на команду соперника.' },
      { en: 'My allegiance lies with my family first.', ru: 'Моя верность принадлежит прежде всего моей семье.' },
      { en: 'Citizens owe allegiance to their country.', ru: 'Граждане обязаны быть верными своей стране.' }
    ]
),

createRichWord('c2_ambiguity', 'Ambiguity', '/ˌæmbɪˈɡjuːəti/', 'эмбигьюэти', 'Двусмысленность', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Наличие нескольких возможных значений; неясность.',
    '- Речь: "Avoid ambiguity" (Избегать двусмысленности)\n- Текст: "Moral ambiguity" (Моральная неоднозначность)\n- Ясность: "Without ambiguity" (Без двусмысленности)',
    [
      { en: 'The contract was written with too much ambiguity.', ru: 'Контракт был составлен со слишком большой двусмысленностью.' },
      { en: 'There is some ambiguity in the instructions.', ru: 'В инструкциях есть некоторая неясность.' },
      { en: 'He answered the question without any ambiguity.', ru: 'Он ответил на вопрос без какой-либо двусмысленности.' },
      { en: 'The ambiguity of the ending left readers confused.', ru: 'Неоднозначность концовки оставила читателей в замешательстве.' }
    ]
),

createRichWord('c2_ammunition', 'Ammunition', '/ˌæmjəˈnɪʃn/', 'эмьюнишн', 'Боеприпасы', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Пули, снаряды и другие заряды для оружия; или факты, используемые в споре.',
    '- Оружие: "Run out of ammunition" (Израсходовать боеприпасы)\n- Спор: "Give ammunition" (Дать повод для критики)\n- Тип: "Live ammunition" (Боевые патроны)',
    [
      { en: 'The soldiers ran out of ammunition during the battle.', ru: 'У солдат закончились боеприпасы во время битвы.' },
      { en: 'His mistakes gave his opponents plenty of political ammunition.', ru: 'Его ошибки дали его оппонентам много политических "боеприпасов" (доводов).' },
      { en: 'They found a box of ammunition in the basement.', ru: 'Они нашли ящик с боеприпасами в подвале.' },
      { en: 'Police fired live ammunition at the target.', ru: 'Полиция стреляла боевыми патронами по мишени.' }
    ]
),

createRichWord('c2_amnesty', 'Amnesty', '/ˈæmnəsti/', 'эмнэсти', 'Амнистия', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Официальное решение правительства не наказывать за политические преступления.',
    '- Право: "Grant amnesty" (Предоставить амнистию)\n- Тип: "General amnesty" (Всеобщая амнистия)\n- Международное: "Amnesty International" (Международная амнистия - орг.)',
    [
      { en: 'The government granted an amnesty to all political prisoners.', ru: 'Правительство предоставило амнистию всем политзаключенным.' },
      { en: 'Rebels who surrendered were offered amnesty.', ru: 'Повстанцам, которые сдались, была предложена амнистия.' },
      { en: 'There was a brief period of amnesty for illegal immigrants.', ru: 'Был короткий период амнистии для нелегальных иммигрантов.' },
      { en: 'The amnesty allows people to hand in weapons without arrest.', ru: 'Амнистия позволяет людям сдать оружие без ареста.' }
    ]
),

createRichWord('c2_anecdote', 'Anecdote', '/ˈænɪkdəʊt/', 'эникдоут', 'Анекдот / Истории из жизни', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Короткая забавная или интересная история о реальном событии или человеке.',
    '- Разговор: "Tell an anecdote" (Рассказать историю)\n- Тип: "Amusing anecdote" (Забавная история)\n- Доказательство: "Based on anecdote" (Основано на слухах/историях)',
    [
      { en: 'He told us a funny anecdote about his time in the army.', ru: 'Он рассказал нам забавную историю о своей службе в армии.' },
      { en: 'This evidence is based on anecdote, not scientific fact.', ru: 'Это доказательство основано на историях, а не на научных фактах.' },
      { en: 'She has a wealth of anecdotes about famous people.', ru: 'У нее масса историй об известных людях.' },
      { en: 'His speech was full of personal anecdotes.', ru: 'Его речь была полна личных историй.' }
    ]
),

createRichWord('c2_angler', 'Angler', '/ˈæŋɡlə/', 'энглэ', 'Рыболов', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Человек, который ловит рыбу с помощью удочки (обычно как хобби).',
    '- Хобби: "Keen angler" (Увлеченный рыболов)\n- Спорт: "Angler fish" (Морской черт / Рыба-удильщик)\n- Действие: "Angler caught" (Рыболов поймал)',
    [
      { en: 'The angler sat patiently by the river for hours.', ru: 'Рыболов терпеливо сидел у реки часами.' },
      { en: 'Many anglers visit this lake to catch carp.', ru: 'Многие рыболовы посещают это озеро, чтобы поймать карпа.' },
      { en: 'He is a keen angler and goes fishing every weekend.', ru: 'Он заядлый рыболов и ездит на рыбалку каждые выходные.' },
      { en: 'The angler proudly displayed his catch of the day.', ru: 'Рыболов с гордостью продемонстрировал свой улов дня.' }
    ]
),

createRichWord('c2_anguish', 'Anguish', '/ˈæŋɡwɪʃ/', 'энгвиш', 'Мука / Страдание', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Сильная душевная или физическая боль и страдание.',
    '- Чувство: "Mental anguish" (Душевные муки)\n- Крик: "Cry of anguish" (Крик боли)\n- Состояние: "In anguish" (В муках)',
    [
      { en: 'She screamed in anguish when she heard the tragic news.', ru: 'Она закричала от муки, когда услышала трагическую новость.' },
      { en: 'The film depicts the anguish of families separated by war.', ru: 'Фильм изображает страдания семей, разлученных войной.' },
      { en: 'He suffered terrible mental anguish after the accident.', ru: 'Он перенес ужасные душевные муки после аварии.' },
      { en: 'His face was twisted in anguish.', ru: 'Его лицо исказилось от боли.' }
    ]
),

createRichWord('c2_anomaly', 'Anomaly', '/əˈnɒməli/', 'эномэли', 'Аномалия', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Что-то, что отклоняется от нормы, стандарта или ожидаемого.',
    '- Статистика: "Statistical anomaly" (Статистическая аномалия)\n- Космос: "Magnetic anomaly" (Магнитная аномалия)\n- Выявление: "Detect an anomaly" (Обнаружить аномалию)',
    [
      { en: 'Snow in the middle of summer is a weather anomaly.', ru: 'Снег в середине лета — это погодная аномалия.' },
      { en: 'Scientists found an anomaly in the test results.', ru: 'Ученые обнаружили аномалию в результатах теста.' },
      { en: 'This bird is a genetic anomaly with blue feathers.', ru: 'Эта птица — генетическая аномалия с синими перьями.' },
      { en: 'We must correct this anomaly in the system.', ru: 'Мы должны исправить эту аномалию в системе.' }
    ]
),

createRichWord('c2_antibody', 'Antibody', '/ˈæntibɒdi/', 'энтибоди', 'Антитело', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Белок, вырабатываемый кровью для борьбы с болезнями и бактериями.',
    '- Медицина: "Produce antibodies" (Вырабатывать антитела)\n- Тест: "Antibody test" (Тест на антитела)\n- Иммунитет: "Antibody response" (Ответ антител)',
    [
      { en: 'Antibodies help your body fight off infections.', ru: 'Антитела помогают вашему организму бороться с инфекциями.' },
      { en: 'The vaccine stimulates the production of antibodies.', ru: 'Вакцина стимулирует выработку антител.' },
      { en: 'They tested his blood for specific antibodies.', ru: 'Его кровь проверили на наличие специфических антител.' },
      { en: 'Sometimes the body produces antibodies against its own tissues.', ru: 'Иногда организм вырабатывает антитела против собственных тканей.' }
    ]
),

createRichWord('c2_appendix', 'Appendix', '/əˈpendɪks/', 'эпендикс', 'Приложение / Аппендикс', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Раздел с дополнительной информацией в конце книги; или маленький орган в теле.',
    '- Книга: "See the appendix" (Смотри приложение)\n- Тело: "Burst appendix" (Лопнувший аппендикс)\n- Операция: "Remove appendix" (Удалить аппендикс)',
    [
      { en: 'You can find a list of dates in the appendix of the book.', ru: 'Вы можете найти список дат в приложении к книге.' },
      { en: 'He was rushed to hospital to have his appendix removed.', ru: 'Его срочно доставили в больницу для удаления аппендикса.' },
      { en: 'The appendix contains detailed charts and tables.', ru: 'Приложение содержит подробные диаграммы и таблицы.' },
      { en: 'Doctors believe the appendix has no vital function.', ru: 'Врачи считают, что аппендикс не имеет жизненно важной функции.' }
    ]
),

createRichWord('c2_apprehend', 'Apprehend', '/ˌæprɪˈhend/', 'эприхэнд', 'Задерживать / Понимать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Арестовать кого-то за преступление (полиция); или (устар./форм.) понять или воспринять.',
    '- Полиция: "Apprehend a suspect" (Задержать подозреваемого)\n- Понимание: "Apprehend danger" (Осознать опасность)\n- Правосудие: "Failed to apprehend" (Не удалось задержать)',
    [
      { en: 'The police managed to apprehend the thief near the bank.', ru: 'Полиции удалось задержать вора возле банка.' },
      { en: 'It took weeks to apprehend the escaped prisoner.', ru: 'Потребовались недели, чтобы поймать сбежавшего заключенного.' },
      { en: 'He failed to apprehend the significance of the event.', ru: 'Он не смог осознать значимость этого события.' },
      { en: 'The killer remains armed and has not yet been apprehended.', ru: 'Убийца остается вооруженным и еще не задержан.' }
    ]
),

createRichWord('c2_appropriated', 'Appropriated', '/əˈprəʊprieɪtɪd/', 'эпроуприэйтид', 'Присвоенный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Взятый для собственного использования, часто без разрешения; или выделенный для цели.',
    '- Действие: "Appropriated funds" (Присвоенные/выделенные средства)\n- Культура: "Culturally appropriated" (Культурно присвоенный)\n- Земля: "Appropriated land" (Присвоенная земля)',
    [
      { en: 'The land was appropriated by the government for a new road.', ru: 'Земля была присвоена правительством для новой дороги.' },
      { en: 'He was accused of using appropriated funds for personal trips.', ru: 'Его обвинили в использовании присвоенных средств для личных поездок.' },
      { en: 'Symbols from other cultures are sometimes inappropriately appropriated.', ru: 'Символы других культур иногда неуместно присваиваются.' },
      { en: 'The appropriated money was used to build schools.', ru: 'Выделенные (присвоенные под цель) деньги пошли на строительство школ.' }
    ]
),

createRichWord('c2_apt', 'Apt', '/æpt/', 'эпт', 'Подходящий / Склонный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Уместный в данных обстоятельствах; или имеющий тенденцию делать что-то.',
    '- Ситуация: "Apt description" (Меткое описание)\n- Склонность: "Apt to forget" (Склонный забывать)\n- Ученик: "Apt student" (Способный ученик)',
    [
      { en: 'That is a very apt description of his character.', ru: 'Это очень меткое описание его характера.' },
      { en: 'He is apt to lose his temper when he is tired.', ru: 'Он склонен выходить из себя, когда устал.' },
      { en: 'Usually an apt student, he failed the test today.', ru: 'Обычно способный ученик, сегодня он провалил тест.' },
      { en: 'It was an apt remark for such a solemn occasion.', ru: 'Это было уместное замечание для такого торжественного случая.' }
    ]
),

createRichWord('c2_arbitrary', 'Arbitrary', '/ˈɑːbɪtrəri/', 'абитрери', 'Произвольный', ProficiencyLevel.C2, 'adj', 'Medium', 'Formal',
    'Основанный на случайном выборе или личной прихоти, а не на системе.',
    '- Решение: "Arbitrary decision" (Произвольное решение)\n- Власть: "Arbitrary power" (Произвол власти)\n- Правило: "Arbitrary rule" (Произвольное правило)',
    [
      { en: 'The decision to fire him seemed completely arbitrary.', ru: 'Решение уволить его казалось совершенно произвольным.' },
      { en: 'A good legal system protects against arbitrary arrests.', ru: 'Хорошая правовая система защищает от произвольных арестов.' },
      { en: 'The choice of colors was arbitrary, not planned.', ru: 'Выбор цветов был произвольным, а не запланированным.' },
      { en: 'Dictators often use arbitrary power to rule people.', ru: 'Диктаторы часто используют произвольную власть для управления людьми.' }
    ]
),

createRichWord('c2_arbitrate', 'Arbitrate', '/ˈɑːbɪtreɪt/', 'абитрейт', 'Быть третейским судьей / Рассудить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Официально судить спор между двумя сторонами для достижения соглашения.',
    '- Спор: "Arbitrate a dispute" (Рассудить спор)\n- Посредник: "Agree to arbitrate" (Согласиться на арбитраж)\n- Власть: "Power to arbitrate" (Власть судить)',
    [
      { en: 'An independent official was appointed to arbitrate the dispute.', ru: 'Для разрешения спора был назначен независимый чиновник.' },
      { en: 'They agreed to arbitrate instead of going to court.', ru: 'Они согласились на арбитраж вместо того, чтобы идти в суд.' },
      { en: 'The committee has the power to arbitrate between members.', ru: 'Комитет имеет полномочия судить споры между членами.' },
      { en: 'He was asked to arbitrate in the disagreement.', ru: 'Его попросили выступить судьей в разногласии.' }
    ]
),

createRichWord('c2_arc', 'Arc', '/ɑːk/', 'ак', 'Дуга', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Часть кривой линии; или форма, изогнутая как лук; сюжетная арка.',
    '- Форма: "Draw an arc" (Нарисовать дугу)\n- Движение: "Move in an arc" (Двигаться по дуге)\n- История: "Story arc" (Сюжетная арка)',
    [
      { en: 'The ball flew in a high arc across the field.', ru: 'Мяч пролетел по высокой дуге через поле.' },
      { en: 'He drew an arc on the paper with a compass.', ru: 'Он нарисовал дугу на бумаге циркулем.' },
      { en: 'The character has an interesting story arc in the series.', ru: 'У персонажа интересная сюжетная арка в сериале.' },
      { en: 'The rainbow formed a perfect arc in the sky.', ru: 'Радуга образовала идеальную дугу в небе.' }
    ]
),

createRichWord('c2_artillery', 'Artillery', '/ɑːˈtɪləri/', 'атилэри', 'Артиллерия', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Крупнокалиберные пушки, используемые в войне на суше.',
    '- Война: "Heavy artillery" (Тяжелая артиллерия)\n- Звук: "Artillery fire" (Артиллерийский огонь)\n- Атака: "Artillery shell" (Артиллерийский снаряд)',
    [
      { en: 'The sound of heavy artillery could be heard all night.', ru: 'Звук тяжелой артиллерии был слышен всю ночь.' },
      { en: 'Artillery support was called in to help the troops.', ru: 'Была вызвана артиллерийская поддержка для помощи войскам.' },
      { en: 'The city was destroyed by artillery fire.', ru: 'Город был разрушен артиллерийским огнем.' },
      { en: 'An artillery shell exploded near the bunker.', ru: 'Артиллерийский снаряд взорвался возле бункера.' }
    ]
),

createRichWord('c2_assimilate', 'Assimilate', '/əˈsɪmɪleɪt/', 'эсимилейт', 'Ассимилировать(ся) / Усваивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Стать частью группы или страны; или полностью понять и использовать новую информацию.',
    '- Культура: "Assimilate into society" (Ассимилироваться в общество)\n- Информация: "Assimilate facts" (Усваивать факты)\n- Процесс: "Quick to assimilate" (Быстро усваивать)',
    [
      { en: 'Immigrants often try to assimilate into the local culture.', ru: 'Иммигранты часто пытаются ассимилироваться в местную культуру.' },
      { en: 'It takes time to assimilate all this new information.', ru: 'Требуется время, чтобы усвоить всю эту новую информацию.' },
      { en: 'The company assimilated the smaller firm into its structure.', ru: 'Компания ассимилировала (включила) меньшую фирму в свою структуру.' },
      { en: 'Children assimilate languages very quickly.', ru: 'Дети очень быстро усваивают языки.' }
    ]
),

createRichWord('c2_asylum', 'Asylum', '/əˈsaɪləm/', 'эсайлэм', 'Убежище', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Защита, предоставляемая правительством беженцам; или (устар.) психиатрическая больница.',
    '- Политика: "Political asylum" (Политическое убежище)\n- Действие: "Seek asylum" (Искать убежища)\n- Люди: "Asylum seeker" (Искатель убежища)',
    [
      { en: 'He applied for political asylum in France.', ru: 'Он подал прошение о политическом убежище во Франции.' },
      { en: 'Hundreds of refugees are seeking asylum in Europe.', ru: 'Сотни беженцев ищут убежища в Европе.' },
      { en: 'The old building used to be a lunatic asylum.', ru: 'Старое здание раньше было сумасшедшим домом (убежищем).' },
      { en: 'She was granted asylum after fleeing the war.', ru: 'Ей предоставили убежище после бегства от войны.' }
    ]
  ),
createRichWord('c2_autobiography', 'Autobiography', '/ɔːtəbaɪˈɒɡrəfi/', 'отобайографи', 'Автобиография', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Книга о жизни человека, написанная им самим.',
    '- Книга: "Write an autobiography" (Написать автобиографию)\n- Жанр: "Literary autobiography" (Литературная автобиография)\n- История: "Publish an autobiography" (Опубликовать автобиографию)',
    [
      { en: 'In his autobiography, he describes his childhood in poverty.', ru: 'В своей автобиографии он описывает свое детство в бедности.' },
      { en: 'She is currently writing her autobiography.', ru: 'В данный момент она пишет свою автобиографию.' },
      { en: 'The autobiography became a bestseller immediately.', ru: 'Автобиография сразу стала бестселлером.' },
      { en: 'An autobiography gives a personal perspective on history.', ru: 'Автобиография дает личный взгляд на историю.' }
    ]
),

createRichWord('c2_baptist', 'Baptist', '/ˈbæptɪst/', 'бэптист', 'Баптист', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Член христианской протестантской группы, верящей в крещение только взрослых.',
    '- Религия: "Baptist church" (Баптистская церковь)\n- Человек: "He is a Baptist" (Он баптист)\n- История: "John the Baptist" (Иоанн Креститель)',
    [
      { en: 'They attend the local Baptist church every Sunday.', ru: 'Они посещают местную баптистскую церковь каждое воскресенье.' },
      { en: 'Martin Luther King Jr. was a Baptist minister.', ru: 'Мартин Лютер Кинг-младший был баптистским священником.' },
      { en: 'The Baptist tradition emphasizes adult baptism.', ru: 'Баптистская традиция подчеркивает крещение взрослых.' },
      { en: 'John the Baptist is a major figure in the Bible.', ru: 'Иоанн Креститель — важная фигура в Библии.' }
    ]
),

createRichWord('c2_baron', 'Baron', '/ˈbærən/', 'бэрэн', 'Барон / Магнат', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Дворянский титул; или могущественный человек в бизнесе (магнат).',
    '- Титул: "Baron Smith" (Барон Смит)\n- Бизнес: "Oil baron" (Нефтяной магнат)\n- Власть: "Media baron" (Медиа-магнат)',
    [
      { en: 'The baron lived in a large castle on the hill.', ru: 'Барон жил в большом замке на холме.' },
      { en: 'He became a wealthy oil baron in Texas.', ru: 'Он стал богатым нефтяным магнатом в Техасе.' },
      { en: 'The press barons control what news we see.', ru: 'Медиа-магнаты контролируют то, какие новости мы видим.' },
      { en: 'She married a German baron.', ru: 'Она вышла замуж за немецкого барона.' }
    ]
),

createRichWord('c2_beta', 'Beta', '/ˈbiːtə/', 'битэ', 'Бета', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Вторая буква греческого алфавита; или стадия тестирования программного обеспечения.',
    '- ПО: "Beta version" (Бета-версия)\n- Тест: "Beta tester" (Бета-тестер)\n- Наука: "Beta blocker" (Бета-блокатор)',
    [
      { en: 'The game is still in the beta stage of development.', ru: 'Игра все еще находится на стадии бета-разработки.' },
      { en: 'Beta testers report bugs to the developers.', ru: 'Бета-тестеры сообщают об ошибках разработчикам.' },
      { en: 'He takes beta blockers for his heart condition.', ru: 'Он принимает бета-блокаторы для своего сердца.' },
      { en: 'Alpha is the first letter, and beta is the second.', ru: 'Альфа — первая буква, а бета — вторая.' }
    ]
),

createRichWord('c2_bourgeois', 'Bourgeois', '/ˈbʊəʒwɑː/', 'бужуа', 'Буржуазный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к среднему классу, часто с оттенком консерватизма и материализма.',
    '- Общество: "Bourgeois society" (Буржуазное общество)\n- Ценности: "Bourgeois values" (Буржуазные ценности)\n- Класс: "Petit bourgeois" (Мелкий буржуа)',
    [
      { en: 'They rebelled against their parents\' bourgeois lifestyle.', ru: 'Они восстали против буржуазного образа жизни своих родителей.' },
      { en: 'He criticized the bourgeois values of the middle class.', ru: 'Он критиковал буржуазные ценности среднего класса.' },
      { en: 'The revolution aimed to overthrow the bourgeois government.', ru: 'Революция была направлена на свержение буржуазного правительства.' },
      { en: 'She found his tastes rather bourgeois and boring.', ru: 'Она нашла его вкусы довольно буржуазными и скучными.' }
    ]
  ),
createRichWord('c2_abound', 'Abound', '/əˈbaʊnd/', 'эбаунд', 'Изобиловать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Существовать в большом количестве.',
    '- Количество: "Stories abound" (Историй предостаточно)\n- Природа: "Fish abound" (Рыба водится в изобилии)\n- Слухи: "Rumors abound" (Слухов полным-полно)',
    [
      { en: 'Rumors abound regarding the CEO\'s resignation.', ru: 'Ходит множество слухов об отставке генерального директора.' },
      { en: 'Wildflowers abound in this valley during spring.', ru: 'Полевые цветы изобилуют в этой долине весной.' },
      { en: 'Examples of his generosity abound.', ru: 'Примеров его щедрости предостаточно.' },
      { en: 'Opportunities abound for those who are willing to work.', ru: 'Возможностей предостаточно для тех, кто готов работать.' }
    ]
),

createRichWord('c2_accredit', 'Accredit', '/əˈkredɪt/', 'экредит', 'Аккредитовывать / Приписывать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Официально признавать или уполномочивать; приписывать (цитату, действие).',
    '- Статус: "Accredited university" (Аккредитованный университет)\n- Журналистика: "Accredited journalist" (Аккредитованный журналист)\n- Авторство: "Accredit a quote" (Приписать цитату)',
    [
      { en: 'The university is fully accredited by the government.', ru: 'Университет полностью аккредитован правительством.' },
      { en: 'Only accredited journalists were allowed into the briefing.', ru: 'Только аккредитованные журналисты были допущены на брифинг.' },
      { en: 'This saying is often accredited to Shakespeare.', ru: 'Это высказывание часто приписывают Шекспиру.' },
      { en: 'The discovery was accredited to a team of young scientists.', ru: 'Открытие было приписано команде молодых ученых.' }
    ]
),

createRichWord('c2_accrue', 'Accrue', '/əˈkruː/', 'экру', 'Накапливаться / Нарастать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Увеличиваться со временем (о деньгах, процентах, выгоде).',
    '- Финансы: "Interest accrues" (Проценты накапливаются)\n- Выгода: "Benefits accrue" (Выгоды нарастают)\n- Право: "Rights accrue" (Права возникают)',
    [
      { en: 'Interest will accrue on the account from the first of the month.', ru: 'Проценты будут начисляться на счет с первого числа месяца.' },
      { en: 'Benefits accrue to those who invest early.', ru: 'Выгоды достаются тем, кто инвестирует рано.' },
      { en: 'Vacation time accrues at a rate of two days per month.', ru: 'Отпускное время накапливается из расчета два дня в месяц.' },
      { en: 'Little benefit will accrue from this deal.', ru: 'От этой сделки будет мало пользы.' }
    ]
),

createRichWord('c2_acquit', 'Acquit', '/əˈkwɪt/', 'эквит', 'Оправдать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Решить в суде, что кто-то не виновен в преступлении.',
    '- Суд: "Acquit of charges" (Оправдать по обвинению)\n- Решение: "Jury acquitted" (Присяжные оправдали)\n- Поведение: "Acquit oneself well" (Хорошо проявить себя - идиома)',
    [
      { en: 'The jury decided to acquit him of the murder charge.', ru: 'Присяжные решили оправдать его по обвинению в убийстве.' },
      { en: 'She was acquitted due to lack of evidence.', ru: 'Ее оправдали из-за недостатка улик.' },
      { en: 'He acquitted himself well in the difficult debate.', ru: 'Он хорошо проявил себя в сложных дебатах.' },
      { en: 'Though acquitted, his reputation was ruined.', ru: 'Хотя его оправдали, его репутация была разрушена.' }
    ]
),

createRichWord('c2_adjoin', 'Adjoin', '/əˈdʒɔɪn/', 'эджойн', 'Примыкать / Граничить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Находиться рядом или быть соединенным с чем-то.',
    '- Место: "Adjoining room" (Смежная комната)\n- Земля: "Adjoin the property" (Граничить с собственностью)\n- Здание: "The stables adjoin the house" (Конюшни примыкают к дому)',
    [
      { en: 'We booked two adjoining rooms for our family.', ru: 'Мы забронировали две смежные комнаты для нашей семьи.' },
      { en: 'A large park adjoins the school grounds.', ru: 'Большой парк примыкает к территории школы.' },
      { en: 'The kitchen adjoins the dining area.', ru: 'Кухня примыкает к обеденной зоне.' },
      { en: 'Her office adjoins the director\'s suite.', ru: 'Ее офис граничит с кабинетом директора.' }
    ]
),

createRichWord('c2_advent', 'Advent', '/ˈædvent/', 'эдвент', 'Приход / Наступление', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Прибытие заметного человека, вещи или события (часто эпохи).',
    '- Технологии: "Advent of the internet" (Появление интернета)\n- Время: "With the advent of" (С наступлением/появлением)\n- Сезон: "Advent calendar" (Рождественский календарь)',
    [
      { en: 'The advent of the computer changed the world forever.', ru: 'Появление компьютера навсегда изменило мир.' },
      { en: 'Life was harder before the advent of electricity.', ru: 'Жизнь была тяжелее до появления электричества.' },
      { en: 'With the advent of spring, flowers began to bloom.', ru: 'С наступлением весны начали цвести цветы.' },
      { en: 'The advent of new regulations caused confusion.', ru: 'Введение новых правил вызвало путаницу.' }
    ]
),

createRichWord('c2_affinity', 'Affinity', '/əˈfɪnəti/', 'эфинэти', 'Близость / Сродство', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Естественная симпатия или понимание чего-либо; сходство.',
    '- Чувство: "Feel an affinity" (Чувствовать близость)\n- Связь: "Affinity between" (Сходство между)\n- Химия: "Chemical affinity" (Химическое сродство)',
    [
      { en: 'She felt a strong affinity with the author\'s ideas.', ru: 'Она чувствовала сильную близость идеям автора.' },
      { en: 'There is a close affinity between the two languages.', ru: 'Между этими двумя языками существует тесное сродство.' },
      { en: 'He has a natural affinity for working with animals.', ru: 'У него природная склонность к работе с животными.' },
      { en: 'Water has a high affinity for salt.', ru: 'Вода имеет высокое сродство к соли.' }
    ]
),

createRichWord('c2_afflict', 'Afflict', '/əˈflɪkt/', 'эфликт', 'Поражать / Огорчать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Причинять боль, страдание или беду.',
    '- Болезнь: "Afflicted with" (Страдающий от)\n- Проблема: "Famine afflicts" (Голод поражает)\n- Состояние: "Afflict the poor" (Поражать бедных)',
    [
      { en: 'Millions of people are afflicted by poverty.', ru: 'Миллионы людей страдают от бедности.' },
      { en: 'He was afflicted with a rare skin disease.', ru: 'Он страдал редким кожным заболеванием.' },
      { en: 'Civil war continues to afflict the region.', ru: 'Гражданская война продолжает терзать регион.' },
      { en: 'Arthritis can afflict people of all ages.', ru: 'Артрит может поражать людей всех возрастов.' }
    ]
),

createRichWord('c2_akin', 'Akin', '/əˈkɪn/', 'экин', 'Сродни / Похожий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Очень похожий по характеру (обычно "akin to").',
    '- Сравнение: "Akin to" (Сродни)\n- Чувство: "Something akin to fear" (Что-то сродни страху)\n- Связь: "Closely akin" (Тесно связанный)',
    [
      { en: 'His feeling was akin to panic.', ru: 'Его чувство было сродни панике.' },
      { en: 'The taste is akin to a lemon but sweeter.', ru: 'Вкус похож на лимон, но слаще.' },
      { en: 'This game is closely akin to rugby.', ru: 'Эта игра очень похожа на регби.' },
      { en: 'What he did was akin to theft.', ru: 'То, что он сделал, было сродни краже.' }
    ]
),

createRichWord('c2_alas', 'Alas', '/əˈlæs/', 'элэс', 'Увы', ProficiencyLevel.C2, 'adv', 'Low', 'Literary',
    'Выражение печали или сожаления.',
    '- Фраза: "But alas" (Но увы)\n- Контекст: "Alas, it is too late" (Увы, слишком поздно)\n- Эмоция: "Sigh alas" (Вздохнуть "увы")',
    [
      { en: 'I wanted to help, but alas, I have no money.', ru: 'Я хотел помочь, но увы, у меня нет денег.' },
      { en: 'Alas, the beautiful old building was demolished.', ru: 'Увы, красивое старое здание было снесено.' },
      { en: 'He tried his best, but alas, he failed.', ru: 'Он старался изо всех сил, но увы, потерпел неудачу.' },
      { en: 'Life, alas, is not always fair.', ru: 'Жизнь, увы, не всегда справедлива.' }
    ]
),

createRichWord('c2_ale', 'Ale', '/eɪl/', 'эйл', 'Эль', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Тип пива, сброженного верховым брожением, обычно горьковатое.',
    '- Напиток: "Pint of ale" (Пинта эля)\n- Тип: "Pale ale" (Светлый эль)\n- Место: "Real ale pub" (Паб с настоящим элем)',
    [
      { en: 'He ordered a pint of traditional English ale.', ru: 'Он заказал пинту традиционного английского эля.' },
      { en: 'This brewery produces a very strong ale.', ru: 'Эта пивоварня производит очень крепкий эль.' },
      { en: 'Ale is usually served warmer than lager.', ru: 'Эль обычно подают более теплым, чем лагер.' },
      { en: 'Do you prefer pale ale or dark stout?', ru: 'Вы предпочитаете светлый эль или темный стаут?' }
    ]
),

createRichWord('c2_amber', 'Amber', '/ˈæmbə/', 'эмбэ', 'Янтарь / Янтарный цвет', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Твердая желтоватая смола, используемая в ювелирном деле; или желто-оранжевый цвет (светофора).',
    '- Камень: "Amber necklace" (Янтарное ожерелье)\n- Цвет: "Amber light" (Желтый сигнал светофора)\n- Ископаемое: "Insect in amber" (Насекомое в янтаре)',
    [
      { en: 'The necklace was made of polished amber beads.', ru: 'Ожерелье было сделано из полированных янтарных бусин.' },
      { en: 'The traffic light turned from green to amber.', ru: 'Светофор переключился с зеленого на желтый.' },
      { en: 'Scientists found an ancient insect trapped in amber.', ru: 'Ученые нашли древнее насекомое, застывшее в янтаре.' },
      { en: 'Her eyes were a striking shade of amber.', ru: 'Ее глаза были поразительного янтарного оттенка.' }
    ]
),

createRichWord('c2_ambivalent', 'Ambivalent', '/æmˈbɪvələnt/', 'эмбивэлэнт', 'Двойственный / Противоречивый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Имеющий смешанные чувства (и хорошие, и плохие) по поводу чего-то.',
    '- Чувство: "Ambivalent attitude" (Двойственное отношение)\n- Мнение: "Ambivalent about" (Сомневающийся насчет)\n- Отношения: "Ambivalent relationship" (Противоречивые отношения)',
    [
      { en: 'I feel ambivalent about moving to a new city.', ru: 'У меня двойственные чувства по поводу переезда в новый город.' },
      { en: 'He has an ambivalent relationship with his father.', ru: 'У него противоречивые отношения с отцом.' },
      { en: 'Critics were ambivalent about the new movie.', ru: 'Критики неоднозначно отнеслись к новому фильму.' },
      { en: 'Her ambivalent reply confused us all.', ru: 'Ее уклончивый ответ сбил нас всех с толку.' }
    ]
),

createRichWord('c2_analogous', 'Analogous', '/əˈnæləɡəs/', 'энэлэгэс', 'Аналогичный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Схожий в некоторых отношениях, позволяющий провести аналогию.',
    '- Сравнение: "Analogous to" (Аналогичный чему-то)\n- Ситуация: "Analogous situation" (Аналогичная ситуация)\n- Пример: "In an analogous way" (Аналогичным образом)',
    [
      { en: 'The human eye is analogous to a camera.', ru: 'Человеческий глаз аналогичен камере.' },
      { en: 'Their legal system is analogous to ours.', ru: 'Их правовая система аналогична нашей.' },
      { en: 'We faced an analogous problem last year.', ru: 'Мы столкнулись с аналогичной проблемой в прошлом году.' },
      { en: 'The two processes are roughly analogous.', ru: 'Эти два процесса примерно аналогичны.' }
    ]
),

createRichWord('c2_annex', 'Annex', '/əˈneks/', 'энекс', 'Аннексировать / Пристройка', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Насильственно присоединять территорию (глагол); или дополнительное здание (сущ., ударение на 1 слог).',
    '- Политика: "Annex territory" (Аннексировать территорию)\n- Здание: "Hotel annex" (Флигель отеля)\n- Действие: "Illegal annexation" (Незаконная аннексия)',
    [
      { en: 'The country voted to annex the neighboring province.', ru: 'Страна проголосовала за аннексию соседней провинции.' },
      { en: 'We stayed in the annex of the main hotel.', ru: 'Мы остановились во флигеле главного отеля.' },
      { en: 'The annexation was condemned by the international community.', ru: 'Аннексия была осуждена международным сообществом.' },
      { en: 'They plan to annex the old garage to the house.', ru: 'Они планируют присоединить старый гараж к дому.' }
    ]
),

createRichWord('c2_ante', 'Ante', '/ˈænti/', 'энти', 'Ставка / Взнос', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Сумма денег, которую платит игрок перед получением карт в покере; или ставка в рискованном деле.',
    '- Игра: "Up the ante" (Поднять ставки)\n- Покер: "Place an ante" (Сделать начальную ставку)\n- Риск: "High ante" (Высокая ставка)',
    [
      { en: 'The government decided to up the ante in the trade war.', ru: 'Правительство решило поднять ставки в торговой войне.' },
      { en: 'Before dealing the cards, everyone must pay the ante.', ru: 'Перед раздачей карт каждый должен внести анте (начальную ставку).' },
      { en: 'They upped the ante by offering a higher salary.', ru: 'Они подняли ставки, предложив более высокую зарплату.' },
      { en: 'The political ante is getting higher every day.', ru: 'Политические ставки растут с каждым днем.' }
    ]
),

createRichWord('c2_apostle', 'Apostle', '/əˈpɒs(ə)l/', 'эпосл', 'Апостол', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Один из двенадцати учеников Иисуса; или ревностный последователь учения.',
    '- Религия: "Twelve Apostles" (Двенадцать апостолов)\n- Учение: "Apostle of peace" (Апостол мира)\n- Лидер: "Chief apostle" (Главный апостол)',
    [
      { en: 'St. Peter was one of the Twelve Apostles.', ru: 'Святой Петр был одним из двенадцати апостолов.' },
      { en: 'He was known as an apostle of non-violence.', ru: 'Он был известен как апостол ненасилия.' },
      { en: 'The apostles traveled to spread the message.', ru: 'Апостолы путешествовали, чтобы распространять учение.' },
      { en: 'She is a dedicated apostle of healthy living.', ru: 'Она преданный проповедник (апостол) здорового образа жизни.' }
    ]
),

createRichWord('c2_artisan', 'Artisan', '/ˌɑːtɪˈzæn/', 'атизэн', 'Ремесленник / Мастер', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Рабочий, обладающий навыком ручного труда; мастер.',
    '- Работа: "Local artisan" (Местный ремесленник)\n- Продукт: "Artisan bread" (Ремесленный хлеб)\n- Мастерство: "Skilled artisan" (Искусный мастер)',
    [
      { en: 'The market sells goods made by local artisans.', ru: 'На рынке продаются товары, сделанные местными ремесленниками.' },
      { en: 'This bakery specializes in artisan bread.', ru: 'Эта пекарня специализируется на ремесленном хлебе.' },
      { en: 'An artisan carved this beautiful wooden statue.', ru: 'Мастер вырезал эту красивую деревянную статую.' },
      { en: 'They support traditional artisan crafts.', ru: 'Они поддерживают традиционные ремесла.' }
    ]
),

createRichWord('c2_ascertain', 'Ascertain', '/ˌæsəˈteɪn/', 'эсэтейн', 'Устанавливать / Выяснять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Выяснить что-то наверняка; убедиться.',
    '- Факт: "Ascertain the truth" (Установить истину)\n- Причина: "Ascertain the cause" (Выяснить причину)\n- Действие: "Try to ascertain" (Пытаться выяснить)',
    [
      { en: 'The police are trying to ascertain the cause of the fire.', ru: 'Полиция пытается установить причину пожара.' },
      { en: 'It was difficult to ascertain exactly what happened.', ru: 'Было трудно выяснить, что именно произошло.' },
      { en: 'We must ascertain whether the report is accurate.', ru: 'Мы должны убедиться, точен ли отчет.' },
      { en: 'I phoned to ascertain the time of the meeting.', ru: 'Я позвонил, чтобы уточнить время встречи.' }
    ]
),

createRichWord('c2_ascribe', 'Ascribe', '/əˈskraɪb/', 'эскрайб', 'Приписывать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Считать, что что-то вызвано чем-то или принадлежит кому-то.',
    '- Причина: "Ascribe to luck" (Приписывать удаче)\n- Авторство: "Ascribe a quote" (Приписывать цитату)\n- Качество: "Ascribe importance" (Придавать значение)',
    [
      { en: 'He ascribes his success to hard work and patience.', ru: 'Он приписывает свой успех упорному труду и терпению.' },
      { en: 'This poem is usually ascribed to Homer.', ru: 'Это стихотворение обычно приписывают Гомеру.' },
      { en: 'They ascribed magical powers to the stone.', ru: 'Они приписывали камню магические силы.' },
      { en: 'Do not ascribe motives to me that I do not have.', ru: 'Не приписывайте мне мотивов, которых у меня нет.' }
    ]
),

createRichWord('c2_assail', 'Assail', '/əˈseɪl/', 'эсейл', 'Нападать / Одолевать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Нападать физически или с критикой; или (о чувствах) одолевать.',
    '- Атака: "Assail the enemy" (Нападать на врага)\n- Критика: "Assail with questions" (Засыпать вопросами)\n- Чувство: "Assailed by doubts" (Одолеваемый сомнениями)',
    [
      { en: 'The army prepared to assail the fortress.', ru: 'Армия готовилась штурмовать крепость.' },
      { en: 'He was assailed by doubts about his decision.', ru: 'Его одолевали сомнения по поводу его решения.' },
      { en: 'Critics assailed the new policy as unfair.', ru: 'Критики нападали на новую политику как на несправедливую.' },
      { en: 'A terrible smell assailed our noses.', ru: 'Ужасный запах ударил нам в нос.' }
    ]
),

createRichWord('c2_asymmetry', 'Asymmetry', '/ˌeɪˈsɪmətri/', 'эйсимэтри', 'Асимметрия', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Отсутствие равенства или эквивалентности между частями чего-либо.',
    '- Форма: "Facial asymmetry" (Асимметрия лица)\n- Баланс: "Information asymmetry" (Асимметрия информации)\n- Искусство: "Create asymmetry" (Создать асимметрию)',
    [
      { en: 'The asymmetry of the building makes it unique.', ru: 'Асимметрия здания делает его уникальным.' },
      { en: 'There is an asymmetry of power in the relationship.', ru: 'В отношениях существует асимметрия власти.' },
      { en: 'Perfect symmetry is rare; asymmetry is more natural.', ru: 'Идеальная симметрия редка; асимметрия более естественна.' },
      { en: 'Information asymmetry can lead to market failure.', ru: 'Асимметрия информации может привести к сбою рынка.' }
    ]
  ),
createRichWord('c2_aura', 'Aura', '/ˈɔːrə/', 'орэ', 'Аура / Атмосфера', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Особая атмосфера или чувство, которое исходит от человека или места.',
    '- Человек: "Aura of confidence" (Аура уверенности)\n- Место: "Mysterious aura" (Таинственная атмосфера)\n- Чувство: "Aura of power" (Аура власти)',
    [
      { en: 'There was an aura of mystery surrounding the old house.', ru: 'Старый дом окружала атмосфера (аура) таинственности.' },
      { en: 'She projects an aura of calm and confidence.', ru: 'Она излучает ауру спокойствия и уверенности.' },
      { en: 'The leader had an aura of authority that commanded respect.', ru: 'Лидер обладал аурой власти, которая вызывала уважение.' },
      { en: 'Some people claim they can see a person\'s aura.', ru: 'Некоторые люди утверждают, что могут видеть ауру человека.' }
    ]
),

createRichWord('c2_austere', 'Austere', '/ɒˈstɪə/', 'остиэ', 'Строгий / Аскетичный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Очень простой, без украшений; или строгий и суровый в манерах.',
    '- Стиль: "Austere life" (Аскетичная жизнь)\n- Внешность: "Austere look" (Суровый вид)\n- Условия: "Austere conditions" (Суровые условия)',
    [
      { en: 'The monks lived a very austere life in the mountains.', ru: 'Монахи вели очень аскетичную жизнь в горах.' },
      { en: 'The room was austere, with only a bed and a chair.', ru: 'Комната была аскетичной, только с кроватью и стулом.' },
      { en: 'He was an austere man who rarely smiled.', ru: 'Он был суровым человеком, который редко улыбался.' },
      { en: 'Economic hardship forced the government to adopt austere measures.', ru: 'Экономические трудности заставили правительство принять жесткие меры.' }
    ]
),

createRichWord('c2_authoritative', 'Authoritative', '/ɔːˈθɒrɪtətɪv/', 'осоритэтив', 'Авторитетный / Властный', ProficiencyLevel.C2, 'adj', 'Medium', 'Formal',
    'Показывающий, что вы уверены и имеете право командовать; или надежный (об источнике).',
    '- Тон: "Authoritative voice" (Властный голос)\n- Источник: "Authoritative guide" (Авторитетное руководство)\n- Поведение: "Authoritative manner" (Властная манера)',
    [
      { en: 'She spoke in a clear, authoritative voice.', ru: 'Она говорила четким, властным голосом.' },
      { en: 'This book is the most authoritative guide on the subject.', ru: 'Эта книга — самое авторитетное руководство по данному предмету.' },
      { en: 'He has an authoritative manner that makes people listen.', ru: 'У него властная манера, которая заставляет людей слушать.' },
      { en: 'We need an authoritative decision on this matter.', ru: 'Нам нужно авторитетное решение по этому вопросу.' }
    ]
),

createRichWord('c2_avert', 'Avert', '/əˈvɜːt/', 'эвёт', 'Предотвращать / Отводить (взгляд)', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Предотвратить что-то плохое; или отвести глаза/взгляд.',
    '- Опасность: "Avert disaster" (Предотвратить катастрофу)\n- Глаза: "Avert your gaze" (Отвести взгляд)\n- Кризис: "Avert a crisis" (Предотвратить кризис)',
    [
      { en: 'Quick action helped to avert a major disaster.', ru: 'Быстрые действия помогли предотвратить крупную катастрофу.' },
      { en: 'She averted her eyes to hide her tears.', ru: 'Она отвела глаза, чтобы скрыть слезы.' },
      { en: 'Diplomats are trying to avert a war.', ru: 'Дипломаты пытаются предотвратить войну.' },
      { en: 'He couldn\'t avert the inevitable tragedy.', ru: 'Он не смог предотвратить неизбежную трагедию.' }
    ]
),

createRichWord('c2_baffle', 'Baffle', '/ˈbæf(ə)l/', 'бэфл', 'Сбивать с толку / Озадачивать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Полностью запутать кого-то; быть невозможным для понимания.',
    '- Состояние: "Completely baffled" (Полностью озадачен)\n- Проблема: "Baffling mystery" (Загадочная тайна)\n- Наука: "Baffle scientists" (Озадачить ученых)',
    [
      { en: 'The strange disease continued to baffle doctors.', ru: 'Странная болезнь продолжала ставить врачей в тупик.' },
      { en: 'I was completely baffled by his strange behavior.', ru: 'Я был полностью сбит с толку его странным поведением.' },
      { en: 'The instructions were so complex they baffled everyone.', ru: 'Инструкции были такими сложными, что озадачили всех.' },
      { en: 'It baffles me why she decided to quit.', ru: 'Меня озадачивает (я не понимаю), почему она решила уволиться.' }
    ]
),

createRichWord('c2_barb', 'Barb', '/bɑːb/', 'баб', 'Колючка / Едкость', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Острый выступ (на крючке); или едкое замечание.',
    '- Предмет: "Barbed wire" (Колючая проволока)\n- Речь: "Stinging barb" (Язвительное замечание)\n- Оружие: "Hook with a barb" (Крючок с бородкой)',
    [
      { en: 'The hook has a barb to stop the fish escaping.', ru: 'На крючке есть бородка (зазубрина), чтобы рыба не сорвалась.' },
      { en: 'His speech was full of barbs directed at his critics.', ru: 'Его речь была полна колкостей в адрес критиков.' },
      { en: 'She ignored the barb and continued smiling.', ru: 'Она проигнорировала колкость и продолжила улыбаться.' },
      { en: 'Be careful of the barbs on the wire fence.', ru: 'Остерегайтесь колючек на проволочном заборе.' }
    ]
),

createRichWord('c2_barge', 'Barge', '/bɑːdʒ/', 'бадж', 'Баржа / Врываться', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Длинная лодка для каналов (сущ.); или грубо входить/толкаться (глаг.).',
    '- Лодка: "Canal barge" (Канальная баржа)\n- Движение: "Barge in" (Вломиться/Ворваться)\n- Действие: "Barge past" (Протиснуться мимо)',
    [
      { en: 'A large barge was carrying coal down the river.', ru: 'Большая баржа везла уголь вниз по реке.' },
      { en: 'Don\'t just barge into my room without knocking!', ru: 'Не врывайся в мою комнату без стука!' },
      { en: 'He barged past me to get to the front of the queue.', ru: 'Он протиснулся мимо меня, чтобы попасть в начало очереди.' },
      { en: 'They live on a converted barge in London.', ru: 'Они живут на переоборудованной барже в Лондоне.' }
    ]
),

createRichWord('c2_barracks', 'Barracks', '/ˈbærəks/', 'бэрэкс', 'Казарма', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Здание или группа зданий, где живут солдаты.',
    '- Армия: "Army barracks" (Армейские казармы)\n- Жилье: "Live in barracks" (Жить в казарме)\n- Место: "Return to barracks" (Вернуться в казармы)',
    [
      { en: 'The soldiers returned to the barracks after training.', ru: 'Солдаты вернулись в казармы после тренировки.' },
      { en: 'The old barracks have been converted into apartments.', ru: 'Старые казармы были переоборудованы в квартиры.' },
      { en: 'Life in the barracks is strictly disciplined.', ru: 'Жизнь в казармах строго дисциплинирована.' },
      { en: 'Security around the barracks was tightened.', ru: 'Охрана вокруг казарм была усилена.' }
    ]
),

createRichWord('c2_barren', 'Barren', '/ˈbærən/', 'бэрэн', 'Бесплодный / Пустой', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Земля, на которой ничего не растет; или неспособный иметь детей (устар.).',
    '- Земля: "Barren landscape" (Пустынный пейзаж)\n- Почва: "Barren soil" (Бесплодная почва)\n- Метафора: "Barren discussion" (Бесплодная дискуссия)',
    [
      { en: 'The landscape was barren and rocky, with no trees.', ru: 'Пейзаж был пустынным и каменистым, без деревьев.' },
      { en: 'Years of drought have left the land barren.', ru: 'Годы засухи сделали землю бесплодной.' },
      { en: 'He described the meeting as a barren exercise.', ru: 'Он описал встречу как бесполезное (бесплодное) занятие.' },
      { en: 'Few animals can survive in such a barren environment.', ru: 'Лишь немногие животные могут выжить в такой пустынной среде.' }
    ]
),

createRichWord('c2_bash', 'Bash', '/bæʃ/', 'бэш', 'Ударить / Вечеринка', ProficiencyLevel.C2, 'verb', 'Medium', 'Informal',
    'Сильно ударить (глаг.); или (разг.) вечеринка (сущ.).',
    '- Действие: "Bash the door" (Выбить дверь)\n- Событие: "Birthday bash" (Вечеринка по случаю дня рождения)\n- Травма: "Bash head" (Удариться головой)',
    [
      { en: 'He bashed his toe against the table leg.', ru: 'Он ударился пальцем ноги о ножку стола.' },
      { en: 'They threw a huge bash for her twenty-first birthday.', ru: 'Они устроили огромную вечеринку на ее двадцать первый день рождения.' },
      { en: 'Don\'t bash the keyboard, type gently.', ru: 'Не долби по клавиатуре, печатай мягко.' },
      { en: 'The police bashed the door down.', ru: 'Полиция выбила дверь.' }
    ]
),

createRichWord('c2_beckon', 'Beckon', '/ˈbekən/', 'бекэн', 'Манить / Подзывать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Подозвать кого-то жестом руки; или казаться привлекательным/манить.',
    '- Жест: "Beckon someone over" (Подозвать кого-то)\n- Будущее: "Future beckons" (Будущее манит)\n- Рука: "Beckon with a hand" (Поманить рукой)',
    [
      { en: 'She beckoned him to come closer.', ru: 'Она поманила его подойти ближе.' },
      { en: 'The waiter beckoned us to a free table.', ru: 'Официант жестом пригласил нас к свободному столику.' },
      { en: 'A bright future beckons for the young graduate.', ru: 'Светлое будущее манит молодого выпускника.' },
      { en: 'The lights of the city beckoned in the distance.', ru: 'Огни города манили вдалеке.' }
    ]
),

createRichWord('c2_behold', 'Behold', '/bɪˈhəʊld/', 'бихоулд', 'Созерцать / Смотреть', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Смотреть на что-то (устаревшее/литературное); видеть.',
    '- Фраза: "Lo and behold" (И вот / О чудо)\n- Вид: "Sight to behold" (Зрелище, на которое стоит посмотреть)\n- Действие: "Behold the beauty" (Созерцать красоту)',
    [
      { en: 'The sunrise over the mountains was a sight to behold.', ru: 'Восход солнца над горами был зрелищем, достойным созерцания.' },
      { en: 'Behold, the king arrives!', ru: 'Взгляните, король прибывает!' },
      { en: 'Those who behold the statue are amazed by its size.', ru: 'Те, кто созерцает статую, поражаются ее размером.' },
      { en: 'Beauty is in the eye of the beholder.', ru: 'Красота в глазах смотрящего.' }
    ]
),

createRichWord('c2_bellow', 'Bellow', '/ˈbeləʊ/', 'белоу', 'Реветь / Орать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Издавать глубокий громкий рев (как бык); или кричать громким голосом.',
    '- Животное: "Bull bellows" (Бык ревет)\n- Человек: "Bellow in pain" (Реветь от боли)\n- Приказ: "Bellow orders" (Выкрикивать приказы)',
    [
      { en: 'The sergeant bellowed orders at the troops.', ru: 'Сержант выкрикивал приказы войскам.' },
      { en: 'He bellowed in pain when the heavy box fell on his foot.', ru: 'Он взревел от боли, когда тяжелая коробка упала ему на ногу.' },
      { en: 'We heard a bull bellow in the field nearby.', ru: 'Мы слышали, как на соседнем поле ревел бык.' },
      { en: 'Usually quiet, he suddenly bellowed with laughter.', ru: 'Обычно тихий, он внезапно разразился (заревел) смехом.' }
    ]
),

createRichWord('c2_benevolent', 'Benevolent', '/bəˈnevələnt/', 'бэневэлэнт', 'Доброжелательный / Благотворительный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Добрый и отзывчивый; или (об организации) благотворительный.',
    '- Характер: "Benevolent smile" (Доброжелательная улыбка)\n- Лидер: "Benevolent dictator" (Доброжелательный диктатор)\n- Фонд: "Benevolent fund" (Благотворительный фонд)',
    [
      { en: 'He was a benevolent old man who helped the poor.', ru: 'Он был доброжелательным стариком, который помогал бедным.' },
      { en: 'The company has a benevolent fund for employees in need.', ru: 'У компании есть благотворительный фонд для нуждающихся сотрудников.' },
      { en: 'She gave me a benevolent smile.', ru: 'Она одарила меня доброжелательной улыбкой.' },
      { en: 'Ideally, a ruler should be wise and benevolent.', ru: 'В идеале правитель должен быть мудрым и доброжелательным.' }
    ]
),

createRichWord('c2_benign', 'Benign', '/bɪˈnaɪn/', 'бинайн', 'Доброкачественный / Мягкий', ProficiencyLevel.C2, 'adj', 'Medium', 'Formal',
    'Не вредный (о болезни/опухоли); или добрый и нежный (о человеке/климате).',
    '- Медицина: "Benign tumor" (Доброкачественная опухоль)\n- Характер: "Benign smile" (Добрая улыбка)\n- Климат: "Benign climate" (Мягкий климат)',
    [
      { en: 'Tests showed that the lump was benign, not cancerous.', ru: 'Анализы показали, что опухоль доброкачественная, а не раковая.' },
      { en: 'He looked at us with a benign expression.', ru: 'Он смотрел на нас с добрым выражением лица.' },
      { en: 'The climate here is benign and suitable for farming.', ru: 'Климат здесь мягкий и подходит для земледелия.' },
      { en: 'Her intentions were entirely benign.', ru: 'Ее намерения были совершенно безобидными (добрыми).' }
    ]
),

createRichWord('c2_binary', 'Binary', '/ˈbaɪnəri/', 'байнэри', 'Бинарный / Двоичный', ProficiencyLevel.C2, 'adj', 'Medium', 'Formal',
    'Состоящий из двух частей; или использующий систему 0 и 1 (компьютеры).',
    '- Компьютер: "Binary code" (Двоичный код)\n- Система: "Binary system" (Двоичная система)\n- Звезды: "Binary star" (Двойная звезда)',
    [
      { en: 'Computers use a binary system to process data.', ru: 'Компьютеры используют двоичную систему для обработки данных.' },
      { en: 'The issue is not a simple binary choice between yes and no.', ru: 'Этот вопрос не является простым бинарным выбором между да и нет.' },
      { en: 'Binary code consists of zeros and ones.', ru: 'Двоичный код состоит из нулей и единиц.' },
      { en: 'A binary star system contains two stars orbiting each other.', ru: 'Двойная звездная система содержит две звезды, вращающиеся друг вокруг друга.' }
    ]
),

createRichWord('c2_biopsy', 'Biopsy', '/ˈbaɪɒpsi/', 'байопси', 'Биопсия', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Медицинский тест, при котором берут клетки из тела для исследования.',
    '- Медицина: "Perform a biopsy" (Сделать биопсию)\n- Результат: "Biopsy results" (Результаты биопсии)\n- Ткань: "Tissue biopsy" (Биопсия ткани)',
    [
      { en: 'The doctor performed a biopsy to check for cancer.', ru: 'Врач сделал биопсию, чтобы проверить наличие рака.' },
      { en: 'We are waiting for the results of the biopsy.', ru: 'Мы ждем результатов биопсии.' },
      { en: 'A needle biopsy is less invasive than surgery.', ru: 'Игольчатая биопсия менее инвазивна, чем операция.' },
      { en: 'The biopsy confirmed the diagnosis.', ru: 'Биопсия подтвердила диагноз.' }
    ]
),

createRichWord('c2_bladder', 'Bladder', '/ˈblædə/', 'блэдэ', 'Мочевой пузырь', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Орган в теле, который удерживает мочу.',
    '- Тело: "Full bladder" (Полный мочевой пузырь)\n- Болезнь: "Bladder infection" (Инфекция мочевого пузыря)\n- Спорт: "Ball bladder" (Камера мяча)',
    [
      { en: 'He had to stop the car because he had a full bladder.', ru: 'Ему пришлось остановить машину, потому что у него был полный мочевой пузырь.' },
      { en: 'Doctors treated him for a bladder infection.', ru: 'Врачи лечили его от инфекции мочевого пузыря.' },
      { en: 'Drinking plenty of water is good for your bladder.', ru: 'Пить много воды полезно для вашего мочевого пузыря.' },
      { en: 'The football has a rubber bladder inside.', ru: 'Внутри футбольного мяча есть резиновая камера.' }
    ]
),

createRichWord('c2_bland', 'Bland', '/blænd/', 'блэнд', 'Пресный / Безвкусный', ProficiencyLevel.C2, 'adj', 'Medium', 'Neutral',
    'Не имеющий сильного вкуса; или неинтересный/скучный.',
    '- Еда: "Bland food" (Пресная еда)\n- Вкус: "Bland taste" (Безвкусный)\n- Характер: "Bland personality" (Скучная личность)',
    [
      { en: 'The soup was very bland and needed more salt.', ru: 'Суп был очень пресным, и ему требовалось больше соли.' },
      { en: 'He has a rather bland personality.', ru: 'У него довольно скучная личность.' },
      { en: 'A bland diet is recommended for stomach problems.', ru: 'Пресная диета рекомендуется при проблемах с желудком.' },
      { en: 'The movie was bland and predictable.', ru: 'Фильм был скучным и предсказуемым.' }
    ]
),

createRichWord('c2_blatant', 'Blatant', '/ˈbleɪt(ə)nt/', 'блейтэнт', 'Вопиющий / Явный', ProficiencyLevel.C2, 'adj', 'Medium', 'Formal',
    'Сделанный открыто и без стыда (обычно о чем-то плохом).',
    '- Ложь: "Blatant lie" (Наглая ложь)\n- Поведение: "Blatant disregard" (Вопиющее пренебрежение)\n- Попытка: "Blatant attempt" (Явная попытка)',
    [
      { en: 'It was a blatant lie, and everyone knew it.', ru: 'Это была наглая ложь, и все это знали.' },
      { en: 'He showed a blatant disregard for the rules.', ru: 'Он проявил вопиющее пренебрежение правилами.' },
      { en: 'That was a blatant attempt to cheat.', ru: 'Это была явная попытка сжульничать.' },
      { en: 'His blatant ambition annoyed his colleagues.', ru: 'Его неприкрытые амбиции раздражали коллег.' }
    ]
),

createRichWord('c2_bleach', 'Bleach', '/bliːtʃ/', 'блич', 'Отбеливатель / Отбеливать', ProficiencyLevel.C2, 'noun', 'Medium', 'Neutral',
    'Сильное химическое вещество для отбеливания или чистки; или процесс отбеливания.',
    '- Уборка: "Household bleach" (Бытовой отбеливатель)\n- Волосы: "Bleach hair" (Обесцвечивать волосы)\n- Солнце: "Sun bleached" (Выбеленный солнцем)',
    [
      { en: 'She used bleach to clean the white shirts.', ru: 'Она использовала отбеливатель, чтобы почистить белые рубашки.' },
      { en: 'The sun had bleached his hair blonde.', ru: 'Солнце выбелило его волосы до блонда.' },
      { en: 'Be careful with bleach, it can burn your skin.', ru: 'Будь осторожен с отбеливателем, он может обжечь кожу.' },
      { en: 'The coral reefs are bleaching due to warm water.', ru: 'Коралловые рифы обесцвечиваются из-за теплой воды.' }
    ]
),

createRichWord('c2_bliss', 'Bliss', '/blɪs/', 'блис', 'Блаженство', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Совершенное счастье или удовольствие.',
    '- Счастье: "Pure bliss" (Чистое блаженство)\n- Брак: "Wedded bliss" (Семейное счастье)\n- Состояние: "In a state of bliss" (В состоянии блаженства)',
    [
      { en: 'Lying on the beach all day was pure bliss.', ru: 'Лежать на пляже весь день было чистым блаженством.' },
      { en: 'They are in a state of domestic bliss.', ru: 'Они находятся в состоянии семейного счастья.' },
      { en: 'Ignorance is bliss, sometimes.', ru: 'Неведение — это блаженство, иногда.' },
      { en: 'The first bite of the cake was sheer bliss.', ru: 'Первый кусочек торта был настоящим блаженством.' }
    ]
),

createRichWord('c2_blister', 'Blister', '/ˈblɪstə/', 'блистэ', 'Волдырь / Мозоль', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Болезненное вздутие на коже, содержащее жидкость (от ожога или трения).',
    '- Кожа: "Water blister" (Водяной волдырь)\n- Ноги: "Get a blister" (Натереть мозоль)\n- Боль: "Burst a blister" (Лопнуть волдырь)',
    [
      { en: 'I got a blister on my heel from my new shoes.', ru: 'Я натер мозоль на пятке новыми туфлями.' },
      { en: 'The burn caused a large blister on his hand.', ru: 'Ожог вызвал большой волдырь на его руке.' },
      { en: 'Don\'t pop the blister, or it might get infected.', ru: 'Не протыкай волдырь, иначе может попасть инфекция.' },
      { en: 'Paint started to blister in the heat.', ru: 'Краска начала пузыриться на жаре.' }
    ]
),

createRichWord('c2_bloc', 'Bloc', '/blɒk/', 'блок', 'Блок (союз)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Группа стран или людей, имеющих общие политические интересы.',
    '- Политика: "Eastern bloc" (Восточный блок)\n- Торговля: "Trade bloc" (Торговый блок)\n- Союз: "Political bloc" (Политический блок)',
    [
      { en: 'The European Union is a major trading bloc.', ru: 'Европейский Союз — крупный торговый блок.' },
      { en: 'Countries in the Eastern Bloc were under Soviet influence.', ru: 'Страны Восточного блока находились под советским влиянием.' },
      { en: 'They voted as a bloc to block the new law.', ru: 'Они проголосовали единым блоком, чтобы заблокировать новый закон.' },
      { en: 'New alliances are forming regional blocs.', ru: 'Новые альянсы формируют региональные блоки.' }
    ]
),

createRichWord('c2_blot', 'Blot', '/blɒt/', 'блот', 'Пятно / Клякса', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Темное пятно (чернил); или что-то, что портит красоту/репутацию.',
    '- Чернила: "Ink blot" (Чернильная клякса)\n- Репутация: "Blot on character" (Пятно на репутации)\n- Действие: "Blot out" (Заслонять/Стирать)',
    [
      { en: 'There was a large ink blot on the page.', ru: 'На странице была большая чернильная клякса.' },
      { en: 'The new factory is a blot on the landscape.', ru: 'Новый завод — это пятно на ландшафте (портит вид).' },
      { en: 'Clouds blotted out the sun completely.', ru: 'Облака полностью закрыли (заслонили) солнце.' },
      { en: 'He tried to blot the memory from his mind.', ru: 'Он пытался стереть это воспоминание из памяти.' }
    ]
),

createRichWord('c2_blueprint', 'Blueprint', '/ˈbluːprɪnt/', 'блупринт', 'План / Чертеж', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Подробный план здания (синяя копия) или план действий.',
    '- Строительство: "Architectural blueprint" (Архитектурный чертеж)\n- План: "Blueprint for success" (План успеха)\n- Дизайн: "Draft a blueprint" (Составить план)',
    [
      { en: 'The architect showed us the blueprint for the house.', ru: 'Архитектор показал нам чертеж дома.' },
      { en: 'This agreement serves as a blueprint for future peace.', ru: 'Это соглашение служит планом для будущего мира.' },
      { en: 'They are drawing up a blueprint for economic reform.', ru: 'Они разрабатывают план экономических реформ.' },
      { en: 'DNA is the blueprint of life.', ru: 'ДНК — это план (чертеж) жизни.' }
    ]
),

createRichWord('c2_bobbed', 'Bobbed', '/bɒbd/', 'бобд', 'Подстриженный (каре) / Качающийся', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Коротко подстриженные волосы (стрижка боб); или двигающийся вверх-вниз (от глагола bob).',
    '- Волосы: "Bobbed hair" (Стрижка каре/боб)\n- Движение: "Bobbed up and down" (Качался вверх-вниз)\n- Животные: "Bobbed tail" (Купированный хвост)',
    [
      { en: 'She has short bobbed hair.', ru: 'У нее короткая стрижка каре.' },
      { en: 'The cork bobbed on the water.', ru: 'Пробка качалась на воде.' },
      { en: 'In the 1920s, many women bobbed their hair.', ru: 'В 1920-х многие женщины коротко стригли волосы.' },
      { en: 'The dog has a bobbed tail.', ru: 'У собаки купированный хвост.' }
    ]
),

createRichWord('c2_bog', 'Bog', '/bɒɡ/', 'бог', 'Болото / Трясина', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Мягкая, мокрая земля (торфяник); или (разг.) туалет.',
    '- Природа: "Peat bog" (Торфяное болото)\n- Метафора: "Bogged down" (Увязнуть)\n- Местность: "Marshy bog" (Топкое болото)',
    [
      { en: 'He got his boots stuck in the muddy bog.', ru: 'Его сапоги застряли в грязном болоте.' },
      { en: 'The tank sank into the bog.', ru: 'Танк утонул в болоте.' },
      { en: 'Don\'t get bogged down in details.', ru: 'Не увязайте в деталях.' },
      { en: 'Unique plants grow in the peat bog.', ru: 'Уникальные растения растут на торфяном болоте.' }
    ]
),

createRichWord('c2_bolster', 'Bolster', '/ˈbəʊlstə/', 'боулстэ', 'Поддерживать / Укреплять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Улучшить что-то или сделать сильнее (поддержку, уверенность).',
    '- Уверенность: "Bolster confidence" (Укрепить уверенность)\n- Экономика: "Bolster the economy" (Поддержать экономику)\n- Армия: "Bolster defenses" (Укрепить оборону)',
    [
      { en: 'More troops were sent to bolster the defense.', ru: 'Больше войск было отправлено для укрепления обороны.' },
      { en: 'Good news bolstered his morale.', ru: 'Хорошие новости подняли его боевой дух.' },
      { en: 'She tried to bolster her argument with facts.', ru: 'Она попыталась подкрепить свой аргумент фактами.' },
      { en: 'The loan helped to bolster the company\'s finances.', ru: 'Займ помог поддержать финансы компании.' }
    ]
),

createRichWord('c2_bombard', 'Bombard', '/bɒmˈbɑːd/', 'бомбад', 'Бомбардировать / Засыпать (вопросами)', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Атаковать бомбами или снарядами; или (перен.) атаковать вопросами/критикой.',
    '- Война: "Bombard the city" (Бомбардировать город)\n- Вопросы: "Bombard with questions" (Засыпать вопросами)\n- Физика: "Bombard with particles" (Бомбардировать частицами)',
    [
      { en: 'The enemy began to bombard the fort.', ru: 'Враг начал бомбардировать форт.' },
      { en: 'Journalists bombarded the star with questions.', ru: 'Журналисты засыпали звезду вопросами.' },
      { en: 'We are bombarded with advertisements every day.', ru: 'Нас ежедневно бомбардируют рекламой.' },
      { en: 'Scientists bombard atoms to split them.', ru: 'Ученые бомбардируют атомы, чтобы расщепить их.' }
    ]
),

createRichWord('c2_borough', 'Borough', '/ˈbʌrə/', 'барэ', 'Район (города)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Административный район крупного города (например, Лондона или Нью-Йорка).',
    '- Лондон: "London borough" (Район Лондона)\n- Управление: "Borough council" (Районный совет)\n- Нью-Йорк: "Five boroughs" (Пять районов Нью-Йорка)',
    [
      { en: 'Brooklyn is a borough of New York City.', ru: 'Бруклин — это район Нью-Йорка.' },
      { en: 'Each borough has its own local council.', ru: 'У каждого района есть свой местный совет.' },
      { en: 'She lives in the borough of Camden.', ru: 'Она живет в районе Камден.' },
      { en: 'The borough is responsible for waste collection.', ru: 'Район отвечает за сбор мусора.' }
    ]
),

createRichWord('c2_boulder', 'Boulder', '/ˈbəʊldə/', 'боулдэ', 'Валун', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Очень большой камень.',
    '- Природа: "Giant boulder" (Гигантский валун)\n- Дорога: "Blocked by a boulder" (Заблокировано валуном)\n- Скала: "Roll a boulder" (Катить валун)',
    [
      { en: 'A huge boulder rolled down the hill and blocked the road.', ru: 'Огромный валун скатился с холма и заблокировал дорогу.' },
      { en: 'They sat on a boulder to rest during the hike.', ru: 'Они сели на валун, чтобы отдохнуть во время похода.' },
      { en: 'The climbers navigated around the massive boulders.', ru: 'Альпинисты обходили массивные валуны.' },
      { en: 'The garden features several large boulders.', ru: 'В саду есть несколько больших валунов.' }
    ]
),

createRichWord('c2_braid', 'Braid', '/breɪd/', 'брейд', 'Коса / Плести', ProficiencyLevel.C2, 'noun', 'Medium', 'Neutral',
    'Прическа из сплетенных прядей (коса); или декоративный шнур.',
    '- Волосы: "Wear a braid" (Носить косу)\n- Действие: "Braid hair" (Плести косу)\n- Одежда: "Gold braid" (Золотая тесьма)',
    [
      { en: 'She wore her long hair in a thick braid.', ru: 'Она носила свои длинные волосы в толстой косе.' },
      { en: 'He learned to braid rope while sailing.', ru: 'Он научился плести веревки во время плавания.' },
      { en: 'The uniform was decorated with gold braid.', ru: 'Форма была украшена золотой тесьмой.' },
      { en: 'Can you help me braid my hair?', ru: 'Можешь помочь мне заплести волосы?' }
    ]
),

createRichWord('c2_brandy', 'Brandy', '/ˈbrændi/', 'брэнди', 'Бренди / Коньяк', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Крепкий алкогольный напиток, сделанный из вина.',
    '- Напиток: "Glass of brandy" (Бокал бренди)\n- Кулинария: "Cook with brandy" (Готовить с бренди)\n- Тип: "Cherry brandy" (Вишневый бренди)',
    [
      { en: 'He poured himself a glass of brandy after dinner.', ru: 'Он налил себе бокал бренди после ужина.' },
      { en: 'Brandy is often aged in wooden casks.', ru: 'Бренди часто выдерживают в деревянных бочках.' },
      { en: 'She added a splash of brandy to the sauce.', ru: 'Она добавила немного бренди в соус.' },
      { en: 'Fine brandy can be very expensive.', ru: 'Хороший бренди может быть очень дорогим.' }
    ]
),

createRichWord('c2_brassiere', 'Brassiere', '/ˈbræziə/', 'брэзиэ', 'Бюстгальтер', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Формальное слово для "bra" (женское нижнее белье).',
    '- Одежда: "Silk brassiere" (Шелковый бюстгальтер)\n- Покупка: "Buy a brassiere" (Купить бюстгальтер)\n- Разговорное: "Bra" (Лифчик - более часто)',
    [
      { en: 'The term "brassiere" is rarely used in conversation now.', ru: 'Термин "бюстгальтер" (в полной форме) сейчас редко используется в разговоре.' },
      { en: 'She bought a lace brassiere from the boutique.', ru: 'Она купила кружевной бюстгальтер в бутике.' },
      { en: 'Most people just say "bra" instead of brassiere.', ru: 'Большинство людей говорят просто "бра" (лифчик) вместо бюстгальтер.' },
      { en: 'It was an old-fashioned brassiere.', ru: 'Это был старомодный бюстгальтер.' }
    ]
),

createRichWord('c2_breadth', 'Breadth', '/bredθ/', 'бредс', 'Ширина / Широта', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Расстояние от одной стороны до другой; или широкий диапазон (знаний, взглядов).',
    '- Измерение: "Length and breadth" (Длина и ширина)\n- Знания: "Breadth of knowledge" (Широта знаний)\n- Взгляд: "Breadth of vision" (Широта взглядов)',
    [
      { en: 'We measured the height and breadth of the room.', ru: 'Мы измерили высоту и ширину комнаты.' },
      { en: 'I was impressed by the breadth of his reading.', ru: 'Я был впечатлен широтой его начитанности.' },
      { en: 'The breadth of the river is about fifty meters here.', ru: 'Ширина реки здесь около пятидесяти метров.' },
      { en: 'They traveled the length and breadth of the country.', ru: 'Они объездили всю страну вдоль и поперек.' }
    ]
),

createRichWord('c2_brim', 'Brim', '/brɪm/', 'брим', 'Край / Поля (шляпы)', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Верхний край чашки или выступающий край шляпы; быть полным до краев.',
    '- Шляпа: "Wide brim" (Широкие поля)\n- Жидкость: "Full to the brim" (Полный до краев)\n- Глагол: "Brim with tears" (Наполниться слезами)',
    [
      { en: 'He wore a hat with a wide brim to block the sun.', ru: 'Он носил шляпу с широкими полями, чтобы закрыться от солнца.' },
      { en: 'The cup was filled to the brim with hot tea.', ru: 'Чашка была наполнена горячим чаем до краев.' },
      { en: 'Her eyes brimmed with tears of joy.', ru: 'Ее глаза наполнились слезами радости.' },
      { en: 'He is brimming with confidence.', ru: 'Он переполнен уверенностью.' }
    ]
),

createRichWord('c2_brink', 'Brink', '/brɪŋk/', 'бринк', 'Грань / Край', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Край обрыва или (перен.) момент перед чем-то важным или опасным.',
    '- Опасность: "Brink of war" (Грань войны)\n- Успех: "Brink of success" (Порог успеха)\n- Крах: "Brink of collapse" (Грань краха)',
    [
      { en: 'The two countries are on the brink of war.', ru: 'Две страны находятся на грани войны.' },
      { en: 'The company was pulled back from the brink of bankruptcy.', ru: 'Компанию вытащили с грани банкротства.' },
      { en: 'He stood on the brink of the cliff looking down.', ru: 'Он стоял на краю обрыва, глядя вниз.' },
      { en: 'We are on the brink of a major discovery.', ru: 'Мы находимся на пороге крупного открытия.' }
    ]
),

createRichWord('c2_bristle', 'Bristle', '/ˈbrɪs(ə)l/', 'брисл', 'Щетина / Ощетиниться', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Короткий жесткий волос (щетка, животное); или рассердиться (глагол).',
    '- Щетка: "Toothbrush bristles" (Щетина зубной щетки)\n- Животное: "Hog bristles" (Свиная щетина)\n- Глагол: "Bristle with anger" (Ощетиниться от гнева)',
    [
      { en: 'The brush has stiff bristles for cleaning.', ru: 'У щетки жесткая щетина для чистки.' },
      { en: 'He bristled at the suggestion that he was lazy.', ru: 'Он рассердился (ощетинился) на намек, что он ленив.' },
      { en: 'The cat\'s fur bristled when it saw the dog.', ru: 'Шерсть кошки встала дыбом, когда она увидела собаку.' },
      { en: 'The report bristled with errors.', ru: 'Отчет изобиловал ошибками.' }
    ]
),

createRichWord('c2_brood', 'Brood', '/bruːd/', 'бруд', 'Выводок / Размышлять', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Семья птенцов (сущ.); или мрачно размышлять о проблемах (глаг.).',
    '- Животные: "Brood of chicks" (Выводок цыплят)\n- Мысли: "Brood over" (Мрачно размышлять над)\n- Настроение: "Dark mood" (Мрачное настроение)',
    [
      { en: 'The hen was protecting her brood of chicks.', ru: 'Курица защищала свой выводок цыплят.' },
      { en: 'Don\'t brood over your mistakes, learn from them.', ru: 'Не зацикливайся мрачно на своих ошибках, учись на них.' },
      { en: 'He sat in the corner, brooding silently.', ru: 'Он сидел в углу, молча предаваясь мрачным мыслям.' },
      { en: 'A brood of ducklings followed their mother.', ru: 'Выводок утят следовал за матерью.' }
    ]
),

createRichWord('c2_bunker', 'Bunker', '/ˈbʌŋkə/', 'банкэ', 'Бункер', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Укрепленное подземное укрытие; или песчаная ловушка в гольфе.',
    '- Защита: "Underground bunker" (Подземный бункер)\n- Война: "Military bunker" (Военный бункер)\n- Спорт: "Golf bunker" (Песчаный бункер в гольфе)',
    [
      { en: 'They hid in the bunker during the air raid.', ru: 'Они прятались в бункере во время авианалета.' },
      { en: 'The president was taken to a secure bunker.', ru: 'Президента отвели в безопасный бункер.' },
      { en: 'My golf ball landed in a sand bunker.', ru: 'Мой мяч для гольфа приземлился в песчаную ловушку.' },
      { en: 'The old concrete bunker is from the Second World War.', ru: 'Этот старый бетонный бункер времен Второй мировой войны.' }
    ]
  ),
  createRichWord('c2_acquiesce', 'Acquiesce', '/ˌækwiˈes/', 'эквиэс', 'Уступать / Молчаливо соглашаться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Принять что-то неохотно, но без протеста.',
    '- Согласие: "Acquiesce in a decision" (Смириться с решением)\n- Требование: "Acquiesce to a demand" (Уступить требованию)\n- Действие: "Finally acquiesce" (Наконец согласиться)',
    [
      { en: 'She acquiesced to her parents\' wish to study law.', ru: 'Она уступила желанию родителей изучать право.' },
      { en: 'He acquiesced in the plan despite his doubts.', ru: 'Он молчаливо согласился с планом, несмотря на свои сомнения.' },
      { en: 'They demanded changes, and the company eventually acquiesced.', ru: 'Они потребовали изменений, и компания в конце концов уступила.' },
      { en: 'I will not acquiesce to such unfair treatment.', ru: 'Я не смирюсь с таким несправедливым обращением.' }
    ]
),

createRichWord('c2_adjudicate', 'Adjudicate', '/əˈdʒuːdɪkeɪt/', 'эджудикейт', 'Судить / Выносить решение', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Выступать в качестве судьи в конкурсе или споре; выносить официальное решение.',
    '- Суд: "Adjudicate a claim" (Вынести решение по иску)\n- Спор: "Adjudicate a dispute" (Рассудить спор)\n- Конкурс: "Adjudicate a competition" (Судить конкурс)',
    [
      { en: 'A special committee was set up to adjudicate on the matter.', ru: 'Был создан специальный комитет для вынесения решения по этому вопросу.' },
      { en: 'He was asked to adjudicate the local music competition.', ru: 'Его попросили судить местный музыкальный конкурс.' },
      { en: 'The court has the power to adjudicate bankruptcy cases.', ru: 'Суд обладает полномочиями выносить решения по делам о банкротстве.' },
      { en: 'They need a neutral person to adjudicate between them.', ru: 'Им нужен нейтральный человек, чтобы рассудить их.' }
    ]
),

createRichWord('c2_assay', 'Assay', '/əˈseɪ/', 'эсэй', 'Анализ / Проба', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Тестирование металла или вещества для определения его качества (часто золота/руды).',
    '- Наука: "Chemical assay" (Химический анализ)\n- Металл: "Gold assay" (Проба золота)\n- Глагол: "To assay" (Брать пробу/анализировать)',
    [
      { en: 'The assay proved that the rock contained gold.', ru: 'Анализ доказал, что порода содержит золото.' },
      { en: 'Scientists performed an assay to check the purity of the sample.', ru: 'Ученые провели анализ, чтобы проверить чистоту образца.' },
      { en: 'Each bar of silver is stamped after assay.', ru: 'На каждом слитке серебра ставится штамп после пробы.' },
      { en: 'The laboratory specializes in the assay of precious metals.', ru: 'Лаборатория специализируется на анализе драгоценных металлов.' }
    ]
  ),
createRichWord('c2_attest', 'Attest', '/əˈtest/', 'этест', 'Подтверждать / Свидетельствовать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Показывать или доказывать, что что-то является правдой; официально заверять.',
    '- Доказательство: "Attest to the truth" (Свидетельствовать об истине)\n- Документ: "Attested copy" (Заверенная копия)\n- Качество: "Attest ability" (Подтверждать способность)',
    [
      { en: 'I can attest to his excellent character and honesty.', ru: 'Я могу подтвердить его превосходный характер и честность.' },
      { en: 'The signature was attested by two witnesses.', ru: 'Подпись была засвидетельствована двумя свидетелями.' },
      { en: 'His success attests to his hard work.', ru: 'Его успех свидетельствует о его упорном труде.' },
      { en: 'Please have these documents attested by a lawyer.', ru: 'Пожалуйста, заверьте эти документы у юриста.' }
    ]
),

createRichWord('c2_avail', 'Avail', '/əˈveɪl/', 'эвейл', 'Польза / Воспользоваться', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Польза или выгода (сущ.); использовать возможность (гл., обычно с myself/yourself).',
    '- Фраза: "To no avail" (Безуспешно / Тщетно)\n- Возможность: "Avail yourself of" (Воспользоваться чем-то)\n- Усилие: "Of little avail" (Мало пользы)',
    [
      { en: 'We tried to revive him, but to no avail.', ru: 'Мы пытались оживить его, но безуспешно.' },
      { en: 'You should avail yourself of this opportunity.', ru: 'Тебе следует воспользоваться этой возможностью.' },
      { en: 'All his efforts were of no avail.', ru: 'Все его усилия были тщетны.' },
      { en: 'Guests may avail themselves of the hotel facilities.', ru: 'Гости могут пользоваться удобствами отеля.' }
    ]
),

createRichWord('c2_averse', 'Averse', '/əˈvɜːs/', 'эвёс', 'Несклонный / Противящийся', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Сильно не любящий или не желающий что-то делать (обычно "not averse to").',
    '- Отношение: "Averse to risk" (Несклонный к риску)\n- Фраза: "Not averse to" (Не прочь / Не против)\n- Бизнес: "Risk-averse" (Избегающий рисков)',
    [
      { en: 'He is averse to hard work and prefers to sleep.', ru: 'Он не склонен к тяжелой работе и предпочитает спать.' },
      { en: 'I am not averse to a glass of wine with dinner.', ru: 'Я не прочь выпить бокал вина за ужином.' },
      { en: 'Investors are becoming increasingly risk-averse.', ru: 'Инвесторы становятся все более осторожными (несклонными к риску).' },
      { en: 'She is averse to publicity of any kind.', ru: 'Она против любой публичности.' }
    ]
),

createRichWord('c2_badger', 'Badger', '/ˈbædʒə/', 'бэджэ', 'Барсук / Донимать', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Животное с черно-белой головой (сущ.); или постоянно просить кого-то о чем-то (гл.).',
    '- Животное: "Badger sett" (Нора барсука)\n- Действие: "Badger someone" (Клянчить / Донимать)\n- Просьба: "Stop badgering me" (Перестань меня доставать)',
    [
      { en: 'The badger comes out of its hole at night.', ru: 'Барсук выходит из своей норы ночью.' },
      { en: 'She badgered her father until he bought her a pony.', ru: 'Она донимала отца, пока он не купил ей пони.' },
      { en: 'Don\'t badger me with questions right now.', ru: 'Не донимай меня вопросами прямо сейчас.' },
      { en: 'Reporters continued to badger the celebrity.', ru: 'Репортеры продолжали донимать знаменитость.' }
    ]
),

createRichWord('c2_bale', 'Bale', '/beɪl/', 'бэйл', 'Тюк / Кипа', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Большое количество материала (сена, бумаги), связанное вместе.',
    '- Ферма: "Bale of hay" (Тюк сена)\n- Материал: "Bale of cotton" (Кипа хлопка)\n- Глагол: "Bale out" (Вычерпывать воду / Прыгать с парашютом - также bail)',
    [
      { en: 'The farmer stacked the bales of hay in the barn.', ru: 'Фермер сложил тюки сена в амбаре.' },
      { en: 'They sat on a straw bale to rest.', ru: 'Они сели на соломенный тюк, чтобы отдохнуть.' },
      { en: 'Huge bales of paper were sent for recycling.', ru: 'Огромные кипы бумаги были отправлены на переработку.' },
      { en: 'We need one more bale to finish the wall.', ru: 'Нам нужен еще один тюк, чтобы закончить стену.' }
    ]
),

createRichWord('c2_baroque', 'Baroque', '/bəˈrɒk/', 'бэрок', 'Барокко / Вычурный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Стиль искусства и архитектуры 17-18 веков; или очень сложный и украшенный.',
    '- Искусство: "Baroque music" (Музыка барокко)\n- Стиль: "Baroque architecture" (Архитектура барокко)\n- Описание: "Baroque details" (Вычурные детали)',
    [
      { en: 'The church is a fine example of Baroque architecture.', ru: 'Церковь является прекрасным примером архитектуры барокко.' },
      { en: 'Bach and Vivaldi are famous Baroque composers.', ru: 'Бах и Вивальди — известные композиторы эпохи барокко.' },
      { en: 'Her writing style is somewhat baroque and complex.', ru: 'Ее стиль письма несколько вычурный и сложный.' },
      { en: 'The room was decorated in a rich, baroque style.', ru: 'Комната была украшена в богатом стиле барокко.' }
    ]
),

createRichWord('c2_barrage', 'Barrage', '/ˈbærɑːʒ/', 'бэраж', 'Шквал / Заградительный огонь', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Непрерывная атака оружием; или большое количество вопросов/жалоб сразу.',
    '- Война: "Artillery barrage" (Артиллерийский обстрел)\n- Вопросы: "Barrage of questions" (Шквал вопросов)\n- Критика: "Barrage of criticism" (Шквал критики)',
    [
      { en: 'The politician faced a barrage of angry questions.', ru: 'Политик столкнулся со шквалом гневных вопросов.' },
      { en: 'An artillery barrage preceded the attack.', ru: 'Атаке предшествовал артиллерийский заградительный огонь.' },
      { en: 'She received a barrage of emails after the announcement.', ru: 'Она получила шквал писем после объявления.' },
      { en: 'A barrage of insults was directed at the referee.', ru: 'Поток оскорблений был направлен в адрес судьи.' }
    ]
),

createRichWord('c2_basque', 'Basque', '/bæsk/', 'бэск', 'Баскский / Баск', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Относящийся к народу или языку, живущему в Пиренеях (между Испанией и Францией).',
    '- Люди: "Basque people" (Баски)\n- Язык: "Basque language" (Баскский язык)\n- Регион: "Basque Country" (Страна Басков)',
    [
      { en: 'The Basque language is unlike any other in Europe.', ru: 'Баскский язык не похож ни на один другой в Европе.' },
      { en: 'We visited the beautiful Basque Country last summer.', ru: 'Мы посетили прекрасную Страну Басков прошлым летом.' },
      { en: 'He is proud of his Basque heritage.', ru: 'Он гордится своим баскским наследием.' },
      { en: 'Basque cuisine is famous for its delicious pintxos.', ru: 'Баскская кухня славится своими вкусными пинчос.' }
    ]
),

createRichWord('c2_beacon', 'Beacon', '/ˈbiːkən/', 'бикэн', 'Маяк / Сигнальный огонь', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Свет или огонь на возвышенности, служащий сигналом; или источник надежды.',
    '- Свет: "Light beacon" (Световой маяк)\n- Надежда: "Beacon of hope" (Маяк надежды)\n- Сигнал: "Radio beacon" (Радиомаяк)',
    [
      { en: 'The lighthouse served as a beacon for ships.', ru: 'Маяк служил сигнальным огнем для кораблей.' },
      { en: 'She is a beacon of hope for many young women.', ru: 'Она — маяк надежды для многих молодых женщин.' },
      { en: 'They lit a beacon on the hill to warn the town.', ru: 'Они зажгли сигнальный огонь на холме, чтобы предупредить город.' },
      { en: 'The university stands as a beacon of learning.', ru: 'Университет стоит как светоч знаний.' }
    ]
),

createRichWord('c2_bereave', 'Bereave', '/bɪˈriːv/', 'бирив', 'Лишать (близкого)', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Быть лишенным близкого человека из-за смерти (обычно в пассиве: bereaved).',
    '- Смерть: "Bereaved family" (Семья, понесшая утрату)\n- Состояние: "Recently bereaved" (Недавно понесший утрату)\n- Сущ.: "Bereavement" (Тяжелая утрата)',
    [
      { en: 'The accident left her bereaved of her husband.', ru: 'Авария лишила ее мужа (сделала вдовой).' },
      { en: 'We offer our condolences to the bereaved family.', ru: 'Мы выражаем соболезнования семье, понесшей утрату.' },
      { en: 'He seems very lonely since he was bereaved.', ru: 'Он кажется очень одиноким с тех пор, как потерял близкого.' },
      { en: 'Support groups help the bereaved cope with grief.', ru: 'Группы поддержки помогают людям, понесшим утрату, справиться с горем.' }
    ]
),

createRichWord('c2_berth', 'Berth', '/bɜːθ/', 'бёс', 'Койка / Причал', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Место для сна на корабле или в поезде; или место стоянки корабля.',
    '- Сон: "Sleeping berth" (Спальная полка/койка)\n- Корабль: "Give a wide berth" (Обходить стороной - идиома)\n- Порт: "Ship\'s berth" (Причал для корабля)',
    [
      { en: 'I booked a sleeping berth on the night train.', ru: 'Я забронировал спальное место в ночном поезде.' },
      { en: 'The ship pulled into its berth at the dock.', ru: 'Корабль причалил к своему месту в доке.' },
      { en: 'You should give that angry dog a wide berth.', ru: 'Тебе следует обходить эту злую собаку стороной.' },
      { en: 'There was only one berth left in the cabin.', ru: 'В каюте оставалась только одна койка.' }
    ]
),

createRichWord('c2_bestow', 'Bestow', '/bɪˈstəʊ/', 'бистоу', 'Даровать / Награждать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Дать что-то в качестве чести или подарка (обычно "bestow upon").',
    '- Награда: "Bestow an honor" (Удостоить чести)\n- Подарок: "Bestow a gift" (Даровать подарок)\n- Титул: "Bestow a title" (Присвоить титул)',
    [
      { en: 'The Queen bestowed a knighthood upon him.', ru: 'Королева даровала ему рыцарское звание.' },
      { en: 'Nature has bestowed many gifts on this island.', ru: 'Природа одарила этот остров многими дарами.' },
      { en: 'He was unworthy of the trust bestowed on him.', ru: 'Он был недостоин доверия, оказанного ему.' },
      { en: 'They bestowed their blessings upon the couple.', ru: 'Они даровали свои благословения паре.' }
    ]
),

createRichWord('c2_bile', 'Bile', '/baɪl/', 'байл', 'Желчь / Злоба', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Горькая жидкость в печени; или (перен.) гнев и злоба.',
    '- Тело: "Produce bile" (Вырабатывать желчь)\n- Эмоция: "Full of bile" (Полный желчи/злобы)\n- Вкус: "Taste of bile" (Вкус желчи)',
    [
      { en: 'The liver produces bile to help digest fat.', ru: 'Печень вырабатывает желчь, чтобы помочь переваривать жир.' },
      { en: 'His article was full of bile and hatred.', ru: 'Его статья была полна желчи и ненависти.' },
      { en: 'I could taste the bitter bile in my mouth.', ru: 'Я чувствовал горький вкус желчи во рту.' },
      { en: 'She spewed bile at everyone who disagreed with her.', ru: 'Она извергала злобу (желчь) на всех, кто с ней не соглашался.' }
    ]
),

createRichWord('c2_blah', 'Blah', '/blɑː/', 'бла', 'Чушь / Ерунда', ProficiencyLevel.C2, 'noun', 'Low', 'Slang',
    'Скучные или бессмысленные разговоры (часто "blah blah blah"); или чувство скуки/болезни.',
    '- Разговор: "Blah blah blah" (Бла-бла-бла)\n- Чувство: "Feel blah" (Чувствовать себя неважно/скучно)\n- Описание: "It looks blah" (Выглядит так себе)',
    [
      { en: 'He went on and on, blah blah blah.', ru: 'Он продолжал говорить без умолку, бла-бла-бла.' },
      { en: 'I feel a bit blah today, maybe I am getting sick.', ru: 'Я чувствую себя немного неважно сегодня, может, я заболеваю.' },
      { en: 'The movie was just blah, nothing special.', ru: 'Фильм был так себе (ерунда), ничего особенного.' },
      { en: 'All I heard was just a lot of blah.', ru: 'Все, что я слышал, было просто кучей болтовни.' }
    ]
),

createRichWord('c2_blight', 'Blight', '/blaɪt/', 'блайт', 'Упадок / Болезнь растений', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Болезнь растений; или что-то, что портит или разрушает (например, район города).',
    '- Город: "Urban blight" (Городской упадок)\n- Растения: "Potato blight" (Фитофтороз картофеля)\n- Влияние: "Cast a blight" (Омрачить)',
    [
      { en: 'The potato blight caused a terrible famine.', ru: 'Болезнь картофеля вызвала ужасный голод.' },
      { en: 'Urban blight has ruined this part of the city.', ru: 'Городской упадок разрушил эту часть города.' },
      { en: 'His gambling habit was a blight on his family\'s happiness.', ru: 'Его привычка к азартным играм была пятном (порчей) на счастье его семьи.' },
      { en: 'Unemployment is a blight on our society.', ru: 'Безработица — это бич нашего общества.' }
    ]
),

createRichWord('c2_blitz', 'Blitz', '/blɪts/', 'блиц', 'Блиц / Бомбардировка', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Внезапная военная атака (обычно с воздуха); или интенсивная кампания/усилие.',
    '- Война: "The Blitz" (Бомбардировка Лондона)\n- Усилие: "Cleaning blitz" (Генеральная уборка)\n- Реклама: "Media blitz" (Медиа-атака)',
    [
      { en: 'London suffered greatly during the Blitz in WWII.', ru: 'Лондон сильно пострадал во время Блица во Второй мировой войне.' },
      { en: 'We need to have a cleaning blitz this weekend.', ru: 'Нам нужно устроить ударную уборку в эти выходные.' },
      { en: 'The company launched a marketing blitz.', ru: 'Компания запустила маркетинговый блиц (интенсивную кампанию).' },
      { en: 'They decided to blitz the problem with resources.', ru: 'Они решили "забомбить" проблему ресурсами.' }
    ]
),

createRichWord('c2_bounty', 'Bounty', '/ˈbaʊnti/', 'баунти', 'Щедрость / Награда', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Деньги за поимку кого-то; или щедрое количество чего-то.',
    '- Награда: "Price on his head" (Награда за голову - bounty)\n- Природа: "Nature\'s bounty" (Дары природы)\n- Охотник: "Bounty hunter" (Охотник за головами)',
    [
      { en: 'There is a bounty on the head of the escaped convict.', ru: 'За голову сбежавшего заключенного назначена награда.' },
      { en: 'We gave thanks for nature\'s bounty at the feast.', ru: 'Мы благодарили за дары природы на пиру.' },
      { en: 'The bounty hunter tracked the outlaw for weeks.', ru: 'Охотник за головами выслеживал преступника неделями.' },
      { en: 'She is known for her bounty to the poor.', ru: 'Она известна своей щедростью к бедным.' }
    ]
),

createRichWord('c2_bridle', 'Bridle', '/ˈbraɪd(ə)l/', 'брайдл', 'Уздечка / Обуздывать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Надеть уздечку на лошадь; или сдерживать эмоции; или оскорбиться.',
    '- Лошадь: "Horse\'s bridle" (Лошадиная уздечка)\n- Эмоция: "Bridle anger" (Сдерживать гнев)\n- Реакция: "Bridle at" (Ощетиниться / Обидеться)',
    [
      { en: 'She put the bridle on the horse before riding.', ru: 'Она надела уздечку на лошадь перед ездой.' },
      { en: 'He bridled at the suggestion that he was lying.', ru: 'Он оскорбился (вздыбился) от намека, что он лжет.' },
      { en: 'Try to bridle your temper in difficult situations.', ru: 'Постарайся обуздать свой гнев в сложных ситуациях.' },
      { en: 'The horse shook its head, pulling against the bridle.', ru: 'Лошадь тряхнула головой, натягивая уздечку.' }
    ]
),

createRichWord('c2_brittle', 'Brittle', '/ˈbrɪt(ə)l/', 'бритл', 'Хрупкий / Ломкий', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Твердый, но легко ломающийся; или (о человеке) холодный и нервный.',
    '- Материал: "Brittle bones" (Хрупкие кости)\n- Характер: "Brittle personality" (Неустойчивая личность)\n- Звук: "Brittle laugh" (Натянутый смех)',
    [
      { en: 'As you get older, your bones become more brittle.', ru: 'С возрастом ваши кости становятся более хрупкими.' },
      { en: 'The old paper was dry and brittle.', ru: 'Старая бумага была сухой и ломкой.' },
      { en: 'She gave a brittle smile that did not reach her eyes.', ru: 'Она выдавила натянутую улыбку, которая не коснулась ее глаз.' },
      { en: 'The relationship between them is very brittle.', ru: 'Отношения между ними очень хрупкие.' }
    ]
),

createRichWord('c2_brook', 'Brook', '/brʊk/', 'брук', 'Ручей / Терпеть', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Маленькая река (сущ.); или (глаг., обычно в отриц.) терпеть что-то неприятное.',
    '- Природа: "Babbling brook" (Журчащий ручей)\n- Терпение: "Brook no argument" (Не терпеть возражений)\n- Вода: "Clear brook" (Чистый ручей)',
    [
      { en: 'We sat by the brook and listened to the water.', ru: 'Мы сидели у ручья и слушали воду.' },
      { en: 'The teacher would brook no nonsense from the students.', ru: 'Учитель не терпел никаких глупостей от учеников.' },
      { en: 'She will not brook any interference in her plans.', ru: 'Она не потерпит никакого вмешательства в свои планы.' },
      { en: 'A small wooden bridge crossed the brook.', ru: 'Маленький деревянный мостик пересекал ручей.' }
    ]
),

createRichWord('c2_buff', 'Buff', '/bʌf/', 'баф', 'Любитель / Полировать', ProficiencyLevel.C2, 'noun', 'Low', 'Informal',
    'Человек, много знающий о предмете (фанат); или полировать; или светло-желтый цвет.',
    '- Человек: "History buff" (Любитель истории)\n- Тело: "Buff body" (Мускулистое тело - сленг)\n- Действие: "Buff the car" (Полировать машину)',
    [
      { en: 'He is a real film buff and knows every actor.', ru: 'Он настоящий киноман и знает каждого актера.' },
      { en: 'Use a soft cloth to buff the shoes until they shine.', ru: 'Используйте мягкую ткань, чтобы отполировать ботинки до блеска.' },
      { en: 'The envelope was a pale buff color.', ru: 'Конверт был бледно-желтого цвета.' },
      { en: 'He has been working out and looks quite buff.', ru: 'Он тренировался и выглядит довольно накачанным.' }
    ]
),

createRichWord('c2_bulldoze', 'Bulldoze', '/ˈbʊldəʊz/', 'булдоуз', 'Сносить / Пробивать путь', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Разрушать бульдозером; или заставлять (продавливать) решение силой.',
    '- Строительство: "Bulldoze a building" (Снести здание)\n- Влияние: "Bulldoze through" (Продавить решение)\n- Машина: "Bulldozer" (Бульдозер)',
    [
      { en: 'They plan to bulldoze the park to build a mall.', ru: 'Они планируют снести парк, чтобы построить торговый центр.' },
      { en: 'He tried to bulldoze his proposal through the committee.', ru: 'Он пытался продавить свое предложение через комитет.' },
      { en: 'The trees were bulldozed to make way for the road.', ru: 'Деревья были снесены, чтобы освободить место для дороги.' },
      { en: 'Don\'t let him bulldoze you into agreeing.', ru: 'Не позволяй ему принудить тебя к согласию.' }
    ]
),

createRichWord('c2_burgeon', 'Burgeon', '/ˈbɜːdʒən/', 'бёджэн', 'Разрастаться / Расцветать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Расти или развиваться быстро.',
    '- Рост: "Burgeoning population" (Растущее население)\n- Бизнес: "Burgeoning market" (Развивающийся рынок)\n- Талант: "Burgeoning talent" (Расцветающий талант)',
    [
      { en: 'The town burgeoned into a city within a few years.', ru: 'Городок разросся в город за несколько лет.' },
      { en: 'There is a burgeoning demand for organic food.', ru: 'Существует растущий спрос на органическую еду.' },
      { en: 'Her burgeoning career was cut short by illness.', ru: 'Ее расцветающая карьера была прервана болезнью.' },
      { en: 'New businesses are burgeoning in the area.', ru: 'В этом районе бурно развиваются новые бизнесы.' }
    ]
),

createRichWord('c2_cad', 'Cad', '/kæd/', 'кэд', 'Хам / Грубиян', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Мужчина, который ведет себя нечестно или не по-джентльменски (старомодное слово).',
    '- Оскорбление: "You cad!" (Ах ты хам!)\n- Поведение: "Behave like a cad" (Вести себя как хам)\n- Характер: "Total cad" (Полный негодяй)',
    [
      { en: 'He behaved like a cad, breaking her heart.', ru: 'Он вел себя как подлец, разбив ей сердце.' },
      { en: 'Only a cad would speak to a lady like that.', ru: 'Только хам стал бы так разговаривать с леди.' },
      { en: 'He is a charming man, but a bit of a cad.', ru: 'Он обаятельный мужчина, но немного подлец.' },
      { en: 'In old movies, the villain is often a cad.', ru: 'В старых фильмах злодей часто бывает негодяем.' }
    ]
),

createRichWord('c2_calibrate', 'Calibrate', '/ˈkælɪbreɪt/', 'кэлибрейт', 'Калибровать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Настраивать инструмент для точного измерения.',
    '- Инструмент: "Calibrate machinery" (Калибровать оборудование)\n- Точность: "Finely calibrated" (Точно откалиброванный)\n- Измерение: "Calibrate a scale" (Настроить весы)',
    [
      { en: 'You need to calibrate the thermometer before using it.', ru: 'Вам нужно откалибровать термометр перед использованием.' },
      { en: 'The equipment must be calibrated regularly for accuracy.', ru: 'Оборудование должно регулярно калиброваться для точности.' },
      { en: 'His response was carefully calibrated to avoid offense.', ru: 'Его ответ был тщательно выверен (откалиброван), чтобы избежать обиды.' },
      { en: 'Engineers calibrated the sensors on the robot.', ru: 'Инженеры откалибровали датчики на роботе.' }
    ]
),

createRichWord('c2_cam', 'Cam', '/kæm/', 'кэм', 'Кулачок / Эксцентрик', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Часть механизма (колеса), которая превращает вращение в движение вперед-назад.',
    '- Механика: "Camshaft" (Распределительный вал)\n- Двигатель: "Overhead cam" (Верхний распредвал)\n- Деталь: "Cam lobe" (Кулачок)',
    [
      { en: 'The cam rotates to open and close the valves.', ru: 'Кулачок вращается, открывая и закрывая клапаны.' },
      { en: 'A worn cam can damage the engine.', ru: 'Изношенный кулачок может повредить двигатель.' },
      { en: 'The mechanic replaced the camshaft in the car.', ru: 'Механик заменил распределительный вал в машине.' },
      { en: 'Webcam is short for web camera, unrelated to mechanical cam.', ru: 'Вебкамера — это сокращение от веб-камеры, не связано с механическим кулачком.' }
    ]
),

createRichWord('c2_canvass', 'Canvass', '/ˈkænvəs/', 'кэнвэс', 'Агитировать / Опрашивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Опрашивать людей для узнавания мнения или просить поддержки (голосов).',
    '- Политика: "Canvass for votes" (Агитировать за голоса)\n- Мнение: "Canvass opinion" (Опрашивать мнение)\n- Район: "Canvass the neighborhood" (Опрашивать район)',
    [
      { en: 'Candidates are canvassing for votes door-to-door.', ru: 'Кандидаты агитируют за голоса от двери к двери.' },
      { en: 'We need to canvass the members before making a decision.', ru: 'Нам нужно опросить членов перед принятием решения.' },
      { en: 'Police canvassed the area looking for witnesses.', ru: 'Полиция опросила район в поисках свидетелей.' },
      { en: 'She spent the day canvassing support for the charity.', ru: 'Она провела день, собирая (агитируя) поддержку для благотворительности.' }
    ]
  ),
createRichWord('c2_aback', 'Aback', '/əˈbæk/', 'эбэк', 'Застигнутый врасплох', ProficiencyLevel.C2, 'adv', 'Low', 'Neutral',
    'Используется исключительно в идиоме "taken aback", что означает быть шокированным или сильно удивленным.',
    '- Идиома: "Taken aback" (Ошарашен / Застигнут врасплох)\n- Реакция: "Slightly taken aback" (Слегка удивлен)\n- Степень: "Completely taken aback" (Полностью ошеломлен)',
    [
      { en: 'I was completely taken aback by his rudeness.', ru: 'Я был совершенно ошарашен его грубостью.' },
      { en: 'She seemed taken aback when I knew her name.', ru: 'Она казалась застигнутой врасплох, когда я узнал её имя.' },
      { en: 'He was taken aback by the sudden change in plans.', ru: 'Он был ошеломлен внезапным изменением планов.' },
      { en: 'We were somewhat taken aback by the high prices.', ru: 'Нас несколько удивили высокие цены.' }
    ]
),

createRichWord('c2_abhor', 'Abhor', '/əbˈhɔː/', 'эбхо', 'Питать отвращение / Ненавидеть', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Испытывать сильное отвращение или ненависть к какому-либо способу мышления или поведения.',
    '- Мораль: "Abhor violence" (Питать отвращение к насилию)\n- Чувство: "Abhor racism" (Ненавидеть расизм)\n- Взгляды: "Abhor cruelty" (Ненавидеть жестокость)',
    [
      { en: 'I abhor all forms of racism and discrimination.', ru: 'Я питаю отвращение ко всем формам расизма и дискриминации.' },
      { en: 'She abhors violence of any kind.', ru: 'Она ненавидит насилие любого рода.' },
      { en: 'He is a pacifist who abhors war.', ru: 'Он пацифист, который питает отвращение к войне.' },
      { en: 'They abhor the way animals are treated in that factory.', ru: 'Им внушает отвращение то, как обращаются с животными на той фабрике.' }
    ]
),

createRichWord('c2_abstain', 'Abstain', '/əbˈsteɪn/', 'эбстейн', 'Воздерживаться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сознательно отказываться от чего-то (алкоголя, голосования).',
    '- Выбор: "Abstain from voting" (Воздержаться от голосования)\n- Привычки: "Abstain from alcohol" (Воздерживаться от алкоголя)\n- Секс: "Abstain from sex" (Воздерживаться от секса)',
    [
      { en: 'He decided to abstain from alcohol for health reasons.', ru: 'Он решил воздерживаться от алкоголя по состоянию здоровья.' },
      { en: 'Ten members voted for the proposal, five voted against, and two abstained.', ru: 'Десять членов проголосовали за предложение, пять — против, и двое воздержались.' },
      { en: 'Doctors advised him to abstain from smoking.', ru: 'Врачи посоветовали ему воздерживаться от курения.' },
      { en: 'During Lent, many people abstain from eating meat.', ru: 'Во время Великого поста многие люди воздерживаются от употребления мяса.' }
    ]
),

createRichWord('c2_abstinence', 'Abstinence', '/ˈæbstɪnəns/', 'эбстинэнс', 'Воздержание', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Практика воздержания от чего-либо, например, алкоголя или секса.',
    '- Здоровье: "Total abstinence" (Полное воздержание)\n- Религия: "Sexual abstinence" (Сексуальное воздержание)\n- Привычки: "Alcohol abstinence" (Отказ от алкоголя)',
    [
      { en: 'Total abstinence from alcohol is the only cure for him.', ru: 'Полное воздержание от алкоголя — единственное лекарство для него.' },
      { en: 'The program promotes abstinence among teenagers.', ru: 'Программа пропагандирует воздержание среди подростков.' },
      { en: 'Long periods of abstinence can be difficult.', ru: 'Длительные периоды воздержания могут быть трудными.' },
      { en: 'His abstinence from gambling saved his marriage.', ru: 'Его отказ от азартных игр спас его брак.' }
    ]
),

createRichWord('c2_accession', 'Accession', '/ækˈseʃn/', 'эксешн', 'Вступление (в должность) / Присоединение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Официальное вступление в должность (короля, королевы); присоединение к договору или организации.',
    '- Монархия: "Accession to the throne" (Вступление на престол)\n- Политика: "Accession to the EU" (Вступление в ЕС)\n- Библиотека: "New accessions" (Новые поступления)',
    [
      { en: 'The Queen\'s accession to the throne took place in 1952.', ru: 'Вступление королевы на престол состоялось в 1952 году.' },
      { en: 'We are negotiating the country\'s accession to the treaty.', ru: 'Мы ведем переговоры о присоединении страны к договору.' },
      { en: 'The museum displayed its latest accessions.', ru: 'Музей выставил свои последние поступления.' },
      { en: 'His accession to power was marked by celebrations.', ru: 'Его приход к власти был отмечен празднованиями.' }
    ]
),

createRichWord('c2_accomplice', 'Accomplice', '/əˈkʌmplɪs/', 'экамплис', 'Соучастник', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Человек, который помогает другому совершить преступление.',
    '- Преступление: "Act as an accomplice" (Действовать как соучастник)\n- Закон: "Without an accomplice" (Без сообщника)\n- Полиция: "Identify the accomplice" (Опознать соучастника)',
    [
      { en: 'The police are looking for his accomplice.', ru: 'Полиция ищет его соучастника.' },
      { en: 'She was charged as an accomplice to the robbery.', ru: 'Ей было предъявлено обвинение как соучастнице ограбления.' },
      { en: 'He claimed he acted alone and had no accomplice.', ru: 'Он утверждал, что действовал один и у него не было сообщников.' },
      { en: 'An accomplice drove the getaway car.', ru: 'Соучастник вел машину, на которой они скрылись.' }
    ]
),

createRichWord('c2_adhesive', 'Adhesive', '/ədˈhiːsɪv/', 'эдхисив', 'Клей / Клейкий', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Вещество, используемое для склеивания предметов (сущ.); липкий (прил.).',
    '- Материал: "Strong adhesive" (Сильный клей)\n- Свойство: "Adhesive tape" (Клейкая лента)\n- Строительство: "Apply adhesive" (Нанести клей)',
    [
      { en: 'Use a strong adhesive to fix the broken tile.', ru: 'Используйте сильный клей, чтобы починить сломанную плитку.' },
      { en: 'The bandage has an adhesive strip to hold it in place.', ru: 'На пластыре есть клейкая полоска, чтобы удерживать его на месте.' },
      { en: 'This glue is an excellent adhesive for wood.', ru: 'Этот клей — отличное клеящее вещество для дерева.' },
      { en: 'Remove the backing from the adhesive label.', ru: 'Снимите подложку с клейкой этикетки.' }
    ]
),

createRichWord('c2_adjunct', 'Adjunct', '/ˈædʒʌŋkt/', 'эджанкс', 'Дополнение / Адъюнкт', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Что-то добавленное к другому, но не являющееся его неотъемлемой частью; помощник.',
    '- Образование: "Adjunct professor" (Адъюнкт-профессор / Внештатный преподаватель)\n- Грамматика: "Adverbial adjunct" (Обстоятельство)\n- Добавление: "Useful adjunct" (Полезное дополнение)',
    [
      { en: 'Massage therapy can be a useful adjunct to medication.', ru: 'Массаж может быть полезным дополнением к медикаментозному лечению.' },
      { en: 'He works as an adjunct professor at the university.', ru: 'Он работает внештатным преподавателем в университете.' },
      { en: 'Physical exercise is an important adjunct to a healthy diet.', ru: 'Физические упражнения — важное дополнение к здоровой диете.' },
      { en: 'In grammar, an adjunct is an optional part of a sentence.', ru: 'В грамматике адъюнкт — это необязательная часть предложения.' }
    ]
),

createRichWord('c2_admissible', 'Admissible', '/ədˈmɪsəbl/', 'эдмисэбл', 'Допустимый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Приемлемый или разрешенный, особенно в суде.',
    '- Суд: "Admissible evidence" (Допустимые доказательства)\n- Правила: "Not admissible" (Недопустимый)\n- Условие: "Admissible in court" (Допустимый в суде)',
    [
      { en: 'The judge ruled that the recording was not admissible in court.', ru: 'Судья постановил, что запись не является допустимым доказательством в суде.' },
      { en: 'Hearsay is generally not admissible evidence.', ru: 'Слухи, как правило, не являются допустимыми доказательствами.' },
      { en: 'Only original documents are admissible.', ru: 'Допустимы только оригиналы документов.' },
      { en: 'Is this type of behavior admissible in your company?', ru: 'Допустимо ли такое поведение в вашей компании?' }
    ]
),

createRichWord('c2_adobe', 'Adobe', '/əˈdəʊbi/', 'эдоуби', 'Саман / Глинобитный', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Тип глины, используемый для изготовления кирпичей, высушенных на солнце; также здания из этого материала.',
    '- Строительство: "Adobe bricks" (Саманные кирпичи)\n- Дом: "Adobe house" (Глинобитный дом)\n- Архитектура: "Adobe walls" (Глинобитные стены)',
    [
      { en: 'Many traditional houses in Mexico are made of adobe.', ru: 'Многие традиционные дома в Мексике сделаны из самана.' },
      { en: 'Adobe bricks are dried in the sun rather than baked.', ru: 'Саманные кирпичи сушат на солнце, а не обжигают.' },
      { en: 'The cool adobe walls keep the heat out.', ru: 'Прохладные глинобитные стены не пропускают жару.' },
      { en: 'They built a small adobe hut in the desert.', ru: 'Они построили небольшую саманную хижину в пустыне.' }
    ]
),

createRichWord('c2_afore', 'Afore', '/əˈfɔː/', 'эфо', 'Ранее / Прежде', ProficiencyLevel.C2, 'prep', 'Low', 'Formal',
    'Устаревшее или диалектное слово, означающее "перед" или "ранее" (часто в комбинациях).',
    '- Текст: "Aforementioned" (Вышеупомянутый)\n- Время: "Aforetime" (В прежние времена)\n- Идиома: "Afore ye go" (Прежде чем ты уйдешь - шотл.)',
    [
      { en: 'The aforementioned rules must be obeyed.', ru: 'Вышеупомянутые правила должны соблюдаться.' },
      { en: 'As I said afore, I will not do it.', ru: 'Как я говорил ранее, я не буду этого делать.' },
      { en: 'He arrived afore the others.', ru: 'Он прибыл раньше других (устар.).' },
      { en: 'The plan was agreed upon afore the meeting.', ru: 'План был согласован перед встречей.' }
    ]
),

createRichWord('c2_aft', 'Aft', '/ɑːft/', 'афт', 'Корма / На корме', ProficiencyLevel.C2, 'adv', 'Low', 'Formal',
    'В задней части корабля или самолета.',
    '- Корабль: "Go aft" (Идти на корму)\n- Расположение: "Fore and aft" (Нос и корма / Вдоль всего судна)\n- Самолет: "Aft cabin" (Задняя кабина)',
    [
      { en: 'The captain ordered the crew to gather aft.', ru: 'Капитан приказал команде собраться на корме.' },
      { en: 'Our cabins are located aft of the engine room.', ru: 'Наши каюты расположены позади машинного отделения.' },
      { en: 'The cargo was stored fore and aft.', ru: 'Груз был размещен по всему судну (на носу и на корме).' },
      { en: 'Smoke was seen coming from the aft section of the plane.', ru: 'Был замечен дым, идущий из хвостовой части самолета.' }
    ]
),

createRichWord('c2_agrarian', 'Agrarian', '/əˈɡreəriən/', 'эгрэриэн', 'Аграрный / Земледельческий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к земледелию или сельскохозяйственным землям.',
    '- Общество: "Agrarian society" (Аграрное общество)\n- Политика: "Agrarian reform" (Аграрная реформа)\n- Экономика: "Agrarian economy" (Аграрная экономика)',
    [
      { en: 'Before the industrial revolution, most people lived in an agrarian society.', ru: 'До промышленной революции большинство людей жили в аграрном обществе.' },
      { en: 'The government promised major agrarian reforms.', ru: 'Правительство обещало масштабные аграрные реформы.' },
      { en: 'The country\'s economy is still largely agrarian.', ru: 'Экономика страны по-прежнему в значительной степени аграрная.' },
      { en: 'Agrarian discontent led to a revolt among farmers.', ru: 'Аграрное недовольство привело к восстанию среди фермеров.' }
    ]
),

createRichWord('c2_alight', 'Alight', '/əˈlaɪt/', 'элайт', 'Сходить / Горящий', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сходить с транспорта (автобуса, поезда); или (прил.) горящий, охваченный огнем.',
    '- Транспорт: "Alight from the train" (Сойти с поезда)\n- Огонь: "Set alight" (Подожженный / Горящий)\n- Глаза: "Eyes alight" (Глаза светятся)',
    [
      { en: 'Passengers must not alight from the bus while it is moving.', ru: 'Пассажирам запрещено сходить с автобуса во время движения.' },
      { en: 'The building was set alight by protesters.', ru: 'Здание было подожжено протестующими.' },
      { en: 'Her face was alight with happiness.', ru: 'Ее лицо светилось от счастья.' },
      { en: 'A bird alighted on the branch.', ru: 'Птица опустилась на ветку.' }
    ]
),

createRichWord('c2_allure', 'Allure', '/əˈlʊə/', 'элюэ', 'Очарование / Привлекательность', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Сила привлекать или очаровывать; шарм.',
    '- Качество: "Sexual allure" (Сексуальная привлекательность)\n- Сила: "The allure of fame" (Притягательность славы)\n- Глагол: "To allure" (Обольщать / Заманивать)',
    [
      { en: 'The allure of the big city attracted many young people.', ru: 'Очарование большого города привлекало многих молодых людей.' },
      { en: 'He could not resist the allure of easy money.', ru: 'Он не мог устоять перед соблазном легких денег.' },
      { en: 'She has a mysterious allure that fascinates men.', ru: 'У нее есть таинственное очарование, которое завораживает мужчин.' },
      { en: 'The book captures the allure of living in Paris.', ru: 'Книга передает притягательность жизни в Париже.' }
    ]
),

createRichWord('c2_allusion', 'Allusion', '/əˈluːʒn/', 'элюжн', 'Аллюзия / Намек', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Косвенное упоминание чего-либо; намек.',
    '- Литература: "Literary allusion" (Литературная аллюзия)\n- Речь: "Make an allusion to" (Сделать намек на)\n- Скрытость: "Vague allusion" (Смутный намек)',
    [
      { en: 'The poem contains many allusions to Greek mythology.', ru: 'Стихотворение содержит много аллюзий на греческую мифологию.' },
      { en: 'He made a vague allusion to his past crimes.', ru: 'Он сделал смутный намек на свои прошлые преступления.' },
      { en: 'Her speech was full of biblical allusions.', ru: 'Ее речь была полна библейских аллюзий.' },
      { en: 'I didn\'t understand the allusion he made.', ru: 'Я не понял намека, который он сделал.' }
    ]
),

createRichWord('c2_aloft', 'Aloft', '/əˈlɒft/', 'элофт', 'Наверху / В воздухе', ProficiencyLevel.C2, 'adv', 'Low', 'Formal',
    'Высоко в воздухе; над землей.',
    '- Позиция: "Held aloft" (Держал высоко над головой)\n- Полет: "Stay aloft" (Оставаться в воздухе)\n- Море: "Go aloft" (Подниматься на мачту)',
    [
      { en: 'He held the trophy aloft for everyone to see.', ru: 'Он поднял трофей высоко над головой, чтобы все видели.' },
      { en: 'The kite stayed aloft in the strong wind.', ru: 'Воздушный змей держался в воздухе благодаря сильному ветру.' },
      { en: 'Sailors had to go aloft to adjust the sails.', ru: 'Морякам приходилось подниматься на мачты, чтобы поправить паруса.' },
      { en: 'With engines failing, the plane struggled to stay aloft.', ru: 'С отказавшими двигателями самолет с трудом держался в воздухе.' }
    ]
),

createRichWord('c2_aloof', 'Aloof', '/əˈluːf/', 'элуф', 'Отчужденный / Холодный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Недружелюбный или не желающий участвовать в чем-либо; держащийся в стороне.',
    '- Поведение: "Remain aloof" (Оставаться в стороне)\n- Характер: "Aloof and distant" (Отчужденный и далекий)\n- Отношение: "Keep aloof" (Держаться особняком)',
    [
      { en: 'He remained aloof from the rest of the group.', ru: 'Он держался в стороне от остальной группы.' },
      { en: 'She seemed aloof, but actually she was just shy.', ru: 'Она казалась отчужденной, но на самом деле просто стеснялась.' },
      { en: 'The government kept aloof from the conflict.', ru: 'Правительство держалось в стороне от конфликта.' },
      { en: 'His aloof manner made him difficult to approach.', ru: 'Его холодная манера делала его труднодоступным для общения.' }
    ]
),

createRichWord('c2_amalgamate', 'Amalgamate', '/əˈmælɡəmeɪt/', 'эмэлгэмейт', 'Объединять / Сливаться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Соединять две или более организации или вещи в одну большую.',
    '- Бизнес: "Amalgamate companies" (Объединить компании)\n- Организация: "Schools amalgamated" (Школы слились)\n- Смесь: "Amalgamate styles" (Смешать стили)',
    [
      { en: 'The two banks decided to amalgamate next year.', ru: 'Два банка решили объединиться в следующем году.' },
      { en: 'Our local schools have amalgamated to form a large academy.', ru: 'Наши местные школы слились, образовав большую академию.' },
      { en: 'The style amalgamates traditional and modern elements.', ru: 'Стиль объединяет традиционные и современные элементы.' },
      { en: 'Different cultures amalgamated to create a new society.', ru: 'Разные культуры смешались, чтобы создать новое общество.' }
    ]
),

createRichWord('c2_amiable', 'Amiable', '/ˈeɪmiəbl/', 'эймиэбл', 'Любезный / Дружелюбный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Приятный и дружелюбный в общении.',
    '- Характер: "Amiable person" (Любезный человек)\n- Разговор: "Amiable conversation" (Дружеская беседа)\n- Отношения: "Amiable mood" (Благодушное настроение)',
    [
      { en: 'He was an amiable host who made everyone feel welcome.', ru: 'Он был любезным хозяином, который заставил всех чувствовать себя желанными гостями.' },
      { en: 'We had an amiable discussion about politics.', ru: 'У нас была дружеская дискуссия о политике.' },
      { en: 'Despite their divorce, they remained amiable.', ru: 'Несмотря на развод, они остались в дружеских отношениях.' },
      { en: 'She greeted us with an amiable smile.', ru: 'Она приветствовала нас любезной улыбкой.' }
    ]
),

createRichWord('c2_amplitude', 'Amplitude', '/ˈæmplɪtjuːd/', 'эмплитьюд', 'Амплитуда / Размах', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Максимальное отклонение колебания; или большой размер/размах чего-либо.',
    '- Физика: "Wave amplitude" (Амплитуда волны)\n- Звук: "High amplitude" (Высокая амплитуда)\n- Размер: "Amplitude of movement" (Размах движения)',
    [
      { en: 'The amplitude of the earthquake waves caused great damage.', ru: 'Амплитуда сейсмических волн вызвала большие разрушения.' },
      { en: 'Scientists measured the amplitude of the signal.', ru: 'Ученые измерили амплитуду сигнала.' },
      { en: 'We were surprised by the sheer amplitude of the landscape.', ru: 'Мы были удивлены самим размахом ландшафта.' },
      { en: 'Greater amplitude means a louder sound.', ru: 'Большая амплитуда означает более громкий звук.' }
    ]
),

createRichWord('c2_amputate', 'Amputate', '/ˈæmpjuteɪt/', 'эмпьютейт', 'Ампутировать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Хирургически удалить часть тела, например, руку или ногу.',
    '- Медицина: "Amputate a leg" (Ампутировать ногу)\n- Травма: "Had to be amputated" (Пришлось ампутировать)\n- Операция: "Surgical amputation" (Хирургическая ампутация)',
    [
      { en: 'Doctors had to amputate his leg to save his life.', ru: 'Врачам пришлось ампутировать ему ногу, чтобы спасти жизнь.' },
      { en: 'Gangrene forced them to amputate his toes.', ru: 'Гангрена вынудила их ампутировать ему пальцы ног.' },
      { en: 'He learned to walk again after his foot was amputated.', ru: 'Он научился ходить заново после того, как ему ампутировали стопу.' },
      { en: 'The injured limb was amputated below the knee.', ru: 'Поврежденная конечность была ампутирована ниже колена.' }
    ]
),

createRichWord('c2_anew', 'Anew', '/əˈnjuː/', 'энью', 'Заново / Снова', ProficiencyLevel.C2, 'adv', 'Low', 'Literary',
    'Еще раз; по-новому или с самого начала.',
    '- Действие: "Start anew" (Начать заново)\n- Жизнь: "Begin anew" (Начать новую жизнь)\n- Взгляд: "Look at it anew" (Взглянуть по-новому)',
    [
      { en: 'They moved to a different country to start their lives anew.', ru: 'Они переехали в другую страну, чтобы начать жизнь заново.' },
      { en: 'The project failed, so we must begin anew.', ru: 'Проект провалился, поэтому мы должны начать всё сначала.' },
      { en: 'Let us look at the problem anew.', ru: 'Давайте взглянем на проблему по-новому.' },
      { en: 'His words gave me hope anew.', ru: 'Его слова вновь вселили в меня надежду.' }
    ]
),

createRichWord('c2_animosity', 'Animosity', '/ˌænɪˈmɒsəti/', 'энимосэти', 'Враждебность', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Сильное чувство неприязни или вражды.',
    '- Чувство: "Deep animosity" (Глубокая враждебность)\n- Отношения: "Personal animosity" (Личная неприязнь)\n- Конфликт: "No animosity" (Никакой вражды)',
    [
      { en: 'There is a long history of animosity between the two families.', ru: 'Между этими двумя семьями долгая история вражды.' },
      { en: 'I bear no animosity towards him despite what happened.', ru: 'Я не испытываю к нему враждебности, несмотря на то, что произошло.' },
      { en: 'The debate was filled with personal animosity.', ru: 'Дебаты были полны личной неприязни.' },
      { en: 'They managed to work together without animosity.', ru: 'Им удалось работать вместе без враждебности.' }
    ]
),

createRichWord('c2_annihilate', 'Annihilate', '/əˈnaɪəleɪt/', 'энайэлейт', 'Уничтожать / Истреблять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Уничтожить полностью; победить кого-то с разгромным счетом.',
    '- Война: "Annihilate the enemy" (Уничтожить врага)\n- Спорт: "Annihilate the team" (Разгромить команду)\n- Разрушение: "Totally annihilated" (Полностью уничтожен)',
    [
      { en: 'The bomb annihilated the entire city.', ru: 'Бомба уничтожила весь город.' },
      { en: 'Our team was annihilated in the final match.', ru: 'Наша команда была разгромлена в финальном матче.' },
      { en: 'They plan to annihilate all resistance.', ru: 'Они планируют истребить все сопротивление.' },
      { en: 'The disease threatened to annihilate the population.', ru: 'Болезнь угрожала истребить население.' }
    ]
),

createRichWord('c2_annuity', 'Annuity', '/əˈnjuːəti/', 'эньюэти', 'Аннуитет / Ежегодная рента', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Фиксированная сумма денег, выплачиваемая кому-либо каждый год (обычно как инвестиция).',
    '- Финансы: "Buy an annuity" (Купить аннуитет)\n- Пенсия: "Retirement annuity" (Пенсионный аннуитет)\n- Выплата: "Receive an annuity" (Получать ренту)',
    [
      { en: 'She invested her savings to buy an annuity.', ru: 'Она вложила свои сбережения, чтобы купить аннуитет.' },
      { en: 'The annuity provides him with a steady income.', ru: 'Аннуитет обеспечивает ему стабильный доход.' },
      { en: 'He receives a small annuity from his late wife\'s estate.', ru: 'Он получает небольшую ежегодную ренту из наследства покойной жены.' },
      { en: 'Annuity rates have fallen recently.', ru: 'Ставки по аннуитетам в последнее время упали.' }
    ]
),

createRichWord('c2_antagonism', 'Antagonism', '/ænˈtæɡənɪzəm/', 'энтэгэнизм', 'Антагонизм / Вражда', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Активная враждебность или оппозиция.',
    '- Отношения: "Open antagonism" (Открытая вражда)\n- Группы: "Class antagonism" (Классовый антагонизм)\n- Чувство: "Feel antagonism" (Чувствовать враждебность)',
    [
      { en: 'There is a lot of antagonism between the two political parties.', ru: 'Между двумя политическими партиями существует сильный антагонизм.' },
      { en: 'His suggestion was met with open antagonism.', ru: 'Его предложение было встречено с открытой враждебностью.' },
      { en: 'We need to reduce the antagonism in the workplace.', ru: 'Нам нужно снизить уровень враждебности на рабочем месте.' },
      { en: 'The antagonism between the neighbors escalated.', ru: 'Вражда между соседями обострилась.' }
    ]
),

createRichWord('c2_antecedent', 'Antecedent', '/ˌæntɪˈsiːdnt/', 'энтисидэнт', 'Предшественник / Антецедент', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Событие или человек, существовавший до другого; в грамматике — слово, к которому относится местоимение.',
    '- История: "Historical antecedent" (Исторический предшественник)\n- Грамматика: "Pronoun antecedent" (Антецедент местоимения)\n- Событие: "Without antecedent" (Беспрецедентный)',
    [
      { en: 'The typewriter is the antecedent of the computer keyboard.', ru: 'Пишущая машинка — предшественник компьютерной клавиатуры.' },
      { en: 'In the sentence "John lost his hat", "John" is the antecedent of "his".', ru: 'В предложении "Джон потерял свою шляпу", "Джон" — антецедент местоимения "свою".' },
      { en: 'Many modern laws have Roman antecedents.', ru: 'Многие современные законы имеют римских предшественников.' },
      { en: 'We must examine the antecedents of this conflict.', ru: 'Мы должны изучить предысторию (предшествующие события) этого конфликта.' }
    ]
),

createRichWord('c2_anterior', 'Anterior', '/ænˈtɪəriə/', 'энтиэриэ', 'Передний', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Находящийся в передней части тела или объекта (противоположность posterior).',
    '- Анатомия: "Anterior view" (Вид спереди)\n- Медицина: "Anterior ligament" (Передняя связка)\n- Расположение: "Anterior surface" (Передняя поверхность)',
    [
      { en: 'The anterior part of the brain controls decision making.', ru: 'Передняя часть мозга контролирует принятие решений.' },
      { en: 'He tore his anterior cruciate ligament playing football.', ru: 'Он порвал переднюю крестообразную связку, играя в футбол.' },
      { en: 'The dentist examined my anterior teeth.', ru: 'Стоматолог осмотрел мои передние зубы.' },
      { en: 'The diagram shows the anterior view of the heart.', ru: 'Диаграмма показывает вид сердца спереди.' }
    ]
),

createRichWord('c2_anthology', 'Anthology', '/ænˈθɒlədʒi/', 'энсóлэджи', 'Антология', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Сборник литературных произведений (стихов, рассказов) разных авторов.',
    '- Литература: "Poetry anthology" (Антология поэзии)\n- Книга: "Literary anthology" (Литературная антология)\n- Музыка: "Anthology album" (Альбом-антология)',
    [
      { en: 'Her poem was published in a new anthology.', ru: 'Ее стихотворение было опубликовано в новой антологии.' },
      { en: 'We are studying an anthology of American short stories.', ru: 'Мы изучаем антологию американских рассказов.' },
      { en: 'The Beatles released an anthology of their music.', ru: 'The Beatles выпустили антологию своей музыки.' },
      { en: 'This anthology contains works from the 19th century.', ru: 'Эта антология содержит произведения 19-го века.' }
    ]
),

createRichWord('c2_antic', 'Antic', '/ˈæntɪk/', 'энтик', 'Выходка / Шалость', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Глупое, забавное или странное поведение (обычно во множественном числе: antics).',
    '- Поведение: "Childish antics" (Детские выходки)\n- Веселье: "Amusing antics" (Забавные выходки)\n- Животные: "Playful antics" (Игривые шалости)',
    [
      { en: 'The clown\'s antics made the children laugh.', ru: 'Выходки клоуна рассмешили детей.' },
      { en: 'We were tired of his drunken antics.', ru: 'Мы устали от его пьяных выходок.' },
      { en: 'The puppy\'s playful antics were adorable.', ru: 'Игривые шалости щенка были очаровательны.' },
      { en: 'Stop your antics and behave yourself!', ru: 'Прекрати свои кривляния и веди себя прилично!' }
    ]
),

createRichWord('c2_antidote', 'Antidote', '/ˈæntidəʊt/', 'энтидоут', 'Противоядие', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Лекарство, нейтрализующее яд; или средство против чего-то неприятного.',
    '- Медицина: "Antidote to poison" (Противоядие от яда)\n- Переносно: "Antidote to stress" (Средство от стресса)\n- Действие: "Administer an antidote" (Ввести противоядие)',
    [
      { en: 'There is no known antidote for this snake bite.', ru: 'От укуса этой змеи нет известного противоядия.' },
      { en: 'Laughter is the best antidote to sadness.', ru: 'Смех — лучшее средство от грусти.' },
      { en: 'They rushed to find an antidote before it was too late.', ru: 'Они поспешили найти противоядие, пока не стало слишком поздно.' },
      { en: 'Exercise serves as an effective antidote to depression.', ru: 'Физические упражнения служат эффективным средством от депрессии.' }
    ]
),

createRichWord('c2_antigen', 'Antigen', '/ˈæntɪdʒən/', 'энтиджен', 'Антиген', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Вещество, которое заставляет организм вырабатывать антитела (иммунную реакцию).',
    '- Медицина: "Antigen test" (Тест на антиген)\n- Иммунитет: "Viral antigen" (Вирусный антиген)\n- Реакция: "Produce antigens" (Вырабатывать антигены)',
    [
      { en: 'The vaccine contains a harmless antigen.', ru: 'Вакцина содержит безвредный антиген.' },
      { en: 'Antigens trigger the immune system to react.', ru: 'Антигены заставляют иммунную систему реагировать.' },
      { en: 'They performed an antigen test to check for the virus.', ru: 'Они провели тест на антиген, чтобы проверить наличие вируса.' },
      { en: 'White blood cells attack foreign antigens.', ru: 'Лейкоциты атакуют чужеродные антигены.' }
    ]
),

createRichWord('c2_aperture', 'Aperture', '/ˈæpətʃə/', 'эпэче', 'Отверстие / Диафрагма', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Небольшое отверстие; или устройство в камере, контролирующее свет.',
    '- Фото: "Camera aperture" (Диафрагма камеры)\n- Отверстие: "Small aperture" (Маленькое отверстие)\n- Свет: "Wide aperture" (Широкая диафрагма)',
    [
      { en: 'Adjust the aperture to let in more light.', ru: 'Отрегулируйте диафрагму, чтобы пропустить больше света.' },
      { en: 'Light entered the room through a small aperture in the wall.', ru: 'Свет проникал в комнату через небольшое отверстие в стене.' },
      { en: 'A wide aperture creates a blurred background.', ru: 'Широкая диафрагма создает размытый фон.' },
      { en: 'The telescope has a very large aperture.', ru: 'У телескопа очень большая апертура (отверстие).' }
    ]
),

createRichWord('c2_apex', 'Apex', '/ˈeɪpeks/', 'эйпекс', 'Вершина / Пик', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Самая верхняя точка или высшая часть чего-либо.',
    '- Геометрия: "Apex of a triangle" (Вершина треугольника)\n- Карьера: "Apex of career" (Пик карьеры)\n- Природа: "Apex predator" (Хищник на вершине пищевой цепи)',
    [
      { en: 'He reached the apex of his career at age forty.', ru: 'Он достиг пика своей карьеры в сорок лет.' },
      { en: 'The lion is an apex predator in the savannah.', ru: 'Лев — верховный хищник в саванне.' },
      { en: 'The apex of the roof needs repairing.', ru: 'Конек (вершина) крыши нуждается в ремонте.' },
      { en: 'At the apex of the pyramid stands a golden statue.', ru: 'На вершине пирамиды стоит золотая статуя.' }
    ]
),

createRichWord('c2_apiece', 'Apiece', '/əˈpiːs/', 'эпис', 'За штуку / Каждому', ProficiencyLevel.C2, 'adv', 'Low', 'Neutral',
    'Поштучно; для каждого.',
    '- Цена: "Cost five dollars apiece" (Стоить по пять долларов за штуку)\n- Распределение: "Two apples apiece" (По два яблока каждому)\n- Фраза: "One apiece" (По одному на брата)',
    [
      { en: 'The tickets cost fifty dollars apiece.', ru: 'Билеты стоят по пятьдесят долларов за штуку.' },
      { en: 'He gave the children two sweets apiece.', ru: 'Он дал детям по две конфеты каждому.' },
      { en: 'They scored one goal apiece in the match.', ru: 'В матче они забили по одному голу.' },
      { en: 'Apples are sold for 50 cents apiece.', ru: 'Яблоки продаются по 50 центов за штуку.' }
    ]
),

createRichWord('c2_append', 'Append', '/əˈpend/', 'эпэнд', 'Добавлять / Прилагать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Добавить что-то к концу письменного документа.',
    '- Документ: "Append a signature" (Поставить подпись)\n- Текст: "Append a note" (Добавить примечание)\n- Файл: "Append to file" (Добавить в конец файла)',
    [
      { en: 'Please append your signature to the bottom of the page.', ru: 'Пожалуйста, поставьте свою подпись внизу страницы.' },
      { en: 'The results are appended to this report.', ru: 'Результаты приложены к этому отчету.' },
      { en: 'He appended a bibliography to his essay.', ru: 'Он приложил библиографию к своему эссе.' },
      { en: 'New data will be appended as it becomes available.', ru: 'Новые данные будут добавлены по мере их поступления.' }
    ]
),

createRichWord('c2_appreciable', 'Appreciable', '/əˈpriːʃəbl/', 'эпришэбл', 'Заметный / Ощутимый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Достаточно большой или важный, чтобы быть замеченным.',
    '- Размер: "Appreciable difference" (Ощутимая разница)\n- Количество: "Appreciable amount" (Заметное количество)\n- Изменение: "Appreciable increase" (Заметное увеличение)',
    [
      { en: 'There is no appreciable difference between the two brands.', ru: 'Между двумя брендами нет ощутимой разницы.' },
      { en: 'The temperature dropped by an appreciable amount.', ru: 'Температура упала на заметную величину.' },
      { en: 'He has made appreciable progress in his studies.', ru: 'Он добился заметного прогресса в учебе.' },
      { en: 'An appreciable number of people attended the event.', ru: 'Мероприятие посетило значительное количество людей.' }
    ]
),

createRichWord('c2_apprehensive', 'Apprehensive', '/ˌæprɪˈhensɪv/', 'эприхэнсив', 'Опасающийся / Тревожный', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Обеспокоенный или испуганный тем, что может произойти что-то плохое.',
    '- Чувство: "Apprehensive about" (Обеспокоенный чем-то)\n- Взгляд: "Apprehensive look" (Тревожный взгляд)\n- Будущее: "Feel apprehensive" (Чувствовать тревогу)',
    [
      { en: 'I am a bit apprehensive about the exam results.', ru: 'Я немного беспокоюсь о результатах экзамена.' },
      { en: 'She gave him an apprehensive glance.', ru: 'Она бросила на него тревожный взгляд.' },
      { en: 'Residents are apprehensive about the new development.', ru: 'Жители обеспокоены новым строительством.' },
      { en: 'He felt apprehensive before his first flight.', ru: 'Он чувствовал тревогу перед своим первым полетом.' }
    ]
),

createRichWord('c2_appropriable', 'Appropriable', '/əˈprəʊpriəbl/', 'эпроуприэбл', 'Подлежащий присвоению', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'То, что может быть присвоено или использовано (редкий, формальный/юридический термин).',
    '- Экономика: "Appropriable profit" (Присваиваемая прибыль)\n- Ресурсы: "Appropriable resources" (Ресурсы, которые можно присвоить)\n- Право: "Legally appropriable" (Законно присваиваемый)',
    [
      { en: 'Public goods are generally not appropriable by individuals.', ru: 'Общественные блага, как правило, не могут быть присвоены отдельными лицами.' },
      { en: 'The surplus became appropriable revenue for the company.', ru: 'Излишек стал присваиваемым доходом для компании.' },
      { en: 'Land was considered appropriable under the old laws.', ru: 'Земля считалась подлежащей присвоению по старым законам.' },
      { en: 'Ideas are not easily appropriable without patents.', ru: 'Идеи нелегко присвоить без патентов.' }
    ]
),

createRichWord('c2_aptitude', 'Aptitude', '/ˈæptɪtjuːd/', 'эптитъюд', 'Склонность / Способность', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Природная способность делать что-то хорошо.',
    '- Талант: "Aptitude for math" (Способность к математике)\n- Тест: "Aptitude test" (Тест на профпригодность)\n- Навык: "Show aptitude" (Показать склонность)',
    [
      { en: 'She showed an early aptitude for music.', ru: 'Она рано проявила способности к музыке.' },
      { en: 'He has little aptitude for sports.', ru: 'У него мало способностей к спорту.' },
      { en: 'The aptitude test measures your potential skills.', ru: 'Тест на способности измеряет ваши потенциальные навыки.' },
      { en: 'Developing your natural aptitude takes practice.', ru: 'Развитие вашей природной склонности требует практики.' }
    ]
),

createRichWord('c2_archaic', 'Archaic', '/ɑːˈkeɪɪk/', 'акейик', 'Архаичный / Устаревший', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Очень старый или старомодный; принадлежащий прошлому.',
    '- Язык: "Archaic language" (Архаичный язык)\n- Закон: "Archaic laws" (Устаревшие законы)\n- Система: "Archaic system" (Устаревшая система)',
    [
      { en: 'The factory uses archaic machinery from the 1950s.', ru: 'Фабрика использует устаревшее оборудование 1950-х годов.' },
      { en: 'This word is now considered archaic.', ru: 'Это слово сейчас считается архаичным.' },
      { en: 'The country has an archaic legal system.', ru: 'В стране архаичная правовая система.' },
      { en: 'His views on women are archaic.', ru: 'Его взгляды на женщин устарели.' }
    ]
),

createRichWord('c2_arduous', 'Arduous', '/ˈɑːdjuəs/', 'адъюэс', 'Трудный / Тяжкий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Требующий больших усилий и энергии.',
    '- Работа: "Arduous task" (Трудная задача)\n- Путешествие: "Arduous journey" (Тяжкое путешествие)\n- Процесс: "Arduous process" (Трудоемкий процесс)',
    [
      { en: 'It was an arduous climb to the top of the mountain.', ru: 'Это был тяжкий подъем на вершину горы.' },
      { en: 'The journey across the desert was long and arduous.', ru: 'Путешествие через пустыню было долгим и трудным.' },
      { en: 'He undertook the arduous task of rebuilding the house.', ru: 'Он взялся за трудную задачу восстановления дома.' },
      { en: 'After months of arduous training, he was ready.', ru: 'После месяцев изнурительных тренировок он был готов.' }
    ]
),

createRichWord('c2_aromatic', 'Aromatic', '/ˌærəˈmætɪk/', 'эрэмэтик', 'Ароматный', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Имеющий приятный и сильный запах (обычно о еде, растениях, маслах).',
    '- Запах: "Aromatic herbs" (Ароматные травы)\n- Еда: "Aromatic spices" (Ароматные специи)\n- Химия: "Aromatic compounds" (Ароматические соединения)',
    [
      { en: 'She added aromatic herbs to the soup.', ru: 'Она добавила ароматные травы в суп.' },
      { en: 'The garden was filled with aromatic flowers.', ru: 'Сад был полон ароматных цветов.' },
      { en: 'Coffee has a rich, aromatic smell.', ru: 'У кофе богатый, ароматный запах.' },
      { en: 'Aromatic oils are used in massage.', ru: 'Ароматические масла используются при массаже.' }
    ]
),

createRichWord('c2_arsenal', 'Arsenal', '/ˈɑːsənl/', 'асэнл', 'Арсенал', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Коллекция оружия; или запас ресурсов для достижения цели.',
    '- Оружие: "Nuclear arsenal" (Ядерный арсенал)\n- Ресурсы: "Arsenal of tools" (Арсенал инструментов)\n- Место: "Stored in an arsenal" (Хранится в арсенале)',
    [
      { en: 'The country agreed to reduce its nuclear arsenal.', ru: 'Страна согласилась сократить свой ядерный арсенал.' },
      { en: 'He has an arsenal of jokes for every occasion.', ru: 'У него есть арсенал шуток на любой случай.' },
      { en: 'The police found a literal arsenal in his basement.', ru: 'Полиция обнаружила в его подвале целый арсенал.' },
      { en: 'We need a full arsenal of medicines to fight this disease.', ru: 'Нам нужен полный арсенал лекарств, чтобы бороться с этой болезнью.' }
    ]
),

createRichWord('c2_assent', 'Assent', '/əˈsent/', 'эсент', 'Согласие / Одобрение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Официальное согласие или одобрение (сущ.); или соглашаться (гл.).',
    '- Одобрение: "Royal Assent" (Королевская санкция)\n- Глагол: "Assent to" (Согласиться на)\n- Действие: "Nod assent" (Кивнуть в знак согласия)',
    [
      { en: 'The Queen gave her Royal Assent to the bill.', ru: 'Королева дала свою королевскую санкцию на законопроект.' },
      { en: 'She nodded her assent to the proposal.', ru: 'Она кивнула в знак согласия с предложением.' },
      { en: 'He refused to assent to the terms of the contract.', ru: 'Он отказался согласиться с условиями контракта.' },
      { en: 'Murmurs of assent were heard from the crowd.', ru: 'Из толпы послышался одобрительный гул (шепот согласия).' }
    ]
),

createRichWord('c2_astute', 'Astute', '/əˈstjuːt/', 'эстьють', 'Проницательный / Хитрый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Способный быстро понимать ситуацию и извлекать из нее выгоду.',
    '- Ум: "Astute observer" (Проницательный наблюдатель)\n- Бизнес: "Astute businessman" (Хитрый бизнесмен)\n- Решение: "Astute move" (Умный ход)',
    [
      { en: 'He is an astute politician who knows how to win votes.', ru: 'Он проницательный политик, который знает, как завоевать голоса.' },
      { en: 'That was an astute observation you made.', ru: 'Вы сделали проницательное наблюдение.' },
      { en: 'She made some astute investments in property.', ru: 'Она сделала несколько умных (проницательных) инвестиций в недвижимость.' },
      { en: 'An astute reader will notice the hidden meaning.', ru: 'Проницательный читатель заметит скрытый смысл.' }
    ]
),

createRichWord('c2_attenuate', 'Attenuate', '/əˈtenjuieɪt/', 'этенюэйт', 'Ослаблять / Смягчать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сделать что-то слабее или тоньше; уменьшить эффект.',
    '- Сила: "Attenuate the signal" (Ослабить сигнал)\n- Эффект: "Attenuate the impact" (Смягчить удар/воздействие)\n- Вирус: "Attenuated virus" (Ослабленный вирус)',
    [
      { en: 'The trees attenuate the noise from the highway.', ru: 'Деревья ослабляют шум от шоссе.' },
      { en: 'Vaccines often use an attenuated form of the virus.', ru: 'Вакцины часто используют ослабленную форму вируса.' },
      { en: 'Inflation can attenuate the value of your savings.', ru: 'Инфляция может снизить (ослабить) ценность ваших сбережений.' },
      { en: 'The drug attenuates the effects of the disease.', ru: 'Лекарство смягчает последствия болезни.' }
    ]
),

createRichWord('c2_auburn', 'Auburn', '/ˈɔːbən/', 'обэн', 'Золотисто-каштановый', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Цвет волос: красновато-коричневый.',
    '- Волосы: "Auburn hair" (Золотисто-каштановые волосы)\n- Цвет: "Dark auburn" (Темно-каштановый с рыжиной)\n- Описание: "Beautiful auburn" (Красивый рыжеватый)',
    [
      { en: 'She has beautiful long auburn hair.', ru: 'У нее красивые длинные золотисто-каштановые волосы.' },
      { en: 'The leaves turned auburn in the autumn.', ru: 'Листья стали рыжевато-коричневыми осенью.' },
      { en: 'He described her hair as auburn, not red.', ru: 'Он описал ее волосы как золотисто-каштановые, а не рыжие.' },
      { en: 'Sunlight made her auburn hair shine.', ru: 'Солнечный свет заставлял ее золотисто-каштановые волосы сиять.' }
    ]
  ),
createRichWord('c2_auspices', 'Auspices', '/ˈɔːspɪsɪz/', 'осписиз', 'Покровительство / Эгида', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'При поддержке или защите (обычно в фразе "under the auspices of").',
    '- Фраза: "Under the auspices of" (Под эгидой)\n- Организация: "Under UN auspices" (Под эгидой ООН)\n- Поддержка: "Government auspices" (Правительственное покровительство)',
    [
      { en: 'The negotiations were held under the auspices of the United Nations.', ru: 'Переговоры проходили под эгидой Организации Объединенных Наций.' },
      { en: 'The concert was organized under the auspices of the local council.', ru: 'Концерт был организован при поддержке местного совета.' },
      { en: 'We are working under the auspices of a charity.', ru: 'Мы работаем под покровительством благотворительной организации.' },
      { en: 'The research project began under favorable auspices.', ru: 'Исследовательский проект начался при благоприятных предзнаменованиях (устар.).' }
    ]
),

createRichWord('c2_autocrat', 'Autocrat', '/ˈɔːtəkræt/', 'отэкрат', 'Самодержец / Автократ', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Правитель с абсолютной властью; человек, который настаивает на полном послушании.',
    '- Политика: "Ruling autocrat" (Правящий автократ)\n- Характер: "Absolute autocrat" (Абсолютный самодержец)\n- Работа: "Behave like an autocrat" (Вести себя как диктатор)',
    [
      { en: 'The country was ruled by a ruthless autocrat for decades.', ru: 'Страна десятилетиями управлялась безжалостным автократом.' },
      { en: 'He ran the company like an autocrat, ignoring all advice.', ru: 'Он управлял компанией как самодур, игнорируя все советы.' },
      { en: 'She is an autocrat who demands complete loyalty.', ru: 'Она авторитарный человек, требующий полной лояльности.' },
      { en: 'The revolution overthrew the autocrat.', ru: 'Революция свергла самодержца.' }
    ]
),

createRichWord('c2_autopsy', 'Autopsy', '/ˈɔːtɒpsi/', 'отопси', 'Вскрытие (трупа)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Медицинское обследование трупа для выяснения причины смерти.',
    '- Медицина: "Perform an autopsy" (Провести вскрытие)\n- Результат: "Autopsy report" (Отчет о вскрытии)\n- Причина: "Autopsy revealed" (Вскрытие показало)',
    [
      { en: 'The autopsy revealed that he had been poisoned.', ru: 'Вскрытие показало, что он был отравлен.' },
      { en: 'They performed an autopsy to determine the cause of death.', ru: 'Они провели вскрытие, чтобы определить причину смерти.' },
      { en: 'The coroner ordered an immediate autopsy.', ru: 'Коронер распорядился провести немедленное вскрытие.' },
      { en: 'Details of the autopsy were kept secret.', ru: 'Детали вскрытия держались в секрете.' }
    ]
),

createRichWord('c2_avenge', 'Avenge', '/əˈvendʒ/', 'эвендж', 'Мстить / Отомстить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Причинить вред кому-то в ответ за обиду, нанесенную себе или другим.',
    '- Действие: "Avenge a death" (Отомстить за смерть)\n- Мотив: "Vow to avenge" (Поклясться отомстить)\n- Результат: "Avenged his honor" (Отомстил за свою честь)',
    [
      { en: 'He vowed to avenge his father\'s murder.', ru: 'Он поклялся отомстить за убийство отца.' },
      { en: 'She wanted to avenge the insults directed at her family.', ru: 'Она хотела отомстить за оскорбления в адрес ее семьи.' },
      { en: 'The team avenged their previous defeat by winning today.', ru: 'Команда взяла реванш (отомстила) за свое предыдущее поражение, победив сегодня.' },
      { en: 'It is not right to avenge oneself by violence.', ru: 'Неправильно мстить насилием.' }
    ]
),

createRichWord('c2_axle', 'Axle', '/ˈæksl/', 'эксл', 'Ось (колеса)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Стержень, на котором вращаются колеса транспортного средства.',
    '- Авто: "Front axle" (Передняя ось)\n- Поломка: "Broken axle" (Сломанная ось)\n- Механика: "Axle grease" (Смазка для осей)',
    [
      { en: 'The car broke down because the rear axle snapped.', ru: 'Машина сломалась, потому что лопнула задняя ось.' },
      { en: 'Mechanics checked the axle for signs of wear.', ru: 'Механики проверили ось на признаки износа.' },
      { en: 'A train usually has many axles.', ru: 'У поезда обычно много осей.' },
      { en: 'The cart turned easily on its well-greased axle.', ru: 'Телега легко поворачивалась на хорошо смазанной оси.' }
    ]
),

createRichWord('c2_babble', 'Babble', '/ˈbæbl/', 'бэбл', 'Лепет / Бормотание', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Говорить быстро и невнятно; издавать звуки, как младенец или ручей.',
    '- Речь: "Babble on" (Болтать без умолку)\n- Звук: "Babbling brook" (Журчащий ручей)\n- Ребенок: "Baby babbles" (Ребенок лепечет)',
    [
      { en: 'He was so nervous he started to babble incoherently.', ru: 'Он так нервничал, что начал бессвязно бормотать.' },
      { en: 'The baby babbled happily in her cot.', ru: 'Ребенок счастливо лепетал в своей кроватке.' },
      { en: 'We sat by the babbling brook and relaxed.', ru: 'Мы сидели у журчащего ручья и отдыхали.' },
      { en: 'Stop babbling and tell me what actually happened.', ru: 'Перестань болтать и скажи мне, что на самом деле произошло.' }
    ]
),

createRichWord('c2_backfire', 'Backfire', '/ˌbækˈfaɪə/', 'бэкфайэ', 'Иметь обратный эффект / Дать осечку', ProficiencyLevel.C2, 'verb', 'Medium', 'Neutral',
    'Привести к противоположному результату; или (о двигателе) издать громкий звук взрыва.',
    '- План: "Plan backfired" (План провалился/дал обратный эффект)\n- Звук: "Car backfired" (Машина выстрелила глушителем)\n- Риск: "Scheme could backfire" (Схема может выйти боком)',
    [
      { en: 'His plan to surprise her backfired completely.', ru: 'Его план удивить ее дал совершенно обратный эффект.' },
      { en: 'The strict rules backfired and caused a rebellion.', ru: 'Строгие правила привели к обратному результату и вызвали бунт.' },
      { en: 'Suddenly, a car backfired loudly in the street.', ru: 'Внезапно на улице громко хлопнула машина.' },
      { en: 'Trying to make him jealous might backfire on you.', ru: 'Попытка заставить его ревновать может обернуться против тебя.' }
    ]
),

createRichWord('c2_ballistic', 'Ballistic', '/bəˈlɪstɪk/', 'бэлистик', 'Баллистический / В ярости', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Относящийся к полету снарядов; (идиома) "go ballistic" - прийти в ярость.',
    '- Идиома: "Go ballistic" (Взбеситься / Прийти в ярость)\n- Оружие: "Ballistic missile" (Баллистическая ракета)\n- Наука: "Ballistic expert" (Баллистический эксперт)',
    [
      { en: 'My dad went ballistic when he saw the dent in his car.', ru: 'Мой папа пришел в ярость, когда увидел вмятину на своей машине.' },
      { en: 'The country tested a new long-range ballistic missile.', ru: 'Страна испытала новую баллистическую ракету дальнего радиуса действия.' },
      { en: 'Ballistic evidence linked the gun to the crime.', ru: 'Баллистические доказательства связали пистолет с преступлением.' },
      { en: 'She will go ballistic if she finds out you lied.', ru: 'Она взбесится, если узнает, что ты солгал.' }
    ]
),

createRichWord('c2_banal', 'Banal', '/bəˈnɑːl/', 'бэнал', 'Банальный / Пошлый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Скучный, обычный и неоригинальный.',
    '- Разговор: "Banal conversation" (Банальный разговор)\n- Идея: "Banal suggestion" (Банальное предложение)\n- Жизнь: "Banal routine" (Банальная рутина)',
    [
      { en: 'He made some banal remarks about the weather.', ru: 'Он сделал несколько банальных замечаний о погоде.' },
      { en: 'The plot of the movie was predictable and banal.', ru: 'Сюжет фильма был предсказуемым и банальным.' },
      { en: 'I was bored by the banal lyrics of the song.', ru: 'Мне наскучили банальные тексты этой песни.' },
      { en: 'She tried to avoid banal clichés in her writing.', ru: 'Она старалась избегать банальных клише в своем письме.' }
    ]
),

createRichWord('c2_barter', 'Barter', '/ˈbɑːtə/', 'батэ', 'Бартер / Меновая торговля', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Обменивать товары или услуги на другие товары или услуги без использования денег.',
    '- Экономика: "Barter system" (Система бартера)\n- Обмен: "Barter goods" (Обменивать товары)\n- Торговля: "Barter away" (Выменивать)',
    [
      { en: 'In the past, people used to barter goods instead of paying cash.', ru: 'В прошлом люди обменивали товары вместо того, чтобы платить наличными.' },
      { en: 'He bartered his watch for a boat ride.', ru: 'Он выменял свои часы на поездку на лодке.' },
      { en: 'The local economy relies heavily on barter.', ru: 'Местная экономика сильно зависит от бартера.' },
      { en: 'They bartered fresh vegetables for clothes.', ru: 'Они обменяли свежие овощи на одежду.' }
    ]
),

createRichWord('c2_basal', 'Basal', '/ˈbeɪsl/', 'бэйсл', 'Базальный / Основной', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к основе или базовому уровню; минимально необходимый для поддержания жизни.',
    '- Биология: "Basal metabolic rate" (Базальный метаболизм)\n- Основа: "Basal layer" (Базальный слой)\n- Растение: "Basal leaves" (Прикорневые листья)',
    [
      { en: 'Your basal metabolic rate determines how many calories you burn at rest.', ru: 'Ваш уровень базального метаболизма определяет, сколько калорий вы сжигаете в покое.' },
      { en: 'The basal layer of the skin produces new cells.', ru: 'Базальный слой кожи производит новые клетки.' },
      { en: 'Basal leaves form a rosette at the bottom of the stem.', ru: 'Прикорневые листья образуют розетку в нижней части стебля.' },
      { en: 'This is a basal requirement for the system to function.', ru: 'Это базовое требование для функционирования системы.' }
    ]
),

createRichWord('c2_bask', 'Bask', '/bɑːsk/', 'баск', 'Греться / Наслаждаться', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Лежать в тепле (на солнце); или наслаждаться вниманием и похвалой.',
    '- Солнце: "Bask in the sun" (Греться на солнце)\n- Слава: "Bask in glory" (Купаться в лучах славы)\n- Животное: "Lizards bask" (Ящерицы греются)',
    [
      { en: 'The cat likes to bask in the warm sunshine.', ru: 'Кошка любит греться на теплом солнышке.' },
      { en: 'He stood on stage, basking in the applause of the audience.', ru: 'Он стоял на сцене, купаясь в аплодисментах публики.' },
      { en: 'She basked in the admiration of her colleagues.', ru: 'Она наслаждалась восхищением своих коллег.' },
      { en: 'Reptiles need to bask to regulate their body temperature.', ru: 'Рептилиям нужно греться, чтобы регулировать температуру тела.' }
    ]
),

createRichWord('c2_baton', 'Baton', '/ˈbætɒn/', 'бэтон', 'Палочка / Эстафета', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Тонкая палочка дирижера; палочка в эстафетном беге; или дубинка полицейского.',
    '- Музыка: "Conductor\'s baton" (Дирижерская палочка)\n- Спорт: "Pass the baton" (Передать эстафету)\n- Полиция: "Police baton" (Полицейская дубинка)',
    [
      { en: 'The runners dropped the baton and lost the race.', ru: 'Бегуны уронили эстафетную палочку и проиграли гонку.' },
      { en: 'He passed the baton of leadership to his son.', ru: 'Он передал эстафету лидерства своему сыну.' },
      { en: 'The conductor raised his baton to start the orchestra.', ru: 'Дирижер поднял палочку, чтобы начать оркестр.' },
      { en: 'Police used batons to control the crowd.', ru: 'Полиция использовала дубинки для контроля толпы.' }
    ]
),

createRichWord('c2_beau', 'Beau', '/bəʊ/', 'боу', 'Кавалер / Поклонник', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Устаревшее слово для обозначения парня или мужчины-поклонника.',
    '- Отношения: "Her new beau" (Ее новый поклонник)\n- Стиль: "Handsome beau" (Красивый кавалер)\n- Литература: "Beau Monde" (Высший свет)',
    [
      { en: 'She introduced her new beau to the family.', ru: 'Она представила своего нового кавалера семье.' },
      { en: 'In the novel, she has many rich beaus courting her.', ru: 'В романе у нее много богатых поклонников, ухаживающих за ней.' },
      { en: 'He dressed like a beau from the 19th century.', ru: 'Он одевался как франт из 19-го века.' },
      { en: 'Will you be my beau for the dance?', ru: 'Будешь моим кавалером на танцах?' }
    ]
),

createRichWord('c2_beech', 'Beech', '/biːtʃ/', 'бич', 'Бук', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Лесное дерево с гладкой серой корой и мелкими орехами.',
    '- Дерево: "Beech tree" (Буковое дерево)\n- Лес: "Beech forest" (Буковый лес)\n- Древесина: "Made of beech" (Сделано из бука)',
    [
      { en: 'The forest is full of ancient beech trees.', ru: 'Лес полон древних буковых деревьев.' },
      { en: 'Beech wood is often used to make furniture.', ru: 'Буковая древесина часто используется для изготовления мебели.' },
      { en: 'The leaves of the beech turn copper in autumn.', ru: 'Листья бука становятся медными осенью.' },
      { en: 'We sat under the shade of a large beech.', ru: 'Мы сидели в тени большого бука.' }
    ]
),

createRichWord('c2_beleaguer', 'Beleaguer', '/bɪˈliːɡə/', 'билигэ', 'Осаждать / Досаждать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Окружить место войсками; или создавать множество проблем и трудностей (обычно в пассиве: beleaguered).',
    '- Проблемы: "Beleaguered company" (Компания, терпящая бедствие)\n- Война: "Beleaguered city" (Осажденный город)\n- Давление: "Beleaguered by debt" (Обремененный долгами)',
    [
      { en: 'The beleaguered prime minister faced calls to resign.', ru: 'Осаждаемый проблемами премьер-министр столкнулся с призывами уйти в отставку.' },
      { en: 'Supplies were dropped to the beleaguered garrison.', ru: 'Припасы были сброшены осажденному гарнизону.' },
      { en: 'The team is beleaguered by injuries this season.', ru: 'В этом сезоне команду преследуют травмы.' },
      { en: 'It was a beleaguered fortress holding out against the enemy.', ru: 'Это была осажденная крепость, державшаяся против врага.' }
    ]
),

createRichWord('c2_belie', 'Belie', '/bɪˈlaɪ/', 'билай', 'Опровергать / Противоречить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Создавать ложное впечатление; скрывать истинный характер чего-либо.',
    '- Внешность: "Looks belie age" (Внешность скрывает возраст)\n- Поведение: "Smile belies anger" (Улыбка скрывает гнев)\n- Факты: "Facts belie the theory" (Факты противоречат теории)',
    [
      { en: 'Her calm face belied the terror she was feeling.', ru: 'Ее спокойное лицо скрывало ужас, который она испытывала.' },
      { en: 'His youthful appearance belies his actual age.', ru: 'Его моложавая внешность скрывает его истинный возраст.' },
      { en: 'The statistics belie the government\'s claims of success.', ru: 'Статистика опровергает заявления правительства об успехе.' },
      { en: 'Do not let his gentle manner belie his determination.', ru: 'Не позволяй его мягким манерам скрыть его решимость.' }
    ]
),

createRichWord('c2_belligerent', 'Belligerent', '/bəˈlɪdʒərənt/', 'белиджерэнт', 'Воинственный / Агрессивный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Враждебный и готовый к драке; или (о стране) участвующий в войне.',
    '- Поведение: "Belligerent attitude" (Воинственное отношение)\n- Состояние: "Belligerent mood" (Агрессивное настроение)\n- Политика: "Belligerent nations" (Воюющие страны)',
    [
      { en: 'He was drunk and belligerent towards the police.', ru: 'Он был пьян и агрессивен по отношению к полиции.' },
      { en: 'The belligerent nations finally signed a peace treaty.', ru: 'Воюющие страны наконец подписали мирный договор.' },
      { en: 'Why are you being so belligerent today?', ru: 'Почему ты сегодня такой воинственный?' },
      { en: 'Her tone was belligerent and accusing.', ru: 'Ее тон был воинственным и обвиняющим.' }
    ]
),

createRichWord('c2_bemuse', 'Bemuse', '/bɪˈmjuːz/', 'бимьюз', 'Ошеломлять / Сбивать с толку', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Приводить в замешательство или озадачивать (обычно в пассиве: bemused).',
    '- Чувство: "Look bemused" (Выглядеть озадаченным)\n- Реакция: "Totally bemused" (Полностью сбитый с толку)\n- Лицо: "Bemused expression" (Недоуменное выражение лица)',
    [
      { en: 'He looked somewhat bemused by the strange question.', ru: 'Он выглядел несколько озадаченным странным вопросом.' },
      { en: 'I was totally bemused by the complicated instructions.', ru: 'Я был полностью сбит с толку сложными инструкциями.' },
      { en: 'She gave him a bemused smile.', ru: 'Она одарила его недоуменной улыбкой.' },
      { en: 'The audience sat in bemused silence.', ru: 'Публика сидела в ошеломленном молчании.' }
    ]
),

createRichWord('c2_benefactor', 'Benefactor', '/ˈbenɪfæktə/', 'бенифэктэ', 'Благотворитель / Меценат', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Человек, который дает деньги или помощь человеку или организации.',
    '- Помощь: "Generous benefactor" (Щедрый благотворитель)\n- Тайна: "Anonymous benefactor" (Анонимный благотворитель)\n- Роль: "Major benefactor" (Главный спонсор)',
    [
      { en: 'An anonymous benefactor donated a million dollars to the hospital.', ru: 'Анонимный благотворитель пожертвовал миллион долларов больнице.' },
      { en: 'The university library is named after its main benefactor.', ru: 'Университетская библиотека названа в честь своего главного мецената.' },
      { en: 'He acted as a benefactor to many young artists.', ru: 'Он выступал в роли покровителя для многих молодых художников.' },
      { en: 'Without a benefactor, the project would have failed.', ru: 'Без спонсора проект бы провалился.' }
    ]
),

createRichWord('c2_beset', 'Beset', '/bɪˈset/', 'бисэт', 'Одолевать / Осаждать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Окружать или беспокоить (проблемами, трудностями).',
    '- Проблемы: "Beset by difficulties" (Одолеваемый трудностями)\n- Сомнения: "Beset with doubts" (Терзаемый сомнениями)\n- Опасность: "Beset by danger" (Окруженный опасностью)',
    [
      { en: 'The team was beset by injuries all season.', ru: 'Команду весь сезон преследовали травмы.' },
      { en: 'The project has been beset with technical problems.', ru: 'Проект осаждали технические проблемы.' },
      { en: 'He was beset by doubts about his decision.', ru: 'Его терзали сомнения по поводу его решения.' },
      { en: 'Poverty and disease continue to beset the region.', ru: 'Бедность и болезни продолжают терзать регион.' }
    ]
),

createRichWord('c2_besiege', 'Besiege', '/bɪˈsiːdʒ/', 'бисидж', 'Осаждать / Окружать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Окружить место армией; или заваливать просьбами/вопросами.',
    '- Война: "Besiege a city" (Осаждать город)\n- Вопросы: "Besieged by reporters" (Осаждаемый репортерами)\n- Толпа: "Besieged by fans" (Окруженный фанатами)',
    [
      { en: 'The army besieged the castle for six months.', ru: 'Армия осаждала замок в течение шести месяцев.' },
      { en: 'The star was besieged by fans asking for autographs.', ru: 'Звезду осаждали фанаты, просящие автографы.' },
      { en: 'Customers besieged the store on the first day of the sale.', ru: 'Покупатели осаждали магазин в первый день распродажи.' },
      { en: 'I was besieged with complaints from angry residents.', ru: 'Меня завалили жалобами от разгневанных жителей.' }
    ]
),

createRichWord('c2_bicker', 'Bicker', '/ˈbɪkə/', 'бикэ', 'Пререкаться / Спорить', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Спорить о мелочах или неважных вещах.',
    '- Ссора: "Bicker over nothing" (Спорить из-за пустяков)\n- Отношения: "Constantly bicker" (Постоянно пререкаться)\n- Дети: "Kids bicker" (Дети ссорятся)',
    [
      { en: 'The children represent constantly bickering over which TV channel to watch.', ru: 'Дети постоянно спорят о том, какой телеканал смотреть.' },
      { en: 'They bicker like an old married couple.', ru: 'Они пререкаются, как старая супружеская пара.' },
      { en: 'Stop bickering and help me clean up!', ru: 'Хватит спорить и помогите мне убраться!' },
      { en: 'It is tiring to listen to them bicker all day.', ru: 'Утомительно слушать, как они препираются весь день.' }
    ]
),

createRichWord('c2_bigot', 'Bigot', '/ˈbɪɡət/', 'бигэт', 'Фанатик / Нетерпимый человек', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Человек, который имеет сильные, неразумные убеждения и не любит людей с другими взглядами.',
    '- Характер: "Narrow-minded bigot" (Узколобый фанатик)\n- Убеждения: "Religious bigot" (Религиозный фанатик)\n- Отношение: "Act like a bigot" (Вести себя как нетерпимый человек)',
    [
      { en: 'He was dismissed as a racist bigot.', ru: 'Его отвергли как расиста и фанатика.' },
      { en: 'Only a bigot would refuse to listen to other opinions.', ru: 'Только фанатик отказался бы слушать другие мнения.' },
      { en: 'She accused him of being a bigot.', ru: 'Она обвинила его в нетерпимости.' },
      { en: 'Education helps to reduce the number of bigots in society.', ru: 'Образование помогает сократить число нетерпимых людей в обществе.' }
    ]
),

createRichWord('c2_billow', 'Billow', '/ˈbɪləʊ/', 'билоу', 'Вздыматься / Клубиться', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Наполняться воздухом и раздуваться (о ткани); или подниматься большими облаками (о дыме).',
    '- Дым: "Smoke billows" (Дым клубится)\n- Ткань: "Curtains billow" (Шторы вздымаются)\n- Ветер: "Billow in the wind" (Развеваться на ветру)',
    [
      { en: 'Thick black smoke billowed from the burning building.', ru: 'Густой черный дым клубился из горящего здания.' },
      { en: 'The sails billowed in the strong wind.', ru: 'Паруса вздымались на сильном ветру.' },
      { en: 'Her long dress billowed around her as she danced.', ru: 'Ее длинное платье развевалось вокруг нее, пока она танцевала.' },
      { en: 'Clouds of dust billowed out behind the truck.', ru: 'Облака пыли клубились позади грузовика.' }
    ]
),

createRichWord('c2_biochemical', 'Biochemical', '/ˌbaɪəʊˈkemɪkl/', 'байокемикл', 'Биохимический', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к химическим процессам в живых организмах.',
    '- Наука: "Biochemical research" (Биохимические исследования)\n- Оружие: "Biochemical weapons" (Биохимическое оружие)\n- Процесс: "Biochemical reaction" (Биохимическая реакция)',
    [
      { en: 'Depression is often caused by a biochemical imbalance.', ru: 'Депрессия часто вызывается биохимическим дисбалансом.' },
      { en: 'They are studying the biochemical properties of the virus.', ru: 'Они изучают биохимические свойства вируса.' },
      { en: 'Biochemical tests confirmed the diagnosis.', ru: 'Биохимические тесты подтвердили диагноз.' },
      { en: 'The drug affects biochemical pathways in the brain.', ru: 'Лекарство влияет на биохимические пути в мозге.' }
    ]
),

createRichWord('c2_biomass', 'Biomass', '/ˈbaɪəʊmæs/', 'байомас', 'Биомасса', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Органический материал, используемый в качестве топлива; или общая масса организмов в зоне.',
    '- Энергия: "Biomass energy" (Энергия биомассы)\n- Топливо: "Biomass fuel" (Топливо из биомассы)\n- Экология: "Total biomass" (Общая биомасса)',
    [
      { en: 'Biomass is a renewable source of energy.', ru: 'Биомасса является возобновляемым источником энергии.' },
      { en: 'The plant converts biomass into electricity.', ru: 'Завод преобразует биомассу в электричество.' },
      { en: 'Scientists measured the biomass of the forest.', ru: 'Ученые измерили биомассу леса.' },
      { en: 'Burning biomass releases carbon dioxide.', ru: 'Сжигание биомассы высвобождает углекислый газ.' }
    ]
),

createRichWord('c2_birch', 'Birch', '/bɜːtʃ/', 'бёч', 'Береза', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Дерево с гладкой, часто белой корой и тонкими ветвями.',
    '- Дерево: "Silver birch" (Серебристая береза)\n- Лес: "Birch forest" (Березовая роща)\n- Материал: "Made of birch" (Сделано из березы)',
    [
      { en: 'The silver birch is known for its white bark.', ru: 'Серебристая береза известна своей белой корой.' },
      { en: 'We walked through a beautiful birch forest.', ru: 'Мы гуляли по красивой березовой роще.' },
      { en: 'The furniture is made of solid birch.', ru: 'Мебель сделана из цельной березы.' },
      { en: 'Birch trees grow quickly in this climate.', ru: 'Березы быстро растут в этом климате.' }
    ]
),

createRichWord('c2_blaspheme', 'Blaspheme', '/blæsˈfiːm/', 'блэсфим', 'Богохульствовать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Говорить неуважительно о Боге или священных вещах.',
    '- Религия: "Do not blaspheme" (Не богохульствуй)\n- Речь: "He blasphemed" (Он богохульствовал)\n- Закон: "Laws against blasphemy" (Законы против богохульства)',
    [
      { en: 'It was considered a crime to blaspheme against the church.', ru: 'Богохульство против церкви считалось преступлением.' },
      { en: 'He started to curse and blaspheme in anger.', ru: 'Он начал ругаться и богохульствовать в гневе.' },
      { en: 'She would never blaspheme or disrespect her faith.', ru: 'Она бы никогда не стала богохульствовать или проявлять неуважение к своей вере.' },
      { en: 'To blaspheme is offensive to many religious people.', ru: 'Богохульство оскорбительно для многих верующих людей.' }
    ]
),

createRichWord('c2_bloat', 'Bloat', '/bləʊt/', 'блоут', 'Раздуваться / Пухнуть', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Становиться опухшим от жидкости или газа; или (о бюджете/штате) становиться слишком большим.',
    '- Здоровье: "Feel bloated" (Чувствовать вздутие)\n- Живот: "Stomach bloat" (Вздутие живота)\n- Бюджет: "Bloated bureaucracy" (Раздутая бюрократия)',
    [
      { en: 'Salty food makes me feel bloated.', ru: 'От соленой еды я чувствую вздутие.' },
      { en: 'The dead fish floated, bloated by gas.', ru: 'Мертвая рыба плавала, раздутая газами.' },
      { en: 'The company suffers from a bloated management structure.', ru: 'Компания страдает от раздутой управленческой структуры.' },
      { en: 'Software tends to bloat with unnecessary features.', ru: 'Программное обеспечение имеет тенденцию раздуваться от ненужных функций.' }
    ]
),

createRichWord('c2_blurt', 'Blurt', '/blɜːt/', 'блёрт', 'Сболтнуть / Выпалить', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Сказать что-то внезапно и не подумав (обычно "blurt out").',
    '- Секрет: "Blurt out a secret" (Выпалить секрет)\n- Речь: "Blurt out the answer" (Выкрикнуть ответ)\n- Ошибка: "Didn\'t mean to blurt" (Не хотел сболтнуть)',
    [
      { en: 'He blurted out the secret before I could stop him.', ru: 'Он выпалил секрет, прежде чем я успел его остановить.' },
      { en: 'She blurted out "I love you" without thinking.', ru: 'Она выпалила "Я тебя люблю" не подумав.' },
      { en: 'Try not to blurt out the answer in class.', ru: 'Постарайся не выкрикивать ответ в классе.' },
      { en: 'I was so nervous I just blurted it out.', ru: 'Я так нервничал, что просто выпалил это.' }
    ]
),

createRichWord('c2_boar', 'Boar', '/bɔː/', 'бо', 'Кабан / Вепрь', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Дикая свинья (особенно самец).',
    '- Животное: "Wild boar" (Дикий кабан)\n- Охота: "Boar hunting" (Охота на кабана)\n- Еда: "Boar meat" (Мясо кабана)',
    [
      { en: 'Wild boar are common in these forests.', ru: 'Дикие кабаны часто встречаются в этих лесах.' },
      { en: 'The hunter tracked a large boar.', ru: 'Охотник выслеживал крупного кабана.' },
      { en: 'Boar meat has a very distinct flavor.', ru: 'Мясо кабана имеет очень отчетливый вкус.' },
      { en: 'Be careful, a wild boar can be aggressive.', ru: 'Будьте осторожны, дикий кабан может быть агрессивным.' }
    ]
),

createRichWord('c2_bogey', 'Bogey', '/ˈbəʊɡi/', 'боуги', 'Страшилище / Боги (гольф)', ProficiencyLevel.C2, 'noun', 'Low', 'Informal',
    'Что-то, что вызывает страх (bogeyman); или термин в гольфе (одно очко выше пара).',
    '- Страх: "Bogeyman" (Бука / Страшилище)\n- Гольф: "Score a bogey" (Сыграть боги)\n- Проблема: "Old bogey" (Старая проблема/страх)',
    [
      { en: 'Inflation is the old bogey of the economy.', ru: 'Инфляция — это старое пугало экономики.' },
      { en: 'He scored a bogey on the final hole.', ru: 'Он сыграл боги на последней лунке.' },
      { en: 'Don\'t scare the child with stories about the bogeyman.', ru: 'Не пугай ребенка историями про буку.' },
      { en: 'Testing remains a bogey for many students.', ru: 'Тестирование остается кошмаром для многих студентов.' }
    ]
),

createRichWord('c2_bogus', 'Bogus', '/ˈbəʊɡəs/', 'боугэс', 'Фальшивый / Поддельный', ProficiencyLevel.C2, 'adj', 'Low', 'Informal',
    'Ненастоящий, но пытающийся казаться таковым.',
    '- Документ: "Bogus claim" (Ложное заявление)\n- Человек: "Bogus doctor" (Фальшивый врач)\n- Компания: "Bogus company" (Фиктивная компания)',
    [
      { en: 'He was arrested for making a bogus insurance claim.', ru: 'Его арестовали за подачу ложного страхового иска.' },
      { en: 'The caller claimed to be from the bank, but it was bogus.', ru: 'Звонивший утверждал, что он из банка, но это была подделка (обман).' },
      { en: 'They set up a bogus website to steal data.', ru: 'Они создали фиктивный веб-сайт для кражи данных.' },
      { en: 'Her passport turned out to be bogus.', ru: 'Ее паспорт оказался фальшивым.' }
    ]
),

createRichWord('c2_bolshevik', 'Bolshevik', '/ˈbɒlʃəvɪk/', 'болшевик', 'Большевик', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Член крыла РСДРП, пришедшего к власти в России в 1917 году (исторический термин).',
    '- История: "Bolshevik Revolution" (Большевистская революция)\n- Политика: "Bolshevik ideology" (Большевистская идеология)\n- Люди: "Old Bolshevik" (Старый большевик)',
    [
      { en: 'The Bolshevik Revolution changed the course of history.', ru: 'Большевистская революция изменила ход истории.' },
      { en: 'He studied the rise of the Bolshevik party.', ru: 'Он изучал подъем партии большевиков.' },
      { en: 'The term "Bolshevik" means "one of the majority".', ru: 'Термин "большевик" означает "один из большинства".' },
      { en: 'Many Bolsheviks were purged in the 1930s.', ru: 'Многие большевики подверглись чисткам в 1930-е годы.' }
    ]
),

createRichWord('c2_bon', 'Bon', '/bɒn/', 'бон', 'Хороший (в фразах)', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Французское слово "хороший", используемое в английских устойчивых фразах.',
    '- Путешествие: "Bon voyage" (Счастливого пути)\n- Еда: "Bon appétit" (Приятного аппетита)\n- Характер: "Bon viveur" (Человек, любящий хорошо пожить)',
    [
      { en: 'We wished them "Bon voyage" as the ship left.', ru: 'Мы пожелали им "Счастливого пути", когда корабль отчалил.' },
      { en: '"Bon appétit!" said the waiter as he served the food.', ru: '"Приятного аппетита!" — сказал официант, подавая еду.' },
      { en: 'He is a bit of a bon viveur who enjoys fine wine.', ru: 'Он немного бонвиван, который любит хорошее вино.' },
      { en: 'A bon mot is a witty remark.', ru: 'Bon mot — это остроумное замечание.' }
    ]
),

createRichWord('c2_bonanza', 'Bonanza', '/bəˈnæn.zə/', 'бэнэнзэ', 'Золотая жила / Процветание', ProficiencyLevel.C2, 'noun', 'Low', 'Informal',
    'Ситуация, приносящая большую прибыль или удачу.',
    '- Прибыль: "Oil bonanza" (Нефтяная золотая жила)\n- Удача: "A tourism bonanza" (Туристический бум)\n- Событие: "Sales bonanza" (Грандиозная распродажа)',
    [
      { en: 'The discovery of gold created a mining bonanza.', ru: 'Открытие золота создало горнодобывающую золотую жилу.' },
      { en: 'This year has been a bonanza for the computer industry.', ru: 'Этот год стал временем процветания для компьютерной индустрии.' },
      { en: 'April was a sales bonanza for the company.', ru: 'Апрель стал месяцем сверхприбылей для компании.' },
      { en: 'The festival proved to be a bonanza for local shops.', ru: 'Фестиваль оказался золотым дном для местных магазинов.' }
    ]
),

createRichWord('c2_boon', 'Boon', '/buːn/', 'бун', 'Благо / Дар', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Что-то очень полезное, что облегчает жизнь.',
    '- Польза: "A great boon" (Великое благо)\n- Технологии: "Technology is a boon" (Технологии — это благо)\n- Туризм: "Boon to tourism" (Польза для туризма)',
    [
      { en: 'The new bus service is a real boon to the village.', ru: 'Новое автобусное сообщение — настоящее благо для деревни.' },
      { en: 'Radio was a boon for isolated communities.', ru: 'Радио было даром для изолированных сообществ.' },
      { en: 'This rain is a boon for the farmers.', ru: 'Этот дождь — благодать для фермеров.' },
      { en: 'Guide dogs are a great boon to the blind.', ru: 'Собаки-поводыри — великое подспорье для слепых.' }
    ]
),

createRichWord('c2_bosom', 'Bosom', '/ˈbʊzəm/', 'бузэм', 'Грудь / Лоно', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Грудь человека (женская); или место, где чувствуешь любовь и защиту (лоно семьи).',
    '- Дружба: "Bosom friend" (Закадычный друг)\n- Семья: "Bosom of the family" (Лоно семьи)\n- Тело: "Heaving bosom" (Вздымающаяся грудь - лит.)',
    [
      { en: 'He kept the secret locked in his bosom.', ru: 'Он хранил секрет глубоко в сердце (в груди).' },
      { en: 'She returned to the bosom of her family.', ru: 'Она вернулась в лоно своей семьи.' },
      { en: 'They were bosom buddies since childhood.', ru: 'Они были закадычными друзьями с детства.' },
      { en: 'She pressed the child to her bosom.', ru: 'Она прижала ребенка к груди.' }
    ]
),

createRichWord('c2_brash', 'Brash', '/bræʃ/', 'брэш', 'Нахальный / Дерзкий', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Слишком уверенный в себе, громкий и агрессивный (о человеке); или безвкусный.',
    '- Характер: "Brash young man" (Нахальный молодой человек)\n- Поведение: "Brash behavior" (Дерзкое поведение)\n- Стиль: "Brash colors" (Кричащие цвета)',
    [
      { en: 'He is a brash young lawyer who wants to win at all costs.', ru: 'Он нахальный молодой юрист, который хочет выиграть любой ценой.' },
      { en: 'His brash manner offended many people.', ru: 'Его дерзкая манера обидела многих людей.' },
      { en: 'The building was decorated in brash, bright colors.', ru: 'Здание было украшено кричащими, яркими цветами.' },
      { en: 'Don\'t be so brash; listen to others first.', ru: 'Не будь таким нахальным; сначала выслушай других.' }
    ]
),

createRichWord('c2_brawl', 'Brawl', '/brɔːl/', 'брол', 'Драка / Потасовка', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Шумная драка, обычно в общественном месте.',
    '- Драка: "Drunken brawl" (Пьяная драка)\n- Место: "Bar brawl" (Драка в баре)\n- Глагол: "To brawl" (Устраивать потасовку)',
    [
      { en: 'A brawl broke out in the pub last night.', ru: 'Вчера вечером в пабе вспыхнула драка.' },
      { en: 'He was arrested for starting a drunken brawl.', ru: 'Его арестовали за то, что он начал пьяную потасовку.' },
      { en: 'The players brawled on the pitch.', ru: 'Игроки подрались на поле.' },
      { en: 'Several people were injured in the street brawl.', ru: 'Несколько человек пострадали в уличной драке.' }
    ]
),

createRichWord('c2_brigadier', 'Brigadier', '/ˌbrɪɡəˈdɪə/', 'бригэдиэ', 'Бригадир (чин)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Высокое звание офицера в британской армии (выше полковника).',
    '- Армия: "Brigadier General" (Бригадный генерал - US)\n- Звание: "Rank of Brigadier" (Звание бригадира)\n- Командование: "Commanded by a Brigadier" (Под командованием бригадира)',
    [
      { en: 'The Brigadier ordered the troops to advance.', ru: 'Бригадир приказал войскам наступать.' },
      { en: 'He was promoted to Brigadier after the war.', ru: 'После войны он был повышен до бригадира.' },
      { en: 'Brigadier Smith has served for thirty years.', ru: 'Бригадир Смит служит уже тридцать лет.' },
      { en: 'In the British Army, a Brigadier commands a brigade.', ru: 'В британской армии бригадир командует бригадой.' }
    ]
  ),
createRichWord('c2_abbot', 'Abbot', '/ˈæbət/', 'эбэт', 'Аббат / Настоятель', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Мужчина, являющийся главой аббатства монахов.',
    '- Религия: "The Abbot of the monastery" (Настоятель монастыря)\n- Титул: "Father Abbot" (Отец-настоятель)\n- Роль: "Appointed as abbot" (Назначен аббатом)',
    [
      { en: 'The abbot led the monks in daily prayer.', ru: 'Аббат вел монахов в ежедневной молитве.' },
      { en: 'He sought advice from the wise old abbot.', ru: 'Он искал совета у мудрого старого настоятеля.' },
      { en: 'The position of abbot carries great responsibility.', ru: 'Должность аббата несет в себе большую ответственность.' },
      { en: 'The abbot welcomed the weary travelers to the monastery.', ru: 'Настоятель приветствовал уставших путников в монастыре.' }
    ]
),

createRichWord('c2_abdicate', 'Abdicate', '/ˈæbdɪkeɪt/', 'эбдикейт', 'Отрекаться (от престола) / Слагать полномочия', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Отказываться от трона или важной должности; отказываться от ответственности.',
    '- Власть: "Abdicate the throne" (Отречься от престола)\n- Обязанность: "Abdicate responsibility" (Снять с себя ответственность)\n- Король: "King abdicated" (Король отрекся)',
    [
      { en: 'King Edward VIII decided to abdicate in order to marry.', ru: 'Король Эдуард VIII решил отречься от престола, чтобы жениться.' },
      { en: 'The government cannot abdicate its responsibility to the poor.', ru: 'Правительство не может снять с себя ответственность перед бедными.' },
      { en: 'He refused to abdicate despite the protests.', ru: 'Он отказался отречься, несмотря на протесты.' },
      { en: 'Parents should not abdicate their role in raising children.', ru: 'Родители не должны отказываться от своей роли в воспитании детей.' }
    ]
),

createRichWord('c2_aberration', 'Aberration', '/ˌæbəˈreɪʃn/', 'эбэрейшн', 'Отклонение / Аберрация', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Отклонение от того, что является нормальным, обычным или ожидаемым (часто нежелательное).',
    '- Норма: "Temporary aberration" (Временное отклонение/помутнение)\n- Поведение: "Mental aberration" (Психическое отклонение)\n- Статистика: "Statistical aberration" (Статистическая погрешность)',
    [
      { en: 'In a moment of aberration, she agreed to his proposal.', ru: 'В момент помрачения рассудка она согласилась на его предложение.' },
      { en: 'Such violent behavior is an aberration for him.', ru: 'Такое жестокое поведение для него — отклонение от нормы.' },
      { en: 'We considered the poor results to be a statistical aberration.', ru: 'Мы посчитали плохие результаты статистической погрешностью.' },
      { en: 'The defeat was a temporary aberration in their winning streak.', ru: 'Поражение было временным сбоем в их череде побед.' }
    ]
),

createRichWord('c2_abrasive', 'Abrasive', '/əˈbreɪsɪv/', 'эбрейсив', 'Абразивный / Грубый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Шершавый материал, используемый для чистки; или грубый и неприятный человек.',
    '- Характер: "Abrasive personality" (Грубый характер)\n- Материал: "Abrasive cleaner" (Абразивное чистящее средство)\n- Поверхность: "Abrasive surface" (Шершавая поверхность)',
    [
      { en: 'She has a rather abrasive manner that annoys people.', ru: 'У нее довольно грубая манера поведения, которая раздражает людей.' },
      { en: 'Use an abrasive sponge to remove the stain.', ru: 'Используйте абразивную губку, чтобы удалить пятно.' },
      { en: 'His abrasive comments offended many colleagues.', ru: 'Его резкие комментарии обидели многих коллег.' },
      { en: 'The abrasive surface of the sandpaper smoothed the wood.', ru: 'Шершавая поверхность наждачной бумаги сгладила дерево.' }
    ]
),

createRichWord('c2_abyss', 'Abyss', '/əˈbɪs/', 'эбис', 'Бездна / Пропасть', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Очень глубокая дыра, которая кажется не имеющей дна; или ужасная ситуация.',
    '- Глубина: "Into the abyss" (В бездну)\n- Ситуация: "Edge of the abyss" (Край пропасти)\n- Разрыв: "Gaping abyss" (Зияющая бездна)',
    [
      { en: 'Looking down into the abyss made me dizzy.', ru: 'Взгляд вниз в бездну вызвал у меня головокружение.' },
      { en: 'The country is staring into the abyss of economic ruin.', ru: 'Страна смотрит в бездну экономического краха.' },
      { en: 'There is a vast abyss between the rich and the poor.', ru: 'Между богатыми и бедными существует огромная пропасть.' },
      { en: 'He felt himself falling into a dark abyss of despair.', ru: 'Он чувствовал, что падает в темную пучину отчаяния.' }
    ]
),

createRichWord('c2_accede', 'Accede', '/ækˈsiːd/', 'эксид', 'Вступать / Соглашаться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Согласиться на требование; или вступить в должность (о монархе).',
    '- Требование: "Accede to demands" (Уступить требованиям)\n- Власть: "Accede to the throne" (Взойти на престол)\n- Договор: "Accede to a treaty" (Присоединиться к договору)',
    [
      { en: 'He graciously acceded to our request.', ru: 'Он любезно согласился на нашу просьбу.' },
      { en: 'Queen Victoria acceded to the throne in 1837.', ru: 'Королева Виктория взошла на престол в 1837 году.' },
      { en: 'The government refused to accede to the terrorists\' demands.', ru: 'Правительство отказалось уступить требованиям террористов.' },
      { en: 'Several countries acceded to the new trade agreement.', ru: 'Несколько стран присоединились к новому торговому соглашению.' }
    ]
),

createRichWord('c2_accolade', 'Accolade', '/ˈækəleɪd/', 'экэлейд', 'Награда / Похвала', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Похвала или награда за достижение.',
    '- Успех: "Highest accolade" (Высшая награда)\n- Признание: "Receive accolades" (Получать похвалы)\n- Критика: "Critical accolades" (Похвала критиков)',
    [
      { en: 'She received the highest accolade of her profession.', ru: 'Она получила высшую награду в своей профессии.' },
      { en: 'The movie won numerous accolades from critics.', ru: 'Фильм получил множество похвал от критиков.' },
      { en: 'For a chef, a Michelin star is the ultimate accolade.', ru: 'Для шеф-повара звезда Мишлен — это высшая похвала.' },
      { en: 'Despite the accolades, he remained humble.', ru: 'Несмотря на похвалы, он оставался скромным.' }
    ]
),

createRichWord('c2_accretion', 'Accretion', '/əˈkriːʃn/', 'экришн', 'Прирост / Нарастание', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Постепенное увеличение или рост за счет добавления новых слоев или частей.',
    '- Рост: "Gradual accretion" (Постепенное нарастание)\n- Наука: "Accretion of matter" (Аккреция материи)\n- Процесс: "By accretion" (Путем наращивания)',
    [
      { en: 'The city grew by the accretion of surrounding villages.', ru: 'Город рос за счет присоединения (нарастания) окрестных деревень.' },
      { en: 'The coral reef is formed by the slow accretion of limestone.', ru: 'Коралловый риф формируется путем медленного нарастания известняка.' },
      { en: 'We watched the accretion of ice on the window.', ru: 'Мы наблюдали за нарастанием льда на окне.' },
      { en: 'This fund grows through the accretion of interest.', ru: 'Этот фонд растет за счет накопления процентов.' }
    ]
),

createRichWord('c2_acrimony', 'Acrimony', '/ˈækrɪməni/', 'экримэни', 'Желчность / Ожесточение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Чувство злости и горечи в словах или споре.',
    '- Спор: "Dispute with acrimony" (Спор с ожесточением)\n- Отношения: "End in acrimony" (Закончиться враждой)\n- Чувство: "Bitterness and acrimony" (Горечь и желчность)',
    [
      { en: 'The divorce was settled without much acrimony.', ru: 'Развод был урегулирован без особого ожесточения.' },
      { en: 'There was a certain acrimony in his tone.', ru: 'В его тоне была определенная желчность.' },
      { en: 'The meeting ended in acrimony and shouting.', ru: 'Встреча закончилась злобой и криками.' },
      { en: 'Past acrimony between the two leaders has been forgotten.', ru: 'Прошлая вражда между двумя лидерами была забыта.' }
    ]
),

createRichWord('c2_acronym', 'Acronym', '/ˈækrənɪm/', 'экрэним', 'Акроним / Аббревиатура', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Слово, составленное из начальных букв других слов (например, NATO, NASA).',
    '- Язык: "Use an acronym" (Использовать акроним)\n- Пример: "NATO is an acronym" (НАТО — это акроним)\n- Значение: "Stand for" (Означать/расшифровываться)',
    [
      { en: 'NASA is an acronym for National Aeronautics and Space Administration.', ru: 'NASA — это акроним Национального управления по аэронавтике и исследованию космического пространства.' },
      { en: 'The text is full of technical acronyms I don\'t understand.', ru: 'Текст полон технических аббревиатур, которые я не понимаю.' },
      { en: 'Create an acronym to help you remember the list.', ru: 'Создайте акроним, чтобы помочь себе запомнить список.' },
      { en: '"AIDS" is an acronym that has become a common word.', ru: '"СПИД" — это аббревиатура, ставшая общеупотребительным словом.' }
    ]
),

createRichWord('c2_acupuncture', 'Acupuncture', '/ˈækjupʌŋktʃə/', 'экьюпанкчэ', 'Акупунктура / Иглоукалывание', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Китайский метод лечения боли и болезней путем введения игл в определенные точки тела.',
    '- Медицина: "Have acupuncture" (Делать иглоукалывание)\n- Лечение: "Acupuncture needles" (Иглы для акупунктуры)\n- Терапия: "Treat with acupuncture" (Лечить акупунктурой)',
    [
      { en: 'She tried acupuncture to relieve her back pain.', ru: 'Она попробовала иглоукалывание, чтобы облегчить боль в спине.' },
      { en: 'Acupuncture is widely practiced in traditional Chinese medicine.', ru: 'Акупунктура широко практикуется в традиционной китайской медицине.' },
      { en: 'Some people are afraid of the needles used in acupuncture.', ru: 'Некоторые люди боятся игл, используемых в акупунктуре.' },
      { en: 'The clinic offers alternative therapies like massage and acupuncture.', ru: 'Клиника предлагает альтернативные методы лечения, такие как массаж и иглоукалывание.' }
    ]
),

createRichWord('c2_adrift', 'Adrift', '/əˈdrɪft/', 'эдрифт', 'Дрейфующий / Плывущий по течению', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Плавающий без управления; (перен.) без цели или направления.',
    '- Море: "Cast adrift" (Брошенный на произвол судьбы/волн)\n- Жизнь: "Feel adrift" (Чувствовать себя потерянным)\n- Лодка: "Boat adrift" (Дрейфующая лодка)',
    [
      { en: 'The survivors were left adrift in a small lifeboat.', ru: 'Выжившие остались дрейфовать в маленькой спасательной шлюпке.' },
      { en: 'After losing his job, he felt adrift and purposeless.', ru: 'Потеряв работу, он чувствовал себя потерянным и лишенным цели.' },
      { en: 'The boat came loose and went adrift down the river.', ru: 'Лодка отвязалась и поплыла по течению реки.' },
      { en: 'Without a leader, the project was adrift.', ru: 'Без лидера проект плыл по течению (был неуправляем).' }
    ]
),

createRichWord('c2_aerodynamic', 'Aerodynamic', '/ˌeərəʊdaɪˈnæmɪk/', 'эроудайнэмик', 'Аэродинамический', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Имеющий форму, которая позволяет быстро двигаться сквозь воздух.',
    '- Дизайн: "Aerodynamic design" (Аэродинамический дизайн)\n- Форма: "Aerodynamic shape" (Обтекаемая форма)\n- Скорость: "More aerodynamic" (Более аэродинамичный)',
    [
      { en: 'The car has an aerodynamic shape to reduce fuel consumption.', ru: 'У автомобиля аэродинамическая форма для снижения расхода топлива.' },
      { en: 'Cyclists wear helmets that are aerodynamic.', ru: 'Велосипедисты носят шлемы, которые являются аэродинамичными.' },
      { en: 'Engineers tested the aerodynamic properties of the new plane.', ru: 'Инженеры протестировали аэродинамические свойства нового самолета.' },
      { en: 'Making the train more aerodynamic increased its speed.', ru: 'Придание поезду большей аэродинамичности увеличило его скорость.' }
    ]
),

createRichWord('c2_aerosol', 'Aerosol', '/ˈeərəsɒl/', 'эрэсол', 'Аэрозоль', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Вещество, хранящееся под давлением и распыляемое в виде мелкой дымки.',
    '- Упаковка: "Aerosol can" (Аэрозольный баллончик)\n- Продукт: "Aerosol spray" (Аэрозольный спрей)\n- Экология: "Aerosol misuse" (Неправильное использование аэрозолей)',
    [
      { en: 'Do not puncture or burn the aerosol can.', ru: 'Не протыкайте и не сжигайте аэрозольный баллончик.' },
      { en: 'She used an aerosol hairspray to fix her hair.', ru: 'Она использовала аэрозольный лак для волос, чтобы зафиксировать прическу.' },
      { en: 'CFCs in aerosols used to damage the ozone layer.', ru: 'Фреоны в аэрозолях раньше разрушали озоновый слой.' },
      { en: 'Paint is often sold in aerosol cans for easy application.', ru: 'Краска часто продается в аэрозольных баллончиках для легкого нанесения.' }
    ]
),

createRichWord('c2_afar', 'Afar', '/əˈfɑː/', 'эфа', 'Издалека', ProficiencyLevel.C2, 'adv', 'Low', 'Literary',
    'На большом расстоянии или с большого расстояния (обычно "from afar").',
    '- Расстояние: "From afar" (Издалека)\n- Вид: "Seen from afar" (Видимый издалека)\n- Наблюдение: "Watch from afar" (Наблюдать издали)',
    [
      { en: 'He admired her from afar but never spoke to her.', ru: 'Он восхищался ею издалека, но никогда не разговаривал с ней.' },
      { en: 'Travelers came from afar to visit the shrine.', ru: 'Путешественники приходили издалека, чтобы посетить святыню.' },
      { en: 'The sound of thunder was heard from afar.', ru: 'Звук грома был слышен издалека.' },
      { en: 'I saw the lights of the city twinkling from afar.', ru: 'Я видел огни города, мерцающие вдалеке.' }
    ]
),

createRichWord('c2_affable', 'Affable', '/ˈæfəbl/', 'эфэбл', 'Приветливый / Любезный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Дружелюбный, добродушный и легкий в общении.',
    '- Характер: "Affable man" (Приветливый человек)\n- Поведение: "Affable manner" (Любезная манера)\n- Общение: "Affable smile" (Добродушная улыбка)',
    [
      { en: 'He was an affable host who made everyone feel welcome.', ru: 'Он был приветливым хозяином, который заставил всех чувствовать себя желанными гостями.' },
      { en: 'Despite his wealth, he remained affable and modest.', ru: 'Несмотря на свое богатство, он оставался любезным и скромным.' },
      { en: 'She greeted us with an affable smile.', ru: 'Она поприветствовала нас добродушной улыбкой.' },
      { en: 'His affable nature made him popular with colleagues.', ru: 'Его приветливый характер сделал его популярным среди коллег.' }
    ]
),

createRichWord('c2_affix', 'Affix', '/əˈfɪks/', 'эфикс', 'Прикреплять / Аффикс', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Приклеить или прикрепить что-то (глагол); часть слова, добавляемая к корню (сущ. - лингвистика).',
    '- Действие: "Affix a stamp" (Наклеить марку)\n- Документ: "Affix a signature" (Поставить подпись)\n- Лингвистика: "Prefix and suffix" (Префикс и суффикс)',
    [
      { en: 'Please affix a stamp to the envelope.', ru: 'Пожалуйста, наклейте марку на конверт.' },
      { en: 'He affixed his signature to the contract.', ru: 'Он поставил свою подпись на контракте.' },
      { en: 'A label was affixed to each bottle.', ru: 'На каждую бутылку была приклеена этикетка.' },
      { en: 'In grammar, an affix can be a prefix or a suffix.', ru: 'В грамматике аффикс может быть префиксом или суффиксом.' }
    ]
),

createRichWord('c2_affront', 'Affront', '/əˈfrʌnt/', 'эфрант', 'Оскорбление / Обида', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Действие или замечание, которое вызывает возмущение или обиду.',
    '- Обида: "Personal affront" (Личное оскорбление)\n- Реакция: "Deeply affronted" (Глубоко оскорбленный)\n- Действие: "Affront to dignity" (Оскорбление достоинства)',
    [
      { en: 'He regarded the comments as a personal affront.', ru: 'Он расценил комментарии как личное оскорбление.' },
      { en: 'It was an affront to human dignity.', ru: 'Это было оскорблением человеческого достоинства.' },
      { en: 'She was deeply affronted by his rude behavior.', ru: 'Она была глубоко оскорблена его грубым поведением.' },
      { en: 'His refusal to shake hands was a calculated affront.', ru: 'Его отказ пожать руку был намеренным оскорблением.' }
    ]
),

createRichWord('c2_afield', 'Afield', '/əˈfiːld/', 'эфилд', 'Вдали / Далеко', ProficiencyLevel.C2, 'adv', 'Low', 'Formal',
    'На расстоянии; далеко от дома или обычного места.',
    '- Расстояние: "Far afield" (Далеко / В далеких краях)\n- Поиск: "Look further afield" (Искать дальше/в другом месте)\n- Путешествие: "Roam afield" (Бродить вдали)',
    [
      { en: 'We have to look further afield to find the right candidate.', ru: 'Нам нужно искать в других местах (дальше), чтобы найти подходящего кандидата.' },
      { en: 'Journalists travel far afield to get the news.', ru: 'Журналисты путешествуют в далекие края, чтобы добыть новости.' },
      { en: 'He wandered far afield from his original topic.', ru: 'Он далеко ушел от своей первоначальной темы.' },
      { en: 'Supplies were brought in from fields far afield.', ru: 'Припасы привозили с далеких полей.' }
    ]
),

createRichWord('c2_aggrieved', 'Aggrieved', '/əˈɡriːvd/', 'эгривд', 'Обиженный / Пострадавший', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Чувствующий обиду из-за несправедливого обращения.',
    '- Чувство: "Feel aggrieved" (Чувствовать себя обиженным)\n- Право: "Aggrieved party" (Пострадавшая сторона)\n- Отношение: "Aggrieved tone" (Обиженный тон)',
    [
      { en: 'He felt aggrieved at not being chosen for the team.', ru: 'Он чувствовал себя обиженным из-за того, что его не выбрали в команду.' },
      { en: 'The aggrieved party has the right to sue.', ru: 'Пострадавшая сторона имеет право подать в суд.' },
      { en: 'She wrote an aggrieved letter to the manager.', ru: 'Она написала обиженное письмо менеджеру.' },
      { en: 'Workers were aggrieved by the sudden pay cut.', ru: 'Рабочие были возмущены (обижены) внезапным сокращением зарплаты.' }
    ]
),

createRichWord('c2_alchemy', 'Alchemy', '/ˈælkəmi/', 'элкэми', 'Алхимия', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Средневековая наука превращения металлов в золото; или таинственный процесс изменения чего-то.',
    '- История: "Medieval alchemy" (Средневековая алхимия)\n- Магия: "Sheer alchemy" (Чистая магия)\n- Превращение: "Alchemy of words" (Алхимия слов)',
    [
      { en: 'He spent his life studying alchemy to find the philosopher\'s stone.', ru: 'Он провел свою жизнь, изучая алхимию, чтобы найти философский камень.' },
      { en: 'There was a strange alchemy between the two actors.', ru: 'Между двумя актерами была странная химия (алхимия).' },
      { en: 'She turned simple ingredients into gold through culinary alchemy.', ru: 'Она превратила простые ингредиенты в золото с помощью кулинарной алхимии.' },
      { en: 'Modern chemistry evolved from alchemy.', ru: 'Современная химия произошла от алхимии.' }
    ]
),

createRichWord('c2_alcove', 'Alcove', '/ˈælkəʊv/', 'элкоув', 'Альков / Ниша', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Углубление в стене комнаты или сада.',
    '- Архитектура: "Dining alcove" (Обеденная ниша)\n- Место: "Small alcove" (Маленькая ниша)\n- Сад: "Garden alcove" (Садовая беседка/ниша)',
    [
      { en: 'The bed fits perfectly into the alcove.', ru: 'Кровать идеально помещается в нишу.' },
      { en: 'We sat in a quiet alcove of the library.', ru: 'Мы сидели в тихой нише библиотеки.' },
      { en: 'Statues were placed in alcoves along the hall.', ru: 'Статуи были размещены в нишах вдоль зала.' },
      { en: 'A small table stood in the window alcove.', ru: 'В оконной нише стоял маленький столик.' }
    ]
),

createRichWord('c2_alkaline', 'Alkaline', '/ˈælkəlaɪn/', 'элкэлайн', 'Щелочной', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Имеющий pH больше 7; противоположность кислотному.',
    '- Химия: "Alkaline solution" (Щелочной раствор)\n- Батарейки: "Alkaline batteries" (Щелочные батарейки)\n- Почва: "Alkaline soil" (Щелочная почва)',
    [
      { en: 'These plants prefer alkaline soil.', ru: 'Эти растения предпочитают щелочную почву.' },
      { en: 'Alkaline batteries last longer than regular ones.', ru: 'Щелочные батарейки служат дольше обычных.' },
      { en: 'The water in this lake is highly alkaline.', ru: 'Вода в этом озере очень щелочная.' },
      { en: 'You can use vinegar to neutralize an alkaline substance.', ru: 'Можно использовать уксус для нейтрализации щелочного вещества.' }
    ]
),

createRichWord('c2_allay', 'Allay', '/əˈleɪ/', 'элей', 'Успокаивать / Смягчать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Уменьшить страх, сомнение или беспокойство.',
    '- Страх: "Allay fears" (Развеять страхи)\n- Подозрения: "Allay suspicions" (Рассеять подозрения)\n- Боль: "Allay pain" (Облегчить боль - реже)',
    [
      { en: 'The government tried to allay public fears about the virus.', ru: 'Правительство пыталось развеять страхи общественности по поводу вируса.' },
      { en: 'He offered evidence to allay their suspicions.', ru: 'Он предоставил доказательства, чтобы рассеять их подозрения.' },
      { en: 'A warm drink helped to allay her anxiety.', ru: 'Теплый напиток помог унять ее тревогу.' },
      { en: 'Nothing could allay his concern for his son.', ru: 'Ничто не могло унять его беспокойство за сына.' }
    ]
),

createRichWord('c2_altruism', 'Altruism', '/ˈæltruɪzəm/', 'элтруизэм', 'Альтруизм', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Бескорыстная забота о благополучии других.',
    '- Характер: "Act of altruism" (Акт альтруизма)\n- Мотив: "Pure altruism" (Чистый альтруизм)\n- Поведение: "Motivated by altruism" (Движимый альтруизмом)',
    [
      { en: 'Her volunteer work is driven by pure altruism.', ru: 'Ее волонтерская работа движима чистым альтруизмом.' },
      { en: 'Some argue that true altruism does not exist.', ru: 'Некоторые утверждают, что истинного альтруизма не существует.' },
      { en: 'He showed great altruism in helping the refugees.', ru: 'Он проявил большой альтруизм, помогая беженцам.' },
      { en: 'Altruism is a key virtue in many religions.', ru: 'Альтруизм является ключевой добродетелью во многих религиях.' }
    ]
),

createRichWord('c2_amble', 'Amble', '/ˈæmbl/', 'эмбл', 'Брести / Прогуливаться', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Идти медленно и расслабленно.',
    '- Движение: "Amble along" (Брести вдоль)\n- Прогулка: "Amble through the park" (Прогуливаться по парку)\n- Скорость: "Slow amble" (Медленная прогулка)',
    [
      { en: 'We ambled along the beach at sunset.', ru: 'Мы неспешно прогуливались по пляжу на закате.' },
      { en: 'He ambled into the room, looking relaxed.', ru: 'Он неторопливо вошел в комнату, выглядя расслабленным.' },
      { en: 'They spent the afternoon ambling through the old town.', ru: 'Они провели день, бродя по старому городу.' },
      { en: 'The horse ambled down the country lane.', ru: 'Лошадь неспешно брела по проселочной дороге.' }
    ]
),

createRichWord('c2_ameliorate', 'Ameliorate', '/əˈmiːliəreɪt/', 'эмилиэрейт', 'Улучшать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сделать плохую ситуацию лучше (формальный синоним improve).',
    '- Ситуация: "Ameliorate conditions" (Улучшить условия)\n- Проблема: "Ameliorate the effects" (Смягчить последствия)\n- Жизнь: "Ameliorate poverty" (Облегчить бедность)',
    [
      { en: 'Steps have been taken to ameliorate the situation.', ru: 'Были предприняты шаги для улучшения ситуации.' },
      { en: 'Medicine can ameliorate the symptoms of the disease.', ru: 'Медицина может облегчить симптомы болезни.' },
      { en: 'Foreign aid is needed to ameliorate the effects of the drought.', ru: 'Иностранная помощь необходима для смягчения последствий засухи.' },
      { en: 'They aim to ameliorate the living conditions of the poor.', ru: 'Они стремятся улучшить условия жизни бедных.' }
    ]
),

createRichWord('c2_amenable', 'Amenable', '/əˈmiːnəbl/', 'эминэбл', 'Сговорчивый / Податливый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Готовый принять предложение или поддающийся влиянию.',
    '- Характер: "Amenable to reason" (Поддающийся разуму)\n- Предложение: "Amenable to change" (Готовый к изменениям)\n- Человек: "Amenable child" (Послушный ребенок)',
    [
      { en: 'He was amenable to my suggestion.', ru: 'Он был сговорчив по поводу моего предложения.' },
      { en: 'They are usually amenable to compromise.', ru: 'Они обычно готовы к компромиссу.' },
      { en: 'The disease is amenable to treatment.', ru: 'Болезнь поддается лечению.' },
      { en: 'We need a manager who is amenable to new ideas.', ru: 'Нам нужен менеджер, восприимчивый к новым идеям.' }
    ]
),

createRichWord('c2_amicable', 'Amicable', '/ˈæmɪkəbl/', 'эмикэбл', 'Дружелюбный / Мирный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Характеризующийся дружелюбием и отсутствием разногласий (обычно об отношениях или соглашениях).',
    '- Развод: "Amicable divorce" (Мирный развод)\n- Соглашение: "Amicable agreement" (Дружеское соглашение)\n- Отношения: "Amicable relationship" (Дружеские отношения)',
    [
      { en: 'They reached an amicable agreement on the custody of the children.', ru: 'Они достигли мирного соглашения об опеке над детьми.' },
      { en: 'Despite their differences, the meeting was amicable.', ru: 'Несмотря на разногласия, встреча прошла дружелюбно.' },
      { en: 'They decided to separate in an amicable manner.', ru: 'Они решили расстаться мирно.' },
      { en: 'The neighbors maintain an amicable relationship.', ru: 'Соседи поддерживают дружеские отношения.' }
    ]
),

createRichWord('c2_amorphous', 'Amorphous', '/əˈmɔːfəs/', 'эмофэс', 'Аморфный / Бесформенный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Не имеющий четкой формы или структуры.',
    '- Форма: "Amorphous mass" (Бесформенная масса)\n- Идея: "Amorphous concept" (Расплывчатое понятие)\n- Структура: "Amorphous structure" (Аморфная структура)',
    [
      { en: 'An amorphous grey cloud appeared on the horizon.', ru: 'Бесформенное серое облако появилось на горизонте.' },
      { en: 'His plans for the future are still quite amorphous.', ru: 'Его планы на будущее все еще довольно расплывчаты.' },
      { en: 'The liquid solidified into an amorphous blob.', ru: 'Жидкость застыла в бесформенную каплю.' },
      { en: 'It is hard to define such an amorphous group.', ru: 'Трудно дать определение такой аморфной группе.' }
    ]
),

createRichWord('c2_amphitheatre', 'Amphitheatre', '/ˈæmfɪθɪətə/', 'эмфисиэтэ', 'Амфитеатр', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Круглое или овальное здание без крыши с рядами сидений, поднимающимися ступенями от центральной арены.',
    '- История: "Roman amphitheatre" (Римский амфитеатр)\n- Место: "Outdoor amphitheatre" (Открытый амфитеатр)\n- Сиденья: "Seated in the amphitheatre" (Сидящие в амфитеатре)',
    [
      { en: 'The Colosseum in Rome is a famous amphitheatre.', ru: 'Колизей в Риме — знаменитый амфитеатр.' },
      { en: 'Concerts are often held in the outdoor amphitheatre.', ru: 'Концерты часто проводятся в открытом амфитеатре.' },
      { en: 'The ruins of the ancient amphitheatre are still visible.', ru: 'Руины древнего амфитеатра все еще видны.' },
      { en: 'The steep steps of the amphitheatre provide a good view.', ru: 'Крутые ступени амфитеатра обеспечивают хороший обзор.' }
    ]
),

createRichWord('c2_ancillary', 'Ancillary', '/ænˈsɪləri/', 'энсилэри', 'Вспомогательный / Дополнительный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Предоставляющий необходимую поддержку основной деятельности или организации.',
    '- Персонал: "Ancillary staff" (Вспомогательный персонал)\n- Услуги: "Ancillary services" (Дополнительные услуги)\n- Роль: "Ancillary role" (Вспомогательная роль)',
    [
      { en: 'Ancillary staff includes cleaners and cooks.', ru: 'Вспомогательный персонал включает уборщиков и поваров.' },
      { en: 'The course incurs ancillary costs for books and materials.', ru: 'Курс влечет за собой дополнительные расходы на книги и материалы.' },
      { en: 'He played an ancillary role in the negotiations.', ru: 'Он сыграл вспомогательную роль в переговорах.' },
      { en: 'The factory has several ancillary buildings.', ru: 'У фабрики есть несколько вспомогательных зданий.' }
    ]
),

createRichWord('c2_annals', 'Annals', '/ˈænlz/', 'энлз', 'Анналы / Летопись', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Исторические записи событий по годам.',
    '- История: "In the annals of history" (В анналах истории)\n- Записи: "Annals of science" (Летопись науки)\n- Книга: "Recorded in the annals" (Записано в анналах)',
    [
      { en: 'This victory will go down in the annals of history.', ru: 'Эта победа войдет в анналы истории.' },
      { en: 'He is a legend in the annals of sport.', ru: 'Он легенда в летописи спорта.' },
      { en: 'The annals of the society are kept in the library.', ru: 'Анналы общества хранятся в библиотеке.' },
      { en: 'Such a crime has no parallel in the annals of crime.', ru: 'Такое преступление не имеет аналогов в криминальной летописи.' }
    ]
),

createRichWord('c2_annotate', 'Annotate', '/ˈænəteɪt/', 'энэтейт', 'Аннотировать / Делать пометки', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Добавлять примечания к тексту или диаграмме для объяснения.',
    '- Текст: "Annotate a text" (Аннотировать текст)\n- Книга: "Annotated edition" (Издание с комментариями)\n- Учеба: "Annotate diagrams" (Делать подписи к диаграммам)',
    [
      { en: 'Students were asked to annotate the poem.', ru: 'Студентов попросили сделать пометки к стихотворению.' },
      { en: 'This is an annotated edition of Shakespeare\'s plays.', ru: 'Это аннотированное издание пьес Шекспира.' },
      { en: 'He annotated the report with his comments.', ru: 'Он снабдил отчет своими комментариями.' },
      { en: 'Please annotate the diagram to show the different parts.', ru: 'Пожалуйста, подпишите диаграмму, чтобы показать разные части.' }
    ]
),

createRichWord('c2_annul', 'Annul', '/əˈnʌl/', 'энал', 'Аннулировать / Отменять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Официально объявить что-то недействительным (брак, закон, выборы).',
    '- Брак: "Annul a marriage" (Аннулировать брак)\n- Закон: "Annul a contract" (Расторгнуть контракт)\n- Выборы: "Annul the election" (Аннулировать выборы)',
    [
      { en: 'Their marriage was annulled after only two weeks.', ru: 'Их брак был аннулирован всего через две недели.' },
      { en: 'The court annulled the previous judgment.', ru: 'Суд отменил предыдущее решение.' },
      { en: 'The election results were annulled due to fraud.', ru: 'Результаты выборов были аннулированы из-за мошенничества.' },
      { en: 'They agreed to annul the contract by mutual consent.', ru: 'Они согласились расторгнуть контракт по обоюдному согласию.' }
    ]
),

createRichWord('c2_anoint', 'Anoint', '/əˈnɔɪnt/', 'энойнт', 'Помазать / Елеопомазать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Натереть маслом или водой в рамках религиозной церемонии; или официально выбрать кого-то преемником.',
    '- Религия: "Anoint with oil" (Помазать маслом)\n- Власть: "Anoint a successor" (Назначить преемника)\n- Король: "The anointed king" (Помазанный король)',
    [
      { en: 'The priest anointed the sick man with holy oil.', ru: 'Священник помазал больного святым елеем.' },
      { en: 'He was anointed as the king\'s successor.', ru: 'Он был провозглашен (помазан) преемником короля.' },
      { en: 'Critics say she has been anointed by the party leadership.', ru: 'Критики говорят, что она была "назначена" руководством партии.' },
      { en: 'The ceremony involves anointing the head with water.', ru: 'Церемония включает омывание (помазание) головы водой.' }
    ]
),

createRichWord('c2_antelope', 'Antelope', '/ˈæntɪləʊp/', 'энтилоуп', 'Антилопа', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Быстрое животное, похожее на оленя, обитающее в Африке и Азии.',
    '- Животное: "Herd of antelope" (Стадо антилоп)\n- Скорость: "Fast as an antelope" (Быстрый как антилопа)\n- Природа: "African antelope" (Африканская антилопа)',
    [
      { en: 'A herd of antelope grazed on the savannah.', ru: 'Стадо антилоп паслось в саванне.' },
      { en: 'The lion chased the antelope across the plain.', ru: 'Лев преследовал антилопу по равнине.' },
      { en: 'Antelopes are known for their speed and agility.', ru: 'Антилопы известны своей скоростью и ловкостью.' },
      { en: 'We saw several species of antelope on the safari.', ru: 'На сафари мы видели несколько видов антилоп.' }
    ]
),

createRichWord('c2_antler', 'Antler', '/ˈæntlə/', 'энтлэ', 'Олений рог', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Ветвистый рог на голове взрослого оленя.',
    '- Животное: "Deer antlers" (Оленьи рога)\n- Охота: "Pair of antlers" (Пара рогов)\n- Природа: "Shed antlers" (Сбрасывать рога)',
    [
      { en: 'The stag had a magnificent pair of antlers.', ru: 'У оленя была великолепная пара рогов.' },
      { en: 'Deer shed their antlers every year.', ru: 'Олени сбрасывают рога каждый год.' },
      { en: 'Antlers are used by males to fight for territory.', ru: 'Рога используются самцами для борьбы за территорию.' },
      { en: 'He found a broken antler in the forest.', ru: 'Он нашел сломанный рог в лесу.' }
    ]
),

createRichWord('c2_apparition', 'Apparition', '/ˌæpəˈrɪʃn/', 'эпэришн', 'Призрак / Видение', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Призрачная фигура, которая появляется внезапно.',
    '- Страх: "Ghostly apparition" (Призрачное видение)\n- Внезапность: "Sudden apparition" (Внезапное появление)\n- Мистика: "Strange apparition" (Странное видение)',
    [
      { en: 'He claimed to have seen an apparition in the old castle.', ru: 'Он утверждал, что видел призрака в старом замке.' },
      { en: 'The apparition vanished as quickly as it appeared.', ru: 'Видение исчезло так же быстро, как и появилось.' },
      { en: 'They were terrified by the sudden apparition.', ru: 'Они были напуганы внезапным появлением призрака.' },
      { en: 'It looked like a ghostly apparition in the fog.', ru: 'В тумане это выглядело как призрачное видение.' }
    ]
),

createRichWord('c2_appellate', 'Appellate', '/əˈpelət/', 'эпелэт', 'Апелляционный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к судам, которые имеют право пересматривать решения низших судов.',
    '- Суд: "Appellate court" (Апелляционный суд)\n- Право: "Appellate jurisdiction" (Апелляционная юрисдикция)\n- Система: "Appellate system" (Апелляционная система)',
    [
      { en: 'The case was taken to the appellate court.', ru: 'Дело было передано в апелляционный суд.' },
      { en: 'The appellate judge overturned the original verdict.', ru: 'Судья апелляционной инстанции отменил первоначальный приговор.' },
      { en: 'Appellate jurisdiction allows higher courts to review decisions.', ru: 'Апелляционная юрисдикция позволяет высшим судам пересматривать решения.' },
      { en: 'He specializes in appellate law.', ru: 'Он специализируется на апелляционном праве.' }
    ]
),

createRichWord('c2_aquifer', 'Aquifer', '/ˈækwɪfə/', 'эквифэ', 'Водоносный слой', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Слой породы или почвы под землей, который удерживает воду.',
    '- Геология: "Underground aquifer" (Подземный водоносный слой)\n- Вода: "Deplete the aquifer" (Истощать водоносный горизонт)\n- Источник: "Freshwater from aquifer" (Пресная вода из водоносного слоя)',
    [
      { en: 'The city gets its water from a deep underground aquifer.', ru: 'Город получает воду из глубокого подземного водоносного горизонта.' },
      { en: 'Overuse of water is depleting the aquifer.', ru: 'Чрезмерное использование воды истощает водоносный слой.' },
      { en: 'Pollution can contaminate the aquifer for years.', ru: 'Загрязнение может заразить водоносный горизонт на долгие годы.' },
      { en: 'Farmers rely on the aquifer to irrigate their crops.', ru: 'Фермеры полагаются на водоносный слой для орошения своих культур.' }
    ]
),

createRichWord('c2_arable', 'Arable', '/ˈærəbl/', 'эрэбл', 'Пахотный / Культивируемый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Земля, пригодная для выращивания сельскохозяйственных культур.',
    '- Ферма: "Arable land" (Пахотная земля)\n- Сельское хозяйство: "Arable farming" (Земледелие)\n- Почва: "Arable soil" (Плодородная почва)',
    [
      { en: 'Only a small percentage of the country is arable land.', ru: 'Лишь небольшой процент территории страны составляют пахотные земли.' },
      { en: 'They converted the pasture into arable fields.', ru: 'Они превратили пастбище в пахотные поля.' },
      { en: 'Arable farming requires good soil and climate.', ru: 'Земледелие требует хорошей почвы и климата.' },
      { en: 'The drought has made the arable land dry and useless.', ru: 'Засуха сделала пахотную землю сухой и бесполезной.' }
    ]
),

createRichWord('c2_arbiter', 'Arbiter', '/ˈɑːbɪtə/', 'абитэ', 'Арбитр / Вершитель', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Человек, который решает спор или имеет высший авторитет в чем-либо (моде, вкусе).',
    '- Решение: "Final arbiter" (Последняя инстанция)\n- Вкус: "Arbiter of fashion" (Законодатель моды)\n- Спор: "Act as arbiter" (Выступать в роли арбитра)',
    [
      { en: 'The Supreme Court is the final arbiter of the law.', ru: 'Верховный суд является последней инстанцией закона.' },
      { en: 'She was considered the arbiter of taste in London society.', ru: 'Она считалась законодательницей вкуса в лондонском обществе.' },
      { en: 'He acted as arbiter in the dispute between the neighbors.', ru: 'Он выступил в роли арбитра в споре между соседями.' },
      { en: 'The consumer is the ultimate arbiter of a product\'s success.', ru: 'Потребитель — главный судья успеха продукта.' }
    ]
),

createRichWord('c2_aria', 'Aria', '/ˈɑːriə/', 'ариэ', 'Ария', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Длинная песня для одного голоса в опере.',
    '- Музыка: "Sing an aria" (Петь арию)\n- Опера: "Famous aria" (Известная ария)\n- Исполнение: "Operatic aria" (Оперная ария)',
    [
      { en: 'She sang a beautiful aria from Puccini\'s opera.', ru: 'Она спела красивую арию из оперы Пуччини.' },
      { en: 'The tenor performed the aria with great emotion.', ru: 'Тенор исполнил арию с большим чувством.' },
      { en: 'The audience applauded after the final aria.', ru: 'Зрители аплодировали после финальной арии.' },
      { en: 'It is a difficult aria to sing correctly.', ru: 'Это сложная ария для правильного исполнения.' }
    ]
),

createRichWord('c2_armament', 'Armament', '/ˈɑːməmənt/', 'амэмэнт', 'Вооружение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Военное оружие и оборудование; или процесс вооружения к войне.',
    '- Война: "Nuclear armament" (Ядерное вооружение)\n- Гонка: "Armament race" (Гонка вооружений)\n- Запас: "Heavy armament" (Тяжелое вооружение)',
    [
      { en: 'The country is increasing its spending on armament.', ru: 'Страна увеличивает расходы на вооружение.' },
      { en: 'They called for a reduction in nuclear armaments.', ru: 'Они призвали к сокращению ядерных вооружений.' },
      { en: 'The ship carried heavy armament for protection.', ru: 'Корабль нес тяжелое вооружение для защиты.' },
      { en: 'Disarmament means getting rid of armaments.', ru: 'Разоружение означает избавление от вооружений.' }
    ]
),

createRichWord('c2_arrears', 'Arrears', '/əˈrɪəz/', 'эриэз', 'Задолженность / Просрочка', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Деньги, которые должны были быть выплачены, но не были.',
    '- Долг: "In arrears" (В долгах / С просрочкой)\n- Оплата: "Rent arrears" (Задолженность по аренде)\n- Действие: "Pay arrears" (Погасить задолженность)',
    [
      { en: 'He is two months in arrears with his rent.', ru: 'У него просрочка по аренде за два месяца.' },
      { en: 'You must pay the arrears immediately.', ru: 'Вы должны немедленно погасить задолженность.' },
      { en: 'They fell into arrears on their mortgage payments.', ru: 'Они допустили просрочку по ипотечным платежам.' },
      { en: 'Payment is made in arrears at the end of the month.', ru: 'Оплата производится по факту (с отсрочкой) в конце месяца.' }
    ]
),

createRichWord('c2_arsenic', 'Arsenic', '/ˈɑːsnɪk/', 'асник', 'Мышьяк', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Сильный яд (химический элемент).',
    '- Яд: "Arsenic poisoning" (Отравление мышьяком)\n- Химия: "Traces of arsenic" (Следы мышьяка)\n- Опасность: "Contains arsenic" (Содержит мышьяк)',
    [
      { en: 'Old wallpaper sometimes contained arsenic.', ru: 'Старые обои иногда содержали мышьяк.' },
      { en: 'He was suspected of poisoning her with arsenic.', ru: 'Его подозревали в том, что он отравил ее мышьяком.' },
      { en: 'Arsenic is a deadly poison.', ru: 'Мышьяк — смертельный яд.' },
      { en: 'Tests revealed high levels of arsenic in the water.', ru: 'Тесты выявили высокий уровень мышьяка в воде.' }
    ]
),

createRichWord('c2_artful', 'Artful', '/ˈɑːtfl/', 'атфл', 'Ловкий / Хитрый', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Умный и хитрый, особенно в получении желаемого.',
    '- Характер: "Artful dodger" (Ловкий плут)\n- Поведение: "Artful tricks" (Хитрые трюки)\n- Ум: "Artful use of words" (Искусное использование слов)',
    [
      { en: 'He is an artful politician who knows how to manipulate the media.', ru: 'Он хитрый политик, который знает, как манипулировать СМИ.' },
      { en: 'She used artful flattery to get what she wanted.', ru: 'Она использовала искусную лесть, чтобы получить желаемое.' },
      { en: 'The Artful Dodger is a character in Oliver Twist.', ru: 'Ловкий Плут — персонаж в "Оливере Твисте".' },
      { en: 'It was an artful piece of deception.', ru: 'Это был искусный обман.' }
    ]
),

createRichWord('c2_artichoke', 'Artichoke', '/ˈɑːtɪtʃəʊk/', 'атичоук', 'Артишок', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Растение с круглой головкой из толстых листьев, употребляемое в пищу как овощ.',
    '- Еда: "Globe artichoke" (Артишок колючий)\n- Блюдо: "Steamed artichoke" (Артишок на пару)\n- Часть: "Artichoke heart" (Сердцевина артишока)',
    [
      { en: 'We had steamed artichokes with butter for dinner.', ru: 'У нас на ужин были артишоки на пару с маслом.' },
      { en: 'The heart of the artichoke is the most tender part.', ru: 'Сердцевина артишока — самая нежная часть.' },
      { en: 'Preparing a fresh artichoke can be tricky.', ru: 'Приготовление свежего артишока может быть сложным.' },
      { en: 'Jerusalem artichoke is actually a type of sunflower tuber.', ru: 'Топинамбур (иерусалимский артишок) на самом деле является клубнем подсолнечника.' }
    ]
  ),
createRichWord('c2_atone', 'Atone', '/əˈtəʊn/', 'этоун', 'Искупать (вину)', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Совершить действие, чтобы загладить свою вину за прошлые ошибки или грехи.',
    '- Вина: "Atone for sins" (Искупать грехи)\n- Ошибка: "Atone for a mistake" (Загладить ошибку)\n- Религия: "Day of Atonement" (День Искупления)',
    [
      { en: 'He spent the rest of his life trying to atone for his crimes.', ru: 'Он провел остаток жизни, пытаясь искупить свои преступления.' },
      { en: 'Nothing can atone for the loss of a child.', ru: 'Ничто не может восполнить (искупить) потерю ребенка.' },
      { en: 'She wanted to atone for her rudeness by sending flowers.', ru: 'Она хотела загладить свою грубость, послав цветы.' },
      { en: 'The prisoner hoped to atone for his past behavior.', ru: 'Заключенный надеялся искупить свое прошлое поведение.' }
    ]
),

createRichWord('c2_atrium', 'Atrium', '/ˈeɪtriəm/', 'эйтриэм', 'Атриум', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Центральный зал в здании со стеклянной крышей; или камера сердца.',
    '- Архитектура: "Glass atrium" (Стеклянный атриум)\n- Сердце: "Right atrium" (Правое предсердие)\n- Здание: "Hotel atrium" (Атриум отеля)',
    [
      { en: 'The hotel has a magnificent atrium with a fountain.', ru: 'В отеле есть великолепный атриум с фонтаном.' },
      { en: 'Light flooded into the lobby through the glass atrium.', ru: 'Свет заливал вестибюль через стеклянный атриум.' },
      { en: 'The heart consists of two atria and two ventricles.', ru: 'Сердце состоит из двух предсердий и двух желудочков.' },
      { en: 'Guests gathered in the atrium for the reception.', ru: 'Гости собрались в атриуме на прием.' }
    ]
),

createRichWord('c2_attrition', 'Attrition', '/əˈtrɪʃn/', 'этришн', 'Истощение / Убыль', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Процесс ослабления или уменьшения чего-либо путем постоянного давления или атак.',
    '- Война: "War of attrition" (Война на истощение)\n- Персонал: "Staff attrition" (Убыль персонала/текучка)\n- Сила: "Rate of attrition" (Уровень потерь)',
    [
      { en: 'It was a war of attrition where neither side could win quickly.', ru: 'Это была война на истощение, где ни одна из сторон не могла победить быстро.' },
      { en: 'High staff attrition is a problem for the company.', ru: 'Высокая текучка кадров — проблема для компании.' },
      { en: 'We plan to reduce the workforce through natural attrition.', ru: 'Мы планируем сократить штат за счет естественной убыли.' },
      { en: 'The constant criticism was a form of emotional attrition.', ru: 'Постоянная критика была формой эмоционального истощения.' }
    ]
),

createRichWord('c2_attune', 'Attune', '/əˈtjuːn/', 'этъюн', 'Настраивать / Приспосабливать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сделать кого-то или что-то восприимчивым или осведомленным; настроить на одну волну.',
    '- Восприятие: "Attuned to needs" (Настроенный на потребности)\n- Музыка: "Attune the ear" (Настроить слух)\n- Среда: "Attune to the environment" (Приспособиться к среде)',
    [
      { en: 'A good mother is attuned to her baby\'s needs.', ru: 'Хорошая мать настроена на потребности своего ребенка.' },
      { en: 'We must attune our policies to the changing market.', ru: 'Мы должны адаптировать нашу политику к меняющемуся рынку.' },
      { en: 'His ears were attuned to the sounds of the forest.', ru: 'Его уши были настроены на звуки леса.' },
      { en: 'She is not yet attuned to the corporate culture.', ru: 'Она еще не приспособилась к корпоративной культуре.' }
    ]
),

createRichWord('c2_awash', 'Awash', '/əˈwɒʃ/', 'эвош', 'Залитый / Переполненный', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Покрытый водой; или (перен.) содержащий что-то в большом количестве.',
    '- Вода: "Decks awash" (Палубы, залитые водой)\n- Переносно: "Awash with money" (Купающийся в деньгах)\n- Информация: "Awash with rumors" (Полный слухов)',
    [
      { en: 'After the storm, the streets were awash with water.', ru: 'После шторма улицы были залиты водой.' },
      { en: 'The city is awash with drugs and crime.', ru: 'Город наводнен наркотиками и преступностью.' },
      { en: 'Following the lottery win, they were awash with cash.', ru: 'После выигрыша в лотерею они купались в деньгах.' },
      { en: 'The media was awash with speculation about the scandal.', ru: 'СМИ были переполнены спекуляциями по поводу скандала.' }
    ]
),

createRichWord('c2_awhile', 'Awhile', '/əˈwaɪl/', 'эвайл', 'Недолго / Какое-то время', ProficiencyLevel.C2, 'adv', 'Low', 'Formal',
    'В течение короткого времени (наречие).',
    '- Время: "Stay awhile" (Остаться ненадолго)\n- Ожидание: "Wait awhile" (Подождать немного)\n- Отдых: "Rest awhile" (Отдохнуть немного)',
    [
      { en: 'Stay awhile and tell me your news.', ru: 'Останься ненадолго и расскажи мне свои новости.' },
      { en: 'I decided to rest awhile before continuing.', ru: 'Я решил немного отдохнуть, прежде чем продолжить.' },
      { en: 'Whatever you do, think awhile before you act.', ru: 'Что бы ты ни делал, подумай немного, прежде чем действовать.' },
      { en: 'He lingered awhile at the gate.', ru: 'Он немного задержался у ворот.' }
    ]
),

createRichWord('c2_axiom', 'Axiom', '/ˈæksiəm/', 'эксиэм', 'Аксиома', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Утверждение, которое считается истинным без доказательств.',
    '- Наука: "Mathematical axiom" (Математическая аксиома)\n- Жизнь: "Old axiom" (Старая истина)\n- Логика: "Basic axiom" (Базовая аксиома)',
    [
      { en: 'It is a widely held axiom that governments should not lie.', ru: 'Широко распространенная аксиома гласит, что правительства не должны лгать.' },
      { en: 'Euclid\'s axioms form the basis of geometry.', ru: 'Аксиомы Евклида образуют основу геометрии.' },
      { en: 'The old axiom "time is money" is still true.', ru: 'Старая истина "время — деньги" все еще верна.' },
      { en: 'You cannot prove an axiom; you accept it.', ru: 'Аксиому нельзя доказать, ее принимают.' }
    ]
),

createRichWord('c2_bailiff', 'Bailiff', '/ˈbeɪlɪf/', 'бейлиф', 'Судебный пристав', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Должностное лицо, которое следит за порядком в суде или забирает имущество должников.',
    '- Суд: "High Court bailiff" (Пристав Высокого суда)\n- Долги: "Send in the bailiffs" (Послать приставов)\n- Имущество: "Seized by bailiffs" (Изъято приставами)',
    [
      { en: 'The bailiff confiscated his car to pay the debts.', ru: 'Судебный пристав конфисковал его машину для оплаты долгов.' },
      { en: 'Bailiffs arrived at the house to evict the tenants.', ru: 'Приставы прибыли в дом, чтобы выселить жильцов.' },
      { en: 'The bailiff called for silence in the courtroom.', ru: 'Пристав призвал к тишине в зале суда.' },
      { en: 'If you don\'t pay the fine, the bailiffs will come.', ru: 'Если вы не заплатите штраф, придут приставы.' }
    ]
),

createRichWord('c2_bandwagon', 'Bandwagon', '/ˈbændwæɡən/', 'бэндвэгэн', 'Повальное увлечение / Победившая сторона', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Деятельность или движение, которое стало популярным; используется в идиоме "jump on the bandwagon".',
    '- Идиома: "Jump on the bandwagon" (Примкнуть к большинству / Поддаться моде)\n- Политика: "Political bandwagon" (Политический тренд)\n- Мода: "Join the bandwagon" (Присоединиться к общему движению)',
    [
      { en: 'Many companies jumped on the environmental bandwagon.', ru: 'Многие компании поддались моде на экологию (примкнули к тренду).' },
      { en: 'He waited to see who was winning before jumping on the bandwagon.', ru: 'Он ждал, чтобы увидеть, кто побеждает, прежде чем примкнуть к большинству.' },
      { en: 'It is easy to criticize now that the bandwagon has moved on.', ru: 'Легко критиковать теперь, когда мода прошла.' },
      { en: 'Don\'t just join the bandwagon because everyone else is doing it.', ru: 'Не присоединяйся к движению только потому, что все остальные это делают.' }
    ]
),

createRichWord('c2_banister', 'Banister', '/ˈbænɪstə/', 'бэнистэ', 'Перила', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Поручень и поддерживающие его столбики на лестнице.',
    '- Дом: "Hold the banister" (Держаться за перила)\n- Дерево: "Wooden banister" (Деревянные перила)\n- Игра: "Slide down the banister" (Съезжать по перилам)',
    [
      { en: 'Please hold the banister when you go down the stairs.', ru: 'Пожалуйста, держитесь за перила, когда спускаетесь по лестнице.' },
      { en: 'The child slid down the banister and laughed.', ru: 'Ребенок съехал по перилам и засмеялся.' },
      { en: 'He polished the wooden banister until it shone.', ru: 'Он полировал деревянные перила, пока они не заблестели.' },
      { en: 'The banister rail feels loose and unsafe.', ru: 'Поручень перил кажется шатким и небезопасным.' }
    ]
),

createRichWord('c2_banter', 'Banter', '/ˈbæntə/', 'бэнтэ', 'Добродушное подшучивание', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Разговор, который смешон и несерьезен; дружеская болтовня.',
    '- Разговор: "Friendly banter" (Дружеская болтовня)\n- Действие: "Exchange banter" (Обмениваться шутками)\n- Стиль: "Light-hearted banter" (Беззаботное подшучивание)',
    [
      { en: 'They engaged in friendly banter before the meeting started.', ru: 'Они дружески подшучивали друг над другом перед началом встречи.' },
      { en: 'His speech was full of witty banter.', ru: 'Его речь была полна остроумных шуток.' },
      { en: 'I enjoy the easy banter between the two hosts.', ru: 'Мне нравится непринужденная болтовня двух ведущих.' },
      { en: 'Don\'t take his comments seriously; it is just banter.', ru: 'Не воспринимай его комментарии всерьез; это просто шутки.' }
    ]
),

createRichWord('c2_bard', 'Bard', '/bɑːd/', 'бард', 'Бард / Поэт', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Поэт, традиционно читающий стихи под музыку; или (с большой буквы) Шекспир.',
    '- Литература: "The Bard" (Шекспир)\n- История: "Celtic bard" (Кельтский бард)\n- Роль: "Wandering bard" (Бродячий поэт)',
    [
      { en: 'William Shakespeare is often known simply as The Bard.', ru: 'Уильяма Шекспира часто называют просто Бардом.' },
      { en: 'The ancient bard sang stories of heroes and battles.', ru: 'Древний бард пел истории о героях и битвах.' },
      { en: 'He fancies himself a modern-day bard.', ru: 'Он воображает себя современным поэтом.' },
      { en: 'Bards played an important role in oral history.', ru: 'Барды играли важную роль в устной истории.' }
    ]
),

createRichWord('c2_barometer', 'Barometer', '/bəˈrɒmɪtə/', 'бэрометэ', 'Барометр / Показатель', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Прибор для измерения атмосферного давления; или что-то, что показывает изменения (индикатор).',
    '- Погода: "Check the barometer" (Проверить барометр)\n- Экономика: "Economic barometer" (Экономический барометр/индикатор)\n- Изменение: "Barometer of opinion" (Показатель мнения)',
    [
      { en: 'The barometer is falling, which means a storm is coming.', ru: 'Барометр падает, что означает приближение шторма.' },
      { en: 'Housing prices are a useful barometer of the economy.', ru: 'Цены на жилье — полезный индикатор экономики.' },
      { en: 'This election is seen as a barometer of public mood.', ru: 'Эти выборы рассматриваются как барометр общественных настроений.' },
      { en: 'Use the barometer to predict the weather.', ru: 'Используйте барометр, чтобы предсказать погоду.' }
    ]
),

createRichWord('c2_barrister', 'Barrister', '/ˈbærɪstə/', 'бэристэ', 'Барристер (адвокат)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Адвокат в Великобритании, имеющий право выступать в высших судах.',
    '- Суд: "Defence barrister" (Адвокат защиты)\n- Профессия: "Qualified barrister" (Квалифицированный барристер)\n- Право: "Consult a barrister" (Проконсультироваться с адвокатом)',
    [
      { en: 'The barrister stood up to address the judge.', ru: 'Барристер встал, чтобы обратиться к судье.' },
      { en: 'She trained for many years to become a barrister.', ru: 'Она училась много лет, чтобы стать барристером.' },
      { en: 'A solicitor prepares the case, and a barrister argues it.', ru: 'Солиситор готовит дело, а барристер выступает в суде.' },
      { en: 'The barrister cross-examined the witness.', ru: 'Адвокат подверг свидетеля перекрестному допросу.' }
    ]
),

createRichWord('c2_basilica', 'Basilica', '/bəˈzɪlɪkə/', 'бэзиликэ', 'Базилика', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Большая и важная церковь или древнеримское общественное здание.',
    '- Архитектура: "Roman basilica" (Римская базилика)\n- Религия: "St. Peter\'s Basilica" (Собор Святого Петра)\n- Здание: "Ancient basilica" (Древняя базилика)',
    [
      { en: 'We visited St. Mark\'s Basilica in Venice.', ru: 'Мы посетили собор Святого Марка в Венеции.' },
      { en: 'The basilica has a magnificent dome.', ru: 'У базилики великолепный купол.' },
      { en: 'Originally, a basilica was a Roman court of law.', ru: 'Изначально базилика была римским судом.' },
      { en: 'Pilgrims flocked to the holy basilica.', ru: 'Паломники стекались к святой базилике.' }
    ]
),

createRichWord('c2_bastion', 'Bastion', '/ˈbæstiən/', 'бэстиэн', 'Оплот / Бастион', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Часть укрепления; или (перен.) организация/место, защищающее определенные принципы.',
    '- Защита: "Last bastion" (Последний оплот)\n- Идея: "Bastion of democracy" (Оплот демократии)\n- Крепость: "Stone bastion" (Каменный бастион)',
    [
      { en: 'The university is seen as a bastion of intellectual freedom.', ru: 'Университет рассматривается как оплот интеллектуальной свободы.' },
      { en: 'This club is one of the last bastions of male privilege.', ru: 'Этот клуб — один из последних оплотов мужских привилегий.' },
      { en: 'The soldiers defended the bastion against the attack.', ru: 'Солдаты защищали бастион от атаки.' },
      { en: 'It remains a bastion of traditional values.', ru: 'Это остается оплотом традиционных ценностей.' }
    ]
),

createRichWord('c2_bedrock', 'Bedrock', '/ˈbedrɒk/', 'бэдрок', 'Коренная порода / Основа', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Твердая горная порода под почвой; или фундаментальная основа чего-либо.',
    '- Геология: "Hit bedrock" (Достичь скальной породы / Дна)\n- Принцип: "Bedrock of society" (Основа общества)\n- Фундамент: "Solid bedrock" (Твердая основа)',
    [
      { en: 'Honesty is the bedrock of any good relationship.', ru: 'Честность — это основа любых хороших отношений.' },
      { en: 'The builders had to drill down to the bedrock.', ru: 'Строителям пришлось бурить до коренной породы.' },
      { en: 'Manufacturing was once the bedrock of the economy.', ru: 'Производство когда-то было основой экономики.' },
      { en: 'We need to get back to the bedrock principles.', ru: 'Нам нужно вернуться к фундаментальным принципам.' }
    ]
),

createRichWord('c2_befall', 'Befall', '/bɪˈfɔːl/', 'бифол', 'Случаться / Приключаться', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Происходить (обычно о чем-то плохом).',
    '- Судьба: "Whatever befalls" (Чтобы ни случилось)\n- Беда: "Tragedy befell them" (Трагедия постигла их)\n- Событие: "Evil befall" (Зло приключится)',
    [
      { en: 'A terrible tragedy befell the family last year.', ru: 'Ужасная трагедия постигла семью в прошлом году.' },
      { en: 'We must be ready for whatever misfortune may befall us.', ru: 'Мы должны быть готовы к любой беде, которая может с нами случиться.' },
      { en: 'He wondered what fate would befall the hero.', ru: 'Он гадал, какая судьба постигнет героя.' },
      { en: 'Should any harm befall him, I will blame you.', ru: 'Если с ним случится что-то плохое, я буду винить тебя.' }
    ]
),

createRichWord('c2_belch', 'Belch', '/beltʃ/', 'бэлч', 'Рыгать / Извергать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Громко выпускать воздух из желудка; или (о трубе/вулкане) выпускать дым/огонь.',
    '- Тело: "Loud belch" (Громкая отрыжка)\n- Завод: "Belch smoke" (Извергать дым)\n- Вулкан: "Belch fire" (Извергать огонь)',
    [
      { en: 'The factory chimneys belch smoke into the sky.', ru: 'Заводские трубы извергают дым в небо.' },
      { en: 'He ate too fast and let out a loud belch.', ru: 'Он ел слишком быстро и громко рыгнул.' },
      { en: 'The volcano belched ash and lava.', ru: 'Вулкан извергал пепел и лаву.' },
      { en: 'It is considered rude to belch at the table.', ru: 'Считается невежливым рыгать за столом.' }
    ]
),

createRichWord('c2_bequeath', 'Bequeath', '/bɪˈkwiːð/', 'биквиз', 'Завещать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Оставить имущество кому-либо после смерти; или передать знания/традиции.',
    '- Наследство: "Bequeath a fortune" (Завещать состояние)\n- Знания: "Bequeath knowledge" (Передать знания)\n- Имущество: "Bequeath to children" (Завещать детям)',
    [
      { en: 'He bequeathed his entire collection to the museum.', ru: 'Он завещал всю свою коллекцию музею.' },
      { en: 'She bequeathed her ring to her granddaughter.', ru: 'Она завещала свое кольцо внучке.' },
      { en: 'Previous generations have bequeathed us a rich culture.', ru: 'Предыдущие поколения завещали нам богатую культуру.' },
      { en: 'I hereby bequeath all my worldly goods to my wife.', ru: 'Сим я завещаю все свое имущество жене.' }
    ]
),

createRichWord('c2_bequest', 'Bequest', '/bɪˈkwest/', 'биквест', 'Наследство / Завещанный дар', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Имущество или деньги, оставленные кому-то по завещанию.',
    '- Деньги: "Leave a bequest" (Оставить наследство)\n- Благотворительность: "Generous bequest" (Щедрое пожертвование по завещанию)\n- Получение: "Receive a bequest" (Получить наследство)',
    [
      { en: 'The university received a generous bequest from a former student.', ru: 'Университет получил щедрое наследство от бывшего студента.' },
      { en: 'Her will included several small bequests to friends.', ru: 'Ее завещание включало несколько небольших даров друзьям.' },
      { en: 'The library was founded by a bequest.', ru: 'Библиотека была основана на средства, оставленные по завещанию.' },
      { en: 'He made a bequest of 5000 dollars to the charity.', ru: 'Он завещал 5000 долларов благотворительной организации.' }
    ]
),

createRichWord('c2_beret', 'Beret', '/ˈbereɪ/', 'берей', 'Берет', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Мягкая круглая плоская шапка.',
    '- Одежда: "Wear a beret" (Носить берет)\n- Армия: "Green Beret" (Зеленый берет - спецназ)\n- Стиль: "French beret" (Французский берет)',
    [
      { en: 'She looked stylish in her red beret.', ru: 'Она выглядела стильно в своем красном берете.' },
      { en: 'Soldiers in the regiment wear a blue beret.', ru: 'Солдаты этого полка носят голубые береты.' },
      { en: 'The artist wore a black beret and a scarf.', ru: 'Художник носил черный берет и шарф.' },
      { en: 'He tilted his beret to the side.', ru: 'Он сдвинул берет набок.' }
    ]
),

createRichWord('c2_blare', 'Blare', '/bleə/', 'блеэ', 'Греметь / Реветь (о звуке)', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Издавать громкий, неприятный звук (обычно о музыке или сиренах).',
    '- Звук: "Music blaring" (Музыка гремит)\n- Сирена: "Sirens blare" (Сирены ревут)\n- Радио: "Radio blaring" (Радио орет)',
    [
      { en: 'Music was blaring from the neighbor\'s house.', ru: 'Из соседского дома гремела музыка.' },
      { en: 'Suddenly, car horns began to blare.', ru: 'Внезапно начали реветь автомобильные гудки.' },
      { en: 'The television blared out the latest news.', ru: 'Телевизор громко вещал последние новости.' },
      { en: 'Sirens blared as the ambulance rushed by.', ru: 'Сирены ревели, когда скорая проносилась мимо.' }
    ]
),

createRichWord('c2_blemish', 'Blemish', '/ˈblemɪʃ/', 'блемиш', 'Изъян / Пятно', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Маленький след или недостаток, который портит внешний вид; пятно на репутации.',
    '- Кожа: "Skin blemish" (Дефект кожи)\n- Репутация: "Character blemish" (Пятно на репутации)\n- Качество: "Without blemish" (Без изъяна)',
    [
      { en: 'The apple was perfect, without a single blemish.', ru: 'Яблоко было идеальным, без единого изъяна.' },
      { en: 'His record is spotless, not a single blemish.', ru: 'Его досье безупречно, ни единого пятна.' },
      { en: 'She used makeup to hide a small blemish on her cheek.', ru: 'Она использовала макияж, чтобы скрыть небольшое пятнышко на щеке.' },
      { en: 'One mistake can be a blemish on your career.', ru: 'Одна ошибка может стать пятном на вашей карьере.' }
    ]
),

createRichWord('c2_blob', 'Blob', '/blɒb/', 'блоб', 'Капля / Клякса', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Маленькое количество густой жидкости или мягкое бесформенное пятно.',
    '- Форма: "Blob of paint" (Капля краски)\n- Еда: "Blob of cream" (Капля крема)\n- Вид: "Pink blob" (Розовое пятно)',
    [
      { en: 'A blob of ink fell on the paper.', ru: 'Клякса чернил упала на бумагу.' },
      { en: 'From the plane, the cars looked like tiny blobs.', ru: 'С самолета машины выглядели как крошечные пятнышки.' },
      { en: 'She put a blob of jam on her toast.', ru: 'Она положила каплю джема на тост.' },
      { en: 'The creature was just a shapeless blob.', ru: 'Существо было просто бесформенной массой.' }
    ]
),

createRichWord('c2_bluster', 'Bluster', '/ˈblʌstə/', 'бластэ', 'Бушевать / Кичиться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Говорить громко и агрессивно, но с малым эффектом; или (о ветре) сильно дуть.',
    '- Погода: "Wind blusters" (Ветер бушует)\n- Речь: "Bluster and threaten" (Шуметь и угрожать)\n- Сущ.: "All bluster" (Одни пустые слова)',
    [
      { en: 'He likes to bluster, but he is actually quite cowardly.', ru: 'Он любит пошуметь (покичиться), но на самом деле он довольно труслив.' },
      { en: 'The wind blustered around the house all night.', ru: 'Ветер бушевал вокруг дома всю ночь.' },
      { en: 'Don\'t be afraid of his threats; it is all bluster.', ru: 'Не бойся его угроз; это всё пустые слова.' },
      { en: 'She blustered into the room demanding attention.', ru: 'Она ворвалась в комнату, громко требуя внимания.' }
    ]
),

createRichWord('c2_booty', 'Booty', '/ˈbuːti/', 'бути', 'Добыча / Награбленное', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Ценные вещи, украденные на войне или пиратами (также сленг для части тела, но здесь основное значение).',
    '- Пираты: "Pirate booty" (Пиратская добыча)\n- Война: "War booty" (Военные трофеи)\n- Сокровище: "Hidden booty" (Спрятанная добыча)',
    [
      { en: 'The pirates buried their booty on a desert island.', ru: 'Пираты закопали свою добычу на необитаемом острове.' },
      { en: 'Soldiers returned home with bags full of booty.', ru: 'Солдаты вернулись домой с сумками, полными трофеев.' },
      { en: 'The thieves divided the booty among themselves.', ru: 'Воры разделили награбленное между собой.' },
      { en: 'They discovered a chest filled with gold booty.', ru: 'Они обнаружили сундук, наполненный золотой добычей.' }
    ]
),

createRichWord('c2_bough', 'Bough', '/baʊ/', 'бау', 'Сук / Большая ветка', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Большая ветка дерева.',
    '- Дерево: "Pine bough" (Сосновая ветка)\n- Поэзия: "Wind in the boughs" (Ветер в ветвях)\n- Размер: "Heavy bough" (Тяжелый сук)',
    [
      { en: 'The bird sat on a high bough singing.', ru: 'Птица сидела на высоком суку и пела.' },
      { en: 'A heavy bough broke off during the storm.', ru: 'Тяжелый сук отломился во время шторма.' },
      { en: 'They hung a swing from the lowest bough.', ru: 'Они повесили качели на самую нижнюю ветку.' },
      { en: 'Snow weighed down the pine boughs.', ru: 'Снег пригибал сосновые ветви.' }
    ]
),

createRichWord('c2_bourbon', 'Bourbon', '/ˈbʊəbən/', 'бўэбэн', 'Бурбон', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Тип американского виски, сделанного из кукурузы.',
    '- Напиток: "Glass of bourbon" (Стакан бурбона)\n- Происхождение: "Kentucky bourbon" (Бурбон из Кентукки)\n- Вкус: "Aged bourbon" (Выдержанный бурбон)',
    [
      { en: 'He poured himself a glass of bourbon.', ru: 'Он налил себе стакан бурбона.' },
      { en: 'Bourbon is distinct from Scotch whisky.', ru: 'Бурбон отличается от шотландского виски.' },
      { en: 'This bourbon has been aged for ten years.', ru: 'Этот бурбон выдерживался десять лет.' },
      { en: 'Kentucky is famous for its bourbon distilleries.', ru: 'Кентукки славится своими заводами по производству бурбона.' }
    ]
),

createRichWord('c2_braille', 'Braille', '/breɪl/', 'брейл', 'Шрифт Брайля', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Система письма и печати для слепых с использованием выпуклых точек.',
    '- Чтение: "Read Braille" (Читать по Брайлю)\n- Книга: "Braille book" (Книга со шрифтом Брайля)\n- Доступность: "Signs in Braille" (Таблички со шрифтом Брайля)',
    [
      { en: 'The elevator buttons have Braille on them.', ru: 'На кнопках лифта есть шрифт Брайля.' },
      { en: 'She learned to read Braille after losing her sight.', ru: 'Она научилась читать по Брайлю после потери зрения.' },
      { en: 'This menu is available in Braille.', ru: 'Это меню доступно на шрифте Брайля.' },
      { en: 'Louis Braille invented the system in the 19th century.', ru: 'Луи Брайль изобрел эту систему в 19 веке.' }
    ]
),

createRichWord('c2_bran', 'Bran', '/bræn/', 'брэн', 'Отруби', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Внешняя оболочка зерна, отделяемая при производстве белой муки.',
    '- Еда: "Bran flakes" (Хлопья с отрубями)\n- Выпечка: "Bran muffin" (Кекс с отрубями)\n- Здоровье: "Rich in bran" (Богатый отрубями/клетчаткой)',
    [
      { en: 'Bran adds fiber to your diet.', ru: 'Отруби добавляют клетчатку в ваш рацион.' },
      { en: 'I had a bran muffin for breakfast.', ru: 'Я съел кекс с отрубями на завтрак.' },
      { en: 'Oat bran is good for lowering cholesterol.', ru: 'Овсяные отруби полезны для снижения холестерина.' },
      { en: 'They feed bran to the horses.', ru: 'Они кормят лошадей отрубями.' }
    ]
),

createRichWord('c2_brandish', 'Brandish', '/ˈbrændɪʃ/', 'брэндиш', 'Размахивать (оружием)', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Держать и махать чем-то (оружием) угрожающе или в волнении.',
    '- Оружие: "Brandish a sword" (Размахивать мечом)\n- Угроза: "Brandish a gun" (Размахивать пистолетом)\n- Предмет: "Brandish a document" (Трясти документом)',
    [
      { en: 'The robber entered the bank brandishing a shotgun.', ru: 'Грабитель вошел в банк, размахивая дробовиком.' },
      { en: 'She brandished her trophy triumphantly.', ru: 'Она торжествующе размахивала своим трофеем.' },
      { en: 'He was arrested for brandishing a knife in public.', ru: 'Его арестовали за размахивание ножом на публике.' },
      { en: ' protesters were brandishing placards and flags.', ru: 'Протестующие размахивали плакатами и флагами.' }
    ]
),

createRichWord('c2_brat', 'Brat', '/bræt/', 'брэт', 'Невоспитанный ребенок / Отребье', ProficiencyLevel.C2, 'noun', 'Low', 'Informal',
    'Ребенок, который плохо себя ведет (обычно избалованный).',
    '- Ребенок: "Spoiled brat" (Избалованный ребенок)\n- Поведение: "Behave like a brat" (Вести себя как капризный ребенок)\n- Армия: "Army brat" (Ребенок военного - идиома)',
    [
      { en: 'Stop acting like a spoiled brat!', ru: 'Перестань вести себя как избалованный ребенок!' },
      { en: 'The little brat kicked me in the shin.', ru: 'Этот маленький паршивец пнул меня в голень.' },
      { en: 'She called her brother a brat.', ru: 'Она назвала своего брата несносным ребенком.' },
      { en: 'He is an army brat and moved schools often.', ru: 'Он ребенок военного и часто менял школы.' }
    ]
),

createRichWord('c2_bravo', 'Bravo', '/ˌbrɑːˈvəʊ/', 'бравó', 'Браво', ProficiencyLevel.C2, 'interj', 'Low', 'Neutral',
    'Восклицание, используемое для выражения одобрения, особенно после выступления.',
    '- Театр: "Shout bravo" (Кричать браво)\n- Одобрение: "Bravo!" (Браво!)\n- Успех: "Bravo for you" (Молодец)',
    [
      { en: '"Bravo!" shouted the audience at the end of the opera.', ru: '"Браво!" — кричала публика в конце оперы.' },
      { en: 'Bravo on a job well done.', ru: 'Браво за хорошо выполненную работу.' },
      { en: 'The critics said "Bravo" to the new play.', ru: 'Критики сказали "Браво" новой пьесе.' },
      { en: 'He stood up and cried "Bravo!".', ru: 'Он встал и крикнул "Браво!".' }
    ]
),

createRichWord('c2_brazen', 'Brazen', '/ˈbreɪzn/', 'брэйзн', 'Наглый / Бесстыдный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Открытый и без стыда (обычно о чем-то плохом).',
    '- Поведение: "Brazen lie" (Наглая ложь)\n- Человек: "Brazen hussy" (Бесстыдница - устар.)\n- Действие: "Brazen theft" (Наглая кража)',
    [
      { en: 'It was a brazen attempt to cheat the system.', ru: 'Это была наглая попытка обмануть систему.' },
      { en: 'He told a brazen lie to the teacher.', ru: 'Он нагло соврал учителю.' },
      { en: 'The thieves made a brazen daylight robbery.', ru: 'Воры совершили дерзкое ограбление средь бела дня.' },
      { en: 'Her brazen attitude shocked everyone.', ru: 'Ее бесстыдное отношение шокировало всех.' }
    ]
),

createRichWord('c2_breech', 'Breech', '/briːtʃ/', 'брич', 'Казенная часть / Ягодичное предлежание', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Задняя часть пушки; или рождение ребенка ногами вперед.',
    '- Роды: "Breech birth" (Ягодичное предлежание / Роды ногами вперед)\n- Оружие: "Breech loading" (Казенное заряжание)\n- Ребенок: "Breech baby" (Ребенок в тазовом предлежании)',
    [
      { en: 'The baby was a breech birth, so they needed a cesarean.', ru: 'Ребенок был в тазовом предлежании, поэтому потребовалось кесарево сечение.' },
      { en: 'This rifle is loaded from the breech.', ru: 'Эта винтовка заряжается с казенной части.' },
      { en: 'Doctors tried to turn the breech baby before delivery.', ru: 'Врачи пытались повернуть ребенка в тазовом предлежании перед родами.' },
      { en: 'Breech delivery can be complicated.', ru: 'Роды при тазовом предлежании могут быть сложными.' }
    ]
),

createRichWord('c2_brethren', 'Brethren', '/ˈbreðrɪn/', 'брэзрин', 'Братья / Собратья', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Устаревшее или религиозное множественное число от "brother"; члены мужского сообщества.',
    '- Религия: "Dear brethren" (Дорогие братья)\n- Группа: "Brethren of the church" (Братья церкви)\n- Сообщество: "Masonic brethren" (Масонские братья)',
    [
      { en: 'We gathered together, brethren, to pray.', ru: 'Мы собрались вместе, братья, чтобы помолиться.' },
      { en: 'He felt a kinship with his brethren in the monastery.', ru: 'Он чувствовал родство со своими братьями в монастыре.' },
      { en: 'The Plymouth Brethren is a Christian group.', ru: 'Плимутские братья — это христианская группа.' },
      { en: 'He called upon his brethren to fight for freedom.', ru: 'Он призвал своих братьев бороться за свободу.' }
    ]
),

createRichWord('c2_brine', 'Brine', '/braɪn/', 'брайн', 'Рассол / Морская вода', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Вода с большим количеством соли; используется для маринования.',
    '- Еда: "Soak in brine" (Замачивать в рассоле)\n- Вкус: "Salty brine" (Соленый рассол)\n- Море: "The salty brine" (Морская пучина - поэт.)',
    [
      { en: 'Olives are often preserved in brine.', ru: 'Оливки часто консервируют в рассоле.' },
      { en: 'Soak the turkey in brine before roasting.', ru: 'Замочите индейку в рассоле перед запеканием.' },
      { en: 'The smell of the salty brine filled the air.', ru: 'Запах соленой морской воды наполнил воздух.' },
      { en: 'Tuna in brine contains less fat than tuna in oil.', ru: 'Тунец в собственном соку (рассоле) содержит меньше жира, чем тунец в масле.' }
    ]
),

createRichWord('c2_broach', 'Broach', '/brəʊtʃ/', 'броуч', 'Затрагивать (тему) / Открывать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Начать обсуждение сложной темы; или открыть бутылку/бочку.',
    '- Разговор: "Broach the subject" (Затронуть тему)\n- Тема: "Broach the issue" (Поднять вопрос)\n- Напиток: "Broach a cask" (Открыть бочонок)',
    [
      { en: 'I didn\'t know how to broach the subject of money with him.', ru: 'Я не знал, как затронуть тему денег с ним.' },
      { en: 'She finally broached the difficult topic of divorce.', ru: 'Она наконец подняла сложную тему развода.' },
      { en: 'At the party, they broached a cask of fine wine.', ru: 'На вечеринке они откупорили бочонок хорошего вина.' },
      { en: 'He waited for the right moment to broach his plan.', ru: 'Он ждал подходящего момента, чтобы изложить свой план.' }
    ]
),

createRichWord('c2_brooch', 'Brooch', '/brəʊtʃ/', 'броуч', 'Брошь', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Украшение с булавкой, которое прикрепляют к одежде.',
    '- Украшение: "Gold brooch" (Золотая брошь)\n- Одежда: "Wear a brooch" (Носить брошь)\n- Стиль: "Vintage brooch" (Винтажная брошь)',
    [
      { en: 'She wore a diamond brooch on her lapel.', ru: 'Она носила бриллиантовую брошь на лацкане.' },
      { en: 'My grandmother gave me this antique brooch.', ru: 'Моя бабушка подарила мне эту старинную брошь.' },
      { en: 'He pinned the brooch onto her dress.', ru: 'Он приколол брошь к ее платью.' },
      { en: 'The brooch was shaped like a butterfly.', ru: 'Брошь была в форме бабочки.' }
    ]
),

createRichWord('c2_brunt', 'Brunt', '/brʌnt/', 'брант', 'Главный удар / Тяжесть', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Основная сила или удар чего-то неприятного (обычно "bear the brunt").',
    '- Идиома: "Bear the brunt" (Принять главный удар)\n- Атака: "Brunt of the attack" (Основной удар атаки)\n- Шторм: "Brunt of the storm" (Разгар шторма)',
    [
      { en: 'The infantry bore the brunt of the enemy attack.', ru: 'Пехота приняла на себя основной удар атаки врага.' },
      { en: 'Small businesses bore the brunt of the recession.', ru: 'Малый бизнес принял на себя основной удар рецессии.' },
      { en: 'She took the brunt of the criticism for the team\'s failure.', ru: 'Она приняла на себя основную тяжесть критики за провал команды.' },
      { en: 'The coast took the full brunt of the hurricane.', ru: 'Побережье приняло на себя полный удар урагана.' }
    ]
),

createRichWord('c2_burly', 'Burly', '/ˈbɜːli/', 'бёли', 'Крепкий / Дородный', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Большой и сильный (о мужчине).',
    '- Внешность: "Burly man" (Крепкий мужчина)\n- Телосложение: "Burly figure" (Мощная фигура)\n- Охрана: "Burly guard" (Здоровяк-охранник)',
    [
      { en: 'A burly security guard stood at the door.', ru: 'У двери стоял дюжий охранник.' },
      { en: 'He was a burly man with broad shoulders.', ru: 'Он был крепким мужчиной с широкими плечами.' },
      { en: 'The burly rugby players ran onto the field.', ru: 'Мощные регбисты выбежали на поле.' },
      { en: 'Despite his burly appearance, he was very gentle.', ru: 'Несмотря на свою внушительную внешность, он был очень мягким.' }
    ]
),

createRichWord('c2_burr', 'Burr', '/bɜː/', 'бё', 'Колючка / Картавость', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Колючая семенная коробочка, цепляющаяся к одежде; или грубый звук (картавость, жужжание).',
    '- Растение: "Stuck like a burr" (Прилип как репей)\n- Речь: "Scottish burr" (Шотландский акцент/грассирование)\n- Звук: "Low burr" (Тихое жужжание)',
    [
      { en: 'My socks were covered in burrs after the walk.', ru: 'Мои носки были покрыты колючками после прогулки.' },
      { en: 'He spoke with a soft Scottish burr.', ru: 'Он говорил с мягким шотландским грассированием.' },
      { en: 'The machine made a constant low burr.', ru: 'Машина издавала постоянное тихое жужжание.' },
      { en: 'She picked the burrs off the dog\'s coat.', ru: 'Она обирала репьи с шерсти собаки.' }
    ]
),

createRichWord('c2_cackle', 'Cackle', '/ˈkækl/', 'кэкл', 'Гоготать / Хихикать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Издавать громкий, резкий смех (как ведьма или курица).',
    '- Смех: "Witch\'s cackle" (Смех ведьмы)\n- Звук: "Cackling hens" (Кудахчущие куры)\n- Реакция: "Cackle with glee" (Злорадно хихикать)',
    [
      { en: 'The witch gave a loud cackle and flew away.', ru: 'Ведьма громко захохотала и улетела.' },
      { en: 'We could hear the hens cackling in the yard.', ru: 'Мы слышали, как куры кудахчут во дворе.' },
      { en: 'They cackled at his misfortune.', ru: 'Они злорадно хихикали над его неудачей.' },
      { en: 'Her laugh was a sharp, unpleasant cackle.', ru: 'Ее смех был резким, неприятным гоготом.' }
    ]
),

createRichWord('c2_cadmium', 'Cadmium', '/ˈkædmiəm/', 'кэдмиэм', 'Кадмий', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Мягкий голубовато-белый металл, часто используемый в батарейках и красках (токсичен).',
    '- Химия: "Cadmium poisoning" (Отравление кадмием)\n- Искусство: "Cadmium yellow" (Кадмиевый желтый - краска)\n- Батарейки: "Nickel-cadmium" (Никель-кадмиевые)',
    [
      { en: 'Cadmium is a toxic metal found in some batteries.', ru: 'Кадмий — токсичный металл, содержащийся в некоторых батарейках.' },
      { en: 'The artist used cadmium red for the sunset.', ru: 'Художник использовал кадмиевый красный для заката.' },
      { en: 'Exposure to cadmium can damage the kidneys.', ru: 'Воздействие кадмия может повредить почки.' },
      { en: 'They are removing cadmium from consumer products.', ru: 'Они удаляют кадмий из потребительских товаров.' }
    ]
),

createRichWord('c2_calamity', 'Calamity', '/kəˈlæməti/', 'кэлэмэти', 'Бедствие / Катастрофа', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Событие, вызывающее большой ущерб или страдания (катастрофа).',
    '- Событие: "Natural calamity" (Стихийное бедствие)\n- Жизнь: "Personal calamity" (Личная трагедия)\n- Результат: "Lead to calamity" (Привести к катастрофе)',
    [
      { en: 'The earthquake was a terrible calamity for the region.', ru: 'Землетрясение стало ужасным бедствием для региона.' },
      { en: 'He described the loss of his job as a calamity.', ru: 'Он описал потерю работы как катастрофу.' },
      { en: 'It would be a calamity if we missed the flight.', ru: 'Было бы катастрофой, если бы мы опоздали на рейс.' },
      { en: 'War brings calamity to everyone involved.', ru: 'Война приносит бедствия всем участникам.' }
    ]
),

createRichWord('c2_calculus', 'Calculus', '/ˈkælkjələs/', 'кэлкилэс', 'Математический анализ / Исчисление', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Раздел математики, изучающий изменения (дифференциальное и интегральное исчисление); или зубной камень.',
    '- Математика: "Study calculus" (Изучать матанализ)\n- Медицина: "Dental calculus" (Зубной камень)\n- Наука: "Differential calculus" (Дифференциальное исчисление)',
    [
      { en: 'Calculus is essential for engineering students.', ru: 'Математический анализ необходим студентам-инженерам.' },
      { en: 'Newton and Leibniz are credited with inventing calculus.', ru: 'Ньютону и Лейбницу приписывают изобретение матанализа.' },
      { en: 'The dentist removed the calculus from my teeth.', ru: 'Стоматолог удалил зубной камень с моих зубов.' },
      { en: 'We solved the problem using integral calculus.', ru: 'Мы решили задачу, используя интегральное исчисление.' }
    ]
),

createRichWord('c2_callous', 'Callous', '/ˈkæləs/', 'кэлэс', 'Черствый / Бездушный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Не проявляющий заботы о чувствах или страданиях других; жестокий.',
    '- Характер: "Callous disregard" (Полное пренебрежение)\n- Поступок: "Callous act" (Жестокий поступок)\n- Отношение: "Callous attitude" (Бездушное отношение)',
    [
      { en: 'It was a callous remark to make to a grieving widow.', ru: 'Это было жестокое замечание скорбящей вдове.' },
      { en: 'He showed a callous disregard for the safety of others.', ru: 'Он проявил полное пренебрежение к безопасности других.' },
      { en: 'The killer was described as cold and callous.', ru: 'Убийцу описывали как холодного и бездушного.' },
      { en: 'Her callous behavior shocked her friends.', ru: 'Ее черствое поведение шокировало друзей.' }
    ]
),

createRichWord('c2_canister', 'Canister', '/ˈkænɪstə/', 'кэнистэ', 'Канистра / Контейнер', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Металлический контейнер для хранения сухих продуктов или газа.',
    '- Хранение: "Tea canister" (Чайная банка)\n- Оружие: "Tear gas canister" (Шашка со слезоточивым газом)\n- Продукт: "Canister of film" (Кассета с пленкой)',
    [
      { en: 'She keeps coffee in a metal canister.', ru: 'Она хранит кофе в металлической банке.' },
      { en: 'Police fired tear gas canisters at the crowd.', ru: 'Полиция выпустила шашки со слезоточивым газом в толпу.' },
      { en: 'The canister exploded on impact.', ru: 'Канистра взорвалась при ударе.' },
      { en: 'He bought a canister of camping gas.', ru: 'Он купил баллон (канистру) газа для кемпинга.' }
    ]
),

createRichWord('c2_cannabis', 'Cannabis', '/ˈkænəbɪs/', 'кэнэбис', 'Каннабис / Конопля', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Растение, используемое как наркотик (марихуана) или в медицине.',
    '- Закон: "Possession of cannabis" (Хранение каннабиса)\n- Медицина: "Medical cannabis" (Медицинский каннабис)\n- Растение: "Cannabis sativa" (Конопля посевная)',
    [
      { en: 'Possession of cannabis is illegal in many countries.', ru: 'Хранение каннабиса незаконно во многих странах.' },
      { en: 'Doctors prescribed medical cannabis for her pain.', ru: 'Врачи прописали ей медицинский каннабис от боли.' },
      { en: 'The debate over legalizing cannabis continues.', ru: 'Споры о легализации каннабиса продолжаются.' },
      { en: 'He was arrested for growing cannabis plants.', ru: 'Его арестовали за выращивание растений конопли.' }
    ]
),

createRichWord('c2_canonical', 'Canonical', '/kəˈnɒnɪkl/', 'кэноникл', 'Канонический / Общепринятый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Включенный в список священных книг; или принятый как стандартный/авторитетный.',
    '- Религия: "Canonical texts" (Канонические тексты)\n- Литература: "Canonical works" (Классические произведения)\n- Статус: "Canonical status" (Статус канона)',
    [
      { en: 'These are the canonical books of the Bible.', ru: 'Это канонические книги Библии.' },
      { en: 'Shakespeare\'s plays are considered canonical literature.', ru: 'Пьесы Шекспира считаются канонической литературой.' },
      { en: 'The church established canonical laws centuries ago.', ru: 'Церковь установила канонические законы столетия назад.' },
      { en: 'This version of the story is not considered canonical by fans.', ru: 'Эта версия истории не считается фанатами канонической.' }
    ]
  ),
createRichWord('c2_abet', 'Abet', '/əˈbet/', 'эбет', 'Подстрекать / Пособничать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Помогать или поощрять кого-то сделать что-то неправильное или незаконное (обычно "aid and abet").',
    '- Закон: "Aid and abet" (Пособничать и подстрекать)\n- Преступление: "Abet a crime" (Содействовать преступлению)\n- Действие: "Abet a thief" (Помогать вору)',
    [
      { en: 'He was charged with aiding and abetting the robbery.', ru: 'Ему было предъявлено обвинение в пособничестве и подстрекательстве к ограблению.' },
      { en: 'She refused to abet him in his illegal scheme.', ru: 'Она отказалась пособничать ему в его незаконной схеме.' },
      { en: 'By doing nothing, you abet the injustice.', ru: 'Ничего не делая, вы потворствуете несправедливости.' },
      { en: 'The accountant was accused of abetting fraud.', ru: 'Бухгалтера обвинили в пособничестве мошенничеству.' }
    ]
),

createRichWord('c2_abject', 'Abject', '/ˈæbdʒekt/', 'эбджект', 'Жалкий / Ужасный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Чрезвычайно плохой или унизительный (о бедности, страхе, извинениях).',
    '- Бедность: "Abject poverty" (Нищета)\n- Страх: "Abject terror" (Дикий ужас)\n- Извинение: "Abject apology" (Униженное извинение)',
    [
      { en: 'They lived in abject poverty in a small hut.', ru: 'Они жили в крайней нищете в маленькой хижине.' },
      { en: 'He offered an abject apology for his rude behavior.', ru: 'Он принес униженные извинения за свое грубое поведение.' },
      { en: 'The project was an abject failure from the start.', ru: 'Проект был полным провалом с самого начала.' },
      { en: 'The prisoners were held in abject misery.', ru: 'Заключенные содержались в ужасных мучениях.' }
    ]
),

createRichWord('c2_ablaze', 'Ablaze', '/əˈbleɪz/', 'эблейз', 'Пылающий / В огне', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Горящий сильным огнем; или (перен.) светящийся от сильных эмоций.',
    '- Огонь: "Set ablaze" (Поджечь)\n- Эмоции: "Eyes ablaze" (Глаза горят)\n- Свет: "Ablaze with light" (Сияющий огнями)',
    [
      { en: 'The whole building was ablaze within minutes.', ru: 'Вся здание было охвачено пламенем в считанные минуты.' },
      { en: 'Her eyes were ablaze with anger.', ru: 'Ее глаза горели гневом.' },
      { en: 'The night sky was ablaze with fireworks.', ru: 'Ночное небо сияло от фейерверков.' },
      { en: 'Rioters set the cars ablaze.', ru: 'Мятежники подожгли машины.' }
    ]
),

createRichWord('c2_abode', 'Abode', '/əˈbəʊd/', 'эбоуд', 'Жилище / Обитель', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Место, где кто-то живет (дом); формальное или устаревшее слово.',
    '- Фраза: "Right of abode" (Право на жительство)\n- Описание: "Humble abode" (Скромное жилище)\n- Статус: "No fixed abode" (Без определенного места жительства)',
    [
      { en: 'Welcome to my humble abode.', ru: 'Добро пожаловать в мою скромную обитель.' },
      { en: 'He has no fixed abode and travels constantly.', ru: 'У него нет постоянного места жительства, и он постоянно путешествует.' },
      { en: 'They granted him the right of abode in the UK.', ru: 'Ему предоставили право на проживание в Великобритании.' },
      { en: 'The forest was the abode of many wild animals.', ru: 'Лес был обиталищем многих диких животных.' }
    ]
),

createRichWord('c2_abreast', 'Abreast', '/əˈbrest/', 'эбрест', 'В ряд / В курсе', ProficiencyLevel.C2, 'adv', 'Low', 'Formal',
    'Бок о бок, на одной линии; или быть в курсе последних новостей/событий.',
    '- Движение: "Walk two abreast" (Идти по двое в ряд)\n- Знания: "Keep abreast of" (Быть в курсе)\n- Положение: "Running abreast" (Бегущие рядом)',
    [
      { en: 'The soldiers marched three abreast down the street.', ru: 'Солдаты маршировали по трое в ряд по улице.' },
      { en: 'It is important to keep abreast of the latest scientific developments.', ru: 'Важно быть в курсе последних научных разработок.' },
      { en: 'The cyclists were riding abreast, blocking the road.', ru: 'Велосипедисты ехали рядом, блокируя дорогу.' },
      { en: 'She reads the news daily to stay abreast of current events.', ru: 'Она читает новости ежедневно, чтобы быть в курсе текущих событий.' }
    ]
),

createRichWord('c2_absolve', 'Absolve', '/əbˈzɒlv/', 'эбзолв', 'Освобождать (от ответственности) / Прощать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Официально объявить кого-то невиновным; или (в религии) отпустить грехи.',
    '- Вина: "Absolve from blame" (Освободить от вины)\n- Обязанность: "Absolve from duty" (Освободить от обязанности)\n- Религия: "Absolve sins" (Отпустить грехи)',
    [
      { en: 'The report absolved the pilot of any blame for the crash.', ru: 'Отчет освободил пилота от какой-либо вины за крушение.' },
      { en: 'I cannot absolve you from your promise.', ru: 'Я не могу освободить тебя от твоего обещания.' },
      { en: 'The priest absolved him of his sins.', ru: 'Священник отпустил ему грехи.' },
      { en: 'Evidence was found that absolved the suspect completely.', ru: 'Были найдены улики, которые полностью оправдали подозреваемого.' }
    ]
),

createRichWord('c2_abstention', 'Abstention', '/əbˈstenʃn/', 'эбстеншн', 'Воздержание (при голосовании)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Отказ от голосования "за" или "против"; или воздержание от чего-либо.',
    '- Голосование: "High rate of abstention" (Высокий уровень неявки/воздержания)\n- Политика: "Vote abstention" (Воздержание от голосования)\n- Привычки: "Abstention from alcohol" (Воздержание от алкоголя)',
    [
      { en: 'The motion passed with ten votes for and three abstentions.', ru: 'Предложение прошло с десятью голосами "за" и тремя воздержавшимися.' },
      { en: 'High abstention rates suggest voter apathy.', ru: 'Высокий уровень неявки свидетельствует об апатии избирателей.' },
      { en: 'Total abstention from caffeine helped him sleep better.', ru: 'Полный отказ от кофеина помог ему лучше спать.' },
      { en: 'There was a noticeable abstention among younger voters.', ru: 'Среди молодых избирателей было заметное воздержание от голосования.' }
    ]
),

createRichWord('c2_actuary', 'Actuary', '/ˈæktʃuəri/', 'экчуэри', 'Актуарий', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Специалист по страхованию, занимающийся расчетом рисков и страховых тарифов.',
    '- Работа: "Work as an actuary" (Работать актуарием)\n- Сфера: "Insurance actuary" (Страховой актуарий)\n- Навыки: "Maths for actuary" (Математика для актуария)',
    [
      { en: 'The actuary calculated the risk of the investment.', ru: 'Актуарий рассчитал риск инвестиции.' },
      { en: 'To become an actuary, you need strong mathematical skills.', ru: 'Чтобы стать актуарием, нужны сильные математические навыки.' },
      { en: 'Insurance companies rely on actuaries to set premiums.', ru: 'Страховые компании полагаются на актуариев при установлении страховых взносов.' },
      { en: 'The report was prepared by a qualified actuary.', ru: 'Отчет был подготовлен квалифицированным актуарием.' }
    ]
),

createRichWord('c2_adage', 'Adage', '/ˈædɪdʒ/', 'эдидж', 'Пословица / Изречение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Старое и известное высказывание, выражающее общую истину.',
    '- Фраза: "Old adage" (Старая пословица)\n- Пример: "According to the adage" (Согласно пословице)\n- Истина: "Wise adage" (Мудрое изречение)',
    [
      { en: 'He remembered the old adage: "More haste, less speed".', ru: 'Он вспомнил старую пословицу: "Тише едешь, дальше будешь".' },
      { en: 'There is much truth in the adage that time heals all wounds.', ru: 'В изречении, что время лечит все раны, много правды.' },
      { en: 'The adage proved true once again.', ru: 'Пословица снова оказалась верной.' },
      { en: 'As the adage goes, "better late than never".', ru: 'Как гласит пословица, "лучше поздно, чем никогда".' }
    ]
),

createRichWord('c2_admiralty', 'Admiralty', '/ˈædmərəlti/', 'эдмэрэлти', 'Адмиралтейство', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Государственный департамент, управляющий военно-морским флотом (особенно в Великобритании).',
    '- Закон: "Admiralty law" (Морское право)\n- Место: "Admiralty Arch" (Арка Адмиралтейства)\n- Власть: "Board of Admiralty" (Совет Адмиралтейства)',
    [
      { en: 'The Admiralty issued new orders to the fleet.', ru: 'Адмиралтейство издало новые приказы флоту.' },
      { en: 'Admiralty law governs navigation and shipping.', ru: 'Морское право регулирует навигацию и судоходство.' },
      { en: 'He worked at the Admiralty during the war.', ru: 'Он работал в Адмиралтействе во время войны.' },
      { en: 'The map belongs to the Admiralty collection.', ru: 'Карта принадлежит коллекции Адмиралтейства.' }
    ]
),

createRichWord('c2_aegis', 'Aegis', '/ˈiːdʒɪs/', 'иджис', 'Эгида / Покровительство', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Защита, поддержка или руководство конкретной организации (обычно "under the aegis of").',
    '- Фраза: "Under the aegis of" (Под эгидой)\n- Защита: "Protective aegis" (Защитное покровительство)\n- Организация: "Aegis of the UN" (Эгида ООН)',
    [
      { en: 'The project was set up under the aegis of the university.', ru: 'Проект был создан под эгидой университета.' },
      { en: 'Negotiations were held under the aegis of the United Nations.', ru: 'Переговоры проходили под эгидой Организации Объединенных Наций.' },
      { en: 'The festival operates under the aegis of the local council.', ru: 'Фестиваль проводится под патронажем местного совета.' },
      { en: 'They sought protection under the aegis of the law.', ru: 'Они искали защиты под эгидой закона.' }
    ]
),

createRichWord('c2_aerate', 'Aerate', '/eəˈreɪt/', 'эрейт', 'Проветривать / Насыщать воздухом', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Наполнять газом или воздухом; проветривать почву или воду.',
    '- Почва: "Aerate the soil" (Рыхлить почву)\n- Вода: "Aerate water" (Аэрировать воду)\n- Напиток: "Aerated drink" (Газированный напиток)',
    [
      { en: 'Earthworms help to aerate the soil.', ru: 'Дождевые черви помогают рыхлить (аэрировать) почву.' },
      { en: 'You should aerate the lawn once a year.', ru: 'Вам следует аэрировать газон раз в год.' },
      { en: 'The fountain aerates the pond water for the fish.', ru: 'Фонтан насыщает воду в пруду кислородом для рыб.' },
      { en: 'Whisk the eggs to aerate the mixture.', ru: 'Взбейте яйца, чтобы насытить смесь воздухом.' }
    ]
),

createRichWord('c2_aeronautics', 'Aeronautics', '/ˌeərəˈnɔːtɪks/', 'эрэнотикс', 'Аэронавтика / Авиастроение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Наука или практика строительства и управления самолетами.',
    '- Наука: "Study aeronautics" (Изучать аэронавтику)\n- Индустрия: "Civil aeronautics" (Гражданская авиация)\n- Исследования: "National Aeronautics" (Национальная аэронавтика - NASA)',
    [
      { en: 'He is studying aeronautics at the technical university.', ru: 'Он изучает аэронавтику в техническом университете.' },
      { en: 'Advances in aeronautics have made travel faster.', ru: 'Достижения в аэронавтике сделали путешествия быстрее.' },
      { en: 'The museum has a section dedicated to aeronautics.', ru: 'В музее есть раздел, посвященный аэронавтике.' },
      { en: 'Aeronautics involves the design of aircraft.', ru: 'Аэронавтика включает в себя проектирование самолетов.' }
    ]
),

createRichWord('c2_afoot', 'Afoot', '/əˈfʊt/', 'эфут', 'В процессе / Затевается', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Происходящий или планируемый (обычно о чем-то плохом или важном); "game is afoot".',
    '- Планы: "Plans are afoot" (Планы в разработке)\n- Проблема: "Trouble is afoot" (Беда назревает)\n- Изменения: "Changes are afoot" (Грядут перемены)',
    [
      { en: 'There are plans afoot to close the local library.', ru: 'Существуют планы (затевается) закрыть местную библиотеку.' },
      { en: 'I suspect there is mischief afoot.', ru: 'Я подозреваю, что затевается что-то недоброе.' },
      { en: 'Changes are afoot in the company management.', ru: 'В руководстве компании грядут перемены.' },
      { en: 'The game is afoot!', ru: 'Игра началась!' }
    ]
),

createRichWord('c2_aghast', 'Aghast', '/əˈɡɑːst/', 'эгаст', 'Ошеломленный / В ужасе', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Наполненный ужасом или шоком.',
    '- Реакция: "Stood aghast" (Стоял в ужасе)\n- Лицо: "Looked aghast" (Выглядел ошеломленным)\n- Вид: "Aghast at the sight" (В ужасе от вида)',
    [
      { en: 'She stood aghast at the terrible mess in the room.', ru: 'Она стояла в ужасе от страшного беспорядка в комнате.' },
      { en: 'Critics were aghast at the cost of the project.', ru: 'Критики были ошеломлены стоимостью проекта.' },
      { en: 'He looked aghast when he heard the news.', ru: 'Он выглядел ошеломленным, когда услышал новости.' },
      { en: 'I was aghast to learn of his dishonesty.', ru: 'Я был в ужасе, узнав о его нечестности.' }
    ]
),

createRichWord('c2_agnostic', 'Agnostic', '/æɡˈnɒstɪk/', 'эгностик', 'Агностик', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Человек, который считает, что существование Бога невозможно доказать или опровергнуть.',
    '- Вера: "Remain agnostic" (Оставаться агностиком)\n- Мнение: "Agnostic view" (Агностический взгляд)\n- Технологии: "Platform-agnostic" (Платформенно-независимый)',
    [
      { en: 'He claims to be an agnostic, not an atheist.', ru: 'Он утверждает, что он агностик, а не атеист.' },
      { en: 'Her views on religion are strictly agnostic.', ru: 'Ее взгляды на религию строго агностические.' },
      { en: 'The software is platform-agnostic.', ru: 'Это программное обеспечение не зависит от платформы.' },
      { en: 'Many scientists take an agnostic stance on the supernatural.', ru: 'Многие ученые занимают агностическую позицию в отношении сверхъестественного.' }
    ]
),

createRichWord('c2_airlock', 'Airlock', '/ˈeəlɒk/', 'ээлок', 'Шлюзовая камера / Воздушная пробка', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Герметичная камера для прохода между зонами с разным давлением; или пузырь воздуха в трубе.',
    '- Космос: "Space station airlock" (Шлюз космической станции)\n- Трубы: "Airlock in pipes" (Воздушная пробка в трубах)\n- Вход: "Exit through the airlock" (Выйти через шлюз)',
    [
      { en: 'The astronauts entered the ship through the airlock.', ru: 'Астронавты вошли на корабль через шлюзовую камеру.' },
      { en: 'There is an airlock in the radiator preventing it from heating.', ru: 'В радиаторе воздушная пробка, мешающая ему нагреваться.' },
      { en: 'The laboratory has an airlock to maintain sterility.', ru: 'В лаборатории есть шлюз для поддержания стерильности.' },
      { en: 'Wait for the pressure to equalize in the airlock.', ru: 'Подождите, пока давление в шлюзовой камере выровняется.' }
    ]
),

createRichWord('c2_airwave', 'Airwave', '/ˈeəweɪv/', 'ээвейв', 'Радиоволна / Эфир', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Радиоволны, используемые для вещания (обычно во мн. ч. "airwaves").',
    '- Радио: "Hit the airwaves" (Попасть в эфир)\n- Эфир: "Over the airwaves" (По радио/в эфире)\n- Контроль: "Control the airwaves" (Контролировать эфир)',
    [
      { en: 'The news spread quickly over the airwaves.', ru: 'Новости быстро распространились по радиоволнам (эфиру).' },
      { en: 'The band\'s new song is dominating the airwaves.', ru: 'Новая песня группы доминирует в эфире.' },
      { en: 'Police monitor the airwaves for illegal broadcasts.', ru: 'Полиция мониторит эфир на предмет незаконных трансляций.' },
      { en: 'He took to the airwaves to defend his policy.', ru: 'Он выступил в эфире, чтобы защитить свою политику.' }
    ]
),

createRichWord('c2_ajar', 'Ajar', '/əˈdʒɑː/', 'эджай', 'Приоткрытый', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Слегка открытый (обычно о двери).',
    '- Дверь: "Leave the door ajar" (Оставить дверь приоткрытой)\n- Окно: "Window ajar" (Приоткрытое окно)\n- Состояние: "Standing ajar" (Стоящий приоткрытым)',
    [
      { en: 'I left the door ajar so the cat could come in.', ru: 'Я оставил дверь приоткрытой, чтобы кошка могла войти.' },
      { en: 'The gate was standing ajar.', ru: 'Калитка была приоткрыта.' },
      { en: 'She noticed the safe door was slightly ajar.', ru: 'Она заметила, что дверца сейфа была слегка приоткрыта.' },
      { en: 'Through the ajar window, I heard them talking.', ru: 'Через приоткрытое окно я слышал, как они разговаривают.' }
    ]
),

createRichWord('c2_alder', 'Alder', '/ˈɔːldə/', 'олдэр', 'Ольха', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Дерево семейства березовых, растущее во влажных местах.',
    '- Дерево: "Alder tree" (Ольховое дерево)\n- Древесина: "Alder wood" (Древесина ольхи)\n- Лес: "Grove of alders" (Ольховая роща)',
    [
      { en: 'Alder trees typically grow near rivers and lakes.', ru: 'Ольха обычно растет у рек и озер.' },
      { en: 'The guitar body is made of alder.', ru: 'Корпус гитары сделан из ольхи.' },
      { en: 'Alders help prevent soil erosion on riverbanks.', ru: 'Ольха помогает предотвратить эрозию почвы на берегах рек.' },
      { en: 'We sat under the shade of an old alder.', ru: 'Мы сидели в тени старой ольхи.' }
    ]
),

createRichWord('c2_alderman', 'Alderman', '/ˈɔːldəmən/', 'олдэрмэн', 'Олдермен / Член городского совета', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Член муниципального совета в некоторых странах (исторический или официальный титул).',
    '- Власть: "City alderman" (Городской советник)\n- Титул: "High alderman" (Старший советник)\n- Собрание: "Board of aldermen" (Совет олдерменов)',
    [
      { en: 'He served as an alderman for twenty years.', ru: 'Он служил олдерменом двадцать лет.' },
      { en: 'The alderman proposed a new park for the city.', ru: 'Олдермен предложил создать новый парк для города.' },
      { en: 'This title is less common now than "councilor".', ru: 'Этот титул сейчас менее распространен, чем "советник".' },
      { en: 'The mayor and aldermen voted on the budget.', ru: 'Мэр и олдермены голосовали по бюджету.' }
    ]
),

createRichWord('c2_alias', 'Alias', '/ˈeɪliəs/', 'эйлиэс', 'Псевдоним / Кличка', ProficiencyLevel.C2, 'noun', 'Medium', 'Neutral',
    'Вымышленное имя, используемое для сокрытия личности (или в компьютерах).',
    '- Имя: "Use an alias" (Использовать псевдоним)\n- Преступник: "Known under the alias" (Известный под кличкой)\n- Компьютер: "Email alias" (Псевдоним электронной почты)',
    [
      { en: 'The spy traveled under a false alias.', ru: 'Шпион путешествовал под ложным псевдонимом.' },
      { en: 'He is known by the alias "The Jackal".', ru: 'Он известен под кличкой "Шакал".' },
      { en: 'You can create an alias for your main email address.', ru: 'Вы можете создать псевдоним для своего основного адреса электронной почты.' },
      { en: 'The criminal used several aliases to avoid capture.', ru: 'Преступник использовал несколько псевдонимов, чтобы избежать поимки.' }
    ]
),

createRichWord('c2_altruistic', 'Altruistic', '/ˌæltruˈɪstɪk/', 'элтруистик', 'Альтруистичный', ProficiencyLevel.C2, 'adj', 'Medium', 'Formal',
    'Бескорыстно заботящийся о благополучии других.',
    '- Поведение: "Altruistic act" (Альтруистический поступок)\n- Мотив: "Altruistic motive" (Альтруистический мотив)\n- Характер: "Purely altruistic" (Чисто альтруистичный)',
    [
      { en: 'Her motives for helping were entirely altruistic.', ru: 'Ее мотивы помощи были совершенно альтруистичными.' },
      { en: 'Donating a kidney is an altruistic act.', ru: 'Пожертвование почки — это альтруистический поступок.' },
      { en: 'Are human beings truly altruistic by nature?', ru: 'Являются ли люди по природе истинно альтруистичными?' },
      { en: 'He is driven by altruistic concern for the poor.', ru: 'Им движет альтруистическая забота о бедных.' }
    ]
),

createRichWord('c2_amalgam', 'Amalgam', '/əˈmælɡəm/', 'эмэлгэм', 'Смесь / Сплав (амальгама)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Смесь или комбинация разных вещей; сплав ртути с другим металлом.',
    '- Смесь: "Strange amalgam" (Странная смесь)\n- Стоматология: "Dental amalgam" (Зубная амальгама)\n- Культура: "Amalgam of styles" (Смешение стилей)',
    [
      { en: 'The movie is an amalgam of comedy and horror.', ru: 'Фильм представляет собой смесь комедии и ужасов.' },
      { en: 'Dental fillings used to be made of silver amalgam.', ru: 'Зубные пломбы раньше делали из серебряной амальгамы.' },
      { en: 'Her character is an amalgam of several real people.', ru: 'Ее персонаж — это собирательный образ (смесь) нескольких реальных людей.' },
      { en: 'The city is a fascinating amalgam of old and new.', ru: 'Город представляет собой увлекательное смешение старого и нового.' }
    ]
),

createRichWord('c2_ambulate', 'Ambulate', '/ˈæmbjəleɪt/', 'эмбьюлейт', 'Передвигаться / Ходить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Ходить или двигаться (медицинский или очень формальный термин).',
    '- Медицина: "Able to ambulate" (Способен передвигаться)\n- Пациент: "Ambulate independently" (Ходить самостоятельно)\n- Термин: "Ambulatory care" (Амбулаторное лечение)',
    [
      { en: 'The patient is now able to ambulate with a cane.', ru: 'Пациент теперь может передвигаться с тростью.' },
      { en: 'Early ambulation after surgery helps recovery.', ru: 'Раннее начало ходьбы после операции помогает выздоровлению.' },
      { en: 'He is too weak to ambulate on his own.', ru: 'Он слишком слаб, чтобы передвигаться самостоятельно.' },
      { en: 'The hospital has a special ward for patients who can ambulate.', ru: 'В больнице есть специальное отделение для ходячих пациентов.' }
    ]
),

createRichWord('c2_amphetamine', 'Amphetamine', '/æmˈfetəmiːn/', 'эмфетэмин', 'Амфетамин', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Синтетический наркотик, стимулирующий центральную нервную систему.',
    '- Наркотик: "Amphetamine use" (Употребление амфетамина)\n- Медицина: "Prescribed amphetamine" (Прописанный амфетамин)\n- Зависимость: "Amphetamine addiction" (Амфетаминовая зависимость)',
    [
      { en: 'Amphetamines are sometimes used to treat ADHD.', ru: 'Амфетамины иногда используются для лечения СДВГ.' },
      { en: 'He was arrested for possession of amphetamines.', ru: 'Его арестовали за хранение амфетаминов.' },
      { en: 'The abuse of amphetamine can lead to severe health problems.', ru: 'Злоупотребление амфетамином может привести к серьезным проблемам со здоровьем.' },
      { en: 'This drug is a powerful amphetamine derivative.', ru: 'Этот препарат является мощным производным амфетамина.' }
    ]
),

createRichWord('c2_anaerobic', 'Anaerobic', '/ˌænəˈrəʊbɪk/', 'энэроубик', 'Анаэробный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к процессам или организмам, не требующим кислорода.',
    '- Спорт: "Anaerobic exercise" (Анаэробные упражнения)\n- Биология: "Anaerobic bacteria" (Анаэробные бактерии)\n- Процесс: "Anaerobic respiration" (Анаэробное дыхание)',
    [
      { en: 'Sprinting is an example of anaerobic exercise.', ru: 'Спринт — это пример анаэробного упражнения.' },
      { en: 'Anaerobic bacteria can survive without oxygen.', ru: 'Анаэробные бактерии могут выживать без кислорода.' },
      { en: 'The digestion process in the stomach is largely anaerobic.', ru: 'Процесс пищеварения в желудке во многом анаэробный.' },
      { en: 'Anaerobic training helps build muscle strength.', ru: 'Анаэробная тренировка помогает нарастить мышечную силу.' }
    ]
),

createRichWord('c2_anathema', 'Anathema', '/əˈnæθəmə/', 'энэсэмэ', 'Проклятие / Нечто ненавистное', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Что-то или кто-то, кого сильно ненавидят; или церковное проклятие.',
    '- Отношение: "Is anathema to me" (Категорически неприемлемо для меня)\n- Религия: "Pronounce anathema" (Предать анафеме)\n- Идея: "Total anathema" (Полное отвращение)',
    [
      { en: 'The idea of higher taxes is anathema to most voters.', ru: 'Идея повышения налогов ненавистна большинству избирателей.' },
      { en: 'Racism is anathema to a civilized society.', ru: 'Расизм неприемлем для цивилизованного общества.' },
      { en: 'He was declared anathema by the church.', ru: 'Он был предан анафеме церковью.' },
      { en: 'Eating meat was anathema to her strict vegan principles.', ru: 'Употребление мяса было категорически неприемлемо для ее строгих веганских принципов.' }
    ]
),

createRichWord('c2_anemone', 'Anemone', '/əˈneməni/', 'энэмэни', 'Анемон / Ветреница', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Растение с яркими цветами; или морское животное (актиния).',
    '- Море: "Sea anemone" (Морской анемон / Актиния)\n- Цветок: "Wood anemone" (Ветреница дубравная)\n- Сад: "Red anemone" (Красный анемон)',
    [
      { en: 'Clownfish live safely among the tentacles of the sea anemone.', ru: 'Рыбы-клоуны живут в безопасности среди щупалец морского анемона.' },
      { en: 'The woods were carpeted with white anemones.', ru: 'Лес был устлан ковром из белых ветрениц.' },
      { en: 'Sea anemones look like plants but are actually animals.', ru: 'Морские анемоны похожи на растения, но на самом деле являются животными.' },
      { en: 'She planted anemones in her spring garden.', ru: 'Она посадила анемоны в своем весеннем саду.' }
    ]
),

createRichWord('c2_angst', 'Angst', '/æŋst/', 'энгст', 'Тоска / Тревога', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Чувство глубокой тревоги или страха, часто о состоянии мира или жизни (экзистенциальная тоска).',
    '- Подростки: "Teenage angst" (Подростковая тоска/бунт)\n- Чувство: "Existential angst" (Экзистенциальная тревога)\n- Искусство: "Full of angst" (Полный тоски)',
    [
      { en: 'His poetry is full of teenage angst and rebellion.', ru: 'Его поэзия полна подростковой тоски и бунта.' },
      { en: 'She felt a sudden pang of angst about the future.', ru: 'Она почувствовала внезапный приступ тревоги о будущем.' },
      { en: 'The novel explores the angst of modern life.', ru: 'Роман исследует тревоги современной жизни.' },
      { en: 'Much of his art is driven by personal angst.', ru: 'Большая часть его искусства движима личными переживаниями.' }
    ]
),

createRichWord('c2_antagonise', 'Antagonise', '/ænˈtæɡənaɪz/', 'энтэгэнайз', 'Настраивать против / Раздражать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Вызывать у кого-то враждебность или гнев (US spelling: Antagonize).',
    '- Отношения: "Antagonise people" (Настраивать людей против себя)\n- Действие: "Don\'t antagonise him" (Не зли его)\n- Политика: "Antagonise voters" (Раздражать избирателей)',
    [
      { en: 'Be careful not to antagonise the boss today.', ru: 'Будь осторожен, не зли начальника сегодня.' },
      { en: 'His aggressive behavior antagonised everyone in the room.', ru: 'Его агрессивное поведение настроило всех в комнате против него.' },
      { en: 'The policy has antagonised many former supporters.', ru: 'Эта политика оттолкнула многих бывших сторонников.' },
      { en: 'Why do you deliberately antagonise her?', ru: 'Зачем ты намеренно ее провоцируешь?' }
    ]
),

createRichWord('c2_antipathy', 'Antipathy', '/ænˈtɪpəθi/', 'энтипэси', 'Неприязнь / Антипатия', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Глубокое чувство неприязни или враждебности.',
    '- Чувство: "Deep antipathy" (Глубокая неприязнь)\n- Отношения: "Mutual antipathy" (Взаимная неприязнь)\n- Объект: "Antipathy towards" (Неприязнь к)',
    [
      { en: 'There is a long-standing antipathy between the two groups.', ru: 'Между двумя группами существует давняя неприязнь.' },
      { en: 'He made no secret of his antipathy towards the media.', ru: 'Он не скрывал своей неприязни к СМИ.' },
      { en: 'Her antipathy for him was obvious to everyone.', ru: 'Ее антипатия к нему была очевидна всем.' },
      { en: 'Despite their antipathy, they managed to work together.', ru: 'Несмотря на неприязнь, им удалось поработать вместе.' }
    ]
),

createRichWord('c2_antiquarian', 'Antiquarian', '/ˌæntɪˈkweəriən/', 'энтиквээриэн', 'Антикварный / Антиквар', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к старинным и редким книгам или предметам (прил.); торговец или коллекционер древностей (сущ.).',
    '- Книги: "Antiquarian bookseller" (Букинист антикварных книг)\n- Интерес: "Antiquarian interest" (Антикварный интерес)\n- Человек: "A noted antiquarian" (Известный антиквар)',
    [
      { en: 'He is an antiquarian book dealer in London.', ru: 'Он торговец антикварными книгами в Лондоне.' },
      { en: 'The library has an impressive antiquarian collection.', ru: 'В библиотеке есть впечатляющая антикварная коллекция.' },
      { en: 'She has an antiquarian interest in local history.', ru: 'У нее антикварный интерес к местной истории.' },
      { en: 'The old map was valued by an antiquarian.', ru: 'Старая карта была оценена антикваром.' }
    ]
),

createRichWord('c2_antiquated', 'Antiquated', '/ˈæntɪkweɪtɪd/', 'энтиквейтид', 'Устаревший / Древний', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Старомодный и больше не пригодный для современного использования.',
    '- Система: "Antiquated system" (Устаревшая система)\n- Оборудование: "Antiquated machinery" (Устаревшее оборудование)\n- Взгляды: "Antiquated ideas" (Устаревшие идеи)',
    [
      { en: 'The hospital is full of antiquated equipment.', ru: 'Больница полна устаревшего оборудования.' },
      { en: 'He holds some antiquated views on women\'s rights.', ru: 'У него устаревшие взгляды на права женщин.' },
      { en: 'This law is antiquated and needs to be changed.', ru: 'Этот закон устарел и требует изменений.' },
      { en: 'We are trying to update our antiquated computer system.', ru: 'Мы пытаемся обновить нашу устаревшую компьютерную систему.' }
    ]
),

createRichWord('c2_antiseptic', 'Antiseptic', '/ˌæntiˈseptɪk/', 'энтисептик', 'Антисептик / Стерильный', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Вещество, убивающее бактерии (сущ.); очень чистый или безэмоциональный (прил.).',
    '- Медицина: "Apply antiseptic" (Нанести антисептик)\n- Чистота: "Antiseptic smell" (Запах антисептика/больницы)\n- Стиль: "Antiseptic atmosphere" (Стерильная атмосфера)',
    [
      { en: 'Put some antiseptic on that cut to prevent infection.', ru: 'Нанеси немного антисептика на порез, чтобы предотвратить инфекцию.' },
      { en: 'The room was white, cold, and antiseptic.', ru: 'Комната была белой, холодной и стерильной.' },
      { en: 'She wiped the surface with an antiseptic cloth.', ru: 'Она протерла поверхность антисептической салфеткой.' },
      { en: 'His writing style is precise but rather antiseptic.', ru: 'Его стиль письма точен, но довольно сух (безэмоционален).' }
    ]
),

createRichWord('c2_aphid', 'Aphid', '/ˈeɪfɪd/', 'эйфид', 'Тля', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Мелкое насекомое, питающееся соком растений (зеленая тля).',
    '- Сад: "Infested with aphids" (Заражен тлей)\n- Контроль: "Kill aphids" (Уничтожать тлю)\n- Природа: "Aphids on roses" (Тля на розах)',
    [
      { en: 'Ladybugs love to eat aphids.', ru: 'Божьи коровки любят есть тлю.' },
      { en: 'The roses are covered in green aphids.', ru: 'Розы покрыты зеленой тлей.' },
      { en: 'Farmers use sprays to control aphids on crops.', ru: 'Фермеры используют спреи для борьбы с тлей на посевах.' },
      { en: 'Aphids can cause significant damage to plants.', ru: 'Тля может нанести значительный ущерб растениям.' }
    ]
),

createRichWord('c2_apportion', 'Apportion', '/əˈpɔːʃn/', 'эпошн', 'Распределять / Пропорционально делить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Разделить и распределить что-то (вину, ресурсы) между людьми.',
    '- Вина: "Apportion blame" (Распределять вину)\n- Ресурсы: "Apportion costs" (Распределять расходы)\n- Время: "Apportion time" (Распределять время)',
    [
      { en: 'It is difficult to apportion blame in this complex situation.', ru: 'Трудно распределить вину в этой сложной ситуации.' },
      { en: 'The court will apportion the estate among the heirs.', ru: 'Суд распределит имущество между наследниками.' },
      { en: 'Costs were apportioned based on usage.', ru: 'Расходы были распределены в зависимости от использования.' },
      { en: 'We need to apportion our time wisely.', ru: 'Нам нужно мудро распределить наше время.' }
    ]
),

createRichWord('c2_arbitrage', 'Arbitrage', '/ˈɑːbɪtrɑːʒ/', 'абитраж', 'Арбитраж (финансы)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Покупка товара на одном рынке и одновременная продажа на другом для получения прибыли от разницы цен.',
    '- Финансы: "Arbitrage opportunity" (Возможность арбитража)\n- Трейдинг: "Currency arbitrage" (Валютный арбитраж)\n- Прибыль: "Make profit from arbitrage" (Получить прибыль от арбитража)',
    [
      { en: 'Traders make money through currency arbitrage.', ru: 'Трейдеры зарабатывают деньги с помощью валютного арбитража.' },
      { en: 'Price differences create opportunities for arbitrage.', ru: 'Разница в ценах создает возможности для арбитража.' },
      { en: 'Arbitrage helps to keep prices consistent across markets.', ru: 'Арбитраж помогает поддерживать постоянство цен на рынках.' },
      { en: 'He is an expert in international arbitrage.', ru: 'Он эксперт в международном арбитраже.' }
    ]
),

createRichWord('c2_arcane', 'Arcane', '/ɑːˈkeɪn/', 'акейн', 'Тайный / Загадочный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Понятный лишь немногим; секретный или таинственный.',
    '- Знание: "Arcane knowledge" (Тайное знание)\n- Правила: "Arcane rules" (Загадочные правила)\n- Ритуал: "Arcane ritual" (Тайный ритуал)',
    [
      { en: 'He enjoys studying the arcane details of tax law.', ru: 'Ему нравится изучать загадочные детали налогового законодательства.' },
      { en: 'The manuscript was full of arcane symbols.', ru: 'Рукопись была полна тайных символов.' },
      { en: 'This game has some very arcane rules.', ru: 'У этой игры есть несколько очень непонятных (тайных) правил.' },
      { en: 'She is an expert in arcane ancient languages.', ru: 'Она эксперт в загадочных древних языках.' }
    ]
),

createRichWord('c2_archipelago', 'Archipelago', '/ˌɑːkɪˈpeləɡəʊ/', 'акипелэгоу', 'Архипелаг', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Группа островов.',
    '- География: "Indonesian archipelago" (Индонезийский архипелаг)\n- Путешествие: "Explore the archipelago" (Исследовать архипелаг)\n- Острова: "Chain of islands" (Цепь островов)',
    [
      { en: 'The Philippines is an archipelago of over 7,000 islands.', ru: 'Филиппины — это архипелаг из более чем 7000 островов.' },
      { en: 'They sailed around the Greek archipelago.', ru: 'Они плавали вокруг греческого архипелага.' },
      { en: 'The archipelago is famous for its biodiversity.', ru: 'Архипелаг славится своим биоразнообразием.' },
      { en: 'Volcanic activity formed this archipelago.', ru: 'Вулканическая активность сформировала этот архипелаг.' }
    ]
),

createRichWord('c2_armoury', 'Armoury', '/ˈɑːməri/', 'амэри', 'Арсенал / Оружейная', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Место, где хранится оружие; или запас оружия (перен. ресурсов).',
    '- Оружие: "Stocked armoury" (Заполненный арсенал)\n- Переносно: "Armoury of skills" (Арсенал навыков)\n- Здание: "Visit the armoury" (Посетить оружейную)',
    [
      { en: 'The rebels seized the police armoury.', ru: 'Повстанцы захватили полицейский арсенал.' },
      { en: 'He has a whole armoury of jokes to tell.', ru: 'У него есть целый арсенал шуток.' },
      { en: 'The castle\'s armoury contains medieval swords.', ru: 'В оружейной замка хранятся средневековые мечи.' },
      { en: 'Diplomacy is just one weapon in their armoury.', ru: 'Дипломатия — лишь одно из оружий в их арсенале.' }
    ]
),

createRichWord('c2_aromatherapy', 'Aromatherapy', '/əˌrəʊməˈθerəpi/', 'эроумэсэрэпи', 'Ароматерапия', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Использование ароматических масел растений для лечения или расслабления.',
    '- Лечение: "Aromatherapy massage" (Ароматерапевтический массаж)\n- Масла: "Essential oils" (Эфирные масла)\n- Релакс: "Benefits of aromatherapy" (Польза ароматерапии)',
    [
      { en: 'She uses aromatherapy to help her sleep.', ru: 'Она использует ароматерапию, чтобы лучше спать.' },
      { en: 'Lavender oil is popular in aromatherapy for relaxation.', ru: 'Масло лаванды популярно в ароматерапии для расслабления.' },
      { en: 'The spa offers aromatherapy treatments.', ru: 'Спа предлагает процедуры ароматерапии.' },
      { en: 'Do you believe in the healing power of aromatherapy?', ru: 'Вы верите в целебную силу ароматерапии?' }
    ]
),

createRichWord('c2_artifice', 'Artifice', '/ˈɑːtɪfɪs/', 'атифис', 'Хитрость / Искусность', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Умный или хитрый прием, используемый для обмана; или мастерство.',
    '- Обман: "Without artifice" (Без хитрости / Естественно)\n- Уловка: "Cunning artifice" (Коварная уловка)\n- Мастерство: "Political artifice" (Политическая хитрость)',
    [
      { en: 'She acted with genuine warmth and without artifice.', ru: 'Она вела себя с искренней теплотой и без притворства.' },
      { en: 'The movie relies too much on digital artifice.', ru: 'Фильм слишком полагается на цифровые уловки (спецэффекты).' },
      { en: 'He used every artifice to win the election.', ru: 'Он использовал все хитрости, чтобы выиграть выборы.' },
      { en: 'It was a device of great artifice and complexity.', ru: 'Это было устройство великой искусности и сложности.' }
    ]
),

createRichWord('c2_ascetic', 'Ascetic', '/əˈsetɪk/', 'эсетик', 'Аскет / Аскетичный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Ведущий строгий образ жизни без удовольствий и роскоши (часто по религиозным причинам).',
    '- Жизнь: "Ascetic life" (Аскетичная жизнь)\n- Человек: "Live as an ascetic" (Жить как аскет)\n- Вид: "Ascetic appearance" (Аскетичный вид)',
    [
      { en: 'The monk lived a simple, ascetic life in the mountains.', ru: 'Монах вел простую, аскетичную жизнь в горах.' },
      { en: 'He has very ascetic tastes and avoids luxury.', ru: 'У него очень аскетичные вкусы, и он избегает роскоши.' },
      { en: 'The room was furnished in an ascetic style.', ru: 'Комната была обставлена в аскетичном стиле.' },
      { en: 'Ascetics deny themselves physical comforts.', ru: 'Аскеты отказывают себе в физическом комфорте.' }
    ]
),

createRichWord('c2_assiduous', 'Assiduous', '/əˈsɪdjuəs/', 'эсидьюэс', 'Усердный / Прилежный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Проявляющий большое старание и внимание к деталям.',
    '- Работа: "Assiduous student" (Прилежный студент)\n- Внимание: "Assiduous attention" (Усердное внимание)\n- Исследование: "Assiduous research" (Тщательное исследование)',
    [
      { en: 'He was an assiduous student who never missed a class.', ru: 'Он был прилежным студентом, который никогда не пропускал занятия.' },
      { en: 'The project required assiduous planning.', ru: 'Проект требовал усердного планирования.' },
      { en: 'She nursed him with assiduous care.', ru: 'Она ухаживала за ним с неустанной заботой.' },
      { en: 'Through assiduous effort, she mastered the language.', ru: 'Благодаря усердным усилиям она овладела языком.' }
    ]
),

createRichWord('c2_assuage', 'Assuage', '/əˈsweɪdʒ/', 'эсвэйдж', 'Утолять / Успокаивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сделать неприятное чувство (страх, боль, голод) менее сильным.',
    '- Чувство: "Assuage guilt" (Заглушить чувство вины)\n- Голод: "Assuage hunger" (Утолить голод)\n- Страх: "Assuage fears" (Успокоить страхи)',
    [
      { en: 'He tried to assuage his guilt by donating money.', ru: 'Он пытался заглушить свое чувство вины, жертвуя деньги.' },
      { en: 'Nothing could assuage her grief.', ru: 'Ничто не могло унять ее горе.' },
      { en: 'The government acted to assuage public fears.', ru: 'Правительство приняло меры, чтобы успокоить страхи общественности.' },
      { en: 'A drink of water assuaged his thirst.', ru: 'Глоток воды утолил его жажду.' }
    ]
),

createRichWord('c2_astray', 'Astray', '/əˈstreɪ/', 'эстрей', 'Сбившийся с пути / Заблудший', ProficiencyLevel.C2, 'adv', 'Low', 'Neutral',
    'В сторону от правильного пути или направления (обычно "go astray" или "lead astray").',
    '- Ошибка: "Go astray" (Сбиться с пути / Потеряться)\n- Влияние: "Lead astray" (Сбить с пути истинного)\n- Письмо: "Letter went astray" (Письмо затерялось)',
    [
      { en: 'My letter must have gone astray in the post.', ru: 'Мое письмо, должно быть, затерялось на почте.' },
      { en: 'Bad friends led him astray.', ru: 'Плохие друзья сбили его с пути истинного.' },
      { en: 'We went astray in the dense forest.', ru: 'Мы заблудились в густом лесу.' },
      { en: 'Check your calculations to see where you went astray.', ru: 'Проверь свои расчеты, чтобы увидеть, где ты ошибся.' }
    ]
),

createRichWord('c2_astride', 'Astride', '/əˈstraɪd/', 'эстрайд', 'Верхом / По обе стороны', ProficiencyLevel.C2, 'prep', 'Low', 'Formal',
    'С ногой на каждой стороне чего-то; или охватывая обе стороны.',
    '- Поза: "Sit astride" (Сидеть верхом)\n- Лошадь: "Astride a horse" (Верхом на лошади)\n- Место: "Astride the river" (По обе стороны реки)',
    [
      { en: 'He sat astride the motorbike.', ru: 'Он сидел верхом на мотоцикле.' },
      { en: 'The town lies astride the river.', ru: 'Город расположен по обе стороны реки.' },
      { en: 'She stood astride the path, blocking the way.', ru: 'Она стояла поперек тропы (расставив ноги), преграждая путь.' },
      { en: 'He posed for the photo astride a chair.', ru: 'Он позировал для фото, сидя верхом на стуле.' }
    ]
),

createRichWord('c2_astrophysics', 'Astrophysics', '/ˌæstrəʊˈfɪzɪks/', 'эстроуфизикс', 'Астрофизика', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Раздел астрономии, изучающий физическую природу звезд и небесных тел.',
    '- Наука: "Study astrophysics" (Изучать астрофизику)\n- Ученый: "Astrophysicist" (Астрофизик)\n- Теория: "Laws of astrophysics" (Законы астрофизики)',
    [
      { en: 'Stephen Hawking was a famous expert in astrophysics.', ru: 'Стивен Хокинг был известным экспертом в астрофизике.' },
      { en: 'Astrophysics helps us understand how stars are born.', ru: 'Астрофизика помогает нам понять, как рождаются звезды.' },
      { en: 'She has a PhD in astrophysics.', ru: 'У нее докторская степень по астрофизике.' },
      { en: 'The lecture covered complex topics in astrophysics.', ru: 'Лекция охватывала сложные темы астрофизики.' }
    ]
),

createRichWord('c2_atrophy', 'Atrophy', '/ˈætrəfi/', 'этрэфи', 'Атрофия / Атрофироваться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Истощаться или уменьшаться (обычно о мышцах) из-за неиспользования; (перен.) ослабевать.',
    '- Тело: "Muscles atrophy" (Мышцы атрофируются)\n- Навык: "Skills atrophy" (Навыки утрачиваются)\n- Причина: "Atrophy from disuse" (Атрофироваться от бездействия)',
    [
      { en: 'Muscles can atrophy if they are not used regularly.', ru: 'Мышцы могут атрофироваться, если их регулярно не использовать.' },
      { en: 'After months in bed, his legs had atrophied.', ru: 'После месяцев в постели его ноги атрофировались.' },
      { en: 'Without practice, your language skills will atrophy.', ru: 'Без практики твои языковые навыки атрофируются (ослабнут).' },
      { en: 'The artist\'s creativity seemed to atrophy over the years.', ru: 'Творчество художника, казалось, угасло с годами.' }
    ]
),

createRichWord('c2_audacious', 'Audacious', '/ɔːˈdeɪʃəs/', 'одейшэс', 'Дерзкий / Смелый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Проявляющий готовность идти на удивительно смелые риски; или наглый.',
    '- План: "Audacious plan" (Дерзкий план)\n- Поступок: "Audacious move" (Смелый ход)\n- Характер: "Audacious ambition" (Дерзкая амбиция)',
    [
      { en: 'It was an audacious decision to quit his job and travel.', ru: 'Это было дерзкое решение бросить работу и путешествовать.' },
      { en: 'The thieves made an audacious attempt to rob the bank.', ru: 'Воры предприняли дерзкую попытку ограбить банк.' },
      { en: 'He described the plan as bold and audacious.', ru: 'Он описал план как смелый и дерзкий.' },
      { en: 'She is known for her audacious fashion choices.', ru: 'Она известна своим смелым выбором в моде.' }
    ]
),

createRichWord('c2_audacity', 'Audacity', '/ɔːˈdæsəti/', 'одэсэти', 'Дерзость / Смелость', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Готовность рисковать; или (негативно) наглость.',
    '- Смелость: "Have the audacity" (Иметь дерзость/смелость)\n- Наглость: "Sheer audacity" (Наглая дерзость)\n- Удивление: "Admire his audacity" (Восхищаться его смелостью)',
    [
      { en: 'I can\'t believe he had the audacity to ask for more money.', ru: 'Не могу поверить, что у него хватило наглости просить больше денег.' },
      { en: 'She admired the audacity of the explorers.', ru: 'Она восхищалась смелостью исследователей.' },
      { en: 'It took a lot of audacity to speak up against the boss.', ru: 'Потребовалась большая смелость, чтобы выступить против начальника.' },
      { en: 'His audacity shocked everyone in the room.', ru: 'Его дерзость шокировала всех в комнате.' }
    ]
),

createRichWord('c2_aural', 'Aural', '/ˈɔːrəl/', 'орэл', 'Слуховой / Аудиальный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к уху или чувству слуха.',
    '- Обучение: "Aural skills" (Слуховые навыки / Аудирование)\n- Тест: "Aural exam" (Экзамен по аудированию)\n- Восприятие: "Aural comprehension" (Восприятие на слух)',
    [
      { en: 'The exam includes both written and aural components.', ru: 'Экзамен включает как письменные, так и слуховые компоненты.' },
      { en: 'Musicians need to develop good aural skills.', ru: 'Музыкантам необходимо развивать хорошие слуховые навыки.' },
      { en: 'The distinction is purely visual, not aural.', ru: 'Различие чисто визуальное, а не на слух.' },
      { en: 'Use headphones for the aural part of the test.', ru: 'Используйте наушники для части теста по аудированию.' }
    ]
),

createRichWord('c2_auspicious', 'Auspicious', '/ɔːˈspɪʃəs/', 'оспишэс', 'Благоприятный / Многообещающий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Указывающий на то, что успех вероятен в будущем.',
    '- Начало: "Auspicious start" (Многообещающее начало)\n- Событие: "Auspicious occasion" (Благоприятный случай)\n- Знак: "Auspicious sign" (Доброе предзнаменование)',
    [
      { en: 'It was an auspicious beginning to his career.', ru: 'Это было многообещающее начало его карьеры.' },
      { en: 'They chose an auspicious date for the wedding.', ru: 'Они выбрали благоприятную дату для свадьбы.' },
      { en: 'The sunny weather was seen as an auspicious sign.', ru: 'Солнечная погода рассматривалась как добрый знак.' },
      { en: 'Winning the first game was an auspicious start.', ru: 'Победа в первой игре была удачным началом.' }
    ]
),

createRichWord('c2_autoimmune', 'Autoimmune', '/ˌɔːtəʊɪˈmjuːn/', 'отоимьюн', 'Аутоиммунный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Связанный с заболеванием, вызванным антителами, атакующими собственный организм.',
    '- Здоровье: "Autoimmune disease" (Аутоиммунное заболевание)\n- Система: "Autoimmune response" (Аутоиммунная реакция)\n- Расстройство: "Autoimmune disorder" (Аутоиммунное расстройство)',
    [
      { en: 'Diabetes Type 1 is an autoimmune disease.', ru: 'Диабет 1 типа — это аутоиммунное заболевание.' },
      { en: 'In autoimmune conditions, the body attacks itself.', ru: 'При аутоиммунных состояниях организм атакует сам себя.' },
      { en: 'Stress can trigger an autoimmune response.', ru: 'Стресс может спровоцировать аутоиммунную реакцию.' },
      { en: 'Research into autoimmune disorders is ongoing.', ru: 'Исследования аутоиммунных расстройств продолжаются.' }
    ]
  ),
createRichWord('c2_avow', 'Avow', '/əˈvaʊ/', 'эвау', 'Открыто признавать / Заявлять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Публично заявить или признать что-то (часто используется в пассиве или как прилагательное "avowed").',
    '- Заявление: "Avow intent" (Открыто заявить о намерении)\n- Статус: "Avowed socialist" (Убежденный социалист)\n- Признание: "Openly avow" (Открыто признать)',
    [
      { en: 'He avowed his commitment to democratic principles.', ru: 'Он заявил о своей приверженности демократическим принципам.' },
      { en: 'She is an avowed vegetarian.', ru: 'Она убежденная вегетарианка.' },
      { en: 'They avowed their intention to fight corruption.', ru: 'Они открыто заявили о своем намерении бороться с коррупцией.' },
      { en: 'It is hard to avow one\'s mistakes publicly.', ru: 'Трудно публично признавать свои ошибки.' }
    ]
),

createRichWord('c2_awning', 'Awning', '/ˈɔːnɪŋ/', 'онин', 'Навес / Тент', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Полотняный навес над окном или дверью для защиты от солнца или дождя.',
    '- Магазин: "Shop awning" (Навес магазина)\n- Окно: "Striped awning" (Полосатый навес)\n- Защита: "Under the awning" (Под навесом)',
    [
      { en: 'We stood under the awning to escape the rain.', ru: 'Мы стояли под навесом, чтобы укрыться от дождя.' },
      { en: 'The shop has a red and white striped awning.', ru: 'У магазина красно-белый полосатый навес.' },
      { en: 'They rolled out the awning when the sun came out.', ru: 'Они развернули тент, когда выглянуло солнце.' },
      { en: 'An awning provides shade for the patio.', ru: 'Навес создает тень для веранды.' }
    ]
),

createRichWord('c2_awry', 'Awry', '/əˈraɪ/', 'эрай', 'Наперекосяк / Криво', ProficiencyLevel.C2, 'adv', 'Low', 'Formal',
    'Не по плану (пошло не так) или физически криво.',
    '- План: "Go awry" (Пойти наперекосяк)\n- Вид: "Look awry" (Выглядеть криво)\n- Ситуация: "Went horribly awry" (Пошло ужасно не так)',
    [
      { en: 'Our plans for the weekend went awry due to the weather.', ru: 'Наши планы на выходные пошли наперекосяк из-за погоды.' },
      { en: 'Her hat was slightly awry.', ru: 'Ее шляпа была слегка набекрень.' },
      { en: 'Something has gone awry with the computer system.', ru: 'Что-то пошло не так с компьютерной системой.' },
      { en: 'The project went awry from the very beginning.', ru: 'Проект пошел наперекосяк с самого начала.' }
    ]
),

createRichWord('c2_axial', 'Axial', '/ˈæksiəl/', 'эксиэл', 'Осевой', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к оси или формирующий ось.',
    '- Техника: "Axial rotation" (Осевое вращение)\n- Наука: "Axial tilt" (Наклон оси)\n- Скелет: "Axial skeleton" (Осевой скелет)',
    [
      { en: 'The earth has an axial tilt of about 23 degrees.', ru: 'Земля имеет наклон оси около 23 градусов.' },
      { en: 'Axial fans are used for cooling computers.', ru: 'Осевые вентиляторы используются для охлаждения компьютеров.' },
      { en: 'The axial skeleton includes the skull and spine.', ru: 'Осевой скелет включает череп и позвоночник.' },
      { en: 'They measured the axial force on the beam.', ru: 'Они измерили осевую силу, действующую на балку.' }
    ]
),

createRichWord('c2_ayatollah', 'Ayatollah', '/ˌaɪəˈtɒlə/', 'айэтолэ', 'Аятолла', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Высокий религиозный титул у мусульман-шиитов.',
    '- Религия: "Grand Ayatollah" (Великий аятолла)\n- Иран: "Iranian Ayatollah" (Иранский аятолла)\n- Лидер: "Supreme leader" (Верховный лидер)',
    [
      { en: 'The Ayatollah led the prayers in the mosque.', ru: 'Аятолла вел молитвы в мечети.' },
      { en: 'Ayatollah Khomeini was a major figure in Iranian history.', ru: 'Аятолла Хомейни был важной фигурой в истории Ирана.' },
      { en: 'He studied for many years to become an Ayatollah.', ru: 'Он учился много лет, чтобы стать аятоллой.' },
      { en: 'The political influence of the Ayatollah is significant.', ru: 'Политическое влияние аятоллы значительно.' }
    ]
),

createRichWord('c2_baboon', 'Baboon', '/bəˈbuːn/', 'бэбун', 'Бабуин', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Крупная обезьяна с длинной мордой, обитающая в Африке и Азии.',
    '- Животное: "Troop of baboons" (Стая бабуинов)\n- Зоопарк: "Watch the baboons" (Наблюдать за бабуинами)\n- Природа: "Wild baboon" (Дикий бабуин)',
    [
      { en: 'A troop of baboons crossed the road in front of us.', ru: 'Стая бабуинов перешла дорогу перед нами.' },
      { en: 'Baboons can be aggressive if approached.', ru: 'Бабуины могут быть агрессивными, если к ним приблизиться.' },
      { en: 'The baboon carried its baby on its back.', ru: 'Бабуин нес своего детеныша на спине.' },
      { en: 'They observed the social behavior of baboons.', ru: 'Они наблюдали за социальным поведением бабуинов.' }
    ]
),

createRichWord('c2_backwater', 'Backwater', '/ˈbækwɔːtə/', 'бэквотэ', 'Заводь / Захолустье', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Часть реки, где вода не течет; или (перен.) место, где нет развития и прогресса.',
    '- Место: "Rural backwater" (Сельское захолустье)\n- Река: "Quiet backwater" (Тихая заводь)\n- Развитие: "Cultural backwater" (Культурное захолустье)',
    [
      { en: 'He grew up in a sleepy rural backwater.', ru: 'Он вырос в сонном сельском захолустье.' },
      { en: 'The town was considered a cultural backwater.', ru: 'Город считался культурным захолустьем.' },
      { en: 'We rowed the boat into a quiet backwater.', ru: 'Мы направили лодку в тихую заводь.' },
      { en: 'She wanted to escape the backwater and move to the city.', ru: 'Она хотела сбежать из захолустья и переехать в город.' }
    ]
),

createRichWord('c2_balk', 'Balk', '/bɔːk/', 'бок', 'Упираться / Отказываться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Отказаться продолжать что-то делать; остановиться перед препятствием (US spelling often: Baulk).',
    '- Действие: "Balk at the idea" (Воспротивиться идее)\n- Цена: "Balk at the price" (Отказаться из-за цены)\n- Лошадь: "Horse balked" (Лошадь заупрямилась)',
    [
      { en: 'He balked at the idea of paying so much money.', ru: 'Он воспротивился идее платить так много денег.' },
      { en: 'The horse balked at the high fence.', ru: 'Лошадь остановилась перед высоким забором.' },
      { en: 'Residents balked at the new tax proposal.', ru: 'Жители выступили против нового налогового предложения.' },
      { en: 'Don\'t balk at the first difficulty you encounter.', ru: 'Не пасуй перед первой же трудностью.' }
    ]
),

createRichWord('c2_ballast', 'Ballast', '/ˈbæləst/', 'бэлэст', 'Балласт', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Тяжелый материал (песок, камни), используемый для придания устойчивости кораблю или воздушному шару.',
    '- Корабль: "Ship\'s ballast" (Корабельный балласт)\n- Вес: "Drop ballast" (Сбросить балласт)\n- Устойчивость: "Provide ballast" (Обеспечить устойчивость)',
    [
      { en: 'The ship took on water as ballast.', ru: 'Корабль набрал воду в качестве балласта.' },
      { en: 'They dropped ballast to make the balloon rise.', ru: 'Они сбросили балласт, чтобы воздушный шар поднялся.' },
      { en: 'Gravel is used as ballast for railway tracks.', ru: 'Гравий используется как балласт для железнодорожных путей.' },
      { en: 'His calm presence provided ballast to the team.', ru: 'Его спокойное присутствие придавало команде устойчивости.' }
    ]
),

createRichWord('c2_balm', 'Balm', '/bɑːm/', 'бам', 'Бальзам / Утешение', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Мазь для лечения кожи; или что-то, что успокаивает и утешает.',
    '- Кожа: "Lip balm" (Бальзам для губ)\n- Утешение: "Balm to the soul" (Бальзам на душу)\n- Лечение: "Healing balm" (Целебный бальзам)',
    [
      { en: 'Music was a balm to his troubled mind.', ru: 'Музыка была бальзамом для его встревоженного ума.' },
      { en: 'She applied a soothing balm to the burn.', ru: 'Она нанесла успокаивающий бальзам на ожог.' },
      { en: 'The cool air was a balm after the heat of the day.', ru: 'Прохладный воздух был утешением после дневной жары.' },
      { en: 'Use lip balm to prevent cracking.', ru: 'Используйте бальзам для губ, чтобы предотвратить трещины.' }
    ]
),

createRichWord('c2_barbarism', 'Barbarism', '/ˈbɑːbərɪzəm/', 'бабэризэм', 'Варварство', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Крайняя жестокость; или отсутствие культуры и цивилизации.',
    '- Жестокость: "Act of barbarism" (Акт варварства)\n- Общество: "Slide into barbarism" (Скатиться в варварство)\n- История: "Age of barbarism" (Эпоха варварства)',
    [
      { en: 'The war marked a descent into barbarism.', ru: 'Война ознаменовала скатывание в варварство.' },
      { en: 'Destroying art is considered an act of barbarism.', ru: 'Уничтожение искусства считается актом варварства.' },
      { en: 'Civilization is a defense against barbarism.', ru: 'Цивилизация — это защита от варварства.' },
      { en: 'He condemned the barbarism of the attack.', ru: 'Он осудил варварство нападения.' }
    ]
),

createRichWord('c2_baritone', 'Baritone', '/ˈbærɪtəʊn/', 'бэритоун', 'Баритон', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Мужской певческий голос, средний между басом и тенором.',
    '- Музыка: "Sing baritone" (Петь баритоном)\n- Голос: "Rich baritone" (Богатый баритон)\n- Певец: "Famous baritone" (Известный баритон)',
    [
      { en: 'He has a rich baritone voice.', ru: 'У него богатый голос баритон.' },
      { en: 'The role is written for a baritone.', ru: 'Эта роль написана для баритона.' },
      { en: 'He started as a tenor but became a baritone.', ru: 'Он начинал как тенор, но стал баритоном.' },
      { en: 'The choir needs more baritones.', ru: 'Хору нужно больше баритонов.' }
    ]
),

createRichWord('c2_barrio', 'Barrio', '/ˈbæriəʊ/', 'бэриоу', 'Баррио (район)', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Район города, населенный испаноговорящими (в США); или квартал в испаноязычной стране.',
    '- Место: "Latino barrio" (Латиноамериканский квартал)\n- Город: "Poor barrio" (Бедный район)\n- Культура: "Life in the barrio" (Жизнь в баррио)',
    [
      { en: 'He grew up in a barrio in Los Angeles.', ru: 'Он вырос в баррио в Лос-Анджелесе.' },
      { en: 'The barrio is known for its vibrant street life.', ru: 'Баррио известен своей оживленной уличной жизнью.' },
      { en: 'They organized a festival in the local barrio.', ru: 'Они организовали фестиваль в местном квартале.' },
      { en: 'Barrios often preserve strong cultural traditions.', ru: 'Баррио часто сохраняют сильные культурные традиции.' }
    ]
),

createRichWord('c2_barrow', 'Barrow', '/ˈbærəʊ/', 'бэроу', 'Тачка / Курган', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Тачка (wheelbarrow); тележка уличного торговца; или древний могильный холм.',
    '- Торговля: "Market barrow" (Рыночная тележка)\n- Инструмент: "Push a barrow" (Толкать тачку)\n- История: "Burial barrow" (Погребальный курган)',
    [
      { en: 'The trader sold fruit from a wooden barrow.', ru: 'Торговец продавал фрукты с деревянной тележки.' },
      { en: 'Archaeologists excavated the ancient burial barrow.', ru: 'Археологи раскопали древний погребальный курган.' },
      { en: 'He pushed the barrow full of soil across the garden.', ru: 'Он толкал тачку, полную земли, через сад.' },
      { en: 'Street barrows are common in London markets.', ru: 'Уличные тележки обычны на лондонских рынках.' }
    ]
),

createRichWord('c2_basalt', 'Basalt', '/ˈbæsɔːlt/', 'бэсолт', 'Базальт', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Тип темной вулканической породы.',
    '- Геология: "Basalt rock" (Базальтовая порода)\n- Форма: "Basalt columns" (Базальтовые колонны)\n- Происхождение: "Volcanic basalt" (Вулканический базальт)',
    [
      { en: 'The Giant\'s Causeway is made of basalt columns.', ru: 'Дорога гигантов состоит из базальтовых колонн.' },
      { en: 'Basalt is formed from rapid cooling of lava.', ru: 'Базальт образуется при быстром остывании лавы.' },
      { en: 'The cliffs are composed of black basalt.', ru: 'Скалы состоят из черного базальта.' },
      { en: 'Basalt is a common rock on the ocean floor.', ru: 'Базальт — распространенная порода на дне океана.' }
    ]
),

createRichWord('c2_batten', 'Batten', '/ˈbætn/', 'бэтн', 'Планка / Закреплять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Укреплять или закрывать с помощью планок (обычно "batten down").',
    '- Идиома: "Batten down the hatches" (Приготовиться к трудностям/шторму)\n- Строительство: "Batten the roof" (Укрепить крышу планками)\n- Шторм: "Batten down" (Заколотить/закрепить)',
    [
      { en: 'We need to batten down the hatches before the storm hits.', ru: 'Нам нужно задраить люки (приготовиться) перед ударом шторма.' },
      { en: 'They battened the windows to protect them from the wind.', ru: 'Они заколотили окна, чтобы защитить их от ветра.' },
      { en: 'The roof tiles were secured with battens.', ru: 'Черепица на крыше была закреплена планками.' },
      { en: 'Batten down everything that might blow away.', ru: 'Закрепите все, что может унести ветром.' }
    ]
),

createRichWord('c2_bawl', 'Bawl', '/bɔːl/', 'бол', 'Орать / Реветь', ProficiencyLevel.C2, 'verb', 'Low', 'Informal',
    'Громко плакать или кричать.',
    '- Плач: "Bawl your eyes out" (Выплакать все глаза)\n- Крик: "Bawl at someone" (Наорать на кого-то)\n- Звук: "Stop bawling" (Перестань реветь)',
    [
      { en: 'The baby started to bawl when she dropped her toy.', ru: 'Малышка начала реветь, когда уронила игрушку.' },
      { en: 'He bawled orders at the crew.', ru: 'Он выкрикивал приказы команде.' },
      { en: 'Don\'t bawl me out for a small mistake.', ru: 'Не ори на меня за маленькую ошибку.' },
      { en: 'She was bawling her eyes out in the bedroom.', ru: 'Она рыдала навзрыд в спальне.' }
    ]
),

createRichWord('c2_bayonet', 'Bayonet', '/ˈbeɪənət/', 'бэйэнет', 'Штык', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Длинный нож, прикрепляемый к концу винтовки.',
    '- Оружие: "Fix bayonets" (Примкнуть штыки)\n- Атака: "Bayonet charge" (Штыковая атака)\n- Рана: "Bayonet wound" (Штыковая рана)',
    [
      { en: 'Soldiers were ordered to fix bayonets.', ru: 'Солдатам приказали примкнуть штыки.' },
      { en: 'They charged the enemy with bayonets.', ru: 'Они пошли в атаку на врага со штыками.' },
      { en: 'The rifle has a mounting for a bayonet.', ru: 'У винтовки есть крепление для штыка.' },
      { en: 'Bayonet fighting is rarely used in modern warfare.', ru: 'Штыковой бой редко используется в современной войне.' }
    ]
),

createRichWord('c2_befit', 'Befit', '/bɪˈfɪt/', 'бифит', 'Подходить / Подобать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Быть подходящим или уместным для кого-то или чего-то.',
    '- Статус: "Befit a king" (Подобать королю)\n- Ситуация: "As befits" (Как подобает)\n- Стиль: "Befitting manner" (Подобающая манера)',
    [
      { en: 'He lived in a luxury that befitted a prince.', ru: 'Он жил в роскоши, подобающей принцу.' },
      { en: 'She spoke with a dignity befitting her rank.', ru: 'Она говорила с достоинством, подобающим ее рангу.' },
      { en: 'They gave him a funeral befitting a hero.', ru: 'Они устроили ему похороны, достойные героя.' },
      { en: 'It does not befit you to speak so rudely.', ru: 'Тебе не подобает говорить так грубо.' }
    ]
),

createRichWord('c2_beget', 'Beget', '/bɪˈɡet/', 'бигет', 'Порождать / Рождать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Вызывать что-то (эффект); или (устар.) становиться отцом ребенка.',
    '- Причина: "Violence begets violence" (Насилие порождает насилие)\n- Следствие: "Beget misery" (Порождать страдания)\n- Род: "Begat" (Родил - библейское)',
    [
      { en: 'Violence only begets more violence.', ru: 'Насилие порождает только больше насилия.' },
      { en: 'Poverty often begets crime.', ru: 'Бедность часто порождает преступность.' },
      { en: 'Success begets success.', ru: 'Успех порождает успех.' },
      { en: 'Abraham begat Isaac (biblical).', ru: 'Авраам родил Исаака (библейское).' }
    ]
),

createRichWord('c2_beguile', 'Beguile', '/bɪˈɡaɪl/', 'бигайл', 'Завлекать / Обманывать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Очаровать кого-то, часто чтобы обмануть; или заставить время пройти приятно.',
    '- Очарование: "Beguile with beauty" (Очаровать красотой)\n- Обман: "Beguiled into" (Завлеченный во что-то)\n- Время: "Beguile the time" (Коротать время)',
    [
      { en: 'She was beguiled by his smooth talk.', ru: 'Она была очарована его сладкими речами.' },
      { en: 'He used stories to beguile the weary travelers.', ru: 'Он использовал истории, чтобы развлечь уставших путников.' },
      { en: 'Don\'t let his innocent look beguile you.', ru: 'Не позволяй его невинному виду обмануть тебя.' },
      { en: 'They were beguiled into signing the contract.', ru: 'Их хитростью заставили подписать контракт.' }
    ]
),

createRichWord('c2_behead', 'Behead', '/bɪˈhed/', 'бихэд', 'Обезглавливать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Отрубить голову (казнить).',
    '- Казнь: "Behead a traitor" (Обезглавить предателя)\n- История: "Publicly beheaded" (Публично обезглавлен)\n- Король: "Beheaded king" (Обезглавленный король)',
    [
      { en: 'Anne Boleyn was beheaded in the Tower of London.', ru: 'Анна Болейн была обезглавлена в Лондонском Тауэре.' },
      { en: 'The prisoners were threatened with being beheaded.', ru: 'Пленникам угрожали обезглавливанием.' },
      { en: 'In the past, kings often beheaded their enemies.', ru: 'В прошлом короли часто обезглавливали своих врагов.' },
      { en: 'The statue had been beheaded by vandals.', ru: 'Статуя была обезглавлена вандалами.' }
    ]
),

createRichWord('c2_belittle', 'Belittle', '/bɪˈlɪtl/', 'билитл', 'Умалять / Принижать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Заставить кого-то или что-то казаться неважным.',
    '- Отношение: "Belittle achievements" (Умалять достижения)\n- Критика: "Belittle someone" (Принижать кого-то)\n- Разговор: "Don\'t belittle me" (Не принижай меня)',
    [
      { en: 'He always tries to belittle my efforts.', ru: 'Он всегда пытается умалить мои усилия.' },
      { en: 'Don\'t belittle her achievements; she worked hard.', ru: 'Не принижай ее достижения; она усердно работала.' },
      { en: 'It is cruel to belittle a child in front of others.', ru: 'Жестоко унижать ребенка перед другими.' },
      { en: 'By belittling others, he tries to feel important.', ru: 'Принижая других, он пытается чувствовать себя важным.' }
    ]
),

createRichWord('c2_bemoan', 'Bemoan', '/bɪˈməʊn/', 'бимоун', 'Оплакивать / Жаловаться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Выражать печаль или недовольство по поводу чего-либо.',
    '- Жалоба: "Bemoan one\'s fate" (Сетовать на судьбу)\n- Ситуация: "Bemoan the lack of" (Жаловаться на нехватку)\n- Глагол: "Bemoan the fact" (Сокрушаться по факту)',
    [
      { en: 'Farmers bemoaned the lack of rain.', ru: 'Фермеры жаловались на отсутствие дождя.' },
      { en: 'She is always bemoaning her bad luck.', ru: 'Она вечно сетует на свое невезение.' },
      { en: 'Critics bemoan the decline in educational standards.', ru: 'Критики сокрушаются по поводу снижения образовательных стандартов.' },
      { en: 'It is useless to simply bemoan the situation; act!', ru: 'Бесполезно просто оплакивать ситуацию; действуй!' }
    ]
),

createRichWord('c2_bereft', 'Bereft', '/bɪˈreft/', 'бирефт', 'Лишенный / Обездоленный', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Лишенный чего-то (обычно нематериального); или чувствующий потерю.',
    '- Потеря: "Bereft of hope" (Лишенный надежды)\n- Чувство: "Feel bereft" (Чувствовать себя опустошенным)\n- Слова: "Bereft of speech" (Лишившийся дара речи)',
    [
      { en: 'He was completely bereft of new ideas.', ru: 'Он был полностью лишен новых идей.' },
      { en: 'Alone in the house, she felt utterly bereft.', ru: 'Одна в доме, она чувствовала себя совершенно опустошенной.' },
      { en: 'The landscape was bereft of any vegetation.', ru: 'Пейзаж был лишен какой-либо растительности.' },
      { en: 'Bereft of hope, they surrendered.', ru: 'Лишенные надежды, они сдались.' }
    ]
),

createRichWord('c2_bewitch', 'Bewitch', '/bɪˈwɪtʃ/', 'бивич', 'Околдовывать / Зачаровывать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Наложить заклятие; или сильно привлечь и очаровать.',
    '- Магия: "Bewitched by a spell" (Околдованный заклинанием)\n- Красота: "Bewitched by beauty" (Зачарованный красотой)\n- Внимание: "Bewitching smile" (Завораживающая улыбка)',
    [
      { en: 'She bewitched the audience with her performance.', ru: 'Она очаровала публику своим выступлением.' },
      { en: 'He was completely bewitched by her beauty.', ru: 'Он был полностью зачарован ее красотой.' },
      { en: 'In the story, the sorceress bewitches the prince.', ru: 'В сказке волшебница околдовывает принца.' },
      { en: 'A bewitching melody floated through the air.', ru: 'Завораживающая мелодия плыла по воздуху.' }
    ]
),

createRichWord('c2_biennial', 'Biennial', '/baɪˈeniəl/', 'байениэл', 'Двухгодичный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Происходящий раз в два года.',
    '- Событие: "Biennial conference" (Конференция раз в два года)\n- Растение: "Biennial plant" (Двулетнее растение)\n- Период: "Biennial report" (Двухгодичный отчет)',
    [
      { en: 'The biennial festival attracts thousands of visitors.', ru: 'Двухгодичный фестиваль привлекает тысячи посетителей.' },
      { en: 'Parsley is a biennial plant.', ru: 'Петрушка — двулетнее растение.' },
      { en: 'The committee publishes a biennial report.', ru: 'Комитет публикует отчет раз в два года.' },
      { en: 'Biennial elections are held for the board.', ru: 'Выборы в совет проводятся раз в два года.' }
    ]
),

createRichWord('c2_blanch', 'Blanch', '/blɑːntʃ/', 'бланч', 'Бледнеть / Бланшировать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Понеднеть от страха или шока; или опускать еду в кипяток на короткое время.',
    '- Лицо: "Blanch with fear" (Побледнеть от страха)\n- Кулинария: "Blanch almonds" (Бланшировать миндаль)\n- Реакция: "Visible blanch" (Заметно побледнеть)',
    [
      { en: 'He blanched when he saw the bill.', ru: 'Он побледнел, когда увидел счет.' },
      { en: 'Blanch the vegetables for two minutes before freezing.', ru: 'Бланшируйте овощи две минуты перед заморозкой.' },
      { en: 'She blanched at the sight of blood.', ru: 'Она побледнела при виде крови.' },
      { en: 'To remove the skin, blanch the tomatoes first.', ru: 'Чтобы снять кожицу, сначала бланшируйте помидоры.' }
    ]
),

createRichWord('c2_blip', 'Blip', '/blɪp/', 'блип', 'Всплеск / Незначительное отклонение', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Временное изменение или проблема; точка на экране радара.',
    '- График: "Temporary blip" (Временный всплеск/сбой)\n- Радар: "Radar blip" (Отметка на радаре)\n- Экономика: "Economic blip" (Экономическое колебание)',
    [
      { en: 'The decrease in sales is just a temporary blip.', ru: 'Снижение продаж — это лишь временное колебание.' },
      { en: 'There was a blip on the radar screen.', ru: 'На экране радара появилась отметка.' },
      { en: 'It was a minor blip in an otherwise perfect career.', ru: 'Это была незначительная помарка в остальном идеальной карьере.' },
      { en: 'Don\'t worry about that blip; things will improve.', ru: 'Не беспокойся об этом сбое; все наладится.' }
    ]
),

createRichWord('c2_blithe', 'Blithe', '/blaɪð/', 'блайз', 'Беспечный / Веселый', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Не проявляющий должного внимания или заботы (негативно); или счастливый и беззаботный.',
    '- Отношение: "Blithe disregard" (Беспечное пренебрежение)\n- Характер: "Blithe spirit" (Веселый дух)\n- Поведение: "Blithely unaware" (В блаженном неведении)',
    [
      { en: 'He showed a blithe disregard for the rules.', ru: 'Он проявил беспечное пренебрежение правилами.' },
      { en: 'She continued in her blithe ignorance of the danger.', ru: 'Она продолжала оставаться в счастливом неведении об опасности.' },
      { en: 'With a blithe smile, he walked away.', ru: 'С беззаботной улыбкой он ушел.' },
      { en: 'They seem blithely unaware of the trouble they caused.', ru: 'Они, кажется, блаженно не знают о проблемах, которые создали.' }
    ]
),

createRichWord('c2_blotch', 'Blotch', '/blɒtʃ/', 'блоч', 'Пятно / Сыпь', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Неправильной формы пятно или отметина на коже или поверхности.',
    '- Кожа: "Red blotches" (Красные пятна)\n- Поверхность: "Ink blotch" (Чернильное пятно)\n- Лицо: "Covered in blotches" (Покрытый пятнами)',
    [
      { en: 'His face was covered in red blotches from the heat.', ru: 'Его лицо покрылось красными пятнами от жары.' },
      { en: 'There is a blue blotch on your shirt.', ru: 'На твоей рубашке синее пятно.' },
      { en: 'Nervousness caused blotches on her neck.', ru: 'Нервозность вызвала пятна на ее шее.' },
      { en: 'The painting was just a mass of colored blotches.', ru: 'Картина была просто массой цветных пятен.' }
    ]
),

createRichWord('c2_bode', 'Bode', '/bəʊd/', 'боуд', 'Предвещать / Сулить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Быть знаком будущего (обычно "bode well/ill").',
    '- Будущее: "Bode well" (Сулить хорошее)\n- Знак: "Bode ill" (Сулить плохое)\n- Предсказание: "Does not bode well" (Не предвещает ничего хорошего)',
    [
      { en: 'These dark clouds bode ill for our picnic.', ru: 'Эти темные тучи не сулят ничего хорошего нашему пикнику.' },
      { en: 'The rising sales figures bode well for the company.', ru: 'Растущие показатели продаж сулят хорошее будущее компании.' },
      { en: 'His silence does not bode well.', ru: 'Его молчание не предвещает ничего хорошего.' },
      { en: 'This decision bodes disaster.', ru: 'Это решение предвещает катастрофу.' }
    ]
),

createRichWord('c2_bodice', 'Bodice', '/ˈbɒdɪs/', 'бодис', 'Лиф (платья)', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Верхняя часть женского платья (выше талии).',
    '- Одежда: "Tight bodice" (Тугой лиф)\n- Стиль: "Lace bodice" (Кружевной лиф)\n- Платье: "Fitted bodice" (Приталенный лиф)',
    [
      { en: 'The dress has a fitted bodice and a full skirt.', ru: 'У платья приталенный лиф и пышная юбка.' },
      { en: 'She embroidered flowers on the bodice.', ru: 'Она вышила цветы на лифе.' },
      { en: 'The bodice was too tight for her.', ru: 'Лиф был ей слишком туг.' },
      { en: 'It was a beautiful gown with a silk bodice.', ru: 'Это было красивое платье с шелковым лифом.' }
    ]
),

createRichWord('c2_boisterous', 'Boisterous', '/ˈbɔɪstərəs/', 'бойстэрэс', 'Шумный / Бурный', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Шумный, энергичный и веселый (о людях); бурный (о погоде).',
    '- Люди: "Boisterous crowd" (Шумная толпа)\n- Дети: "Boisterous children" (Шумные дети)\n- Погода: "Boisterous wind" (Бурный ветер)',
    [
      { en: 'The children were boisterous after school.', ru: 'Дети были шумными после школы.' },
      { en: 'A boisterous crowd gathered to celebrate the victory.', ru: 'Шумная толпа собралась, чтобы отпраздновать победу.' },
      { en: 'He has a loud, boisterous laugh.', ru: 'У него громкий, раскатистый смех.' },
      { en: 'The sea was boisterous and rough.', ru: 'Море было бурным и неспокойным.' }
    ]
),

createRichWord('c2_bombshell', 'Bombshell', '/ˈbɒmʃel/', 'бомшел', 'Сенсация / Красотка', ProficiencyLevel.C2, 'noun', 'Low', 'Informal',
    'Неожиданная и шокирующая новость; или очень привлекательная женщина (blonde bombshell).',
    '- Новости: "Drop a bombshell" (Орошить новость/сенсацию)\n- Событие: "Absolute bombshell" (Полная неожиданность)\n- Женщина: "Blonde bombshell" (Сногсшибательная блондинка)',
    [
      { en: 'She dropped a bombshell by announcing her resignation.', ru: 'Она произвела сенсацию, объявив о своей отставке.' },
      { en: 'The news came as a total bombshell to everyone.', ru: 'Новости стали полной неожиданностью для всех.' },
      { en: 'Marilyn Monroe was a famous blonde bombshell.', ru: 'Мэрилин Монро была известной сногсшибательной блондинкой.' },
      { en: 'The revelation was a political bombshell.', ru: 'Это разоблачение стало политической бомбой.' }
    ]
),

createRichWord('c2_bondage', 'Bondage', '/ˈbɒndɪdʒ/', 'бондидж', 'Рабство / Неволя', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Состояние рабства или подчинения; или связывание для удовольствия.',
    '- Свобода: "Release from bondage" (Освобождение из рабства)\n- История: "In bondage" (В неволе)\n- Секс: "Bondage gear" (Атрибутика для связывания)',
    [
      { en: 'The slaves were held in bondage for many years.', ru: 'Рабы содержались в неволе много лет.' },
      { en: 'They fought to free their people from bondage.', ru: 'Они боролись за освобождение своего народа от рабства.' },
      { en: 'Spiritual bondage can be as restricting as physical chains.', ru: 'Духовное рабство может быть таким же ограничивающим, как и физические цепи.' },
      { en: 'He wrote about the Israelites\' bondage in Egypt.', ru: 'Он писал о рабстве израильтян в Египте.' }
    ]
),

createRichWord('c2_boogie', 'Boogie', '/ˈbuːɡi/', 'буги', 'Танцевать (буги-вуги)', ProficiencyLevel.C2, 'verb', 'Low', 'Informal',
    'Танцевать под быструю музыку (поп или рок).',
    '- Танец: "Boogie on the floor" (Танцевать на танцполе)\n- Музыка: "Boogie woogie" (Буги-вуги)\n- Вечеринка: "Let\'s boogie" (Давай потанцуем)',
    [
      { en: 'We boogied all night at the disco.', ru: 'Мы танцевали всю ночь на дискотеке.' },
      { en: 'Let\'s get on the floor and boogie!', ru: 'Давай выйдем на танцпол и потанцуем!' },
      { en: 'He loves to boogie to 70s music.', ru: 'Он любит танцевать под музыку 70-х.' },
      { en: 'The band played a boogie-woogie tune.', ru: 'Группа сыграла мелодию буги-вуги.' }
    ]
),

createRichWord('c2_botch', 'Botch', '/bɒtʃ/', 'боч', 'Запороть / Испортить', ProficiencyLevel.C2, 'verb', 'Low', 'Informal',
    'Сделать что-то плохо или неуклюже (обычно "botch up").',
    '- Работа: "Botch the job" (Запороть работу)\n- Результат: "Botched attempt" (Неудачная попытка)\n- Ремонт: "Botch up" (Сделать кое-как)',
    [
      { en: 'He botched the repair job completely.', ru: 'Он полностью запорол ремонт.' },
      { en: 'It was a botched attempt to kidnap the president.', ru: 'Это была неудачная попытка похитить президента.' },
      { en: 'Don\'t hire him; he will just botch it up.', ru: 'Не нанимай его; он просто все испортит.' },
      { en: 'The surgeon was sued for a botched operation.', ru: 'На хирурга подали в суд за неудачную операцию.' }
    ]
),

createRichWord('c2_bovine', 'Bovine', '/ˈbəʊvaɪn/', 'боувайн', 'Бычий / Коровий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к коровам; или медлительный и глуповатый (о человеке).',
    '- Животное: "Bovine disease" (Болезнь крупного рогатого скота - губчатая энцефалопатия)\n- Внешность: "Bovine look" (Коровий взгляд)\n- Характер: "Bovine placidity" (Бычье спокойствие)',
    [
      { en: 'BSE stands for Bovine Spongiform Encephalopathy.', ru: 'BSE означает губчатую энцефалопатию крупного рогатого скота.' },
      { en: 'He stared at me with a dull, bovine expression.', ru: 'Он уставился на меня с тупым, коровьим выражением лица.' },
      { en: 'The field was full of bovine creatures.', ru: 'Поле было полно коров (бычьих созданий).' },
      { en: 'Her bovine patience annoyed him.', ru: 'Ее бычье терпение раздражало его.' }
    ]
),

createRichWord('c2_bramble', 'Bramble', '/ˈbræmbl/', 'брэмбл', 'Ежевика (куст) / Колючий кустарник', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Дикий колючий куст, на котором растут ягоды (обычно ежевика).',
    '- Растение: "Blackberry bramble" (Куст ежевики)\n- Заросли: "Thick brambles" (Густые заросли колючек)\n- Опасность: "Scratch by bramble" (Царапина от колючки)',
    [
      { en: 'We picked blackberries from the brambles.', ru: 'Мы собирали ежевику с колючих кустов.' },
      { en: 'My clothes got caught in the brambles.', ru: 'Моя одежда зацепилась за колючие кусты.' },
      { en: 'The path was blocked by overgrown brambles.', ru: 'Тропинка была заблокирована разросшимся колючим кустарником.' },
      { en: 'Beware of the sharp thorns on the bramble.', ru: 'Остерегайтесь острых шипов на кустарнике.' }
    ]
),

createRichWord('c2_bravado', 'Bravado', '/brəˈvɑːdəʊ/', 'брэвадоу', 'Бравада / Показательная смелость', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Уверенное поведение, призванное произвести впечатление или скрыть страх.',
    '- Поведение: "Act of bravado" (Акт бравады)\n- Характер: "Sheer bravado" (Чистая бравада)\n- Скрытие: "Hide fear with bravado" (Скрывать страх за бравадой)',
    [
      { en: 'His speech was full of empty bravado.', ru: 'Его речь была полна пустой бравады.' },
      { en: 'It was an act of bravado to hide his nervousness.', ru: 'Это был акт бравады, чтобы скрыть нервозность.' },
      { en: 'Despite his bravado, he was shaking with fear.', ru: 'Несмотря на свою браваду, он дрожал от страха.' },
      { en: 'Youthful bravado often leads to reckless acts.', ru: 'Юношеская бравада часто приводит к безрассудным поступкам.' }
    ]
),

createRichWord('c2_broadside', 'Broadside', '/ˈbrɔːdsaɪd/', 'бродсайд', 'Бортовой залп / Резкая критика', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Стрельба из всех орудий с одного борта корабля; или сильная словесная атака.',
    '- Атака: "Fire a broadside" (Дал бортовой залп)\n- Критика: "Political broadside" (Политический выпад)\n- Корабль: "Hit broadside" (Ударить в борт)',
    [
      { en: 'The ship fired a broadside at the enemy vessel.', ru: 'Корабль дал бортовой залп по вражескому судну.' },
      { en: 'He launched a furious broadside against his critics.', ru: 'Он обрушил яростную критику на своих оппонентов.' },
      { en: 'The car was hit broadside by a truck.', ru: 'Грузовик ударил машину в борт.' },
      { en: 'The article was a broadside on the government\'s policy.', ru: 'Статья была резкой критикой политики правительства.' }
    ]
),

createRichWord('c2_bronco', 'Bronco', '/ˈbrɒŋkəʊ/', 'бронкоу', 'Бронко (дикая лошадь)', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Дикая или полудикая лошадь в Америке.',
    '- Животное: "Bucking bronco" (Брыкающийся мустанг)\n- Родео: "Ride a bronco" (Ехать на бронко)\n- Событие: "Bronco busting" (Объездка лошадей)',
    [
      { en: 'He tried to ride the bucking bronco at the rodeo.', ru: 'Он пытался удержаться на брыкающемся мустанге на родео.' },
      { en: 'The cowboy tamed the wild bronco.', ru: 'Ковбой укротил дикого мустанга.' },
      { en: 'Bronco riding is a dangerous sport.', ru: 'Езда на диких лошадях — опасный вид спорта.' },
      { en: 'The bronco threw the rider off its back.', ru: 'Лошадь сбросила всадника со спины.' }
    ]
),

createRichWord('c2_brusque', 'Brusque', '/brʊsk/', 'бруск', 'Резкий / Бесцеремонный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Быстрый и грубый в манере или речи.',
    '- Манера: "Brusque manner" (Резкая манера)\n- Ответ: "Brusque reply" (Резкий ответ)\n- Отношение: "Be brusque with" (Быть резким с)',
    [
      { en: 'His brusque manner offended the customers.', ru: 'Его резкая манера обидела клиентов.' },
      { en: 'She gave a brusque "no" and walked away.', ru: 'Она резко ответила "нет" и ушла.' },
      { en: 'The doctor was efficient but somewhat brusque.', ru: 'Врач был компетентным, но несколько бесцеремонным.' },
      { en: 'Sorry if I seemed brusque on the phone.', ru: 'Извини, если я показался резким по телефону.' }
    ]
),

createRichWord('c2_buffeted', 'Buffeted', '/ˈbʌfɪtɪd/', 'бафитид', 'Подвергшийся ударам / Трепать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Подвергаться многократным ударам (о ветре, волнах, судьбе). Participle от Buffet.',
    '- Погода: "Buffeted by wind" (Трепал ветер)\n- Шторм: "Buffeted by storms" (Подвергшийся штормам)\n- Жизнь: "Buffeted by fate" (Побитый судьбой)',
    [
      { en: 'The plane was buffeted by strong turbulence.', ru: 'Самолет трясло (трепало) сильной турбулентностью.' },
      { en: 'He felt buffeted by life\'s misfortunes.', ru: 'Он чувствовал себя побитым жизненными невзгодами.' },
      { en: 'The small boat was buffeted by the waves.', ru: 'Маленькую лодку швыряло волнами.' },
      { en: 'She stood on the cliff, buffeted by the gale.', ru: 'Она стояла на утесе, и ее трепал штормовой ветер.' }
    ]
),

createRichWord('c2_bulimia', 'Bulimia', '/bʊˈlɪmiə/', 'булимиэ', 'Булимия', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Расстройство пищевого поведения (переедание и рвота).',
    '- Здоровье: "Suffer from bulimia" (Страдать булимией)\n- Тип: "Bulimia nervosa" (Нервная булимия)\n- Симптом: "Eating disorder" (Расстройство пищевого поведения)',
    [
      { en: 'Bulimia is a serious eating disorder.', ru: 'Булимия — серьезное расстройство пищевого поведения.' },
      { en: 'She sought treatment for her bulimia.', ru: 'Она обратилась за лечением своей булимии.' },
      { en: 'Bulimia can damage teeth and the digestive system.', ru: 'Булимия может повредить зубы и пищеварительную систему.' },
      { en: 'Many people hide their struggle with bulimia.', ru: 'Многие люди скрывают свою борьбу с булимией.' }
    ]
),

createRichWord('c2_bulkhead', 'Bulkhead', '/ˈbʌlkhed/', 'балкхэд', 'Переборка', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Стена, разделяющая отсеки на корабле или самолете.',
    '- Корабль: "Watertight bulkhead" (Водонепроницаемая переборка)\n- Самолет: "Front bulkhead" (Передняя переборка)\n- Место: "Bulkhead seat" (Место у перегородки)',
    [
      { en: 'The watertight bulkheads saved the ship from sinking.', ru: 'Водонепроницаемые переборки спасли корабль от затопления.' },
      { en: 'I prefer sitting in the bulkhead seat for more legroom.', ru: 'Я предпочитаю сидеть на месте у перегородки, чтобы было больше места для ног.' },
      { en: 'There is a storage locker on the bulkhead.', ru: 'На переборке есть шкафчик для хранения.' },
      { en: 'They reinforced the bulkhead against the pressure.', ru: 'Они укрепили переборку против давления.' }
    ]
),

createRichWord('c2_bungle', 'Bungle', '/ˈbʌŋɡ(ə)l/', 'бангл', 'Запороть / Испортить', ProficiencyLevel.C2, 'verb', 'Low', 'Informal',
    'Сделать что-то неумело или неудачно.',
    '- Работа: "Bungle a job" (Запороть работу)\n- Преступление: "Bungled robbery" (Неудачное ограбление)\n- Результат: "Bungled attempt" (Неуклюжая попытка)',
    [
      { en: 'The police bungled the investigation.', ru: 'Полиция запорола расследование.' },
      { en: 'He bungled his speech because he was nervous.', ru: 'Он испортил свою речь, потому что нервничал.' },
      { en: 'It was a bungled attempt to fix the leak.', ru: 'Это была неуклюжая попытка починить течь.' },
      { en: 'Don\'t let him help; he will just bungle it.', ru: 'Не позволяй ему помогать; он просто все испортит.' }
    ]
),

createRichWord('c2_burnish', 'Burnish', '/ˈbɜːnɪʃ/', 'бёниш', 'Полировать / Улучшать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сделать что-то блестящим трением; или улучшить репутацию/образ.',
    '- Металл: "Burnish gold" (Полировать золото)\n- Репутация: "Burnish image" (Улучшить имидж)\n- Поверхность: "Burnished surface" (Отполированная поверхность)',
    [
      { en: 'He tried to burnish his public image.', ru: 'Он пытался улучшить (отполировать) свой общественный имидж.' },
      { en: 'The metal was burnished until it shone like a mirror.', ru: 'Металл полировали, пока он не засиял как зеркало.' },
      { en: 'She burnished the silver candlesticks.', ru: 'Она натерла серебряные подсвечники.' },
      { en: 'A burnished copper pot hung on the wall.', ru: 'На стене висел начищенный медный котелок.' }
    ]
),

createRichWord('c2_buzzard', 'Buzzard', '/ˈbʌzəd/', 'базэд', 'Канюк / Стервятник', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Хищная птица (в Европе - канюк, в США часто называют стервятником).',
    '- Птица: "Common buzzard" (Обыкновенный канюк)\n- Полет: "Soaring buzzard" (Парящий канюк)\n- Охота: "Buzzard hunting" (Охота канюка)',
    [
      { en: 'A buzzard circled high in the sky looking for prey.', ru: 'Канюк кружил высоко в небе в поисках добычи.' },
      { en: 'Buzzards are common birds of prey in Britain.', ru: 'Канюки — распространенные хищные птицы в Британии.' },
      { en: 'The buzzard swooped down to catch a mouse.', ru: 'Канюк спикировал вниз, чтобы поймать мышь.' },
      { en: 'We saw a buzzard perched on a fence post.', ru: 'Мы видели канюка, сидящего на столбе забора.' }
    ]
),

createRichWord('c2_bygone', 'Bygone', '/ˈbaɪɡɒn/', 'байгон', 'Прошлый / Пережитый', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Принадлежащий прошлому (обычно "bygone era" или "let bygones be bygones").',
    '- Время: "Bygone era" (Прошлая эпоха)\n- Идиома: "Let bygones be bygones" (Кто старое помянет, тому глаз вон / Забыть обиды)\n- Дни: "Bygone days" (Минувшие дни)',
    [
      { en: 'The photographs show a bygone era of elegance.', ru: 'Фотографии показывают ушедшую эпоху элегантности.' },
      { en: 'Let bygones be bygones and be friends again.', ru: 'Давай забудем старые обиды и снова будем друзьями.' },
      { en: 'He reminisced about bygone days.', ru: 'Он предавался воспоминаниям о минувших днях.' },
      { en: 'Those customs belong to a bygone age.', ru: 'Эти обычаи принадлежат прошлому веку.' }
    ]
),

createRichWord('c2_cacophony', 'Cacophony', '/kəˈkɒfəni/', 'кэкóфэни', 'Какофония', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Резкая, неприятная смесь звуков.',
    '- Звук: "Deafening cacophony" (Оглушительная какофония)\n- Место: "Cacophony of the city" (Какофония города)\n- Голоса: "Cacophony of voices" (Разноголосица)',
    [
      { en: 'A cacophony of alarms went off at once.', ru: 'Какофония сигнализаций сработала одновременно.' },
      { en: 'We could hear a cacophony of animal sounds from the zoo.', ru: 'Мы слышали какофонию звуков животных из зоопарка.' },
      { en: 'The classroom was a cacophony of shouting children.', ru: 'Класс был наполнен какофонией кричащих детей.' },
      { en: 'He tried to speak over the cacophony of traffic.', ru: 'Он пытался говорить, перекрикивая шум транспорта.' }
    ]
),

createRichWord('c2_cadence', 'Cadence', '/ˈkeɪdns/', 'кейднс', 'Каденция / Ритм', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Ритмическое течение звуков или речи; интонация.',
    '- Речь: "Musical cadence" (Музыкальная каденция/ритм)\n- Голос: "Falling cadence" (Понижающаяся интонация)\n- Шаг: "Marching cadence" (Ритм марша)',
    [
      { en: 'He spoke with a soft, musical cadence.', ru: 'Он говорил с мягким, музыкальным ритмом.' },
      { en: 'The poem has a beautiful rhythmic cadence.', ru: 'У стихотворения красивый ритмический строй.' },
      { en: 'Soldiers marched to the cadence of the drum.', ru: 'Солдаты маршировали под ритм барабана.' },
      { en: 'Her voice dropped in a final cadence.', ru: 'Ее голос понизился в завершающей интонации.' }
    ]
),

createRichWord('c2_cajole', 'Cajole', '/kəˈdʒəʊl/', 'кэджоул', 'Уговаривать (лестью)', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Убеждать кого-то сделать что-то с помощью лести или настойчивости.',
    '- Убеждение: "Cajole into doing" (Уговорить сделать)\n- Метод: "Coax and cajole" (Упрашивать и умасливать)\n- Результат: "Managed to cajole" (Удалось уговорить)',
    [
      { en: 'He managed to cajole her into going to the party.', ru: 'Ему удалось уговорить ее пойти на вечеринку.' },
      { en: 'She cajoled her father into buying her a car.', ru: 'Она лестью заставила отца купить ей машину.' },
      { en: 'I tried to cajole him, but he refused.', ru: 'Я пытался его умаслить, но он отказался.' },
      { en: 'It took a lot of cajoling to get the baby to eat.', ru: 'Потребовалось много уговоров, чтобы заставить ребенка поесть.' }
    ]
  ),
createRichWord('c2_conceive', 'Conceive', '/kənˈsiːv/', 'кэнсив', 'Постигать / Зачать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Придумать идею, представить себе что-то или зачать ребенка.',
    '- Идея: "Conceive a plan" (Задумать план)\n- Понимание: "Cannot conceive" (Не могу постичь)\n- Ребенок: "Conceive a child" (Зачать ребенка)',
    [
      { en: 'I cannot conceive how he did it.', ru: 'Я не могу постичь, как он это сделал.' },
      { en: 'The project was conceived in 2020.', ru: 'Проект был задуман в 2020 году.' },
      { en: 'She was unable to conceive a child.', ru: 'Она не могла зачать ребенка.' },
      { en: 'It is difficult to conceive of a world without internet.', ru: 'Трудно представить себе мир без интернета.' }
    ],
    []
),

createRichWord('c2_condemn', 'Condemn', '/kənˈdem/', 'кэндем', 'Осуждать / Приговаривать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Выражать сильное неодобрение или выносить приговор (суд).',
    '- Мнение: "Strongly condemn" (Решительно осуждать)\n- Суд: "Condemn to death" (Приговорить к смерти)\n- Здание: "Condemned building" (Здание под снос)',
    [
      { en: 'We strongly condemn this attack.', ru: 'Мы решительно осуждаем это нападение.' },
      { en: 'He was condemned to ten years in prison.', ru: 'Его приговорили к десяти годам тюрьмы.' },
      { en: 'The building was condemned as unsafe.', ru: 'Здание было признано небезопасным (и подлежащим сносу).' },
      { en: 'She is condemned to a life of loneliness.', ru: 'Она обречена на одинокую жизнь.' }
    ],
    []
),

createRichWord('c2_confer', 'Confer', '/kənˈfɜːr/', 'кэнфё', 'Совещаться / Присваивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Обсуждать что-то с кем-то или давать звание/право.',
    '- Обсуждение: "Confer with colleagues" (Совещаться с коллегами)\n- Награда: "Confer a title" (Присвоить титул)\n- Степень: "Confer a degree" (Присудить степень)',
    [
      { en: 'I need to confer with my lawyer.', ru: 'Мне нужно посоветоваться с моим адвокатом.' },
      { en: 'The Queen conferred a knighthood on him.', ru: 'Королева пожаловала ему рыцарское звание.' },
      { en: 'The constitution confers certain rights on citizens.', ru: 'Конституция наделяет граждан определенными правами.' },
      { en: 'He withdrew to confer with his advisors.', ru: 'Он удалился, чтобы посовещаться со своими советниками.' }
    ],
    []
),

createRichWord('c2_confine', 'Confine', '/kənˈfaɪn/', 'кэнфайн', 'Ограничивать / Заточать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Держать в границах (места или темы) или запирать.',
    '- Тема: "Confine remarks" (Ограничить замечания)\n- Место: "Confined space" (Замкнутое пространство)\n- Болезнь: "Confined to bed" (Прикованный к постели)',
    [
      { en: 'Please confine your comments to the topic.', ru: 'Пожалуйста, ограничьте свои комментарии темой обсуждения.' },
      { en: 'He was confined to a wheelchair.', ru: 'Он был прикован к инвалидному креслу.' },
      { en: 'The prisoners were confined in small cells.', ru: 'Заключенных держали в маленьких камерах.' },
      { en: 'We should confine our discussion to the facts.', ru: 'Нам следует ограничить нашу дискуссию фактами.' }
    ],
    []
  ),
createRichWord('c2_constrain', 'Constrain', '/kənˈstreɪn/', 'кэнстрейн', 'Сдерживать / Ограничивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Вынуждать кого-то делать что-то или ограничивать свободу действий.',
    '- Ограничение: "Constrained by budget" (Ограниченный бюджетом)\n- Поведение: "Feel constrained" (Чувствовать скованность)\n- Действие: "Constrain movement" (Сдерживать движение)',
    [
      { en: 'We are constrained by a lack of money.', ru: 'Мы ограничены нехваткой денег.' },
      { en: 'I felt constrained to agree with him.', ru: 'Я чувствовал себя вынужденным согласиться с ним.' },
      { en: 'Regulations constrain the industry.', ru: 'Нормативные акты ограничивают промышленность.' },
      { en: 'He acted with a constrained air.', ru: 'Он вел себя скованно (неестественно).' }
    ],
    []
),

createRichWord('c2_contend', 'Contend', '/kənˈtend/', 'кэнтенд', 'Утверждать / Бороться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Заявлять, что что-то является правдой (в споре), или соревноваться/сражаться с трудностями.',
    '- Спор: "Contend that..." (Утверждать, что...)\n- Борьба: "Contend with problems" (Бороться с проблемами)\n- Спорт: "Contender" (Претендент)',
    [
      { en: 'I contend that the plan is impossible.', ru: 'Я утверждаю, что план невозможен.' },
      { en: 'Rescuers had to contend with bad weather.', ru: 'Спасателям пришлось бороться с плохой погодой.' },
      { en: 'Three teams are contending for the title.', ru: 'Три команды борются за титул.' },
      { en: 'He is a leading contender for the job.', ru: 'Он ведущий претендент на эту работу.' }
    ],
    []
),

createRichWord('c2_convict', 'Convict', '/kənˈvɪkt/', 'кэнвикт', 'Осуждать (признавать виновным)', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Официально признать виновным в суде. Как сущ. (/ˈkɒn.vɪkt/) — осужденный/заключенный.',
    '- Суд: "Convict of murder" (Признать виновным в убийстве)\n- Человек: "Escaped convict" (Сбежавший заключенный)\n- Статус: "Convicted criminal" (Осужденный преступник)',
    [
      { en: 'The jury convicted him of robbery.', ru: 'Присяжные признали его виновным в грабеже.' },
      { en: 'There was not enough evidence to convict.', ru: 'Не было достаточно улик для обвинительного приговора.' },
      { en: 'He is an escaped convict.', ru: 'Он сбежавший заключенный (сущ.).' },
      { en: 'She has been convicted twice before.', ru: 'Она была осуждена дважды до этого.' }
    ],
    []
),

createRichWord('c2_correlate', 'Correlate', '/ˈkɒr.ə.leɪt/', 'корэлейт', 'Соотноситься / Коррелировать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Иметь взаимную связь, где одно зависит от другого.',
    '- Статистика: "Strongly correlate" (Сильно коррелировать)\n- Связь: "Correlate with" (Соотноситься с)\n- Наука: "Correlation" (Корреляция)',
    [
      { en: 'Smoking correlates strongly with lung cancer.', ru: 'Курение сильно коррелирует с раком легких.' },
      { en: 'Poverty and crime often correlate.', ru: 'Бедность и преступность часто взаимосвязаны.' },
      { en: 'We cannot correlate these two sets of figures.', ru: 'Мы не можем соотнести эти два набора цифр.' },
      { en: 'There is a negative correlation between them.', ru: 'Между ними существует отрицательная корреляция.' }
    ],
    []
),

createRichWord('c2_counsel', 'Counsel', '/ˈkaʊn.səl/', 'каунсл', 'Совет / Адвокат', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Профессиональный совет или юрист, ведущий дело в суде. Как глагол — советовать.',
    '- Право: "Defense counsel" (Адвокат защиты)\n- Мудрость: "Keep your own counsel" (Помалкивать / Держать мысли при себе)\n- Помощь: "Seek counsel" (Искать совета)',
    [
      { en: 'The judge asked counsel to approach the bench.', ru: 'Судья попросил адвоката подойти к судейскому столу.' },
      { en: 'Listen to the counsel of your elders.', ru: 'Слушай советы старших.' },
      { en: 'He counseled them to be patient.', ru: 'Он посоветовал им быть терпеливыми (глагол).' },
      { en: 'I decided to keep my own counsel.', ru: 'Я решил оставить свое мнение при себе.' }
    ],
    []
  ),
createRichWord('c2_casualty', 'Casualty', '/ˈkæʒ.ju.əl.ti/', 'кэжуалти', 'Жертва / Пострадавший', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Человек, убитый или раненый на войне или в аварии.',
    '- Война: "Heavy casualties" (Тяжелые потери)\n- Авария: "No casualties" (Без жертв)\n- Отделение: "Casualty department" (Отделение травматологии - брит.)',
    [
      { en: 'The army suffered heavy casualties.', ru: 'Армия понесла тяжелые потери.' },
      { en: 'Luckily, there were no casualties in the fire.', ru: 'К счастью, при пожаре обошлось без жертв.' },
      { en: 'Civilian casualties are increasing.', ru: 'Число жертв среди гражданского населения растет.' },
      { en: 'Truth is the first casualty of war.', ru: 'Правда — первая жертва войны.' }
    ],
    []
),

createRichWord('c2_censor', 'Censor', '/ˈsen.sər/', 'сенсэ', 'Цензор / Цензурировать', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Человек, проверяющий книги/фильмы и удаляющий неприемлемое. Как глагол — подвергать цензуре.',
    '- Действие: "Heavily censored" (Сильно отцензурированный)\n- СМИ: "Government censor" (Правительственный цензор)\n- Интернет: "Censor the internet" (Цензурировать интернет)',
    [
      { en: 'The letters were censored during the war.', ru: 'Письма подвергались цензуре во время войны.' },
      { en: 'The film was banned by the censors.', ru: 'Фильм был запрещен цензорами.' },
      { en: 'They tried to censor the news report.', ru: 'Они пытались подвергнуть цензуре новостной репортаж.' },
      { en: 'Censorship restricts freedom of speech.', ru: 'Цензура ограничивает свободу слова.' }
    ],
    []
),

createRichWord('c2_census', 'Census', '/ˈsen.səs/', 'сенсэс', 'Перепись населения', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Официальный подсчет населения и сбор информации о нем.',
    '- Государство: "National census" (Национальная перепись)\n- Действие: "Conduct a census" (Проводить перепись)\n- Данные: "Census data" (Данные переписи)',
    [
      { en: 'The census is taken every ten years.', ru: 'Перепись проводится каждые десять лет.' },
      { en: 'According to the census, the population has grown.', ru: 'Согласно переписи, население выросло.' },
      { en: 'Census forms were sent to every household.', ru: 'Бланки переписи были отправлены в каждое домохозяйство.' },
      { en: 'Demographers analyze census results.', ru: 'Демографы анализируют результаты переписи.' }
    ],
    []
),

createRichWord('c2_chancellor', 'Chancellor', '/ˈtʃɑːn.səl.ər/', 'чансэлэ', 'Канцлер', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Глава правительства в некоторых странах (Германия) или глава университета.',
    '- Политика: "German Chancellor" (Канцлер Германии)\n- Финансы: "Chancellor of the Exchequer" (Министр финансов Великобритании)\n- Университет: "University Chancellor" (Ректор/Канцлер университета)',
    [
      { en: 'The Chancellor announced new tax cuts.', ru: 'Канцлер (министр финансов) объявил о новых налоговых льготах.' },
      { en: 'Angela Merkel was the Chancellor of Germany.', ru: 'Ангела Меркель была канцлером Германии.' },
      { en: 'The Vice-Chancellor runs the university.', ru: 'Вице-канцлер управляет университетом.' },
      { en: 'It is a high political office.', ru: 'Это высокая политическая должность.' }
    ],
    []
),

createRichWord('c2_chronic', 'Chronic', '/ˈkrɒn.ɪk/', 'кроник', 'Хронический', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Длящийся долгое время (обычно о болезни или проблеме).',
    '- Здоровье: "Chronic pain" (Хроническая боль)\n- Проблема: "Chronic shortage" (Хроническая нехватка)\n- Человек: "Chronic smoker" (Заядлый курильщик)',
    [
      { en: 'He suffers from chronic back pain.', ru: 'Он страдает от хронической боли в спине.' },
      { en: 'There is a chronic shortage of teachers.', ru: 'Существует хроническая нехватка учителей.' },
      { en: 'The economy has chronic problems.', ru: 'У экономики есть хронические проблемы.' },
      { en: 'She has a chronic illness.', ru: 'У нее хроническое заболевание.' }
    ],
    []
),

createRichWord('c2_chronicle', 'Chronicle', '/ˈkrɒn.ɪ.kəl/', 'кроникл', 'Хроника / Летопись', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Запись исторических событий в порядке их возникновения. Как глагол — вести хронику.',
    '- История: "Ancient chronicle" (Древняя летопись)\n- Сюжет: "Family chronicle" (Семейная хроника)\n- Действие: "Chronicle events" (Описывать события)',
    [
      { en: 'The book chronicles the history of the war.', ru: 'Книга описывает историю войны.' },
      { en: 'He wrote a chronicle of his travels.', ru: 'Он написал хронику своих путешествий.' },
      { en: 'The Narnia Chronicles are famous books.', ru: 'Хроники Нарнии — известные книги.' },
      { en: 'It serves as a chronicle of the times.', ru: 'Это служит летописью времени.' }
    ],
    []
),

createRichWord('c2_cling', 'Cling', '/klɪŋ/', 'клинг', 'Цепляться / Липнуть', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Крепко держаться за что-то или кого-то; отказываться отпускать.',
    '- Физически: "Cling to a rock" (Цепляться за скалу)\n- Эмоционально: "Cling to hope" (Цепляться за надежду)\n- Одежда: "Dress clings" (Платье облегает/липнет)',
    [
      { en: 'The wet shirt clung to his body.', ru: 'Мокрая рубашка прилипла к его телу.' },
      { en: 'The child clung to her mother\'s leg.', ru: 'Ребенок вцепился в ногу матери.' },
      { en: 'He still clings to the belief that she will return.', ru: 'Он все еще цепляется за веру, что она вернется.' },
      { en: 'Leaves cling to the trees in autumn.', ru: 'Листья держатся на деревьях осенью.' }
    ],
    []
),

createRichWord('c2_closure', 'Closure', '/ˈkləʊ.ʒər/', 'клоужэ', 'Закрытие / Завершение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Факт закрытия бизнеса/учреждения или чувство успокоения после неприятного события (психологическое).',
    '- Бизнес: "Factory closure" (Закрытие фабрики)\n- Дорога: "Road closure" (Перекрытие дороги)\n- Чувства: "Need closure" (Нуждаться в гештальте/завершении)',
    [
      { en: 'The closure of the hospital caused protests.', ru: 'Закрытие больницы вызвало протесты.' },
      { en: 'I need closure to move on with my life.', ru: 'Мне нужно поставить точку (получить завершение), чтобы жить дальше.' },
      { en: 'They announced the closure of the mine.', ru: 'Они объявили о закрытии шахты.' },
      { en: 'The funeral brought a sense of closure.', ru: 'Похороны принесли чувство завершенности.' }
    ],
    []
),

createRichWord('c2_clutch', 'Clutch', '/klʌtʃ/', 'клатч', 'Сжимать / Сцепление', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Резко и крепко схватить. Как сущ. — педаль сцепления или маленькая сумочка.',
    '- Действие: "Clutch at straw" (Хвататься за соломинку)\n- Авто: "Press the clutch" (Нажать сцепление)\n- Страх: "Clutch a bag" (Вцепиться в сумку)',
    [
      { en: 'He clutched his chest in pain.', ru: 'Он схватился за грудь от боли.' },
      { en: 'She clutched her purse tightly.', ru: 'Она крепко сжимала свою сумочку.' },
      { en: 'You need to release the clutch slowly.', ru: 'Нужно медленно отпускать сцепление.' },
      { en: 'He is in the clutches of the enemy.', ru: 'Он в лапах врага.' }
    ],
    [
        { meaning: "Small bag (noun)", translation: "Клатч (сумка)", example: { en: "She carried a silver clutch.", ru: "Она несла серебряный клатч." } },
        { meaning: "Critical/Crucial (Slang Adj)", translation: "Решающий / Спасительный", example: { en: "A clutch player.", ru: "Игрок, тащащий в решающий момент." } }
    ]
),

createRichWord('c2_cognitive', 'Cognitive', '/ˈkɒɡ.nə.tɪv/', 'когнитив', 'Когнитивный / Познавательный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Связанный с процессом мышления, знания и понимания.',
    '- Психология: "Cognitive development" (Когнитивное развитие)\n- Терапия: "Cognitive therapy" (Когнитивная терапия)\n- Способность: "Cognitive ability" (Познавательная способность)',
    [
      { en: 'Reading helps improve cognitive skills.', ru: 'Чтение помогает улучшить когнитивные навыки.' },
      { en: 'He has a slight cognitive impairment.', ru: 'У него небольшое когнитивное нарушение.' },
      { en: 'Cognitive psychology studies the mind.', ru: 'Когнитивная психология изучает разум.' },
      { en: 'Children go through stages of cognitive growth.', ru: 'Дети проходят стадии когнитивного роста.' }
    ],
    []
),

createRichWord('c2_coherent', 'Coherent', '/kəʊˈhɪə.rənt/', 'коухиэрэнт', 'Связный / Последовательный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Логичный и понятный (о речи/тексте) или объединенный в целое.',
    '- Речь: "Coherent argument" (Связный аргумент)\n- Текст: "Not coherent" (Бессвязный)\n- Политика: "Coherent strategy" (Последовательная стратегия)',
    [
      { en: 'He was too drunk to be coherent.', ru: 'Он был слишком пьян, чтобы связно говорить.' },
      { en: 'The essay lacks a coherent structure.', ru: 'Эссе не хватает связной структуры.' },
      { en: 'They need a coherent plan for the future.', ru: 'Им нужен последовательный план на будущее.' },
      { en: 'It was a coherent explanation.', ru: 'Это было внятное объяснение.' }
    ],
    []
  ),
createRichWord('c2_complement', 'Complement', '/ˈkɒm.plɪ.mənt/', 'комплимент', 'Дополнение / Дополнять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Добавлять что-то к чему-то, чтобы улучшить или сделать совершенным. Не путать с "Compliment" (похвала).',
    '- Еда: "Complement the meal" (Дополнять блюдо)\n- Команда: "Skills complement each other" (Навыки дополняют друг друга)\n- Стиль: "Perfect complement" (Идеальное дополнение)',
    [
      { en: 'The wine complements the cheese perfectly.', ru: 'Вино идеально дополняет сыр.' },
      { en: 'Her shoes complement her dress.', ru: 'Её туфли дополняют платье.' },
      { en: 'They have different skills that complement each other.', ru: 'У них разные навыки, которые дополняют друг друга.' },
      { en: 'This book is a perfect complement to the course.', ru: 'Эта книга — идеальное дополнение к курсу.' }
    ],
    []
),

createRichWord('c2_comprehend', 'Comprehend', '/ˌkɒm.prɪˈhend/', 'комприхенд', 'Постигать / Понимать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Понимать что-то полностью (особенно сложное).',
    '- Разум: "Fail to comprehend" (Не суметь понять)\n- Масштаб: "Hard to comprehend" (Трудно постичь)\n- Смысл: "Fully comprehend" (Полностью осознать)',
    [
      { en: 'I cannot comprehend why he did it.', ru: 'Я не могу постичь, почему он это сделал.' },
      { en: 'The scale of the disaster is hard to comprehend.', ru: 'Масштаб катастрофы трудно осознать.' },
      { en: 'She failed to comprehend the seriousness of the situation.', ru: 'Она не смогла осознать серьезность ситуации.' },
      { en: 'It is beyond my power to comprehend.', ru: 'Это выше моего понимания.' }
    ],
    []
),

createRichWord('c2_compress', 'Compress', '/kəmˈpres/', 'кэмпрес', 'Сжимать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Делать что-то меньше по объему или короче по времени.',
    '- Файл: "Compress a file" (Сжать файл)\n- Газ: "Compressed air" (Сжатый воздух)\n- Время: "Compress into one day" (Ужать в один день)',
    [
      { en: 'The machine compresses old cars into blocks.', ru: 'Машина спрессовывает старые машины в блоки.' },
      { en: 'You can compress the file to save space.', ru: 'Вы можете сжать файл, чтобы сэкономить место.' },
      { en: 'The course is compressed into three weeks.', ru: 'Курс сжат до трех недель.' },
      { en: 'Compressed gas is dangerous.', ru: 'Сжатый газ опасен.' }
    ],
    [
        { meaning: "Medical pad (noun)", translation: "Компресс", example: { en: "Apply a cold compress.", ru: "Приложите холодный компресс." } }
    ]
),

createRichWord('c2_conceal', 'Conceal', '/kənˈsiːl/', 'кэнсил', 'Скрывать / Утаивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Прятать что-то или держать информацию в секрете.',
    '- Предмет: "Conceal a weapon" (Скрывать оружие)\n- Чувства: "Conceal emotions" (Скрывать эмоции)\n- Правда: "Conceal the truth" (Утаивать правду)',
    [
      { en: 'He tried to conceal his heavy drinking.', ru: 'Он пытался скрыть свое пьянство.' },
      { en: 'The camera was concealed in a button.', ru: 'Камера была спрятана в пуговице.' },
      { en: 'She couldn\'t conceal her surprise.', ru: 'Она не смогла скрыть своего удивления.' },
      { en: 'It is a crime to conceal evidence.', ru: 'Утаивание улик — это преступление.' }
    ],
    []
),

createRichWord('c2_concede', 'Concede', '/kənˈsiːd/', 'кэнсид', 'Признавать / Уступать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Признать (неохотно), что что-то верно, или признать поражение.',
    '- Спор: "Concede a point" (Признать правоту в чем-то)\n- Выборы: "Concede defeat" (Признать поражение)\n- Спорт: "Concede a goal" (Пропустить гол)',
    [
      { en: 'He conceded that he had made a mistake.', ru: 'Он признал, что совершил ошибку.' },
      { en: 'The candidate conceded the election.', ru: 'Кандидат признал поражение на выборах.' },
      { en: 'I am not ready to concede yet.', ru: 'Я еще не готов уступить.' },
      { en: 'The team conceded two goals.', ru: 'Команда пропустила два гола.' }
    ],
    []
),

createRichWord('c2_concession', 'Concession', '/kənˈseʃ.ən/', 'кэнсэшн', 'Уступка', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'То, что вы позволяете или отдаете, чтобы закончить спор.',
    '- Переговоры: "Make a concession" (Сделать уступку)\n- Политика: "Major concession" (Серьезная уступка)\n- Цена: "Tax concession" (Налоговая льгота)',
    [
      { en: 'Both sides had to make concessions.', ru: 'Обеим сторонам пришлось пойти на уступки.' },
      { en: 'The company offered a wage concession.', ru: 'Компания предложила уступку по зарплате.' },
      { en: 'As a concession, I will let you stay late.', ru: 'В качестве уступки, я разрешу тебе остаться допоздна.' },
      { en: 'Students get a travel concession.', ru: 'Студенты получают льготу на проезд.' }
    ],
    []
),

createRichWord('c2_configure', 'Configure', '/kənˈfɪɡ.ər/', 'кэнфигэ', 'Настраивать / Конфигурировать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Устраивать части чего-либо определенным образом, особенно компьютерное оборудование.',
    '- IT: "Configure settings" (Настроить параметры)\n- Оборудование: "Configure the system" (Сконфигурировать систему)\n- Расположение: "Configure correctly" (Настроить правильно)',
    [
      { en: 'You need to configure the software first.', ru: 'Сначала вам нужно настроить программное обеспечение.' },
      { en: 'The plane is configured for 200 passengers.', ru: 'Самолет сконфигурирован на 200 пассажиров.' },
      { en: 'It is hard to configure the network manually.', ru: 'Трудно настроить сеть вручную.' },
      { en: 'The seats can be configured in various ways.', ru: 'Сиденья можно расположить разными способами.' }
    ],
    []
),

createRichWord('c2_conform', 'Conform', '/kənˈfɔːm/', 'кэнфом', 'Соответствовать / Подчиняться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Вести себя согласно правилам или стандартам общества.',
    '- Общество: "Conform to society" (Подстраиваться под общество)\n- Стандарт: "Conform to safety standards" (Соответствовать стандартам безопасности)\n- Давление: "Pressure to conform" (Давление подчиниться)',
    [
      { en: 'He refuses to conform to social norms.', ru: 'Он отказывается подчиняться социальным нормам.' },
      { en: 'The building does not conform to safety regulations.', ru: 'Здание не соответствует правилам безопасности.' },
      { en: 'Teenagers often feel pressure to conform.', ru: 'Подростки часто чувствуют давление быть как все.' },
      { en: 'The product must conform to specifications.', ru: 'Продукт должен соответствовать спецификациям.' }
    ],
    []
),

createRichWord('c2_congregate', 'Congregate', '/ˈkɒŋ.ɡrɪ.ɡeɪt/', 'конгригейт', 'Собираться / Сходиться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Собираться вместе большой группой.',
    '- Люди: "Crowds congregate" (Толпы собираются)\n- Место: "Congregate in the square" (Собираться на площади)\n- Религия: "Congregation" (Прихожане - сущ.)',
    [
      { en: 'People began to congregate in the hall.', ru: 'Люди начали собираться в зале.' },
      { en: 'Birds congregate near the water.', ru: 'Птицы собираются у воды.' },
      { en: 'Young people congregate around the cinema.', ru: 'Молодежь собирается вокруг кинотеатра.' },
      { en: 'A crowd congregated to watch the fight.', ru: 'Толпа собралась посмотреть на драку.' }
    ],
    []
),

createRichWord('c2_consensus', 'Consensus', '/kənˈsen.səs/', 'кэнсенсэс', 'Консенсус / Согласие', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Общее согласие мнения всех в группе.',
    '- Соглашение: "Reach a consensus" (Достичь консенсуса)\n- Мнение: "General consensus" (Общее мнение)\n- Процесс: "Consensus building" (Выработка согласованного решения)',
    [
      { en: 'We failed to reach a consensus.', ru: 'Нам не удалось достичь консенсуса.' },
      { en: 'The general consensus is that we should wait.', ru: 'Общее мнение таково, что нам следует подождать.' },
      { en: 'Consensus decision-making takes time.', ru: 'Принятие решений на основе консенсуса требует времени.' },
      { en: 'There is a growing consensus on climate change.', ru: 'Растет согласие по вопросу изменения климата.' }
    ],
    []
),

createRichWord('c2_consolidate', 'Consolidate', '/kənˈsɒl.ɪ.deɪt/', 'кэнсолидейт', 'Укреплять / Объединять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Делать позицию сильнее или объединять несколько вещей в одну.',
    '- Власть: "Consolidate power" (Укрепить власть)\n- Бизнес: "Consolidate debts" (Объединить долги)\n- Успех: "Consolidate success" (Закрепить успех)',
    [
      { en: 'The company consolidated its position in the market.', ru: 'Компания укрепила свои позиции на рынке.' },
      { en: 'We need to consolidate our debts into one loan.', ru: 'Нам нужно объединить наши долги в один кредит.' },
      { en: 'The two departments were consolidated.', ru: 'Два отдела были объединены.' },
      { en: 'He moved quickly to consolidate his victory.', ru: 'Он действовал быстро, чтобы закрепить свою победу.' }
    ],
    []
),

createRichWord('c2_constituency', 'Constituency', '/kənˈstɪtʃ.u.ən.si/', 'кэнститьюэнси', 'Избирательный округ', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Район, избирающий представителя в парламент, или люди, живущие там.',
    '- Политика: "Rural constituency" (Сельский избирательный округ)\n- Люди: "Serve the constituency" (Служить избирателям)\n- Выборы: "Win the constituency" (Победить в округе)',
    [
      { en: 'He represents a large rural constituency.', ru: 'Он представляет большой сельский избирательный округ.' },
      { en: 'The MP visited his constituency every week.', ru: 'Член парламента посещал свой округ каждую неделю.' },
      { en: 'Changes were made to constituency boundaries.', ru: 'Были внесены изменения в границы округов.' },
      { en: 'She works hard for her constituency.', ru: 'Она усердно работает для своих избирателей.' }
    ],
    []
),

createRichWord('c2_contemplate', 'Contemplate', '/ˈkɒn.təm.pleɪt/', 'контэмплейт', 'Созерцать / Обдумывать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Смотреть или думать о чем-то глубоко и долго.',
    '- Мысли: "Contemplate the future" (Обдумывать будущее)\n- Вид: "Contemplate the view" (Созерцать вид)\n- Планы: "Contemplate retirement" (Подумывать об отставке)',
    [
      { en: 'I contemplated the meaning of life.', ru: 'Я размышлял о смысле жизни.' },
      { en: 'He stood contemplating the painting.', ru: 'Он стоял, созерцая картину.' },
      { en: 'She is contemplating quitting her job.', ru: 'Она подумывает о том, чтобы уволиться.' },
      { en: 'The consequences are too awful to contemplate.', ru: 'Последствия слишком ужасны, чтобы их даже представлять.' }
    ],
    []
),

createRichWord('c2_contempt', 'Contempt', '/kənˈtempt/', 'кэнтемпт', 'Презрение', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Чувство, что кто-то не заслуживает уважения.',
    '- Чувство: "Look with contempt" (Смотреть с презрением)\n- Закон: "Contempt of court" (Неуважение к суду)\n- Отношение: "Beneath contempt" (Ниже всякого презрения)',
    [
      { en: 'She looked at him with utter contempt.', ru: 'Она посмотрела на него с полным презрением.' },
      { en: 'He showed contempt for the rules.', ru: 'Он продемонстрировал пренебрежение правилами.' },
      { en: 'He was jailed for contempt of court.', ru: 'Его посадили в тюрьму за неуважение к суду.' },
      { en: 'Familiarity breeds contempt.', ru: 'Чрезмерная близость порождает неуважение (посл.).' }
    ],
    []
),

createRichWord('c2_contingent', 'Contingent', '/kənˈtɪn.dʒənt/', 'кэнтинджент', 'Зависящий / Контингент', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Зависящий от чего-то, что может случиться. Как сущ. — группа людей.',
    '- Условие: "Contingent on" (Зависящий от)\n- Группа: "French contingent" (Французский контингент/группа)\n- План: "Contingency plan" (План на случай непредвиденных обстоятельств)',
    [
      { en: 'Our success is contingent on your support.', ru: 'Наш успех зависит от вашей поддержки.' },
      { en: 'A large contingent of fans traveled to the game.', ru: 'Большая группа (контингент) фанатов поехала на игру.' },
      { en: 'The deal is contingent upon funding.', ru: 'Сделка зависит от финансирования.' },
      { en: 'We have a contingency plan.', ru: 'У нас есть план на случай непредвиденных обстоятельств.' }
    ],
    []
),

createRichWord('c2_corps', 'Corps', '/kɔːr/', 'кор', 'Корпус (организация)', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Военное подразделение или группа людей с особой задачей. Произносится как "core"!',
    '- Армия: "Marine Corps" (Корпус морской пехоты)\n- Организация: "Peace Corps" (Корпус мира)\n- Группа: "Press corps" (Пресс-корпус / Журналисты)',
    [
      { en: 'He joined the Peace Corps after college.', ru: 'Он вступил в Корпус мира после колледжа.' },
      { en: 'The diplomatic corps attended the funeral.', ru: 'Дипломатический корпус присутствовал на похоронах.' },
      { en: 'She serves in the Medical Corps.', ru: 'Она служит в Медицинском корпусе.' },
      { en: 'A corps of volunteers helped clean up.', ru: 'Группа (корпус) волонтеров помогала с уборкой.' }
    ],
    []
),

createRichWord('c2_crumble', 'Crumble', '/ˈkrʌm.bəl/', 'крамбл', 'Крошиться / Рушиться', ProficiencyLevel.C2, 'verb', 'Medium', 'Neutral',
    'Распадаться на мелкие кусочки или (о власти/здании) разрушаться.',
    '- Еда: "Crumble bread" (Крошить хлеб)\n- Здание: "Walls crumbling" (Стены рушатся)\n- Отношения: "Marriage crumbled" (Брак распался)',
    [
      { en: 'The old house is starting to crumble.', ru: 'Старый дом начинает разрушаться.' },
      { en: 'She crumbled the cheese over the salad.', ru: 'Она покрошила сыр в салат.' },
      { en: 'Their empire began to crumble.', ru: 'Их империя начала рушиться.' },
      { en: 'The cookie crumbled in my hand.', ru: 'Печенье раскрошилось у меня в руке.' }
    ],
    []
),

createRichWord('c2_crust', 'Crust', '/krʌst/', 'краст', 'Корка / Земная кора', ProficiencyLevel.C2, 'noun', 'Medium', 'Neutral',
    'Твердый внешний слой хлеба или планеты.',
    '- Еда: "Bread crust" (Хлебная корка)\n- Земля: "Earth\'s crust" (Земная кора)\n- Характер: "Upper crust" (Высший свет / Элита)',
    [
      { en: 'Cut the crusts off the sandwiches.', ru: 'Срежь корки с сэндвичей.' },
      { en: 'The earth\'s crust is very thin.', ru: 'Земная кора очень тонкая.' },
      { en: 'The snow had a hard crust of ice.', ru: 'На снегу была твердая корка льда.' },
      { en: 'He likes pizza with a thin crust.', ru: 'Он любит пиццу с тонкой корочкой.' }
    ],
    []
),

createRichWord('c2_cynical', 'Cynical', '/ˈsɪn.ɪ.kəl/', 'синикэл', 'Циничный', ProficiencyLevel.C2, 'adj', 'Medium', 'Neutral',
    'Уверенный, что люди заботятся только о себе и не искренни.',
    '- Отношение: "Cynical attitude" (Циничное отношение)\n- Политика: "Cynical ploy" (Циничная уловка)\n- Взгляд: "Cynical view" (Циничный взгляд)',
    [
      { en: 'He has a cynical view of politics.', ru: 'У него циничный взгляд на политику.' },
      { en: 'Don\'t be so cynical about love.', ru: 'Не будь таким циничным по отношению к любви.' },
      { en: 'It was a cynical attempt to win votes.', ru: 'Это была циничная попытка получить голоса.' },
      { en: 'A cynical smile appeared on his face.', ru: 'Циничная улыбка появилась на его лице.' }
    ],
    []
  ),
createRichWord('c2_communion', 'Communion', '/kəˈmjuːniən/', 'кэмьюниэн', 'Причастие / Единение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Христианская церемония (Евхаристия); чувство глубокой духовной или эмоциональной связи.',
    '- Церковь: "Holy Communion" (Святое Причастие)\n- Духовность: "In communion with nature" (В единении с природой)\n- Группа: "Anglican Communion" (Англиканское сообщество)',
    [
        { en: 'They received Holy Communion at the morning mass.', ru: 'Они приняли Святое Причастие на утренней мессе.' },
        { en: 'He lived in the woods to be in close communion with nature.', ru: 'Он жил в лесу, чтобы быть в тесном единении с природой.' },
        { en: 'There was a silent communion between the two friends.', ru: 'Между двумя друзьями существовала безмолвная духовная связь.' },
        { en: 'The poet felt a sense of communion with the universe.', ru: 'Поэт ощущал чувство единения со вселенной.' }
    ],
    []
),

createRichWord('c2_conglomerate', 'Conglomerate', '/kənˈɡlɒmərət/', 'кэнгломэрэт', 'Конгломерат', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Огромная корпорация, состоящая из множества разных компаний; скопление разнородных частей.',
    '- Бизнес: "Media conglomerate" (Медиа-конгломерат)\n- Геология: "Rock conglomerate" (Конгломерат пород)\n- Структура: "Industrial conglomerate" (Промышленный конгломерат)',
    [
        { en: 'The media conglomerate owns newspapers, TV stations, and websites.', ru: 'Медиа-конгломерат владеет газетами, телеканалами и веб-сайтами.' },
        { en: 'Small companies are being bought by huge conglomerates.', ru: 'Маленькие компании скупаются огромными конгломератами.' },
        { en: 'The rock is a conglomerate of pebbles and sand.', ru: 'Эта порода представляет собой конгломерат гальки и песка.' },
        { en: 'It is a multinational conglomerate with offices everywhere.', ru: 'Это транснациональный конгломерат с офисами повсюду.' }
    ],
    []
),

createRichWord('c2_conjure', 'Conjure', '/ˈkʌndʒə(r)/', 'канджэ', 'Вызывать (магией) / Фокусничать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Заставлять что-то появляться как по волшебству; вызывать в памяти образы.',
    '- Магия: "Conjure spirits" (Вызывать духов)\n- Память: "Conjure up memories" (Вызывать воспоминания)\n- Трюк: "Conjure a rabbit" (Достать кролика)',
    [
        { en: 'The magician conjured a dove out of thin air.', ru: 'Фокусник наколдовал голубя из воздуха.' },
        { en: 'The music conjured up memories of my childhood.', ru: 'Музыка вызвала воспоминания о моем детстве.' },
        { en: 'He managed to conjure up a delicious meal from leftovers.', ru: 'Ему удалось состряпать вкусный обед из остатков.' },
        { en: 'The witch tried to conjure a demon.', ru: 'Ведьма пыталась вызвать демона.' }
    ],
    []
),

createRichWord('c2_constable', 'Constable', '/ˈkʌnstəbl/', 'канстэбл', 'Констебль', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Полицейский низшего ранга в Великобритании и некоторых других странах.',
    '- Полиция: "Police constable" (Констебль полиции)\n- Звание: "Chief Constable" (Главный констебль - начальник полиции региона)\n- Обращение: "PC Smith" (Констебль Смит)',
    [
        { en: 'The constable was patrolling the street on foot.', ru: 'Констебль патрулировал улицу пешком.' },
        { en: 'He started his career as a police constable.', ru: 'Он начал свою карьеру полицейским констеблем.' },
        { en: 'The Chief Constable announced new measures against crime.', ru: 'Главный констебль объявил о новых мерах борьбы с преступностью.' },
        { en: 'Constable Jones arrested the thief.', ru: 'Констебль Джонс арестовал вора.' }
    ],
    []
),

createRichWord('c2_construe', 'Construe', '/kənˈstruː/', 'кэнстру', 'Толковать / Интерпретировать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Понимать значение чего-либо определенным образом (часто используется в пассиве: be construed as).',
    '- Смысл: "Construe as an insult" (Воспринять как оскорбление)\n- Текст: "Construe the law" (Толковать закон)\n- Ошибка: "Misconstrue" (Неправильно истолковать)',
    [
        { en: 'Any silence will be construed as agreement.', ru: 'Любое молчание будет истолковано как согласие.' },
        { en: 'Please do not construe my criticism as hostility.', ru: 'Пожалуйста, не воспринимайте мою критику как враждебность.' },
        { en: 'How should we construe this legal document?', ru: 'Как нам следует толковать этот юридический документ?' },
        { en: 'His remarks were construed as a threat.', ru: 'Его замечания были истолкованы как угроза.' }
    ],
    []
),

createRichWord('c2_contentious', 'Contentious', '/kənˈtenʃəs/', 'кэнтэншэс', 'Спорный / Вздорный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Вызывающий много споров и разногласий; любящий спорить (о человеке).',
    '- Тема: "Contentious issue" (Спорный вопрос)\n- Человек: "Contentious person" (Сварливый человек)\n- Решение: "Contentious decision" (Спорное решение)',
    [
        { en: 'Abortion is a highly contentious issue in politics.', ru: 'Аборт — крайне спорный вопрос в политике.' },
        { en: 'They had a contentious relationship full of arguments.', ru: 'У них были конфликтные отношения, полные споров.' },
        { en: 'The referee made a contentious decision.', ru: 'Судья принял спорное решение.' },
        { en: 'He is a contentious old man who disagrees with everyone.', ru: 'Он вздорный старик, который со всеми не согласен.' }
    ],
    []
),

createRichWord('c2_continuum', 'Continuum', '/kənˈtɪnjuəm/', 'кэнтиньюэм', 'Континуум / Непрерывный ряд', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Непрерывная последовательность, в которой соседние элементы похожи, но крайние сильно отличаются.',
    '- Спектр: "Space-time continuum" (Пространственно-временной континуум)\n- Шкала: "On a continuum" (В непрерывном ряду)\n- Политика: "Political continuum" (Политический спектр)',
    [
        { en: 'Einstein introduced the concept of the space-time continuum.', ru: 'Эйнштейн ввел понятие пространственно-временного континуума.' },
        { en: 'Rich and poor are at opposite ends of the continuum.', ru: 'Богатые и бедные находятся на противоположных концах спектра.' },
        { en: 'It is impossible to say exactly where on the continuum grey becomes black.', ru: 'Невозможно точно сказать, где в этом спектре серый становится черным.' },
        { en: 'Education is a continuum from preschool to university.', ru: 'Образование — это непрерывный процесс от дошкольного до университетского.' }
    ],
    []
),

createRichWord('c2_coronary', 'Coronary', '/ˈkɒrənəri/', 'корэнэри', 'Коронарный / Сердечный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к артериям, окружающим сердце.',
    '- Болезнь: "Coronary heart disease" (Ишемическая болезнь сердца)\n- Приступ: "Coronary thrombosis" (Коронарный тромбоз)\n- Артерия: "Coronary artery" (Коронарная артерия)',
    [
        { en: 'He died of a massive coronary attack.', ru: 'Он умер от обширного сердечного приступа.' },
        { en: 'Smoking increases the risk of coronary disease.', ru: 'Курение увеличивает риск коронарной болезни.' },
        { en: 'Surgeons performed a coronary bypass operation.', ru: 'Хирурги провели операцию коронарного шунтирования.' },
        { en: 'The coronary arteries supply blood to the heart muscle.', ru: 'Коронарные артерии снабжают кровью сердечную мышцу.' }
    ],
    []
),

createRichWord('c2_coroner', 'Coroner', '/ˈkɒrənə(r)/', 'корэнэ', 'Коронер / Судмедэксперт', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Официальное лицо, расследующее причины внезапных или подозрительных смертей.',
    '- Суд: "Coroner\'s court" (Суд коронера)\n- Отчет: "Coroner\'s report" (Отчет коронера)\n- Вердикт: "Coroner\'s inquest" (Дознание коронера)',
    [
        { en: 'The coroner recorded a verdict of accidental death.', ru: 'Коронер вынес вердикт о смерти в результате несчастного случая.' },
        { en: 'An inquest was held by the coroner.', ru: 'Коронер провел дознание.' },
        { en: 'The coroner ordered an autopsy.', ru: 'Коронер распорядился провести вскрытие.' },
        { en: 'Evidence was presented to the local coroner.', ru: 'Улики были представлены местному коронеру.' }
    ],
    []
),

createRichWord('c2_corporal', 'Corporal', '/ˈkɔːpərəl/', 'копэрэл', 'Капрал / Телесный', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Воинское звание (сержантский состав); (прил.) телесный/физический.',
    '- Наказание: "Corporal punishment" (Телесное наказание)\n- Армия: "Corporal Jones" (Капрал Джонс)\n- Работа: "Lance Corporal" (Младший капрал)',
    [
        { en: 'Corporal punishment is banned in schools.', ru: 'Телесные наказания запрещены в школах.' },
        { en: 'The Corporal led his squad into battle.', ru: 'Капрал повел свое отделение в бой.' },
        { en: 'He was promoted to the rank of Corporal.', ru: 'Его повысили до звания капрала.' },
        { en: 'Works of corporal mercy include feeding the hungry.', ru: 'Дела телесного милосердия включают кормление голодных.' }
    ],
    []
),

createRichWord('c2_corpus', 'Corpus', '/ˈkɔːpəs/', 'корпэс', 'Корпус (текстов) / Собрание', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Большая коллекция письменных или устных текстов, используемая для лингвистического анализа; тело (устар.).',
    '- Лингвистика: "Text corpus" (Корпус текстов)\n- Данные: "Corpus of data" (Массив данных)\n- Право: "Habeas Corpus" (Хабеас корпус - правовая норма)',
    [
        { en: 'We analyzed a corpus of one million words.', ru: 'Мы проанализировали корпус из одного миллиона слов.' },
        { en: 'The entire corpus of Shakespeare\'s works is available online.', ru: 'Все собрание сочинений Шекспира доступно онлайн.' },
        { en: 'Linguists use a computer corpus to study grammar.', ru: 'Лингвисты используют компьютерный корпус для изучения грамматики.' },
        { en: 'Habeas Corpus protects against illegal imprisonment.', ru: 'Хабеас корпус защищает от незаконного тюремного заключения.' }
    ],
    []
),

createRichWord('c2_corrode', 'Corrode', '/kəˈrəʊd/', 'кэрэуд', 'Разъедать / Ржаветь', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Медленно разрушаться под воздействием химикатов (кислоты) или ржавчины.',
    '- Металл: "Acid corrodes metal" (Кислота разъедает металл)\n- Переносное: "Corrode trust" (Подрывать доверие)\n- Состояние: "Badly corroded" (Сильно проржавевший)',
    [
        { en: 'Rust has corroded the metal pipes.', ru: 'Ржавчина разъела металлические трубы.' },
        { en: 'Acid rain corrodes buildings and statues.', ru: 'Кислотный дождь разъедает здания и статуи.' },
        { en: 'Jealousy corroded their friendship.', ru: 'Ревность разрушила их дружбу.' },
        { en: 'The battery leaked and corroded the contacts.', ru: 'Батарейка протекла и окислила контакты.' }
    ],
    []
),

createRichWord('c2_covert', 'Covert', '/ˈkʌvət/', 'кавэт', 'Скрытый / Тайный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Сделанный тайно или скрыто (о шпионаже или военных операциях).',
    '- Операция: "Covert operation" (Тайная операция)\n- Наблюдение: "Covert surveillance" (Скрытое наблюдение)\n- Взгляд: "Covert glance" (Тайный взгляд)',
    [
        { en: 'The CIA launched a covert operation abroad.', ru: 'ЦРУ начало тайную операцию за границей.' },
        { en: 'They communicated using covert signals.', ru: 'Они общались с помощью тайных сигналов.' },
        { en: 'He cast a covert glance at her.', ru: 'Он бросил на нее украдкой взгляд.' },
        { en: 'Covert funding of the rebels was discovered.', ru: 'Было обнаружено тайное финансирование повстанцев.' }
    ],
    []
),

createRichWord('c2_crackle', 'Crackle', '/ˈkrækl/', 'крэкл', 'Трещать / Потрескивать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Издавать серию коротких резких звуков (как огонь или радио).',
    '- Огонь: "Fire crackles" (Огонь потрескивает)\n- Радио: "Radio crackles" (Радио трещит)\n- Энергия: "Crackle with energy" (Искриться энергией)',
    [
        { en: 'The logs crackled in the fireplace.', ru: 'Поленья потрескивали в камине.' },
        { en: 'The radio began to crackle with static.', ru: 'Радио начало трещать от помех.' },
        { en: 'The atmosphere crackled with tension.', ru: 'Атмосфера была наэлектризована напряжением.' },
        { en: 'Dry leaves crackled under our feet.', ru: 'Сухие листья хрустели у нас под ногами.' }
    ],
    []
),

createRichWord('c2_curtail', 'Curtail', '/kɜːˈteɪl/', 'кётейл', 'Сокращать / Урезать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Остановить что-то до его окончания; ограничить что-то (права, расходы).',
    '- Права: "Curtail freedom" (Ограничить свободу)\n- Расходы: "Curtail spending" (Урезать расходы)\n- Визит: "Curtail a visit" (Прервать визит)',
    [
        { en: 'We had to curtail our holiday due to illness.', ru: 'Нам пришлось прервать отпуск из-за болезни.' },
        { en: 'The new laws curtail the power of the police.', ru: 'Новые законы ограничивают власть полиции.' },
        { en: 'Inflation curtailed consumer spending.', ru: 'Инфляция сократила потребительские расходы.' },
        { en: 'He was forced to curtail his speech.', ru: 'Он был вынужден сократить свою речь.' }
    ],
    []
),

createRichWord('c2_deacon', 'Deacon', '/ˈdiːkən/', 'дикэн', 'Дьякон', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Религиозный служитель рангом ниже священника.',
    '- Церковь: "Ordained deacon" (Рукоположенный дьякон)\n- Роль: "Church deacon" (Церковный дьякон)\n- Служба: "Assist as deacon" (Помогать в качестве дьякона)',
    [
        { en: 'The deacon assisted the priest during the mass.', ru: 'Дьякон помогал священнику во время мессы.' },
        { en: 'He is studying to become a deacon.', ru: 'Он учится, чтобы стать дьяконом.' },
        { en: 'Deacons often visit the sick in the parish.', ru: 'Дьяконы часто посещают больных в приходе.' },
        { en: 'In some churches, a deacon can perform baptisms.', ru: 'В некоторых церквях дьякон может проводить крещение.' }
    ],
    []
),

createRichWord('c2_degenerate', 'Degenerate', '/dɪˈdʒenəreɪt/', 'дидженэрейт', 'Вырождаться / Дегенерат', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Ухудшаться (о качестве или морали); человек с низкими моральными стандартами (сущ.).',
    '- Качество: "Degenerate into chaos" (Скатиться в хаос)\n- Здоровье: "Condition degenerates" (Состояние ухудшается)\n- Оскорбление: "You degenerate!" (Ты дегенерат!)',
    [
        { en: 'The debate degenerated into a shouting match.', ru: 'Дебаты выродились в перебранку.' },
        { en: 'His health degenerated rapidly after the stroke.', ru: 'Его здоровье стремительно ухудшилось после инсульта.' },
        { en: 'A degenerate society loses its values.', ru: 'Деградирующее общество теряет свои ценности.' },
        { en: 'Don\'t be such a degenerate gambler.', ru: 'Не будь таким опустившимся игроманом.' }
    ],
    []
),

createRichWord('c2_deliberate', 'Deliberate', '/dɪˈlɪbərət/', 'дилибэрэт', 'Преднамеренный / Обдумывать', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Сделанный специально (прил.); Тщательно обдумывать (глагол - /dɪˈlɪbəreɪt/).',
    '- Действие: "Deliberate attack" (Преднамеренная атака)\n- Мысль: "Deliberate attempt" (Сознательная попытка)\n- Глагол: "Jury deliberated" (Присяжные совещались)',
    [
        { en: 'It was a deliberate attempt to hide the truth.', ru: 'Это была преднамеренная попытка скрыть правду.' },
        { en: 'The jury deliberated for three days.', ru: 'Присяжные совещались три дня.' },
        { en: 'He walked with slow, deliberate steps.', ru: 'Он шел медленными, размеренными шагами.' },
        { en: 'We need to deliberate on this matter carefully.', ru: 'Нам нужно тщательно обдумать этот вопрос.' }
    ],
    []
),

createRichWord('c2_delinquent', 'Delinquent', '/dɪˈlɪŋkwənt/', 'дилинквэнт', 'Правонарушитель / Просроченный', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Молодой преступник; (прил.) имеющий задолженность по оплате.',
    '- Подросток: "Juvenile delinquent" (Малолетний преступник)\n- Долг: "Delinquent account" (Просроченный счет)\n- Поведение: "Delinquent behavior" (Преступное поведение)',
    [
        { en: 'The centre helps juvenile delinquents reform.', ru: 'Центр помогает малолетним преступникам исправиться.' },
        { en: 'His parents are worried about his delinquent behaviour.', ru: 'Его родители обеспокоены его хулиганским поведением.' },
        { en: 'The bank contacted him about his delinquent loan.', ru: 'Банк связался с ним по поводу его просроченного кредита.' },
        { en: 'Social workers try to support delinquent youth.', ru: 'Социальные работники стараются поддерживать трудную молодежь.' }
    ],
    []
),

createRichWord('c2_delude', 'Delude', '/dɪˈluːd/', 'дилюд', 'Вводить в заблуждение', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Заставлять кого-то (часто себя) верить в то, что неправда.',
    '- Самообман: "Delude yourself" (Обманывать себя)\n- Статус: "Delude into thinking" (Ввести в заблуждение, заставив думать)\n- Прилагательное: "Deluded fool" (Одураченный глупец)',
    [
        { en: 'He deluded himself into believing she loved him.', ru: 'Он обманывал себя, веря, что она его любит.' },
        { en: 'Do not be deluded by their false promises.', ru: 'Не дайте себя обмануть их ложными обещаниями.' },
        { en: 'You are deluded if you think that will work.', ru: 'Ты заблуждаешься, если думаешь, что это сработает.' },
        { en: 'She is completely deluded about her talents.', ru: 'Она находится в полном заблуждении относительно своих талантов.' }
    ],
    []
  ),
createRichWord('c2_carcinoma', 'Carcinoma', '/ˌkɑːsɪˈnəʊmə/', 'касинэумэ', 'Карцинома / Рак', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Тип рака, который начинается в клетках кожи или тканей, выстилающих органы.',
    '- Медицина: "Basal cell carcinoma" (Базальноклеточная карцинома)\n- Диагноз: "Invasive carcinoma" (Инвазивная карцинома)\n- Лечение: "Treat carcinoma" (Лечить карциному)',
    [
        { en: 'Early detection of carcinoma improves survival rates.', ru: 'Раннее выявление карциномы повышает выживаемость.' },
        { en: 'Skin carcinoma is often caused by sun exposure.', ru: 'Рак кожи часто вызывается воздействием солнца.' },
        { en: 'The biopsy confirmed it was a carcinoma.', ru: 'Биопсия подтвердила, что это карцинома.' },
        { en: 'Doctors removed the carcinoma surgically.', ru: 'Врачи удалили карциному хирургическим путем.' }
    ],
    []
),

createRichWord('c2_carp', 'Carp', '/kɑːp/', 'кап', 'Карп / Придираться', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Крупная пресноводная рыба (сущ); постоянно жаловаться на мелочи (гл).',
    '- Рыба: "Koi carp" (Карп кои)\n- Жалоба: "Carp about everything" (Придираться ко всему)\n- Озеро: "Pond carp" (Прудовой карп)',
    [
        { en: 'The pond was full of colourful Japanese carp.', ru: 'Пруд был полон разноцветных японских карпов.' },
        { en: 'He always finds something to carp about.', ru: 'Он всегда находит, к чему придраться.' },
        { en: 'Stop carping at me and let me finish the work.', ru: 'Перестань пилить меня и дай закончить работу.' },
        { en: 'Anglers enjoy fishing for carp because they fight hard.', ru: 'Рыбаки любят ловить карпа, потому что он сильно сопротивляется.' }
    ],
    []
),

createRichWord('c2_cavalier', 'Cavalier', '/ˌkævəˈlɪə(r)/', 'кэвэлиэ', 'Бесцеремонный / Кавалер', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Не проявляющий должной заботы или уважения к важным вещам (прил); сторонник короля Карла I (сущ - ист).',
    '- Отношение: "Cavalier attitude" (Бесцеремонное отношение)\n- Поведение: "Treat in a cavalier way" (Относиться пренебрежительно)\n- История: "Roundheads and Cavaliers" (Круглоголовые и кавалеры)',
    [
        { en: 'He has a cavalier attitude towards safety regulations.', ru: 'У него пренебрежительное отношение к правилам безопасности.' },
        { en: 'The manager dismissed our concerns in a cavalier manner.', ru: 'Менеджер бесцеремонно отмахнулся от наших опасений.' },
        { en: 'You cannot be cavalier with other people\'s money.', ru: 'Нельзя так легкомысленно обращаться с чужими деньгами.' },
        { en: 'The Cavaliers fought for the King in the Civil War.', ru: 'Кавалеры сражались за короля в Гражданской войне.' }
    ],
    []
),

createRichWord('c2_cerebral', 'Cerebral', '/ˈserəbrəl/', 'сэрэбрэл', 'Церебральный / Интеллектуальный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к мозгу; интеллектуальный, а не эмоциональный.',
    '- Медицина: "Cerebral palsy" (Церебральный паралич)\n- Человек: "Cerebral movie" (Интеллектуальный фильм)\n- Анатомия: "Cerebral cortex" (Кора головного мозга)',
    [
        { en: 'He suffered a cerebral haemorrhage.', ru: 'У него произошло кровоизлияние в мозг.' },
        { en: 'She prefers cerebral movies that make you think.', ru: 'Она предпочитает интеллектуальные фильмы, которые заставляют думать.' },
        { en: 'Chess is a highly cerebral game.', ru: 'Шахматы — это высокоинтеллектуальная игра.' },
        { en: 'The debate was too cerebral for the general audience.', ru: 'Дебаты были слишком заумными для широкой публики.' }
    ],
    []
),

createRichWord('c2_cervix', 'Cervix', '/ˈs3ːvɪks/', 'сёвикс', 'Шейка матки', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Узкая нижняя часть матки.',
    '- Медицина: "Cancer of the cervix" (Рак шейки матки)\n- Анатомия: "The cervix" (Шейка матки)\n- Тест: "Cervical screening" (Скрининг шейки матки)',
    [
        { en: 'The baby\'s head pushes against the cervix during labour.', ru: 'Голова ребенка давит на шейку матки во время родов.' },
        { en: 'Regular check-ups can detect problems with the cervix.', ru: 'Регулярные осмотры могут выявить проблемы с шейкой матки.' },
        { en: 'The cervix dilates to allow the baby to be born.', ru: 'Шейка матки расширяется, чтобы позволить ребенку родиться.' },
        { en: 'Infection of the cervix requires medical treatment.', ru: 'Инфекция шейки матки требует медицинского лечения.' }
    ],
    []
),

createRichWord('c2_char', 'Char', '/tʃɑː(r)/', 'ча', 'Обугливать / Уборщица (устар.)', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Сжигать что-то так, чтобы поверхность почернела; (брит. сленг) чай; (устар.) уборщица.',
    '- Огонь: "Charred remains" (Обугленные останки)\n- Еда: "Charred wood" (Обугленное дерево)\n- Сленг: "Cup of char" (Чашка чая)',
    [
        { en: 'The fire charred the wooden beams of the roof.', ru: 'Огонь обуглил деревянные балки крыши.' },
        { en: 'Grill the peppers until the skin chars.', ru: 'Жарьте перцы на гриле, пока кожица не обуглится.' },
        { en: 'Only the charred walls of the house remained.', ru: 'Остались только обугленные стены дома.' },
        { en: 'Would you like a cup of char?', ru: 'Не хочешь чашечку чая?' }
    ],
    []
),

createRichWord('c2_clad', 'Clad', '/klæd/', 'клэд', 'Одетый / Облицованный', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Одетый во что-то (устар./лит.); покрытый слоем материала (металлом, камнем).',
    '- Одежда: "Scantily clad" (Полуголый / Скудно одетый)\n- Материал: "Iron-clad" (Обитый железом / Железный - аргумент)\n- Природа: "Snow-clad" (Покрытый снегом)',
    [
        { en: 'The knight was clad in shining armour.', ru: 'Рыцарь был облачен в сияющие доспехи.' },
        { en: 'The building is clad in glass and steel.', ru: 'Здание облицовано стеклом и сталью.' },
        { en: 'Hills clad in green forests surrounded the valley.', ru: 'Холмы, одетые в зеленые леса, окружали долину.' },
        { en: 'She arrived clad entirely in black.', ru: 'Она прибыла, одетая во все черное.' }
    ],
    []
),

createRichWord('c2_clamber', 'Clamber', '/ˈklæmbə(r)/', 'клэмбэ', 'Карабкаться', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Взбираться или ползти с трудом, используя руки и ноги.',
    '- Движение: "Clamber up the wall" (Вскарабкаться на стену)\n- Транспорт: "Clamber out of the car" (Выкарабкаться из машины)\n- Горы: "Clamber over rocks" (Лезть по скалам)',
    [
        { en: 'The children clambered over the rocks.', ru: 'Дети карабкались по скалам.' },
        { en: 'He managed to clamber out of the ditch.', ru: 'Ему удалось выбраться из канавы.' },
        { en: 'They clambered up the steep ladder to the attic.', ru: 'Они вскарабкались по крутой лестнице на чердак.' },
        { en: 'She clambered into the back seat of the van.', ru: 'Она неуклюже залезла на заднее сиденье фургона.' }
    ],
    []
),

createRichWord('c2_clamour', 'Clamour', '/ˈklæmə(r)/', 'клэмэ', 'Шум / Требование', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Громкий и непрерывный шум (крики); настойчивое публичное требование.',
    '- Звук: "Clamour of voices" (Гум голосов)\n- Требование: "Clamour for reform" (Требование реформ)\n- Глагол: "Clamour for attention" (Требовать внимания)',
    [
        { en: 'There is a growing public clamour for change.', ru: 'Растет общественное требование перемен.' },
        { en: 'He could hardly speak above the clamour of the crowd.', ru: 'Он едва мог говорить из-за шума толпы.' },
        { en: 'The hungry birds clamoured for food.', ru: 'Голодные птицы громко требовали еды.' },
        { en: 'Newspapers clamoured for the minister\'s resignation.', ru: 'Газеты настойчиво требовали отставки министра.' }
    ],
    []
),

createRichWord('c2_cleric', 'Cleric', '/ˈklerɪk/', 'клерик', 'Священнослужитель', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Религиозный лидер (священник, имам и т.д.).',
    '- Религия: "Muslim cleric" (Мусульманский священнослужитель)\n- Церковь: "Senior cleric" (Высокопоставленный клирик)\n- Группа: "Hardline cleric" (Радикальный священник)',
    [
        { en: 'The cleric delivered a sermon on forgiveness.', ru: 'Священнослужитель произнес проповедь о прощении.' },
        { en: 'Religious clerics gathered to discuss peace.', ru: 'Религиозные лидеры собрались, чтобы обсудить мир.' },
        { en: 'He sought advice from a local cleric.', ru: 'Он обратился за советом к местному священнику.' },
        { en: 'The government arrested a radical cleric.', ru: 'Правительство арестовало радикального священнослужителя.' }
    ],
    []
),

createRichWord('c2_clout', 'Clout', '/klaʊt/', 'клаут', 'Влияние / Удар', ProficiencyLevel.C2, 'noun', 'Low', 'Informal',
    'Власть и влияние (особенно в политике или бизнесе); сильный удар рукой.',
    '- Влияние: "Political clout" (Политический вес/влияние)\n- Удар: "Clout round the ear" (Затрещина)\n- Бизнес: "Financial clout" (Финансовая мощь)',
    [
        { en: 'The company has enough financial clout to buy its rival.', ru: 'У компании достаточно финансовой мощи, чтобы купить конкурента.' },
        { en: 'He used his political clout to get the job.', ru: 'Он использовал свое политическое влияние, чтобы получить эту работу.' },
        { en: 'She gave him a clout with a frying pan.', ru: 'Она ударила его сковородкой.' },
        { en: 'Small nations often lack diplomatic clout.', ru: 'Малым странам часто не хватает дипломатического веса.' }
    ],
    []
),

createRichWord('c2_coax', 'Coax', '/kəʊks/', 'кэукс', 'Уговаривать / Выманивать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Мягко и терпеливо убеждать кого-то сделать что-то; добиваться чего-то осторожностью.',
    '- Убеждение: "Coax into doing" (Уговорить сделать)\n- Огонь: "Coax a fire" (Раздуть огонь)\n- Животное: "Coax out" (Выманить)',
    [
        { en: 'She managed to coax the cat down from the tree.', ru: 'Ей удалось выманить кошку с дерева.' },
        { en: 'He coaxed the old car into starting.', ru: 'Он кое-как заставил старую машину завестись.' },
        { en: 'I tried to coax a smile out of him.', ru: 'Я пытался выдавить из него улыбку.' },
        { en: 'You can\'t force him, you have to coax him.', ru: 'Его нельзя заставить, его нужно уговорить.' }
    ],
    []
),

createRichWord('c2_coherence', 'Coherence', '/kəʊˈhɪərəns/', 'кэухирэнс', 'Связность / Согласованность', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Ситуация, когда все части чего-либо хорошо сочетаются; ясность и логичность речи.',
    '- Речь: "Lack coherence" (Не хватать связности)\n- Текст: "Internal coherence" (Внутренняя согласованность)\n- Логика: "Sense of coherence" (Чувство связности)',
    [
        { en: 'His speech lacked coherence and confused the audience.', ru: 'В его речи не хватало связности, и он запутал аудиторию.' },
        { en: 'The essay has unity and coherence.', ru: 'В эссе есть единство и согласованность.' },
        { en: 'There is no coherence between the different policies.', ru: 'Между различными политиками нет согласованности.' },
        { en: 'He tried to bring some coherence to the chaotic data.', ru: 'Он пытался привести хаотичные данные в некую систему.' }
    ],
    []
),

createRichWord('c2_cohesion', 'Cohesion', '/kəʊˈhiːʒn/', 'кэухижн', 'Сплоченность / Связь', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Действие или состояние объединения (физика или общество).',
    '- Общество: "Social cohesion" (Социальная сплоченность)\n- Группа: "Group cohesion" (Групповая сплоченность)\n- Физика: "Force of cohesion" (Сила сцепления)',
    [
        { en: 'Sport can create a sense of social cohesion.', ru: 'Спорт может создать чувство социальной сплоченности.' },
        { en: 'The lack of cohesion within the party led to defeat.', ru: 'Отсутствие единства внутри партии привело к поражению.' },
        { en: 'Cohesion keeps the water molecules together.', ru: 'Сцепление удерживает молекулы воды вместе.' },
        { en: 'We need greater cohesion among the staff.', ru: 'Нам нужна большая сплоченность среди персонала.' }
    ],
    []
),

createRichWord('c2_combustion', 'Combustion', '/kəmˈbʌstʃən/', 'кэмбасчэн', 'Горение / Сгорание', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Процесс горения.',
    '- Двигатель: "Internal combustion engine" (Двигатель внутреннего сгорания)\n- Химия: "Spontaneous combustion" (Самовозгорание)\n- Процесс: "Fuel combustion" (Сгорание топлива)',
    [
        { en: 'The internal combustion engine changed the world.', ru: 'Двигатель внутреннего сгорания изменил мир.' },
        { en: 'Oxygen is necessary for combustion.', ru: 'Кислород необходим для горения.' },
        { en: 'Combustion of fossil fuels causes pollution.', ru: 'Сжигание ископаемого топлива вызывает загрязнение.' },
        { en: 'The investigation ruled out spontaneous combustion.', ru: 'Следствие исключило самовозгорание.' }
    ],
    []
),

createRichWord('c2_conciliate', 'Conciliate', '/kənˈsɪlieɪt/', 'кэнсилиэйт', 'Примирять / Умиротворять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Положить конец разногласиям или успокоить чей-то гнев.',
    '- Конфликт: "Conciliate the opposition" (Примирить оппозицию)\n- Процесс: "Conciliation procedure" (Примирительная процедура)\n- Отношение: "Attempt to conciliate" (Попытка умиротворить)',
    [
        { en: 'The government tried to conciliate the protesters.', ru: 'Правительство пыталось умиротворить протестующих.' },
        { en: 'He acted as a mediator to conciliate the two sides.', ru: 'Он выступил посредником, чтобы примирить две стороны.' },
        { en: 'Her tone was soft, trying to conciliate him.', ru: 'Ее тон был мягким, она пыталась успокоить его.' },
        { en: 'Conciliating the warring factions proved impossible.', ru: 'Примирить враждующие фракции оказалось невозможным.' }
    ],
    []
),

createRichWord('c2_concoct', 'Concoct', '/kənˈkɒkt/', 'кэнкокт', 'Состряпать / Выдумать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Приготовить еду, смешивая ингредиенты; придумать историю или оправдание, чтобы обмануть.',
    '- Еда: "Concoct a meal" (Состряпать еду)\n- Ложь: "Concoct a story" (Выдумать историю)\n- План: "Concoct a plan" (Сфабриковать план)',
    [
        { en: 'He concocted a delicious soup from leftovers.', ru: 'Он состряпал вкусный суп из остатков.' },
        { en: 'The prisoner concocted an elaborate escape plan.', ru: 'Заключенный придумал сложный план побега.' },
        { en: 'She concocted an excuse for being late.', ru: 'Она выдумала оправдание своему опозданию.' },
        { en: 'They concocted a potion using various herbs.', ru: 'Они приготовили зелье, используя различные травы.' }
    ],
    []
),

createRichWord('c2_concur', 'Concur', '/kənˈkɜː(r)/', 'кэнкё', 'Соглашаться / Совпадать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Иметь то же мнение (формально); происходить одновременно.',
    '- Мнение: "I concur" (Я согласен)\n- Суд: "Judge concurred" (Судья согласился)\n- Событие: "Events concur" (События совпадают)',
    [
        { en: 'The board concurred with the committee\'s recommendation.', ru: 'Совет согласился с рекомендацией комитета.' },
        { en: 'Everything concurred to produce the desired result.', ru: 'Все совпало для получения желаемого результата.' },
        { en: 'Do you concur with his analysis?', ru: 'Вы согласны с его анализом?' },
        { en: 'The two experts concurred on the cause of death.', ru: 'Два эксперта сошлись во мнении о причине смерти.' }
    ],
    []
),

createRichWord('c2_confound', 'Confound', '/kənˈfaʊnd/', 'кэнфаунд', 'Сбивать с толку / Опровергать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сильно удивить или запутать кого-то; доказать неправоту (прогнозы/врагов).',
    '- Удивление: "Confound the critics" (Посрамить критиков)\n- Проблема: "Confound the problem" (Усугубить проблему/Запутать)\n- Восклицание: "Confound it!" (Черт возьми!)',
    [
        { en: 'The team confounded the experts by winning the cup.', ru: 'Команда посрамила экспертов, выиграв кубок.' },
        { en: 'His complex questions confounded the students.', ru: 'Его сложные вопросы сбили студентов с толку.' },
        { en: 'The strategy was designed to confound the enemy.', ru: 'Стратегия была разработана, чтобы запутать врага.' },
        { en: 'Don\'t confound liberty with license.', ru: 'Не путай свободу со вседозволенностью.' }
    ],
    []
),

createRichWord('c2_conscript', 'Conscript', '/kənˈskrɪpt/', 'кэнскрипт', 'Призывать (в армию) / Призывник', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Заставлять кого-то служить в армии по закону; сам призывник (сущ - ударение на первый слог).',
    '- Армия: "Military conscript" (Военный призывник)\n- Действие: "Conscript into the army" (Призвать в армию)\n- Процесс: "Avoid conscription" (Избегать призыва)',
    [
        { en: 'He was conscripted into the army at eighteen.', ru: 'Его призвали в армию в восемнадцать лет.' },
        { en: 'The young conscripts were sent to the front line.', ru: 'Молодых призывников отправили на передовую.' },
        { en: 'During the war, men were conscripted to fight.', ru: 'Во время войны мужчин призывали сражаться.' },
        { en: 'Conscription ended in the UK in 1960.', ru: 'Призыв в Великобритании закончился в 1960 году.' }
    ],
    []
),

createRichWord('c2_consign', 'Consign', '/kənˈsaɪn/', 'кэнсайн', 'Предавать / Отправлять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Отправить что-то куда-то (часто неприятное или на хранение); передать ответственность.',
    '- История: "Consign to history" (Предать истории/забвению)\n- Мусор: "Consign to the bin" (Выкинуть в мусор)\n- Груз: "Consign goods" (Отправить груз)',
    [
        { en: 'The old clothes were consigned to the dustbin.', ru: 'Старая одежда была отправлена в мусорный бак.' },
        { en: 'After his defeat, he was consigned to political oblivion.', ru: 'После поражения он был предан политическому забвению.' },
        { en: 'She consigned her children to the care of her sister.', ru: 'Она вверила своих детей заботам сестры.' },
        { en: 'His letters were consigned to the flames.', ru: 'Его письма были преданы огню.' }
    ],
    []
  ),
createRichWord('c2_contrive', 'Contrive', '/kənˈtraɪv/', 'кэнтрайв', 'Умудряться / Замышлять', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Устроить или организовать что-то хитроумным или неожиданным способом; изобрести.',
    '- Действие: "Contrive to meet" (Умудриться встретиться)\n- План: "Contrive a plan" (Придумать план)\n- Прилагательное: "Contrived plot" (Надуманный сюжет)',
    [
        { en: 'He contrived to meet her without anyone knowing.', ru: 'Он умудрился встретиться с ней так, что никто не узнал.' },
        { en: 'The prisoners contrived a way to escape.', ru: 'Заключенные придумали способ сбежать.' },
        { en: 'The ending of the movie felt very contrived.', ru: 'Конец фильма казался очень надуманным.' },
        { en: 'She contrived to make ends meet despite the low salary.', ru: 'Она ухитрялась сводить концы с концами, несмотря на низкую зарплату.' }
    ],
    []
),

createRichWord('c2_convulse', 'Convulse', '/kənˈvʌls/', 'кэнвалс', 'Содрогаться / Биться в конвульсиях', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Вызывать неконтролируемые трясущиеся движения (тела); (перен.) вызывать потрясение в обществе.',
    '- Тело: "Convulse with pain" (Корчиться от боли)\n- Смех: "Convulsed with laughter" (Трястись от смеха)\n- Общество: "Nation convulsed" (Нация потрясена)',
    [
        { en: 'The patient began to convulse violently.', ru: 'Пациент начал сильно биться в конвульсиях.' },
        { en: 'The whole room was convulsed with laughter.', ru: 'Вся комната сотрясалась от смеха.' },
        { en: 'The country was convulsed by civil war.', ru: 'Страна была потрясена гражданской войной.' },
        { en: 'His face was convulsed with rage.', ru: 'Его лицо исказилось от ярости.' }
    ],
    []
),

createRichWord('c2_cosmology', 'Cosmology', '/kɒzˈmɒlədʒi/', 'козмолэджи', 'Космология', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Наука о происхождении и развитии вселенной.',
    '- Наука: "Modern cosmology" (Современная космология)\n- Теория: "Big Bang cosmology" (Космология Большого взрыва)\n- Ученый: "Cosmologist" (Космолог)',
    [
        { en: 'Cosmology attempts to explain how the universe began.', ru: 'Космология пытается объяснить, как возникла Вселенная.' },
        { en: 'Stephen Hawking made major contributions to cosmology.', ru: 'Стивен Хокинг внес значительный вклад в космологию.' },
        { en: 'Ancient cosmology often involved myths and gods.', ru: 'Древняя космология часто включала мифы и богов.' },
        { en: 'The discovery changed our understanding of physical cosmology.', ru: 'Открытие изменило наше понимание физической космологии.' }
    ],
    []
),

createRichWord('c2_cosmos', 'Cosmos', '/ˈkɒzmɒs/', 'козмос', 'Космос / Вселенная', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Вселенная, рассматриваемая как упорядоченная система (в отличие от хаоса).',
    '- Вселенная: "The vast cosmos" (Огромный космос)\n- Порядок: "Order and cosmos" (Порядок и космос)\n- Философия: "Place in the cosmos" (Место во вселенной)',
    [
        { en: 'We are just a tiny speck in the infinite cosmos.', ru: 'Мы всего лишь крошечная песчинка в бесконечном космосе.' },
        { en: 'He studied the mysteries of the cosmos.', ru: 'Он изучал тайны вселенной.' },
        { en: 'Greek philosophers saw the cosmos as an orderly system.', ru: 'Греческие философы рассматривали космос как упорядоченную систему.' },
        { en: 'The beauty of the cosmos inspires many artists.', ru: 'Красота космоса вдохновляет многих художников.' }
    ],
    []
),

createRichWord('c2_cove', 'Cove', '/kəʊv/', 'кэув', 'Бухта', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Маленький залив или укрытая бухта на побережье.',
    '- Море: "Hidden cove" (Скрытая бухта)\n- Туризм: "Sandy cove" (Песчаная бухточка)\n- Пираты: "Smugglers\' cove" (Бухта контрабандистов)',
    [
        { en: 'We found a secluded cove to swim in.', ru: 'Мы нашли уединенную бухту, чтобы искупаться.' },
        { en: 'The pirates hid their treasure in a rocky cove.', ru: 'Пираты спрятали свои сокровища в скалистой бухте.' },
        { en: 'The boat anchored in the safety of the cove.', ru: 'Лодка встала на якорь в безопасной бухте.' },
        { en: 'A narrow path leads down to Lulworth Cove.', ru: 'Узкая тропинка ведет вниз к бухте Лалворт.' }
    ],
    []
),

createRichWord('c2_covet', 'Covet', '/ˈkʌvət/', 'кавэт', 'Жаждать / Завидовать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Сильно желать чего-то, что принадлежит другому (библейское: "не возжелай").',
    '- Желание: "Covet power" (Жаждать власти)\n- Награда: "Coveted prize" (Заветный приз)\n- Заповедь: "Thou shalt not covet" (Не возжелай)',
    [
        { en: 'He covets his neighbour\'s new car.', ru: 'Он завидует новой машине соседа (жаждет такую же).' },
        { en: 'The Oscar is the most coveted award in Hollywood.', ru: 'Оскар — самая желанная награда в Голливуде.' },
        { en: 'She has always coveted the manager\'s job.', ru: 'Она всегда метила на место менеджера.' },
        { en: 'Do not covet what you cannot have.', ru: 'Не желай того, что не можешь получить.' }
    ],
    []
),

createRichWord('c2_crag', 'Crag', '/kræɡ/', 'крэг', 'Скала / Утес', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Крутая, неровная скала или утес.',
    '- Горы: "Rocky crag" (Скалистый утес)\n- Ландшафт: "Mountain crag" (Горный утес)\n- Альпинизм: "Climb a crag" (Взбираться на скалу)',
    [
        { en: 'The castle sat atop a steep crag.', ru: 'Замок стоял на вершине крутого утеса.' },
        { en: 'Eagles built their nest on the high crag.', ru: 'Орлы свили гнездо на высоком утесе.' },
        { en: 'He leaped from crag to crag with ease.', ru: 'Он с легкостью перепрыгивал с уступа на уступ.' },
        { en: 'The mist swirled around the jagged crags.', ru: 'Туман клубился вокруг зубчатых скал.' }
    ],
    []
),

createRichWord('c2_crank', 'Crank', '/kræŋk/', 'крэнк', 'Рукоятка / Чудак', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Рычаг в форме буквы L для вращения механизма; эксцентричный человек с навязчивыми идеями.',
    '- Механизм: "Turn the crank" (Крутить рукоятку)\n- Человек: "Health crank" (Помешанный на здоровье)\n- Звонок: "Crank call" (Телефонный розыгрыш)',
    [
        { en: 'He turned the crank to start the old engine.', ru: 'Он повернул рукоятку, чтобы завести старый двигатель.' },
        { en: 'People think he is a crank because of his strange theories.', ru: 'Люди считают его чудаком из-за его странных теорий.' },
        { en: 'The window is operated by a hand crank.', ru: 'Окно управляется ручным рычагом.' },
        { en: 'Ignore him, he is just a harmless crank.', ru: 'Не обращай на него внимания, он просто безобидный чудак.' }
    ],
    [
        { meaning: "To turn/increase", translation: "Выкручивать / Увеличивать", example: { en: "Crank up the volume.", ru: "Вруби громкость на полную." } }
    ]
),

createRichWord('c2_creed', 'Creed', '/kriːd/', 'крид', 'Кредо / Вероучение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Система религиозных верований; набор принципов, которыми руководствуется человек.',
    '- Религия: "Religious creed" (Религиозное вероучение)\n- Равенство: "Race, colour, or creed" (Раса, цвет кожи или вероисповедание)\n- Жизнь: "Personal creed" (Личное кредо)',
    [
        { en: 'People of all races and creeds are welcome here.', ru: 'Здесь рады людям всех рас и вероисповеданий.' },
        { en: 'His political creed is based on equality.', ru: 'Его политическое кредо основано на равенстве.' },
        { en: 'The Nicene Creed is recited in church.', ru: 'Никейский символ веры читается в церкви.' },
        { en: 'Honesty was his simple creed.', ru: 'Честность была его простым жизненным принципом.' }
    ],
    []
),

createRichWord('c2_creole', 'Creole', '/ˈkriːəʊl/', 'криоул', 'Креольский язык / Креол', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Язык, развившийся из смеси других языков и ставший родным для сообщества; человек смешанного происхождения.',
    '- Язык: "Haitian Creole" (Гаитянский креольский)\n- Лингвистика: "Pidgin and Creole" (Пиджин и креольский)\n- Культура: "Creole culture" (Креольская культура)',
    [
        { en: 'Creole languages often develop from pidgins.', ru: 'Креольские языки часто развиваются из пиджинов.' },
        { en: 'He speaks a French-based Creole.', ru: 'Он говорит на креольском языке на основе французского.' },
        { en: 'New Orleans is famous for its Creole cuisine.', ru: 'Новый Орлеан славится своей креольской кухней.' },
        { en: 'The grammar of a Creole is fully developed.', ru: 'Грамматика креольского языка полностью развита.' }
    ],
    []
),

createRichWord('c2_crimson', 'Crimson', '/ˈkrɪmzn/', 'кримзн', 'Малиновый / Багровый', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Насыщенный темно-красный цвет.',
    '- Цвет: "Crimson red" (Темно-красный)\n- Лицо: "Go crimson" (Сильно покраснеть)\n- Природа: "Crimson sunset" (Багровый закат)',
    [
        { en: 'She wore a stunning crimson dress.', ru: 'Она была в потрясающем темно-красном платье.' },
        { en: 'His face went crimson with embarrassment.', ru: 'Его лицо стало пунцовым от смущения.' },
        { en: 'The leaves turn crimson in autumn.', ru: 'Осенью листья становятся багровыми.' },
        { en: 'A crimson stain spread across the fabric.', ru: 'Багровое пятно расплылось по ткани.' }
    ],
    []
),

createRichWord('c2_crucifix', 'Crucifix', '/ˈkruːsɪfɪks/', 'крусификс', 'Распятие', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Модель креста с фигурой Иисуса Христа на нем.',
    '- Религия: "Wooden crucifix" (Деревянное распятие)\n- Украшение: "Wear a crucifix" (Носить распятие)\n- Церковь: "Altar crucifix" (Алтарное распятие)',
    [
        { en: 'A large crucifix hung on the wall above the bed.', ru: 'Большое распятие висело на стене над кроватью.' },
        { en: 'She wore a gold crucifix around her neck.', ru: 'Она носила золотое распятие на шее.' },
        { en: 'The priest held up the crucifix.', ru: 'Священник поднял распятие.' },
        { en: 'He knelt before the crucifix to pray.', ru: 'Он преклонил колени перед распятием, чтобы помолиться.' }
    ],
    []
),

createRichWord('c2_curt', 'Curt', '/kɜːt/', 'кёт', 'Резкий / Краткий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Грубо краткий в речи или манерах.',
    '- Речь: "Curt reply" (Резкий ответ)\n- Тон: "Curt nod" (Сухой кивок)\n- Манеры: "Be curt with" (Быть резким с кем-то)',
    [
        { en: 'He gave a curt nod and walked away.', ru: 'Он сухо кивнул и ушел.' },
        { en: 'Her reply was curt and unfriendly.', ru: 'Ее ответ был резким и недружелюбным.' },
        { en: 'I am sorry if I seemed curt on the phone.', ru: 'Извините, если я показался резким по телефону.' },
        { en: 'His curt manner offended the guests.', ru: 'Его резкая манера поведения обидела гостей.' }
    ],
    []
),

createRichWord('c2_dab', 'Dab', '/dæb/', 'дэб', 'Мазок / Легкое прикосновение', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Небольшое количество вещества (жидкости, крема); легкое быстрое прикосновение.',
    '- Количество: "Dab of butter" (Кусочек масла)\n- Действие: "Dab with a cloth" (Промокнуть тряпкой)\n- Жест: "A dab" (Дэб - танцевальное движение)',
    [
        { en: 'Put a dab of cream on the mosquito bite.', ru: 'Нанеси капельку крема на укус комара.' },
        { en: 'She dabbed her eyes with a handkerchief.', ru: 'Она промокнула глаза носовым платком.' },
        { en: 'He is a dab hand at cooking.', ru: 'Он мастер (собаку съел) в готовке.' },
        { en: 'Just a dab of perfume is enough.', ru: 'Достаточно всего лишь капельки духов.' }
    ],
    []
),

createRichWord('c2_dame', 'Dame', '/deɪm/', 'дейм', 'Дама', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Титул, даваемый женщине (эквивалент рыцаря/сэра); (сленг, устар.) женщина.',
    '- Титул: "Dame Judi Dench" (Дама Джуди Денч)\n- Театр: "Pantomime dame" (Комическая старуха в пантомиме)\n- Сленг: "Looking for a dame" (Искать дамочку)',
    [
        { en: 'She was made a Dame for her services to drama.', ru: 'Она получила титул Дамы за заслуги в драматургии.' },
        { en: 'Dame Agatha Christie is a famous writer.', ru: 'Дама Агата Кристи — известная писательница.' },
        { en: 'In old movies, they often call women "dames".', ru: 'В старых фильмах женщин часто называют "дамочками".' },
        { en: 'The pantomime dame is usually played by a man.', ru: 'Роль комической старухи в пантомиме обычно играет мужчина.' }
    ],
    []
),

createRichWord('c2_deft', 'Deft', '/deft/', 'дэфт', 'Ловкий / Искусный', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Быстрый и умелый в движениях.',
    '- Движения: "Deft fingers" (Ловкие пальцы)\n- Действие: "Deft touch" (Искусное прикосновение)\n- Мастерство: "Deft handling" (Умелое обращение)',
    [
        { en: 'The surgeon performed the operation with deft movements.', ru: 'Хирург провел операцию ловкими движениями.' },
        { en: 'With a deft flick of his wrist, he caught the fly.', ru: 'Ловким движением запястья он поймал муху.' },
        { en: 'She is deft at needlework.', ru: 'Она искусна в рукоделии.' },
        { en: 'His deft handling of the crisis saved the company.', ru: 'Его умелое управление кризисом спасло компанию.' }
    ],
    []
),

createRichWord('c2_delineate', 'Delineate', '/dɪˈlɪnieɪt/', 'дилиниэйт', 'Очерчивать / Описывать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Описывать или изображать что-то точно и детально; указывать границы.',
    '- Границы: "Delineate the boundary" (Очертить границу)\n- Описание: "Delineate character" (Описать характер)\n- Роль: "Roles are delineated" (Роли разграничены)',
    [
        { en: 'The report clearly delineates the steps to be taken.', ru: 'В отчете четко описаны шаги, которые необходимо предпринять.' },
        { en: 'Our responsibilities are not clearly delineated.', ru: 'Наши обязанности четко не разграничены.' },
        { en: 'The fence delineates the property line.', ru: 'Забор очерчивает границу собственности.' },
        { en: 'The author delineates his characters with great skill.', ru: 'Автор описывает своих персонажей с большим мастерством.' }
    ],
    []
),

createRichWord('c2_deplore', 'Deplore', '/dɪˈplɔː(r)/', 'дипло', 'Осуждать / Сожалеть', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Выражать сильное неодобрение по поводу чего-либо.',
    '- Отношение: "Deeply deplore" (Глубоко осуждать)\n- Ситуация: "Deplore the violence" (Осуждать насилие)\n- Качество: "Deplorable condition" (Плачевное состояние)',
    [
        { en: 'We deplore all forms of violence.', ru: 'Мы осуждаем любые формы насилия.' },
        { en: 'I deeply deplore the loss of life.', ru: 'Я глубоко скорблю о гибели людей.' },
        { en: 'The UN deplored the attack on civilians.', ru: 'ООН осудила нападение на мирных жителей.' },
        { en: 'Teachers deplore the lack of funding for schools.', ru: 'Учителя сетуют на отсутствие финансирования школ.' }
    ],
    []
),

createRichWord('c2_depreciate', 'Depreciate', '/dɪˈpriːʃieɪt/', 'дипришиэйт', 'Обесцениваться / Амортизироваться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Терять ценность со временем (о деньгах, машинах); (реже) умалять значение.',
    '- Деньги: "Currency depreciates" (Валюта обесценивается)\n- Авто: "Car depreciates" (Машина теряет в цене)\n- Активы: "Assets depreciate" (Активы амортизируются)',
    [
        { en: 'New cars depreciate rapidly as soon as you buy them.', ru: 'Новые машины быстро теряют в цене, как только вы их покупаете.' },
        { en: 'The currency has depreciated against the dollar.', ru: 'Валюта обесценилась по отношению к доллару.' },
        { en: 'We depreciate our equipment over five years.', ru: 'Мы амортизируем наше оборудование в течение пяти лет.' },
        { en: 'Do not depreciate his efforts.', ru: 'Не умаляйте его усилий.' }
    ],
    []
),

createRichWord('c2_desolate', 'Desolate', '/ˈdesələt/', 'дэсэлэт', 'Заброшенный / Безутешный', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Пустой и безжизненный (о месте); очень несчастный и одинокий (о человеке).',
    '- Место: "Desolate landscape" (Пустынный пейзаж)\n- Чувство: "Feel desolate" (Чувствовать себя покинутым)\n- Дом: "Desolate house" (Заброшенный дом)',
    [
        { en: 'The house stood alone in a desolate landscape.', ru: 'Дом стоял одиноко в пустынном пейзаже.' },
        { en: 'She felt desolate after her best friend moved away.', ru: 'Она чувствовала себя безутешной после переезда лучшего друга.' },
        { en: 'A desolate wind blew across the moor.', ru: 'Унылый ветер дул над вересковой пустошью.' },
        { en: 'The town looked desolate and abandoned.', ru: 'Город выглядел заброшенным и покинутым.' }
    ],
    []
),

createRichWord('c2_devoid', 'Devoid', '/dɪˈvɔɪd/', 'дивойд', 'Лишенный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Полностью не имеющий чего-либо (всегда с предлогом "of").',
    '- Эмоции: "Devoid of emotion" (Лишенный эмоций)\n- Смысл: "Devoid of meaning" (Лишенный смысла)\n- Жизнь: "Devoid of life" (Лишенный жизни)',
    [
        { en: 'His voice was devoid of any emotion.', ru: 'Его голос был лишен каких-либо эмоций.' },
        { en: 'The landscape is devoid of trees.', ru: 'Пейзаж лишен деревьев.' },
        { en: 'It was a dull speech, devoid of humour.', ru: 'Это была скучная речь, лишенная юмора.' },
        { en: 'That argument is devoid of logic.', ru: 'Этот аргумент лишен логики.' }
    ],
    []
),

createRichWord('c2_devolve', 'Devolve', '/dɪˈvɒlv/', 'диволв', 'Передавать (полномочия) / Скатываться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Передавать власть на более низкий уровень; ухудшаться в состоянии.',
    '- Власть: "Devolve power" (Делегировать власть)\n- Регион: "Devolved government" (Региональное правительство)\n- Ситуация: "Devolve into chaos" (Скатиться в хаос)',
    [
        { en: 'More power should be devolved to local councils.', ru: 'Больше власти следует передать местным советам.' },
        { en: 'The discussion quickly devolved into an argument.', ru: 'Дискуссия быстро скатилась в спор.' },
        { en: 'Scotland has a devolved parliament.', ru: 'У Шотландии есть делегированный парламент.' },
        { en: 'Responsibilities devolve upon the vice-president.', ru: 'Обязанности переходят к вице-президенту.' }
    ],
    []
),

createRichWord('c2_dialectic', 'Dialectic', '/ˌdaɪəˈlektɪk/', 'дайэлектик', 'Диалектика', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Искусство спора для поиска истины; процесс развития через противоречия (тезис-антитезис-синтез).',
    '- Философия: "Hegelian dialectic" (Гегелевская диалектика)\n- Метод: "Dialectic method" (Диалектический метод)\n- Процесс: "Historical dialectic" (Историческая диалектика)',
    [
        { en: 'Marxism is based on historical dialectic.', ru: 'Марксизм основан на исторической диалектике.' },
        { en: 'The dialectic between tradition and innovation.', ru: 'Диалектика (борьба) между традицией и инновацией.' },
        { en: 'Socrates used dialectic to find the truth.', ru: 'Сократ использовал диалектику для поиска истины.' },
        { en: 'It is a complex dialectic of cause and effect.', ru: 'Это сложная диалектика причины и следствия.' }
    ],
    []
),

createRichWord('c2_disconcert', 'Disconcert', '/ˌdɪskənˈsɜːt/', 'дискэнсёт', 'Смущать / Приводить в замешательство', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Заставить кого-то чувствовать беспокойство, смущение или неуверенность.',
    '- Взгляд: "Disconcerting stare" (Смущающий взгляд)\n- Тишина: "Disconcerting silence" (Тревожная тишина)\n- Чувство: "Visibly disconcerted" (Явно смущенный)',
    [
        { en: 'She was disconcerted by his intense stare.', ru: 'Ее смутил его пристальный взгляд.' },
        { en: 'The sudden silence was quite disconcerting.', ru: 'Внезапная тишина была довольно тревожной.' },
        { en: 'He was disconcerted to find the door locked.', ru: 'Он был в замешательстве, обнаружив дверь запертой.' },
        { en: 'Don\'t let the audience disconcert you.', ru: 'Не позволяй аудитории смутить тебя.' }
    ],
    []
),

createRichWord('c2_disparate', 'Disparate', '/ˈdɪspərət/', 'диспэрэт', 'Несоизмеримый / Разнородный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Настолько разный, что невозможно сравнить; состоящий из разнородных элементов.',
    '- Группа: "Disparate group" (Разношерстная группа)\n- Идеи: "Disparate concepts" (Несопоставимые понятия)\n- Части: "Disparate parts" (Разрозненные части)',
    [
        { en: 'The aim is to bring together disparate communities.', ru: 'Цель — объединить разрозненные сообщества.' },
        { en: 'They hold disparate views on almost everything.', ru: 'У них несовместимые взгляды почти на все.' },
        { en: 'The essay attempts to link disparate ideas.', ru: 'Эссе пытается связать разнородные идеи.' },
        { en: 'Our information comes from disparate sources.', ru: 'Наша информация поступает из разрозненных источников.' }
    ],
    []
  ),
createRichWord('c2_buttress', 'Buttress', '/ˈbʌtrəs/', 'батрис', 'Подпорка / Поддерживать', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Каменная или кирпичная структура, поддерживающая стену; (перен.) аргумент или факт, поддерживающий идею.',
    '- Архитектура: "Flying buttress" (Аркбутан / Летающая подпорка)\n- Поддержка: "Buttress an argument" (Подкрепить аргумент)\n- Стена: "Stone buttress" (Каменная опора)',
    [
        { en: 'The cathedral walls are supported by flying buttresses.', ru: 'Стены собора поддерживаются аркбутанами.' },
        { en: 'He used statistics to buttress his argument.', ru: 'Он использовал статистику, чтобы подкрепить свой аргумент.' },
        { en: 'The defence was buttressed by new evidence.', ru: 'Защита была подкреплена новыми доказательствами.' },
        { en: 'We need to buttress the economy against the crisis.', ru: 'Нам нужно укрепить экономику против кризиса.' }
    ],
    [
        { meaning: "To strengthen", translation: "Укреплять / Подпирать", example: { en: "Buttress the wall.", ru: "Укрепить стену." } }
    ]
),

createRichWord('c2_cant', 'Cant', '/kænt/', 'кэнт', 'Лицемерие / Жаргон', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Лицемерные разговоры о морали или религии; специфический язык определенной группы (воров, нищих).',
    '- Речь: "Religious cant" (Религиозное лицемерие)\n- Язык: "Thieves\' cant" (Воровской жаргон)\n- Тон: "Mere cant" (Сплошное лицемерие)',
    [
        { en: 'I am tired of the politician\'s pious cant.', ru: 'Я устал от благочестивого лицемерия этого политика.' },
        { en: 'He spoke the cant of the underworld.', ru: 'Он говорил на жаргоне преступного мира.' },
        { en: 'Her speech was full of moral cant.', ru: 'Ее речь была полна морализаторского лицемерия.' },
        { en: 'It is just empty cant with no real meaning.', ru: 'Это просто пустое лицемерие без реального смысла.' }
    ],
    [
        { meaning: "Tilt/Slope", translation: "Наклон", example: { en: "The table has a slight cant.", ru: "У стола небольшой наклон." } }
    ]
),

createRichWord('c2_censure', 'Censure', '/ˈsenʃə(r)/', 'сэншэ', 'Порицание / Осуждение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Сильная официальная критика или неодобрение.',
    '- Политика: "Vote of censure" (Вотум порицания)\n- Критика: "Public censure" (Публичное осуждение)\n- Глагол: "To censure someone" (Вынести порицание)',
    [
        { en: 'The minister faced a vote of censure in parliament.', ru: 'Министр столкнулся с вотумом порицания в парламенте.' },
        { en: 'His dishonest behaviour earned him the censure of his colleagues.', ru: 'Его нечестное поведение заслужило осуждение коллег.' },
        { en: 'The board voted to censure the director.', ru: 'Совет проголосовал за вынесение порицания директору.' },
        { en: 'He acted without fear of censure.', ru: 'Он действовал, не боясь осуждения.' }
    ],
    []
),

createRichWord('c2_centrifuge', 'Centrifuge', '/ˈsentrɪfjuːdʒ/', 'сентрифьюдж', 'Центрифуга', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Машина, которая быстро вращается для разделения жидкостей разной плотности.',
    '- Лаборатория: "Use a centrifuge" (Использовать центрифугу)\n- Космос: "Human centrifuge" (Центрифуга для тренировки пилотов)\n- Процесс: "Centrifuge separation" (Центрифужное разделение)',
    [
        { en: 'Blood samples are spun in a centrifuge to separate the cells.', ru: 'Образцы крови вращают в центрифуге, чтобы отделить клетки.' },
        { en: 'Uranium is enriched using gas centrifuges.', ru: 'Уран обогащается с использованием газовых центрифуг.' },
        { en: 'Astronauts train in a giant centrifuge.', ru: 'Астронавты тренируются в гигантской центрифуге.' },
        { en: 'The centrifuge spins at very high speeds.', ru: 'Центрифуга вращается на очень высоких скоростях.' }
    ],
    []
),

createRichWord('c2_chaste', 'Chaste', '/tʃeɪst/', 'чейст', 'Целомудренный / Скромный', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Воздерживающийся от секса (девственный); простой и без излишеств (о стиле).',
    '- Секс: "Chaste kiss" (Целомудренный поцелуй)\n- Стиль: "Chaste design" (Строгий/скромный дизайн)\n- Поведение: "Remain chaste" (Оставаться целомудренным)',
    [
        { en: 'She gave him a chaste kiss on the cheek.', ru: 'Она целомудренно поцеловала его в щеку.' },
        { en: 'The architecture was simple and chaste.', ru: 'Архитектура была простой и строгой.' },
        { en: 'Monks strive to live a chaste life.', ru: 'Монахи стремятся вести целомудренную жизнь.' },
        { en: 'In the past, women were expected to be chaste until marriage.', ru: 'В прошлом от женщин ожидали целомудрия до брака.' }
    ],
    []
  ),
createRichWord('c2_collude', 'Collude', '/kəˈluːd/', 'кэлюд', 'Сговариваться / Вступать в сговор', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Тайно сотрудничать с кем-то для обмана или незаконных действий.',
    '- Закон: "Collude with" (Сговариваться с)\n- Бизнес: "Collude to fix prices" (Сговориться о фиксации цен)\n- Действие: "Accused of colluding" (Обвиненный в сговоре)',
    [
        { en: 'The companies colluded to keep prices high.', ru: 'Компании сговорились, чтобы держать цены высокими.' },
        { en: 'Several officials were found to have colluded with the criminals.', ru: 'Выяснилось, что несколько чиновников вступили в сговор с преступниками.' },
        { en: 'They colluded to mislead the investigators.', ru: 'Они сговорились, чтобы ввести следователей в заблуждение.' },
        { en: 'It is illegal for competitors to collude.', ru: 'Сговор конкурентов является незаконным.' }
    ],
    []
),

createRichWord('c2_commune', 'Commune', '/ˈkɒmjuːn/', 'комьюн', 'Коммуна / Общаться духовно', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Группа людей, живущих вместе и делящих имущество; (verb /kəˈmjuːn/) общаться на глубоком уровне.',
    '- Жилье: "Live in a commune" (Жить в коммуне)\n- Духовность: "Commune with nature" (Общаться с природой)\n- Политика: "Paris Commune" (Парижская Коммуна)',
    [
        { en: 'In the sixties, many hippies lived in communes.', ru: 'В шестидесятых многие хиппи жили в коммунах.' },
        { en: 'He went to the forest to commune with nature.', ru: 'Он пошел в лес, чтобы побыть в единении с природой.' },
        { en: 'Members of the commune shared all their earnings.', ru: 'Члены коммуны делили все свои заработки.' },
        { en: 'She communes with spirits in her meditation.', ru: 'Она общается с духами в своей медитации.' }
    ],
    []
),

createRichWord('c2_composure', 'Composure', '/kəmˈpəʊʒə(r)/', 'кэмпэужэ', 'Самообладание / Спокойствие', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Состояние спокойствия и контроля над своими чувствами.',
    '- Эмоции: "Keep your composure" (Сохранять самообладание)\n- Потеря: "Lose composure" (Потерять самообладание)\n- Вид: "Regain composure" (Вновь обрести спокойствие)',
    [
        { en: 'Despite the insults, she maintained her composure.', ru: 'Несмотря на оскорбления, она сохранила самообладание.' },
        { en: 'He took a deep breath to regain his composure.', ru: 'Он глубоко вздохнул, чтобы вернуть себе спокойствие.' },
        { en: 'The speaker lost his composure when heckled.', ru: 'Оратор потерял самообладание, когда его перебили.' },
        { en: 'Her cool composure surprised everyone in the crisis.', ru: 'Ее хладнокровие удивило всех во время кризиса.' }
    ],
    []
),

createRichWord('c2_compulsive', 'Compulsive', '/kəmˈpʌlsɪv/', 'кэмпалсив', 'Навязчивый / Компульсивный', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Невозможность остановиться или контролировать поведение; вызванный навязчивым влечением.',
    '- Поведение: "Compulsive liar" (Патологический лжец)\n- Привычка: "Compulsive gambling" (Игромания)\n- Расстройство: "Obsessive-compulsive" (Обсессивно-компульсивный)',
    [
        { en: 'He is a compulsive gambler who lost everything.', ru: 'Он заядлый игроман, который потерял все.' },
        { en: 'She has a compulsive need to clean the house.', ru: 'У нее навязчивая потребность убирать дом.' },
        { en: 'Compulsive eating can lead to health problems.', ru: 'Компульсивное переедание может привести к проблемам со здоровьем.' },
        { en: 'I found the book absolutely compulsive reading.', ru: 'Я нашел эту книгу совершенно захватывающей (невозможно оторваться).' }
    ],
    []
),

createRichWord('c2_concerted', 'Concerted', '/kənˈsɜːtɪd/', 'кэнсётид', 'Согласованный / Совместный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Спланированный или выполненный совместно с другими; решительный и интенсивный.',
    '- Усилие: "Concerted effort" (Согласованные усилия)\n- Действие: "Concerted action" (Совместные действия)\n- Атака: "Concerted attack" (Спланированная атака)',
    [
        { en: 'We need to make a concerted effort to solve this problem.', ru: 'Нам нужно предпринять согласованные усилия для решения этой проблемы.' },
        { en: 'There was a concerted campaign to improve safety.', ru: 'Была проведена скоординированная кампания по повышению безопасности.' },
        { en: 'Nations took concerted action against the threat.', ru: 'Страны предприняли совместные действия против угрозы.' },
        { en: 'Success requires the concerted will of the people.', ru: 'Успех требует единой воли народа.' }
    ],
    []
),

createRichWord('c2_concomitant', 'Concomitant', '/kənˈkɒmɪtənt/', 'кэнкомитэнт', 'Сопутствующий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Происходящий в то же время, как результат чего-либо.',
    '- Результат: "Concomitant risks" (Сопутствующие риски)\n- Явление: "Concomitant symptoms" (Сопутствующие симптомы)\n- Связь: "Concomitant with" (Сопутствующий чему-либо)',
    [
        { en: 'Loss of memory is a natural concomitant of old age.', ru: 'Потеря памяти — естественный спутник старости.' },
        { en: 'War carries with it concomitant disease and hunger.', ru: 'Война несет с собой сопутствующие болезни и голод.' },
        { en: 'The drug has beneficial effects and concomitant side effects.', ru: 'Лекарство имеет полезные эффекты и сопутствующие побочные эффекты.' },
        { en: 'Economic growth and concomitant pollution.', ru: 'Экономический рост и сопутствующее загрязнение.' }
    ],
    []
),

createRichWord('c2_condescend', 'Condescend', '/ˌkɒndɪˈsend/', 'кондисэнд', 'Снизойти / Вести себя свысока', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Вести себя так, будто ты важнее или умнее других; (позитивно) снизойти до уровня.',
    '- Отношение: "Condescend to someone" (Смотреть свысока на кого-то)\n- Действие: "Condescend to help" (Снизойти до помощи)\n- Тон: "Condescending tone" (Снисходительный тон)',
    [
        { en: 'Don\'t condescend to me like I am a child.', ru: 'Не говори со мной свысока, как будто я ребенок.' },
        { en: 'He finally condescended to answer my question.', ru: 'Он наконец снизошел до ответа на мой вопрос.' },
        { en: 'The King condescended to dine with the commoners.', ru: 'Король снизошел до обеда с простолюдинами.' },
        { en: 'She hates being condescended to by her boss.', ru: 'Она ненавидит, когда начальник относится к ней снисходительно.' }
    ],
    []
),

createRichWord('c2_condone', 'Condone', '/kənˈdəʊn/', 'кэндэун', 'Оправдывать / Потворствовать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Принимать или разрешать поведение, которое считается неправильным.',
    '- Насилие: "Condone violence" (Оправдывать насилие)\n- Ошибка: "Condone behaviour" (Закрывать глаза на поведение)\n- Отношение: "Cannot condone" (Не могу мириться)',
    [
        { en: 'I cannot condone such rude behaviour.', ru: 'Я не могу мириться с таким грубым поведением.' },
        { en: 'By staying silent, you are condoning their actions.', ru: 'Оставаясь молчаливым, ты потворствуешь их действиям.' },
        { en: 'The school does not condone bullying.', ru: 'Школа не терпит издевательств.' },
        { en: 'Terrorism can never be condoned.', ru: 'Терроризм никогда не может быть оправдан.' }
    ],
    []
),

createRichWord('c2_conducive', 'Conducive', '/kənˈdjUsɪv/', 'кэндьюсив', 'Способствующий / Благоприятный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Создающий условия, при которых что-то может легко произойти.',
    '- Условия: "Conducive to learning" (Способствующий обучению)\n- Атмосфера: "Conducive atmosphere" (Благоприятная атмосфера)\n- Результат: "Not conducive" (Не способствующий)',
    [
        { en: 'Soft music is conducive to relaxation.', ru: 'Мягкая музыка способствует расслаблению.' },
        { en: 'Such a noisy environment is not conducive to work.', ru: 'Такая шумная обстановка не способствует работе.' },
        { en: 'We want to create a climate conducive to investment.', ru: 'Мы хотим создать климат, благоприятный для инвестиций.' },
        { en: 'Early bedtimes are conducive to good health.', ru: 'Ранний отход ко сну способствует хорошему здоровью.' }
    ],
    []
),

createRichWord('c2_confection', 'Confection', '/kənˈfekʃn/', 'кэнфекшн', 'Кондитерское изделие / Сладость', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Сложное сладкое блюдо; что-то сделанное искусно и сложно (одежда, здание).',
    '- Еда: "Sugar confection" (Сахарное изделие)\n- Магазин: "Confectionery" (Кондитерская)\n- Метафора: "Architectural confection" (Архитектурный изыск)',
    [
        { en: 'The cake was a marvellous confection of cream and chocolate.', ru: 'Торт представлял собой чудесное изделие из крема и шоколада.' },
        { en: 'He creates delicious sugary confections.', ru: 'Он создает вкусные сахарные сладости.' },
        { en: 'Her dress was a frilly pink confection.', ru: 'Ее платье было вычурным розовым нарядом с оборками.' },
        { en: 'The shop sells chocolates and other confections.', ru: 'Магазин продает шоколад и другие сладости.' }
    ],
    []
),

createRichWord('c2_congenital', 'Congenital', '/kənˈdʒenɪtl/', 'кэндженитл', 'Врожденный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Существующий с рождения (о болезни); являющийся частью чьего-то характера (о привычках).',
    '- Болезнь: "Congenital defect" (Врожденный порок)\n- Характер: "Congenital liar" (Патологический лжец)\n- Состояние: "Congenital condition" (Врожденное состояние)',
    [
        { en: 'He was born with a congenital heart defect.', ru: 'Он родился с врожденным пороком сердца.' },
        { en: 'She seems to be a congenital optimist.', ru: 'Она, кажется, врожденная оптимистка.' },
        { en: 'Congenital blindness affects development.', ru: 'Врожденная слепота влияет на развитие.' },
        { en: 'I think his laziness is congenital.', ru: 'Я думаю, его лень — это врожденное.' }
    ],
    []
),

createRichWord('c2_conifer', 'Conifer', '/ˈkɒnɪfə(r)/', 'конифэ', 'Хвойное дерево', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Дерево, которое имеет шишки и иголки вместо листьев (сосна, ель).',
    '- Лес: "Conifer forest" (Хвойный лес)\n- Дерево: "Evergreen conifer" (Вечнозеленое хвойное)\n- Сад: "Dwarf conifer" (Карликовое хвойное)',
    [
        { en: 'The forest is thick with tall conifers.', ru: 'Лес густо засажен высокими хвойными деревьями.' },
        { en: 'Conifers usually keep their leaves all year round.', ru: 'Хвойные обычно сохраняют листву круглый год.' },
        { en: 'Pine and fir trees are types of conifer.', ru: 'Сосны и пихты — это виды хвойных.' },
        { en: 'We planted some conifers for privacy in the garden.', ru: 'Мы посадили несколько хвойных деревьев для уединения в саду.' }
    ],
    []
),

createRichWord('c2_conjecture', 'Conjecture', '/kənˈdʒektʃə(r)/', 'кэнджекчэ', 'Догадка / Предположение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Мнение или заключение, основанное на неполной информации.',
    '- Мысль: "Pure conjecture" (Чистая догадка)\n- Действие: "Matter of conjecture" (Вопрос предположений)\n- Глагол: "To conjecture" (Предполагать)',
    [
        { en: 'That is purely conjecture, not fact.', ru: 'Это чистая догадка, а не факт.' },
        { en: 'There has been much conjecture about his resignation.', ru: 'Было много домыслов по поводу его отставки.' },
        { en: 'We can only conjecture what happened.', ru: 'Мы можем только предполагать, что случилось.' },
        { en: 'His theory relies too much on conjecture.', ru: 'Его теория слишком сильно опирается на предположения.' }
    ],
    []
),

createRichWord('c2_consecrate', 'Consecrate', '/ˈkɒnsɪkreɪt/', 'консикрейт', 'Освящать / Посвящать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Официально объявить место или вещь священной; посвятить жизнь цели.',
    '- Религия: "Consecrate a church" (Освятить церковь)\n- Жизнь: "Consecrate life to" (Посвятить жизнь чему-то)\n- Земля: "Consecrated ground" (Освященная земля)',
    [
        { en: 'The new cathedral was consecrated by the Bishop.', ru: 'Новый собор был освящен епископом.' },
        { en: 'He consecrated his life to helping the poor.', ru: 'Он посвятил свою жизнь помощи бедным.' },
        { en: 'They were buried in consecrated ground.', ru: 'Они были похоронены на освященной земле.' },
        { en: 'The bread and wine are consecrated during Mass.', ru: 'Хлеб и вино освящаются во время мессы.' }
    ],
    []
),

createRichWord('c2_constrict', 'Constrict', '/kənˈstrɪkt/', 'кэнстрикт', 'Сжимать / Сужать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Делать что-то уже или теснее; ограничивать развитие.',
    '- Тело: "Pupils constrict" (Зрачки сужаются)\n- Горло: "Throat constricted" (Горло сжалось)\n- Свобода: "Constrict freedom" (Ограничивать свободу)',
    [
        { en: 'Bright light causes the pupils to constrict.', ru: 'Яркий свет заставляет зрачки сужаться.' },
        { en: 'Fear constricted her throat.', ru: 'Страх сжал ей горло.' },
        { en: 'Tight clothing can constrict blood flow.', ru: 'Тесная одежда может ограничивать кровоток.' },
        { en: 'Regulations that constrict business growth.', ru: 'Правила, которые сдерживают рост бизнеса.' }
    ],
    []
),

createRichWord('c2_consummate', 'Consummate', '/ˈkɒnsəmeɪt/', 'консэмейт', 'Совершенный / Доводить до конца', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Показывающий высшую степень мастерства (adj /kənˈsʌmət/); сделать брак или сделку полной (verb).',
    '- Мастерство: "Consummate professional" (Настоящий профессионал)\n- Искусство: "Consummate skill" (Совершенное мастерство)\n- Брак: "Consummate marriage" (Консумировать брак/вступить в связь)',
    [
        { en: 'He acted with consummate skill.', ru: 'Он действовал с совершенным мастерством.' },
        { en: 'She is a consummate liar.', ru: 'Она отъявленная лгунья.' },
        { en: 'The marriage was never consummated.', ru: 'Брак так и не был консумирован (не было брачной ночи).' },
        { en: 'A consummate performance by the pianist.', ru: 'Безупречное выступление пианиста.' }
    ],
    []
),

createRichWord('c2_corollary', 'Corollary', '/kəˈrɒləri/', 'кэролэри', 'Следствие / Вывод', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Ситуация или факт, который является естественным и прямым результатом другого.',
    '- Логика: "Inevitable corollary" (Неизбежное следствие)\n- Результат: "Corollary of" (Следствие чего-либо)\n- Наука: "Important corollary" (Важный вывод)',
    [
        { en: 'Blindness is the corollary of the disease.', ru: 'Слепота является следствием этой болезни.' },
        { en: 'A corollary to this theory was soon discovered.', ru: 'Вскоре было открыто следствие из этой теории.' },
        { en: 'High unemployment is a corollary of the recession.', ru: 'Высокая безработица — это следствие рецессии.' },
        { en: 'One corollary of the rise in internet use is less privacy.', ru: 'Одним из следствий роста использования интернета является уменьшение конфиденциальности.' }
    ],
    []
),

createRichWord('c2_corroborate', 'Corroborate', '/kəˈrɒbəreɪt/', 'кэроборейт', 'Подтверждать / Подкреплять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Предоставить доказательства или информацию, поддерживающую чье-то заявление.',
    '- Суд: "Corroborate evidence" (Подкрепляющие доказательства)\n- История: "Corroborate a story" (Подтвердить историю)\n- Факт: "Fully corroborated" (Полностью подтвержден)',
    [
        { en: 'Witnesses corroborated the victim\'s statement.', ru: 'Свидетели подтвердили заявление жертвы.' },
        { en: 'Recent research seems to corroborate his theory.', ru: 'Недавние исследования, похоже, подтверждают его теорию.' },
        { en: 'Can you corroborate your alibi?', ru: 'Вы можете подтвердить свое алиби?' },
        { en: 'No evidence has been found to corroborate the allegations.', ru: 'Не найдено доказательств, подтверждающих обвинения.' }
    ],
    []
),

createRichWord('c2_cortex', 'Cortex', '/ˈkɔːteks/', 'кортекс', 'Кора (головного мозга)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Внешний слой органа, особенно мозга (cerebral cortex).',
    '- Мозг: "Cerebral cortex" (Кора больших полушарий)\n- Функция: "Visual cortex" (Зрительная кора)\n- Анатомия: "Prefrontal cortex" (Префронтальная кора)',
    [
        { en: 'The cerebral cortex controls thought and language.', ru: 'Кора головного мозга контролирует мышление и речь.' },
        { en: 'Damage to the visual cortex can cause blindness.', ru: 'Повреждение зрительной коры может вызвать слепоту.' },
        { en: 'The cortex is the outer layer of the brain.', ru: 'Кора — это внешний слой мозга.' },
        { en: 'Scientists are mapping the functions of the cortex.', ru: 'Ученые картируют функции коры мозга.' }
    ],
    []
),

createRichWord('c2_countenance', 'Countenance', '/ˈkaʊntənəns/', 'каунтэнэнс', 'Лицо / Одобрять', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Выражение лица (сущ.); соглашаться или поддерживать что-то (глагол).',
    '- Лицо: "Pale countenance" (Бледное лицо)\n- Выражение: "Stern countenance" (Суровый вид)\n- Глагол: "Refuse to countenance" (Отказаться поддерживать)',
    [
        { en: 'He had a stern and serious countenance.', ru: 'У него было суровое и серьезное лицо.' },
        { en: 'I will not countenance such behaviour in my house.', ru: 'Я не потерплю такого поведения в моем доме.' },
        { en: 'Her countenance brightened when she saw him.', ru: 'Ее лицо просияло, когда она увидела его.' },
        { en: 'The school will not countenance bullying.', ru: 'Школа не будет мириться с издевательствами.' }
    ],
    []
),

createRichWord('c2_courtship', 'Courtship', '/ˈkɔːtʃɪp/', 'котшип', 'Ухаживание', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Период развития романтических отношений перед браком; поведение животных для привлечения партнера.',
    '- Отношения: "Brief courtship" (Недолгие ухаживания)\n- Животные: "Courtship ritual" (Брачный ритуал)\n- Брак: "After a long courtship" (После долгих ухаживаний)',
    [
        { en: 'They married after a brief courtship.', ru: 'Они поженились после недолгих ухаживаний.' },
        { en: 'Male birds display bright feathers during courtship.', ru: 'Самцы птиц демонстрируют яркие перья во время брачных игр.' },
        { en: 'The novel describes the courtship of a young couple.', ru: 'Роман описывает ухаживания молодой пары.' },
        { en: 'Courtship customs vary between cultures.', ru: 'Обычаи ухаживания различаются в разных культурах.' }
    ],
    []
),

createRichWord('c2_cremate', 'Cremate', '/krəˈmeɪt/', 'кримейт', 'Кремировать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Сжигать тело умершего человека вместо захоронения.',
    '- Похороны: "To be cremated" (Быть кремированным)\n- Место: "Crematorium" (Крематорий)\n- Прах: "Cremated remains" (Прах после кремации)',
    [
        { en: 'He stated in his will that he wanted to be cremated.', ru: 'В завещании он указал, что хочет быть кремированным.' },
        { en: 'The body was cremated yesterday.', ru: 'Тело было кремировано вчера.' },
        { en: 'Many people prefer being cremated to being buried.', ru: 'Многие люди предпочитают кремацию погребению.' },
        { en: 'Her ashes were scattered after she was cremated.', ru: 'Ее прах был развеян после кремации.' }
    ],
    []
),

createRichWord('c2_croak', 'Croak', '/krəʊk/', 'крэук', 'Квакать / Хрипеть', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Издавать глубокий звук, как лягушка; говорить хриплым голосом; (сленг) умереть.',
    '- Животное: "Frogs croak" (Лягушки квакают)\n- Голос: "Croak a reply" (Прохрипеть ответ)\n- Сленг: "To croak" (Сдохнуть/отбросить коньки)',
    [
        { en: 'Thousands of frogs began to croak at night.', ru: 'Тысячи лягушек начали квакать ночью.' },
        { en: '"Water," he croaked through dry lips.', ru: '"Воды", — прохрипел он сухими губами.' },
        { en: 'I thought I was going to croak during that marathon.', ru: 'Я думал, что отдам концы во время этого марафона.' },
        { en: 'The old engine croaked and stopped.', ru: 'Старый двигатель чихнул и заглох.' }
    ],
    []
),

createRichWord('c2_cull', 'Cull', '/kʌl/', 'кал', 'Отбраковывать / Отстреливать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Убивать часть животных для контроля популяции; отбирать лучшее или удалять худшее.',
    '- Животные: "Cull the herd" (Проредить стадо)\n- Данные: "Cull information" (Отбирать информацию)\n- Сущ.: "Seal cull" (Отстрел тюленей)',
    [
        { en: 'They decided to cull the deer population to save the forest.', ru: 'Они решили сократить популяцию оленей, чтобы спасти лес.' },
        { en: 'Relevant data was culled from various reports.', ru: 'Релевантные данные были отобраны из различных отчетов.' },
        { en: 'The annual seal cull causes controversy.', ru: 'Ежегодный отстрел тюленей вызывает споры.' },
        { en: 'Weak animals are culled from the flock.', ru: 'Слабых животных отбраковывают из стада.' }
    ],
    []
),

createRichWord('c2_debilitate', 'Debilitate', '/dɪˈbɪlɪteɪt/', 'дибилитэйт', 'Ослаблять / Истощать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Делать кого-то очень слабым и немощным (обычно болезнь).',
    '- Болезнь: "Debilitating disease" (Изнурительная болезнь)\n- Экономика: "Debilitate the economy" (Ослабить экономику)\n- Сила: "Totally debilitated" (Полностью истощен)',
    [
        { en: 'He was debilitated by a long illness.', ru: 'Он был истощен долгой болезнью.' },
        { en: 'The virus debilitates the immune system.', ru: 'Вирус ослабляет иммунную систему.' },
        { en: 'Strikes have debilitated the industry.', ru: 'Забастовки ослабили промышленность.' },
        { en: 'She suffers from a debilitating back pain.', ru: 'Она страдает от изнурительной боли в спине.' }
    ],
    []
),

createRichWord('c2_decadence', 'Decadence', '/ˈdekədəns/', 'дэкэдэнс', 'Упадок / Декаданс', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Моральный или культурный упадок, часто связанный с чрезмерной роскошью и удовольствиями.',
    '- Общество: "Moral decadence" (Моральный упадок)\n- История: "Roman decadence" (Римский декаданс)\n- Еда: "Pure decadence" (Чистое наслаждение - о десерте)',
    [
        { en: 'The book describes the decadence of the empire before its fall.', ru: 'Книга описывает упадок империи перед ее падением.' },
        { en: 'He lived a life of luxury and decadence.', ru: 'Он жил жизнью роскоши и декаданса.' },
        { en: 'Western decadence was criticized by the regime.', ru: 'Западный упадок критиковался режимом.' },
        { en: 'This chocolate cake is pure decadence.', ru: 'Этот шоколадный торт — сплошное наслаждение (грешное удовольствие).' }
    ],
    []
),

createRichWord('c2_defame', 'Defame', '/dɪˈfeɪm/', 'дифейм', 'Клеветать / Порочить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Вредить репутации человека, говоря о нем ложь.',
    '- Закон: "Sue for defamation" (Судиться за клевету)\n- Репутация: "Defame character" (Порочить личность)\n- Действие: "Defame a rival" (Оклеветать соперника)',
    [
        { en: 'He sued the newspaper for trying to defame him.', ru: 'Он подал в суд на газету за попытку оклеветать его.' },
        { en: 'She claimed her opponents were defaming her character.', ru: 'Она заявила, что оппоненты порочат ее репутацию.' },
        { en: 'The article defamed the entire family.', ru: 'Статья опорочила всю семью.' },
        { en: 'Laws exist to protect people from being defamed.', ru: 'Законы существуют, чтобы защитить людей от клеветы.' }
    ],
    []
),

createRichWord('c2_delve', 'Delve', '/delv/', 'делв', 'Рыться / Изучать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Искать что-то глубоко (в сумке или информации); тщательно исследовать.',
    '- Исследование: "Delve into the past" (Копаться в прошлом)\n- Поиск: "Delve into pockets" (Рыться в карманах)\n- Глубина: "Delve deeper" (Копать глубже)',
    [
        { en: 'She delved into her bag to find her keys.', ru: 'Она порылась в сумке, чтобы найти ключи.' },
        { en: 'We need to delve deeper into the causes of the problem.', ru: 'Нам нужно глубже изучить причины проблемы.' },
        { en: 'The book delves into the history of magic.', ru: 'Книга погружается в историю магии.' },
        { en: 'Reporters delved into his private life.', ru: 'Репортеры копались в его личной жизни.' }
    ],
    []
),

createRichWord('c2_depose', 'Depose', '/dɪˈpəʊz/', 'дипэуз', 'Свергать / Смещать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Силой убрать правителя или лидера с должности; давать показания под присягой (юр.).',
    '- Политика: "Depose a dictator" (Свергнуть диктатора)\n- Король: "Deposed king" (Свергнутый король)\n- Закон: "Depose a witness" (Допрашивать свидетеля)',
    [
        { en: 'The army deposed the president in a coup.', ru: 'Армия свергла президента в ходе переворота.' },
        { en: 'The deposed king lived in exile.', ru: 'Свергнутый король жил в изгнании.' },
        { en: 'Rebels planned to depose the government.', ru: 'Повстанцы планировали сместить правительство.' },
        { en: 'He was deposed as chairman of the company.', ru: 'Его сместили с поста председателя компании.' }
    ],
    []
),

createRichWord('c2_derelict', 'Derelict', '/ˈderəlɪkt/', 'дэрэликт', 'Заброшенный / Бесхозный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'В плохом состоянии, так как не используется; небрежный в исполнении долга.',
    '- Здание: "Derelict house" (Заброшенный дом)\n- Земля: "Derelict land" (Пустошь)\n- Обязанность: "Derelict in duty" (Халатный в обязанностях)',
    [
        { en: 'The canal has been derelict for many years.', ru: 'Канал был заброшен в течение многих лет.' },
        { en: 'Homeless people sleep in the derelict factory.', ru: 'Бездомные спят на заброшенной фабрике.' },
        { en: 'The officer was found derelict in his duty.', ru: 'Офицера признали халатным в исполнении служебных обязанностей.' },
        { en: 'They plan to restore the derelict buildings.', ru: 'Они планируют восстановить заброшенные здания.' }
    ],
    []
  ),
createRichWord('c2_caper', 'Caper', '/ˈkeɪpə(r)/', 'кейпэ', 'Проделка / Каперс', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Игривый прыжок; незаконная или смешная деятельность (афера); маленькая зеленая почка, используемая в еде.',
    '- Еда: "Chicken with capers" (Курица с каперсами)\n- Криминал: "Heist caper" (Фильм-ограбление)\n- Движение: "Cut a caper" (Сделать прыжок/антраша)',
    [
        { en: 'The film is a comedy about a jewel heist caper.', ru: 'Этот фильм — комедия о похищении драгоценностей.' },
        { en: 'Lambs were capering in the field.', ru: 'Ягнята резвились (прыгали) на поле.' },
        { en: 'Add a spoonful of capers to the sauce.', ru: 'Добавьте ложку каперсов в соус.' },
        { en: 'Their latest caper ended in arrest.', ru: 'Их последняя выходка закончилась арестом.' }
    ],
    []
),

createRichWord('c2_capillary', 'Capillary', '/kəˈpɪləri/', 'кэпилэри', 'Капилляр', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Самый маленький кровеносный сосуд; очень тонкая трубка.',
    '- Тело: "Broken capillary" (Лопнувший капилляр)\n- Физика: "Capillary action" (Капиллярный эффект)\n- Кровь: "Capillary bleeding" (Капиллярное кровотечение)',
    [
        { en: 'Capillaries connect arteries and veins.', ru: 'Капилляры соединяют артерии и вены.' },
        { en: 'Plants draw water up through capillary action.', ru: 'Растения втягивают воду вверх благодаря капиллярному эффекту.' },
        { en: 'She has broken capillaries on her cheeks.', ru: 'У нее лопнувшие капилляры на щеках.' },
        { en: 'The tube has a capillary bore.', ru: 'У трубки капиллярное (очень узкое) отверстие.' }
    ],
    []
),

createRichWord('c2_capitulate', 'Capitulate', '/kəˈpɪtʃuleɪt/', 'кэпичулейт', 'Капитулировать / Сдаваться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Перестать сопротивляться врагу или требованию; сдаться.',
    '- Война: "Capitulate to the enemy" (Капитулировать перед врагом)\n- Спор: "Refuse to capitulate" (Отказываться сдаваться)\n- Давление: "Capitulate under pressure" (Сдаться под давлением)',
    [
        { en: 'The army was forced to capitulate after the siege.', ru: 'Армия была вынуждена капитулировать после осады.' },
        { en: 'I will not capitulate to your demands.', ru: 'Я не уступлю твоим требованиям.' },
        { en: 'Eventually, the government capitulated to the protesters.', ru: 'В конце концов, правительство уступило протестующим.' },
        { en: 'They capitulated unconditionally.', ru: 'Они капитулировали безоговорочно.' }
    ],
    []
),

createRichWord('c2_catechism', 'Catechism', '/ˈkætəkɪzəm/', 'кэтикизэм', 'Катехизис', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Свод религиозных принципов в форме вопросов и ответов (обычно в христианстве).',
    '- Религия: "Learn the catechism" (Учить катехизис)\n- Книга: "Catholic Catechism" (Католический катехизис)\n- Обучение: "Teaching catechism" (Преподавание закона божьего)',
    [
        { en: 'Children learned the catechism by heart.', ru: 'Дети учили катехизис наизусть.' },
        { en: 'The catechism explains the fundamental beliefs of the church.', ru: 'Катехизис объясняет фундаментальные верования церкви.' },
        { en: 'He questioned the dogmas of the catechism.', ru: 'Он подверг сомнению догмы катехизиса.' },
        { en: 'Classes in catechism were held on Sundays.', ru: 'Занятия по катехизису проводились по воскресеньям.' }
    ],
    []
),

createRichWord('c2_catheter', 'Catheter', '/ˈkæθɪtə(r)/', 'кэситэ', 'Катетер', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Тонкая трубка, вводимая в тело для удаления или введения жидкостей.',
    '- Медицина: "Insert a catheter" (Вставить катетер)\n- Тип: "Urinary catheter" (Мочевой катетер)\n- Процедура: "Catheter ablation" (Катетерная абляция)',
    [
        { en: 'The nurse inserted a catheter to drain the bladder.', ru: 'Медсестра вставила катетер, чтобы осушить мочевой пузырь.' },
        { en: 'Patients with catheters are at risk of infection.', ru: 'Пациенты с катетерами подвержены риску инфекции.' },
        { en: 'The heart surgery was performed using a catheter.', ru: 'Операция на сердце была выполнена с использованием катетера.' },
        { en: 'He needed a catheter while he was unconscious.', ru: 'Ему понадобился катетер, пока он был без сознания.' }
    ],
    []
),

createRichWord('c2_caustic', 'Caustic', '/ˈkɔːstɪk/', 'костик', 'Едкий / Язвительный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Способный разъедать органическую ткань (химия); саркастичный и злой (речь).',
    '- Химия: "Caustic soda" (Каустическая сода)\n- Речь: "Caustic wit" (Язвительное остроумие)\n- Комментарий: "Caustic remark" (Едкое замечание)',
    [
        { en: 'Caustic chemicals can burn your skin.', ru: 'Едкие химикаты могут обжечь кожу.' },
        { en: 'He is known for his caustic sense of humor.', ru: 'Он известен своим язвительным чувством юмора.' },
        { en: 'She wrote a caustic review of the book.', ru: 'Она написала едкую рецензию на книгу.' },
        { en: 'Handle caustic substances with gloves.', ru: 'Работайте с едкими веществами в перчатках.' }
    ],
    []
),

createRichWord('c2_chasm', 'Chasm', '/ˈkæzəm/', 'кэзэм', 'Пропасть / Бездна', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Очень глубокая трещина в земле; (перен.) огромная разница между мнениями или группами.',
    '- Природа: "Deep chasm" (Глубокая пропасть)\n- Разница: "Chasm between rich and poor" (Пропасть между богатыми и бедными)\n- Отношения: "Bridge the chasm" (Навести мосты через пропасть)',
    [
        { en: 'A deep chasm opened up during the earthquake.', ru: 'Во время землетрясения разверзлась глубокая пропасть.' },
        { en: 'There is a widening chasm between the two political parties.', ru: 'Между двумя политическими партиями растет пропасть.' },
        { en: 'They stared into the dark chasm below.', ru: 'Они смотрели в темную бездну внизу.' },
        { en: 'The chasm between theory and practice is huge.', ru: 'Пропасть между теорией и практикой огромна.' }
    ],
    []
),

createRichWord('c2_chide', 'Chide', '/tʃaɪd/', 'чайд', 'Корить / Упрекать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Мягко ругать или упрекать кого-то за плохое поведение.',
    '- Упрек: "Chide gently" (Мягко пожурить)\n- Самокритика: "Chide oneself" (Корить себя)\n- Действие: "Chided for being late" (Упрекнули за опоздание)',
    [
        { en: 'She chided the child for not finishing his dinner.', ru: 'Она пожурила ребенка за то, что он не доел ужин.' },
        { en: '"You should be more careful," he chided gently.', ru: '"Тебе следует быть осторожнее", — мягко упрекнул он.' },
        { en: 'He chided himself for his foolishness.', ru: 'Он корил себя за свою глупость.' },
        { en: 'Don\'t chide him; he didn\'t mean to do it.', ru: 'Не ругай его; он не хотел этого делать.' }
    ],
    []
),

createRichWord('c2_chum', 'Chum', '/tʃʌm/', 'чам', 'Приятель / Приманка', ProficiencyLevel.C2, 'noun', 'Low', 'Informal',
    'Близкий друг (устар./разг.); нарезанная рыба, используемая как приманка для акул.',
    '- Дружба: "School chum" (Школьный приятель)\n- Рыбалка: "Shark chum" (Приманка для акул)\n- Глагол: "Chum around with" (Дружить с)',
    [
        { en: 'He and I were old school chums.', ru: 'Мы с ним были старыми школьными приятелями.' },
        { en: 'They threw chum into the water to attract sharks.', ru: 'Они бросали приманку в воду, чтобы привлечь акул.' },
        { en: 'Hello, chum, how are you?', ru: 'Привет, приятель, как ты?' },
        { en: 'He chums around with the wrong crowd.', ru: 'Он водится не с той компанией.' }
    ],
    []
),

createRichWord('c2_circumscribe', 'Circumscribe', '/ˈsɜːkəmskraɪb/', 'сёкэмскрайб', 'Ограничивать / Очерчивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Ограничивать чью-то власть или права; проводить линию вокруг чего-то.',
    '- Власть: "Circumscribe powers" (Ограничить полномочия)\n- Геометрия: "Circumscribed circle" (Описанная окружность)\n- Свобода: "Circumscribed by rules" (Ограниченный правилами)',
    [
        { en: 'The president\'s powers are circumscribed by the constitution.', ru: 'Полномочия президента ограничены конституцией.' },
        { en: 'Their movements were strictly circumscribed.', ru: 'Их передвижения были строго ограничены.' },
        { en: 'In geometry, we learned how to circumscribe a triangle.', ru: 'На геометрии мы учились описывать треугольник.' },
        { en: 'Poverty circumscribes their opportunities.', ru: 'Бедность ограничивает их возможности.' }
    ],
    []
),

createRichWord('c2_cleft', 'Cleft', '/kleft/', 'клефт', 'Расщелина / Расколотый', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Трещина или раскол (в скале или земле); (adj) разделенный на две части.',
    '- Лицо: "Cleft chin" (Ямочка на подбородке)\n- Медицина: "Cleft palate" (Волчья пасть)\n- Земля: "Deep cleft" (Глубокая расщелина)',
    [
        { en: 'He has a distinctive cleft chin.', ru: 'У него характерная ямочка на подбородке.' },
        { en: 'They climbed up a cleft in the rock.', ru: 'Они поднялись по расщелине в скале.' },
        { en: 'The baby was born with a cleft lip.', ru: 'Ребенок родился с заячьей губой.' },
        { en: 'A cleft stick holds the paper firmly.', ru: 'Расщепленная палка крепко держит бумагу.' }
    ],
    []
),

createRichWord('c2_cloister', 'Cloister', '/ˈklɔɪstə(r)/', 'клойстэ', 'Крытая галерея / Монастырь', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Крытый проход вокруг двора в монастыре; жизнь в уединении.',
    '- Архитектура: "Walk in the cloister" (Гулять по галерее)\n- Глагол: "Cloistered life" (Затворническая жизнь)\n- Религия: "Enter a cloister" (Уйти в монастырь)',
    [
        { en: 'The monks walked silently through the cloister.', ru: 'Монахи молча шли по крытой галерее.' },
        { en: 'She led a cloistered life, away from the world.', ru: 'Она вела затворническую жизнь, вдали от мира.' },
        { en: 'The university buildings surround a grassy cloister.', ru: 'Университетские здания окружают двор с галереей.' },
        { en: 'He felt cloistered by his protective parents.', ru: 'Он чувствовал себя изолированным из-за чрезмерно опекающих родителей.' }
    ],
    []
),

createRichWord('c2_coalesce', 'Coalesce', '/ˌkəʊəˈles/', 'кэуэлес', 'Объединяться / Сливаться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Соединяться вместе, образуя одну массу или группу.',
    '- Идеи: "Opinions coalesce" (Мнения объединяются)\n- Группа: "Coalesce into a movement" (Слиться в движение)\n- Жидкость: "Droplets coalesce" (Капли сливаются)',
    [
        { en: 'The droplets coalesced to form a puddle.', ru: 'Капли слились, образовав лужу.' },
        { en: 'Diverse groups coalesced around a common goal.', ru: 'Разрозненные группы объединились вокруг общей цели.' },
        { en: 'His ideas finally coalesced into a theory.', ru: 'Его идеи наконец сложились в теорию.' },
        { en: 'The fog coalesced into a thick cloud.', ru: 'Туман сгустился в плотное облако.' }
    ],
    []
),

createRichWord('c2_coffer', 'Coffer', '/ˈkɒfə(r)/', 'кофэ', 'Сундук / Казна', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Большой сундук для денег; (мн.ч.) финансовые резервы организации или правительства.',
    '- Деньги: "Government coffers" (Государственная казна)\n- Предмет: "Oak coffer" (Дубовый сундук)\n- Фраза: "Empty coffers" (Пустая казна)',
    [
        { en: 'The government coffers are empty.', ru: 'Государственная казна пуста.' },
        { en: 'Tourism brings millions into the city\'s coffers.', ru: 'Туризм приносит миллионы в казну города.' },
        { en: 'He kept his gold in a heavy iron coffer.', ru: 'Он хранил свое золото в тяжелом железном сундуке.' },
        { en: 'The war drained the national coffers.', ru: 'Война истощила национальные резервы.' }
    ],
    []
),

createRichWord('c2_cohabit', 'Cohabit', '/kəʊˈhæbɪt/', 'кэухэбит', 'Сожительствовать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Жить вместе и иметь сексуальные отношения без брака; сосуществовать.',
    '- Отношения: "Cohabiting couple" (Сожительствующая пара)\n- Закон: "Right to cohabit" (Право на сожительство)\n- Природа: "Species cohabit" (Виды сосуществуют)',
    [
        { en: 'They decided to cohabit before getting married.', ru: 'Они решили пожить вместе перед свадьбой.' },
        { en: 'Different species cohabit in this ecosystem.', ru: 'В этой экосистеме сосуществуют разные виды.' },
        { en: 'Cohabiting couples have fewer legal rights.', ru: 'Сожительствующие пары имеют меньше юридических прав.' },
        { en: 'He refused to cohabit with her anymore.', ru: 'Он отказался дальше жить с ней.' }
    ],
    []
),

createRichWord('c2_colitis', 'Colitis', '/kəˈlaɪtɪs/', 'кэлайтис', 'Колит', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Воспаление слизистой оболочки толстой кишки.',
    '- Болезнь: "Ulcerative colitis" (Язвенный колит)\n- Симптом: "Suffer from colitis" (Страдать колитом)\n- Лечение: "Treat colitis" (Лечить колит)',
    [
        { en: 'Stress can make colitis symptoms worse.', ru: 'Стресс может усугубить симптомы колита.' },
        { en: 'He takes medication for ulcerative colitis.', ru: 'Он принимает лекарства от язвенного колита.' },
        { en: 'Colitis causes pain and digestive problems.', ru: 'Колит вызывает боль и проблемы с пищеварением.' },
        { en: 'Diet plays a key role in managing colitis.', ru: 'Диета играет ключевую роль в управлении колитом.' }
    ],
    []
),

createRichWord('c2_commodore', 'Commodore', '/ˈkɒmədɔː(r)/', 'комэдо', 'Коммодор', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Высокое звание в военно-морском флоте (выше капитана, ниже контр-адмирала); президент яхт-клуба.',
    '- Флот: "Naval commodore" (Морской коммодор)\n- Клуб: "Commodore of the Yacht Club" (Коммодор яхт-клуба)\n- Звание: "Rank of commodore" (Звание коммодора)',
    [
        { en: 'The Commodore ordered the fleet to advance.', ru: 'Коммодор приказал флоту наступать.' },
        { en: 'He was elected Commodore of the local sailing club.', ru: 'Его избрали коммодором местного парусного клуба.' },
        { en: 'Commodore Perry opened Japan to the West.', ru: 'Коммодор Перри открыл Японию для Запада.' },
        { en: 'My grandfather served as a commodore during the war.', ru: 'Мой дед служил коммодором во время войны.' }
    ],
    []
),

createRichWord('c2_complicity', 'Complicity', '/kəmˈplɪsəti/', 'кэмплисэти', 'Соучастие', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Факт участия в незаконной деятельности или проступке.',
    '- Преступление: "Complicity in murder" (Соучастие в убийстве)\n- Обвинение: "Deny complicity" (Отрицать соучастие)\n- Доказательство: "Evidence of complicity" (Доказательство соучастия)',
    [
        { en: 'He was charged with complicity in the crime.', ru: 'Ему предъявили обвинение в соучастии в преступлении.' },
        { en: 'She denied any complicity in the fraud.', ru: 'Она отрицала какое-либо соучастие в мошенничестве.' },
        { en: 'His silence suggests complicity.', ru: 'Его молчание предполагает соучастие.' },
        { en: 'The government was accused of complicity in the torture.', ru: 'Правительство обвинили в соучастии в пытках.' }
    ],
    []
),

createRichWord('c2_concuss', 'Concuss', '/kənˈkʌs/', 'кэнкас', 'Контузить / Вызвать сотрясение', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сильно ударить по голове, вызвав временную потерю сознания или спутанность (чаще используется как причастие concussed).',
    '- Травма: "Badly concussed" (Сильно контужен)\n- Голова: "Concuss the brain" (Вызвать сотрясение мозга)\n- Спорт: "Player was concussed" (Игрок получил сотрясение)',
    [
        { en: 'The blow to the head concussed him severely.', ru: 'Удар по голове вызвал у него сильное сотрясение.' },
        { en: 'He was concussed and couldn\'t remember the accident.', ru: 'Он получил сотрясение и не мог вспомнить аварию.' },
        { en: 'Rugby players are often concussed during matches.', ru: 'Регбисты часто получают сотрясения во время матчей.' },
        { en: 'Doctors checked if the fall had concussed her.', ru: 'Врачи проверили, не получила ли она сотрясение при падении.' }
    ],
    []
),

createRichWord('c2_condole', 'Condole', '/kənˈdəʊl/', 'кэндэул', 'Соболезновать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Выражать сочувствие кому-то, кто страдает от горя (обычно "condole with").',
    '- Горе: "Condole with the widow" (Соболезновать вдове)\n- Письмо: "Write to condole" (Написать с соболезнованиями)\n- Чувства: "Deeply condole" (Глубоко соболезновать)',
    [
        { en: 'We condole with you on your sad loss.', ru: 'Мы соболезнуем вам в связи с вашей печальной утратой.' },
        { en: 'Friends came to condole with the family.', ru: 'Друзья пришли выразить соболезнования семье.' },
        { en: 'I wrote a letter to condole with her.', ru: 'Я написал письмо, чтобы выразить ей соболезнования.' },
        { en: 'It is polite to condole with those who mourn.', ru: 'Вежливо выражать соболезнования тем, кто скорбит.' }
    ],
    []
),

createRichWord('c2_conduit', 'Conduit', '/ˈkɒndjuɪt/', 'кондьюит', 'Трубопровод / Канал (связи)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Труба для воды или проводов; человек или организация, связывающая других.',
    '- Техника: "Water conduit" (Водовод)\n- Связь: "Conduit for information" (Канал информации)\n- Роль: "Act as a conduit" (Выступать посредником)',
    [
        { en: 'The pipe acts as a conduit for rainwater.', ru: 'Труба служит каналом для дождевой воды.' },
        { en: 'He was a conduit for messages between the two leaders.', ru: 'Он был каналом передачи сообщений между двумя лидерами.' },
        { en: 'Social media is a major conduit of news.', ru: 'Социальные сети — это основной канал новостей.' },
        { en: 'Underground conduits carry electric cables.', ru: 'Подземные трубопроводы несут электрические кабели.' }
    ],
    []
),

createRichWord('c2_congenial', 'Congenial', '/kənˈdʒiːniəl/', 'кэнджиниэл', 'Близкий по духу / Приятный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Приятный и подходящий по характеру; благоприятный.',
    '- Человек: "Congenial companion" (Приятный компаньон)\n- Атмосфера: "Congenial atmosphere" (Благоприятная атмосфера)\n- Работа: "Congenial work" (Работа по душе)',
    [
        { en: 'We found the atmosphere in the pub very congenial.', ru: 'Мы нашли атмосферу в пабе очень приятной.' },
        { en: 'He is a congenial colleague to work with.', ru: 'Он приятный коллега для работы.' },
        { en: 'I don\'t find this work particularly congenial.', ru: 'Я не нахожу эту работу особо приятной (по душе).' },
        { en: 'They are congenial spirits who love the same things.', ru: 'Они родственные души, которые любят одни и те же вещи.' }
    ],
    []
),

createRichWord('c2_congruent', 'Congruent', '/ˈkɒŋɡruənt/', 'конгруэнт', 'Соответствующий / Конгруэнтный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Совпадающий или согласующийся; (матем.) имеющий одинаковую форму и размер.',
    '- Математика: "Congruent triangles" (Конгруэнтные треугольники)\n- Согласие: "Congruent with" (Соответствующий чему-то)\n- Логика: "Not congruent" (Несовпадающий)',
    [
        { en: 'His actions are congruent with his principles.', ru: 'Его действия соответствуют его принципам.' },
        { en: 'The two triangles are congruent.', ru: 'Эти два треугольника конгруэнтны (равны).' },
        { en: 'Our goals are congruent with the company\'s mission.', ru: 'Наши цели совпадают с миссией компании.' },
        { en: 'The results are not congruent with previous studies.', ru: 'Результаты не согласуются с предыдущими исследованиями.' }
    ],
    []
),

createRichWord('c2_conservancy', 'Conservancy', '/kənˈsɜːvənsi/', 'кэнсёвэнси', 'Охрана природы / Заповедник', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Организация, занимающаяся охраной дикой природы или окружающей среды; охраняемая территория.',
    '- Природа: "Nature conservancy" (Охрана природы)\n- Организация: "The Conservancy Board" (Совет по охране)\n- Место: "Wildlife conservancy" (Заповедник дикой природы)',
    [
        { en: 'The nature conservancy bought the land to protect it.', ru: 'Организация по охране природы купила землю, чтобы защитить ее.' },
        { en: 'He works for a river conservancy board.', ru: 'Он работает в совете по охране рек.' },
        { en: 'We visited a wildlife conservancy in Kenya.', ru: 'Мы посетили заповедник дикой природы в Кении.' },
        { en: 'The conservancy aims to preserve biodiversity.', ru: 'Целью заповедника является сохранение биоразнообразия.' }
    ],
    []
),

createRichWord('c2_consternation', 'Consternation', '/ˌkɒnstəˈneɪʃn/', 'констэнейшн', 'Ужас / Оцепенение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Чувство тревоги, шока или замешательства из-за чего-то неожиданного.',
    '- Чувство: "To my consternation" (К моему ужасу/смущению)\n- Реакция: "Look of consternation" (Выражение ужаса)\n- Причина: "Cause consternation" (Вызвать переполох)',
    [
        { en: 'To her consternation, she realized she had lost her keys.', ru: 'К своему ужасу, она поняла, что потеряла ключи.' },
        { en: 'The announcement caused consternation among the staff.', ru: 'Объявление вызвало переполох среди персонала.' },
        { en: 'He looked at the bill with growing consternation.', ru: 'Он смотрел на счет с нарастающим ужасом.' },
        { en: 'There was consternation when the plan failed.', ru: 'Когда план провалился, возникло всеобщее замешательство.' }
    ],
    []
),

createRichWord('c2_contiguous', 'Contiguous', '/kənˈtɪɡjuəs/', 'кэнтигьюэс', 'Смежный / Прилегающий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Касающийся или граничащий (о странах, комнатах, зонах).',
    '- Граница: "Contiguous countries" (Соседние страны)\n- География: "Contiguous USA" (Континентальная часть США)\n- Зона: "Contiguous zone" (Прилежащая зона)',
    [
        { en: 'The 48 contiguous states exclude Alaska and Hawaii.', ru: '48 смежных штатов исключают Аляску и Гавайи.' },
        { en: 'The garden is contiguous with the park.', ru: 'Сад граничит с парком.' },
        { en: 'Germany is contiguous to France.', ru: 'Германия граничит с Францией.' },
        { en: 'The files are stored in contiguous memory blocks.', ru: 'Файлы хранятся в смежных блоках памяти.' }
    ],
    []
),

createRichWord('c2_contort', 'Contort', '/kənˈtɔːt/', 'кэнтот', 'Искривлять / Искажать', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Скручивать или сгибать что-то в неестественную форму.',
    '- Тело: "Contort the body" (Изгибать тело)\n- Лицо: "Face contorted" (Лицо исказилось)\n- Акробат: "Contortionist" (Акробат-змея)',
    [
        { en: 'His face contorted in pain.', ru: 'Его лицо исказилось от боли.' },
        { en: 'The acrobat can contort her body into amazing shapes.', ru: 'Акробатка может изгибать свое тело в удивительные формы.' },
        { en: 'Metal was contorted by the heat of the fire.', ru: 'Металл был искривлен жаром огня.' },
        { en: 'She contorted her features to make a funny face.', ru: 'Она скривила лицо, чтобы сделать смешную гримасу.' }
    ],
    []
),

createRichWord('c2_contravene', 'Contravene', '/ˌkɒntrəˈviːn/', 'контрэвин', 'Нарушать / Противоречить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Делать что-то, что запрещено законом или правилом.',
    '- Закон: "Contravene the law" (Нарушать закон)\n- Правила: "Contravene regulations" (Нарушать предписания)\n- Принципы: "Contravene rights" (Попирать права)',
    [
        { en: 'The company contravened safety regulations.', ru: 'Компания нарушила правила безопасности.' },
        { en: 'This action contravenes the UN charter.', ru: 'Это действие противоречит уставу ООН.' },
        { en: 'He was fined for contravening the parking rules.', ru: 'Его оштрафовали за нарушение правил парковки.' },
        { en: 'Such a policy would contravene human rights.', ru: 'Такая политика нарушила бы права человека.' }
    ],
    []
  ),
createRichWord('c2_convoluted', 'Convoluted', '/ˈkɒnvəluːtɪd/', 'конвэлютид', 'Запутанный / Сложный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Чрезвычайно сложный и трудный для понимания (о речи, аргументах); извилистый.',
    '- Аргумент: "Convoluted argument" (Запутанный аргумент)\n- Сюжет: "Convoluted plot" (Запутанный сюжет)\n- Форма: "Convoluted shape" (Извилистая форма)',
    [
        { en: 'The instructions were so convoluted that I gave up.', ru: 'Инструкции были настолько запутанными, что я сдался.' },
        { en: 'He gave a convoluted explanation for his lateness.', ru: 'Он дал путаное объяснение своему опозданию.' },
        { en: 'The film has a convoluted plot involving time travel.', ru: 'У фильма запутанный сюжет, включающий путешествия во времени.' },
        { en: 'The brain has a convoluted surface.', ru: 'У мозга извилистая поверхность.' }
    ],
    []
),

createRichWord('c2_coo', 'Coo', '/kuː/', 'ку', 'Ворковать', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Издавать мягкий звук, как голубь; говорить очень мягко и с любовью.',
    '- Птица: "Pigeons coo" (Голуби воркуют)\n- Речь: "Coo over a baby" (Сюсюкать над ребенком)\n- Звук: "Soft coo" (Тихое воркование)',
    [
        { en: 'The pigeons cooed softly on the roof.', ru: 'Голуби тихо ворковали на крыше.' },
        { en: 'She cooed over the newborn baby.', ru: 'Она ворковала (умилялась) над новорожденным.' },
        { en: '"Everything will be alright," she cooed.', ru: '"Все будет хорошо", — проворковала она.' },
        { en: 'We could hear the gentle cooing of doves.', ru: 'Мы слышали нежное воркование горлиц.' }
    ],
    []
),

createRichWord('c2_coop', 'Coop', '/kuːp/', 'куп', 'Курятник / Клетка', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Клетка или маленький домик для содержания мелких животных (птиц); (verb) держать взаперти.',
    '- Птицы: "Chicken coop" (Курятник)\n- Глагол: "Cooped up" (Взаперти / Как в клетке)\n- Ферма: "Build a coop" (Построить курятник)',
    [
        { en: 'The foxes tried to get into the chicken coop.', ru: 'Лисы пытались пробраться в курятник.' },
        { en: 'I feel cooped up in this small office.', ru: 'Я чувствую себя запертым в этом маленьком офисе.' },
        { en: 'Don\'t keep the dog cooped up all day.', ru: 'Не держи собаку взаперти весь день.' },
        { en: 'He spent the rainy day cooped up in his room.', ru: 'Он провел дождливый день, запершись в своей комнате.' }
    ],
    []
),

createRichWord('c2_copious', 'Copious', '/ˈkəʊpiəs/', 'кэупиэс', 'Обильный / Обширный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Существующий в больших количествах.',
    '- Количество: "Copious amounts" (Обильное количество)\n- Записи: "Copious notes" (Обширные записи)\n- Еда: "Copious meal" (Обильная трапеза)',
    [
        { en: 'She took copious notes during the lecture.', ru: 'Она делала обширные записи во время лекции.' },
        { en: 'They drank copious amounts of wine.', ru: 'Они выпили огромное количество вина.' },
        { en: 'The plant produces a copious supply of nectar.', ru: 'Растение производит обильный запас нектара.' },
        { en: 'He cried copious tears of joy.', ru: 'Он проливал обильные слезы радости.' }
    ],
    []
),

createRichWord('c2_cordial', 'Cordial', '/ˈkɔːdiəl/', 'кодиэл', 'Радушный / Кордиал (напиток)', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Дружелюбный, но вежливый и формальный; (сущ.) сладкий фруктовый напиток.',
    '- Приветствие: "Cordial greeting" (Радушное приветствие)\n- Отношения: "Cordial relations" (Сердечные отношения)\n- Напиток: "Lime cordial" (Лаймовый сироп/напиток)',
    [
        { en: 'The two leaders had a cordial meeting.', ru: 'У двух лидеров состоялась теплая (радушная) встреча.' },
        { en: 'He received a cordial welcome from the host.', ru: 'Он получил радушный прием от хозяина.' },
        { en: 'We maintain cordial relations with our competitors.', ru: 'Мы поддерживаем сердечные отношения с нашими конкурентами.' },
        { en: 'Would you like some blackcurrant cordial?', ru: 'Не хотите ли черносмородинового кордиала (напитка)?' }
    ],
    []
),

createRichWord('c2_cordon', 'Cordon', '/ˈkɔːdn/', 'кодн', 'Оцепление', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Линия полиции или солдат, преграждающая доступ к территории.',
    '- Полиция: "Police cordon" (Полицейское оцепление)\n- Действие: "Cordon off" (Оцепить)\n- Безопасность: "Security cordon" (Оцепление безопасности)',
    [
        { en: 'Police formed a cordon around the crime scene.', ru: 'Полиция выставила оцепление вокруг места преступления.' },
        { en: 'They cordoned off the street after the explosion.', ru: 'Они оцепили улицу после взрыва.' },
        { en: 'Demonstrators tried to break through the cordon.', ru: 'Демонстранты пытались прорваться через оцепление.' },
        { en: 'A sanitary cordon was set up to stop the virus.', ru: 'Был установлен санитарный кордон, чтобы остановить вирус.' }
    ],
    []
),

createRichWord('c2_corrugate', 'Corrugate', '/ˈkɒrəɡeɪt/', 'корэгейт', 'Рифлить / Сморщивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Придавать форму волн или складок (о материале или коже).',
    '- Материал: "Corrugated iron" (Рифленое железо / Профнастил)\n- Упаковка: "Corrugated cardboard" (Гофрокартон)\n- Кожа: "Brow corrugated" (Лоб наморщился)',
    [
        { en: 'The roof was made of corrugated iron sheets.', ru: 'Крыша была сделана из листов рифленого железа.' },
        { en: 'Pack the glass in corrugated cardboard.', ru: 'Упакуйте стекло в гофрокартон.' },
        { en: 'His brow corrugated in a frown.', ru: 'Его лоб сморщился, когда он нахмурился.' },
        { en: 'Corrugated surfaces are stronger than flat ones.', ru: 'Рифленые поверхности прочнее плоских.' }
    ],
    []
),

createRichWord('c2_cossack', 'Cossack', '/ˈkɒsæk/', 'косэк', 'Казак', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Член народа южной России и Украины, известного своим военным мастерством (исторический термин).',
    '- История: "Cossack cavalry" (Казачья кавалерия)\n- Танец: "Cossack dance" (Казачий танец)\n- Культура: "Don Cossacks" (Донские казаки)',
    [
        { en: 'The Cossacks were famous for their horsemanship.', ru: 'Казаки славились своим мастерством верховой езды.' },
        { en: 'He performed a traditional Cossack dance.', ru: 'Он исполнил традиционный казачий танец.' },
        { en: 'Stories about Cossack warriors are legendary.', ru: 'Истории о воинах-казаках легендарны.' },
        { en: 'The regiment was originally formed of Cossacks.', ru: 'Полк изначально был сформирован из казаков.' }
    ],
    []
),

createRichWord('c2_coupe', 'Coupe', '/kuːˈpeɪ/', 'купей', 'Купе (автомобиль)', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Автомобиль с двумя дверями и спортивным дизайном; (реже) тип бокала для шампанского.',
    '- Авто: "Sports coupe" (Спортивное купе)\n- Посуда: "Champagne coupe" (Бокал-купе для шампанского)\n- Дизайн: "Two-door coupe" (Двухдверное купе)',
    [
        { en: 'He bought a sleek red sports coupe.', ru: 'Он купил гладкое красное спортивное купе.' },
        { en: 'The coupe has less space in the back seats.', ru: 'В купе меньше места на задних сиденьях.' },
        { en: 'She served the drink in a crystal coupe.', ru: 'Она подала напиток в хрустальном бокале-купе.' },
        { en: 'Classic coupes are very valuable now.', ru: 'Классические купе сейчас очень ценятся.' }
    ],
    []
),

createRichWord('c2_cower', 'Cower', '/ˈkaʊə(r)/', 'кауэ', 'Сжиматься (от страха)', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Пригибаться к земле или отступать назад из-за сильного страха.',
    '- Страх: "Cower in fear" (Сжиматься от страха)\n- Угол: "Cower in the corner" (Забиться в угол)\n- Реакция: "Cower away" (Отпрянуть в страхе)',
    [
        { en: 'The dog cowered in the corner when I shouted.', ru: 'Собака забилась в угол, когда я закричал.' },
        { en: 'They cowered under the table during the earthquake.', ru: 'Они сжались под столом во время землетрясения.' },
        { en: 'He cowered away from the blow.', ru: 'Он отпрянул от удара.' },
        { en: 'Don\'t cower, stand up for yourself!', ru: 'Не сжимайся от страха, постой за себя!' }
    ],
    []
),

createRichWord('c2_coy', 'Coy', '/kɔɪ/', 'кой', 'Застенчивый (наигранно) / Скрытный', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Притворно скромный или застенчивый (часто при флирте); не желающий давать информацию.',
    '- Поведение: "Coy smile" (Застенчивая улыбка)\n- Информация: "Play coy" (Темнить / Не договаривать)\n- Отношение: "Being coy about" (Скрытничать о)',
    [
        { en: 'She gave him a coy smile.', ru: 'Она одарила его застенчивой улыбкой.' },
        { en: 'Don\'t be coy, tell us the news!', ru: 'Не скромничай (не темни), расскажи нам новости!' },
        { en: 'The company is being coy about its future plans.', ru: 'Компания темнит (не договаривает) о своих будущих планах.' },
        { en: 'He played coy when asked about the wedding.', ru: 'Он ушел от ответа, когда его спросили о свадьбе.' }
    ],
    []
),

createRichWord('c2_credence', 'Credence', '/ˈkriːdns/', 'криднс', 'Доверие / Вера', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Вера в то, что что-то истинно или правильно.',
    '- Фраза: "Give credence to" (Придавать значение / Верить)\n- Фраза: "Lend credence to" (Подкреплять доверие)\n- Сомнение: "Gain credence" (Завоевывать доверие)',
    [
        { en: 'I don\'t give much credence to these rumours.', ru: 'Я не особо доверяю этим слухам.' },
        { en: 'His detailed account lent credence to his story.', ru: 'Его детальный отчет придал достоверности его истории.' },
        { en: 'The theory is gaining credence among scientists.', ru: 'Эта теория завоевывает доверие среди ученых.' },
        { en: 'Letters of credence are presented by ambassadors.', ru: 'Верительные грамоты вручаются послами.' }
    ],
    []
),

createRichWord('c2_crevice', 'Crevice', '/ˈkrevɪs/', 'кревис', 'Щель / Трещина', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Узкое отверстие или трещина, особенно в скале или стене.',
    '- Скала: "Rock crevice" (Щель в скале)\n- Природа: "Hidden in a crevice" (Спрятанный в расщелине)\n- Поверхность: "Deep crevice" (Глубокая трещина)',
    [
        { en: 'Plants grew in the crevices of the wall.', ru: 'Растения росли в трещинах стены.' },
        { en: 'The climber found a foothold in a small crevice.', ru: 'Альпинист нашел опору для ноги в маленькой расщелине.' },
        { en: 'Lizards hid in the rocky crevices.', ru: 'Ящерицы прятались в скалистых щелях.' },
        { en: 'Sand filled every crevice of the machine.', ru: 'Песок забил каждую щель машины.' }
    ],
    []
),

createRichWord('c2_crinkle', 'Crinkle', '/ˈkrɪŋkl/', 'кринкл', 'Морщить / Сморщиваться', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Образовывать много мелких складок или морщин; издавать шуршащий звук.',
    '- Лицо: "Eyes crinkle" (Глаза щурятся в улыбке)\n- Бумага: "Crinkle paper" (Мять бумагу)\n- Звук: "Crinkle sound" (Шуршание)',
    [
        { en: 'Her eyes crinkled when she laughed.', ru: 'Ее глаза щурились (покрывались морщинками), когда она смеялась.' },
        { en: 'The foil crinkled as he unwrapped the sandwich.', ru: 'Фольга зашуршала, когда он разворачивал бутерброд.' },
        { en: 'Crinkle-cut chips are popular here.', ru: 'Рифленые чипсы здесь популярны.' },
        { en: 'The fabric crinkles easily.', ru: 'Эта ткань легко мнется (образует мелкие складки).' }
    ],
    []
),

createRichWord('c2_crony', 'Crony', '/ˈkrəʊni/', 'крэуни', 'Приспешник / Дружок (негатив.)', ProficiencyLevel.C2, 'noun', 'Low', 'Informal',
    'Близкий друг или соратник (часто используется в политике, намекая на кумовство).',
    '- Политика: "Political cronies" (Политические дружки)\n- Бизнес: "Crony capitalism" (Блатной капитализм)\n- Власть: "Appoint cronies" (Назначать своих людей)',
    [
        { en: 'The mayor gave contracts to his old cronies.', ru: 'Мэр раздал контракты своим старым дружкам.' },
        { en: 'He was surrounded by a group of sycophantic cronies.', ru: 'Он был окружен группой льстивых приспешников.' },
        { en: 'They accused the government of cronyism.', ru: 'Они обвинили правительство в кумовстве.' },
        { en: 'His cronies helped him cover up the scandal.', ru: 'Его дружки помогли ему замять скандал.' }
    ],
    []
),

createRichWord('c2_croon', 'Croon', '/kruːn/', 'крун', 'Напевать (тихо/нежно)', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Петь или говорить мягким, низким, сентиментальным голосом.',
    '- Музыка: "Croon a song" (Мягко напевать песню)\n- Речь: "Croon to a baby" (Ворковать с ребенком)\n- Исполнитель: "Crooner" (Эстрадный певец - напр. Синатра)',
    [
        { en: 'Frank Sinatra was famous for crooning love songs.', ru: 'Фрэнк Синатра был знаменит исполнением любовных песен в мягком стиле.' },
        { en: 'She crooned a lullaby to the sleeping child.', ru: 'Она напевала колыбельную спящему ребенку.' },
        { en: 'The singer crooned into the microphone.', ru: 'Певец мягко пел в микрофон.' },
        { en: '"Don\'t worry," he crooned soothingly.', ru: '"Не волнуйся", — успокаивающе пропел (проворковал) он.' }
    ],
    []
),

createRichWord('c2_crucify', 'Crucify', '/ˈkruːsɪfaɪ/', 'крусифай', 'Распять / Мучить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Убить, прибив к кресту; (перен.) сурово критиковать или наказывать.',
    '- Религия: "Jesus was crucified" (Иисус был распят)\n- Критика: "Crucified by the press" (Растерзан прессой)\n- Спорт: "Crucified for the mistake" (Жестоко раскритикован за ошибку)',
    [
        { en: 'The Romans used to crucify criminals.', ru: 'Римляне обычно распинали преступников.' },
        { en: 'The media crucified him for his comments.', ru: 'СМИ распяли (уничтожили) его за его комментарии.' },
        { en: 'If I\'m late again, my boss will crucify me.', ru: 'Если я снова опоздаю, мой начальник меня убьет (метаф.).' },
        { en: 'She felt crucified by guilt.', ru: 'Она чувствовала себя распятой чувством вины.' }
    ],
    []
),

createRichWord('c2_crux', 'Crux', '/krʌks/', 'кракс', 'Суть / Ключевой момент', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Самая важная или трудная часть проблемы.',
    '- Проблема: "Crux of the matter" (Суть дела)\n- Спор: "The crux is..." (Главное в том...)\n- Задача: "Crux of the problem" (Корень проблемы)',
    [
        { en: 'The crux of the matter is that we have no money.', ru: 'Суть дела в том, что у нас нет денег.' },
        { en: 'This point is the crux of his argument.', ru: 'Этот пункт — ключевой момент его аргументации.' },
        { en: 'Getting him to agree is the crux.', ru: 'Заставить его согласиться — это самое сложное.' },
        { en: 'We finally reached the crux of the debate.', ru: 'Мы наконец добрались до сути дебатов.' }
    ],
    []
),

createRichWord('c2_crypt', 'Crypt', '/krɪpt/', 'крипт', 'Склеп / Крипта', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Подземная комната под церковью, используемая для захоронений.',
    '- Церковь: "Buried in the crypt" (Похоронен в склепе)\n- Архитектура: "Church crypt" (Церковная крипта)\n- Атмосфера: "Dark crypt" (Темный склеп)',
    [
        { en: 'Kings were buried in the crypt of the cathedral.', ru: 'Короли были похоронены в крипте собора.' },
        { en: 'The crypt is open to visitors.', ru: 'Склеп открыт для посетителей.' },
        { en: 'It was cold and damp in the ancient crypt.', ru: 'В древнем склепе было холодно и сыро.' },
        { en: 'They found old bones in the crypt.', ru: 'Они нашли старые кости в крипте.' }
    ],
    []
),

createRichWord('c2_cryptic', 'Cryptic', '/ˈkrɪptɪk/', 'криптик', 'Загадочный / Таинственный', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Имеющий скрытый смысл; трудный для понимания.',
    '- Сообщение: "Cryptic message" (Загадочное сообщение)\n- Кроссворд: "Cryptic crossword" (Криптограмма / Сложный кроссворд)\n- Ответ: "Cryptic remark" (Тумманное замечание)',
    [
        { en: 'She left a cryptic note on the table.', ru: 'Она оставила загадочную записку на столе.' },
        { en: 'He gave a cryptic smile and walked away.', ru: 'Он загадочно улыбнулся и ушел.' },
        { en: 'The clues in a cryptic crossword can be very hard.', ru: 'Подсказки в криптографическом кроссворде могут быть очень сложными.' },
        { en: 'His instructions were brief and cryptic.', ru: 'Его инструкции были краткими и туманными.' }
    ],
    []
),

createRichWord('c2_crystalline', 'Crystalline', '/ˈkrɪstəlaɪn/', 'кристэлайн', 'Кристаллический / Прозрачный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Состоящий из кристаллов; очень чистый и прозрачный.',
    '- Структура: "Crystalline structure" (Кристаллическая структура)\n- Вода: "Crystalline water" (Кристально чистая вода)\n- Вещество: "Crystalline solid" (Кристаллическое твердое тело)',
    [
        { en: 'Diamond has a crystalline structure.', ru: 'Алмаз имеет кристаллическую структуру.' },
        { en: 'The water in the lake was absolutely crystalline.', ru: 'Вода в озере была абсолютно прозрачной.' },
        { en: 'Salt is a crystalline substance.', ru: 'Соль — это кристаллическое вещество.' },
        { en: 'The morning air was cold and crystalline.', ru: 'Утренний воздух был холодным и прозрачным.' }
    ],
    []
),

createRichWord('c2_culpable', 'Culpable', '/ˈkʌlpəbl/', 'калпэбл', 'Виновный / Заслуживающий порицания', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Заслуживающий осуждения за что-то плохое; ответственный за проступок.',
    '- Закон: "Culpable homicide" (Непреднамеренное убийство)\n- Ответственность: "Held culpable" (Признан виновным)\n- Поведение: "Culpable negligence" (Преступная халатность)',
    [
        { en: 'He was found culpable of negligence.', ru: 'Его признали виновным в халатности.' },
        { en: 'Both parties are culpable in this dispute.', ru: 'Обе стороны виноваты в этом споре.' },
        { en: 'The judge decided he was not legally culpable.', ru: 'Судья решил, что он не несет юридической ответственности.' },
        { en: 'Ignoring the warnings was culpable stupidity.', ru: 'Игнорирование предупреждений было преступной глупостью.' }
    ],
    []
),

createRichWord('c2_cursory', 'Cursory', '/ˈkɜːsəri/', 'кёсэри', 'Беглый / Поверхностный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Сделанный быстро и без внимания к деталям.',
    '- Взгляд: "Cursory glance" (Беглый взгляд)\n- Осмотр: "Cursory inspection" (Поверхностный осмотр)\n- Проверка: "Cursory check" (Беглая проверка)',
    [
        { en: 'He gave the report a cursory glance.', ru: 'Он бегло просмотрел отчет.' },
        { en: 'A cursory examination revealed no problems.', ru: 'Поверхностный осмотр не выявил проблем.' },
        { en: 'Even a cursory look shows that this is wrong.', ru: 'Даже беглый взгляд показывает, что это неправильно.' },
        { en: 'They made only a cursory attempt to solve it.', ru: 'Они предприняли лишь поверхностную попытку решить это.' }
    ],
    []
),

createRichWord('c2_cystic', 'Cystic', '/ˈsɪstɪk/', 'систик', 'Кистозный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к кистам (мешочкам с жидкостью в теле) или мочевому пузырю.',
    '- Болезнь: "Cystic fibrosis" (Муковисцидоз / Кистозный фиброз)\n- Кожа: "Cystic acne" (Кистозное акне)\n- Орган: "Cystic duct" (Пузырный проток)',
    [
        { en: 'Cystic fibrosis is a genetic disorder.', ru: 'Муковисцидоз — это генетическое заболевание.' },
        { en: 'She suffers from severe cystic acne.', ru: 'Она страдает от тяжелого кистозного акне.' },
        { en: 'The ultrasound showed a cystic mass.', ru: 'УЗИ показало кистозное образование.' },
        { en: 'Cystic lesions require careful treatment.', ru: 'Кистозные поражения требуют тщательного лечения.' }
    ],
    []
),

createRichWord('c2_dabble', 'Dabble', '/ˈdæbl/', 'дэбл', 'Заниматься поверхностно / Плескаться', ProficiencyLevel.C2, 'verb', 'Low', 'Neutral',
    'Заниматься чем-то несерьезно (хобби); плескать руками или ногами в воде.',
    '- Хобби: "Dabble in painting" (Баловаться живописью)\n- Интерес: "Dabble in politics" (Немного интересоваться политикой)\n- Вода: "Dabble feet" (Болтать ногами в воде)',
    [
        { en: 'He dabbles in stocks and shares.', ru: 'Он балуется (немного занимается) акциями.' },
        { en: 'She dabbled her toes in the pool.', ru: 'Она поболтала пальцами ног в бассейне.' },
        { en: 'I only dabble in photography; I am not a pro.', ru: 'Я только балуюсь фотографией, я не профи.' },
        { en: 'Ducks dabble in the shallow water for food.', ru: 'Утки плещутся на мелководье в поисках еды.' }
    ],
    []
),

createRichWord('c2_dal', 'Dal', '/dɑːl/', 'дал', 'Дал (блюдо)', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Индийское блюдо из чечевицы, гороха или бобов; сами эти бобовые.',
    '- Еда: "Lentil dal" (Чечевичный дал)\n- Рецепт: "Spicy dal" (Острый дал)\n- Меню: "Rice and dal" (Рис и дал)',
    [
        { en: 'We ate rice and spicy dal for dinner.', ru: 'На ужин мы ели рис и острый дал.' },
        { en: 'Dal is a staple food in India.', ru: 'Дал — основной продукт питания в Индии.' },
        { en: 'She cooked a delicious yellow dal.', ru: 'Она приготовила вкусный желтый дал.' },
        { en: 'There are many different varieties of dal.', ru: 'Существует много разных видов дала.' }
    ],
    []
),

createRichWord('c2_debacle', 'Debacle', '/deɪˈbɑːkl/', 'дейбакл', 'Фиаско / Провал', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Полный провал или катастрофа, часто постыдная.',
    '- Событие: "Military debacle" (Военное фиаско)\n- Бизнес: "Financial debacle" (Финансовый крах)\n- Политика: "Election debacle" (Провал на выборах)',
    [
        { en: 'The launch of the new product was a complete debacle.', ru: 'Запуск нового продукта был полным провалом.' },
        { en: 'He resigned after the debacle.', ru: 'Он ушел в отставку после этого фиаско.' },
        { en: 'The party suffered a debacle in the polls.', ru: 'Партия потерпела сокрушительное поражение на выборах.' },
        { en: 'We must learn lessons from this debacle.', ru: 'Мы должны извлечь уроки из этого провала.' }
    ],
    []
),

createRichWord('c2_decimate', 'Decimate', '/ˈdesɪmeɪt/', 'дэсимейт', 'Уничтожать / Истреблять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Убивать или уничтожать значительную часть чего-либо (исторически - каждого десятого).',
    '- Население: "Decimate the population" (Истребить население)\n- Болезнь: "Decimated by disease" (Выкошенный болезнью)\n- Природа: "Forests decimated" (Леса уничтожены)',
    [
        { en: 'The population was decimated by the plague.', ru: 'Население было выкошено чумой.' },
        { en: 'Overfishing has decimated the cod stocks.', ru: 'Чрезмерный вылов рыбы уничтожил запасы трески.' },
        { en: 'The bombing decimated the city center.', ru: 'Бомбардировка уничтожила центр города.' },
        { en: 'Budget cuts have decimated public services.', ru: 'Сокращение бюджета уничтожило общественные услуги.' }
    ],
    []
),

createRichWord('c2_decoy', 'Decoy', '/ˈdiːkɔɪ/', 'дикой', 'Приманка / Ловушка', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Что-то или кто-то, используемый для того, чтобы заманить в ловушку или отвлечь внимание.',
    '- Охота: "Duck decoy" (Утиное чучело/манок)\n- Тактика: "Use as a decoy" (Использовать как приманку)\n- Война: "Decoy flares" (Тепловые ловушки)',
    [
        { en: 'The soldiers used a dummy tank as a decoy.', ru: 'Солдаты использовали макет танка в качестве приманки.' },
        { en: 'She acted as a decoy to distract the guard.', ru: 'Она выступила в роли приманки, чтобы отвлечь охранника.' },
        { en: 'Hunters use wooden decoys to attract birds.', ru: 'Охотники используют деревянные чучела для привлечения птиц.' },
        { en: 'The escape plan involved a clever decoy.', ru: 'План побега включал хитрый отвлекающий маневр.' }
    ],
    []
),

createRichWord('c2_deluge', 'Deluge', '/ˈdeljuːdʒ/', 'дэльюдж', 'Потоп / Наводнение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Сильное наводнение или ливень; (перен.) огромное количество чего-либо сразу.',
    '- Погода: "Rain deluge" (Ливень)\n- Переносное: "Deluge of complaints" (Шквал жалоб)\n- Библия: "The Deluge" (Всемирный потоп)',
    [
        { en: 'The sudden deluge flooded the streets.', ru: 'Внезапный ливень затопил улицы.' },
        { en: 'We received a deluge of applications for the job.', ru: 'Мы получили шквал заявок на эту работу.' },
        { en: 'The office was facing a deluge of paperwork.', ru: 'Офис столкнулся с потоком бумажной работы.' },
        { en: 'After the drought came the deluge.', ru: 'После засухи пришел потоп.' }
    ],
    [
        { meaning: "To flood/overwhelm (verb)", translation: "Затоплять / Заваливать", example: { en: "They were deluged with calls.", ru: "Их завалили звонками." } }
    ]
),

createRichWord('c2_demarcate', 'Demarcate', '/diːˈmɑːkeɪt/', 'димакейт', 'Разграничивать / Устанавливать границы', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Устанавливать пределы или границы чего-либо; разделять.',
    '- Границы: "Demarcate the border" (Установить границу)\n- Роли: "Demarcate responsibilities" (Разграничить обязанности)\n- Линия: "Clearly demarcated" (Четко разграниченный)',
    [
        { en: 'The border was strictly demarcated.', ru: 'Граница была строго демаркирована.' },
        { en: 'We need to demarcate the parking spaces.', ru: 'Нам нужно разграничить парковочные места.' },
        { en: 'It is hard to demarcate where art ends and life begins.', ru: 'Трудно разграничить, где заканчивается искусство и начинается жизнь.' },
        { en: 'Responsibilities are clearly demarcated in the contract.', ru: 'Обязанности четко разграничены в контракте.' }
    ],
    []
),

createRichWord('c2_demean', 'Demean', '/dɪˈmiːn/', 'димин', 'Унижать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Заставлять кого-то терять уважение к себе; вести себя недостойно.',
    '- Поведение: "Demean oneself" (Унижаться)\n- Действие: "Demeaning task" (Унизительная задача)\n- Отношение: "Don\'t demean me" (Не унижай меня)',
    [
        { en: 'I will not demean myself by asking for charity.', ru: 'Я не буду унижаться, прося милостыню.' },
        { en: 'Such behaviour demeans the office of President.', ru: 'Такое поведение унижает должность президента.' },
        { en: 'She found the work boring and demeaning.', ru: 'Она находила работу скучной и унизительной.' },
        { en: 'Don\'t demean his efforts; he tried his best.', ru: 'Не принижай его усилия; он старался изо всех сил.' }
    ],
    []
),

createRichWord('c2_denigrate', 'Denigrate', '/ˈdenɪɡreɪt/', 'дэнигрейт', 'Клеветать / Принижать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Несправедливо критиковать кого-то или что-то; чернить репутацию.',
    '- Критика: "Denigrate achievements" (Принижать достижения)\n- Человек: "Denigrate someone" (Очернять кого-то)\n- Мнение: "Stop denigrating" (Прекрати порочить)',
    [
        { en: 'You shouldn\'t denigrate people just because they are different.', ru: 'Не стоит принижать людей только за то, что они другие.' },
        { en: 'He is always trying to denigrate my work.', ru: 'Он всегда пытается очернить мою работу.' },
        { en: 'The article denigrates the entire profession.', ru: 'Статья порочит всю профессию.' },
        { en: 'I do not wish to denigrate his success.', ru: 'Я не хочу умалять его успех.' }
    ],
    []
),

createRichWord('c2_despondent', 'Despondent', '/dɪˈspɒndənt/', 'диспондэнт', 'Унылый / Отчаявшийся', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Очень несчастный и без надежды.',
    '- Чувство: "Feel despondent" (Чувствовать уныние)\n- Вид: "Look despondent" (Выглядеть подавленным)\n- Причина: "Despondent about failure" (Отчаявшийся из-за неудачи)',
    [
        { en: 'He became despondent when he lost his job.', ru: 'Он впал в уныние, когда потерял работу.' },
        { en: 'She grew increasingly despondent about her health.', ru: 'Она становилась все более подавленной из-за своего здоровья.' },
        { en: 'Do not be despondent; things will get better.', ru: 'Не отчаивайся, все наладится.' },
        { en: 'A despondent mood settled over the team.', ru: 'Унылое настроение охватило команду.' }
    ],
    []
),

createRichWord('c2_despot', 'Despot', '/ˈdespɒt/', 'дэспот', 'Деспот / Тиран', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Правитель с неограниченной властью, часто жестокий.',
    '- Политика: "Cruel despot" (Жестокий деспот)\n- Власть: "Benevolent despot" (Просвещенный деспот - ист.)\n- Правление: "Rule like a despot" (Править как тиран)',
    [
        { en: 'The country was ruled by a brutal despot.', ru: 'Страной правил жестокий деспот.' },
        { en: 'The people revolted against the despot.', ru: 'Народ восстал против тирана.' },
        { en: 'He behaves like a despot in his own home.', ru: 'Он ведет себя как деспот в собственном доме.' },
        { en: 'History is full of stories about despots.', ru: 'История полна историй о деспотах.' }
    ],
    []
),

createRichWord('c2_destitute', 'Destitute', '/ˈdestɪtjuːt/', 'дэститьют', 'Обездоленный / Нищий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Не имеющий денег, еды и дома; лишенный чего-либо.',
    '- Бедность: "Left destitute" (Оставшийся нищим)\n- Люди: "Destitute family" (Нищая семья)\n- Фраза: "Destitute of ideas" (Лишенный идей)',
    [
        { en: 'The war left thousands of people destitute.', ru: 'Война оставила тысячи людей обездоленными.' },
        { en: 'He died destitute in a foreign land.', ru: 'Он умер в нищете на чужбине.' },
        { en: 'The refugees arrived destitute and hungry.', ru: 'Беженцы прибыли нищими и голодными.' },
        { en: 'Ideally, no citizen should be destitute.', ru: 'В идеале ни один гражданин не должен быть нищим.' }
    ],
    []
),

createRichWord('c2_deutschmark', 'Deutschmark', '/ˈdɔɪtʃmɑːk/', 'дойчмак', 'Немецкая марка', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Бывшая валюта Германии (до евро).',
    '- Деньги: "Pay in Deutschmarks" (Платить в марках)\n- История: "Value of the Deutschmark" (Стоимость марки)\n- Валюта: "Strong Deutschmark" (Сильная марка)',
    [
        { en: 'The Deutschmark was replaced by the Euro.', ru: 'Немецкая марка была заменена евро.' },
        { en: 'It cost ten Deutschmarks back then.', ru: 'Тогда это стоило десять немецких марок.' },
        { en: 'The Deutschmark was known for its stability.', ru: 'Немецкая марка славилась своей стабильностью.' },
        { en: 'He found some old Deutschmarks in a drawer.', ru: 'Он нашел в ящике несколько старых немецких марок.' }
    ],
    []
),

createRichWord('c2_devious', 'Devious', '/ˈdiːviəs/', 'дивиэс', 'Коварный / Изворотливый', ProficiencyLevel.C2, 'adj', 'Low', 'Neutral',
    'Использующий нечестные методы для достижения цели; окольный (путь).',
    '- Характер: "Devious plan" (Коварный план)\n- Человек: "Devious politician" (Изворотливый политик)\n- Путь: "Devious route" (Окольный путь)',
    [
        { en: 'He has a devious mind when it comes to plotting.', ru: 'У него коварный ум, когда дело доходит до интриг.' },
        { en: 'She used devious means to get the promotion.', ru: 'Она использовала нечестные методы, чтобы получить повышение.' },
        { en: 'We took a devious route to avoid the traffic.', ru: 'Мы поехали окольным путем, чтобы избежать пробок.' },
        { en: 'Don\'t be so devious, just tell the truth.', ru: 'Не будь таким изворотливым, просто скажи правду.' }
    ],
    []
),

createRichWord('c2_diaphragm', 'Diaphragm', '/ˈdaɪəfræm/', 'дайэфрэм', 'Диафрагма', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Мышца, разделяющая грудь и живот; устройство (в камере или контрацептив).',
    '- Анатомия: "Breathe from the diaphragm" (Дышать диафрагмой)\n- Фото: "Camera diaphragm" (Диафрагма камеры)\n- Медицина: "Contraceptive diaphragm" (Противозачаточная диафрагма)',
    [
        { en: 'Singers learn to control their diaphragm.', ru: 'Певцы учатся контролировать свою диафрагму.' },
        { en: 'Hiccups are caused by spasms of the diaphragm.', ru: 'Икота вызывается спазмами диафрагмы.' },
        { en: 'Adjust the diaphragm to let more light in.', ru: 'Отрегулируйте диафрагму, чтобы пропустить больше света.' },
        { en: 'The diaphragm separates the chest cavity from the abdomen.', ru: 'Диафрагма отделяет грудную полость от брюшной.' }
    ],
    []
),

createRichWord('c2_dignitary', 'Dignitary', '/ˈdɪɡnɪtəri/', 'дигнитэри', 'Высокопоставленное лицо', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Человек, занимающий важный пост (в правительстве или церкви).',
    '- Событие: "Visiting dignitary" (Приезжее важное лицо)\n- Церковь: "Church dignitary" (Церковный сановник)\n- Встреча: "Local dignitaries" (Местная знать/чиновники)',
    [
        { en: 'Foreign dignitaries attended the funeral.', ru: 'Иностранные высокопоставленные лица посетили похороны.' },
        { en: 'The mayor welcomed the visiting dignitaries.', ru: 'Мэр приветствовал прибывших почетных гостей.' },
        { en: 'He felt nervous meeting such a high dignitary.', ru: 'Он нервничал при встрече с таким важным сановником.' },
        { en: 'Local dignitaries sat in the front row.', ru: 'Местные чиновники сидели в первом ряду.' }
    ],
    []
),

createRichWord('c2_dilapidated', 'Dilapidated', '/dɪˈlæpɪdeɪtɪd/', 'дилэпидейтид', 'Ветхий / Полуразрушенный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Находящийся в очень плохом состоянии из-за старости или отсутствия ухода (о зданиях).',
    '- Здание: "Dilapidated house" (Ветхий дом)\n- Состояние: "In a dilapidated state" (В полуразрушенном состоянии)\n- Место: "Dilapidated shack" (Развалившаяся лачуга)',
    [
        { en: 'They bought a dilapidated cottage to renovate.', ru: 'Они купили ветхий коттедж для ремонта.' },
        { en: 'The building is old and dilapidated.', ru: 'Здание старое и полуразрушенное.' },
        { en: 'We passed rows of dilapidated factories.', ru: 'Мы проезжали мимо рядов заброшенных фабрик.' },
        { en: 'The furniture was dilapidated and dusty.', ru: 'Мебель была ветхой и пыльной.' }
    ],
    []
),

createRichWord('c2_dilate', 'Dilate', '/daɪˈleɪt/', 'дайлейт', 'Расширяться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Становиться шире или больше (о зрачках или сосудах).',
    '- Глаза: "Pupils dilate" (Зрачки расширяются)\n- Медицина: "Dilate blood vessels" (Расширять кровеносные сосуды)\n- Время: "Dilate upon a subject" (Распространяться на тему - уст.)',
    [
        { en: 'The doctor put drops in my eyes to dilate the pupils.', ru: 'Врач закапал мне глаза, чтобы расширить зрачки.' },
        { en: 'Her pupils dilated in the darkness.', ru: 'Ее зрачки расширились в темноте.' },
        { en: 'Heat causes blood vessels to dilate.', ru: 'Тепло заставляет кровеносные сосуды расширяться.' },
        { en: 'The nostrils dilated as the horse breathed heavily.', ru: 'Ноздри расширялись, когда лошадь тяжело дышала.' }
    ],
    []
),

createRichWord('c2_diminutive', 'Diminutive', '/dɪˈmɪnjətɪv/', 'диминьютив', 'Миниатюрный / Уменьшительный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Очень маленький; (грам.) уменьшительная форма слова.',
    '- Размер: "Diminutive figure" (Миниатюрная фигура)\n- Грамматика: "Diminutive suffix" (Уменьшительный суффикс)\n- Имя: "Diminutive name" (Уменьшительное имя)',
    [
        { en: 'She was a diminutive woman with a loud voice.', ru: 'Она была миниатюрной женщиной с громким голосом.' },
        { en: '"Kitty" is a diminutive of "Catherine".', ru: '"Китти" — это уменьшительное от "Кэтрин".' },
        { en: 'Despite his diminutive stature, he was a great leader.', ru: 'Несмотря на свой маленький рост, он был великим лидером.' },
        { en: 'The toy is a diminutive version of the real car.', ru: 'Игрушка — это уменьшенная версия настоящей машины.' }
    ],
    []
),

createRichWord('c2_dinghy', 'Dinghy', '/ˈdɪŋɡi/', 'динги', 'Шлюпка / Надувная лодка', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Маленькая открытая лодка, часто надувная или спасательная.',
    '- Лодка: "Inflatable dinghy" (Надувная лодка)\n- Яхта: "Sailing dinghy" (Парусная шлюпка)\n- Спасение: "Life dinghy" (Спасательная шлюпка)',
    [
        { en: 'We rowed the dinghy out to the yacht.', ru: 'Мы погребли на шлюпке к яхте.' },
        { en: 'They escaped the sinking ship in a rubber dinghy.', ru: 'Они спаслись с тонущего корабля на резиновой лодке.' },
        { en: 'He bought a small dinghy for fishing.', ru: 'Он купил маленькую лодку для рыбалки.' },
        { en: 'The dinghy capsized in the rough sea.', ru: 'Шлюпка перевернулась в бурном море.' }
    ],
    []
  ),
createRichWord('c2_camaraderie', 'Camaraderie', '/ˌkæməˈrɑːdəri/', 'кэмэрадэри', 'Товарищество / Дух товарищества', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Чувство дружбы и доверия между людьми, которые работают вместе или проводят время вместе.',
    '- Группа: "Sense of camaraderie" (Чувство товарищества)\n- Работа: "Workplace camaraderie" (Товарищество на работе)\n- Спорт: "Team camaraderie" (Командный дух)',
    [
        { en: 'I miss the camaraderie we had in the army.', ru: 'Я скучаю по товариществу, которое было у нас в армии.' },
        { en: 'There is a great sense of camaraderie in the team.', ru: 'В команде царит сильный дух товарищества.' },
        { en: 'Shared hardships often build camaraderie.', ru: 'Общие трудности часто укрепляют товарищество.' },
        { en: 'The camaraderie among the actors was evident.', ru: 'Товарищество между актерами было очевидным.' }
    ],
    []
),

createRichWord('c2_capacitor', 'Capacitor', '/kəˈpæsɪtə(r)/', 'кэпэситэ', 'Конденсатор', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Устройство, используемое для накопления электрического заряда.',
    '- Электроника: "Ceramic capacitor" (Керамический конденсатор)\n- Схема: "Capacitor discharge" (Разряд конденсатора)\n- Функция: "Store energy" (Накапливать энергию)',
    [
        { en: 'A capacitor stores energy in an electric field.', ru: 'Конденсатор накапливает энергию в электрическом поле.' },
        { en: 'If the capacitor fails, the circuit breaks.', ru: 'Если конденсатор выйдет из строя, цепь разомкнется.' },
        { en: 'Engineers replaced the blown capacitor.', ru: 'Инженеры заменили перегоревший конденсатор.' },
        { en: 'Capacitors are essential components in electronics.', ru: 'Конденсаторы являются важными компонентами в электронике.' }
    ],
    []
),

createRichWord('c2_capricious', 'Capricious', '/kəˈprɪʃəs/', 'кэпришэс', 'Капризный / Непредсказуемый', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Внезапно меняющий настроение или поведение; непостоянный.',
    '- Характер: "Capricious child" (Капризный ребенок)\n- Погода: "Capricious weather" (Непредсказуемая погода)\n- Судьба: "Capricious fate" (Капризная судьба)',
    [
        { en: 'She is known for her capricious nature.', ru: 'Она известна своим капризным характером.' },
        { en: 'The capricious weather ruined our picnic.', ru: 'Непредсказуемая погода испортила наш пикник.' },
        { en: 'He was a cruel and capricious ruler.', ru: 'Он был жестоким и своенравным правителем.' },
        { en: 'Fashion is a capricious industry.', ru: 'Мода — индустрия непостоянная.' }
    ],
    []
),

createRichWord('c2_cartography', 'Cartography', '/kɑːˈtɒɡrəfi/', 'катогрэфи', 'Картография', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Наука или искусство составления карт.',
    '- Наука: "Modern cartography" (Современная картография)\n- Работа: "Study cartography" (Изучать картографию)\n- История: "Ancient cartography" (Древняя картография)',
    [
        { en: 'Advances in satellite technology changed cartography.', ru: 'Достижения в спутниковых технологиях изменили картографию.' },
        { en: 'He has a keen interest in the history of cartography.', ru: 'Он живо интересуется историей картографии.' },
        { en: 'Digital cartography allows for precise mapping.', ru: 'Цифровая картография позволяет создавать точные карты.' },
        { en: 'Cartography requires both artistic and scientific skills.', ru: 'Картография требует как художественных, так и научных навыков.' }
    ],
    []
),

createRichWord('c2_cask', 'Cask', '/kɑːsk/', 'каск', 'Бочка', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Крепкая деревянная бочка, используемая для хранения алкогольных напитков (вина, виски).',
    '- Алкоголь: "Wine cask" (Винная бочка)\n- Процесс: "Aged in oak casks" (Выдержанный в дубовых бочках)\n- Пиво: "Cask ale" (Бочковой эль)',
    [
        { en: 'The whisky is aged in oak casks for ten years.', ru: 'Виски выдерживается в дубовых бочках в течение десяти лет.' },
        { en: 'They rolled a heavy cask of beer into the cellar.', ru: 'Они закатили тяжелую бочку пива в подвал.' },
        { en: 'The wine draws flavour from the wood of the cask.', ru: 'Вино вбирает аромат от древесины бочки.' },
        { en: 'He tapped the cask to pour a drink.', ru: 'Он открыл бочку, чтобы налить напиток.' }
    ],
    []
),

createRichWord('c2_caster', 'Caster', '/ˈkɑːstə(r)/', 'кастэ', 'Колесико (мебельное) / Литейщик', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Маленькое колесо на ножках мебели; (также castor) сахарная пудра (caster sugar).',
    '- Мебель: "Chair casters" (Колесики кресла)\n- Еда: "Caster sugar" (Сахарная пудра/мелкий сахар)\n- Действие: "Roll on casters" (Катиться на колесиках)',
    [
        { en: 'One of the casters on my chair is broken.', ru: 'Одно из колесиков на моем стуле сломано.' },
        { en: 'The heavy table moves easily on casters.', ru: 'Тяжелый стол легко передвигается на колесиках.' },
        { en: 'You need caster sugar for this recipe.', ru: 'Для этого рецепта тебе понадобится мелкий сахар (пудра).' },
        { en: 'He works as a caster in a bronze foundry.', ru: 'Он работает литейщиком в бронзолитейном цехе.' }
    ],
    []
),

createRichWord('c2_cataclysm', 'Cataclysm', '/ˈkætəklɪzəm/', 'кэтэклизэм', 'Катаклизм / Катастрофа', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Внезапное и масштабное изменение, обычно приводящее к разрушениям (землетрясение, война).',
    '- Природа: "Natural cataclysm" (Природный катаклизм)\n- История: "Global cataclysm" (Глобальная катастрофа)\n- Последствия: "Survive the cataclysm" (Пережить катаклизм)',
    [
        { en: 'The asteroid impact was a global cataclysm.', ru: 'Удар астероида стал глобальным катаклизмом.' },
        { en: 'World War I was a cataclysm for Europe.', ru: 'Первая мировая война стала катастрофой для Европы.' },
        { en: 'They feared a nuclear cataclysm.', ru: 'Они боялись ядерного катаклизма.' },
        { en: 'The revolution was a social cataclysm.', ru: 'Революция была социальным потрясением.' }
    ],
    []
),

createRichWord('c2_cataract', 'Cataract', '/ˈkætərækt/', 'кэтэрэкт', 'Катаракта / Водопад (большой)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Медицинское состояние, при котором хрусталик глаза мутнеет; большой водопад (лит.).',
    '- Медицина: "Cataract surgery" (Операция по удалению катаракты)\n- Природа: "Roaring cataract" (Ревущий водопад)\n- Зрение: "Remove cataracts" (Удалить катаракту)',
    [
        { en: 'My grandfather had surgery to remove a cataract.', ru: 'Моему дедушке сделали операцию по удалению катаракты.' },
        { en: 'Cataracts can cause blurred vision.', ru: 'Катаракта может вызвать затуманенное зрение.' },
        { en: 'The river plunges down in a mighty cataract.', ru: 'Река низвергается мощным водопадом.' },
        { en: 'Untreated cataracts may lead to blindness.', ru: 'Нелеченая катаракта может привести к слепоте.' }
    ],
    []
),

createRichWord('c2_catchment', 'Catchment', '/ˈkætʃmənt/', 'кэчмэнт', 'Водосбор / Район обслуживания', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Территория, с которой вода стекает в реку; район, обслуживаемый школой или больницей.',
    '- География: "Catchment area" (Водосборный бассейн / Район охвата)\n- Школа: "School catchment" (Микрорайон школы)\n- Вода: "River catchment" (Бассейн реки)',
    [
        { en: 'We live in the catchment area for the best school.', ru: 'Мы живем в районе, закрепленном за лучшей школой.' },
        { en: 'The river has a large catchment area.', ru: 'У реки большой водосборный бассейн.' },
        { en: 'Pollution in the catchment affects the water quality.', ru: 'Загрязнение в водосборе влияет на качество воды.' },
        { en: 'Hospitals serve a specific catchment population.', ru: 'Больницы обслуживают определенное население района.' }
    ],
    []
),

createRichWord('c2_cellulose', 'Cellulose', '/ˈseljuləʊs/', 'сэльюлэус', 'Целлюлоза / Клетчатка', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Основное вещество в стенках растительных клеток, используемое для производства бумаги.',
    '- Биология: "Plant cellulose" (Растительная целлюлоза)\n- Материал: "Cellulose fiber" (Целлюлозное волокно)\n- Еда: "Dietary cellulose" (Пищевая клетчатка)',
    [
        { en: 'Cellulose is the main component of plant cell walls.', ru: 'Целлюлоза — основной компонент клеточных стенок растений.' },
        { en: 'Paper is made primarily from cellulose.', ru: 'Бумага производится преимущественно из целлюлозы.' },
        { en: 'Humans cannot digest cellulose.', ru: 'Люди не могут переваривать целлюлозу.' },
        { en: 'Cellulose insulation is an eco-friendly option.', ru: 'Целлюлозный утеплитель — это экологичный вариант.' }
    ],
    []
),

createRichWord('c2_chafe', 'Chafe', '/tʃeɪf/', 'чейф', 'Натирать / Раздражаться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Натирать кожу до боли; раздражаться из-за ограничений.',
    '- Кожа: "Shoes chafe" (Туфли натирают)\n- Эмоции: "Chafe under rules" (Раздражаться из-за правил)\n- Руки: "Chafe hands" (Потирать руки, чтобы согреть)',
    [
        { en: 'The tight collar began to chafe his neck.', ru: 'Тегный воротник начал натирать ему шею.' },
        { en: 'He chafed under the strict regulations.', ru: 'Он раздражался из-за строгих правил.' },
        { en: 'She chafed her cold hands together.', ru: 'Она потерла холодные руки друг о друга.' },
        { en: 'The handcuffs chafed his wrists.', ru: 'Наручники натерли ему запястья.' }
    ],
    []
),

createRichWord('c2_chagrin', 'Chagrin', '/ˈʃæɡrɪn/', 'шэгрин', 'Огорчение / Досада', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Чувство разочарования или досады из-за неудачи.',
    '- Эмоции: "To my chagrin" (К моей досаде)\n- Реакция: "Deep chagrin" (Глубокое огорчение)\n- Выражение: "Hide chagrin" (Скрыть досаду)',
    [
        { en: 'To his chagrin, he failed the exam.', ru: 'К его досаде, он провалил экзамен.' },
        { en: 'She noticed his chagrin at the mistake.', ru: 'Она заметила его огорчение из-за ошибки.' },
        { en: 'Much to my chagrin, I arrived late.', ru: 'К моему большому огорчению, я опоздал.' },
        { en: 'He tried to conceal his chagrin with a smile.', ru: 'Он попытался скрыть свою досаду за улыбкой.' }
    ],
    []
),

createRichWord('c2_chastise', 'Chastise', '/tʃæˈstaɪz/', 'чэстайз', 'Наказывать / Карать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Сурово критиковать или наказывать кого-то.',
    '- Критика: "Chastise for laziness" (Ругать за лень)\n- Действие: "Severely chastise" (Сурово наказать)\n- Речь: "Chastise publicly" (Публично отчитать)',
    [
        { en: 'She chastised him for his rude behaviour.', ru: 'Она отчитала его за грубое поведение.' },
        { en: 'The coach chastised the team for playing badly.', ru: 'Тренер отругал команду за плохую игру.' },
        { en: 'He was chastised by the press.', ru: 'Он подвергся резкой критике со стороны прессы.' },
        { en: 'In the past, teachers could physically chastise pupils.', ru: 'В прошлом учителя могли физически наказывать учеников.' }
    ],
    []
),

createRichWord('c2_chromium', 'Chromium', '/ˈkrəʊmiəm/', 'крэумиэм', 'Хром (элемент)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Твердый белый металл, используемый в сплавах (нержавеющая сталь).',
    '- Металл: "Chromium plating" (Хромирование)\n- Химия: "Chromium traces" (Следы хрома)\n- Материал: "Chromium steel" (Хромистая сталь)',
    [
        { en: 'Stainless steel contains chromium.', ru: 'Нержавеющая сталь содержит хром.' },
        { en: 'Chromium is used to make shiny car parts.', ru: 'Хром используется для изготовления блестящих автомобильных деталей.' },
        { en: 'Traces of chromium were found in the water.', ru: 'В воде были обнаружены следы хрома.' },
        { en: 'Chromium compounds can be toxic.', ru: 'Соединения хрома могут быть токсичными.' }
    ],
    []
),

createRichWord('c2_chug', 'Chug', '/tʃʌɡ/', 'чаг', 'Пыхтеть / Глотать залпом', ProficiencyLevel.C2, 'verb', 'Low', 'Informal',
    'Издавать звук работающего двигателя; пить напиток большими глотками без остановки.',
    '- Звук: "Train chugged" (Поезд пыхтел)\n- Питье: "Chug a beer" (Выпить пиво залпом)\n- Движение: "Chug along" (Медленно двигаться/пыхтеть)',
    [
        { en: 'The old train chugged up the hill.', ru: 'Старый поезд пыхтел, взбираясь на холм.' },
        { en: 'He chugged the bottle of water in seconds.', ru: 'Он выпил бутылку воды залпом за секунды.' },
        { en: 'The boat chugged out of the harbour.', ru: 'Лодка, пыхтя, вышла из гавани.' },
        { en: '"Chug! Chug! Chug!" chanted the crowd.', ru: '"Пей! Пей! Пей!" — скандировала толпа.' }
    ],
    []
),

createRichWord('c2_cinder', 'Cinder', '/ˈsɪndə(r)/', 'синдэ', 'Зола / Огарок', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Маленький кусочек частично сгоревшего угля или дерева (обычно мн.ч. cinders).',
    '- Огонь: "Burnt to cinders" (Сгорел дотла)\n- Глаз: "Cinder in the eye" (Соринка в глазу)\n- Вулкан: "Cinder cone" (Шлаковый конус)',
    [
        { en: 'The house was burnt to cinders.', ru: 'Дом сгорел дотла.' },
        { en: 'A hot cinder fell from the fire.', ru: 'Горячий уголек выпал из огня.' },
        { en: 'She got a cinder in her eye from the train.', ru: 'Ей в глаз попала соринка (угольная пыль) от поезда.' },
        { en: 'Only cinders remained in the fireplace.', ru: 'В камине остались только огарки.' }
    ],
    []
),

createRichWord('c2_circumspect', 'Circumspect', '/ˈsɜːkəmspekt/', 'сёкэмспект', 'Осмотрительный / Настороженный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Осторожный, не идущий на риски.',
    '- Поведение: "Circumspect manner" (Осторожная манера)\n- Решение: "Be circumspect" (Быть осмотрительным)\n- Политика: "Circumspect response" (Осторожный ответ)',
    [
        { en: 'He was very circumspect in his financial dealings.', ru: 'Он был очень осмотрителен в своих финансовых делах.' },
        { en: 'The officials were circumspect about the scandal.', ru: 'Чиновники были осторожны в высказываниях о скандале.' },
        { en: 'You should be circumspect when talking to strangers.', ru: 'Тебе следует быть осмотрительным при разговоре с незнакомцами.' },
        { en: 'A circumspect approach is needed here.', ru: 'Здесь необходим осторожный подход.' }
    ],
    []
),

createRichWord('c2_cistern', 'Cistern', '/ˈsɪstən/', 'систэн', 'Цистерна / Бачок', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Резервуар для хранения воды (особенно бачок унитаза).',
    '- Туалет: "Toilet cistern" (Сливной бачок)\n- Вода: "Water cistern" (Резервуар для воды)\n- Сбор: "Rainwater cistern" (Цистерна для дождевой воды)',
    [
        { en: 'The toilet cistern is leaking.', ru: 'Сливной бачок унитаза протекает.' },
        { en: 'Ancient Romans built huge underground cisterns.', ru: 'Древние римляне строили огромные подземные цистерны.' },
        { en: 'Water is pumped from the cistern to the house.', ru: 'Вода перекачивается из резервуара в дом.' },
        { en: 'The cistern was empty due to the drought.', ru: 'Цистерна была пуста из-за засухи.' }
    ],
    []
),

createRichWord('c2_clank', 'Clank', '/klæŋk/', 'клэнк', 'Лязг / Бряцание', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Громкий звук удара тяжелых металлических предметов.',
    '- Звук: "Clank of chains" (Лязг цепей)\n- Глагол: "To clank" (Лязгать)\n- Металл: "Metallic clank" (Металлический лязг)',
    [
        { en: 'We heard the clank of heavy machinery.', ru: 'Мы слышали лязг тяжелой техники.' },
        { en: 'The prison door shut with a loud clank.', ru: 'Тюремная дверь закрылась с громким лязгом.' },
        { en: 'Chains clanked as the ghost moved.', ru: 'Цепи бряцали, когда призрак двигался.' },
        { en: 'The mechanic dropped the wrench with a clank.', ru: 'Механик уронил гаечный ключ со звоном.' }
    ],
    []
),

createRichWord('c2_cobweb', 'Cobweb', '/ˈkɒbweb/', 'кобвеб', 'Паутина', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Сеть, сплетенная пауком (особенно старая и пыльная).',
    '- Дом: "Dusty cobwebs" (Пыльная паутина)\n- Уборка: "Clear the cobwebs" (Убрать паутину / Проветрить мозги)\n- Хэллоуин: "Covered in cobwebs" (Покрытый паутиной)',
    [
        { en: 'The old house was full of dust and cobwebs.', ru: 'Старый дом был полон пыли и паутины.' },
        { en: 'She brushed a cobweb away from her face.', ru: 'Она смахнула паутину с лица.' },
        { en: 'A walk in the fresh air will blow away the cobwebs.', ru: 'Прогулка на свежем воздухе проветрит мозги (сдует паутину).' },
        { en: 'Spiders spin cobwebs to catch flies.', ru: 'Пауки плетут паутину, чтобы ловить мух.' }
    ],
    []
),

createRichWord('c2_cog', 'Cog', '/kɒɡ/', 'ког', 'Зубец / Винтик', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Зубец на колесе шестеренки; (перен.) маленький, но важный человек в большой организации.',
    '- Механизм: "Cogwheel" (Шестеренка)\n- Метафора: "Cog in the machine" (Винтик в машине)\n- Движение: "Turning cogs" (Вращающиеся шестеренки)',
    [
        { en: 'The cogs of the clock turned slowly.', ru: 'Шестеренки часов медленно вращались.' },
        { en: 'He felt like a small cog in a big machine.', ru: 'Он чувствовал себя маленьким винтиком в большой машине.' },
        { en: 'A broken cog stopped the whole engine.', ru: 'Сломанный зубец остановил весь двигатель.' },
        { en: 'She is a vital cog in our organization.', ru: 'Она — важный элемент нашей организации.' }
    ],
    []
),

createRichWord('c2_cogent', 'Cogent', '/ˈkəʊdʒənt/', 'кэуджент', 'Убедительный / Неопровержимый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Ясный, логичный и убедительный (об аргументе).',
    '- Аргумент: "Cogent argument" (Убедительный аргумент)\n- Причина: "Cogent reason" (Веская причина)\n- Доказательство: "Cogent evidence" (Неопровержимое доказательство)',
    [
        { en: 'She put forward a cogent argument for change.', ru: 'Она выдвинула убедительный аргумент в пользу перемен.' },
        { en: 'There is no cogent reason to delay.', ru: 'Нет веских причин для задержки.' },
        { en: 'His analysis was clear and cogent.', ru: 'Его анализ был ясным и убедительным.' },
        { en: 'The lawyer presented a cogent case.', ru: 'Адвокат представил убедительные доводы.' }
    ],
    []
),

createRichWord('c2_colorectal', 'Colorectal', '/ˌkɒləˈrektl/', 'колэректл', 'Колоректальный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Относящийся к толстой и прямой кишке.',
    '- Медицина: "Colorectal cancer" (Колоректальный рак)\n- Хирургия: "Colorectal surgery" (Колоректальная хирургия)\n- Осмотр: "Colorectal screening" (Колоректальный скрининг)',
    [
        { en: 'Colorectal cancer is treatable if caught early.', ru: 'Колоректальный рак излечим, если обнаружен на ранней стадии.' },
        { en: 'He specializes in colorectal surgery.', ru: 'Он специализируется на колоректальной хирургии.' },
        { en: 'Doctors recommend regular colorectal screening after 50.', ru: 'Врачи рекомендуют регулярный колоректальный скрининг после 50 лет.' },
        { en: 'Diet affects colorectal health.', ru: 'Диета влияет на колоректальное здоровье.' }
    ],
    []
),

createRichWord('c2_commensurate', 'Commensurate', '/kəˈmenʃərət/', 'кэмэншэрэт', 'Соразмерный / Соответствующий', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Соответствующий по размеру или качеству; пропорциональный.',
    '- Зарплата: "Commensurate with experience" (Соответствующая опыту)\n- Наказание: "Commensurate with the crime" (Соразмерное преступлению)\n- Награда: "Commensurate reward" (Соответствующая награда)',
    [
        { en: 'Salary will be commensurate with experience.', ru: 'Зарплата будет соответствовать опыту.' },
        { en: 'The punishment should be commensurate with the crime.', ru: 'Наказание должно быть соразмерно преступлению.' },
        { en: 'Her success was commensurate with her hard work.', ru: 'Ее успех был пропорционален ее усердной работе.' },
        { en: 'We offer benefits commensurate with your position.', ru: 'Мы предлагаем льготы, соответствующие вашей должности.' }
    ],
    []
),

createRichWord('c2_communique', 'Communique', '/kəˈmjuːnɪkeɪ/', 'кэмьюнике', 'Коммюнике / Официальное сообщение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Официальное сообщение, обычно для прессы или публики (от правительства).',
    '- Политика: "Issue a communique" (Выпустить коммюнике)\n- Встреча: "Joint communique" (Совместное коммюнике)\n- Пресса: "Official communique" (Официальное сообщение)',
    [
        { en: 'The leaders issued a joint communique after the summit.', ru: 'Лидеры выпустили совместное коммюнике после саммита.' },
        { en: 'The communique announced a ceasefire.', ru: 'В коммюнике было объявлено о прекращении огня.' },
        { en: 'We are waiting for a communique from the palace.', ru: 'Мы ждем официального сообщения из дворца.' },
        { en: 'The final communique outlined the agreement.', ru: 'Итоговое коммюнике излагало суть соглашения.' }
    ],
    []
),

createRichWord('c2_comptroller', 'Comptroller', '/kənˈtrəʊlə(r)/', 'кэнтреулэ', 'Финансовый контролер / Ревизор', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Должностное лицо, отвечающее за финансовые счета организации или правительства.',
    '- Финансы: "Comptroller of accounts" (Главный бухгалтер/контролер)\n- Правительство: "State comptroller" (Государственный контролер)\n- Должность: "Appointed comptroller" (Назначен контролером)',
    [
        { en: 'The comptroller audits the company\'s finances.', ru: 'Контролер проводит аудит финансов компании.' },
        { en: 'He served as the state comptroller for ten years.', ru: 'Он служил государственным контролером десять лет.' },
        { en: 'The comptroller released a report on spending.', ru: 'Контролер выпустил отчет о расходах.' },
        { en: 'She was promoted to the position of comptroller.', ru: 'Ее повысили до должности финансового контролера.' }
    ],
    []
),

createRichWord('c2_conceit', 'Conceit', '/kənˈsiːt/', 'кэнсит', 'Тщеславие / Художественный образ', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Чрезмерная гордость собой (тщеславие); сложная художественная метафора (лит.).',
    '- Характер: "Full of conceit" (Полный тщеславия)\n- Литература: "Poetic conceit" (Поэтическая метафора)\n- Отношение: "Without conceit" (Без высокомерия)',
    [
        { en: 'He is full of conceit and arrogance.', ru: 'Он полон тщеславия и высокомерия.' },
        { en: 'The poem uses an elaborate conceit comparing love to a compass.', ru: 'В стихотворении используется сложная метафора, сравнивающая любовь с компасом.' },
        { en: 'Her conceit makes her unpopular.', ru: 'Ее самомнение делает ее непопулярной.' },
        { en: 'The central conceit of the novel is time travel.', ru: 'Центральная идея (художественный прием) романа — путешествие во времени.' }
    ],
    []
),

createRichWord('c2_concentric', 'Concentric', '/kənˈsentrɪk/', 'кэнсентрик', 'Концентрический', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Имеющий общий центр (о кругах или кольцах).',
    '- Геометрия: "Concentric circles" (Концентрические круги)\n- Форма: "Concentric rings" (Концентрические кольца)\n- Структура: "Concentric layers" (Концентрические слои)',
    [
        { en: 'The target consists of concentric circles.', ru: 'Мишень состоит из концентрических кругов.' },
        { en: 'Ripples spread out in concentric rings.', ru: 'Рябь расходилась концентрическими кольцами.' },
        { en: 'The castle had concentric walls for defence.', ru: 'У замка были концентрические стены для защиты.' },
        { en: 'Tree rings are concentric.', ru: 'Кольца дерева концентрические.' }
    ],
    []
),

createRichWord('c2_concord', 'Concord', '/ˈkɒŋkɔːd/', 'конкод', 'Согласие / Гармония', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Состояние согласия и мира; (грам.) согласование слов.',
    '- Мир: "Live in concord" (Жить в согласии)\n- Грамматика: "Subject-verb concord" (Согласование подлежащего и сказуемого)\n- Отношения: "Perfect concord" (Полное согласие)',
    [
        { en: 'The two nations lived in concord for many years.', ru: 'Две нации жили в согласии много лет.' },
        { en: 'There was complete concord among the delegates.', ru: 'Среди делегатов было полное согласие.' },
        { en: 'Grammatical concord ensures correct sentences.', ru: 'Грамматическое согласование обеспечивает правильность предложений.' },
        { en: 'They reached a concord on the main issues.', ru: 'Они достигли согласия по основным вопросам.' }
    ],
    []
),

createRichWord('c2_conflate', 'Conflate', '/kənˈfleɪt/', 'кэнфлейт', 'Объединять / Смешивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Соединять две вещи (идеи, тексты) в одну, часто ошибочно.',
    '- Идеи: "Conflate two issues" (Смешивать две проблемы)\n- Текст: "Conflate stories" (Объединять истории)\n- Ошибка: "Don\'t conflate them" (Не смешивай их)',
    [
        { en: 'Don\'t conflate politics with religion.', ru: 'Не смешивай политику с религией.' },
        { en: 'The author conflates fact and fiction.', ru: 'Автор смешивает факты и вымысел.' },
        { en: 'Two different events were conflated in the report.', ru: 'Два разных события были объединены в отчете.' },
        { en: 'People often conflate fame with success.', ru: 'Люди часто отождествляют славу с успехом.' }
    ],
    []
),

createRichWord('c2_confluence', 'Confluence', '/ˈkɒnfluəns/', 'конфлуэнс', 'Слияние / Стечение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Место, где две реки сливаются; ситуация, когда две вещи соединяются.',
    '- Реки: "Confluence of rivers" (Слияние рек)\n- События: "Confluence of events" (Стечение обстоятельств)\n- Идеи: "Confluence of ideas" (Слияние идей)',
    [
        { en: 'The town was built at the confluence of two rivers.', ru: 'Город был построен на слиянии двух рек.' },
        { en: 'A happy confluence of events led to his success.', ru: 'Счастливое стечение обстоятельств привело к его успеху.' },
        { en: 'The festival represents a confluence of cultures.', ru: 'Фестиваль представляет собой слияние культур.' },
        { en: 'We are seeing a confluence of technology and art.', ru: 'Мы наблюдаем слияние технологий и искусства.' }
    ],
    []
),

createRichWord('c2_connotation', 'Connotation', '/ˌkɒnəˈteɪʃn/', 'конэтейшн', 'Коннотация / Подтекст', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Идея или чувство, которое вызывает слово, помимо его прямого значения.',
    '- Язык: "Negative connotation" (Негативная коннотация)\n- Смысл: "Political connotations" (Политический подтекст)\n- Слово: "Word with connotations" (Слово с оттенками смысла)',
    [
        { en: 'The word "cheap" has a negative connotation.', ru: 'Слово "дешевый" имеет негативный оттенок.' },
        { en: '"Home" has a warm connotation of safety.', ru: '"Дом" имеет теплую коннотацию безопасности.' },
        { en: 'Avoid words with sexist connotations.', ru: 'Избегайте слов с сексистским подтекстом.' },
        { en: 'We discussed the cultural connotations of the colour red.', ru: 'Мы обсудили культурные значения красного цвета.' }
    ],
    []
),

createRichWord('c2_consort', 'Consort', '/ˈkɒnsɔːt/', 'консот', 'Супруг(а) / Общаться (негатив.)', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Супруг или супруга монарха (сущ. /ˈkɒnsɔːt/); общаться с кем-то нежелательным (глаг. /kənˈsɔːt/).',
    '- Монархия: "Prince Consort" (Принц-консорт)\n- Общение: "Consort with criminals" (Водиться с преступниками)\n- Музыка: "Consort of viols" (Ансамбль виол)',
    [
        { en: 'The Prince Consort attended the ceremony.', ru: 'Принц-консорт присутствовал на церемонии.' },
        { en: 'He was accused of consorting with the enemy.', ru: 'Его обвинили в сношениях с врагом.' },
        { en: 'Don\'t consort with such people.', ru: 'Не водись с такими людьми.' },
        { en: 'She is the Queen Consort.', ru: 'Она королева-консорт.' }
    ],
    []
  ),
createRichWord('c2_contraption', 'Contraption', '/kənˈtræpʃn/', 'кэнтрапшн', 'Штуковина / Хитроумное изобретение', ProficiencyLevel.C2, 'noun', 'Low', 'Neutral',
    'Машина или устройство, которое выглядит странно или сложно (часто с оттенком юмора).',
    '- Предмет: "Weird contraption" (Странная штуковина)\n- Изобретение: "Homemade contraption" (Самодельное приспособление)\n- Вид: "Complex contraption" (Сложный механизм)',
    [
        { en: 'He built a strange contraption to peel apples.', ru: 'Он построил странную штуковину для чистки яблок.' },
        { en: 'What is that metal contraption in the garden?', ru: 'Что это за металлическое приспособление в саду?' },
        { en: 'The flying machine was a dangerous contraption.', ru: 'Летательная машина была опасной конструкцией.' },
        { en: 'She stared at the coffee machine, a confusing contraption.', ru: 'Она уставилась на кофемашину, сбивающую с толку штуковину.' }
    ],
    []
),

createRichWord('c2_contrite', 'Contrite', '/kənˈtraɪt/', 'кэнтрайт', 'Раскаивающийся', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Чувствующий сильную вину и сожаление за содеянное.',
    '- Чувство: "Contrite apology" (Искреннее извинение)\n- Вид: "Look contrite" (Выглядеть виноватым)\n- Состояние: "Feel contrite" (Чувствовать раскаяние)',
    [
        { en: 'He seemed genuinely contrite for what he had done.', ru: 'Он казался искренне раскаивающимся за то, что сделал.' },
        { en: 'She offered a contrite apology to her friend.', ru: 'Она принесла подруге покаянное извинение.' },
        { en: 'A contrite heart seeks forgiveness.', ru: 'Раскаивающееся сердце ищет прощения.' },
        { en: 'He was not at all contrite about his mistake.', ru: 'Он ничуть не раскаивался в своей ошибке.' }
    ],
    []
),

createRichWord('c2_conundrum', 'Conundrum', '/kəˈnʌndrəm/', 'кэнандрэм', 'Головоломка / Дилемма', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Запутанная и трудная проблема или вопрос.',
    '- Проблема: "Face a conundrum" (Столкнуться с дилеммой)\n- Решение: "Solve a conundrum" (Решить головоломку)\n- Тип: "Moral conundrum" (Моральная дилемма)',
    [
        { en: 'The new tax law presents a conundrum for businesses.', ru: 'Новый налоговый закон представляет собой головоломку для бизнеса.' },
        { en: 'Arranging the seating plan was a real conundrum.', ru: 'Составление плана рассадки было настоящей задачкой.' },
        { en: 'He faced the moral conundrum of whether to tell the truth.', ru: 'Он столкнулся с моральной дилеммой: говорить ли правду.' },
        { en: 'Scientists are trying to solve the conundrum of consciousness.', ru: 'Ученые пытаются решить загадку сознания.' }
    ],
    []
),

createRichWord('c2_convalesce', 'Convalesce', '/ˌkɒnvəˈles/', 'конвэлес', 'Выздоравливать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Поправляться после болезни или операции; восстанавливать силы.',
    '- Здоровье: "Convalesce at home" (Выздоравливать дома)\n- Время: "Time to convalesce" (Время на поправку)\n- Место: "Convalescent home" (Санаторий)',
    [
        { en: 'She went to the seaside to convalesce after the surgery.', ru: 'Она поехала на море, чтобы поправиться после операции.' },
        { en: 'It takes time to convalesce from such a serious flu.', ru: 'Требуется время, чтобы оправиться от такого серьезного гриппа.' },
        { en: 'He is convalescing slowly but surely.', ru: 'Он выздоравливает медленно, но верно.' },
        { en: 'You need rest to convalesce properly.', ru: 'Тебе нужен отдых, чтобы нормально выздороветь.' }
    ],
    []
),

createRichWord('c2_convex', 'Convex', '/ˈkɒnveks/', 'конвекс', 'Выпуклый', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Изогнутый наружу, как внешняя часть круга (противоположность concave - вогнутый).',
    '- Форма: "Convex lens" (Выпуклая линза)\n- Зеркало: "Convex mirror" (Выпуклое зеркало)\n- Поверхность: "Convex surface" (Выпуклая поверхность)',
    [
        { en: 'A convex lens makes objects look bigger.', ru: 'Выпуклая линза делает объекты больше.' },
        { en: 'The security mirror in the shop is convex.', ru: 'Зеркало безопасности в магазине — выпуклое.' },
        { en: 'The curve of the earth is convex.', ru: 'Кривизна земли — выпуклая.' },
        { en: 'Convex shapes curve outwards.', ru: 'Выпуклые формы изгибаются наружу.' }
    ],
    []
),

createRichWord('c2_copulate', 'Copulate', '/ˈkɒpjuleɪt/', 'копьюлейт', 'Совокупляться', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Иметь половой акт (обычно используется в биологии или формальном контексте).',
    '- Животные: "Birds copulate" (Птицы спариваются)\n- Действие: "Attempt to copulate" (Пытаться совокупиться)\n- Биология: "Copulation" (Совокупление)',
    [
        { en: 'Whales copulate in warm waters.', ru: 'Киты спариваются в теплых водах.' },
        { en: 'Scientists observed how the insects copulate.', ru: 'Ученые наблюдали, как насекомые совокупляются.' },
        { en: 'The male attempts to copulate with the female.', ru: 'Самец пытается совокупиться с самкой.' },
        { en: 'Copulation is necessary for reproduction.', ru: 'Совокупление необходимо для размножения.' }
    ],
    []
),

createRichWord('c2_counterpoint', 'Counterpoint', '/ˈkaʊntəpɔɪnt/', 'каунтэпойнт', 'Контрапункт / Противовес', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Музыкальная техника сочетания мелодий; что-то, что создает интересный контраст.',
    '- Музыка: "Study counterpoint" (Изучать контрапункт)\n- Аргумент: "Provide a counterpoint" (Служить контрастом)\n- Сравнение: "Perfect counterpoint" (Идеальный противовес)',
    [
        { en: 'Bach was a master of musical counterpoint.', ru: 'Бах был мастером музыкального контрапункта.' },
        { en: 'Her sadness was a counterpoint to the general joy.', ru: 'Ее грусть была контрастом всеобщей радости.' },
        { en: 'The spicy sauce acts as a counterpoint to the sweet fruit.', ru: 'Острый соус служит противовесом сладкому фрукту.' },
        { en: 'The film uses humour as a counterpoint to the violence.', ru: 'В фильме юмор используется как контраст насилию.' }
    ],
    []
),

createRichWord('c2_coursed', 'Coursed', '/kɔːst/', 'кост', 'Тек (быстро)', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Прошедшая форма от course: двигаться или течь быстро (о жидкости или эмоциях).',
    '- Жидкость: "Blood coursed" (Кровь текла/бурлила)\n- Эмоции: "Adrenaline coursed" (Адреналин бурлил)\n- Слезы: "Tears coursed down" (Слезы текли ручьем)',
    [
        { en: 'Tears coursed down her cheeks.', ru: 'Слезы текли по ее щекам.' },
        { en: 'Panic coursed through his veins.', ru: 'Паника бурлила в его венах.' },
        { en: 'The river coursed through the valley.', ru: 'Река текла через долину.' },
        { en: 'Adrenaline coursed through my body as I ran.', ru: 'Адреналин бурлил в моем теле, пока я бежал.' }
    ],
    []
),

createRichWord('c2_crass', 'Crass', '/kræs/', 'крэс', 'Грубый / Бестактный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Глупый и не учитывающий чувства других людей; вопиющий.',
    '- Поведение: "Crass stupidity" (Вопиющая глупость)\n- Комментарий: "Crass remark" (Бестактное замечание)\n- Отношение: "Crass commercialism" (Грубая коммерция)',
    [
        { en: 'It was a crass and insensitive joke.', ru: 'Это была грубая и бестактная шутка.' },
        { en: 'He showed a crass disregard for safety.', ru: 'Он проявил вопиющее пренебрежение безопасностью.' },
        { en: 'The movie was criticized for its crass commercialism.', ru: 'Фильм критиковали за грубую коммерческую направленность.' },
        { en: 'Making such a comment at a funeral was crass.', ru: 'Делать такой комментарий на похоронах было бестактно.' }
    ],
    []
),

createRichWord('c2_crescendo', 'Crescendo', '/krəˈʃendəʊ/', 'крэшендэу', 'Крещендо / Нарастание', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Постепенное увеличение громкости (в музыке) или интенсивности.',
    '- Музыка: "Reach a crescendo" (Достичь крещендо)\n- Шум: "Crescendo of noise" (Нарастание шума)\n- Событие: "Rise to a crescendo" (Нарастать до пика)',
    [
        { en: 'The music rose to a thundering crescendo.', ru: 'Музыка наросла до громоподобного крещендо.' },
        { en: 'Criticism of the policy reached a crescendo.', ru: 'Критика политики достигла апогея.' },
        { en: 'The applause built to a crescendo.', ru: 'Аплодисменты нарастали.' },
        { en: 'There was a crescendo of excitement before the game.', ru: 'Перед игрой нарастало волнение.' }
    ],
    []
),

createRichWord('c2_crucible', 'Crucible', '/ˈkruːsɪbl/', 'крусибл', 'Тигель / Суровое испытание', ProficiencyLevel.C2, 'noun', 'Low', 'Literary',
    'Керамический горшок для плавки металла; место или ситуация суровых испытаний.',
    '- Металл: "Melting crucible" (Плавильный тигель)\n- Испытание: "Crucible of war" (Горнило войны)\n- Метафора: "Forged in the crucible" (Закаленный в горниле)',
    [
        { en: 'Metals are melted in a crucible.', ru: 'Металлы плавят в тигле.' },
        { en: 'His character was forged in the crucible of war.', ru: 'Его характер был закален в горниле войны.' },
        { en: 'The debate became a crucible for new ideas.', ru: 'Дебаты стали суровым испытанием (горнилом) для новых идей.' },
        { en: 'Their friendship survived the crucible of tragedy.', ru: 'Их дружба пережила суровое испытание трагедией.' }
    ],
    []
),

createRichWord('c2_dapple', 'Dapple', '/ˈdæpl/', 'дэпл', 'Пятнистый / Испещрять', ProficiencyLevel.C2, 'verb', 'Low', 'Literary',
    'Покрывать пятнами (цвета или света); (adj) dappled - пятнистый.',
    '- Свет: "Dappled sunlight" (Пятнистый солнечный свет - сквозь листву)\n- Животное: "Dapple grey horse" (Лошадь в яблоках)\n- Тень: "Dappled shade" (Пятнистая тень)',
    [
        { en: 'Sunlight dappled the forest floor.', ru: 'Солнечный свет испещрил лесную подстилку пятнами.' },
        { en: 'He rode a dapple grey horse.', ru: 'Он ехал на серой лошади в яблоках.' },
        { en: 'We sat in the dappled shade of the apple tree.', ru: 'Мы сидели в пятнистой тени яблони.' },
        { en: 'The fawn\'s coat is dappled to hide it.', ru: 'Шкура олененка пятнистая, чтобы прятать его.' }
    ],
    []
),

createRichWord('c2_dearth', 'Dearth', '/dɜːθ/', 'дёс', 'Нехватка / Дефицит', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Недостаток или отсутствие чего-либо необходимого.',
    '- Ресурсы: "Dearth of food" (Нехватка еды)\n- Информация: "Dearth of evidence" (Недостаток улик)\n- Кадры: "Dearth of talent" (Дефицит талантов)',
    [
        { en: 'There is a dearth of affordable housing.', ru: 'Существует нехватка доступного жилья.' },
        { en: 'The dearth of information made it hard to decide.', ru: 'Недостаток информации затруднял принятие решения.' },
        { en: 'We faced a dearth of fresh vegetables in winter.', ru: 'Зимой мы столкнулись с дефицитом свежих овощей.' },
        { en: 'A dearth of qualified teachers is a problem.', ru: 'Нехватка квалифицированных учителей — это проблема.' }
    ],
    []
),

createRichWord('c2_debase', 'Debase', '/dɪˈbeɪs/', 'дибейс', 'Обесценивать / Унижать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Снижать качество, ценность или достоинство чего-либо.',
    '- Деньги: "Debase the currency" (Обесценивать валюту - портить монету)\n- Мораль: "Debase oneself" (Унижать себя)\n- Качество: "Debase art" (Опошлять искусство)',
    [
        { en: 'Inflation debases the value of money.', ru: 'Инфляция обесценивает деньги.' },
        { en: 'Don\'t debase yourself by lying to him.', ru: 'Не унижай себя ложью ему.' },
        { en: 'Commercialism has debased the sport.', ru: 'Коммерция обесценила (испортила) этот вид спорта.' },
        { en: 'Adding cheap metal debased the gold coins.', ru: 'Добавление дешевого металла обесценило золотые монеты.' }
    ],
    []
),

createRichWord('c2_decry', 'Decry', '/dɪˈkraɪ/', 'дикрай', 'Осуждать / Порицать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Публично критиковать кого-то или что-то.',
    '- Критика: "Decry the violence" (Осуждать насилие)\n- Мнение: "Decry as unfair" (Порицать как несправедливое)\n- Политика: "Decry the decision" (Осудить решение)',
    [
        { en: 'The minister decried the rising crime rate.', ru: 'Министр осудил растущий уровень преступности.' },
        { en: 'People decried the closure of the hospital.', ru: 'Люди осудили закрытие больницы.' },
        { en: 'She decried the lack of support for the poor.', ru: 'Она порицала отсутствие поддержки бедных.' },
        { en: 'His methods were widely decried by experts.', ru: 'Его методы широко осуждались экспертами.' }
    ],
    []
),

createRichWord('c2_defunct', 'Defunct', '/dɪˈfʌŋkt/', 'дифанкт', 'Несуществующий / Умерший', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Больше не существующий или не работающий (о компании, законе, механизме).',
    '- Организация: "Defunct company" (Ликвидированная компания)\n- Закон: "Defunct law" (Отмененный закон)\n- Механизм: "Defunct machinery" (Неработающее оборудование)',
    [
        { en: 'The railway line is now defunct.', ru: 'Железнодорожная линия сейчас не действует.' },
        { en: 'He worked for a now defunct newspaper.', ru: 'Он работал в ныне закрытой газете.' },
        { en: 'Many old traditions are largely defunct.', ru: 'Многие старые традиции по большей части исчезли.' },
        { en: 'The theory has been defunct for years.', ru: 'Эта теория устарела много лет назад.' }
    ],
    []
),

createRichWord('c2_dejected', 'Dejected', '/dɪˈdʒektɪd/', 'диджектид', 'Удрученный / Подавленный', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Несчастный и разочарованный; лишенный надежды.',
    '- Чувство: "Feel dejected" (Чувствовать себя подавленным)\n- Вид: "Look dejected" (Выглядеть удрученным)\n- Настроение: "Dejected mood" (Унылое настроение)',
    [
        { en: 'He looked dejected after failing the test.', ru: 'Он выглядел удрученным после провала теста.' },
        { en: 'The team walked off the field, dejected and tired.', ru: 'Команда ушла с поля, подавленная и уставшая.' },
        { en: 'She sat in the corner, feeling lonely and dejected.', ru: 'Она сидела в углу, чувствуя себя одинокой и подавленной.' },
        { en: 'Do not be dejected; try again.', ru: 'Не унывай, попробуй снова.' }
    ],
    []
),

createRichWord('c2_deleterious', 'Deleterious', '/ˌdeləˈtɪəriəs/', 'дэлэтириэс', 'Вредный / Губительный', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Наносящий вред или ущерб (здоровью, окружающей среде).',
    '- Здоровье: "Deleterious effect" (Губительный эффект)\n- Экология: "Deleterious to the environment" (Вредный для окружающей среды)\n- Последствия: "Deleterious consequences" (Вредные последствия)',
    [
        { en: 'Smoking has a deleterious effect on health.', ru: 'Курение оказывает губительное влияние на здоровье.' },
        { en: 'The chemicals are deleterious to marine life.', ru: 'Химикаты вредны для морской жизни.' },
        { en: 'Stress can be deleterious to your mental state.', ru: 'Стресс может быть вреден для вашего психического состояния.' },
        { en: 'We must avoid policies with deleterious outcomes.', ru: 'Мы должны избегать политики с вредными последствиями.' }
    ],
    []
),

createRichWord('c2_deliverance', 'Deliverance', '/dɪˈlɪvərəns/', 'диливэрэнс', 'Избавление / Спасение', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Состояние спасения от чего-то плохого (опасности, греха, боли).',
    '- Религия: "Pray for deliverance" (Молиться о спасении)\n- Опасность: "Deliverance from evil" (Избавление от зла)\n- Чувство: "Sense of deliverance" (Чувство освобождения)',
    [
        { en: 'They prayed for deliverance from the storm.', ru: 'Они молились о спасении от бури.' },
        { en: 'His acquittal was a deliverance for his family.', ru: 'Его оправдание стало избавлением для его семьи.' },
        { en: 'She felt a sweet sense of deliverance when he left.', ru: 'Она почувствовала сладкое чувство освобождения, когда он ушел.' },
        { en: 'The soldiers celebrated their deliverance from captivity.', ru: 'Солдаты праздновали свое освобождение из плена.' }
    ],
    []
),

createRichWord('c2_demented', 'Demented', '/dɪˈmentɪd/', 'диментид', 'Безумный / Помешанный', ProficiencyLevel.C2, 'adj', 'Low', 'Informal',
    'Ведущий себя иррационально из-за гнева, волнения или болезни; сумасшедший.',
    '- Поведение: "Act demented" (Вести себя как безумный)\n- Смех: "Demented laughter" (Безумный смех)\n- Болезнь: "Clinically demented" (Страдающий деменцией - уст.)',
    [
        { en: 'He was running around like a demented chicken.', ru: 'Он носился вокруг как безумная курица.' },
        { en: 'She gave a demented scream.', ru: 'Она издала безумный крик.' },
        { en: 'The grief drove him nearly demented.', ru: 'Горе почти свело его с ума.' },
        { en: 'It was a demented idea to climb the wall.', ru: 'Это была безумная идея — лезть на стену.' }
    ],
    []
),

createRichWord('c2_demob', 'Demob', '/diːˈmɒb/', 'димоб', 'Демобилизация / Дембель', ProficiencyLevel.C2, 'verb', 'Low', 'Informal',
    'Сокращение от demobilize: увольнять с военной службы (брит. разг.).',
    '- Армия: "Get demobbed" (Демобилизоваться)\n- Костюм: "Demob suit" (Костюм, выдаваемый при демобилизации)\n- Статус: "Happy to be demobbed" (Счастлив демобилизоваться)',
    [
        { en: 'He was demobbed after the war ended.', ru: 'Он был демобилизован после окончания войны.' },
        { en: 'Soldiers were eager to get demobbed and go home.', ru: 'Солдаты жаждали демобилизоваться и поехать домой.' },
        { en: 'My grandfather still has his demob suit.', ru: 'У моего дедушки до сих пор есть его демобилизационный костюм.' },
        { en: 'The process of demobbing took several months.', ru: 'Процесс демобилизации занял несколько месяцев.' }
    ],
    []
),

createRichWord('c2_demure', 'Demure', '/dɪˈmjʊə(r)/', 'димьюэ', 'Скромный / Сдержанный', ProficiencyLevel.C2, 'adj', 'Low', 'Literary',
    'Тихий и скромный (обычно о женщинах); ведущий себя прилично.',
    '- Поведение: "Demure smile" (Скромная улыбка)\n- Одежда: "Demure dress" (Скромное платье)\n- Характер: "Shy and demure" (Застенчивый и скромный)',
    [
        { en: 'She sat in the corner, looking demure.', ru: 'Она сидела в углу, выглядя скромно.' },
        { en: 'She gave him a demure smile.', ru: 'Она подарила ему сдержанную улыбку.' },
        { en: 'Her dress was demure and high-necked.', ru: 'Ее платье было скромным, с высоким воротом.' },
        { en: 'Despite her demure appearance, she was ambitious.', ru: 'Несмотря на скромную внешность, она была амбициозна.' }
    ],
    []
),

createRichWord('c2_denunciation', 'Denunciation', '/dɪˌnʌnsiˈeɪʃn/', 'динансиейшн', 'Осуждение / Донос', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Публичное осуждение кого-то или чего-то; сообщение властям о незаконной деятельности.',
    '- Критика: "Bitter denunciation" (Резкое осуждение)\n- Политика: "Public denunciation" (Публичное порицание)\n- Предательство: "Letter of denunciation" (Письмо с доносом)',
    [
        { en: 'His speech was a fierce denunciation of the war.', ru: 'Его речь была яростным осуждением войны.' },
        { en: 'The government encouraged the denunciation of traitors.', ru: 'Правительство поощряло доносы на предателей.' },
        { en: 'She faced denunciation by her colleagues.', ru: 'Она столкнулась с осуждением со стороны коллег.' },
        { en: 'Anonymous denunciations led to many arrests.', ru: 'Анонимные доносы привели ко многим арестам.' }
    ],
    []
),

createRichWord('c2_deprave', 'Deprave', '/dɪˈpreɪv/', 'дипрейв', 'Развращать / Портить', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Делать кого-то морально плохим или злым.',
    '- Мораль: "Deprave the mind" (Развращать ум)\n- Влияние: "Depraved by power" (Испорченный властью)\n- Закон: "Tendency to deprave" (Тенденция к развращению)',
    [
        { en: 'Power can deprave even the best men.', ru: 'Власть может развратить даже лучших людей.' },
        { en: 'The judge said the material would deprave children.', ru: 'Судья сказал, что этот материал развратит детей.' },
        { en: 'He was a depraved killer.', ru: 'Он был порочным убийцей.' },
        { en: 'Bad company can deprave a young person.', ru: 'Плохая компания может испортить молодого человека.' }
    ],
    []
),

createRichWord('c2_derange', 'Derange', '/dɪˈreɪndʒ/', 'дирейндж', 'Сводить с ума / Расстраивать', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Делать кого-то сумасшедшим (обычно используется причастие deranged); нарушать порядок.',
    '- Ум: "Mentally deranged" (Психически неуравновешенный)\n- Действие: "Derange the mind" (Помутить рассудок)\n- План: "Derange plans" (Расстроить планы - уст.)',
    [
        { en: 'He seemed completely deranged by grief.', ru: 'Он казался совершенно обезумевшим от горя.' },
        { en: 'The killer was described as a deranged loner.', ru: 'Убийцу описали как безумного одиночку.' },
        { en: 'War can derange the most stable minds.', ru: 'Война может свести с ума даже самую устойчивую психику.' },
        { en: 'The sudden noise deranged my thoughts.', ru: 'Внезапный шум сбил меня с мысли.' }
    ],
    []
),

createRichWord('c2_desecrate', 'Desecrate', '/ˈdesɪkreɪt/', 'десикрейт', 'Осквернять', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Обращаться со священным местом или вещью без уважения; портить.',
    '- Религия: "Desecrate a grave" (Осквернить могилу)\n- Храм: "Desecrate a church" (Осквернить церковь)\n- Память: "Desecrate the memory" (Опорочить память)',
    [
        { en: 'Vandals desecrated the cemetery last night.', ru: 'Вандалы осквернили кладбище прошлой ночью.' },
        { en: 'Soldiers desecrated the holy shrine.', ru: 'Солдаты осквернили святыню.' },
        { en: 'Do not desecrate the memory of the dead.', ru: 'Не оскверняй память умерших.' },
        { en: 'Using the flag as a rug desecrates it.', ru: 'Использование флага как коврика оскверняет его.' }
    ],
    []
),

createRichWord('c2_detritus', 'Detritus', '/dɪˈtraɪtəs/', 'дитрайтэс', 'Мусор / Обломки', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Отходы или мусор, оставшиеся после того, как что-то было использовано или разрушено.',
    '- Мусор: "Urban detritus" (Городской мусор)\n- Природа: "Organic detritus" (Органические остатки)\n- Улица: "Detritus of daily life" (Отходы повседневной жизни)',
    [
        { en: 'The beach was covered in plastic detritus.', ru: 'Пляж был покрыт пластиковым мусором.' },
        { en: 'The storm left a lot of detritus on the roads.', ru: 'Шторм оставил много мусора на дорогах.' },
        { en: 'Detritus from the explosion was found miles away.', ru: 'Обломки от взрыва были найдены за мили отсюда.' },
        { en: 'Scavengers feed on the detritus of the city.', ru: 'Падальщики питаются городскими отбросами.' }
    ],
    []
),

createRichWord('c2_dialysis', 'Dialysis', '/daɪˈæləsɪs/', 'дайэлэсис', 'Диализ', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Процесс очистки крови с помощью машины, когда почки не работают.',
    '- Медицина: "Kidney dialysis" (Диализ почек)\n- Пациент: "On dialysis" (На диализе)\n- Аппарат: "Dialysis machine" (Аппарат для диализа)',
    [
        { en: 'He has to go to the hospital for dialysis three times a week.', ru: 'Ему приходится ходить в больницу на диализ три раза в неделю.' },
        { en: 'Dialysis keeps him alive while he waits for a transplant.', ru: 'Диализ поддерживает его жизнь, пока он ждет пересадки.' },
        { en: 'The dialysis machine filters waste from the blood.', ru: 'Аппарат диализа отфильтровывает отходы из крови.' },
        { en: 'She has been on dialysis for two years.', ru: 'Она находится на диализе уже два года.' }
    ],
    []
),

createRichWord('c2_diaspora', 'Diaspora', '/daɪˈæspərə/', 'дайэспэрэ', 'Диаспора / Рассеяние', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Группа людей, живущих вне своей родины; процесс рассеяния народа.',
    '- Люди: "Jewish diaspora" (Еврейская диаспора)\n- Африка: "African diaspora" (Африканская диаспора)\n- Сообщество: "Diaspora community" (Сообщество диаспоры)',
    [
        { en: 'The Irish diaspora is found all over the world.', ru: 'Ирландскую диаспору можно найти по всему миру.' },
        { en: 'Members of the diaspora send money home.', ru: 'Члены диаспоры отправляют деньги домой.' },
        { en: 'The museum celebrates the history of the African diaspora.', ru: 'Музей прославляет историю африканской диаспоры.' },
        { en: 'War caused a diaspora of refugees.', ru: 'Война вызвала рассеяние беженцев.' }
    ],
    []
),

createRichWord('c2_dictum', 'Dictum', '/ˈdɪktəm/', 'диктэм', 'Изречение / Афоризм', ProficiencyLevel.C2, 'noun', 'Low', 'Formal',
    'Короткое утверждение, выражающее общий принцип или истину.',
    '- Фраза: "Famous dictum" (Известное изречение)\n- Правило: "Follow the dictum" (Следовать принципу)\n- Латынь: "Obiter dictum" (Попутное замечание судьи)',
    [
        { en: 'He followed the dictum "know thyself".', ru: 'Он следовал изречению "познай самого себя".' },
        { en: 'The old dictum that "time is money" is true.', ru: 'Старое изречение, что "время — деньги", верно.' },
        { en: 'She lived by the dictum of honesty first.', ru: 'Она жила по принципу "честность прежде всего".' },
        { en: 'Descartes\' famous dictum is "I think, therefore I am".', ru: 'Знаменитое изречение Декарта — "Я мыслю, следовательно, я существую".' }
    ],
    []
),

createRichWord('c2_didactic', 'Didactic', '/daɪˈdæktɪk/', 'дайдэктик', 'Назидательный / Дидактический', ProficiencyLevel.C2, 'adj', 'Low', 'Formal',
    'Предназначенный для обучения, часто скучным или морализаторским способом.',
    '- Стиль: "Didactic tone" (Назидательный тон)\n- Литература: "Didactic poem" (Дидактическая поэма)\n- Метод: "Didactic method" (Дидактический метод)',
    [
        { en: 'His speech was too didactic for my taste.', ru: 'Его речь была слишком назидательной на мой вкус.' },
        { en: 'Children\'s books are often didactic.', ru: 'Детские книги часто бывают поучительными.' },
        { en: 'She resented his didactic manner.', ru: 'Ее возмущала его менторская манера.' },
        { en: 'The play is entertaining rather than didactic.', ru: 'Пьеса скорее развлекательная, чем поучительная.' }
    ],
    []
),

createRichWord('c2_digress', 'Digress', '/daɪˈɡres/', 'дайгрес', 'Отклоняться от темы', ProficiencyLevel.C2, 'verb', 'Low', 'Formal',
    'Отойти от главной темы в разговоре или письме.',
    '- Речь: "Digress from the point" (Отклониться от сути)\n- Разговор: "Let me digress" (Позвольте мне отступить)\n- Тема: "To digress slightly" (Слегка отвлечься)',
    [
        { en: 'But I digress; let\'s get back to the main topic.', ru: 'Но я отвлекся; давайте вернемся к главной теме.' },
        { en: 'The lecturer digressed to tell a funny story.', ru: 'Лектор отвлекся, чтобы рассказать смешную историю.' },
        { en: 'Do not digress into irrelevant details.', ru: 'Не уходи в неважные детали.' },
        { en: 'He has a habit of digressing during meetings.', ru: 'У него есть привычка отвлекаться от темы во время собраний.' }
    ],
    []
  ),

];
