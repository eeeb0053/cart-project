import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { Rating, StickyBooking } from 'components/index';
import { Button, Modal } from 'antd';
import { Reservation } from 'container/index';


const BottomReservation = ({ title, price, rating, ratingCount }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <StickyBooking
        logo="/images/cartlogo.png"
        title={title}
        price={price === '무료' || price === '' ? '무료' :
               price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')+'원'}
        rating={
          <Rating rating={rating} ratingCount={ratingCount} type="bulk" />
        }
        action={
          <Button type="primary" onClick={() => setVisible(true)}>
            Book
          </Button>
        }
      />

      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        maskStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
        wrapClassName="reservation_modal"
        closable={false}
      >
        <Reservation />
        <Button onClick={() => setVisible(false)} className="close">
          <IoIosClose />
        </Button>
      </Modal>
    </>
  );
};

export default BottomReservation;
