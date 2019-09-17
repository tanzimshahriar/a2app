<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <body class="relative" data-spy="scroll" data-target=".navbar-landing">
        <header class="section-header">
      <nav class="navbar navbar-landing navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
        <a class="navbar-brand mr-auto" href="#"> <img class="logo" src="../assets/images/comp.png"> LOGO</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar1">
                <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#intro">Link1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#features">Link2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#content">Link3</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#more">Link4</a>
            </li>
                </ul>
          </div>
      </div> <!-- container //  -->
      </nav>
      </header> <!-- section-header.// -->
      <section id="intro" class="section-intro bg-secondary pt-5">
<div class="container">
	<div class="row d-flex" style="min-height:600px;">
	<div class="col-sm-6 d-flex align-items-center">
		<header class="intro-wrap text-white">
			<h2 class="display-3"> Amazing place for  hero title </h2>
			<p class="lead">Bootstrap ecommerce is more then template - also framework. <br> It is modern and fully customizable websites, WebApp and Mobile template for Your Project</p>
			<a href="#" class="btn btn-warning">Download</a>
			<a href="#" class="btn btn-light">Learn more</a>
		</header>  <!-- intro-wrap .// -->
	</div> <!-- col.// -->
	<div class="col-sm-6 text-right">
		<img src="images/items/comp.png" class="img-fluid my-5" width="500">	
	</div> <!-- col.// -->
	</div> <!-- row.// -->
</div> <!-- container .//  -->
</section>
    </body>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style>
/* .home {
  display: flex;
  flex-direction: row;
} */
</style>
