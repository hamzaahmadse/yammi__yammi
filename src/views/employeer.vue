<template>

  <div class="container-fluid">
    <div class="col-md-12 col-xs-12">
      <div class="col-md-12 page-content">


        <div class="col-md-12 page-content">


          <h1 class="page-title"><i class="fas fa-briefcase" style="font-size: 24px;"></i> EMPLOYEER
          </h1>


          <!-- Custom Tabs -->
          <div class="nav-tabs-custom">
            <!--             <ul class="nav nav-tabs">
                          <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true"><b>Driver</b><div class="ripple-container"></div></a></li>

                          <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false"><b>Waiter</b><div class="ripple-container"></div></a></li>

                          <li class=""><a href="#tab_3" data-toggle="tab" aria-expanded="false"><b>Service</b></a></li>


                        </ul> -->


            <div class="tab-content">
              <div class="tab-pane active" id="tab_1">

                <div id="example1_wrapper"
                     class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                  <div class="row">

                    <div class="col-sm-6">
                      <div class="dataTables_filter" style="text-align: left;"><label>Search:

                        <div class="form-group form-group-sm is-empty">
                          <input type="search" class="form-control" placeholder=""
                                 aria-controls="example1">

                          <span class="material-input"></span><span
                          class="material-input"></span></div>
                      </label></div>
                    </div>


                    <div class="col-sm-6">
                      <div class="add_new" style="text-align: right">
                        <a href="#" class="btn btn-info add_n"
                           data-target="#add-employee" data-toggle="modal">Add New
                          Employee
                          <div class="ripple-container"></div>
                        </a>
                      </div>
                    </div>


                  </div>

                  <div class="row">
                    <div class="col-sm-12">
                      <table id="example1"
                             class="table table-bordered table-striped dataTable no-footer"
                             role="grid" aria-describedby="example1_info">
                        <thead>
                        <tr role="row">
                          <th class="sorting_asc" tabindex="0"
                              aria-controls="example1" rowspan="1" colspan="1"
                              aria-sort="ascending"
                              aria-label="Order ID: activate to sort column descending"
                              style="width: 61px;">Employee Image
                          </th>

                          <th class="sorting" tabindex="0" aria-controls="example1"
                              rowspan="1" colspan="1"
                              aria-label="Shop Name: activate to sort column ascending"
                              style="width: 82px;">Employee ID
                          </th>

                          <th class="sorting" tabindex="0" aria-controls="example1"
                              rowspan="1" colspan="1"
                              aria-label="Time &amp;amp; Date: activate to sort column ascending"
                              style="width: 89px;">Employee Name
                          </th>

                          <th class="sorting" tabindex="0" aria-controls="example1"
                              rowspan="1" colspan="1"
                              aria-label="Order Sofort: activate to sort column ascending"
                              style="width: 90px;">Start Date
                          </th>

                          <th class="sorting" tabindex="0" aria-controls="example1"
                              rowspan="1" colspan="1"
                              aria-label="Sub Total: activate to sort column ascending"
                              style="width: 68px;"> Work type
                          </th>

                          <th class="sorting" tabindex="0" aria-controls="example1"
                              rowspan="1" colspan="1"
                              aria-label="Status: activate to sort column ascending"
                              style="width: 82px;">Status
                          </th>

                          <th style="width: 68px;" class="sorting" tabindex="0"
                              aria-controls="example1" rowspan="1" colspan="1"
                              aria-label="Options: activate to sort column ascending">
                            Options
                          </th>

                        </tr>
                        </thead>
                        <tbody>


                        <tr role="row" class="even" v-for="employ in employer.employer_data.employer">

                          <td class="sorting_1">{{ employ.image }}</td>
                          <td>{{ employ.id }}</td>

                          <td>{{ employ.name }}</td>
                          <td class="text-center">{{ employ.date }}</td>
                          <td class="text-center">{{ employ.type }}</td>
                          <td><a href="#" class="btn primary">{{ employ.Status }}</a></td>
                          <td>
                            <a href="#" class="btn btn-info"
                               data-target="#add-employee" data-toggle="modal"><i
                              class="fas fa-edit paddR"></i></i></a>
                            <a href="#" class="btn btn-success"><i
                              class="fas fa-times"></i></a>

                          </td>
                        </tr>
                        </tbody>

                      </table>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-5">
                      <div class="dataTables_info" id="example1_info" role="status"
                           aria-live="polite">Showing 1 to 4 of 4 entries
                      </div>
                    </div>
                    <div class="col-sm-7">
                      <div class="dataTables_paginate paging_simple_numbers"
                           id="example1_paginate">
                        <ul class="pagination">
                          <li class="paginate_button previous disabled"
                              id="example1_previous"><a href="#"
                                                        aria-controls="example1"
                                                        data-dt-idx="0" tabindex="0">Previous</a>
                          </li>
                          <li class="paginate_button active"><a href="#"
                                                                aria-controls="example1"
                                                                data-dt-idx="1"
                                                                tabindex="0">1</a>
                          </li>
                          <li class="paginate_button next disabled"
                              id="example1_next"><a href="#" aria-controls="example1"
                                                    data-dt-idx="2"
                                                    tabindex="0">Next</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

          </div>
          <!-- /.tab-content -->
        </div>
        <!-- nav-tabs-custom -->


      </div>

    </div>
    <!-- Start Offers  Modal -->
    <div class="modal fade in" id="add-employee" tabindex="-1" role="dialog">
      <div class="modal-dialog narrow" role="document" style="width: auto!important;margin-top: 13px;">
        <div class="modal-content" style="min-height: 600px; width: 800px;">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span>×</span></button>
            <h4 class="modal-title"></h4>
          </div>
          <div class="modal-body text-center">

            <!-- Start -->

            <div class="col-md-12">
              <div class="row">

                <div class="col-md-12 col-sm-12 col-xs-12 FoodDealsMain">
                  <form class="FoodDeals-form" style="height: 515px;">
                    <div class="FoodDeals-area">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="upload-area" style="border-bottom: 1px solid #ddd">
                            <p class="search-emly">Search Employee</p>
                          </div>
                        </div>

                      </div>

                      <div class="row extra-step">
                        <div class="even-main" style="margin-bottom: 20px">

                          <div class="col-md-12">
                            <div class="popup-chek-main2">
                              <ul>
                                <li>
                                  <label>
                                    <input class="hidden" type="radio" name="optradio">
                                    <div class="btn-custom"> Select Driver</div>
                                  </label>

                                </li>
                                <li>
                                  <label>
                                    <input class="hidden" type="radio" name="optradio">
                                    <div class="btn-custom">Select Chef</div>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input class="hidden" type="radio" name="optradio">
                                    <div class="btn-custom"> Select Waiter</div>
                                  </label>
                                </li>
                                <li>
                                  <label>
                                    <input class="hidden" type="radio" name="optradio">
                                    <div class="btn-custom"> Select Employee</div>
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>

                        </div>

                      </div>


                      <div class="row extra-step">
                        <div class="col-md-6">
                          <div class="mrgnTop20 is-empty text-align">
                            <label>Title</label>
                            <input type="text" class="">
                            <span class="material-input"></span></div>
                        </div>

                        <div class="col-md-12 text-align" style="margin-top: 20px">
                          <label for="exampleInputEmail1">Description</label>
                          <textarea class="form-control" rows="5"
                                    style="margin: 0px -4.25px 0px 0px; height: 116px;"></textarea>
                          <span class="material-input"></span><span
                          class="material-input"></span><span class="material-input"></span>
                        </div>

                      </div>


                      <div class="row extra-step">
                        <div class="even-main" style="margin-bottom: 20px">

                          <div class="col-md-12">
                            <div class="popup-chek-main2">


                              <div class="col-md-4">
                                <div class="form-group stepsSelect text-align">
                                  <div class="custom-select">
                                    <select>
                                      <option> Now-Agreement</option>
                                      <option value="1">Category 1</option>
                                      <option value="2">Category 2</option>
                                      <option value="3">Category 3</option>
                                    </select>
                                    <div class="select-selected" style="display: none">
                                      Please select a category
                                    </div>
                                    <div class="select-items select-hide">
                                      <div>Category 1</div>
                                      <div>Category 2</div>
                                      <div>Category 3</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <div class="form-group stepsSelect text-align">
                                  <div class="custom-select">
                                    <select>
                                      <option>Part-Full-Agreement</option>
                                      <option value="1">Category 1</option>
                                      <option value="2">Category 2</option>
                                      <option value="3">Category 3</option>
                                    </select>
                                    <div class="select-selected" style="display: none">
                                      Please select a category
                                    </div>
                                    <div class="select-items select-hide">
                                      <div>Category 1</div>
                                      <div>Category 2</div>
                                      <div>Category 3</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="col-md-4">
                                <div class="form-group stepsSelect text-align">
                                  <div class="custom-select">
                                    <select>
                                      <option>Fix-Hourly-Agreement</option>
                                      <option value="1">Category 1</option>
                                      <option value="2">Category 2</option>
                                      <option value="3">Category 3</option>
                                    </select>
                                    <div class="select-selected" style="display: none">
                                      Please select a category
                                    </div>
                                    <div class="select-items select-hide">
                                      <div>Category 1</div>
                                      <div>Category 2</div>
                                      <div>Category 3</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>

                        </div>

                      </div>

                      <div class="col-md-12 ">
                        <div class="row">
                          <div class="col-md-6">

                            <div class="popUpfooter-left">
                              <input type="checkbox" id="discount-policy"
                                     name="discount-policy"><label for="discount-policy">Accept
                              policy and Terms </label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="popUpfooter-right">
                              <button href="javascript:" class="c-event">Create the Coupon
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- End -->

          </div>
        </div>
      </div>
    </div>
    <!-- End Offers Start Modal -->
  </div>

</template>
<style>

  /*@import './../../public/css/order.css';*/
  /*@import './../../public/css/offers.css';*/
</style>

<script>
  import {mapState} from 'vuex';
  // import DashBoardTab from '@/components/DashBoardTab';
  export default {
    name: 'employeer',
    data(){
      return {

      }
    },
    computed: {
      ...mapState({
        employer: (state)=>{
          return state.employer;
        }
      })
    }
  }
</script>
<style>
        body {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
        }

        .nav-tabs-custom > .nav-tabs > li {
            border-top: 3px solid transparent;
        }

        .nav-tabs > li.active {
            border-radius: 0px;
        }

        .nav-tabs-custom > .nav-tabs > li:first-of-type {
            border-left: 0;
        }
    </style>