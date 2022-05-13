import type { Component, App } from 'vue';

//组件map
export const maps = new Map<String, Component>();

// 引入组件
import { VbenPopover } from './popover';
import { VbenDivider } from './divider';
import { VbenTag } from './tag';
import { VbenTable } from './table';
import { VbenCard } from './card';
import { VbenSpace } from './space';
import { VbenButton } from './button';

// 初始化组件
// global 是否全局注册
export function initVbenComponent(app: App, comp: Object, global: boolean = true) {
  Object.keys(comp).forEach((k) => {
    maps.set(k, comp[k]);
  });
  if (!global) return;
  app
    .use(VbenCard)
    .use(VbenTable)
    .use(VbenTag)
    .use(VbenDivider)
    .use(VbenSpace)
    .use(VbenPopover)
    .use(VbenButton);
}
