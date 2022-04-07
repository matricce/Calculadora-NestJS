import { get } from 'env-var';

export const projectConfig = {
  // indexerIntervalMs: get('INDEXER_INTERVAL_MS').required().asInt(),
  api: {
    prefix: 'api',
    version: 'v2',
    port: get('API_PORT').asPortNumber() || 3000,
  },
};

export const apiGlobalPrefix = `${projectConfig.api.prefix}/${projectConfig.api.version}`;
