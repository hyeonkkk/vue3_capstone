export const getUniqueId = (length = 16): string => {
  return Math.ceil(Math.random() * Date.now()).toPrecision(length).toString().replace('.', '')
}

const check = ref(false)
export const isOpen = (click?: boolean): boolean => {
  if (click !== undefined)
    check.value = click
  return check.value
}
