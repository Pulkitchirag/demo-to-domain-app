import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const BirthdayWishes = () => {
  const wishes = [
    {
      emoji: "🎂",
      title: "Happy Birthday!",
      message: "To the most amazing person in my life. May your day be filled with joy and laughter!",
      color: "from-pink-200/40 to-rose-200/40"
    },
    {
      emoji: "🎈",
      title: "Another Year Older",
      message: "Another year more beautiful, more wonderful, and more loved by me!",
      color: "from-purple-200/40 to-pink-200/40"
    },
    {
      emoji: "🎁",
      title: "My Gift to You",
      message: "This website is just a small token of how much you mean to me. You deserve the world!",
      color: "from-blue-200/40 to-purple-200/40"
    },
    {
      emoji: "✨",
      title: "You're Special",
      message: "Not just today, but every single day. Thank you for being you!",
      color: "from-yellow-200/40 to-pink-200/40"
    },
    {
      emoji: "💝",
      title: "Make a Wish",
      message: "Whatever you wish for, I hope it comes true. You deserve all the happiness in the world!",
      color: "from-rose-200/40 to-pink-200/40"
    },
    {
      emoji: "🌟",
      title: "Shine Bright",
      message: "May this year bring you endless opportunities to shine even brighter than you already do!",
      color: "from-amber-200/40 to-rose-200/40"
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative z-10 bg-gradient-to-b from-secondary/20 to-background">
      <div className="text-center mb-12 animate-fadeInUp">
        <h2 className="text-5xl md:text-7xl font-bold text-primary mb-4">
          Happy Birthday! 🎉
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Swipe through these birthday wishes made especially for you
        </p>
      </div>

      <div className="w-full max-w-5xl animate-fadeInUp" style={{ animationDelay: '0.2s', opacity: 0 }}>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {wishes.map((wish, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className={`border-2 border-border/50 bg-gradient-to-br ${wish.color} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                  <CardContent className="flex flex-col items-center justify-center p-8 min-h-[320px]">
                    <div className="text-6xl mb-6 animate-float">
                      {wish.emoji}
                    </div>
                    <h3 className="text-2xl font-bold text-accent mb-4 text-center">
                      {wish.title}
                    </h3>
                    <p className="text-foreground/80 text-center leading-relaxed">
                      {wish.message}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      <div className="mt-12 flex gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s', opacity: 0 }}>
        <span className="text-4xl animate-float" style={{ animationDelay: '0s' }}>🎂</span>
        <span className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🎁</span>
        <span className="text-4xl animate-float" style={{ animationDelay: '1s' }}>🎈</span>
      </div>
    </section>
  );
};

export default BirthdayWishes;
