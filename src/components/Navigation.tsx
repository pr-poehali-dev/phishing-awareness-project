import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'definition', label: 'Что такое фишинг?', icon: 'AlertTriangle' },
    { id: 'examples', label: 'Примеры', icon: 'FileWarning' },
    { id: 'protection', label: 'Как защититься', icon: 'Shield' },
    { id: 'quiz', label: 'Тест', icon: 'BrainCircuit' },
    { id: 'resources', label: 'Ресурсы', icon: 'Link' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Icon name="ShieldCheck" size={32} className="text-primary" />
            <span className="font-bold text-xl text-gray-900">Цифровая Безопасность</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-primary text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-primary text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon name={item.icon as any} size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
