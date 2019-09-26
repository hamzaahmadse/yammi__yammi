<template>
  <div class="container-fluid">
    <div class="col-md-12 col-xs-12" >

      <div class="col-md-12 page-content">

        <div class="col-xs-12">


          <div class="box">
            <!-- <div class="box-header">
              <h3 class="box-title">Data Table With Full Features</h3>
            </div> -->
            <!-- /.box-header -->
            <div class="box-body">
              <!-- START CUSTOM TABS -->
              <!--  <h2 class="page-header">AdminLTE Custom Tabs</h2> -->

              <div class="row">
                <div class="col-md-12">
                  <!-- Custom Tabs -->
                  <div class="nav-tabs-custom">
                    <ul class="nav nav-tabs">
                      <li class="active"><a href="#tab_1" data-toggle="tab"><b>Delivers</b></a></li>
                      <li><a href="#tab_2" data-toggle="tab"><b>Dinners</b></a></li>
                      <li><a href="#tab_3" data-toggle="tab"><b>Restaurants</b></a></li>


                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane active" id="tab_1">

                        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer"><div class="row"><div class="col-sm-6"><div class="dataTables_length" id="example1_length"><label>Show <select name="example1_length" aria-controls="example1" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div class="col-sm-6"><div id="example1_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="example1"></label></div></div></div><div class="row"><div class="col-sm-12"><table id="example1" class="table table-bordered table-striped dataTable no-footer" role="grid" aria-describedby="example1_info">
                          <thead>
                          <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Shop Name: activate to sort column descending" style="width: 152px;">Shop Name</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Shop ID: activate to sort column ascending" style="width: 132px;">Shop ID</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Contract Start: activate to sort column ascending" style="width: 182px;">Contract Start</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 99px;">Status</th><th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="POS Type: activate to sort column ascending" style="width: 198px;">POS Type</th><th style="width: 68px;" class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Options: activate to sort column ascending">Options</th></tr>
                          </thead>
                          <tbody>






                          <tr role="row" class="odd">
                            <td class="sorting_1">Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Deliver/ Restaurnats</td>
                            <td>

                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr><tr role="row" class="even"><td class="sorting_1">Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Dinners/ Delivery</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr><tr role="row" class="odd"><td class="sorting_1">Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Delivery</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr><tr role="row" class="even"><td class="sorting_1">Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Dinners</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr></tbody>

                        </table></div></div><div class="row"><div class="col-sm-5"><div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1 to 4 of 4 entries</div></div><div class="col-sm-7"><div class="dataTables_paginate paging_simple_numbers" id="example1_paginate"><ul class="pagination"><li class="paginate_button previous disabled" id="example1_previous"><a href="#" aria-controls="example1" data-dt-idx="0" tabindex="0">Previous</a></li><li class="paginate_button active"><a href="#" aria-controls="example1" data-dt-idx="1" tabindex="0">1</a></li><li class="paginate_button next disabled" id="example1_next"><a href="#" aria-controls="example1" data-dt-idx="2" tabindex="0">Next</a></li></ul></div></div></div></div>
                      </div>
                      <!-- /.tab-pane -->
                      <div class="tab-pane" id="tab_2">

                        <table id="example1" class="table table-bordered table-striped">
                          <thead>
                          <tr>
                            <th>Shop Name</th>
                            <th>Shop ID</th>
                            <th>Contract Start</th>
                            <th>Status</th>
                            <th>POS Type</th>
                            <th style="width: 10%">Options</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Deliver/ Restaurnats</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr>
                          <tr><td>Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Dinners</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr>
                          <tr><td>Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Delivery/ Dinners</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr>
                          <tr><td>Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Delivery</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr>


                          </tbody>

                        </table>
                      </div>
                      <!-- /.tab-pane -->
                      <div class="tab-pane" id="tab_3">

                        <table id="example1" class="table table-bordered table-striped">
                          <thead>
                          <tr>
                            <th>Shop Name</th>
                            <th>Shop ID</th>
                            <th>Contract Start</th>
                            <th>Status</th>
                            <th>POS Type</th>
                            <th style="width: 10%">Options</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Deliver/ Restaurnats</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr>
                          <tr><td>Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Deliver/ Dinners</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr>
                          <tr><td>Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Dinners</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

                            </td>
                          </tr>
                          <tr><td>Shop Name</td>
                            <td>YamiYami-120</td>
                            <td>17:20-19.04.2019</td>
                            <td><label class="label label-success">Active</label></td>
                            <td>Delivery</td>
                            <td>
                              <a href="#myModal1" data-toggle="modal" data-target="#myModal1" class="btn btn-info"><i class="fa fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-times"></i></a>

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
                <!-- /.col -->


              </div>
              <!-- /.row -->
              <!-- END CUSTOM TABS -->

            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>

      </div>
    </div>
    <div class="modal right fade in" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">

      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header vd_bg-green text-center relative modal-header-projects bg-green" style="padding: 0">
            <button type="button" class=" close " data-dismiss="modal" aria-label="Close" style="margin-left: 10px; color: #fff; float:left;opacity:1;font-size:3rem;padding: 10px">
              <span aria-hidden="true"><i class="fa fa-arrow-circle-right"></i></span>
            </button>
            <h4 style="position: absolute; margin-left: 150px; margin-top: 10px;">Shop Name</h4>
            <a href="#" class="btn btn-primary" style="position: absolute; margin-left: -200px; margin-top: 5px;">Shop ID</a>
            <a href="#" class="btn btn-primary" style="position: absolute; margin-left: 100px; margin-top: 5px;">Shop Status</a>
            <a href="#myModal5" data-toggle="modal" data-target="#myModal5" class="btn btn-primary" style="position: absolute; margin-left: 400px; margin-top: 5px;">View Profile</a>
          </div>
          <div class="modal-body h100" style="padding: 0;">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="modal-head bg-green">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a href="#tab1-1-1" data-toggle="tab" aria-expanded="true">

                          <span>Monthly Income</span>
                        </a>
                      </li>
                      <li class="">
                        <a href="#tab1-2-2" data-toggle="tab" aria-expanded="false">

                          <span>Yearly Income</span>
                        </a>
                      </li>


                    </ul>
                  </div>
                  <div class="panel-body">
                    <div class="tab-content">
                      <div class="tab-pane fade active in" id="tab1-1-1">
                        <div class="panel">
                          <div class="col-md-12">

                            <div class="widget-box transparent" style="margin-top: 10px !important;">
                              <div class="widget-body widget-border">
                                <form class="form-inline well" style="margin-bottom: 1.5px !important; padding: 5px !important">
                                  <div class="f-group">
                                    <select id="memoryType" class="cus-form" style="margin-right: 2px !important;">
                                      <option value="GB" selected="selected">Select Month</option>
                                    </select>
                                  </div>
                                  <div class="f-group">
                                    <select id="memoryType" class="cus-form">
                                      <option value="GB" selected="selected">Select Month</option>
                                    </select>
                                  </div>
                                  <div class="f-group">
                                    <span style="margin: 5px; font-size: 16px">to</span>
                                  </div>
                                  <div class="f-group">
                                    <select id="memoryType" class="cus-form">
                                      <option value="GB" selected="selected">Select Month</option>
                                    </select>
                                  </div>
                                  <div class="f-group">
                                    <select id="memoryType" class="cus-form">
                                      <option value="GB" selected="selected">Select Year</option>
                                    </select>
                                  </div>
                                  <div class="f-group">
                                    <span style="margin: 5px; font-size: 16px">to</span>
                                  </div>

                                  <div class="f-group">
                                    <select id="memoryType" class="cus-form">
                                      <option value="GB" selected="selected">Select Year</option>
                                    </select>
                                  </div>

                                  <div class="f-group">
                                    <select id="memoryType" class="cus-form">
                                      <option value="GB" selected="selected">Sort By</option>
                                    </select>
                                  </div>

                                  <div class="f-group">
                                    <div class="input-group">
                                      <input type="text" class="cus-form" name="keywords" placeholder="Search...">
                                      <div class="input-group-btn">
                                        <button type="button" class="btnfas">
                                          <i class="fa fa-search"></i>
                                        </button>

                                        <button type="button" class="btnfas">
                                          <i class="fas fa-file-excel"></i>
                                        </button>

                                        <button type="button" class="btnfas">
                                          <i class="fas fa-file-pdf"></i>
                                        </button>

                                        <button type="button" class="btnfas">
                                          <i class="fas fa-print"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>

                          </div>
                          <div class="panel-heading">

                            <div class="pull-left" style="margin-top: 20px">
                              <!--  <h3 class="panel-title">Current Orders</h3> -->
                            </div>
                            <div class="pull-right my-width" style="margin-top: 20px">

                            </div>
                            <div class="clearfix"></div>
                          </div><!-- /.panel-heading -->
                          <div class="panel-body no-padding">
                            <div class="table-responsive" style="margin-top: -1px;">
                              <table class="table table-striped table-bordered table-hover" style="text-align: left">
                                <thead class="thin-border-bottom">
                                <tr>



                                  <th>Month</th>


                                  <th>YamiYAmi fee<br>

                                  </th>
                                  <th>Online Fee

                                    <br>

                                  </th>
                                  <th>Canceld</th>
                                  <th>Total</th>
                                  <th style="width: 10%;">Options</th>


                                </tr></thead>
                                <tbody>
                                <tr>



                                  <td>02.2019</td>


                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td><a href="#myModal3" data-toggle="modal" data-target="#myModal3" class="btn btn-info"><i class="fa fa-eye"></i></a></td>
                                </tr>
                                <tr>



                                  <td>02.2019</td>


                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td><a href="#myModal3" data-toggle="modal" data-target="#myModal3" class="btn btn-info"><i class="fa fa-eye"></i></a></td>
                                </tr><tr>



                                  <td>02.2019</td>


                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td><a href="#myModal3" data-toggle="modal" data-target="#myModal3" class="btn btn-info"><i class="fa fa-eye"></i></a></td>
                                </tr>
                                <tr>



                                  <td>02.2019</td>


                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td>119 €</td>
                                  <td><a href="#myModal3" data-toggle="modal" data-target="#myModal3" class="btn btn-info"><i class="fa fa-eye"></i></a></td>
                                </tr>
                                </tbody>
                              </table>
                            </div><!-- /.table-responsive -->


                            <nav style="float:right">
                              <ul class="pagination">
                                <li class="page-item disabled">
                                  <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">Prev.</span>
                                    <span class="sr-only">Previous</span>
                                  </a>
                                </li>
                                <li class="page-item active">
                                  <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item">
                                  <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">Next</span>
                                    <span class="sr-only">Next</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>


                          </div><!-- /.panel-body -->
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab1-2-2">
                        <div class="panel">


                          <div class="panel-body no-padding">
                            <div class="table-responsive" style="margin-top: -1px;">
                              <table class="table table-striped table-bordered table-hover" style="text-align: left">
                                <thead class="thin-border-bottom">
                                <tr>



                                  <th>year</th>
                                  <th>Orders</th>

                                  <th>YamiYAmi fee<br>

                                  </th>
                                  <th>Online Fee

                                    <br>

                                  </th>

                                  <th>Total</th>
                                  <th>Option</th>


                                </tr></thead>
                                <tbody>
                                <tr>



                                  <td class="text-center">2017</td>
                                  <td class="text-center">100 </td>

                                  <td class="text-center">119 €</td>
                                  <td class="text-center">119 €</td>

                                  <td class="text-center">119 €</td>
                                  <td class="text-center">
                                    <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-default" role="button" style="
    float: right;
