import React, { useState, useStyles, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { HtmlLabel, InputIncDec } from 'components/index';
import ReservationFormWrapper, {
  FormActionArea,
  FieldWrapper,
  ItemWrapper,
} from 'container/SinglePage/Reservation/Reservation.style.js';
import { Link, useHistory } from 'react-router-dom'
import { BOOKING_PAGE, LOGIN_PAGE } from 'settings/constant'
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";


const RenderReservationForm = ( props ) => {
  const [bookdate, setBookdate] = useState(new Date());
  const [tickets, setTickets] = useState(0);
  const history = useHistory();

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
  const onClick = e => {
    e.preventDefault();
    { localStorage.getItem("token") !== null ? 
      history.push(`${BOOKING_PAGE}/${props.number}`)
    :
      alert(`로그인 후에 이용 가능합니다.`)
      history.push(LOGIN_PAGE)
    }
  }

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
                  increment={handleIncrement}
                  decrement={handleDecrement}
                  onChange={handleIncDecOnChange}
                  value={tickets}
                />
         </ItemWrapper>
      </FieldWrapper>
      <FormActionArea>
        <Link to={`${BOOKING_PAGE}/${props.number}`}>
        <Button htmlType="submit" type="primary" 
                tickets={tickets} bookDate={bookdate} price={props.price}
                onClick = {onClick}>
          예매하기
        </Button>
        </Link>
      </FormActionArea>
    </ReservationFormWrapper>
  );
};

export default RenderReservationForm;
