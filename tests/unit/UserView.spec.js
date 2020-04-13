import { shallowMount } from "@vue/test-utils";
import UserView from "@/components/UserView.vue";

let wrapper;
const mountComponent = options => shallowMount(UserView, options);

describe("UserView", () => {
  beforeEach(() => {
    wrapper = mountComponent();
  });

  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("name should be UserView", () => {
    expect(wrapper.name()).toBe("UserView");
  });
});
