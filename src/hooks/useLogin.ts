import {AppDispatch} from '@store/index';
import {login} from '@store/slices/authSlice';
import {saveAuthState} from '@store/slices/authThunks';
import {useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';

const useLogin = () => {
  const [formData, setFormData] = useState({username: '', password: ''});
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (name: string, value: string) => {
    setFormData({...formData, [name]: value});
  };

  const handleLogin = async () => {
    const {username, password} = formData;
    try {
      if (username && password) {
        await dispatch(saveAuthState(username));
        await dispatch(login({username}));
      }
    } catch (error) {
    } finally {
    }
  };

  const isLoginButtonDisabled = useMemo(
    () => !formData.username || !formData.password,
    [formData.username, formData.password],
  );

  return {handleChange, handleLogin, isLoginButtonDisabled, formData};
};

export default useLogin;
