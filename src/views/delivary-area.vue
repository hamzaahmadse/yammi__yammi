<template>

  <div class="container-fluid">
    <div class="col-md-12 col-xs-12 padding-de">

      <div class="col-md-12 page-content padding-de">
        <!-- Start column 7 -->
        <div class="col-md-7">
          <div class="container customerTable" style="width: 100%">
            <table>
              <thead>
              <tr class="tbl-header">
                <th>ZipCode</th>
                <th>Delivery Coast</th>
                <th>Cart Balance</th>
                <th>Delivery Free</th>
                <th>Option</th>
              </tr>
              </thead>
              <tbody>


              <tr v-for="del in delivary.delivary_data.delivary">
                <td>
                  <div class="text">{{ del.zip_code}}</div>
                </td>
                <td>
                  <div class="text">{{ del.cost}} <i class="fas fa-euro-sign"></i></div>
                </td>

                <td>
                  <div class="text">{{ del.balance}}<i class="fas fa-euro-sign"></i></div>
                </td>
                <td>
                  <div class="text">{{ del.free}}<i class="fas fa-euro-sign"></i></div>
                </td>


                <td>
                  <a class="edit" href="delivery-area.html#" data-toggle="modal"
                     data-target="#edit"><i class="fa fa-edit "></i></a>
                  <i class="fas fa-save save"></i>

                  <a href="delivery-area.html#"><i class="fa fa-times"></i></a></td>
              </tr>


              </tbody>
            </table>
          </div>

        </div>

        <!-- End column 7 -->

        <!-- Start column 5 -->
        <div class="col-md-5">
          <div class="customerPanel brd-rad4 brd_green_1px text-left mrgn20-1">
            <h4 class="brd-btm_green fs14 pdng10-2 mrgn0 clr_white bg-h4"><i
              class="fa fa-truck cus-track"></i> Delivery Area</h4>
            <div class="container" style="width: 100%">
              <div class="row">
                <div class="customerPanelUser2 col-md-12" v-for="del in delivary.delivary_area">
                  <div class="row mrgn0">
                    <div class="col-xs-3 pdng0">
                      <img src="img/mapmarker.jpg" class="img-responsive" alt="">
                    </div>
                    <div class="col-xs-9">
                      <h6 class="fs14">{{ del.address }}</h6>
                      <div class="bg_light-grey text-left clr_white relative progressWrapper">
                        <span class="progressBarValue relative">{{ del.percent }}</span>
                        <div class="progressBar absolute height100"
                             style="width:50%;"></div>
                      </div>
                    </div>
                  </div>
                </div><!-- customerPanel end -->

              </div>
            </div>
          </div>
          <div class="col-md-12 text-center">
            <a href="javascript:void(0);" data-target="#addDriver" data-toggle="modal"
               class="btn btn-primary"><i class="fa fa-plus"></i> Add new ZipCode</a>
          </div>
        </div>
        <!-- End column 5 -->
      </div>
    </div>

  </div>
</template>
<script>
  import {mapState} from 'vuex';
  export default {
    name: 'delivary-area',
    data(){
      return {

      }
    },
    computed: {
      ...mapState({
        delivary: (state)=>{
          return state.delivary;
        }
      })
    }
  }
</script>
