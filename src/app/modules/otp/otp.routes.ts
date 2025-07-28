import validateRequest from '@app/middleware/validateRequest';
import { Router } from 'express'; 
import { resentOtpValidations } from './otp.validation';
import { otpControllers } from './otp.controller';

const router = Router();

router.post(
  '/verify-otp',
  validateRequest(resentOtpValidations.verifyOtpZodSchema),
  otpControllers.verifyOtp,
);
router.post(
  '/resend-otp',
  validateRequest(resentOtpValidations.resentOtpZodSchema),
  otpControllers.resendOtp,
);

export const otpRoutes = router;
