// ค่าบริการตามขนาดมาตรวัดน้ำ
const meterSizeRates = {
  '0.5': 25,
  '0.75': 40,
  '1': 50,
  '1.5': 80,
  '2': 300,
  '3': 400,
  '4': 500,
  '6': 900,
  '8': 1100,
  '12': 3500,
  '16': 5000
};

// อัตราค่าน้ำต่อหน่วย
const waterRates = {
  residential: 8.50, // ราคาต่อหน่วยสำหรับที่อยู่อาศัย
  business: 16.00    // ราคาต่อหน่วยสำหรับธุรกิจ
};

const calculateBtn = document.getElementById('calculateBtn');
let isMouseDown = false;

// Event listener สำหรับ mousedown
calculateBtn.addEventListener('mousedown', () => {
  isMouseDown = true;
  calculateBtn.style.backgroundColor = '#3d8b40';
});

// Event listener สำหรับ mouseup
calculateBtn.addEventListener('mouseup', () => {
  isMouseDown = false;
  calculateBtn.style.backgroundColor = '#4CAF50';
  calculateWaterBill();
});

// ฟังก์ชันคำนวณค่าน้ำ
function calculateWaterBill() {
  const waterUsage = parseFloat(document.getElementById('waterUsage').value) || 0;
  const customerType = document.getElementById('customerType').value;
  const meterSize = document.getElementById('meterSize').value;

  const waterRate = waterRates[customerType];
  const serviceCharge = meterSizeRates[meterSize];
  
  // คำนวณค่าน้ำ
  const waterCharge = waterUsage * waterRate;
  
  // คำนวณภาษี 7%
  const subtotal = waterCharge + serviceCharge;
  const tax = subtotal * 0.07;
  
  // คำนวณยอดรวมทั้งหมด
  const total = subtotal + tax;

  // แสดงผลลัพธ์
  document.getElementById('totalAmount').textContent = 
      `${total.toFixed(2)} บาท`;
}