import React, { Component } from "react";
import PropTypes from "prop-types";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    console.log(this.props);
    const {
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
    } = steps;

    this.setState({
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
    });
  }

  render() {
    const {
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
    } = this.state;
    let txt = "";

    if (
      question1.value == "yes" &&
      question2.value == "yes" &&
      question3.value == "yes" &&
      question7.value == "yes" &&
      question8.value == "yes"
    ) {
      txt = "คุณเป็นโควิด19";
    }else if(
        question1.value == "yes" &&
    question2.value == "yes" &&
    question6.value == "yes" &&
    question7.value == "yes"
    ){
        txt='คุณเป็นไข้หวัดทั่วไป';
    }else if (
        question1.value == "yes" &&
        question2.value == "yes" &&
        question3.value == "yes" &&
        question5.value == "yes" &&
        question6.value == "yes" 
    ){
        txt='คุณเป็นไข้เลือดออก';
    }
    return (
      <div style={{ width: "100%" }}>
        <h3>วิเคราหะ์อาการป่วย</h3>
        <table>
          <tbody>
            <tr>
              <td>ไข้สูง {">"} 37.5°C</td>
              <td>{question1.value}</td>
            </tr>
            <tr>
              <td>เจ็บคอ หรือมีน้ำมูกไหม (มีอาการหลายวัน,เสมหะอาจมีปนเลือด)</td>
              <td>{question2.value}</td>
            </tr>
            <tr>
              <td>ท้องเสียไหม</td>
              <td>{question3.value}</td>
            </tr>
            <tr>
              <td>คลื่นไส้อาเจียนไหม</td>
              <td>{question4.value}</td>
            </tr>
            <tr>
              <td>เลือดออกตามผิวหนังไหม</td>
              <td>{question5.value}</td>
            </tr>
            <tr>
              <td>ปวดเมื่อยไหม</td>
              <td>{question6.value}</td>
            </tr>
            <tr>
              <td>หายใจลำบาก</td>
              <td>{question7.value}</td>
            </tr>
            <tr>
              <td>ปอดอักเสบ</td>
              <td>{question8.value}</td>
            </tr>
          </tbody>
        </table>
        <h3>{txt}</h3>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
