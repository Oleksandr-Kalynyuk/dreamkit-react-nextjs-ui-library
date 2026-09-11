"use client";

import { ComponentViewer } from "@/components/shared/component-viewer";
import {
  SmoothCopyClipboard,
  smoothCopyClipboardCode,
} from "./smooth-copy-clipboard";
import {
  BeautifulCopyClipboard,
  beautifulCopyClipboardCode,
} from "./beautiful-clipboard-copy";

export default function ClipboardsShowcase() {
  return (
    <div className="space-y-6">
      <ComponentViewer
        title="Smooth Copy Clipboard"
        code={smoothCopyClipboardCode}
      >
        <SmoothCopyClipboard />
      </ComponentViewer>

      <ComponentViewer
        title="Advanced Copy Animation"
        code={beautifulCopyClipboardCode}
      >
        <BeautifulCopyClipboard />
      </ComponentViewer>
    </div>
  );
}