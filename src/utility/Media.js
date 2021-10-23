import { css } from "styled-components";

const sizes = {
  uhd: 1980,
  widscreen: 1366,
  desktop: 1024,
  tablet: 768,
  mobile: 500
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
