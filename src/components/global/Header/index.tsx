import React, { FC, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft } from 'react-icons/fi'

import { HeaderContainer, Content, HeaderStart, LogoContainer, ButtonBack, HeaderEnd, ImageUser, User } from './style';

import { IPropsHeader } from './types/index';

import Dropdown from '../Dropdown';

const Header: FC<IPropsHeader> = ({ hidden = true}) => {

  const [open, setOpen] = useState(false);
  const toggle = (open: boolean) => {setOpen(open)};
  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

useOutsideAlerter(wrapperRef);

  return (
    <HeaderContainer ref={wrapperRef}>
      <Content>
        <HeaderStart>
          <Link href="/" passHref>
            <LogoContainer>
              <Image src="/assets/logo-localiza.svg" width={165} height={32} />
            </LogoContainer>
          </Link>
          <ButtonBack hidden={hidden}>
            <Link href="/">
              <a>
                <FiArrowLeft />
                <span>Voltar</span>
              </a>
            </Link>
          </ButtonBack>
        </HeaderStart>
        <HeaderEnd>
          <User
            tabIndex={0}
            role="button"
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}
          >
            <div className="user-name">Usuário</div>
            <ImageUser>
              <Image className="icon-user" src="/assets/avatar.svg" width={35} height={35} />
            </ImageUser>
          </User>
        </HeaderEnd>
      </Content>
      <div className="menu">
      <Dropdown isOpen={open}/>
      </div>
    </HeaderContainer>

  );
};


export default Header;
