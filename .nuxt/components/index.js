import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as Card } from '../../components/card.vue'
export { default as Loader } from '../../components/loader.vue'
export { default as NavigationBar } from '../../components/navigationBar.vue'
export { default as Pagination } from '../../components/pagination.vue'
export { default as ProductHeader } from '../../components/productHeader.vue'
export { default as ProductList } from '../../components/productList.vue'
export { default as Sequence } from '../../components/sequence.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyCard = import('../../components/card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LazyLoader = import('../../components/loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigationBar = import('../../components/navigationBar.vue' /* webpackChunkName: "components/navigation-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyPagination = import('../../components/pagination.vue' /* webpackChunkName: "components/pagination" */).then(c => wrapFunctional(c.default || c))
export const LazyProductHeader = import('../../components/productHeader.vue' /* webpackChunkName: "components/product-header" */).then(c => wrapFunctional(c.default || c))
export const LazyProductList = import('../../components/productList.vue' /* webpackChunkName: "components/product-list" */).then(c => wrapFunctional(c.default || c))
export const LazySequence = import('../../components/sequence.vue' /* webpackChunkName: "components/sequence" */).then(c => wrapFunctional(c.default || c))
