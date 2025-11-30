import Icon from '@/components/ui/icon';

const ProjectFooter = () => {
  return (
    <footer className="border-t bg-muted/50 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Icon name="TreeDeciduous" size={16} />
            Исследовательский проект © 2025
          </p>
          <p className="mt-2">Городской поселок Шушары</p>
        </div>
      </div>
    </footer>
  );
};

export default ProjectFooter;
