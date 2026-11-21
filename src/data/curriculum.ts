import { LessonExercise, SentenceItem, Unit, WordToken } from '../types/curriculum';

export const UNITS: Unit[] = [
  {
    id: 'unit-1',
    order: 1,
    titleRu: 'Основы и знакомство',
    subtitleRu: 'Приветствия, вежливые фразы и представление себя на китайском',
    level: 'HSK 1',
    accentColor: 'emerald',
    grammarFocusRu: 'Порядок слов «Подлежащее + глагол + дополнение» и частица 呢 (ne)',
  },
  {
    id: 'unit-2',
    order: 2,
    titleRu: 'Кафе и заказ еды',
    subtitleRu: 'Как попросить меню, заказать напитки и оплатить счёт',
    level: 'HSK 1',
    accentColor: 'amber',
    grammarFocusRu: 'Вежливая просьба 请问 (qǐngwèn) и счётные слова 杯 (bēi) / 碗 (wǎn)',
  },
  {
    id: 'unit-3',
    order: 3,
    titleRu: 'Город и транспорт',
    subtitleRu: 'Ориентация на улице, метро, такси и вопросы о расстоянии',
    level: 'HSK 1',
    accentColor: 'sky',
    grammarFocusRu: 'Вопросительное слово 哪里 (nǎlǐ) и предлог местонахождения 在 (zài)',
  },
  {
    id: 'unit-4',
    order: 4,
    titleRu: 'Повседневные дела и время',
    subtitleRu: 'Распорядок дня, планы на сегодня, работа и изучение языка',
    level: 'HSK 2',
    accentColor: 'indigo',
    grammarFocusRu: 'Обозначение времени до глагола и наречие 都 (dōu) для регулярности',
  },
  {
    id: 'unit-5',
    order: 5,
    titleRu: 'Покупки и путешествия',
    subtitleRu: 'Вопросы о цене, скидках, примерка одежды и бронь отеля',
    level: 'HSK 2',
    accentColor: 'rose',
    grammarFocusRu: 'Конструкция 太…了 (tài…le) и вопрос о стоимости 多少钱 (duōshao qián)',
  },
];

