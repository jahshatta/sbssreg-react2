import { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput2 from "react-phone-input-2";
import PhoneInput from "react-phone-number-input";
// import countries from "../utils/countries";

const TrialForm = () => {
  const [form] = Form.useForm();
  // const { Option } = Select;
  const { TextArea } = Input;
  const [entity, setEntity] = useState(1);
  const [mobile, setMobile] = useState(null);

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
  let captcha;
  const onValuesChange = (changedValues, allValues) => {
    console.log("changedValues", changedValues);
    console.log("allValues", allValues);
  };
  const onEntityChange = (e) => {
    console.log("onEntityChange", e.target.value);
    setEntity(e.target.value);
    captcha.reset();
  };
  const onFinish = (values) => {
    console.log("onFinish:", values);
  };
  const onSubmit = (values) => {
    console.log("onSubmit:", values);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ entity }}
      requiredMark="optional"
      onValuesChange={onValuesChange}
      // requiredMark={false}
      onFinish={onFinish}
      onSubmit={onSubmit}
    >
      <Form.Item
        name="entity"
        onChange={onEntityChange}
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Radio.Group name="radiogroup">
          <Radio value={1}>Legal entity</Radio>
          <Radio value={2}>Individual person</Radio>
        </Radio.Group>
      </Form.Item>
      {entity == 1 && (
        <Form.Item
          label="Company name"
          name="companyname"
          rules={[{ required: true, message: "Please input company name" }]}
        >
          <Input />
        </Form.Item>
      )}
      <Form.Item
        label="First name"
        name="firstname"
        rules={[{ required: true, message: "Please input your first name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="mobile2"
        label="Mobile"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <PhoneInput2
          country={"ru"}
          countryCodeEditable={false}
          inputStyle={{ width: "100%" }}
          inputClass="phone-input"
          value={mobile}
          onChange={(mobile) => setMobile(mobile)}
        />
      </Form.Item>

      <Form.Item label="Comment" name="comment">
        <TextArea />
      </Form.Item>
      <Form.Item
        name="recaptcha"
        rules={[{ required: true, message: "Please input recaptcha" }]}
      >
        <ReCAPTCHA
          sitekey="6LdJNScaAAAAAB7_MIEFS16ywetnOsln86efS9DB"
          ref={(el) => {
            captcha = el;
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TrialForm;
