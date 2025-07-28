import { pubClient } from '@app/redis';
import { Server } from 'socket.io';

export const getOnlineUserIds = async (io: Server) => {
  const userIds = await pubClient.hKeys('userId_to_socketId');
  io.emit('onlineUsersList', userIds);
};
