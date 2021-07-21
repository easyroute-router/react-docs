import React, { ReactElement, useEffect, useRef, useState } from 'react'
import MarkdownIt from 'markdown-it'
// @ts-ignore
import useCurrentRoute from '@easyroute/react/useCurrentRoute'

function MarkdownPage(): ReactElement {
  const [content, setContent] = useState('')
  const currentRoute = useCurrentRoute()

  const md = new MarkdownIt()
  if (!currentRoute) return <>Loading...</>

  const textContent: string = (currentRoute.meta?.pageText as string) ?? ''
  const renderedContent = md.render(textContent)

  useEffect(() => {
    if (!renderedContent) return
    setContent(renderedContent)
  }, [renderedContent])

  return <article dangerouslySetInnerHTML={{ __html: content }} />
}

export default MarkdownPage
