import React from 'react';
import { useBudget } from '../../context/BudgetContext';
import { 
  ArrowLeft, 
  Crosshair, 
  FileEdit,
  ArrowUp
} from 'lucide-react';

export const GoRide2Page: React.FC = () => {
  const { goToScreen } = useBudget();

  return (
    <div 
      style={{ 
        background: '#e2e8f0', 
        height: '100%', 
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      {/* Full Map View Canvas / SVG representation of street map */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '210px', overflow: 'hidden' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
          {/* Base ground */}
          <rect width="100%" height="100%" fill="#e8ecf2" />

          {/* Roads */}
          <path d="M-20,120 L420,170" stroke="#cbd5e1" strokeWidth="48" fill="none" />
          <path d="M-20,120 L420,170" stroke="#ffffff" strokeWidth="38" fill="none" />

          <path d="M-20,340 L420,230" stroke="#cbd5e1" strokeWidth="44" fill="none" />
          <path d="M-20,340 L420,230" stroke="#ffffff" strokeWidth="34" fill="none" />

          <path d="M380,-20 L230,520" stroke="#cbd5e1" strokeWidth="50" fill="none" />
          <path d="M380,-20 L230,520" stroke="#ffffff" strokeWidth="40" fill="none" />

          <path d="M90,-20 L-20,400" stroke="#cbd5e1" strokeWidth="30" fill="none" />
          <path d="M90,-20 L-20,400" stroke="#ffffff" strokeWidth="22" fill="none" />

          {/* 3D Isometric Buildings */}
          {/* Building 1: Kost H. Erwin */}
          <g transform="translate(40, 40)">
            <polygon points="0,0 80,-15 130,10 50,25" fill="#f1f5f9" />
            <polygon points="50,25 130,10 130,40 50,55" fill="#cbd5e1" />
            <polygon points="0,0 50,25 50,55 0,30" fill="#94a3b8" />
            <rect x="5" y="-12" width="80" height="18" rx="9" fill="#ffffff" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.1))" />
            <text x="14" y="0" fontSize="9" fontWeight="700" fill="#0f172a">Kost H. Erwin</text>
          </g>

          {/* Building 2: Kosan Putri */}
          <g transform="translate(240, 30)">
            <polygon points="0,0 90,-10 110,30 20,40" fill="#f8fafc" />
            <polygon points="20,40 110,30 110,60 20,70" fill="#cbd5e1" />
            <polygon points="0,0 20,40 20,70 0,30" fill="#94a3b8" />
            <rect x="15" y="8" width="75" height="18" rx="9" fill="#ffffff" filter="drop-shadow(0 1px 3px rgba(0,0,0,0.1))" />
            <text x="24" y="20" fontSize="9" fontWeight="700" fill="#0f172a">Kosan Putri</text>
          </g>

          {/* Building 3: Apartment Yulia */}
          <g transform="translate(140, 160)">
            <polygon points="0,0 70,-10 90,20 20,30" fill="#ffffff" />
            <polygon points="20,30 90,20 90,50 20,60" fill="#cbd5e1" />
            <polygon points="0,0 20,30 20,60 0,30" fill="#94a3b8" />
            <rect x="2" y="-10" width="82" height="16" rx="8" fill="#ffffff" />
            <text x="10" y="2" fontSize="8.5" fontWeight="700" fill="#0f172a">Apartment Yulia</text>
          </g>

          {/* Building 4: PENATOE Laundry */}
          <g transform="translate(130, 260)">
            <polygon points="0,0 90,-15 120,40 30,55" fill="#f8fafc" />
            <polygon points="30,55 120,40 120,80 30,95" fill="#cbd5e1" />
            <polygon points="0,0 30,55 30,95 0,40" fill="#94a3b8" />
            <text x="40" y="22" fontSize="9.5" fontWeight="800" fill="#334155">PENATOE</text>
            <text x="40" y="34" fontSize="8" fontWeight="600" fill="#64748b">laundry service</text>
          </g>

          {/* Building 5: Lower Dehakidz */}
          <g transform="translate(140, 420)">
            <polygon points="0,0 100,-15 130,30 30,45" fill="#f8fafc" />
            <polygon points="30,45 130,30 130,60 30,75" fill="#cbd5e1" />
            <text x="45" y="15" fontSize="8.5" fontWeight="700" fill="#334155">Dehakidz</text>
          </g>

          {/* Green Route Dotted Trajectory */}
          <path 
            d="M-20,135 Q100,150 195,160" 
            stroke="#00aa13" 
            strokeWidth="5" 
            strokeDasharray="4 6" 
            fill="none" 
          />
        </svg>

        {/* Pickup Pin at (195, 160) */}
        <div 
          style={{ 
            position: 'absolute', 
            top: '32%', 
            left: '48%', 
            transform: 'translate(-50%, -50%)',
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center' 
          }}
        >
          {/* Outer Ring & Arrow */}
          <div 
            style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '50%', 
              background: '#00aa13', 
              border: '3px solid #ffffff',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(0, 170, 19, 0.4)'
            }}
          >
            <ArrowUp size={24} color="#ffffff" strokeWidth={3} />
          </div>
          {/* Target Base Dot */}
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00aa13', border: '2px solid #ffffff', marginTop: '2px' }} />
        </div>

        {/* Floating Back Arrow */}
        <button 
          onClick={() => goToScreen('goride_1')}
          style={{ 
            position: 'absolute', 
            bottom: '16px', 
            left: '16px', 
            width: '42px', 
            height: '42px', 
            borderRadius: '50%', 
            background: '#ffffff', 
            border: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <ArrowLeft size={20} color="#0f172a" />
        </button>

        {/* Floating Re-center Target Button */}
        <button 
          style={{ 
            position: 'absolute', 
            bottom: '16px', 
            right: '16px', 
            width: '42px', 
            height: '42px', 
            borderRadius: '50%', 
            background: '#ffffff', 
            border: 'none', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <Crosshair size={20} color="#0f172a" />
        </button>
      </div>

      {/* Spacer to push sheet down */}
      <div style={{ flex: 1 }} />

      {/* Bottom Sheet Modal */}
      <div 
        style={{ 
          background: '#ffffff', 
          borderTopLeftRadius: '24px', 
          borderTopRightRadius: '24px', 
          padding: '18px 16px 20px',
          boxShadow: '0 -6px 24px rgba(0,0,0,0.12)',
          position: 'relative',
          zIndex: 20
        }}
      >
        {/* Header: Title + Edit Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{ fontSize: '16.5px', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.3px' }}>
            Cek lagi titik jemput di peta
          </span>
          <button 
            style={{ 
              background: '#ffffff', 
              border: '1.5px solid #00aa13', 
              borderRadius: '999px', 
              padding: '4px 16px', 
              fontSize: '12px', 
              fontWeight: 800, 
              color: '#00aa13', 
              cursor: 'pointer' 
            }}
          >
            Edit
          </button>
        </div>

        {/* Location Card ("Kos Panros") */}
        <div 
          style={{ 
            background: '#ecfdf5', 
            borderRadius: '16px', 
            padding: '12px 14px', 
            border: '1px solid #a7f3d0',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ maxWidth: '85%' }}>
            {/* Pill: Sering di sini */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                background: '#0284c7', 
                borderRadius: '999px', 
                padding: '2px 8px', 
                color: '#ffffff', 
                fontSize: '9.5px', 
                fontWeight: 800, 
                marginBottom: '6px' 
              }}
            >
              Sering di sini
            </div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginBottom: '2px' }}>
              Kos Daniel
            </div>
            <div style={{ fontSize: '11px', color: '#475569', lineHeight: 1.35 }}>
              Jl. Pemuda No. 28, Rawamangun, Pulo Gadung, Jakarta Timur
            </div>
          </div>

          <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #cbd5e1', cursor: 'pointer' }}>
            <FileEdit size={16} color="#0f172a" />
          </div>
        </div>

        {/* Big Green Confirm Button */}
        <button 
          onClick={() => goToScreen('goride_3')}
          style={{ 
            width: '100%', 
            background: '#00aa13', 
            border: 'none', 
            borderRadius: '999px', 
            padding: '13px 0', 
            fontSize: '14.5px', 
            fontWeight: 800, 
            color: '#ffffff', 
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 170, 19, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Konfirmasi titik jemput
        </button>
      </div>
    </div>
  );
};

export default GoRide2Page;
