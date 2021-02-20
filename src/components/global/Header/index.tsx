import React, { FC, useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowLeft } from 'react-icons/fi'

import { HeaderContainer, Content, HeaderStart, LogoContainer, ButtonBack, HeaderEnd, ImageUser, User, LinkLogin } from './style';

import { IPropsHeader } from './types/index';

import Dropdown from '../Dropdown';
import { AvatarSvg, LogoLocalizaSvg } from '../../../../public/images-components/IconsReact';

import { useAuth } from '../../../context/auth';
import Button from '../Button';

const Header: FC<IPropsHeader> = ({ hidden = true}) => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

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
              <LogoLocalizaSvg />
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
          {user &&
            <User
              tabIndex={0}
              role="button"
              onKeyPress={() => toggle(!open)}
              onClick={() => toggle(!open)}
            >
              <div className="user-name">Usuário</div>
              <ImageUser>
                <AvatarSvg className="icon-user" />
              </ImageUser>
            </User>
          }
          {!user &&
            <Link href="/sessions" passHref>
              <LinkLogin>
                Entrar
              </LinkLogin>
            </Link>
          }
        </HeaderEnd>
      </Content>
      <div className="menu">
      <Dropdown isOpen={open} setOpen={setOpen}/>
      </div>
    </HeaderContainer>

  );
};


export default Header;
