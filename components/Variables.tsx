import * as React from 'react';
import styled from 'styled-components';

import { useStore } from '../store';
import VariableComponent from './VariableComponent';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 35px 80px auto 70px 70px;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;
`;

interface Props {}
const Variables: React.FC<Props> = () => {
  const { variables } = useStore();

  return (
    <div className="guiWindow">
      <Wrapper>
        <div>Var</div>
        <div>Value</div>
        <p style={{ fontSize: '17.5px', padding: 0, margin: 0 }}>Variables</p>
        <div>Min</div>
        <div>Max</div>
      </Wrapper>
      {variables.map((myVar) => (
        <VariableComponent key={myVar.id} {...myVar} />
      ))}
    </div>
  );
};

export default Variables;
