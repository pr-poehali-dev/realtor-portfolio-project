import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [loanAmount, setLoanAmount] = useState([3000000]);
  const [interestRate, setInterestRate] = useState([8.5]);
  const [loanTerm, setLoanTerm] = useState([25]);
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyArea, setPropertyArea] = useState("");

  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0];
    const monthlyRate = interestRate[0] / 100 / 12;
    const numberOfPayments = loanTerm[0] * 12;

    const monthlyPayment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return monthlyPayment.toLocaleString("ru-RU", {
      style: "currency",
      currency: "RUB",
    });
  };

  const calculatePropertyValue = () => {
    if (!propertyPrice || !propertyArea) return "";
    const pricePerSqm = parseFloat(propertyPrice) / parseFloat(propertyArea);
    return pricePerSqm.toLocaleString("ru-RU") + " ₽/м²";
  };

  const properties = [
    {
      id: 1,
      title: "3-комнатная квартира в центре",
      price: "8 500 000 ₽",
      area: "85 м²",
      location: "Центральный район",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "2-комнатная квартира с видом на парк",
      price: "6 200 000 ₽",
      area: "62 м²",
      location: "Парковый район",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Студия в новостройке",
      price: "4 800 000 ₽",
      area: "38 м²",
      location: "Деловой квартал",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const reviews = [
    {
      name: "Анна К.",
      rating: 5,
      text: "Саня помог найти идеальную квартиру! Профессиональный подход и быстрое решение всех вопросов.",
    },
    {
      name: "Михаил С.",
      rating: 5,
      text: "Отличный риэлтор! Продал мою квартиру в кратчайшие сроки и по выгодной цене.",
    },
    {
      name: "Елена В.",
      rating: 5,
      text: "Рекомендую! Саня очень внимательный к деталям и всегда на связи.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Home" className="text-orange-500" size={32} />
              <h1 className="text-2xl font-bold text-blue-900">
                Саня Недвижимость
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#hero"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Обо мне
              </a>
              <a
                href="#properties"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Объекты
              </a>
              <a
                href="#reviews"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="py-20 bg-gradient-to-r from-orange-500 to-blue-600"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ваш надёжный партнёр в мире недвижимости
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Помогаю покупать, продавать и оценивать недвижимость уже более 8
            лет. Более 500 успешных сделок!
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-gray-100"
            >
              <Icon name="Calculator" className="mr-2" />
              Калькулятор ипотеки
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500"
            >
              <Icon name="TrendingUp" className="mr-2" />
              Оценка недвижимости
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Калькулятор ипотеки
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Рассчитайте ежемесячный платёж
                </CardTitle>
                <CardDescription>
                  Узнайте размер ипотечного платежа за несколько секунд
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">
                        Сумма кредита: {loanAmount[0].toLocaleString("ru-RU")} ₽
                      </Label>
                      <Slider
                        value={loanAmount}
                        onValueChange={setLoanAmount}
                        min={500000}
                        max={20000000}
                        step={100000}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">
                        Процентная ставка: {interestRate[0]}%
                      </Label>
                      <Slider
                        value={interestRate}
                        onValueChange={setInterestRate}
                        min={3}
                        max={15}
                        step={0.1}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">
                        Срок кредита: {loanTerm[0]} лет
                      </Label>
                      <Slider
                        value={loanTerm}
                        onValueChange={setLoanTerm}
                        min={5}
                        max={30}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Результат расчёта
                    </h4>
                    <div className="text-3xl font-bold text-orange-500 mb-4">
                      {calculateMonthlyPayment()}
                    </div>
                    <p className="text-gray-600 mb-6">Ежемесячный платёж</p>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 text-white">
                      Получить одобрение
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Property Valuation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Оценка недвижимости
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                  Узнайте стоимость вашей недвижимости
                </CardTitle>
                <CardDescription>
                  Быстрая предварительная оценка квартиры или дома
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price">Цена покупки, ₽</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="5000000"
                      value={propertyPrice}
                      onChange={(e) => setPropertyPrice(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="area">Площадь, м²</Label>
                    <Input
                      id="area"
                      type="number"
                      placeholder="65"
                      value={propertyArea}
                      onChange={(e) => setPropertyArea(e.target.value)}
                    />
                  </div>
                </div>
                {calculatePropertyValue() && (
                  <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      Цена за квадратный метр:
                    </p>
                    <p className="text-2xl font-bold text-orange-500">
                      {calculatePropertyValue()}
                    </p>
                  </div>
                )}
                <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 text-white">
                  Заказать профессиональную оценку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Обо мне</h3>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/img/139e0c2d-999f-4838-a2b7-42692640b22a.jpg" />
                  <AvatarFallback>СН</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  Александр "Саня" Недвижимость
                </h4>
                <p className="text-gray-600 mb-4">
                  Сертифицированный риэлтор с 8-летним опытом работы на рынке
                  недвижимости. Специализируюсь на жилой недвижимости,
                  инвестиционных проектах и коммерческой недвижимости.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-orange-100 text-orange-700">
                    500+ сделок
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700">
                    8 лет опыта
                  </Badge>
                  <Badge className="bg-green-100 text-green-700">
                    Сертифицированный
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Актуальные объекты
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card
                key={property.id}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className="aspect-video bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${property.image})` }}
                ></div>
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {property.title}
                  </h4>
                  <p className="text-2xl font-bold text-orange-500 mb-2">
                    {property.price}
                  </p>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>
                      <Icon name="Square" className="inline mr-1" size={16} />
                      {property.area}
                    </span>
                    <span>
                      <Icon name="MapPin" className="inline mr-1" size={16} />
                      {property.location}
                    </span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 text-white">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Отзывы клиентов
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="fill-current"
                          size={20}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 font-medium">
                      {review.name}
                    </span>
                  </div>
                  <p className="text-gray-700 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-orange-500 to-blue-600"
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Свяжитесь со мной
          </h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-white mb-8">
              Готов помочь вам найти идеальную недвижимость или продать
              существующую. Работаю быстро, честно и с гарантией результата!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-500 hover:bg-gray-100"
              >
                <Icon name="Phone" className="mr-2" />
                +7 (999) 123-45-67
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500"
              >
                <Icon name="MessageCircle" className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Home" className="text-orange-500 mr-2" size={24} />
            <span className="text-xl font-bold">Саня Недвижимость</span>
          </div>
          <p className="text-gray-400">
            © 2024 Все права защищены. Лицензия на риэлторскую деятельность
            №12345
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
