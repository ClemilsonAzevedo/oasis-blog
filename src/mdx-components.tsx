import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    table: (props) => (
      <div className="border border-zinc-800 rounded-lg">
        <table {...props} className="m-0" />
      </div>
    ),
    td: (props) => <td {...props} className="text-center" />,
    th: (props) => <th {...props} className="py-3" />,
    thead: (props) => <thead {...props} className="border-zinc-800" />,
    tr: (props) => <tr {...props} className="border-zinc-800" />,
    pre: (props) => (
      <pre
        {...props}
        className="border rounded-lg border-zinc-800 leading-relaxed"
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
