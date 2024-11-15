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

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setHasCopied(true)
    toast.success('Code copied to clipboard!')
    setTimeout(() => setHasCopied(false), 2000)
  }

  return (
    <div className="relative my-4 rounded-lg bg-black/90 p-4 text-green-600">
      <div className="absolute right-4 top-3 flex flex-row">
        <button
          onClick={copyToClipboard}
          className="rounded-md bg-background p-2 hover:bg-muted-foreground/10"
        >
          {hasCopied ? (
            <Check className="h-4 w-4 text-green-600" />
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
