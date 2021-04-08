import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Heading, Text } from 'components/index';
import { RenderReservationForm } from 'container/index';

const CardHeader = ({ price, priceStyle, pricePeriodStyle, }) => {
  return (
    <Fragment>
      <Heading
        content={
          <Fragment>
            {price}
            <Text as="span" content="/ 1매" {...pricePeriodStyle} />
          </Fragment>
        }
        {...priceStyle}
      />
    </Fragment>
  );
};

const Reservation = ( props ) => {
  return (
    <Card
      className="reservation_sidebar"
      header={<CardHeader price = {props.price} />}
      content={<RenderReservationForm number={props.number} price={props.price}/>}
      footer={
        <p>
        </p>
      }
    />
  );
}

CardHeader.propTypes = {
  priceStyle: PropTypes.object,
  pricePeriodStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

CardHeader.defaultProps = {
  priceStyle: {
    color: '#2C2C2C',
    fontSize: '25px',
    fontWeight: '700',
  },
  pricePeriodStyle: {
    fontSize: '15px',
    fontWeight: '400',
  },
  linkStyle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#616266',
  },
};

export default Reservation;