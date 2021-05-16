import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Card: () => import('../../components/card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c)),
  Loader: () => import('../../components/loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c)),
  NavigationBar: () => import('../../components/navigationBar.vue' /* webpackChunkName: "components/navigation-bar" */).then(c => wrapFunctional(c.default || c)),
  Pagination: () => import('../../components/pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c)),
  ProductHeader: () => import('../../components/productHeader.vue' /* webpackChunkName: "components/product-header" */).then(c => wrapFunctional(c.default || c)),
  ProductList: () => import('../../components/productList.vue' /* webpackChunkName: "components/product-list" */).then(c => wrapFunctional(c.default || c)),
  Sequence: () => import('../../components/sequence.vue' /* webpackChunkName: "components/sequence" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
