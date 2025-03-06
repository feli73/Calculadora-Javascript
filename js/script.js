let calculation = '';

   function updateCalculation(number) {
    calculation += number;
    console.log(calculation); 
    localStorage.setItem('calculation', calculation);
    document.querySelector('.js-showMessage').innerHTML = calculation;

    
   
   }
    
   

   function calculateResult() {
      try {
        calculation = eval(calculation) || ''; // Evaluates the expression and handles errors
        localStorage.setItem('calculation', calculation);
        console.log(calculation);
        document.querySelector('.js-showMessage').innerHTML = calculation;
      } catch (error) {
        console.error('Error evaluating calculation:', error);
        document.querySelector('.js-showMessage').innerHTML = 'Error';
      }
    }

    // Function to clear the calculation
    function clearCalculation() {
      calculation = '';
      localStorage.removeItem('calculation');
      console.log(calculation);
      document.querySelector('.js-showMessage').innerHTML = '0';
    }

    // Recover and display the calculation from localStorage on page load
    window.onload = function() {
      const recover = localStorage.getItem('calculation');
      if (recover) {
        calculation = recover;
        document.querySelector('.js-showMessage').innerHTML = calculation;
      } else {
        document.querySelector('.js-showMessage').innerHTML = '0';
      }
      console.log('Recovered calculation:', recover);
    };

   