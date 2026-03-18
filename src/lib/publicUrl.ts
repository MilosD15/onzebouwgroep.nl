/** Publika fajlovi na GitHub Pages (basePath) moraju imati prefiks repoa */
export default function publicUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const p = path.startsWith('/') ? path : `/${path}`
  return base ? `${base}${p}` : p
}
