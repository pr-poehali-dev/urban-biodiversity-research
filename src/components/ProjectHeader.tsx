import Icon from '@/components/ui/icon';

const ProjectHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="TreeDeciduous" className="text-primary" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-primary">Исследование древесных пород</h1>
              <p className="text-sm text-muted-foreground">Городской поселок Шушары</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;
