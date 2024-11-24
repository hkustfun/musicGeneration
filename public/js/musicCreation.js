// musicCreation.js

document.getElementById('music-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Collect form data
    const tempo = document.getElementById('tempo').value;
    const timeSignature = document.getElementById('time-signature').value;
    const keySignature = document.getElementById('key-signature').value;
    const chordProgression = document.getElementById('chord-progression').value;
    const mood = document.getElementById('mood').value;
    const instruments = Array.from(document.getElementById('instruments').selectedOptions).map(option => option.value);
  
    // Send data to backend
    const response = await fetch('http://localhost:8000/api/generate-music/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // Include authentication token if required
      },
      body: JSON.stringify({
        tempo,
        timeSignature,
        keySignature,
        chordProgression,
        mood,
        instruments
      })
    });
  
    const data = await response.json();
  
    // Display generated music
    if (data.success) {
      const musicPreview = document.getElementById('music-preview');
      const audio = document.createElement('audio');
      audio.controls = true;
      audio.src = data.midi_file_url;
      musicPreview.innerHTML = '';
      musicPreview.appendChild(audio);
    } else {
      // Handle errors
      alert('Error generating music');
    }
  });