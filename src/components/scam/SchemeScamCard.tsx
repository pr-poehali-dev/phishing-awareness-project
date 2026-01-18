import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SchemeScamCase {
  name: string;
  description: string;
  howItWorks: string[];
  protection: string;
}

interface SchemeScamCardProps {
  scheme: SchemeScamCase;
  icon: string;
  iconColor: string;
  borderColor: string;
  bgGradient: string;
  bgSteps: string;
  borderSteps: string;
  idx: number;
}

const SchemeScamCard = ({ 
  scheme, 
  icon, 
  iconColor, 
  borderColor, 
  bgGradient, 
  bgSteps, 
  borderSteps 
}: SchemeScamCardProps) => {
  return (
    <Card className={`border-2 ${borderColor} hover:shadow-xl transition-shadow`}>
      <CardHeader className={bgGradient}>
        <CardTitle className="flex items-center gap-3">
          <Icon name={icon as any} size={24} className={iconColor} />
          {scheme.name}
        </CardTitle>
        <CardDescription className="text-gray-700 text-base">
          {scheme.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className={`${bgSteps} p-4 rounded-lg ${borderSteps}`}>
          <p className={`font-semibold mb-3 flex items-center gap-2 ${iconColor.replace('text-', 'text-')}`}>
            <Icon name="AlertTriangle" size={18} />
            Как работает схема:
          </p>
          <ol className="space-y-2 ml-4">
            {scheme.howItWorks.map((step, stepIdx) => (
              <li key={stepIdx} className="flex items-start gap-2">
                <span className={`${iconColor.replace('text-', 'text-')} font-bold min-w-[24px]`}>
                  {stepIdx + 1}.
                </span>
                <span className="text-gray-700">{step}</span>
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
  );
};

export default SchemeScamCard;
