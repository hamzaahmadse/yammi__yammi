<template>
  <div class="container-fluid">
    <div class="col-md-12 col-xs-12" >

      <div class="col-md-12 page-content">

        <div class="customerTable">

          <!-- Tabs start here -->
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#tab_male" data-toggle="tab" aria-expanded="true"><b>Currency</b><div class="ripple-container"></div></a></li>
              <li class=""><a href="#tab_female" data-toggle="tab" aria-expanded="false"><b>Prefix</b><div class="ripple-container"></div></a></li>

              <li class=""><a href="#tab_others" data-toggle="tab" aria-expanded="false"><b>Website Title</b></a></li>

              <li class=""><a href="#tab_others" data-toggle="tab" aria-expanded="false"><b>Upload Logo</b></a></li>

              <li class=""><a href="#tab_others" data-toggle="tab" aria-expanded="false"><b>Homepage images</b></a></li>


            </ul>
          </div>

          <!-- Tabs end here -->
          <div class="tab-content">
            <div class="tab-pane active" id="tab_male">
              <table>

                <tbody>

                <tr class="tbl-td1">
                  <td>Currency</td>
                  <td>
                    <div class="radio">

                      <label class="">
                        <div class="iradio_flat-green" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" class="flat-red" name="currency" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                        € Euro
                      </label>
                    </div>
                  </td>


                  <td>
                    <div class="radio">
                      <label class="hover">
                        <div class="iradio_flat-green checked hover" aria-checked="true" aria-disabled="false" style="position: relative;"><input type="radio" class="flat-red" name="currency" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                        $ Dollar
                      </label>
                    </div>
                  </td>

                  <td style="width: 15%"><a href="#" class="btn btn-success">Save</a>
                    <a href="#" class="btn btn-primary">Edit</a></td>


                </tr>
                <tr>
                  <td>Currency Type</td>

                  <td>
                    <div class="radio">

                      <label class="">
                        <div class="iradio_flat-green" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" class="flat-red" name="type" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                        € 250
                      </label>
                    </div>
                  </td>



                  <td>
                    <div class="radio">
                      <label class="">
                        <div class="iradio_flat-green" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" class="flat-red" name="type" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                        € 250
                      </label>
                    </div>
                  </td>

                  <td style="width: 15%"><a href="#" class="btn btn-success">Save</a>
                    <a href="#" class="btn btn-primary">Edit</a></td>


                </tr>
                <tr class="tbl-td1">


                  <td>Sign For Price</td>


                  <td>
                    <div class="radio">
                      <label class="hover">
                        <div class="iradio_flat-green hover" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" class="flat-red" name="point" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                        Kuma
                      </label>
                    </div>
                  </td>


                  <td>
                    <div class="radio">
                      <label class="">
                        <div class="iradio_flat-green" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="radio" class="flat-red" name="point" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>
                        Point
                      </label>
                    </div>
                  </td>

                  <td style="width: 15%"><a href="#" class="btn btn-success">Save</a>
                    <a href="#" class="btn btn-primary">Edit</a></td>

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
                <tr v-for="pref in setting.setting_data.prefix">
                  <td>{{ pref.id }}</td>
                  <td>{{ pref.user_id }}</td>
                  <td>{{ pref.name }}</td>
                  <td>{{ pref.zip_code }}</td>
                  <td>{{ pref.last_order }}</td>
                  <td>{{ pref.order }}</td>
                  <td><i class="fa fa-euro"></i>{{ pref.spend }}</td>
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

                <tr v-for="website in setting.setting_data.website_title">
                  <td>{{ website.id }}</td>
                  <td>{{ website.user_id }}</td>
                  <td>{{ website.name }}</td>
                  <td>{{ website.zip_code }}</td>
                  <td>{{ website.last_order }}</td>
                  <td>{{ website.order }}</td>
                  <td><i class="fa fa-euro"></i>{{ website.spend }}</td>
                </tr>
                </tbody>
              </table>
            </div>
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
  import {mapState} from 'vuex';
  export default {
    name: 'setting',
    data(){
      return {

      }
    },
    computed: {
      ...mapState({
        setting: (state)=>{
          return state.setting;
        }
      })
    }
  }
</script>
