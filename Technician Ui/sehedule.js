document.addEventListener("DOMContentLoaded", function () {
    const holidayTable = document.getElementById("holiday-table");
    const monthSelect = document.getElementById("month-select");

    const publicHolidays = {
      "2025-01-01": "วันขึ้นปีใหม่",
      "2025-02-12": "วันมาฆบูชา",
      "2025-04-06": "วันจักรี",
      "2025-04-13": "วันสงกรานต์",
      "2025-04-14": "วันสงกรานต์",
      "2025-04-15": "วันสงกรานต์",
      "2025-05-01": "วันแรงงาน",
      "2025-05-05": "วันฉัตรมงคล",
      "2025-07-10": "วันอาสาฬหบูชา",
      "2025-07-11": "วันเข้าพรรษา",
      "2025-07-28": "วันเฉลิมพระชนมพรรษาพระบาทสมเด็จพระเจ้าอยู่หัว",
      "2025-08-12": "วันแม่แห่งชาติ",
      "2025-10-23": "วันปิยมหาราช",
      "2025-12-05": "วันพ่อแห่งชาติ",
      "2025-12-10": "วันรัฐธรรมนูญ",
      "2025-12-31": "วันสิ้นปี"
    };

    function isWeekend(date) {
      return date.getDay() === 0 || date.getDay() === 6;
    }

    function formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('th-TH', options);
    }

    function getHolidaysForYear(year) {
      const holidays = [];

      for (let month = 0; month < 12; month++) {
        for (let day = 1; day <= 31; day++) {
          let date = new Date(year, month, day);
          if (date.getMonth() !== month) break;

          let formattedDate = date.toISOString().split('T')[0];
          let dayOfWeek = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"][date.getDay()];

          if (isWeekend(date) || publicHolidays[formattedDate]) {
            holidays.push({
              month: month,
              day: dayOfWeek,
              date: formatDate(date),
              status: publicHolidays[formattedDate] || "หยุดสุดสัปดาห์"
            });
          }
        }
      }
      return holidays;
    }

    const allHolidays = getHolidaysForYear(2025);

    function renderHolidays(month) {
      holidayTable.innerHTML = ""; // ล้างตารางก่อนแสดงผลใหม่
      const holidays = allHolidays.filter(h => h.month === parseInt(month));
      holidays.forEach(holiday => {
        let row = document.createElement("tr");
        row.innerHTML = `
          <td>${holiday.day}</td>
          <td>${holiday.date}</td>
          <td class="holiday">${holiday.status}</td>
        `;
        holidayTable.appendChild(row);
      });
    }

    // โหลดครั้งแรก (มกราคม)
    renderHolidays(0);

    // เมื่อมีการเปลี่ยนเดือน
    monthSelect.addEventListener("change", function () {
      renderHolidays(this.value);
    });
  });