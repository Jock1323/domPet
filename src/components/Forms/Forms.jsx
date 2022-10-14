import React from "react";
import "./forms.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
function Forms({ title }) {
  return (
    <>
      <section className="forms">
        <div className="forms__inner">
          <h2 className="forms__title">Form step</h2>
          <div className="forms__line" />
          <div className="forms__circles">
            <span className="forms__circle">1</span>
            <span className="forms__circle">1</span>
            <span className="forms__circle">1</span>
            <span className="forms__circle">1</span>
            <div className="forms__circle-line"></div>
          </div>
          <div className="forms__route">
            <div className="forms__wraper">
              <Input className="forms__input" placeholder="Parslay">
                First Name
              </Input>
              <Input className="forms__input" placeholder="Montana">
                Last name
              </Input>
              <Input className="forms__input" placeholder="example@example.com">
                Email Address
              </Input>
              <Input className="forms__input" placeholder="+999890123456789">
                Phone number
              </Input>
            </div>
            <Input
              className="forms__input-changed"
              placeholder="+999890123456789"
            >
              Where are you from
            </Input>
          </div>
          <div className="forms__btns">
            <Button className="forms__btn">Next</Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forms;
