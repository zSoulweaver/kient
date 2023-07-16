import { Kient } from 'kient'

(async () => {
  const client = new Kient()
  await client.api().channel.getBans('channel')
})()
