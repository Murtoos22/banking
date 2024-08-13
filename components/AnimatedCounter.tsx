'use client';

import CountUp from 'react-countup';

interface Props {
  amount: number
};

const AnimatedCounter = ({ amount }: Props) => {
  return (
    <div className='w-full'>
      <CountUp
        duration={1.7}
        decimals={2}
        decimal='.'
        prefix='$'
        end={amount}
      />
    </div>
  );
};

export default AnimatedCounter;