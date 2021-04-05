import React from 'react';
import PropTypes from 'prop-types';
import HallWrapper, { 
  HallImage, HallInfo, HallBoxOne, HallBoxTwo, HallSum, 
  HallBtn } from 'container/HallPage/Hall/Hall.style';
import { Heading, Text } from 'components/index';
import { EXHBN_LIST_PAGE } from 'settings/constant';
import { Link } from 'react-router-dom';

const Hall = (props) => {
  const {
    time,
    closedday,
    address,
    pnumber,
    title,
    content,
    titleStyle,
    contentStyle,
    media,
  }
= props;

  return (
    <HallWrapper>
      <HallBoxOne>
        <HallImage>
          <img src={media} alt="" />
        </HallImage>
        <div class="hallInfo">
          <Heading as="h2" content={title} {...titleStyle} />
          <Text content={content} {...contentStyle} />
        </div>
      </HallBoxOne> 
      <HallBoxTwo>
        <div class="hallSum">
          <ul>
            <li><strong>관람시간</strong><span>{time}</span></li>
            <li><strong>휴관일</strong>&emsp;<span>{closedday}</span></li>
            <li><strong>주소</strong>&emsp;&emsp;<span>{address}</span></li>
            <li><strong>대표번호</strong><span>{pnumber}</span></li>
          </ul>
        </div>
        <HallBtn>
          <div class="wrap">
            <Link to={EXHBN_LIST_PAGE}>
              <a href="#" class="button" >전시보기</a>
            </Link>
          </div>
        </HallBtn>
      </HallBoxTwo>
    </HallWrapper>
  );
};


Hall.propTypes = {
    titleStyle: PropTypes.object,
  };
  
  Hall.defaultProps = {
    titleStyle: {
        color: '#2C2C2C',
        fontSize: '25px',
        lineHeight: ['1.15', '1.2', '1.36'],
        padding: '0px 0px 20px',
    },
    contentStyle: {
      fontSize: '14px',
      fontWeight: '400',
      color: '#2C2C2C',
      lineHeight: '1.6',
    },
};

export default Hall;