export default function publicUrl(path: string) {
  // Return a relative URL so the same static export can work at:
  // - `https://domain.com/`
  // - `https://domain.com/<repo>/`
  return path.startsWith('/') ? path.slice(1) : path
}
