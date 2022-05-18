import { defineNuxtModule, addTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('autoImports:sources', (autoImports) => {
      generateEslintGlobalsConfig(autoImports)
    })
  },
})

function generateEslintGlobalsConfig(autoImports) {
  addTemplate({
    filename: '.eslintrc.js',
    write: true,
    getContents: () => {
      return `// Auto generate by nuxt modules
module.exports = {
  globals: {
${autoImports
  .map((i) =>
    i.imports
      .map((i) => {
        return `    ${i}: 'readonly',`
      })
      .join('\n')
  )
  .join('\n')}
  },
};
`
    },
  })
}
