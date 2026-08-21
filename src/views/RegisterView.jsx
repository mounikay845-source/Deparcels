import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export const RegisterView = ({ onNavigateLogin }) => {
  const { login } = useAuth();
  const [step, setStep] = useState('register'); // 'register' | 'otp'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(60);

  // Countdown timer for OTP Resend
  useEffect(() => {
    let interval = null;
    if (step === 'otp' && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [step, resendTimer]);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setStep('otp');
    setResendTimer(60);
  };

  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input digit box
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyOtpSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const handleResendOtp = () => {
    setResendTimer(60);
  };

  return (
    <div className="auth-view-container">
      {/* Top Header */}
      <div className="auth-top-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="brand-logo">
          <i className="fa-solid fa-motorcycle" style={{ color: 'var(--primary-orange-light)', fontSize: 26, marginRight: 8 }}></i>
          <strong className="brand-name" style={{ fontSize: 22 }}>DPARCELS</strong>
        </div>
        <span
          onClick={onNavigateLogin}
          style={{ color: 'var(--text-muted)', cursor: 'pointer', fontSize: 12, fontWeight: 700 }}
        >
          &larr; BACK TO LOGIN
        </span>
      </div>

      {/* Middle Card */}
      <div className="auth-card-box">
        {step === 'register' ? (
          <>
            <h1 className="greeting-title" style={{ fontSize: 26, fontWeight: 900 }}>
              CREATE <span>ACCOUNT</span>
            </h1>
            <p className="subtitle" style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
              Sign up to request pickups and track live deliveries.
            </p>

            <form onSubmit={handleRegisterSubmit} style={{ marginTop: 24 }}>
              <div className="form-group">
                <label className="form-label">FULL NAME</label>
                <div className="input-wrapper">
                  <i className="fa-regular fa-user"></i>
                  <input
                    type="text"
                    className="input-control"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">EMAIL ADDRESS</label>
                <div className="input-wrapper">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    type="email"
                    className="input-control"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">PASSWORD</label>
                <div className="input-wrapper">
                  <i className="fa-solid fa-lock"></i>
                  <input
                    type="password"
                    className="input-control"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: 20 }}>
                CREATE ACCOUNT &rarr;
              </button>
            </form>

            <p style={{ fontSize: 13, textAlign: 'center', color: 'var(--text-muted)', marginTop: 24 }}>
              Already have an account?{' '}
              <span
                onClick={onNavigateLogin}
                style={{ color: 'var(--primary-orange-light)', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Log In
              </span>
            </p>
          </>
        ) : (
          /* STEP 2: VERIFY OTP SCREEN (MATCHING USER REFERENCE IMAGE) */
          <>
            <h1 className="greeting-title" style={{ fontSize: 28, fontWeight: 900, textAlign: 'center' }}>
              Verify OTP
            </h1>
            <p className="subtitle" style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', marginTop: 4 }}>
              Check your email for the code.
            </p>

            {/* Green Notification Banner */}
            <div className="otp-sent-banner">
              <i className="fa-solid fa-circle-check" style={{ color: '#22c55e', fontSize: 18, flexShrink: 0 }}></i>
              <span>Verification code sent to <strong style={{ color: '#ffffff' }}>{email || 'user@example.com'}</strong></span>
            </div>

            <form onSubmit={handleVerifyOtpSubmit}>
              {/* 6-Digit OTP Boxes */}
              <div className="otp-digits-wrapper">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength={1}
                    className="otp-digit-box"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                  />
                ))}
              </div>

              <button type="submit" className="btn-primary btn-orange-submit" style={{ marginTop: 8 }}>
                Verify Email
              </button>
            </form>

            {/* Footer Links & Timer */}
            <div className="otp-footer">
              <p className="resend-text">
                {resendTimer > 0 ? (
                  <span>RESEND IN <strong style={{ color: '#ffffff' }}>{resendTimer}S</strong></span>
                ) : (
                  <span onClick={handleResendOtp} className="resend-link">RESEND OTP CODE</span>
                )}
              </p>

              <p onClick={() => setStep('register')} className="wrong-email-link">
                Wrong email? Go back.
              </p>

              <p className="login-link-text">
                Already a member?{' '}
                <span onClick={onNavigateLogin} className="accent-link">
                  Log In
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
