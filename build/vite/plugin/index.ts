import type { Plugin } from 'vite'
import type { ViteEnv } from '../../utils'

import vue from '@vitejs/plugin-vue'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [vue()]

  return vitePlugins
}
