import * as jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import AppError from '../error/AppError';
import config from '../config';
import prisma from 'app/shared/prisma';

const getUserDetailsFromToken = async (token: string) => {
  if (!token) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'you are not authorized!');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decode: any = await jwt.verify(
    token,
    config.jwt_access_secret as string,
  );
  const user = await prisma.user.findFirst({
    where: { id: decode?.userId },
    include: {
      verification: {
        select: {
          status: true,
        },
      },
    },
  });

  // User.findById(decode.userId).select('-password');
  return user;
};

export default getUserDetailsFromToken;
