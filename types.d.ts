interface SshConf {
  address: string
  port?: number
  username: string
  password: string
}

interface OsubConf {
  subscriptions: string[]
  ssh?: SshConf
  v2ray?: string
  clash?: string
}

interface ServerConf {
  type: 'vmess' | 'shadowsocks' | 'trojan'
  options: VmessConf | ShadowocksConf | TrojanConf
}

interface VmessConf {
  address: string
  port: string
  uuid: string
  alterID: string
  remarks: string
  tls: string
  type: string
  net: string
}

interface ShadowocksConf {
  address: string
  port: string
  password: string
  method: string
}

interface TrojanConf {}