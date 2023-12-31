import React from "react";

const Header = function ({children}) {
  return (
    <>
      <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,224L34.3,224C68.6,224,137,224,206,192C274.3,160,343,96,411,85.3C480,75,549,117,617,165.3C685.7,213,754,267,823,288C891.4,309,960,299,1029,250.7C1097.1,203,1166,117,1234,90.7C1302.9,64,1371,96,1406,112L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
      <h1 className="text-center">
      {children}
      </h1>
    </>
  );
}

export default Header;