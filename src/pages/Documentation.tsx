import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Documentation = () => {
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
            <Icon name="BookOpen" className="mr-1" size={14} />
            База знаний
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Документация и руководства
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Всё, что нужно знать для эффективной работы с платформой
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: 'Rocket',
              title: 'Быстрый старт',
              description: 'Начните работу за 5 минут',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: 'Users',
              title: 'Для преподавателей',
              description: 'Управление группами и аналитика',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: 'Code',
              title: 'API документация',
              description: 'Интеграция и автоматизация',
              color: 'from-purple-500 to-purple-600'
            }
          ].map((category, i) => (
            <Card key={i} className="border-2 hover:border-primary/50 transition-all cursor-pointer hover:shadow-lg">
              <CardHeader>
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon name={category.icon as any} className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Читать →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Популярные статьи</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Как создать первый сценарий обучения',
                  category: 'Начало работы',
                  time: '5 мин'
                },
                {
                  title: 'Настройка групп студентов и назначение заданий',
                  category: 'Управление',
                  time: '8 мин'
                },
                {
                  title: 'Интерпретация отчётов по успеваемости',
                  category: 'Аналитика',
                  time: '6 мин'
                },
                {
                  title: 'Интеграция с LMS системами',
                  category: 'Интеграция',
                  time: '10 мин'
                },
                {
                  title: 'Создание кастомных сценариев',
                  category: 'Продвинутое',
                  time: '12 мин'
                }
              ].map((article, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2">{article.title}</h4>
                        <div className="flex gap-2 items-center text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {article.time}
                          </span>
                        </div>
                      </div>
                      <Icon name="ChevronRight" className="text-muted-foreground" size={20} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">Видео-уроки</h3>
            <div className="space-y-4">
              {[
                {
                  title: 'Обзор платформы FoodQualityLab Quest',
                  duration: '15:32',
                  views: '1.2K'
                },
                {
                  title: 'Создание и управление группами студентов',
                  duration: '8:45',
                  views: '856'
                },
                {
                  title: 'Работа с интерактивными сценариями',
                  duration: '12:18',
                  views: '2.1K'
                },
                {
                  title: 'Настройка аналитики и отчётов',
                  duration: '10:05',
                  views: '743'
                }
              ].map((video, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-28 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Play" className="text-primary" size={32} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 line-clamp-2">{video.title}</h4>
                        <div className="flex gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {video.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="Eye" size={14} />
                            {video.views}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-primary to-accent text-white border-0">
          <CardContent className="py-12 text-center">
            <Icon name="MessageCircle" className="mx-auto mb-4 text-white" size={48} />
            <h3 className="text-3xl font-heading font-bold mb-4">
              Не нашли ответ?
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Наша команда поддержки всегда готова помочь вам разобраться
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Mail" className="mr-2" size={20} />
                Написать в поддержку
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

export default Documentation;
