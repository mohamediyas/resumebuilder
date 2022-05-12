import { Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

const PersonalInfo = () => {
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
            name={"portfolio"}
            label="Portfolio"
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