">
                                      <span class="fa fa-file-pdf-o bigger-110 red"></span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>



                                  <td class="text-center">2017</td>
                                  <td class="text-center">100 </td>

                                  <td class="text-center">119 €</td>
                                  <td class="text-center">119 €</td>

                                  <td class="text-center">119 €</td>
                                  <td class="text-center">
                                    <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-default" role="button" style="
    float: right;
">
                                      <span class="fa fa-file-pdf-o bigger-110 red"></span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>



                                  <td class="text-center">2017</td>
                                  <td class="text-center">100 </td>

                                  <td class="text-center">119 €</td>
                                  <td class="text-center">119 €</td>

                                  <td class="text-center">119 €</td>
                                  <td class="text-center">
                                    <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-default" role="button" style="
    float: right;
">
                                      <span class="fa fa-file-pdf-o bigger-110 red"></span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>



                                  <td class="text-center">2017</td>
                                  <td class="text-center">100 </td>

                                  <td class="text-center">119 €</td>
                                  <td class="text-center">119 €</td>

                                  <td class="text-center">119 €</td>
                                  <td class="text-center">
                                    <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-default" role="button" style="
    float: right;
">
                                      <span class="fa fa-file-pdf-o bigger-110 red"></span>
                                    </a>
                                  </td>
                                </tr>
                                <tr>



                                  <td class="text-center">2017</td>
                                  <td class="text-center">100 </td>

                                  <td class="text-center">119 €</td>
                                  <td class="text-center">119 €</td>

                                  <td class="text-center">119 €</td>
                                  <td class="text-center">
                                    <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-default" role="button" style="
    float: right;
