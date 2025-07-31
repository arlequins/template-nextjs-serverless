const env = {
  stage: process.env.NEXT_PUBLIC_ENVIRONMENT!,
  api: {
    common: {
      uri: 'uri',
      key: 'key',
    }
  }
}

export const enum EnvStage {
  TEST = 'test',
  OFFLINE = 'offline',
  DEVELOP = 'develop',
  PRODUCTION = 'production',
}

export default env;
