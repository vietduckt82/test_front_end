import { mount  } from "@vue/test-utils";
import ShowListDate from "@/components/ShowListDate.vue";

describe("ShowListDate.spec.js", () => {
    let cmp;
    beforeEach(() => {
		cmp = mount(ShowListDate, {
			// Beaware that props is overriden using `propsData`
        propsData: {
          data: [
            {
              Country: "Afghanistan",
              CountryCode: "AF",
              Date: "2020-10-31T05:00:38Z",
              NewConfirmed: 66,
              NewDeaths: 1,
              NewRecovered: 19,
              Slug: "afghanistan",
              TotalConfirmed: 41334,
              TotalDeaths: 1533,
              TotalRecovered: 34258
            },
          ],
        },
      });
    });
    
    it('has received ["Cat"] as the message property', () => {
      expect(cmp.vm.data).toEqual([
        {
          Country: "Afghanistan",
          CountryCode: "AF",
          Date: "2020-10-31T05:00:38Z",
          NewConfirmed: 66,
          NewDeaths: 1,
          NewRecovered: 19,
          Slug: "afghanistan",
          TotalConfirmed: 41334,
          TotalDeaths: 1533,
          TotalRecovered: 34258
        },
      ]);
    });
    it("has the expected html structure", () => {
      expect(cmp.element).toMatchSnapshot();
    });
    it("is a Home component", () => {
      expect(cmp.is(ShowListDate)).toBe(true);
    });
    // Vue instance
    it("Home is a vue instances", () => {
      expect(cmp.isVueInstance()).toBe(true);
    });
});