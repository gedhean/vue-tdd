<template>
  <div>
    User View
    <user-search-form />
    <user-profile :user="user" />
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
import UserSearchForm from "@/components/UserSearchForm.vue";

const components = {
  UserProfile,
  UserSearchForm
};

export default {
  name: "UserView",
  components,
  data() {
    return {
      user: {}
    };
  }
};
</script>

<style></style>
