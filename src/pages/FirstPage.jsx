const FirstPage = () => {
  return (
    <>
      <div className="wrapper">
        <img className="logo" src="/images/logo.jpg" alt="" />
      </div>

      <style jsx>
        {`
          .wrapper {
            background-color: #f78000;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .logo {
            width: 230px;
            height: 75px;
          }
        `}
      </style>
    </>
  );
};

export default FirstPage;
