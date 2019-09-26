<template>
  <div class="container-fluid">
    <div class="col-md-12 col-xs-12" >

      <div class="col-md-12 page-content">

        <h1 class="page-title"><i class="fas fa-paperclip" style="font-size: 24px;"></i> Invoice</h1>

        <div class="box">
          <!-- <div class="box-header">
            <h3 class="box-title">Data Table With Full Features</h3>
          </div> -->
          <!-- /.box-header -->
          <div class="box-body">
            <!-- Small boxes (Stat box) -->
            <div class="row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="info-box" style="background: #ecf0f5;">
                  <span class="info-box-icon bg-red"><i class="fas fa-file-invoice-dollar"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text">New Bills</span>
                    <span class="info-box-number">1,410</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->

              <!-- /.col -->
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="info-box" style="background: #ecf0f5;">
                  <span class="info-box-icon bg-orange" style="background: #FFA500;"><i class="fas fa-exclamation"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text">Depend</span>
                    <span class="info-box-number">13,648</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="info-box" style="background: #ecf0f5;">
                  <span class="info-box-icon bg-green"><i class="fas fa-check"></i></span>

                  <div class="info-box-content">
                    <span class="info-box-text">Done</span>
                    <span class="info-box-number">93,139</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
            <!-- START CUSTOM TABS -->
            <!--  <h2 class="page-header">AdminLTE Custom Tabs</h2> -->

            <div class="row">
              <div class="col-md-12">
                <!-- Custom Tabs -->
                <div class="nav-tabs-custom">
                  <ul class="nav nav-tabs">
                    <li class="active"><a href="#tab_1" data-toggle="tab"><b>New Invoice</b></a></li>
                    <li><a href="#tab_2" data-toggle="tab"><b>Accepted Invoice</b></a></li>
                    <li><a href="#tab_3" data-toggle="tab"><b>Denied Invoice</b></a></li>
                    <li><a href="#tab_4" data-toggle="tab"><b>On Hold</b></a></li>

                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active" id="tab_1">

                      <table id="example1" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                          <th style="width: 8%">#</th>
                          <th>Shop Name</th>
                          <th>Shop ID</th>
                          <th>Shop Type</th>
                          <th>Invoice Date</th>
                          <th style="width: 14%">Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>1</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>Deliver</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>
                            <a href="#modal-close" data-toggle="modal" data-target="#modal-close" class="btn btn-success"><i class="fa fa-check"></i></a>
                            <a href="#modal-close1" data-toggle="modal" data-target="#modal-close1" class="btn btn-danger"><i class="fa fa-minus-circle"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>Dinners</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>
                            <a href="#modal-close" data-toggle="modal" data-target="#modal-close" class="btn btn-success"><i class="fa fa-check"></i></a>
                            <a href="#modal-close1" data-toggle="modal" data-target="#modal-close1" class="btn btn-danger"><i class="fa fa-minus-circle"></i></a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>POS</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>
                            <a href="#modal-close" data-toggle="modal" data-target="#modal-close" class="btn btn-success"><i class="fa fa-check"></i></a>
                            <a href="#modal-close1" data-toggle="modal" data-target="#modal-close1" class="btn btn-danger"><i class="fa fa-minus-circle"></i></a>
                          </td>
                        </tr>



                        </tbody>

                      </table>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_2">

                      <table id="example1" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                          <th style="width: 8%">#</th>
                          <th>Shop Name</th>
                          <th>Shop ID</th>
                          <th>Shop Type</th>
                          <th>Invoice Date</th>
                          <th style="width: 15%">Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>1</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>Deliver</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>

                            <a href="#" class="btn btn-success "><label class="label">Accepted</label></a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>Dinners</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>

                            <a href="#" class="btn btn-success "><label class="label">Accepted</label></a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>POS</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>

                            <a href="#" class="btn btn-success "><label class="label">Accepted</label></a>
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
                          <th style="width: 8%">#</th>
                          <th>Shop Name</th>
                          <th>Shop ID</th>
                          <th>Shop Type</th>
                          <th>Invoice Date</th>
                          <th style="width: 15%">Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>1</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>Deliver</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>

                            <a href="#" class="btn btn-danger "><label class="label">Denied</label></a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>Dinners</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>

                            <a href="#" class="btn btn-danger "><label class="label">Denied</label></a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>POS</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>

                            <a href="#" class="btn btn-danger "><label class="label">Denied</label></a>
                          </td>
                        </tr>



                        </tbody>

                      </table>
                    </div>
                    <!-- /.tab-pane -->
                    <div class="tab-pane" id="tab_4">

                      <table id="example1" class="table table-bordered table-striped">
                        <thead>
                        <tr>
                          <th style="width: 8%">#</th>
                          <th>Shop Name</th>
                          <th>Shop ID</th>
                          <th>Shop Type</th>
                          <th>Invoice Date</th>
                          <th style="width: 15%">Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>1</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>Deliver</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>
                            <a href="#" class="btn btn-primary "><label class="label">On Hold</label></a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>Dinners</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>
                            <a href="#" class="btn btn-primary "><label class="label">On Hold</label></a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>The Company Ltd</td>
                          <td>Bitcoin</td>
                          <td>POS</td>
                          <td>19-04-2019</td>
                          <td>
                            <a href="#examplepdf" data-toggle="modal" data-target="#examplepdf" class="btn btn-info"><i class="fa fa-eye"></i></a>
                            <a href="#" class="btn btn-primary"><label class="label">On Hold</label></a>
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


      </div>
    </div>
    <div class="modal fade bd-example-modal-lg modal-add" id="examplepdf" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document" style="    margin-top: 25px;">
        <div class="modal-content" style="background: transparent; margin-left: 80px;">

          <div class="modal-body" style="background: transparent; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;  " >
            <iframe src="img/Instructions.pdf" style="height: 800px; width: 800px;" id="style-1"></iframe>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<style>
  /*@import './../../public/css/order.css';*/
</style>
<script>
  export default {
    name: 'invoice'
  }
</script>
