const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withMDX = require('@next/mdx')()

const plugins = [
  withMDX({
    pageExtensions: ['md', 'mdx', 'js']
  }),
  withSvgr
]

const config = {
  webpack (config, options) {
    return config
  }
}

module.exports = withPlugins([...plugins], config)
