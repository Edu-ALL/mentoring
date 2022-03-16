<template>
  <div id="invoice">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          From : <br />
          PT. Jawara Edukasih Indonesia <br />
          Jl Jeruk Kembar Blok Q9, No. 15 <br />
          Srengseng, Kembangan, Jakarta Barat 11630

          <br /><br />

          To : <br />
          Maxmilian Halim Jl. Ametis G 20 <br />
          Permata Hijau Jakarta Selatan <br />
          DKI Jakarta <br />
        </div>
        <div class="col-md-6">
          <table class="w-100" border="0">
            <tr class="my-0">
              <td>Invoice No</td>
              <td width="3%">:</td>
              <td>32/234235/235235/2022</td>
            </tr>
            <tr>
              <td>Date</td>
              <td width="1%">:</td>
              <td>24 March 2022</td>
            </tr>
            <tr>
              <td>Due Date</td>
              <td width="1%">:</td>
              <td>26 March 2022</td>
            </tr>
          </table>
        </div>
        <div class="col-md-12 mt-3">
          <table class="table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service</td>
                <td>24 March 2022</td>
                <td>Rp. 500.000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colspan="2">Total</th>
                <th>Rp. 500.000</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#invoice {
  font-size: 0.8em;
}
</style>