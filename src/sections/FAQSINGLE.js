import React from "react";

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div classNam="faq-inner">
      <div className="faq-question">{faq.question}</div>
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FAQ;
