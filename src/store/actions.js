/* eslint-disable no-empty-pattern */
/* eslint-disable no-unneeded-ternary */
import api from '../plugins/axios';

export default {
    async getListCountry() {
        try {
            const response = await api.get('/summary');
            return { ok: true, data: response.data };
        } catch (err) {
            return { ok: false, err };
        }
    },
    async getListBuyCountry({ }, { slug }) {
        try {
            const response = await api.get(`/total/country/${slug}`);
            return { ok: true, data: response.data };
        } catch (err) {
            return { ok: false, err };
        }
    },
};