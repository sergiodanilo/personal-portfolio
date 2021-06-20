export default function PostImage({ quote, author }) {
  return (
    <blockquote className="blockquote theme-blockquote text-center">
      <span className="fa-layers fa-fw mb-3">
        <svg
          className="svg-inline--fa fa-circle fa-w-16 text-secondary"
          data-fa-transform="grow-12"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="circle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
          style={{transformOrigin: '0.5em 0.5em'}}>
          <g transform="translate(256 256)">
            <g transform="translate(0, 0)  scale(1.75, 1.75)  rotate(0 0 0)">
              <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" transform="translate(-256 -256)" />
            </g>
          </g>
        </svg>

        <svg
          className="svg-inline--fa fa-quote-right fa-w-16 fa-inverse text-white"
          data-fa-transform="shrink-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-right"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
          style={{transformOrigin: '0.5em 0.5em'}}>
            <g transform="translate(256 256)">
              <g transform="translate(0, 0)  scale(0.75, 0.75)  rotate(0 0 0)">
                <path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" transform="translate(-256 -256)" />
              </g>
            </g>
        </svg>
      </span>
      <p className="mb-0 font-italic">{`"${quote}"`}</p>
      <footer className="blockquote-footer">
        <cite title="Source Title">
          { author }
        </cite>
      </footer>
    </blockquote>
  )
}
