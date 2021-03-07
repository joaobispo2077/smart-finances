import React from 'react';
import themeOn from '../../assets/images/themeOn.svg';
import themeOff from '../../assets/images/themeOff.svg';
import { Icon } from '../UI';

const light = <Icon src={themeOn} alt="Tema Claro" />;
const dark = <Icon src={themeOff} alt="Tema Escuro" />;


export default ({ theme }) => (theme ? dark : light)
