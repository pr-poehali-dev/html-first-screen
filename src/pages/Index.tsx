import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-8 md:py-12">
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

      <div className="relative z-10 px-4 sm:px-6 max-w-7xl mx-auto w-full">
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
    </div>
  );
};

export default Index;