<template>
  <div class="d-flex flex-column align-items-center">
    <div class="mx-2 my-3">
      <b-button size="sm" variant="success" class="mt-3" @click="addUser"
        >Add User</b-button
      >
    </div>
    <b-table
      class="w-100-sm mt-4"
      striped
      hover
      responsive
      :fields="fields"
      :items="items"
    >
      <template v-slot:cell(actions)="row">
        <b-button
          class="mr-4 w-100 p-2"
          @click="deleteUser(row.item)"
          variant="danger"
          >Delete</b-button
        >
        <b-button
          class="p-2 my-1 w-100"
          @click="editUser(row.item)"
          variant="info"
          >Edit</b-button
        >
      </template>
    </b-table>

    <b-modal v-model="modalShow" title="">
      <b-form @submit.stop.prevent="submitForm">
        <b-form-group v-bind:lable-for="'edit-name'" lable="Name">
          <b-form-input
            v-model="form.name"
            :id="'edit-name'"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group v-bind:lable-for="'edit-usrname'" lable="Username">
          <b-form-input
            v-model="form.username"
            :id="'edit-username'"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group v-bind:lable-for="'edit-email'" lable="Email">
          <b-form-input
            v-model="form.email"
            :id="'edit-email'"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button variant="danger" class="ml-3" @click="cancelEdit"
          >Cancel</b-button
        >
      </b-form>
      <template #modal-footer="{ ok }">
        <b-button size="sm" variant="success" @click="ok()"> OK </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  computed: {
    ...mapState(["items"]),
  },
  mounted() {
    this.fetchItems()
  },
  methods: {
    ...mapActions(["fetchItems", "deleteItem", "updateItem", "addItem"]),

    deleteUser(item) {
      this.deleteItem(item)
    },

    addUser() {
      this.form = {}
      this.modalShow = true
    },

    editUser(item) {
      this.form = { ...item }
      this.modalShow = true
    },
    cancelEdit() {
      this.form = {}
      this.modalShow = false
    },
    submitForm() {
      if (this.form.id) {
        this.updateItem(this.form)
      } else {
        this.addItem(this.form)
      }
      this.modalShow = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
