import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to the PBC Linear AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is based on an open source AI chatbot app template.
        </p>
      </div>
    </div>
  )
}
