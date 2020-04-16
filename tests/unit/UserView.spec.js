import { shallowMount } from "@vue/test-utils";
import UserView from "@/components/UserView.vue";
import UserProfile from "@/components/UserProfile.vue";
import UserSearchForm from "@/components/UserSearchForm.vue";

let wrapper;
const mountComponent = options => shallowMount(UserView, options);

describe("UserView", () => {
  beforeEach(() => {
    wrapper = mountComponent({
      data: () => ({ user: {} })
    });
  });

  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("name should be UserView", () => {
    expect(wrapper.name()).toBe("UserView");
  });

  test("render main children", () => {
    const userProfile = wrapper.find(UserProfile);
    const userSearchForm = wrapper.find(UserSearchForm);

    expect(userProfile.exists()).toBe(true);
    expect(userSearchForm.exists()).toBe(true);
  });

  test("pass prop user to UserProfile component", () => {
    wrapper.setData({ user: { name: "Jedi" } });
    const userProfile = wrapper.find(UserProfile);

    expect(userProfile.vm.user).toBe(wrapper.vm.user);
  });
});
