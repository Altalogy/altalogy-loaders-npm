# altalogy-loaders-npm

## Getting Started

1) Install:

`npm install altaloaders-npm `

2) Import:
```
 import AltaLoaders from 'altaloaders-npm
 
 <AltaLoaders {...} />
```

3) Options:

- `type`,
- `size`,
- `primaryColor`,
- `secondaryColor`,
- `text`,
- `textPlace`,

Property | Values | Description
--- | --- | ---
type | [String] | Display loader of current type
size | [String] | Changing size of loader
primaryColor | [String] | Change main color
secondaryColor | [String] | Change secondary color
text | [String] | Display text for loader 
textPlace | [String] | Enables to select place for label

Available types:
`Circle` | `Border` | `Multi` | `Triple` | `Noborder` | `Reverse` | `Dbborder` | `Dots` | `Boxes` | `Line` | `Line2` | `Line3`

Available sizes:
`sm` | `md` | `lg`

Available text places:
`left` | `top` | `right` | `bottom`

## Usage

```
<AltaLoaders
  type='Circle'
  size='md'
  primaryColor='#444'
  secondaryColor=''
  text='Data is loading..'
  textPlace='bottom'
/>
```

## Prerequisites

[Node.js](http://nodejs.org/) >= 6 must be installed.

## Installation

- Running `npm install` in the component's root directory will install everything you need for development.

## Demo Development Server

- `npm start` will run a development server with the component's demo app at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Running Tests

- `npm test` will run the tests once.

- `npm run test:coverage` will run the tests and produce a coverage report in `coverage/`.

- `npm run test:watch` will run the tests on every change.

## Building

- `npm run build` will build the component for publishing to npm and also bundle the demo app.

- `npm run clean` will delete built resources.

## License

This code is released under the MIT License.
