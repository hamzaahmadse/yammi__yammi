import Vue from 'vue';
import Vuex from 'vuex';
import dashboard from './dashboard/index';
import customer from './customer/index';
import employer from './employer/index';
import delivary from './delivary/index';
import setting from './setting/index';
import online_shop from './online_shop/index';
import offer from './offer/index';
import order from './order/index';
import dinner from './dinners/index';
import reservations from './reservations/index';
import income from './income/index';
import pos_system from './pos_system/index';
import party_service from './party_service/index';
import invoice from './invoice/index';
import state from "./root_state";
import mutations from "./root_mutations";

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  modules : {
    dashboard,
    customer,
    employer,
    delivary,
    setting,
    online_shop,
    offer,
    order,
    dinner,
    reservations,
    income,
    invoice,
    pos_system,
    party_service
  }
});
