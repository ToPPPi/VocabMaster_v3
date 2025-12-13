
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

export const WORDS_C1: Word[] = [
createRichWord('c1_beneath', 'Beneath', '/bɪˈniːθ/', 'бинис', 'Под / Ниже', ProficiencyLevel.C1, 'prep', 'Low', 'Formal',
    'Формальный или литературный синоним слова "under". Указывает на положение строго под чем-то или на недостойность.',
    '- Положение: "Beneath the surface" (Под поверхностью)\n- Достоинство: "Beneath him" (Ниже его достоинства)\n- Скрытое: "Beneath the mask" (Под маской)',
    [
      { en: 'They found an ancient city buried deep beneath the desert sand.', ru: 'Они нашли древний город, погребенный глубоко под песком пустыни.' },
      { en: 'He felt that doing such menial work was beneath his dignity.', ru: 'Он чувствовал, что выполнение такой черной работы ниже его достоинства.' },
      { en: 'Beneath her cheerful smile, she was hiding a deep sadness and pain.', ru: 'Под своей жизнерадостной улыбкой она скрывала глубокую печаль и боль.' },
      { en: 'The boat slowly sank beneath the waves and disappeared from sight.', ru: 'Лодка медленно погрузилась под волны и исчезла из виду.' }
    ]
  ),
createRichWord('c1_ace', 'Ace', '/eɪs/', 'эйс', 'Туз / Ас (Эксперт)', ProficiencyLevel.C1, 'noun', 'Low', 'Informal',
    'Игральная карта высшего достоинства; в переносном смысле — эксперт в чем-либо.',
    '- Карты: "Ace of spades" (Туз пик)\n- Мастерство: "Tennis ace" (Теннисный ас / подача навылет)\n- Сленг: "Ace at something" (Ас в чем-то)',
    [
      { en: 'He holds the ace of hearts in his hand.', ru: 'Он держит червового туза в руке.' },
      { en: 'She is an absolute ace at fixing computers.', ru: 'Она абсолютный ас в починке компьютеров.' },
      { en: 'If you want to win, you need an ace up your sleeve.', ru: 'Если хочешь выиграть, тебе нужен туз в рукаве (козырь).' },
      { en: 'The tennis player served an ace to win the match.', ru: 'Теннисист выполнил эйс (подачу навылет), чтобы выиграть матч.' }
    ]
),

createRichWord('c1_appoint', 'Appoint', '/əˈpɔɪnt/', 'эпойнт', 'Назначать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Официально выбрать кого-то для работы или установить время для встречи.',
    '- Работа: "Appoint a director" (Назначить директора)\n- Время: "Appointed time" (Назначенное время)\n- Власть: "Appoint a committee" (Назначить комитет)',
    [
      { en: 'The board decided to appoint a new CEO next month.', ru: 'Совет решил назначить нового генерального директора в следующем месяце.' },
      { en: 'They appointed a committee to investigate the problem.', ru: 'Они назначили комитет для расследования проблемы.' },
      { en: 'Please arrive at the appointed time for the meeting.', ru: 'Пожалуйста, прибудьте на встречу в назначенное время.' },
      { en: 'She was appointed as the head of the department.', ru: 'Она была назначена главой отдела.' }
    ]
  ),
 createRichWord('c1_bare', 'Bare', '/beə/', 'бээ', 'Голый / Скудный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Не покрытый одеждой или поверхностью; или "всего лишь" (минимальный).',
    '- Тело: "Bare feet" (Босые ноги)\n- Минимум: "Bare minimum" (Самый минимум)\n- Природа: "Bare trees" (Голые деревья)',
    [
      { en: 'He walked across the sand with bare feet.', ru: 'Он шел по песку босыми ногами.' },
      { en: 'The room was furnished with only the bare essentials.', ru: 'Комната была обставлена только самым необходимым.' },
      { en: 'In winter, the trees stand bare against the grey sky.', ru: 'Зимой деревья стоят голыми на фоне серого неба.' },
      { en: 'She told him the bare facts without any emotion.', ru: 'Она изложила ему голые факты без каких-либо эмоций.' }
    ]
),

createRichWord('c1_bind', 'Bind', '/baɪnd/', 'байнд', 'Связывать / Обязывать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Скреплять что-то веревкой; или налагать юридические обязательства.',
    '- Юридически: "Legally binding" (Юридически обязательный)\n- Физически: "Bind hands" (Связать руки)\n- Книги: "Bind a book" (Переплетать книгу)',
    [
      { en: 'The contract binds both parties to the agreement for five years.', ru: 'Контракт связывает обязательствами обе стороны соглашения на пять лет.' },
      { en: 'They used a strong rope to bind the logs together.', ru: 'Они использовали крепкую веревку, чтобы связать бревна вместе.' },
      { en: 'Shared experiences tend to bind people together closely.', ru: 'Общий опыт имеет тенденцию тесно связывать людей.' },
      { en: 'The court ruled that the promise was binding by law.', ru: 'Суд постановил, что обещание было обязательным по закону.' }
    ]
  ),
createRichWord('c1_breed', 'Breed', '/briːd/', 'брид', 'Порода / Разводить', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Держать животных для получения потомства (глагол); или особый вид животного (существительное).',
    '- Животные: "Dog breed" (Порода собаки)\n- Действие: "Breed horses" (Разводить лошадей)\n- Результат: "Breed success" (Порождать успех)',
    [
      { en: 'The farmer breeds sheep for their high-quality wool.', ru: 'Фермер разводит овец ради их высококачественной шерсти.' },
      { en: 'What breed is your dog, is it a Labrador or a Retriever?', ru: 'Какой породы твоя собака: лабрадор или ретривер?' },
      { en: 'Poverty and lack of education often breed crime in society.', ru: 'Бедность и недостаток образования часто порождают преступность в обществе.' },
      { en: 'This rare breed of cattle is found only in the mountains.', ru: 'Эта редкая порода крупного рогатого скота встречается только в горах.' }
    ]
  ),
createRichWord('c1_abort', 'Abort', '/əˈbɔːt/', 'эборт', 'Прервать / Отменить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Остановить процесс, план или миссию до их завершения, часто из-за проблем.',
    '- Миссия: "Abort mission" (Прервать миссию)\n- Взлет: "Abort takeoff" (Прервать взлет)\n- Процесс: "Abort operation" (Отменить операцию)',
    [
      { en: 'The pilot had to abort the landing due to strong winds.', ru: 'Пилоту пришлось прервать посадку из-за сильного ветра.' },
      { en: 'They decided to abort the project because of lack of funds.', ru: 'Они решили прервать проект из-за нехватки средств.' },
      { en: 'The mission was aborted at the last minute for safety reasons.', ru: 'Миссия была отменена в последнюю минуту по соображениям безопасности.' },
      { en: 'Computer systems allow you to abort the installation if needed.', ru: 'Компьютерные системы позволяют прервать установку при необходимости.' }
    ]
),

createRichWord('c1_accelerate', 'Accelerate', '/əkˈseləreɪt/', 'экселэрейт', 'Ускорять(ся)', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Начинать двигаться быстрее или заставлять что-то происходить раньше/быстрее.',
    '- Машина: "Car accelerates" (Машина ускоряется)\n- Процесс: "Accelerate growth" (Ускорить рост)\n- Темп: "Accelerate the pace" (Ускорить темп)',
    [
      { en: 'The car can accelerate from zero to sixty in five seconds.', ru: 'Машина может разогнаться (ускориться) от нуля до шестидесяти за пять секунд.' },
      { en: 'The government plans to accelerate the economic reforms.', ru: 'Правительство планирует ускорить экономические реформы.' },
      { en: 'Inflation started to accelerate towards the end of the year.', ru: 'Инфляция начала ускоряться к концу года.' },
      { en: 'Exposure to the sun can accelerate the aging of skin.', ru: 'Воздействие солнца может ускорить старение кожи.' }
    ]
),

createRichWord('c1_accommodate', 'Accommodate', '/əˈkɒmədeɪt/', 'экóмэдейт', 'Вмещать / Размещать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Предоставлять место для кого-то; или удовлетворять чьи-то нужды.',
    '- Люди: "Accommodate guests" (Разместить гостей)\n- Потребности: "Accommodate needs" (Удовлетворить потребности)\n- Вместимость: "Hall accommodates" (Зал вмещает)',
    [
      { en: 'The new hotel can accommodate up to five hundred guests.', ru: 'Новый отель может разместить до пятисот гостей.' },
      { en: 'We tried to accommodate his request for a vegetarian meal.', ru: 'Мы постарались удовлетворить его просьбу о вегетарианском блюде.' },
      { en: 'The table is too small to accommodate everyone comfortably.', ru: 'Стол слишком мал, чтобы с комфортом разместить всех.' },
      { en: 'The software can be modified to accommodate special requirements.', ru: 'Программное обеспечение может быть изменено для удовлетворения особых требований.' }
    ]
),

createRichWord('c1_accountable', 'Accountable', '/əˈkaʊntəb(ə)l/', 'экаунтэбл', 'Подотчетный / Ответственный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Несущий ответственность за свои действия и обязанный объяснять их.',
    '- Власть: "Hold accountable" (Привлекать к ответственности)\n- Работа: "Accountable to" (Подотчетный кому-то)\n- Действия: "Accountable for actions" (Ответственный за действия)',
    [
      { en: 'Politicians should be held accountable for their promises.', ru: 'Политики должны нести ответственность за свои обещания.' },
      { en: 'The manager is accountable to the board of directors.', ru: 'Менеджер подотчетен совету директоров.' },
      { en: 'We are all accountable for our own decisions in life.', ru: 'Мы все несем ответственность за свои собственные решения в жизни.' },
      { en: 'A system was set up to keep the officials accountable.', ru: 'Была создана система, чтобы чиновники оставались подотчетными.' }
    ]
),

createRichWord('c1_accumulate', 'Accumulate', '/əˈkjuːmjəleɪt/', 'экьюмюлейт', 'Накапливать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Собирать или увеличивать количество чего-либо с течением времени.',
    '- Богатство: "Accumulate wealth" (Накапливать богатство)\n- Вещи: "Dust accumulates" (Пыль скапливается)\n- Знания: "Accumulate experience" (Накапливать опыт)',
    [
      { en: 'Over the years, he managed to accumulate a large fortune.', ru: 'За эти годы ему удалось накопить большое состояние.' },
      { en: 'Dirt and dust tend to accumulate under the bed.', ru: 'Грязь и пыль имеют тенденцию скапливаться под кроватью.' },
      { en: 'Evidence against the suspect began to accumulate.', ru: 'Улики против подозреваемого начали накапливаться.' },
      { en: 'Fat tends to accumulate around the waist if you don\'t exercise.', ru: 'Жир имеет тенденцию скапливаться вокруг талии, если не заниматься спортом.' }
    ]
),

createRichWord('c1_acquisition', 'Acquisition', '/ˌækwɪˈzɪʃn/', 'эквизишн', 'Приобретение / Поглощение', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Процесс получения чего-либо; или компания, купленная другой компанией.',
    '- Бизнес: "Mergers and acquisitions" (Слияния и поглощения)\n- Язык: "Language acquisition" (Овладение языком)\n- Вещь: "Recent acquisition" (Недавнее приобретение)',
    [
      { en: 'The museum\'s latest acquisition is a rare Picasso painting.', ru: 'Последнее приобретение музея — редкая картина Пикассо.' },
      { en: 'Language acquisition is easier for young children than adults.', ru: 'Овладение языком дается маленьким детям легче, чем взрослым.' },
      { en: 'The company announced the acquisition of a smaller rival firm.', ru: 'Компания объявила о поглощении (приобретении) меньшей фирмы-конкурента.' },
      { en: 'He showed off his new car, his latest expensive acquisition.', ru: 'Он похвастался своей новой машиной, своим последним дорогим приобретением.' }
    ]
),

createRichWord('c1_acre', 'Acre', '/ˈeɪkə/', 'эйкэ', 'Акр', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Единица измерения площади земли (около 4047 кв. м), используемая в Великобритании и США.',
    '- Земля: "Acres of land" (Акры земли)\n- Размер: "50-acre farm" (Ферма в 50 акров)\n- Переносно: "Acres of space" (Куча места)',
    [
      { en: 'The house sits on five acres of beautiful woodland.', ru: 'Дом расположен на пяти акрах красивого лесного массива.' },
      { en: 'The fire destroyed thousands of acres of forest.', ru: 'Пожар уничтожил тысячи акров леса.' },
      { en: 'He bought an acre of land to build his dream home.', ru: 'Он купил акр земли, чтобы построить дом своей мечты.' },
      { en: 'The park covers over a hundred acres in the city center.', ru: 'Парк занимает более ста акров в центре города.' }
    ]
),

createRichWord('c1_administrative', 'Administrative', '/ədˈmɪnɪstrətɪv/', 'эдминистрэтив', 'Административный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Относящийся к управлению организацией или ведению дел.',
    '- Работа: "Administrative staff" (Административный персонал)\n- Обязанности: "Administrative tasks" (Административные задачи)\n- Ошибка: "Administrative error" (Административная ошибка)',
    [
      { en: 'The job involves mainly administrative duties like filing.', ru: 'Работа включает в себя в основном административные обязанности, такие как работа с документами.' },
      { en: 'We need to cut administrative costs to save money.', ru: 'Нам нужно сократить административные расходы, чтобы сэкономить деньги.' },
      { en: 'She is an administrative assistant to the CEO.', ru: 'Она административный помощник генерального директора.' },
      { en: 'The delay was caused by a simple administrative error.', ru: 'Задержка была вызвана простой административной ошибкой.' }
    ]
),

createRichWord('c1_administrator', 'Administrator', '/ədˈmɪnɪstreɪtə/', 'эдминистрейтэ', 'Администратор / Управляющий', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Человек, чья работа заключается в управлении организацией, бизнесом или системой.',
    '- IT: "System administrator" (Системный администратор)\n- Школа: "School administrator" (Администратор школы)\n- Право: "Hospital administrator" (Управляющий больницей)',
    [
      { en: 'Please contact the system administrator if you forget your password.', ru: 'Пожалуйста, свяжитесь с системным администратором, если забудете пароль.' },
      { en: 'She works as a hospital administrator managing staff schedules.', ru: 'Она работает администратором больницы, управляя графиками персонала.' },
      { en: 'The administrator is responsible for the daily operations.', ru: 'Администратор несет ответственность за повседневные операции.' },
      { en: 'Experienced administrators are needed to run large departments.', ru: 'Для управления крупными отделами требуются опытные администраторы.' }
    ]
),

createRichWord('c1_adolescent', 'Adolescent', '/ˌædəˈlesnt/', 'эдэлесент', 'Подросток / Подростковый', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Молодой человек, который развивается из ребенка во взрослого (формальный синоним teenager).',
    '- Возраст: "Adolescent years" (Подростковые годы)\n- Проблемы: "Adolescent behavior" (Подростковое поведение)\n- Психология: "Adolescent psychology" (Подростковая психология)',
    [
      { en: 'Adolescents often experience mood swings due to hormones.', ru: 'Подростки часто испытывают перепады настроения из-за гормонов.' },
      { en: 'The clinic specializes in mental health for adolescents.', ru: 'Клиника специализируется на психическом здоровье подростков.' },
      { en: 'During his adolescent years, he was very rebellious.', ru: 'В свои подростковые годы он был очень бунтарским.' },
      { en: 'Parents need patience when dealing with adolescent children.', ru: 'Родителям нужно терпение при общении с детьми-подростками.' }
    ]
),

createRichWord('c1_advocate', 'Advocate', '/ˈædvəkeɪt/', 'эдвэкейт', 'Адвокат / Защитник (идеи)', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Человек, который публично поддерживает идею, план или другого человека (также глагол "отстаивать").',
    '- Права: "Advocate for rights" (Защитник прав)\n- Идея: "Strong advocate" (Ярый сторонник)\n- Действие (глаг.): "Advocate change" (Выступать за перемены)',
    [
      { en: 'She is a strong advocate for women\'s rights worldwide.', ru: 'Она является ярым защитником прав женщин во всем мире.' },
      { en: 'The doctor advocates a healthy diet and regular exercise.', ru: 'Врач выступает за (пропагандирует) здоровую диету и регулярные упражнения.' },
      { en: 'He has always been an advocate of peace and non-violence.', ru: 'Он всегда был сторонником мира и ненасилия.' },
      { en: 'The group advocates for better protection of the environment.', ru: 'Группа выступает за лучшую защиту окружающей среды.' }
    ]
),

createRichWord('c1_affection', 'Affection', '/əˈfekʃn/', 'эфéкшн', 'Привязанность / Любовь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Чувство любви или сильной симпатии к кому-то.',
    '- Чувство: "Deep affection" (Глубокая привязанность)\n- Действие: "Show affection" (Проявлять любовь/нежность)\n- Отношения: "Win affection" (Завоевать симпатию)',
    [
      { en: 'She felt a deep affection for her younger brother.', ru: 'Она чувствовала глубокую привязанность к своему младшему брату.' },
      { en: 'He found it difficult to show affection in public.', ru: 'Ему было трудно проявлять нежность на публике.' },
      { en: 'The dog looked at its owner with great affection.', ru: 'Собака смотрела на своего хозяина с большой любовью.' },
      { en: 'Their affection for each other grew stronger over the years.', ru: 'Их привязанность друг к другу с годами становилась сильнее.' }
    ]
),

createRichWord('c1_affirm', 'Affirm', '/əˈfɜːm/', 'эфём', 'Утверждать / Подтверждать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заявлять что-то как истину, публично подтверждать или поддерживать.',
    '- Заявление: "Affirm faith" (Подтвердить веру)\n- Суд: "Affirm the decision" (Оставить решение в силе)\n- Позиция: "Affirm commitment" (Подтвердить приверженность)',
    [
      { en: 'The witness affirmed that she had seen the defendant.', ru: 'Свидетель подтвердила, что видела подсудимого.' },
      { en: 'The government affirmed its commitment to peace talks.', ru: 'Правительство подтвердило свою приверженность мирным переговорам.' },
      { en: 'He affirmed his loyalty to the company during the meeting.', ru: 'Он подтвердил свою лояльность компании во время встречи.' },
      { en: 'Scholars affirm that this text is authentic.', ru: 'Ученые утверждают, что этот текст является подлинным.' }
    ]
),

createRichWord('c1_alert', 'Alert', '/əˈlɜːt/', 'элёт', 'Бдительный / Тревога', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Быстро замечающий любую опасность или изменение (прил.); или предупреждение об опасности (сущ.).',
    '- Состояние: "Stay alert" (Оставаться бдительным)\n- Ум: "Mentally alert" (Умственно бодрый/активный)\n- Сущ.: "Red alert" (Красный уровень тревоги)',
    [
      { en: 'Security guards must stay alert at all times.', ru: 'Охранники должны оставаться бдительными все время.' },
      { en: 'Despite his age, he is still very mentally alert.', ru: 'Несмотря на возраст, он все еще очень умственно бодр.' },
      { en: 'The army was put on high alert due to the threat.', ru: 'Армия была приведена в состояние повышенной боевой готовности из-за угрозы.' },
      { en: 'Drivers need to be alert to sudden changes in traffic.', ru: 'Водителям нужно быть внимательными к внезапным изменениям в движении.' }
    ]
),

createRichWord('c1_alien', 'Alien', '/ˈeɪliən/', 'эйлиэн', 'Чужой / Инопланетянин', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Принадлежащий к другой стране, расе или миру; странный и незнакомый.',
    '- Космос: "Alien life" (Инопланетная жизнь)\n- Чувство: "Alien concept" (Чуждое понятие)\n- Закон: "Illegal alien" (Нелегальный иностранец - юр.)',
    [
      { en: 'The idea of resting is completely alien to him; he works constantly.', ru: 'Идея отдыха ему совершенно чужда; он работает постоянно.' },
      { en: 'Scientists are searching for signals from alien civilizations.', ru: 'Ученые ищут сигналы от инопланетных цивилизаций.' },
      { en: 'When I first moved here, the culture felt very alien to me.', ru: 'Когда я впервые переехал сюда, культура казалась мне очень чужой.' },
      { en: 'In the movie, aliens invade Earth to steal its water.', ru: 'В фильме пришельцы вторгаются на Землю, чтобы украсть ее воду.' }
    ]
),

createRichWord('c1_allege', 'Allege', '/əˈledʒ/', 'элéдж', 'Утверждать (голословно)', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заявлять, что кто-то сделал что-то незаконное или неправильное, без доказательств.',
    '- Суд: "Allege fraud" (Утверждать о мошенничестве)\n- Преступление: "Alleged crime" (Предполагаемое преступление)\n- Фраза: "It is alleged that" (Утверждается, что)',
    [
      { en: 'The prosecution alleges that he was at the scene of the crime.', ru: 'Обвинение утверждает, что он был на месте преступления.' },
      { en: 'It is alleged that the company avoided paying taxes.', ru: 'Утверждается, что компания уклонялась от уплаты налогов.' },
      { en: 'She is alleged to have stolen the jewellery.', ru: 'Утверждают (предполагается), что она украла драгоценности.' },
      { en: 'The newspaper alleges police corruption in the city.', ru: 'Газета заявляет о коррупции в полиции города.' }
    ]
),

createRichWord('c1_alliance', 'Alliance', '/əˈlaɪəns/', 'элáйэнс', 'Альянс / Союз', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Союз между странами, политическими партиями или людьми для достижения общей цели.',
    '- Политика: "Form an alliance" (Сформировать альянс)\n- Война: "Military alliance" (Военный союз)\n- Бизнес: "Strategic alliance" (Стратегический альянс)',
    [
      { en: 'The two countries formed a military alliance against the enemy.', ru: 'Две страны сформировали военный союз против врага.' },
      { en: 'NATO is a powerful international alliance.', ru: 'НАТО — это мощный международный альянс.' },
      { en: 'The parties entered into an uneasy alliance to win the election.', ru: 'Партии вступили в непростой союз, чтобы выиграть выборы.' },
      { en: 'They broke the alliance when their interests clashed.', ru: 'Они разорвали альянс, когда их интересы столкнулись.' }
    ]
),

createRichWord('c1_allocate', 'Allocate', '/ˈæləkeɪt/', 'элэкейт', 'Распределять / Выделять', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Официально выделять (деньги, время, ресурсы) для определенной цели.',
    '- Ресурсы: "Allocate funds" (Выделять средства)\n- Время: "Allocate time" (Выделять время)\n- Место: "Allocate space" (Выделять место)',
    [
      { en: 'The government allocated millions for the new hospital.', ru: 'Правительство выделило миллионы на новую больницу.' },
      { en: 'You should allocate at least two hours for this task.', ru: 'Вам следует выделить по крайней мере два часа на эту задачу.' },
      { en: 'Tickets are allocated on a first-come, first-served basis.', ru: 'Билеты распределяются в порядке живой очереди.' },
      { en: 'We need to allocate more resources to the marketing department.', ru: 'Нам нужно выделить больше ресурсов отделу маркетинга.' }
    ]
),

createRichWord('c1_ally', 'Ally', '/ˈælaɪ/', 'элай', 'Союзник', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Страна или человек, которые помогают и поддерживают другого, особенно во время войны.',
    '- Война: "Close ally" (Близкий союзник)\n- Политика: "Political ally" (Политический союзник)\n- Глагол: "Ally with" (Объединяться с)',
    [
      { en: 'Great Britain was a key ally of the United States in the war.', ru: 'Великобритания была ключевым союзником США в войне.' },
      { en: 'He is looking for allies to support his proposal.', ru: 'Он ищет союзников, чтобы поддержать свое предложение.' },
      { en: 'Treat your employees as allies, not enemies.', ru: 'Относитесь к своим сотрудникам как к союзникам, а не врагам.' },
      { en: 'The two companies became allies to fight off the takeover.', ru: 'Две компании стали союзниками, чтобы отбить поглощение.' }
    ]
),

createRichWord('c1_amend', 'Amend', '/əˈmend/', 'эмéнд', 'Вносить поправки', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Изменять слова в тексте, особенно в законе или юридическом документе, чтобы улучшить его.',
    '- Закон: "Amend the constitution" (Внести поправки в конституцию)\n- Документ: "Amend the report" (Исправить отчет)\n- Ошибка: "Amend a mistake" (Исправить ошибку)',
    [
      { en: 'Congress voted to amend the existing tax law.', ru: 'Конгресс проголосовал за внесение поправок в существующий налоговый закон.' },
      { en: 'The contract was amended to include the new salary.', ru: 'В контракт были внесены изменения, чтобы включить новую зарплату.' },
      { en: 'Please amend your details if they have changed.', ru: 'Пожалуйста, исправьте свои данные, если они изменились.' },
      { en: 'He took the opportunity to amend his earlier statement.', ru: 'Он воспользовался возможностью, чтобы поправить свое раннее заявление.' }
    ]
),

createRichWord('c1_anticipate', 'Anticipate', '/ænˈtɪsɪpeɪt/', 'энтисипейт', 'Предвидеть / Ожидать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Представлять или ожидать, что что-то случится, и готовиться к этому.',
    '- Будущее: "Anticipate problems" (Предвидеть проблемы)\n- Ожидание: "Eagerly anticipate" (С нетерпением ожидать)\n- Реакция: "Anticipate needs" (Предвосхищать потребности)',
    [
      { en: 'We do not anticipate any major problems with the new system.', ru: 'Мы не предвидим никаких серьезных проблем с новой системой.' },
      { en: 'It is important to anticipate what your opponent will do.', ru: 'Важно предугадать (предвидеть), что сделает твой противник.' },
      { en: 'The organizers anticipated a large crowd and hired security.', ru: 'Организаторы ожидали большую толпу и наняли охрану.' },
      { en: 'Good waiters anticipate the needs of their customers.', ru: 'Хорошие официанты предвосхищают потребности своих клиентов.' }
    ]
  ),
createRichWord('c1_arise', 'Arise', '/əˈraɪz/', 'эрайз', 'Возникать / Появляться', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Случаться или появляться (о проблемах или ситуациях); формальный синоним happen/occur.',
    '- Проблема: "Problems arise" (Проблемы возникают)\n- Вопрос: "Questions arise" (Вопросы возникают)\n- Необходимость: "Should the need arise" (Если возникнет необходимость)',
    [
      { en: 'Serious problems may arise if we do not act quickly.', ru: 'Серьезные проблемы могут возникнуть, если мы не будем действовать быстро.' },
      { en: 'Several questions arose during the meeting regarding the budget.', ru: 'Во время встречи возникло несколько вопросов касательно бюджета.' },
      { en: 'I will contact you should the need arise.', ru: 'Я свяжусь с вами, если возникнет необходимость.' },
      { en: 'A conflict arose between the two departments over resources.', ru: 'Между двумя отделами возник конфликт из-за ресурсов.' }
    ]
),

createRichWord('c1_assault', 'Assault', '/əˈsɔːlt/', 'эсолт', 'Нападение / Штурм', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Физическая атака на кого-то; или военная атака.',
    '- Преступление: "Sexual assault" (Сексуальное насилие)\n- Закон: "Charged with assault" (Обвинен в нападении)\n- Война: "Assault on the city" (Штурм города)',
    [
      { en: 'He was arrested and charged with assault after the fight.', ru: 'Он был арестован и обвинен в нападении после драки.' },
      { en: 'The soldiers launched an assault on the enemy base at dawn.', ru: 'Солдаты начали штурм вражеской базы на рассвете.' },
      { en: 'Verbal assault can be just as damaging as physical violence.', ru: 'Словесное нападение может быть таким же разрушительным, как и физическое насилие.' },
      { en: 'The victim of the assault was taken to the hospital.', ru: 'Жертва нападения была доставлена в больницу.' }
    ]
),

createRichWord('c1_assemble', 'Assemble', '/əˈsemb(ə)l/', 'эсэмбл', 'Собирать(ся) / Монтировать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Собираться вместе в группу; или соединять части чего-то.',
    '- Люди: "Crowd assembled" (Толпа собралась)\n- Производство: "Assemble a car" (Собрать машину)\n- Мебель: "Easy to assemble" (Легко собрать)',
    [
      { en: 'All the students assembled in the main hall for the announcement.', ru: 'Все студенты собрались в главном зале для объявления.' },
      { en: 'It took him three hours to assemble the new bookshelf.', ru: 'У него ушло три часа, чтобы собрать новую книжную полку.' },
      { en: 'Parts of the aircraft are assembled in different countries.', ru: 'Части самолета собираются в разных странах.' },
      { en: 'The manager assembled a team of experts to solve the problem.', ru: 'Менеджер собрал команду экспертов для решения проблемы.' }
    ]
),

createRichWord('c1_assembly', 'Assembly', '/əˈsembli/', 'эсэмбли', 'Собрание / Сборка', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Группа людей, собравшихся для определенной цели (например, законодательная); или процесс сборки.',
    '- Политика: "National Assembly" (Национальное собрание)\n- Школа: "Morning assembly" (Утренняя линейка)\n- Завод: "Assembly line" (Сборочный конвейер)',
    [
      { en: 'The National Assembly voted to change the law yesterday.', ru: 'Национальное собрание проголосовало за изменение закона вчера.' },
      { en: 'Car production on the assembly line is very efficient.', ru: 'Производство автомобилей на сборочном конвейере очень эффективно.' },
      { en: 'Freedom of assembly is a fundamental human right.', ru: 'Свобода собраний — это фундаментальное право человека.' },
      { en: 'The headmaster spoke to the students during the morning assembly.', ru: 'Директор говорил со студентами во время утренней линейки.' }
    ]
),

createRichWord('c1_assert', 'Assert', '/əˈsɜːt/', 'эсёт', 'Утверждать / Отстаивать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Говорить что-то уверенно; или вести себя уверенно, чтобы вас заметили.',
    '- Мнение: "Assert authority" (Утвердить власть)\n- Права: "Assert rights" (Отстаивать права)\n- Факт: "Assert innocence" (Настаивать на невиновности)',
    [
      { en: 'She had to assert her authority to control the noisy class.', ru: 'Ей пришлось утвердить свою власть, чтобы контролировать шумный класс.' },
      { en: 'The lawyer continued to assert his client\'s innocence.', ru: 'Адвокат продолжал настаивать на невиновности своего клиента.' },
      { en: 'You need to assert yourself more if you want a promotion.', ru: 'Тебе нужно проявлять больше настойчивости, если хочешь повышения.' },
      { en: 'He asserted that the company had done nothing wrong.', ru: 'Он утверждал, что компания не сделала ничего плохого.' }
    ]
),

createRichWord('c1_asset', 'Asset', '/ˈæset/', 'эсэт', 'Актив / Ценное качество', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Что-то ценное, чем владеет человек или компания; или полезное качество.',
    '- Финансы: "Company assets" (Активы компании)\n- Качество: "Valuable asset" (Ценный актив/качество)\n- Люди: "Asset to the team" (Ценный сотрудник команды)',
    [
      { en: 'Her ability to speak three languages is a great asset.', ru: 'Ее способность говорить на трех языках — это большое преимущество (актив).' },
      { en: 'The company has assets worth over one million dollars.', ru: 'У компании есть активы на сумму более одного миллиона долларов.' },
      { en: 'Good health is your most important asset in life.', ru: 'Хорошее здоровье — ваш самый важный актив в жизни.' },
      { en: 'He is a huge asset to our team because of his experience.', ru: 'Он — огромная ценность для нашей команды благодаря своему опыту.' }
    ]
),

createRichWord('c1_assumption', 'Assumption', '/əˈsʌmpʃ(ə)n/', 'эсáмпшн', 'Предположение', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Вещь, которую вы считаете правдой без доказательств.',
    '- Мысль: "Make an assumption" (Сделать предположение)\n- Ошибка: "Wrong assumption" (Ошибочное предположение)\n- База: "Based on the assumption" (Основано на предположении)',
    [
      { en: 'People tend to make assumptions about others based on appearance.', ru: 'Люди склонны делать предположения о других, основываясь на внешности.' },
      { en: 'Your argument is based on a false assumption.', ru: 'Ваш аргумент основан на ложном предположении.' },
      { en: 'We are working on the assumption that the market will improve.', ru: 'Мы работаем исходя из предположения, что рынок улучшится.' },
      { en: 'It was a mistake to proceed on the assumption that he knew the plan.', ru: 'Было ошибкой действовать в предположении, что он знал план.' }
    ]
),

createRichWord('c1_attribute', 'Attribute', '/ˈætrɪbjuːt/', 'этрибьют', 'Атрибут / Приписывать', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Качество или характеристика (сущ); или считать что-то причиной чего-то (глагол, ударение на второй слог: /əˈtrɪbjuːt/).',
    '- Качество: "Key attribute" (Ключевой атрибут/качество)\n- Причина: "Attribute success to" (Приписывать успех чему-то)\n- Характер: "Personal attribute" (Личное качество)',
    [
      { en: 'Patience is one of the most important attributes of a teacher.', ru: 'Терпение — одно из самых важных качеств учителя.' },
      { en: 'He attributes his success to hard work and good luck.', ru: 'Он приписывает свой успех тяжелой работе и удаче.' },
      { en: 'The painting is attributed to Leonardo da Vinci.', ru: 'Эту картину приписывают Леонардо да Винчи.' },
      { en: 'Organizational skills are a necessary attribute for this job.', ru: 'Организаторские навыки — необходимый атрибут для этой работы.' }
    ]
),

createRichWord('c1_audit', 'Audit', '/ˈɔːdɪt/', 'одит', 'Аудит / Проверка', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Официальная проверка финансовых счетов компании.',
    '- Финансы: "Annual audit" (Ежегодный аудит)\n- Действие: "Carry out an audit" (Проводить аудит)\n- Люди: "External audit" (Внешний аудит)',
    [
      { en: 'The company faces an annual audit of its accounts.', ru: 'Компания проходит ежегодный аудит своих счетов.' },
      { en: 'An independent firm was hired to conduct the audit.', ru: 'Для проведения аудита была нанята независимая фирма.' },
      { en: 'The audit revealed several errors in the financial records.', ru: 'Аудит выявил несколько ошибок в финансовых записях.' },
      { en: 'They are preparing for a tax audit next month.', ru: 'Они готовятся к налоговой проверке в следующем месяце.' }
    ]
),

createRichWord('c1_authorise', 'Authorise', '/ˈɔːθəraɪz/', 'осэрайз', 'Уполномочивать / Разрешать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Дать официальное разрешение на что-то (AmE: Authorize).',
    '- Разрешение: "Authorise a payment" (Разрешить платеж)\n- Власть: "Fully authorised" (Полностью уполномочен)\n- Доступ: "Authorised personnel only" (Только для уполномоченного персонала)',
    [
      { en: 'I authorized the bank to transfer the money to your account.', ru: 'Я уполномочил банк перевести деньги на ваш счет.' },
      { en: 'Only the manager can authorize refunds for customers.', ru: 'Только менеджер может разрешать возвраты средств клиентам.' },
      { en: 'The committee authorized the construction of the new bridge.', ru: 'Комитет разрешил (санкционировал) строительство нового моста.' },
      { en: 'Access is restricted to authorized personnel only.', ru: 'Доступ разрешен только уполномоченному персоналу.' }
    ]
),

createRichWord('c1_bacterium', 'Bacterium', '/bækˈtɪəriəm/', 'бэктириэм', 'Бактерия', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Одна мельчайшая живая клетка (ед. число от bacteria), вызывающая болезни или помогающая пищеварению.',
    '- Наука: "Single bacterium" (Одна бактерия)\n- Болезнь: "Caused by a bacterium" (Вызвано бактерией)\n- Тип: "Resistant bacterium" (Устойчивая бактерия)',
    [
      { en: 'This specific bacterium can cause food poisoning.', ru: 'Эта конкретная бактерия может вызвать пищевое отравление.' },
      { en: 'Under the microscope, the bacterium looked like a small rod.', ru: 'Под микроскопом бактерия выглядела как маленькая палочка.' },
      { en: 'Antibiotics are used to kill the harmful bacterium.', ru: 'Антибиотики используются для уничтожения вредной бактерии.' },
      { en: 'Not every bacterium is bad; some help us digest food.', ru: 'Не каждая бактерия плоха; некоторые помогают нам переваривать пищу.' }
    ]
),

createRichWord('c1_bias', 'Bias', '/ˈbaɪəs/', 'байэс', 'Предвзятость', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Склонность поддерживать или выступать против одной группы/человека несправедливым образом.',
    '- Мнение: "Political bias" (Политическая предвзятость)\n- Чувство: "Unconscious bias" (Неосознанная предвзятость)\n- Действие: "Show bias" (Проявлять предвзятость)',
    [
      { en: 'The news report showed a clear bias against the government.', ru: 'Новостной репортаж демонстрировал явную предвзятость против правительства.' },
      { en: 'Teachers should avoid showing bias towards any student.', ru: 'Учителя должны избегать проявления предвзятости к любому ученику.' },
      { en: 'Companies are trying to eliminate gender bias in hiring.', ru: 'Компании пытаются устранить гендерную предвзятость при найме.' },
      { en: 'His judgment was affected by his personal bias.', ru: 'На его суждение повлияла его личная предвзятость.' }
    ]
),

createRichWord('c1_bid', 'Bid', '/bɪd/', 'бид', 'Ставка / Заявка', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Предложение заплатить определенную цену (на аукционе) или попытка достичь чего-то.',
    '- Аукцион: "Make a bid" (Сделать ставку)\n- Попытка: "Bid for power" (Борьба за власть)\n- Бизнес: "Takeover bid" (Предложение о поглощении)',
    [
      { en: 'She made the highest bid for the painting at the auction.', ru: 'Она сделала самую высокую ставку на картину на аукционе.' },
      { en: 'The company put in a bid to build the new stadium.', ru: 'Компания подала заявку на строительство нового стадиона.' },
      { en: 'His bid to become the team captain was successful.', ru: 'Его попытка стать капитаном команды увенчалась успехом.' },
      { en: 'They lost the contract because their bid was too high.', ru: 'Они потеряли контракт, потому что их заявка (цена) была слишком высокой.' }
    ]
),

createRichWord('c1_bishop', 'Bishop', '/ˈbɪʃəp/', 'бишэп', 'Епископ / Слон (шахматы)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Священник высокого ранга в некоторых христианских церквях; или шахматная фигура.',
    '- Религия: "Catholic bishop" (Католический епископ)\n- Шахматы: "Move the bishop" (Сделать ход слоном)\n- Титул: "Bishop of London" (Епископ Лондона)',
    [
      { en: 'The bishop led the special service in the cathedral.', ru: 'Епископ провел специальную службу в соборе.' },
      { en: 'In chess, a bishop can only move diagonally.', ru: 'В шахматах слон может ходить только по диагонали.' },
      { en: 'He was appointed as the new bishop of the diocese.', ru: 'Он был назначен новым епископом епархии.' },
      { en: 'Bishops wear distinctive purple robes during ceremonies.', ru: 'Епископы носят отличительные фиолетовые мантии во время церемоний.' }
    ]
),

createRichWord('c1_blast', 'Blast', '/blɑːst/', 'бласт', 'Взрыв / Порыв', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Взрыв бомбы; громкий звук; или сильный порыв ветра.',
    '- Взрыв: "Bomb blast" (Взрыв бомбы)\n- Ветер: "Blast of wind" (Порыв ветра)\n- Сленг: "Have a blast" (Отлично провести время)',
    [
      { en: 'The blast from the explosion shattered windows nearby.', ru: 'Ударная волна от взрыва разбила окна поблизости.' },
      { en: 'A sudden blast of cold air came through the open door.', ru: 'Внезапный порыв холодного воздуха проник через открытую дверь.' },
      { en: 'We had a blast at the party last night.', ru: 'Мы отлично провели время на вечеринке вчера вечером.' },
      { en: 'The trumpet let out a loud blast of music.', ru: 'Труба издала громкий звук музыки.' }
    ]
),

createRichWord('c1_blend', 'Blend', '/blend/', 'блэнд', 'Смесь / Смешивать', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Смесь разных вещей или стилей; или действие смешивания.',
    '- Кофе: "Blend of coffee" (Смесь кофе / Купаж)\n- Стиль: "Perfect blend" (Идеальное сочетание)\n- Глагол: "Blend in" (Сливаться с толпой)',
    [
      { en: 'This tea is a blend of herbs and spices.', ru: 'Этот чай представляет собой смесь трав и специй.' },
      { en: 'The building is a nice blend of old and new styles.', ru: 'Здание представляет собой приятное сочетание старого и нового стилей.' },
      { en: 'Blend the ingredients together until they are smooth.', ru: 'Смешайте ингредиенты вместе до получения однородной массы.' },
      { en: 'The spy tried to blend in with the crowd.', ru: 'Шпион пытался слиться с толпой.' }
    ]
),

createRichWord('c1_boundary', 'Boundary', '/ˈbaʊndri/', 'баундри', 'Граница / Предел', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Линия, отмечающая предел области; или предел допустимого поведения (личные границы).',
    '- Линия: "National boundary" (Государственная граница)\n- Психология: "Personal boundaries" (Личные границы)\n- Спорт: "Hit a boundary" (Удар за границу поля)',
    [
      { en: 'The river marks the boundary between the two properties.', ru: 'Река отмечает границу между двумя владениями.' },
      { en: 'It is important to set healthy boundaries in relationships.', ru: 'Важно устанавливать здоровые границы в отношениях.' },
      { en: 'Scientists are pushing the boundaries of human knowledge.', ru: 'Ученые раздвигают границы человеческих знаний.' },
      { en: 'The ball crossed the boundary line for a goal.', ru: 'Мяч пересек линию границы, и был засчитан гол.' }
    ]
),

createRichWord('c1_burden', 'Burden', '/ˈbɜːdn/', 'бёдн', 'Бремя / Ноша', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Тяжелая ноша; или обязанность, которая вызывает беспокойство или трудности.',
    '- Ответственность: "Heavy burden" (Тяжкое бремя)\n- Финансы: "Financial burden" (Финансовое бремя)\n- Чувство: "Be a burden" (Быть обузой)',
    [
      { en: 'I do not want to be a burden to my children when I am old.', ru: 'Я не хочу быть обузой для своих детей, когда состарюсь.' },
      { en: 'The burden of proof lies with the prosecution.', ru: 'Бремя доказывания лежит на обвинении.' },
      { en: 'Paying off the debt was a huge financial burden for him.', ru: 'Выплата долга была для него огромным финансовым бременем.' },
      { en: 'She carries the burden of looking after her sick mother.', ru: 'Она несет бремя ухода за своей больной матерью.' }
    ]
),

createRichWord('c1_bureau', 'Bureau', '/ˈbjʊərəʊ/', 'бьюэроу', 'Бюро / Отдел', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Офис или отдел для ведения конкретного бизнеса; или предмет мебели (письменный стол).',
    '- Организация: "Investigation bureau" (Бюро расследований)\n- Информация: "Information bureau" (Справочное бюро)\n- Мебель: "Writing bureau" (Письменный стол-бюро)',
    [
      { en: 'The Federal Bureau of Investigation is famous worldwide.', ru: 'Федеральное бюро расследований известно во всем мире.' },
      { en: 'We went to the citizens advice bureau for help.', ru: 'Мы обратились в бюро консультаций граждан за помощью.' },
      { en: 'He keeps his important papers in the old oak bureau.', ru: 'Он хранит свои важные бумаги в старом дубовом бюро.' },
      { en: 'A bureau de change is where you can exchange money.', ru: 'Обменный пункт (бюро обмена) — это место, где можно обменять деньги.' }
    ]
),

createRichWord('c1_cabinet', 'Cabinet', '/ˈkæbɪnət/', 'кэбинэт', 'Кабинет министров / Шкаф', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Группа старших министров в правительстве; или шкаф с полками/ящиками.',
    '- Политика: "Cabinet meeting" (Заседание кабинета министров)\n- Мебель: "Kitchen cabinet" (Кухонный шкаф)\n- Хранение: "Filing cabinet" (Шкаф для документов)',
    [
      { en: 'The Prime Minister held a meeting with his Cabinet today.', ru: 'Премьер-министр провел встречу со своим кабинетом министров сегодня.' },
      { en: 'We need to buy a new cabinet for the bathroom.', ru: 'Нам нужно купить новый шкафчик для ванной.' },
      { en: 'Important files are locked in the metal filing cabinet.', ru: 'Важные файлы заперты в металлическом шкафу для документов.' },
      { en: 'Several Cabinet members resigned over the scandal.', ru: 'Несколько членов кабинета министров ушли в отставку из-за скандала.' }
    ]
),

createRichWord('c1_carve', 'Carve', '/kɑːv/', 'кав', 'Вырезать / Резать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Вырезать объект из дерева или камня; или нарезать приготовленное мясо.',
    '- Искусство: "Carve wood" (Вырезать по дереву)\n- Еда: "Carve the turkey" (Разрезать индейку)\n- Карьера: "Carve a career" (Сделать карьеру / Проложить путь)',
    [
      { en: 'He used a knife to carve a toy out of wood.', ru: 'Он использовал нож, чтобы вырезать игрушку из дерева.' },
      { en: 'The statue was carved from a single block of marble.', ru: 'Статуя была высечена из цельного блока мрамора.' },
      { en: 'Father always carves the turkey at Christmas dinner.', ru: 'Отец всегда нарезает индейку на рождественском ужине.' },
      { en: 'She managed to carve out a successful career in banking.', ru: 'Ей удалось построить (вырезать) успешную карьеру в банковской сфере.' }
    ]
),

createRichWord('c1_catalogue', 'Catalogue', '/ˈkætəlɒɡ/', 'кэтэлог', 'Каталог', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Полный список предметов, обычно в алфавитном порядке (книги в библиотеке, товары).',
    '- Магазин: "Product catalogue" (Каталог товаров)\n- Библиотека: "Library catalogue" (Библиотечный каталог)\n- Глагол: "To catalogue" (Каталогизировать)',
    [
      { en: 'I looked through the catalogue to find a new sofa.', ru: 'Я просмотрел каталог, чтобы найти новый диван.' },
      { en: 'The library catalogue is now available online.', ru: 'Библиотечный каталог теперь доступен онлайн.' },
      { en: 'They are trying to catalogue every species of bird.', ru: 'Они пытаются каталогизировать каждый вид птиц.' },
      { en: 'The exhibition catalogue contains pictures of all the paintings.', ru: 'Каталог выставки содержит фотографии всех картин.' }
    ]
),

createRichWord('c1_cattle', 'Cattle', '/ˈkæt(ə)l/', 'кэтл', 'Крупный рогатый скот', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Коровы и быки, которых держат на ферме ради молока или мяса.',
    '- Ферма: "Dairy cattle" (Молочный скот)\n- Количество: "Herd of cattle" (Стадо скота)\n- Разведение: "Raise cattle" (Разводить скот)',
    [
      { en: 'The farmer owns a large herd of dairy cattle.', ru: 'Фермер владеет большим стадом молочного скота.' },
      { en: 'Cattle were grazing peacefully in the green field.', ru: 'Скот мирно пасся на зеленом поле.' },
      { en: 'They raise cattle for both beef and milk production.', ru: 'Они разводят скот как для производства говядины, так и молока.' },
      { en: 'Texas is famous for its vast cattle ranches.', ru: 'Техас известен своими огромными ранчо крупного рогатого скота.' }
    ]
),

createRichWord('c1_cease', 'Cease', '/siːs/', 'сис', 'Прекращать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Остановиться; перестать что-то делать (формальный синоним stop).',
    '- Действие: "Cease fire" (Прекратить огонь)\n- Существование: "Cease to exist" (Прекратить существование)\n- Время: "Never cease" (Никогда не переставать)',
    [
      { en: 'The company ceased operations last month due to bankruptcy.', ru: 'Компания прекратила операции в прошлом месяце из-за банкротства.' },
      { en: 'You never cease to amaze me with your skills.', ru: 'Ты никогда не перестаешь (не прекращаешь) удивлять меня своими навыками.' },
      { en: 'The rain finally ceased, and the sun came out.', ru: 'Дождь наконец прекратился, и выглянуло солнце.' },
      { en: 'They signed an agreement to cease hostilities immediately.', ru: 'Они подписали соглашение о немедленном прекращении военных действий.' }
    ]
  ),
createRichWord('c1_aboard', 'Aboard', '/əˈbɔːd/', 'эбод', 'На борту', ProficiencyLevel.C1, 'adv', 'Medium', 'Formal',
    'На корабле, в самолете, поезде или автобусе.',
    '- Приветствие: "Welcome aboard" (Добро пожаловать на борт)\n- Действие: "Climb aboard" (Подняться на борт)\n- Транспорт: "All aboard!" (Все на борт!)',
    [
      { en: 'The captain welcomed the passengers aboard the flight.', ru: 'Капитан поприветствовал пассажиров на борту рейса.' },
      { en: 'We went aboard the ship an hour before departure.', ru: 'Мы поднялись на борт корабля за час до отправления.' },
      { en: 'Is everyone aboard the bus? We are leaving now.', ru: 'Все в автобусе (на борту)? Мы отправляемся.' },
      { en: 'He was already aboard when I arrived at the station.', ru: 'Он был уже в поезде (на борту), когда я прибыл на станцию.' }
    ]
),

createRichWord('c1_abrupt', 'Abrupt', '/əˈbrʌpt/', 'эбрапт', 'Резкий / Внезапный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Внезапный и неожиданный; или грубый и краткий в общении.',
    '- Изменение: "Abrupt change" (Резкое изменение)\n- Окончание: "Abrupt end" (Внезапный конец)\n- Манера: "Abrupt manner" (Резкая манера)',
    [
      { en: 'The meeting came to an abrupt end when the fire alarm rang.', ru: 'Встреча внезапно закончилась, когда зазвенела пожарная сигнализация.' },
      { en: 'He has an abrupt manner that some people find rude.', ru: 'У него резкая манера поведения, которую некоторые находят грубой.' },
      { en: 'The road makes an abrupt turn to the left here.', ru: 'Дорога здесь делает резкий поворот налево.' },
      { en: 'Sorry for the abrupt departure, I had an emergency.', ru: 'Извините за внезапный уход, у меня возникла чрезвычайная ситуация.' }
    ]
),

createRichWord('c1_abundant', 'Abundant', '/əˈbʌndənt/', 'эбандэнт', 'Обильный / Изобилующий', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Имеющийся в большом количестве; более чем достаточный.',
    '- Природа: "Abundant wildlife" (Богатая дикая природа)\n- Ресурсы: "Abundant supply" (Обильный запас)\n- Доказательства: "Abundant evidence" (Множество доказательств)',
    [
      { en: 'Fish are abundant in this part of the ocean.', ru: 'Рыба водится в изобилии в этой части океана.' },
      { en: 'We have abundant proof of his innocence.', ru: 'У нас есть множество доказательств его невиновности.' },
      { en: 'Rainfall is more abundant in the tropical regions.', ru: 'Осадки более обильны в тропических регионах.' },
      { en: 'The garden was filled with abundant flowers.', ru: 'Сад был наполнен множеством цветов.' }
    ]
),

createRichWord('c1_accustom', 'Accustom', '/əˈkʌstəm/', 'экáстэм', 'Приучать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Заставить кого-то привыкнуть к чему-то (обычно используется в пассиве или с oneself).',
    '- Привычка: "Accustom yourself to" (Приучить себя к)\n- Состояние: "Become accustomed to" (Привыкнуть к)\n- Глаза: "Accustom eyes" (Приучить глаза)',
    [
      { en: 'It took me a while to accustom myself to the cold climate.', ru: 'Мне потребовалось время, чтобы приучить себя к холодному климату.' },
      { en: 'He quickly became accustomed to the new working hours.', ru: 'Он быстро привык к новым рабочим часам.' },
      { en: 'You must accustom your eyes to the darkness.', ru: 'Вы должны приучить глаза к темноте.' },
      { en: 'She is not accustomed to being treated so rudely.', ru: 'Она не привыкла, чтобы с ней обращались так грубо.' }
    ]
),

createRichWord('c1_acquaint', 'Acquaint', '/əˈkweɪnt/', 'эквейнт', 'Знакомить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Познакомить кого-то с чем-то или сообщить факты (обычно "acquaint with").',
    '- Знакомство: "Acquaint with facts" (Ознакомить с фактами)\n- Люди: "Get acquainted" (Познакомиться)\n- Знание: "Be acquainted with" (Быть знакомым с)',
    [
      { en: 'Please acquaint yourself with the safety rules.', ru: 'Пожалуйста, ознакомьтесь с правилами безопасности.' },
      { en: 'I need to acquaint the new employee with his duties.', ru: 'Мне нужно ознакомить нового сотрудника с его обязанностями.' },
      { en: 'Are you acquainted with the works of Shakespeare?', ru: 'Знакомы ли вы с произведениями Шекспира?' },
      { en: 'We got acquainted at the conference last year.', ru: 'Мы познакомились на конференции в прошлом году.' }
    ]
),

createRichWord('c1_acute', 'Acute', '/əˈkjuːt/', 'экьют', 'Острый / Серьезный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Очень серьезный (о проблеме) или сильный (о боли); или проницательный (об уме).',
    '- Боль: "Acute pain" (Острая боль)\n- Проблема: "Acute shortage" (Острая нехватка)\n- Ум: "Acute mind" (Острый ум)',
    [
      { en: 'He was taken to the hospital with acute appendicitis.', ru: 'Его доставили в больницу с острым аппендицитом.' },
      { en: 'There is an acute shortage of water in the desert.', ru: 'В пустыне наблюдается острая нехватка воды.' },
      { en: 'Dogs have an acute sense of smell.', ru: 'У собак острое обоняние.' },
      { en: 'The problem is particularly acute in developing countries.', ru: 'Проблема особенно остра в развивающихся странах.' }
    ]
),

createRichWord('c1_aesthetic', 'Aesthetic', '/iːsˈθetɪk/', 'иссетик', 'Эстетический', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Связанный с красотой или оценкой красоты; приятный для глаз.',
    '- Красота: "Aesthetic appeal" (Эстетическая привлекательность)\n- Ценность: "Aesthetic value" (Эстетическая ценность)\n- Чувство: "Purely aesthetic" (Чисто эстетический)',
    [
      { en: 'The building has little aesthetic value, but it is functional.', ru: 'Здание имеет малую эстетическую ценность, но оно функционально.' },
      { en: 'She chose the furniture for its aesthetic appeal.', ru: 'Она выбрала мебель из-за ее эстетической привлекательности.' },
      { en: 'Their decision was based on aesthetic grounds.', ru: 'Их решение было основано на эстетических соображениях.' },
      { en: 'I appreciate the aesthetic beauty of Japanese gardens.', ru: 'Я ценю эстетическую красоту японских садов.' }
    ]
),

createRichWord('c1_agony', 'Agony', '/ˈæɡəni/', 'эгэни', 'Агония / Мучение', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Экстремальная физическая или душевная боль.',
    '- Боль: "In agony" (В агонии/мучениях)\n- Ожидание: "Wait in agony" (Ждать в муках)\n- Чувство: "Mental agony" (Душевные муки)',
    [
      { en: 'He lay on the floor in agony after breaking his leg.', ru: 'Он лежал на полу в мучениях, сломав ногу.' },
      { en: 'It was agony waiting for the news of the survivors.', ru: 'Было мучительно (агония) ждать новостей о выживших.' },
      { en: 'She described the agony of losing her child.', ru: 'Она описала муки потери своего ребенка.' },
      { en: 'The wounded soldier was in terrible agony.', ru: 'Раненый солдат испытывал ужасные мучения.' }
    ]
),

createRichWord('c1_alley', 'Alley', '/ˈæli/', 'эли', 'Переулок / Аллея', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Узкий проход между зданиями или дорожка в парке.',
    '- Город: "Dark alley" (Темный переулок)\n- Спорт: "Bowling alley" (Боулинг-клуб)\n- Тупик: "Blind alley" (Тупик)',
    [
      { en: 'The thief ran down a dark alley to escape.', ru: 'Вор побежал в темный переулок, чтобы скрыться.' },
      { en: 'They live in a small house at the end of the alley.', ru: 'Они живут в маленьком доме в конце переулка.' },
      { en: 'We went to the bowling alley on Friday night.', ru: 'Мы пошли в боулинг в пятницу вечером.' },
      { en: 'Avoid walking in narrow alleys late at night.', ru: 'Избегайте прогулок по узким переулкам поздно ночью.' }
    ]
),

createRichWord('c1_alternate', 'Alternate', '/ˈɒltəneɪt/', 'олтэнейт', 'Чередовать(ся)', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Происходить по очереди (одно за другим) или менять местами.',
    '- Дни: "Alternate days" (Через день - прил.)\n- Действие: "Alternate between" (Чередовать между)\n- Слои: "Alternate layers" (Чередовать слои)',
    [
      { en: 'Her mood alternates between happiness and sadness.', ru: 'Ее настроение чередуется между счастьем и грустью.' },
      { en: 'We meet on alternate Tuesdays.', ru: 'Мы встречаемся каждый второй вторник (через вторник).' },
      { en: 'You should alternate running with walking.', ru: 'Вам следует чередовать бег с ходьбой.' },
      { en: 'The cake has alternate layers of chocolate and cream.', ru: 'В торте чередуются слои шоколада и крема.' }
    ]
),

createRichWord('c1_amid', 'Amid', '/əˈmɪd/', 'эмид', 'Среди / Посреди', ProficiencyLevel.C1, 'prep', 'Low', 'Formal',
    'В середине или в окружении чего-либо (часто о шуме, событиях).',
    '- События: "Amid the chaos" (Посреди хаоса)\n- Место: "Amid the trees" (Среди деревьев)\n- Чувства: "Amid fears" (На фоне страхов)',
    [
      { en: 'The house stood amid tall trees and green fields.', ru: 'Дом стоял среди высоких деревьев и зеленых полей.' },
      { en: 'He finished his speech amid loud applause.', ru: 'Он закончил свою речь под громкие аплодисменты.' },
      { en: 'The decision was made amid growing criticism.', ru: 'Решение было принято на фоне растущей критики.' },
      { en: 'They found peace amid the noise of the city.', ru: 'Они нашли покой посреди городского шума.' }
    ]
),

createRichWord('c1_anchor', 'Anchor', '/ˈæŋkə/', 'энкэ', 'Якорь / Ведущий', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Тяжелый объект для удержания корабля; или главный телеведущий новостей.',
    '- Корабль: "Drop anchor" (Бросить якорь)\n- ТВ: "News anchor" (Ведущий новостей)\n- Стабильность: "Main anchor" (Главная опора)',
    [
      { en: 'The ship dropped anchor in the quiet bay.', ru: 'Корабль бросил якорь в тихой бухте.' },
      { en: 'She works as a news anchor for a major channel.', ru: 'Она работает ведущей новостей на крупном канале.' },
      { en: 'His faith was an anchor during the difficult times.', ru: 'Его вера была опорой (якорем) в трудные времена.' },
      { en: 'Make sure the anchor is secure before leaving the boat.', ru: 'Убедитесь, что якорь надежно закреплен, прежде чем покинуть лодку.' }
    ]
),

createRichWord('c1_anonymous', 'Anonymous', '/əˈnɒnɪməs/', 'энонимэс', 'Анонимный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Сделанный кем-то, чье имя неизвестно или не разглашается.',
    '- Письмо: "Anonymous letter" (Анонимное письмо)\n- Автор: "Remain anonymous" (Оставаться анонимным)\n- Благотворительность: "Anonymous donor" (Анонимный донор)',
    [
      { en: 'The police received an anonymous phone call about the crime.', ru: 'Полиция получила анонимный звонок о преступлении.' },
      { en: 'The donor wishes to remain anonymous.', ru: 'Донор желает остаться анонимным.' },
      { en: 'He wrote an anonymous letter to the editor.', ru: 'Он написал анонимное письмо редактору.' },
      { en: 'Internet users often prefer to be anonymous.', ru: 'Пользователи интернета часто предпочитают быть анонимными.' }
    ]
),

createRichWord('c1_anthropology', 'Anthropology', '/ˌænθrəˈpɒlədʒi/', 'энсрэполэджи', 'Антропология', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Научное изучение людей, человеческого поведения и обществ.',
    '- Наука: "Social anthropology" (Социальная антропология)\n- Учеба: "Study anthropology" (Изучать антропологию)\n- Эксперт: "Professor of anthropology" (Профессор антропологии)',
    [
      { en: 'She is studying anthropology to understand ancient cultures.', ru: 'Она изучает антропологию, чтобы понять древние культуры.' },
      { en: 'Anthropology helps us understand the origins of humanity.', ru: 'Антропология помогает нам понять происхождение человечества.' },
      { en: 'His field is cultural anthropology.', ru: 'Его область — культурная антропология.' },
      { en: 'The anthropology museum has artifacts from all over the world.', ru: 'В музее антропологии есть артефакты со всего мира.' }
    ]
),

createRichWord('c1_antique', 'Antique', '/ænˈtiːk/', 'энтик', 'Антиквариат / Старинный', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Старая и ценная вещь (сущ.); или относящийся к древности (прил.).',
    '- Мебель: "Antique furniture" (Антикварная мебель)\n- Магазин: "Antique shop" (Антикварный магазин)\n- Ценность: "Valuable antique" (Ценный антиквариат)',
    [
      { en: 'This table is a valuable antique from the 18th century.', ru: 'Этот стол — ценный антиквариат 18-го века.' },
      { en: 'She loves collecting antique jewellery.', ru: 'Она любит коллекционировать старинные украшения.' },
      { en: 'We bought this clock at an antique shop in London.', ru: 'Мы купили эти часы в антикварном магазине в Лондоне.' },
      { en: 'Antique cars are often very expensive to maintain.', ru: 'Старинные автомобили часто очень дороги в обслуживании.' }
    ]
),

createRichWord('c1_applicable', 'Applicable', '/əˈplɪkəb(ə)l/', 'эпликэбл', 'Применимый / Подходящий', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Актуальный или подходящий для конкретного случая.',
    '- Закон: "Applicable law" (Применимый закон)\n- Ситуация: "Not applicable" (Неприменимо)\n- Правило: "Applicable to all" (Применимо ко всем)',
    [
      { en: 'This rule is not applicable to new students.', ru: 'Это правило не применимо к новым студентам.' },
      { en: 'Please answer all questions that are applicable to you.', ru: 'Пожалуйста, ответьте на все вопросы, которые к вам относятся (применимы).' },
      { en: 'The tax is applicable only to luxury goods.', ru: 'Налог применим только к предметам роскоши.' },
      { en: 'Fill in the section if applicable.', ru: 'Заполните этот раздел, если это применимо.' }
    ]
),

createRichWord('c1_arch', 'Arch', '/ɑːtʃ/', 'ач', 'Арка / Дуга', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Изогнутая структура, перекрывающая отверстие; или часть стопы.',
    '- Здание: "Stone arch" (Каменная арка)\n- Тело: "Arch of the foot" (Свод стопы)\n- Форма: "Arch shape" (Форма арки)',
    [
      { en: 'We walked through the stone arch into the garden.', ru: 'Мы прошли через каменную арку в сад.' },
      { en: 'The bridge has three large arches.', ru: 'У моста есть три большие арки.' },
      { en: 'The cat arched its back when it saw the dog.', ru: 'Кошка выгнула спину дугой, когда увидела собаку.' },
      { en: 'He has a high arch in his foot.', ru: 'У него высокий свод стопы.' }
    ]
),

createRichWord('c1_archive', 'Archive', '/ˈɑːkaɪv/', 'акайв', 'Архив', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Коллекция исторических документов или записей.',
    '- Документы: "National archive" (Национальный архив)\n- Интернет: "Online archive" (Онлайн-архив)\n- Глагол: "To archive" (Архивировать)',
    [
      { en: 'The historian spent weeks studying documents in the archive.', ru: 'Историк провел недели, изучая документы в архиве.' },
      { en: 'You can find old newspapers in the digital archive.', ru: 'Вы можете найти старые газеты в цифровом архиве.' },
      { en: 'We need to archive these emails for future reference.', ru: 'Нам нужно заархивировать эти письма для использования в будущем.' },
      { en: 'The museum archive contains thousands of photographs.', ru: 'Архив музея содержит тысячи фотографий.' }
    ]
),

createRichWord('c1_armour', 'Armour', '/ˈɑːmə/', 'амэ', 'Броня / Доспехи', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Металлическая одежда для защиты в бою (исторически); или защита техники.',
    '- История: "Knight in armour" (Рыцарь в доспехах)\n- Тело: "Body armour" (Бронежилет)\n- Машина: "Tank armour" (Броня танка)',
    [
      { en: 'The knight wore heavy steel armour into battle.', ru: 'Рыцарь надел тяжелые стальные доспехи для битвы.' },
      { en: 'Police officers wear body armour for protection.', ru: 'Полицейские носят бронежилеты для защиты.' },
      { en: 'The tank has thick armour to resist bullets.', ru: 'У танка толстая броня, чтобы противостоять пулям.' },
      { en: 'He built a suit of armour for the movie.', ru: 'Он создал комплект доспехов для фильма.' }
    ]
),

createRichWord('c1_array', 'Array', '/əˈreɪ/', 'эрей', 'Массив / Множество', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Впечатляющая коллекция или ряд вещей.',
    '- Выбор: "Vast array" (Огромное множество)\n- Техника: "Solar array" (Солнечная батарея/массив)\n- Дисплей: "Array of colors" (Палитра цветов)',
    [
      { en: 'The store offers a vast array of products.', ru: 'Магазин предлагает огромный ассортимент продуктов.' },
      { en: 'He faced a bewildering array of choices.', ru: 'Он столкнулся с ошеломляющим множеством вариантов.' },
      { en: 'The solar array provides power for the station.', ru: 'Солнечная батарея обеспечивает станцию энергией.' },
      { en: 'There was an impressive array of dishes at the buffet.', ru: 'На шведском столе было впечатляющее разнообразие блюд.' }
    ]
),

createRichWord('c1_astonish', 'Astonish', '/əˈstɒnɪʃ/', 'эстониш', 'Изумлять', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Очень сильно удивить кого-то (сильнее, чем surprise).',
    '- Чувство: "Be astonished" (Быть изумленным)\n- Результат: "Astonish the world" (Изумить мир)\n- Фраза: "To my astonishment" (К моему изумлению)',
    [
      { en: 'Her talent for singing astonished everyone.', ru: 'Ее талант пения изумил всех.' },
      { en: 'I was astonished by the beauty of the landscape.', ru: 'Я был изумлен красотой пейзажа.' },
      { en: 'It astonishes me that he is still working there.', ru: 'Меня изумляет, что он все еще там работает.' },
      { en: 'The magician\'s tricks never fail to astonish the audience.', ru: 'Трюки фокусника никогда не перестают изумлять публику.' }
    ]
),

createRichWord('c1_astronomy', 'Astronomy', '/əˈstrɒnəmi/', 'эстронэми', 'Астрономия', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Научное изучение звезд, планет и вселенной.',
    '- Наука: "Study astronomy" (Изучать астрономию)\n- Хобби: "Amateur astronomy" (Любительская астрономия)\n- Инструмент: "Telescope for astronomy" (Телескоп для астрономии)',
    [
      { en: 'Astronomy helps us understand our place in the universe.', ru: 'Астрономия помогает нам понять наше место во вселенной.' },
      { en: 'He bought a telescope because he is interested in astronomy.', ru: 'Он купил телескоп, потому что интересуется астрономией.' },
      { en: 'Modern astronomy uses powerful computers.', ru: 'Современная астрономия использует мощные компьютеры.' },
      { en: 'She wants to study physics and astronomy at university.', ru: 'Она хочет изучать физику и астрономию в университете.' }
    ]
  ),
createRichWord('c1_attain', 'Attain', '/əˈteɪn/', 'этэйн', 'Достигать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Добиться успеха в достижении чего-либо (цели, уровня) после усилий.',
    '- Цель: "Attain a goal" (Достичь цели)\n- Уровень: "Attain a standard" (Достичь стандарта)\n- Возраст: "Attain the age" (Достичь возраста)',
    [
      { en: 'She worked hard to attain the position of director.', ru: 'Она усердно работала, чтобы достичь должности директора.' },
      { en: 'We need to clarify the objectives we wish to attain.', ru: 'Нам нужно прояснить цели, которых мы хотим достичь.' },
      { en: 'The car can attain a speed of 200 kilometers per hour.', ru: 'Машина может развивать (достигать) скорость 200 километров в час.' },
      { en: 'Only a few students attain the highest grades in this exam.', ru: 'Лишь немногие студенты достигают высших оценок на этом экзамене.' }
    ]
),

createRichWord('c1_attorney', 'Attorney', '/əˈtɜːni/', 'этёни', 'Адвокат / Юрист', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Юрист, который может представлять клиентов в суде (особенно в США).',
    '- Закон: "Defense attorney" (Адвокат защиты)\n- Власть: "Power of attorney" (Доверенность)\n- Должность: "District attorney" (Окружной прокурор)',
    [
      { en: 'You should consult an attorney before signing the contract.', ru: 'Вам следует проконсультироваться с юристом перед подписанием контракта.' },
      { en: 'The defense attorney argued that his client was innocent.', ru: 'Адвокат защиты утверждал, что его клиент невиновен.' },
      { en: 'She gave her son power of attorney to manage her finances.', ru: 'Она дала сыну доверенность на управление своими финансами.' },
      { en: 'He is a successful attorney working in New York City.', ru: 'Он успешный адвокат, работающий в Нью-Йорке.' }
    ]
),

createRichWord('c1_auction', 'Auction', '/ˈɔːkʃ(ə)n/', 'окшн', 'Аукцион', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Публичная распродажа, где товары продаются тому, кто предложит самую высокую цену.',
    '- Продажа: "Sell at auction" (Продать на аукционе)\n- Интернет: "Online auction" (Онлайн-аукцион)\n- Дом: "House auction" (Аукцион по продаже дома)',
    [
      { en: 'The painting was sold at auction for a million dollars.', ru: 'Картина была продана на аукционе за миллион долларов.' },
      { en: 'They bought the antique furniture at a local auction.', ru: 'Они купили антикварную мебель на местном аукционе.' },
      { en: 'The auction will take place next Saturday morning.', ru: 'Аукцион состоится в следующую субботу утром.' },
      { en: 'Many foreclosed houses are put up for auction by the bank.', ru: 'Многие изъятые дома выставляются банком на аукцион.' }
    ]
),

createRichWord('c1_authentic', 'Authentic', '/ɔːˈθentɪk/', 'осэнтик', 'Подлинный / Аутентичный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Настоящий, не поддельный; верный оригиналу.',
    '- Еда: "Authentic Italian food" (Настоящая итальянская еда)\n- Документ: "Authentic signature" (Подлинная подпись)\n- Вещь: "Authentic leather" (Натуральная кожа)',
    [
      { en: 'The restaurant serves authentic Japanese cuisine.', ru: 'Ресторан подает аутентичную японскую кухню.' },
      { en: 'Experts confirmed that the painting is authentic.', ru: 'Эксперты подтвердили, что картина подлинная.' },
      { en: 'We want to have an authentic experience while traveling.', ru: 'Мы хотим получить настоящий (аутентичный) опыт во время путешествия.' },
      { en: 'This is an authentic copy of the original declaration.', ru: 'Это подлинная копия оригинальной декларации.' }
    ]
),

createRichWord('c1_automobile', 'Automobile', '/ˈɔːtəməbiːl/', 'отэмэбил', 'Автомобиль', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Машина; формальное слово для обозначения "car" (особенно в США).',
    '- Индустрия: "Automobile industry" (Автомобильная промышленность)\n- Ремонт: "Automobile repair" (Ремонт автомобилей)\n- Клуб: "Automobile club" (Автомобильный клуб)',
    [
      { en: 'The automobile industry is facing a major crisis.', ru: 'Автомобильная промышленность сталкивается с серьезным кризисом.' },
      { en: 'He works as an engineer for a large automobile manufacturer.', ru: 'Он работает инженером у крупного производителя автомобилей.' },
      { en: 'The museum has a collection of vintage automobiles.', ru: 'В музее есть коллекция винтажных автомобилей.' },
      { en: 'Automobile accidents are a leading cause of injury.', ru: 'Автомобильные аварии являются ведущей причиной травматизма.' }
    ]
),

createRichWord('c1_await', 'Await', '/əˈweɪt/', 'эвэйт', 'Ожидать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Ждать чего-то (формальный синоним wait for).',
    '- Решение: "Await a decision" (Ожидать решения)\n- Прибытие: "Await arrival" (Ожидать прибытия)\n- Результат: "Await results" (Ожидать результатов)',
    [
      { en: 'We await your response to our proposal with interest.', ru: 'Мы с интересом ожидаем вашего ответа на наше предложение.' },
      { en: 'A warm welcome awaits you at our hotel.', ru: 'Теплый прием ожидает вас в нашем отеле.' },
      { en: 'The prisoner awaits trial in the county jail.', ru: 'Заключенный ожидает суда в окружной тюрьме.' },
      { en: 'Changes are awaiting approval from the board.', ru: 'Изменения ожидают одобрения от совета директоров.' }
    ]
),

createRichWord('c1_axe', 'Axe', '/æks/', 'экс', 'Топор / Сокращать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Инструмент для рубки дерева; или (как глагол/метафора) резкое сокращение (бюджета, рабочих мест).',
    '- Инструмент: "Chop with an axe" (Рубить топором)\n- Работа: "Get the axe" (Быть уволенным)\n- Бюджет: "Face the axe" (Столкнуться с сокращением)',
    [
      { en: 'He used a sharp axe to chop firewood for the winter.', ru: 'Он использовал острый топор, чтобы нарубить дров на зиму.' },
      { en: 'The company decided to axe five hundred jobs.', ru: 'Компания решила сократить пятьсот рабочих мест.' },
      { en: 'Many TV shows face the axe if ratings drop.', ru: 'Многие телешоу сталкиваются с закрытием (топором), если рейтинги падают.' },
      { en: 'She buried the hatchet, but kept the axe handy.', ru: 'Она зарыла топор войны, но держала топор под рукой (идиома/шутка).' }
    ]
),

createRichWord('c1_ballot', 'Ballot', '/ˈbælət/', 'бэлэт', 'Бюллетень / Голосование', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Лист бумаги для голосования; или сам процесс тайного голосования.',
    '- Выборы: "Cast a ballot" (Опустить бюллетень / проголосовать)\n- Бумага: "Ballot paper" (Избирательный бюллетень)\n- Ящик: "Ballot box" (Урна для голосования)',
    [
      { en: 'The union held a secret ballot to decide on the strike.', ru: 'Профсоюз провел тайное голосование, чтобы принять решение о забастовке.' },
      { en: 'Please mark your choice clearly on the ballot paper.', ru: 'Пожалуйста, четко отметьте свой выбор в избирательном бюллетене.' },
      { en: 'The ballot boxes were sealed and taken to the counting center.', ru: 'Урны для голосования были опечатаны и доставлены в центр подсчета.' },
      { en: 'He won the election after the second ballot.', ru: 'Он выиграл выборы после второго тура голосования.' }
    ]
),

createRichWord('c1_bankrupt', 'Bankrupt', '/ˈbæŋkrʌpt/', 'бэнкрапт', 'Банкрот', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Неспособный платить долги; разорившийся.',
    '- Финансы: "Go bankrupt" (Обанкротиться)\n- Закон: "Declare bankrupt" (Объявить банкротом)\n- Мораль: "Morally bankrupt" (Морально опустившийся)',
    [
      { en: 'The company went bankrupt during the economic crisis.', ru: 'Компания обанкротилась во время экономического кризиса.' },
      { en: 'He was declared bankrupt after losing all his money.', ru: 'Его объявили банкротом после потери всех денег.' },
      { en: 'The government rescued the banks to stop them going bankrupt.', ru: 'Правительство спасло банки, чтобы не дать им обанкротиться.' },
      { en: 'Critics described the policy as morally bankrupt.', ru: 'Критики назвали эту политику морально несостоятельной.' }
    ]
),

createRichWord('c1_barn', 'Barn', '/bɑːn/', 'бан', 'Амбар / Сарай', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большое сельскохозяйственное здание для хранения зерна или содержания животных.',
    '- Ферма: "Red barn" (Красный амбар)\n- Животные: "Dairy barn" (Коровник)\n- Преобразование: "Barn conversion" (Амбар, переделанный в жилье)',
    [
      { en: 'The farmer stores hay for the winter in the large barn.', ru: 'Фермер хранит сено на зиму в большом амбаре.' },
      { en: 'The owls nest in the roof of the old barn.', ru: 'Совы гнездятся под крышей старого сарая.' },
      { en: 'They converted the barn into a beautiful family home.', ru: 'Они перестроили амбар в красивый семейный дом.' },
      { en: 'The cows are kept in the barn during the cold nights.', ru: 'Коров держат в хлеву (амбаре) в холодные ночи.' }
    ]
),

createRichWord('c1_barrel', 'Barrel', '/ˈbærəl/', 'бэрэл', 'Бочка / Ствол', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Круглый контейнер с выпуклыми боками; или металлическая трубка оружия.',
    '- Емкость: "Oak barrel" (Дубовая бочка)\n- Нефть: "Barrel of oil" (Баррель нефти)\n- Оружие: "Gun barrel" (Ствол пистолета)',
    [
      { en: 'The wine is aged in oak barrels for several years.', ru: 'Вино выдерживается в дубовых бочках несколько лет.' },
      { en: 'The price of a barrel of oil has risen sharply.', ru: 'Цена барреля нефти резко выросла.' },
      { en: 'He looked down the barrel of the gun.', ru: 'Он посмотрел в ствол пистолета.' },
      { en: 'They rolled the heavy barrels onto the truck.', ru: 'Они закатили тяжелые бочки на грузовик.' }
    ]
),

createRichWord('c1_basin', 'Basin', '/ˈbeɪs(ə)n/', 'бэйсн', 'Раковина / Бассейн (реки)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Миска для умывания; или область земли, с которой вода стекает в реку.',
    '- Ванная: "Wash basin" (Умывальник)\n- География: "River basin" (Бассейн реки)\n- Посуда: "Plastic basin" (Пластиковый таз)',
    [
      { en: 'She filled the basin with warm water to wash her face.', ru: 'Она наполнила раковину теплой водой, чтобы умыть лицо.' },
      { en: 'The Amazon basin contains the world\'s largest rainforest.', ru: 'Бассейн Амазонки содержит самый большой в мире тропический лес.' },
      { en: 'Place the mixture in a basin and cover it with a cloth.', ru: 'Поместите смесь в миску и накройте тканью.' },
      { en: 'The boat was docked in the yacht basin.', ru: 'Лодка была пришвартована в гавани для яхт.' }
    ]
),

createRichWord('c1_bass', 'Bass', '/beɪs/', 'бэйс', 'Бас / Низкий тон', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Самый низкий мужской голос; или низкочастотный звук (в музыке).',
    '- Музыка: "Bass guitar" (Бас-гитара)\n- Звук: "Deep bass" (Глубокий бас)\n- Рыба: "Sea bass" (Морской окунь - произносится /bæs/)',
    [
      { en: 'He plays the bass guitar in a rock band.', ru: 'Он играет на бас-гитаре в рок-группе.' },
      { en: 'Turn up the bass on the stereo, I like the beat.', ru: 'Прибавь басы на стереосистеме, мне нравится ритм.' },
      { en: 'He sings in a deep bass voice in the choir.', ru: 'Он поет глубоким басом в хоре.' },
      { en: 'The song has a very catchy bass line.', ru: 'У песни очень запоминающаяся басовая партия.' }
    ]
),

createRichWord('c1_beast', 'Beast', '/biːst/', 'бист', 'Зверь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Крупное или опасное животное; или жестокий человек.',
    '- Сказка: "Beauty and the Beast" (Красавица и Чудовище)\n- Природа: "Wild beast" (Дикий зверь)\n- Характер: "You beast!" (Ах ты чудовище!)',
    [
      { en: 'A wild beast was heard roaming in the forest at night.', ru: 'Ночью в лесу слышали бродящего дикого зверя.' },
      { en: 'He acted like a beast when he was angry.', ru: 'Он вел себя как зверь, когда злился.' },
      { en: 'It is a beast of a car, very powerful and fast.', ru: 'Это зверь-машина, очень мощная и быстрая.' },
      { en: 'Mythological stories are full of strange beasts and monsters.', ru: 'Мифологические истории полны странных зверей и монстров.' }
    ]
),

createRichWord('c1_behalf', 'Behalf', '/bɪˈhɑːf/', 'бихаф', 'От имени', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'В интересах кого-то или как представитель кого-то (обычно "on behalf of").',
    '- Представление: "On my behalf" (От моего имени)\n- Выступление: "Speak on behalf" (Говорить от имени)\n- Работа: "Act on behalf" (Действовать от имени)',
    [
      { en: 'I am writing on behalf of my mother who is ill.', ru: 'Я пишу от имени моей матери, которая больна.' },
      { en: 'He accepted the award on behalf of the whole team.', ru: 'Он принял награду от имени всей команды.' },
      { en: 'The lawyer acted on behalf of the client.', ru: 'Адвокат действовал от имени клиента.' },
      { en: 'Don\'t worry on my behalf, I will be fine.', ru: 'Не волнуйся за меня (ради меня), я буду в порядке.' }
    ]
),

createRichWord('c1_belly', 'Belly', '/ˈbeli/', 'бэли', 'Живот', ProficiencyLevel.C1, 'noun', 'Low', 'Informal',
    'Желудок или область живота (более разговорное, чем stomach).',
    '- Тело: "Full belly" (Полный живот)\n- Танец: "Belly dance" (Танец живота)\n- Глагол: "Go belly up" (Обанкротиться/провалиться)',
    [
      { en: 'The baby was sleeping on its belly.', ru: 'Ребенок спал на животе.' },
      { en: 'He patted his belly after the large meal.', ru: 'Он похлопал себя по животу после плотной еды.' },
      { en: 'Belly dancing is popular in Middle Eastern culture.', ru: 'Танец живота популярен в ближневосточной культуре.' },
      { en: 'The company went belly up after just one year.', ru: 'Компания обанкротилась (пошла кверху брюхом) всего через год.' }
    ]
),

createRichWord('c1_bizarre', 'Bizarre', '/bɪˈzɑː/', 'биза', 'Причудливый / Странный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Очень странный или необычный.',
    '- Ситуация: "Bizarre situation" (Странная ситуация)\n- Поведение: "Bizarre behavior" (Причудливое поведение)\n- Совпадение: "Bizarre coincidence" (Странное совпадение)',
    [
      { en: 'She wore a bizarre outfit to the formal party.', ru: 'Она надела причудливый наряд на официальную вечеринку.' },
      { en: 'It was a bizarre coincidence that we met there.', ru: 'Это было странное совпадение, что мы встретились там.' },
      { en: 'The story had a very bizarre ending.', ru: 'У истории был очень странный конец.' },
      { en: 'He exhibited some bizarre behavior before he left.', ru: 'Он демонстрировал странное поведение перед уходом.' }
    ]
),

createRichWord('c1_blade', 'Blade', '/bleɪd/', 'блэйд', 'Лезвие', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Плоская режущая часть ножа, инструмента или оружия; или травинка.',
    '- Нож: "Sharp blade" (Острое лезвие)\n- Бритва: "Razor blade" (Лезвие бритвы)\n- Трава: "Blade of grass" (Травинка)',
    [
      { en: 'The blade of the knife was very sharp and shiny.', ru: 'Лезвие ножа было очень острым и блестящим.' },
      { en: 'He replaced the old razor blade with a new one.', ru: 'Он заменил старое лезвие бритвы на новое.' },
      { en: 'The helicopter blades spun faster and faster.', ru: 'Лопасти (лезвия) вертолета вращались все быстрее и быстрее.' },
      { en: 'She examined a single blade of grass under the microscope.', ru: 'Она рассматривала одну травинку под микроскопом.' }
    ]
),

createRichWord('c1_boast', 'Boast', '/bəʊst/', 'боуст', 'Хвастаться', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Говорить с чрезмерной гордостью о своих достижениях или владениях.',
    '- Разговор: "Boast about" (Хвастаться чем-то)\n- Обладание: "Boast a feature" (Гордиться особенностью/иметь)\n- Характер: "Don\'t mean to boast" (Не хочу хвастаться)',
    [
      { en: 'He likes to boast about how much money he makes.', ru: 'Он любит хвастаться тем, сколько денег он зарабатывает.' },
      { en: 'The hotel boasts a swimming pool and a spa.', ru: 'Отель гордится наличием бассейна и спа.' },
      { en: 'I don\'t want to boast, but I got the highest score.', ru: 'Не хочу хвастаться, но я получил высший балл.' },
      { en: 'Stop boasting and show us what you can actually do.', ru: 'Перестань хвастаться и покажи нам, что ты на самом деле умеешь.' }
    ]
),

createRichWord('c1_bolt', 'Bolt', '/bəʊlt/', 'боулт', 'Болт / Засов / Убегать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Металлический стержень для крепления; дверной засов; или резкое убегание.',
    '- Крепление: "Nuts and bolts" (Гайки и болты / основы)\n- Дверь: "Lock the bolt" (Запереть засов)\n- Погода: "Bolt of lightning" (Удар молнии)',
    [
      { en: 'He tightened the bolt with a wrench to fix the wheel.', ru: 'Он затянул болт гаечным ключом, чтобы починить колесо.' },
      { en: 'Make sure you slide the bolt across the door at night.', ru: 'Убедитесь, что вы задвинули засов на двери на ночь.' },
      { en: 'The horse bolted when it heard the loud noise.', ru: 'Лошадь понесла (резко убежала), когда услышала громкий шум.' },
      { en: 'A sudden bolt of lightning struck the tree.', ru: 'Внезапный удар молнии поразил дерево.' }
    ]
),

createRichWord('c1_bounds', 'Bounds', '/baʊndz/', 'баундз', 'Границы / Пределы', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Ограничения или пределы территории/поведения.',
    '- Зона: "Out of bounds" (Закрытая зона / Вне границ)\n- Предел: "Know no bounds" (Не знать границ)\n- Спорт: "Within bounds" (В пределах поля)',
    [
      { en: 'His enthusiasm for the project knows no bounds.', ru: 'Его энтузиазм по поводу проекта не знает границ.' },
      { en: 'The military base is out of bounds to civilians.', ru: 'Военная база закрыта для гражданских лиц (вне пределов доступа).' },
      { en: 'Please keep your comments within the bounds of politeness.', ru: 'Пожалуйста, держите свои комментарии в рамках приличия.' },
      { en: 'The ball went out of bounds, so the game stopped.', ru: 'Мяч ушел за пределы поля, поэтому игра остановилась.' }
    ]
),

createRichWord('c1_brass', 'Brass', '/brɑːs/', 'брас', 'Латунь / Духовые инструменты', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Желтый металл (сплав меди и цинка); или музыкальные инструменты из металла.',
    '- Материал: "Solid brass" (Цельная латунь)\n- Музыка: "Brass band" (Духовой оркестр)\n- Деталь: "Brass handle" (Латунная ручка)',
    [
      { en: 'The door handle is made of solid brass.', ru: 'Дверная ручка сделана из цельной латуни.' },
      { en: 'He plays the trumpet in a local brass band.', ru: 'Он играет на трубе в местном духовом оркестре.' },
      { en: 'Polishing the brass ornaments takes a long time.', ru: 'Полировка латунных украшений занимает много времени.' },
      { en: 'The military officers wore uniforms with brass buttons.', ru: 'Военные офицеры носили форму с латунными пуговицами.' }
    ]
),

createRichWord('c1_breeze', 'Breeze', '/briːz/', 'бриз', 'Бриз / Легкая задача', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Легкий ветерок; или что-то очень легкое для выполнения (идиома).',
    '- Погода: "Gentle breeze" (Легкий ветерок)\n- Легкость: "It was a breeze" (Это было проще простого)\n- Море: "Sea breeze" (Морской бриз)',
    [
      { en: 'A gentle breeze blew through the open window.', ru: 'Легкий ветерок дул в открытое окно.' },
      { en: 'The exam was a breeze; I finished it in hour.', ru: 'Экзамен был проще простого; я закончил его за час.' },
      { en: 'We enjoyed the cool sea breeze on the beach.', ru: 'Мы наслаждались прохладным морским бризом на пляже.' },
      { en: 'The leaves rustled in the evening breeze.', ru: 'Листья шелестели на вечернем ветру.' }
    ]
),

createRichWord('c1_briefed', 'Briefed', '/briːft/', 'брифт', 'Проинструктированный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Получивший информацию или инструкции (обычно Participle от глагола to brief).',
    '- Инструктаж: "Fully briefed" (Полностью проинструктирован)\n- Работа: "Briefed on the situation" (Введен в курс дела)\n- Команда: "Briefed the team" (Проинструктировал команду)',
    [
      { en: 'The president was fully briefed on the crisis this morning.', ru: 'Президент был полностью проинструктирован о кризисе сегодня утром.' },
      { en: 'Have you been briefed about your new duties yet?', ru: 'Вас уже ввели в курс ваших новых обязанностей?' },
      { en: 'The soldiers were briefed before the mission started.', ru: 'Солдаты были проинструктированы перед началом миссии.' },
      { en: 'I have briefed the manager on the project\'s progress.', ru: 'Я проинформировал менеджера о ходе выполнения проекта.' }
    ]
),

createRichWord('c1_broker', 'Broker', '/ˈbrəʊkə/', 'броукэ', 'Брокер / Маклер', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, который покупает и продает вещи (акции, страховки) для других.',
    '- Финансы: "Stock broker" (Биржевой брокер)\n- Недвижимость: "Real estate broker" (Агент по недвижимости - брокер)\n- Страхование: "Insurance broker" (Страховой брокер)',
    [
      { en: 'You need a broker to buy shares on the stock exchange.', ru: 'Вам нужен брокер, чтобы покупать акции на фондовой бирже.' },
      { en: 'The peace treaty was brokered by the United Nations.', ru: 'Мирный договор был заключен при посредничестве ООН (глагол).' },
      { en: 'He works as an insurance broker in the city.', ru: 'Он работает страховым брокером в городе.' },
      { en: 'The broker charges a commission for every transaction.', ru: 'Брокер взимает комиссию за каждую транзакцию.' }
    ]
),

createRichWord('c1_bruise', 'Bruise', '/bruːz/', 'бруз', 'Синяк / Ушиб', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Синяя или фиолетовая отметка на коже после удара; повреждение фрукта.',
    '- Травма: "Bad bruise" (Сильный ушиб)\n- Фрукт: "Bruised apple" (Побитое яблоко)\n- Чувства: "Bruised ego" (Задетое самолюбие)',
    [
      { en: 'He had a large purple bruise on his leg after the fall.', ru: 'У него был большой фиолетовый синяк на ноге после падения.' },
      { en: 'Don\'t eat that apple, it has a big bruise on it.', ru: 'Не ешь это яблоко, на нем большая вмятина (порча).' },
      { en: 'It is just a bruise, nothing is broken.', ru: 'Это просто ушиб, ничего не сломано.' },
      { en: 'His ego was bruised when she rejected his offer.', ru: 'Его самолюбие было задето, когда она отвергла его предложение.' }
    ]
),

createRichWord('c1_bulk', 'Bulk', '/bʌlk/', 'балк', 'Основная масса / Опт', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Большая часть чего-либо; большой размер или количество.',
    '- Количество: "In bulk" (Оптом / В большом количестве)\n- Часть: "The bulk of" (Основная часть)\n- Размер: "Great bulk" (Огромная масса)',
    [
      { en: 'We buy rice and pasta in bulk to save money.', ru: 'Мы покупаем рис и макароны оптом, чтобы сэкономить деньги.' },
      { en: 'The bulk of the work has already been completed.', ru: 'Основная часть работы уже выполнена.' },
      { en: 'Despite his bulk, he moved remarkably quickly.', ru: 'Несмотря на свою массивность, он двигался удивительно быстро.' },
      { en: 'It is cheaper to ship goods in bulk containers.', ru: 'Дешевле перевозить товары в навалочных контейнерах.' }
    ]
  ),
createRichWord('c1_abbey', 'Abbey', '/ˈæbi/', 'эби', 'Аббатство', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большая церковь или группа зданий, где живут монахи или монахини.',
    '- Религия: "Westminster Abbey" (Вестминстерское аббатство)\n- История: "Ruined abbey" (Разрушенное аббатство)\n- Место: "Visit the abbey" (Посетить аббатство)',
    [
      { en: 'The monks have lived in this abbey for centuries.', ru: 'Монахи живут в этом аббатстве веками.' },
      { en: 'Westminster Abbey is one of London\'s most famous landmarks.', ru: 'Вестминстерское аббатство — одна из самых известных достопримечательностей Лондона.' },
      { en: 'We visited the ruins of a medieval abbey on the hill.', ru: 'Мы посетили руины средневекового аббатства на холме.' },
      { en: 'The abbey was destroyed by fire in the sixteenth century.', ru: 'Аббатство было уничтожено пожаром в шестнадцатом веке.' }
    ]
),

createRichWord('c1_abdomen', 'Abdomen', '/ˈæbdəmən/', 'эбдэмэн', 'Брюшная полость / Живот', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Нижняя часть тела человека или животного, содержащая желудок и другие органы.',
    '- Медицина: "Pain in the abdomen" (Боль в животе)\n- Тело: "Lower abdomen" (Нижняя часть живота)\n- Упражнения: "Abdominal muscles" (Мышцы пресса)',
    [
      { en: 'He complained of a sharp pain in his lower abdomen.', ru: 'Он жаловался на острую боль в нижней части живота.' },
      { en: 'The doctor examined the patient\'s abdomen carefully.', ru: 'Врач внимательно осмотрел живот пациента.' },
      { en: 'In insects, the abdomen is the rear part of the body.', ru: 'У насекомых брюшко — это задняя часть тела.' },
      { en: 'Surgery was required to repair the injury to his abdomen.', ru: 'Потребовалась операция, чтобы вылечить травму его брюшной полости.' }
    ]
),

createRichWord('c1_accessory', 'Accessory', '/əkˈsesəri/', 'эксесэри', 'Аксессуар', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Вещь, которую можно добавить к чему-то другому (одежде, машине), чтобы сделать это полезнее или красивее.',
    '- Мода: "Fashion accessory" (Модный аксессуар)\n- Машина: "Car accessories" (Автомобильные аксессуары)\n- Право: "Accessory to a crime" (Соучастник преступления)',
    [
      { en: 'She wore a scarf as a colorful accessory to her outfit.', ru: 'Она носила шарф как красочный аксессуар к своему наряду.' },
      { en: 'The store sells bags, belts, and other fashion accessories.', ru: 'Магазин продает сумки, ремни и другие модные аксессуары.' },
      { en: 'You can buy various accessories for your camera online.', ru: 'Вы можете купить различные аксессуары для вашей камеры онлайн.' },
      { en: 'He was charged as an accessory to the robbery.', ru: 'Ему было предъявлено обвинение как соучастнику ограбления.' }
    ]
),

createRichWord('c1_aerial', 'Aerial', '/ˈeəriəl/', 'ээриэл', 'Воздушный / Антенна', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Происходящий в воздухе (прил.); также "антенна" (сущ.).',
    '- Вид: "Aerial view" (Вид с воздуха)\n- Фото: "Aerial photography" (Аэрофотосъемка)\n- Атака: "Aerial attack" (Воздушная атака)',
    [
      { en: 'We took some amazing aerial photos from the helicopter.', ru: 'Мы сделали несколько потрясающих аэрофотоснимков с вертолета.' },
      { en: 'The aerial view of the city shows how large it really is.', ru: 'Вид на город с воздуха показывает, насколько он на самом деле велик.' },
      { en: 'Birds are masters of aerial acrobatics.', ru: 'Птицы — мастера воздушной акробатики.' },
      { en: 'The roof was damaged during the aerial bombardment.', ru: 'Крыша была повреждена во время воздушной бомбардировки.' }
    ]
),

createRichWord('c1_aggravate', 'Aggravate', '/ˈæɡrəveɪt/', 'эгрэвейт', 'Усугублять / Раздражать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сделать плохую ситуацию или болезнь хуже; или (разг.) злить кого-то.',
    '- Проблема: "Aggravate the situation" (Усугубить ситуацию)\n- Боль: "Aggravate an injury" (Усугубить травму)\n- Человек: "Don\'t aggravate him" (Не зли его)',
    [
      { en: 'Running on a sore leg will only aggravate the injury.', ru: 'Бег на больной ноге только усугубит травму.' },
      { en: 'His rude comments aggravated the tense situation.', ru: 'Его грубые комментарии усугубили напряженную ситуацию.' },
      { en: 'Pollution can aggravate asthma symptoms.', ru: 'Загрязнение может усугубить симптомы астмы.' },
      { en: 'Stop aggravating your brother while he is studying.', ru: 'Перестань злить брата, пока он учится.' }
    ]
),

createRichWord('c1_aggregate', 'Aggregate', '/ˈæɡrɪɡət/', 'эгригэт', 'Совокупный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Сформированный путем сложения отдельных частей; общий.',
    '- Статистика: "Aggregate demand" (Совокупный спрос)\n- Счет: "Aggregate score" (Общий счет)\n- Сумма: "In the aggregate" (В совокупности)',
    [
      { en: 'The aggregate value of the company\'s assets is huge.', ru: 'Совокупная стоимость активов компании огромна.' },
      { en: 'They won the match with an aggregate score of 4-2.', ru: 'Они выиграли матч с общим счетом 4-2.' },
      { en: 'We need to analyze the aggregate data from all regions.', ru: 'Нам нужно проанализировать совокупные данные из всех регионов.' },
      { en: 'The team performed well in the aggregate.', ru: 'Команда выступила хорошо в целом (в совокупности).' }
    ]
),

createRichWord('c1_aide', 'Aide', '/eɪd/', 'эйд', 'Помощник', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, чья работа заключается в помощи важному лицу, особенно в политике.',
    '- Политика: "Presidential aide" (Помощник президента)\n- Работа: "Senior aide" (Старший помощник)\n- Отношения: "Close aide" (Близкий помощник)',
    [
      { en: 'A close aide to the Prime Minister resigned yesterday.', ru: 'Близкий помощник премьер-министра ушел в отставку вчера.' },
      { en: 'The senator discussed the speech with his top aides.', ru: 'Сенатор обсудил речь со своими главными помощниками.' },
      { en: 'She works as a legal aide in a law firm.', ru: 'Она работает помощником юриста в юридической фирме.' },
      { en: 'He sent an aide to deliver the confidential message.', ru: 'Он послал помощника доставить конфиденциальное сообщение.' }
    ]
),

createRichWord('c1_airways', 'Airways', '/ˈeəweɪz/', 'ээвейз', 'Дыхательные пути', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Проходы в горле и легких, через которые вы дышите.',
    '- Медицина: "Blocked airways" (Заблокированные дыхательные пути)\n- Здоровье: "Clear airways" (Чистые дыхательные пути)\n- Воспаление: "Inflamed airways" (Воспаленные дыхательные пути)',
    [
      { en: 'Smoke can irritate your airways and cause coughing.', ru: 'Дым может раздражать дыхательные пути и вызывать кашель.' },
      { en: 'The doctor checked if the patient\'s airways were clear.', ru: 'Врач проверил, чисты ли дыхательные пути пациента.' },
      { en: 'Asthma causes the airways to narrow and swell.', ru: 'Астма вызывает сужение и отек дыхательных путей.' },
      { en: 'In an emergency, ensure the victim\'s airways are open.', ru: 'В экстренной ситуации убедитесь, что дыхательные пути пострадавшего открыты.' }
    ]
),

createRichWord('c1_altar', 'Altar', '/ˈɔːltə/', 'олтэ', 'Алтарь', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Святой стол в церкви или храме, используемый для религиозных церемоний.',
    '- Церковь: "High altar" (Главный алтарь)\n- Свадьба: "Lead to the altar" (Вести к алтарю)\n- Жертва: "Sacrifice on the altar" (Жертвоприношение на алтаре)',
    [
      { en: 'The couple stood before the altar to exchange vows.', ru: 'Пара стояла перед алтарем, чтобы обменяться клятвами.' },
      { en: 'Candles and flowers were placed on the altar.', ru: 'На алтарь были помещены свечи и цветы.' },
      { en: 'The priest bowed in front of the altar.', ru: 'Священник поклонился перед алтарем.' },
      { en: 'They built a small stone altar in the woods.', ru: 'Они построили маленький каменный алтарь в лесу.' }
    ]
),

createRichWord('c1_altitude', 'Altitude', '/ˈæltɪtjuːd/', 'элтитьюд', 'Высота', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Высота объекта над уровнем моря или землей.',
    '- Полет: "Cruising altitude" (Крейсерская высота)\n- Горы: "High altitude" (Большая высота)\n- Измерение: "Lose altitude" (Терять высоту)',
    [
      { en: 'The plane is flying at an altitude of 30,000 feet.', ru: 'Самолет летит на высоте 30 000 футов.' },
      { en: 'Breathing can be difficult at high altitudes due to thin air.', ru: 'На больших высотах дыхание может быть затруднено из-за разреженного воздуха.' },
      { en: 'We need to gain altitude to fly over the mountains.', ru: 'Нам нужно набрать высоту, чтобы перелететь через горы.' },
      { en: 'The pilot announced our current altitude and speed.', ru: 'Пилот объявил нашу текущую высоту и скорость.' }
    ]
),

createRichWord('c1_ample', 'Ample', '/ˈæmp(ə)l/', 'эмпл', 'Обильный / Достаточный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Более чем достаточный; много места или времени.',
    '- Время: "Ample time" (Достаточно времени)\n- Место: "Ample room" (Много места)\n- Доказательства: "Ample evidence" (Обильные доказательства)',
    [
      { en: 'There is ample space in the car for all your luggage.', ru: 'В машине достаточно места для всего вашего багажа.' },
      { en: 'You will have ample time to finish the exam.', ru: 'У вас будет предостаточно времени, чтобы закончить экзамен.' },
      { en: 'We have ample evidence to prove his innocence.', ru: 'У нас есть исчерпывающие доказательства его невиновности.' },
      { en: 'The garden provides ample opportunity for relaxation.', ru: 'Сад предоставляет широкие возможности для отдыха.' }
    ]
),

createRichWord('c1_amplify', 'Amplify', '/ˈæmplɪfaɪ/', 'эмплифай', 'Усиливать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Сделать звук громче; или добавить деталей в историю.',
    '- Звук: "Amplify sound" (Усилить звук)\n- Сигнал: "Amplify signal" (Усилить сигнал)\n- Эффект: "Amplify the effect" (Усилить эффект)',
    [
      { en: 'Microphones are used to amplify the singer\'s voice.', ru: 'Микрофоны используются для усиления голоса певца.' },
      { en: 'Social media can amplify fake news very quickly.', ru: 'Социальные сети могут очень быстро распространять (усиливать) фейковые новости.' },
      { en: 'Please amplify on your earlier statement.', ru: 'Пожалуйста, поясните (дополните) ваше предыдущее заявление.' },
      { en: 'The music was amplified by huge speakers.', ru: 'Музыка усиливалась огромными динамиками.' }
    ]
),

createRichWord('c1_analogy', 'Analogy', '/əˈnælədʒi/', 'энэлэджи', 'Аналогия', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Сравнение двух вещей, показывающее их сходство.',
    '- Сравнение: "Draw an analogy" (Провести аналогию)\n- Пример: "By analogy" (По аналогии)\n- Объяснение: "Use an analogy" (Использовать аналогию)',
    [
      { en: 'The teacher used an analogy to explain the complex concept.', ru: 'Учитель использовал аналогию, чтобы объяснить сложную концепцию.' },
      { en: 'He drew an analogy between the human heart and a pump.', ru: 'Он провел аналогию между человеческим сердцем и насосом.' },
      { en: 'By analogy, if one team can do it, so can we.', ru: 'По аналогии, если одна команда может это сделать, то и мы сможем.' },
      { en: 'It is often helpful to explain computers using analogies.', ru: 'Часто полезно объяснять компьютеры, используя аналогии.' }
    ]
),

createRichWord('c1_analytic', 'Analytic', '/ˌænəˈlɪtɪk/', 'энэлитик', 'Аналитический', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Использующий логический анализ или разделение на части.',
    '- Ум: "Analytic mind" (Аналитический ум)\n- Подход: "Analytic approach" (Аналитический подход)\n- Навыки: "Analytic skills" (Аналитические навыки)',
    [
      { en: 'She has a very analytic mind and solves problems easily.', ru: 'У нее очень аналитический склад ума, и она легко решает проблемы.' },
      { en: 'We need to take a more analytic approach to this data.', ru: 'Нам нужно применить более аналитический подход к этим данным.' },
      { en: 'Analytic geometry connects algebra with geometry.', ru: 'Аналитическая геометрия связывает алгебру с геометрией.' },
      { en: 'He prefers analytic philosophy to continental philosophy.', ru: 'Он предпочитает аналитическую философию континентальной.' }
    ]
),

createRichWord('c1_anatomy', 'Anatomy', '/əˈnætəmi/', 'энэтэми', 'Анатомия', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Наука о строении тела; или само строение.',
    '- Наука: "Human anatomy" (Анатомия человека)\n- Учеба: "Study anatomy" (Изучать анатомию)\n- Части: "Anatomy of the eye" (Анатомия глаза)',
    [
      { en: 'Medical students must study human anatomy in detail.', ru: 'Студенты-медики должны детально изучать анатомию человека.' },
      { en: 'We learned about the anatomy of a frog in biology class.', ru: 'Мы узнали об анатомии лягушки на уроке биологии.' },
      { en: 'Leonardo da Vinci drew detailed sketches of anatomy.', ru: 'Леонардо да Винчи делал детальные наброски анатомии.' },
      { en: 'Understanding anatomy is crucial for a surgeon.', ru: 'Понимание анатомии имеет решающее значение для хирурга.' }
    ]
),

createRichWord('c1_antibiotic', 'Antibiotic', '/ˌæntibaɪˈɒtɪk/', 'энтибайотэк', 'Антибиотик', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Лекарство, которое убивает бактерии и лечит инфекции.',
    '- Медицина: "Take antibiotics" (Принимать антибиотики)\n- Назначение: "Prescribe antibiotics" (Выписать антибиотики)\n- Эффект: "Antibiotic resistance" (Устойчивость к антибиотикам)',
    [
      { en: 'The doctor prescribed antibiotics for my throat infection.', ru: 'Врач прописал антибиотики от моей инфекции горла.' },
      { en: 'You must finish the full course of antibiotics.', ru: 'Вы должны пропить полный курс антибиотиков.' },
      { en: 'Overuse of antibiotics makes bacteria stronger.', ru: 'Чрезмерное использование антибиотиков делает бактерии сильнее.' },
      { en: 'Antibiotics are ineffective against viral infections like flu.', ru: 'Антибиотики неэффективны против вирусных инфекций, таких как грипп.' }
    ]
),

createRichWord('c1_apparatus', 'Apparatus', '/ˌæpəˈreɪtəs/', 'эпэрейтэс', 'Аппарат / Оборудование', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Комплект оборудования или инструментов для определенной цели; или сложная структура организации.',
    '- Наука: "Lab apparatus" (Лабораторное оборудование)\n- Спорт: "Gymnastics apparatus" (Гимнастический снаряд)\n- Система: "State apparatus" (Государственный аппарат)',
    [
      { en: 'The divers checked their breathing apparatus before diving.', ru: 'Дайверы проверили свои дыхательные аппараты перед погружением.' },
      { en: 'The laboratory is filled with complex scientific apparatus.', ru: 'Лаборатория заполнена сложным научным оборудованием.' },
      { en: 'Gymnasts perform on various pieces of apparatus.', ru: 'Гимнасты выступают на различных снарядах.' },
      { en: 'The state security apparatus is very powerful.', ru: 'Аппарат государственной безопасности очень мощен.' }
    ]
),

createRichWord('c1_applaud', 'Applaud', '/əˈplɔːd/', 'эплод', 'Аплодировать', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Хлопать в ладоши в знак одобрения; или хвалить решение.',
    '- Концерт: "Applaud the performance" (Аплодировать выступлению)\n- Мнение: "Applaud the decision" (Приветствовать решение)\n- Люди: "Audience applauded" (Зрители аплодировали)',
    [
      { en: 'The audience stood up to applaud the amazing singer.', ru: 'Зрители встали, чтобы поаплодировать потрясающему певцу.' },
      { en: 'I applaud your courage in speaking out against injustice.', ru: 'Я приветствую вашу смелость высказаться против несправедливости.' },
      { en: 'Everyone applauded when the winner was announced.', ru: 'Все зааплодировали, когда объявили победителя.' },
      { en: 'We should applaud their efforts to improve the school.', ru: 'Мы должны похвалить их усилия по улучшению школы.' }
    ]
),

createRichWord('c1_apprentice', 'Apprentice', '/əˈprentɪs/', 'эпрентис', 'Ученик (подмастерье)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Молодой человек, который работает на мастера, чтобы научиться профессии.',
    '- Работа: "Electrician apprentice" (Ученик электрика)\n- Статус: "Become an apprentice" (Стать подмастерьем)\n- Обучение: "Apprentice training" (Обучение учеников)',
    [
      { en: 'He started working as an apprentice carpenter at age sixteen.', ru: 'Он начал работать учеником плотника в шестнадцать лет.' },
      { en: 'The apprentice learns valuable skills from the master.', ru: 'Ученик перенимает ценные навыки у мастера.' },
      { en: 'It takes years to move from apprentice to expert.', ru: 'Требуются годы, чтобы пройти путь от ученика до эксперта.' },
      { en: 'Donald Trump hosted a show called "The Apprentice".', ru: 'Дональд Трамп вел шоу под названием "Ученик".' }
    ]
),

createRichWord('c1_artery', 'Artery', '/ˈɑːtəri/', 'атэри', 'Артерия', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Кровеносный сосуд, несущий кровь от сердца; или главная дорога.',
    '- Тело: "Main artery" (Главная артерия)\n- Болезнь: "Blocked artery" (Закупоренная артерия)\n- Дорога: "Traffic artery" (Транспортная магистраль)',
    [
      { en: 'The blocked artery caused him to have a heart attack.', ru: 'Закупоренная артерия стала причиной сердечного приступа.' },
      { en: 'Arteries carry oxygen-rich blood to the body\'s tissues.', ru: 'Артерии несут обогащенную кислородом кровь к тканям тела.' },
      { en: 'This road is a major artery connecting the two cities.', ru: 'Эта дорога — главная артерия, соединяющая два города.' },
      { en: 'High cholesterol can damage your arteries over time.', ru: 'Высокий холестерин может со временем повредить ваши артерии.' }
    ]
),

createRichWord('c1_ascend', 'Ascend', '/əˈsend/', 'эсэнд', 'Подниматься / Восходить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Двигаться вверх; или подниматься на трон/в должности.',
    '- Движение: "Ascend the stairs" (Подниматься по лестнице)\n- Власть: "Ascend the throne" (Взойти на трон)\n- Гора: "Ascend a mountain" (Восходить на гору)',
    [
      { en: 'They slowly ascended the steep mountain path.', ru: 'Они медленно поднимались по крутой горной тропе.' },
      { en: 'The queen ascended the throne in 1952.', ru: 'Королева взошла на престол в 1952 году.' },
      { en: 'Smoke ascended from the chimney into the sky.', ru: 'Дым поднимался из трубы в небо.' },
      { en: 'He ascended to the position of CEO after many years.', ru: 'Он поднялся до должности генерального директора спустя много лет.' }
    ]
),

createRichWord('c1_ass', 'Ass', '/æs/', 'эс', 'Осел / Глупец', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Животное, похожее на лошадь (осел); или (разг.) глупый человек.',
    '- Животное: "Stubborn as an ass" (Упрямый как осел)\n- Оскорбление: "Don\'t be an ass" (Не будь ослом/дураком)\n- Идиома: "Make an ass of yourself" (Выставить себя дураком)',
    [
      { en: 'The farmer used an ass to carry heavy loads.', ru: 'Фермер использовал осла для перевозки тяжелых грузов.' },
      { en: 'Don\'t be such an ass, listen to reason.', ru: 'Не будь таким ослом (дураком), прислушайся к разуму.' },
      { en: 'He made a complete ass of himself at the party.', ru: 'Он выставил себя полным идиотом на вечеринке.' },
      { en: 'In stories, the ass is often portrayed as stubborn.', ru: 'В рассказах осел часто изображается упрямым.' }
    ]
),

createRichWord('c1_audible', 'Audible', '/ˈɔːdəb(ə)l/', 'одэбл', 'Слышимый', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Достаточно громкий, чтобы его можно было услышать.',
    '- Звук: "Barely audible" (Едва слышимый)\n- Речь: "Clearly audible" (Четко слышимый)\n- Сигнал: "Audible signal" (Звуковой сигнал)',
    [
      { en: 'Her voice was barely audible above the noise.', ru: 'Ее голос был едва слышен из-за шума.' },
      { en: 'The sound of the explosion was audible miles away.', ru: 'Звук взрыва был слышен за мили отсюда.' },
      { en: 'He let out an audible sigh of relief.', ru: 'Он издал слышимый вздох облегчения.' },
      { en: 'Make sure the alarm is audible in all rooms.', ru: 'Убедитесь, что сигнализация слышна во всех комнатах.' }
    ]
  ),
createRichWord('c1_authoritarian', 'Authoritarian', '/ɔːˌθɒrɪˈteəriən/', 'осоритээриэн', 'Авторитарный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Требующий полного послушания; ограничивающий свободу.',
    '- Власть: "Authoritarian regime" (Авторитарный режим)\n- Стиль: "Authoritarian parenting" (Авторитарное воспитание)\n- Лидер: "Authoritarian leader" (Авторитарный лидер)',
    [
      { en: 'The country suffered under an authoritarian regime for decades.', ru: 'Страна десятилетиями страдала от авторитарного режима.' },
      { en: 'His father was very authoritarian and strict.', ru: 'Его отец был очень авторитарным и строгим.' },
      { en: 'Authoritarian governments do not allow free speech.', ru: 'Авторитарные правительства не допускают свободы слова.' },
      { en: 'They rebelled against the authoritarian rule.', ru: 'Они восстали против авторитарного правления.' }
    ]
),

createRichWord('c1_autonomous', 'Autonomous', '/ɔːˈtɒnəməs/', 'отонэмэс', 'Автономный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Независимый и имеющий право управлять собой.',
    '- Регион: "Autonomous region" (Автономный регион)\n- Техника: "Autonomous vehicle" (Беспилотный автомобиль)\n- Личность: "Autonomous individual" (Независимая личность)',
    [
      { en: 'Catalonia is an autonomous region within Spain.', ru: 'Каталония — это автономный регион в составе Испании.' },
      { en: 'Autonomous vehicles will change the future of transport.', ru: 'Автономные (беспилотные) автомобили изменят будущее транспорта.' },
      { en: 'The university is an autonomous institution.', ru: 'Университет является автономным учреждением.' },
      { en: 'They want to make the department more autonomous.', ru: 'Они хотят сделать отдел более автономным.' }
    ]
),

createRichWord('c1_awe', 'Awe', '/ɔː/', 'о', 'Трепет / Благоговение', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Чувство большого уважения, смешанного со страхом или удивлением.',
    '- Чувство: "In awe" (В трепете/восторге)\n- Взгляд: "Gaze in awe" (Смотреть с благоговением)\n- Событие: "Inspire awe" (Внушать трепет)',
    [
      { en: 'We stood in awe of the magnificent cathedral.', ru: 'Мы стояли в благоговении перед великолепным собором.' },
      { en: 'The sheer size of the mountain filled me with awe.', ru: 'Огромный размер горы наполнил меня трепетом.' },
      { en: 'He watched in awe as the spaceship launched.', ru: 'Он с трепетом наблюдал, как взлетает космический корабль.' },
      { en: 'Her performance left the audience in awe.', ru: 'Ее выступление оставило публику в восторге (трепете).' }
    ]
),

createRichWord('c1_axis', 'Axis', '/ˈæksɪs/', 'эксис', 'Ось', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Воображаемая линия, вокруг которой вращается тело.',
    '- Земля: "Earth\'s axis" (Ось Земли)\n- График: "X axis" (Ось X)\n- Вращение: "Spin on axis" (Вращаться вокруг оси)',
    [
      { en: 'The Earth rotates on its axis once every 24 hours.', ru: 'Земля вращается вокруг своей оси каждые 24 часа.' },
      { en: 'The political axis has shifted in recent years.', ru: 'Политическая ось сместилась в последние годы.' },
      { en: 'Please plot the time on the horizontal axis.', ru: 'Пожалуйста, отметьте время на горизонтальной оси.' },
      { en: 'The wheel turns around a central axis.', ru: 'Колесо вращается вокруг центральной оси.' }
    ]
),

createRichWord('c1_bail', 'Bail', '/beɪl/', 'бэйл', 'Залог', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Деньги, заплаченные суду, чтобы обвиняемый мог оставаться на свободе до суда.',
    '- Суд: "Release on bail" (Освободить под залог)\n- Действие: "Grant bail" (Предоставить залог)\n- Человек: "Jump bail" (Скрыться от суда, нарушив залог)',
    [
      { en: 'He was released on bail pending his trial.', ru: 'Он был освобожден под залог в ожидании суда.' },
      { en: 'The judge set bail at one million dollars.', ru: 'Судья установил залог в один миллион долларов.' },
      { en: 'She couldn\'t afford to pay the bail.', ru: 'Она не могла позволить себе заплатить залог.' },
      { en: 'His father posted bail for him.', ru: 'Его отец внес за него залог.' }
    ]
),

createRichWord('c1_battalion', 'Battalion', '/bəˈtæljən/', 'бэтэлиэн', 'Батальон', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Крупное подразделение армии, состоящее из нескольких рот.',
    '- Армия: "Infantry battalion" (Пехотный батальон)\n- Размер: "Whole battalion" (Целый батальон)\n- Действие: "Join a battalion" (Вступить в батальон)',
    [
      { en: 'The entire battalion was sent to the front line.', ru: 'Весь батальон был отправлен на передовую.' },
      { en: 'He commands a battalion of five hundred soldiers.', ru: 'Он командует батальоном из пятисот солдат.' },
      { en: 'Reinforcements arrived from another battalion.', ru: 'Прибыло подкрепление из другого батальона.' },
      { en: 'The battalion marched through the city streets.', ru: 'Батальон прошел маршем по улицам города.' }
    ]
),

createRichWord('c1_beneficiary', 'Beneficiary', '/benɪˈfɪʃəri/', 'бенифишэри', 'Бенефициар / Получатель', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек или группа, которые получают выгоду от чего-то (например, наследство).',
    '- Наследство: "Main beneficiary" (Главный наследник/бенефициар)\n- Помощь: "Beneficiary of aid" (Получатель помощи)\n- Завещание: "Named as beneficiary" (Назван бенефициаром)',
    [
      { en: 'She is the sole beneficiary of her father\'s will.', ru: 'Она является единственным бенефициаром завещания своего отца.' },
      { en: 'The poor are the main beneficiaries of this charity.', ru: 'Бедные являются основными получателями помощи этой благотворительной организации.' },
      { en: 'Who will be the beneficiary of the insurance policy?', ru: 'Кто будет бенефициаром страхового полиса?' },
      { en: 'The new law makes small businesses the primary beneficiaries.', ru: 'Новый закон делает малый бизнес основным выгодополучателем.' }
    ]
),

createRichWord('c1_bewilder', 'Bewilder', '/bɪˈwɪldə/', 'бивиледэ', 'Сбивать с толку', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Полностью запутать кого-то.',
    '- Состояние: "Totally bewildered" (Полностью сбитый с толку)\n- Взгляд: "Bewildered look" (Растерянный взгляд)\n- Действие: "Bewilder the public" (Запутать общественность)',
    [
      { en: 'The complex instructions completely bewildered me.', ru: 'Сложные инструкции полностью сбили меня с толку.' },
      { en: 'She looked bewildered by the strange question.', ru: 'Она выглядела сбитой с толку странным вопросом.' },
      { en: 'The sudden change in plans bewildered everyone.', ru: 'Внезапное изменение планов всех озадачило.' },
      { en: 'He stood there, bewildered and unsure what to do.', ru: 'Он стоял там, растерянный и неуверенный, что делать.' }
    ]
),

createRichWord('c1_bilateral', 'Bilateral', '/baɪˈlæt(ə)rəl/', 'байлэтэрэл', 'Двусторонний', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Затрагивающий две стороны или страны.',
    '- Политика: "Bilateral agreement" (Двустороннее соглашение)\n- Отношения: "Bilateral relations" (Двусторонние отношения)\n- Переговоры: "Bilateral talks" (Двусторонние переговоры)',
    [
      { en: 'The two countries signed a bilateral trade agreement.', ru: 'Две страны подписали двустороннее торговое соглашение.' },
      { en: 'Bilateral relations have improved recently.', ru: 'Двусторонние отношения улучшились в последнее время.' },
      { en: 'The meeting focused on bilateral issues involving security.', ru: 'Встреча была сосредоточена на двусторонних вопросах безопасности.' },
      { en: 'This condition requires bilateral surgery on both knees.', ru: 'Это состояние требует двусторонней операции на обоих коленях.' }
    ]
),

createRichWord('c1_bleak', 'Bleak', '/bliːk/', 'блик', 'Мрачный / Унылый', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Холодный и неприятный (о месте); или не дающий надежды (о ситуации).',
    '- Погода: "Bleak winter" (Суровая зима)\n- Будущее: "Bleak outlook" (Мрачные перспективы)\n- Место: "Bleak landscape" (Унылый пейзаж)',
    [
      { en: 'The future looks bleak for the small company.', ru: 'Будущее выглядит мрачным для маленькой компании.' },
      { en: 'It was a bleak and windy day on the coast.', ru: 'Это был унылый и ветреный день на побережье.' },
      { en: 'The report paints a bleak picture of the economy.', ru: 'Отчет рисует мрачную картину экономики.' },
      { en: 'Despite the bleak situation, he remained optimistic.', ru: 'Несмотря на мрачную ситуацию, он оставался оптимистом.' }
    ]
),

createRichWord('c1_blockade', 'Blockade', '/blɒˈkeɪd/', 'блокейд', 'Блокада', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Окружение места армией или кораблями для предотвращения входа и выхода людей или товаров.',
    '- Война: "Naval blockade" (Морская блокада)\n- Действие: "Impose a blockade" (Ввести блокаду)\n- Результат: "Break the blockade" (Прорвать блокаду)',
    [
      { en: 'The navy set up a blockade to stop weapon supplies.', ru: 'Флот установил блокаду, чтобы остановить поставки оружия.' },
      { en: 'The city suffered greatly during the long blockade.', ru: 'Город сильно пострадал во время долгой блокады.' },
      { en: 'They tried to run the blockade with small boats.', ru: 'Они пытались прорвать блокаду на маленьких лодках.' },
      { en: 'The economic blockade crippled the country\'s industry.', ru: 'Экономическая блокада парализовала промышленность страны.' }
    ]
),

createRichWord('c1_blunt', 'Blunt', '/blʌnt/', 'блант', 'Тупой / Прямолинейный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Не острый (о ноже); или очень прямой и честный, даже если это грубо (о человеке).',
    '- Предмет: "Blunt knife" (Тупой нож)\n- Речь: "To be blunt" (Говоря прямо)\n- Характер: "Blunt refusal" (Резкий отказ)',
    [
      { en: 'This pencil is blunt, I need to sharpen it.', ru: 'Этот карандаш тупой, мне нужно его заточить.' },
      { en: 'To be blunt, your work is not good enough.', ru: 'Говоря прямо, ваша работа недостаточно хороша.' },
      { en: 'He suffered a blow from a blunt instrument.', ru: 'Он получил удар тупым предметом.' },
      { en: 'Her blunt manner often offends people.', ru: 'Ее прямолинейная манера часто обижает людей.' }
    ]
),

createRichWord('c1_botany', 'Botany', '/ˈbɒtəni/', 'ботъэни', 'Ботаника', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Научное изучение растений.',
    '- Наука: "Study botany" (Изучать ботанику)\n- Учеба: "Botany class" (Урок ботаники)\n- Эксперт: "Professor of botany" (Профессор ботаники)',
    [
      { en: 'She has a degree in botany and loves flowers.', ru: 'У нее есть степень по ботанике, и она любит цветы.' },
      { en: 'Botany involves classifying different types of plants.', ru: 'Ботаника включает классификацию различных видов растений.' },
      { en: 'We went on a botany field trip to the forest.', ru: 'Мы отправились на ботаническую экскурсию в лес.' },
      { en: 'The history of botany goes back thousands of years.', ru: 'История ботаники насчитывает тысячи лет.' }
    ]
),

createRichWord('c1_bout', 'Bout', '/baʊt/', 'баут', 'Приступ / Поединок', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Короткий период болезни или интенсивной активности; или боксерский поединок.',
    '- Болезнь: "Bout of flu" (Приступ гриппа)\n- Спорт: "Boxing bout" (Боксерский поединок)\n- Активность: "Drinking bout" (Запой)',
    [
      { en: 'He is recovering from a severe bout of flu.', ru: 'Он выздоравливает после тяжелого приступа гриппа.' },
      { en: 'The boxing bout lasted only three rounds.', ru: 'Боксерский поединок длился всего три раунда.' },
      { en: 'She suffers from occasional bouts of depression.', ru: 'Она страдает от периодических приступов депрессии.' },
      { en: 'A bout of unemployment left him with no savings.', ru: 'Период безработицы оставил его без сбережений.' }
    ]
),

createRichWord('c1_bowel', 'Bowel', '/ˈbaʊəl/', 'бауэл', 'Кишечник', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Трубка в теле, по которой проходит пища (кишка).',
    '- Медицина: "Bowel movement" (Стул / Дефекация)\n- Здоровье: "Bowel cancer" (Рак кишечника)\n- Анатомия: "Small bowel" (Тонкая кишка)',
    [
      { en: 'Doctors recommend a high-fiber diet for healthy bowels.', ru: 'Врачи рекомендуют диету с высоким содержанием клетчатки для здорового кишечника.' },
      { en: 'He complained of pain in his lower bowel.', ru: 'Он жаловался на боль в нижней части кишечника.' },
      { en: 'Bowel cancer is treatable if caught early.', ru: 'Рак кишечника излечим, если обнаружен на ранней стадии.' },
      { en: 'Irritable bowel syndrome is a common condition.', ru: 'Синдром раздраженного кишечника — распространенное заболевание.' }
    ]
),

createRichWord('c1_boycott', 'Boycott', '/ˈbɔɪkɒt/', 'бойкот', 'Бойкот / Бойкотировать', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Отказ покупать, использовать или участвовать в чем-то в знак протеста.',
    '- Действие: "Organize a boycott" (Организовать бойкот)\n- Глагол: "Boycott goods" (Бойкотировать товары)\n- Политика: "Olympic boycott" (Бойкот Олимпиады)',
    [
      { en: 'Consumers decided to boycott the company\'s products.', ru: 'Потребители решили бойкотировать продукцию компании.' },
      { en: 'The bus boycott lasted for over a year.', ru: 'Автобусный бойкот длился больше года.' },
      { en: 'They are calling for a boycott of the election.', ru: 'Они призывают к бойкоту выборов.' },
      { en: 'Many countries boycotted the games in protest.', ru: 'Многие страны бойкотировали игры в знак протеста.' }
    ]
),

createRichWord('c1_brigade', 'Brigade', '/brɪˈɡeɪd/', 'бригейд', 'Бригада', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большая группа солдат; или организация людей с общей целью.',
    '- Армия: "Army brigade" (Армейская бригада)\n- Пожарные: "Fire brigade" (Пожарная бригада)\n- Метафора: "Anti-smoking brigade" (Борцы с курением)',
    [
      { en: 'The fire brigade arrived within minutes to put out the fire.', ru: 'Пожарная бригада прибыла через несколько минут, чтобы потушить огонь.' },
      { en: 'He commands a tank brigade in the army.', ru: 'Он командует танковой бригадой в армии.' },
      { en: 'The kitchen brigade prepared dinner for huge crowd.', ru: 'Кухонная бригада приготовила ужин для огромной толпы.' },
      { en: 'An entire brigade was deployed to the border.', ru: 'Целая бригада была переброшена к границе.' }
    ]
),

createRichWord('c1_brisk', 'Brisk', '/brɪsk/', 'бриск', 'Живой / Проворный / Свежий', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Быстрый и энергичный; или холодный, но приятный (о погоде).',
    '- Движение: "Brisk walk" (Быстрая ходьба)\n- Бизнес: "Brisk trade" (Бойкая торговля)\n- Погода: "Brisk morning" (Свежее утро)',
    [
      { en: 'We went for a brisk walk in the park to warm up.', ru: 'Мы пошли на быструю прогулку в парк, чтобы согреться.' },
      { en: 'Business was brisk at the market today.', ru: 'Торговля на рынке сегодня была бойкой.' },
      { en: 'She answered in a brisk, efficient manner.', ru: 'Она ответила в живой, деловой манере.' },
      { en: 'The morning air was cool and brisk.', ru: 'Утренний воздух был прохладным и свежим.' }
    ]
),

createRichWord('c1_bulge', 'Bulge', '/bʌldʒ/', 'балд’ж', 'Выпуклость / Выпирать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Округлая припухлость, выступающая наружу; или внезапное увеличение числа.',
    '- Форма: "Bulge in the pocket" (Выпуклость в кармане)\n- Тело: "Eye bulge" (Глаза на выкате)\n- Количество: "Population bulge" (Демографический взрыв)',
    [
      { en: 'The gun made a noticeable bulge under his jacket.', ru: 'Пистолет создавал заметную выпуклость под его курткой.' },
      { en: 'His eyes seemed to bulge with surprise.', ru: 'Его глаза, казалось, вылезли из орбит от удивления.' },
      { en: 'There was a sudden bulge in demand for masks.', ru: 'Произошел внезапный всплеск спроса на маски.' },
      { en: 'The wall started to bulge outwards due to pressure.', ru: 'Стена начала выпирать наружу из-за давления.' }
    ]
),

createRichWord('c1_bulletin', 'Bulletin', '/ˈbʊlətɪn/', 'булетин', 'Бюллетень / Сводка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Короткое официальное заявление или сводка новостей.',
    '- Новости: "News bulletin" (Сводка новостей)\n- Информация: "Weather bulletin" (Сводка погоды)\n- Доска: "Bulletin board" (Доска объявлений)',
    [
      { en: 'We interrupted this program for a special news bulletin.', ru: 'Мы прервали эту программу для специальной сводки новостей.' },
      { en: 'Check the bulletin board for new job postings.', ru: 'Проверьте доску объявлений на наличие новых вакансий.' },
      { en: 'The medical bulletin says the president is recovering.', ru: 'Медицинский бюллетень гласит, что президент выздоравливает.' },
      { en: 'She reads the daily bulletin to stay informed.', ru: 'Она читает ежедневную сводку, чтобы быть в курсе.' }
    ]
),

createRichWord('c1_carbohydrate', 'Carbohydrate', '/kɑːbəʊˈhaɪdreɪt/', 'карбохайдрейт', 'Углевод', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Вещество в еде (сахар, крахмал), дающее энергию.',
    '- Еда: "Rich in carbohydrates" (Богатый углеводами)\n- Диета: "Low carbohydrate" (Низкоуглеводный)\n- Спорт: "Carbohydrate loading" (Углеводная загрузка)',
    [
      { en: 'Bread, pasta, and potatoes are rich in carbohydrates.', ru: 'Хлеб, макароны и картофель богаты углеводами.' },
      { en: 'Athletes need carbohydrates for energy before a race.', ru: 'Спортсменам нужны углеводы для энергии перед гонкой.' },
      { en: 'She is on a diet that restricts carbohydrates.', ru: 'Она на диете, ограничивающей углеводы.' },
      { en: 'Carbohydrates are broken down into glucose by the body.', ru: 'Углеводы расщепляются организмом до глюкозы.' }
    ]
),

createRichWord('c1_cardinal', 'Cardinal', '/ˈkɑːdɪn(ə)l/', 'кадинл', 'Кардинальный / Кардинал', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Главный, основной (прил.); или священник высокого ранга (сущ.).',
    '- Важность: "Cardinal rule" (Главное правило)\n- Религия: "Cardinal sin" (Смертный грех)\n- Направление: "Cardinal points" (Стороны света)',
    [
      { en: 'Respect for others is a cardinal principle of this school.', ru: 'Уважение к другим — это кардинальный принцип этой школы.' },
      { en: 'The four cardinal points are North, South, East, and West.', ru: 'Четыре стороны света — это Север, Юг, Восток и Запад.' },
      { en: 'The cardinals gathered in Rome to elect a new Pope.', ru: 'Кардиналы собрались в Риме, чтобы избрать нового Папу.' },
      { en: 'He committed the cardinal error of forgetting her name.', ru: 'Он совершил грубейшую (кардинальную) ошибку, забыв ее имя.' }
    ]
),

createRichWord('c1_causal', 'Causal', '/ˈkɔːz(ə)l/', 'козл', 'Причинный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к причине и следствию.',
    '- Связь: "Causal link" (Причинная связь)\n- Отношения: "Causal relationship" (Причинно-следственная связь)\n- Фактор: "Causal factor" (Причинный фактор)',
    [
      { en: 'Scientists found a causal link between smoking and cancer.', ru: 'Ученые обнаружили причинную связь между курением и раком.' },
      { en: 'It is hard to establish a causal relationship in this case.', ru: 'В данном случае трудно установить причинно-следственную связь.' },
      { en: 'We need to investigate the causal factors of the accident.', ru: 'Нам нужно расследовать причинные факторы аварии.' },
      { en: 'Correlation does not imply a causal connection.', ru: 'Корреляция не подразумевает причинной связи.' }
    ]
  ),
createRichWord('c1_abduct', 'Abduct', '/əbˈdʌkt/', 'эбдакт', 'Похищать', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Увести человека силой или обманом (синоним kidnap).',
    '- Преступление: "Abduct a child" (Похитить ребенка)\n- НЛО: "Alien abduction" (Похищение инопланетянами)\n- Действие: "Attempt to abduct" (Попытаться похитить)',
    [
      { en: 'The police are searching for the man who tried to abduct the boy.', ru: 'Полиция ищет мужчину, который пытался похитить мальчика.' },
      { en: 'He claimed he was abducted by aliens.', ru: 'Он утверждал, что его похитили инопланетяне.' },
      { en: 'The millionaire was abducted for a huge ransom.', ru: 'Миллионера похитили ради огромного выкупа.' },
      { en: 'Security cameras captured the moment she was abducted.', ru: 'Камеры наблюдения запечатлели момент, когда ее похитили.' }
    ]
),

createRichWord('c1_abide', 'Abide', '/əˈbaɪd/', 'эбайд', 'Соблюдать / Терпеть', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Принимать или действовать в соответствии с правилом (abide by); или терпеть кого-то (can\'t abide).',
    '- Закон: "Abide by the law" (Соблюдать закон)\n- Решение: "Abide by the decision" (Подчиниться решению)\n- Неприязнь: "Can\'t abide him" (Терпеть его не могу)',
    [
      { en: 'We must abide by the rules of the competition.', ru: 'Мы должны соблюдать правила соревнования.' },
      { en: 'She cannot abide people who are always late.', ru: 'Она терпеть не может людей, которые всегда опаздывают.' },
      { en: 'Members agreed to abide by the committee\'s vote.', ru: 'Члены согласились подчиниться голосованию комитета.' },
      { en: 'If you join the club, you have to abide by its regulations.', ru: 'Если вы вступаете в клуб, вы должны соблюдать его устав.' }
    ]
),

createRichWord('c1_abolition', 'Abolition', '/ˌæbəˈlɪʃn/', 'эбэлишн', 'Отмена (закона)', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Официальное прекращение действия закона или системы (например, рабства или смертной казни).',
    '- История: "Abolition of slavery" (Отмена рабства)\n- Закон: "Abolition of the death penalty" (Отмена смертной казни)\n- Движение: "Call for abolition" (Призывать к отмене)',
    [
      { en: 'The abolition of slavery was a major historical event.', ru: 'Отмена рабства была крупным историческим событием.' },
      { en: 'Campaigners are fighting for the abolition of nuclear weapons.', ru: 'Активисты борются за ликвидацию ядерного оружия.' },
      { en: 'The abolition of the tax was welcomed by the public.', ru: 'Отмена налога была приветствована общественностью.' },
      { en: 'He supports the complete abolition of animal testing.', ru: 'Он поддерживает полную отмену тестирования на животных.' }
    ]
),

createRichWord('c1_acclaim', 'Acclaim', '/əˈkleɪm/', 'эклейм', 'Признание / Шумно приветствовать', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Публичная похвала и одобрение (сущ.); или приветствовать с энтузиазмом (гл.).',
    '- Успех: "Critical acclaim" (Признание критиков)\n- Слава: "International acclaim" (Международное признание)\n- Действие: "Widely acclaimed" (Широко признанный)',
    [
      { en: 'The movie received critical acclaim for its screenplay.', ru: 'Фильм получил признание критиков за сценарий.' },
      { en: 'She deserves all the acclaim she is getting.', ru: 'Она заслуживает всей похвалы, которую получает.' },
      { en: 'His new novel was acclaimed as a masterpiece.', ru: 'Его новый роман был провозглашен шедевром.' },
      { en: 'The scientist won international acclaim for his discovery.', ru: 'Ученый получил международное признание за свое открытие.' }
    ]
),

createRichWord('c1_accord', 'Accord', '/əˈkɔːd/', 'экод', 'Соглашение / Соответствие', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Официальное соглашение или договор; или согласие.',
    '- Политика: "Peace accord" (Мирное соглашение)\n- Мнение: "In accord with" (В соответствии с)\n- Действие: "Of own accord" (По собственной воле)',
    [
      { en: 'The two countries signed a peace accord yesterday.', ru: 'Две страны подписали мирное соглашение вчера.' },
      { en: 'His views are not in accord with the party policy.', ru: 'Его взгляды не соответствуют политике партии.' },
      { en: 'She left the company of her own accord.', ru: 'Она ушла из компании по собственной воле.' },
      { en: 'We hope to reach an accord on this matter soon.', ru: 'Мы надеемся вскоре достичь соглашения по этому вопросу.' }
    ]
),

createRichWord('c1_adequacy', 'Adequacy', '/ˈædɪkwəsi/', 'эдиквэси', 'Адекватность / Достаточность', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Состояние, когда чего-то достаточно или оно подходит для определенной цели.',
    '- Качество: "Adequacy of resources" (Достаточность ресурсов)\n- Сомнение: "Question the adequacy" (Ставить под сомнение адекватность)\n- Стандарт: "Standard of adequacy" (Стандарт достаточности)',
    [
      { en: 'Critics questioned the adequacy of the safety measures.', ru: 'Критики поставили под сомнение достаточность мер безопасности.' },
      { en: 'There are doubts about the adequacy of current funding.', ru: 'Существуют сомнения по поводу достаточности текущего финансирования.' },
      { en: 'We need to check the adequacy of the water supply.', ru: 'Нам нужно проверить достаточность водоснабжения.' },
      { en: 'The adequacy of his training was evident in the crisis.', ru: 'Адекватность (достаточность) его подготовки была очевидна в кризисной ситуации.' }
    ]
),

createRichWord('c1_admiral', 'Admiral', '/ˈædmərəl/', 'эдмирэл', 'Адмирал', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Офицер очень высокого ранга во флоте.',
    '- Флот: "Rear admiral" (Контр-адмирал)\n- Звание: "Rank of admiral" (Звание адмирала)\n- Командование: "Fleet admiral" (Адмирал флота)',
    [
      { en: 'The admiral commanded the fleet during the battle.', ru: 'Адмирал командовал флотом во время битвы.' },
      { en: 'He was promoted to the rank of admiral last year.', ru: 'В прошлом году его повысили до звания адмирала.' },
      { en: 'Admiral Nelson is a famous figure in British history.', ru: 'Адмирал Нельсон — известная фигура в британской истории.' },
      { en: 'The admiral inspected the ships in the harbor.', ru: 'Адмирал осмотрел корабли в гавани.' }
    ]
),

createRichWord('c1_adorn', 'Adorn', '/əˈdɔːn/', 'эдон', 'Украшать', ProficiencyLevel.C1, 'verb', 'Low', 'Literary',
    'Сделать что-то более привлекательным, добавив украшения.',
    '- Декор: "Adorn with flowers" (Украсить цветами)\n- Стена: "Adorn the wall" (Украсить стену)\n- Праздник: "Richly adorned" (Богато украшенный)',
    [
      { en: 'Paintings of ancestors adorned the hallway walls.', ru: 'Картины предков украшали стены коридора.' },
      { en: 'She likes to adorn herself with expensive jewelry.', ru: 'Она любит украшать себя дорогими ювелирными изделиями.' },
      { en: 'The Christmas tree was adorned with lights and baubles.', ru: 'Рождественская елка была украшена огнями и шарами.' },
      { en: 'Garlands of flowers adorned the wedding car.', ru: 'Гирлянды цветов украшали свадебную машину.' }
    ]
),

createRichWord('c1_adversary', 'Adversary', '/ˈædvəsəri/', 'эдвэсэри', 'Противник', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Человек или группа, противостоящая другому (враг, оппонент).',
    '- Конфликт: "Political adversary" (Политический противник)\n- Спорт: "Worthy adversary" (Достойный противник)\n- Битва: "Face an adversary" (Столкнуться с противником)',
    [
      { en: 'He defeated his old adversary in the tennis match.', ru: 'Он победил своего старого противника в теннисном матче.' },
      { en: 'They were once friends, but now they are adversaries.', ru: 'Когда-то они были друзьями, но теперь они противники.' },
      { en: 'Respect your adversary, even if you disagree.', ru: 'Уважай своего противника, даже если ты не согласен.' },
      { en: 'The country viewed its neighbor as a dangerous adversary.', ru: 'Страна рассматривала своего соседа как опасного противника.' }
    ]
),

createRichWord('c1_aerospace', 'Aerospace', '/ˈeərəʊspeɪs/', 'эроуспейс', 'Аэрокосмический', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Отрасль, связанная с производством самолетов и космических аппаратов.',
    '- Индустрия: "Aerospace industry" (Аэрокосмическая промышленность)\n- Наука: "Aerospace engineering" (Аэрокосмическая инженерия)\n- Технологии: "Aerospace technology" (Аэрокосмические технологии)',
    [
      { en: 'He works as an engineer for a large aerospace company.', ru: 'Он работает инженером в крупной аэрокосмической компании.' },
      { en: 'The aerospace industry is vital to the economy.', ru: 'Аэрокосмическая промышленность жизненно важна для экономики.' },
      { en: 'Aerospace technology has advanced rapidly in recent years.', ru: 'Аэрокосмические технологии быстро развивались в последние годы.' },
      { en: 'They are developing new materials for aerospace applications.', ru: 'Они разрабатывают новые материалы для аэрокосмического применения.' }
    ]
),

createRichWord('c1_affluent', 'Affluent', '/ˈæfluənt/', 'эфлуэнт', 'Богатый / Зажиточный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Имеющий много денег или имущества; богатый.',
    '- Общество: "Affluent society" (Богатое общество)\n- Место: "Affluent neighborhood" (Зажиточный район)\n- Люди: "Affluent family" (Богатая семья)',
    [
      { en: 'She grew up in an affluent neighborhood in London.', ru: 'Она выросла в зажиточном районе Лондона.' },
      { en: 'Affluent consumers are buying more luxury goods.', ru: 'Богатые потребители покупают больше предметов роскоши.' },
      { en: 'The country became more affluent after the oil boom.', ru: 'Страна стала более богатой после нефтяного бума.' },
      { en: 'He comes from a very affluent background.', ru: 'Он происходит из очень обеспеченной среды.' }
    ]
),

createRichWord('c1_algae', 'Algae', '/ˈælɡiː/', 'элджи', 'Водоросли', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Простые растения, не имеющие листьев или стеблей, растущие в воде.',
    '- Природа: "Green algae" (Зеленые водоросли)\n- Море: "Marine algae" (Морские водоросли)\n- Цветение: "Algae bloom" (Цветение водорослей)',
    [
      { en: 'The pond was covered in green algae.', ru: 'Пруд был покрыт зелеными водорослями.' },
      { en: 'Some types of algae can be eaten as food.', ru: 'Некоторые виды водорослей можно употреблять в пищу.' },
      { en: 'High temperatures caused the algae to grow rapidly.', ru: 'Высокие температуры вызвали быстрый рост водорослей.' },
      { en: 'Fish feed on small insects and algae.', ru: 'Рыбы питаются мелкими насекомыми и водорослями.' }
    ]
),

createRichWord('c1_alleviate', 'Alleviate', '/əˈliːvieɪt/', 'эливиейт', 'Облегчать (боль, страдания)', ProficiencyLevel.C1, 'verb', 'Medium', 'Formal',
    'Сделать проблему или боль менее серьезной.',
    '- Боль: "Alleviate pain" (Облегчить боль)\n- Проблема: "Alleviate poverty" (Смягчить бедность)\n- Стресс: "Alleviate stress" (Снять стресс)',
    [
      { en: 'The doctor gave him drugs to alleviate the pain.', ru: 'Врач дал ему лекарства, чтобы облегчить боль.' },
      { en: 'Measures were taken to alleviate the traffic congestion.', ru: 'Были приняты меры для облегчения транспортных заторов.' },
      { en: 'Charities work to alleviate suffering in war zones.', ru: 'Благотворительные организации работают над облегчением страданий в зонах военных действий.' },
      { en: 'A hot bath can help alleviate muscle tension.', ru: 'Горячая ванна может помочь снять мышечное напряжение.' }
    ]
),

createRichWord('c1_allot', 'Allot', '/əˈlɒt/', 'элот', 'Выделять / Распределять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Дать (время, деньги, обязанности) кому-то как долю или задачу.',
    '- Время: "Allot time" (Выделить время)\n- Деньги: "Allot funds" (Выделить средства)\n- Место: "Allot a seat" (Предоставить место)',
    [
      { en: 'The teacher allotted thirty minutes for the test.', ru: 'Учитель выделил тридцать минут на тест.' },
      { en: 'How much money has been allotted to the project?', ru: 'Сколько денег было выделено на проект?' },
      { en: 'They allotted a parking space to each employee.', ru: 'Они выделили парковочное место каждому сотруднику.' },
      { en: 'We need to allot tasks evenly among the team.', ru: 'Нам нужно равномерно распределить задачи между членами команды.' }
    ]
),

createRichWord('c1_ambush', 'Ambush', '/ˈæmbʊʃ/', 'эмбуш', 'Засада', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Внезапная атака из скрытого места.',
    '- Война: "Lay an ambush" (Устроить засаду)\n- Атака: "Ambush attack" (Нападение из засады)\n- Опасность: "Walk into an ambush" (Попасть в засаду)',
    [
      { en: 'The soldiers were killed in an enemy ambush.', ru: 'Солдаты были убиты во вражеской засаде.' },
      { en: 'The police set up an ambush to catch the gang.', ru: 'Полиция устроила засаду, чтобы поймать банду.' },
      { en: 'They waited in ambush for the convoy to pass.', ru: 'Они ждали в засаде, пока пройдет конвой.' },
      { en: 'He felt ambushed by the sudden difficult questions.', ru: 'Он почувствовал, что его застали врасплох (как в засаде) внезапными сложными вопросами.' }
    ]
),

createRichWord('c1_amenity', 'Amenity', '/əˈmiːnəti/', 'эминэти', 'Удобство / Благоустройство', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Полезная или приятная функция места (бассейн, парк, магазин).',
    '- Отель: "Hotel amenities" (Удобства отеля)\n- Город: "Local amenities" (Местные удобства)\n- Жизнь: "Basic amenities" (Базовые удобства)',
    [
      { en: 'The hotel offers amenities such as a gym and a spa.', ru: 'Отель предлагает такие удобства, как тренажерный зал и спа.' },
      { en: 'The town lacks basic amenities like a library.', ru: 'В городе не хватает базовых удобств, таких как библиотека.' },
      { en: 'Close proximity to local amenities increases house prices.', ru: 'Близость к местным удобствам повышает цены на жилье.' },
      { en: 'We enjoy the amenities of modern city life.', ru: 'Мы наслаждаемся удобствами современной городской жизни.' }
    ]
),

createRichWord('c1_anarchy', 'Anarchy', '/ˈænəki/', 'энэки', 'Анархия', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Ситуация, когда нет правительства, порядка или контроля.',
    '- Политика: "State of anarchy" (Состояние анархии)\n- Хаос: "Descend into anarchy" (Погрузиться в анархию)\n- Контроль: "Total anarchy" (Полная анархия)',
    [
      { en: 'The country descended into anarchy after the revolution.', ru: 'Страна погрузилась в анархию после революции.' },
      { en: 'Without laws, there would be total anarchy.', ru: 'Без законов была бы полная анархия.' },
      { en: 'Police restored order and ended the anarchy on the streets.', ru: 'Полиция восстановила порядок и прекратила анархию на улицах.' },
      { en: 'Fear of anarchy kept the dictator in power.', ru: 'Страх перед анархией удерживал диктатора у власти.' }
    ]
),

createRichWord('c1_antiquity', 'Antiquity', '/ænˈtɪkwəti/', 'энтиквэти', 'Древность / Античность', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Древнее прошлое, особенно период греков и римлян.',
    '- История: "Classical antiquity" (Классическая античность)\n- Предмет: "Object of antiquity" (Предмет старины)\n- Время: "Great antiquity" (Глубокая древность)',
    [
      { en: 'The statue dates back to Roman antiquity.', ru: 'Статуя восходит к римской античности.' },
      { en: 'Antiquity is a fascinating period of history to study.', ru: 'Античность — увлекательный период истории для изучения.' },
      { en: 'The museum holds many treasures from antiquity.', ru: 'В музее хранится много сокровищ древности.' },
      { en: 'This custom is of great antiquity.', ru: 'Этот обычай очень древний.' }
    ]
),

createRichWord('c1_apartheid', 'Apartheid', '/əˈpɑːtaɪt/', 'эпатейт', 'Апартеид', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Бывшая политическая система в Южной Африке, где люди были разделены по расовому признаку.',
    '- История: "End of apartheid" (Конец апартеида)\n- Политика: "Apartheid regime" (Режим апартеида)\n- Борьба: "Anti-apartheid movement" (Движение против апартеида)',
    [
      { en: 'Nelson Mandela fought against apartheid in South Africa.', ru: 'Нельсон Мандела боролся против апартеида в Южной Африке.' },
      { en: 'The apartheid laws segregated people based on race.', ru: 'Законы апартеида разделяли людей по расовому признаку.' },
      { en: 'The end of apartheid brought democracy to the country.', ru: 'Конец апартеида принес демократию в страну.' },
      { en: 'Many nations imposed sanctions on the apartheid regime.', ru: 'Многие страны ввели санкции против режима апартеида.' }
    ]
),

createRichWord('c1_aquatic', 'Aquatic', '/əˈkwætɪk/', 'эквэтик', 'Водный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Растущий или живущий в воде.',
    '- Природа: "Aquatic plants" (Водные растения)\n- Животные: "Aquatic animals" (Водные животные)\n- Спорт: "Aquatic sports" (Водные виды спорта)',
    [
      { en: 'Dolphins are intelligent aquatic mammals.', ru: 'Дельфины — умные водные млекопитающие.' },
      { en: 'Aquatic plants provide oxygen for the fish.', ru: 'Водные растения обеспечивают рыб кислородом.' },
      { en: 'Swimming is a popular aquatic sport.', ru: 'Плавание — популярный водный вид спорта.' },
      { en: 'The park features an aquatic center with several pools.', ru: 'В парке есть водный центр с несколькими бассейнами.' }
    ]
),

createRichWord('c1_aristocrat', 'Aristocrat', '/ˈærɪstəkræt/', 'эристэкрэт', 'Аристократ', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, принадлежащий к высшему социальному классу, часто с титулом.',
    '- Общество: "Wealthy aristocrat" (Богатый аристократ)\n- История: "French aristocrats" (Французские аристократы)\n- Статус: "Born an aristocrat" (Рожденный аристократом)',
    [
      { en: 'The aristocrat lived in a large castle in the countryside.', ru: 'Аристократ жил в большом замке в сельской местности.' },
      { en: 'Many aristocrats lost their power during the revolution.', ru: 'Многие аристократы потеряли свою власть во время революции.' },
      { en: 'She acts like an aristocrat, even though she is not.', ru: 'Она ведет себя как аристократка, хотя таковой не является.' },
      { en: 'The party was attended by royals and aristocrats.', ru: 'На вечеринке присутствовали члены королевской семьи и аристократы.' }
    ]
),

createRichWord('c1_aroma', 'Aroma', '/əˈrəʊmə/', 'эроумэ', 'Аромат', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Сильный, приятный запах (часто еды или напитков).',
    '- Запах: "Coffee aroma" (Аромат кофе)\n- Описание: "Pleasant aroma" (Приятный аромат)\n- Кухня: "Spicy aroma" (Пряный аромат)',
    [
      { en: 'The aroma of fresh coffee filled the kitchen.', ru: 'Аромат свежего кофе наполнил кухню.' },
      { en: 'I love the aroma of baking bread.', ru: 'Я люблю аромат выпекаемого хлеба.' },
      { en: 'The flowers have a sweet and delicate aroma.', ru: 'Цветы имеют сладкий и нежный аромат.' },
      { en: 'A rich aroma came from the pot of soup.', ru: 'Насыщенный аромат исходил от кастрюли с супом.' }
    ]
),

createRichWord('c1_arthritis', 'Arthritis', '/ɑːˈθraɪtɪs/', 'асрайтис', 'Артрит', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Болезнь, вызывающая боль и отек в суставах.',
    '- Здоровье: "Suffer from arthritis" (Страдать артритом)\n- Боль: "Rheumatoid arthritis" (Ревматоидный артрит)\n- Лечение: "Treat arthritis" (Лечить артрит)',
    [
      { en: 'Her grandmother suffers from arthritis in her hands.', ru: 'Ее бабушка страдает артритом рук.' },
      { en: 'Arthritis can make it difficult to walk or hold things.', ru: 'Артрит может затруднить ходьбу или удержание предметов.' },
      { en: 'There is no cure for arthritis, but medication helps.', ru: 'Лекарства от артрита нет, но медикаменты помогают.' },
      { en: 'Cold weather often makes his arthritis worse.', ru: 'Холодная погода часто ухудшает его артрит.' }
    ]
),

createRichWord('c1_ascent', 'Ascent', '/əˈsent/', 'эсент', 'Подъем / Восхождение', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Действие движения вверх или подъема на гору.',
    '- Гора: "Steep ascent" (Крутой подъем)\n- Успех: "Ascent to power" (Восхождение к власти)\n- Действие: "Make an ascent" (Совершить восхождение)',
    [
      { en: 'The ascent of Mount Everest is very dangerous.', ru: 'Восхождение на Эверест очень опасно.' },
      { en: 'The plane began its steep ascent into the clouds.', ru: 'Самолет начал крутой подъем в облака.' },
      { en: 'His rapid ascent to the presidency surprised everyone.', ru: 'Его стремительное восхождение к президентству удивило всех.' },
      { en: 'We started our ascent early in the morning.', ru: 'Мы начали наш подъем рано утром.' }
    ]
),

createRichWord('c1_ashore', 'Ashore', '/əˈʃɔː/', 'эшо', 'На берег / К берегу', ProficiencyLevel.C1, 'adv', 'Low', 'Neutral',
    'К берегу или на берег (с воды).',
    '- Море: "Come ashore" (Сойти на берег)\n- Волна: "Wash ashore" (Вымыть на берег)\n- Путешествие: "Go ashore" (Сойти на берег)',
    [
      { en: 'The sailors went ashore to find food and water.', ru: 'Моряки сошли на берег, чтобы найти еду и воду.' },
      { en: 'Debris from the ship washed ashore after the storm.', ru: 'Обломки корабля вымыло на берег после шторма.' },
      { en: 'We swam ashore from the boat.', ru: 'Мы поплыли к берегу от лодки.' },
      { en: 'The passengers were happy to be safely ashore.', ru: 'Пассажиры были счастливы оказаться в безопасности на берегу.' }
    ]
),

createRichWord('c1_assorted', 'Assorted', '/əˈsɔːtɪd/', 'эсотид', 'Разнообразный / Ассорти', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Состоящий из различных типов или сортов.',
    '- Еда: "Box of assorted chocolates" (Коробка шоколадного ассорти)\n- Вещи: "Assorted goods" (Различные товары)\n- Смесь: "Assorted colors" (Разные цвета)',
    [
      { en: 'The tray contained assorted cheeses and fruits.', ru: 'На подносе были различные сыры и фрукты.' },
      { en: 'We sell assorted sizes and colors of shirts.', ru: 'Мы продаем рубашки разных размеров и цветов.' },
      { en: 'He collected assorted stamps from around the world.', ru: 'Он коллекционировал разнообразные марки со всего мира.' },
      { en: 'The jar was filled with assorted candies.', ru: 'Банка была наполнена конфетами ассорти.' }
    ]
),

createRichWord('c1_attentive', 'Attentive', '/əˈtentɪv/', 'этентив', 'Внимательный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Слушающий или наблюдающий внимательно; заботливый.',
    '- Слушатель: "Attentive listener" (Внимательный слушатель)\n- Забота: "Attentive to needs" (Внимательный к потребностям)\n- Аудитория: "Attentive audience" (Внимательная аудитория)',
    [
      { en: 'The students were very attentive during the lecture.', ru: 'Студенты были очень внимательны во время лекции.' },
      { en: 'He is an attentive husband who remembers birthdays.', ru: 'Он внимательный муж, который помнит дни рождения.' },
      { en: 'Please be attentive to the safety instructions.', ru: 'Пожалуйста, будьте внимательны к инструкциям по безопасности.' },
      { en: 'The waiter was polite and attentive throughout the meal.', ru: 'Официант был вежлив и внимателен на протяжении всей трапезы.' }
    ]
),

createRichWord('c1_augment', 'Augment', '/ɔːɡˈment/', 'огмент', 'Увеличивать / Прибавлять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сделать что-то большим, добавив к этому; усилить.',
    '- Доход: "Augment income" (Увеличить доход)\n- Сила: "Augment reality" (Дополнить реальность)\n- Количество: "Augment the supply" (Увеличить запас)',
    [
      { en: 'She took a second job to augment her income.', ru: 'Она устроилась на вторую работу, чтобы увеличить свой доход.' },
      { en: 'Technology can augment human capabilities.', ru: 'Технологии могут усилить человеческие возможности.' },
      { en: 'The army was augmented by reserve troops.', ru: 'Армия была усилена резервными войсками.' },
      { en: 'He used illustrations to augment the text.', ru: 'Он использовал иллюстрации, чтобы дополнить текст.' }
    ]
  ),
createRichWord('c1_babe', 'Babe', '/beɪb/', 'бэйб', 'Крошка / Малыш', ProficiencyLevel.C1, 'noun', 'Medium', 'Informal',
    'Ласковое обращение к любимому человеку (сленг); или (устар.) младенец.',
    '- Обращение: "Hey babe" (Эй, детка/малыш)\n- Ребенок: "Babe in arms" (Младенец на руках)\n- Сленг: "What a babe" (Какая красотка)',
    [
      { en: 'Hey babe, are you ready to go to the cinema?', ru: 'Эй, малыш, ты готова идти в кино?' },
      { en: 'She is such a babe, everyone looks at her.', ru: 'Она такая красотка, все на нее смотрят.' },
      { en: 'The forest was silent, like a babe asleep.', ru: 'Лес был тих, как спящий младенец.' },
      { en: 'Don\'t worry babe, everything will be fine.', ru: 'Не волнуйся, детка, все будет хорошо.' }
    ]
),

createRichWord('c1_bachelor', 'Bachelor', '/ˈbætʃələ/', 'бэчэлэ', 'Холостяк / Бакалавр', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Мужчина, который никогда не был женат; или первая ученая степень.',
    '- Статус: "Eligible bachelor" (Завидный холостяк)\n- Образование: "Bachelor\'s degree" (Степень бакалавра)\n- Жизнь: "Bachelor pad" (Холостяцкая квартира)',
    [
      { en: 'He is a confirmed bachelor and enjoys living alone.', ru: 'Он убежденный холостяк и любит жить один.' },
      { en: 'She has a Bachelor of Arts degree in History.', ru: 'У нее степень бакалавра искусств по истории.' },
      { en: 'The magazine named him the most eligible bachelor of the year.', ru: 'Журнал назвал его самым завидным холостяком года.' },
      { en: 'His bachelor party was held in Las Vegas.', ru: 'Его мальчишник проходил в Лас-Вегасе.' }
    ]
),

createRichWord('c1_banish', 'Banish', '/ˈbænɪʃ/', 'бэниш', 'Изгонять / Прогонять', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Официально выслать кого-то из страны; или прогнать мысли/страхи.',
    '- Наказание: "Banish from the kingdom" (Изгнать из королевства)\n- Мысли: "Banish the thought" (Отогнать мысль)\n- Место: "Banish to an island" (Сослать на остров)',
    [
      { en: 'The king decided to banish the traitor from the land.', ru: 'Король решил изгнать предателя из страны.' },
      { en: 'She tried to banish all negative thoughts from her mind.', ru: 'Она пыталась прогнать все негативные мысли из головы.' },
      { en: 'He was banished to a distant island for his crimes.', ru: 'За свои преступления он был сослан на далекий остров.' },
      { en: 'They managed to banish fear and continue the mission.', ru: 'Им удалось побороть (прогнать) страх и продолжить миссию.' }
    ]
),

createRichWord('c1_banquet', 'Banquet', '/ˈbæŋkwɪt/', 'бэнквит', 'Банкет / Пир', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Официальный ужин для большого количества людей, обычно с речами.',
    '- Событие: "Wedding banquet" (Свадебный банкет)\n- Еда: "State banquet" (Государственный банкет)\n- Зал: "Banquet hall" (Банкетный зал)',
    [
      { en: 'A grand banquet was held in honor of the visiting president.', ru: 'В честь визита президента был устроен грандиозный банкет.' },
      { en: 'The wedding banquet included five different courses.', ru: 'Свадебный банкет включал пять разных блюд.' },
      { en: 'Hundreds of guests attended the awards banquet.', ru: 'Сотни гостей посетили банкет по случаю награждения.' },
      { en: 'They rented a large banquet hall for the celebration.', ru: 'Они арендовали большой банкетный зал для празднования.' }
    ]
),

createRichWord('c1_beware', 'Beware', '/bɪˈweə/', 'бивээ', 'Остерегаться', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Быть осторожным и внимательным к опасности (обычно в повелительном наклонении).',
    '- Предупреждение: "Beware of the dog" (Осторожно, злая собака)\n- Совет: "Beware of pickpockets" (Остерегайтесь карманников)\n- Опасность: "Buyers beware" (Покупателям следует быть осторожными)',
    [
      { en: 'You should beware of icy roads in winter.', ru: 'Зимой следует остерегаться обледенелых дорог.' },
      { en: 'Beware of strangers offering free gifts.', ru: 'Остерегайтесь незнакомцев, предлагающих бесплатные подарки.' },
      { en: 'The sign on the gate said "Beware of the Dog".', ru: 'Табличка на воротах гласила "Осторожно, злая собака".' },
      { en: 'Tourists must beware of scams in crowded areas.', ru: 'Туристам следует остерегаться мошенничества в людных местах.' }
    ]
),

createRichWord('c1_bibliography', 'Bibliography', '/ˌbɪbliˈɒɡrəfi/', 'библиогрэфи', 'Библиография', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Список книг или статей, использованных при написании работы; или список книг автора.',
    '- Учеба: "Includes a bibliography" (Включает библиографию)\n- Исследование: "Reference bibliography" (Справочная библиография)\n- Список: "Selected bibliography" (Избранная библиография)',
    [
      { en: 'Please include a bibliography at the end of your essay.', ru: 'Пожалуйста, включите библиографию в конце вашего эссе.' },
      { en: 'The bibliography lists all the sources used in the research.', ru: 'В библиографии перечислены все источники, использованные в исследовании.' },
      { en: 'Checking the bibliography can help you find more information.', ru: 'Проверка библиографии может помочь вам найти больше информации.' },
      { en: 'He has an extensive bibliography of books on history.', ru: 'У него есть обширная библиография книг по истории.' }
    ]
),

createRichWord('c1_bluff', 'Bluff', '/blʌf/', 'блаф', 'Блеф / Блефовать', ProficiencyLevel.C1, 'verb', 'Medium', 'Neutral',
    'Притворяться уверенным или знающим, чтобы обмануть кого-то; или крутой утес.',
    '- Обман: "Call someone\'s bluff" (Раскрыть чей-то блеф)\n- Игра: "He is bluffing" (Он блефует)\n- География: "Steep bluff" (Крутой утес)',
    [
      { en: 'I think he is bluffing; he doesn\'t really have the cards.', ru: 'Я думаю, он блефует; у него на самом деле нет карт.' },
      { en: 'She called his bluff and asked him to prove it.', ru: 'Она не поверила его блефу и попросила доказать это.' },
      { en: 'They stood on the edge of the bluff overlooking the ocean.', ru: 'Они стояли на краю утеса, глядя на океан.' },
      { en: 'It was just a bluff to get us to agree.', ru: 'Это был просто блеф, чтобы заставить нас согласиться.' }
    ]
),

createRichWord('c1_bum', 'Bum', '/bʌm/', 'бам', 'Бездельник / Зад (разг.)', ProficiencyLevel.C1, 'noun', 'Medium', 'Slang',
    'Человек без дома или работы (грубо); или задняя часть тела (ягодицы); или бездельничать.',
    '- Человек: "Beach bum" (Пляжный бездельник)\n- Тело: "Fall on your bum" (Упасть на зад)\n- Глагол: "Bum around" (Слоняться без дела)',
    [
      { en: 'He spent the summer living like a beach bum.', ru: 'Он провел лето, живя как пляжный бездельник.' },
      { en: 'The baby slipped and landed on his bum.', ru: 'Малыш поскользнулся и приземлился на попу.' },
      { en: 'Can I bum a cigarette from you?', ru: 'Могу я стрельнуть у тебя сигарету?' },
      { en: 'Stop bumming around and get a job.', ru: 'Хватит слоняться без дела, найди работу.' }
    ]
),

createRichWord('c1_bun', 'Bun', '/bʌn/', 'бан', 'Булочка / Пучок (волос)', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Маленький сладкий хлеб или пирожное; или прическа, когда волосы собраны в круг.',
    '- Еда: "Cinnamon bun" (Булочка с корицей)\n- Еда: "Hamburger bun" (Булочка для гамбургера)\n- Прическа: "Hair in a bun" (Волосы в пучке)',
    [
      { en: 'I bought a sticky cinnamon bun for breakfast.', ru: 'Я купил липкую булочку с корицей на завтрак.' },
      { en: 'She wore her hair in a tight bun for the interview.', ru: 'Она собрала волосы в тугой пучок для интервью.' },
      { en: 'We need to buy some burger buns for the barbecue.', ru: 'Нам нужно купить булочки для бургеров для барбекю.' },
      { en: 'The ballerina had a neat bun on top of her head.', ru: 'У балерины был аккуратный пучок на макушке.' }
    ]
),

createRichWord('c1_bungalow', 'Bungalow', '/ˈbʌŋɡələʊ/', 'бангэлоу', 'Бунгало / Одноэтажный дом', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Дом, у которого только один этаж.',
    '- Жилье: "Live in a bungalow" (Жить в бунгало)\n- Отпуск: "Beach bungalow" (Пляжное бунгало)\n- Недвижимость: "Detached bungalow" (Отдельно стоящий одноэтажный дом)',
    [
      { en: 'Elderly people often prefer living in a bungalow.', ru: 'Пожилые люди часто предпочитают жить в одноэтажном доме.' },
      { en: 'We rented a small bungalow near the beach for a week.', ru: 'Мы арендовали маленькое бунгало у пляжа на неделю.' },
      { en: 'The bungalow has a large garden at the back.', ru: 'У этого одноэтажного дома есть большой сад сзади.' },
      { en: 'They are building new bungalows on the edge of town.', ru: 'На окраине города строят новые бунгало.' }
    ]
  ),
createRichWord('c1_bunker', 'Bunker', '/ˈbʌŋkə/', 'банкэ', 'Бункер', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Укрепленное подземное укрытие; или песчаная ловушка в гольфе.',
    '- Защита: "Underground bunker" (Подземный бункер)\n- Война: "Military bunker" (Военный бункер)\n- Спорт: "Golf bunker" (Песчаный бункер в гольфе)',
    [
      { en: 'They hid in the bunker during the air raid.', ru: 'Они прятались в бункере во время авианалета.' },
      { en: 'The president was taken to a secure bunker.', ru: 'Президента отвели в безопасный бункер.' },
      { en: 'My golf ball landed in a sand bunker.', ru: 'Мой мяч для гольфа приземлился в песчаную ловушку.' },
      { en: 'The old concrete bunker is from the Second World War.', ru: 'Этот старый бетонный бункер времен Второй мировой войны.' }
    ]
  ),
createRichWord('c1_abate', 'Abate', '/əˈbeɪt/', 'эбэйт', 'Утихать / Ослабевать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Становиться менее сильным, интенсивным или серьезным (о ветре, боли, шторме).',
    '- Погода: "Storm abated" (Шторм утих)\n- Боль: "Pain abates" (Боль утихает)\n- Эмоции: "Anger abated" (Гнев утих)',
    [
      { en: 'We waited for the storm to abate before leaving.', ru: 'Мы ждали, пока шторм утихнет, прежде чем уйти.' },
      { en: 'The pain in his leg finally began to abate.', ru: 'Боль в его ноге наконец начала утихать.' },
      { en: 'Steps are being taken to abate pollution.', ru: 'Принимаются меры для снижения (ослабления) загрязнения.' },
      { en: 'Her anger abated when she heard his explanation.', ru: 'Ее гнев утих, когда она услышала его объяснение.' }
    ]
),

createRichWord('c1_aborigine', 'Aborigine', '/ˌæbəˈrɪdʒɪni/', 'эбэриджини', 'Абориген', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Представитель коренного населения (часто относится к коренным жителям Австралии, хотя сейчас предпочитают term "Aboriginal person").',
    '- Люди: "Australian Aborigine" (Австралийский абориген)\n- Культура: "Aborigine art" (Искусство аборигенов)\n- История: "Native Aborigine" (Коренной житель)',
    [
      { en: 'The Aborigine shared stories about the Dreamtime.', ru: 'Абориген поделился историями о Времени сновидений.' },
      { en: 'We learned about the culture of the Australian Aborigines.', ru: 'Мы узнали о культуре австралийских аборигенов.' },
      { en: 'He is a descendant of an Australian Aborigine.', ru: 'Он потомок австралийского аборигена.' },
      { en: 'The term "Aborigine" is sometimes considered outdated.', ru: 'Термин "абориген" иногда считается устаревшим.' }
    ]
),

createRichWord('c1_accentuate', 'Accentuate', '/əkˈsentʃueɪt/', 'эксенчуэйт', 'Акцентировать / Подчеркивать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сделать что-то более заметным или важным.',
    '- Внешность: "Accentuate features" (Подчеркнуть черты лица)\n- Проблема: "Accentuate the positive" (Акцентировать позитивное)\n- Речь: "Accentuate a point" (Выделить мысль)',
    [
      { en: 'Her short hair accentuated her large eyes.', ru: 'Ее короткие волосы подчеркивали ее большие глаза.' },
      { en: 'The bright light accentuated the wrinkles on his face.', ru: 'Яркий свет подчеркнул морщины на его лице.' },
      { en: 'We should accentuate the positive aspects of the plan.', ru: 'Нам следует акцентировать внимание на положительных аспектах плана.' },
      { en: 'The crisis accentuated the gap between rich and poor.', ru: 'Кризис обострил (подчеркнул) разрыв между богатыми и бедными.' }
    ]
),

createRichWord('c1_adamant', 'Adamant', '/ˈædəmənt/', 'эдэмэнт', 'Непреклонный / Категоричный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Отказывающийся менять свое мнение или решение; твердый.',
    '- Мнение: "Adamant refusal" (Категорический отказ)\n- Поведение: "Remain adamant" (Оставаться непреклонным)\n- Убеждение: "Adamant that" (Твердо убежден, что)',
    [
      { en: 'He was adamant that he would not resign.', ru: 'Он был непреклонен в том, что не уйдет в отставку.' },
      { en: 'She remained adamant despite our pleas.', ru: 'Она оставалась непреклонной, несмотря на наши мольбы.' },
      { en: 'I tried to change his mind, but he was adamant.', ru: 'Я пытался переубедить его, но он был категоричен.' },
      { en: 'The government is adamant about enforcing the new law.', ru: 'Правительство твердо намерено обеспечить соблюдение нового закона.' }
    ]
),

createRichWord('c1_adept', 'Adept', '/əˈdept/', 'эдэпт', 'Знаток / Искусный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Очень умелый или опытный в чем-то (обычно "adept at").',
    '- Навык: "Adept at negotiation" (Искусный в переговорах)\n- Работа: "Adept mechanic" (Опытный механик)\n- Умение: "Become adept" (Стать экспертом)',
    [
      { en: 'She is very adept at dealing with difficult customers.', ru: 'Она очень искусно общается с трудными клиентами.' },
      { en: 'He became adept at fixing computers.', ru: 'Он стал знатоком в починке компьютеров.' },
      { en: 'Ideally, a leader should be adept in public speaking.', ru: 'В идеале лидер должен быть искусным в публичных выступлениях.' },
      { en: 'The politician is adept at avoiding direct questions.', ru: 'Политик искусно избегает прямых вопросов.' }
    ]
),

createRichWord('c1_admonish', 'Admonish', '/ədˈmɒnɪʃ/', 'эдмониш', 'Наставлять / Журить', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Сказать кому-то, что он сделал что-то неправильно (мягко упрекнуть); или настоятельно посоветовать.',
    '- Поведение: "Admonish for being late" (Пожурить за опоздание)\n- Совет: "Admonish to be careful" (Наставить быть осторожным)\n- Речь: "Gently admonish" (Мягко пожурить)',
    [
      { en: 'His mother admonished him for eating too quickly.', ru: 'Мать пожурила его за то, что он ел слишком быстро.' },
      { en: 'The teacher admonished the students to keep quiet.', ru: 'Учитель призвал (наставил) учеников соблюдать тишину.' },
      { en: 'He was admonished by the judge for his outburst.', ru: 'Судья сделал ему замечание за его вспышку.' },
      { en: 'I must admonish you against taking such risks.', ru: 'Я должен предостеречь вас от таких рисков.' }
    ]
),

createRichWord('c1_affidavit', 'Affidavit', '/ˌæfɪˈdeɪvɪt/', 'эфидейвит', 'Аффидевит / Письменное показание', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Письменное заявление, подтвержденное присягой, для использования в суде.',
    '- Закон: "Swear an affidavit" (Дать письменное показание под присягой)\n- Суд: "Sign an affidavit" (Подписать аффидевит)\n- Доказательство: "Submit an affidavit" (Представить письменное показание)',
    [
      { en: 'He swore an affidavit that the signature was genuine.', ru: 'Он дал письменное показание под присягой, что подпись была подлинной.' },
      { en: 'The witness provided a detailed affidavit to the court.', ru: 'Свидетель предоставил суду подробное письменное показание.' },
      { en: 'You need to sign the affidavit in front of a lawyer.', ru: 'Вам нужно подписать аффидевит в присутствии юриста.' },
      { en: 'False statements in an affidavit are a crime.', ru: 'Ложные заявления в аффидевите являются преступлением.' }
    ]
),

createRichWord('c1_allegory', 'Allegory', '/ˈæləɡəri/', 'элигэри', 'Аллегория', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'История или картина, в которой персонажи и события символизируют идеи о жизни (например, моральные или политические).',
    '- Литература: "Political allegory" (Политическая аллегория)\n- Смысл: "Use allegory" (Использовать аллегорию)\n- Пример: "Animal Farm is an allegory" (Скотный двор — это аллегория)',
    [
      { en: '"Animal Farm" is a famous political allegory.', ru: '"Скотный двор" — известная политическая аллегория.' },
      { en: 'The poem is an allegory of life and death.', ru: 'Это стихотворение — аллегория жизни и смерти.' },
      { en: 'He uses allegory to criticize the government.', ru: 'Он использует аллегорию, чтобы критиковать правительство.' },
      { en: 'The play can be read as an allegory for the Cold War.', ru: 'Пьесу можно прочитать как аллегорию Холодной войны.' }
    ]
),

createRichWord('c1_allude', 'Allude', '/əˈluːd/', 'элюд', 'Ссылаться / Намекать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Упоминать что-то или кого-то косвенно (обычно "allude to").',
    '- Разговор: "Allude to a problem" (Намекнуть на проблему)\n- Прошлое: "Allude to the past" (Сослаться на прошлое)\n- Речь: "He alluded to..." (Он упомянул...)',
    [
      { en: 'He alluded to problems with his boss but gave no details.', ru: 'Он намекнул на проблемы с начальником, но не дал подробностей.' },
      { en: 'The minister alluded to the possibility of tax cuts.', ru: 'Министр сослался на возможность снижения налогов.' },
      { en: 'She often alludes to her childhood in her books.', ru: 'В своих книгах она часто ссылается на свое детство.' },
      { en: 'I didn\'t understand who he was alluding to.', ru: 'Я не понял, на кого он намекал.' }
    ]
),

createRichWord('c1_alumni', 'Alumni', '/əˈlʌmnaɪ/', 'эламнай', 'Выпускники', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Бывшие студенты школы, колледжа или университета (множественное число от alumnus/alumna).',
    '- Университет: "University alumni" (Выпускники университета)\n- Встреча: "Alumni association" (Ассоциация выпускников)\n- Мероприятие: "Alumni reunion" (Встреча выпускников)',
    [
      { en: 'The college invited all its alumni to the celebration.', ru: 'Колледж пригласил всех своих выпускников на празднование.' },
      { en: 'Famous alumni include several presidents and actors.', ru: 'Среди известных выпускников есть несколько президентов и актеров.' },
      { en: 'He is an active member of the alumni association.', ru: 'Он активный член ассоциации выпускников.' },
      { en: 'Donations from alumni helped build the new library.', ru: 'Пожертвования выпускников помогли построить новую библиотеку.' }
    ]
),

createRichWord('c1_amass', 'Amass', '/əˈmæs/', 'эмэс', 'Накапливать / Собирать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Собрать большое количество чего-либо (денег, информации) в течение времени.',
    '- Деньги: "Amass a fortune" (Накопить состояние)\n- Данные: "Amass evidence" (Собрать доказательства)\n- Коллекция: "Amass knowledge" (Накопить знания)',
    [
      { en: 'He amassed a huge fortune in the oil business.', ru: 'Он сколотил огромное состояние на нефтяном бизнесе.' },
      { en: 'The lawyer amassed enough evidence to win the case.', ru: 'Адвокат собрал достаточно доказательств, чтобы выиграть дело.' },
      { en: 'She amassed a large collection of rare stamps.', ru: 'Она собрала большую коллекцию редких марок.' },
      { en: 'Clouds amassed on the horizon, signaling a storm.', ru: 'Облака скопились на горизонте, предвещая шторм.' }
    ]
),

createRichWord('c1_amino', 'Amino', '/əˈmiːnəʊ/', 'эминоу', 'Амино-', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к аминокислотам — строительным блокам белков.',
    '- Химия: "Amino acid" (Аминокислота)\n- Здоровье: "Essential amino acids" (Незаменимые аминокислоты)\n- Питание: "Amino supplements" (Аминокислотные добавки)',
    [
      { en: 'Proteins are made up of long chains of amino acids.', ru: 'Белки состоят из длинных цепей аминокислот.' },
      { en: 'There are nine essential amino acids that the body needs.', ru: 'Существует девять незаменимых аминокислот, необходимых организму.' },
      { en: 'Athletes often take amino acid supplements.', ru: 'Спортсмены часто принимают добавки с аминокислотами.' },
      { en: 'The structure of the amino group is important in chemistry.', ru: 'Структура аминогруппы важна в химии.' }
    ]
),

createRichWord('c1_antagonist', 'Antagonist', '/ænˈtæɡənɪst/', 'энтэгэнист', 'Антагонист / Противник', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек, который противостоит кому-то; главный враг в истории.',
    '- История: "Main antagonist" (Главный антагонист)\n- Конфликт: "Political antagonist" (Политический противник)\n- Роль: "Play the antagonist" (Играть роль противника)',
    [
      { en: 'The Joker is the main antagonist in the Batman movie.', ru: 'Джокер — главный антагонист в фильме о Бэтмене.' },
      { en: 'He faced his antagonist in a final debate.', ru: 'Он встретился со своим противником в финальных дебатах.' },
      { en: 'Muscle antagonists work in pairs to move limbs.', ru: 'Мышцы-антагонисты работают парами для движения конечностей.' },
      { en: 'She saw him not as a colleague, but as an antagonist.', ru: 'Она видела в нем не коллегу, а противника.' }
    ]
),

createRichWord('c1_apathy', 'Apathy', '/ˈæpəθi/', 'эпэси', 'Апатия / Безразличие', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Отсутствие интереса, энтузиазма или озабоченности.',
    '- Чувство: "Public apathy" (Общественное безразличие)\n- Выборы: "Voter apathy" (Апатия избирателей)\n- Состояние: "Feeling of apathy" (Чувство апатии)',
    [
      { en: 'Voter apathy resulted in a very low turnout.', ru: 'Апатия избирателей привела к очень низкой явке.' },
      { en: 'There is a general sense of apathy among the students.', ru: 'Среди студентов царит общее чувство апатии.' },
      { en: 'We need to overcome public apathy towards climate change.', ru: 'Нам нужно преодолеть общественное безразличие к изменению климата.' },
      { en: 'His apathy towards his work worries his boss.', ru: 'Его безразличие к работе беспокоит его начальника.' }
    ]
),

createRichWord('c1_apocalypse', 'Apocalypse', '/əˈpɒkəlɪps/', 'эпокэлипс', 'Апокалипсис', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Полное разрушение мира; или очень серьезное событие/катастрофа.',
    '- Событие: "Nuclear apocalypse" (Ядерный апокалипсис)\n- Библия: "The Apocalypse" (Апокалипсис / Откровение)\n- Страх: "Fear the apocalypse" (Бояться апокалипсиса)',
    [
      { en: 'The movie depicts life after a zombie apocalypse.', ru: 'Фильм изображает жизнь после зомби-апокалипсиса.' },
      { en: 'Many people fear a nuclear apocalypse.', ru: 'Многие люди боятся ядерного апокалипсиса.' },
      { en: 'The book describes an environmental apocalypse.', ru: 'Книга описывает экологическую катастрофу (апокалипсис).' },
      { en: 'For the victims, the war was a personal apocalypse.', ru: 'Для жертв война стала личным апокалипсисом.' }
    ]
),

createRichWord('c1_appease', 'Appease', '/əˈpiːz/', 'эпиз', 'Умиротворять / Успокаивать', ProficiencyLevel.C1, 'verb', 'Low', 'Formal',
    'Успокоить кого-то, дав им то, что они хотят (часто с негативным оттенком).',
    '- Политика: "Appease the enemy" (Умиротворить врага)\n- Гнев: "Appease anger" (Усмирить гнев)\n- Толпа: "Appease the crowd" (Успокоить толпу)',
    [
      { en: 'The government tried to appease the protesters by lowering taxes.', ru: 'Правительство пыталось умиротворить протестующих, снизив налоги.' },
      { en: 'Chamberlain tried to appease Hitler to avoid war.', ru: 'Чемберлен пытался умиротворить Гитлера, чтобы избежать войны.' },
      { en: 'Nothing I do seems to appease him.', ru: 'Кажется, ничто из того, что я делаю, не может его успокоить.' },
      { en: 'She bought him a gift to appease his anger.', ru: 'Она купила ему подарок, чтобы усмирить его гнев.' }
    ]
),

createRichWord('c1_archetype', 'Archetype', '/ˈɑːkitaɪp/', 'акитайп', 'Архетип / Прообраз', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Типичный пример чего-либо; или первоначальная модель.',
    '- Литература: "Hero archetype" (Архетип героя)\n- Пример: "Perfect archetype" (Идеальный прообраз)\n- Психология: "Jungian archetype" (Юнгианский архетип)',
    [
      { en: 'Sherlock Holmes is the archetype of the brilliant detective.', ru: 'Шерлок Холмс — это архетип гениального детектива.' },
      { en: 'The story follows the classic archetype of good versus evil.', ru: 'История следует классическому архетипу добра против зла.' },
      { en: 'She is the archetype of a successful businesswoman.', ru: 'Она — прообраз успешной деловой женщины.' },
      { en: 'Carl Jung wrote extensively about psychological archetypes.', ru: 'Карл Юнг много писал о психологических архетипах.' }
    ]
),

createRichWord('c1_ardent', 'Ardent', '/ˈɑːdnt/', 'адэнт', 'Пылкий / Ярый', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Очень увлеченный и страстный в поддержке чего-либо.',
    '- Человек: "Ardent supporter" (Ярый сторонник)\n- Чувство: "Ardent love" (Пылкая любовь)\n- Интерес: "Ardent fan" (Ярый фанат)',
    [
      { en: 'He is an ardent supporter of the local football team.', ru: 'Он ярый болельщик местной футбольной команды.' },
      { en: 'She is an ardent feminist who fights for equality.', ru: 'Она пылкая феминистка, которая борется за равенство.' },
      { en: 'They were ardent lovers in their youth.', ru: 'В молодости они были пылкими любовниками.' },
      { en: 'An ardent desire to learn drove him forward.', ru: 'Страстное желание учиться двигало его вперед.' }
    ]
),

createRichWord('c1_arid', 'Arid', '/ˈærɪd/', 'эрид', 'Засушливый / Скучный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Очень сухой (о земле); или скучный и неинтересный (о теме).',
    '- Климат: "Arid desert" (Засушливая пустыня)\n- Земля: "Arid land" (Сухая земля)\n- Текст: "Arid discussion" (Сухая/скучная дискуссия)',
    [
      { en: 'Few plants can survive in such an arid climate.', ru: 'Немногие растения могут выжить в таком засушливом климате.' },
      { en: 'The desert is vast and arid.', ru: 'Пустыня обширна и засушлива.' },
      { en: 'His speech was long, technical, and arid.', ru: 'Его речь была длинной, технической и скучной.' },
      { en: 'Irrigation turned the arid land into a garden.', ru: 'Орошение превратило сухую землю в сад.' }
    ]
),

createRichWord('c1_arson', 'Arson', '/ˈɑːsn/', 'асон', 'Поджог', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Преступление, заключающееся в намеренном поджоге зданий или имущества.',
    '- Преступление: "Commit arson" (Совершить поджог)\n- Полиция: "Suspected arson" (Подозрение на поджог)\n- Человек: "Arsonist" (Поджигатель)',
    [
      { en: 'The fire was caused by arson, according to the police.', ru: 'По данным полиции, пожар был вызван поджогом.' },
      { en: 'He was arrested and charged with arson.', ru: 'Его арестовали и обвинили в поджоге.' },
      { en: 'Arson represents a serious threat to public safety.', ru: 'Поджог представляет серьезную угрозу общественной безопасности.' },
      { en: 'The old factory was destroyed in an act of arson.', ru: 'Старая фабрика была уничтожена в результате поджога.' }
    ]
),

createRichWord('c1_atheist', 'Atheist', '/ˈeɪθiɪst/', 'эйсиэст', 'Атеист', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, который не верит в существование Бога.',
    '- Вера: "Avowed atheist" (Убежденный атеист)\n- Мнение: "Become an atheist" (Стать атеистом)\n- Аргумент: "Atheist view" (Атеистический взгляд)',
    [
      { en: 'As an atheist, he does not go to church.', ru: 'Как атеист, он не ходит в церковь.' },
      { en: 'Richard Dawkins is a famous atheist writer.', ru: 'Ричард Докинз — известный писатель-атеист.' },
      { en: 'She respects religion but remains an atheist.', ru: 'Она уважает религию, но остается атеисткой.' },
      { en: 'The debate was between a priest and an atheist.', ru: 'Дебаты проходили между священником и атеистом.' }
    ]
),

createRichWord('c1_atrocity', 'Atrocity', '/əˈtrɒsəti/', 'этросэти', 'Зверство / Злодеяние', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Чрезвычайно жестокое и насильственное действие (часто на войне).',
    '- Война: "Commit atrocities" (Совершать зверства)\n- История: "War atrocity" (Военное преступление/зверство)\n- Реакция: "Shocking atrocity" (Шокирующее злодеяние)',
    [
      { en: 'The soldiers were accused of committing terrible atrocities.', ru: 'Солдат обвинили в совершении ужасных зверств.' },
      { en: 'History is full of stories of human atrocity.', ru: 'История полна историй о человеческих злодеяниях.' },
      { en: 'We must ensure such an atrocity never happens again.', ru: 'Мы должны гарантировать, что такое зверство никогда не повторится.' },
      { en: 'Reports of atrocities shocked the world.', ru: 'Сообщения о зверствах потрясли мир.' }
    ]
  ),
createRichWord('c1_auxiliary', 'Auxiliary', '/ɔːɡˈzɪliəri/', 'огзилиэри', 'Вспомогательный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Предоставляющий дополнительную помощь или поддержку.',
    '- Грамматика: "Auxiliary verb" (Вспомогательный глагол)\n- Персонал: "Auxiliary staff" (Вспомогательный персонал)\n- Техника: "Auxiliary power" (Резервное питание)',
    [
      { en: 'The hospital employs many auxiliary nurses.', ru: 'В больнице работает много вспомогательных медсестер.' },
      { en: 'When the main engine failed, the auxiliary power kicked in.', ru: 'Когда основной двигатель отказал, включилось резервное питание.' },
      { en: 'In English, "do" is often used as an auxiliary verb.', ru: 'В английском "do" часто используется как вспомогательный глагол.' },
      { en: 'They provide auxiliary services to the main company.', ru: 'Они предоставляют вспомогательные услуги основной компании.' }
    ]
),

createRichWord('c1_avalanche', 'Avalanche', '/ˈævəlɑːnʃ/', 'эвэланш', 'Лавина', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большая масса снега, льда и камней, падающая с горы.',
    '- Опасность: "Trigger an avalanche" (Вызвать лавину)\n- Переносно: "Avalanche of letters" (Лавина писем)\n- Спасение: "Avalanche victim" (Жертва лавины)',
    [
      { en: 'The skiers were warned about the risk of an avalanche.', ru: 'Лыжников предупредили о риске схода лавины.' },
      { en: 'An avalanche buried the small village in snow.', ru: 'Лавина погребла маленькую деревню под снегом.' },
      { en: 'The company received an avalanche of complaints.', ru: 'Компания получила лавину жалоб.' },
      { en: 'Rescue dogs searched for survivors of the avalanche.', ru: 'Собаки-спасатели искали выживших после лавины.' }
    ]
),

createRichWord('c1_avid', 'Avid', '/ˈævɪd/', 'эвид', 'Заядлый / Алчный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Имеющий или показывающий сильный интерес и энтузиазм к чему-либо.',
    '- Хобби: "Avid reader" (Заядлый читатель)\n- Спорт: "Avid fan" (Ярый фанат)\n- Интерес: "Avid interest" (Жгучий интерес)',
    [
      { en: 'He is an avid reader of science fiction novels.', ru: 'Он заядлый читатель научно-фантастических романов.' },
      { en: 'She is an avid collector of old stamps.', ru: 'Она страстный коллекционер старых марок.' },
      { en: 'They took an avid interest in the investigation.', ru: 'Они проявили живой интерес к расследованию.' },
      { en: 'My father is an avid golfer.', ru: 'Мой отец — заядлый игрок в гольф.' }
    ]
),

createRichWord('c1_ballad', 'Ballad', '/ˈbæləd/', 'бэлэд', 'Баллада', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Медленная сентиментальная или романтическая песня; или стихотворение, рассказывающее историю.',
    '- Музыка: "Love ballad" (Баллада о любви)\n- Стиль: "Power ballad" (Мощная рок-баллада)\n- Литература: "Folk ballad" (Народная баллада)',
    [
      { en: 'He sang a beautiful ballad about lost love.', ru: 'Он спел красивую балладу о потерянной любви.' },
      { en: 'The band is famous for their rock ballads.', ru: 'Группа известна своими рок-балладами.' },
      { en: 'She wrote a ballad inspired by local legends.', ru: 'Она написала балладу, вдохновленную местными легендами.' },
      { en: 'The poem is written in the style of a traditional ballad.', ru: 'Стихотворение написано в стиле традиционной баллады.' }
    ]
),

createRichWord('c1_bamboo', 'Bamboo', '/bæmˈbuː/', 'бэмбу', 'Бамбук', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Высокое тропическое растение с полыми стеблями.',
    '- Растение: "Bamboo shoot" (Побег бамбука)\n- Материал: "Bamboo furniture" (Бамбуковая мебель)\n- Еда: "Eat bamboo" (Есть бамбук)',
    [
      { en: 'Pandas mainly eat bamboo leaves and shoots.', ru: 'Панды в основном едят листья и побеги бамбука.' },
      { en: 'The furniture on the patio is made of bamboo.', ru: 'Мебель на веранде сделана из бамбука.' },
      { en: 'Bamboo grows very quickly in the right climate.', ru: 'Бамбук растет очень быстро в подходящем климате.' },
      { en: 'They built a small hut using bamboo poles.', ru: 'Они построили маленькую хижину, используя бамбуковые шесты.' }
    ]
),

createRichWord('c1_baptise', 'Baptise', '/bæpˈtaɪz/', 'бэптайз', 'Крестить', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Совершать христианскую церемонию крещения (называть и принимать в церковь).',
    '- Религия: "Baptise a baby" (Крестить ребенка)\n- Имя: "Baptised as John" (Крещен как Джон)\n- Обряд: "To be baptised" (Быть крещеным)',
    [
      { en: 'They decided to baptise their son next month.', ru: 'Они решили крестить сына в следующем месяце.' },
      { en: 'He was baptised in the local village church.', ru: 'Он был крещен в местной деревенской церкви.' },
      { en: 'Many adults choose to be baptised later in life.', ru: 'Многие взрослые решают креститься в более позднем возрасте.' },
      { en: 'The priest baptised the child with holy water.', ru: 'Священник окрестил ребенка святой водой.' }
    ]
),

createRichWord('c1_baptism', 'Baptism', '/ˈbæptɪzəm/', 'бэптизэм', 'Крещение', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Христианская религиозная церемония принятия человека в церковь.',
    '- Религия: "Receive baptism" (Принять крещение)\n- Идиома: "Baptism of fire" (Боевое крещение / Тяжелое первое испытание)\n- Церемония: "Attend a baptism" (Посетить крещение)',
    [
      { en: 'The baptism took place on a sunny Sunday morning.', ru: 'Крещение состоялось солнечным воскресным утром.' },
      { en: 'His first day at work was a real baptism of fire.', ru: 'Его первый день на работе стал настоящим боевым крещением.' },
      { en: 'We invited close family to the baby\'s baptism.', ru: 'Мы пригласили близких родственников на крещение ребенка.' },
      { en: 'Baptism is considered a sacrament in many churches.', ru: 'Крещение считается таинством во многих церквях.' }
    ]
),

createRichWord('c1_barbarian', 'Barbarian', '/bɑːˈbeəriən/', 'бабээриэн', 'Варвар', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, которого считают нецивилизованным или жестоким.',
    '- История: "Barbarian invasion" (Вторжение варваров)\n- Поведение: "Act like a barbarian" (Вести себя как варвар)\n- Отношение: "Uncivilized barbarian" (Нецивилизованный варвар)',
    [
      { en: 'The Romans considered anyone outside their empire a barbarian.', ru: 'Римляне считали любого за пределами их империи варваром.' },
      { en: 'Don\'t eat with your hands like a barbarian!', ru: 'Не ешь руками, как варвар!' },
      { en: 'The city was destroyed by barbarian tribes.', ru: 'Город был разрушен варварскими племенами.' },
      { en: 'He described the attackers as ruthless barbarians.', ru: 'Он описал нападавших как безжалостных варваров.' }
    ]
),

createRichWord('c1_barley', 'Barley', '/ˈbɑːli/', 'бали', 'Ячмень', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Злаковое растение, используемое для еды и изготовления пива/виски.',
    '- Еда: "Barley soup" (Ячменный суп)\n- Напиток: "Malted barley" (Соложеный ячмень)\n- Поле: "Field of barley" (Ячменное поле)',
    [
      { en: 'Farmers grow barley to feed their livestock.', ru: 'Фермеры выращивают ячмень, чтобы кормить свой скот.' },
      { en: 'Beer is predominantly made from barley.', ru: 'Пиво преимущественно делается из ячменя.' },
      { en: 'She made a hearty beef and barley stew.', ru: 'Она приготовила сытное рагу из говядины и ячменя.' },
      { en: 'The wind blew across the golden fields of barley.', ru: 'Ветер дул над золотыми полями ячменя.' }
    ]
),

createRichWord('c1_barricade', 'Barricade', '/ˌbærɪˈkeɪd/', 'бэрикейд', 'Баррикада / Забаррикадировать', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Преграда, построенная, чтобы остановить людей (сущ.); блокировать вход (гл.).',
    '- Протест: "Build a barricade" (Построить баррикаду)\n- Полиция: "Police barricade" (Полицейское заграждение)\n- Глагол: "Barricade the door" (Забаррикадировать дверь)',
    [
      { en: 'Protesters built a barricade across the main street.', ru: 'Протестующие построили баррикаду поперек главной улицы.' },
      { en: 'He barricaded himself in the room and refused to come out.', ru: 'Он забаррикадировался в комнате и отказался выходить.' },
      { en: 'Police broke through the barricade to reach the crowd.', ru: 'Полиция прорвала баррикаду, чтобы добраться до толпы.' },
      { en: 'Furniture was used to form a makeshift barricade.', ru: 'Мебель использовалась для создания импровизированной баррикады.' }
    ]
),

createRichWord('c1_benchmark', 'Benchmark', '/ˈbentʃmɑːk/', 'бэнчмак', 'Эталон / Критерий', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Стандарт, по которому оцениваются другие вещи.',
    '- Бизнес: "Set a benchmark" (Установить стандарт)\n- Качество: "Industry benchmark" (Отраслевой эталон)\n- Тест: "Benchmark test" (Эталонный тест)',
    [
      { en: 'This product sets a new benchmark for quality.', ru: 'Этот продукт устанавливает новый эталон качества.' },
      { en: 'We use their performance as a benchmark for our own.', ru: 'Мы используем их показатели как ориентир для наших собственных.' },
      { en: 'The company is the benchmark against which others are measured.', ru: 'Эта компания — эталон, по которому оценивают других.' },
      { en: 'These figures will serve as a benchmark for future comparison.', ru: 'Эти цифры послужат критерием для будущего сравнения.' }
    ]
),

createRichWord('c1_beverage', 'Beverage', '/ˈbevərɪdʒ/', 'бэвэридж', 'Напиток', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Любой тип напитка (формальное слово).',
    '- Меню: "Hot beverage" (Горячий напиток)\n- Алкоголь: "Alcoholic beverage" (Алкогольный напиток)\n- Выбор: "Beverage list" (Карта напитков)',
    [
      { en: 'Tea and coffee are popular hot beverages.', ru: 'Чай и кофе — популярные горячие напитки.' },
      { en: 'No alcoholic beverages are allowed in the park.', ru: 'В парке запрещены алкогольные напитки.' },
      { en: 'Please select a beverage from the menu.', ru: 'Пожалуйста, выберите напиток из меню.' },
      { en: 'The flight attendant offered us a cold beverage.', ru: 'Стюардесса предложила нам холодный напиток.' }
    ]
),

createRichWord('c1_bingo', 'Bingo', '/ˈbɪŋɡəʊ/', 'бингоу', 'Бинго / Лото', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Игра, в которой отмечают названные числа на карточках; восклицание при успехе.',
    '- Игра: "Play bingo" (Играть в бинго)\n- Место: "Bingo hall" (Зал для игры в бинго)\n- Восклицание: "Bingo!" (Есть! / Угадал!)',
    [
      { en: 'My grandmother goes to play bingo every Tuesday.', ru: 'Моя бабушка ходит играть в бинго каждый вторник.' },
      { en: 'Bingo! That is exactly the answer I was looking for.', ru: 'Бинго! Это именно тот ответ, который я искал.' },
      { en: 'The prize for winning the bingo game was fifty pounds.', ru: 'Призом за победу в игре бинго были пятьдесят фунтов.' },
      { en: 'Bingo is a game of chance popular with older people.', ru: 'Бинго — азартная игра, популярная среди пожилых людей.' }
    ]
),

createRichWord('c1_blackmail', 'Blackmail', '/ˈblækmeɪl/', 'блэкмейл', 'Шантаж / Шантажировать', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Требование денег в обмен на неразглашение секретов (сущ.); или действие шантажа (гл.).',
    '- Преступление: "Commit blackmail" (Совершить шантаж)\n- Эмоции: "Emotional blackmail" (Эмоциональный шантаж)\n- Глагол: "Blackmail someone" (Шантажировать кого-то)',
    [
      { en: 'He tried to blackmail her with compromising photos.', ru: 'Он пытался шантажировать ее компрометирующими фотографиями.' },
      { en: 'The politician claimed he was a victim of blackmail.', ru: 'Политик заявил, что стал жертвой шантажа.' },
      { en: 'Emotional blackmail is a form of manipulation.', ru: 'Эмоциональный шантаж — это форма манипуляции.' },
      { en: 'They were sent to prison for blackmailing the CEO.', ru: 'Их отправили в тюрьму за шантаж генерального директора.' }
    ]
),

createRichWord('c1_blunder', 'Blunder', '/ˈblʌndə/', 'бландэ', 'Грубая ошибка / Оплошность', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Серьезная или глупая ошибка, обычно вызванная невнимательностью.',
    '- Ошибка: "Make a blunder" (Совершить оплошность)\n- Политика: "Political blunder" (Политическая ошибка)\n- Описание: "Terrible blunder" (Ужасная ошибка)',
    [
      { en: 'I made a terrible blunder by forgetting her name.', ru: 'Я совершил ужасную оплошность, забыв ее имя.' },
      { en: 'The general admitted that the attack was a strategic blunder.', ru: 'Генерал признал, что атака была стратегической ошибкой.' },
      { en: 'One small blunder can ruin the whole project.', ru: 'Одна маленькая оплошность может разрушить весь проект.' },
      { en: 'He blundered into the meeting room by mistake.', ru: 'Он по ошибке ввалился (допустил оплошность, войдя) в переговорную.' }
    ]
),

createRichWord('c1_bonfire', 'Bonfire', '/ˈbɒnfaɪə/', 'бонфайэ', 'Костер', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большой огонь, разведенный на улице для праздника или сжигания мусора.',
    '- Праздник: "Bonfire Night" (Ночь костров - праздник в UK)\n- Действие: "Light a bonfire" (Зажечь костер)\n- Место: "Sit around the bonfire" (Сидеть у костра)',
    [
      { en: 'We gathered around the bonfire to keep warm.', ru: 'Мы собрались вокруг костра, чтобы согреться.' },
      { en: 'They built a huge bonfire on the beach.', ru: 'Они построили огромный костер на пляже.' },
      { en: 'Bonfire Night is celebrated with fireworks in November.', ru: 'Ночь костров празднуется фейерверками в ноябре.' },
      { en: 'We burned the old leaves on a bonfire.', ru: 'Мы сожгли старые листья в костре.' }
    ]
),

createRichWord('c1_booze', 'Booze', '/buːz/', 'буз', 'Выпивка / Спиртное', ProficiencyLevel.C1, 'noun', 'Medium', 'Informal',
    'Алкогольные напитки (разговорное).',
    '- Вечеринка: "Bring your own booze" (Приносить свою выпивку)\n- Количество: "Lot of booze" (Много выпивки)\n- Глагол: "Out boozing" (Пьянствовать)',
    [
      { en: 'There was plenty of free booze at the party.', ru: 'На вечеринке было много бесплатной выпивки.' },
      { en: 'He spent all his money on booze and cigarettes.', ru: 'Он потратил все свои деньги на выпивку и сигареты.' },
      { en: 'They went out boozing last Friday night.', ru: 'Они ходили пьянствовать в прошлую пятницу вечером.' },
      { en: 'Are you bringing any booze to the dinner?', ru: 'Ты принесешь какую-нибудь выпивку на ужин?' }
    ]
),

createRichWord('c1_bouquet', 'Bouquet', '/buˈkeɪ/', 'букэй', 'Букет', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Связка цветов, красиво оформленная; или аромат вина.',
    '- Цветы: "Bouquet of roses" (Букет роз)\n- Свадьба: "Bride\'s bouquet" (Букет невесты)\n- Вино: "Rich bouquet" (Богатый букет/аромат)',
    [
      { en: 'He sent her a huge bouquet of red roses.', ru: 'Он прислал ей огромный букет красных роз.' },
      { en: 'The bride threw her bouquet over her shoulder.', ru: 'Невеста бросила свой букет через плечо.' },
      { en: 'This wine has a wonderful floral bouquet.', ru: 'У этого вина чудесный цветочный букет (аромат).' },
      { en: 'I bought a bouquet of flowers for my mother.', ru: 'Я купил букет цветов для своей мамы.' }
    ]
),

createRichWord('c1_broth', 'Broth', '/brɒθ/', 'брос', 'Бульон', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Жидкий суп, сваренный на мясе, рыбе или овощах.',
    '- Еда: "Chicken broth" (Куриный бульон)\n- Суп: "Vegetable broth" (Овощной бульон)\n- Вкус: "Bone broth" (Костный бульон)',
    [
      { en: 'She made a nourishing chicken broth for the sick child.', ru: 'Она приготовила питательный куриный бульон для больного ребенка.' },
      { en: 'Add some noodles to the broth to make it filling.', ru: 'Добавь немного лапши в бульон, чтобы сделать его сытным.' },
      { en: 'Bone broth is said to be good for your health.', ru: 'Говорят, что костный бульон полезен для здоровья.' },
      { en: 'The soup consists of a clear broth with vegetables.', ru: 'Суп состоит из прозрачного бульона с овощами.' }
    ]
),

createRichWord('c1_bunk', 'Bunk', '/bʌŋk/', 'банк', 'Койка / Чепуха', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Узкая кровать (часто двухъярусная); или (разг.) полная чепуха.',
    '- Мебель: "Bunk beds" (Двухъярусная кровать)\n- Сленг: "Load of bunk" (Полная чушь)\n- Сон: "Sleep in a bunk" (Спать на койке)',
    [
      { en: 'The children sleep in bunk beds in the same room.', ru: 'Дети спят на двухъярусной кровати в одной комнате.' },
      { en: 'I slept on the top bunk on the train.', ru: 'Я спал на верхней полке (койке) в поезде.' },
      { en: 'Don\'t listen to him, he is talking bunk.', ru: 'Не слушай его, он несет чепуху.' },
      { en: 'Can I bag the bottom bunk?', ru: 'Могу я занять нижнюю койку?' }
    ]
),

createRichWord('c1_busted', 'Busted', '/ˈbʌstɪd/', 'бастид', 'Пойманный / Сломанный', ProficiencyLevel.C1, 'adj', 'Medium', 'Slang',
    'Сленговое слово, означающее "пойман с поличным" или "сломанный".',
    '- Полиция: "You are busted" (Ты попался/арестован)\n- Вещь: "Busted lip" (Разбитая губа)\n- Состояние: "Flat busted" (Без гроша)',
    [
      { en: 'The police busted the drug dealers yesterday.', ru: 'Полиция накрыла наркоторговцев вчера.' },
      { en: 'I can\'t call you, my phone is busted.', ru: 'Я не могу позвонить тебе, мой телефон сломан.' },
      { en: 'He got busted for cheating on the exam.', ru: 'Его поймали (спалили) на списывании на экзамене.' },
      { en: 'Look at that busted old car.', ru: 'Посмотри на эту разбитую старую машину.' }
    ]
),

createRichWord('c1_caddie', 'Caddie', '/ˈkædi/', 'кэди', 'Кэдди (помощник гольфиста)', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, который носит клюшки игрока в гольф и дает советы.',
    '- Гольф: "Golf caddie" (Гольф-кэдди)\n- Работа: "Work as a caddie" (Работать кэдди)\n- Совет: "Ask the caddie" (Спросить кэдди)',
    [
      { en: 'The caddie suggested using a different club.', ru: 'Кэдди посоветовал использовать другую клюшку.' },
      { en: 'He earned extra money working as a caddie in the summer.', ru: 'Он зарабатывал дополнительные деньги, работая кэдди летом.' },
      { en: 'A good caddie knows the golf course perfectly.', ru: 'Хороший кэдди знает поле для гольфа идеально.' },
      { en: 'The player and his caddie celebrated the victory.', ru: 'Игрок и его кэдди отпраздновали победу.' }
    ]
),

createRichWord('c1_camouflage', 'Camouflage', '/ˈkæməflɑːʒ/', 'кэмэфлаж', 'Камуфляж / Маскировка', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Окраска или материалы, делающие что-то трудноразличимым на фоне окружения.',
    '- Армия: "Wear camouflage" (Носить камуфляж)\n- Животные: "Natural camouflage" (Природная маскировка)\n- Глагол: "To camouflage" (Маскировать)',
    [
      { en: 'Soldiers wear green camouflage to hide in the forest.', ru: 'Солдаты носят зеленый камуфляж, чтобы прятаться в лесу.' },
      { en: 'The lizard\'s skin acts as perfect camouflage.', ru: 'Кожа ящерицы действует как идеальная маскировка.' },
      { en: 'They tried to camouflage the tank with branches.', ru: 'Они пытались замаскировать танк ветками.' },
      { en: 'The bird\'s feathers provide excellent camouflage.', ru: 'Перья птицы обеспечивают отличную маскировку.' }
    ]
),

createRichWord('c1_candid', 'Candid', '/ˈkændɪd/', 'кэндид', 'Искренний / Откровенный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Честный и прямой; или (о фото) сделанный неожиданно, без позирования.',
    '- Разговор: "Candid opinion" (Искреннее мнение)\n- Фото: "Candid camera" (Скрытая камера)\n- Характер: "To be candid" (Честно говоря)',
    [
      { en: 'To be candid, I don\'t think you should go.', ru: 'Честно говоря, я не думаю, что тебе стоит идти.' },
      { en: 'She gave a very candid interview about her life.', ru: 'Она дала очень откровенное интервью о своей жизни.' },
      { en: 'I appreciate your candid feedback on my work.', ru: 'Я ценю твой искренний отзыв о моей работе.' },
      { en: 'He took a candid photo of the children playing.', ru: 'Он сделал естественное (непостановочное) фото играющих детей.' }
    ]
  ),
createRichWord('c1_acoustic', 'Acoustic', '/əˈkuːstɪk/', 'экустик', 'Акустический', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Связанный со звуком или слухом; (о музыке) использующий инструменты без электрического усиления.',
    '- Музыка: "Acoustic guitar" (Акустическая гитара)\n- Звук: "Acoustic properties" (Акустические свойства)\n- Выступление: "Acoustic version" (Акустическая версия)',
    [
      { en: 'He played a beautiful song on his acoustic guitar.', ru: 'Он сыграл красивую песню на своей акустической гитаре.' },
      { en: 'The acoustic properties of the hall are excellent.', ru: 'Акустические свойства зала превосходны.' },
      { en: 'They recorded an acoustic version of their hit song.', ru: 'Они записали акустическую версию своего хита.' },
      { en: 'Dogs have a much better acoustic range than humans.', ru: 'У собак гораздо лучший акустический диапазон, чем у людей.' }
    ]
),

createRichWord('c1_afloat', 'Afloat', '/əˈfləʊt/', 'эфлоут', 'На плаву', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Плавающий на поверхности воды; (перен.) не имеющий долгов, способный функционировать.',
    '- Вода: "Stay afloat" (Держаться на плаву)\n- Бизнес: "Keep the company afloat" (Удержать компанию на плаву)\n- Состояние: "Back afloat" (Снова на плаву)',
    [
      { en: 'They managed to keep the boat afloat despite the storm.', ru: 'Им удалось удержать лодку на плаву, несмотря на шторм.' },
      { en: 'She took a second job to keep the family financially afloat.', ru: 'Она устроилась на вторую работу, чтобы удержать семью на плаву финансово.' },
      { en: 'The wreckage was still afloat days after the accident.', ru: 'Обломки все еще были на плаву спустя дни после аварии.' },
      { en: 'We are struggling to stay afloat in this economy.', ru: 'Мы изо всех сил пытаемся удержаться на плаву в этой экономике.' }
    ]
),

createRichWord('c1_amiss', 'Amiss', '/əˈmɪs/', 'эмис', 'Неладный / Неверный', ProficiencyLevel.C1, 'adj', 'Low', 'Neutral',
    'Не совсем правильный; не такой, как должен быть (обычно используется в выражении "something is amiss").',
    '- Подозрение: "Something is amiss" (Что-то неладное)\n- Отношение: "Take amiss" (Истолковать превратно / Обидеться)\n- Проблема: "Nothing amiss" (Ничего плохого)',
    [
      { en: 'I noticed immediately that something was amiss.', ru: 'Я сразу заметил, что что-то неладно.' },
      { en: 'Please do not take my comments amiss; I mean well.', ru: 'Пожалуйста, не поймите мои комментарии превратно; я желаю добра.' },
      { en: 'She checked the engine, but found nothing amiss.', ru: 'Она проверила двигатель, но не нашла ничего неисправного.' },
      { en: 'His silence suggested that something was seriously amiss.', ru: 'Его молчание наводило на мысль, что что-то серьезно не так.' }
    ]
),

createRichWord('c1_amp', 'Amp', '/æmp/', 'эмп', 'Усилитель / Ампер', ProficiencyLevel.C1, 'noun', 'Medium', 'Informal',
    'Сокращение от "amplifier" (усилитель звука) или "ampere" (единица силы тока).',
    '- Музыка: "Guitar amp" (Гитарный усилитель)\n- Электричество: "13-amp fuse" (Предохранитель на 13 ампер)\n- Сленг: "Amped up" (Взволнованный / Энергичный)',
    [
      { en: 'He plugged his electric guitar into the amp.', ru: 'Он подключил свою электрогитару к усилителю.' },
      { en: 'This circuit requires a 10-amp fuse.', ru: 'Этой цепи требуется предохранитель на 10 ампер.' },
      { en: 'The crowd was amped up for the concert.', ru: 'Толпа была на взводе (в предвкушении) перед концертом.' },
      { en: 'Turn up the amp, I can\'t hear the bass.', ru: 'Сделай усилитель погромче, я не слышу басов.' }
    ]
),

createRichWord('c1_analogue', 'Analogue', '/ˈænəlɒɡ/', 'энэлог', 'Аналог / Аналоговый', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек или вещь, сопоставимая с другой; (прил.) использующий физические величины, а не цифры (не цифровой).',
    '- Сравнение: "Modern analogue" (Современный аналог)\n- Техника: "Analogue clock" (Аналоговые часы)\n- Связь: "Analogue signal" (Аналоговый сигнал)',
    [
      { en: 'The wing of a bat is an analogue to the arm of a human.', ru: 'Крыло летучей мыши — это аналог руки человека.' },
      { en: 'Many audiophiles still prefer analogue recordings like vinyl.', ru: 'Многие аудиофилы до сих пор предпочитают аналоговые записи, такие как винил.' },
      { en: 'Is there a digital analogue to this old process?', ru: 'Существует ли цифровой аналог этого старого процесса?' },
      { en: 'He prefers reading an analogue watch over a digital one.', ru: 'Он предпочитает определять время по аналоговым часам, а не по цифровым.' }
    ]
),

createRichWord('c1_ancestry', 'Ancestry', '/ˈænsestri/', 'энсэстри', 'Происхождение / Родословная', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Происхождение семьи или этнические корни человека.',
    '- Семья: "Trace ancestry" (Отслеживать родословную)\n- Корни: "Irish ancestry" (Ирландское происхождение)\n- История: "Common ancestry" (Общее происхождение)',
    [
      { en: 'She is proud of her Scottish ancestry.', ru: 'Она гордится своим шотландским происхождением.' },
      { en: 'DNA tests can reveal a lot about your ancestry.', ru: 'ДНК-тесты могут многое рассказать о вашем происхождении.' },
      { en: 'Humans and apes share a common ancestry.', ru: 'Люди и человекообразные обезьяны имеют общее происхождение.' },
      { en: 'He traced his ancestry back to the 17th century.', ru: 'Он проследил свою родословную до 17-го века.' }
    ]
),

createRichWord('c1_asteroid', 'Asteroid', '/ˈæstərɔɪd/', 'эстэройд', 'Астероид', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Небольшое скалистое тело, вращающееся вокруг Солнца.',
    '- Космос: "Asteroid belt" (Пояс астероидов)\n- Угроза: "Asteroid impact" (Столкновение с астероидом)\n- Наука: "Discover an asteroid" (Открыть астероид)',
    [
      { en: 'Scientists are tracking an asteroid that could pass near Earth.', ru: 'Ученые отслеживают астероид, который может пройти рядом с Землей.' },
      { en: 'The dinosaur extinction was caused by a massive asteroid impact.', ru: 'Вымирание динозавров было вызвано столкновением с массивным астероидом.' },
      { en: 'Most asteroids are found in a belt between Mars and Jupiter.', ru: 'Большинство астероидов находятся в поясе между Марсом и Юпитером.' },
      { en: 'They named the newly discovered asteroid after a famous singer.', ru: 'Они назвали недавно открытый астероид в честь известного певца.' }
    ]
),

createRichWord('c1_astrology', 'Astrology', '/əˈstrɒlədʒi/', 'эстролэджи', 'Астрология', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Изучение движения планет и звезд с верой в то, что они влияют на человеческие события.',
    '- Предсказание: "Believe in astrology" (Верить в астрологию)\n- Знаки: "Astrology sign" (Знак зодиака)\n- Чтение: "Read astrology" (Читать гороскопы)',
    [
      { en: 'She reads her horoscope every day because she believes in astrology.', ru: 'Она читает свой гороскоп каждый день, потому что верит в астрологию.' },
      { en: 'Astrology is often considered a pseudoscience.', ru: 'Астрология часто считается лженаукой.' },
      { en: 'According to astrology, Mars influences energy and conflict.', ru: 'Согласно астрологии, Марс влияет на энергию и конфликты.' },
      { en: 'He consulted an expert in astrology to choose a wedding date.', ru: 'Он проконсультировался с экспертом по астрологии, чтобы выбрать дату свадьбы.' }
    ]
),

createRichWord('c1_attire', 'Attire', '/əˈtaɪə/', 'этайэ', 'Наряд / Одежда', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Одежда, особенно формальная или предназначенная для особого случая.',
    '- Дресс-код: "Formal attire" (Формальная одежда)\n- Стиль: "Casual attire" (Повседневная одежда)\n- Случай: "Appropriate attire" (Соответствующий наряд)',
    [
      { en: 'Formal attire is required for the gala dinner.', ru: 'Для гала-ужина требуется формальная одежда.' },
      { en: 'He was dressed in strange attire for a business meeting.', ru: 'Он был одет в странный наряд для деловой встречи.' },
      { en: 'Proper attire must be worn when visiting religious sites.', ru: 'При посещении религиозных мест необходимо носить подобающую одежду.' },
      { en: 'Guests were asked to wear black-tie attire.', ru: 'Гостей попросили надеть смокинги и вечерние платья.' }
    ]
  ),
createRichWord('c1_autistic', 'Autistic', '/ɔːˈtɪstɪk/', 'отистик', 'Аутичный / Страдающий аутизмом', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Относящийся к аутизму — состоянию, влияющему на социальное взаимодействие и общение.',
    '- Здоровье: "Autistic spectrum" (Аутистический спектр)\n- Ребенок: "Autistic child" (Ребенок с аутизмом)\n- Диагноз: "Diagnosed as autistic" (Диагностирован как аутист)',
    [
      { en: 'Many autistic children have exceptional talents in specific areas.', ru: 'Многие дети с аутизмом обладают исключительными талантами в определенных областях.' },
      { en: 'He works with autistic adults to help them find employment.', ru: 'Он работает со взрослыми аутистами, помогая им найти работу.' },
      { en: 'Understanding autistic behavior requires patience and empathy.', ru: 'Понимание поведения аутистов требует терпения и сочувствия.' },
      { en: 'She is on the autistic spectrum but functions very well.', ru: 'Она находится в аутистическом спектре, но очень хорошо функционирует.' }
    ]
),

createRichWord('c1_automotive', 'Automotive', '/ˌɔːtəˈməʊtɪv/', 'отэмоутив', 'Автомобильный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Связанный с транспортными средствами, приводимыми в движение двигателем.',
    '- Индустрия: "Automotive industry" (Автомобильная промышленность)\n- Детали: "Automotive parts" (Автомобильные запчасти)\n- Инженер: "Automotive engineer" (Автомобильный инженер)',
    [
      { en: 'The automotive industry is facing significant changes with electric cars.', ru: 'Автомобильная промышленность сталкивается со значительными изменениями из-за электромобилей.' },
      { en: 'He works as an automotive engineer for a major company.', ru: 'Он работает автомобильным инженером в крупной компании.' },
      { en: 'Automotive safety standards have improved over the years.', ru: 'Стандарты автомобильной безопасности улучшились с годами.' },
      { en: 'This shop specializes in automotive repairs.', ru: 'Этот магазин специализируется на ремонте автомобилей.' }
    ]
),

createRichWord('c1_baggy', 'Baggy', '/ˈbæɡi/', 'бэги', 'Мешковатый', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Висящий свободно, слишком большой (об одежде).',
    '- Одежда: "Baggy trousers" (Мешковатые брюки)\n- Стиль: "Baggy jumper" (Объемный джемпер)\n- Описание: "Loose and baggy" (Свободный и мешковатый)',
    [
      { en: 'He prefers wearing baggy jeans and a t-shirt.', ru: 'Он предпочитает носить мешковатые джинсы и футболку.' },
      { en: 'The sweater was old and baggy at the elbows.', ru: 'Свитер был старым и растянутым (мешковатым) на локтях.' },
      { en: 'Baggy clothes were very fashionable in the nineties.', ru: 'Мешковатая одежда была очень модной в девяностые.' },
      { en: 'She wore a baggy shirt to be comfortable.', ru: 'Она надела свободную рубашку, чтобы чувствовать себя комфортно.' }
    ]
),

createRichWord('c1_basil', 'Basil', '/ˈbæzl/', 'бэзл', 'Базилик', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Ароматическая трава, часто используемая в кулинарии (особенно итальянской).',
    '- Еда: "Fresh basil" (Свежий базилик)\n- Соус: "Tomato and basil" (Томат и базилик)\n- Сад: "Grow basil" (Выращивать базилик)',
    [
      { en: 'I added some fresh basil to the pasta sauce.', ru: 'Я добавил немного свежего базилика в соус для пасты.' },
      { en: 'Basil smells wonderful when you chop it.', ru: 'Базилик чудесно пахнет, когда его режешь.' },
      { en: 'Pesto is typically made with pine nuts and basil.', ru: 'Песто обычно делают из кедровых орехов и базилика.' },
      { en: 'We grow basil in a pot on the windowsill.', ru: 'Мы выращиваем базилик в горшке на подоконнике.' }
    ]
),

createRichWord('c1_bazaar', 'Bazaar', '/bəˈzɑː/', 'бэза', 'Базар / Рынок', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Рынок в ближневосточной стране; или распродажа товаров для благотворительности.',
    '- Место: "Grand bazaar" (Гранд-базар)\n- Благотворительность: "Charity bazaar" (Благотворительная ярмарка)\n- Покупки: "Christmas bazaar" (Рождественский базар)',
    [
      { en: 'We visited the famous spice bazaar in Istanbul.', ru: 'Мы посетили знаменитый базар специй в Стамбуле.' },
      { en: 'The church holds a charity bazaar every year.', ru: 'Церковь проводит благотворительную ярмарку каждый год.' },
      { en: 'You can find almost anything in the bustling bazaar.', ru: 'На шумном базаре можно найти почти всё.' },
      { en: 'She bought a rug at the local bazaar.', ru: 'Она купила ковер на местном базаре.' }
    ]
),

createRichWord('c1_beaver', 'Beaver', '/ˈbiːvə/', 'бивэ', 'Бобр', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Животное с широким плоским хвостом, которое строит плотины на реках.',
    '- Животное: "Busy as a beaver" (Занятой как бобр / Трудолюбивый)\n- Сооружение: "Beaver dam" (Бобровая плотина)\n- Действие: "Beaver away" (Усердно работать - идиома)',
    [
      { en: 'Beavers can cut down trees with their strong teeth.', ru: 'Бобры могут валить деревья своими сильными зубами.' },
      { en: 'We saw a large beaver dam across the river.', ru: 'Мы видели большую бобровую плотину поперек реки.' },
      { en: 'He has been beavering away at his homework all night.', ru: 'Он корпел над домашним заданием всю ночь.' },
      { en: 'The beaver is a symbol of hard work and industry.', ru: 'Бобр — символ тяжелого труда и усердия.' }
    ]
),

createRichWord('c1_belated', 'Belated', '/bɪˈleɪtɪd/', 'билейтид', 'Запоздалый', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Происходящий или приходящий позже, чем ожидалось.',
    '- Праздник: "Belated birthday" (Запоздалое поздравление с днём рождения)\n- Извинение: "Belated apology" (Запоздалое извинение)\n- Реакция: "Belated recognition" (Запоздалое признание)',
    [
      { en: 'Happy belated birthday! Sorry I missed the actual day.', ru: 'С прошедшим днем рождения! Извини, что пропустил сам день.' },
      { en: 'They made a belated attempt to fix the problem.', ru: 'Они предприняли запоздалую попытку исправить проблему.' },
      { en: 'He offered a belated apology for his rude behavior.', ru: 'Он принес запоздалые извинения за свое грубое поведение.' },
      { en: 'The recognition was welcome, though somewhat belated.', ru: 'Признание было желанным, хотя и несколько запоздалым.' }
    ]
),

createRichWord('c1_binge', 'Binge', '/bɪndʒ/', 'биндж', 'Запой / Чрезмерное увлечение', ProficiencyLevel.C1, 'verb', 'Medium', 'Informal',
    'Делать что-то в избытке за короткое время (есть, пить, смотреть сериалы).',
    '- Еда: "Binge eating" (Переедание / Обжорство)\n- ТВ: "Binge-watch" (Смотреть запоем)\n- Алкоголь: "Drinking binge" (Запой)',
    [
      { en: 'I tend to binge on chocolate when I am stressed.', ru: 'Я склонен объедаться шоколадом, когда у меня стресс.' },
      { en: 'We decided to binge-watch the entire series this weekend.', ru: 'Мы решили посмотреть весь сериал запоем в эти выходные.' },
      { en: 'He went on a drinking binge after losing his job.', ru: 'Он ушел в запой после потери работы.' },
      { en: 'Binge eating can lead to serious health problems.', ru: 'Компульсивное переедание может привести к серьезным проблемам со здоровьем.' }
    ]
),

createRichWord('c1_biodiversity', 'Biodiversity', '/ˌbaɪəʊdaɪˈvɜːsəti/', 'байодайвёсэти', 'Биоразнообразие', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Разнообразие растительной и животной жизни в мире или в конкретной среде обитания.',
    '- Природа: "Loss of biodiversity" (Потеря биоразнообразия)\n- Защита: "Protect biodiversity" (Защищать биоразнообразие)\n- Экология: "Rich biodiversity" (Богатое биоразнообразие)',
    [
      { en: 'The rainforest is known for its incredible biodiversity.', ru: 'Тропический лес известен своим невероятным биоразнообразием.' },
      { en: 'Climate change poses a threat to global biodiversity.', ru: 'Изменение климата представляет угрозу для глобального биоразнообразия.' },
      { en: 'Preserving biodiversity is essential for a healthy ecosystem.', ru: 'Сохранение биоразнообразия необходимо для здоровой экосистемы.' },
      { en: 'Pollution significantly reduces the biodiversity of the river.', ru: 'Загрязнение значительно снижает биоразнообразие реки.' }
    ]
),

createRichWord('c1_biographer', 'Biographer', '/baɪˈɒɡrəfə/', 'байогрэфэ', 'Биограф', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, который пишет историю жизни другого человека.',
    '- Книги: "Official biographer" (Официальный биограф)\n- Работа: "Noted biographer" (Известный биограф)\n- Исследование: "The biographer claims" (Биограф утверждает)',
    [
      { en: 'The biographer spent years researching the president\'s life.', ru: 'Биограф потратил годы на изучение жизни президента.' },
      { en: 'He is the official biographer of the royal family.', ru: 'Он является официальным биографом королевской семьи.' },
      { en: 'A good biographer tries to remain objective.', ru: 'Хороший биограф старается оставаться объективным.' },
      { en: 'The biographer uncovered new details about the actor\'s childhood.', ru: 'Биограф раскрыл новые подробности о детстве актера.' }
    ]
),

createRichWord('c1_blacksmith', 'Blacksmith', '/ˈblæksmɪθ/', 'блэксмис', 'Кузнец', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, который делает и ремонтирует вещи из железа вручную.',
    '- Профессия: "Village blacksmith" (Деревенский кузнец)\n- Действие: "Blacksmith\'s hammer" (Молот кузнеца)\n- Место: "Blacksmith\'s forge" (Кузница)',
    [
      { en: 'The blacksmith forged a new horseshoe from iron.', ru: 'Кузнец выковал новую подкову из железа.' },
      { en: 'In the past, every village needed a blacksmith.', ru: 'В прошлом каждой деревне нужен был кузнец.' },
      { en: 'We watched the blacksmith shape the hot metal.', ru: 'Мы наблюдали, как кузнец придает форму горячему металлу.' },
      { en: 'Being a blacksmith requires great physical strength.', ru: 'Работа кузнеца требует большой физической силы.' }
    ]
),

createRichWord('c1_blindfold', 'Blindfold', '/ˈblaɪndfəʊld/', 'блайндфоулд', 'Повязка на глаза / Завязывать глаза', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Закрыть чьи-то глаза тканью, чтобы они не могли видеть (глаг.); или сама повязка (сущ.).',
    '- Действие: "Blindfold the prisoner" (Завязать глаза пленнику)\n- Игра: "Wear a blindfold" (Носить повязку на глазах)\n- Описание: "Did it blindfolded" (Сделал это с закрытыми глазами/легко)',
    [
      { en: 'They blindfolded the hostage so he couldn\'t see where he was going.', ru: 'Заложнику завязали глаза, чтобы он не видел, куда идет.' },
      { en: 'She put on a blindfold for the game.', ru: 'Она надела повязку на глаза для игры.' },
      { en: 'I could assemble this machine blindfolded.', ru: 'Я мог бы собрать эту машину с закрытыми глазами.' },
      { en: 'He was led blindfolded into the secret room.', ru: 'Его с завязанными глазами ввели в тайную комнату.' }
    ]
),

createRichWord('c1_bonnet', 'Bonnet', '/ˈbɒnɪt/', 'бонит', 'Капот / Чепчик', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Металлическая крышка двигателя автомобиля (в британском английском; в США - hood); или тип шляпы.',
    '- Машина: "Open the bonnet" (Открыть капот)\n- Одежда: "Baby bonnet" (Детский чепчик)\n- Проверка: "Under the bonnet" (Под капотом)',
    [
      { en: 'Smoke was coming from under the bonnet of the car.', ru: 'Из-под капота машины шел дым.' },
      { en: 'He lifted the bonnet to check the oil level.', ru: 'Он поднял капот, чтобы проверить уровень масла.' },
      { en: 'The baby looked cute in her pink bonnet.', ru: 'Малышка выглядела мило в своем розовом чепчике.' },
      { en: 'In America, they call the bonnet a "hood".', ru: 'В Америке капот называют "hood".' }
    ]
  ),
createRichWord('c1_academia', 'Academia', '/ˌækəˈdiːmiə/', 'экэдимиа', 'Академическая среда', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Сообщество, связанное с университетами, образованием и исследовательской деятельностью.',
    '- Работа: "Career in academia" (Карьера в науке)\n- Мир: "World of academia" (Мир академии)\n- Среда: "Enter academia" (Войти в академическую среду)',
    [
      { en: 'He decided to leave the corporate world and return to academia.', ru: 'Он решил покинуть корпоративный мир и вернуться в академическую среду.' },
      { en: 'Academia can be a very competitive environment for young researchers.', ru: 'Академическая среда может быть очень конкурентной для молодых исследователей.' },
      { en: 'Her contributions to academia have been widely recognized.', ru: 'Ее вклад в науку был широко признан.' },
      { en: 'There is often a disconnect between academia and industry.', ru: 'Часто существует разрыв между академической средой и промышленностью.' }
    ]
),

createRichWord('c1_acne', 'Acne', '/ˈækni/', 'акни', 'Акне / Угри', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Кожное заболевание, характеризующееся появлением красных прыщей на лице и шее.',
    '- Кожа: "Suffer from acne" (Страдать от акне)\n- Лечение: "Acne treatment" (Лечение угрей)\n- Подростки: "Teenage acne" (Подростковые прыщи)',
    [
      { en: 'Many teenagers feel self-conscious about their acne.', ru: 'Многие подростки стесняются своих угрей.' },
      { en: 'She visited a dermatologist to find a cure for her acne.', ru: 'Она посетила дерматолога, чтобы найти лекарство от акне.' },
      { en: 'Stress and poor diet can make acne worse.', ru: 'Стресс и плохое питание могут ухудшить состояние акне.' },
      { en: 'He used a special cream to clear up his acne.', ru: 'Он использовал специальный крем, чтобы избавиться от прыщей.' }
    ]
),

createRichWord('c1_acrobat', 'Acrobat', '/ˈækrəbæt/', 'экрэбэт', 'Акробат', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Человек, выполняющий сложные гимнастические трюки, например, в цирке.',
    '- Цирк: "Circus acrobat" (Цирковой акробат)\n- Навык: "Skilled acrobat" (Искусный акробат)\n- Шоу: "Perform like an acrobat" (Выступать как акробат)',
    [
      { en: 'The acrobat walked across the tightrope without a safety net.', ru: 'Акробат прошел по канату без страховки.' },
      { en: 'She trained for years to become a professional acrobat.', ru: 'Она тренировалась годами, чтобы стать профессиональной акробаткой.' },
      { en: 'The crowd cheered as the acrobats formed a human pyramid.', ru: 'Толпа ликовала, когда акробаты построили человеческую пирамиду.' },
      { en: 'He is as flexible and agile as an acrobat.', ru: 'Он такой же гибкий и ловкий, как акробат.' }
    ]
),

createRichWord('c1_adrenaline', 'Adrenaline', '/əˈdrenəlɪn/', 'эдренэлин', 'Адреналин', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Гормон, вырабатываемый организмом в состоянии стресса или возбуждения.',
    '- Эмоции: "Rush of adrenaline" (Прилив адреналина)\n- Спорт: "Adrenaline junkie" (Любитель острых ощущений)\n- Реакция: "Adrenaline pumping" (Адреналин зашкаливает)',
    [
      { en: 'He felt a sudden rush of adrenaline when he saw the bear.', ru: 'Он почувствовал внезапный прилив адреналина, когда увидел медведя.' },
      { en: 'Skydiving gives you a massive adrenaline boost.', ru: 'Прыжки с парашютом дают мощный заряд адреналина.' },
      { en: 'The adrenaline kept him going despite the injury.', ru: 'Адреналин поддерживал его, несмотря на травму.' },
      { en: 'She loves extreme sports because she is an adrenaline junkie.', ru: 'Она любит экстремальные виды спорта, потому что она адреналиновая наркоманка.' }
    ]
),

createRichWord('c1_affluence', 'Affluence', '/ˈæfluəns/', 'эфлуэнс', 'Богатство / Изобилие', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Состояние обладания большим количеством денег и высоким уровнем жизни.',
    '- Общество: "Growing affluence" (Растущее благосостояние)\n- Статус: "Sign of affluence" (Признак богатства)\n- Жизнь: "Live in affluence" (Жить в достатке)',
    [
      { en: 'The 1950s were a period of growing affluence in America.', ru: '1950-е годы были периодом растущего благосостояния в Америке.' },
      { en: 'Their lifestyle was a display of great affluence.', ru: 'Их образ жизни был демонстрацией огромного богатства.' },
      { en: 'Despite his affluence, he lived a very simple life.', ru: 'Несмотря на свое богатство, он жил очень простой жизнью.' },
      { en: 'Affluence brings its own set of problems and responsibilities.', ru: 'Богатство приносит свой набор проблем и обязанностей.' }
    ]
),

createRichWord('c1_aggressor', 'Aggressor', '/əˈɡresə/', 'эгресэ', 'Агрессор', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Человек или страна, которые нападают первыми или начинают конфликт.',
    '- Война: "Act as an aggressor" (Действовать как агрессор)\n- Конфликт: "Identify the aggressor" (Определить агрессора)\n- Защита: "Defend against the aggressor" (Защищаться от агрессора)',
    [
      { en: 'In this conflict, it is clear who the aggressor is.', ru: 'В этом конфликте ясно, кто является агрессором.' },
      { en: 'They claimed they were acting in self-defense against the aggressor.', ru: 'Они заявили, что действовали в целях самообороны против агрессора.' },
      { en: 'The UN condemned the actions of the aggressor nation.', ru: 'ООН осудила действия страны-агрессора.' },
      { en: 'Usually, the aggressor has the advantage of surprise.', ru: 'Обычно агрессор имеет преимущество внезапности.' }
    ]
),

createRichWord('c1_alibi', 'Alibi', '/ˈæləbaɪ/', 'элибай', 'Алиби', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Доказательство того, что человек находился в другом месте во время совершения преступления.',
    '- Закон: "Provide an alibi" (Предоставить алиби)\n- Проверка: "Check the alibi" (Проверить алиби)\n- Надежность: "Cast-iron alibi" (Железное алиби)',
    [
      { en: 'The suspect had a cast-iron alibi for the night of the murder.', ru: 'У подозреваемого было железное алиби на ночь убийства.' },
      { en: 'Police checked his alibi and found it to be true.', ru: 'Полиция проверила его алиби и обнаружила, что оно верное.' },
      { en: 'He needs a good alibi to avoid being arrested.', ru: 'Ему нужно хорошее алиби, чтобы избежать ареста.' },
      { en: 'Her friends provided an alibi, saying she was at the party.', ru: 'Ее друзья предоставили алиби, сказав, что она была на вечеринке.' }
    ]
),

createRichWord('c1_alligator', 'Alligator', '/ˈælɪɡeɪtə/', 'элигейтэ', 'Аллигатор', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Крупная рептилия с жесткой кожей и острыми зубами, обитающая в реках и болотах (в основном в Америке и Китае).',
    '- Животное: "Wild alligator" (Дикий аллигатор)\n- Опасность: "Alligator attack" (Нападение аллигатора)\n- Место: "Swamp alligator" (Болотный аллигатор)',
    [
      { en: 'We saw a huge alligator sunbathing on the riverbank.', ru: 'Мы видели огромного аллигатора, греющегося на солнышке на берегу реки.' },
      { en: 'Alligators are common in the swamps of Florida.', ru: 'Аллигаторы часто встречаются на болотах Флориды.' },
      { en: 'Keep your distance, as alligators can move very fast.', ru: 'Держитесь на расстоянии, так как аллигаторы могут двигаться очень быстро.' },
      { en: 'The alligator snapped its jaws shut with a loud noise.', ru: 'Аллигатор с громким звуком захлопнул пасть.' }
    ]
),

createRichWord('c1_apparel', 'Apparel', '/əˈpærəl/', 'эпэрэл', 'Одежда (формально)', ProficiencyLevel.C1, 'noun', 'Low', 'Formal',
    'Одежда, особенно когда речь идет о магазине или индустрии (синоним clothing).',
    '- Магазин: "Sports apparel" (Спортивная одежда)\n- Индустрия: "Wearing apparel" (Предметы одежды)\n- Стиль: "Women\'s apparel" (Женская одежда)',
    [
      { en: 'The store specializes in high-quality sports apparel.', ru: 'Магазин специализируется на высококачественной спортивной одежде.' },
      { en: 'She works in the apparel industry as a designer.', ru: 'Она работает в индустрии одежды дизайнером.' },
      { en: 'The website sells apparel for men, women, and children.', ru: 'Сайт продает одежду для мужчин, женщин и детей.' },
      { en: 'He was dressed in strange apparel for the ceremony.', ru: 'Он был одет в странное одеяние для церемонии.' }
    ]
),

createRichWord('c1_armpit', 'Armpit', '/ˈɑːmpɪt/', 'ампит', 'Подмышка', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Впадина под местом соединения руки с плечом.',
    '- Тело: "Sweaty armpits" (Потные подмышки)\n- Гигиена: "Shave armpits" (Брить подмышки)\n- Место: "Under the armpit" (Под мышкой)',
    [
      { en: 'He tucked the newspaper under his armpit.', ru: 'Он сунул газету под мышку.' },
      { en: 'She applied deodorant to her armpits.', ru: 'Она нанесла дезодорант на подмышки.' },
      { en: 'The thermometer is placed in the armpit to check for fever.', ru: 'Термометр помещают под мышку, чтобы проверить температуру.' },
      { en: 'Sweat stains appeared under the armpits of his shirt.', ru: 'Пятна пота появились под мышками его рубашки.' }
    ]
),

createRichWord('c1_asparagus', 'Asparagus', '/əˈspærəɡəs/', 'эспэрэгэс', 'Спаржа', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Зеленый овощ в виде длинных стеблей с заостренными верхушками.',
    '- Еда: "Fresh asparagus" (Свежая спаржа)\n- Блюдо: "Grilled asparagus" (Спаржа на гриле)\n- Сезон: "Asparagus season" (Сезон спаржи)',
    [
      { en: 'I love eating grilled asparagus with lemon and butter.', ru: 'Я люблю есть спаржу на гриле с лимоном и маслом.' },
      { en: 'Asparagus is a seasonal vegetable that tastes best in spring.', ru: 'Спаржа — сезонный овощ, который вкуснее всего весной.' },
      { en: 'She served a soup made of green asparagus.', ru: 'Она подала суп из зеленой спаржи.' },
      { en: 'You should trim the woody ends off the asparagus.', ru: 'Вам следует обрезать жесткие концы у спаржи.' }
    ]
  ),
createRichWord('c1_asphalt', 'Asphalt', '/ˈæsfælt/', 'эсфэлт', 'Асфальт', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Черное липкое вещество, смешанное с камнями, используемое для покрытия дорог.',
    '- Дорога: "Lay asphalt" (Класть асфальт)\n- Покрытие: "Asphalt jungle" (Асфальтовые джунгли / Город)\n- Материал: "Hot asphalt" (Горячий асфальт)',
    [
      { en: 'The workers are laying new asphalt on the highway.', ru: 'Рабочие кладут новый асфальт на шоссе.' },
      { en: 'In summer, the asphalt gets soft and sticky.', ru: 'Летом асфальт становится мягким и липким.' },
      { en: 'The car skidded on the wet asphalt.', ru: 'Машина заскользила на мокром асфальте.' },
      { en: 'Children scraped their knees on the rough asphalt.', ru: 'Дети ободрали колени о грубый асфальт.' }
    ]
),

createRichWord('c1_atypical', 'Atypical', '/ˌeɪˈtɪpɪkl/', 'эйтипикл', 'Нетипичный', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Не являющийся обычным или нормальным для данного типа человека или вещи.',
    '- Поведение: "Atypical behavior" (Нетипичное поведение)\n- Результат: "Atypical result" (Нетипичный результат)\n- Пример: "Not atypical" (Не редкость)',
    [
      { en: 'His angry outburst was atypical for such a calm man.', ru: 'Его гневная вспышка была нетипичной для такого спокойного человека.' },
      { en: 'Such warm weather is atypical for this time of year.', ru: 'Такая теплая погода нетипична для этого времени года.' },
      { en: 'The disease presented with atypical symptoms.', ru: 'Болезнь проявилась с нетипичными симптомами.' },
      { en: 'It is not atypical for students to change their major.', ru: 'Для студентов не редкость (не является нетипичным) менять специальность.' }
    ]
),

createRichWord('c1_backlog', 'Backlog', '/ˈbæklɒɡ/', 'бэклог', 'Задолженность (по работе) / Накопившаяся работа', ProficiencyLevel.C1, 'noun', 'Medium', 'Formal',
    'Накопление незавершенной работы или дел, с которыми нужно разобраться.',
    '- Работа: "Clear the backlog" (Разгрести завал)\n- Заказы: "Backlog of orders" (Невыполненные заказы)\n- Время: "Reduce the backlog" (Сократить отставание)',
    [
      { en: 'We have a huge backlog of orders to process.', ru: 'У нас огромный завал заказов, которые нужно обработать.' },
      { en: 'I stayed late at work to clear the backlog of emails.', ru: 'Я задержался на работе допоздна, чтобы разобрать накопившиеся письма.' },
      { en: 'The strike caused a backlog of mail at the post office.', ru: 'Забастовка привела к скоплению почты в почтовом отделении.' },
      { en: 'They hired extra staff to deal with the backlog.', ru: 'Они наняли дополнительный персонал, чтобы справиться с накопившейся работой.' }
    ]
),

createRichWord('c1_barbaric', 'Barbaric', '/bɑːˈbærɪk/', 'бабэрик', 'Варварский / Жестокий', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Чрезвычайно жестокий и неприятный; или относящийся к примитивным народам.',
    '- Жестокость: "Barbaric cruelty" (Варварская жестокость)\n- Обычай: "Barbaric custom" (Варварский обычай)\n- Действие: "Barbaric act" (Варварский поступок)',
    [
      { en: 'The treatment of prisoners was described as barbaric.', ru: 'Обращение с заключенными было описано как варварское.' },
      { en: 'Capital punishment is considered barbaric by many.', ru: 'Многие считают смертную казнь варварством.' },
      { en: 'They destroyed the ancient temple in a barbaric act.', ru: 'Они разрушили древний храм варварским поступком.' },
      { en: 'Such barbaric practices have no place in modern society.', ru: 'Таким варварским практикам нет места в современном обществе.' }
    ]
),

createRichWord('c1_befriend', 'Befriend', '/bɪˈfrend/', 'бифренд', 'Подружиться', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Стать другом кому-либо (особенно тому, кто нуждается в помощи) или вести себя дружелюбно.',
    '- Отношения: "Befriend a newcomer" (Подружиться с новичком)\n- Помощь: "Befriend the lonely" (Подружиться с одинокими)\n- Соцсети: "Unfriend and befriend" (Удалить и добавить в друзья)',
    [
      { en: 'He tried to befriend the new student in class.', ru: 'Он пытался подружиться с новым учеником в классе.' },
      { en: 'It is kind to befriend those who are lonely.', ru: 'Это благородно — подружиться с теми, кто одинок.' },
      { en: 'She befriended the stray cat and gave it food.', ru: 'Она подружилась с бездомной кошкой и дала ей еды.' },
      { en: 'They befriended him when he first arrived in the city.', ru: 'Они подружились с ним, когда он впервые приехал в город.' }
    ]
),

createRichWord('c1_bisexual', 'Bisexual', '/baɪˈsekʃuəl/', 'байсэкшуэл', 'Бисексуальный', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Сексуально привлекаемый как к мужчинам, так и к женщинам.',
    '- Ориентация: "Openly bisexual" (Открытый бисексуал)\n- Общество: "Bisexual community" (Бисексуальное сообщество)\n- Идентичность: "Identify as bisexual" (Идентифицировать себя как бисексуал)',
    [
      { en: 'He came out as bisexual to his family last year.', ru: 'В прошлом году он признался семье, что он бисексуал.' },
      { en: 'The character in the movie is portrayed as bisexual.', ru: 'Персонаж в фильме изображен как бисексуал.' },
      { en: 'Discrimination against bisexual people is still an issue.', ru: 'Дискриминация в отношении бисексуальных людей все еще является проблемой.' },
      { en: 'She is an activist for the bisexual community.', ru: 'Она активистка бисексуального сообщества.' }
    ]
),

createRichWord('c1_boo', 'Boo', '/buː/', 'бу', 'Освистывать / Бу (восклицание)', ProficiencyLevel.C1, 'verb', 'Medium', 'Informal',
    'Издавать звук "бу", чтобы показать неодобрение; или пугать кого-то.',
    '- Неодобрение: "Boo the speaker" (Освистать оратора)\n- Страх: "Jump out and shout boo" (Выпрыгнуть и крикнуть "бу")\n- Реакция: "Boo off stage" (Освистать со сцены)',
    [
      { en: 'The crowd started to boo when the politician spoke.', ru: 'Толпа начала освистывать политика, когда он заговорил.' },
      { en: 'He was booed off the stage after a terrible performance.', ru: 'Его освистали и прогнали со сцены после ужасного выступления.' },
      { en: 'Don\'t boo just because you disagree with him.', ru: 'Не освистывай только потому, что ты с ним не согласен.' },
      { en: 'She hid behind the door to shout "boo" at her brother.', ru: 'Она спряталась за дверью, чтобы крикнуть "бу" своему брату.' }
    ]
),

createRichWord('c1_borderline', 'Borderline', '/ˈbɔːdəlaɪn/', 'бодэлайн', 'Пограничный / На грани', ProficiencyLevel.C1, 'adj', 'Medium', 'Neutral',
    'Находящийся на границе между двумя качествами или состояниями; неопределенный.',
    '- Состояние: "Borderline case" (Пограничный случай)\n- Здоровье: "Borderline diabetic" (На грани диабета)\n- Качество: "Borderline acceptable" (Едва приемлемый)',
    [
      { en: 'His grades are borderline; he might fail the year.', ru: 'Его оценки на грани; он может не перейти на следующий курс.' },
      { en: 'The patient is borderline diabetic and needs to diet.', ru: 'Пациент находится на грани диабета и нуждается в диете.' },
      { en: 'Her behavior was borderline rude.', ru: 'Ее поведение было на грани грубости.' },
      { en: 'It was a borderline decision, but we accepted him.', ru: 'Это было пограничное решение, но мы его приняли.' }
    ]
),

createRichWord('c1_boulevard', 'Boulevard', '/ˈbuːləvɑːd/', 'булэвад', 'Бульвар', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Широкая городская улица, часто с деревьями по бокам.',
    '- Город: "Grand boulevard" (Грандиозный бульвар)\n- Прогулка: "Walk along the boulevard" (Гулять по бульвару)\n- Адрес: "Sunset Boulevard" (Сансет Бульвар)',
    [
      { en: 'They strolled down the wide boulevard lined with trees.', ru: 'Они прогуливались по широкому бульвару, обсаженному деревьями.' },
      { en: 'The cafe is located on a busy boulevard.', ru: 'Кафе расположено на оживленном бульваре.' },
      { en: 'Paris is famous for its beautiful boulevards.', ru: 'Париж славится своими красивыми бульварами.' },
      { en: 'Traffic was heavy on the main boulevard this morning.', ru: 'Сегодня утром на главном бульваре было интенсивное движение.' }
    ]
),

createRichWord('c1_brag', 'Brag', '/bræɡ/', 'брэг', 'Хвастаться', ProficiencyLevel.C1, 'verb', 'Medium', 'Informal',
    'Говорить слишком гордо о своих достижениях или имуществе.',
    '- Разговор: "Brag about money" (Хвастаться деньгами)\n- Характер: "Stop bragging" (Перестань хвастаться)\n- Фраза: "Nothing to brag about" (Нечем хвастаться)',
    [
      { en: 'He is always bragging about how much money he earns.', ru: 'Он всегда хвастается тем, сколько денег зарабатывает.' },
      { en: 'I don\'t mean to brag, but I won the competition.', ru: 'Не хочу хвастаться, но я выиграл конкурс.' },
      { en: 'Stop bragging and show us what you can actually do.', ru: 'Хватит хвастаться и покажи нам, что ты на самом деле умеешь.' },
      { en: 'She bragged that her son was the smartest in class.', ru: 'Она хвасталась, что ее сын самый умный в классе.' }
    ]
),

createRichWord('c1_bulldog', 'Bulldog', '/ˈbʊldɒɡ/', 'булдог', 'Бульдог', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Порода собак с большой головой и мощными челюстями; символ упорства.',
    '- Собака: "British bulldog" (Британский бульдог)\n- Характер: "Bulldog spirit" (Бульдожья хватка/упорство)\n- Внешность: "Like a bulldog" (Как бульдог)',
    [
      { en: 'The bulldog is often seen as a symbol of British determination.', ru: 'Бульдога часто рассматривают как символ британской решимости.' },
      { en: 'He has the tenacity of a bulldog.', ru: 'У него хватка (упорство) бульдога.' },
      { en: 'They keep a friendly bulldog as a family pet.', ru: 'Они держат дружелюбного бульдога в качестве домашнего питомца.' },
      { en: 'Churchill was famously compared to a bulldog.', ru: 'Черчилля, как известно, сравнивали с бульдогом.' }
    ]
  ),
createRichWord('c1_accordion', 'Accordion', '/əˈkɔːdiən/', 'экордиэн', 'Аккордеон', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Музыкальный инструмент с клавиатурой и мехами, на котором играют, растягивая и сжимая его.',
    '- Музыка: "Play the accordion" (Играть на аккордеоне)\n- Звук: "Accordion music" (Музыка аккордеона)\n- Метафора: "Accordion effect" (Эффект гармошки)',
    [
      { en: 'He played a lively tune on his old accordion.', ru: 'Он сыграл живую мелодию на своем старом аккордеоне.' },
      { en: 'The accordion is popular in French folk music.', ru: 'Аккордеон популярен во французской народной музыке.' },
      { en: 'She took lessons to learn how to play the accordion.', ru: 'Она брала уроки, чтобы научиться играть на аккордеоне.' },
      { en: 'The bus has an accordion section in the middle.', ru: 'У автобуса есть секция-"гармошка" посередине.' }
    ]
),

createRichWord('c1_amnesia', 'Amnesia', '/æmˈniːziə/', 'эмнизиэ', 'Амнезия / Потеря памяти', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Медицинское состояние, при котором человек теряет память полностью или частично.',
    '- Здоровье: "Suffer from amnesia" (Страдать амнезией)\n- Причина: "Caused by trauma" (Вызвано травмой)\n- Восстановление: "Recover from amnesia" (Оправиться от амнезии)',
    [
      { en: 'After the accident, he suffered from temporary amnesia.', ru: 'После аварии он страдал от временной амнезии.' },
      { en: 'The movie is about a spy with total amnesia.', ru: 'Фильм рассказывает о шпионе с полной потерей памяти.' },
      { en: 'Doctors hope her amnesia will fade with time.', ru: 'Врачи надеются, что ее амнезия со временем пройдет.' },
      { en: 'He woke up in the hospital with amnesia.', ru: 'Он очнулся в больнице с потерей памяти.' }
    ]
),

createRichWord('c1_android', 'Android', '/ˈændrɔɪd/', 'эндройд', 'Андроид', ProficiencyLevel.C1, 'noun', 'Medium', 'Neutral',
    'Робот, внешне напоминающий человека; также операционная система.',
    '- Технологии: "Humanoid android" (Человекоподобный андроид)\n- Фантастика: "Android robot" (Робот-андроид)\n- ПО: "Android phone" (Телефон на Андроиде)',
    [
      { en: 'Science fiction stories often feature intelligent androids.', ru: 'В научно-фантастических рассказах часто фигурируют разумные андроиды.' },
      { en: 'The android looked remarkably like a real human.', ru: 'Андроид был удивительно похож на реального человека.' },
      { en: 'Engineers are developing an android to help the elderly.', ru: 'Инженеры разрабатывают андроида для помощи пожилым людям.' },
      { en: 'In the future, androids might perform dangerous tasks.', ru: 'В будущем андроиды, возможно, будут выполнять опасные задачи.' }
    ]
),

createRichWord('c1_audiovisual', 'Audiovisual', '/ˌɔːdiəʊˈvɪʒuəl/', 'одиоувижуэл', 'Аудиовизуальный', ProficiencyLevel.C1, 'adj', 'Medium', 'Formal',
    'Использующий как звук, так и изображение (например, в обучении или презентациях).',
    '- Обучение: "Audiovisual aids" (Аудиовизуальные средства)\n- Презентация: "Audiovisual equipment" (Аудиовизуальное оборудование)\n- Техника: "Audiovisual technician" (Аудиовизуальный техник)',
    [
      { en: 'The teacher used audiovisual aids to explain the topic.', ru: 'Учитель использовал аудиовизуальные средства, чтобы объяснить тему.' },
      { en: 'We need to check the audiovisual equipment before the meeting.', ru: 'Нам нужно проверить аудиовизуальное оборудование перед встречей.' },
      { en: 'The presentation included an impressive audiovisual display.', ru: 'Презентация включала впечатляющий аудиовизуальный ряд.' },
      { en: 'Schools are investing more in audiovisual technology.', ru: 'Школы вкладывают больше средств в аудиовизуальные технологии.' }
    ]
  ),
createRichWord('c1_bicep', 'Bicep', '/ˈbaɪsep/', 'байсеп', 'Бицепс', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Большая мышца на передней части плеча (правильнее biceps, но bicep часто используется в ед.ч.).',
    '- Тело: "Flex biceps" (Напрячь бицепсы)\n- Спорт: "Bicep curl" (Сгибание на бицепс)\n- Сила: "Big biceps" (Большие бицепсы)',
    [
      { en: 'He flexed his bicep to show his strength.', ru: 'Он напряг бицепс, чтобы показать свою силу.' },
      { en: 'She injured her bicep while lifting weights.', ru: 'Она повредила бицепс, поднимая тяжести.' },
      { en: 'Bicep exercises are popular at the gym.', ru: 'Упражнения на бицепс популярны в тренажерном зале.' },
      { en: 'The tattoo was on his left bicep.', ru: 'Татуировка была на его левом бицепсе.' }
    ]
),

createRichWord('c1_biochemistry', 'Biochemistry', '/ˌbaɪəʊˈkemɪstri/', 'байокемистри', 'Биохимия', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Наука, изучающая химические процессы в живых организмах.',
    '- Наука: "Study biochemistry" (Изучать биохимию)\n- Университет: "Degree in biochemistry" (Степень по биохимии)\n- Процесс: "Biochemistry of the brain" (Биохимия мозга)',
    [
      { en: 'He is studying biochemistry at the university.', ru: 'Он изучает биохимию в университете.' },
      { en: 'Biochemistry helps us understand how cells work.', ru: 'Биохимия помогает нам понять, как работают клетки.' },
      { en: 'Understanding the biochemistry of the virus is crucial.', ru: 'Понимание биохимии вируса имеет решающее значение.' },
      { en: 'She has a PhD in biochemistry.', ru: 'У нее докторская степень по биохимии.' }
    ]
),

createRichWord('c1_biomedical', 'Biomedical', '/ˌbaɪəʊˈmedɪkl/', 'байомедикл', 'Биомедицинский', ProficiencyLevel.C1, 'adj', 'Low', 'Formal',
    'Относящийся к биологии и медицине одновременно.',
    '- Наука: "Biomedical research" (Биомедицинские исследования)\n- Работа: "Biomedical engineer" (Биомедицинский инженер)\n- Технологии: "Biomedical science" (Биомедицинская наука)',
    [
      { en: 'Biomedical research has led to new treatments for cancer.', ru: 'Биомедицинские исследования привели к новым методам лечения рака.' },
      { en: 'He works as a biomedical engineer in a hospital.', ru: 'Он работает биомедицинским инженером в больнице.' },
      { en: 'The ethics of biomedical experiments are often debated.', ru: 'Этика биомедицинских экспериментов часто обсуждается.' },
      { en: 'Biomedical science combines biology and technology.', ru: 'Биомедицинская наука объединяет биологию и технологии.' }
    ]
),

createRichWord('c1_bison', 'Bison', '/ˈbaɪsn/', 'байсн', 'Бизон / Зубр', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Крупное дикое животное из семейства бычьих с лохматой шерстью (часто называют buffalo).',
    '- Животное: "American bison" (Американский бизон)\n- Группа: "Herd of bison" (Стадо бизонов)\n- Природа: "Wild bison" (Дикий бизон)',
    [
      { en: 'Huge herds of bison used to roam these plains.', ru: 'Огромные стада бизонов раньше бродили по этим равнинам.' },
      { en: 'The bison is a symbol of the American West.', ru: 'Бизон — символ американского Запада.' },
      { en: 'We saw a bison grazing in the national park.', ru: 'Мы видели бизона, пасущегося в национальном парке.' },
      { en: 'Bison are protected animals now.', ru: 'Бизоны сейчас являются охраняемыми животными.' }
    ]
),

createRichWord('c1_bistro', 'Bistro', '/ˈbiːstrəʊ/', 'бистроу', 'Бистро', ProficiencyLevel.C1, 'noun', 'Low', 'Neutral',
    'Небольшой и недорогой ресторан, обычно во французском стиле.',
    '- Место: "French bistro" (Французское бистро)\n- Еда: "Lunch at a bistro" (Обед в бистро)\n- Атмосфера: "Cozy bistro" (Уютное бистро)',
    [
      { en: 'We had a lovely dinner at a small bistro.', ru: 'Мы чудесно поужинали в маленьком бистро.' },
      { en: 'The bistro serves excellent wine and cheese.', ru: 'В бистро подают отличное вино и сыр.' },
      { en: 'They opened a trendy bistro in the city center.', ru: 'Они открыли модное бистро в центре города.' },
      { en: 'I prefer the relaxed atmosphere of a bistro.', ru: 'Я предпочитаю расслабленную атмосферу бистро.' }
    ]
),

createRichWord('c1_bleep', 'Bleep', '/bliːp/', 'блип', 'Писк / Запикивать', ProficiencyLevel.C1, 'verb', 'Low', 'Neutral',
    'Издавать короткий высокий звук (электроника); или закрывать нецензурное слово звуком.',
    '- Звук: "Machine bleeps" (Машина пищит)\n- Цензура: "Bleep out" (Запикивать)\n- Устройство: "Bleeper" (Пейджер/сигнализатор)',
    [
      { en: 'The machine started to bleep loudly.', ru: 'Машина начала громко пищать.' },
      { en: 'They had to bleep out the swear words in the interview.', ru: 'Им пришлось запикать ругательства в интервью.' },
      { en: 'I heard a bleep from my phone.', ru: 'Я услышал писк от своего телефона.' },
      { en: 'The monitor bleeps with every heartbeat.', ru: 'Монитор пищит с каждым ударом сердца.' }
    ]
  ),

];
