<template>
  <div>
    <div class="container-fluid">
      <div class="col-md-12 col-xs-12" style="padding-left: 0; padding-right: 0">

        <div class="col-md-12 page-content">
          <!--
          ======================
          Start Body Content
          ====================== sasd
          -->

          <div class="box">
            <!-- <div class="box-header">
              <h3 class="box-title">Data Table With Full Features</h3>
            </div> -->
            <!-- /.box-header -->
            <div class="box-body">

              <!-- /.row -->
              <!-- START CUSTOM TABS -->
              <!--  <h2 class="page-header">AdminLTE Custom Tabs</h2> -->

              <div class="row">
                <div class="col-md-12">
                  <!-- Custom Tabs -->
                  <div class="nav-tabs-custom">
                    <ul class="nav nav-tabs">
                      <li class="active"><a href="#tab_1" data-toggle="tab"><b>Shop 1</b></a></li>
                      <li><a href="#tab_2" data-toggle="tab"><b>Shop 2</b></a></li>
                      <li><a href="#tab_3" data-toggle="tab"><b>Shop 3</b></a></li>

                    </ul>
                    <div class="tab-content">
                      <div class="tab-pane active" id="tab_1">

                        <!-- (Stat box) Small boxes -->
                        <div class="row">
                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-aqua"><i class="fas fa-truck"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Orders Today</span>
                                <span class="info-box-number">{{dashboard.orders_today.count}}</span>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-green"><i class="fas fa-shopping-bag"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Pickups Today</span>
                                <span class="info-box-number">{{dashboard.pickups_today.count}}</span>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-yellow"><i class="fas fa-utensils"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Reservations Today</span>
                                <span class="info-box-number">{{dashboard.reservations_today.count}}</span>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-red"><i class="fas fa-glass-cheers"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Partyservice Today</span>
                                <span class="info-box-number">{{dashboard.party_services_today.count}}</span>
                              </div>
                            </div>
                          </div>
                          <!--
                                  <div class="col-md-2 col-sm-2 col-xs-12">
                                    <div class="info-box">
                                      <div class="info-box-content">
                                        <span class="info-box-text">New User Today</span>
                                        <span class="info-box-number">34</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-md-2 col-sm-2 col-xs-12">
                                    <div class="info-box">
                                      <div class="info-box-content">
                                        <span class="info-box-text">Income Today</span>
                                        <span class="info-box-number">349,45&euro;</span>
                                      </div>
                                    </div>
                                  </div> -->

                        </div>

                        <!-- End Small boxes  -->


                        <!-- 4 column start -->

                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Orders</span></h4>

                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ff0000" v-for="orders_today in dashboard.orders_today.orders">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: {{orders_today.order_id}}</h6>
                                    <div class="date">
                                      <h6>{{orders_today.date}}</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">{{orders_today.amount}}</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">{{orders_today.time}}</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>


                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Pickups</span></h4>

                            </div>


                            <div class="row mrgn1" style="border: 1px solid #ff0000" v-for="pickups in dashboard.pickups_today.orders">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: {{pickups.order_id}}</h6>
                                    <div class="date">
                                      <h6>{{pickups.date}}</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">{{pickups.amount}}</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">{{pickups.time}}</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>


                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Reservations</span></h4>

                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ff0000" v-for="reservations in dashboard.reservations_today.orders">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: {{reservations.order_id}}</h6>
                                    <div class="date">
                                      <h6>{{reservations.date}}</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">{{reservations.amount}}</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">{{reservations.time}}</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Partyservice Request</span></h4>

                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ff0000" v-for="party in dashboard.party_services_today.orders">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: {{party.order_id}}</h6>
                                    <div class="date">
                                      <h6>{{party.date}}</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">{{party.amount}}</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">{{party.time}}</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>



                        <!-- End 4 column start -->




                      </div>
                      <!-- /.tab-pane -->
                      <div class="tab-pane" id="tab_2">

                        <!-- (Stat box) Small boxes -->
                        <div class="row">
                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-aqua"><i class="fas fa-truck"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Orders Today</span>
                                <span class="info-box-number">100</span>
                              </div>
                            </div>
                          </div>


                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-green"><i class="fas fa-shopping-bag"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Pickups Today</span>
                                <span class="info-box-number">34</span>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-yellow"><i class="fas fa-utensils"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Reservations Today</span>
                                <span class="info-box-number">34</span>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-red"><i class="fas fa-glass-cheers"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Partyservice Today</span>
                                <span class="info-box-number">34</span>
                              </div>
                            </div>
                          </div>
                          <!--
                                  <div class="col-md-2 col-sm-2 col-xs-12">
                                    <div class="info-box">
                                      <div class="info-box-content">
                                        <span class="info-box-text">New User Today</span>
                                        <span class="info-box-number">34</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-md-2 col-sm-2 col-xs-12">
                                    <div class="info-box">
                                      <div class="info-box-content">
                                        <span class="info-box-text">Income Today</span>
                                        <span class="info-box-number">349,45&euro;</span>
                                      </div>
                                    </div>
                                  </div> -->

                        </div>

                        <!-- End Small boxes  -->


                        <!-- 4 column start -->
                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Orders</span></h4>

                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ff0000">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ebc804">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ebc804">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #749f01">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #749f01">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>


                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Pickups</span></h4>

                            </div>


                            <div class="row mrgn1" style="border: 1px solid #ff0000">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ebc804">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ebc804">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #749f01">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #749f01">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>


                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Reservations</span></h4>

                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ff0000">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ebc804">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ebc804">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #749f01">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #749f01">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Partyservice Request</span></h4>

                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ff0000">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ebc804">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ebc804">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #749f01">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #749f01">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>



                        <!-- End 4 column start -->



                      </div>
                      <!-- /.tab-pane -->
                      <div class="tab-pane" id="tab_3">

                        <!-- (Stat box) Small boxes -->
                        <div class="row">
                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-aqua"><i class="fas fa-truck"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Orders Today</span>
                                <span class="info-box-number">34</span>
                              </div>
                            </div>
                          </div>


                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-green"><i class="fas fa-shopping-bag"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Pickups Today</span>
                                <span class="info-box-number">34</span>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-yellow"><i class="fas fa-utensils"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Reservations Today</span>
                                <span class="info-box-number">34</span>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-3 col-sm-3 col-xs-12">
                            <div class="info-box">
                              <span class="info-box-icon bg-red"><i class="fas fa-glass-cheers"></i></span>
                              <div class="info-box-content">
                                <span class="info-box-text">Partyservice Today</span>
                                <span class="info-box-number">34</span>
                              </div>
                            </div>
                          </div>
                          <!--
                                  <div class="col-md-2 col-sm-2 col-xs-12">
                                    <div class="info-box">
                                      <div class="info-box-content">
                                        <span class="info-box-text">New User Today</span>
                                        <span class="info-box-number">34</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-md-2 col-sm-2 col-xs-12">
                                    <div class="info-box">
                                      <div class="info-box-content">
                                        <span class="info-box-text">Income Today</span>
                                        <span class="info-box-number">349,45&euro;</span>
                                      </div>
                                    </div>
                                  </div> -->

                        </div>

                        <!-- End Small boxes  -->


                        <!-- 4 column start -->

                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Orders</span></h4>

                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ff0000">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ebc804">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ebc804">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #749f01">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #749f01">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>


                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Pickups</span></h4>

                            </div>


                            <div class="row mrgn1" style="border: 1px solid #ff0000">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ebc804">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ebc804">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #749f01">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #749f01">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>


                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Reservations</span></h4>

                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ff0000">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ebc804">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ebc804">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #749f01">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #749f01">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <div class="col-md-3">
                          <div class="customerPanel-main">
                            <div class="brd-rad4 text-left br-t">
                              <h4 class="bg-h4 brd-btm_gray fs14 pdng10-2 mrgn0 clr_white"> <span style="margin-left: 15px;">Partyservice Request</span></h4>

                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ff0000">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ff0000">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #ebc804">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #ebc804">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row mrgn1" style="border: 1px solid #749f01">
                              <div class="col-xs-2">
                                <div class="row">
                                  <div class="pdng1">
                                    <img src="img/user1.jpg" class="img-responsive" alt="">
                                  </div>
                                </div>
                              </div>

                              <div class="col-xs-10">
                                <div class="row mta-1">
                                  <div class="col-md-8 pdd-r">
                                    <h6>Order Id: 234566</h6>
                                    <div class="date">
                                      <h6>06.10.19-19:45:50</h6>
                                    </div>
                                  </div>
                                  <div class="col-md-4">
                                    <h6 class="twenn-er">29,90&euro;</h6>
                                    <div class="minutes">
                                      <h6 style="color: #749f01">10 min</h6>
                                    </div>

                                  </div>



                                  <div class="col-md-4">

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                        <!-- End 4 column start -->



                      </div>
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





          <!-- End Body Content -->

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  // import DashBoardTab from '@/components/DashBoardTab';
  export default {
    // comments:{
    //   DashBoardTab
    // },
    data(){
      return {

      }
    },
    computed: {
      ...mapState({
        dashboard: (state)=>{
          return state.dashboard;
        }
      })
    }
  }
</script>
<style>
        body{
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 14px;
            color: #333;
        }

        .info-box-content{
          margin-left: 0px;
          text-align: center;
        }

        .info-box{
          background: #ecf0f5;
          /*border-top:2px solid #3c8dbc*/
        }

        .info-box-number{
          position: relative;
        top: 5px;
        }

        .info-box-text {
        margin-top: 10px;
        font-size: 13px;
    }

    .customerPanel-main{
      background: #ecf0f5;
    }


  </style>
