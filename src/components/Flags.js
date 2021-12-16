import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const CountryFlagCountainer = styled.div`
  .menu-flags-button {
    border: none;
  }
`;
const Flags = () => {
  const [selected, setSelected] = useState('US');
  return (
    <>
      <Helmet></Helmet>
      <CountryFlagCountainer>
        <ReactFlagsSelect
          selected={selected}
          countries={['US', 'GB', 'FR', 'DE', 'IT', 'NG']}
          placeholder={false}
          showOptionLabel={false}
          showSelectedLabel={false}
          fullWidth={false}
          className="flag"
          selectButtonClassName="menu-flags-button"
          onSelect={(code) => setSelected(code)}
        />
      </CountryFlagCountainer>
    </>
  );
};

export default Flags;
