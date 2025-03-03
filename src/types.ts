export type ParameterTypeMeta = { name: string; regexp: string }

/**
 * This structure represents settings provided by the LSP client.
 */
export type Settings = {
  features: readonly string[]
  glue: readonly string[]
  parameterTypes: readonly ParameterTypeMeta[]
}
