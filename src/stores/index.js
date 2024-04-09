import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

// import { useUserStore } from './modules/user'
// export { useUserStore }
// 等于上面两个语句 更简洁 高级
export * from './modules/user' // 接收 user 模块的所有按需导出
