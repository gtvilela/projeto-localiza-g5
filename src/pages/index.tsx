import React from "react";
import {items} from '../components/Dropdown/types/items';

import Header from '@components/Header/Header'

export default function Home() {
  return (
    <div>
      <Header items={items} hidden={false}/>
      <div>Teste</div>
    </div>
  );
}
