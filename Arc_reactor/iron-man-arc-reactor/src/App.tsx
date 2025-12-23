import { useState, useEffect, useRef } from 'react';

function TypewriterText({ text, status }: { text: string; status: string }) {
  const [displayText, setDisplayText] = useState('');
  const targetText = useRef(text);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    targetText.current = text;

    // If text is shorter than what we're displaying (e.g. a reset or new sequence)
    // we reset the display text.
    if (!text || !text.startsWith(displayText)) {
      setDisplayText('');
    }
  }, [text, displayText]);

  useEffect(() => {
    if (timer.current) window.clearInterval(timer.current);

    timer.current = window.setInterval(() => {
      setDisplayText((prev) => {
        if (prev.length < targetText.current.length) {
          return prev + targetText.current.charAt(prev.length);
        }
        return prev;
      });
    }, 45);

    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  return (
    <div className={`status-text ${status} ${displayText !== text ? 'typing' : ''}`}>
      <span className="text-content">{displayText}</span>
      <span className="cursor">-</span>
    </div>
  );
}

function App() {
  const [status, setStatus] = useState('idle');
  const [text, setText] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000/ws');

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.status) {
          if (data.status === 'recognized') {
            setText(data.text);
          } else {
            setStatus(data.status);
            if (data.status === 'speaking' && data.text) {
              setText(data.text);
            }
          }
        }
      } catch (e) {
        console.error("Error parsing WS message", e);
      }
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <div className={`cover ${status}`}>
        <TypewriterText text={text} status={status} />
        <div className="arcReactor">
          <div className="triangle"></div>
          <div className="component-1">
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
          </div>
          <div className="component-2">
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
          </div>
          <div className="component-3"></div>
          <div className="component-4">
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
          </div>
          <div className="component-5">
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
          </div>
          <div className="component-6"></div>
          <div className="component-7"></div>
          <div className="component-8">
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
            <span className="innerComponent"></span>
          </div>
        </div></div>
    </>
  );
}

export default App;
