export default function Logo() {
  return (
    <>
      <style>
        {`
        .logo-clip-container {
          width: 100%;
          height: 100%;
					position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
				}
        .logo-clip-container .logo {
          width: 109px;
          height: 53px;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .logo-clip-container .line {
          display: flex;
          gap: 3px;
        }
        .logo-clip-container .line .box {
          width: 11px;
          height: 11px;
          background: #161b22;
          border-radius: 2px;
        }
        .logo-clip-container .line .box.active {
          background: #3aad52;
        }
        .logo-clip-container .line .box.active-1 {
          background: #1b4332;
        }
        .logo-clip-container .line .box.active-2 {
          background: #00603c;
        }
        .logo-clip-container .decoration {
          width: 39px;
          height: 39px;
          position: absolute;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .logo-clip-container .decoration.decoration-1 {
          top: 28px;
          left: 70px;
        }
        .logo-clip-container .decoration.decoration-2 {
          bottom: 28px;
          left: 182px;
        }
        .logo-clip-container .decoration.decoration-3 {
          top: 28px;
          right: 252px;
        }
        .logo-clip-container .decoration.decoration-4 {
          bottom: 28px;
          right: 154px;
        }
        .logo-clip-container .decoration.decoration-5 {
          top: 28px;
          right: 42px;
        }
        .logo-clip-container .decoration.decoration-1 .pattern-1,
        .logo-clip-container .decoration.decoration-4 .pattern-1 {
          animation: anim-pattern-1 0.6s infinite;
        }
        .logo-clip-container .decoration.decoration-2 .pattern-1,
        .logo-clip-container .decoration.decoration-5 .pattern-1 {
          animation: anim-pattern-1 0.6s 0.4s infinite;
        }
        .logo-clip-container .decoration.decoration-3 .pattern-1 {
          animation: anim-pattern-1 0.6s 0.2s infinite;
        }
        @keyframes anim-pattern-1 {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        .logo-clip-container .decoration.decoration-1 .pattern-2,
        .logo-clip-container .decoration.decoration-4 .pattern-2 {
          animation: anim-pattern-2 0.6s infinite;
        }
        .logo-clip-container .decoration.decoration-2 .pattern-2,
        .logo-clip-container .decoration.decoration-5 .pattern-2 {
          animation: anim-pattern-2 0.6s 0.4s infinite;
        }
        .logo-clip-container .decoration.decoration-3 .pattern-2 {
          animation: anim-pattern-2 0.6s 0.2s infinite;
        }
        @keyframes anim-pattern-2 {
          0%, 50% {
            opacity: 0;
          }
          51%, 100% {
            opacity: 1;
          }
        }
        `}
      </style>
      <div className="logo-clip-container">
        <div className="logo">
          <div className="line">
            <span className="box" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active" />
            <span className="box" />
          </div>
          <div className="line">
            <span className="box active" />
            <span className="box active" />
            <span className="box active-1" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active-1" />
            <span className="box active" />
            <span className="box active" />
          </div>
          <div className="line">
            <span className="box active" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active-1" />
            <span className="box active-1" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active" />
          </div>
          <div className="line">
            <span className="box" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active" />
            <span className="box active" />
            <span className="box" />
          </div>
        </div>
        <div className="decoration decoration-1">
          <div className="decoration pattern-1">
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
            <div className="line">
              <span className="box active-2" />
              <span className="box active-2" />
              <span className="box active-2" />
            </div>
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
          </div>
          <div className="decoration pattern-2">
            <div className="line">
              <span className="box active-2" />
              <span className="box" />
              <span className="box active-2" />
            </div>
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
            <div className="line">
              <span className="box active-2" />
              <span className="box" />
              <span className="box active-2" />
            </div>
          </div>
        </div>
        <div className="decoration decoration-2">
          <div className="decoration pattern-1">
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
            <div className="line">
              <span className="box active-2" />
              <span className="box active-2" />
              <span className="box active-2" />
            </div>
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
          </div>
          <div className="decoration pattern-2">
            <div className="line">
              <span className="box active-2" />
              <span className="box" />
              <span className="box active-2" />
            </div>
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
            <div className="line">
              <span className="box active-2" />
              <span className="box" />
              <span className="box active-2" />
            </div>
          </div>
        </div>
        <div className="decoration decoration-3">
          <div className="decoration pattern-1">
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
            <div className="line">
              <span className="box active-2" />
              <span className="box active-2" />
              <span className="box active-2" />
            </div>
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
          </div>
          <div className="decoration pattern-2">
            <div className="line">
              <span className="box active-2" />
              <span className="box" />
              <span className="box active-2" />
            </div>
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
            <div className="line">
              <span className="box active-2" />
              <span className="box" />
              <span className="box active-2" />
            </div>
          </div>
        </div>
        <div className="decoration decoration-4">
          <div className="decoration pattern-1">
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
            <div className="line">
              <span className="box active-2" />
              <span className="box active-2" />
              <span className="box active-2" />
            </div>
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
          </div>
          <div className="decoration pattern-2">
            <div className="line">
              <span className="box active-2" />
              <span className="box" />
              <span className="box active-2" />
            </div>
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
            <div className="line">
              <span className="box active-2" />
              <span className="box" />
              <span className="box active-2" />
            </div>
          </div>
        </div>
        <div className="decoration decoration-5">
          <div className="decoration pattern-1">
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
            <div className="line">
              <span className="box active-2" />
              <span className="box active-2" />
              <span className="box active-2" />
            </div>
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
          </div>
          <div className="decoration pattern-2">
            <div className="line">
              <span className="box active-2" />
              <span className="box" />
              <span className="box active-2" />
            </div>
            <div className="line">
              <span className="box" />
              <span className="box active-2" />
              <span className="box" />
            </div>
            <div className="line">
              <span className="box active-2" />
              <span className="box" />
              <span className="box active-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
