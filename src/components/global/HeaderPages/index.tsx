import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

import { HeaderPagesContainer, LinkCustom } from './styles';

interface IHeaderPagesProps {
  title: string;
}

const HeaderPages: FC<IHeaderPagesProps> = ({ title }) => {
  const { pathname } = useRouter();

  return (
    <HeaderPagesContainer>
      <h1>{title}</h1>
      <div>
        <Link href="/admin/list-categories" passHref>
          <LinkCustom
            active={pathname === "/admin/list-categories"}
          >
            Categorias
          </LinkCustom>
        </Link>
        <Link href="/admin/list-brands" passHref>
          <LinkCustom
            active={pathname === "/admin/list-brands"}
          >
            Marcas
          </LinkCustom>
        </Link>
        <Link href="/admin/list-models" passHref>
          <LinkCustom
            active={pathname === "/admin/list-models"}
          >
            Modelos
          </LinkCustom>
        </Link>
        <Link href="/admin/list-vehicles" passHref>
          <LinkCustom
            active={pathname === "/admin/list-vehicles"}
          >
            Veículo
          </LinkCustom>
        </Link>
      </div>
    </HeaderPagesContainer>
  )
}

export default HeaderPages;
