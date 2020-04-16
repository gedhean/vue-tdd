import Vuex from "vuex";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import UserView from "@/components/UserView.vue";
import UserProfile from "@/components/UserProfile.vue";
import UserSearchForm from "@/components/UserSearchForm.vue";

import initState from "@/store/state";
import userFixture from "./fixtures/user";

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;
const mountComponent = options => shallowMount(UserView, options);

describe("UserView", () => {
  beforeEach(() => {
    initState.user = userFixture;

    const store = new Vuex.Store({ state: { ...initState } });

    wrapper = mountComponent({
      localVue,
      store
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
    const userProfile = wrapper.find(UserProfile);

    expect(userProfile.vm.user).toBe(wrapper.vm.$store.state.user);
  });
});
