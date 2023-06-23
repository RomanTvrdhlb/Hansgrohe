import vars from "../_vars";

const { colorParrents } = vars;

  colorParrents.forEach(function(colorParrent){
    const colorName = colorParrent.querySelector('.single-card__color-name');
    const colorBtns = colorParrent.querySelectorAll('.color-button__label');
    const colorInputs = colorParrent.querySelectorAll('.color-button__field ');

    colorInputs.forEach(function(colorInput){
        if(colorInput.checked){
            updateText(colorInput.value)
        }
        
    })
 
    colorBtns.forEach(function(colorBtn){
        colorBtn.addEventListener('change', function(e){
            e.preventDefault();
            updateText(colorBtn.querySelector('input').value);
        })
    })
    function updateText(text) {
        colorName.textContent = text;
      }
  })

