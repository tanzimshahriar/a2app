<template>
  <div id="jumbotron">
    <section id="intro" class="section-intro bg-secondary pt-5">
      <div class="container">
        <div class="row d-flex" style="min-height:600px;">
          <div class="col-sm-6 d-flex align-items-center">
            <header class="intro-wrap text-white">
              <h2 class="display-3">The new Iphone Designed to be fast</h2>
              <p class="lead">
                A no-brainer. But who has ever complained that a new iPhone felt
                slow? much faster, much stronger, much prettier and battery life
                last much longer what else do you want?<br />
              </p>
              <a href="#" class="btn btn-warning"
                >Add to Cart
                <img
                  src="../assets/images/cart1.png"
                  width="35px"
                  height="35px"
                />
              </a>
            </header>
            <!-- intro-wrap .// -->
          </div>
          <!-- col.// -->
          <div class="col-sm-6 text-right">
            <img
              src="../assets/images/Phones.png"
              class="img-fluid my-5"
              width="500"
            />
          </div>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>
      <!-- container .//  -->
    </section>
  </div>
</template>

<script>
export default {
  name: "Jumbotron"
};
</script>

<style scoped>
.btn-warning {
  margin: 10px;
  color: black;
}
</style>
