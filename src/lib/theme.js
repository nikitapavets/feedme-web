const colors = {
  grey_light: '#fafafa',
  white: '#fff',
  text: '#2a3245',
  transparent: 'transparent',
  brand: '#4a73a4'
};

export default {
  ...colors,
  box: `
    position: relative;

    background-color: #fff;
    box-shadow: 0 0 4px 0px rgba(0,0,0,0.1);
  `,
  emptyBtn: `
    margin: 0;
    padding: 0;
    border: 0;

    background: none;
  `,
  btn: `
    padding: 5px 8px;
    border: 1px solid ${colors.brand};

    color: ${colors.brand};
    background: ${colors.white};

    &:hover {
      cursor: pointer;
    }
  `
};
