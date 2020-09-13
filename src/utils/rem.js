export default {
  created() {
    var measure= document.createElement('div');
    measure.style.height= '10em';
    document.body.appendChild(measure);
    var fontSize = measure.offsetHeight / 10;
    document.body.removeChild(measure);
    console.log('fontSize =>', fontSize);
  },
}
