import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

const font = fetch(
  new URL('../../../public/fonts/cal-sans-semibold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET() {
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{ fontFamily: 'Cal Sans' }}
        tw="h-full w-full flex flex-col justify-between bg-zinc-900 antialiased p-[100px]"
      >
        <div tw="flex flex-col">
          <p tw="text-neutral-300 text-9xl whitespace-pre-wrap mb-[60px]">
            There's an Imposter Among Us!
          </p>
          <p tw="text-neutral-400 text-6xl whitespace-pre-wrap">
            How to deal with imposter syndrome.
          </p>
        </div>
        <p tw="text-neutral-300 text-7xl">Marko Djordjevic</p>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Cal Sans',
          data: fontData,
          style: 'normal'
        }
      ]
    }
  );
}
