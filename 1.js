function calculateAge() {
  const name = document.getElementById('name').value;
  const birthYear = document.getElementById('birthYear').value;
  const city = document.getElementById('city').value;

  const currentYear = new Date().getFullYear();
  let age = '';
  let ageGroup = '';

  if (birthYear) {
    age = currentYear - birthYear;
    if (age < 13) {
      ageGroup = 'дитина';
    } else if (age >= 13 && age < 18) {
      ageGroup = 'підліток';
    } else if (age >= 18 && age < 65) {
      ageGroup = 'дорослий';
    } else {
      ageGroup = 'літня людина';
    }
  } else {
    ageGroup = 'не вказано';
  }

  const capitalCity = 'Київ'; // Визначаємо столицю країни

  let resultMessage = `${name}, ви належите до вікової групи: ${ageGroup}. `;
  if (city.toLowerCase() === capitalCity.toLowerCase()) {
    resultMessage += `Ваше місто ${city} є столицею країни.`;
  } else {
    resultMessage += `Ваше місто ${city} не є столицею країни.`;
  }

  document.getElementById('result').innerText = resultMessage;
}
