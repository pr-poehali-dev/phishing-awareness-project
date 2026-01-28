import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Protection = () => {
  const tips = [
    {
      title: 'Проверяйте адрес сайта',
      icon: 'Globe',
      color: 'primary',
      description: 'Всегда внимательно смотрите на URL перед вводом данных',
      steps: [
        'Убедитесь, что адрес начинается с https:// (защищенное соединение)',
        'Проверьте правильность написания домена (нет лишних букв или опечаток)',
        'Ищите значок замка рядом с адресной строкой',
        'При сомнениях введите адрес сайта вручную, не переходите по ссылкам'
      ]
    },
    {
      title: 'Используйте двухфакторную аутентификацию',
      icon: 'ShieldCheck',
      color: 'success',
      description: 'Дополнительный уровень защиты вашего аккаунта',
      steps: [
        'Включите 2FA в настройках безопасности всех важных аккаунтов',
        'Используйте приложения-аутентификаторы (Google Authenticator, Authy)',
        'Не отключайте 2FA даже если это кажется неудобным',
        'Сохраните резервные коды в безопасном месте'
      ]
    },
    {
      title: 'Создавайте сложные пароли',
      icon: 'KeyRound',
      color: 'secondary',
      description: 'Надежный пароль - основа безопасности',
      steps: [
        'Используйте не менее 12 символов',
        'Комбинируйте буквы, цифры и специальные символы',
        'Не используйте одинаковые пароли для разных сервисов',
        'Используйте менеджер паролей (Bitwarden, 1Password, KeePass)'
      ]
    },
    {
      title: 'Будьте осторожны с письмами',
      icon: 'Mail',
      color: 'warning',
      description: 'Email - частый канал фишинговых атак',
      steps: [
        'Не открывайте подозрительные вложения',
        'Проверяйте адрес отправителя (часто подделывают)',
        'Не переходите по ссылкам из неожиданных писем',
        'При запросе данных свяжитесь с компанией напрямую через официальный сайт'
      ]
    },
    {
      title: 'Обновляйте программное обеспечение',
      icon: 'RefreshCw',
      color: 'info',
      description: 'Актуальные версии защищают от известных уязвимостей',
      steps: [
        'Включите автоматические обновления операционной системы',
        'Регулярно обновляйте браузер',
        'Обновляйте все установленные программы',
        'Не откладывайте критические обновления безопасности'
      ]
    },
    {
      title: 'Используйте антивирус',
      icon: 'Bug',
      color: 'destructive',
      description: 'Защита от вредоносного ПО',
      steps: [
        'Установите надежный антивирус (Windows Defender, Kaspersky, Dr.Web)',
        'Регулярно запускайте полное сканирование системы',
        'Не отключайте защиту в реальном времени',
        'Скачивайте программы только с официальных сайтов'
      ]
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-success to-primary bg-clip-text text-fuchsia-600">
            Как защититься от фишинга
          </h2>
          <p className="text-xl text-gray-700">Практические советы по безопасности в интернете</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tips.map((tip, idx) => (
            <Card key={idx} className="hover:shadow-2xl transition-all border-2 hover:border-primary">
              <CardHeader>
                <div className={`bg-${tip.color}/10 w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <Icon name={tip.icon as any} size={32} className={`text-${tip.color}`} />
                </div>
                <CardTitle className="text-2xl">{tip.title}</CardTitle>
                <CardDescription className="text-base">{tip.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tip.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className={`text-${tip.color} flex-shrink-0 mt-1`} />
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Icon name="Eye" size={32} className="text-primary" />
            Распознавание подозрительных ссылок
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-destructive">
                <Icon name="XCircle" size={24} />
                Опасные признаки
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="AlertTriangle" size={18} className="text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <strong>Сокращенные ссылки</strong> (bit.ly, goo.gl) - скрывают настоящий адрес
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="AlertTriangle" size={18} className="text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <strong>Опечатки в домене</strong> - yоutube.com (русская "о" вместо латинской)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="AlertTriangle" size={18} className="text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <strong>Странные символы</strong> - добавление дефисов, цифр (steam-community.com)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="AlertTriangle" size={18} className="text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <strong>Подозрительный домен верхнего уровня</strong> - .tk, .ml, .ga (часто используют мошенники)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="AlertTriangle" size={18} className="text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <strong>HTTP вместо HTTPS</strong> - отсутствие защищенного соединения
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-success">
                <Icon name="CheckCircle2" size={24} />
                Как проверить ссылку
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="MousePointerClick" size={18} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong>Наведите курсор</strong> на ссылку (не нажимая) - браузер покажет реальный адрес внизу
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Copy" size={18} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong>Скопируйте ссылку</strong> и проверьте её в текстовом редакторе
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Search" size={18} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong>Используйте сервисы проверки</strong> - VirusTotal, URLVoid, Google Safe Browsing
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Globe" size={18} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong>Проверьте whois информацию</strong> - когда зарегистрирован домен, кто владелец
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Ban" size={18} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <strong>При сомнениях не переходите</strong> - лучше вручную введите адрес известного сайта
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-warning/20 to-destructive/20 rounded-xl p-6 border-l-4 border-warning">
            <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Icon name="Lightbulb" size={24} className="text-warning" />
              Практический пример проверки
            </h4>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-mono text-sm text-gray-600 mb-2">Получили ссылку:</p>
                <code className="text-destructive font-mono">https://steamcommunlty.com/trade/12345</code>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold mb-2 text-sm">1️⃣ Наведите курсор</p>
                  <p className="text-sm text-gray-600">Проверьте адрес в левом нижнем углу браузера</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold mb-2 text-sm">2️⃣ Найдите ошибку</p>
                  <p className="text-sm text-gray-600">community написано с двумя "l" - это фейк!</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold mb-2 text-sm">3️⃣ Не переходите</p>
                  <p className="text-sm text-gray-600">Это фишинговый сайт для кражи аккаунта</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-8 border-2 border-success">
          <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
            <Icon name="Trophy" size={28} className="text-success" />
            Главные правила цифровой безопасности
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg flex items-center gap-3">
              <span className="text-3xl">🔒</span>
              <span className="font-semibold">Никому не сообщайте пароли</span>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center gap-3">
              <span className="text-3xl">🔗</span>
              <span className="font-semibold">Проверяйте каждую ссылку</span>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center gap-3">
              <span className="text-3xl">📧</span>
              <span className="font-semibold">Не доверяйте подозрительным письмам</span>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center gap-3">
              <span className="text-3xl">🛡️</span>
              <span className="font-semibold">Включайте двухфакторную аутентификацию</span>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center gap-3">
              <span className="text-3xl">💳</span>
              <span className="font-semibold">Не вводите данные карты на сомнительных сайтах</span>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center gap-3">
              <span className="text-3xl">🤔</span>
              <span className="font-semibold">Думайте прежде чем кликнуть</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protection;