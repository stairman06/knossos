// See plugins/shorthands.js
import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $capitalizeString(name: string): string
  }
}