">
                                      <span class="fa fa-file-pdf-o bigger-110 red"></span>
                                    </a>
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </div><!-- /.table-responsive -->

                            <nav style="float:right">
                              <ul class="pagination">
                                <li class="page-item disabled">
                                  <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">Prev.</span>
                                    <span class="sr-only">Previous</span>
                                  </a>
                                </li>
                                <li class="page-item active">
                                  <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item">
                                  <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">Next</span>
                                    <span class="sr-only">Next</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>




                          </div><!-- /.panel-body -->
                        </div>
                      </div>
                      <div class="tab-pane fade" id="tab1-3-3">
                        <div class="panel">
                          <div class="panel-heading">

                            <div class="pull-left">
                              <h3 class="panel-title">All Orders</h3>
                            </div>
                            <div class="pull-right my-width">
                              <div class="search input-group">
                                <input type="search" class="form-control" placeholder="Search Menu Card Item">
                                <span class="input-group-btn">
                                                  <button class="btn btn-default" type="button">
                                                     <span class="fa fa-search"></span>
                                                     <span class="sr-only">Search</span>
                            </button><button class="btn btn-default" type="button">
                          <span class="fa fa-copy bigger-110 pink"></span>
                          </button><button class="btn btn-default" type="button">
                          <span class="fa fa-database bigger-110 orange"></span>
                          </button><button class="btn btn-default" type="button">
                          <span class="fa fa-file-excel-o bigger-110 green"></span>
                          </button><button class="btn btn-default" type="button">
                          <span class="fa fa-file-pdf-o bigger-110 red"></span>
                          </button><button class="btn btn-default" type="button">
                          <span class="fa fa-print bigger-110 grey"></span>
                                                   </button>
                                               </span>
                              </div>
                            </div>
                            <div class="clearfix"></div>
                          </div><!-- /.panel-heading -->
                          <div class="panel-body no-padding">
                            <div class="table-responsive" style="margin-top: -1px;">
                              <table class="table table-striped table-primary">
                                <thead>
                                <tr>
                                  <th class="text-center border-right" style="width: 1%;">No.</th>
                                  <th>Order Id</th>
                                  <th>
                                    <select class="country">
                                      <option value="">--Select Month--</option>
                                      <option selected="" value="1">Janaury</option>
                                      <option value="2">February</option>
                                      <option value="3">March</option>
                                      <option value="4">April</option>
                                      <option value="5">May</option>
                                      <option value="6">June</option>
                                      <option value="7">July</option>
                                      <option value="8">August</option>
                                      <option value="9">September</option>
                                      <option value="10">October</option>
                                      <option value="11">November</option>
                                      <option value="12">December</option>
                                    </select>
                                  </th>
                                  <th>Username</th>
                                  <th>Time and Date</th>
                                  <th>Order Cash</th>
                                  <th>Order PayPal</th>
                                  <th>Order Sofort</th>
                                  <th>Subtotal</th>
                                  <th>Status</th>
                                  <th>Option</th>





                                </tr>
                                </thead>
                                <tbody>



                                <tr>
                                  <td>01</td>
                                  <td>YAMI-1202021</td>
                                  <td>1-2-2016</td>
                                  <td>Rizwan</td>
                                  <td>17:20 - 10.02.16</td>
                                  <td style="background-color:rgba(0, 255, 255, 0.35);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>
                                  <td style="background-color: rgba(255, 0, 0, 0.11);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>
                                  <td style="background-color:rgba(255, 247, 0, 0.32);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>

                                  <td style="background-color:rgba(180, 0, 255, 0.26);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>

                                  <td class="text-center">Done</td>
                                  <td class="text-center">
                                    <a href="#" class="btn btn-primary btn-xs rounded MyPadding" data-toggle="tooltip" data-placement="top" data-original-title="Edit" aria-describedby="tooltip541019"><i class="fa fa-pencil"></i></a>
                                    <a href="#" class="btn btn-success btn-xs MyPadding" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i class="fa fa-times"></i></a>


                                  </td>

                                </tr>

                                <tr>
                                  <td>01</td>
                                  <td>YAMI-1202021</td>
                                  <td>1-2-2016</td>
                                  <td>Rizwan</td>
                                  <td>17:20 - 10.02.16</td>
                                  <td style="background-color:rgba(0, 255, 255, 0.35);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>
                                  <td style="background-color: rgba(255, 0, 0, 0.11);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>
                                  <td style="background-color:rgba(255, 247, 0, 0.32);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>

                                  <td style="background-color:rgba(180, 0, 255, 0.26);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>

                                  <td class="text-center">Done</td>
                                  <td class="text-center">
                                    <a href="#" class="btn btn-primary btn-xs rounded MyPadding" data-toggle="tooltip" data-placement="top" data-original-title="Edit" aria-describedby="tooltip541019"><i class="fa fa-pencil"></i></a>
                                    <a href="#" class="btn btn-success btn-xs MyPadding" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i class="fa fa-times"></i></a>


                                  </td>

                                </tr>

                                <tr>
                                  <td>01</td>
                                  <td>YAMI-1202021</td>
                                  <td>1-2-2016</td>
                                  <td>Rizwan</td>
                                  <td>17:20 - 10.02.16</td>
                                  <td style="background-color:rgba(0, 255, 255, 0.35);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>
                                  <td style="background-color: rgba(255, 0, 0, 0.11);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>
                                  <td style="background-color:rgba(255, 247, 0, 0.32);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>

                                  <td style="background-color:rgba(180, 0, 255, 0.26);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>


                                  <td class="text-center">Done</td>
                                  <td class="text-center">
                                    <a href="#" class="btn btn-primary btn-xs rounded MyPadding" data-toggle="tooltip" data-placement="top" data-original-title="Edit" aria-describedby="tooltip541019"><i class="fa fa-pencil"></i></a>
                                    <a href="#" class="btn btn-success btn-xs MyPadding" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i class="fa fa-times"></i></a>


                                  </td>

                                </tr>

                                <tr>
                                  <td>01</td>
                                  <td>YAMI-1202021</td>
                                  <td>1-2-2016</td>
                                  <td>Rizwan</td>
                                  <td>17:20 - 10.02.16</td>
                                  <td style="background-color:rgba(0, 255, 255, 0.35);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>

                                      </tr></tbody></table>
                                  </td>
                                  <td style="background-color: rgba(255, 0, 0, 0.11);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>
                                  <td style="background-color:rgba(255, 247, 0, 0.32);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>


                                  <td style="background-color:rgba(180, 0, 255, 0.26);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>
                                  <td class="text-center">Done</td>
                                  <td class="text-center">
                                    <a href="#" class="btn btn-primary btn-xs rounded MyPadding" data-toggle="tooltip" data-placement="top" data-original-title="Edit" aria-describedby="tooltip541019"><i class="fa fa-pencil"></i></a>
                                    <a href="#" class="btn btn-success btn-xs MyPadding" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i class="fa fa-times"></i></a>


                                  </td>

                                </tr>

                                <tr>
                                  <td>01</td>
                                  <td>YAMI-1202021</td>
                                  <td>1-2-2016</td>
                                  <td>Rizwan</td>
                                  <td>17:20 - 10.02.16</td>
                                  <td style="background-color:rgba(0, 255, 255, 0.35);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>
                                  <td style="background-color: rgba(255, 0, 0, 0.11);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>
                                  <td style="background-color:rgba(255, 247, 0, 0.32);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>

                                  <td style="background-color:rgba(180, 0, 255, 0.26);">
                                    <table class="width-100">
                                      <tbody><tr><th width="50%" style="text-align:center">230 2 €</th>
                                      </tr></tbody></table>
                                  </td>


                                  <td class="text-center">Done</td>
                                  <td class="text-center">
                                    <a href="#" class="btn btn-primary btn-xs rounded MyPadding" data-toggle="tooltip" data-placement="top" data-original-title="Edit" aria-describedby="tooltip541019"><i class="fa fa-pencil"></i></a>
                                    <a href="#" class="btn btn-success btn-xs MyPadding" data-toggle="tooltip" data-placement="top" data-original-title="Delete"><i class="fa fa-times"></i></a>


                                  </td>

                                </tr>








                                </tbody>
                              </table>
                            </div><!-- /.table-responsive -->

                            <nav style="float:right">
                              <ul class="pagination">
                                <li class="page-item disabled">
                                  <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">짬</span>
                                    <span class="sr-only">Previous</span>
                                  </a>
                                </li>
                                <li class="page-item active">
                                  <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item"><a class="page-link" href="#">5</a></li>
                                <li class="page-item">
                                  <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">쨩</span>
                                    <span class="sr-only">Next</span>
                                  </a>
                                </li>
                              </ul>
                            </nav>

                          </div><!-- /.panel-body -->
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div><!-- modal-content -->
      </div><!-- modal-dialog -->
    </div>
  </div>
</template>
<style>
  /*@import './../../public/css/order.css';*/
  /*@import './../../public/css/pos.css';*/
</style>
<script>
export default {
name: 'pos-system'
}
</script>
