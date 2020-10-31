<template>
  <div>
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
      <tbody v-if="getCountryfilter && getCountryfilter.length">
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
import SeachIcon from "@/assets/icon/search.png";
import { cloneDeep } from "lodash";

export default {
  props: {
    data: {
      type: Array,
    },
  },
  data() {
    return {
        filterObj: {
            name: null,
        },
    };
  },
  methods: {},
  computed: {
    getSeachIcon() {
      return SeachIcon;
    },
    getCountryfilter() {
        console.log(this.data);
      let listData = cloneDeep(this.data);
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