<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" sm="12">
                <h3>All Day</h3>
                <v-data-table
                    :headers="headers"
                    :items="data"
                    :items-per-page="10"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    id:list_page
                >
                    <template v-slot:[`item.Date`]="{ item }">
                    <span>{{ item.Date }}</span>
                    </template>
                </v-data-table>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    props: {
        data: {
        type: Array,
        },
    },
    data() {
        return {
            headers: [
                { text: "Country", value: "Country", sortable: true },
                { text: "Confirmed", value: "Confirmed", sortable: true },
                { text: "Deaths", value: "Deaths" },
                { text: "Recovered", value: "Recovered" },
                { text: "Active", value: "Active" },
                { text: "Date", value: "Date" },
            ],
            sortBy: "Date",
            sortDesc: true,
        };
    },
}
</script>