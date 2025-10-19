import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Студент',
      price: 'Бесплатно',
      period: '',
      description: 'Для студентов и начинающих специалистов',
      icon: 'GraduationCap',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Доступ к 3 базовым сценариям',
        'Система достижений',
        'Базовая статистика прогресса',
        'Сертификат о прохождении',
        'Мобильная версия',
        'Обучающие материалы'
      ]
    },
    {
      name: 'Вуз',
      price: '49 900',
      period: '₽/год',
      description: 'Для учебных заведений',
      icon: 'Building2',
      color: 'from-primary to-accent',
      popular: true,
      features: [
        'Все базовые сценарии',
        '12+ продвинутых сценариев',
        'Групповое обучение до 100 студентов',
        'Детальная аналитика успеваемости',
        'Кастомные сценарии под программу',
        'Интеграция с LMS',
        'Техподдержка 24/7',
        'Личный менеджер'
      ]
    },
    {
      name: 'Предприятие',
      price: 'По запросу',
      period: '',
      description: 'Для пищевых производств',
      icon: 'Factory',
      color: 'from-purple-500 to-purple-600',
      features: [
        'Все возможности тарифа "Вуз"',
        'Неограниченное число сотрудников',
        'Сценарии под ваше производство',
        'Интеграция с корп. системами',
        'Онбординг новых сотрудников',
        'Ежемесячные отчёты руководству',
        'Выездные тренинги',
        'SLA 99.9%'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name="Flask" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-gray-900">FoodQualityLab Quest</h1>
                <p className="text-xs text-muted-foreground">Образовательный симулятор</p>
              </div>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Icon name="Home" className="mr-2" size={16} />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Icon name="CreditCard" className="mr-1" size={14} />
            Тарифы и цены
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Выберите подходящий план
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Гибкие тарифы для студентов, вузов и предприятий пищевой промышленности
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden ${
                plan.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 text-sm font-semibold">
                  Популярный
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={plan.icon as any} className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-heading mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-4">{plan.description}</CardDescription>
                <div className="text-4xl font-bold font-heading">
                  {plan.price}
                  {plan.period && <span className="text-lg text-muted-foreground ml-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-accent' 
                      : 'bg-gradient-to-r from-gray-700 to-gray-800'
                  }`}
                  size="lg"
                >
                  {plan.price === 'Бесплатно' ? 'Начать бесплатно' : 
                   plan.price === 'По запросу' ? 'Связаться с нами' : 'Выбрать тариф'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Нужна помощь с выбором тарифа? Мы поможем!
          </p>
          <Button variant="outline" size="lg">
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading font-bold mb-4">Часто задаваемые вопросы</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              q: 'Как начать пользоваться платформой?',
              a: 'Зарегистрируйтесь на сайте и получите мгновенный доступ к бесплатным базовым сценариям. Для вузов и предприятий свяжитесь с нами для настройки корпоративного аккаунта.'
            },
            {
              q: 'Можно ли попробовать платные сценарии?',
              a: 'Да! Мы предоставляем 14-дневный пробный период для тарифов "Вуз" и "Предприятие" с полным доступом ко всем функциям.'
            },
            {
              q: 'Как часто обновляются сценарии?',
              a: 'Мы добавляем новые сценарии ежемесячно и обновляем существующие в соответствии с изменениями в ГОСТах и стандартах пищевой безопасности.'
            },
            {
              q: 'Можно ли создать свои сценарии?',
              a: 'Да, для тарифов "Вуз" и "Предприятие" доступна разработка кастомных сценариев под вашу программу обучения или специфику производства.'
            }
          ].map((faq, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
