import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ForUniversities = () => {
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
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          <Icon name="Building2" className="mr-1" size={14} />
          Для учебных заведений
        </Badge>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Современная платформа для<br />обучения студентов
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Интегрируйте интерактивные симуляторы в учебный процесс и повысьте вовлечённость студентов
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на демо
          </Button>
          <Link to="/pricing">
            <Button size="lg" variant="outline">
              <Icon name="FileText" className="mr-2" size={20} />
              Посмотреть тарифы
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-heading font-bold mb-3">Преимущества для вузов</h3>
          <p className="text-muted-foreground">Почему 15+ университетов уже используют нашу платформу</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: 'Users',
              title: 'Групповое обучение',
              description: 'Управляйте группами студентов, назначайте задания и отслеживайте прогресс в реальном времени'
            },
            {
              icon: 'BarChart3',
              title: 'Аналитика успеваемости',
              description: 'Детальные отчёты по каждому студенту: время прохождения, баллы, проблемные темы'
            },
            {
              icon: 'BookOpen',
              title: 'Готовые программы',
              description: '12+ готовых образовательных сценариев по ГОСТ и стандартам пищевой безопасности'
            },
            {
              icon: 'Settings',
              title: 'Кастомизация',
              description: 'Создавайте собственные сценарии под вашу учебную программу с помощью нашей команды'
            },
            {
              icon: 'Link',
              title: 'Интеграция с LMS',
              description: 'Подключение к Moodle, Canvas и другим системам управления обучением'
            },
            {
              icon: 'Award',
              title: 'Сертификаты',
              description: 'Автоматическая выдача сертификатов студентам после успешного прохождения'
            }
          ].map((feature, i) => (
            <Card key={i} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-3">
                  <Icon name={feature.icon as any} className="text-primary" size={24} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-heading font-bold mb-6">
              Как это работает для вузов
            </h3>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Регистрация вуза',
                  description: 'Заполните заявку и получите доступ к демо-версии на 14 дней'
                },
                {
                  step: '2',
                  title: 'Настройка групп',
                  description: 'Создайте группы студентов, импортируйте списки или интегрируйте с LMS'
                },
                {
                  step: '3',
                  title: 'Назначение сценариев',
                  description: 'Выберите готовые сценарии или закажите кастомные под вашу программу'
                },
                {
                  step: '4',
                  title: 'Мониторинг прогресса',
                  description: 'Отслеживайте успеваемость через детальную аналитическую панель'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-heading font-bold mb-6">Статистика платформы</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Вовлечённость студентов</span>
                  <span className="text-sm font-bold text-primary">+87%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: '87%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Успеваемость</span>
                  <span className="text-sm font-bold text-green-600">+42%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-green-600" style={{ width: '92%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Практические навыки</span>
                  <span className="text-sm font-bold text-purple-600">+65%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600" style={{ width: '78%' }}></div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">вузов уже с нами</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-primary via-accent to-purple-600 text-white border-0">
          <CardContent className="py-12 text-center">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Начните с бесплатного демо
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Протестируйте все возможности платформы в течение 14 дней абсолютно бесплатно
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на демо
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать презентацию
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ForUniversities;
