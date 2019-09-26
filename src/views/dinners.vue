<template>
  <div class="container-fluid">
    <div class="col-md-12 col-xs-12" >

      <div class="col-md-12 page-content">


        <h1 class="page-title"><i class="fas fa-birthday-cake"></i> My Dinners</h1>


        <!-- Custom Tabs -->
        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true"><b>Current Orders</b><div class="ripple-container"></div></a></li>
            <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false"><b>Canceled Orders</b><div class="ripple-container"></div></a></li>
            <li class=""><a href="#tab_3" data-toggle="tab" aria-expanded="false"><b>All Orders</b><div class="ripple-container"></div></a></li>


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
                        <span class="material-input"></span></div> entries</label>
                    </div>
                  </div>

                  <div class="col-sm-6"><div id="example1_filter" class="dataTables_filter"><label>Search:

                    <div class="form-group form-group-sm is-empty">
                      <input type="search" class="form-control" placeholder="" aria-controls="example1">

                      <span class="material-input"></span><span class="material-input"></span></div></label></div></div>
                </div>

                <div class="row">
                  <div class="col-sm-12">
                    <table id="example1" class="table table-bordered table-striped dataTable no-footer" role="grid" aria-describedby="example1_info">
                      <thead>
                      <tr role="row">
                        <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Order ID: activate to sort column descending" style="width: 61px;">Order ID</th>

                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Shop Name: activate to sort column ascending" style="width: 82px;">Shop Name</th>

                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Time &amp;amp; Date: activate to sort column ascending" style="width: 89px;">Time &amp; Date</th>

                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Order Cash: activate to sort column ascending" style="width: 80px;">Order Cash</th>

                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Order Paypal: activate to sort column ascending" style="width: 94px;">Order Paypal</th>

                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Order Sofort: activate to sort column ascending" style="width: 90px;">Order Sofort</th>

                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Sub Total: activate to sort column ascending" style="width: 68px;">Sub Total</th>

                        <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 82px;">Status</th>

                        <th style="width: 68px;" class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Options: activate to sort column ascending">Options</th>

                      </tr>
                      </thead>
                      <tbody>

                      <tr role="row" class="even" v-for="curr_order in dinners.dinners.current_orders">

                        <td class="sorting_1">{{ curr_order.id }}</td>
                        <td>{{ curr_order.name }}</td>

                        <td>{{ curr_order.date }}</td>
                        <td class="text-center">{{ curr_order.order_cash }}</td>
                        <td class="text-center">{{ curr_order.order_paypal }}</td>
                        <td class="text-center">{{ curr_order.order_sofort }}</td>
                        <td class="text-center">{{ curr_order.sub_total }}</td>
                        <td><a href="#" class="btn btn-success">{{ curr_order.status }}</a></td>
                        <td>
                          <a href="#" class="btn btn-info" data-target="#add-orders-Popup" data-toggle="modal">View</a>

                        </td>
                      </tr>

                      </tbody>

                    </table></div></div><div class="row"><div class="col-sm-5"><div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 4 of 4 entries</div></div><div class="col-sm-7"><div class="dataTables_paginate paging_simple_numbers" id="example1_paginate"><ul class="pagination"><li class="paginate_button previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0">Previous</a></li><li class="paginate_button active"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0">1</a></li><li class="paginate_button next disabled" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0">Next</a></li></ul></div></div></div></div>
            </div>
            <!-- /.tab-pane -->
            <div class="tab-pane" id="tab_2">

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
                      <span class="material-input"></span></div> entries</label>
                  </div>
                </div>

                <div class="col-sm-6"><div id="example1_filter" class="dataTables_filter"><label>Search:

                  <div class="form-group form-group-sm is-empty">
                    <input type="search" class="form-control" placeholder="" aria-controls="example1">

                    <span class="material-input"></span><span class="material-input"></span></div></label></div></div>
              </div>

              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>

                  <th>Order ID</th>
                  <th>Shop Name</th>

                  <th>Time &amp; Date</th>
                  <th>Order Cash</th>
                  <th>Order Paypal</th>
                  <th>Order Sofort</th>
                  <th>Sub Total</th>
                  <th>Status</th>
                  <th style="width: 10%">Options</th>
                </tr>
                </thead>
                <tbody>
                <tr role="row" class="even" v-for="c_order in dinners.dinners.cancel_orders">

                  <td class="sorting_1">{{ c_order.id }}</td>
                  <td>{{ c_order.name }}</td>

                  <td>{{ c_order.date }}</td>
                  <td class="text-center">{{ c_order.order_cash }}</td>
                  <td class="text-center">{{ c_order.order_paypal }}</td>
                  <td class="text-center">{{ c_order.order_sofort }}</td>
                  <td class="text-center">{{ c_order.sub_total }}</td>
                  <td><a href="#" class="btn btn-danger">{{ c_order.status }}</a></td>
                  <td>
                    <a href="#" class="btn btn-info" data-target="#add-orders-Popup" data-toggle="modal">View</a>

                  </td>
                </tr>


                </tbody>

              </table>
            </div>
            <!-- /.tab-pane -->
            <div class="tab-pane" id="tab_3">

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
                      <span class="material-input"></span></div> entries</label>
                  </div>
                </div>

                <div class="col-sm-6"><div id="example1_filter" class="dataTables_filter"><label>Search:

                  <div class="form-group form-group-sm is-empty">
                    <input type="search" class="form-control" placeholder="" aria-controls="example1">

                    <span class="material-input"></span><span class="material-input"></span></div></label></div></div>
              </div>


              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>

                  <th>Order ID</th>
                  <th>Shop Name</th>

                  <th>Time &amp; Date</th>
                  <th>Order Cash</th>
                  <th>Order Paypal</th>
                  <th>Order Sofort</th>
                  <th>Sub Total</th>
                  <th>Status</th>
                  <th style="width: 10%">Options</th>
                </tr>
                </thead>
                <tbody>
                <tr role="row" class="even" v-for="all_order in dinners.dinners.all_orders">

                  <td class="sorting_1">{{ all_order.id }}</td>
                  <td>{{ all_order.name }}</td>

                  <td>{{ all_order.date }}</td>
                  <td class="text-center">{{ all_order.order_cash }}</td>
                  <td class="text-center">{{ all_order.order_paypal }}</td>
                  <td class="text-center">{{ all_order.order_sofort }}</td>
                  <td class="text-center">{{ all_order.sub_total }}</td>
                  <td><a href="#" class="btn btn-danger">{{ all_order.status }}</a></td>
                  <td>
                    <a href="#" class="btn btn-info" data-target="#add-orders-Popup" data-toggle="modal">View</a>

                  </td>
                </tr>


                </tbody>

              </table>
            </div>
            <!-- /.tab-pane -->
          </div>
          <!-- /.tab-content -->
        </div>
        <!-- nav-tabs-custom -->



      </div>
    </div>
    <div class="modal fade in" id="add-orders-Popup" tabindex="-1" role="dialog">
      <div class="modal-dialog narrow" role="document" style="width: 800px!important;margin-top: 35px;">


        <div class="modal-content"><div class="modal-header"><a href="#" class="btn btn-sm btn-info DataTable__Action--Button" style="margin-right: 15px">Send Mail</a>
          <a href="#" class="btn btn-sm btn-primary DataTable__Action--Button">
            Print
          </a>
          <button type="button" class="close" data-dismiss="modal" style="font-size: 21px"><span aria-hidden="true">×</span></button>

        </div><div class="modal-body"><div size="A4" layout="portrait"><div align="center" class="header"></div><div class="page-heading invoice-to"><h3>Invoice to User</h3></div><div class="first-content"><table width="100%" class="Invoice__To"><tbody><tr><td align="left"><div class="identity"><p align="left">
          Shop Name <br> Username / Lastname <br> Shop Address &nbsp; Houseno. <br><br> City - Zipcode
        </p></div></td><td align="right"><div align="right" class="status"><table width="70%" style="margin-top: 10px; border-collapse: separate; border-spacing: 0px 5px;"><tbody><tr style="outline: rgb(242, 242, 242) solid 1px;"><th align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Company</th><td align="right">Shop Name</td></tr><tr style="outline: rgb(242, 242, 242) solid 1px;"><th align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Company ID</th><td align="right">De-10001</td></tr><tr style="outline: rgb(242, 242, 242) solid 1px;"><th align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Invoice No.</th><td align="right">Yami-10001</td></tr><tr style="outline: rgb(242, 242, 242) solid 1px;"><th align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Date - Time</th><td align="right">31.11.2017 – 00:00</td></tr><tr style="outline: rgb(242, 242, 242) solid 1px;"><th align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Invoice For</th><td align="right" style="font-weight: bold;">Assignments</td></tr><tr style="outline: rgb(242, 242, 242) solid 1px;"><th align="left" bgcolor=" #f2f2f2" style="margin-bottom: 2px;">Status</th><td align="right" style="font-weight: bold;">Paid</td></tr></tbody></table></div></td></tr></tbody></table></div><br><div id="main-content"><h3 class="text-left">Assignment Payment Invoice 17.07.2017</h3>

          <table width="100%" border="1" class="main Invoice__ItemTable">
            <tbody>
            <tr>
              <th>#</th>
              <th>Job ID</th>
              <th>Assignment Title</th>
              <th>Budget</th>
              <th>Paid To</th>
            </tr>
            <tr class="payment-release">
              <td>01</td>
              <td>AS-10002</td>
              <td>Create Logo</td>
              <td>2.000,00 €</td>
              <td>Milestone</td></tr>
            </tbody>
          </table></div><div class="right-table"><hr align="right" style="width: 39.5%;"><table width="40%" border="0" align="right" cellspacing="0" class="sub-total Invoice__SummeryTable"><tbody><tr class="border_bottom"><td style="font-weight: bold;">Sub Total</td><td align="right" style="font-weight: bold;">2.000,00 €</td></tr><tr style="background-color: rgb(242, 242, 242);"><td style="border-top: 2px solid rgb(217, 217, 217);">+ 19 %</td><td align="right" style="border-top: 2px solid rgb(217, 217, 217);">380,00 €</td></tr><tr class="border_bottom"><td style="font-weight: bold; font-size: large;">Total</td><td align="right" style="font-weight: bold; font-size: large;">2.000,00 €</td></tr></tbody></table></div><br><div class="bottom-table Invoice__BottomTable"><table width="100%" border="1"><tbody><tr><th>Notifications</th></tr><tr><td class="payment-release">Payment can´t be Released without your Permission</td></tr></tbody></table></div></div></div></div>



      </div>
    </div>
  </div>
</template>
<style>
  /*@import './../assets/css/order.css';*/
  /*@import './../assets/css/offers.css';*/
</style>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'dinners',
        data(){
            return {

            }
        },
        computed: {
            ...mapState({
                dinners: (state)=>{
                    return state.dinner;
                }
            })
        }
    }
</script>
