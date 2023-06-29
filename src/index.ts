import { loadConfig } from 'c12'
import { ofetch } from 'ofetch'
import { isShadowsocks, isVmess, parseShadowsocks, parseVmess } from './shared'

const main = async () => {
  const { config } = await loadConfig<OsubConf>({ name: 'osub' })

  if (!config) { return }

  const servers = (await Promise.all(config.subscriptions.map(async (sub) => {
    const res = await ofetch(sub)
    return atob(res).split(/[\n\r]/).filter(Boolean)
  }))).flat().map((server) => {
    if (isVmess(server)) { return parseVmess(server) }
    if (isShadowsocks(server)) { return parseShadowsocks(server) }
    return undefined
  }).filter(Boolean)

  return servers
}

// main()

export default main
