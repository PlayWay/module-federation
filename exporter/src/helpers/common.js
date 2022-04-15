/**
 * Автонажатие на кнопку "Выполнить"
 * @returns {Promise<void>}
 */
export const commitWorking = async () => {
  if (window.load) {
    // //перезагружаем Log
    // window.setMajor('10')
    window.load('profile/profile.jsp', {
      container: 'workingProfileContainer',
      type: 'working',
      serviceId: 'null'
    }, 'workingProfileContainer', () => {
      const commitWorkingButton = document.getElementById('commitWorkingButton')
      commitWorkingButton.click()
    })
  }
}
/**
 * Заполняет значение из формы действия в сессии
 * @param id
 * @param value
 * @returns {Promise<void>}
 */
export const querySetProfileValue = async (id,value) => {
  if (!window.load) {
    return
  }
  const prom = new Promise((res) => {
    window.load('jsp/session.jsp', {
      method: 'setProfileValue',
      type: 'working',
      idx: 0,
      id,
      valueIdx: null,
      value
    }, null, () => {res()})
  })
  return await prom
}
/**
 * Перезагрузка профиля действия
 * @returns {Promise<unknown>}
 */
export const reloadProfile = async (container='workingProfileContainer',type='working',onLoad = window.profilePostLoad,serviceId=null) => {
  const prom = new Promise((res) => {
    window.load('profile/profile.jsp', {
      container,
      type,
      serviceId
    }, container, () => {
      if (onLoad) onLoad()
      res()
    })
  })

  return await prom
}
/**
 * Перезагрузка история заявки
 * @returns {Promise<void>}
 */
export const reloadActionsHistory = async () => {
  //перезагружаем Log
  window.setMajor('10')
}
/**
 * Устанавливает значение поля в профиле действия
 * @param fieldObj {type,list_id}
 * @param value
 * @returns {Promise<boolean>}
 */
export const setProfileValue = async ({field,value=''}) => {
  if (!field) {
    console.log('не передан параметр profile_params',field)
    return false
  }

  const {type,list_id} = field
  const id = `${type}_${list_id}`
  const DOM_field = document.getElementById(id)

  if (!DOM_field) {
    console.log(`Не найдён DOM элемент с id: ${id}`)
    return false
  }
  DOM_field.value=value
  await querySetProfileValue(list_id,value)
  return true
}
