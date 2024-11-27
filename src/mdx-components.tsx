// Configuração do MDX na Aplicação, todo o tema, esquema de Links e outros componentes serão configurados aqui

import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    table: (props) => (
      <div className="border border-blogGray rounded-lg">
        <table {...props} className="m-0" />
      </div>
    ),
    td: (props) => <td {...props} className="text-center" />,
    th: (props) => <th {...props} className="py-3" />,
    thead: (props) => <thead {...props} className="border-blogGray" />,
    tr: (props) => <tr {...props} className="border-blogGray" />,
    pre: (props) => (
      <pre
        {...props}
        className="border rounded-lg border-blogGray leading-relaxed"
      />
    ),
    a: (props) =>
      props.href?.startsWith('http') ? (
        <a target="_blank" rel="noreferrer" {...props} />
      ) : (
        <a {...props} />
      ),
  }
}
