import React from 'react';
import outros from '../assets/images/outros.svg';
import alimentacao from '../assets/images/alimentacao.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { Icon, IconByTheme } from './UI';

export default (type) => {
  const Images = {
    Restaurante: <IconByTheme src={alimentacao} />,
    Saude: <IconByTheme src={saude} />,
    Transporte: <IconByTheme src={transporte} />,
    Utilidades: <IconByTheme src={utilidades} />,
    default: <IconByTheme src={outros} />,
  }

  const image = Images[type] || Images.default;
  return image;
}
