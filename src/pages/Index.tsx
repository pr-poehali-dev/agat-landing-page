import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-primary floating" />
              <h1 className="text-2xl font-bold text-gray-900">АГАТ</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105">О компании</a>
              <a href="#principles" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105">Принципы</a>
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105">Каталог</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'fade-in' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Волноводные устройства
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  нового поколения
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Полный цикл изготовления пассивных волноводных устройств, антенн и сложных антенных систем от дециметрового до миллиметрового диапазона
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg pulse-glow transform hover:scale-105 transition-all duration-300"
                >
                  Получить консультацию
                </Button>

              </div>
            </div>
            <div className={`${isVisible ? 'slide-up stagger-2' : 'opacity-0'} relative`}>
              <div className="relative">
                <img 
                  src="/img/57225e37-f4c0-4019-bc78-8c38b3716bf8.jpg" 
                  alt="Современное волноводное оборудование" 
                  className="rounded-2xl shadow-2xl w-full h-auto floating"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О КОМПАНИИ</h2>
              <p className="text-lg text-gray-600 mb-8">
                Наша компания предлагает широкие возможности для изготовления различных пассивных волноводных устройств, антенн и сложных антенных систем, от дециметрового до миллиметрового диапазона длин волн.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Мы обеспечиваем полный цикл изготовления изделий с использованием самого современного оборудования и передовых технологий.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-primary mb-2">100%</div>
              <div className="text-xl font-semibold text-gray-900 mb-4">ДОВОЛЬНЫХ КЛИЕНТОВ</div>
              <p className="text-gray-600">
                Высокое качество продукции и индивидуальный подход к каждому заказчику обеспечивают максимальную удовлетворенность наших клиентов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">НАШИ ПРИНЦИПЫ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Shield" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">НАДЕЖНОСТЬ</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  Строгое соблюдение ГОСТов и конструкторской документации заказчика на всех этапах производства.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Clock" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">ОТВЕТСТВЕННОСТЬ</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  Высокая скорость производства и точное соблюдение сроков изготовления и поставки.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">ПРОФЕССИОНАЛИЗМ</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600">
                  Команда экспертов с многолетним опытом в разработке и производстве СВЧ-устройств.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">КАТАЛОГ ПРОДУКЦИИ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardHeader className="text-center">
                <div className="relative mb-4">
                  <img 
                    src="/img/c60c9595-2852-44ca-b481-23b028ffc144.jpg" 
                    alt="Волноводные устройства" 
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
                <CardTitle className="text-lg font-bold">Волноводные устройства</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Высокочастотные волноводные компоненты для различных применений
                </CardDescription>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardHeader className="text-center">
                <div className="relative mb-4">
                  <img 
                    src="/img/784887f1-ba8b-40aa-9d37-b05244392741.jpg" 
                    alt="Антенные системы" 
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
                <CardTitle className="text-lg font-bold">Антенные системы</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Сложные антенные системы для профессиональных применений
                </CardDescription>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardHeader className="text-center">
                <div className="relative mb-4">
                  <img 
                    src="/img/e3d097d4-5418-4aaf-934c-9ccd5e057be9.jpg" 
                    alt="СВЧ-компоненты" 
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
                <CardTitle className="text-lg font-bold">СВЧ-компоненты</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Специализированные компоненты для СВЧ-технологий
                </CardDescription>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardHeader className="text-center">
                <div className="relative mb-4">
                  <img 
                    src="/img/acd14752-ad49-44a0-8e20-4eea169046c5.jpg" 
                    alt="Индивидуальные решения" 
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                </div>
                <CardTitle className="text-lg font-bold">Индивидуальные решения</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4">
                  Разработка и изготовление по индивидуальным техническим заданиям
                </CardDescription>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">СВЯЗАТЬСЯ С НАМИ</h2>
            <p className="text-lg text-gray-600">
              Оставьте заявку, и наши специалисты свяжутся с вами в ближайшее время
            </p>
          </div>
          
          <Card className="border-0 shadow-xl" id="contact-form">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Имя *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="+7 (999) 999-99-99"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Обращение *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1"
                    rows={4}
                    placeholder="Опишите ваши потребности или задайте вопрос..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">НАШ АДРЕС</h2>
            <p className="text-lg text-gray-600">
              Мы находимся в Смоленске и готовы принять вас в нашем офисе
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Адрес офиса</h3>
                      <p className="text-gray-600">
                        г. Смоленск, ул. Тенишевой, д. 22
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Телефон</h3>
                      <p className="text-gray-600">
                        +7 (4812) 123-45-67
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Email</h3>
                      <p className="text-gray-600">
                        info@agat-smolensk.ru
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Режим работы</h3>
                      <p className="text-gray-600">
                        Пн-Пт: 9:00 - 18:00<br/>
                        Сб-Вс: выходной
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-4">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A54.771575%2C32.057378%2C16z&amp;source=constructor&amp;scroll=true"
                width="100%"
                height="400"
                className="rounded-lg"
                style={{border: 'none'}}
                title="Карта офиса АГАТ в Смоленске - ул. Тенишевой, д. 22"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">АГАТ</h3>
              </div>
              <p className="text-gray-400">
                Производство волноводных устройств, антенн и антенных систем высокого качества
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (4812) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>info@agat-smolensk.ru</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-400">
                © 2024 Компания АГАТ. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;