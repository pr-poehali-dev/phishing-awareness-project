import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroProps {
  onExplore: () => void;
}

const Hero = ({ onExplore }: HeroProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Icon name="AlertCircle" size={20} className="text-secondary" />
            <span className="text-sm font-semibold text-secondary">Важная информация для вашей безопасности</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Защитите себя
            </span>
            <br />
            от интернет-мошенников
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in">
            Узнайте, как распознать фишинг и мошенничество в интернете. 
            Практические советы, реальные примеры и интерактивные тесты для проверки знаний.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button
              size="lg"
              onClick={onExplore}
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
            >
              <Icon name="Rocket" size={24} className="mr-2" />
              Начать обучение
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
            >
              <Icon name="BrainCircuit" size={24} className="mr-2" />
              Пройти тест
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-in">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Обучение</h3>
              <p className="text-gray-600">Подробные материалы о видах мошенничества</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Eye" size={32} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Примеры</h3>
              <p className="text-gray-600">Реальные случаи фишинга и обмана</p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Защита</h3>
              <p className="text-gray-600">Практические советы по безопасности</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
