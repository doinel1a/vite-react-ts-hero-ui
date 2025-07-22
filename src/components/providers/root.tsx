import React from 'react';

import type { PropsWithChildren } from 'react';

import HeroUiProvider from './hero-ui';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: Readonly<TRootProvider>) {
  return <HeroUiProvider>{children}</HeroUiProvider>;
}
