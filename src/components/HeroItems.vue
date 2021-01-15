<template>
  <div>
    <h1>TASTIEST PIZZA EVER</h1>
    <p>Ready in 75 seconds</p>
    <button>Place Order</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100vh;
        max-height: 100%;
        padding: 0 2rem;
        width: 650px;
        color: #ffffff;
        text-transform: uppercase;
        line-height: 1;
        font-weight: bold;
    }
    @media screen and (max-width: 650px){
        div{
            width: 100%;
        }
    }
    h1{
        font-size: clamp(2.5rem, 10vw, 5rem);
        margin-bottom: 1rem;
        box-shadow: 2px 5px #e9ba23;
        letter-spacing: 3px;

    }
    p{
       font-size: clamp(2rem, 2.5vw, 3rem); 
       margin-bottom: 2rem;
    }
    button{
        font-size: 1.4rem;
        padding: 1rem 4rem;
        border: none;
        background: #e31837;
        color: #ffffff;
        transition: 0.2s ease-out;
    }

    button:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000
    }
</style>

