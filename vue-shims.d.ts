

import Vue from "vue";
import { Store } from "vuex";
import { Route } from "vue-router";

declare module "vue/types/options" {

    interface ComponentOptions<V extends Vue> {
        asyncData?: (store: any, route: Route) => Promise<any>;
    }
}
