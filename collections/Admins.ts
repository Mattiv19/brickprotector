import type { CollectionConfig } from 'payload'

export const Admins: CollectionConfig = {
  slug: 'admins',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    { name: 'email', type: 'email', required: true },
    { name: 'role', type: 'select', options: ['admin'], defaultValue: 'admin' },
    // Email added by default
    // Add more fields as needed
  ],
}
