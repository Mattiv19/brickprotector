import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            index: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'price',
            type: 'number',
            required: true,
            min: 0,
            admin: {
                step: 0.01,
            }
        },
        {
            name: 'description',
            type: 'richText',
            required: true,
        },
        {
            name: 'shortDescription',
            type: 'textarea',
            maxLength: 160,
            admin: {
                description: 'Brief product description for listings (max 160 chars)',
            },
        },
        {
            name: 'images',
            type: 'array',
            required: true,
            minRows: 1,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'alt',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ],
}
