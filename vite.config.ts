import type { UserConfig, ConfigEnv } from 'vite'

import { loadEnv } from 'vite'
import { resolve } from 'path'

import { wrapperEnv } from './build/utils'

import { createVitePlugins } from './build/vite/plugin'

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd() // 输出：/Users/xes/Desktop/vue-antd-admin

  const env = loadEnv(mode, root)

  // 通过 loadEnv 获取到的环境变量 value 值是字符串，对于 Boolean 和 Number 类型，需要做类型转换
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT } = viteEnv

  const isBuild = command === 'build'

  return {
    server: {
      port: VITE_PORT,
    },

    plugins: createVitePlugins(viteEnv, isBuild),
  }
}
