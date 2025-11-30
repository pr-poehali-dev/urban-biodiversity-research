import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TableOfContentsProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const TableOfContents = ({ activeSection, scrollToSection }: TableOfContentsProps) => {
  return (
    <aside className="lg:col-span-1">
      <Card className="sticky top-24">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Icon name="BookOpen" size={20} />
            Содержание
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            {[
              { id: 'intro', label: 'Введение', icon: 'Home' },
              { id: 'chapter1', label: 'Глава 1: Теория', icon: 'BookText' },
              { id: 'chapter2', label: 'Глава 2: Практика', icon: 'FlaskConical' },
              { id: 'herbarium', label: 'Гербарий', icon: 'Leaf' },
              { id: 'conclusion', label: 'Заключение', icon: 'CheckCircle' },
              { id: 'sources', label: 'Источники', icon: 'Library' }
            ].map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => scrollToSection(item.id)}
              >
                <Icon name={item.icon as any} size={16} className="mr-2" />
                {item.label}
              </Button>
            ))}
          </nav>
        </CardContent>
      </Card>
    </aside>
  );
};

export default TableOfContents;
