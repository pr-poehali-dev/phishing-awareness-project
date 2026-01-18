import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { scamExamplesData } from './scam/scamExamplesData';
import LinkScamCard from './scam/LinkScamCard';
import SiteScamCard from './scam/SiteScamCard';
import SchemeScamCard from './scam/SchemeScamCard';

const ScamExamples = () => {
  const [activeTab, setActiveTab] = useState('links');

  const examples = scamExamplesData;

  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-destructive to-warning bg-clip-text text-red-500">
            Примеры мошенничества и фишинга
          </h2>
          <p className="text-xl text-gray-700">Реальные схемы обмана, которые используют мошенники</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8 bg-white p-2 rounded-xl shadow-lg">
            <TabsTrigger value="links" className="flex items-center gap-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all">
              <Icon name="Link" size={18} />
              <span className="hidden sm:inline">Ссылки</span>
            </TabsTrigger>
            <TabsTrigger value="sites" className="flex items-center gap-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all">
              <Icon name="Globe" size={18} />
              <span className="hidden sm:inline">Сайты</span>
            </TabsTrigger>
            <TabsTrigger value="steam" className="flex items-center gap-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all">
              <Icon name="Gamepad2" size={18} />
              <span className="hidden sm:inline">Steam</span>
            </TabsTrigger>
            <TabsTrigger value="vk" className="flex items-center gap-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all">
              <Icon name="Users" size={18} />
              <span className="hidden sm:inline">VK</span>
            </TabsTrigger>
            <TabsTrigger value="telegram" className="flex items-center gap-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all">
              <Icon name="MessageSquare" size={18} />
              <span className="hidden sm:inline">Telegram</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2 data-[state=active]:bg-red-500 data-[state=active]:text-white transition-all">
              <Icon name="Bot" size={18} />
              <span className="hidden sm:inline">AI</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="links" className="space-y-6">
            {examples.links.cases.map((example, idx) => (
              <LinkScamCard key={idx} example={example} idx={idx} />
            ))}
          </TabsContent>

          <TabsContent value="sites" className="space-y-6">
            {examples.sites.cases.map((siteCase, idx) => (
              <SiteScamCard key={idx} siteCase={siteCase} idx={idx} />
            ))}
          </TabsContent>

          <TabsContent value="steam" className="space-y-6">
            {examples.steam.schemes.map((scheme, idx) => (
              <SchemeScamCard
                key={idx}
                scheme={scheme}
                icon="Gamepad2"
                iconColor="text-blue-600"
                borderColor="border-blue-500"
                bgGradient="bg-gradient-to-r from-blue-50 to-cyan-50"
                bgSteps="bg-blue-50"
                borderSteps="border-l-4 border-blue-500"
                idx={idx}
              />
            ))}
          </TabsContent>

          <TabsContent value="vk" className="space-y-6">
            {examples.vk.schemes.map((scheme, idx) => (
              <SchemeScamCard
                key={idx}
                scheme={scheme}
                icon="Users"
                iconColor="text-indigo-600"
                borderColor="border-indigo-500"
                bgGradient="bg-gradient-to-r from-indigo-50 to-purple-50"
                bgSteps="bg-indigo-50"
                borderSteps="border-l-4 border-indigo-500"
                idx={idx}
              />
            ))}
          </TabsContent>

          <TabsContent value="telegram" className="space-y-6">
            {examples.telegram.schemes.map((scheme, idx) => (
              <SchemeScamCard
                key={idx}
                scheme={scheme}
                icon="MessageSquare"
                iconColor="text-cyan-600"
                borderColor="border-cyan-500"
                bgGradient="bg-gradient-to-r from-cyan-50 to-blue-50"
                bgSteps="bg-cyan-50"
                borderSteps="border-l-4 border-cyan-500"
                idx={idx}
              />
            ))}
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            {examples.ai.schemes.map((scheme, idx) => (
              <SchemeScamCard
                key={idx}
                scheme={scheme}
                icon="Bot"
                iconColor="text-red-600"
                borderColor="border-red-500"
                bgGradient="bg-gradient-to-r from-red-50 to-orange-50"
                bgSteps="bg-red-50"
                borderSteps="border-l-4 border-red-500"
                idx={idx}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ScamExamples;
