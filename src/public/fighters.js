document.addEventListener('DOMContentLoaded', () => {
  const fighterForm = document.getElementById('fighter-form');

  fighterForm?.addEventListener('submit', async (event) => {
    console.log('Submitting form...');
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(fighterForm).entries());

    const jsonData = JSON.stringify(formData);

    const request = new CreateFighterRequestDto();
    Object.assign(request, JSON.parse(jsonData));
    const response = await fetch('/mma/fighter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: request,
    });

    if (response.ok) {
      alert('Fighter added successfully!');
      window.location.href = '/mma';
    } else {
      console.error('Error adding fighter:', response.statusText);
      alert('Failed to add fighter.');
    }
  });
});
