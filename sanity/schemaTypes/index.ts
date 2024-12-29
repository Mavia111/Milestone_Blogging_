import { type SchemaTypeDefinition } from 'sanity'
import { Main_banner } from './Main_banner'
import { Blogs } from './blogs'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Blogs],
}
