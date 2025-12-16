import { useState, useEffect } from 'react';

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
        <div className="status-text">{text}</div>
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
