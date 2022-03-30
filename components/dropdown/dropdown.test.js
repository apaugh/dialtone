import { assert } from 'chai';
import { config, mount } from '@vue/test-utils';
import DtDropdown from './dropdown.vue';
import sinon from 'sinon';

// Constants
const baseProps = {
  open: true,
};

const baseSlots = {
  anchor: '<a href="#" id="anchor">Link</a>',
  list: `<ul id="list">
    <li role="menuitem">1</li>
    <li role="menuitem">2</li>
    <li role="menuitem">3</li>
  </ul>`,
};

describe('Dialtone Vue Dropdown Tests', function () {
  // Wrappers
  let wrapper;
  let anchorElement;
  let popover;
  let popoverContent;
  let listWrapper;

  // Environment
  let props = baseProps;
  let slots = baseSlots;
  let attrs;
  let highlightStub;

  // Helpers
  const _setChildWrappers = () => {
    anchorElement = wrapper.find('#anchor');
    popover = wrapper.findComponent({ ref: 'popover' });
    popoverContent = popover.findComponent({ ref: 'content' });
    listWrapper = popoverContent.find('[data-qa="dt-dropdown-list-wrapper"]');
  };

  const _setWrappers = () => {
    wrapper = mount(DtDropdown, {
      props,
      slots,
      attrs,
      global: {
        stubs: {
          transition: false,
        },
      },
    });
    _setChildWrappers();
  };

  // Setup
  before(function () {
    config.renderStubDefaultSlot = true;
  });

  // Test Teardown
  after(function () {
    config.renderStubDefaultSlot = false;
  });

  afterEach(function () {
    props = baseProps;
    slots = baseSlots;
    attrs = {};
  });

  describe('Presentation Tests', function () {
    // Test setup
    beforeEach(function () {
      _setWrappers();
    });

    it('should render the component', function () { assert.exists(wrapper, 'wrapper exists'); });

    describe('When a list is provided', function () {
      it('should render the list wrapper', function () { assert.isTrue(listWrapper.exists()); });
      it('should render the anchor', function () { assert.isTrue(anchorElement.exists()); });
      it('should render the list', function () { assert.isTrue(listWrapper.find('#list').exists()); });
    });
  });

  describe('Accessibility Tests', function () {
    describe('When the dropdown is not open', function () {
      // Test setup
      beforeEach(function () {
        props = {
          ...baseProps,
          open: false,
        };
        _setWrappers();
      });

      it('aria-expanded should be "false"', function () {
        assert.isTrue(anchorElement.attributes('aria-expanded') === 'false');
      });
    });

    describe('When the dropdown is open', function () {
      // Test setup
      beforeEach(function () {
        slots = {
          anchor: `<template #anchor="attrs"><a href="#" id="anchor" v-bind="attrs">Link</a></template>`,
        };
        _setWrappers();
      });

      it('aria-expanded should be "true"', function () {
        _setWrappers();
        assert.isTrue(anchorElement.attributes('aria-expanded') === 'true');
      });
    });
  });

  describe('Interactivity Tests', function () {
    // Test setup
    beforeEach(function () {
      highlightStub = sinon.stub();
      attrs = { onHighlight: highlightStub };
      _setWrappers();
    });

    describe('When the highlightIndex changes', function () {
      beforeEach(async function () {
        wrapper.vm.setHighlightIndex(1);
        await wrapper.vm.$nextTick();
      });

      it('should call listener', function () { assert.isTrue(highlightStub.called); });
      it('should emit highlight event', function () { assert.equal(wrapper.emitted().highlight.length, 1); });
    });

    describe('When mouseleave is detected on the list wrapper', function () {
      // Test Setup
      beforeEach(async function () {
        await listWrapper.trigger('mouseleave');
      });

      it('should reset the highlightIndex', function () { assert.equal(wrapper.vm.highlightIndex, -1); });
    });
  });
});
