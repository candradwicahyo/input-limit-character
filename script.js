window.onload = () => {
  
  function getLimit() {
    const inputLimit = document.querySelectorAll('.input-limit');
    inputLimit.forEach(input => {
      // ambil element texy
      const text = input.nextElementSibling;
      // limit dari input
      const limit = input.dataset.limit;
      // tampilkan limit
      text.textContent = `${input.value.length} / ${limit}`;
      // jalankan fungsi limitCharacter()
      limitCharacter(input, text, limit);
    });
  }
  
  getLimit();
  
  function limitCharacter(input, text, limit) {
    // ketika mengetik di input
    input.addEventListener('keyup', function() {
      // value input
      const value = this.value;
      /*
        jika panjang karakter input melebihi batas
        maka batasi jumlah karakternya
      */
      this.value = (value.length > limit) ? value.substring(0, limit) : value;
      /*
        jika panjang karakter sebuah input lebih kecil,
        sama dengan limit, maka tampilkan limit
      */
      if (value.length <= limit) text.textContent = `${value.length} / ${limit}`;
    });
  }
  
}