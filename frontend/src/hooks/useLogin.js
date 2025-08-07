import { login } from '../lib/api';
import { QueryClient, useMutation } from '@tanstack/react-query';

const useLogin = () => {
  const {mutate, isPending, error} = useMutation({
    mutationFn: login,
    onSuccess: () => QueryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  return {error, isPending, loginMutation: mutate}
}

export default useLogin
