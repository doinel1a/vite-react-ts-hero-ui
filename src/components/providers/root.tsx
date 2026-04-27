import type { PropsWithChildren } from 'react';

import HeroUiProvider from './hero-ui';

type TRootProvider = Readonly<PropsWithChildren>;

export default function RootProvider({ children }: TRootProvider) {
  return <HeroUiProvider>{children}</HeroUiProvider>;
}
