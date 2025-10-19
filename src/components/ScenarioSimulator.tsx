import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface Step {
  id: number;
  title: string;
  description: string;
  type: 'quiz' | 'action' | 'info';
  question?: string;
  options?: { id: string; text: string; correct?: boolean }[];
  correctAnswer?: string;
  points: number;
  icon: string;
  learningMaterial?: {
    title: string;
    content: string[];
  };
}

interface ScenarioSimulatorProps {
  scenarioId: number;
  scenarioTitle: string;
  onClose: () => void;
}

const scenarioSteps: Record<number, Step[]> = {
  1: [
    {
      id: 1,
      title: 'Приёмка сырья',
      description: 'Вы получили партию молока от поставщика. Первый этап — проверка документации и органолептическая оценка.',
      type: 'info',
      points: 10,
      icon: 'FileCheck',
      learningMaterial: {
        title: 'Требования к приёмке молока',
        content: [
          'При приёмке молока проверяются ветеринарные свидетельства, декларации соответствия и сопроводительные документы.',
          'ГОСТ 31449-2013 устанавливает требования к качеству сырого молока.',
          'Обязательно проводится органолептическая оценка: цвет должен быть белым или кремовым, запах — характерным, без посторонних примесей.',
          'Температура молока при приёмке не должна превышать +4°C для предотвращения развития микроорганизмов.'
        ]
      }
    },
    {
      id: 2,
      title: 'Проверка температуры',
      description: 'Измерьте температуру молока и определите, соответствует ли она нормам.',
      type: 'quiz',
      question: 'Какая температура молока при приёмке считается допустимой согласно ГОСТ?',
      options: [
        { id: 'a', text: 'Не выше +4°C', correct: true },
        { id: 'b', text: 'Не выше +10°C', correct: false },
        { id: 'c', text: 'Не выше +15°C', correct: false },
        { id: 'd', text: 'Температура не важна', correct: false }
      ],
      correctAnswer: 'a',
      points: 20,
      icon: 'Thermometer',
      learningMaterial: {
        title: 'Температурный контроль молока',
        content: [
          'Температура — критический показатель безопасности молока.',
          'При температуре выше +4°C резко возрастает скорость размножения бактерий.',
          'Каждый час хранения при +10°C удваивает количество микроорганизмов.',
          'Для измерения используют термометры со шкалой от -5 до +50°C с точностью ±0.5°C.'
        ]
      }
    },
    {
      id: 3,
      title: 'Органолептическая оценка',
      description: 'Оцените молоко по внешним признакам: цвет, запах, консистенция.',
      type: 'quiz',
      question: 'Какой признак указывает на недопустимое качество молока?',
      options: [
        { id: 'a', text: 'Белый цвет с кремовым оттенком', correct: false },
        { id: 'b', text: 'Однородная консистенция', correct: false },
        { id: 'c', text: 'Кисловатый запах', correct: true },
        { id: 'd', text: 'Слабый сладковатый вкус', correct: false }
      ],
      correctAnswer: 'c',
      points: 20,
      icon: 'Eye',
      learningMaterial: {
        title: 'Органолептическая оценка молока',
        content: [
          'Цвет: белый, допускается кремовый оттенок. Синеватый цвет указывает на разбавление водой.',
          'Запах: чистый, без посторонних ароматов. Кисловатый запах — признак скисания.',
          'Консистенция: однородная жидкость без хлопьев и сгустков.',
          'Вкус: слегка сладковатый, без горечи, кислоты и посторонних привкусов.'
        ]
      }
    },
    {
      id: 4,
      title: 'Лабораторный анализ',
      description: 'Отправьте образцы в лабораторию для определения жирности, кислотности и микробиологических показателей.',
      type: 'action',
      points: 15,
      icon: 'Flask',
      learningMaterial: {
        title: 'Лабораторные показатели молока',
        content: [
          'Кислотность: норма 16-21°T (градусы Тернера). Превышение указывает на скисание.',
          'Жирность: минимум 2.8% для высшего сорта согласно ГОСТ.',
          'Плотность: не менее 1027 кг/м³. Низкая плотность — признак разбавления.',
          'Микробиология: КМАФАнМ не более 1×10⁵ КОЕ/см³, соматические клетки не более 5×10⁵/см³.'
        ]
      }
    },
    {
      id: 5,
      title: 'Принятие решения',
      description: 'На основе всех проверок примите решение о качестве партии.',
      type: 'quiz',
      question: 'Результаты анализа показали кислотность 22°T (норма 16-21°T). Ваши действия?',
      options: [
        { id: 'a', text: 'Принять партию без замечаний', correct: false },
        { id: 'b', text: 'Отклонить всю партию', correct: true },
        { id: 'c', text: 'Принять со скидкой', correct: false },
        { id: 'd', text: 'Провести повторный анализ', correct: false }
      ],
      correctAnswer: 'b',
      points: 35,
      icon: 'CheckCircle',
      learningMaterial: {
        title: 'Критерии приёмки/отбраковки',
        content: [
          'Любое превышение норм по кислотности — основание для отклонения партии.',
          'Молоко с кислотностью выше 21°T непригодно для производства молочной продукции.',
          'Повторный анализ проводится только при сомнительных результатах первого теста.',
          'Приёмка некачественного сырья грозит штрафами до 1 млн рублей по КоАП РФ.'
        ]
      }
    }
  ],
  2: [
    {
      id: 1,
      title: 'Входной контроль мяса',
      description: 'Проверка документов и первичный осмотр партии мясной продукции.',
      type: 'info',
      points: 10,
      icon: 'Clipboard',
      learningMaterial: {
        title: 'Документы при приёмке мяса',
        content: [
          'Ветеринарное свидетельство формы №2 — обязательный документ для мяса.',
          'Декларация соответствия ГОСТ 31797-2012 на мясо.',
          'Товарно-транспортная накладная с указанием даты убоя и условий хранения.',
          'Маркировка должна содержать информацию о производителе, дате производства и сроке годности.'
        ]
      }
    },
    {
      id: 2,
      title: 'Ветеринарная документация',
      description: 'Изучите ветеринарные сертификаты и клейма на мясе.',
      type: 'quiz',
      question: 'Какое клеймо подтверждает ветеринарно-санитарную безопасность мяса?',
      options: [
        { id: 'a', text: 'Круглое фиолетовое', correct: false },
        { id: 'b', text: 'Овальное фиолетовое', correct: true },
        { id: 'c', text: 'Квадратное красное', correct: false },
        { id: 'd', text: 'Треугольное синее', correct: false }
      ],
      correctAnswer: 'b',
      points: 25,
      icon: 'Shield',
      learningMaterial: {
        title: 'Ветеринарные клейма на мясе',
        content: [
          'Овальное фиолетовое клеймо — мясо прошло ветеринарно-санитарную экспертизу и признано безопасным.',
          'Круглое клеймо применяется для свинины, говядины и баранины разных категорий.',
          'Клеймо содержит номер предприятия-изготовителя и ветеринарную службу.',
          'Мясо без клейма или с нестандартным клеймом не допускается к реализации.'
        ]
      }
    },
    {
      id: 3,
      title: 'Температурный режим хранения',
      description: 'Проверьте соблюдение температурного режима при транспортировке и хранении.',
      type: 'quiz',
      question: 'При какой температуре должно храниться охлажденное мясо?',
      options: [
        { id: 'a', text: 'От 0 до +4°C', correct: true },
        { id: 'b', text: 'От +4 до +8°C', correct: false },
        { id: 'c', text: 'От -2 до 0°C', correct: false },
        { id: 'd', text: 'От +8 до +12°C', correct: false }
      ],
      correctAnswer: 'a',
      points: 25,
      icon: 'Snowflake',
      learningMaterial: {
        title: 'Температурные режимы хранения мяса',
        content: [
          'Охлаждённое мясо: от 0 до +4°C, срок хранения до 3 суток.',
          'Подмороженное мясо: от -2 до -3°C, срок хранения до 20 суток.',
          'Замороженное мясо: не выше -12°C, срок хранения до 12 месяцев.',
          'Нарушение температурного режима ведёт к развитию патогенной микрофлоры и порче продукта.'
        ]
      }
    },
    {
      id: 4,
      title: 'Оформление заключения',
      description: 'Составьте итоговое заключение о соответствии партии требованиям безопасности.',
      type: 'action',
      points: 40,
      icon: 'FileText',
      learningMaterial: {
        title: 'Оформление результатов контроля',
        content: [
          'Акт приёмки должен содержать: дату, время, температуру, результаты органолептики.',
          'Указываются все выявленные несоответствия и меры по их устранению.',
          'Решение о приёмке/отклонении принимает ответственное лицо с отметкой в журнале.',
          'Копия акта направляется поставщику в течение 24 часов при выявлении несоответствий.'
        ]
      }
    }
  ]
};

