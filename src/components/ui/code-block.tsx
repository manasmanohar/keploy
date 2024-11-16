'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { toast } from 'sonner'

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator?.clipboard) {
        await navigator.clipboard.writeText(text)
        setHasCopied(true)
        toast.success('Code copied to clipboard!')
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        try {
          document.execCommand('copy')
          setHasCopied(true)
          toast.success('Code copied to clipboard!')
        } catch (err) {
          toast.error('Failed to copy code')
          console.error('Fallback: Failed to copy', err)
        }
        document.body.removeChild(textArea)
      }
      setTimeout(() => setHasCopied(false), 2000)
    } catch (err) {
      toast.error('Failed to copy code')
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="relative my-4 rounded-lg bg-black/90 p-4 text-green-600">
      <div className="absolute right-4 top-3 flex flex-row">
        <button
          onClick={() => copyToClipboard(code)}
          className="black/90 rounded-md p-2 hover:bg-muted-foreground/10"
        >
          {hasCopied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
      <pre className="overflow-x-auto">
        <code className={`language-${language} text-md`}>{code}</code>
      </pre>
    </div>
  )
}
