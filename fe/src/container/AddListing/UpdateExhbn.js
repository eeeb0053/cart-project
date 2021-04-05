import React, { useState, useEffect } from 'react';
import { useStateMachine } from 'little-state-machine';
import { useForm, Controller } from 'react-hook-form';
import { Row, Col, Input, Button } from 'antd';
import { FormControl } from 'components/index';
import { AddListingAction } from 'container/index';
import { FormHeader, Title, FormContent, FormAction } from 'container/AddListing/AddListing.style';
import axios from 'axios'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const AddExhbn = ({ setStep, match }) => {
  const { action, state } = useStateMachine(AddListingAction);
  const { control, errors, handleSubmit } = useForm();
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
  const [ exhbnDetail, setExhbnDetail] = useState({})

  useEffect(e => {
    axios.get("http://localhost:8080/exhbns/one/"+match.params.exhbnNum)
    .then((resp) => {
      setExhbnDetail(resp.data)
      setExhbnNum(resp.data)
    })
    .catch((err) => {
      alert(`실패`)
      throw err;
    })
  }, [])

  const updateExhbn = e => {
    e.preventDefault()
    window.confirm("전시를 수정하시겠습니까?")
    axios({
      url: 'http://localhost:8080/exhbns/'+match.params.exhbnNum,
      method: 'put',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'JWT fefege..'
      },
      data: {
        exhbnTitle, hallLocation, startDate, endDate, exhbnGenre, exhbnPrice, exhbnArtist, exhbnContent, exhbnImage
      }
    })
    .then(resp => {
      alert(`수정 완료`)
      window.location.reload()
    })
    .catch(err => {
      alert(`수정 실패`)
      throw err;
    })
  }

  return (
    <form>
      <FormContent>
        <FormHeader>
          <Title>전시회 등록</Title>
        </FormHeader>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="전시 포스터"
              htmlFor="exhbnImage"
            >
            <Input id="exhbnImage" type="file" accept="image/jpeg, image/jpg, image/png" 
                      onChange = { e => { setExhbnImage(`${e.target.value}`)}}/>     
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="제목"
              htmlFor="exhbnTitle"
            >
            <Input name="exhbnTitle" placeholder={exhbnDetail.exhbnTitle} 
                  onChange = { e => { setExhbnTitle(`${e.target.value}`)}}/>
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
          <FormControl
              label="장소"
              htmlFor="hallLocation"
            >
            <Input name="hallLocation" placeholder={exhbnDetail.hallLocation} 
                  onChange = { e => { setHallLocation(`${e.target.value}`)}}/>  
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="시작 날짜"
              htmlFor="startDate"
            >
            <Input id="startDate" placeholder={exhbnDetail.startDate} 
                  onChange = { e => { setStartDate(`${e.target.value}`)}}/>    
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="종료 날짜"
              htmlFor="endDate"
            >
            <Input id="endDate" placeholder={exhbnDetail.endDate} 
                  onChange = { e => { setEndDate(`${e.target.value}`)}}/>    
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="가격"
              htmlFor="exhbnPrice"
            >
            <Input id="exhbnPrice" placeholder={exhbnDetail.exhbnPrice} 
                  onChange = { e => { setExhbnPrice(`${e.target.value}`)}}/>    
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="장르"
              htmlFor="exhbnGenre"
            >
            <Input id="exhbnGenre" placeholder={exhbnDetail.exhbnGenre} 
                  onChange = { e => { setExhbnGenre(`${e.target.value}`)}}/>   
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="작가"
              htmlFor="exhbnArtist"
            >
            <Input id="exhbnArtist" placeholder={exhbnDetail.exhbnArtist} 
                  onChange = { e => { setExhbnArtist(`${e.target.value}`)}}/>   
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="전시 소개"
          htmlFor="exhbnContent"
        >
        <Input.TextArea rows={5} id="exhbnContent" placeholder={exhbnDetail.exhbnContent} 
                  onChange = { e => { setExhbnContent(`${e.target.value}`)}}/>     
        </FormControl>
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button type="submit" htmlType="submit" onClick={ e => updateExhbn() } >
            수정하기
          </Button>
        </div>
      </FormAction>
    </form>
  );
};

export default AddExhbn;