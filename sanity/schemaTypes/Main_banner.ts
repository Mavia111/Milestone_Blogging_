export const Main_banner = {
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
      {
        name: 'brandLogo',
        title: 'Brand Logo',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping and focal point adjustment
        },
        description: 'Upload the brand logo here.',
      },
      {
        name: 'brandName',
        title: 'Brand Name',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(2).max(50),
        description: 'Enter the name of the brand.',
      },
      {
        name: 'mainHeading',
        title: 'Main Heading',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(5).max(100),
        description: 'Enter the main heading.',
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Upload the main image here.',
      },
    ],
  };
  