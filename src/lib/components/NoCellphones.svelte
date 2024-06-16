<script>
    import cellphone from '$lib/assets/cellphonewarn.gif';

</script>

<div class="main-container">
    <div class="cellphone"><img src={cellphone} alt="cellphone" /></div> 
</div>

<style>
    .main-container {
        height: 100%;
        width: 100%;
        position: absolute;
        color: black;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      background-color: blue;
        background-size: cover;
        z-index: 1000;
    }
</style>
