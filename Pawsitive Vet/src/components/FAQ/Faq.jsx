import React, { useState } from "react";
import girlwithdog from "../../assets/Images/girlwithdog.png";

const FAQ = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqs = [
    {
      question: " What types of pet toys do you sell?",
      answer: "We offer a wide range of toys, including chew toys, interactive toys, plush toys, and more for dogs, cats, and small animals.",
    },
    {
      question: "Are your pet toys safe? ",
      answer:
        "Yes, all our toys are made from non-toxic materials and are safe for pets.",
    },
    {
      question: "Do you sell food and treats?",
      answer:
        "Yes, we carry a variety of high-quality pet foods and treats for different dietary needs.",
    },
    {
      question: " Do you offer products for specific health conditions?",
      answer:
        "Yes, we have a range of products for specific health needs, such as dental care, joint support, and sensitive stomachs.",
    },
    {
      question: " Can I return or exchange pet supplies? ",
      answer:
        "Yes, returns and exchanges are accepted within 30 days of purchase with a receipt.",
    },
    {
      question: " Do you offer delivery services for pet supplies?",
      answer:
        "Yes, we offer delivery services within a certain radius from our shop. Please check our website for more details.",
    },
  ];

  return (
    <>
      <div className="py-12">
        <div className="container mx-auto p-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-xl">
            Comprehensive care for your beloved pets, ensuring their health and happiness every step of the way.
            </p>
          </div>
          <div className="flex gap-5 items-center justify-center">
            <div className="basis-[60%] ">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 py-2 px-2 transition-all">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full text-left focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-indigo-500"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">{faq.question}</h3>
                        <span>
                          {openQuestionIndex === index ? (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          )}
                        </span>
                      </div>
                    </button>
                    {openQuestionIndex === index && (
                      <p className="mt-2 text-gray-600">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-[40%]">
              <img
                src={girlwithdog}
                alt="faq"
                className="w-[100%] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
