import { css } from "styled-components";

const sizes = {
  uhd: 1980,
  widscreen: 1366,
  desktop: 1024,
  tablet: 768,
  mobile: 380,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
