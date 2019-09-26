<template>
  <div>
    <div class="container-fluid">
      <div class="col-md-12 col-xs-12 padding-de">

        <div class="col-md-12 page-content padding-de">
          <!--Start left Section -->
          <div class="col-md-12">


            <div class="col-md-9">

              <!-- Top section -->

              <div class="col-md-4 col-sm-6">
                <div class="info-box">
                  <span class="info-box-icon bg-aqua"><i class="fa fa-envelope"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text">New Customers</span>
                    <span class="info-box-number">{{ customer.new_customer }}</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="info-box">
                  <span class="info-box-icon bg-green"><i class="fa fa-envelope"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text">Regular Customers</span>
                    <span class="info-box-number">{{ customer.regular_customer }}</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>

              <div class="col-md-4 col-sm-6">
                <div class="info-box">
                  <span class="info-box-icon bg-yellow"><i class="fa fa-envelope"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text">Customers</span>
                    <span class="info-box-number">{{ customer.customer }}</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>


              <!--End Top section -->


              <div class="customerTable">

                <!-- Tabs start here -->
                <div class="nav-tabs-custom">
                  <ul class="nav nav-tabs">
                    <li class="active"><a href="#tab_male" data-toggle="tab"
                                          aria-expanded="true"><b>Male</b>
                      <div class="ripple-container"></div>
                    </a></li>
                    <li class=""><a href="#tab_female" data-toggle="tab"
                                    aria-expanded="false"><b>Female</b>
                      <div class="ripple-container"></div>
                    </a></li>
                    <li class=""><a href="#tab_others" data-toggle="tab"
                                    aria-expanded="false"><b>Company</b></a></li>


                  </ul>
                </div>

                <!-- Tabs end here -->
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_male">
                    <table>
                      <thead>
                      <tr class="tbl-header">
                        <th>#</th>
                        <th>UserID</th>
                        <th>Name And Lastname</th>
                        <th>ZipCode Area</th>
                        <th>Last Order</th>
                        <th>Order</th>
                        <th>Spend</th>
                      </tr>
                      </thead>
                      <tbody>

                      <tr v-for="customer in customer.customer_data.customer">
                        <td>{{ customer.id }}</td>
                        <td>{{ customer.user_id }}</td>
                        <td>{{ customer.name }}</td>
                        <td>{{ customer.zip_code }}</td>
                        <td>{{ customer.last_order }}</td>
                        <td>{{ customer.order }}</td>
                        <td><i class="fa fa-euro"></i>{{ customer.spend }}</td>
                      </tr>

                      </tbody>
                    </table>


                  </div>

                  <div class="tab-pane" id="tab_female">
                    <table>
                      <thead>
                      <tr class="tbl-header">
                        <th>#</th>
                        <th>UserID</th>
                        <th>Name And Lastname</th>
                        <th>ZipCode Area</th>
                        <th>Last Order</th>
                        <th>Order</th>
                        <th>Spend</th>
                      </tr>
                      </thead>
                      <tbody>

                      <tr class="tbl-td1">
                        <td>01</td>
                        <td>1000</td>
                        <td>Hans Muller</td>
                        <td>30419 Hannover</td>
                        <td>10.10.2016-17:23</td>
                        <td>25</td>
                        <td><i class="fa fa-euro"></i>150,50</td>
                      </tr>
                      <tr>
                        <td>01</td>
                        <td>1000</td>
                        <td>Hans Muller</td>
                        <td>30419 Hannover</td>
                        <td>10.10.2016-17:23</td>
                        <td>25</td>
                        <td><i class="fa fa-euro"></i>150,50</td>
                      </tr>
                      <tr>
                        <td>01</td>
                        <td>1000</td>
                        <td>Hans Muller</td>
                        <td>30419 Hannover</td>
                        <td>10.10.2016-17:23</td>
                        <td>25</td>
                        <td><i class="fa fa-euro"></i>150,50</td>
                      </tr>
                      </tbody>
                    </table>


                  </div>

                  <div class="tab-pane" id="tab_others">

                    <table>
                      <thead>
                      <tr class="tbl-header">
                        <th>#</th>
                        <th>UserID</th>
                        <th>Name And Lastname</th>
                        <th>ZipCode Area</th>
                        <th>Last Order</th>
                        <th>Order</th>
                        <th>Spend</th>
                      </tr>
                      </thead>
                      <tbody>

                      <tr class="tbl-td1">
                        <td>01</td>
                        <td>1000</td>
                        <td>Hans Muller</td>
                        <td>30419 Hannover</td>
                        <td>10.10.2016-17:23</td>
                        <td>25</td>
                        <td><i class="fa fa-euro"></i>150,50</td>
                      </tr>
                      <tr>
                        <td>01</td>
                        <td>1000</td>
                        <td>Hans Muller</td>
                        <td>30419 Hannover</td>
                        <td>10.10.2016-17:23</td>
                        <td>25</td>
                        <td><i class="fa fa-euro"></i>150,50</td>
                      </tr>


                      </tbody>
                    </table>


                  </div>
                </div>


              </div>
            </div>


            <!-- Start right Section -->


            <div class="col-md-3">
              <div class="customerPanel brd-rad4 text-left mrgn20-0 br-t">
                <h4 class="bg-h4 brd-btm_green fs14 pdng10-2 mrgn0 clr_white"><span
                  style="margin-left: 15px;">Best Clients</span></h4>

                <div class="container" style="width: 100%" v-for="best_client in customer.best_clients">
                  <div class="row" style="background: #fff">
                    <div class="customerPanelUser col-md-12 pdng15">
                      <div class="row mrgn0">
                        <div class="col-xs-3 pdng0">
                          <img :src="best_client.image" class="img-responsive" alt="">
                        </div>
                        <div class="col-xs-9">
                          <div class="row">
                            <div class="col-md-12">
                               <h6 class="fs14 col-xs-6 pdng0 mrgn0">{{ best_client.name }}</h6>
                              <h6 class="customerPanelMoney col-xs-6 pdng0"><i
                                class="fas fa-euro-sign"></i>{{ best_client.spend }}</h6>
                            </div>
                          </div>
                          <div class="bg_light-grey text-left clr_white relative progressWrapper">
                            <span class="progressBarValue relative">{{ best_client.percentage }}</span>
                            <div class="progressBar absolute height100"
                                 style="width:50%;"></div>
                          </div>
                        </div>
                      </div>
                    </div><!-- customerPanel end -->
                  </div>
                </div>

              </div>
            </div>

            <!-- End right Section -->


          </div>
          <!--End left Section -->

        </div>
      </div>

    </div>
  </div>
</template>


<style>
  /*@import './../assets/css/order.css';*/
</style>

<script>
  import {mapState} from 'vuex';
  // import DashBoardTab from '@/components/DashBoardTab';
  export default {

    data(){
      return {

      }
    },
    computed: {
      ...mapState({
        customer: (state)=>{
          return state.customer;
        }
      })
    }
  }
</script>
