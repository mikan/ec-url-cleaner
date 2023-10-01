# ec-url-cleaner

A Chrome extension that copies clean URLs of Amazon product pages.

## How it works

If you're showing Amazon's product page like...

`https://www.amazon.com/What-Every-Thinks-About-Apart/dp/1849531986/ref=sr_1_1?crid=...` (very long URL)

You can get following URL to your clipboard from right-click menu.

`https://www.amazon.com/dp/1849531986/`

## Supported websites

Amazon, Amazon UK, Amazon Japan, etc.

See [manifest.json](manifest.json) for the complete list.

## Installation

See "Loading an unpacked extension" section of the Google's documentation:

> Chrome Extension development basics - Chrome for Developers
> https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/

## Development

Install prettier and eslint:

```
pnpm i
```

Run prettier:

```
pnpm format
```

Run eslint:

```
pnpm eslint
```

## License

[ISC](LICENSE)

## Author

[@mikan](https://github.com/mikan)
