import getUserDetailsFromToken from "app/helpers/getUserDetailsFromToken";


export const socketAuthMiddleware = async (socket: any, next: any) => {
  try {
    const token =
      socket.handshake.auth?.token || socket.handshake.headers?.token;
    const user = await getUserDetailsFromToken(token);
    if (!user) return next(new Error('Authentication failed'));
    socket.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
