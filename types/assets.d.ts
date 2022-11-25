declare module '*.svg?inline' {
  import { SVGAttributes } from 'vue/types/jsx'
  const component: import('vue').Component<never, never, never, SVGAttributes>
  export default component
}
