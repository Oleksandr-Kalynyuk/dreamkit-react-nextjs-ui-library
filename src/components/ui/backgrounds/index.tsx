"use client";

import { ComponentViewer } from "@/components/shared/component-viewer";

import {
  DotPatternBackground,
  dotPatternBackgroundCode,
} from "./dot-pattern-background";

import {
  AnimatedGridBackground,
  animatedGridBackgroundCode,
} from "./animated-grid-background";

import {
  AuroraWaveBackground,
  auroraWaveBackgroundCode,
} from "./aurora-wave-background";

import {
  DynamicMeshBackground,
  dynamicMeshBackgroundCode,
} from "./dynamic-mesh-background";

export default function BackgroundsShowcase() {
  return (
    <div className="space-y-6">
      <ComponentViewer
        title="Interactive Cyber Mesh Background"
        code={dynamicMeshBackgroundCode}
      >
        <DynamicMeshBackground />
      </ComponentViewer>

      <ComponentViewer
        title="Aurora Wave Glow Background"
        code={auroraWaveBackgroundCode}
      >
        <AuroraWaveBackground />
      </ComponentViewer>

      <ComponentViewer
        title="Interactive Radial Dot Pattern"
        code={dotPatternBackgroundCode}
      >
        <DotPatternBackground />
      </ComponentViewer>

      <ComponentViewer
        title="Ambient Glowing Grid Background"
        code={animatedGridBackgroundCode}
      >
        <AnimatedGridBackground />
      </ComponentViewer>
    </div>
  );
}