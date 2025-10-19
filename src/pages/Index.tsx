import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedScenario, setSelectedScenario] = useState<number | null>(null);

  const scenarios = [
    {
      id: 1,
      title: 'Контроль качества молочной продукции',
      description: 'Изучите стандарты качества и методы анализа молочных продуктов',
      duration: '45 мин',
      difficulty: 'Базовый',
      icon: 'Milk',
      progress: 0,
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
      progress: 0,
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
      progress: 0,
      isFree: false,
      skills: ['ХАССП', 'Риск-менеджмент', 'Аудит']
    },
    {
      id: 4,
      title: 'Лабораторная диагностика',
      description: 'Работа с современным оборудованием и методиками анализа',
      duration: '75 мин',
      difficulty: 'Продвинутый',
      icon: 'Flask',
      progress: 0,
      isFree: false,
      skills: ['ПЦР', 'Спектрометрия', 'Хроматография']
    }
  ];

  const achievements = [
    { name: 'Первый шаг', icon: 'Award', unlocked: true },
    { name: 'Эксперт молока', icon: 'Star', unlocked: false },
    { name: 'Мастер ХАССП', icon: 'Trophy', unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Microscope" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  FoodQualityLab
                </h1>
                <p className="text-xs text-muted-foreground">Образовательный симулятор</p>
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
              <a href="#learning" className="text-sm font-medium hover:text-primary transition-colors">Обучение</a>
              <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
                Войти
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20 border-secondary/20">
              🚀 Новая эра обучения
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Станьте экспертом<br />качества продукции
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Интерактивные сценарии, реальные кейсы и игровая механика для эффективного освоения стандартов пищевой безопасности
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all">
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Icon name="GraduationCap" className="mr-2" size={20} />
                Для вузов
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                { value: '12+', label: 'Сценариев', icon: 'BookOpen' },
                { value: '5000+', label: 'Студентов', icon: 'Users' },
                { value: '95%', label: 'Успешность', icon: 'TrendingUp' },
                { value: '24/7', label: 'Доступ', icon: 'Clock' }
              ].map((stat, i) => (
                <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-md animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardContent className="pt-6 text-center">
                    <Icon name={stat.icon as any} className="mx-auto mb-3 text-primary" size={32} />
                    <div className="text-3xl font-bold font-heading text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="learning" className="py-20 px-4 bg-gradient-to-b from-transparent to-blue-50/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                🎮 Интерактивное обучение
              </Badge>
              <h3 className="text-4xl font-bold font-heading mb-4">Образовательные сценарии</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Выбирайте сценарии по уровню сложности и развивайте навыки управления качеством
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {scenarios.map((scenario, index) => (
                <Card 
                  key={scenario.id} 
                  className={`group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                    selectedScenario === scenario.id 
                      ? 'border-primary shadow-lg scale-[1.02]' 
                      : 'hover:border-primary/50'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedScenario(scenario.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        scenario.isFree 
                          ? 'bg-gradient-to-br from-primary/20 to-primary/10' 
                          : 'bg-gradient-to-br from-accent/20 to-accent/10'
                      }`}>
                        <Icon name={scenario.icon as any} className={scenario.isFree ? 'text-primary' : 'text-accent'} size={24} />
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {scenario.isFree ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Бесплатно
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                            <Icon name="Crown" size={12} className="mr-1" />
                            Premium
                          </Badge>
                        )}
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700">
                          {scenario.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">
                      {scenario.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {scenario.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {scenario.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs bg-white">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{scenario.duration}</span>
                      </div>

                      {scenario.progress > 0 && (
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Прогресс</span>
                            <span className="font-semibold text-primary">{scenario.progress}%</span>
                          </div>
                          <Progress value={scenario.progress} className="h-2" />
                        </div>
                      )}

                      <Button 
                        className={`w-full ${
                          scenario.isFree 
                            ? 'bg-gradient-to-r from-primary to-primary/80' 
                            : 'bg-gradient-to-r from-accent to-accent/80'
                        }`}
                      >
                        {scenario.progress > 0 ? 'Продолжить' : 'Начать сценарий'}
                        <Icon name="ArrowRight" className="ml-2" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="py-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold font-heading mb-2">Достижения</h4>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Выполняйте сценарии и получайте бейджи за успехи в обучении
                </p>
                <div className="flex justify-center gap-4">
                  {achievements.map((ach, i) => (
                    <div 
                      key={i} 
                      className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all ${
                        ach.unlocked 
                          ? 'bg-gradient-to-br from-secondary to-secondary/80 shadow-lg' 
                          : 'bg-gray-100 opacity-40'
                      }`}
                    >
                      <Icon name={ach.icon as any} className={ach.unlocked ? 'text-white' : 'text-gray-400'} size={28} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-accent text-white">
          <div className="container mx-auto text-center">
            <h3 className="text-4xl font-bold font-heading mb-4">Готовы начать обучение?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к тысячам студентов и специалистов, развивающих навыки управления качеством
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Rocket" className="mr-2" size={20} />
                Создать аккаунт
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Icon name="Mail" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Microscope" className="text-white" size={18} />
            </div>
            <span className="font-bold font-heading text-lg">FoodQualityLab Quest</span>
          </div>
          <p className="text-gray-400 mb-6">Образовательный симулятор по управлению качеством пищевой продукции</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">О платформе</a>
            <a href="#" className="hover:text-primary transition-colors">Для вузов</a>
            <a href="#" className="hover:text-primary transition-colors">Сотрудничество</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
