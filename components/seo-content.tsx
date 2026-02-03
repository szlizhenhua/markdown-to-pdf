"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileJson, Zap, Lock } from 'lucide-react'
import { useLocale } from '@/lib/locales/client'

export function SeoContent() {
  const t = useLocale()

  return (
    <div className="container mx-auto max-w-6xl space-y-20 px-4 py-16">
      {/* Features Section */}
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-background via-background to-muted/60 px-6 py-12 shadow-[0_24px_80px_-60px_rgba(8,20,14,0.45)] md:px-10">
        <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 left-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t.seoContent.whyChooseUs.label}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {t.seoContent.whyChooseUs.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.seoContent.whyChooseUs.subtitle}
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="border-white/60 bg-card/85 backdrop-blur-xl shadow-[0_18px_50px_-32px_rgba(8,20,14,0.45)]">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Lock className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-lg font-semibold">{t.seoContent.whyChooseUs.features.privacy.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {t.seoContent.whyChooseUs.features.privacy.description}
              </CardContent>
            </Card>

            <Card className="border-white/60 bg-card/85 backdrop-blur-xl shadow-[0_18px_50px_-32px_rgba(8,20,14,0.45)]">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Zap className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-lg font-semibold">{t.seoContent.whyChooseUs.features.instant.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {t.seoContent.whyChooseUs.features.instant.description}
              </CardContent>
            </Card>

            <Card className="border-white/60 bg-card/85 backdrop-blur-xl shadow-[0_18px_50px_-32px_rgba(8,20,14,0.45)]">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15">
                    <FileJson className="h-5 w-5" />
                  </span>
                  <CardTitle className="text-lg font-semibold">{t.seoContent.whyChooseUs.features.richSupport.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {t.seoContent.whyChooseUs.features.richSupport.description}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="relative overflow-hidden rounded-3xl border bg-muted/40 px-6 py-12 md:px-10">
        <div className="pointer-events-none absolute -top-20 left-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t.seoContent.howToConvert.label}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {t.seoContent.howToConvert.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.seoContent.howToConvert.subtitle}
            </p>
          </div>
          <div className="space-y-4 text-base">
            <div className="rounded-2xl border bg-background/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/20">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t.seoContent.howToConvert.steps.step1.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.seoContent.howToConvert.steps.step1.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-background/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/20">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t.seoContent.howToConvert.steps.step2.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.seoContent.howToConvert.steps.step2.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border bg-background/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/20">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t.seoContent.howToConvert.steps.step3.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.seoContent.howToConvert.steps.step3.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {t.seoContent.faq.label}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {t.seoContent.faq.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold">{t.seoContent.faq.items.isFree.question}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.seoContent.faq.items.isFree.answer}
            </p>
          </div>
          <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold">{t.seoContent.faq.items.dataStorage.question}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.seoContent.faq.items.dataStorage.answer}
            </p>
          </div>
          <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold">{t.seoContent.faq.items.mathSupport.question}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.seoContent.faq.items.mathSupport.answer}
            </p>
          </div>
          <div className="rounded-2xl border bg-card/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold">{t.seoContent.faq.items.diagrams.question}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.seoContent.faq.items.diagrams.answer}
            </p>
          </div>
        </div>
      </section>

      {/* Content for AdSense Value */}
      <section className="prose prose-lg max-w-none text-muted-foreground">
        <h3>{t.seoContent.comprehensive.title}</h3>
        <p>
          {t.seoContent.comprehensive.description1}
        </p>
        <p>
          {t.seoContent.comprehensive.description2}
        </p>
      </section>
    </div>
  )
}
