function mouseDown() {
    console.log('ข้อความถูก mouseDown');
  }
  
  function mouseUp() {
    console.log('ข้อความถูก mouseUp');
    calculate(); 
  }
  
  function mouseOver() {
    console.log('เมาส์กำลังอยู่บนข้อความ');
  }
  
  
  function calculate() {
    const profit = parseFloat(document.getElementById("profit").value);
    const cost = parseFloat(document.getElementById("cost").value);
    const percentageDisplay = document.getElementById("percentage");
  
    if (!isNaN(profit) && !isNaN(cost) && cost > 0) {
      const percentage = (profit / cost) * 100;
      percentageDisplay.textContent = percentage.toFixed(2); 
    } else {
      percentageDisplay.textContent = "กรอกข้อมูลผิด"; 
    }
  }
  