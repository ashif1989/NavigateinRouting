import { useNavigate } from "react-router-dom";

const Login = ({ handleOnChange }) => {
  const navigate = useNavigate();

  let handleChange = (e) => {
    handleOnChange(e.target.value);
  };

  let handleClick = () => {
    navigate("/welcome");
  };

  return (
    <form>
      <label>Username</label>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={handleClick}>Login</button>
    </form>
  );
};

export default Login;
