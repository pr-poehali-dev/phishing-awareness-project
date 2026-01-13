import Icon from '@/components/ui/icon';

const PhishingDefinition = () => {
  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Что такое фишинг и мошенничество?
          </h2>
          <p className="text-xl text-gray-700">Узнайте, как распознать угрозу</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
            <div className="bg-destructive/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <Icon name="Fish" size={40} className="text-destructive" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Фишинг</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong className="text-destructive">Фишинг</strong> — это вид интернет-мошенничества, 
              при котором злоумышленники пытаются получить доступ к конфиденциальным данным пользователей: 
              паролям, номерам банковских карт, логинам и другой личной информации.
            </p>
            <p className="text-gray-600">
              Название происходит от английского "fishing" (рыбалка) — мошенники "ловят" 
              жертв на поддельные сайты и письма, как рыбу на крючок.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
            <div className="bg-warning/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <Icon name="UserX" size={40} className="text-warning" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Мошенничество в интернете</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong className="text-warning">Интернет-мошенничество</strong> — это любые действия, 
              направленные на обман пользователей с целью получения денег, данных или доступа к аккаунтам.
            </p>
            <p className="text-gray-600">
              Мошенники используют социальную инженерию, поддельные сайты, вирусы и другие методы 
              для достижения своих целей.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Основные признаки фишинга</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="bg-destructive/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Icon name="Link" size={28} className="text-destructive" />
              </div>
              <h4 className="text-xl font-bold mb-3">Подозрительные ссылки</h4>
              <p className="text-gray-600">
                Ссылки выглядят похоже на настоящие, но содержат опечатки или 
                другой домен (например, vk.corn вместо vk.com)
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="bg-warning/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={28} className="text-warning" />
              </div>
              <h4 className="text-xl font-bold mb-3">Срочные сообщения</h4>
              <p className="text-gray-600">
                "Ваш аккаунт будет заблокирован", "Срочно подтвердите данные" — 
                создают панику для быстрого действия
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Icon name="Gift" size={28} className="text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Слишком хорошее предложение</h4>
              <p className="text-gray-600">
                "Вы выиграли iPhone!", "Бесплатная раздача скинов" — 
                заманчивые предложения, которых не существует
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="bg-secondary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Icon name="KeyRound" size={28} className="text-secondary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Запрос личных данных</h4>
              <p className="text-gray-600">
                Просьба ввести пароли, номера карт или коды подтверждения 
                на неизвестных сайтах
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Icon name="FileWarning" size={28} className="text-accent" />
              </div>
              <h4 className="text-xl font-bold mb-3">Вложения и файлы</h4>
              <p className="text-gray-600">
                Подозрительные файлы в письмах или сообщениях, 
                которые могут содержать вирусы
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 hover:scale-105 transition-transform">
              <div className="bg-info/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Icon name="BadgeAlert" size={28} className="text-info" />
              </div>
              <h4 className="text-xl font-bold mb-3">Поддельный дизайн</h4>
              <p className="text-gray-600">
                Сайт или письмо копируют дизайн известных сервисов, 
                но с ошибками и низким качеством
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-destructive/10 to-warning/10 rounded-2xl p-8 border-l-4 border-destructive">
          <div className="flex items-start gap-4">
            <Icon name="AlertTriangle" size={40} className="text-destructive flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-2xl font-bold mb-3 text-gray-900">⚠️ Важно помнить!</h4>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-destructive flex-shrink-0 mt-1" />
                  <span>Настоящие компании никогда не запрашивают пароли или данные карт по email или в мессенджерах</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-destructive flex-shrink-0 mt-1" />
                  <span>Проверяйте адрес сайта перед вводом любой информации</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-destructive flex-shrink-0 mt-1" />
                  <span>Не переходите по ссылкам из подозрительных сообщений</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhishingDefinition;
