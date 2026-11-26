import { PlayCircle } from "lucide-react";
import type { CaseStudy } from "@/data/work";

/**
 * Walkthrough slot. While status is "placeholder" it shows an honest holding state.
 * When ready, it loads a self-hosted video only on request, with captions and a transcript.
 */
export function CaseVideo({ video, title }: { video: NonNullable<CaseStudy["video"]>; title: string }) {
  if (video.status === "ready" && video.mp4) {
    return (
      <figure className="m-0">
        <video
          className="aspect-video w-full rounded-[10px] border border-line bg-ink"
          controls
          preload="none"
          poster={video.poster}
          aria-label={`${title} walkthrough`}
        >
          <source src={video.mp4} type="video/mp4" />
          {video.captions ? <track kind="captions" src={video.captions} srcLang="en-GB" label="English" default /> : null}
        </video>
        {video.transcript ? (
          <details className="mt-4">
            <summary className="min-h-11 cursor-pointer font-medium">Read the transcript</summary>
            <p className="prose-body mt-2 max-w-[68ch] whitespace-pre-line text-muted">{video.transcript}</p>
          </details>
        ) : null}
      </figure>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-[10px] border border-dashed border-line-strong bg-surface p-8 text-center">
      <PlayCircle className="size-10 text-muted" aria-hidden="true" />
      <p className="font-display text-2xl">Dashboard walkthrough in production</p>
      <p className="max-w-[48ch] text-muted">A short captioned video of the {title} client dashboard will appear here once it has been recorded and approved.</p>
    </div>
  );
}
