import { ServerType } from './shared/consts'

const Prefix = { VMESS: 'vmess', SHADOWSOCKS: 'ss' }

export const isVmess = (value: string) => value.startsWith(Prefix.VMESS)
export const isShadowsocks = (value: string) => value.startsWith(Prefix.SHADOWSOCKS)

export const parseVmess = (value: string): ServerConf => {
  const decode = atob(value.replace(`${Prefix.VMESS}://`, ''))
  const conf = JSON.parse(decode)

  return {
    type: ServerType.VMESS,
    options: {
      address: conf.add,
      alterID: conf.aid,
      uuid: conf.id,
      port: conf.port,
      tls: conf.tls,
      type: conf.type,
      net: conf.net,
      remarks: conf.ps
    }
  }
}

export const parseShadowsocks = (value: string): ServerConf => {
  const [encode] = value.replace(`${Prefix.SHADOWSOCKS}://`, '').split('#')
  const [method, server, port] = atob(encode).split(':')
  const [password, address] = server.split('@')

  return {
    type: ServerType.SHADOWSOCKS,
    options: {
      address,
      password,
      method,
      port
    }
  }
}
