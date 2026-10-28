const allowedProtocols = new Set(['https:', 'http:', 'mailto:'])

export function isSafeUrl(url: string) {
  if (url.startsWith('/') && !url.startsWith('//')) return true

  try {
    return allowedProtocols.has(new URL(url).protocol)
  } catch {
    return false
  }
}
