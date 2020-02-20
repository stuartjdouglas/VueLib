import { mount } from '@vue/test-utils';
import IncrementingButton from '@/components/IncrementingButton';

/**
 * Tests {@Link IncrementingButton}.
 */
describe('Incrementing Button', () => {
  /** The wrapper to test */
  let wrapper;

  /**
   * Runs before each test.
   */
  beforeEach(() => {
    wrapper = mount(IncrementingButton);
  })

  /**
   * Tests that the component is a vue instance.
   */
  test('is a Vue instance', async () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  /**
   * Tests that when the button is clicked the number will increment.
   */
  test('display number of clicks', async () => {
    expect(wrapper.text()).toEqual(`I have been clicked 0 time`);

    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toEqual(`I have been clicked 1 time`);

    wrapper.find('button').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toEqual(`I have been clicked 2 times`);
  });
});