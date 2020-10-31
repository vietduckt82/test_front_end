import { mount  } from "@vue/test-utils";
import ListCountry from "@/components/ListCountry.vue";

describe("ListCountry.spec.js", () => {
    let cmp;
    beforeEach(() => {
		cmp = mount(ListCountry, {
			// Beaware that props is overriden using `propsData`
        propsData: {
          data: [
            {
              Active: 0,
              City: "",
              CityCode: "",
              Confirmed: 0,
              Country: "Viet Nam",
              CountryCode: "",
              Date: "2020-01-22T00:00:00Z",
              Deaths: 0,
              Lat: "0",
              Lon: "0",
              Province: "",
              Recovered: 0
            },
          ],
        },
      });
    });
    
    it('has received ["Cat"] as the message property', () => {
      expect(cmp.vm.data).toEqual([
        {
          Active: 0,
            City: "",
            CityCode: "",
            Confirmed: 0,
            Country: "Viet Nam",
            CountryCode: "",
            Date: "2020-01-22T00:00:00Z",
            Deaths: 0,
            Lat: "0",
            Lon: "0",
            Province: "",
            Recovered: 0
        },
      ]);
    });
    it("has the expected html structure", () => {
      expect(cmp.element).toMatchSnapshot();
    });
    it("is a Home component", () => {
      expect(cmp.is(ListCountry)).toBe(true);
    });
    // Vue instance
    it("Home is a vue instances", () => {
      expect(cmp.isVueInstance()).toBe(true);
    });
});