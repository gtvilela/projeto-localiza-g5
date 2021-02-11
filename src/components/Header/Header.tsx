import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';
import { FotoPerfil, HeaderContainer, UsuarioContainer, Usuario, LogoContainer } from './style';
import { IPropsHeader } from './types/index';

const Header: FC<IPropsHeader> = ({ hidden = true }) => {
  return (
    <HeaderContainer>
      <nav>
        <LogoContainer>
          <Link href="/">
            <a className="logo-link">
              <Image src="/assets/logo-localiza.svg" width={165} height={32} />
            </a>
          </Link>
          <div hidden={hidden}>
            <Link href="/">
              <a className="icon-voltar">
                <Image src="/assets/vetor.svg" width={16} height={16} />
               <span>Voltar</span>
              </a>
            </Link>
          </div>
        </LogoContainer>
        <UsuarioContainer>
          <Link href="/adicionar-produtos">
            <Usuario>
              <div className="nome-usuario">Usuário</div>
              <FotoPerfil />
            </Usuario>
          </Link>
        </UsuarioContainer>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
