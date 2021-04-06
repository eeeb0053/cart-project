import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerticalWrapper from 'container/Hall/VerticalTab/VerticalTab.style';
import { HALL_DETAIL_PAGE } from 'settings/constant';

const VerticalTab = (props) => {
    
    return (
        <VerticalWrapper>
            <nav class="vertab">
                <ul>
                    <li><a href={`${HALL_DETAIL_PAGE}/${1}`}>서소문본관</a></li>
                    <li><a href={`${HALL_DETAIL_PAGE}/${2}`}>북서울미술관</a></li>
                    <li><a href={`${HALL_DETAIL_PAGE}/${3}`}>남서울미술관</a></li>
                    <li><a href={`${HALL_DETAIL_PAGE}/${4}`}>난지미술창작스튜디오</a></li>
                    <li><a href={`${HALL_DETAIL_PAGE}/${5}`}>SeMA창고</a></li>
                    <li><a href={`${HALL_DETAIL_PAGE}/${6}`}>백남준기념관</a></li>
                    <li><a href={`${HALL_DETAIL_PAGE}/${7}`}>SeMA벙커</a></li>
                </ul>
            </nav>
        </VerticalWrapper>
    );
};

export default VerticalTab;