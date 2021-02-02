/* eslint react/prop-types: 0 */

import React, { useEffect } from 'react';
import { Card, Form, Input, Button } from 'antd';
import axios from 'axios';
import qs from 'qs';

const Confirm = (props) => {
  const [form] = Form.useForm();
  console.log('props', props);
  useEffect(() => {
    if (props.token) {
      axios({
        method: 'post',
        url: '/cgi-bin/confirm.cgi',
        data: qs.stringify({
          token: props.token
        }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  }, [props.token]);

  return (
    <Card title="Введите код подтверждения">
      <Form form={form} layout="vertical">
        <Form.Item name="code" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input size="large" placeholder="Code" />
        </Form.Item>

        <Button size="large" type="primary" htmlType="submit">
          Confirm
        </Button>
      </Form>
    </Card>
  );
};

export default Confirm;
