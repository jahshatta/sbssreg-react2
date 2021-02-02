import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput2 from 'react-phone-input-2';
import { useLocation } from 'wouter';
// import countries from "../utils/countries";

// axios.defaults.baseURL = 'http://127.0.0.1';
const TrialForm = () => {
  const [form] = Form.useForm();
  // const { Option } = Select;
  const { TextArea } = Input;
  const [mobile, setMobile] = useState(null);
  const [location, setLocation] = useLocation();

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
  const onValuesChange = (changedValues, allValues) => {
    console.log('changedValues', changedValues);
    console.log('allValues', allValues);
  };
  const onFinish = (values) => {
    console.log('onFinish:', values);
    let form_data = new FormData();

    for (let key in values) {
      console.log('key: ', key);
      console.log('values[key]: ', values[key]);
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
        console.log('response: ', response);
        setLocation('/somewhere/confirm/');
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

    // axios
    //   .post('/cgi-bin/index.cgi', values)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  const onSubmit = (values) => {
    console.log('onSubmit:', values);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark="optional"
      onValuesChange={onValuesChange}
      // requiredMark={false}
      onFinish={onFinish}
      onSubmit={onSubmit}>
      {`The current page is: ${location}`}
      <Form.Item
        label="Company name"
        name="companyname"
        rules={[{ required: true, message: 'Please input company name' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Name"
        name="firstname"
        rules={[{ required: true, message: 'Please input your first name' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Mobile"
        rules={[{ required: true, message: 'Please input your username!' }]}>
        <PhoneInput2
          country={'ru'}
          countryCodeEditable={false}
          inputStyle={{ width: '100%' }}
          inputClass="phone-input"
          value={mobile}
          onChange={(mobile) => setMobile(mobile)}
        />
      </Form.Item>

      <Form.Item label="Comment" name="comment">
        <TextArea />
      </Form.Item>
      <Form.Item name="recaptcha" rules={[{ required: true, message: 'Please input recaptcha' }]}>
        <ReCAPTCHA sitekey="6LdJNScaAAAAAB7_MIEFS16ywetnOsln86efS9DB" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Sign up
      </Button>
    </Form>
  );
};

export default TrialForm;
