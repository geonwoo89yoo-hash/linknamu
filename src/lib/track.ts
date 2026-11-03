/** 링크 클릭을 기록합니다. 페이지를 떠나도 전송되도록 sendBeacon을 우선 사용합니다. */
export function trackClick(linkId: string) {
  const body = JSON.stringify({ linkId });

  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    const sent = navigator.sendBeacon("/api/clicks", new Blob([body], { type: "application/json" }));
    if (sent) return;
  }

  fetch("/api/clicks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // 집계 실패가 링크 이동을 막지 않도록 무시합니다.
  });
}
