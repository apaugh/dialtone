import { createTemplateFromVueFile } from '@/common/storybook_utils';
import DtBreadcrumbs from './breadcrumbs.vue';
import DtBreadcrumbItem from './breadcrumb_item.vue';

import DtBreadcrumbsDefaultTemplate from './breadcrumbs_default.story.vue';
import DtBreadcrumbsVariantsTemplate from './breadcrumbs_variants.story.vue';

// Default Prop Values
export const argsData = {
  breadcrumbs: [{
    href: '#',
    label: 'Root',
  },
  {
    href: '#',
    label: 'Section',
  },
  {
    href: '#',
    label: 'Section',
  },
  {
    href: '#',
    label: 'Section',
  },
  {
    href: '#',
    label: 'Current Page',
    selected: true,
  }],
};

export const argTypesData = {
  // Slots
  default: {
    control: 'text',
    table: {
      type: {
        summary: 'VNode',
      },
    },
  },

  // Props
  breadcrumbs: {
    control: 'object',
    table: {
      defaultValue: {
        summary: '{ url: string, label: string }[]',
      },
    },
  },
};

// Story Collection
export default {
  title: 'Components/Breadcrumbs',
  component: DtBreadcrumbs,
  args: argsData,
  argTypes: argTypesData,
  excludeStories: /.*Data$/,
};

// Templates
const DefaultTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtBreadcrumbsDefaultTemplate);
const VariantsTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtBreadcrumbsVariantsTemplate);

  const BreadcrumbItemTemplate = (args, { argTypes }) =>
  createTemplateFromVueFile(args, argTypes, DtBreadcrumbItem);

// Stories
export const Default = DefaultTemplate.bind({});
Default.args = {};

export const Variants = VariantsTemplate.bind({});
Variants.args = {};
Variants.parameters = {
  options: {
    showPanel: false,
  },
  a11y: {
    config: {
      rules: [
        {
          id: 'landmark-unique',
          enabled: false,
        },
      ],
    },
  },
};


export const BreadcrumbItem = BreadcrumbItemTemplate.bind({});
BreadcrumbItem.args = {};
