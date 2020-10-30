<template>
  <div class="hello">
    <h1>Total</h1>
    <div class="total">
      <table>
        <tr>
          <td>NewConfirmed</td>
          <td>{{ total.NewConfirmed }}</td>
        </tr>
        <tr>
          <td>NewDeaths</td>
          <td>{{ total.NewDeaths }}</td>
        </tr>
        <tr>
          <td>NewRecovered</td>
          <td>{{ total.NewRecovered }}</td>
        </tr>
        <tr>
          <td>TotalConfirmed</td>
          <td>{{ total.TotalConfirmed }}</td>
        </tr>
        <tr>
          <td>TotalDeaths</td>
          <td>{{ total.TotalDeaths }}</td>
        </tr>
        <tr>
          <td>TotalRecovered</td>
          <td>{{ total.TotalRecovered }}</td>
        </tr>
      </table>
    </div>
    <h3>List Country</h3>
    <div class="search-page">
      <div class="seach">
        <img :src="getSeachIcon" />
        <input
          class="pd-input"
          type="text"
          name="seach"
          placeholder="Search Country Name"
          v-model="filterObj.name"
        />
      </div>
    </div>
    <table class="list-country">
      <tbody v-if="posts && getCountryfilter.length">
        <tr>
          <th>Country</th>
          <th>NewConfirmed</th>
          <th>NewDeaths</th>
          <th>NewRecovered</th>
          <th>TotalConfirmed</th>
          <th>TotalDeaths</th>
          <th>TotalRecovered</th>
          <th>Action</th>
        </tr>
        <tr v-for="post in getCountryfilter" :key="post.id">
          <td>{{ post.Country }}</td>
          <td>{{ post.NewConfirmed }}</td>
          <td>{{ post.NewDeaths }}</td>
          <td>{{ post.NewRecovered }}</td>
          <td>{{ post.TotalConfirmed }}</td>
          <td>{{ post.TotalDeaths }}</td>
          <td>{{ post.TotalRecovered }}</td>
          <td>
            <router-link :to="`/country/${post.Slug}`">Detail</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import SeachIcon from "../assets/icon/search.png";
import { cloneDeep } from "lodash";
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      total: {},
      errors: [],
      SeachIcon: {},
      filterObj: {
        name: null,
      },
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_API + "/summary")
      .then((response) => {
        this.posts = response.data;
        this.total = response.data.Global;
        console.log(this.posts.Countries);
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  computed: {
    getSeachIcon() {
      return SeachIcon;
    },
    getCountryfilter() {
      let listData = cloneDeep(this.posts.Countries);
      if (this.filterObj.name) {
        listData = listData.filter((item) => {
          if (
            item.Country.toLowerCase().includes(
              this.filterObj.name.toLowerCase()
            )
          ) {
            return item;
          }
        });
      }
      return listData;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
table.list-country {
  width: 100%;
  border-collapse: collapse;
}
table.list-country tr td {
  border: 1px solid #000;
}
table.list-country th {
  background: #03a9f4;
  color: #fff;
  padding: 10px;
  border-left: 1px solid #ffffff;
}
table.list-country th:first-child {
  border: none;
}
table.list-country tr:nth-child(even) {
  background: #ccc;
}
table.list-country tr:nth-child(odd) {
  background: #fff;
}
.search-page {
    padding: 10px;
    overflow: auto;
}
.seach {
    float: right;
}
.seach .pd-input {
    height: 25px;
}
.seach img {
    margin-top: 5px;
    margin-right: 10px;
    float: left;
}
h3 {
  margin: 40px 0 0;
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
