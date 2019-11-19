import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});


const OnMobile = layout.is('mobile');
const OnAtLeastTablet = layout.isAtLeast('tablet');
const OnAtMostPhablet = layout.isAtMost('phablet');
const OnDesktop = layout.is('desktop');
const resObject ={OnMobile, OnAtLeastTablet, OnAtMostPhablet, OnDesktop}

export default resObject