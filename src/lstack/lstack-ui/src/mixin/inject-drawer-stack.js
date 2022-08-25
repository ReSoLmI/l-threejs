export default {
  name: 'InjectDrawerStack',
  inject: {
    getDrawerStack: { default: '' },
    openDrawer: { default: '' },
    popTopDrawer: { default: '' },
    popDrawer: { default: '' },
    isDrawerStackEmpty: { default: false },
    pIsDrawerStack: { default: false },
  },
}
