import React, { useState, useStyles, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { HtmlLabel, ViewWithPopup, InputIncDec } from 'components/index';
import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
  RoomGuestWrapper,
  ItemWrapper,
} from 'container/SinglePage/Reservation/Reservation.style.js';
import { Link } from 'react-router-dom'
import { BOOKING_PAGE } from 'settings/constant'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";


const RenderReservationForm = ( props ) => {
  const [bookdate, setBookdate] = useState(new Date());
  const [tickets, setTickets] = useState(0);

  const handleIncrement = (tickets) => {
    setTickets(tickets + 1);
  };
  const handleDecrement = (tickets) => {
    if (tickets <= 0) {
      return false;
    }
    setTickets(tickets - 1);
  };
  const handleIncDecOnChange = e => {
    let currentValue = e.target.value;
    setTickets(currentValue);
  };
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <ReservationFormWrapper className="form-container" onSubmit={handleSubmit}>
      <FieldWrapper>
        <HtmlLabel htmlFor="dates" content="날짜" />
        <DatePicker
          dateFormat="yyyy-MM-dd"
          selected={bookdate}
          onChange={date => setBookdate(date)}
          minDate={new Date()}
        />
      </FieldWrapper>
      <FieldWrapper>
        <ItemWrapper>
                <strong>매수</strong>
                <InputIncDec
                  id="adult"
                  increment={() => handleIncrement(tickets)}
                  decrement={() => handleDecrement(tickets)}
                  onChange={e => handleIncDecOnChange()}
                  value={tickets}
                />
         </ItemWrapper>
      </FieldWrapper>
      <FormActionArea>
        <Link to={`${BOOKING_PAGE}/${props.number}`}>
        <Button htmlType="submit" type="primary" 
                tickets={tickets} bookDate={bookdate} price={props.price}>
          예매하기
        </Button>
        </Link>

      </FormActionArea>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
