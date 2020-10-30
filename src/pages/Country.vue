<template>
    <div>
        <h3>All Day</h3>
        <table class="list-date">
            <tbody v-if="posts && posts.length">
            <tr>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Deaths</th>
                <th>Recovered</th>
                <th>Active</th>
                <th>Date</th>
            </tr>
            <tr v-for="post in posts.reverse()" :key="post.id">
                <td>{{ post.Country }}</td>
                <td>{{ post.Confirmed }}</td>
                <td>{{ post.Deaths }}</td>
                <td>{{ post.Recovered }}</td>
                <td>{{ post.Active }}</td>
                <td>{{ post.Date }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from "axios";
export default {
    props: {
    msg: String,
  },
  data() {
    return {
      posts: {},
      errors: [],
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_API + "/live/country/"+this.$route.params.slug)
      .then((response) => {
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
}
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