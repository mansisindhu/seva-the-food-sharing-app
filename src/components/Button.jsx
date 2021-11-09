const Button = ({ text }) => {
  return (
    <>
      <a className="button" href="">
        {text}
      </a>

      <style jsx>
        {`
          .button {
            background: #fb7e00;
            border-radius: 10px;
            text-decoration: none;
            color: white;
            font-weight: 500;
            padding: 8px 130px;
          }
        `}
      </style>
    </>
  );
};

export default Button;
