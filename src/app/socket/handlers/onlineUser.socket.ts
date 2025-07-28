import { pubClient } from '@app/redis';

export const getOnlineUserIds = async () => {
  const userIds = await pubClient.hKeys('userId_to_socketId');
  return userIds;
};
