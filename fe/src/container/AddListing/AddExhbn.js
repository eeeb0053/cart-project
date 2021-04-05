import React, { useState, useEffect } from 'react';
import { useStateMachine } from 'little-state-machine';
import { useForm } from 'react-hook-form';
import { Row, Col, Input, Button } from 'antd';
import { FormControl } from 'components/index';
import { AddListingAction } from 'container/index'
import { FormHeader, Title, FormContent, FormAction } from 'container/AddListing/AddListing.style';
import axios from 'axios'
import { useHistory } from 'react-router';

const AddExhbn = ({ setStep }) => {
  const { action, state } = useStateMachine(AddListingAction);
  const { register, errors, handleSubmit } = useForm();
  let history = useHistory();
  const [ exhbnTitle, setExhbnTitle ] = useState('')
  const [ hallLocation, setHallLocation ] = useState('')
  const [ startDate, setStartDate ] = useState('')
  const [ endDate, setEndDate ] = useState('')
  const [ exhbnGenre, setExhbnGenre ] = useState('')
  const [ exhbnPrice, setExhbnPrice ] = useState('')
  const [ exhbnArtist, setExhbnArtist ] = useState('')
  const [ exhbnContent, setExhbnContent ] = useState('')
  const [ exhbnImage, setExhbnImage ] = useState('')
  const [ exhbnNum, setExhbnNum ] = useState('')

  const add = e => {
    e.preventDefault()
    const formData = new FormData();
    axios({
      url: 'http://localhost:8080/exhbns', 
      method: 'post',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'JWT fefege..'
      },
      data: { formData,
        exhbnTitle, hallLocation, startDate, endDate, exhbnGenre, exhbnPrice, exhbnArtist, exhbnContent, exhbnImage 
      }
    }) 
    .then(resp => {
      alert(`전시 등록 완료`)
      window.location.reload()
    })
    .catch(err => {
      alert(`전시 등록 실패`)
      throw err;
    })
  }

  const onSubmit = (data) => {
    action(data);
    setStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <FormHeader>
          <Title>전시회 등록</Title>
        </FormHeader>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="전시 포스터"
              htmlFor="exhbnImage"
              error={errors.exhbnImage && <span>이 입력란을 작성해주세요!</span>}
              >
            <input name="exhbnImage" type="file" accept="image/*" required
                      onChange = { e => { setExhbnImage(`${e.target.value}`)}} />     
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="제목"
              htmlFor="exhbnTitle"
              error={errors.exhbnTitle && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="exhbnTitle" placeholder="전시 제목을 입력해주세요." required
                  onChange = { e => { setExhbnTitle(`${e.target.value}`)}}/>
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
          <FormControl
              label="장소"
              htmlFor="hallLocation"
              error={errors.hallLocation && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="hallLocation" placeholder="전시관을 입력해주세요." required
                  onChange = { e => { setHallLocation(`${e.target.value}`)}}/>  
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="시작 날짜"
              htmlFor="startDate"
              error={errors.startDate && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="startDate" placeholder="전시 시작 날짜를 입력해주세요." required
                  onChange = { e => { setStartDate(`${e.target.value}`)}}/>    
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="종료 날짜"
              htmlFor="endDate"
              error={errors.endDate && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="endDate" placeholder="전시 종료 날짜를 입력해주세요." required
                  onChange = { e => { setEndDate(`${e.target.value}`)}}/>    
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="가격"
              htmlFor="exhbnPrice"
              error={errors.exhbnPrice && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="exhbnPrice" placeholder="전시 가격을 입력해주세요." required
                  onChange = { e => { setExhbnPrice(`${e.target.value}`)}}/>    
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="장르"
              htmlFor="exhbnGenre"
              error={errors.exhbnGenre && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="exhbnGenre" placeholder="전시 장르를 입력해주세요." required
                  onChange = { e => { setExhbnGenre(`${e.target.value}`)}}/>   
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="작가"
              htmlFor="exhbnArtist"
              error={errors.exhbnArtist && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="exhbnArtist" placeholder="작가명을 입력해주세요." required
                  onChange = { e => { setExhbnArtist(`${e.target.value}`)}}/>   
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="전시 소개"
          htmlFor="exhbnContent"
          error={errors.exhbnContent && <span>이 입력란을 작성해주세요!</span>}
        >
        <Input.TextArea rows={5} id="exhbnContent" placeholder="전시 소개글을 입력해주세요." required
                  onChange = { e => { setExhbnContent(`${e.target.value}`)}}/>     
        </FormControl>
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button type="submit" htmlType="submit" onClick={e => add()} >
            등록하기
          </Button>
        </div>
      </FormAction>
    </form>
  );

};

export default AddExhbn;