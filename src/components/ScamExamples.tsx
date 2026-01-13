import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ScamExamples = () => {
  const [activeTab, setActiveTab] = useState('links');

  const examples = {
    links: {
      title: 'Поддельные ссылки',
      icon: 'Link',
      color: 'destructive',
      cases: [
        {
          fake: 'https://vk.corn/id12345',
          real: 'https://vk.com/id12345',
          description: 'Замена .com на .corn — классический трюк мошенников',
          danger: 'Переход по такой ссылке приведёт на фишинговый сайт, где украдут ваш пароль'
        },
        {
          fake: 'https://steamcommunlty.com/trade',
          real: 'https://steamcommunity.com/trade',
          description: 'Опечатка в слове community (добавлена лишняя буква l)',
          danger: 'Поддельный сайт Steam для кражи инвентаря и аккаунтов'
        },
        {
          fake: 'https://telegrarn.org/download',
          real: 'https://telegram.org/download',
          description: 'Замена буквы m на rn — визуально почти неразличимо',
          danger: 'Скачивание вредоносного ПО вместо официального приложения'
        }
      ]
    },
    sites: {
      title: 'Поддельные сайты',
      icon: 'Globe',
      color: 'warning',
      cases: [
        {
          title: 'Фейковый банковский сайт',
          description: 'Сайт выглядит как копия вашего банка, но адрес немного отличается',
          signs: [
            'Отсутствует значок замка (HTTPS) в адресной строке',
            'Домен содержит лишние символы или цифры',
            'Грамматические ошибки в тексте',
            'Низкое качество логотипов и изображений'
          ],
          example: 'sberbank-login.ru вместо sberbank.ru'
        },
        {
          title: 'Копия интернет-магазина',
          description: 'Поддельный сайт известного магазина с очень низкими ценами',
          signs: [
            'Цены в 2-3 раза ниже рыночных',
            'Требуют 100% предоплату без возможности возврата',
            'Нет отзывов или только положительные фейковые',
            'Контактная информация отсутствует или недостоверна'
          ],
          example: 'wildberrles.ru вместо wildberries.ru'
        }
      ]
    },
    steam: {
      title: 'Мошенничество в Steam',
      icon: 'Gamepad2',
      color: 'info',
      schemes: [
        {
          name: 'Фишинг через трейд',
          description: 'Мошенник присылает ссылку на "обмен скинами" через поддельный сайт Steam',
          howItWorks: [
            'Получаете сообщение о выгодном обмене предметами',
            'Ссылка ведёт на копию сайта Steam с похожим адресом',
            'После ввода данных аккаунт взламывается',
            'Все предметы и игры исчезают'
          ],
          protection: 'Никогда не вводите данные Steam на сторонних сайтах. Используйте только официальный клиент.'
        },
        {
          name: 'Фальшивые раздачи',
          description: 'Обещание бесплатных скинов, игр или Steam Wallet кодов',
          howItWorks: [
            'Публикация о "раздаче" в группах или от фейковых аккаунтов',
            'Требуют перейти по ссылке и "авторизоваться"',
            'Поддельная страница входа крадёт логин и пароль',
            'Аккаунт используется для дальнейшего мошенничества'
          ],
          protection: 'Steam никогда не проводит раздачи через сторонние сайты. Включите Steam Guard.'
        },
        {
          name: 'Поддельная служба поддержки',
          description: 'Мошенники выдают себя за сотрудников Steam Support',
          howItWorks: [
            'Пишут в личку от имени администрации Steam',
            'Сообщают о "проблеме с аккаунтом" или "подозрительной активности"',
            'Просят данные для "проверки" или переход по ссылке',
            'Получают доступ к аккаунту'
          ],
          protection: 'Поддержка Steam НИКОГДА не пишет первой. Общайтесь только через официальный тикет-центр.'
        }
      ]
    },
    vk: {
      title: 'Мошенничество в VK',
      icon: 'Users',
      color: 'primary',
      schemes: [
        {
          name: 'Взлом через фишинговые паблики',
          description: 'Создание поддельных групп популярных сообществ',
          howItWorks: [
            'Мошенники создают копию известной группы с похожим названием',
            'Публикуют посты о "розыгрыше" или "конкурсе"',
            'Просят перейти по ссылке и "авторизоваться"',
            'Поддельная страница VK крадёт доступ к аккаунту'
          ],
          protection: 'Проверяйте значок верификации группы. Не вводите данные на подозрительных сайтах.'
        },
        {
          name: 'Мошенничество от имени друзей',
          description: 'Взломанный аккаунт друга просит денег',
          howItWorks: [
            'Аккаунт друга взломан и отправляет сообщения',
            '"Срочно нужны деньги, переведи на карту"',
            'Используют доверие к знакомым людям',
            'После перевода контакт теряется'
          ],
          protection: 'Всегда проверяйте через звонок или другой мессенджер. Включите двухфакторную аутентификацию.'
        },
        {
          name: 'Фейковые опросы и голосования',
          description: 'Опросы с обещанием бонусов за участие',
          howItWorks: [
            'Пост с просьбой пройти опрос за вознаграждение',
            'После опроса просят ввести номер телефона',
            'Приходит SMS с кодом подтверждения платной подписки',
            'С баланса списываются деньги'
          ],
          protection: 'Не вводите номер телефона на сторонних сайтах. Не подтверждайте неизвестные коды из SMS.'
        }
      ]
    },
    telegram: {
      title: 'Обман в Telegram',
      icon: 'MessageSquare',
      color: 'info',
      schemes: [
        {
          name: 'Фейковые инвестиционные каналы',
          description: 'Каналы с обещаниями быстрого заработка',
          howItWorks: [
            'Канал предлагает "проверенную" инвестиционную схему',
            'Показывают скриншоты "успешных выводов" (поддельные)',
            'Просят внести депозит для "начала работы"',
            'После перевода денег блокируют и удаляют канал'
          ],
          protection: 'Не доверяйте обещаниям быстрого заработка. Проверяйте информацию о компаниях.'
        },
        {
          name: 'Боты-мошенники',
          description: 'Поддельные боты популярных сервисов',
          howItWorks: [
            'Бот имитирует официальный сервис (банк, магазин, биржа)',
            'Просит данные карты "для верификации"',
            'Или требует оплату "комиссии" за вывод средств',
            'Деньги и данные пропадают'
          ],
          protection: 'Используйте только официальные боты. Проверяйте username на подлинность.'
        },
        {
          name: 'Подделка личности',
          description: 'Мошенники копируют профили известных людей',
          howItWorks: [
            'Создают аккаунт с фото и именем известной личности',
            'Пишут в личку с предложением о "сотрудничестве"',
            'Просят предоплату или личные данные',
            'После получения денег исчезают'
          ],
          protection: 'Проверяйте галочку верификации. Настоящие знаменитости не пишут первыми в личку.'
        },
        {
          name: 'Фишинг через Premium',
          description: 'Предложения бесплатной Telegram Premium подписки',
          howItWorks: [
            'Сообщение о "выигрыше бесплатной Premium подписки"',
            'Просят перейти по ссылке для активации',
            'Поддельная страница запрашивает данные аккаунта',
            'Аккаунт взламывается, данные крадутся'
          ],
          protection: 'Telegram Premium оформляется только в официальном приложении. Не переходите по сомнительным ссылкам.'
        }
      ]
    }
  };

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-destructive to-warning bg-clip-text text-transparent">
            Примеры мошенничества и фишинга
          </h2>
          <p className="text-xl text-gray-700">Реальные схемы обмана, которые используют мошенники</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 bg-white p-2 rounded-xl shadow-lg">
            <TabsTrigger value="links" className="flex items-center gap-2">
              <Icon name="Link" size={18} />
              <span className="hidden sm:inline">Ссылки</span>
            </TabsTrigger>
            <TabsTrigger value="sites" className="flex items-center gap-2">
              <Icon name="Globe" size={18} />
              <span className="hidden sm:inline">Сайты</span>
            </TabsTrigger>
            <TabsTrigger value="steam" className="flex items-center gap-2">
              <Icon name="Gamepad2" size={18} />
              <span className="hidden sm:inline">Steam</span>
            </TabsTrigger>
            <TabsTrigger value="vk" className="flex items-center gap-2">
              <Icon name="Users" size={18} />
              <span className="hidden sm:inline">VK</span>
            </TabsTrigger>
            <TabsTrigger value="telegram" className="flex items-center gap-2">
              <Icon name="MessageSquare" size={18} />
              <span className="hidden sm:inline">Telegram</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="links" className="space-y-6">
            {examples.links.cases.map((example, idx) => (
              <Card key={idx} className="border-2 border-destructive hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="AlertOctagon" size={24} className="text-destructive" />
                    Пример {idx + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-destructive/10 p-4 rounded-lg border-l-4 border-destructive">
                    <p className="text-sm text-gray-600 mb-2">❌ Поддельная ссылка:</p>
                    <code className="text-destructive font-mono text-lg break-all">{example.fake}</code>
                  </div>
                  <div className="bg-success/10 p-4 rounded-lg border-l-4 border-success">
                    <p className="text-sm text-gray-600 mb-2">✅ Настоящая ссылка:</p>
                    <code className="text-success font-mono text-lg break-all">{example.real}</code>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Info" size={18} />
                      Описание:
                    </p>
                    <p className="text-gray-700">{example.description}</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2 flex items-center gap-2 text-destructive">
                      <Icon name="ShieldAlert" size={18} />
                      Опасность:
                    </p>
                    <p className="text-gray-700">{example.danger}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="sites" className="space-y-6">
            {examples.sites.cases.map((site, idx) => (
              <Card key={idx} className="border-2 border-warning hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Globe" size={24} className="text-warning" />
                    {site.title}
                  </CardTitle>
                  <CardDescription className="text-base">{site.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Eye" size={18} />
                      Признаки подделки:
                    </p>
                    <ul className="space-y-2">
                      {site.signs.map((sign, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="XCircle" size={18} className="text-destructive flex-shrink-0 mt-1" />
                          <span>{sign}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-warning">
                    <p className="font-semibold mb-2">Пример поддельного адреса:</p>
                    <code className="text-warning font-mono">{site.example}</code>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="steam" className="space-y-6">
            {examples.steam.schemes.map((scheme, idx) => (
              <Card key={idx} className="border-2 border-info hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Gamepad2" size={24} className="text-info" />
                    {scheme.name}
                  </CardTitle>
                  <CardDescription className="text-base">{scheme.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Workflow" size={18} />
                      Как это работает:
                    </p>
                    <ol className="space-y-2">
                      {scheme.howItWorks.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-info text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-success">
                    <p className="font-semibold mb-2 flex items-center gap-2 text-success">
                      <Icon name="Shield" size={18} />
                      Как защититься:
                    </p>
                    <p className="text-gray-700">{scheme.protection}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="vk" className="space-y-6">
            {examples.vk.schemes.map((scheme, idx) => (
              <Card key={idx} className="border-2 border-primary hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Users" size={24} className="text-primary" />
                    {scheme.name}
                  </CardTitle>
                  <CardDescription className="text-base">{scheme.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Workflow" size={18} />
                      Схема обмана:
                    </p>
                    <ol className="space-y-2">
                      {scheme.howItWorks.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-success">
                    <p className="font-semibold mb-2 flex items-center gap-2 text-success">
                      <Icon name="Shield" size={18} />
                      Защита:
                    </p>
                    <p className="text-gray-700">{scheme.protection}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="telegram" className="space-y-6">
            {examples.telegram.schemes.map((scheme, idx) => (
              <Card key={idx} className="border-2 border-info hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="MessageSquare" size={24} className="text-info" />
                    {scheme.name}
                  </CardTitle>
                  <CardDescription className="text-base">{scheme.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Workflow" size={18} />
                      Как действуют мошенники:
                    </p>
                    <ol className="space-y-2">
                      {scheme.howItWorks.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-info text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-success">
                    <p className="font-semibold mb-2 flex items-center gap-2 text-success">
                      <Icon name="Shield" size={18} />
                      Как не попасться:
                    </p>
                    <p className="text-gray-700">{scheme.protection}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ScamExamples;
