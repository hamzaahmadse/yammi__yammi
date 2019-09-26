<template>
      <div class="container-fluid">
        <div class="col-md-12 col-xs-12">

          <div class="col-md-12 page-content">


            <h1 class="page-title"><i class="fas fa-percent" style="font-size: 24px;"></i> MY OFFERS</h1>


            <!-- Custom Tabs -->
            <div class="nav-tabs-custom">
              <ul class="nav nav-tabs">
                <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true"><b>All Offers</b><div class="ripple-container"></div></a></li>

                <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false"><b>Events</b><div class="ripple-container"></div></a></li>

                <li class=""><a href="#tab_3" data-toggle="tab" aria-expanded="false"><b>Discount</b></a></li>

                <li class=""><a href="#tab_4" data-toggle="tab" aria-expanded="false"><b>Coupons</b></a></li>

                <li class=""><a href="#tab_5" data-toggle="tab" aria-expanded="false"><b>Food Deals</b></a></li>

                <li class=""><a href="#tab_6" data-toggle="tab" aria-expanded="false"><b>Offers</b></a></li>

                <li class=""><a href="#tab_7" data-toggle="tab" aria-expanded="false"><b>Hot Deals</b></a></li>


              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="tab_1">

                  <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="dataTables_length" id="example1_length"><label>Show
                          <div class="form-group form-group-sm">
                            <select name="example1_length" aria-controls="example1" class="form-control">
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select>
                            <span class="material-input"></span>
                          </div> entries</label>
                        </div>
                      </div>

                      <div class="col-sm-6"><div id="example1_filter" class="dataTables_filter"><label>Search:

                        <div class="form-group form-group-sm is-empty">
                          <input type="search" class="form-control" placeholder="" aria-controls="example1">

                          <span class="material-input"></span></div></label></div></div>
                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <table id="example1" class="table table-bordered table-striped dataTable no-footer" role="grid" aria-describedby="example1_info">
                          <thead>
                          <tr role="row">
                            <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Order ID: activate to sort column descending" style="width: 61px;">Offer type</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Shop Name: activate to sort column ascending" style="width: 82px;">Offer title</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Time &amp;amp; Date: activate to sort column ascending" style="width: 89px;">Time &amp; Date</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Order Sofort: activate to sort column ascending" style="width: 90px;">Total Sale</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Sub Total: activate to sort column ascending" style="width: 68px;">Total Earn</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 82px;">Status</th>

                            <th style="width: 68px;" class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Options: activate to sort column ascending">Options</th>

                          </tr>
                          </thead>
                          <tbody>

                          <tr role="row" class="odd"  v-for="offer in offer.offers.all_offers">
                            <td class="sorting_1">{{ offer.type }}</td>
                            <td>{{ offer.title }}</td>

                            <td>{{ offer.date }}</td>
                            <td class="text-center">{{ offer.sale }}</td>
                            <td class="text-center">{{ offer.earn }}</td>
                            <td><a href="#" class="btn btn-warning">{{ offer.status }}</a></td>
                            <td>
                              <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr>

                        </tbody>

                        </table></div></div><div class="row"><div class="col-sm-5"><div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 4 of 4 entries</div></div><div class="col-sm-7"><div class="dataTables_paginate paging_simple_numbers" id="example1_paginate"><ul class="pagination"><li class="paginate_button previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0">Previous</a></li><li class="paginate_button active"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0">1</a></li><li class="paginate_button next disabled" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0">Next</a></li></ul></div></div></div></div>
                </div>

                <!-- /.tab-pane -->
                <div class="tab-pane" id="tab_2">


                  <!-- Start Tab 2 -->


                  <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div class="row">

                      <div class="col-sm-6"><div class="dataTables_filter" style="text-align: left;"><label>Search:

                        <div class="form-group form-group-sm is-empty">
                          <input type="search" class="form-control" placeholder="" aria-controls="example1">

                          <span class="material-input"></span><span class="material-input"></span></div></label></div></div>



                      <div class="col-sm-6">
                        <div class="add_new" style="text-align: right">
                          <a href="#" class="btn btn-info add_n" data-target="#offer-add-new" data-toggle="modal">Add New<div class="ripple-container"></div></a>
                        </div>

                      </div>


                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <table id="example1" class="table table-bordered table-striped dataTable no-footer" role="grid" aria-describedby="example1_info">
                          <thead>
                          <tr role="row">

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Shop Name: activate to sort column ascending" style="width: 82px;">Offer title</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Time &amp;amp; Date: activate to sort column ascending" style="width: 89px;">Time &amp; Date</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Order Sofort: activate to sort column ascending" style="width: 90px;">Total Sale</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Sub Total: activate to sort column ascending" style="width: 68px;">Total Earn</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 82px;">Status</th>

                            <th style="width: 68px;" class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Options: activate to sort column ascending">Options</th>

                          </tr>
                          </thead>
                          <tbody>

                          <tr role="row" class="odd"  v-for="event in offer.offers.events">

                            <td>{{ event.title }}</td>

                            <td>{{ event.date }}</td>
                            <td class="text-center">{{ event.sale }}</td>
                            <td class="text-center">{{ event.earn }}</td>
                            <td><a href="#" class="btn btn-warning">{{ event.status }}</a></td>
                            <td>
                              <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr>

                          </tbody>

                        </table></div></div>
                  </div>



                  <!--End Start Tab 2 -->


                </div>
                <!-- /.tab-pane -->


                <!--
                ================
                    Start tab 3
                ================
                -->

                <div class="tab-pane" id="tab_3">


                  <!-- Start Tab 2 -->


                  <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div class="row">

                      <div class="col-sm-6"><div class="dataTables_filter" style="text-align: left;"><label>Search:

                        <div class="form-group form-group-sm is-empty">
                          <input type="search" class="form-control" placeholder="" aria-controls="example1">

                          <span class="material-input"></span><span class="material-input"></span></div></label></div></div>



                      <div class="col-sm-6">
                        <div class="add_new" style="text-align: right">
                          <a href="#" class="btn btn-info add_n" data-target="#offer-add-new-discount" data-toggle="modal">Add New<div class="ripple-container"></div></a>
                        </div>

                      </div>


                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <table id="example1" class="table table-bordered table-striped dataTable no-footer" role="grid" aria-describedby="example1_info">
                          <thead>
                          <tr role="row">

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Shop Name: activate to sort column ascending" style="width: 82px;">Offer title</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Time &amp;amp; Date: activate to sort column ascending" style="width: 89px;">Time &amp; Date</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Order Sofort: activate to sort column ascending" style="width: 90px;">Total Sale</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Sub Total: activate to sort column ascending" style="width: 68px;">Total Earn</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 82px;">Status</th>

                            <th style="width: 68px;" class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Options: activate to sort column ascending">Options</th>

                          </tr>
                          </thead>
                          <tbody>

                          <tr role="row" class="odd"  v-for="discount in offer.offers.discounts">

                            <td>{{ discount.title }}</td>

                            <td>{{ discount.date }}</td>
                            <td class="text-center">{{ discount.sale }}</td>
                            <td class="text-center">{{ discount.earn }}</td>
                            <td><a href="#" class="btn btn-warning">{{ discount.status }}</a></td>
                            <td>
                              <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr></tbody>

                        </table></div></div>
                  </div>

                  <!-- /.tab-pane -->
                </div>

                <!--
                =============
                 End tab 3
                =============
                -->







                <!--
                ================
                    Start tab 4
                ================
                -->

                <div class="tab-pane" id="tab_4">


                  <!-- Start Tab 2 -->


                  <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div class="row">

                      <div class="col-sm-6"><div class="dataTables_filter" style="text-align: left;"><label>Search:

                        <div class="form-group form-group-sm is-empty">
                          <input type="search" class="form-control" placeholder="" aria-controls="example1">

                          <span class="material-input"></span><span class="material-input"></span></div></label></div></div>



                      <div class="col-sm-6">
                        <div class="add_new" style="text-align: right">
                          <a href="#" class="btn btn-info add_n" data-target="#offer-add-new-coupons" data-toggle="modal">Add New<div class="ripple-container"></div></a>
                        </div>

                      </div>


                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <table id="example1" class="table table-bordered table-striped dataTable no-footer" role="grid" aria-describedby="example1_info">
                          <thead>
                          <tr role="row">

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Shop Name: activate to sort column ascending" style="width: 82px;">Offer title</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Time &amp;amp; Date: activate to sort column ascending" style="width: 89px;">Time &amp; Date</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Order Sofort: activate to sort column ascending" style="width: 90px;">Total Sale</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Sub Total: activate to sort column ascending" style="width: 68px;">Total Earn</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 82px;">Status</th>

                            <th style="width: 68px;" class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Options: activate to sort column ascending">Options</th>

                          </tr>
                          </thead>
                          <tbody>
                          <tr role="row" class="odd"  v-for="coupon in offer.offers.coupons">

                            <td>{{ coupon.title }}</td>

                            <td>{{ coupon.date }}</td>
                            <td class="text-center">{{ coupon.sale }}</td>
                            <td class="text-center">{{ coupon.earn }}</td>
                            <td><a href="#" class="btn btn-warning">{{ coupon.status }}</a></td>
                            <td>
                              <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr>
                          </tbody>

                        </table></div></div>
                  </div>

                  <!-- /.tab-pane -->
                </div>

                <!--
                =============
                 End tab 4
                =============
                -->






                <!--
                ================
                    Start tab 5
                ================
                -->

                <div class="tab-pane" id="tab_5">


                  <!-- Start Tab 2 -->


                  <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div class="row">

                      <div class="col-sm-6"><div class="dataTables_filter" style="text-align: left;"><label>Search:

                        <div class="form-group form-group-sm is-empty">
                          <input type="search" class="form-control" placeholder="" aria-controls="example1">

                          <span class="material-input"></span><span class="material-input"></span></div></label></div></div>



                      <div class="col-sm-6">
                        <div class="add_new" style="text-align: right">
                          <a href="#" class="btn btn-info add_n" data-target="#offer-add-new-food-deals" data-toggle="modal">Add New<div class="ripple-container"></div></a>
                        </div>

                      </div>


                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <table id="example1" class="table table-bordered table-striped dataTable no-footer" role="grid" aria-describedby="example1_info">
                          <thead>
                          <tr role="row">

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Shop Name: activate to sort column ascending" style="width: 82px;">Offer title</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Time &amp;amp; Date: activate to sort column ascending" style="width: 89px;">Time &amp; Date</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Order Sofort: activate to sort column ascending" style="width: 90px;">Total Sale</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Sub Total: activate to sort column ascending" style="width: 68px;">Total Earn</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 82px;">Status</th>

                            <th style="width: 68px;" class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Options: activate to sort column ascending">Options</th>

                          </tr>
                          </thead>
                          <tbody>

                          <tr role="row" class="odd"  v-for="food_deal in offer.offers.food_deals">

                            <td>{{ food_deal.title }}</td>

                            <td>{{ food_deal.date }}</td>
                            <td class="text-center">{{ food_deal.sale }}</td>
                            <td class="text-center">{{ food_deal.earn }}</td>
                            <td><a href="#" class="btn btn-warning">{{ food_deal.status }}</a></td>
                            <td>
                              <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr></tbody>

                        </table></div></div>
                  </div>

                  <!-- /.tab-pane -->
                </div>

                <!--
                =============
                 End tab 5
                =============
                -->









                <!--
                ================
                    Start tab 6
                ================
                -->

                <div class="tab-pane" id="tab_6">


                  <!-- Start Tab 2 -->


                  <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div class="row">

                      <div class="col-sm-6"><div class="dataTables_filter" style="text-align: left;"><label>Search:

                        <div class="form-group form-group-sm is-empty">
                          <input type="search" class="form-control" placeholder="" aria-controls="example1">

                          <span class="material-input"></span><span class="material-input"></span></div></label></div></div>



                      <div class="col-sm-6">
                        <div class="add_new" style="text-align: right">
                          <a href="#" class="btn btn-info add_n" data-target="#offer-add-new-food-offers" data-toggle="modal">Add New<div class="ripple-container"></div></a>
                        </div>

                      </div>


                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <table id="example1" class="table table-bordered table-striped dataTable no-footer" role="grid" aria-describedby="example1_info">
                          <thead>
                          <tr role="row">

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Shop Name: activate to sort column ascending" style="width: 82px;">Offer title</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Time &amp;amp; Date: activate to sort column ascending" style="width: 89px;">Time &amp; Date</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Order Sofort: activate to sort column ascending" style="width: 90px;">Total Sale</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Sub Total: activate to sort column ascending" style="width: 68px;">Total Earn</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 82px;">Status</th>

                            <th style="width: 68px;" class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Options: activate to sort column ascending">Options</th>

                          </tr>
                          </thead>
                          <tbody>
                          <tr role="row" class="odd"  v-for="off in offer.offers.offer">

                            <td>{{ off.title }}</td>

                            <td>{{ off.date }}</td>
                            <td class="text-center">{{ off.sale }}</td>
                            <td class="text-center">{{ off.earn }}</td>
                            <td><a href="#" class="btn btn-warning">{{ off.status }}</a></td>
                            <td>
                              <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr></tbody>

                        </table></div></div>
                  </div>

                  <!-- /.tab-pane -->
                </div>

                <!--
                =============
                 End tab 6
                =============
                -->








                <!--
                ================
                    Start tab 7
                ================
                -->

                <div class="tab-pane" id="tab_7">


                  <!-- Start Tab 2 -->


                  <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div class="row">

                      <div class="col-sm-6"><div class="dataTables_filter" style="text-align: left;"><label>Search:

                        <div class="form-group form-group-sm is-empty">
                          <input type="search" class="form-control" placeholder="" aria-controls="example1">

                          <span class="material-input"></span><span class="material-input"></span></div></label></div></div>



                      <div class="col-sm-6">
                        <div class="add_new" style="text-align: right">
                          <a href="#" class="btn btn-info add_n" data-target="#offer-add-new-hotdeals" data-toggle="modal">Add New<div class="ripple-container"></div></a>
                        </div>

                      </div>


                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <table id="example1" class="table table-bordered table-striped dataTable no-footer" role="grid" aria-describedby="example1_info">
                          <thead>
                          <tr role="row">

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Shop Name: activate to sort column ascending" style="width: 82px;">Offer title</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Time &amp;amp; Date: activate to sort column ascending" style="width: 89px;">Time &amp; Date</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Order Sofort: activate to sort column ascending" style="width: 90px;">Total Sale</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Sub Total: activate to sort column ascending" style="width: 68px;">Total Earn</th>

                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 82px;">Status</th>

                            <th style="width: 68px;" class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Options: activate to sort column ascending">Options</th>

                          </tr>
                          </thead>
                          <tbody>
                          <tr role="row" class="odd"  v-for="hot_deal in offer.offers.hot_deals">

                            <td>{{ hot_deal.title }}</td>

                            <td>{{ hot_deal.date }}</td>
                            <td class="text-center">{{ hot_deal.sale }}</td>
                            <td class="text-center">{{ hot_deal.earn }}</td>
                            <td><a href="#" class="btn btn-warning">{{ hot_deal.status }}</a></td>
                            <td>
                              <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr></tbody>

                        </table></div></div>
                  </div>

                  <!-- /.tab-pane -->
                </div>

                <!--
                =============
                 End tab 7
                =============
                -->






                <!-- /.tab-content -->
              </div>
              <!-- nav-tabs-custom -->



            </div>

          </div>
        </div>
        <div class="modal fade in" id="offer-add-new-hotdeals" tabindex="-1" role="dialog">
          <div class="modal-dialog narrow" role="document" style="width: auto!important;margin-top: 35px;">
            <div class="modal-content" style="min-height: 480px; width: 800px;">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span>×</span></button>
                <h4 class="modal-title">Create Coupons</h4>
              </div>
              <div class="modal-body text-center">

                <!-- Start -->

                <div class="col-md-12">
                  <div class="row">

                    <div class="col-md-12 col-sm-12 col-xs-12 FoodDealsMain">
                      <form class="FoodDeals-form">
                        <div class="FoodDeals-area">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="upload-area">
                                <p>Select Banner „ Is upload Image</p>
                              </div>
                              <div class="ul-area-main">

                              </div>
                            </div>

                          </div>


                          <div class="row extra-step">
                            <div class="col-md-4">
                              <div class="mrgnTop20 is-empty text-align">
                                <label>Title</label>
                                <input type="text" class="">
                                <span class="material-input"></span></div>
                            </div>

                            <div class="col-md-4">
                              <div class="mrgnTop20 is-empty text-align">
                                <label>Hot Deal Start Date</label>
                                <input type="text" class="" id="timepicker11">
                                <span class="material-input"></span>
                                <div class="custom-timepicker custom-t11">
                                  <ul class="custom-timepicker-ul">
                                    <li><a class="">01:00 </a></li>
                                    <li><a class="">02:00 </a></li>
                                    <li><a class="">03:00 </a></li>
                                    <li><a class="">04:00 </a></li>
                                    <li><a class="">05:00 </a></li>
                                    <li><a class="">06:00 </a></li>
                                    <li><a class="">07:00 </a></li>
                                    <li><a class="">08:00 </a></li>
                                    <li><a class="">09:00 </a></li>
                                    <li><a class="">10:00 </a></li>
                                    <li><a class="">11:00 </a></li>
                                    <li><a class="">12:00 </a></li>
                                    <li><a class="">13:00 </a></li>
                                    <li><a class="">14:00 </a></li>
                                    <li><a class="">15:00 </a></li>
                                    <li><a class="">16:00 </a></li>
                                    <li><a class="">17:00 </a></li>
                                    <li><a class="">18:00 </a></li>
                                    <li><a class="">19:00 </a></li>
                                    <li><a class="">20:00 </a></li>
                                    <li><a class="">21:00 </a></li>
                                    <li><a class="">22:00 </a></li>
                                    <li><a class="">23:00 </a></li>
                                    <li><a class="">00:00 </a></li>
                                  </ul>
                                </div>

                              </div>
                            </div>

                            <div class="col-md-4">
                              <div class="mrgnTop20 is-empty text-align">
                                <label>Hot Deal End Date</label>
                                <input type="text" class="" id="timepicker12">
                                <span class="material-input"></span>
                                <div class="custom-timepicker custom-t12">
                                  <ul class="custom-timepicker-ul">
                                    <li><a class="">01:00 </a></li>
                                    <li><a class="">02:00 </a></li>
                                    <li><a class="">03:00 </a></li>
                                    <li><a class="">04:00 </a></li>
                                    <li><a class="">05:00 </a></li>
                                    <li><a class="">06:00 </a></li>
                                    <li><a class="">07:00 </a></li>
                                    <li><a class="">08:00 </a></li>
                                    <li><a class="">09:00 </a></li>
                                    <li><a class="">10:00 </a></li>
                                    <li><a class="">11:00 </a></li>
                                    <li><a class="">12:00 </a></li>
                                    <li><a class="">13:00 </a></li>
                                    <li><a class="">14:00 </a></li>
                                    <li><a class="">15:00 </a></li>
                                    <li><a class="">16:00 </a></li>
                                    <li><a class="">17:00 </a></li>
                                    <li><a class="">18:00 </a></li>
                                    <li><a class="">19:00 </a></li>
                                    <li><a class="">20:00 </a></li>
                                    <li><a class="">21:00 </a></li>
                                    <li><a class="">22:00 </a></li>
                                    <li><a class="">23:00 </a></li>
                                    <li><a class="">00:00 </a></li>
                                  </ul>
                                </div>

                              </div>
                            </div>

                            <div class="col-md-12 text-align" style="margin-top: 20px">
                              <label for="exampleInputEmail1">Description</label>
                              <textarea class="form-control" rows="5" style="margin: 0px -4.25px 0px 0px; height: 116px;"></textarea>
                              <span class="material-input"></span><span class="material-input"></span><span class="material-input"></span>
                            </div>

                          </div>

                          <div class="row extra-step">
                            <div class="col-md-4">
                              <div class="is-empty text-align">
                                <input type="text" class="" placeholder="For Delivery">
                                <span class="material-input"></span></div>
                            </div>

                            <div class="col-md-4">
                              <div class="is-empty text-align">
                                <input type="text" class="" placeholder="For takeaway">
                                <span class="material-input"></span></div>
                            </div>

                            <div class="col-md-4" style="margin-bottom:20px">
                              <div class="is-empty text-align">
                                <input type="text" class="" placeholder="For Dine In">
                                <span class="material-input"></span></div>
                            </div>

                          </div>

                          <div class="row extra-step">

                            <div class="col-md-4">
                              <div class="form-group stepsSelect text-align">
                                <label style="font-weight: bold;color: gray;">Discount Type</label>
                                <div class="custom-select">
                                  <select>
                                    <option>One Time – Weekly</option>
                                    <option value="1">Category 1</option>
                                    <option value="2">Category 2</option>
                                    <option value="3">Category 3</option>
                                  </select>
                                  <div class="select-selected" style="display: none">Please select a category</div><div class="select-items select-hide"><div>Category 1</div><div>Category 2</div><div>Category 3</div></div></div>
                              </div>
                            </div>

                            <div class="col-md-4">
                              <div class="is-empty text-align">
                                <label>Select Discount Day</label>
                                <input type="text" class="" placeholder="Weeks Days">
                                <span class="material-input"></span></div>
                            </div>

                          </div>

                          <div class="row extra-step">
                            <div class="even-main" style="margin-bottom: 20px">
                              <div class="col-md-4">
                                <div class="is-empty text-align">
                                  <label>Discount Price</label>
                                  <input type="text" class="" placeholder="Euro - Precent">
                                  <span class="material-input"></span></div>
                              </div>

                              <div class="col-md-4">
                                <div class="is-empty text-align">
                                  <label>Price Discount</label>
                                  <input type="text" class="" placeholder="Weeks Days">
                                  <span class="material-input"></span></div>
                              </div>

                              <div class="col-md-4">
                                <div class="is-empty text-align" style="margin-bottom:20px">
                                  <label>Precent Discount</label>
                                  <input type="text" class="" placeholder="Weeks Days">
                                  <span class="material-input"></span></div>
                              </div>
                            </div>

                          </div>

                          <div class="row extra-step">
                            <div class="even-main" style="margin-bottom: 20px">
                              <div class="col-md-4">
                                <div class="is-empty text-align">
                                  <label>Discount For</label>
                                  <input type="text" class="" placeholder="Catgeory – Items - Drinks">
                                  <span class="material-input"></span></div>
                              </div>

                              <div class="col-md-4">
                                <div class="is-empty text-align">
                                  <label>Select your Choice </label>
                                  <input type="text" class="" placeholder="Price is fix ready added">
                                  <span class="material-input"></span></div>
                              </div>

                              <div class="col-md-4">
                                <div class="is-empty text-align" style="margin-bottom:20px">
                                  <label>User Type</label>
                                  <input type="text" class="" placeholder="All User – New User">
                                  <span class="material-input"></span></div>
                              </div>
                            </div>

                          </div>

                          <div class="row extra-step">

                            <div class="col-md-4">
                              <div class="is-empty text-align">
                                <label>Inform your Clients</label>
                                <input type="text" class="" placeholder="Yes - No">
                                <span class="material-input"></span></div>
                            </div>

                            <div class="col-md-4" style="margin-bottom: 20px">
                              <div class="is-empty text-align">
                                <label>Select Event Day</label>
                                <input type="text" class="" placeholder="Price is fix ready added">
                                <span class="material-input"></span></div>
                            </div>

                          </div>


                          <div class="col-md-12 ">
                            <div class="row">
                              <div class="col-md-6">

                                <div class="popUpfooter-left">
                                  <input type="checkbox" id="discount-policy" name="discount-policy"><label for="discount-policy">Accept policy and Terms </label>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="popUpfooter-right">
                                  <button href="javascript:" class="c-event">Create the Event</button>
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
      </div>
</template>
<style>
  /*@import './../../public/css/order.css';*/
  /*@import './../../public/css/opening.css';*/
  /*@import './../../public/css/offers.css';*/
</style>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'offer',
        data(){
            return {

            }
        },
        computed: {
            ...mapState({
                offer: (state)=>{
                    return state.offer;
                }
            })
        }
    }
</script>
