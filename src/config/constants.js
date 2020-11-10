/**
 * localStorage item keys
 */
export const LS_KYES = {
  // user basic info
  USER: 'USER_INFO',
  // auth token
  TOKEN: 'AUTH_TOKEN',
  // spaces
  SPACES: 'SPACES',
  // space
  SPACE: 'SPACE',
  // project
  PROJECT: 'PROJECT',
  // activeName
  ACTIVE: 'ACTIVE',
};

// 数据集类型常量
export const DATASET_TYPE = {
  STRUCTURE: 'structured',
  UNSTRUCTURE: 'unstructured',
};

// 训练状态常量集合表(后端可能返回的所有训练状态)
export const TRAIN_TYPE = {
  FAIL: 'failed',
  DONE: 'completed',
  RUN: 'running',
  READY: 'ready',
  STOP: 'stopping',
  CREATE: 'creating',
  PENDING: 'pending',
  INSUFFICIENT: 'insufficient',
};

// 算法工作台状态常量集合表（后端可能返回的所有算法工作台状态）
export const WORKBENCH_TYPE = {
  RUNNING: 'running',
  CREATING: 'creating',
  STOP: 'stop',
  FAIL: 'fail',
  INSUFFICIENT: 'insufficient',
};

// 服务状态常量集合表（后端可能返回的所有服务状态）
export const SERVING_TYPE = {
  RUNNING: 'running',
  CREATING: 'creating',
  STOP: 'stop',
  FAIL: 'fail',
  INSUFFICIENT: 'insufficient',
};

// 所有列表页均有两个展示模式
export const DISPLAY_MODE = {
  GRID: 'GRID',
  LIST: 'LIST',
};

// 左侧导航栏列表
export const MENU_LIST = {
  LIST: [
    {
      name: '概览',
      class: 'icon-board',
      code: 'Homepage',
    },
    {
      name: '列表',
      class: 'icon-list',
      code: 'MeetingList',
    },
  ],
};
