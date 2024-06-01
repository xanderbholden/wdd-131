document.addEventListener("DOMContentLoaded", function() {

    var lastModified = document.lastModified;

    document.getElementById("lastModifiedDate").textContent = lastModified;
    
    var currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    
    function addLeadingZero(number) {
      return number < 10 ? '0' + number : number;
  }
  });
  