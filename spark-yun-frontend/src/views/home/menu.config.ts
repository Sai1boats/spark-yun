export interface Menu {
  icon: string;
  name: string;
  code: string;
  authType?: Array<string>;
  childPage?: Array<string>
}

// ROLE_SYS_ADMIN
export const menuListData: Array<Menu> = [
  {
    code: 'index',
    name: '首页',
    icon: 'Monitor',
    authType: [ 'ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN' ],
    childPage: []
  },
  {
    code: 'computer-group',
    name: '计算集群',
    icon: 'UploadFilled',
    authType: [ 'ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN' ],
    childPage: ['computer-pointer']
  },
  {
    code: 'datasource',
    name: '数据源',
    icon: 'DataLine',
    authType: [ 'ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN' ],
    childPage: []
  },
  {
    code: 'file-center',
    name: '资源中心',
    icon: 'Paperclip',
    authType: [ 'ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN' ],
    childPage: []
  },
  {
    code: 'workflow',
    name: '作业流',
    icon: 'SetUp',
    authType: [ 'ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN' ],
    childPage: ['workflow-page']
  },
  {
    code: 'custom-func',
    name: '函数仓库',
    icon: 'Mouse',
    authType: [ 'ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN' ],
    childPage: []
  },
  {
    code: 'driver-management',
    name: '驱动管理',
    icon: 'Cpu',
    authType: [ 'ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN' ],
    childPage: []
  },
  {
    code: 'schedule',
    name: '调度历史',
    icon: 'DocumentRemove',
    authType: [ 'ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN' ],
    childPage: []
  },
  {
    code: 'custom-form',
    name: '分享表单',
    icon: 'Share',
    authType: [ 'ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN' ],
    childPage: ['form-list', 'form-query', 'form-setting']
  },
  {
    code: 'custom-api',
    name: '接口服务',
    icon: 'MessageBox',
    authType: [ 'ROLE_TENANT_MEMBER', 'ROLE_TENANT_ADMIN' ],
    childPage: []
  },
  {
    code: 'user-center',
    name: '用户中心',
    icon: 'UserFilled',
    authType: [ 'ROLE_SYS_ADMIN' ],
    childPage: []
  },
  {
    code: 'tenant-list',
    name: '租户列表',
    icon: 'List',
    authType: [ 'ROLE_SYS_ADMIN' ],
    childPage: []
  },
  {
    code: 'tenant-user',
    name: '租户成员',
    icon: 'User',
    authType: [ 'ROLE_TENANT_ADMIN', 'ROLE_SYS_ADMIN' ],
    childPage: []
  },
  {
    code: 'license',
    name: '证书安装',
    icon: 'Files',
    authType: [ 'ROLE_SYS_ADMIN' ],
    childPage: []
  }
]
