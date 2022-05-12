import { Form, Input } from "antd";
import React from "react";

const PersonalInfo = () => {
  const { TextArea } = Input;

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Form.Item
            name={"firstName"}
            label="firstName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name={"lastName"}
            label="Last Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name={"mobileNumber"}
            label="Mobile Number"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-4">
          <Form.Item
            name={"objective"}
            label="Objective"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item
            name={"address"}
            label="Address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;