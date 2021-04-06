import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { FormControl } from 'components/index';
import { FormHeader, Title, FormContent, FormAction } from 'container/Exhibition/AddExhibition.style';
import axios from 'axios'
import DatePicker from "react-datepicker"; 
import { Link } from 'react-router-dom';

const AddExhibition = ({ match }) => {
  const [ exhbnDetail, setExhbnDetail] = useState({})
  const [ updateExhbnData, setUpdateExhbnData ] = useState({
    exhbnTitle: "", hallLocation: "", startDate: new Date(), endDate: new Date(), exhbnGenre: "",
    exhbnPrice: "", exhbnArtist: "", exhbnContent: "", exhbnImage: ""
  })
  const { exhbnTitle, hallLocation, startDate, endDate, exhbnGenre, 
          exhbnPrice, exhbnArtist, exhbnContent, exhbnImage } = updateExhbnData
  
  const onChange = useCallback(e => {
    setUpdateExhbnData({...updateExhbnData, [e.target.name]: e.target.value})
  })

  const [ exhbnNum, setExhbnNum ] = useState('')

  useEffect(e => {
    axios.get("http://localhost:8080/exhbns/"+match.params.exhbnNum)
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
      data: updateExhbnData
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
            <Input id="exhbnImage" name="exhbnImage" value={exhbnImage} type="file" 
                   accept="image/jpeg, image/jpg, image/png" 
                      onChange = { onChange }/>     
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="제목"
              htmlFor="exhbnTitle"
            >
            <Input name="exhbnTitle" value={exhbnTitle}
                  placeholder={exhbnDetail.exhbnTitle} 
                  onChange = { onChange }/>
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
          <FormControl
              label="장소"
              htmlFor="hallLocation"
            >
            <Input name="hallLocation" value={hallLocation}
                  placeholder={exhbnDetail.hallLocation} 
                  onChange = { onChange }/>  
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="시작 날짜"
              htmlFor="startDate"
            >
            <DatePicker
              name="startDate"
              // value={startDate}
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              onChange={onChange}
              minDate={new Date()}
            />
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="종료 날짜"
              htmlFor="endDate"
            >
            <DatePicker
              name="endDate"
              // value={startDate}
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              onChange={onChange}
              minDate={new Date()}
            />
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="가격"
              htmlFor="exhbnPrice"
            >
            <Input id="exhbnPrice" name="exhbnPrice" value={exhbnPrice} 
                  placeholder={exhbnDetail.exhbnPrice} 
                  onChange = { onChange }/>    
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="장르"
              htmlFor="exhbnGenre"
            >
            <Input id="exhbnGenre" name="exhbnGenre" value={exhbnGenre} 
                  placeholder={exhbnDetail.exhbnGenre} 
                  onChange = { onChange }/>   
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="작가"
              htmlFor="exhbnArtist"
            >
            <Input id="exhbnArtist" name="exhbnArtist" value={exhbnArtist}
                  placeholder={exhbnDetail.exhbnArtist} 
                  onChange = { onChange }/>   
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="전시 소개"
          htmlFor="exhbnContent"
        >
        <Input.TextArea rows={5} id="exhbnContent" name="exhbnContent" value={exhbnContent}
                  placeholder={exhbnDetail.exhbnContent} 
                  onChange = { onChange}/>     
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

export default AddExhibition;