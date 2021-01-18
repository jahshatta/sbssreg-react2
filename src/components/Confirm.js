import React from 'react';
import { Card, Form, Input, Button } from 'antd';
import axios from 'axios';

const Confirm = (props) => {
  const [form] = Form.useForm();
  console.log('props', props);
  // const { Option } = Select;

  // const options = countries.map((d) => (
  //   <Option value={d.code} label={d.name} key={d.code}>
  //     <div className="demo-option-label-item">
  //       <span role="img" aria-label={d.name}>
  //         {d.emoji}
  //       </span>
  //       {d.name}
  //     </div>
  //   </Option>
  // ));

  const onFinish = (values) => {
    console.log('onFinish:', values);
    let form_data = new FormData();

    for (let key in values) {
      form_data.append(key, values[key]);
    }
    console.log('formdata:', form_data);
    axios({
      method: 'post',
      url: '/cgi-bin/index.cgi',
      data: form_data,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <Card
      //   className="regForm"
      //   bodyStyle={{ padding: 0, width: 300 }}
      title="Введите код подтверждения">
      <Form
        form={form}
        layout="vertical"
        // requiredMark={false}
        onFinish={onFinish}>
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
