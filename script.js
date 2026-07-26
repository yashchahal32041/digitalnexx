document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Shukriya! Aapka message mil gaya hai, hum jald contact karenge.');
  this.reset();
});