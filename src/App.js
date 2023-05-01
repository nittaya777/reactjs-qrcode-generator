import "./App.css";
import QRCode from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err);
      console.log(url);
      setQrcode(url);
    });
  };

  return (
    <div>
      <div className="form-generate">
        <label>Enter your link here</label>
        <div className="box">
          <input type="text" placeholder="e.g. https://github.com" value={url} onChange={(e)=>setUrl(e.target.value)} />
          <button onClick={()=>GenerateQRCode()}>Generate</button>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="qr-code-bg">
            <div className="qr-code">
              <img src={qrcode} alt=""/>
            </div>
          </div>
          <div className="url"><b>{url}</b></div>
          {qrcode && <span className="link"><a href={qrcode} download="qrcode.png">Download QR CODE</a></span>}
          
        </div>
      </div>
    </div>
  );
}

export default App;
