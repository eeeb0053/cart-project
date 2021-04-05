import React from 'react';
import { Row, Col } from 'antd';
import { Heading, Text, Loader } from 'components/index';
import useDataApi from 'library/hooks/useDataApi';
import { AgentContactWrapper, ContactDetails } from 'container/Agent/AccountDetails/AgentDetails.style';
import isEmpty from 'lodash/isEmpty';

const AgentContact = () => {
  const { data, loading } = useDataApi('/data/agent.json');
  if (isEmpty(data) || loading) return <Loader />;
  const { agent_location, cell_number, email } = data[0];

  return (
    <AgentContactWrapper>
      <Heading content="Send Message" />
      <Row gutter={30}>
        <Col lg={16}>
        </Col>
        <Col lg={8}>
          <ContactDetails>
            <Heading as="h3" content="Phone No" />
            <Text content={cell_number} />
            <Heading as="h3" content="Email" />
            <Text content={email} />
          </ContactDetails>
        </Col>
      </Row>
    </AgentContactWrapper>
  );
};

export default AgentContact;
