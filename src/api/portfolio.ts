import type { ContentData } from '@/composables/usePortfolio'
import { apiGet } from './client'

export async function fetchContent(lang: string): Promise<ContentData> {
  return apiGet<ContentData>(`/content/${lang}`)
}
