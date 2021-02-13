import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CardContainer, CardDescription } from './styles';

const CardWithSchedules = () => {
  return (
    <Link href="/cars/1" passHref>
      <CardContainer>
        <Image
          src="https://www.localiza.com/brasil-site/geral/Frota/SANX.png"
          width={248}
          height={136}
        />
        <CardDescription>
          <div>
            <span>Fiat</span>
            <strong>Uno 1.0</strong>
          </div>
          <div>
            <span>Ao dia</span>
            <strong>R$ 68,18</strong>
          </div>
        </CardDescription>
      </CardContainer>
    </Link>
  )
}

export default CardWithSchedules;
