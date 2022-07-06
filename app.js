const app = Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
})
app.component ('calculator', {
  template: `
    <form v-on:submit.prevent="calculateArea">
      <h4>{{ title }}</h4>
      <p>Enter round duct diameter in inches</p>
      <input type="number" v-model="roundDuctDiameterInches" />
      <button>Calculate</button>
      <div class="answer">
        <h4>Round Duct Cross-sectional Area:&nbsp</h4>
        <p id=roundDuctArea>0</p>
        <p>&nbspSqFt</p>
      </div>
    </form>
  `,
  data() {
    return {
      title: 'Duct Area Calculators',
      roundDuctDiameterInches: 0
    }
  },
  methods: {
    calculateArea() {
      const roundDuctDiameterFeet = this.roundDuctDiameterInches / 12
      const base = 0.5 * roundDuctDiameterFeet
      const roundDuctArea = Math.PI * Math.pow(base, 2)
      console.log(`Duct Area: ${roundDuctArea.toFixed(5)} SqFt`)
      let answerText = document.getElementById('roundDuctArea')
      answerText.innerText = roundDuctArea.toFixed(5)
    }
  },
})
app.mount('#app')