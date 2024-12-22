function calculateFare() {
    const distance = parseFloat(document.getElementById("distance").value);
    const trafficTime = parseFloat(document.getElementById("traffic").value);
  
    if (isNaN(distance) || distance <= 0) {
      document.getElementById("result").innerText = "กรุณากรอกระยะทางที่ถูกต้อง";
      return;
    }
  
    let fare = 0;
      
    if (distance <= 1) {
      fare = 40;
    } else if (distance <= 10) {
      fare = 40 + (distance - 1) * 6.5;
    } else if (distance <= 20) {
      fare = 40 + 9 * 6.5 + (distance - 10) * 7;
    } else if (distance <= 40) {
      fare = 40 + 9 * 6.5 + 10 * 7 + (distance - 20) * 8;
    } else if (distance <= 60) {
      fare = 40 + 9 * 6.5 + 10 * 7 + 20 * 8 + (distance - 40) * 8.5;
    } else if (distance <= 80) {
      fare = 40 + 9 * 6.5 + 10 * 7 + 20 * 8 + 20 * 8.5 + (distance - 60) * 9;
    } else {
      fare = 40 + 9 * 6.5 + 10 * 7 + 20 * 8 + 20 * 8.5 + 20 * 9 + (distance - 80) * 10.5;
    }
  
    const trafficCharge = trafficTime > 0 ? trafficTime * 3 : 0;
  
    const totalFare = fare + trafficCharge;
  
    document.getElementById("result").innerText = `ราคาทั้งหมด: ${totalFare.toFixed(2)} บาท`;
  }
  
  function changeName() {
    const distanceInput = document.querySelector('input[name=distance]');
    const trafficInput = document.querySelector('input[name=traffic]');
    console.log("ระยะทาง:", distanceInput.value);
    console.log("เวลารถติด:", trafficInput.value);
  }
  