<template>
    <div>
<div class="container-fluid" id="community-room">
    <div class="container" id="review-container"></div>
    <div class="container" id="chat-container"></div>
    <div class="container" id="news-container"></div>
</div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#community-room{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}

#review-container{
height: 100vh;
border: 1px solid black;
}

#chat-container{
height: 100vh;
border: 1px solid black;

}

#news-container{
height: 100vh;
border: 1px solid black;
}
</style>