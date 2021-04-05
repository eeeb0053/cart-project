import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SinglePageWrapper = styled.div`
  padding-bottom: 56px;
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export const ButtonBox = styled.div`
  position: fixed;
  right: 15px;
  margin-top: 10px;
  button {
    margin: 10px;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 8px 15px;
    font-size: 13px;
    font-weight: 700;
    align-items: center;
    cursor: pointer;
    background-color: #f44336;;
    &:hover,
    &:focus {
      background: #da190b;
      outline: 0;
      box-shadow: none;
    }
  }
`;

export const LocationMeta = styled.div`
  color: ${themeGet('text.1', '#909090')};
  font-size: 13px;
  font-weight: 400;
`;

export const Title = styled.h2`
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 25px;
  line-height: 34px;
  font-weight: 700;
  margin: 0 0 4px;
`;

export const RatingMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${themeGet('text.0', '#2C2C2C')};
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 27px;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }
  i {
    color: ${themeGet('primary.0', '#616266')};
  }
  svg {
    fill: ${themeGet('primary.0', '#616266')};
  }
  strong {
    font-weight: 700;
    margin-left: 8px;
    margin-top: -2px;
  }
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

export const TextButton = styled.div`
  margin: 30px 0 0;
  @media (max-width: 767px) {
    margin-top: 19px;
  }
`;

export const TobBarWrapper = styled.div`
  .sticky-outer-wrapper {
    position: relative;
    top: 130px;
    margin: 0px 0px 200px;
    .sticky-inner-wrapper {
      background-color: ${themeGet('color.1', '#ffffff')};
      .scrollbar {
        box-shadow: none;
        border-bottom: 1px solid ${themeGet('border.3', '#E6E6E6')};
        .scrollbar_left {
          margin-right: 25px;
          a {
            color: ${themeGet('text.0', '#2C2C2C')};
            font-size: 15px;
            font-weight: 700;
            padding: 28px 20px;
            text-transform: capitalize;
            transition: color 0.2s ease-in-out;
            &:first-child {
              padding-left: 20px;
            }
            @media (max-width: 1200px) {
              padding: 18px 20px;
            }
            &:hover {
              color: ${themeGet('primary.0', '#008489')};
            }
            &.active {
              font-weight: 700;
              color: ${themeGet('primary.0', '#008489')};
              border-bottom: 3px solid ${themeGet('primary.0', '#008489')};
            }
          }
        }
      }
    }
    &.isSticky {
      .sticky-inner-wrapper {
        > div {
          border: 0;
          box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0);
        }
      }
    }
  }
`;


export default SinglePageWrapper;