export const SENTENCES: SentenceItem[] = [
  // UNIT 1: Основы и знакомство
  {
    id: 's-1-1',
    unitId: 'unit-1',
    level: 'HSK 1',
    hanzi: '你好，很高兴认识你。',
    pinyin: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ.',
    translationRu: 'Привет, очень рад с тобой познакомиться.',
    literalRu: 'Ты хорошо, очень рад знать тебя.',
    situationPromptRu: 'Вы впервые встречаетесь с новым коллегой из Шанхая и хотите вежливо поздороваться.',
    tokens: [
      { hanzi: '你好', pinyin: 'nǐ hǎo', meaningRu: 'привет', tone: 3 },
      { hanzi: '很', pinyin: 'hěn', meaningRu: 'очень', tone: 3 },
      { hanzi: '高兴', pinyin: 'gāoxìng', meaningRu: 'рад / счастлив', tone: 1 },
      { hanzi: '认识', pinyin: 'rènshi', meaningRu: 'знакомиться / знать', tone: 4 },
      { hanzi: '你', pinyin: 'nǐ', meaningRu: 'ты / тебя', tone: 3 },
    ],
    distractorTokens: [
      { hanzi: '谢谢', pinyin: 'xièxie', meaningRu: 'спасибо', tone: 4 },
      { hanzi: '再见', pinyin: 'zàijiàn', meaningRu: 'пока', tone: 4 },
      { hanzi: '吗', pinyin: 'ma', meaningRu: 'вопр. частица', tone: 5 },
    ],
    usageExamples: [
      {
        id: 'ex-1-1-a',
        contextTitle: 'Знакомство в офисе',
        situationRu: 'Первый рабочий день в международной компании.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Ли Вэй',
            hanzi: '你好，我是李伟。',
            pinyin: 'Nǐ hǎo, wǒ shì Lǐ Wěi.',
            translationRu: 'Привет, я Ли Вэй.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '你好，很高兴认识你！',
            pinyin: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ!',
            translationRu: 'Привет, очень рад познакомиться!',
          },
        ],
        grammarNoteRu: 'В китайском перед прилагательными вроде 高兴 (радостный) обычно ставится 很 (очень) для связки, даже если не нужно сильное усиление.',
      },
      {
        id: 'ex-1-1-b',
        contextTitle: 'На языковом обмене',
        situationRu: 'Вы встречаетесь с носителем языка для разговорной практики.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Анна',
            hanzi: '我是安娜，请多多关照。',
            pinyin: 'Wǒ shì Ānnà, qǐng duōduō guānzhào.',
            translationRu: 'Я Анна, прошу любить и жаловать.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Чэнь Мин',
            hanzi: '你好，很高兴认识你。',
            pinyin: 'Nǐ hǎo, hěn gāoxìng rènshi nǐ.',
            translationRu: 'Привет, очень приятно познакомиться.',
          },
        ],
        grammarNoteRu: 'При обращении к старшему или руководителю 你 (nǐ) можно заменить на вежливое 您 (nín): 您好，很高兴认识您。',
      },
    ],
  },
  {
    id: 's-1-2',
    unitId: 'unit-1',
    level: 'HSK 1',
    hanzi: '我叫安娜，我是俄罗斯人。',
    pinyin: 'Wǒ jiào Ānnà, wǒ shì Éluósī rén.',
    translationRu: 'Меня зовут Анна, я из России (русская).',
    literalRu: 'Я зовусь Анна, я есть Россия человек.',
    situationPromptRu: 'Преподаватель в группе просит вас назвать своё имя и сказать, из какой вы страны.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '叫', pinyin: 'jiào', meaningRu: 'зовут / называюсь', tone: 4 },
      { hanzi: '安娜', pinyin: 'Ānnà', meaningRu: 'Анна', tone: 1 },
      { hanzi: '是', pinyin: 'shì', meaningRu: 'быть / являться', tone: 4 },
      { hanzi: '俄罗斯人', pinyin: 'Éluósī rén', meaningRu: 'человек из России', tone: 2 },
    ],
    distractorTokens: [
      { hanzi: '中国人', pinyin: 'Zhōngguó rén', meaningRu: 'китаец', tone: 1 },
      { hanzi: '什么', pinyin: 'shénme', meaningRu: 'что / какой', tone: 2 },
    ],
    usageExamples: [
      {
        id: 'ex-1-2-a',
        contextTitle: 'На первом занятии',
        situationRu: 'Учитель спрашивает имя и страну нового студента.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Учитель',
            hanzi: '你叫什么名字？你是哪国人？',
            pinyin: 'Nǐ jiào shénme míngzi? Nǐ shì nǎ guó rén?',
            translationRu: 'Как тебя зовут? Из какой ты страны?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Анна',
            hanzi: '我叫安娜，我是俄罗斯人。',
            pinyin: 'Wǒ jiào Ānnà, wǒ shì Éluósī rén.',
            translationRu: 'Меня зовут Анна, я из России.',
          },
        ],
        grammarNoteRu: 'Чтобы назвать национальность, просто добавьте 人 (человек) к названию страны: 俄罗斯 + 人 = россиянин/россиянка.',
      },
      {
        id: 'ex-1-2-b',
        contextTitle: 'Знакомство с соседом',
        situationRu: 'Разговор в хостеле в Пекине.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Путешественник',
            hanzi: '我叫安娜，我是俄罗斯人。你呢？',
            pinyin: 'Wǒ jiào Ānnà, wǒ shì Éluósī rén. Nǐ ne?',
            translationRu: 'Меня зовут Анна, я из России. А ты?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Ван Лэй',
            hanzi: '我叫王磊，我是北京人。',
            pinyin: 'Wǒ jiào Wáng Lěi, wǒ shì Běijīng rén.',
            translationRu: 'Меня зовут Ван Лэй, я из Пекина.',
          },
        ],
        grammarNoteRu: 'Глагол 是 (shì) не изменяется по лицам и числам: 我是 (я есть), 你是 (ты есть), 我们是 (мы есть).',
      },
    ],
  },
  {
    id: 's-1-3',
    unitId: 'unit-1',
    level: 'HSK 1',
    hanzi: '你最近怎么样？',
    pinyin: 'Nǐ zuìjìn zěnmeyàng?',
    translationRu: 'Как у тебя дела в последнее время?',
    literalRu: 'Ты в последнее время как?',
    situationPromptRu: 'Вы встретили старого знакомого, которого не видели пару месяцев, и хотите спросить, как он.',
    tokens: [
      { hanzi: '你', pinyin: 'nǐ', meaningRu: 'ты', tone: 3 },
      { hanzi: '最近', pinyin: 'zuìjìn', meaningRu: 'в последнее время', tone: 4 },
      { hanzi: '怎么样', pinyin: 'zěnmeyàng', meaningRu: 'как / каково', tone: 3 },
    ],
    distractorTokens: [
      { hanzi: '今天', pinyin: 'jīntiān', meaningRu: 'сегодня', tone: 1 },
      { hanzi: '多少钱', pinyin: 'duōshao qián', meaningRu: 'сколько стоит', tone: 1 },
      { hanzi: '谁', pinyin: 'shéi', meaningRu: 'кто', tone: 2 },
    ],
    usageExamples: [
      {
        id: 'ex-1-3-a',
        contextTitle: 'Встреча с другом',
        situationRu: 'Вы случайно пересеклись на улице.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '好久不见！你最近怎么样？',
            pinyin: 'Hǎojiǔ bújiàn! Nǐ zuìjìn zěnmeyàng?',
            translationRu: 'Давно не виделись! Как дела в последнее время?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Друг',
            hanzi: '挺好的，工作很忙。你呢？',
            pinyin: 'Tǐng hǎo de, gōngzuò hěn máng. Nǐ ne?',
            translationRu: 'Неплохо, на работе много дел. А у тебя?',
          },
        ],
        grammarNoteRu: 'Фраза 你最近怎么样 звучит гораздо естественнее в живом общении, чем учебное 你好吗 (Nǐ hǎo ma).',
      },
      {
        id: 'ex-1-3-b',
        contextTitle: 'Переписка в WeChat',
        situationRu: 'Вы пишете сообщение языковому партнёру.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '小张，你最近怎么样？',
            pinyin: 'Xiǎo Zhāng, nǐ zuìjìn zěnmeyàng?',
            translationRu: 'Сяо Чжан, как ты в последнее время?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Сяо Чжан',
            hanzi: '还不错，我在准备考试。',
            pinyin: 'Hái búcuò, wǒ zài zhǔnbèi kǎoshì.',
            translationRu: 'Вполне неплохо, готовлюсь к экзамену.',
          },
        ],
        grammarNoteRu: 'С вопросительным словом 怎么样 (как?) частица 吗 в конце предложения не нужна!',
      },
    ],
  },
  {
    id: 's-1-4',
    unitId: 'unit-1',
    level: 'HSK 1',
    hanzi: '不好意思，请问你叫什么名字？',
    pinyin: 'Bù hǎoyìsi, qǐngwèn nǐ jiào shénme míngzi?',
    translationRu: 'Извините, подскажите, как вас зовут?',
    literalRu: 'Неудобно, прошу спросить тебя зовут какое имя?',
    situationPromptRu: 'Вы забыли имя нового соседа по парте и хотите вежливо переспросить.',
    tokens: [
      { hanzi: '不好意思', pinyin: 'bù hǎoyìsi', meaningRu: 'извините / неудобно', tone: 4 },
      { hanzi: '请问', pinyin: 'qǐngwèn', meaningRu: 'позвольте спросить', tone: 3 },
      { hanzi: '你', pinyin: 'nǐ', meaningRu: 'ты / вы', tone: 3 },
      { hanzi: '叫', pinyin: 'jiào', meaningRu: 'зовут', tone: 4 },
      { hanzi: '什么', pinyin: 'shénme', meaningRu: 'какое / что', tone: 2 },
      { hanzi: '名字', pinyin: 'míngzi', meaningRu: 'имя', tone: 2 },
    ],
    distractorTokens: [
      { hanzi: '哪里', pinyin: 'nǎlǐ', meaningRu: 'где', tone: 3 },
      { hanzi: '老师', pinyin: 'lǎoshī', meaningRu: 'учитель', tone: 3 },
    ],
    usageExamples: [
      {
        id: 'ex-1-4-a',
        contextTitle: 'На конференции',
        situationRu: 'Вы подходите к участнику без бейджа.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '不好意思，请问你叫什么名字？',
            pinyin: 'Bù hǎoyìsi, qǐngwèn nǐ jiào shénme míngzi?',
            translationRu: 'Извините, подскажите, как вас зовут?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Собеседник',
            hanzi: '我叫林华，你呢？',
            pinyin: 'Wǒ jiào Lín Huá, nǐ ne?',
            translationRu: 'Меня зовут Линь Хуа, а вас?',
          },
        ],
        grammarNoteRu: '不好意思 (bù hǎoyìsi) — универсальная мягкая фраза для «извините, что беспокою», используется чаще, чем строгое 对不起 (простите за вину).',
      },
      {
        id: 'ex-1-4-b',
        contextTitle: 'Уточнение имени при записи',
        situationRu: 'Администратор на ресепшене уточняет данные.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Администратор',
            hanzi: '不好意思，请问您叫什么名字？',
            pinyin: 'Bù hǎoyìsi, qǐngwèn nín jiào shénme míngzi?',
            translationRu: 'Простите, подскажите ваше имя?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Гость',
            hanzi: '我姓马，叫马丁。',
            pinyin: 'Wǒ xìng Mǎ, jiào Mǎdīng.',
            translationRu: 'Моя фамилия Ма, зовут Мартин.',
          },
        ],
        grammarNoteRu: 'В китайских вопросах слово 什么 (что/какое) остаётся ровно на том месте, где в ответе будет нужное слово: 叫 [什么] 名字 → 叫 [林华]。',
      },
    ],
  },
  {
    id: 's-1-5',
    unitId: 'unit-1',
    level: 'HSK 1',
    hanzi: '我听不懂，请再说一遍。',
    pinyin: 'Wǒ tīng bù dǒng, qǐng zài shuō yí biàn.',
    translationRu: 'Я не понимаю на слух, пожалуйста, повторите ещё раз.',
    literalRu: 'Я слушать не понимать, прошу снова сказать один раз.',
    situationPromptRu: 'Продавец говорит слишком быстро, и вы хотите попросить его повторить фразу.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '听不懂', pinyin: 'tīng bù dǒng', meaningRu: 'не понимаю на слух', tone: 1 },
      { hanzi: '请', pinyin: 'qǐng', meaningRu: 'пожалуйста', tone: 3 },
      { hanzi: '再', pinyin: 'zài', meaningRu: 'ещё / снова', tone: 4 },
      { hanzi: '说', pinyin: 'shuō', meaningRu: 'сказать', tone: 1 },
      { hanzi: '一遍', pinyin: 'yí biàn', meaningRu: 'один раз (от начала до конца)', tone: 4 },
    ],
    distractorTokens: [
      { hanzi: '看见', pinyin: 'kànjiàn', meaningRu: 'увидеть', tone: 4 },
      { hanzi: '写', pinyin: 'xiě', meaningRu: 'писать', tone: 3 },
    ],
    usageExamples: [
      {
        id: 'ex-1-5-a',
        contextTitle: 'Разговор по телефону',
        situationRu: 'Курьер быстро диктует номер ячейки.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '不好意思，我听不懂，请再说一遍。',
            pinyin: 'Bù hǎoyìsi, wǒ tīng bù dǒng, qǐng zài shuō yí biàn.',
            translationRu: 'Извините, я не понял, повторите, пожалуйста, ещё раз.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Курьер',
            hanzi: '好的，我说慢一点。',
            pinyin: 'Hǎo de, wǒ shuō màn yìdiǎn.',
            translationRu: 'Хорошо, я скажу помедленнее.',
          },
        ],
        grammarNoteRu: '听不懂 — результативный глагол: 听 (слушать) + 不 (не) + 懂 (понимать). Если поняли, скажите 听懂了 (tīng dǒng le)!',
      },
      {
        id: 'ex-1-5-b',
        contextTitle: 'На уроке китайского',
        situationRu: 'Вы не расслышали новое слово.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Ученик',
            hanzi: '老师，我听不懂，请再说一遍。',
            pinyin: 'Lǎoshī, wǒ tīng bù dǒng, qǐng zài shuō yí biàn.',
            translationRu: 'Учитель, я не расслышал, повторите, пожалуйста.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Учитель',
            hanzi: '没问题，请看黑板。',
            pinyin: 'Méi wèntí, qǐng kàn hēibǎn.',
            translationRu: 'Без проблем, посмотрите на доску.',
          },
        ],
        grammarNoteRu: 'Слово 一遍 (yí biàn) означает «один раз целиком» (всю фразу от начала до конца), в отличие от 一次 (yí cì — просто один случай).',
      },
    ],
  },

  // UNIT 2: Кафе и заказ еды
  {
    id: 's-2-1',
    unitId: 'unit-2',
    level: 'HSK 1',
    hanzi: '我想喝一杯热绿茶。',
    pinyin: 'Wǒ xiǎng hē yì bēi rè lǜchá.',
    translationRu: 'Я хочу выпить чашку горячего зелёного чая.',
    literalRu: 'Я хотеть пить одна чашка горячий зелёный чай.',
    situationPromptRu: 'В чайной вас спрашивают, что вы будете пить, и вы заказываете горячий зелёный чай.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '想', pinyin: 'xiǎng', meaningRu: 'хочу / планирую', tone: 3 },
      { hanzi: '喝', pinyin: 'hē', meaningRu: 'пить', tone: 1 },
      { hanzi: '一杯', pinyin: 'yì bēi', meaningRu: 'одна чашка', tone: 1 },
      { hanzi: '热', pinyin: 'rè', meaningRu: 'горячий', tone: 4 },
      { hanzi: '绿茶', pinyin: 'lǜchá', meaningRu: 'зелёный чай', tone: 4 },
    ],
    distractorTokens: [
      { hanzi: '吃', pinyin: 'chī', meaningRu: 'есть', tone: 1 },
      { hanzi: '冰', pinyin: 'bīng', meaningRu: 'ледяной', tone: 1 },
      { hanzi: '米饭', pinyin: 'mǐfàn', meaningRu: 'варёный рис', tone: 3 },
    ],
    usageExamples: [
      {
        id: 'ex-2-1-a',
        contextTitle: 'Заказ в чайной',
        situationRu: 'Официант принимает заказ на напитки.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Официант',
            hanzi: '请问你想喝什么？',
            pinyin: 'Qǐngwèn nǐ xiǎng hē shénme?',
            translationRu: 'Подскажите, что вы хотите выпить?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '我想喝一杯热绿茶。',
            pinyin: 'Wǒ xiǎng hē yì bēi rè lǜchá.',
            translationRu: 'Я хотел бы чашку горячего зелёного чая.',
          },
        ],
        grammarNoteRu: 'Для напитков в стаканах и чашках используется счётное слово 杯 (bēi). Помните: определения всегда идут ДО существительного (热 + 绿茶).',
      },
      {
        id: 'ex-2-1-b',
        contextTitle: 'В гостях у друзей',
        situationRu: 'Хозяин дома предлагает кофе или чай.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Хозяин',
            hanzi: '喝咖啡还是喝茶？',
            pinyin: 'Hē kāfēi háishi hē chá?',
            translationRu: 'Будешь кофе или чай?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '谢谢，我想喝一杯热绿茶。',
            pinyin: 'Xièxie, wǒ xiǎng hē yì bēi rè lǜchá.',
            translationRu: 'Спасибо, я выпью чашку горячего зелёного чая.',
          },
        ],
        grammarNoteRu: 'Глагол 想 (xiǎng) звучит мягче и вежливее, чем 要 (yào — требовать/точно брать). Отлично подходит для заказов!',
      },
    ],
  },
  {
    id: 's-2-2',
    unitId: 'unit-2',
    level: 'HSK 1',
    hanzi: '请给我看菜单。',
    pinyin: 'Qǐng gěi wǒ kàn càidān.',
    translationRu: 'Пожалуйста, дайте мне посмотреть меню.',
    literalRu: 'Прошу дать мне смотреть меню.',
    situationPromptRu: 'Вы сели за столик в ресторане и просите официанта принести меню.',
    tokens: [
      { hanzi: '请', pinyin: 'qǐng', meaningRu: 'пожалуйста', tone: 3 },
      { hanzi: '给', pinyin: 'gěi', meaningRu: 'дать / для', tone: 3 },
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'мне', tone: 3 },
      { hanzi: '看', pinyin: 'kàn', meaningRu: 'посмотреть', tone: 4 },
      { hanzi: '菜单', pinyin: 'càidān', meaningRu: 'меню', tone: 4 },
    ],
    distractorTokens: [
      { hanzi: '买单', pinyin: 'mǎidān', meaningRu: 'оплатить счёт', tone: 3 },
      { hanzi: '水', pinyin: 'shuǐ', meaningRu: 'вода', tone: 3 },
    ],
    usageExamples: [
      {
        id: 'ex-2-2-a',
        contextTitle: 'Вход в ресторан',
        situationRu: 'Вы только сели за свободный столик.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '服务员，请给我看菜单。',
            pinyin: 'Fúwùyuán, qǐng gěi wǒ kàn càidān.',
            translationRu: 'Официант, дайте, пожалуйста, посмотреть меню.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Официант',
            hanzi: '好的，请稍等。',
            pinyin: 'Hǎo de, qǐng shāoděng.',
            translationRu: 'Хорошо, подождите секунду.',
          },
        ],
        grammarNoteRu: 'Конструкция 请给我… (пожалуйста, дайте мне…) — одна из самых полезных в поездках. Можно просить что угодно: 菜单 (меню), 筷子 (палочки).',
      },
      {
        id: 'ex-2-2-b',
        contextTitle: 'Уточнение блюд на вынос',
        situationRu: 'Вы заглянули в маленькую лапшичную.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '你好，请给我看菜单。',
            pinyin: 'Nǐ hǎo, qǐng gěi wǒ kàn càidān.',
            translationRu: 'Здравствуйте, можно посмотреть меню?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Продавец',
            hanzi: '菜单在墙上，也可以扫码。',
            pinyin: 'Càidān zài qiáng shàng, yě kěyǐ sǎomǎ.',
            translationRu: 'Меню на стене, а можно и отсканировать QR-код.',
          },
        ],
        grammarNoteRu: 'Слово 菜单 буквально состоит из 菜 (блюдо/еда) + 单 (список/лист).',
      },
    ],
  },
  {
    id: 's-2-3',
    unitId: 'unit-2',
    level: 'HSK 1',
    hanzi: '这个菜很好吃，不太辣。',
    pinyin: 'Zhège cài hěn hǎochī, bú tài là.',
    translationRu: 'Это блюдо очень вкусное, не слишком острое.',
    literalRu: 'Это блюдо очень вкусное, не слишком острое.',
    situationPromptRu: 'Друг спрашивает, не слишком ли острое блюдо, которое вы пробуете.',
    tokens: [
      { hanzi: '这个', pinyin: 'zhège', meaningRu: 'это / этот', tone: 4 },
      { hanzi: '菜', pinyin: 'cài', meaningRu: 'блюдо / еда', tone: 4 },
      { hanzi: '很', pinyin: 'hěn', meaningRu: 'очень', tone: 3 },
      { hanzi: '好吃', pinyin: 'hǎochī', meaningRu: 'вкусный', tone: 3 },
      { hanzi: '不太', pinyin: 'bú tài', meaningRu: 'не слишком', tone: 2 },
      { hanzi: '辣', pinyin: 'là', meaningRu: 'острый', tone: 4 },
    ],
    distractorTokens: [
      { hanzi: '好喝', pinyin: 'hǎohē', meaningRu: 'вкусный (о напитке)', tone: 3 },
      { hanzi: '甜', pinyin: 'tián', meaningRu: 'сладкий', tone: 2 },
    ],
    usageExamples: [
      {
        id: 'ex-2-3-a',
        contextTitle: 'Ужин в сычуаньском ресторане',
        situationRu: 'Вы делитесь впечатлением о блюде с компанией.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Друг',
            hanzi: '宫保鸡丁辣不辣？',
            pinyin: 'Gōngbǎo jīdīng là bú là?',
            translationRu: 'Курица гунбао острая или нет?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '这个菜很好吃，不太辣。',
            pinyin: 'Zhège cài hěn hǎochī, bú tài là.',
            translationRu: 'Это блюдо очень вкусное, не слишком острое.',
          },
        ],
        grammarNoteRu: 'Обратите внимание: про еду говорят 好吃 (hǎochī — хорошо есть), а про напитки — 好喝 (hǎohē — хорошо пить).',
      },
      {
        id: 'ex-2-3-b',
        contextTitle: 'Совет соседу по столу',
        situationRu: 'Вы рекомендуете лапшу знакомому, который не любит острое.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Знакомый',
            hanzi: '我不喜欢吃太辣的菜。',
            pinyin: 'Wǒ bù xǐhuan chī tài là de cài.',
            translationRu: 'Я не люблю слишком острую еду.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '那你试试这个，这个菜很好吃，不太辣。',
            pinyin: 'Nà nǐ shìshi zhège, zhège cài hěn hǎochī, bú tài là.',
            translationRu: 'Тогда попробуй это, блюдо очень вкусное и почти не острое.',
          },
        ],
        grammarNoteRu: 'Отрицание 不 (bù) перед четвёртым тоном (太 tài) меняет тон на второй: bú tài.',
      },
    ],
  },
  {
    id: 's-2-4',
    unitId: 'unit-2',
    level: 'HSK 1',
    hanzi: '服务员，我要买单。',
    pinyin: 'Fúwùyuán, wǒ yào mǎidān.',
    translationRu: 'Официант, я хочу оплатить счёт.',
    literalRu: 'Официант, я хотеть купить чек.',
    situationPromptRu: 'Вы пообедали и готовы рассчитаться перед уходом из ресторана.',
    tokens: [
      { hanzi: '服务员', pinyin: 'fúwùyuán', meaningRu: 'официант', tone: 2 },
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '要', pinyin: 'yào', meaningRu: 'хочу / нужно', tone: 4 },
      { hanzi: '买单', pinyin: 'mǎidān', meaningRu: 'оплатить счёт', tone: 3 },
    ],
    distractorTokens: [
      { hanzi: '点菜', pinyin: 'diǎncài', meaningRu: 'заказать еду', tone: 3 },
      { hanzi: '打包', pinyin: 'dǎbāo', meaningRu: 'упаковать с собой', tone: 3 },
    ],
    usageExamples: [
      {
        id: 'ex-2-4-a',
        contextTitle: 'Оплата после ужина',
        situationRu: 'Вы подзываете официанта, чтобы получить чек.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '服务员，我要买单。',
            pinyin: 'Fúwùyuán, wǒ yào mǎidān.',
            translationRu: 'Официант, принесите счёт, пожалуйста.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Официант',
            hanzi: '一共八十五块，您用微信还是现金？',
            pinyin: 'Yígòng bāshíwǔ kuài, nín yòng Wēixìn háishi xiànjīn?',
            translationRu: 'Всего 85 юаней, оплатите по WeChat или наличными?',
          },
        ],
        grammarNoteRu: '买单 (mǎidān) — стандартная фраза для оплаты счёта в ресторане (также в Пекине часто говорят 结账 jiézhàng).',
      },
      {
        id: 'ex-2-4-b',
        contextTitle: 'У кассы в бистро',
        situationRu: 'Вы спешите на встречу после быстрого обеда.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '你好，我们这桌要买单。',
            pinyin: 'Nǐ hǎo, wǒmen zhè zhuō yào mǎidān.',
            translationRu: 'Здравствуйте, наш столик хочет рассчитаться.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Кассир',
            hanzi: '好的，请扫那边的二维码。',
            pinyin: 'Hǎo de, qǐng sǎo nàbiān de èrwéimǎ.',
            translationRu: 'Хорошо, отсканируйте вон тот QR-код.',
          },
        ],
        grammarNoteRu: 'Слово 服务员 (fúwùyuán) используется не только для официантов, но и для любого обслуживающего персонала в отеле или магазине.',
      },
    ],
  },
  {
    id: 's-2-5',
    unitId: 'unit-2',
    level: 'HSK 1',
    hanzi: '我不要放糖，谢谢。',
    pinyin: 'Wǒ bú yào fàng táng, xièxie.',
    translationRu: 'Мне не нужно добавлять сахар, спасибо.',
    literalRu: 'Я не хотеть класть сахар, спасибо.',
    situationPromptRu: 'В кофейне вы заказываете чай с молоком и просите не добавлять сахар.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '不要', pinyin: 'bú yào', meaningRu: 'не нужно / не хочу', tone: 2 },
      { hanzi: '放', pinyin: 'fàng', meaningRu: 'класть / добавлять', tone: 4 },
      { hanzi: '糖', pinyin: 'táng', meaningRu: 'сахар', tone: 2 },
      { hanzi: '谢谢', pinyin: 'xièxie', meaningRu: 'спасибо', tone: 4 },
    ],
    distractorTokens: [
      { hanzi: '牛奶', pinyin: 'niúnǎi', meaningRu: 'молоко', tone: 2 },
      { hanzi: '多', pinyin: 'duō', meaningRu: 'много', tone: 1 },
    ],
    usageExamples: [
      {
        id: 'ex-2-5-a',
        contextTitle: 'В магазине бабл-ти',
        situationRu: 'Бариста уточняет уровень сладости вашего напитка.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Бариста',
            hanzi: '这杯奶茶要几分糖？',
            pinyin: 'Zhè bēi nǎichá yào jǐ fēn táng?',
            translationRu: 'Сколько процентов сахара в этот молочный чай?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '我不要放糖，谢谢。',
            pinyin: 'Wǒ bú yào fàng táng, xièxie.',
            translationRu: 'Без сахара, пожалуйста, спасибо.',
          },
        ],
        grammarNoteRu: 'Конструкция 不要放… (bú yào fàng…) отлично работает для любых нежелательных ингредиентов: 不要放辣 (без острого), 不要放香菜 (без кинзы).',
      },
      {
        id: 'ex-2-5-b',
        contextTitle: 'Заказ кофе утром',
        situationRu: 'Вы берёте американо на вынос.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '请给我一杯美式咖啡，我不要放糖，谢谢。',
            pinyin: 'Qǐng gěi wǒ yì bēi Měishì kāfēi, wǒ bú yào fàng táng, xièxie.',
            translationRu: 'Дайте, пожалуйста, американо без сахара, спасибо.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Бариста',
            hanzi: '明白，五分钟就好。',
            pinyin: 'Míngbai, wǔ fēnzhōng jiù hǎo.',
            translationRu: 'Понял, через пять минут будет готово.',
          },
        ],
        grammarNoteRu: 'В связке 不要 частица 不 также переходит во 2-й тон: bú yào.',
      },
    ],
  },

  // UNIT 3: Город и транспорт
  {
    id: 's-3-1',
    unitId: 'unit-3',
    level: 'HSK 1',
    hanzi: '请问，地铁站在哪里？',
    pinyin: 'Qǐngwèn, dìtiězhàn zài nǎlǐ?',
    translationRu: 'Подскажите, пожалуйста, где находится станция метро?',
    literalRu: 'Прошу спросить, станция метро находиться где?',
    situationPromptRu: 'Вы вышли из музея в незнакомом районе и ищете вход в метро.',
    tokens: [
      { hanzi: '请问', pinyin: 'qǐngwèn', meaningRu: 'подскажите', tone: 3 },
      { hanzi: '地铁站', pinyin: 'dìtiězhàn', meaningRu: 'станция метро', tone: 4 },
      { hanzi: '在', pinyin: 'zài', meaningRu: 'находиться в', tone: 4 },
      { hanzi: '哪里', pinyin: 'nǎlǐ', meaningRu: 'где', tone: 3 },
    ],
    distractorTokens: [
      { hanzi: '怎么走', pinyin: 'zěnme zǒu', meaningRu: 'как пройти', tone: 3 },
      { hanzi: '医院', pinyin: 'yīyuàn', meaningRu: 'больница', tone: 1 },
    ],
    usageExamples: [
      {
        id: 'ex-3-1-a',
        contextTitle: 'Поиск метро на улице',
        situationRu: 'Вы обращаетесь к прохожему на перекрёстке.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '打扰一下，请问，地铁站在哪里？',
            pinyin: 'Dǎrǎo yíxià, qǐngwèn, dìtiězhàn zài nǎlǐ?',
            translationRu: 'Извините за беспокойство, подскажите, где станция метро?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Прохожий',
            hanzi: '往前走两百米，在右边。',
            pinyin: 'Wǎng qián zǒu liǎngbǎi mǐ, zài yòubiān.',
            translationRu: 'Идите прямо двести метров, будет справа.',
          },
        ],
        grammarNoteRu: 'Схема «[Объект] + 在 + 哪里？» универсальна: 洗手间在哪里？(Где туалет?), 火车站在哪里？(Где вокзал?).',
      },
      {
        id: 'ex-3-1-b',
        contextTitle: 'На выходе из торгового центра',
        situationRu: 'Вы спрашиваете дорогу у охранника.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '请问，地铁站在哪里？',
            pinyin: 'Qǐngwèn, dìtiězhàn zài nǎlǐ?',
            translationRu: 'Подскажите, где здесь станция метро?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Охранник',
            hanzi: '就在地下二层，往左拐。',
            pinyin: 'Jiù zài dìxià èrcéng, wǎng zuǒ guǎi.',
            translationRu: 'Прямо на минус втором этаже, поверните налево.',
          },
        ],
        grammarNoteRu: 'Слово 地铁 (dìtiě) буквально означает «подземная железная дорога», а 站 (zhàn) — «станция/остановка».',
      },
    ],
  },
  {
    id: 's-3-2',
    unitId: 'unit-3',
    level: 'HSK 1',
    hanzi: '我坐出租车去机场。',
    pinyin: 'Wǒ zuò chūzūchē qù jīchǎng.',
    translationRu: 'Я еду в аэропорт на такси.',
    literalRu: 'Я садиться такси ехать аэропорт.',
    situationPromptRu: 'Коллега спрашивает, как вы планируете добираться до аэропорта завтра утром.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '坐', pinyin: 'zuò', meaningRu: 'ехать (сидя на транспорте)', tone: 4 },
      { hanzi: '出租车', pinyin: 'chūzūchē', meaningRu: 'такси', tone: 1 },
      { hanzi: '去', pinyin: 'qù', meaningRu: 'ехать / идти в', tone: 4 },
      { hanzi: '机场', pinyin: 'jīchǎng', meaningRu: 'аэропорт', tone: 1 },
    ],
    distractorTokens: [
      { hanzi: '走路', pinyin: 'zǒulù', meaningRu: 'идти пешком', tone: 3 },
      { hanzi: '火车站', pinyin: 'huǒchēzhàn', meaningRu: 'ж/д вокзал', tone: 3 },
    ],
    usageExamples: [
      {
        id: 'ex-3-2-a',
        contextTitle: 'Сборы перед вылетом',
        situationRu: 'Разговор с другом о трансфере.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Друг',
            hanzi: '你明天怎么去机场？',
            pinyin: 'Nǐ míngtiān zěnme qù jīchǎng?',
            translationRu: 'Как ты завтра доберёшься до аэропорта?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '行李太多了，我坐出租车去机场。',
            pinyin: 'Xíngli tài duō le, wǒ zuò chūzūchē qù jīchǎng.',
            translationRu: 'Багажа слишком много, я поеду на такси в аэропорт.',
          },
        ],
        grammarNoteRu: 'В китайском способ передвижения всегда ставится ПЕРЕД направлением: 坐 + [транспорт] + 去 + [место].',
      },
      {
        id: 'ex-3-2-b',
        contextTitle: 'На ресепшене отеля',
        situationRu: 'Вы объясняете администратору свои планы.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Администратор',
            hanzi: '您需要我们帮您叫车吗？',
            pinyin: 'Nín xūyào wǒmen bāng nín jiàochē ma?',
            translationRu: 'Вам помочь вызвать машину?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '好的，谢谢，我坐出租车去机场。',
            pinyin: 'Hǎo de, xièxie, wǒ zuò chūzūchē qù jīchǎng.',
            translationRu: 'Да, спасибо, я поеду в аэропорт на такси.',
          },
        ],
        grammarNoteRu: 'Глагол 坐 (zuò — сидеть) используется для всего транспорта, где вы едете сидя внутри: 坐地铁 (на метро), 坐飞机 (на самолёте), 坐公交车 (на автобусе).',
      },
    ],
  },
  {
    id: 's-3-3',
    unitId: 'unit-3',
    level: 'HSK 1',
    hanzi: '一直往前走，然后往左拐。',
    pinyin: 'Yìzhí wǎng qián zǒu, ránhòu wǎng zuǒ guǎi.',
    translationRu: 'Идите всё время прямо, а затем поверните налево.',
    literalRu: 'Прямо вперёд идти, затем к лево повернуть.',
    situationPromptRu: 'Турист спрашивает у вас, как пройти к парку, который находится за углом.',
    tokens: [
      { hanzi: '一直', pinyin: 'yìzhí', meaningRu: 'всё время / прямо', tone: 4 },
      { hanzi: '往前走', pinyin: 'wǎng qián zǒu', meaningRu: 'идти вперёд', tone: 3 },
      { hanzi: '然后', pinyin: 'ránhòu', meaningRu: 'потом / затем', tone: 2 },
      { hanzi: '往左拐', pinyin: 'wǎng zuǒ guǎi', meaningRu: 'повернуть налево', tone: 3 },
    ],
    distractorTokens: [
      { hanzi: '往右拐', pinyin: 'wǎng yòu guǎi', meaningRu: 'повернуть направо', tone: 3 },
      { hanzi: '回来', pinyin: 'huílái', meaningRu: 'вернуться', tone: 2 },
    ],
    usageExamples: [
      {
        id: 'ex-3-3-a',
        contextTitle: 'Объяснение дороги',
        situationRu: 'Вы подсказываете маршрут до книжного магазина.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Прохожий',
            hanzi: '请问书店怎么走？',
            pinyin: 'Qǐngwèn shūdiàn zěnme zǒu?',
            translationRu: 'Подскажите, как пройти в книжный?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '一直往前走，然后往左拐就到了。',
            pinyin: 'Yìzhí wǎng qián zǒu, ránhòu wǎng zuǒ guǎi jiù dào le.',
            translationRu: 'Идите всё время прямо, затем поверните налево — и вы на месте.',
          },
        ],
        grammarNoteRu: 'Предлог 往 (wǎng) показывает направление движения: 往前 (вперёд), 往左 (налево), 往右 (направо).',
      },
      {
        id: 'ex-3-3-b',
        contextTitle: 'Разговор с водителем такси',
        situationRu: 'Вы подсказываете водителю финальный поворот ко двору.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Водитель',
            hanzi: '前面这个路口怎么开？',
            pinyin: 'Qiánmiàn zhège lùkǒu zěnme kāi?',
            translationRu: 'Как ехать на перекрёстке впереди?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '一直往前走，然后往左拐。',
            pinyin: 'Yìzhí wǎng qián zǒu, ránhòu wǎng zuǒ guǎi.',
            translationRu: 'Езжайте прямо, а потом поверните налево.',
          },
        ],
        grammarNoteRu: 'Связка «…，然后…» (…а затем…) помогает выстраивать чёткую последовательность действий.',
      },
    ],
  },
  {
    id: 's-3-4',
    unitId: 'unit-3',
    level: 'HSK 1',
    hanzi: '这里离火车站远吗？',
    pinyin: 'Zhèlǐ lí huǒchēzhàn yuǎn ma?',
    translationRu: 'Отсюда далеко до железнодорожного вокзала?',
    literalRu: 'Здесь от вокзала далеко ли?',
    situationPromptRu: 'Вы приехали в отель и хотите узнать, далеко ли до ж/д вокзала.',
    tokens: [
      { hanzi: '这里', pinyin: 'zhèlǐ', meaningRu: 'здесь / отсюда', tone: 4 },
      { hanzi: '离', pinyin: 'lí', meaningRu: 'от (расстояние)', tone: 2 },
      { hanzi: '火车站', pinyin: 'huǒchēzhàn', meaningRu: 'ж/д вокзал', tone: 3 },
      { hanzi: '远', pinyin: 'yuǎn', meaningRu: 'далеко', tone: 3 },
      { hanzi: '吗', pinyin: 'ma', meaningRu: 'вопр. частица', tone: 5 },
    ],
    distractorTokens: [
      { hanzi: '近', pinyin: 'jìn', meaningRu: 'близко', tone: 4 },
      { hanzi: '多少', pinyin: 'duōshao', meaningRu: 'сколько', tone: 1 },
    ],
    usageExamples: [
      {
        id: 'ex-3-4-a',
        contextTitle: 'На стойке регистрации отеля',
        situationRu: 'Вы оцениваете время до завтрашнего поезда.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '请问，这里离火车站远吗？',
            pinyin: 'Qǐngwèn, zhèlǐ lí huǒchēzhàn yuǎn ma?',
            translationRu: 'Подскажите, отсюда далеко до вокзала?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Сотрудник',
            hanzi: '不远，坐地铁只要十分钟。',
            pinyin: 'Bù yuǎn, zuò dìtiě zhǐyào shí fēnzhōng.',
            translationRu: 'Недалеко, на метро всего 10 минут.',
          },
        ],
        grammarNoteRu: 'Для описания расстояния между двумя точками используется предлог 离 (lí): А + 离 + Б + 很近 / 很远 (А от Б близко / далеко).',
      },
      {
        id: 'ex-3-4-b',
        contextTitle: 'Прогулка по центру',
        situationRu: 'Вы решаете, идти пешком или взять велосипед.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Друг',
            hanzi: '这里离火车站远吗？我们要不要骑车？',
            pinyin: 'Zhèlǐ lí huǒchēzhàn yuǎn ma? Wǒmen yào bú yào qíchē?',
            translationRu: 'Отсюда далеко до вокзала? Поедем на велосипедах?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '有点远，还是打车吧。',
            pinyin: 'Yǒudiǎn yuǎn, háishi dǎchē ba.',
            translationRu: 'Далековато, лучше всё-таки возьмём такси.',
          },
        ],
        grammarNoteRu: '火车 буквально «огненная повозка» (поезд), а 车站 — «станция».',
      },
    ],
  },
  {
    id: 's-3-5',
    unitId: 'unit-3',
    level: 'HSK 1',
    hanzi: '我在银行前面等你。',
    pinyin: 'Wǒ zài yínháng qiánmiàn děng nǐ.',
    translationRu: 'Я жду тебя перед банком.',
    literalRu: 'Я находиться банк впереди ждать тебя.',
    situationPromptRu: 'Вы пришли на встречу раньше друга и пишете ему, где именно стоите.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '在', pinyin: 'zài', meaningRu: 'в / на (где?)', tone: 4 },
      { hanzi: '银行', pinyin: 'yínháng', meaningRu: 'банк', tone: 2 },
      { hanzi: '前面', pinyin: 'qiánmiàn', meaningRu: 'впереди / перед', tone: 2 },
      { hanzi: '等你', pinyin: 'děng nǐ', meaningRu: 'жду тебя', tone: 3 },
    ],
    distractorTokens: [
      { hanzi: '后面', pinyin: 'hòumiàn', meaningRu: 'сзади / за', tone: 4 },
      { hanzi: '学校', pinyin: 'xuéxiào', meaningRu: 'школа', tone: 2 },
    ],
    usageExamples: [
      {
        id: 'ex-3-5-a',
        contextTitle: 'Встреча в городе',
        situationRu: 'Вы договорились поужинать и встречаетесь на улице.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Друг',
            hanzi: '你到了吗？你在哪儿？',
            pinyin: 'Nǐ dào le ma? Nǐ zài nǎr?',
            translationRu: 'Ты уже пришёл? Где ты?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '到了，我在银行前面等你。',
            pinyin: 'Dào le, wǒ zài yínháng qiánmiàn děng nǐ.',
            translationRu: 'Уже на месте, я жду тебя перед банком.',
          },
        ],
        grammarNoteRu: 'ВАЖНО: место действия в китайском почти всегда ставится ДО самого действия: 我 [在银行前面] 等你 (Я [перед банком] жду тебя).',
      },
      {
        id: 'ex-3-5-b',
        contextTitle: 'Вызов такси к точке',
        situationRu: 'Вы уточняете ориентир для водителя.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Водитель',
            hanzi: '我在路口，没看到你。',
            pinyin: 'Wǒ zài lùkǒu, méi kàndào nǐ.',
            translationRu: 'Я на перекрёстке, не вижу вас.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '我穿着白色外套，在银行前面等你。',
            pinyin: 'Wǒ chuānzhe báisè wàitào, zài yínháng qiánmiàn děng nǐ.',
            translationRu: 'Я в белой куртке, жду вас прямо перед банком.',
          },
        ],
        grammarNoteRu: 'Локативы всегда идут ПОСЛЕ существительного: 银行前面 (перед банком), 桌子上面 (на столе), 咖啡店旁边 (рядом с кофейней).',
      },
    ],
  },

  // UNIT 4: Повседневные дела и время
  {
    id: 's-4-1',
    unitId: 'unit-4',
    level: 'HSK 2',
    hanzi: '我每天早上都喝一杯咖啡。',
    pinyin: 'Wǒ měitiān zǎoshang dōu hē yì bēi kāfēi.',
    translationRu: 'Я каждое утро пью чашку кофе.',
    literalRu: 'Я каждый день утро всё пить одна чашка кофе.',
    situationPromptRu: 'Коллега спрашивает о ваших утренних привычках, и вы рассказываете про кофе.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '每天', pinyin: 'měitiān', meaningRu: 'каждый день', tone: 3 },
      { hanzi: '早上', pinyin: 'zǎoshang', meaningRu: 'утро / утром', tone: 3 },
      { hanzi: '都', pinyin: 'dōu', meaningRu: 'всегда / все (усиление)', tone: 1 },
      { hanzi: '喝', pinyin: 'hē', meaningRu: 'пить', tone: 1 },
      { hanzi: '一杯咖啡', pinyin: 'yì bēi kāfēi', meaningRu: 'чашку кофе', tone: 1 },
    ],
    distractorTokens: [
      { hanzi: '晚上', pinyin: 'wǎnshang', meaningRu: 'вечером', tone: 3 },
      { hanzi: '睡觉', pinyin: 'shuìjiào', meaningRu: 'спать', tone: 4 },
    ],
    usageExamples: [
      {
        id: 'ex-4-1-a',
        contextTitle: 'Утро на кухне в офисе',
        situationRu: 'Вы готовите эспрессо перед началом рабочего дня.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Коллега',
            hanzi: '你很喜欢喝咖啡吗？',
            pinyin: 'Nǐ hěn xǐhuan hē kāfēi ma?',
            translationRu: 'Ты очень любишь пить кофе?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '是的，我每天早上都喝一杯咖啡。',
            pinyin: 'Shì de, wǒ měitiān zǎoshang dōu hē yì bēi kāfēi.',
            translationRu: 'Да, я каждое утро пью чашку кофе.',
          },
        ],
        grammarNoteRu: 'Когда в предложении есть слова с 每 (каждый: 每天 каждый день, 每个人 каждый человек), перед глаголом почти обязательно ставится 都 (dōu).',
      },
      {
        id: 'ex-4-1-b',
        contextTitle: 'Беседа о распорядке дня',
        situationRu: 'Обсуждение привычек с языковым партнёром.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Партнёр',
            hanzi: '你早上起床以后一般做什么？',
            pinyin: 'Nǐ zǎoshang qǐchuáng yǐhòu yìbān zuò shénme?',
            translationRu: 'Что ты обычно делаешь утром после подъёма?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '我每天早上都喝一杯咖啡，然后看新闻。',
            pinyin: 'Wǒ měitiān zǎoshang dōu hē yì bēi kāfēi, ránhòu kàn xīnwén.',
            translationRu: 'Каждое утро я пью чашку кофе, а потом читаю новости.',
          },
        ],
        grammarNoteRu: 'Время ставится сразу после подлежащего (или в самое начало), но никогда не в конец предложения!',
      },
    ],
  },
  {
    id: 's-4-2',
    unitId: 'unit-4',
    level: 'HSK 2',
    hanzi: '我现在正在学习中文。',
    pinyin: 'Wǒ xiànzài zhèngzài xuéxí Zhōngwén.',
    translationRu: 'Я сейчас как раз учу китайский язык.',
    literalRu: 'Я сейчас в процессе учить китайский.',
    situationPromptRu: 'Друг звонит и спрашивает, чем вы прямо сейчас заняты.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '现在', pinyin: 'xiànzài', meaningRu: 'сейчас', tone: 4 },
      { hanzi: '正在', pinyin: 'zhèngzài', meaningRu: 'в процессе (прямо сейчас)', tone: 4 },
      { hanzi: '学习', pinyin: 'xuéxí', meaningRu: 'учить / изучать', tone: 2 },
      { hanzi: '中文', pinyin: 'Zhōngwén', meaningRu: 'китайский язык', tone: 1 },
    ],
    distractorTokens: [
      { hanzi: '工作', pinyin: 'gōngzuò', meaningRu: 'работать', tone: 1 },
      { hanzi: '昨天', pinyin: 'zuótiān', meaningRu: 'вчера', tone: 2 },
    ],
    usageExamples: [
      {
        id: 'ex-4-2-a',
        contextTitle: 'Телефонный звонок вечером',
        situationRu: 'Друг зовёт вас погулять, но вы занимаетесь.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Друг',
            hanzi: '你在做什么呢？出来玩吧！',
            pinyin: 'Nǐ zài zuò shénme ne? Chūlái wán ba!',
            translationRu: 'Чем занимаешься? Выходи погулять!',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '我现在正在学习中文，晚上八点再见。',
            pinyin: 'Wǒ xiànzài zhèngzài xuéxí Zhōngwén, wǎnshang bā diǎn zàijiàn.',
            translationRu: 'Я сейчас учу китайский, увидимся в восемь вечера.',
          },
        ],
        grammarNoteRu: 'Маркер 正在 (zhèngzài) перед глаголом показывает длительное действие прямо в момент речи (аналог Continuous в английском).',
      },
      {
        id: 'ex-4-2-b',
        contextTitle: 'В книжном кафе',
        situationRu: 'Знакомый видит ваши тетради с иероглифами.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Знакомый',
            hanzi: '你在写汉字吗？',
            pinyin: 'Nǐ zài xiě Hànzì ma?',
            translationRu: 'Ты пишешь иероглифы?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '对，我现在正在学习中文。',
            pinyin: 'Duì, wǒ xiànzài zhèngzài xuéxí Zhōngwén.',
            translationRu: 'Да, я сейчас активно учу китайский.',
          },
        ],
        grammarNoteRu: 'Слово 中文 (Zhōngwén) чаще используют для языка в целом (чтение, письмо, речь), а 汉语 (Hànyǔ) — именно устный язык ханьцев.',
      },
    ],
  },
  {
    id: 's-4-3',
    unitId: 'unit-4',
    level: 'HSK 2',
    hanzi: '今天晚上七点我们一起吃饭吧。',
    pinyin: 'Jīntiān wǎnshang qī diǎn wǒmen yìqǐ chīfàn ba.',
    translationRu: 'Давай сегодня вечером в семь поужинаем вместе.',
    literalRu: 'Сегодня вечер семь часов мы вместе есть еду давай.',
    situationPromptRu: 'Вы хотите пригласить коллегу поужинать вместе после работы в 19:00.',
    tokens: [
      { hanzi: '今天', pinyin: 'jīntiān', meaningRu: 'сегодня', tone: 1 },
      { hanzi: '晚上七点', pinyin: 'wǎnshang qī diǎn', meaningRu: 'вечером в 7 часов', tone: 3 },
      { hanzi: '我们', pinyin: 'wǒmen', meaningRu: 'мы', tone: 3 },
      { hanzi: '一起', pinyin: 'yìqǐ', meaningRu: 'вместе', tone: 4 },
      { hanzi: '吃饭', pinyin: 'chīfàn', meaningRu: 'есть / поужинать', tone: 1 },
      { hanzi: '吧', pinyin: 'ba', meaningRu: 'давай (предложение)', tone: 5 },
    ],
    distractorTokens: [
      { hanzi: '明天', pinyin: 'míngtiān', meaningRu: 'завтра', tone: 2 },
      { hanzi: '看电影', pinyin: 'kàn diànyǐng', meaningRu: 'смотреть кино', tone: 4 },
    ],
    usageExamples: [
      {
        id: 'ex-4-3-a',
        contextTitle: 'Приглашение коллеги',
        situationRu: 'Конец рабочего дня в пятницу.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '今天晚上七点我们一起吃饭吧。',
            pinyin: 'Jīntiān wǎnshang qī diǎn wǒmen yìqǐ chīfàn ba.',
            translationRu: 'Давай сегодня в семь вечера вместе поужинаем.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Коллега',
            hanzi: '好啊！去哪家餐厅？',
            pinyin: 'Hǎo a! Qù nǎ jiā cāntīng?',
            translationRu: 'С удовольствием! В какой ресторан пойдём?',
          },
        ],
        grammarNoteRu: 'В китайском время всегда идёт от большего к меньшему: 今天 (день) → 晚上 (время суток) → 七点 (час).',
      },
      {
        id: 'ex-4-3-b',
        contextTitle: 'Семейный созвон',
        situationRu: 'Вы договариваетесь о времени семейного ужина.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Мама',
            hanzi: '你几点回家？',
            pinyin: 'Nǐ jǐ diǎn huíjiā?',
            translationRu: 'Во сколько ты вернёшься домой?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '六点半到，今天晚上七点我们一起吃饭吧。',
            pinyin: 'Liù diǎn bàn dào, jīntiān wǎnshang qī diǎn wǒmen yìqǐ chīfàn ba.',
            translationRu: 'Буду в 6:30, давайте сегодня поужинаем вместе в семь.',
          },
        ],
        grammarNoteRu: 'Частица 吧 (ba) в конце делает фразу мягким дружеским предложением («давай…»).',
      },
    ],
  },
  {
    id: 's-4-4',
    unitId: 'unit-4',
    level: 'HSK 2',
    hanzi: '明天我有空，可以见面。',
    pinyin: 'Míngtiān wǒ yǒukòng, kěyǐ jiànmiàn.',
    translationRu: 'Завтра я свободен, мы можем встретиться.',
    literalRu: 'Завтра у меня есть свободное время, можно встретиться.',
    situationPromptRu: 'Подруга спрашивает, когда у вас найдётся свободное время для встречи.',
    tokens: [
      { hanzi: '明天', pinyin: 'míngtiān', meaningRu: 'завтра', tone: 2 },
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '有空', pinyin: 'yǒukòng', meaningRu: 'есть свободное время', tone: 3 },
      { hanzi: '可以', pinyin: 'kěyǐ', meaningRu: 'можно / могу', tone: 3 },
      { hanzi: '见面', pinyin: 'jiànmiàn', meaningRu: 'встретиться', tone: 4 },
    ],
    distractorTokens: [
      { hanzi: '没时间', pinyin: 'méi shíjiān', meaningRu: 'нет времени', tone: 2 },
      { hanzi: '休息', pinyin: 'xiūxi', meaningRu: 'отдыхать', tone: 1 },
    ],
    usageExamples: [
      {
        id: 'ex-4-4-a',
        contextTitle: 'Согласование встречи',
        situationRu: 'Вы переписываетесь в мессенджере с подругой.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Подруга',
            hanzi: '你这周哪天方便？',
            pinyin: 'Nǐ zhè zhōu nǎ tiān fāngbiàn?',
            translationRu: 'В какой день на этой неделе тебе удобно?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '明天我有空，可以见面。',
            pinyin: 'Míngtiān wǒ yǒukòng, kěyǐ jiànmiàn.',
            translationRu: 'Завтра я свободен, можно увидеться.',
          },
        ],
        grammarNoteRu: 'Иероглиф 空 (kòng в 4-м тоне) означает «свободное время / досуг». Есть время — 有空, занят — 没空.',
      },
      {
        id: 'ex-4-4-b',
        contextTitle: 'Назначение деловой беседы',
        situationRu: 'Вы отвечаете партнёру на запрос о короткой встрече.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Партнёр',
            hanzi: '今天下午能聊一下吗？',
            pinyin: 'Jīntiān xiàwǔ néng liáo yíxià ma?',
            translationRu: 'Сможем пообщаться сегодня днём?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '今天很忙，明天我有空，可以见面。',
            pinyin: 'Jīntiān hěn máng, míngtiān wǒ yǒukòng, kěyǐ jiànmiàn.',
            translationRu: 'Сегодня я очень занят, а завтра у меня есть время — можем встретиться.',
          },
        ],
        grammarNoteRu: '见面 (jiànmiàn — увидеться лицом к лицу) уже содержит объект 面 (лицо), поэтому нельзя говорить 见面你 — нужно 和你见面 (встретиться с тобой).',
      },
    ],
  },
  {
    id: 's-4-5',
    unitId: 'unit-4',
    level: 'HSK 2',
    hanzi: '我下班以后去超市买水果。',
    pinyin: 'Wǒ xiàbān yǐhòu qù chāoshì mǎi shuǐguǒ.',
    translationRu: 'После работы я пойду в супермаркет купить фрукты.',
    literalRu: 'Я закончить работу после идти супермаркет покупать фрукты.',
    situationPromptRu: 'Вы рассказываете соседу по квартире о своих планах на вечер после работы.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '下班', pinyin: 'xiàbān', meaningRu: 'закончить работу', tone: 4 },
      { hanzi: '以后', pinyin: 'yǐhòu', meaningRu: 'после', tone: 3 },
      { hanzi: '去', pinyin: 'qù', meaningRu: 'пойти в', tone: 4 },
      { hanzi: '超市', pinyin: 'chāoshì', meaningRu: 'супермаркет', tone: 1 },
      { hanzi: '买水果', pinyin: 'mǎi shuǐguǒ', meaningRu: 'купить фрукты', tone: 3 },
    ],
    distractorTokens: [
      { hanzi: '上班', pinyin: 'shàngbān', meaningRu: 'идти на работу', tone: 4 },
      { hanzi: '做饭', pinyin: 'zuòfàn', meaningRu: 'готовить еду', tone: 4 },
    ],
    usageExamples: [
      {
        id: 'ex-4-5-a',
        contextTitle: 'Сообщение соседу',
        situationRu: 'Вы спрашиваете, нужно ли что-то купить к ужину.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '我下班以后去超市买水果，你需要什么？',
            pinyin: 'Wǒ xiàbān yǐhòu qù chāoshì mǎi shuǐguǒ, nǐ xūyào shénme?',
            translationRu: 'Я после работы зайду в супермаркет за фруктами, тебе что-нибудь нужно?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Сосед',
            hanzi: '帮我买一瓶牛奶吧，谢谢！',
            pinyin: 'Bāng wǒ mǎi yì píng niúnǎi ba, xièxie!',
            translationRu: 'Купи мне, пожалуйста, бутылку молока, спасибо!',
          },
        ],
        grammarNoteRu: 'Слово 以后 (после) всегда ставится ПОСЛЕ события: 下班以后 (после окончания работы), 吃饭以后 (после еды).',
      },
      {
        id: 'ex-4-5-b',
        contextTitle: 'Разговор на остановке',
        situationRu: 'Коллега спрашивает, сразу ли вы едете домой.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Коллега',
            hanzi: '你直接回家吗？',
            pinyin: 'Nǐ zhíjiē huíjiā ma?',
            translationRu: 'Ты сразу домой едешь?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '不，我下班以后去超市买水果。',
            pinyin: 'Bù, wǒ xiàbān yǐhòu qù chāoshì mǎi shuǐguǒ.',
            translationRu: 'Нет, я после работы пойду в супермаркет за фруктами.',
          },
        ],
        grammarNoteRu: 'Глаголы цели просто следуют друг за другом без союза «чтобы»: 去超市 (пойти в супермаркет) + 买水果 (купить фрукты).',
      },
    ],
  },

  // UNIT 5: Покупки и путешествия
  {
    id: 's-5-1',
    unitId: 'unit-5',
    level: 'HSK 2',
    hanzi: '请问，这件衣服多少钱？',
    pinyin: 'Qǐngwèn, zhè jiàn yīfu duōshao qián?',
    translationRu: 'Подскажите, пожалуйста, сколько стоит эта одежда (вещь)?',
    literalRu: 'Прошу спросить, эта штука одежда сколько денег?',
    situationPromptRu: 'В магазине вы увидели куртку без ценника и хотите узнать её стоимость.',
    tokens: [
      { hanzi: '请问', pinyin: 'qǐngwèn', meaningRu: 'подскажите', tone: 3 },
      { hanzi: '这件', pinyin: 'zhè jiàn', meaningRu: 'эта (для одежды)', tone: 4 },
      { hanzi: '衣服', pinyin: 'yīfu', meaningRu: 'одежда', tone: 1 },
      { hanzi: '多少钱', pinyin: 'duōshao qián', meaningRu: 'сколько стоит', tone: 1 },
    ],
    distractorTokens: [
      { hanzi: '太贵了', pinyin: 'tài guì le', meaningRu: 'слишком дорого', tone: 4 },
      { hanzi: '颜色', pinyin: 'yánsè', meaningRu: 'цвет', tone: 2 },
    ],
    usageExamples: [
      {
        id: 'ex-5-1-a',
        contextTitle: 'В бутике одежды',
        situationRu: 'Вы показываете продавцу понравившийся свитер.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '请问，这件衣服多少钱？',
            pinyin: 'Qǐngwèn, zhè jiàn yīfu duōshao qián?',
            translationRu: 'Подскажите, сколько стоит эта вещь?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Продавец',
            hanzi: '这件三百二十块，今天有八折。',
            pinyin: 'Zhè jiàn sānbǎi èrshí kuài, jīntiān yǒu bā zhé.',
            translationRu: 'Эта стоит 320 юаней, сегодня скидка 20% (80% от цены).',
          },
        ],
        grammarNoteRu: 'Для верхней одежды и рубашек используется счётное слово 件 (jiàn). Обратите внимание на скидки в Китае: 八折 (bā zhé) — это «платите 80% цены», то есть скидка 20%!',
      },
      {
        id: 'ex-5-1-b',
        contextTitle: 'На рынке шёлка',
        situationRu: 'Вы прицениваетесь к традиционной рубашке.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '老板，这件衣服多少钱？',
            pinyin: 'Lǎobǎn, zhè jiàn yīfu duōshao qián?',
            translationRu: 'Хозяин, сколько стоит эта рубашка?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Продавец',
            hanzi: '一百八，你可以试穿一下。',
            pinyin: 'Yìbǎi bā, nǐ kěyǐ shìchuān yíxià.',
            translationRu: '180 юаней, можете примерить.',
          },
        ],
        grammarNoteRu: 'В разговорной речи при цене часто опускают слово 钱 (деньги) и просто говорят 多少 (сколько), либо 多少钱 (сколько денег).',
      },
    ],
  },
  {
    id: 's-5-2',
    unitId: 'unit-5',
    level: 'HSK 2',
    hanzi: '太贵了，可以便宜一点吗？',
    pinyin: 'Tài guì le, kěyǐ piányi yìdiǎn ma?',
    translationRu: 'Слишком дорого, можно немного подешевле?',
    literalRu: 'Слишком дорого, можно дешёвый чуть-чуть ли?',
    situationPromptRu: 'На сувенирном рынке продавец назвал завышенную цену, и вы хотите поторговаться.',
    tokens: [
      { hanzi: '太贵了', pinyin: 'tài guì le', meaningRu: 'слишком дорого', tone: 4 },
      { hanzi: '可以', pinyin: 'kěyǐ', meaningRu: 'можно ли', tone: 3 },
      { hanzi: '便宜', pinyin: 'piányi', meaningRu: 'дешёвый / дешевле', tone: 2 },
      { hanzi: '一点', pinyin: 'yìdiǎn', meaningRu: 'немного', tone: 1 },
      { hanzi: '吗', pinyin: 'ma', meaningRu: 'вопр. частица', tone: 5 },
    ],
    distractorTokens: [
      { hanzi: '好看', pinyin: 'hǎokàn', meaningRu: 'красивый', tone: 3 },
      { hanzi: '太大', pinyin: 'tài dà', meaningRu: 'слишком большой', tone: 4 },
    ],
    usageExamples: [
      {
        id: 'ex-5-2-a',
        contextTitle: 'Покупка сувениров',
        situationRu: 'Вы выбираете чайный сервиз на рынке.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Продавец',
            hanzi: '这套茶具两百块。',
            pinyin: 'Zhè tào chájù liǎngbǎi kuài.',
            translationRu: 'Этот чайный набор стоит 200 юаней.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '太贵了，可以便宜一点吗？一百五怎么样？',
            pinyin: 'Tài guì le, kěyǐ piányi yìdiǎn ma? Yìbǎi wǔ zěnmeyàng?',
            translationRu: 'Слишком дорого, можно немного дешевле? Как насчёт 150?',
          },
        ],
        grammarNoteRu: 'Конструкция 太 + [прилагательное] + 了 означает «слишком…»: 太贵了 (слишком дорого), 太好了 (замечательно!), 太冷了 (слишком холодно).',
      },
      {
        id: 'ex-5-2-b',
        contextTitle: 'На фруктовом развале',
        situationRu: 'Вы берёте сразу несколько килограммов манго.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '我买三斤，太贵了，可以便宜一点吗？',
            pinyin: 'Wǒ mǎi sān jīn, tài guì le, kěyǐ piányi yìdiǎn ma?',
            translationRu: 'Я возьму три цзиня (1.5 кг), дороговато — сделаете подешевле?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Продавец',
            hanzi: '行，给你算便宜五块钱。',
            pinyin: 'Xíng, gěi nǐ suàn piányi wǔ kuài qián.',
            translationRu: 'Ладно, скину вам пять юаней.',
          },
        ],
        grammarNoteRu: 'Прилагательное + 一点 (yìdiǎn) означает «чуть более…»: 便宜一点 (чуть дешевле), 快一点 (чуть быстрее), 慢一点 (чуть медленнее).',
      },
    ],
  },
  {
    id: 's-5-3',
    unitId: 'unit-5',
    level: 'HSK 2',
    hanzi: '我可以试穿一下吗？',
    pinyin: 'Wǒ kěyǐ shìchuān yíxià ma?',
    translationRu: 'Могу ли я это примерить?',
    literalRu: 'Я можно пробовать надеть разок ли?',
    situationPromptRu: 'Вы нашли куртку своего размера и спрашиваете у консультанта, где можно её примерить.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '可以', pinyin: 'kěyǐ', meaningRu: 'могу / можно', tone: 3 },
      { hanzi: '试穿', pinyin: 'shìchuān', meaningRu: 'примерить', tone: 4 },
      { hanzi: '一下', pinyin: 'yíxià', meaningRu: 'немного / разок', tone: 2 },
      { hanzi: '吗', pinyin: 'ma', meaningRu: 'вопр. частица', tone: 5 },
    ],
    distractorTokens: [
      { hanzi: '换', pinyin: 'huàn', meaningRu: 'поменять', tone: 4 },
      { hanzi: '退货', pinyin: 'tuìhuò', meaningRu: 'вернуть товар', tone: 4 },
    ],
    usageExamples: [
      {
        id: 'ex-5-3-a',
        contextTitle: 'В примерочной',
        situationRu: 'Вы держите в руках пальто и обращаетесь к продавцу.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '你好，我可以试穿一下吗？',
            pinyin: 'Nǐ hǎo, wǒ kěyǐ shìchuān yíxià ma?',
            translationRu: 'Здравствуйте, я могу это примерить?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Продавец',
            hanzi: '当然可以，试衣间在那边。',
            pinyin: 'Dāngrán kěyǐ, shìyījiān zài nàbiān.',
            translationRu: 'Конечно можно, примерочная вон там.',
          },
        ],
        grammarNoteRu: 'Слово 一下 (yíxià) после глагола смягчает просьбу и делает её непринуждённой: 看一下 (взглянуть), 等一下 (подождать минутку), 试穿一下 (примерить).',
      },
      {
        id: 'ex-5-3-b',
        contextTitle: 'Выбор обуви',
        situationRu: 'Продавец принёс кроссовки нужного размера.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Продавец',
            hanzi: '这是42码的。',
            pinyin: 'Zhè shì sìshí’èr mǎ de.',
            translationRu: 'Вот 42-й размер.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '谢谢，我可以试穿一下吗？',
            pinyin: 'Xièxie, wǒ kěyǐ shìchuān yíxià ma?',
            translationRu: 'Спасибо, можно примерить?',
          },
        ],
        grammarNoteRu: 'Глагол 试 (shì) — пробовать, 穿 (chuān) — носить/надевать. Вместе 试穿 — именно примерять одежду или обувь.',
      },
    ],
  },
  {
    id: 's-5-4',
    unitId: 'unit-5',
    level: 'HSK 2',
    hanzi: '我预订了一个房间。',
    pinyin: 'Wǒ yùdìng le yí gè fángjiān.',
    translationRu: 'Я забронировал(а) один номер (комнату).',
    literalRu: 'Я бронировать [завершено] один штука комната.',
    situationPromptRu: 'Вы подошли к стойке регистрации в гостинице в Ханчжоу, чтобы заселиться.',
    tokens: [
      { hanzi: '我', pinyin: 'wǒ', meaningRu: 'я', tone: 3 },
      { hanzi: '预订了', pinyin: 'yùdìng le', meaningRu: 'забронировал(а)', tone: 4 },
      { hanzi: '一个', pinyin: 'yí gè', meaningRu: 'один', tone: 2 },
      { hanzi: '房间', pinyin: 'fángjiān', meaningRu: 'номер / комната', tone: 2 },
    ],
    distractorTokens: [
      { hanzi: '退房', pinyin: 'tuìfáng', meaningRu: 'выселяться', tone: 4 },
      { hanzi: '钥匙', pinyin: 'yàoshi', meaningRu: 'ключ', tone: 4 },
    ],
    usageExamples: [
      {
        id: 'ex-5-4-a',
        contextTitle: 'Заселение в отель',
        situationRu: 'Вы протягиваете паспорт администратору.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '你好，我预订了一个房间，这是我的护照。',
            pinyin: 'Nǐ hǎo, wǒ yùdìng le yí gè fángjiān, zhè shì wǒ de hùzhào.',
            translationRu: 'Здравствуйте, я забронировал номер, вот мой паспорт.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Администратор',
            hanzi: '好的，请稍等，我帮您查一下。',
            pinyin: 'Hǎo de, qǐng shāoděng, wǒ bāng nín chá yíxià.',
            translationRu: 'Хорошо, подождите секунду, я проверю бронь.',
          },
        ],
        grammarNoteRu: 'Частица 了 (le) сразу после глагола 预订 показывает завершённое действие в прошлом («забронировал»).',
      },
      {
        id: 'ex-5-4-b',
        contextTitle: 'Прибытие поздно вечером',
        situationRu: 'Вы звоните в отель предупредить о позднем заезде.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '您好，我预订了一个房间，今天晚上十一点到。',
            pinyin: 'Nín hǎo, wǒ yùdìng le yí gè fángjiān, jīntiān wǎnshang shíyī diǎn dào.',
            translationRu: 'Здравствуйте, я бронировал номер, приеду сегодня в 11 вечера.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Отель',
            hanzi: '没问题，我们会为您保留房间。',
            pinyin: 'Méi wèntí, wǒmen huì wèi nín bǎoliú fángjiān.',
            translationRu: 'Без проблем, мы сохраним номер за вами.',
          },
        ],
        grammarNoteRu: 'Перед 4-м тоном 个 (gè) числительное 一 (yī) читается во 2-м тоне: yí gè.',
      },
    ],
  },
  {
    id: 's-5-5',
    unitId: 'unit-5',
    level: 'HSK 2',
    hanzi: '可以用银行卡付款吗？',
    pinyin: 'Kěyǐ yòng yínhángkǎ fùkuǎn ma?',
    translationRu: 'Можно ли оплатить банковской картой?',
    literalRu: 'Можно использовать банковская карта платить ли?',
    situationPromptRu: 'У вас закончились наличные и не работает мобильный кошелёк, вы уточняете про карту.',
    tokens: [
      { hanzi: '可以', pinyin: 'kěyǐ', meaningRu: 'можно ли', tone: 3 },
      { hanzi: '用', pinyin: 'yòng', meaningRu: 'использовать / с помощью', tone: 4 },
      { hanzi: '银行卡', pinyin: 'yínhángkǎ', meaningRu: 'банковская карта', tone: 2 },
      { hanzi: '付款', pinyin: 'fùkuǎn', meaningRu: 'оплатить', tone: 4 },
      { hanzi: '吗', pinyin: 'ma', meaningRu: 'вопр. частица', tone: 5 },
    ],
    distractorTokens: [
      { hanzi: '现金', pinyin: 'xiànjīn', meaningRu: 'наличные', tone: 4 },
      { hanzi: '找钱', pinyin: 'zhǎoqián', meaningRu: 'дать сдачу', tone: 3 },
    ],
    usageExamples: [
      {
        id: 'ex-5-5-a',
        contextTitle: 'На кассе в универмаге',
        situationRu: 'Вы собираетесь оплатить покупку.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Вы',
            hanzi: '请问，可以用银行卡付款吗？',
            pinyin: 'Qǐngwèn, kěyǐ yòng yínhángkǎ fùkuǎn ma?',
            translationRu: 'Подскажите, можно оплатить банковской картой?',
          },
          {
            speaker: 'B',
            speakerLabel: 'Кассир',
            hanzi: '可以，Visa 和银联都可以。',
            pinyin: 'Kěyǐ, Visa hé Yínlián dōu kěyǐ.',
            translationRu: 'Да, принимаем и Visa, и UnionPay.',
          },
        ],
        grammarNoteRu: 'Глагол 用 (yòng — использовать) всегда ставится перед инструментом и перед основным действием: 用 + [инструмент] + [глагол].',
      },
      {
        id: 'ex-5-5-b',
        contextTitle: 'Оплата депозита в гостинице',
        situationRu: 'С вас просят залог за номер при заселении.',
        dialogue: [
          {
            speaker: 'A',
            speakerLabel: 'Администратор',
            hanzi: '需要交五百块押金。',
            pinyin: 'Xūyào jiāo wǔbǎi kuài yājīn.',
            translationRu: 'Нужно внести депозит 500 юаней.',
          },
          {
            speaker: 'B',
            speakerLabel: 'Вы',
            hanzi: '好的，可以用银行卡付款吗？',
            pinyin: 'Hǎo de, kěyǐ yòng yínhángkǎ fùkuǎn ma?',
            translationRu: 'Хорошо, можно оплатить банковской картой?',
          },
        ],
        grammarNoteRu: 'Вместо 银行卡 можно подставить 支付宝 (Alipay), 微信 (WeChat) или 现金 (наличные).',
      },
    ],
  },
];

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function buildLessonExercises(unitId: string): LessonExercise[] {
  const unitSentences = SENTENCES.filter((s) => s.unitId === unitId);
  const otherSentences = SENTENCES.filter((s) => s.unitId !== unitId);
  const exercises: LessonExercise[] = [];

  unitSentences.forEach((sentence, index) => {
    const otherSameUnit = unitSentences.filter((s) => s.id !== sentence.id);
    const distractorPool = shuffleArray([...otherSameUnit, ...otherSentences]).slice(0, 3);

    // First pass: vary between translate_to_ru, listen_match, and context_usage
    if (index % 3 === 0) {
      const optionsRu = shuffleArray([
        sentence.translationRu,
        ...distractorPool.map((d) => d.translationRu),
      ]);
      exercises.push({
        id: `${sentence.id}-ex-tr`,
        type: 'translate_to_ru',
        sentence,
        promptLabelRu: 'Выберите точный перевод предложения',
        optionsRu,
        correctOptionRu: sentence.translationRu,
      });
    } else if (index % 3 === 1) {
      const optionsRu = shuffleArray([
        sentence.translationRu,
        ...distractorPool.map((d) => d.translationRu),
      ]);
      exercises.push({
        id: `${sentence.id}-ex-listen`,
        type: 'listen_match',
        sentence,
        promptLabelRu: 'Прослушайте фразу и выберите значение',
        optionsRu,
        correctOptionRu: sentence.translationRu,
      });
    } else {
      const optionsSentences = shuffleArray([sentence, ...distractorPool]);
      exercises.push({
        id: `${sentence.id}-ex-ctx`,
        type: 'context_usage',
        sentence,
        promptLabelRu: 'Какая фраза подходит к этой ситуации?',
        optionsSentences,
      });
    }
  });

  // Second pass: add 3 word-bank sentence construction exercises from the unit
  const wordBankTargets = unitSentences.slice(0, 3);
  wordBankTargets.forEach((sentence) => {
    const wordBankPool: WordToken[] = shuffleArray([
      ...sentence.tokens,
      ...sentence.distractorTokens.slice(0, 2),
    ]);
    exercises.push({
      id: `${sentence.id}-ex-wb`,
      type: 'word_bank',
      sentence,
      promptLabelRu: 'Соберите предложение на китайском',
      wordBankPool,
    });
  });

  return exercises;
}
