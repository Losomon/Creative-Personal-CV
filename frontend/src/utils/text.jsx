export function formatEmail(email) {
  return (
    <a href={`mailto:${email}`} className="text-link">
      {email}
    </a>
  )
}

export function formatUrl(url) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-link">
      {url}
    </a>
  )
}

export function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '')
}
