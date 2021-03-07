import React from 'react';
import outros from '../assets/images/outros.svg';
import alimentacao from '../assets/images/alimentacao.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import { Icon } from './UI';

export default (type) => {
  const Images = {
    Restaurante: <Icon src={alimentacao} />,
    Saude: <Icon src={saude} />,
    Transporte: <Icon src={transporte} />,
    Utilidades: <Icon src={utilidades} />,
    default: <Icon src={outros} />,
  }

  const image = Images[type] || Images.default;
  return image;
}
