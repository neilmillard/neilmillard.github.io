import type { NextConfig } from "next";
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

const nextConfig: NextConfig = {
  /* config options here */
    /* After running next build, Next.js will create an out folder with the HTML/CSS/JS assets for your application.*/
    output: 'export',
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    trailingSlash: true,
    images: {
      loader: 'custom',
      deviceSizes: imageConfigDefault.deviceSizes,
      imageSizes: imageConfigDefault.imageSizes,
    },
};

