import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface SiteScamCase {
  title: string;
  description: string;
  signs: string[];
  example: string;
}

interface SiteScamCardProps {
  siteCase: SiteScamCase;
  idx: number;
}

const SiteScamCard = ({ siteCase, idx }: SiteScamCardProps) => {
  return (
    <Card className="border-2 border-warning hover:shadow-xl transition-shadow">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
        <CardTitle className="flex items-center gap-3">
          <Icon name="Globe" size={24} className="text-warning" />
          {siteCase.title}
        </CardTitle>
        <CardDescription className="text-gray-700 text-base">
          {siteCase.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-warning">
          <p className="font-semibold mb-3 flex items-center gap-2 text-warning">
            <Icon name="Search" size={18} />
            Признаки фейкового сайта:
          </p>
          <ul className="space-y-2">
            {siteCase.signs.map((sign, signIdx) => (
              <li key={signIdx} className="flex items-start gap-2">
                <Icon name="AlertCircle" size={16} className="text-warning mt-1 flex-shrink-0" />
                <span className="text-gray-700">{sign}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-semibold mb-2 flex items-center gap-2">
            <Icon name="ExternalLink" size={18} />
            Пример подделки:
          </p>
          <code className="text-destructive font-mono">{siteCase.example}</code>
        </div>
      </CardContent>
    </Card>
  );
};

export default SiteScamCard;
