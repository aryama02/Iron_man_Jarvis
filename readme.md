#  JARVIS: Voice Assistant with ARC Reactor UI

A high-tech, voice-controlled assistant inspired by Iron Man's JARVIS. This project features a stunning, interactive Arc Reactor UI that reacts to your voice in real-time.

---

## ✨ Features

- **🎙️ Voice Recognition**: Powered by Python and WebSockets for real-time speech-to-text.
- **⚛️ ARC Reactor UI**: A CSS-powered, animated Arc Reactor that serves as the visual heart of the assistant.
- **🤖 Robotic Typewriter Effect**: Responses appear with a fast-paced robotic typewriter effect, complete with digital glitch animations and a blinking terminal cursor.
- **🧠 AI Brain**: Integrated with **Ollama** to provide smart, context-aware responses.
- **🌐 Web & App Control**: Can open websites and launch local applications via voice commands.
- **🌤️ Live Weather**: Get real-time weather updates for any city.

---

## 🛠️ Tech Stack

### Frontend
- **React 18** + **Vite** (for lightning-fast development)
- **Vanilla CSS** (Complex animations, keyframes, and neon aesthetics)
- **WebSockets** (Real-time communication with the backend)
- **Orbitron Font** (The classic sci-fi/techno typeface)

### Backend
- **Python**
- **FastAPI** (High-performance web framework)
- **Uvicorn** (ASGI server)
- **Ollama API** (For local LLM processing)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Python 3.10+](https://www.python.org/)
- [Ollama](https://ollama.ai/) installed and running locally.

### 1. Setup Backend
1. Navigate to the root folder:
   ```bash
   pip install -r requirements.txt  # Ensure you have your requirements installed
   python main.py
   ```
   *The backend will start on `http://localhost:8000`.*

### 2. Setup Frontend
1. Navigate to the frontend directory:
   ```bash
   cd Arc_reactor/iron-man-arc-reactor
   npm install
   npm run dev
   ```
   *The frontend will start on `http://localhost:5173`.*

---

## 🎧 Usage

1. Open your browser to the frontend URL.
2. The Arc Reactor will appear in its idle state.
3. Speak clearly to trigger commands:
   - *"Open YouTube"*
   - *"What is the weather in New York?"*
   - *"Tell me a joke"* (processed by Ollama)
4. Watch as the text appears with a robotic glitch effect!

---

## 📜 License
*Project created as a tribute to the MCU and for advanced agentic coding practice.*
