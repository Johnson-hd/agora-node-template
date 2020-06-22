import axios from 'axios'

import config from '../../config'

/**
 * 机器人发送企业微信消息
 */
export const sendEnterpriseWxMsgByRobot = async (options: any) => {
  await axios.request({
    method: 'POST',
    url: config.enterpriseWx.url,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      msgtype: 'text',
      text: {
        content: `the content what you want to send eg: ${options}`,
        mentioned_mobile_list: config.enterpriseWx.mentionedMobileList,
      },
    },
  })
}
