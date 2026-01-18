import Icon from '@/components/ui/icon';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface LinkScamCase {
  fake: string;
  real: string;
  description: string;
  danger: string;
}

interface LinkScamCardProps {
  example: LinkScamCase;
  idx: number;
}

const LinkScamCard = ({ example, idx }: LinkScamCardProps) => {
  return (
    <Card className="border-2 border-destructive hover:shadow-xl transition-shadow">
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
  );
};

export default LinkScamCard;
