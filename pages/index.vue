<template>
  <div id="app">
    <div class="container">
      <section class="section">
        <h1 class="title">Power of the Gorilla</h1>
        <p class="subtitle">for you</p>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
* {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
#app {
  align-items: stretch;
  background: #0f4c81;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  align-items: center;
  .container {
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    .section {
      display: block;
      text-align: center;
      .title {
        font-size: 48px;
        font-weight: normal;
      }
      .subtitle {
        font-size: 24px;
      }
    }
  }
}
</style>
