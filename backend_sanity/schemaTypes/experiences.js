import { defineField, defineType } from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string'
    }),
    defineField(
      {
        name: 'works',
        title: 'Works',
        type: 'array',
        of: [{ type: 'workExperience' }]
      }),
  ],
})