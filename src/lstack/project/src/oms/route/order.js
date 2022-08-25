import { route } from '../../constructor'
import { Index } from './oms-index'

export const OrderManage = route('OrderManage', '订单管理', 'order-manage', {}, Index)
export const OrderSetting = route('OrderSetting', '订单设置', 'order-setting', {}, OrderManage)
export const AddOfflineOrder = route('AddOfflineOrder', '新增线下订单', 'add-offline-order', {}, OrderManage)
