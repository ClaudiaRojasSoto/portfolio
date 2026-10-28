const allowedProtocols = new Set(['https:', 'http:', 'mailto:'])

export function linkOpenProps(url: string) {
  const external = url.startsWith('https://') || url.startsWith('http://')
  return { external, download: !external }
}

export function isSafeUrl(url: string) {
  if (url.startsWith('/') && !url.startsWith('//')) return true

  try {
    return allowedProtocols.has(new URL(url).protocol)
  } catch {
    return false
  }
}
