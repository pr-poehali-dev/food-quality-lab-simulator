import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ForEnterprises = () => {
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

      <section className="container mx-auto px-4 py-16 text-center">
        <Badge className="mb-4 bg-purple-100 text-purple-700 border-purple-200">
          <Icon name="Factory" className="mr-1" size={14} />
          Для предприятий
        </Badge>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Обучение персонала<br />пищевых производств
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Повысьте квалификацию сотрудников через интерактивные симуляторы реальных производственных процессов
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600">
            <Icon name="Mail" className="mr-2" size={20} />
            Получить предложение
          </Button>
          <Link to="/pricing">
            <Button size="lg" variant="outline">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading font-bold mb-3">Решения для бизнеса</h3>
          <p className="text-muted-foreground">Адаптированные под специфику вашего производства</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: 'UserPlus',
              title: 'Онбординг новых сотрудников',
              description: 'Ускорьте адаптацию новичков с помощью интерактивных сценариев. Сократите время обучения на 40% и снизьте количество ошибок в первые месяцы работы.',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: 'RefreshCw',
              title: 'Регулярное повышение квалификации',
              description: 'Автоматизируйте ежегодное обучение персонала новым стандартам ГОСТ, ХАССП и требованиям Роспотребнадзора.',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: 'AlertTriangle',
              title: 'Тренировка критических ситуаций',
              description: 'Отработайте действия сотрудников при выявлении несоответствий, инцидентах с безопасностью и аудитах контролирующих органов.',
              color: 'from-orange-500 to-orange-600'
            },
            {
              icon: 'FileCheck',
              title: 'Подготовка к сертификации',
              description: 'Обучите команду перед аудитом ISO 22000, FSSC 22000, IFS Food и других международных стандартов.',
              color: 'from-purple-500 to-purple-600'
            }
          ].map((solution, i) => (
            <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
              <CardHeader>
                <div className={`w-14 h-14 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon name={solution.icon as any} className="text-white" size={28} />
                </div>
                <CardTitle className="text-2xl mb-3">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading font-bold mb-3">Возможности для предприятий</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: 'Infinity',
              title: 'Неограниченные пользователи',
              description: 'Обучайте всех сотрудников без ограничений по количеству'
            },
            {
              icon: 'Wrench',
              title: 'Кастомные сценарии',
              description: 'Разработаем сценарии под технологию вашего производства'
            },
            {
              icon: 'Plug',
              title: 'Интеграция с 1С',
              description: 'Синхронизация данных сотрудников и отчётности'
            },
            {
              icon: 'BarChart2',
              title: 'Аналитика для руководства',
              description: 'Ежемесячные отчёты о прогрессе обучения персонала'
            },
            {
              icon: 'Users2',
              title: 'Выездные тренинги',
              description: 'Очные семинары и практикумы на вашей площадке'
            },
            {
              icon: 'Shield',
              title: 'SLA 99.9%',
              description: 'Гарантированная доступность и техподдержка 24/7'
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon as any} className="text-purple-600" size={24} />
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
            <h3 className="text-3xl font-heading font-bold mb-6">
              ROI от внедрения платформы
            </h3>
            <div className="space-y-6">
              {[
                {
                  metric: '- 40%',
                  title: 'Снижение времени на обучение',
                  description: 'Сотрудники осваивают процессы быстрее благодаря интерактивному формату',
                  color: 'text-blue-600'
                },
                {
                  metric: '- 65%',
                  title: 'Сокращение брака',
                  description: 'Меньше ошибок при производстве после прохождения тренингов',
                  color: 'text-green-600'
                },
                {
                  metric: '+ 53%',
                  title: 'Рост удержания знаний',
                  description: 'Практические навыки запоминаются лучше, чем теория',
                  color: 'text-purple-600'
                },
                {
                  metric: '₽ 320к',
                  title: 'Экономия в год',
                  description: 'На выездных тренингах, печати материалов и рабочем времени',
                  color: 'text-orange-600'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`text-3xl font-bold font-heading ${item.color} flex-shrink-0 w-24`}>
                    {item.metric}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
            <CardContent className="p-8">
              <h4 className="text-2xl font-heading font-bold mb-6">Кейс: Молочный завод</h4>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-sm mb-1 text-white/80">Компания</div>
                  <div className="font-semibold">ООО "Молочная долина"</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-sm mb-1 text-white/80">Сотрудников обучено</div>
                  <div className="font-semibold">127 человек</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-sm mb-1 text-white/80">Результат за 6 месяцев</div>
                  <div className="font-semibold">Снижение несоответствий на 58%</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-sm mb-1 text-white/80">Экономия</div>
                  <div className="font-semibold">₽1.2 млн в год</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-purple-600 via-blue-600 to-primary text-white border-0">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Готовы повысить качество обучения?
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Оставьте заявку, и мы подготовим индивидуальное предложение для вашего предприятия
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                <Icon name="Mail" className="mr-2" size={20} />
                Отправить заявку
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 (800) 123-45-67
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ForEnterprises;
