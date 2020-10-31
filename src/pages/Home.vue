<template>
  <div class="wapper">
    <v-container>
      <v-row>
        <h1>TOTAL COVID 19</h1>
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
        <ListCountry :data="listCountryA" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ListCountry from "@/components/ListCountry";

export default {
  components: {
    ListCountry,
  },
  data() {
    return {
      total: {},
      listCountryA: [],
      errors: [],
      SeachIcon: {},
      filterObj: {
        name: null,
      },
    };
  },
  methods: {
    ...mapActions({
      getListCountry: "getListCountry",
    }),
    async initListCountry() {
      const response = await this.getListCountry();
      if (!response.ok) return alert("Failed");
      this.listCountryA = response.data.Countries;
      this.total = response.data.Global;
    },
  },
  created() {
    this.initListCountry();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
