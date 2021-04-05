import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Divider, Table } from 'antd';
import Wrapper, { FormWrapper, Title2 } from 'container/SinglePage/Booking/Booking.style';
import { BOOKING_DETAIL_PAGE } from 'settings/constant';
import { TextLink } from 'components/index';

const BookingList = () => {

  const [bookingList, setBookingList] = useState([])

  const URL = 'http://localhost:8080/bookings'
  
  useEffect(() => {
    axios.get(URL, )
    .then(resp => {
      setBookingList(resp.data)
    })
    .catch(err => {
      alert(`실패`)
      throw err;
    })
  }, [])

  const columns = [
    {
      title: '예약번호',
      dataIndex: 'bookNum',
      key: 'bookNum',
      render: text => <TextLink link={`${BOOKING_DETAIL_PAGE}/${text}`} content={text}/>
    },
    {
      title: '전시명',
      dataIndex: 'exhbnNum',
      key: 'exhbnNum',
    },
    {
      title: '예약자명',
      dataIndex: 'bookName',
      key: 'bookName',
    },
    {
      title: '예약일자',
      dataIndex: 'bookDate',
      key: 'bookDate',
    },
    {
      title: '합계',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
  ];
  
  return (
      <Wrapper>
      <Divider />
      <Title2>예매 목록</Title2>
      <Table dataSource={bookingList} 
             columns={columns} />
      <Divider> C:ART  |  Seoul Museum of Art </Divider>
    </Wrapper>
    

  );
};

export default BookingList;
