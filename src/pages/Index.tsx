import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/projects/1e177fb2-fe55-4c7d-865c-7dec4332edeb/files/2fc7a051-a3fc-49f4-ad50-9ed958d68ba4.jpg)'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/70"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <section className="relative z-10 min-h-screen flex items-center justify-center py-8 md:py-12">
        <div className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="mb-8 md:mb-12 animate-fade-in flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/50">
              <img 
                src="https://lh3.googleusercontent.com/d/1yMOdYC3RQhSt6YqnfNmps0pH74pc7hP5" 
                alt="Эксперт" 
                className="w-full h-full object-cover"
                style={{ objectPosition: '50% 25%' }}
                crossOrigin="anonymous"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight tracking-tight">
              <span className="inline-block animate-glow text-primary">🔥</span>{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Ты учишь.
              </span>
              <br />
              <span className="text-foreground">Мы продаём.</span>
            </h1>
          </div>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto font-light animate-fade-in text-center" style={{ animationDelay: '0.2s' }}>
          Полный запуск твоего обучения без съёмок, без оборудования, без вовлечения.
        </p>

        <div className="flex flex-col items-center gap-4 animate-scale-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="text-lg sm:text-xl md:text-2xl px-8 sm:px-10 md:px-12 py-6 md:py-8 bg-gradient-to-r from-primary to-destructive hover:from-destructive hover:to-primary transition-all duration-300 shadow-2xl hover:shadow-primary/50 hover:scale-105 w-full sm:w-auto"
          >
            🚀 Хочу запуск
          </Button>
          
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            <span className="font-semibold text-secondary">10 мест.</span> После заполнения — вход закрыт.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </section>

      <section className="relative z-10 min-h-screen flex items-center justify-center py-16 md:py-24">
        <div className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 animate-fade-in">
            <span className="text-foreground">Это не про контент.</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Это про продажи.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mt-12 md:mt-16">
            {[
              { text: "20 продающих рилсов" },
              { text: "3 карусели" },
              { text: "2 продающих поста" },
              { text: "Упаковка оффера" },
              { text: "Аудит программы обучения" },
              { text: "Контент-воронка на 90 дней" },
              { text: "Консультация 60 минут" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in shadow-lg hover:shadow-xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Check" size={20} className="text-primary" />
                </div>
                <p className="text-lg md:text-xl font-medium text-foreground pt-0.5">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 min-h-screen flex items-center justify-center py-16 md:py-24">
        <div className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-8 animate-fade-in">
            <span className="text-foreground">Мы не делаем «красиво».</span>{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Мы делаем, чтобы покупали.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mt-12 md:mt-16">
            {[
              { text: "Настройка Директа" },
              { text: "Бот для заявок" },
              { text: "Запуск Telegram канала" },
              { text: "Контент для Telegram под личный бренд" },
              { text: "Кодовые слова в аккаунте" },
              { text: "Полное погружение в твоё обучение" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in shadow-lg hover:shadow-xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Check" size={20} className="text-primary" />
                </div>
                <p className="text-lg md:text-xl font-medium text-foreground pt-0.5">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="inline-block p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border-2 border-primary/40 shadow-2xl shadow-primary/30">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                <span className="text-4xl md:text-5xl">💥</span> У тебя появляется система, которая приводит{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  заявки и продажи.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 min-h-screen flex items-center justify-center py-16 md:py-24">
        <div className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 animate-fade-in leading-tight">
                <span className="text-foreground">Если ты — инструктор, и хочешь не «вести блог», а </span>
                <span className="bg-gradient-to-r from-destructive via-primary to-destructive bg-clip-text text-transparent">
                  продавать обучение
                </span>
                <span className="text-foreground"> — это твой пакет.</span>
              </h2>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-destructive/30 border-4 border-destructive/40">
                <img 
                  src="https://cdn.poehali.dev/files/54195c44-2806-40c6-b9b5-3571e0e8421e.JPG" 
                  alt="Инструктор" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 min-h-screen flex items-center justify-center py-16 md:py-24">
        <div className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Условия
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
            {[
              { text: "Можно запускать из любой страны" },
              { text: "Рассрочка" },
              { text: "Если банк откажет — найдём решение" },
              { text: "Места ограничены — всего 10" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in shadow-lg hover:shadow-xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Check" size={20} className="text-primary" />
                </div>
                <p className="text-lg md:text-xl font-medium text-foreground pt-0.5">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/20 backdrop-blur-sm border-2 border-secondary/40 shadow-2xl shadow-secondary/30">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center leading-relaxed">
                <span className="inline-block text-3xl md:text-4xl mr-2">⚡</span>
                <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                  Важно:
                </span>
                {" "}Покупка = место закреплено. Старт — когда ты готов. Контент можно подготовить заранее.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 min-h-screen flex items-center justify-center py-16 md:py-24">
        <div className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-12 md:mb-16 animate-fade-in">
              <div className="inline-block p-12 md:p-16 rounded-full bg-gradient-to-br from-primary/20 to-destructive/20 backdrop-blur-sm border-4 border-primary/40 shadow-2xl shadow-primary/50 mb-8">
                <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-primary via-secondary to-destructive bg-clip-text text-transparent">
                  75 000 ₽
                </p>
              </div>
            </div>

            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="text-2xl md:text-3xl px-12 md:px-16 py-10 md:py-12 bg-gradient-to-r from-destructive to-primary hover:from-primary hover:to-destructive transition-all duration-500 shadow-2xl hover:shadow-destructive/50 hover:scale-110 w-full sm:w-auto font-bold"
              >
                🔥 Забронировать место
              </Button>
              
              <p className="text-sm md:text-base text-muted-foreground mt-6">
                <span className="font-semibold text-destructive">Осталось 10 мест.</span> После заполнения — вход закрыт.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 min-h-screen flex items-center justify-center py-16 md:py-24">
        <div className="px-4 sm:px-6 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 animate-fade-in">
            <span className="text-foreground">Другие пакеты</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto mb-12 md:mb-16">
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-muted/30 hover:border-muted/50 transition-all duration-300 hover:scale-105 animate-fade-in shadow-lg opacity-60">
              <div className="text-4xl mb-4">⭐️</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Пакет 1 — «Пробная доставка»</h3>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">1 рилс</p>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                5 000 ₽
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-card/40 to-card/20 backdrop-blur-sm border border-muted/30 hover:border-muted/50 transition-all duration-300 hover:scale-105 animate-fade-in shadow-lg opacity-60" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">⭐️</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Пакет 2 — «Запуск для мастера»</h3>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">10 рилсов</p>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                40 000 ₽
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/20 to-destructive/20 backdrop-blur-sm border-2 border-primary/40 shadow-2xl shadow-primary/30">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed">
                Но если ты хочешь{" "}
                <span className="bg-gradient-to-r from-destructive via-primary to-destructive bg-clip-text text-transparent">
                  продажи обучения
                </span>
                {" "}— тебе нужен пакет №3.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;