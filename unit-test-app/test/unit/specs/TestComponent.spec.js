import Vue from 'vue'
import TestComponent from '@/components/TestComponent'

// helper function that mounts and returns the rendered text
function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el.textContent
}

describe('TestComponent.vue', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof TestComponent.created).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default data', () => {
    expect(typeof TestComponent.data).toBe('function')
    const defaultData = TestComponent.data()
    expect(defaultData.message).toBe('hello!')
  })

  // Inspect the component instance on mount
  it('correctly sets the message when created', () => {
    const vm = new Vue(TestComponent).$mount()
    expect(vm.message).toBe('bye!')
  })

  // Mount an instance and inspect the render output
  it('renders the correct message', () => {
    const Ctor = Vue.extend(TestComponent)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).toContain('bye!')
  })

  it('renders correctly with different props', () => {
    expect(getRenderedText(TestComponent, {
      firstParam: 'Test'
    })).toContain('Test')
  })

  // Inspect the generated HTML after a state update
  it('updates the rendered message when vm.message updates', done => {
    const vm = new Vue(TestComponent).$mount()
    vm.message = 'foo'

    // wait a "tick" after state change before asserting DOM updates
    Vue.nextTick(() => {
      expect(vm.$el.textContent).toContain('foo')
      done()
    })
  })

  it('adds a new item to list on click', done => {
    const vm = new Vue(TestComponent).$mount()

    // set value of newItem
    vm.newItem = 'brush my teeth'
    console.log('vm.newItem AFTER', vm.newItem)

    // call addItemToList method
    vm.addItemToList()
    // wait a "tick" after state change before asserting DOM updates
    Vue.nextTick(() => {
      expect(vm.$el.textContent).toContain('brush my teeth')
      done()
    })
  })
})
