import Vue from 'vue'
import TestComponent from '@/components/TestComponent'

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
    expect(vm.$el.textContent).toBe('bye!')
  })
})
