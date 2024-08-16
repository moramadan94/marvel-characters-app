import React from 'react';
import Button from '@components/atoms/Button';
import {LoginFormField} from '@components/molecules';
import {translate} from '@utils/helpers';
import useLogin from '@hooks/useLogin';

function LoginForm() {
  const {handleChange, handleLogin, isLoginButtonDisabled, formData} =
    useLogin();

  return (
    <>
      <LoginFormField
        label={translate('login.username')}
        placeholder={translate('login.userNamePlaceholder')}
        value={formData.username}
        onChangeText={value => handleChange('username', value)}
      />

      <LoginFormField
        label={translate('login.password')}
        placeholder={translate('login.passwordPlaceholder')}
        value={formData.password}
        onChangeText={value => handleChange('password', value)}
        secureTextEntry
      />

      <Button
        disabled={isLoginButtonDisabled}
        title={translate('login.signIn')}
        onPress={handleLogin}
      />
    </>
  );
}

export default LoginForm;
