import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { MdLockOpen } from 'react-icons/md';
import { Divider, Modal } from 'antd';
import { FormControl  } from 'components/index';
import { AuthContext } from 'context/index';
import { FieldWrapper, SwitchWrapper, Label,  Title, TitleInfo, 
         Button, Text, Input, Checkbox, A } from 'container/booking/Booking.style';
import { TextField } from '@material-ui/core';
import { BOOKING_LIST_PAGE } from 'settings/constant'
import TextInfo from 'components/UI/Text/Text';
import { Consent } from 'container/index';
import axios from 'axios';

const BookingForm = ( props ) => {
  const { price, bookdate, tickets } = props;
  const [ addBooking, setAddBooking ] = useState({
    bookName : "",
    bookEmail : "",
    bookPnumber : ""
  })
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  const{ bookName, bookEmail, bookPnumber } = addBooking
  const onChange = useCallback(e => {
    setAddBooking({...addBooking, [e.target.name]: e.target.value})
  })
  const history = useHistory();
  const URL = 'http://localhost:8080/bookings'
  
  const booking = e => {
    e.preventDefault()
    alert(addBooking.bookEmail)
    const del = window.confirm("예약 하시겠습니까?")
    if(del){
    axios({
      url: URL,
      method: 'post',
      headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem("token")},
      data: addBooking
    })
    .then(resp => {
      alert(`예매되었습니다.`)
      history.push(BOOKING_LIST_PAGE)
    })
    .catch(err => {
      alert(`예약 실패`)
      throw err;
    })}
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <form> 
      <div>
        <Title>예매자 정보</Title><br/>
        <TextInfo content={'예매자의 정보를 입력해주세요.'}/><br/>
        <Label>이름</Label><br/>
        <Input name="bookName" value={bookName} placeholder = "  이름을 입력하세요." required
          onChange = {onChange}/>
      </div>
      <div>
        <Label>이메일</Label><br/>
        <Input name="bookEmail" value={bookEmail} placeholder = "  이메일을 입력하세요." required
          onChange = {onChange}/>
      </div>
      <div>
        <Label>전화번호</Label><br/>
        <Input name="bookPnumber" value={bookPnumber} placeholder = "  전화번호를 입력하세요." required
          onChange = {onChange}/>
      </div><br/>
        <Label>예매정보</Label>
        <TitleInfo> {bookdate} 2021-03-15 (월), 총 1매 - 대인 1매</TitleInfo>
        <Divider/>
        <Text>합계</Text>
        <TitleInfo>{price === '무료' ? '0원' :
               (price*tickets).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원'}</TitleInfo>
        <br/>
        <Checkbox type="checkbox" id="check" className="checkbox"/>
        <label htmlFor="check"> 예약 서비스 이용을 위한
        <A onClick={ e => showModal() }> 개인정보 수집 및 제3자 제공, 취소/환불 규정</A>
        <Modal title="개인정보 수집 및 제공 동의" 
               visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Consent/>
        </Modal>
        을 확인하였으며 이에 동의합니다.</label>
        <br/><br/>
      <Link to={BOOKING_LIST_PAGE}>
      <Button type="button" onClick={booking}>
          예매하기
      </Button></Link>
    </form>
  );
};

export default BookingForm;