<script>
export default {
  name: "P11",
  data() {
    return {
      phone_books: [
        { name: "Jaime Sommers", phone: "311-555-2368" },
        { name: "Ghostbusters", phone: "555-2368" },
        { name: "Mr. Plow", phone: "636-555-3226" },
        { name: "Gene Parmesan: Private Eye", phone: "555-0113" },
        { name: "The A-Team", phone: "555-6162" },
      ],
    };
  },
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(entry, index) in phone_books" v-bind:key="index">
        <td>{{ entry.name }}</td>
        <td>{{ entry.phone }}</td>
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