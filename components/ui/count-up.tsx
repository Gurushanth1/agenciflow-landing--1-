// components/CountUpItem.tsx
import useCountUp from '../../hooks/useCountUp';

interface CountUpItemProps {
    number: number;
    text: string;
    hasPercentage?: boolean;
  }
  
  const CountUp = ({ number, text, hasPercentage = false }: CountUpItemProps) => {
    const [count, ref] = useCountUp({ end: number });
  
    return (
      <div ref={ref} className="border-b py-8">
        <h3 className="text-[32px] font-semibold text-gray-900 leading-tight">
          {count}
          {hasPercentage && '%'}
        </h3>
        <p className="text-gray-600 mt-1 text-xl">{text}</p>
      </div>
    );
  };
  
  export default CountUp;