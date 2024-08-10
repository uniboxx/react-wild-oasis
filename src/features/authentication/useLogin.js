import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../services/apiAuth.js';
import toast from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      // console.log(user);
      navigate('/dashboard');
    },
    onError: err => {
      console.log('ERROR', err);
      toast.error('Provided email or passowrd are incorrect');
    },
  });

  return { login, isLoading };
}