const ScenarioSimulator = ({ scenarioId, scenarioTitle, onClose }: ScenarioSimulatorProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = scenarioSteps[scenarioId] || scenarioSteps[1];
  const step = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleAnswer = () => {
    if (step.type === 'quiz' && selectedAnswer) {
      const correct = selectedAnswer === step.correctAnswer;
      setIsCorrect(correct);
      setShowFeedback(true);
      
      if (correct) {
        setScore(score + step.points);
        setCompletedSteps([...completedSteps, step.id]);
      }
    } else if (step.type === 'action' || step.type === 'info') {
      setScore(score + step.points);
      setCompletedSteps([...completedSteps, step.id]);
      setIsCorrect(true);
      setShowFeedback(true);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer('');
      setShowFeedback(false);
      setIsCorrect(false);
    }
  };

  const handleRetry = () => {
    setSelectedAnswer('');
    setShowFeedback(false);
  };

  const maxScore = steps.reduce((sum, s) => sum + s.points, 0);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="flex items-center justify-between mb-4">
            <Badge className="bg-primary/10 text-primary">
              Шаг {currentStep + 1} из {steps.length}
            </Badge>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
          <CardTitle className="text-2xl font-heading">{scenarioTitle}</CardTitle>
          <CardDescription className="text-base mt-2">
            <div className="flex items-center justify-between">
              <span>Набрано баллов: <strong className="text-primary">{score}</strong> / {maxScore}</span>
              <div className="flex gap-1">
                {steps.map((s, i) => (
                  <div 
                    key={s.id} 
                    className={`w-2 h-2 rounded-full transition-all ${
                      completedSteps.includes(s.id) 
                        ? 'bg-green-500' 
                        : i === currentStep 
                        ? 'bg-primary' 
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardDescription>
          <Progress value={progress} className="mt-4 h-2" />
        </CardHeader>

        <CardContent className="pt-6">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
                <Icon name={step.icon as any} className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">{step.title}</h3>
                <Badge variant="outline" className="mt-1">
                  +{step.points} баллов
                </Badge>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">{step.description}</p>
          </div>

          {step.learningMaterial && !showFeedback && (
            <div className="mb-6 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Icon name="BookOpen" className="text-blue-600" size={20} />
                <h4 className="font-semibold text-blue-900">{step.learningMaterial.title}</h4>
              </div>
              <ul className="space-y-2">
                {step.learningMaterial.content.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-blue-800">
                    <Icon name="Check" className="flex-shrink-0 mt-0.5 text-blue-600" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {step.type === 'quiz' && step.question && step.options && !showFeedback && (
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">{step.question}</p>
              </div>
              
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer}>
                <div className="space-y-3">
                  {step.options.map((option) => (
                    <div 
                      key={option.id} 
                      className={`flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        selectedAnswer === option.id 
                          ? 'border-primary bg-primary/5' 
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedAnswer(option.id)}
                    >
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label htmlFor={option.id} className="flex-1 cursor-pointer text-base">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {step.type === 'action' && !showFeedback && (
            <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200 rounded-xl p-6 text-center">
              <Icon name="Zap" className="mx-auto mb-3 text-secondary" size={40} />
              <p className="text-lg font-semibold mb-2">Выполните действие</p>
              <p className="text-muted-foreground mb-4">Нажмите кнопку для выполнения этапа</p>
            </div>
          )}

          {step.type === 'info' && !showFeedback && (
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-xl p-6">
              <Icon name="Info" className="mb-3 text-primary" size={32} />
              <p className="text-lg">Изучите информацию и переходите к следующему этапу</p>
            </div>
          )}

          {showFeedback && (
            <div className={`rounded-xl p-6 border-2 ${
              isCorrect 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            } animate-scale-in`}>
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isCorrect ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  <Icon 
                    name={isCorrect ? 'CheckCircle' : 'XCircle'} 
                    className="text-white" 
                    size={28} 
                  />
                </div>
                <div className="flex-1">
                  <h4 className={`text-xl font-bold mb-2 ${
                    isCorrect ? 'text-green-900' : 'text-red-900'
                  }`}>
                    {isCorrect ? '✨ Правильно!' : '❌ Неверно'}
                  </h4>
                  <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                    {isCorrect 
                      ? `Вы получили ${step.points} баллов! Отличная работа.` 
                      : 'Попробуйте ещё раз или переходите к следующему этапу.'}
                  </p>
                  {!isCorrect && step.type === 'quiz' && step.options && (
                    <p className="mt-2 text-sm text-gray-600">
                      Правильный ответ: <strong>{step.options.find(o => o.correct)?.text}</strong>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-6">
            {!showFeedback && (
              <Button 
                onClick={handleAnswer} 
                disabled={step.type === 'quiz' && !selectedAnswer}
                className="flex-1 bg-gradient-to-r from-primary to-primary/80"
                size="lg"
              >
                {step.type === 'quiz' ? 'Ответить' : 'Выполнить'}
                <Icon name="Send" className="ml-2" size={18} />
              </Button>
            )}
            
            {showFeedback && (
              <>
                {!isCorrect && step.type === 'quiz' && (
                  <Button 
                    onClick={handleRetry} 
                    variant="outline"
                    className="flex-1"
                    size="lg"
                  >
                    <Icon name="RotateCcw" className="mr-2" size={18} />
                    Попробовать снова
                  </Button>
                )}
                
                {currentStep < steps.length - 1 ? (
                  <Button 
                    onClick={handleNext} 
                    className="flex-1 bg-gradient-to-r from-primary to-accent"
                    size="lg"
                  >
                    Следующий шаг
                    <Icon name="ArrowRight" className="ml-2" size={18} />
                  </Button>
                ) : (
                  <Button 
                    onClick={onClose} 
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600"
                    size="lg"
                  >
                    <Icon name="Trophy" className="mr-2" size={18} />
                    Завершить ({Math.round((score / maxScore) * 100)}%)
                  </Button>
                )}
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScenarioSimulator;