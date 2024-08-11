import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { isPending, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      // console.log(user);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
  });

  return { isPending, signup };
}
