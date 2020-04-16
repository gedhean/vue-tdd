<template>
  <div>
    User View
    <user-search-form />
    <user-profile :user="user" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserProfile from "@/components/UserProfile.vue";
import UserSearchForm from "@/components/UserSearchForm.vue";

const components = {
  UserProfile,
  UserSearchForm
};

export default {
  name: "UserView",
  components,
  computed: {
    ...mapState({
      user: "user"
    })
  }
};
</script>

<style></style>
