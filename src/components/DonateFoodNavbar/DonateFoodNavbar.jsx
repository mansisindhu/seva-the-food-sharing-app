import { Link } from "react-router-dom";

import { RiArrowLeftSLine } from "react-icons/ri";

const DonateFoodNavbar = ({ link }) => {
  return (
    <>
      <div className="navbar">
        <Link className="link" to={link}>
          <RiArrowLeftSLine className="icon" />
        </Link>
        <p className="heading">Donate Food</p>
      </div>

      <style jsx>
        {`
          .navbar {
            padding: 22px;
            background-color: white;
            display: flex;
            align-items: center;
            gap: 70px;
            margin-bottom: 41px;
            position: fixed;
            top: 0;
            width: 414px;
            z-index: 1;
          }

          .link {
            font-weight: 600;
            font-size: 30px;
            line-height: 22px;
            color: black;
          }

          .heading {
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
          }
        `}
      </style>
    </>
  );
};

export default DonateFoodNavbar;
