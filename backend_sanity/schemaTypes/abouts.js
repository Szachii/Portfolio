import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField(
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      }),
    defineField(
      {
        name: 'description',
        title: 'Description',
        type: 'string'
      }),
    defineField(
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{ type: 'skills' }]
      }),
    defineField(
      {
        name: 'testimonials',
        title: 'Testimonials',
        type: 'array',
        of: [{ type: 'testimonial' }]
      }),
    defineField(
      {
        name: 'brands',
        title: 'Brands',
        type: 'array',
        of: [{ type: 'brands' }]
      }),
    defineField(
      {
        name: 'imgUrl',
        title: 'ImgUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ),
  ],
})