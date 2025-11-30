import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface TreeSpecies {
  id: number;
  name: string;
  latinName: string;
  family: string;
  description: string;
  characteristics: string[];
  image: string;
}

const treeSpecies: TreeSpecies[] = [
  {
    id: 1,
    name: 'Берёза повислая',
    latinName: 'Betula pendula',
    family: 'Берёзовые',
    description: 'Широко распространённое дерево в умеренной и холодной части Евразии. Характеризуется белой корой и поникающими ветвями.',
    characteristics: ['Высота до 30 м', 'Белая кора', 'Треугольные листья', 'Серёжковые соцветия'],
    image: 'https://cdn.poehali.dev/projects/3269c379-e114-4748-8b8f-ae80deb2d7c4/files/61ef46c0-baca-4f1b-a81b-cabffb46342b.jpg'
  },
  {
    id: 2,
    name: 'Дуб черешчатый',
    latinName: 'Quercus robur',
    family: 'Буковые',
    description: 'Мощное долговечное дерево, символ силы и долголетия. Может жить более 1000 лет.',
    characteristics: ['Высота до 40 м', 'Мощный ствол', 'Лопастные листья', 'Плоды-жёлуди'],
    image: 'https://cdn.poehali.dev/projects/3269c379-e114-4748-8b8f-ae80deb2d7c4/files/ec160c15-2f36-425d-90e7-45879af0b2dd.jpg'
  },
  {
    id: 3,
    name: 'Клён остролистный',
    latinName: 'Acer platanoides',
    family: 'Сапиндовые',
    description: 'Декоративное дерево с характерными пальчатыми листьями, которые осенью приобретают жёлтую и красную окраску.',
    characteristics: ['Высота до 30 м', 'Пальчатые листья', 'Жёлтые цветы', 'Крылатые плоды'],
    image: 'https://cdn.poehali.dev/projects/3269c379-e114-4748-8b8f-ae80deb2d7c4/files/6dcc89b5-5fe4-4f80-9b52-5f239e86a160.jpg'
  }
];

