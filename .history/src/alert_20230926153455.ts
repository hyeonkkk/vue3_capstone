import VueSweetalert2 from 'vue-sweetalert2'

export function InstallConfirm(app: any) {
  app.config.globalProperties.swal = app.use(VueSweetalert2)
}
