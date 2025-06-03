<script>
export default {
  name: "P12",
  data() {
    return {
      phone_books: [
        { isDeleted: false, name: "Jaime Sommers", phone: "311-555-2368" },
        { isDeleted: false, name: "Ghostbusters", phone: "555-2368" },
        { isDeleted: false, name: "Mr. Plow", phone: "636-555-3226" },
        {
          isDeleted: false,
          name: "Gene Parmesan: Private Eye",
          phone: "555-0113",
        },
        { isDeleted: false, name: "The A-Team", phone: "555-6162" },
      ],
    };
  },
  methods: {
    deleteEntry(entry) {
      entry.isDeleted = true;
    },
  },
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(entry, index) in phone_books.filter((entry) => !entry.isDeleted)"
        v-bind:key="index"
      >
        <td>{{ entry.name }}</td>
        <td>{{ entry.phone }}</td>
        <td>
          <button v-on:click="deleteEntry(entry)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
table th,
td {
  border: 1px solid black;
}
</style>
