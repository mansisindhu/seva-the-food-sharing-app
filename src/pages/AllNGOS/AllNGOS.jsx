import DonateFoodNavbar from "../../components/DonateFoodNavbar";

import NGOCard from "../../components/NGOCard";
import BottomNavbar from "../../components/BottomNavbar";

const AllNGOS = (props) => {
  const { data } = props;

  return (
    <>
      <BottomNavbar />
      <DonateFoodNavbar link="/" />
      <div className="main">
        <h2 className="headline">Choose where you want to donate</h2>
        {data.map((el) => {
          return <NGOCard data={el} />;
        })}
      </div>

      <style jsx>
        {`
          .main {
            background-color: white;
            height: 100%;
            padding: 22px;
            margin: 54px 0;
          }

          .headline {
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            text-align: center;
            margin-bottom: 22px;
          }
        `}
      </style>
    </>
  );
};

export default AllNGOS;
