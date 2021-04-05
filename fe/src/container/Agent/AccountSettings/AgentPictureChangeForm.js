import React from 'react';
import { Button } from 'antd';
import { ImageUploader, Heading } from 'components/index';
import { AgentPictureUploader, FormTitle } from 'container/Agent/AccountSettings/AccountSettings.style';

export default function AgentPictureChangeForm() {
  return (
    <AgentPictureUploader>
      <FormTitle>Profile Images</FormTitle>
      <Heading content="Cover Image" as="h4" />
      <ImageUploader />
      <Heading content="Profile Image" as="h4" />
      <ImageUploader />

      <div className="submit-container">
        <Button htmlType="submit" type="primary">
          Save Changes
        </Button>
      </div>
    </AgentPictureUploader>
  );
}
