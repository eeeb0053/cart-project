import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Row, Col, Input, Button } from 'antd';
import { FormControl } from 'components/index';
import { FormHeader, Title, FormContent, FormAction } from 'container/Exhibition/AddExhibition.style';
import DatePicker from "react-datepicker"; 
import axios from 'axios'

const AddExhibition = ( )  => {
  const { errors } = useForm();

  const [ addExhbn, setAddExhibition ] = useState({
    exhbnTitle: "", hallLocation: "", startDate: new Date(), endDate: new Date(), exhbnGenre: "",
    exhbnPrice: "", exhbnArtist: "", exhbnContent: "", exhbnImage: ""
  })
  const { exhbnTitle, hallLocation, startDate, endDate, exhbnGenre, 
          exhbnPrice, exhbnArtist, exhbnContent, exhbnImage } = addExhbn
  
  const onChange = useCallback(e => {
    setAddExhibition({...addExhbn, [e.target.name]: e.target.value})
  })
  const URL = 'http://localhost:8080'
  const add = e => {
    e.preventDefault()
    const del = window.confirm("전시회를 등록하시겠습니까?")
    if(del){
    axios({
      url: URL+'/exhbns', 
      method: 'post',
      headers: {
        'Content-Type'  : 'application/json',
        'Authorization' : 'JWT fefege..'
      },
      data: addExhbn
    }) 
    .then(resp => {
      alert(`전시 등록 완료`)
      window.location.reload()
    })
    .catch(err => {
      alert(`전시 등록 실패`)
      throw err;
    })}
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <FormContent>
        <FormHeader>
          <Title>전시회 등록</Title>
        </FormHeader>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="전시 포스터"
              htmlFor="exhbnImage"
              // error={errors.exhbnImage && <span>이 입력란을 작성해주세요!</span>}
              >
            <input name="exhbnImage" value={exhbnImage}
                   type="file" accept="image/*" required
                   onChange = { onChange } />     
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="제목"
              htmlFor="exhbnTitle"
              // error={errors.exhbnTitle && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input name="exhbnTitle" value={exhbnTitle} id="exhbnTitle" 
                   placeholder="전시 제목을 입력해주세요." required
                   onChange = { onChange }/>
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
          <FormControl
              label="장소"
              htmlFor="hallLocation"
              // error={errors.hallLocation && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="hallLocation" name="hallLocation" value={hallLocation}
                   placeholder="전시관을 입력해주세요." required
                   onChange = { onChange }/>  
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="시작 날짜"
              htmlFor="startDate"
              // error={errors.startDate && <span>이 입력란을 작성해주세요!</span>}
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
              error={errors.endDate && <span>이 입력란을 작성해주세요!</span>}
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
              // error={errors.exhbnPrice && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="exhbnPrice" name="exhbnPrice" value={exhbnPrice}
                   placeholder="전시 가격을 입력해주세요." required
                   onChange = { onChange }/>    
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="장르"
              htmlFor="exhbnGenre"
              // error={errors.exhbnGenre && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="exhbnGenre" name="exhbnGenre" value={exhbnGenre} 
                   placeholder="전시 장르를 입력해주세요." required
                   onChange = { onChange }/>   
            </FormControl>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col sm={12}>
            <FormControl
              label="작가"
              htmlFor="exhbnArtist"
              // error={errors.exhbnArtist && <span>이 입력란을 작성해주세요!</span>}
            >
            <Input id="exhbnArtist" name="exhbnArtist" value={exhbnArtist}
                   placeholder="작가명을 입력해주세요." required
                   onChange = { onChange }/>   
            </FormControl>
          </Col>
        </Row>
        <FormControl
          label="전시 소개"
          htmlFor="exhbnContent"
          error={errors.exhbnContent && <span>이 입력란을 작성해주세요!</span>}
        >
        <Input.TextArea rows={5} id="exhbnContent" name="exhbnContent" value={exhbnContent}
                  placeholder="전시 소개글을 입력해주세요." required
                  onChange = { onChange }/>     
        </FormControl>
      </FormContent>
      <FormAction>
        <div className="inner-wrapper">
          <Button type="submit" htmlType="submit" onClick={ add } >
            등록하기
          </Button>
        </div>
      </FormAction>
    </form>
  );

};

export default AddExhibition;