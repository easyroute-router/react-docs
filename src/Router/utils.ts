import axios from 'axios'

export async function fetchSlugMarkdown(slug: string): Promise<any> {
  const requested = await axios.get(`/texts/${slug}.md`)
  return requested.data
}
