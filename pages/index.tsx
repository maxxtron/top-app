import type { NextPage } from 'next';
import { useState } from 'react';
import { Button, Htag, P, Tag } from '../components';
import Rating from '../components/Rating/Rating';

const Home: NextPage = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <Htag tag="h3">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </Button>
      <Button appearance="ghost" arrow="right" onClick={() => setCounter((counter) => counter - 1)}>
        -
      </Button>
      <P size="s">Малый</P>
      <P size="m">Средний</P>
      <P size="l">Большой</P>
      <Tag size="s" color="primary">
        primary
      </Tag>
      <Tag size="m" color="red">
        red
      </Tag>
      <Tag size="m" color="green">
        green
      </Tag>
      <Tag size="m">ghost</Tag>
      <Tag color="grey">grey</Tag>
      <Rating rating={4} />
    </>
  );
};

export default Home;
