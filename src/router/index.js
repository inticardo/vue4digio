import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

let generatedRoutes = [{
  path: '/',
  name: 'HelloWorld',
  component: HelloWorld
}]

let totalSlides = 22
for (let slideNum = 1; slideNum <= totalSlides; slideNum++) {
  let slidePaddedNum = slideNum.toString().padStart(3, '0')
  generatedRoutes.push({
    path: '/slides/slide' + slidePaddedNum,
    name: 'Slide' + slidePaddedNum,
    component: () => import('@/components/slides/Slide' + slidePaddedNum),
    meta: {
      prevSlide: slideNum === 1
        ? '/slides/slide' + totalSlides.toString().padStart(3, '0')
        : '/slides/slide' + (slideNum - 1).toString().padStart(3, '0'),
      nextSlide: slideNum === totalSlides
        ? '/slides/slide001'
        : '/slides/slide' + (slideNum + 1).toString().padStart(3, '0')
    }
  })
}

// generatedRoutes.push({
//   path: '/slides/slide001',
//   name: 'Slide001',
//   component: () => import('@/components/slides/Slide001'),
//   meta: {
//     prevSlide: '/slides/slide019',
//     nextSlide: '/slides/slide002',
//   }
// })
// generatedRoutes.push({
//   path: '/slides/slide002',
//   name: 'Slide002',
//   component: () => import('@/components/slides/Slide002'),
//   meta: {
//     prevSlide: '/slides/slide001',
//     nextSlide: '/slides/slide003',
//   }
// })
// [...]

Vue.use(Router)

export default new Router({
  routes: generatedRoutes
})
