import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from '../redux/login/login-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Name
          <input type="name" name="name" value={name} onChange={handleChange} />
        </label>
        <label className="label">
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            pattern="{8}"
            title="Password should be more than 8 characters"
          />
        </label>

        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
