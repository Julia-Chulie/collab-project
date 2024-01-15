import { useAuthStore } from "../../../../../zizou-4-ever/client/src/components/Features/user/store/authStore.js";

export const AuthGuardService = (to, from, next) => {
  const authStore = useAuthStore();
  if (authStore.isAuthenticated) {
    next();
  } else {
    next('/login');
  }
};