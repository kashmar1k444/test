<template>
    <div class="lds-dual-ring"></div>
</template>

<style>
    .lds-dual-ring {
        position: absolute;
        display: inline-block;
        width: 200px;
        height: 200px;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 200px;
        height: 200px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: rgb(88, 101, 242) transparent rgb(88, 101, 242) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

</style>