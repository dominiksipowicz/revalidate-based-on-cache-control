import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore()

  // delay for 1 second
  await new Promise(resolve => setTimeout(resolve, 1000))

  const seconds = Math.ceil(Math.random() * 60)

  return new Response(`This should be cached for ${seconds} seconds`, {
    headers: {
      "Cache-Control": "max-age=" + seconds
    }
  })
}
