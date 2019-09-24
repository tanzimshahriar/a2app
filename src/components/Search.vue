<template>
    <div id="Search">
         <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand"></a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Search"
}
</script>

<style scoped>
  .ml-auto, .mx-auto {
  margin-left: 0;
  margin: 0;

}
.form-inline .form-control{
    width:400px;
}

</style>