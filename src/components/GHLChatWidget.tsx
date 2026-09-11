"use client";

import Script from "next/script";

/**
 * Optional GoHighLevel Chat Widget loader.
 *
 * When the env variable NEXT_PUBLIC_GHL_CHAT_WIDGET_SCRIPT is set,
 * this component loads the GHL chat widget script (lazyOnload).
 * When unset, it renders nothing and the custom ChatWidget remains active.
 *
 * Example env value:
 * NEXT_PUBLIC_GHL_CHAT_WIDGET_SCRIPT=https://widgets.leadconnectorhq.com/loader.js
 *
 * The script URL should be provided by GHL when setting up the chat widget.
 */
export default function GHLChatWidget() {
  const scriptUrl = process.env.NEXT_PUBLIC_GHL_CHAT_WIDGET_SCRIPT;

  if (!scriptUrl) {
    return null;
  }

  return (
    <Script
      src={scriptUrl}
      strategy="lazyOnload"
      data-resources-url="https://widgets.leadconnectorhq.com/loader.js"
    />
  );
}
