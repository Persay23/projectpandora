function Result() {
    const form = document.getElementById('theform');
    const firstNameInput = document.getElementById('firstname');
    const surnameInput = document.getElementById('Surname');
    const ageInput = document.getElementById('age');
  
    const firstName = firstNameInput.value.trim();
    const surname = surnameInput.value.trim();
    const age = parseInt(ageInput.value.trim());
  
    if (!firstName || !surname || !age) {
      alert('Please fill out all fields');
      return;
    }
  

    if (age < 18) {
      alert('You must be 18 or older to submit this form');
      return;
    }
  
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('surname', surname);
    localStorage.setItem('age', age);
    alert(`Thank you for submitting the form, ${firstName} ${surname}`);

    const tableRow = `
      <tr>
        <td>${firstName}</td>
        <td>${surname}</td>
        <td>${age}</td>
      </tr>
    `;
    document.getElementById('tableBody').innerHTML += tableRow;
    document.getElementById('table').style.display = 'block';
}

