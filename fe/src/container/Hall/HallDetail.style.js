import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const HallPageWrapper = styled.div`
  padding-bottom: 56px;
  display: flex;
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 25px;
  line-height: 34px;
  font-weight: 700;
  margin: 0 0 4px;
`;

export const Text = styled.p`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  margin: 0 0 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default HallPageWrapper;