<template>
  <div class="container-fluid">
    <div class="col-md-12 col-xs-12" >

      <div class="col-md-12 page-content">


        <h1 class="page-title"><i class="fas fa-cart-plus" style="font-size: 26px; position: relative; bottom: 3px"></i> ONLINE SHOP</h1>

        <div class="nav-tabs-custom">
          <ul class="nav nav-tabs">
            <li class="active"><a href="#tab_1" data-toggle="tab" aria-expanded="true" style="     padding: 10px 33px;"><b>Item</b><div class="ripple-container"></div></a></li>
            <li class=""><a href="#tab_2" data-toggle="tab" aria-expanded="false"><b>My Orders</b><div class="ripple-container"></div></a></li>



          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="tab_1">
              <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                <div class="row">
                  <div class="col-sm-4">
                    <main role="main">
                      <div class="product">
                        <figure>
                          <img src="https://raw.githubusercontent.com/itbruno/productpreview/master/assets/img/t-shirt.jpg" alt="Product Image" class="product-image">
                        </figure>

                        <div class="product-description">

                          <div class="info">
                            <h1>LOREM IPSUM</h1>
                            <p>
                              Lorem Ipsum is simply dummy
                              printing and typesetting industry
                            </p>
                          </div>

                          <div class="price">
                            89
                          </div>
                        </div>

                        <div class="product-sidebar">
                          <button class="buy">
                            <span>BUY ITEM</span>
                          </button>

                          <button class="info">
                            <span>MORE INFO</span>
                          </button>

                          <button class="size">
                            <span>SIZES</span>
                          </button>

                          <button class="colors">
								          <span>
								            <a href="" class="color black"></a>
								            <a href="" class="color white"></a>
								            <a href="" class="color red"></a>
								          </span>
                          </button>
                        </div>
                      </div>
                    </main>

                  </div>

                  <div class="col-sm-4">
                    <main role="main">
                      <div class="product">
                        <figure>
                          <img src="https://raw.githubusercontent.com/itbruno/productpreview/master/assets/img/t-shirt.jpg" alt="Product Image" class="product-image">
                        </figure>

                        <div class="product-description">

                          <div class="info">
                            <h1>LOREM IPSUM</h1>
                            <p>
                              Lorem Ipsum is simply dummy
                              printing and typesetting industry
                            </p>
                          </div>

                          <div class="price">
                            89
                          </div>
                        </div>

                        <div class="product-sidebar">
                          <button class="buy">
                            <span>BUY ITEM</span>
                          </button>

                          <button class="info">
                            <span>MORE INFO</span>
                          </button>

                          <button class="size">
                            <span>SIZES</span>
                          </button>

                          <button class="colors">
								          <span>
								            <a href="" class="color black"></a>
								            <a href="" class="color white"></a>
								            <a href="" class="color red"></a>
								          </span>
                          </button>
                        </div>
                      </div>
                    </main>

                  </div>

                  <div class="col-sm-4">
                    <main role="main">
                      <div class="product">
                        <figure>
                          <img src="https://raw.githubusercontent.com/itbruno/productpreview/master/assets/img/t-shirt.jpg" alt="Product Image" class="product-image">
                        </figure>

                        <div class="product-description">

                          <div class="info">
                            <h1>LOREM IPSUM</h1>
                            <p>
                              Lorem Ipsum is simply dummy
                              printing and typesetting industry
                            </p>
                          </div>

                          <div class="price">
                            89
                          </div>
                        </div>

                        <div class="product-sidebar">
                          <button class="buy">
                            <span>BUY ITEM</span>
                          </button>

                          <button class="info">
                            <span>MORE INFO</span>
                          </button>

                          <button class="size">
                            <span>SIZES</span>
                          </button>

                          <button class="colors">
								          <span>
								            <a href="" class="color black"></a>
								            <a href="" class="color white"></a>
								            <a href="" class="color red"></a>
								          </span>
                          </button>
                        </div>
                      </div>
                    </main>

                  </div>
                </div>

              </div>
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

                  <th>Order r ID</th>
                  <th>Item</th>

                  <th>Amount</th>
                  <th>Order Date</th>
                  <th>Price </th>
                  <th>Tracking ID</th>
                  <th style="width: 10%">Options</th>
                </tr>
                </thead>
                <tbody>
                <tr role="row" class="odd" v-for="online in online_shop.online_shop.order">

                  <td class="sorting_1">{{ online.order_id}}</td>
                  <td>{{ online.item}}</td>

                  <td>{{ online.order_id}}</td>
                  <td class="text-center">{{ online.amount}}</td>
                  <td class="text-center">{{ online.date}}</td>
                  <td class="text-center">{{ online.tracking_id}}</td>
                  <td>
                    <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
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




      </div>
    </div>

  </div>
</template>
<style>
  /*@import './../../public/css/order.css';*/
</style>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'online-shop',
        data(){
            return {

            }
        },
        computed: {
            ...mapState({
                online_shop: (state)=>{
                    return state.online_shop;
                }
            })
        }
    }
</script>
