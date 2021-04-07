import React, { useState, useEffect } from 'react';
import { Title } from 'container/booking/Booking.style';
import { Information } from 'container/index';
import { Loader } from 'components/index'
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';

const BookingInfo = ( props ) => {

  const [ exhbnDetail, setexhbnDetail ] = useState([])
  const [ props2 ] = useState([])

  const URL = `http://localhost:8080/exhbns/one/` 

  useEffect(() => {
    axios.get(URL+props.exhbnNum)
    .then(reps => {
      setexhbnDetail(reps.data)
    })
    .catch(err => {
      alert(`실패`)
      throw err;
    })
  }, [])

  // const { data, loading } = useDataApi(`http://localhost:8080/exhbns`);

  if (isEmpty(exhbnDetail)) return <Loader />;
  
  const { rating, ratingCount, amenities, author} = props2;

  return (
    <form> 
      <div>
        <Title>예매 정보</Title> <br/>
        <Information
              content={exhbnDetail.exhbnContent}
              title={exhbnDetail.exhbnTitle}
              number={exhbnDetail.exhbnNum}
              location={exhbnDetail.hallLocation}
              genre={exhbnDetail.exhbnGenre}
              artist={exhbnDetail.exhbnArtist}
              start={exhbnDetail.startDate}
              end={exhbnDetail.endDate}
              price={exhbnDetail.exhbnPrice}
              image={exhbnDetail.exhbnImage}
              rating={rating}
              ratingCount={ratingCount}
            />
      </div>
      <br/>
    </form>
  );
};

export default BookingInfo;
