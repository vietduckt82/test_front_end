<template>
  <div>
    <ShowListDate :data="listDate" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import ShowListDate from "@/components/ShowListDate";
export default {
  components: {
    ShowListDate,
  },
  data() {
    return {
      posts: {},
      errors: [],
      listDate: []
    };
  },
  methods: {
    ...mapActions({
      getListBuyCountry: "getListBuyCountry",
    }),
    async initListCountry() {
      const response = await this.getListBuyCountry({
        slug: this.$route.params.slug,
      });
      if (!response.ok) return alert("Failed");
      this.listDate = response.data;
    },
  },
  created() {
    this.initListCountry();
  },
};
</script>
<style scoped>
.total table {
  width: 400px;
  max-width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
}
.total table tr td {
  border: 1px solid #000;
}
table.list-date {
  width: 100%;
  border-collapse: collapse;
}
table.list-date tr td {
  border: 1px solid #000;
}
table.list-date th {
  background: #03a9f4;
  color: #fff;
  padding: 10px;
  border-left: 1px solid #ffffff;
}
table.list-date th:first-child {
  border: none;
}
table.list-date tr:nth-child(even) {
  background: #ccc;
}
table.list-date tr:nth-child(odd) {
  background: #fff;
}
h3 {
  margin: 40px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>