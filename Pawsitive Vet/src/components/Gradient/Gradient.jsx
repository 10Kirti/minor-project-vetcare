function Gradient() {
  return (
    <>
      <div className="gradient-background py-2">
        <div className="container m-auto">
          <div className="flex justify-between items-center">
            {/* left-content  */}
            <div className="text-white">
              <ul className="flex items-center justify-center gap-5">
                <li>
                  <a href="#">
                    <i className="bi bi-telephone-fill"></i>
                     +9779861076071
                  </a>
                </li>
                <li>
                    <a href="#"><i className="bi bi-envelope"></i> infopawsitive@.com</a>
                </li>
              </ul>
            </div>
            {/* right-content  */}
            <div className="text-white">
                <ul className="flex justify-between items-center gap-5">
                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="#"><i className="bi bi-twitch"></i></a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gradient;
