import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ScenarioSimulator from '@/components/ScenarioSimulator';
import { Link } from 'react-router-dom';

const Index = () => {
  const [activeSimulator, setActiveSimulator] = useState<{ id: number; title: string } | null>(null);

  const scenarios = [
    {
      id: 1,
      title: 'Контроль качества молочной продукции',
      description: 'Изучите стандарты качества и методы анализа молочных продуктов',
      duration: '45 мин',
      difficulty: 'Базовый',
      icon: 'Milk',
      isFree: true,
      skills: ['Микробиология', 'ГОСТ', 'Органолептика']
    },
    {
      id: 2,
      title: 'Безопасность мясной продукции',
      description: 'Освойте методы контроля качества и безопасности мясопродуктов',
      duration: '60 мин',
      difficulty: 'Средний',
      icon: 'Package',
      isFree: true,
      skills: ['Ветеринарный контроль', 'Температурный режим', 'Маркировка']
    },
    {
      id: 3,
      title: 'Управление ХАССП системой',
      description: 'Практический тренинг по внедрению и управлению системой ХАССП',
      duration: '90 мин',
      difficulty: 'Продвинутый',
      icon: 'Shield',
      isFree: false,
      skills: ['ХАССП', 'Риск-менеджмент', 'Аудит']
    }
  ];

  const features = [
    {
      icon: 'GraduationCap',
      title: 'Для студентов',
      description: 'Бесплатный доступ к базовым сценариям'
    },
    {
      icon: 'Building2',
      title: 'Для вузов',
      description: 'Расширенная аналитика и отчётность'
    },
    {
      icon: 'Users',
      title: 'Для предприятий',
      description: 'Корпоративное обучение сотрудников'
    },
    {
      icon: 'Award',
      title: 'Сертификация',
      description: 'Официальные сертификаты о прохождении'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Flask" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-gray-900">FoodQualityLab Quest</h1>
                <p className="text-xs text-muted-foreground">Образовательный симулятор</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Icon name="LogIn" className="mr-2" size={16} />
                Войти
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                <Icon name="Rocket" className="mr-2" size={16} />
                Начать бесплатно
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          <Icon name="Sparkles" className="mr-1" size={14} />
          Обучение через практику
        </Badge>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-accent to-purple-600 bg-clip-text text-transparent">
          Управление качеством<br />пищевой продукции
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Интерактивный симулятор для студентов и специалистов пищевой промышленности. 
          Практические кейсы, реальные ситуации, профессиональные навыки.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
            <Icon name="Play" className="mr-2" size={20} />
            Попробовать бесплатно
          </Button>
          <Link to="/documentation">
            <Button size="lg" variant="outline">
              <Icon name="FileText" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">12+</div>
            <div className="text-sm text-muted-foreground">Сценариев</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">500+</div>
            <div className="text-sm text-muted-foreground">Студентов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">15+</div>
            <div className="text-sm text-muted-foreground">Вузов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">98%</div>
            <div className="text-sm text-muted-foreground">Рейтинг</div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading font-bold mb-3">Интерактивные сценарии</h3>
          <p className="text-muted-foreground">Практические кейсы для развития профессиональных компетенций</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario) => (
            <Card 
              key={scenario.id} 
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 cursor-pointer overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-primary via-accent to-purple-600"></div>
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={scenario.icon as any} className="text-primary" size={28} />
                  </div>
                  {scenario.isFree && (
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      Бесплатно
                    </Badge>
                  )}
                  {!scenario.isFree && (
                    <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                      Premium
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                  {scenario.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {scenario.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4 flex-wrap">
                  {scenario.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    {scenario.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Signal" size={16} />
                    {scenario.difficulty}
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent group-hover:shadow-lg transition-shadow"
                  onClick={() => setActiveSimulator({ id: scenario.id, title: scenario.title })}
                >
                  Начать сценарий
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-purple-50 rounded-3xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading font-bold mb-3">Для кого этот симулятор?</h3>
          <p className="text-muted-foreground">Решения для образования и бизнеса</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={feature.icon as any} className="text-primary" size={32} />
              </div>
              <h4 className="font-heading font-bold text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              <Icon name="Zap" className="mr-1" size={14} />
              Преимущества платформы
            </Badge>
            <h3 className="text-3xl font-heading font-bold mb-6">
              Современный подход к обучению
            </h3>
            <div className="space-y-4">
              {[
                { icon: 'Target', title: 'Практические навыки', text: 'Реалистичные кейсы из пищевой промышленности' },
                { icon: 'BarChart', title: 'Аналитика прогресса', text: 'Детальная статистика обучения для вузов и предприятий' },
                { icon: 'RefreshCw', title: 'Актуальный контент', text: 'Регулярные обновления сценариев по новым ГОСТам' },
                { icon: 'Users', title: 'Совместная работа', text: 'Групповые задания и корпоративные тренинги' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 backdrop-blur">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">89%</div>
                    <div className="text-sm text-muted-foreground">Успешное прохождение</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Контроль качества</span>
                    <Badge className="bg-green-100 text-green-700">+12%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">ХАССП системы</span>
                    <Badge className="bg-blue-100 text-blue-700">+8%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Лабораторная диагностика</span>
                    <Badge className="bg-purple-100 text-purple-700">+15%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-primary via-accent to-purple-600 text-white border-0 overflow-hidden">
          <CardContent className="py-12 text-center relative">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-heading font-bold mb-4">
                Готовы начать обучение?
              </h3>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Присоединяйтесь к 500+ студентам и 15+ вузам, которые уже используют FoodQualityLab Quest
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Попробовать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t bg-gray-50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Flask" className="text-white" size={18} />
                </div>
                <span className="font-heading font-bold">FoodQualityLab</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Образовательная платформа для специалистов пищевой промышленности
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Сценарии</Link></li>
                <li><Link to="/pricing" className="hover:text-primary transition-colors">Тарифы</Link></li>
                <li><Link to="/documentation" className="hover:text-primary transition-colors">Документация</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Сотрудничество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/universities" className="hover:text-primary transition-colors">Для вузов</Link></li>
                <li><Link to="/enterprises" className="hover:text-primary transition-colors">Для предприятий</Link></li>
                <li><Link to="/universities" className="hover:text-primary transition-colors">Партнёрам</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@foodqualitylab.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 FoodQualityLab Quest. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {activeSimulator && (
        <ScenarioSimulator 
          scenarioId={activeSimulator.id}
          scenarioTitle={activeSimulator.title}
          onClose={() => setActiveSimulator(null)}
        />
      )}
    </div>
  );
};

export default Index;