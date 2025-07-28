import { createClient } from 'redis';
import colors from 'colors';

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

const pubClient = createClient({ url: redisUrl });
const subClient = pubClient.duplicate();

const connectRedis = async () => {
  await Promise.all([pubClient.connect(), subClient.connect()]);
  console.log(colors.blue.bold('✨ Connected to Redis server'));
};

export { pubClient, subClient, connectRedis };
