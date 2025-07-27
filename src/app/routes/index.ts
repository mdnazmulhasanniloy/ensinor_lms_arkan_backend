import { Router } from 'express';
import { userRoutes } from '../modules/users/users.routes';
import { otpRoutes } from '../modules/otp/otp.routes';
import { authRoutes } from 'app/modules/auth/auth.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/otp',
    route: otpRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
