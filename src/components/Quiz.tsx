import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Comments from '@/components/Comments';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(15).fill(false));

  const questions: Question[] = [
    {
      id: 1,
      question: 'Что такое фишинг?',
      options: [
        'Вид спорта',
        'Метод мошенничества для кражи данных',
        'Программа для защиты компьютера',
        'Социальная сеть'
      ],
      correctAnswer: 1,
      explanation: 'Фишинг - это вид интернет-мошенничества, направленный на кражу конфиденциальных данных пользователей.'
    },
    {
      id: 2,
      question: 'Какой из этих адресов выглядит подозрительно?',
      options: [
        'https://vk.com',
        'https://vk.corn',
        'https://vk.ru',
        'https://m.vk.com'
      ],
      correctAnswer: 1,
      explanation: 'vk.corn - это поддельный адрес с заменой .com на .corn. Всегда проверяйте правильность домена.'
    },
    {
      id: 3,
      question: 'Вам пришло письмо от "банка" с просьбой срочно подтвердить данные карты. Что делать?',
      options: [
        'Сразу ввести данные карты',
        'Позвонить в банк по официальному номеру',
        'Перейти по ссылке из письма',
        'Отправить фото карты'
      ],
      correctAnswer: 1,
      explanation: 'Банки никогда не запрашивают данные карт по email. Всегда связывайтесь с банком через официальные каналы.'
    },
    {
      id: 4,
      question: 'Что означает значок замка в адресной строке браузера?',
      options: [
        'Сайт заблокирован',
        'Защищенное HTTPS соединение',
        'Требуется пароль',
        'Сайт платный'
      ],
      correctAnswer: 1,
      explanation: 'Значок замка указывает на защищенное HTTPS соединение, но это не гарантия безопасности - фишинговые сайты тоже могут иметь HTTPS.'
    },
    {
      id: 5,
      question: 'В Steam вам предлагают бесплатные скины за переход по ссылке. Как поступить?',
      options: [
        'Быстро перейти, пока не разобрали',
        'Проигнорировать - это мошенничество',
        'Рассказать всем друзьям',
        'Ввести данные аккаунта'
      ],
      correctAnswer: 1,
      explanation: 'Steam не проводит раздачи через сторонние сайты. Такие предложения - 100% мошенничество.'
    },
    {
      id: 6,
      question: 'Что такое двухфакторная аутентификация (2FA)?',
      options: [
        'Два пароля подряд',
        'Дополнительная проверка при входе (код из SMS или приложения)',
        'Два разных аккаунта',
        'Защита от вирусов'
      ],
      correctAnswer: 1,
      explanation: '2FA - это дополнительный уровень защиты, требующий подтверждения входа через второе устройство или приложение.'
    },
    {
      id: 7,
      question: 'Вы получили сообщение ВКонтакте от друга с просьбой перевести деньги. Что делать?',
      options: [
        'Сразу перевести - это же друг',
        'Проверить через звонок или другой мессенджер',
        'Отправить все деньги',
        'Попросить данные карты друга'
      ],
      correctAnswer: 1,
      explanation: 'Аккаунт друга может быть взломан. Всегда проверяйте такие просьбы через альтернативный канал связи.'
    },
    {
      id: 8,
      question: 'Какой пароль самый надежный?',
      options: [
        '123456',
        'password',
        'qwerty',
        'K9$mP2#vL8@nX5'
      ],
      correctAnswer: 3,
      explanation: 'Надежный пароль содержит минимум 12 символов, включая буквы, цифры и специальные символы.'
    },
    {
      id: 9,
      question: 'В Telegram вам пишет "официальный бот" банка и просит данные карты. Это:',
      options: [
        'Нормально, можно отправить',
        'Мошенничество - банки так не делают',
        'Нужно отправить фото карты',
        'Безопасно, если бот проверенный'
      ],
      correctAnswer: 1,
      explanation: 'Официальные банки никогда не запрашивают данные карт через ботов в мессенджерах.'
    },
    {
      id: 10,
      question: 'Что нужно проверить перед вводом пароля на сайте?',
      options: [
        'Цвет сайта',
        'Правильность адреса (URL) и наличие HTTPS',
        'Количество рекламы',
        'Размер шрифта'
      ],
      correctAnswer: 1,
      explanation: 'Всегда проверяйте URL-адрес и наличие защищенного соединения (HTTPS) перед вводом конфиденциальных данных.'
    },
    {
      id: 11,
      question: 'Вы нашли USB-флешку на улице. Что делать?',
      options: [
        'Вставить в свой компьютер и посмотреть что там',
        'Не вставлять - может содержать вирусы',
        'Вставить в чужой компьютер',
        'Отформатировать и пользоваться'
      ],
      correctAnswer: 1,
      explanation: 'Неизвестные USB-устройства могут содержать вирусы или программы для кражи данных. Никогда не подключайте их.'
    },
    {
      id: 12,
      question: 'В группе VK объявили розыгрыш iPhone. Для участия нужно перейти по ссылке и ввести номер телефона. Это:',
      options: [
        'Отличная возможность выиграть',
        'Возможное мошенничество',
        'Безопасно, если группа большая',
        'Нужно быстрее участвовать'
      ],
      correctAnswer: 1,
      explanation: 'Большинство таких "розыгрышей" - мошенничество для сбора номеров телефонов и оформления платных подписок.'
    },
    {
      id: 13,
      question: 'Какой из признаков НЕ указывает на фишинговое письмо?',
      options: [
        'Грамматические ошибки',
        'Просьба срочно ввести пароль',
        'Персональное обращение по имени',
        'Подозрительный адрес отправителя'
      ],
      correctAnswer: 2,
      explanation: 'Персональное обращение само по себе не признак фишинга. Мошенники могут узнать ваше имя из открытых источников.'
    },
    {
      id: 14,
      question: 'Что делать если вы случайно ввели пароль на фишинговом сайте?',
      options: [
        'Ничего, забыть',
        'Немедленно сменить пароль на настоящем сайте',
        'Подождать неделю',
        'Удалить аккаунт'
      ],
      correctAnswer: 1,
      explanation: 'Немедленно смените пароль на официальном сайте и включите двухфакторную аутентификацию.'
    },
    {
      id: 15,
      question: 'Можно ли доверять сайту только потому что у него есть HTTPS?',
      options: [
        'Да, HTTPS = полная безопасность',
        'Нет, HTTPS только шифрует соединение, но сайт может быть фишинговым',
        'Да, если есть замок',
        'HTTPS не важен'
      ],
      correctAnswer: 1,
      explanation: 'HTTPS означает зашифрованное соединение, но не гарантирует, что сайт легитимный. Фишинговые сайты тоже могут иметь HTTPS.'
    }
  ];

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex);
      const newAnsweredQuestions = [...answeredQuestions];
      newAnsweredQuestions[currentQuestion] = true;
      setAnsweredQuestions(newAnsweredQuestions);

      if (answerIndex === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(Array(15).fill(false));
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResult) {
    const percentage = (score / questions.length) * 100;
    let resultColor = 'destructive';
    let resultIcon = 'XCircle';
    let resultText = 'Нужно подучиться!';
    
    if (percentage >= 80) {
      resultColor = 'success';
      resultIcon = 'Trophy';
      resultText = 'Отлично! Вы эксперт!';
    } else if (percentage >= 60) {
      resultColor = 'warning';
      resultIcon = 'Award';
      resultText = 'Хорошо, но есть куда расти!';
    }

    return (
      <div className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-3xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <div className={`bg-${resultColor}/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Icon name={resultIcon as any} size={64} className={`text-${resultColor}`} />
              </div>
              <CardTitle className="text-4xl mb-4">{resultText}</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-extrabold text-primary">
                {score} / {questions.length}
              </div>
              <p className="text-2xl text-gray-700">
                Правильных ответов: {percentage.toFixed(0)}%
              </p>

              <div className="bg-gray-100 rounded-xl p-6 text-left">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  Ваш результат:
                </h3>
                {percentage >= 80 && (
                  <p className="text-gray-700 mb-2">
                    🎉 Вы отлично разбираетесь в цифровой безопасности! Продолжайте защищать себя и помогайте другим.
                  </p>
                )}
                {percentage >= 60 && percentage < 80 && (
                  <p className="text-gray-700 mb-2">
                    👍 Базовые знания у вас есть, но стоит ещё раз изучить материалы о распознавании фишинговых ссылок и защите в социальных сетях.
                  </p>
                )}
                {percentage < 60 && (
                  <p className="text-gray-700 mb-2">
                    📚 Рекомендуем внимательно изучить все разделы сайта, особенно примеры мошенничества и методы защиты.
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleRestartQuiz} size="lg" className="text-lg">
                  <Icon name="RotateCcw" size={24} className="mr-2" />
                  Пройти заново
                </Button>
                <Button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  variant="outline"
                  size="lg"
                  className="text-lg"
                >
                  <Icon name="ArrowUp" size={24} className="mr-2" />
                  В начало
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Проверьте свои знания
          </h2>
          <p className="text-xl text-gray-700">Интерактивный тест по цифровой безопасности</p>
        </div>

        <Card className="shadow-2xl">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-600">
                Вопрос {currentQuestion + 1} из {questions.length}
              </span>
              <span className="text-sm font-semibold text-primary">
                Правильных: {score}
              </span>
            </div>
            <Progress value={progress} className="mb-4" />
            <CardTitle className="text-2xl md:text-3xl leading-relaxed">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {question.options.map((option, index) => {
                let buttonStyle = 'border-2 border-gray-200 hover:border-primary hover:bg-primary/5';
                
                if (selectedAnswer !== null) {
                  if (index === question.correctAnswer) {
                    buttonStyle = 'border-2 border-success bg-success/10';
                  } else if (index === selectedAnswer) {
                    buttonStyle = 'border-2 border-destructive bg-destructive/10';
                  } else {
                    buttonStyle = 'border-2 border-gray-200 opacity-50';
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 rounded-xl text-left transition-all ${buttonStyle} flex items-center gap-3 group`}
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-base md:text-lg">{option}</span>
                    {selectedAnswer !== null && index === question.correctAnswer && (
                      <Icon name="CheckCircle2" size={24} className="text-success ml-auto" />
                    )}
                    {selectedAnswer !== null && index === selectedAnswer && index !== question.correctAnswer && (
                      <Icon name="XCircle" size={24} className="text-destructive ml-auto" />
                    )}
                  </button>
                );
              })}
            </div>

            {selectedAnswer !== null && (
              <div className="mt-6 space-y-4 animate-fade-in">
                <div className={`p-4 rounded-xl border-l-4 ${
                  selectedAnswer === question.correctAnswer 
                    ? 'bg-success/10 border-success' 
                    : 'bg-destructive/10 border-destructive'
                }`}>
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Info" size={20} />
                    Пояснение:
                  </p>
                  <p className="text-gray-700">{question.explanation}</p>
                </div>

                <Button
                  onClick={handleNextQuestion}
                  size="lg"
                  className="w-full text-lg"
                >
                  {currentQuestion < questions.length - 1 ? 'Следующий вопрос' : 'Показать результаты'}
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            💡 Совет: Внимательно читайте вопросы и используйте знания из предыдущих разделов
          </p>
        </div>

        <Comments />
      </div>
    </div>
  );
};

export default Quiz;