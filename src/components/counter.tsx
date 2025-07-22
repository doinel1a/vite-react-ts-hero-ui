import React, { useState } from 'react';

import { Button } from '@heroui/button';
import { Card, CardBody, CardHeader } from '@heroui/card';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card className='border-border bg-secondary w-72 border shadow-md'>
      <CardHeader className='flex flex-col'>
        <h1 className='text-2xl'>Vite React TypeScript</h1>
        <h2 className='text-lg'>with HeroUI</h2>
      </CardHeader>
      <CardBody className='flex w-full flex-row items-center justify-between'>
        <Button
          color='primary'
          className='rounded-full'
          data-testid='increase-count'
          isIconOnly
          onPress={() => {
            setCount((previousCount) => previousCount + 1);
          }}
        >
          + 1
        </Button>

        <h2 className='text-6xl' data-testid='count'>
          {count}
        </h2>

        <Button
          color='primary'
          className='rounded-full'
          data-testid='decrease-count'
          isIconOnly
          onPress={() => {
            setCount((previousCount) => previousCount - 1);
          }}
        >
          - 1
        </Button>
      </CardBody>
    </Card>
  );
}
