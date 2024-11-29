'use client'

/**
 * Integração do utterances para o blog
 * É uma biblioteca de comentários para o blog
 * ela integra o github issues para criar issues em forma de comentários facilitando assim o desenvolvimento
 */

import { useEffect, useRef } from 'react'

export function Comments() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (document.getElementById('utterances') !== null) {
      return
    }

    const scriptElement = document.createElement('script')
    scriptElement.id = 'utterances'
    scriptElement.async = true
    scriptElement.crossOrigin = 'anonymous'
    scriptElement.src = 'https://utteranc.es/client.js'

    scriptElement.setAttribute('issue-term', 'pathname')
    scriptElement.setAttribute('label', 'comment')
    scriptElement.setAttribute('repo', 'ClemilsonAzevedo/oasis-blog')
    scriptElement.setAttribute('theme', 'github-light')

    ref.current?.appendChild(scriptElement)
  }, [])

  return <div ref={ref} />
}
