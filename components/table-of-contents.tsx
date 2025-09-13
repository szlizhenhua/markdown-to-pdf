"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { List } from "lucide-react"

interface TableOfContentsProps {
  headings: Array<{ id: string; text: string; level: number }>
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const handleHeadingClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (headings.length === 0) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <List className="h-5 w-5" />
          Table of Contents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-1">
          {headings.map((heading, index) => (
            <button
              key={`${heading.id}-${index}`}
              onClick={() => handleHeadingClick(heading.id)}
              className={`
                block w-full text-left text-sm hover:text-primary transition-colors
                ${heading.level === 1 ? "font-semibold" : ""}
                ${heading.level === 2 ? "ml-2" : ""}
                ${heading.level === 3 ? "ml-4" : ""}
                ${heading.level === 4 ? "ml-6" : ""}
                ${heading.level === 5 ? "ml-8" : ""}
                ${heading.level === 6 ? "ml-10" : ""}
              `}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}
