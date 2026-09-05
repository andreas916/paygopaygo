import React from 'react';
import { useBudget } from '../../context/BudgetContext';
import { 
  ArrowLeft, 
  Search, 
  Clock, 
  Bookmark, 
  ChevronRight, 
  Coins, 
  Bike
} from 'lucide-react';

export const GoRide1Page: React.FC = () => {
  const { goToScreen } = useBudget();

  return (
    <div 
      style={{ 
        background: '#00600a', 
        minHeight: '100%', 
        position: 'relative',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        flexShrink: 0
      }}
    >
      {/* Top Night Banner Section */}
      <div 
        style={{ 
          background: 'linear-gradient(180deg, #004d08 0%, #00730d 60%, #00880f 100%)',
          padding: '12px 16px 20px',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0
        }}
      >
        {/* Back Button */}
        <button 
          onClick={() => goToScreen('gojek')}
          style={{ 
            width: '38px', 
            height: '38px', 
            borderRadius: '50%', 
            background: '#ffffff', 
            border: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            marginBottom: '14px'
          }}
        >
          <ArrowLeft size={20} color="#0f172a" />
        </button>

        {/* Decorative Moon and Confetti */}
        <div style={{ position: 'absolute', top: '16px', left: '80px', fontSize: '24px', opacity: 0.85 }}>
          🌙
        </div>
        <div style={{ position: 'absolute', top: '10px', right: '30px', fontSize: '18px', opacity: 0.7 }}>
          ✨
        </div>

        {/* Hero Graphic / Vehicle Skyline Silhouette */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '90px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 10px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Bike size={24} color="#a7f3d0" />
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#ecfdf5' }}>GoRide</span>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.25)', padding: '6px 12px', borderRadius: '14px', textAlign: 'center' }}>
              <span style={{ fontSize: '22px' }}>🛵 🚗 🛵</span>
            </div>
          </div>
        </div>

        {/* Greeting Text */}
        <div style={{ textAlign: 'center', marginTop: '6px' }}>
          <h1 style={{ fontSize: '21px', fontWeight: 900, margin: '0 0 4px', color: '#ffffff', letterSpacing: '-0.3px' }}>
            Mau kemana, daniel?
          </h1>
          <p style={{ fontSize: '12.5px', color: '#bbf7d0', margin: 0, fontWeight: 500 }}>
            Jangan lupa bahagiain diri, ya.
          </p>
        </div>

        {/* CashBack Card */}
        <div 
          style={{ 
            marginTop: '16px',
            background: '#009b11',
            borderRadius: '16px',
            padding: '10px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Coins size={18} color="#00aa13" />
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff' }}>
                Nikmati cashback spesial s.d. 25...
              </div>
              <div style={{ fontSize: '10px', color: '#dcfce7', fontWeight: 500 }}>
                Aktifkan pinjaman tunai GoPay Pinjam
              </div>
            </div>
          </div>
          <ChevronRight size={18} color="#ffffff" />
        </div>
      </div>

      {/* Main Content White Card (Full bottom panel) */}
      <div 
        style={{ 
          background: '#ffffff', 
          borderTopLeftRadius: '24px', 
          borderTopRightRadius: '24px', 
          padding: '16px',
          color: '#0f172a',
          minHeight: '440px',
          boxShadow: '0 -4px 16px rgba(0,0,0,0.08)'
        }}
      >
        {/* Map Preview Box */}
        <div 
          style={{ 
            height: '110px', 
            borderRadius: '16px', 
            background: '#f1f5f9', 
            border: '1px solid #e2e8f0', 
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '14px'
          }}
        >
          {/* Stylized Map Roads */}
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {/* Background terrain */}
            <rect width="100%" height="100%" fill="#f8fafc" />
            {/* Roads */}
            <path d="M-20,40 Q100,70 200,30 T420,60" stroke="#cbd5e1" strokeWidth="18" fill="none" />
            <path d="M-20,40 Q100,70 200,30 T420,60" stroke="#ffffff" strokeWidth="14" fill="none" />
            <path d="M140,-10 L180,120" stroke="#cbd5e1" strokeWidth="14" fill="none" />
            <path d="M140,-10 L180,120" stroke="#ffffff" strokeWidth="10" fill="none" />
            <path d="M260,-10 L230,120" stroke="#cbd5e1" strokeWidth="10" fill="none" />
            <path d="M260,-10 L230,120" stroke="#ffffff" strokeWidth="7" fill="none" />
            {/* Watermark label */}
            <text x="14" y="24" fill="#64748b" fontSize="11" fontWeight="700">Kampung Pelangi</text>
          </svg>

          {/* User Location Dot */}
          <div 
            style={{ 
              position: 'absolute', 
              top: '46px', 
              left: '170px', 
              width: '18px', 
              height: '18px', 
              borderRadius: '50%', 
              background: 'rgba(37, 99, 235, 0.25)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
          >
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#2563eb', border: '2px solid #ffffff' }} />
          </div>

          {/* Scattered Nearby Drivers */}
          <div style={{ position: 'absolute', top: '18px', left: '110px', transform: 'rotate(-10deg)', fontSize: '14px' }}>🛵</div>
          <div style={{ position: 'absolute', top: '35px', left: '125px', transform: 'rotate(15deg)', fontSize: '14px' }}>🛵</div>
          <div style={{ position: 'absolute', top: '15px', right: '110px', transform: 'rotate(5deg)', fontSize: '14px' }}>🛵</div>
          <div style={{ position: 'absolute', top: '32px', right: '95px', transform: 'rotate(-25deg)', fontSize: '14px' }}>🛵</div>
          <div style={{ position: 'absolute', bottom: '12px', left: '185px', fontSize: '14px' }}>🛵</div>

          {/* Google Logo text */}
          <div style={{ position: 'absolute', bottom: '6px', left: '10px', fontSize: '10px', fontWeight: 800, color: '#94a3b8' }}>
            Google
          </div>
        </div>

        {/* Destination Search Pill */}
        <div 
          style={{ 
            background: '#ffffff', 
            borderRadius: '999px', 
            border: '1px solid #cbd5e1', 
            padding: '10px 16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            marginBottom: '14px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#ea580c', border: '3px solid #ffedd5' }} />
            <span style={{ fontSize: '13.5px', color: '#64748b', fontWeight: 500 }}>Cari lokasi tujuan</span>
          </div>
          <Search size={18} color="#64748b" />
        </div>

        {/* Quick Saved Bookmark Pills */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', overflowX: 'auto', paddingBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '999px', fontSize: '11.5px', fontWeight: 700, color: '#334155', whiteSpace: 'nowrap' }}>
            <Bookmark size={13} fill="#475569" color="#475569" />
            <span>Kos Daniel</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '999px', fontSize: '11.5px', fontWeight: 700, color: '#334155', whiteSpace: 'nowrap' }}>
            <Bookmark size={13} fill="#475569" color="#475569" />
            <span>Asramaaa</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '999px', fontSize: '11.5px', fontWeight: 700, color: '#334155', whiteSpace: 'nowrap' }}>
            <Bookmark size={13} fill="#475569" color="#475569" />
            <span>Kos P...</span>
          </div>
        </div>

        {/* Recent Destinations List */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Target 1: Universitas Indonesia (CLICKABLE) */}
          <div 
            className="demo-glow-green"
            onClick={() => goToScreen('goride_2')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '14px', 
              padding: '12px 14px', 
              background: '#f8fafc',
              borderRadius: '16px',
              border: '1.5px solid #a7f3d0',
              cursor: 'pointer',
              marginBottom: '8px'
            }}
          >
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Clock size={16} color="#00aa13" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
                Universitas Indonesia
              </div>
            </div>
            <Bookmark size={16} color="#00aa13" />
          </div>

          {/* Target 2: Mie Gacoan */}
          <div 
            onClick={() => goToScreen('goride_2')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '14px', 
              padding: '14px 0', 
              borderBottom: '1px solid #f1f5f9',
              cursor: 'pointer'
            }}
          >
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Clock size={16} color="#64748b" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
                Mie Gacoan
              </div>
            </div>
            <Bookmark size={16} color="#94a3b8" />
          </div>

          {/* Target 3: Uchi Parfume */}
          <div 
            onClick={() => goToScreen('goride_2')}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '14px', 
              padding: '14px 0', 
              borderBottom: '1px solid #f1f5f9',
              cursor: 'pointer'
            }}
          >
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Clock size={16} color="#64748b" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
                Uchi Parfume
              </div>
            </div>
            <Bookmark size={16} color="#94a3b8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoRide1Page;
