import doggang from "../../assets/Images/doggang.png";
function FifthBlogDetails() {
  return (
    <>
      <div className="py-12">
        <div className=" container w-[80%] m-auto">
          <div className="w-[80%] m-auto">
            <img src={doggang} alt="doggang" />
          </div>
          <div className="px-12 py-12">
            <h2 className="text-4xl font-bold font-custom_font mb-10 text-center">
            Senior Pet Care: How to Support Aging Animals
            </h2>
            <p className="text-2xl text-gray-600">
            As pets age, they require special attention and care to ensure their well-being and quality of life. Here are key points to help support your aging animal:
            </p>
           
            <div className="mt-11">
                <h2>
                    1. Regular Vet Check-Ups

                </h2>
                <p>
                    <ul>
                        <li>Schedule bi-annual veterinary visits.</li>
                        <li>Monitor for age-related conditions such as arthritis, dental issues, and heart disease.</li>
                    </ul>
                </p>
                <h2>
                2. Balanced Diet
                </h2>
                <p>
                    <ul>
                        <li>Provide a diet tailored to senior pets</li>
                        <li>Consider food with joint supplements, like glucosamine and chondroitin.</li>
                    </ul>
                </p>
                <h2>
                Maintain a Healthy Weight
                </h2>
                <p>
                    <ul>
                        <li>
                        Prevent obesity by monitoring food intake and ensuring regular exercise.
                        </li>
                        <li>
                        Adjust calorie intake to match their activity level.
                        </li>
                    </ul>
                </p>
                <h2>
                4. Exercise and Mental Stimulation
                </h2>
                <p>
                    <ul>
                        <li>
                        Encourage gentle, regular exercise to maintain muscle tone and joint health.
                        </li>
                        <li>
                        Provide mental stimulation through interactive toys and puzzles.
                        </li>
                    </ul>
                </p>
                <h2>
                5. Comfortable Living Environment
                </h2>
                <p>
                  <ul>
                    <li>Ensure a warm, comfortable sleeping area.</li>
                    <li>Use orthopedic beds to support aging joints.</li>
                  </ul>
                </p>
            </div>
            
            <div>
              <h2>Conclusion</h2>
              <p>
              Caring for a senior pet involves patience and attentive care. By following these steps, you can help ensure your aging companion enjoys a comfortable and happy life.

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FifthBlogDetails;
