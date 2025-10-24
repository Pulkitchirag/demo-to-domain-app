import FloatingHearts from "@/components/FloatingHearts";
import WelcomeSection from "@/components/WelcomeSection";
import WhyYouAreSpecial from "@/components/WhyYouAreSpecial";
import BirthdayWishes from "@/components/BirthdayWishes";
import Memories from "@/components/Memories";
import Confession from "@/components/Confession";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FloatingHearts />
      <WelcomeSection />
      <WhyYouAreSpecial />
      <BirthdayWishes />
      <Memories />
      <Confession />
    </div>
  );
};

export default Index;
