import { defineField, defineType } from "sanity";

export const workExperienceType = defineType({
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
        defineField(
            {
                name: 'name',
                title: 'name',
                type: 'string'
            }),
        defineField(
            {
                name: 'company',
                title: 'Company',
                type: 'string'
            }),
        defineField(
            {
                name: 'year',
                title: 'Year',
                type: 'string'
            }),
        defineField(
            {
                name: 'desc',
                title: 'Description',
                type: 'string'
            }

        )
    ]
})