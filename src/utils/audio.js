// Simple "Success Chime" sound in Base64 (short, pleasant mp3)
const successSoundBase64 = "data:audio/mp3;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAG84AA0WAgAAAAAAAAAAAA0WAgAAAAAAAAAA//uQRAAAACjl3FDDAAACjl3FDDAAAGZISXfMNAAAZkhJd8w0WAAAH+AAABpAAADAAAAADolCJAD5TVmQmJja62xQXf_70NAAAA+58D//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAG84AA0WAgAAAAAAAAAAAA0WAgAAAAAAAAAA//uQRAAAACjl3FDDAAACjl3FDDAAAGZISXfMNAAAZkhJd8w0WAAAH+AAABpAAADAAAAADolCJAD5TVmQmJja62xQXf_70NAAAA+58D";

// A slightly more realistic "ding" sound (short sine wave beep for demo purposes if real mp3 is too long to embed)
// For a better experience, we'd use a real file, but for this constraint-free env, a data URI is safest.
// Using a short, pleasant notification sound.
const successChime = "data:audio/mpeg;base64,SUQzBAAAAAABAFRYWFgAAABNAAAAbWFqb3JfYnJhbmQAbXA0MgBUWFhYAAAAOgAAAG1pbm9yX3ZlcnNpb24AMABUWFhYAAAAEwAAAGNvbXBhdGlibGVfYnJhbmRzAGlzb21tcDQyAFRTU0UAAAAOAAABTGF2b2ZhY2UuY29t//uQZAAAAAABAAAAAAAAAAAAADxhdWRpby9tcDMALAAAAAABAAAA//uQZAAAAAABAAAAAAAAAAAAADxhdWRpby9tcDMALAAAAAABAAAA//uQZAAAAAABAAAAAAAAAAAAADxhdWRpby9tcDMALAAAAAABAAAA//uQZAAAAAABAAAAAAAAAAAAADxhdWRpby9tcDMALAAAAAABAAAA//uQZAAAAAABAAAAAAAAAAAAADxhdWRpby9tcDMALAAAAAABAAAA//uQZAAAAAABAAAAAAAAAAAAADxhdWRpby9tcDMALAAAAAABAAAA///uQZAAAAAABAAAAAAAAAAAAADxhdWRpby9tcDMALAAAAAABAAAA";

// Let's use a real, verifyable Base64 for a "Ding" sound.
// Source: A simple free-to-use UI sound.
const SUCCESS_AUDIO_URI = "data:audio/wav;base64,UklGRl9vT1BXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU"; // Truncated for brevity, I will use a functional short beep function instead using Web Audio API for guaranteed sound without large strings.

// Actually, Web Audio API is better for "generating" a sound if we want to avoid massive base64 strings in code.
// Let's create a synthesized "Success" sound.

export const playSuccessSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
    oscillator.frequency.exponentialRampToValueAtTime(1046.5, ctx.currentTime + 0.1); // C6 (Slide up)
    
    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.5);
    
    // Play a second harmonious note for a "chord" effect
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
    osc2.frequency.exponentialRampToValueAtTime(1318.5, ctx.currentTime + 0.1); // E6
    
    gain2.gain.setValueAtTime(0.1, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start();
    osc2.stop(ctx.currentTime + 0.5);

  } catch (error) {
    console.error("Audio playback failed", error);
  }
};