const ProjectSections = () => {
  return (
    <main className="lg:col-span-3 space-y-8">
      <section id="intro" className="animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="Sparkles" className="text-primary" />
              Введение
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none space-y-4">
            <div className="space-y-4 text-foreground">
              <p className="text-lg leading-relaxed">
                Городской поселок Шушары представляет собой уникальную экосистему, где природная среда соседствует с урбанизированной территорией. Изучение видового разнообразия древесных пород в условиях городской среды имеет важное значение для понимания адаптационных механизмов растений и разработки стратегий озеленения городских территорий.
              </p>

              <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Target" size={20} />
                  Актуальность исследования
                </h3>
                <p>
                  В условиях активной урбанизации сохранение биологического разнообразия становится одной из приоритетных задач экологии. Деревья играют ключевую роль в формировании микроклимата, очищении воздуха и создании благоприятной среды для жизни.
                </p>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} />
                  Проблема
                </h3>
                <p>
                  Отсутствие систематизированных данных о видовом составе древесных растений в районе поселка Шушары затрудняет планирование мероприятий по озеленению и сохранению биоразнообразия территории.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="ListChecks" size={20} />
                  Задачи исследования
                </h3>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Изучить правила работы с гербарием и методику сбора растительного материала</li>
                  <li>Провести видовой анализ древесных пород на территории поселка Шушары</li>
                  <li>Определить видовую принадлежность собранных древесных растений с помощью определителей</li>
                  <li>Создать учебный гербарий для образовательных целей</li>
                </ol>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Microscope" size={20} />
                  Методы исследования
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" size={8} className="mt-2" />
                    <span><strong>Полевые исследования:</strong> маршрутный метод, визуальное наблюдение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" size={8} className="mt-2" />
                    <span><strong>Камеральная обработка:</strong> определение видов с использованием определителей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Circle" size={8} className="mt-2" />
                    <span><strong>Систематизация:</strong> создание гербарной коллекции</span>
                  </li>
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Award" size={20} />
                  Практическая значимость
                </h3>
                <p>
                  Результаты исследования могут быть использованы для разработки рекомендаций по озеленению территории, образовательных программ по биологии и экологии, а также для мониторинга состояния зелёных насаждений.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="chapter1" className="animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="BookText" className="text-primary" />
              Глава 1: Теоретическая часть
            </CardTitle>
            <CardDescription>Основы систематики древесных растений</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs defaultValue="classification" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="classification">Классификация</TabsTrigger>
                <TabsTrigger value="morphology">Морфология</TabsTrigger>
                <TabsTrigger value="ecology">Экология</TabsTrigger>
              </TabsList>

              <TabsContent value="classification" className="space-y-4">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-xl font-bold mb-4">Систематика древесных растений</h3>
                  <p className="text-foreground leading-relaxed">
                    Древесные растения относятся к высшим растениям (Embryophyta) и представляют собой многолетние растения с одревесневающими надземными частями. Основные жизненные формы: деревья, кустарники и кустарнички.
                  </p>

                  <div className="bg-muted p-4 rounded-lg my-4">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Icon name="TreeDeciduous" size={18} />
                      Основные семейства
                    </h4>
                    <ul className="space-y-2 mt-3">
                      <li><strong>Берёзовые (Betulaceae)</strong> — береза, ольха</li>
                      <li><strong>Буковые (Fagaceae)</strong> — дуб, бук</li>
                      <li><strong>Ивовые (Salicaceae)</strong> — ива, тополь, осина</li>
                      <li><strong>Сапиндовые (Sapindaceae)</strong> — клён</li>
                      <li><strong>Сосновые (Pinaceae)</strong> — сосна, ель, лиственница</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="morphology" className="space-y-4">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-xl font-bold mb-4">Морфологические признаки</h3>
                  <p className="text-foreground leading-relaxed">
                    Для определения видовой принадлежности древесных растений используются различные морфологические признаки.
                  </p>

                  <Accordion type="single" collapsible className="w-full mt-4">
                    <AccordionItem value="leaves">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Icon name="Leaf" size={18} />
                          Строение листьев
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground">
                        <ul className="space-y-2 mt-2">
                          <li><strong>Форма листовой пластинки:</strong> округлая, овальная, ланцетная, треугольная</li>
                          <li><strong>Край листа:</strong> цельный, зубчатый, пильчатый, лопастной</li>
                          <li><strong>Жилкование:</strong> перистое, пальчатое, параллельное</li>
                          <li><strong>Расположение:</strong> очередное, супротивное, мутовчатое</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="bark">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Icon name="Layers" size={18} />
                          Характер коры
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground">
                        <p>Кора является важным диагностическим признаком. Различают гладкую, трещиноватую, чешуйчатую и бородавчатую кору. Цвет коры варьирует от белого до тёмно-коричневого и чёрного.</p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="fruits">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Icon name="Apple" size={18} />
                          Типы плодов
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground">
                        <ul className="space-y-1 mt-2">
                          <li>• Орех (лещина, дуб)</li>
                          <li>• Крылатка (клён, ясень)</li>
                          <li>• Коробочка (тополь, ива)</li>
                          <li>• Шишка (хвойные)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>

              <TabsContent value="ecology" className="space-y-4">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-xl font-bold mb-4">Экологические особенности</h3>
                  <p className="text-foreground leading-relaxed">
                    Древесные растения играют ключевую роль в экосистемах и выполняют множество экологических функций.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Icon name="Wind" size={18} />
                          Средообразующие функции
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-foreground">
                        <ul className="space-y-1">
                          <li>• Производство кислорода</li>
                          <li>• Очистка воздуха</li>
                          <li>• Регуляция микроклимата</li>
                          <li>• Защита почв от эрозии</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base flex items-center gap-2">
                          <Icon name="CloudRain" size={18} />
                          Требования к среде
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-foreground">
                        <ul className="space-y-1">
                          <li>• Отношение к свету</li>
                          <li>• Требования к влаге</li>
                          <li>• Отношение к температуре</li>
                          <li>• Требования к почве</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      <section id="chapter2" className="animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="FlaskConical" className="text-primary" />
              Глава 2: Практическая часть
            </CardTitle>
            <CardDescription>Методика проведения исследования</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-slate max-w-none text-foreground">
              <h3 className="text-xl font-bold mb-4">Этапы исследования</h3>

              <div className="space-y-4">
                <div className="bg-accent/10 p-5 rounded-lg border-l-4 border-accent">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Badge className="bg-accent text-accent-foreground">Этап 1</Badge>
                    <span>Подготовительный</span>
                  </h4>
                  <p className="text-sm leading-relaxed mt-2">
                    На данном этапе проводилось изучение литературы по систематике древесных растений, определителей растений, а также подготовка необходимого оборудования: гербарной папки, ботанического пресса, этикеток, GPS-навигатора для фиксации точек сбора.
                  </p>
                </div>

                <div className="bg-primary/10 p-5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Badge>Этап 2</Badge>
                    <span>Полевые исследования</span>
                  </h4>
                  <p className="text-sm leading-relaxed mt-2">
                    Обследование территории городского поселка Шушары проводилось маршрутным методом. Были заложены 3 маршрута, охватывающие различные участки: лесопарковую зону, придорожные насаждения и территорию жилой застройки. На каждом маршруте проводился сбор листьев, побегов и плодов для последующего определения.
                  </p>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-background p-3 rounded border">
                      <div className="font-semibold text-sm mb-1">Маршрут 1</div>
                      <div className="text-xs text-muted-foreground">Лесопарковая зона</div>
                      <div className="text-xs mt-1">Протяженность: 2.3 км</div>
                    </div>
                    <div className="bg-background p-3 rounded border">
                      <div className="font-semibold text-sm mb-1">Маршрут 2</div>
                      <div className="text-xs text-muted-foreground">Придорожная зона</div>
                      <div className="text-xs mt-1">Протяженность: 1.8 км</div>
                    </div>
                    <div className="bg-background p-3 rounded border">
                      <div className="font-semibold text-sm mb-1">Маршрут 3</div>
                      <div className="text-xs text-muted-foreground">Жилая застройка</div>
                      <div className="text-xs mt-1">Протяженность: 1.5 км</div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-5 rounded-lg border-l-4 border-foreground/20">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Badge variant="outline">Этап 3</Badge>
                    <span>Камеральная обработка</span>
                  </h4>
                  <p className="text-sm leading-relaxed mt-2">
                    Собранный материал был высушен в ботаническом прессе в течение 7-10 дней. Определение видовой принадлежности проводилось с использованием определителя «Флора средней полосы России». Для каждого образца составлена этикетка с указанием вида, места и даты сбора.
                  </p>
                </div>

                <div className="bg-accent/10 p-5 rounded-lg border-l-4 border-accent">
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <Badge className="bg-accent text-accent-foreground">Этап 4</Badge>
                    <span>Создание гербария</span>
                  </h4>
                  <p className="text-sm leading-relaxed mt-2">
                    Высушенные образцы были закреплены на гербарных листах формата А3. К каждому образцу прикреплена этикетка с полной информацией о растении. Гербарная коллекция систематизирована по семействам и видам.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-primary/5 p-5 rounded-lg">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="BarChart3" size={22} />
                  Результаты исследования
                </h3>
                <p className="mb-4">В ходе исследования было выявлено 15 видов древесных растений, относящихся к 8 семействам:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { name: 'Берёзовые', count: 3 },
                    { name: 'Буковые', count: 2 },
                    { name: 'Ивовые', count: 4 },
                    { name: 'Сапиндовые', count: 2 },
                    { name: 'Сосновые', count: 2 },
                    { name: 'Розовые', count: 1 },
                    { name: 'Липовые', count: 1 }
                  ].map((family) => (
                    <div key={family.name} className="bg-background p-3 rounded-lg border text-center">
                      <div className="text-2xl font-bold text-primary">{family.count}</div>
                      <div className="text-xs text-muted-foreground mt-1">{family.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="herbarium" className="animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="Leaf" className="text-primary" />
              Гербарий древесных пород
            </CardTitle>
            <CardDescription>Коллекция образцов древесных растений</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treeSpecies.map((species) => (
                <Card key={species.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-secondary to-background p-4">
                    <img
                      src={species.image}
                      alt={species.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{species.name}</CardTitle>
                        <CardDescription className="italic text-xs mt-1">{species.latinName}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">{species.family}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{species.description}</p>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center gap-1">
                        <Icon name="ListChecks" size={14} />
                        Характеристики:
                      </h4>
                      <ul className="space-y-1">
                        {species.characteristics.map((char, idx) => (
                          <li key={idx} className="text-xs flex items-start gap-2">
                            <Icon name="Circle" size={6} className="mt-1.5 text-primary" />
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Icon name="Info" size={20} />
                О гербарии
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                Гербарий представляет собой коллекцию высушенных растений, смонтированных на специальных листах. Каждый образец сопровождается этикеткой с научным названием, датой и местом сбора. Гербарные коллекции имеют важное научное и образовательное значение, позволяя изучать морфологические особенности растений в любое время года.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="conclusion" className="animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="CheckCircle" className="text-primary" />
              Заключение
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none space-y-4">
            <div className="space-y-4 text-foreground">
              <p className="text-lg leading-relaxed">
                В результате проведённого исследования была изучена флора древесных растений городского поселка Шушары. Выявлено 15 видов древесных растений, относящихся к 8 семействам. Наибольшее видовое разнообразие отмечено в семействе Ивовые (4 вида).
              </p>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Target" size={20} />
                  Основные выводы
                </h3>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Успешно освоены методы работы с гербарным материалом и техника определения растений</li>
                  <li>Проведён видовой анализ древесных пород территории исследования</li>
                  <li>Определена видовая принадлежность всех собранных образцов</li>
                  <li>Создана учебная гербарная коллекция из 15 видов древесных растений</li>
                </ol>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} />
                  Приобретённые знания и навыки
                </h3>
                <p className="mb-3">В процессе выполнения проекта были получены следующие знания и умения:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="mt-1 text-accent" />
                    <span>Навыки систематизации и классификации растений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="mt-1 text-accent" />
                    <span>Умение работать с определителями и научной литературой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="mt-1 text-accent" />
                    <span>Практические навыки создания гербарных коллекций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="mt-1 text-accent" />
                    <span>Опыт проведения полевых исследований</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={16} className="mt-1 text-accent" />
                    <span>Понимание экологических взаимосвязей в городских экосистемах</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Compass" size={20} />
                  Перспективы применения
                </h3>
                <p>
                  Полученные знания и навыки могут быть применены в дальнейшем образовании по направлениям биологии, экологии, ландшафтного дизайна. Приобретённый опыт работы с растительным материалом будет полезен при изучении ботаники в высших учебных заведениях. Созданная гербарная коллекция может использоваться в образовательных целях для проведения уроков биологии.
                </p>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} />
                  Практическое значение
                </h3>
                <p>
                  Результаты проведённого исследования могут быть использованы местными органами власти при планировании озеленения территории, а также в качестве базы данных для мониторинга состояния зелёных насаждений поселка Шушары.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="sources" className="animate-fade-in">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Icon name="Library" className="text-primary" />
              Список информационных источников
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm text-foreground">
              <li className="pl-4">
                <strong>1.</strong> Новиков В.С., Губанов И.А. Популярный атлас-определитель. Дикорастущие растения. — М.: Дрофа, 2008. — 415 с.
              </li>
              <li className="pl-4">
                <strong>2.</strong> Скворцов В.Э. Атлас-определитель сосудистых растений таёжной зоны Европейской России. — М.: Гринпис России, 2000. — 587 с.
              </li>
              <li className="pl-4">
                <strong>3.</strong> Маевский П.Ф. Флора средней полосы европейской части России. 11-е изд. — М.: КМК, 2014. — 635 с.
              </li>
              <li className="pl-4">
                <strong>4.</strong> Жизнь растений: в 6 т. / Под ред. А.Л. Тахтаджяна. — М.: Просвещение, 1980. — Т. 5. Ч. 1. — 430 с.
              </li>
              <li className="pl-4">
                <strong>5.</strong> Лесная энциклопедия: в 2 т. / Гл. ред. Г.И. Воробьев. — М.: Советская энциклопедия, 1985.
              </li>
              <li className="pl-4">
                <strong>6.</strong> Боголюбов А.С. Методы геоботанических исследований. — М.: Экосистема, 2001. — 23 с.
              </li>
              <li className="pl-4">
                <strong>7.</strong> Бейдеман И.Н. Методика изучения фенологии растений и растительных сообществ. — Новосибирск: Наука, 1974. — 155 с.
              </li>
              <li className="pl-4">
                <strong>8.</strong> Гербарное дело: справочное руководство / Под ред. Д.В. Гельтмана. — Кью: Королевский ботанический сад, 1995. — 341 с.
              </li>
              <li className="pl-4">
                <strong>9.</strong> Губанов И.А. и др. Определитель сосудистых растений центра европейской России. — М.: Аргус, 1995. — 560 с.
              </li>
              <li className="pl-4">
                <strong>10.</strong> Алексеев Ю.Е., Вехов В.Н. и др. Травянистые растения СССР: в 2 т. — М.: Мысль, 1971.
              </li>
              <li className="pl-4">
                <strong>11.</strong> Черепанов С.К. Сосудистые растения России и сопредельных государств. — СПб.: Мир и семья, 1995. — 992 с.
              </li>
              <li className="pl-4">
                <strong>12.</strong> Красная книга природы Ленинградской области. Том 2. Растения и грибы. — СПб., 2000. — 672 с.
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ProjectSections;
