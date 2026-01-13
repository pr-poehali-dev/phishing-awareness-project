import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Resources = () => {
  const resources = [
    {
      category: 'Проверка ссылок и сайтов',
      icon: 'Search',
      color: 'primary',
      items: [
        {
          name: 'VirusTotal',
          url: 'https://www.virustotal.com',
          description: 'Проверка файлов, URL-адресов и IP на наличие вирусов и вредоносного ПО',
          icon: 'ShieldCheck'
        },
        {
          name: 'URLVoid',
          url: 'https://www.urlvoid.com',
          description: 'Сканирование сайтов на мошенничество и вредоносную активность',
          icon: 'ScanSearch'
        },
        {
          name: 'Google Safe Browsing',
          url: 'https://transparencyreport.google.com/safe-browsing/search',
          description: 'Проверка сайтов на безопасность от Google',
          icon: 'Globe'
        },
        {
          name: 'PhishTank',
          url: 'https://phishtank.org',
          description: 'База данных фишинговых сайтов и проверка подозрительных URL',
          icon: 'Database'
        },
        {
          name: 'Kaspersky VirusDesk',
          url: 'https://virusdesk.kaspersky.com',
          description: 'Бесплатная онлайн-проверка файлов и ссылок от Касперского',
          icon: 'ShieldAlert'
        }
      ]
    },
    {
      category: 'Whois и информация о доменах',
      icon: 'Info',
      color: 'info',
      items: [
        {
          name: 'WHOIS Lookup',
          url: 'https://who.is',
          description: 'Информация о владельце домена, дате регистрации и контактах',
          icon: 'UserSearch'
        },
        {
          name: 'DomainTools',
          url: 'https://whois.domaintools.com',
          description: 'Расширенный поиск информации о доменах и истории',
          icon: 'FileSearch'
        }
      ]
    },
    {
      category: 'Менеджеры паролей',
      icon: 'KeyRound',
      color: 'success',
      items: [
        {
          name: 'Bitwarden',
          url: 'https://bitwarden.com',
          description: 'Бесплатный открытый менеджер паролей с облачной синхронизацией',
          icon: 'Lock'
        },
        {
          name: '1Password',
          url: 'https://1password.com',
          description: 'Платный менеджер паролей с расширенными функциями безопасности',
          icon: 'KeySquare'
        },
        {
          name: 'KeePass',
          url: 'https://keepass.info',
          description: 'Бесплатный оффлайн менеджер паролей для максимальной безопасности',
          icon: 'FolderLock'
        }
      ]
    },
    {
      category: 'Антивирусы и защита',
      icon: 'Shield',
      color: 'warning',
      items: [
        {
          name: 'Kaspersky Free',
          url: 'https://www.kaspersky.ru/free-antivirus',
          description: 'Бесплатная версия антивируса Касперского',
          icon: 'ShieldCheck'
        },
        {
          name: 'Dr.Web CureIt!',
          url: 'https://free.drweb.ru/cureit',
          description: 'Бесплатная утилита для проверки и лечения компьютера',
          icon: 'Stethoscope'
        },
        {
          name: 'Windows Defender',
          url: 'https://www.microsoft.com/windows/windows-defender',
          description: 'Встроенный антивирус Windows (бесплатно)',
          icon: 'Monitor'
        }
      ]
    },
    {
      category: 'Обучающие ресурсы',
      icon: 'BookOpen',
      color: 'secondary',
      items: [
        {
          name: 'Лаборатория Касперского',
          url: 'https://www.kaspersky.ru/resource-center/threats',
          description: 'Статьи и исследования о кибербезопасности',
          icon: 'Newspaper'
        },
        {
          name: 'Сбербанк - Кибербезопасность',
          url: 'https://www.sberbank.ru/ru/person/cybersecurity',
          description: 'Советы по защите финансовых данных',
          icon: 'CreditCard'
        },
        {
          name: 'Роскомнадзор - Памятки',
          url: 'https://rkn.gov.ru/treatments/detail.php?SECTION_ID=109',
          description: 'Официальные рекомендации по безопасности в интернете',
          icon: 'FileText'
        }
      ]
    },
    {
      category: 'Проверка утечек данных',
      icon: 'AlertCircle',
      color: 'destructive',
      items: [
        {
          name: 'Have I Been Pwned',
          url: 'https://haveibeenpwned.com',
          description: 'Проверка, участвовал ли ваш email в утечках данных',
          icon: 'Mail'
        },
        {
          name: 'DeHashed',
          url: 'https://dehashed.com',
          description: 'База данных утечек email, паролей и других данных',
          icon: 'Database'
        }
      ]
    }
  ];

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Полезные ресурсы
          </h2>
          <p className="text-xl text-gray-700">Инструменты для проверки ссылок, сайтов и защиты данных</p>
        </div>

        <div className="space-y-12">
          {resources.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`bg-${category.color}/10 w-12 h-12 rounded-full flex items-center justify-center`}>
                  <Icon name={category.icon as any} size={24} className={`text-${category.color}`} />
                </div>
                <h3 className="text-3xl font-bold">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, i) => (
                  <Card key={i} className="hover:shadow-xl transition-all group border-2 hover:border-primary">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`bg-${category.color}/10 w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                          <Icon name={item.icon as any} size={24} className={`text-${category.color}`} />
                        </div>
                        <Icon name="ExternalLink" size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                      >
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <Icon name="Link" size={18} className="mr-2" />
                          Перейти на сайт
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Icon name="Lightbulb" size={48} className="text-warning mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Как использовать эти ресурсы</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Получили подозрительную ссылку?</h4>
                  <p className="text-gray-600">
                    Скопируйте её и вставьте в VirusTotal или URLVoid для проверки на вирусы и фишинг.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Сомневаетесь в сайте?</h4>
                  <p className="text-gray-600">
                    Проверьте информацию о домене через WHOIS - дату регистрации, владельца, контакты.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-success text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Слабые пароли?</h4>
                  <p className="text-gray-600">
                    Используйте менеджер паролей для генерации и хранения надежных уникальных паролей.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-warning text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Подозреваете утечку?</h4>
                  <p className="text-gray-600">
                    Проверьте свой email в Have I Been Pwned и смените пароли на скомпрометированных сайтах.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-destructive/10 to-warning/10 rounded-2xl p-6 border-l-4 border-destructive">
          <div className="flex items-start gap-4">
            <Icon name="AlertTriangle" size={32} className="text-destructive flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold mb-2">⚠️ Важное напоминание</h4>
              <p className="text-gray-700 text-lg">
                Даже если все инструменты показывают, что сайт безопасен, всегда доверяйте своей интуиции. 
                Если что-то кажется подозрительным - лучше не рисковать. Проверяйте адреса вручную, 
                не переходите по незнакомым ссылкам и никогда не вводите конфиденциальные данные на сомнительных сайтах.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;