import { Router } from 'express';
import validateRequest from '../../middleware/validateRequest';
import { otpControllers } from './otp.controller';
import { resentOtpValidations } from './otp.validation';

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
