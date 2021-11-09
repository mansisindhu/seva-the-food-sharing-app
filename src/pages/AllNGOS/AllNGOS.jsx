import DonateFoodNavbar from "../../components/DonateFoodNavbar";

import NGOCard from "../../components/NGOCard";

const AllNGOS = (props) => {
  const { data } = props;

  return (
    <>
      <div className="main">
        <DonateFoodNavbar link={""} />
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
            padding: 23px;
          }

          .headline {
            font-weight: 600;
            font-size: 18px;
            line-height: 27px;
            text-align: center;
            margin-bottom: 36px;
          }
        `}
      </style>
    </>
  );
};

export default AllNGOS;
