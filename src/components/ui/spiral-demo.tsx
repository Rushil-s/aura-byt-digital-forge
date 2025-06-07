import { SpiralAnimation } from "@/components/ui/spiral-animation";

const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <SpiralAnimation 
        totalDots={800} 
        dotColor="#fff" 
        backgroundColor="#000"
        duration={2}
      />
    </div>
  );
};

export { DemoOne };